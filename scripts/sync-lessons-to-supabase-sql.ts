import { readFileSync, readdirSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { slugify } from '../src/lib/utils/slugify';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Parse frontmatter from markdown
function parseFrontmatter(content: string): { frontmatter: Record<string, any>; body: string } {
	const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
	const match = content.match(frontmatterRegex);
	
	if (!match) {
		return { frontmatter: {}, body: content };
	}
	
	const frontmatterStr = match[1];
	const body = match[2];
	
	const frontmatter: Record<string, any> = {};
	
	for (const line of frontmatterStr.split('\n')) {
		const colonIndex = line.indexOf(':');
		if (colonIndex === -1) continue;
		
		const key = line.substring(0, colonIndex).trim();
		let value: any = line.substring(colonIndex + 1).trim();
		
		// Remove quotes
		if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
			value = value.slice(1, -1);
		}
		
		// Parse arrays
		if (value.startsWith('[') && value.endsWith(']')) {
			value = value.slice(1, -1).split(',').map(v => {
				const trimmed = v.trim();
				if (trimmed.startsWith('"') && trimmed.endsWith('"')) {
					return trimmed.slice(1, -1);
				}
				return parseInt(trimmed) || trimmed;
			});
		}
		
		// Parse numbers
		if (!isNaN(Number(value)) && value !== '') {
			value = Number(value);
		}
		
		frontmatter[key] = value;
	}
	
	return { frontmatter, body };
}

// Map art form to Supabase format
function normalizeArtForm(artForm: string, subject?: string): string {
	const artFormMap: Record<string, string> = {
		'Art': 'Art',
		'Visual Art': 'Art',
		'Creative Writing': 'Creative Writing',
		'Dance': 'Dance/Movement',
		'Dance/Movement': 'Dance/Movement',
		'Drama': 'Drama',
		'Music': 'Music',
		'Musical Exploration': 'Musical Exploration'
	};
	
	return artFormMap[artForm || subject || ''] || 'Musical Exploration';
}

// Parse duration string to min/max
function parseDuration(duration: string): { min: number | null; max: number | null } {
	if (!duration) return { min: null, max: null };
	
	const rangeMatch = duration.match(/(\d+)-(\d+)/);
	if (rangeMatch) {
		return {
			min: parseInt(rangeMatch[1]),
			max: parseInt(rangeMatch[2])
		};
	}
	
	const singleMatch = duration.match(/(\d+)/);
	if (singleMatch) {
		const num = parseInt(singleMatch[1]);
		return { min: num, max: num };
	}
	
	return { min: null, max: null };
}

// Escape SQL string
function escapeSql(str: string): string {
	return str.replace(/'/g, "''");
}

async function generateSyncSQL() {
	console.log('🔄 Generating SQL to sync lessons from markdown files to Supabase...\n');
	
	// Read all markdown files
	const lessonsDir = join(__dirname, '../lessons');
	const files = readdirSync(lessonsDir).filter(f => f.endsWith('.md'));
	
	console.log(`Found ${files.length} markdown files\n`);
	
	// Parse all markdown files
	const markdownLessons = files.map(file => {
		const filePath = join(lessonsDir, file);
		const content = readFileSync(filePath, 'utf-8');
		const { frontmatter } = parseFrontmatter(content);
		
		const title = frontmatter.title || 'Untitled';
		const slug = slugify(title);
		
		return {
			filename: file,
			title,
			slug,
			artForm: normalizeArtForm(frontmatter.artForm, frontmatter.subject),
			globalGoal: frontmatter.globalGoal || 0,
			gradeLevels: frontmatter.gradeLevels || [],
			duration: frontmatter.duration || '',
			frontmatter
		};
	}).filter(l => l.globalGoal > 0); // Filter out invalid goals
	
	// Generate SQL
	let sql = `-- SQL to sync missing lessons from markdown files to Supabase
-- Generated: ${new Date().toISOString()}
-- Total markdown files: ${markdownLessons.length}

-- First, get goal_id mappings (run this to see the mapping)
SELECT id, goal_number FROM edu_goals ORDER BY goal_number;

-- Then insert missing lessons
-- Note: You'll need to replace {GOAL_ID_X} with actual goal IDs from the query above

INSERT INTO edu_lessons (goal_id, lesson_number, title, art_form, duration_min, duration_max, grade_level, is_approved)
VALUES
`;

	// Group by goal to assign lesson numbers
	const lessonsByGoal = new Map<number, typeof markdownLessons>();
	
	for (const lesson of markdownLessons) {
		if (!lessonsByGoal.has(lesson.globalGoal)) {
			lessonsByGoal.set(lesson.globalGoal, []);
		}
		lessonsByGoal.get(lesson.globalGoal)!.push(lesson);
	}
	
	const values: string[] = [];
	
	for (const [goalNumber, lessons] of lessonsByGoal.entries()) {
		lessons.forEach((lesson, index) => {
			const { min, max } = parseDuration(lesson.duration);
			const gradeLevel = lesson.gradeLevels.length > 0
				? lesson.gradeLevels.map(g => g.toString()).join(',')
				: null;
			
			const gradeLevelSql = gradeLevel ? `'${escapeSql(gradeLevel)}'` : 'NULL';
			const minSql = min !== null ? min.toString() : 'NULL';
			const maxSql = max !== null ? max.toString() : 'NULL';
			
			values.push(
				`  ((SELECT id FROM edu_goals WHERE goal_number = ${goalNumber}), ${index + 1}, '${escapeSql(lesson.title)}', '${escapeSql(lesson.artForm)}', ${minSql}, ${maxSql}, ${gradeLevelSql}, true)`
			);
		});
	}
	
	sql += values.join(',\n');
	sql += `\nON CONFLICT DO NOTHING;\n`;
	
	// Write SQL to file
	const sqlPath = join(__dirname, '../sync-lessons.sql');
	writeFileSync(sqlPath, sql, 'utf-8');
	
	console.log(`✅ Generated SQL file: ${sqlPath}`);
	console.log(`\n📊 Summary:`);
	console.log(`  Total lessons to insert: ${values.length}`);
	console.log(`  Goals covered: ${lessonsByGoal.size}`);
	console.log(`\n💡 Next steps:`);
	console.log(`  1. Review the SQL file: ${sqlPath}`);
	console.log(`  2. Run it via MCP Supabase tools or the Supabase dashboard`);
	console.log(`  3. Or use the MCP apply_migration tool\n`);
}

generateSyncSQL().catch(console.error);


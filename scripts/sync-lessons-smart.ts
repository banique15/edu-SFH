import { readFileSync, readdirSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { slugify } from '../src/lib/utils/slugify';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// [Same helper functions as before]
function parseFrontmatter(content: string): { frontmatter: Record<string, any>; body: string } {
	const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
	const match = content.match(frontmatterRegex);
	if (!match) return { frontmatter: {}, body: content };
	
	const frontmatterStr = match[1];
	const body = match[2];
	const frontmatter: Record<string, any> = {};
	
	for (const line of frontmatterStr.split('\n')) {
		const colonIndex = line.indexOf(':');
		if (colonIndex === -1) continue;
		const key = line.substring(0, colonIndex).trim();
		let value: any = line.substring(colonIndex + 1).trim();
		if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
			value = value.slice(1, -1);
		}
		if (value.startsWith('[') && value.endsWith(']')) {
			value = value.slice(1, -1).split(',').map(v => {
				const trimmed = v.trim();
				if (trimmed.startsWith('"') && trimmed.endsWith('"')) return trimmed.slice(1, -1);
				return parseInt(trimmed) || trimmed;
			});
		}
		if (!isNaN(Number(value)) && value !== '') value = Number(value);
		frontmatter[key] = value;
	}
	return { frontmatter, body };
}

function normalizeArtForm(artForm: string, subject?: string): string {
	const map: Record<string, string> = {
		'Art': 'Art', 'Visual Art': 'Art', 'Creative Writing': 'Creative Writing',
		'Dance': 'Dance/Movement', 'Dance/Movement': 'Dance/Movement',
		'Drama': 'Drama', 'Music': 'Music', 'Musical Exploration': 'Musical Exploration'
	};
	return map[artForm || subject || ''] || 'Musical Exploration';
}

function parseDuration(duration: string): { min: number | null; max: number | null } {
	if (!duration) return { min: null, max: null };
	const rangeMatch = duration.match(/(\d+)-(\d+)/);
	if (rangeMatch) return { min: parseInt(rangeMatch[1]), max: parseInt(rangeMatch[2]) };
	const singleMatch = duration.match(/(\d+)/);
	if (singleMatch) { const num = parseInt(singleMatch[1]); return { min: num, max: num }; }
	return { min: null, max: null };
}

function escapeSql(str: string): string {
	return str.replace(/'/g, "''");
}

async function generateSmartSQL() {
	const lessonsDir = join(__dirname, '../lessons');
	const files = readdirSync(lessonsDir).filter(f => f.endsWith('.md'));
	
	const markdownLessons = files.map(file => {
		const content = readFileSync(join(lessonsDir, file), 'utf-8');
		const { frontmatter } = parseFrontmatter(content);
		return {
			title: frontmatter.title || 'Untitled',
			artForm: normalizeArtForm(frontmatter.artForm, frontmatter.subject),
			globalGoal: frontmatter.globalGoal || 0,
			gradeLevels: frontmatter.gradeLevels || [],
			duration: frontmatter.duration || '',
		};
	}).filter(l => l.globalGoal > 0);
	
	// Group by goal
	const byGoal = new Map<number, typeof markdownLessons>();
	for (const lesson of markdownLessons) {
		if (!byGoal.has(lesson.globalGoal)) byGoal.set(lesson.globalGoal, []);
		byGoal.get(lesson.globalGoal)!.push(lesson);
	}
	
	// Generate SQL that respects the 20 lesson limit per goal
	let sql = `-- Insert missing lessons, respecting 20 lesson limit per goal
-- This will only insert lessons that don't already exist and won't exceed the limit

WITH existing_counts AS (
  SELECT goal_id, COUNT(*) as current_count
  FROM edu_lessons
  GROUP BY goal_id
),
existing_max AS (
  SELECT goal_id, COALESCE(MAX(lesson_number), 0) as max_num
  FROM edu_lessons
  GROUP BY goal_id
),
new_lessons AS (
  SELECT 
    g.id as goal_id,
    COALESCE(em.max_num, 0) + ROW_NUMBER() OVER (PARTITION BY g.id ORDER BY l.title) as lesson_number,
    l.title,
    l.art_form,
    l.duration_min,
    l.duration_max,
    l.grade_level,
    true as is_approved,
    ec.current_count
  FROM (VALUES\n`;
	
	const values: string[] = [];
	for (const [goalNum, lessons] of byGoal.entries()) {
		for (const lesson of lessons) {
			const { min, max } = parseDuration(lesson.duration);
			const gradeLevel = lesson.gradeLevels.length > 0 ? lesson.gradeLevels.map(g => g.toString()).join(',') : null;
			const gradeLevelSql = gradeLevel ? `'${escapeSql(gradeLevel)}'` : 'NULL';
			const minSql = min !== null ? min.toString() : 'NULL';
			const maxSql = max !== null ? max.toString() : 'NULL';
			values.push(`    (${goalNum}, '${escapeSql(lesson.title)}', '${escapeSql(lesson.artForm)}', ${minSql}, ${maxSql}, ${gradeLevelSql})`);
		}
	}
	
	sql += values.join(',\n');
	sql += `\n  ) AS l(goal_number, title, art_form, duration_min, duration_max, grade_level)
  JOIN edu_goals g ON g.goal_number = l.goal_number
  LEFT JOIN existing_max em ON em.goal_id = g.id
  LEFT JOIN existing_counts ec ON ec.goal_id = g.id
)
INSERT INTO edu_lessons (goal_id, lesson_number, title, art_form, duration_min, duration_max, grade_level, is_approved)
SELECT goal_id, lesson_number, title, art_form, duration_min, duration_max, grade_level, is_approved
FROM new_lessons
WHERE NOT EXISTS (
  SELECT 1 FROM edu_lessons WHERE edu_lessons.title = new_lessons.title
)
AND (current_count IS NULL OR current_count + (SELECT COUNT(*) FROM new_lessons nl2 WHERE nl2.goal_id = new_lessons.goal_id AND nl2.title <= new_lessons.title AND NOT EXISTS (SELECT 1 FROM edu_lessons WHERE edu_lessons.title = nl2.title)) <= 20)
ORDER BY goal_id, lesson_number;\n`;
	
	writeFileSync(join(__dirname, '../sync-lessons-smart.sql'), sql, 'utf-8');
	console.log('✅ Generated sync-lessons-smart.sql');
	console.log(`   Total lessons: ${values.length}`);
}

generateSmartSQL().catch(console.error);


import { readFileSync, readdirSync } from 'fs';
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

async function syncLessonsToSupabase() {
	console.log('🔄 Syncing lessons from markdown files to Supabase...\n');
	
	// Read all markdown files
	const lessonsDir = join(__dirname, '../lessons');
	const files = readdirSync(lessonsDir).filter(f => f.endsWith('.md'));
	
	console.log(`Found ${files.length} markdown files\n`);
	
	// Get existing lessons from Supabase using MCP
	const existingLessonsResult = await fetch('https://api.supabase.com/v1/projects', {
		method: 'GET',
		headers: { 'Content-Type': 'application/json' }
	}).catch(() => null);
	
	// Use direct SQL execution via MCP
	// We'll need to use the execute_sql MCP tool, but since we can't call it directly from a script,
	// we'll create a script that outputs SQL that can be run via MCP or the Supabase dashboard
	
	console.log('📝 Generating SQL insert statements...\n');
	console.log('Note: This script will output SQL that you can run via MCP Supabase tools or the Supabase dashboard\n');
	
	const goalMap = new Map((goals || []).map(g => [g.goal_number, g.id]));
	
	// Create a set of existing lesson slugs for quick lookup
	const existingSlugs = new Set(
		(existingLessons || []).map(l => slugify(l.title))
	);
	
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
	
	// Find lessons that don't exist in Supabase
	const missingLessons = markdownLessons.filter(l => !existingSlugs.has(l.slug));
	
	console.log(`📊 Analysis:`);
	console.log(`  Total markdown files: ${markdownLessons.length}`);
	console.log(`  Existing in Supabase: ${existingLessons?.length || 0}`);
	console.log(`  Missing from Supabase: ${missingLessons.length}\n`);
	
	if (missingLessons.length === 0) {
		console.log('✅ All lessons are already in Supabase!');
		return;
	}
	
	// Group missing lessons by goal_id to assign lesson_numbers
	const lessonsByGoal = new Map<number, typeof missingLessons>();
	
	for (const lesson of missingLessons) {
		const goalId = goalMap.get(lesson.globalGoal);
		if (!goalId) {
			console.warn(`⚠️  Warning: Goal ${lesson.globalGoal} not found in Supabase for lesson "${lesson.title}"`);
			continue;
		}
		
		if (!lessonsByGoal.has(goalId)) {
			lessonsByGoal.set(goalId, []);
		}
		lessonsByGoal.get(goalId)!.push(lesson);
	}
	
	// Get current max lesson_number per goal
	const maxLessonNumbers = new Map<number, number>();
	
	for (const goalId of lessonsByGoal.keys()) {
		const { data: goalLessons } = await supabase
			.from('edu_lessons')
			.select('lesson_number')
			.eq('goal_id', goalId)
			.order('lesson_number', { ascending: false })
			.limit(1);
		
		const maxNumber = goalLessons && goalLessons.length > 0 
			? goalLessons[0].lesson_number 
			: 0;
		
		maxLessonNumbers.set(goalId, maxNumber);
	}
	
	// Prepare lessons for insertion
	const lessonsToInsert: Array<{
		goal_id: number;
		lesson_number: number;
		title: string;
		art_form: string;
		duration_min: number | null;
		duration_max: number | null;
		grade_level: string | null;
		is_approved: boolean;
	}> = [];
	
	for (const [goalId, lessons] of lessonsByGoal.entries()) {
		let lessonNumber = maxLessonNumbers.get(goalId) || 0;
		
		for (const lesson of lessons) {
			lessonNumber++;
			const { min, max } = parseDuration(lesson.duration);
			const gradeLevel = lesson.gradeLevels.length > 0
				? lesson.gradeLevels.map(g => g.toString()).join(',')
				: null;
			
			lessonsToInsert.push({
				goal_id: goalId,
				lesson_number: lessonNumber,
				title: lesson.title,
				art_form: lesson.artForm,
				duration_min: min,
				duration_max: max,
				grade_level: gradeLevel,
				is_approved: true
			});
		}
	}
	
	console.log(`📝 Preparing to insert ${lessonsToInsert.length} lessons...\n`);
	
	// Insert lessons in batches
	const batchSize = 50;
	let inserted = 0;
	let errors = 0;
	
	for (let i = 0; i < lessonsToInsert.length; i += batchSize) {
		const batch = lessonsToInsert.slice(i, i + batchSize);
		
		const { data, error } = await supabase
			.from('edu_lessons')
			.insert(batch)
			.select('id, title');
		
		if (error) {
			console.error(`❌ Error inserting batch ${Math.floor(i / batchSize) + 1}:`, error);
			errors += batch.length;
		} else {
			inserted += data?.length || 0;
			console.log(`✅ Inserted batch ${Math.floor(i / batchSize) + 1}: ${data?.length || 0} lessons`);
		}
	}
	
	console.log(`\n📊 Summary:`);
	console.log(`  ✅ Successfully inserted: ${inserted} lessons`);
	if (errors > 0) {
		console.log(`  ❌ Errors: ${errors} lessons`);
	}
	console.log(`\n🎉 Sync complete!`);
}

// Run the sync
syncLessonsToSupabase().catch(console.error);


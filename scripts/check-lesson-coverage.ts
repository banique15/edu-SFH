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

// Get all lessons from markdown files
const lessonsDir = join(__dirname, '../lessons');
const files = readdirSync(lessonsDir).filter(f => f.endsWith('.md'));

const markdownLessons = files.map(file => {
	const filePath = join(lessonsDir, file);
	const content = readFileSync(filePath, 'utf-8');
	const { frontmatter } = parseFrontmatter(content);
	
	return {
		filename: file,
		title: frontmatter.title || 'Untitled',
		slug: slugify(frontmatter.title || file.replace('.md', '')),
		artForm: frontmatter.artForm || frontmatter.subject || '',
		globalGoal: frontmatter.globalGoal || 0,
		gradeLevels: frontmatter.gradeLevels || [],
		duration: frontmatter.duration || ''
	};
});

console.log(`\n📊 Lesson Coverage Analysis\n`);
console.log(`Markdown files: ${markdownLessons.length}`);
console.log(`Supabase lessons: 109 (from query)`);
console.log(`Missing in Supabase: ~${markdownLessons.length - 109}\n`);

// Group by goal
const byGoal: Record<number, typeof markdownLessons> = {};
markdownLessons.forEach(lesson => {
	if (!byGoal[lesson.globalGoal]) {
		byGoal[lesson.globalGoal] = [];
	}
	byGoal[lesson.globalGoal].push(lesson);
});

console.log('Lessons by Goal:');
Object.keys(byGoal).sort((a, b) => Number(a) - Number(b)).forEach(goalNum => {
	const lessons = byGoal[Number(goalNum)];
	console.log(`  Goal ${goalNum}: ${lessons.length} lessons`);
});

// Group by art form
const byArtForm: Record<string, typeof markdownLessons> = {};
markdownLessons.forEach(lesson => {
	const artForm = lesson.artForm || 'Unknown';
	if (!byArtForm[artForm]) {
		byArtForm[artForm] = [];
	}
	byArtForm[artForm].push(lesson);
});

console.log('\nLessons by Art Form:');
Object.keys(byArtForm).sort().forEach(artForm => {
	const lessons = byArtForm[artForm];
	console.log(`  ${artForm}: ${lessons.length} lessons`);
});

// Show sample of lessons that might be missing
console.log('\n📝 Sample of markdown lessons (first 10):');
markdownLessons.slice(0, 10).forEach(lesson => {
	console.log(`  - ${lesson.title} (Goal ${lesson.globalGoal}, ${lesson.artForm})`);
});

console.log('\n⚠️  Note: These lessons exist as markdown files but may not be in Supabase.');
console.log('   The Svelte components will work, but they won\'t be accessible via the normal route');
console.log('   unless they exist in Supabase with matching slugs.\n');


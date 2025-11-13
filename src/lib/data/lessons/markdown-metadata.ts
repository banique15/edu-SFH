import { readFileSync, existsSync } from 'fs';
import { join } from 'path';
import { slugify } from '$lib/utils/slugify';

/**
 * Parse frontmatter from markdown file
 */
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

/**
 * Get lesson metadata from markdown file by slug
 * Returns null if file not found
 */
export function getLessonMetadataFromMarkdown(slug: string): {
	title: string;
	artForm: string;
	globalGoal: number;
	gradeLevels: number[];
	duration: string;
} | null {
	// Try to find the markdown file
	// The slug might match the filename, or we need to search
	const lessonsDir = join(process.cwd(), 'apps/edu/lessons');
	
	// First, try direct match: slug.md
	let filePath = join(lessonsDir, `${slug}.md`);
	if (!existsSync(filePath)) {
		// Try with goal prefix
		const files = require('fs').readdirSync(lessonsDir);
		const matchingFile = files.find((f: string) => {
			if (!f.endsWith('.md')) return false;
			const fileSlug = slugify(f.replace('.md', '').replace(/^goal\d+-/, ''));
			return fileSlug === slug || f.replace('.md', '') === slug;
		});
		
		if (matchingFile) {
			filePath = join(lessonsDir, matchingFile);
		} else {
			return null;
		}
	}
	
	try {
		const content = readFileSync(filePath, 'utf-8');
		const { frontmatter } = parseFrontmatter(content);
		
		// Map art form to match Supabase format
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
		
		const artForm = artFormMap[frontmatter.artForm || frontmatter.subject] || 'Musical Exploration';
		
		// Parse duration
		let durationMin: number | null = null;
		let durationMax: number | null = null;
		if (frontmatter.duration) {
			const durationMatch = frontmatter.duration.match(/(\d+)-(\d+)/);
			if (durationMatch) {
				durationMin = parseInt(durationMatch[1]);
				durationMax = parseInt(durationMatch[2]);
			} else {
				const singleMatch = frontmatter.duration.match(/(\d+)/);
				if (singleMatch) {
					durationMin = parseInt(singleMatch[1]);
				}
			}
		}
		
		// Get goal_id from goal number (we'll need to query Supabase for this)
		const globalGoal = frontmatter.globalGoal || 1;
		
		return {
			title: frontmatter.title || slug.replace(/-/g, ' ').replace(/\b\w/g, (l: string) => l.toUpperCase()),
			artForm,
			globalGoal,
			gradeLevels: frontmatter.gradeLevels || [],
			duration: frontmatter.duration || ''
		};
	} catch (error) {
		console.error(`Error reading markdown file for slug "${slug}":`, error);
		return null;
	}
}


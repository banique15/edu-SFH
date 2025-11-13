import { readFileSync, writeFileSync, readdirSync, existsSync, mkdirSync } from 'fs';
import { join, dirname, basename, extname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Simple markdown to HTML converter (basic implementation)
function markdownToHtml(markdown: string): string {
	if (!markdown || !markdown.trim()) return '';
	
	let html = markdown;
	
	// Escape HTML entities first
	html = html.replace(/&/g, '&amp;');
	html = html.replace(/</g, '&lt;');
	html = html.replace(/>/g, '&gt;');
	
	// Convert links (do this before other conversions)
	html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');
	
	// Convert bold (must be before italic)
	html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
	html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
	
	// Convert italic (but not if it's part of bold)
	html = html.replace(/(?<!\*)\*([^*]+?)\*(?!\*)/g, '<em>$1</em>');
	
	// Convert headers (must be before paragraph conversion)
	html = html.replace(/^### (.*)$/gim, '<h3>$1</h3>');
	html = html.replace(/^## (.*)$/gim, '<h2>$1</h2>');
	html = html.replace(/^# (.*)$/gim, '<h1>$1</h1>');
	
	// Convert lists - handle bullet points
	const lines = html.split('\n');
	const processedLines: string[] = [];
	let inList = false;
	
	for (let i = 0; i < lines.length; i++) {
		const line = lines[i].trim();
		const isListItem = /^[\*\-\+]\s+/.test(line);
		
		if (isListItem) {
			if (!inList) {
				processedLines.push('<ul>');
				inList = true;
			}
			const listContent = line.replace(/^[\*\-\+]\s+/, '');
			processedLines.push(`<li>${listContent}</li>`);
		} else {
			if (inList) {
				processedLines.push('</ul>');
				inList = false;
			}
			if (line) {
				processedLines.push(line);
			}
		}
	}
	
	if (inList) {
		processedLines.push('</ul>');
	}
	
	html = processedLines.join('\n');
	
	// Convert double newlines to paragraph breaks
	html = html.split('\n\n').map(block => {
		const trimmed = block.trim();
		if (!trimmed) return '';
		if (trimmed.startsWith('<')) return trimmed; // Already HTML
		return `<p>${trimmed}</p>`;
	}).join('\n');
	
	// Convert single newlines to <br> (but not inside lists or other HTML)
	html = html.replace(/(?<!<\/li>)\n(?!<[ul])/g, '<br>');
	
	// Clean up
	html = html.replace(/<p><\/p>/g, '');
	html = html.replace(/<p><br><\/p>/g, '<p></p>');
	html = html.replace(/\n+/g, '\n');
	
	return html.trim();
}

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

// Parse materials section
function parseMaterials(content: string): Array<{ name: string; description?: string; isOptional: boolean }> {
	const materials: Array<{ name: string; description?: string; isOptional: boolean }> = [];
	
	// Find materials section
	const materialsMatch = content.match(/\*\*Materials?\*\*\s*\n([\s\S]*?)(?=\n\*\*|$)/i);
	if (!materialsMatch) return materials;
	
	const materialsText = materialsMatch[1];
	const lines = materialsText.split('\n').map(l => l.trim()).filter(l => l);
	
	for (const line of lines) {
		if (!line) continue;
		
		// Check for optional items
		const isOptional = /\[optional\]|\[Optional\]|optional/i.test(line);
		let name = line.replace(/\[optional\]|\[Optional\]/gi, '').trim();
		
		// Remove markdown formatting
		name = name.replace(/\*\*/g, '').replace(/\*/g, '');
		
		// Check for description (after dash or colon)
		let description: string | undefined;
		const descMatch = name.match(/^(.+?)(?:[-:]| - |: )(.+)$/);
		if (descMatch) {
			name = descMatch[1].trim();
			description = descMatch[2].trim();
		}
		
		if (name) {
			materials.push({ name, description, isOptional });
		}
	}
	
	return materials;
}

// Parse sections from markdown body
function parseSections(body: string): Array<{ title: string; content: string; type: string }> {
	const sections: Array<{ title: string; content: string; type: string }> = [];
	
	// Remove materials section from body if present
	body = body.replace(/\*\*Materials?\*\*\s*\n[\s\S]*?(?=\n\*\*|$)/i, '');
	
	// Split by **Section Title** pattern (most common)
	const sectionRegex = /\*\*([^*]+)\*\*\s*\n([\s\S]*?)(?=\n\*\*|$)/g;
	let match;
	const processedSections = new Set<string>();
	
	while ((match = sectionRegex.exec(body)) !== null) {
		const title = match[1].trim();
		let content = match[2].trim();
		
		// Skip if already processed
		if (processedSections.has(title.toLowerCase())) continue;
		processedSections.add(title.toLowerCase());
		
		// Determine section type
		let type = 'custom';
		const titleLower = title.toLowerCase();
		
		if (titleLower.includes('introduction') || titleLower === 'introduction') {
			type = 'introduction';
		} else if (titleLower.includes('discussion')) {
			type = 'discussion';
		} else if (titleLower.includes('reflection') || titleLower.includes('summary')) {
			type = 'reflection';
		} else if (titleLower.includes('assessment')) {
			type = 'assessment';
		} else if (titleLower.includes('closing') && (titleLower.includes('activity') || titleLower.includes('options'))) {
			type = 'closing';
		} else if (titleLower.includes('personal connection')) {
			type = 'personal-connection';
		}
		
		if (content) {
			sections.push({ title, content, type });
		}
	}
	
	// Also check for sections with ## headers
	const headerRegex = /^##+\s+(.+)$/gm;
	let headerMatch;
	const headerSections: Array<{ title: string; start: number; end: number }> = [];
	
	while ((headerMatch = headerRegex.exec(body)) !== null) {
		const title = headerMatch[1].replace(/\*\*/g, '').trim();
		const start = headerMatch.index;
		const end = body.length;
		
		// Find next header or end
		const nextHeader = body.substring(start + headerMatch[0].length).search(/^##+\s+/m);
		const actualEnd = nextHeader > 0 ? start + headerMatch[0].length + nextHeader : end;
		
		headerSections.push({ title, start, end: actualEnd });
	}
	
	// Process header sections
	for (let i = 0; i < headerSections.length; i++) {
		const section = headerSections[i];
		const nextSection = headerSections[i + 1];
		const content = body.substring(section.start + body.substring(section.start).indexOf('\n'), nextSection ? nextSection.start : section.end).trim();
		
		if (!content) continue;
		
		// Check if already processed
		if (processedSections.has(section.title.toLowerCase())) continue;
		processedSections.add(section.title.toLowerCase());
		
		// Determine section type
		let type = 'custom';
		const titleLower = section.title.toLowerCase();
		
		if (titleLower.includes('introduction')) {
			type = 'introduction';
		} else if (titleLower.includes('discussion')) {
			type = 'discussion';
		} else if (titleLower.includes('reflection') || titleLower.includes('summary')) {
			type = 'reflection';
		} else if (titleLower.includes('assessment')) {
			type = 'assessment';
		} else if (titleLower.includes('closing') && (titleLower.includes('activity') || titleLower.includes('options'))) {
			type = 'closing';
		} else if (titleLower.includes('personal connection')) {
			type = 'personal-connection';
		}
		
		sections.push({ title: section.title, content, type });
	}
	
	return sections;
}

// Extract discussion prompts
function extractDiscussionPrompts(content: string): string[] {
	const prompts: string[] = [];
	const lines = content.split('\n');
	
	for (const line of lines) {
		const trimmed = line.trim();
		if (trimmed.startsWith('*') && (trimmed.includes('?') || trimmed.includes('Ask'))) {
			prompts.push(trimmed.replace(/^\*\s*/, '').trim());
		}
	}
	
	return prompts;
}

// Extract reflection questions
function extractReflectionQuestions(content: string): string[] {
	const questions: string[] = [];
	const lines = content.split('\n');
	
	for (const line of lines) {
		const trimmed = line.trim();
		if (trimmed.startsWith('*') && trimmed.includes('?')) {
			questions.push(trimmed.replace(/^\*\s*/, '').trim());
		}
	}
	
	return questions;
}

// Extract assessment criteria
function extractAssessmentCriteria(content: string): string[] {
	const criteria: string[] = [];
	const lines = content.split('\n');
	
	for (const line of lines) {
		const trimmed = line.trim();
		if (trimmed.startsWith('*')) {
			criteria.push(trimmed.replace(/^\*\s*/, '').trim());
		}
	}
	
	return criteria;
}

// Generate slug from filename or title
function generateSlug(filename: string, title?: string): string {
	if (title) {
		return title
			.toLowerCase()
			.replace(/[^\w\s-]/g, '')
			.replace(/\s+/g, '-')
			.replace(/-+/g, '-')
			.replace(/^-+|-+$/g, '');
	}
	
	return basename(filename, extname(filename));
}

// Generate Svelte component file
function generateSvelteComponent(
	slug: string,
	frontmatter: Record<string, any>,
	materials: Array<{ name: string; description?: string; isOptional: boolean }>,
	sections: Array<{ title: string; content: string; type: string }>
): string {
	const title = frontmatter.title || 'Untitled Lesson';
	const gradeLevels = frontmatter.gradeLevels || [];
	const duration = frontmatter.duration || '';
	const artForm = frontmatter.artForm || frontmatter.subject || '';
	const globalGoal = frontmatter.globalGoal || 1;
	
	// Build imports
	const imports: string[] = [];
	const components: string[] = [];
	
	// Check which components we need
	const hasMaterials = materials.length > 0;
	const hasIntroduction = sections.some(s => s.type === 'introduction');
	const hasDiscussion = sections.some(s => s.type === 'discussion');
	const hasReflection = sections.some(s => s.type === 'reflection');
	const hasAssessment = sections.some(s => s.type === 'assessment');
	const hasClosing = sections.some(s => s.type === 'closing');
	const hasPersonalConnection = sections.some(s => s.type === 'personal-connection');
	
	if (hasMaterials) {
		imports.push("import MaterialsList from './components/MaterialsList.svelte';");
	}
	if (hasIntroduction) {
		imports.push("import Introduction from './components/Introduction.svelte';");
	}
	if (hasDiscussion) {
		imports.push("import DiscussionPrompts from './components/DiscussionPrompts.svelte';");
	}
	if (hasReflection) {
		imports.push("import ReflectionQuestions from './components/ReflectionQuestions.svelte';");
	}
	if (hasAssessment) {
		imports.push("import AssessmentCriteria from './components/AssessmentCriteria.svelte';");
	}
	if (hasClosing) {
		imports.push("import ClosingActivity from './components/ClosingActivity.svelte';");
	}
	if (hasPersonalConnection) {
		imports.push("import PersonalConnection from './components/PersonalConnection.svelte';");
	}
	
	// Always import CustomSection for any custom sections
	const hasCustomSections = sections.some(s => s.type === 'custom');
	if (hasCustomSections) {
		imports.push("import CustomSection from './components/CustomSection.svelte';");
	}
	
	imports.push("import { getSdgColor } from '$lib/utils/sdg-colors';");
	
	// Build component JSX
	let componentContent = '';
	
	// Add materials
	if (hasMaterials) {
		const materialsArray = materials.map(m => ({
			name: m.name,
			description: m.description,
			isOptional: m.isOptional
		}));
		componentContent += `\n\t<MaterialsList materials={${JSON.stringify(materialsArray)}} {sdgColor} />\n`;
	}
	
	// Add sections
	for (const section of sections) {
		const htmlContent = markdownToHtml(section.content);
		
		switch (section.type) {
			case 'introduction':
				componentContent += `\n\t<Introduction content={${JSON.stringify(htmlContent)}} />\n`;
				break;
			case 'discussion':
				const prompts = extractDiscussionPrompts(section.content);
				if (prompts.length > 0) {
					componentContent += `\n\t<DiscussionPrompts prompts={${JSON.stringify(prompts)}} {sdgColor} />\n`;
				} else {
					componentContent += `\n\t<CustomSection title={${JSON.stringify(section.title)}} content={${JSON.stringify(htmlContent)}} {sdgColor} />\n`;
				}
				break;
			case 'reflection':
				const questions = extractReflectionQuestions(section.content);
				if (questions.length > 0) {
					componentContent += `\n\t<ReflectionQuestions questions={${JSON.stringify(questions)}} {sdgColor} />\n`;
				} else {
					componentContent += `\n\t<CustomSection title={${JSON.stringify(section.title)}} content={${JSON.stringify(htmlContent)}} {sdgColor} />\n`;
				}
				break;
			case 'assessment':
				const criteria = extractAssessmentCriteria(section.content);
				if (criteria.length > 0) {
					componentContent += `\n\t<AssessmentCriteria criteria={${JSON.stringify(criteria)}} {sdgColor} />\n`;
				} else {
					componentContent += `\n\t<CustomSection title={${JSON.stringify(section.title)}} content={${JSON.stringify(htmlContent)}} {sdgColor} />\n`;
				}
				break;
			case 'closing':
				componentContent += `\n\t<ClosingActivity title={${JSON.stringify(section.title)}} content={${JSON.stringify(htmlContent)}} {sdgColor} />\n`;
				break;
			case 'personal-connection':
				componentContent += `\n\t<PersonalConnection content={${JSON.stringify(htmlContent)}} {sdgColor} />\n`;
				break;
			default:
				componentContent += `\n\t<CustomSection title={${JSON.stringify(section.title)}} content={${JSON.stringify(htmlContent)}} {sdgColor} />\n`;
		}
	}
	
	const svelteContent = `<script lang="ts">
	${imports.join('\n\t')}

	interface Props {
		sdgColor?: string;
	}

	let { sdgColor = getSdgColor(${globalGoal}) }: Props = $props();
</script>

<div class="lesson-content">
${componentContent}
</div>
`;
	
	return svelteContent;
}

// Main migration function
function migrateLessons() {
	const lessonsDir = join(__dirname, '../lessons');
	const outputDir = join(__dirname, '../src/lib/lessons');
	const componentsDir = join(outputDir, 'components');
	
	// Ensure output directory exists
	if (!existsSync(outputDir)) {
		mkdirSync(outputDir, { recursive: true });
	}
	if (!existsSync(componentsDir)) {
		mkdirSync(componentsDir, { recursive: true });
	}
	
	// Read all markdown files
	const files = readdirSync(lessonsDir).filter(f => f.endsWith('.md'));
	const lessons: Array<{ slug: string; filename: string }> = [];
	
	console.log(`Found ${files.length} lesson files to migrate...`);
	
	for (const file of files) {
		const filePath = join(lessonsDir, file);
		const content = readFileSync(filePath, 'utf-8');
		
		// Parse frontmatter and body
		const { frontmatter, body } = parseFrontmatter(content);
		
		// Generate slug
		const slug = generateSlug(file, frontmatter.title);
		
		// Parse materials
		const materials = parseMaterials(body);
		
		// Parse sections
		const sections = parseSections(body);
		
		// Generate Svelte component
		const svelteComponent = generateSvelteComponent(slug, frontmatter, materials, sections);
		
		// Write component file
		const componentPath = join(outputDir, `${slug}.svelte`);
		writeFileSync(componentPath, svelteComponent, 'utf-8');
		
		lessons.push({ slug, filename: file });
		
		console.log(`✓ Migrated: ${file} -> ${slug}.svelte`);
	}
	
	// Generate index.ts
	const indexContent = `// Auto-generated index file for lesson components
${lessons.map(l => `export { default as Lesson${l.slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('')} } from './${l.slug}.svelte';`).join('\n')}

// Lesson slug mapping
export const lessonSlugMap: Record<string, string> = {
${lessons.map(l => `\t'${l.slug}': '${l.slug}',`).join('\n')}
};

// Get lesson component by slug
export function getLessonComponent(slug: string) {
	switch (slug) {
${lessons.map(l => `\t\tcase '${l.slug}': return import('./${l.slug}.svelte');`).join('\n')}
		default: return null;
	}
}
`;
	
	const indexPath = join(outputDir, 'index.ts');
	writeFileSync(indexPath, indexContent, 'utf-8');
	
	console.log(`\n✓ Generated index.ts with ${lessons.length} lessons`);
	console.log(`\nMigration complete! Migrated ${lessons.length} lessons.`);
}

// Run migration
migrateLessons();


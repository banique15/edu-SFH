#!/usr/bin/env tsx
/**
 * Script to generate TypeScript lesson files from markdown lesson files
 * 
 * Usage: bun run scripts/generate-lessons.ts
 */

import * as fs from 'fs';
import * as path from 'path';

interface LessonModule {
	goalNumber: number;
	artForm: string;
	gradeLevel: string;
	title: string;
	duration: string;
	content: string;
}

function extractGoalNumber(filename: string): number {
	const match = filename.match(/goal(\d+)-lessons\.md/);
	if (!match) throw new Error(`Cannot extract goal number from ${filename}`);
	return parseInt(match[1], 10);
}

function parseMarkdownFile(filePath: string): LessonModule[] {
	const content = fs.readFileSync(filePath, 'utf-8');
	const goalNumber = extractGoalNumber(path.basename(filePath));
	const modules: LessonModule[] = [];

	// Extract exploration module
	const explorationRegex = /### \*\*([A-Z\s/]+) EXPLORATION\*\*\s+\(([^)]+)\)\s+\(GRADES ([^)]+)\)\s+(.*?)(?=### GRADES|## \*\*Action Planning|$)/s;
	const explorationMatch = content.match(explorationRegex);
	if (explorationMatch) {
		const artForm = explorationMatch[1].trim();
		const duration = explorationMatch[2].trim();
		const gradeLevel = explorationMatch[3].trim();
		const moduleContent = explorationMatch[4].trim();
		
		modules.push({
			goalNumber,
			artForm: artForm === 'ART' ? 'Art' : artForm === 'DANCE/MOVEMENT' ? 'Dance/Movement' : artForm === 'DRAMA' ? 'Drama' : 'Musical Exploration',
			gradeLevel,
			title: `${artForm} Exploration`,
			duration,
			content: moduleContent
		});
	}

	// Extract Grades 5-8 modules
	const grades58Match = content.match(/### GRADES 5-8\s+(.*?)(?=### GRADES 9-12|## \*\*Action Planning|$)/s);
	if (grades58Match) {
		const modules58 = extractModules(grades58Match[1], goalNumber, '5-8');
		modules.push(...modules58);
	}

	// Extract Grades 9-12 modules
	const grades912Match = content.match(/### GRADES 9-12\s+(.*?)(?=## \*\*Action Planning|$)/s);
	if (grades912Match) {
		const modules912 = extractModules(grades912Match[1], goalNumber, '9-12');
		modules.push(...modules912);
	}

	return modules;
}

function extractModules(content: string, goalNumber: number, gradeLevel: string): LessonModule[] {
	const modules: LessonModule[] = [];
	const moduleRegex = /#### \*\*([A-Z\s/]+)\*\*\s+(.*?)(?=#### \*\*|$)/gs;
	
	let match;
	while ((match = moduleRegex.exec(content)) !== null) {
		const artForm = match[1].trim();
		const moduleContent = match[2].trim();
		
		// Extract title and duration from first line
		const firstLineMatch = moduleContent.match(/^(.+?)\s+\(([^)]+)\)/);
		const title = firstLineMatch ? firstLineMatch[1].trim() : artForm;
		const duration = firstLineMatch ? firstLineMatch[2].trim() : '';

		const artFormMap: Record<string, string> = {
			'ART': 'Art',
			'CREATIVE WRITING': 'Creative Writing',
			'DANCE/MOVEMENT': 'Dance/Movement',
			'DRAMA': 'Drama',
			'MUSIC': 'Music'
		};

		modules.push({
			goalNumber,
			artForm: artFormMap[artForm] || artForm,
			gradeLevel,
			title,
			duration,
			content: moduleContent
		});
	}

	return modules;
}

function generateTypeScriptFile(module: LessonModule, outputDir: string): void {
	const artFormKey = module.artForm.toLowerCase().replace(/\s+/g, '-').replace(/\//g, '-');
	const gradeKey = module.gradeLevel.replace('-', '-');
	const filename = `goal-${module.goalNumber}-${artFormKey}-grades-${gradeKey}.ts`;
	const filepath = path.join(outputDir, filename);

	// Parse the content to extract structured data
	const parsed = parseModuleContent(module.content);

	const tsContent = `import type { LessonContentData } from '../types';
import { registerLessonContent } from '../index';

const lessonContent: LessonContentData = {
	goalNumber: ${module.goalNumber},
	artForm: '${module.artForm}' as const,
	gradeLevel: '${module.gradeLevel}' as const,
	title: ${JSON.stringify(module.title)},
	duration: ${JSON.stringify(module.duration)},
	materials: ${JSON.stringify(parsed.materials, null, 2)},
	introduction: ${JSON.stringify(parsed.introduction)},
	steps: ${JSON.stringify(parsed.steps, null, 2)},
${parsed.discussionPrompts ? `	discussionPrompts: ${JSON.stringify(parsed.discussionPrompts, null, 2)},\n` : ''}${parsed.personalConnection ? `	personalConnection: ${JSON.stringify(parsed.personalConnection)},\n` : ''}${parsed.closingActivities ? `	closingActivities: ${JSON.stringify(parsed.closingActivities, null, 2)},\n` : ''}${parsed.reflectionQuestions ? `	reflectionQuestions: ${JSON.stringify(parsed.reflectionQuestions, null, 2)},\n` : ''}${parsed.assessmentCriteria ? `	assessmentCriteria: ${JSON.stringify(parsed.assessmentCriteria, null, 2)},\n` : ''}};

registerLessonContent(lessonContent);

export default lessonContent;
`;

	fs.writeFileSync(filepath, tsContent, 'utf-8');
	console.log(`Generated: ${filename}`);
}

function parseModuleContent(content: string) {
	// Extract materials
	const materials: Array<{ name: string; isOptional: boolean }> = [];
	const materialsMatch = content.match(/\*\*Materials\*\*\s+(.*?)(?=\*\*Introduction\*\*|\*\*Viewing\*\*|$)/s);
	if (materialsMatch) {
		const materialsText = materialsMatch[1];
		const lines = materialsText.split('\n').filter(l => l.trim() && !l.trim().startsWith('*'));
		lines.forEach(line => {
			const trimmed = line.trim();
			if (trimmed) {
				const isOptional = /\[optional\]/i.test(trimmed);
				const name = trimmed.replace(/\[optional\]/gi, '').trim();
				if (name) {
					materials.push({ name, isOptional });
				}
			}
		});
	}

	// Extract introduction
	const introductionMatch = content.match(/\*\*Introduction\*\*\s+(.*?)(?=\*\*[A-Z]|$)/s);
	const introduction = introductionMatch ? introductionMatch[1].trim() : '';

	// Extract steps (sections with **Title**)
	const steps: Array<{ title: string; content: string }> = [];
	const stepRegex = /\*\*([^*]+?)\*\*\s+(.*?)(?=\*\*[A-Z]|$)/gs;
	const excludedSections = ['Materials', 'Introduction', 'Viewing', 'Discussion', 'Personal Connection', 'Closing Activity Options', 'Reflection', 'Assessment', 'Reflection and Summary'];
	
	let stepMatch;
	while ((stepMatch = stepRegex.exec(content)) !== null) {
		const title = stepMatch[1].trim();
		if (!excludedSections.includes(title)) {
			steps.push({
				title,
				content: stepMatch[2].trim()
			});
		}
	}

	// Extract discussion prompts
	const discussionMatch = content.match(/\*\*Discussion\*\*\s+(.*?)(?=\*\*[A-Z]|$)/s);
	const discussionPrompts = discussionMatch
		? discussionMatch[1].split('\n').filter(l => l.trim().startsWith('*')).map(l => l.trim().replace(/^\*\s*/, ''))
		: undefined;

	// Extract personal connection
	const personalConnectionMatch = content.match(/\*\*Personal Connection\*\*\s+(.*?)(?=\*\*[A-Z]|$)/s);
	const personalConnection = personalConnectionMatch ? personalConnectionMatch[1].trim() : undefined;

	// Extract closing activities
	const closingMatch = content.match(/\*\*Closing Activity Options\*\*\s+(.*?)(?=\*\*[A-Z]|$)/s);
	const closingActivities = closingMatch
		? closingMatch[1].split('\n').filter(l => l.trim().startsWith('*')).map(l => {
			const trimmed = l.trim().replace(/^\*\s*\*\*/, '').replace(/\*\*:/, ':');
			const parts = trimmed.split(':');
			return {
				title: parts[0]?.trim() || '',
				description: parts.slice(1).join(':').trim()
			};
		}).filter(a => a.title)
		: undefined;

	// Extract reflection questions
	const reflectionMatch = content.match(/\*\*Reflection.*?\*\*\s+(.*?)(?=\*\*Assessment\*\*|$)/s);
	const reflectionQuestions = reflectionMatch
		? reflectionMatch[1].split('\n').filter(l => l.trim().startsWith('*')).map(l => l.trim().replace(/^\*\s*/, ''))
		: undefined;

	// Extract assessment criteria
	const assessmentMatch = content.match(/\*\*Assessment\*\*\s+(.*?)(?=\*\*[A-Z]|$)/s);
	const assessmentCriteria = assessmentMatch
		? assessmentMatch[1].split('\n').filter(l => l.trim().startsWith('*')).map(l => l.trim().replace(/^\*\s*/, ''))
		: undefined;

	return {
		materials,
		introduction,
		steps,
		discussionPrompts,
		personalConnection,
		closingActivities,
		reflectionQuestions,
		assessmentCriteria
	};
}

// Main execution
function main() {
	const intakeDir = path.join(process.cwd(), '_intake', 'edu');
	const outputDir = path.join(process.cwd(), 'apps', 'edu', 'src', 'lib', 'data', 'lessons', 'modules');

	// Ensure output directory exists
	if (!fs.existsSync(outputDir)) {
		fs.mkdirSync(outputDir, { recursive: true });
	}

	// Find all lesson markdown files
	const files = fs.readdirSync(intakeDir).filter(f => f.match(/goal\d+-lessons\.md$/));

	console.log(`Found ${files.length} lesson files to process\n`);

	let totalModules = 0;
	for (const file of files) {
		const filePath = path.join(intakeDir, file);
		try {
			const modules = parseMarkdownFile(filePath);
			console.log(`Processing ${file}: ${modules.length} modules`);
			for (const module of modules) {
				generateTypeScriptFile(module, outputDir);
				totalModules++;
			}
		} catch (error) {
			console.error(`Error processing ${file}:`, error);
		}
	}

	console.log(`\nGenerated ${totalModules} lesson module files`);

	// Generate index file
	generateIndexFile(outputDir, files);
}

function generateIndexFile(outputDir: string, sourceFiles: string[]) {
	// Find all generated .ts files (excluding index.ts)
	const generatedFiles = fs.readdirSync(outputDir)
		.filter(f => f.endsWith('.ts') && f !== 'index.ts')
		.sort();

	const imports = generatedFiles.map(file => {
		const moduleName = file.replace('.ts', '');
		return `import './${moduleName}';`;
	}).join('\n');

	const indexContent = `/**
 * Auto-generated index file for lesson modules
 * This file imports all lesson modules to register them
 * 
 * DO NOT EDIT MANUALLY - This file is generated by scripts/generate-lessons.ts
 */

${imports}
`;

	const indexPath = path.join(outputDir, 'index.ts');
	fs.writeFileSync(indexPath, indexContent, 'utf-8');
	console.log(`Generated index.ts with ${generatedFiles.length} imports`);
}

main();


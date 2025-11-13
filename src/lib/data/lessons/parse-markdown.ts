import * as fs from 'fs';
import * as path from 'path';

interface ParsedLesson {
	goalNumber: number;
	artForm: string;
	gradeLevel: string;
	title: string;
	duration: string;
	materials: Array<{ name: string; description?: string; isOptional: boolean }>;
	introduction: string;
	steps: Array<{ title: string; content: string; guidingQuestions?: string[] }>;
	discussionPrompts?: string[];
	personalConnection?: string;
	closingActivities?: Array<{ title: string; description: string }>;
	reflectionQuestions?: string[];
	assessmentCriteria?: string[];
	objectives?: Array<{ category: string; description: string; nccasStandard?: string }>;
	media?: Array<{ title: string; artist?: string; genre?: string; url?: string; description?: string }>;
}

/**
 * Parse a markdown lesson file and extract structured data
 */
export function parseMarkdownLesson(filePath: string): ParsedLesson[] {
	const content = fs.readFileSync(filePath, 'utf-8');
	const lessons: ParsedLesson[] = [];

	// Extract goal number from filename
	const goalMatch = filePath.match(/goal(\d+)-lessons\.md/);
	if (!goalMatch) {
		throw new Error(`Could not extract goal number from ${filePath}`);
	}
	const goalNumber = parseInt(goalMatch[1], 10);

	// Split by grade level sections
	const grades58Match = content.match(/### GRADES 5-8\s+(.*?)(?=### GRADES 9-12|## \*\*Action Planning|$)/s);
	const grades912Match = content.match(/### GRADES 9-12\s+(.*?)(?=## \*\*Action Planning|$)/s);

	// Parse exploration module (if exists)
	const explorationMatch = content.match(/### \*\*([A-Z\s/]+) EXPLORATION\*\*\s+\(([^)]+)\)\s+\(GRADES ([^)]+)\)/);
	if (explorationMatch) {
		const artForm = explorationMatch[1].trim();
		const duration = explorationMatch[2].trim();
		const gradeLevel = explorationMatch[3].trim();

		// Extract exploration module content
		const explorationContent = content.match(
			new RegExp(`### \\*\\*${artForm} EXPLORATION\\*\\*\\s+\\([^)]+\\)\\s+\\(GRADES [^)]+\\)\\s+(.*?)(?=### GRADES|$)`, 's')
		);

		if (explorationContent) {
			lessons.push(parseLessonModule(explorationContent[1], goalNumber, artForm, gradeLevel, duration, 'Exploration'));
		}
	}

	// Parse Grades 5-8 lessons
	if (grades58Match) {
		const modules = extractLessonModules(grades58Match[1]);
		modules.forEach((module) => {
			lessons.push(parseLessonModule(module.content, goalNumber, module.artForm, '5-8', module.duration, module.title));
		});
	}

	// Parse Grades 9-12 lessons
	if (grades912Match) {
		const modules = extractLessonModules(grades912Match[1]);
		modules.forEach((module) => {
			lessons.push(parseLessonModule(module.content, goalNumber, module.artForm, '9-12', module.duration, module.title));
		});
	}

	return lessons;
}

function extractLessonModules(content: string): Array<{ artForm: string; title: string; duration: string; content: string }> {
	const modules: Array<{ artForm: string; title: string; duration: string; content: string }> = [];

	// Match lesson modules (#### **ART**, etc.)
	const moduleRegex = /#### \*\*([A-Z\s/]+)\*\*\s+(.*?)(?=#### \*\*|$)/gs;
	let match;

	while ((match = moduleRegex.exec(content)) !== null) {
		const artForm = match[1].trim();
		const moduleContent = match[2].trim();

		// Extract title and duration
		const titleMatch = moduleContent.match(/^(.+?)\s+\(([^)]+)\)/);
		const title = titleMatch ? titleMatch[1].trim() : artForm;
		const duration = titleMatch ? titleMatch[2].trim() : '';

		modules.push({
			artForm,
			title,
			duration,
			content: moduleContent
		});
	}

	return modules;
}

function parseLessonModule(
	content: string,
	goalNumber: number,
	artForm: string,
	gradeLevel: string,
	duration: string,
	title: string
): ParsedLesson {
	// Extract materials
	const materials: Array<{ name: string; description?: string; isOptional: boolean }> = [];
	const materialsMatch = content.match(/\*\*Materials\*\*\s+(.*?)(?=\*\*Introduction\*\*|\*\*Viewing\*\*|$)/s);
	if (materialsMatch) {
		const materialsText = materialsMatch[1];
		const materialLines = materialsText.split('\n').filter((line) => line.trim());
		materialLines.forEach((line) => {
			const trimmed = line.trim();
			if (trimmed && !trimmed.startsWith('*') && !trimmed.startsWith('**')) {
				const isOptional = trimmed.includes('[optional]') || trimmed.includes('[Optional]');
				const name = trimmed.replace(/\[optional\]/gi, '').replace(/\[Optional\]/g, '').trim();
				materials.push({ name, isOptional });
			}
		});
	}

	// Extract introduction
	const introductionMatch = content.match(/\*\*Introduction\*\*\s+(.*?)(?=\*\*[A-Z]|$)/s);
	const introduction = introductionMatch ? introductionMatch[1].trim() : '';

	// Extract steps (sections with titles)
	const steps: Array<{ title: string; content: string; guidingQuestions?: string[] }> = [];
	const stepRegex = /\*\*([^*]+)\*\*\s+(.*?)(?=\*\*[A-Z]|$)/gs;
	let stepMatch;
	while ((stepMatch = stepRegex.exec(content)) !== null) {
		const stepTitle = stepMatch[1].trim();
		if (!['Materials', 'Introduction', 'Viewing', 'Discussion', 'Personal Connection', 'Closing Activity Options', 'Reflection', 'Assessment'].includes(stepTitle)) {
			steps.push({
				title: stepTitle,
				content: stepMatch[2].trim()
			});
		}
	}

	// Extract discussion prompts
	const discussionMatch = content.match(/\*\*Discussion\*\*\s+(.*?)(?=\*\*[A-Z]|$)/s);
	const discussionPrompts = discussionMatch
		? discussionMatch[1]
				.split('\n')
				.filter((line) => line.trim().startsWith('*'))
				.map((line) => line.trim().replace(/^\*\s*/, ''))
		: undefined;

	// Extract personal connection
	const personalConnectionMatch = content.match(/\*\*Personal Connection\*\*\s+(.*?)(?=\*\*[A-Z]|$)/s);
	const personalConnection = personalConnectionMatch ? personalConnectionMatch[1].trim() : undefined;

	// Extract closing activities
	const closingMatch = content.match(/\*\*Closing Activity Options\*\*\s+(.*?)(?=\*\*[A-Z]|$)/s);
	const closingActivities = closingMatch
		? closingMatch[1]
				.split('\n')
				.filter((line) => line.trim().startsWith('*'))
				.map((line) => {
					const trimmed = line.trim().replace(/^\*\s*\*\*/, '').replace(/\*\*:/, ':');
					const parts = trimmed.split(':');
					return {
						title: parts[0]?.trim() || '',
						description: parts.slice(1).join(':').trim()
					};
				})
				.filter((a) => a.title)
		: undefined;

	// Extract reflection questions
	const reflectionMatch = content.match(/\*\*Reflection.*?\*\*\s+(.*?)(?=\*\*Assessment\*\*|$)/s);
	const reflectionQuestions = reflectionMatch
		? reflectionMatch[1]
				.split('\n')
				.filter((line) => line.trim().startsWith('*'))
				.map((line) => line.trim().replace(/^\*\s*/, ''))
		: undefined;

	// Extract assessment criteria
	const assessmentMatch = content.match(/\*\*Assessment\*\*\s+(.*?)(?=\*\*[A-Z]|$)/s);
	const assessmentCriteria = assessmentMatch
		? assessmentMatch[1]
				.split('\n')
				.filter((line) => line.trim().startsWith('*'))
				.map((line) => line.trim().replace(/^\*\s*/, ''))
		: undefined;

	return {
		goalNumber,
		artForm,
		gradeLevel,
		title,
		duration,
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

/**
 * Generate TypeScript file from parsed lesson
 */
export function generateTypeScriptFile(lesson: ParsedLesson, outputDir: string): void {
	const artFormKey = lesson.artForm.toLowerCase().replace(/\s+/g, '-');
	const gradeKey = lesson.gradeLevel.replace('-', '-');
	const filename = `goal-${lesson.goalNumber}-${artFormKey}-grades-${gradeKey}.ts`;
	const filepath = path.join(outputDir, filename);

	const tsContent = generateTypeScriptContent(lesson);

	fs.writeFileSync(filepath, tsContent, 'utf-8');
	console.log(`Generated: ${filename}`);
}

function generateTypeScriptContent(lesson: ParsedLesson): string {
	const artFormMap: Record<string, string> = {
		'ART': 'Art',
		'CREATIVE WRITING': 'Creative Writing',
		'DANCE/MOVEMENT': 'Dance/Movement',
		'DRAMA': 'Drama',
		'MUSIC': 'Music',
		'MUSICAL': 'Musical Exploration',
		'ART EXPLORATION': 'Art',
		'DANCE/MOVEMENT EXPLORATION': 'Dance/Movement',
		'DRAMA EXPLORATION': 'Drama'
	};

	const artForm = artFormMap[lesson.artForm] || lesson.artForm;

	return `import type { LessonContentData } from '../types';
import { registerLessonContent } from '../index';

const lessonContent: LessonContentData = {
	goalNumber: ${lesson.goalNumber},
	artForm: '${artForm}' as const,
	gradeLevel: '${lesson.gradeLevel}' as const,
	title: ${JSON.stringify(lesson.title)},
	duration: ${JSON.stringify(lesson.duration)},
	materials: ${JSON.stringify(lesson.materials, null, 2)},
	introduction: ${JSON.stringify(lesson.introduction)},
	steps: ${JSON.stringify(lesson.steps, null, 2)},
	${lesson.discussionPrompts ? `discussionPrompts: ${JSON.stringify(lesson.discussionPrompts, null, 2)},` : ''}
	${lesson.personalConnection ? `personalConnection: ${JSON.stringify(lesson.personalConnection)},` : ''}
	${lesson.closingActivities ? `closingActivities: ${JSON.stringify(lesson.closingActivities, null, 2)},` : ''}
	${lesson.reflectionQuestions ? `reflectionQuestions: ${JSON.stringify(lesson.reflectionQuestions, null, 2)},` : ''}
	${lesson.assessmentCriteria ? `assessmentCriteria: ${JSON.stringify(lesson.assessmentCriteria, null, 2)},` : ''}
};

registerLessonContent(lessonContent);

export default lessonContent;
`;
}


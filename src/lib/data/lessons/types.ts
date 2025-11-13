export type ArtForm =
	| 'Musical Exploration'
	| 'Art'
	| 'Creative Writing'
	| 'Dance/Movement'
	| 'Drama'
	| 'Music';

export type GradeLevel = '5-8' | '9-12' | '5-12';

export type ObjectiveCategory = 'Knowledge' | 'Discourse' | 'Attitudes' | 'Capacity' | 'Action';

export interface LessonMaterial {
	name: string;
	description?: string;
	isOptional: boolean;
	order: number;
}

export interface LessonMediaItem {
	title: string;
	artist?: string;
	genre?: string;
	url?: string;
	description?: string;
	order: number;
}

export interface LessonObjective {
	category: ObjectiveCategory;
	description: string;
	nccasStandard?: string;
	order: number;
}

export interface ContentStep {
	title: string;
	content: string; // Markdown supported
	order: number;
	guidingQuestions?: string[];
}

export interface ClosingActivity {
	title: string;
	description: string;
}

export interface LessonContentData {
	// Lesson identification
	goalNumber: number;
	artForm: ArtForm;
	gradeLevel: GradeLevel;
	title: string;
	duration: string; // e.g., "30-60 MINUTES"

	// Materials
	materials: LessonMaterial[];

	// Introduction
	introduction: string;

	// Main content sections
	steps: ContentStep[];

	// Discussion prompts
	discussionPrompts?: string[];

	// Personal connection activities
	personalConnection?: string;

	// Closing activities
	closingActivities?: ClosingActivity[];

	// Reflection questions
	reflectionQuestions?: string[];

	// Assessment criteria
	assessmentCriteria?: string[];

	// Learning objectives
	objectives?: LessonObjective[];

	// Media references
	media?: LessonMediaItem[];
}


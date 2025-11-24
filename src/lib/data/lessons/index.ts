import type { LessonContentData, ArtForm, GradeLevel } from './types';

// This will be populated by individual lesson files
export const lessonContentMap = new Map<string, LessonContentData>();

/**
 * Generate a key for looking up lesson content
 */
export function getLessonKey(
	goalNumber: number,
	artForm: ArtForm,
	gradeLevel: GradeLevel
): string {
	return `goal-${goalNumber}-${artForm.toLowerCase().replace(/\s+/g, '-')}-grades-${gradeLevel}`;
}

/**
 * Get lesson content by key
 */
export function getLessonContent(
	goalNumber: number,
	artForm: ArtForm,
	gradeLevel: GradeLevel
): LessonContentData | undefined {
	const key = getLessonKey(goalNumber, artForm, gradeLevel);
	return lessonContentMap.get(key);
}

/**
 * Register a lesson content module
 */
export function registerLessonContent(content: LessonContentData): void {
	const key = getLessonKey(content.goalNumber, content.artForm, content.gradeLevel);
	lessonContentMap.set(key, content);
}


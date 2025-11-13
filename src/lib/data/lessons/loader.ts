import type { LessonContentData } from './types';
import { getLessonContent } from './index';

/**
 * Load lesson content from TypeScript files
 * This replaces the Supabase content loading
 */
export async function loadLessonContent(
	goalNumber: number,
	artForm: string,
	gradeLevel: string
): Promise<LessonContentData | null> {
	// Normalize art form - handle various formats from database
	const artFormMap: Record<string, string> = {
		'Art': 'Art',
		'Creative Writing': 'Creative Writing',
		'Dance/Movement': 'Dance/Movement',
		'Drama': 'Drama',
		'Music': 'Music',
		'Musical Exploration': 'Musical Exploration',
		// Handle potential variations
		'ART': 'Art',
		'CREATIVE WRITING': 'Creative Writing',
		'DANCE/MOVEMENT': 'Dance/Movement',
		'DRAMA': 'Drama',
		'MUSIC': 'Music'
	};

	const normalizedArtForm = artFormMap[artForm] || artForm;

	// Normalize grade level
	let normalizedGradeLevel: '5-8' | '9-12' | '5-12' = '5-12';
	if (gradeLevel === '5-8' || gradeLevel === '9-12') {
		normalizedGradeLevel = gradeLevel as '5-8' | '9-12';
	} else if (gradeLevel && gradeLevel.includes('5-8')) {
		normalizedGradeLevel = '5-8';
	} else if (gradeLevel && gradeLevel.includes('9-12')) {
		normalizedGradeLevel = '9-12';
	}

	// Import all lesson modules to register them
	// This is done dynamically to avoid circular dependencies
	try {
		await import('./modules');
	} catch (error) {
		console.error('Error importing lesson modules:', error);
		return null;
	}

	// Get the lesson content
	const content = getLessonContent(goalNumber, normalizedArtForm as any, normalizedGradeLevel);

	return content || null;
}

/**
 * Get lesson content synchronously (after modules are loaded)
 */
export function getLessonContentSync(
	goalNumber: number,
	artForm: string,
	gradeLevel: string
): LessonContentData | null {
	const artFormMap: Record<string, string> = {
		'Art': 'Art',
		'Creative Writing': 'Creative Writing',
		'Dance/Movement': 'Dance/Movement',
		'Drama': 'Drama',
		'Music': 'Music',
		'Musical Exploration': 'Musical Exploration'
	};

	const normalizedArtForm = artFormMap[artForm] || artForm;
	const normalizedGradeLevel = gradeLevel === '5-8' || gradeLevel === '9-12' ? gradeLevel : '5-12';

	return getLessonContent(goalNumber, normalizedArtForm as any, normalizedGradeLevel as any) || null;
}


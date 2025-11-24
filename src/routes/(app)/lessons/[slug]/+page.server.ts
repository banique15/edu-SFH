import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { supabase } from '$lib/supabase';
import { slugify } from '$lib/utils/slugify';

/**
 * Supabase-only lesson page loader
 * 
 * This version relies solely on Supabase - no fallback to TypeScript files or Svelte components.
 * All lesson content must be migrated to Supabase before using this loader.
 */
export const load: PageServerLoad = async ({ params }) => {
	const slug = params.slug;

	// Fetch all lessons and find the one with matching slug
	const { data: lessons, error: lessonsError } = await supabase
		.from('edu_lessons')
		.select('*');

	if (lessonsError) {
		console.error('Error fetching lessons:', lessonsError);
		throw error(500, 'Failed to load lessons');
	}

	// Find the lesson with matching slug
	const lesson = lessons?.find(l => slugify(l.title) === slug);

	if (!lesson) {
		throw error(404, 'Lesson not found');
	}

	const lessonId = lesson.id;

	// Fetch goal for this lesson
	const { data: goal, error: goalError } = await supabase
		.from('edu_goals')
		.select('*')
		.eq('id', lesson.goal_id)
		.single();

	if (goalError) {
		console.error('Error fetching goal:', goalError);
	}

	// Fetch all lessons for the same goal, ordered by lesson_number for navigation
	const { data: goalLessons } = await supabase
		.from('edu_lessons')
		.select('*')
		.eq('goal_id', lesson.goal_id)
		.order('lesson_number', { ascending: true });

	// Find previous and next lessons
	let previousLesson = null;
	let nextLesson = null;

	if (goalLessons && goalLessons.length > 0) {
		const currentIndex = goalLessons.findIndex(l => l.id === lessonId);
		
		if (currentIndex > 0) {
			previousLesson = goalLessons[currentIndex - 1];
		}
		
		if (currentIndex < goalLessons.length - 1) {
			nextLesson = goalLessons[currentIndex + 1];
		}
	}

	// Fetch related lessons (same goal or same art form)
	const { data: relatedLessons } = await supabase
		.from('edu_lessons')
		.select('*')
		.or(`goal_id.eq.${lesson.goal_id},art_form.eq.${lesson.art_form}`)
		.neq('id', lessonId)
		.limit(6);

	// Fetch goals for all related lessons to ensure correct colors
	let relatedLessonsWithGoals = relatedLessons || [];
	if (relatedLessons && relatedLessons.length > 0) {
		const goalIds = [...new Set(relatedLessons.map(l => l.goal_id))];
		const { data: relatedGoals } = await supabase
			.from('edu_goals')
			.select('*')
			.in('id', goalIds);

		// Map goals to lessons
		const goalsMap = new Map((relatedGoals || []).map(g => [g.id, g]));
		relatedLessonsWithGoals = relatedLessons.map(lesson => ({
			...lesson,
			goal: goalsMap.get(lesson.goal_id) || null
		}));

		console.log('Related lessons goals fetched:', relatedGoals?.length || 0);
	}

	// Fetch all lesson content from Supabase
	const { data: materials, error: materialsError } = await supabase
		.from('edu_lesson_materials')
		.select('*')
		.eq('lesson_id', lessonId)
		.order('order_num', { ascending: true });

	const { data: content, error: contentError } = await supabase
		.from('edu_lesson_content')
		.select('*')
		.eq('lesson_id', lessonId)
		.order('order_num', { ascending: true });

	const { data: objectives, error: objectivesError } = await supabase
		.from('edu_lesson_objectives')
		.select('*')
		.eq('lesson_id', lessonId)
		.order('order_num', { ascending: true });

	const { data: media, error: mediaError } = await supabase
		.from('edu_lesson_media')
		.select('*')
		.eq('lesson_id', lessonId)
		.order('order_num', { ascending: true });

	// Log any errors but don't fail - return empty arrays
	if (materialsError) console.error('Error fetching materials:', materialsError);
	if (contentError) console.error('Error fetching content:', contentError);
	if (objectivesError) console.error('Error fetching objectives:', objectivesError);
	if (mediaError) console.error('Error fetching media:', mediaError);

	return {
		lesson,
		goal: goal || null,
		materials: materials || [],
		content: content || [],
		objectives: objectives || [],
		media: media || [],
		previousLesson: previousLesson || null,
		nextLesson: nextLesson || null,
		relatedLessons: relatedLessonsWithGoals
	};
};

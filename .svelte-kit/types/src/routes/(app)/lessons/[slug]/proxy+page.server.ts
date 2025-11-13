// @ts-nocheck
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { supabase } from '$lib/supabase';
import { slugify } from '$lib/utils/slugify';
import { loadLessonContent } from '$lib/data/lessons/loader';
import { loadLessonComponent } from '$lib/data/lessons/svelte-loader';
import { getLessonMetadataFromMarkdown } from '$lib/data/lessons/markdown-metadata';

export const load = async ({ params }: Parameters<PageServerLoad>[0]) => {
	const slug = params.slug;

	// Fetch all lessons and find the one with matching slug
	// We still use Supabase for metadata (title, art_form, goal_id, etc.)
	const { data: lessons, error: lessonsError } = await supabase
		.from('edu_lessons')
		.select('*');

	// Find the lesson with matching slug
	let lesson = lessons?.find(l => slugify(l.title) === slug);

	// If lesson not found in Supabase, try to load from markdown/Svelte
	// This allows lessons that exist as markdown/Svelte but aren't in Supabase yet
	if (!lesson) {
		const metadata = getLessonMetadataFromMarkdown(slug);
		if (metadata) {
			// Get goal_id from goal number
			const { data: goalData } = await supabase
				.from('edu_goals')
				.select('id')
				.eq('goal_number', metadata.globalGoal)
				.single();
			
			// Parse duration
			let durationMin: number | null = null;
			let durationMax: number | null = null;
			if (metadata.duration) {
				const durationMatch = metadata.duration.match(/(\d+)-(\d+)/);
				if (durationMatch) {
					durationMin = parseInt(durationMatch[1]);
					durationMax = parseInt(durationMatch[2]);
				} else {
					const singleMatch = metadata.duration.match(/(\d+)/);
					if (singleMatch) {
						durationMin = parseInt(singleMatch[1]);
					}
				}
			}
			
			// Format grade levels
			const gradeLevel = metadata.gradeLevels.length > 0
				? metadata.gradeLevels.map(g => g.toString()).join(',')
				: null;
			
			lesson = {
				id: 0, // Temporary ID (not in Supabase)
				goal_id: goalData?.id || 0,
				lesson_number: 0,
				title: metadata.title,
				art_form: metadata.artForm as any,
				duration_min: durationMin,
				duration_max: durationMax,
				grade_level: gradeLevel,
				is_approved: true,
				approved_by: null,
				approved_at: null,
				created_at: new Date().toISOString(),
				updated_at: new Date().toISOString()
			};
		}
	}

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

	// Debug logging
	console.log('=== Lesson Detail Page Debug ===');
	console.log('Lesson ID:', lessonId);
	console.log('Lesson Title:', lesson.title);
	console.log('Lesson goal_id:', lesson.goal_id);
	console.log('Goal data:', goal);
	console.log('Goal number:', goal?.goal_number);
	console.log('Goal error:', goalError);
	console.log('================================');

	// Ensure we have a valid goal
	if (!goal && !goalError) {
		console.error('⚠️ WARNING: Goal not found for goal_id:', lesson.goal_id);
	}

	// Check if Svelte component exists (but don't return it - components can't be serialized)
	// We'll load it dynamically on the client side
	// Note: We still need to import it to check, but we don't return it
	let hasLessonComponent = false;
	try {
		const component = await loadLessonComponent(slug, lesson.title);
		hasLessonComponent = component !== null;
		if (!hasLessonComponent) {
			console.log(`Svelte component not found for slug "${slug}", falling back to old system`);
		}
	} catch (err) {
		console.log(`Svelte component not found for slug "${slug}", falling back to old system`);
		hasLessonComponent = false;
	}

	// Fallback to old TypeScript system if Svelte component not found
	let materials, content, objectives, media;

	if (!hasLessonComponent) {
		// Load detailed content from TypeScript files instead of Supabase
		// Import lesson modules to register them
		await import('$lib/data/lessons/modules');

		// Get lesson content from TypeScript files
		const lessonContent = await loadLessonContent(
			goal?.goal_number || 0,
			lesson.art_form,
			lesson.grade_level || '5-12'
		);

		if (lessonContent) {
			// Transform TypeScript content to match expected format
			materials = lessonContent.materials.map((m, idx) => ({
				id: idx + 1,
				lesson_id: lessonId,
				material_type: 'general',
				name: m.name,
				description: m.description || null,
				is_optional: m.isOptional,
				order_num: idx + 1,
				created_at: new Date().toISOString()
			}));

			content = lessonContent.steps.map((step, idx) => ({
				id: idx + 1,
				lesson_id: lessonId,
				section_type: 'step',
				section_title: step.title,
				content: step.content,
				order_num: idx + 1,
				created_at: new Date().toISOString(),
				updated_at: new Date().toISOString()
			}));

			// Add introduction as first content section if it exists
			if (lessonContent.introduction) {
				content.unshift({
					id: 0,
					lesson_id: lessonId,
					section_type: 'introduction',
					section_title: 'Introduction',
					content: lessonContent.introduction,
					order_num: 0,
					created_at: new Date().toISOString(),
					updated_at: new Date().toISOString()
				});
			}

			objectives = lessonContent.objectives?.map((obj, idx) => ({
				id: idx + 1,
				lesson_id: lessonId,
				grade_level: lesson.grade_level || '5-12',
				category: obj.category,
				description: obj.description,
				nccas_standard: obj.nccasStandard || null,
				order_num: idx + 1,
				created_at: new Date().toISOString()
			})) || [];

			media = lessonContent.media?.map((m, idx) => ({
				id: idx + 1,
				lesson_id: lessonId,
				media_type: 'general',
				title: m.title,
				artist: m.artist || null,
				genre: m.genre || null,
				url: m.url || null,
				description: m.description || null,
				order_num: idx + 1,
				created_at: new Date().toISOString()
			})) || [];
		} else {
			// Fallback to Supabase if TypeScript content not found
			const { data: materialsData } = await supabase
				.from('edu_lesson_materials')
				.select('*')
				.eq('lesson_id', lessonId)
				.order('order_num', { ascending: true });

			const { data: contentData } = await supabase
				.from('edu_lesson_content')
				.select('*')
				.eq('lesson_id', lessonId)
				.order('order_num', { ascending: true });

			const { data: objectivesData } = await supabase
				.from('edu_lesson_objectives')
				.select('*')
				.eq('lesson_id', lessonId)
				.order('order_num', { ascending: true });

			const { data: mediaData } = await supabase
				.from('edu_lesson_media')
				.select('*')
				.eq('lesson_id', lessonId)
				.order('order_num', { ascending: true });

			materials = materialsData || [];
			content = contentData || [];
			objectives = objectivesData || [];
			media = mediaData || [];
		}
	} else {
		// For Svelte components, we still need materials from Supabase for the hero
		// The component will render its own content
		const { data: materialsData } = await supabase
			.from('edu_lesson_materials')
			.select('*')
			.eq('lesson_id', lessonId)
			.order('order_num', { ascending: true });

		materials = materialsData || [];
		content = []; // Content is rendered by Svelte component
		objectives = []; // Objectives can be added later if needed
		media = []; // Media can be added later if needed
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

	return {
		lesson,
		goal: goal || null,
		materials: materials || [],
		content: content || [],
		objectives: objectives || [],
		media: media || [],
		previousLesson: previousLesson || null,
		nextLesson: nextLesson || null,
		relatedLessons: relatedLessonsWithGoals,
		hasLessonComponent,
		lessonSlug: slug
	};
};

import { supabase } from '$lib/supabase';
import type { PageLoad } from './$types';
import type { Lesson } from '$lib/stores/lessons';
import type { Goal } from '$lib/stores/goals';
import type { Profile } from '$lib/schemas/profile';

export const load: PageLoad = async ({ parent }) => {
	// Wait for parent layout to load (ensures auth is ready)
	await parent();

	try {
		// Get current user
		const {
			data: { user },
			error: userError
		} = await supabase.auth.getUser();

		if (userError || !user) {
			throw new Error('User not authenticated');
		}

		// Fetch user profile
		const { data: profile, error: profileError } = await supabase
			.from('profiles')
			.select('*')
			.eq('id', user.id)
			.single();

		if (profileError) throw profileError;

		// Fetch all lessons to filter favorites and recommendations
		const { data: allLessons, error: lessonsError } = await supabase
			.from('edu_lessons')
			.select('*')
			.order('lesson_number', { ascending: true });

		if (lessonsError) throw lessonsError;

		// Fetch all goals for lesson card colors
		const { data: goals, error: goalsError } = await supabase
			.from('edu_goals')
			.select('*')
			.order('goal_number', { ascending: true });

		if (goalsError) throw goalsError;

		// Fetch lesson content for descriptions
		const { data: lessonContents, error: contentsError } = await supabase
			.from('edu_lesson_content')
			.select('*')
			.eq('section_type', 'introduction')
			.order('order_num', { ascending: true });

		if (contentsError) throw contentsError;

		return {
			profile: profile as Profile,
			allLessons: (allLessons as Lesson[]) || [],
			goals: (goals as Goal[]) || [],
			lessonContents: lessonContents || [],
			userEmail: user.email
		};
	} catch (error) {
		console.error('Error loading account page:', error);
		return {
			profile: null,
			allLessons: [],
			goals: [],
			lessonContents: [],
			userEmail: null
		};
	}
};

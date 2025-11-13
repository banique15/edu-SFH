// @ts-nocheck
import type { PageServerLoad } from './$types';
import { supabase } from '$lib/supabase';

export const load = async () => {
	// Fetch all goals for generating proper slug-based links
	const { data: goals } = await supabase
		.from('edu_goals')
		.select('id, goal_number, title')
		.order('goal_number', { ascending: true });

	return {
		goals: goals || []
	};
};
;null as any as PageServerLoad;
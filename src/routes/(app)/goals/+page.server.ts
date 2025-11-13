import type { PageServerLoad } from './$types';
import { supabase } from '$lib/supabase';

export const load: PageServerLoad = async () => {
	// Fetch all goals
	const { data: goals } = await supabase
		.from('edu_goals')
		.select('*')
		.order('goal_number', { ascending: true });

	return {
		goals: goals || []
	};
};

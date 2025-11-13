import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { supabase } from '$lib/supabase';
import { slugify } from '$lib/utils/slugify';
import { getGoalStaticContent } from '$lib/data/goal-content';
import type {
	GoalStaticContent,
	GoalObjectiveContent,
	GoalTargetContent,
	ObjectiveCategory
} from '$lib/data/goal-content';

export const load: PageServerLoad = async ({ params }) => {
	const slug = params.slug;

	// Fetch all goals and find the one with matching slug
	const { data: goals, error: goalsError } = await supabase
		.from('edu_goals')
		.select('*');

	if (goalsError || !goals) {
		throw error(404, 'Goal not found');
	}

	// Find the goal with matching slug
	const goal = goals.find(g => slugify(g.title) === slug);

	if (!goal) {
		throw error(404, 'Goal not found');
	}

	// Get static content by goal number (e.g., "goal-1") instead of URL slug
	const staticContent: GoalStaticContent | undefined = getGoalStaticContent(`goal-${goal.goal_number}`);

	// Fetch objectives for this goal
	const { data: objectives } = await supabase
		.from('edu_objectives')
		.select('*')
		.eq('goal_id', goal.id)
		.order('order_num', { ascending: true });

	// Fetch targets for this goal
	const { data: targets } = await supabase
		.from('edu_targets')
		.select('*')
		.eq('goal_id', goal.id)
		.order('target_number', { ascending: true });

	// Fetch indicators tied to those targets
	let indicatorsData:
		| Array<{ id: number; target_id: number; indicator_number: string; description: string }>
		| null = null;

	if (targets && targets.length > 0) {
		const targetIds = targets.map(target => target.id);
		const { data: indicators } = await supabase
			.from('edu_indicators')
			.select('*')
			.in('target_id', targetIds)
			.order('indicator_number', { ascending: true });
		indicatorsData = indicators ?? null;
	}

	// Fetch lessons for this goal
	const { data: lessons } = await supabase
		.from('edu_lessons')
		.select('*')
		.eq('goal_id', goal.id)
		.order('lesson_number', { ascending: true });

	// Select a random lesson for the featured spotlight (if lessons exist)
	const featuredLesson = lessons && lessons.length > 0
		? lessons[Math.floor(Math.random() * lessons.length)]
		: null;

	function buildObjectiveContent(): GoalObjectiveContent[] {
		if (objectives && objectives.length > 0) {
			const categories: ObjectiveCategory[] = ['Knowledge', 'Discourse', 'Attitudes', 'Capacity', 'Action'];
			return categories
				.map(category => ({
					category,
					items: (objectives || [])
						.filter(obj => obj.category === category)
						.map(obj => ({ description: obj.description, nccas: obj.nccas_standard || undefined }))
				}))
				.filter(bucket => bucket.items.length > 0);
		}

		return staticContent?.objectives ?? [];
	}

	function buildTargetContent(): GoalTargetContent[] {
		if (targets && targets.length > 0) {
			return targets.map(target => ({
				number: target.target_number,
				title: `Target ${target.target_number}`,
				description: target.description,
				indicators:
					(indicatorsData || [])
						.filter(indicator => indicator.target_id === target.id)
						.map(indicator => ({
							number: indicator.indicator_number,
							description: indicator.description
						}))
			}));
		}

		return staticContent?.targets ?? [];
	}

	return {
		goal,
		goals: goals || [], // Return all goals for navigation
		objectives: buildObjectiveContent(),
		targets: buildTargetContent(),
		lessons: lessons || [],
		featuredLesson,
		staticContent
	};
};

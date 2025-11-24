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

	// Fetch action planning from database
	const { data: actionPlanningRecords } = await supabase
		.from('edu_action_planning')
		.select('id, statement, grade_level')
		.eq('goal_id', goal.id)
		.order('grade_level', { ascending: true });

	// Fetch sections for all action planning records
	let sectionsMap: Record<number, any[]> = {};
	if (actionPlanningRecords && actionPlanningRecords.length > 0) {
		const actionPlanningIds = actionPlanningRecords.map(ap => ap.id);
		const { data: sections } = await supabase
			.from('edu_action_sections')
			.select('id, action_planning_id, title, description, order_num')
			.in('action_planning_id', actionPlanningIds)
			.order('order_num', { ascending: true });

		if (sections) {
			// Group sections by action_planning_id
			sectionsMap = sections.reduce((acc: Record<number, any[]>, section: any) => {
				if (!acc[section.action_planning_id]) {
					acc[section.action_planning_id] = [];
				}
				acc[section.action_planning_id].push(section);
				return acc;
			}, {});

			// Fetch items for all sections
			const sectionIds = sections.map(s => s.id);
			if (sectionIds.length > 0) {
				const { data: items } = await supabase
					.from('edu_action_items')
					.select('id, section_id, text, order_num')
					.in('section_id', sectionIds)
					.order('order_num', { ascending: true });

				if (items) {
					// Group items by section_id
					const itemsMap = items.reduce((acc: Record<number, any[]>, item: any) => {
						if (!acc[item.section_id]) {
							acc[item.section_id] = [];
						}
						acc[item.section_id].push(item);
						return acc;
					}, {});

					// Attach items to sections
					Object.keys(sectionsMap).forEach(apId => {
						sectionsMap[parseInt(apId)].forEach((section: any) => {
							section.items = (itemsMap[section.id] || []).sort((a: any, b: any) => a.order_num - b.order_num);
						});
					});
				}
			}
		}
	}

	// Transform database action planning to match expected format
	let dbActionPlanning: GoalStaticContent['actionPlanning'] | undefined;
	if (actionPlanningRecords && actionPlanningRecords.length > 0) {
		dbActionPlanning = actionPlanningRecords.map(ap => ({
			id: ap.id,
			statement: ap.statement,
			grade_level: ap.grade_level,
			sections: (sectionsMap[ap.id] || [])
				.map((section: any) => ({
					id: section.id,
					title: section.title,
					description: section.description || undefined,
					items: (section.items || [])
						.map((item: any) => ({
							id: item.id,
							text: item.text
						}))
				}))
		}));
	}

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
		const categories: ObjectiveCategory[] = ['Knowledge', 'Discourse', 'Attitudes', 'Capacity', 'Action'];
		return categories
			.map(category => ({
				category,
				items: (objectives || [])
					.filter(obj => obj.category === category)
					.map(obj => ({ 
						description: obj.description, 
						nccas: obj.nccas_standard || undefined,
						grade_level: obj.grade_level || null,
						id: obj.id
					}))
			}))
			.filter(bucket => bucket.items.length > 0);
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

	// Merge database action planning into staticContent if it exists
	const finalStaticContent = staticContent ? {
		...staticContent,
		actionPlanning: dbActionPlanning || staticContent.actionPlanning
	} : undefined;

	return {
		goal,
		goals: goals || [], // Return all goals for navigation
		objectives: buildObjectiveContent(),
		targets: buildTargetContent(),
		lessons: lessons || [],
		featuredLesson,
		staticContent: finalStaticContent
	};
};

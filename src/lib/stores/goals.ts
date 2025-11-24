import { writable, derived } from 'svelte/store';
import { supabase } from '$lib/supabase';

export interface Goal {
	id: number;
	goal_number: number;
	title: string;
	description: string | null;
	is_approved: boolean;
	approved_by: string | null;
	approved_at: string | null;
	created_at: string;
	updated_at: string;
}

export interface Target {
	id: number;
	goal_id: number;
	target_number: string;
	description: string;
	created_at: string;
	updated_at: string;
}

export interface Indicator {
	id: number;
	target_id: number;
	indicator_number: string;
	description: string;
	created_at: string;
	updated_at: string;
}

export interface Objective {
	id: number;
	goal_id: number;
	category: 'Knowledge' | 'Discourse' | 'Attitudes' | 'Capacity' | 'Action';
	description: string;
	nccas_standard: string | null;
	grade_level: string | null;
	order_num: number;
	created_at: string;
	updated_at: string;
}

export interface ActionPlanning {
	id: number;
	goal_id: number;
	statement: string;
	grade_level: string | null;
	created_at: string;
	updated_at: string;
}

export interface ActionSection {
	id: number;
	action_planning_id: number;
	title: string;
	description: string | null;
	order_num: number;
	created_at: string;
	updated_at: string;
}

export interface ActionItem {
	id: number;
	section_id: number;
	text: string;
	order_num: number;
	created_at: string;
	updated_at: string;
}

// Stores
export const goals = writable<Goal[]>([]);
export const targets = writable<Target[]>([]);
export const indicators = writable<Indicator[]>([]);
export const objectives = writable<Objective[]>([]);
export const selectedGoal = writable<Goal | null>(null);
export const loading = writable(false);
export const error = writable<string | null>(null);

// Derived stores
export const selectedGoalTargets = derived(
	[selectedGoal, targets],
	([$selectedGoal, $targets]) => {
		if (!$selectedGoal) return [];
		return $targets.filter((t) => t.goal_id === $selectedGoal.id);
	}
);

export const selectedGoalObjectives = derived(
	[selectedGoal, objectives],
	([$selectedGoal, $objectives]) => {
		if (!$selectedGoal) return [];
		return $objectives.filter((o) => o.goal_id === $selectedGoal.id);
	}
);

// Functions
export async function fetchGoals() {
	loading.set(true);
	error.set(null);

	try {
		const { data, error: fetchError } = await supabase
			.from('edu_goals')
			.select('*')
			.order('goal_number', { ascending: true });

		if (fetchError) throw fetchError;

		goals.set(data || []);
	} catch (err) {
		const message = err instanceof Error ? err.message : 'Failed to fetch goals';
		error.set(message);
		console.error('Error fetching goals:', err);
	} finally {
		loading.set(false);
	}
}

export async function fetchTargets(goalId?: number) {
	try {
		let query = supabase.from('edu_targets').select('*');

		if (goalId) {
			query = query.eq('goal_id', goalId);
		}

		const { data, error: fetchError } = await query.order('target_number', { ascending: true });

		if (fetchError) throw fetchError;

		targets.set(data || []);
	} catch (err) {
		console.error('Error fetching targets:', err);
	}
}

export async function fetchIndicators(targetId?: number) {
	try {
		let query = supabase.from('edu_indicators').select('*');

		if (targetId) {
			query = query.eq('target_id', targetId);
		}

		const { data, error: fetchError } = await query.order('indicator_number', { ascending: true });

		if (fetchError) throw fetchError;

		indicators.set(data || []);
	} catch (err) {
		console.error('Error fetching indicators:', err);
	}
}

export async function fetchObjectives(goalId?: number) {
	try {
		let query = supabase.from('edu_objectives').select('*');

		if (goalId) {
			query = query.eq('goal_id', goalId);
		}

		const { data, error: fetchError } = await query.order('order_num', { ascending: true });

		if (fetchError) throw fetchError;

		objectives.set(data || []);
	} catch (err) {
		console.error('Error fetching objectives:', err);
	}
}

export async function fetchGoalDetails(goalId: number) {
	loading.set(true);
	error.set(null);

	try {
		// Fetch goal
		const { data: goalData, error: goalError } = await supabase
			.from('edu_goals')
			.select('*')
			.eq('id', goalId)
			.single();

		if (goalError) throw goalError;

		selectedGoal.set(goalData);

		// Fetch related data
		await Promise.all([fetchTargets(goalId), fetchObjectives(goalId)]);
	} catch (err) {
		const message = err instanceof Error ? err.message : 'Failed to fetch goal details';
		error.set(message);
		console.error('Error fetching goal details:', err);
	} finally {
		loading.set(false);
	}
}

export function clearSelectedGoal() {
	selectedGoal.set(null);
}

// Update functions
export async function updateGoal(goalId: number, updates: Partial<Goal>) {
	loading.set(true);
	error.set(null);

	try {
		const { data, error: updateError } = await supabase
			.from('edu_goals')
			.update(updates)
			.eq('id', goalId)
			.select()
			.single();

		if (updateError) throw updateError;

		// Update local state
		goals.update((current) => current.map((g) => (g.id === goalId ? data : g)));
		if (data) {
			selectedGoal.set(data);
		}

		return { success: true };
	} catch (err) {
		const message = err instanceof Error ? err.message : 'Failed to update goal';
		error.set(message);
		console.error('Error updating goal:', err);
		return { success: false, error: message };
	} finally {
		loading.set(false);
	}
}

export async function updateTarget(targetId: number, updates: Partial<Target>) {
	try {
		const { data, error: updateError } = await supabase
			.from('edu_targets')
			.update(updates)
			.eq('id', targetId)
			.select()
			.single();

		if (updateError) throw updateError;

		// Update local state
		targets.update((current) => current.map((t) => (t.id === targetId ? data : t)));

		return { success: true };
	} catch (err) {
		const message = err instanceof Error ? err.message : 'Failed to update target';
		console.error('Error updating target:', err);
		return { success: false, error: message };
	}
}

export async function updateObjective(objectiveId: number, updates: Partial<Objective>) {
	try {
		const { data, error: updateError } = await supabase
			.from('edu_objectives')
			.update(updates)
			.eq('id', objectiveId)
			.select()
			.single();

		if (updateError) throw updateError;

		// Update local state
		objectives.update((current) => current.map((o) => (o.id === objectiveId ? data : o)));

		return { success: true };
	} catch (err) {
		const message = err instanceof Error ? err.message : 'Failed to update objective';
		console.error('Error updating objective:', err);
		return { success: false, error: message };
	}
}

export async function createObjective(objectiveData: Omit<Objective, 'id' | 'created_at' | 'updated_at' | 'order_num'>) {
	try {
		// Get the max order_num for this goal and category to set the new one
		const { data: existingObjectives } = await supabase
			.from('edu_objectives')
			.select('order_num')
			.eq('goal_id', objectiveData.goal_id)
			.eq('category', objectiveData.category)
			.order('order_num', { ascending: false })
			.limit(1);

		const orderNum = existingObjectives && existingObjectives.length > 0
			? existingObjectives[0].order_num + 1
			: 1;

		const { data, error: createError } = await supabase
			.from('edu_objectives')
			.insert([{
				...objectiveData,
				order_num: orderNum
			}])
			.select()
			.single();

		if (createError) throw createError;

		// Update local state
		objectives.update((current) => [...current, data]);

		return { success: true, data };
	} catch (err) {
		const message = err instanceof Error ? err.message : 'Failed to create objective';
		console.error('Error creating objective:', err);
		return { success: false, error: message };
	}
}

export async function deleteObjective(objectiveId: number) {
	try {
		const { error: deleteError } = await supabase
			.from('edu_objectives')
			.delete()
			.eq('id', objectiveId);

		if (deleteError) throw deleteError;

		// Update local state
		objectives.update((current) => current.filter((o) => o.id !== objectiveId));

		return { success: true };
	} catch (err) {
		const message = err instanceof Error ? err.message : 'Failed to delete objective';
		console.error('Error deleting objective:', err);
		return { success: false, error: message };
	}
}

// Action Planning functions
export async function fetchActionPlanning(goalId: number, gradeLevel?: string | null) {
	try {
		let query = supabase
			.from('edu_action_planning')
			.select('*')
			.eq('goal_id', goalId);

		if (gradeLevel) {
			query = query.eq('grade_level', gradeLevel);
		}

		const { data, error: fetchError } = await query.order('created_at', { ascending: true });

		if (fetchError) throw fetchError;

		return { success: true, data: data || [] };
	} catch (err) {
		const message = err instanceof Error ? err.message : 'Failed to fetch action planning';
		console.error('Error fetching action planning:', err);
		return { success: false, error: message, data: [] };
	}
}

export async function fetchActionSections(actionPlanningId: number) {
	try {
		const { data, error: fetchError } = await supabase
			.from('edu_action_sections')
			.select('*')
			.eq('action_planning_id', actionPlanningId)
			.order('order_num', { ascending: true });

		if (fetchError) throw fetchError;

		return { success: true, data: data || [] };
	} catch (err) {
		const message = err instanceof Error ? err.message : 'Failed to fetch action sections';
		console.error('Error fetching action sections:', err);
		return { success: false, error: message, data: [] };
	}
}

export async function fetchActionItems(sectionId: number) {
	try {
		const { data, error: fetchError } = await supabase
			.from('edu_action_items')
			.select('*')
			.eq('section_id', sectionId)
			.order('order_num', { ascending: true });

		if (fetchError) throw fetchError;

		return { success: true, data: data || [] };
	} catch (err) {
		const message = err instanceof Error ? err.message : 'Failed to fetch action items';
		console.error('Error fetching action items:', err);
		return { success: false, error: message, data: [] };
	}
}

export async function fetchActionPlanningWithDetails(goalId: number, gradeLevel?: string | null) {
	try {
		let query = supabase
			.from('edu_action_planning')
			.select(`
				id,
				statement,
				grade_level,
				sections:edu_action_sections(
					id,
					title,
					description,
					order_num,
					items:edu_action_items(
						id,
						text,
						order_num
					)
				)
			`)
			.eq('goal_id', goalId);

		if (gradeLevel) {
			query = query.eq('grade_level', gradeLevel);
		}

		const { data, error: fetchError } = await query;

		if (fetchError) throw fetchError;

		// Transform and sort the data
		const transformed = (data || []).map((ap: any) => ({
			...ap,
			sections: (ap.sections || [])
				.sort((a: any, b: any) => a.order_num - b.order_num)
				.map((section: any) => ({
					...section,
					items: (section.items || [])
						.sort((a: any, b: any) => a.order_num - b.order_num)
				}))
		}));

		return { success: true, data: transformed };
	} catch (err) {
		const message = err instanceof Error ? err.message : 'Failed to fetch action planning with details';
		console.error('Error fetching action planning with details:', err);
		return { success: false, error: message, data: [] };
	}
}

export async function createActionPlanning(actionPlanningData: Omit<ActionPlanning, 'id' | 'created_at' | 'updated_at'>) {
	try {
		const { data, error: createError } = await supabase
			.from('edu_action_planning')
			.insert([actionPlanningData])
			.select()
			.single();

		if (createError) throw createError;

		return { success: true, data };
	} catch (err) {
		const message = err instanceof Error ? err.message : 'Failed to create action planning';
		console.error('Error creating action planning:', err);
		return { success: false, error: message };
	}
}

export async function updateActionPlanning(actionPlanningId: number, updates: Partial<ActionPlanning>) {
	try {
		const { data, error: updateError } = await supabase
			.from('edu_action_planning')
			.update(updates)
			.eq('id', actionPlanningId)
			.select()
			.single();

		if (updateError) throw updateError;

		return { success: true, data };
	} catch (err) {
		const message = err instanceof Error ? err.message : 'Failed to update action planning';
		console.error('Error updating action planning:', err);
		return { success: false, error: message };
	}
}

export async function deleteActionPlanning(actionPlanningId: number) {
	try {
		const { error: deleteError } = await supabase
			.from('edu_action_planning')
			.delete()
			.eq('id', actionPlanningId);

		if (deleteError) throw deleteError;

		return { success: true };
	} catch (err) {
		const message = err instanceof Error ? err.message : 'Failed to delete action planning';
		console.error('Error deleting action planning:', err);
		return { success: false, error: message };
	}
}

export async function createActionSection(sectionData: Omit<ActionSection, 'id' | 'created_at' | 'updated_at'>) {
	try {
		// Get max order_num for this action planning
		const { data: existingSections } = await supabase
			.from('edu_action_sections')
			.select('order_num')
			.eq('action_planning_id', sectionData.action_planning_id)
			.order('order_num', { ascending: false })
			.limit(1);

		const orderNum = existingSections && existingSections.length > 0
			? existingSections[0].order_num + 1
			: 1;

		const { data, error: createError } = await supabase
			.from('edu_action_sections')
			.insert([{
				...sectionData,
				order_num: orderNum
			}])
			.select()
			.single();

		if (createError) throw createError;

		return { success: true, data };
	} catch (err) {
		const message = err instanceof Error ? err.message : 'Failed to create action section';
		console.error('Error creating action section:', err);
		return { success: false, error: message };
	}
}

export async function updateActionSection(sectionId: number, updates: Partial<ActionSection>) {
	try {
		const { data, error: updateError } = await supabase
			.from('edu_action_sections')
			.update(updates)
			.eq('id', sectionId)
			.select()
			.single();

		if (updateError) throw updateError;

		return { success: true, data };
	} catch (err) {
		const message = err instanceof Error ? err.message : 'Failed to update action section';
		console.error('Error updating action section:', err);
		return { success: false, error: message };
	}
}

export async function deleteActionSection(sectionId: number) {
	try {
		const { error: deleteError } = await supabase
			.from('edu_action_sections')
			.delete()
			.eq('id', sectionId);

		if (deleteError) throw deleteError;

		return { success: true };
	} catch (err) {
		const message = err instanceof Error ? err.message : 'Failed to delete action section';
		console.error('Error deleting action section:', err);
		return { success: false, error: message };
	}
}

export async function createActionItem(itemData: Omit<ActionItem, 'id' | 'created_at' | 'updated_at'>) {
	try {
		// Get max order_num for this section
		const { data: existingItems } = await supabase
			.from('edu_action_items')
			.select('order_num')
			.eq('section_id', itemData.section_id)
			.order('order_num', { ascending: false })
			.limit(1);

		const orderNum = existingItems && existingItems.length > 0
			? existingItems[0].order_num + 1
			: 1;

		const { data, error: createError } = await supabase
			.from('edu_action_items')
			.insert([{
				...itemData,
				order_num: orderNum
			}])
			.select()
			.single();

		if (createError) throw createError;

		return { success: true, data };
	} catch (err) {
		const message = err instanceof Error ? err.message : 'Failed to create action item';
		console.error('Error creating action item:', err);
		return { success: false, error: message };
	}
}

export async function updateActionItem(itemId: number, updates: Partial<ActionItem>) {
	try {
		const { data, error: updateError } = await supabase
			.from('edu_action_items')
			.update(updates)
			.eq('id', itemId)
			.select()
			.single();

		if (updateError) throw updateError;

		return { success: true, data };
	} catch (err) {
		const message = err instanceof Error ? err.message : 'Failed to update action item';
		console.error('Error updating action item:', err);
		return { success: false, error: message };
	}
}

export async function deleteActionItem(itemId: number) {
	try {
		const { error: deleteError } = await supabase
			.from('edu_action_items')
			.delete()
			.eq('id', itemId);

		if (deleteError) throw deleteError;

		return { success: true };
	} catch (err) {
		const message = err instanceof Error ? err.message : 'Failed to delete action item';
		console.error('Error deleting action item:', err);
		return { success: false, error: message };
	}
}

// Approval functions
export async function approveGoal(goalId: number, userId: string) {
	loading.set(true);
	error.set(null);

	try {
		const { data, error: approveError } = await supabase
			.from('edu_goals')
			.update({
				is_approved: true,
				approved_by: userId,
				approved_at: new Date().toISOString()
			})
			.eq('id', goalId)
			.select()
			.single();

		if (approveError) throw approveError;

		// Update local state
		goals.update((current) => current.map((g) => (g.id === goalId ? data : g)));
		if (data) {
			selectedGoal.set(data);
		}

		return { success: true };
	} catch (err) {
		const message = err instanceof Error ? err.message : 'Failed to approve goal';
		error.set(message);
		console.error('Error approving goal:', err);
		return { success: false, error: message };
	} finally {
		loading.set(false);
	}
}

export async function unapproveGoal(goalId: number) {
	loading.set(true);
	error.set(null);

	try {
		const { data, error: unapproveError } = await supabase
			.from('edu_goals')
			.update({
				is_approved: false,
				approved_by: null,
				approved_at: null
			})
			.eq('id', goalId)
			.select()
			.single();

		if (unapproveError) throw unapproveError;

		// Update local state
		goals.update((current) => current.map((g) => (g.id === goalId ? data : g)));
		if (data) {
			selectedGoal.set(data);
		}

		return { success: true };
	} catch (err) {
		const message = err instanceof Error ? err.message : 'Failed to unapprove goal';
		error.set(message);
		console.error('Error unapproving goal:', err);
		return { success: false, error: message };
	} finally {
		loading.set(false);
	}
}

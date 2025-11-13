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

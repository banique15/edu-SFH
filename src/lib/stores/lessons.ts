import { writable, derived } from 'svelte/store';
import { supabase } from '$lib/supabase';

export type ArtForm =
	| 'Musical Exploration'
	| 'Art'
	| 'Creative Writing'
	| 'Dance/Movement'
	| 'Drama';

export interface Lesson {
	id: number;
	goal_id: number;
	lesson_number: number;
	title: string;
	art_form: ArtForm;
	duration_min: number | null;
	duration_max: number | null;
	grade_level: string | null;
	is_approved: boolean;
	approved_by: string | null;
	approved_at: string | null;
	created_at: string;
	updated_at: string;
}

export interface LessonMaterial {
	id: number;
	lesson_id: number;
	material_type: string;
	name: string;
	description: string | null;
	is_optional: boolean;
	order_num: number;
	created_at: string;
}

export interface LessonContent {
	id: number;
	lesson_id: number;
	section_type: string;
	section_title: string;
	content: string;
	order_num: number;
	created_at: string;
	updated_at: string;
}

export interface LessonObjective {
	id: number;
	lesson_id: number;
	grade_level: string;
	category: 'Knowledge' | 'Discourse' | 'Attitudes' | 'Capacity' | 'Action';
	description: string;
	nccas_standard: string | null;
	order_num: number;
	created_at: string;
}

export interface LessonMedia {
	id: number;
	lesson_id: number;
	media_type: string;
	title: string;
	artist: string | null;
	genre: string | null;
	url: string | null;
	description: string | null;
	order_num: number;
	created_at: string;
}

// Stores
export const lessons = writable<Lesson[]>([]);
export const lessonMaterials = writable<LessonMaterial[]>([]);
export const lessonContent = writable<LessonContent[]>([]);
export const lessonObjectives = writable<LessonObjective[]>([]);
export const lessonMedia = writable<LessonMedia[]>([]);
export const selectedLesson = writable<Lesson | null>(null);
export const loading = writable(false);
export const detailsLoading = writable(false);
export const error = writable<string | null>(null);

// Derived stores
export const selectedLessonMaterials = derived(
	[selectedLesson, lessonMaterials],
	([$selectedLesson, $materials]) => {
		if (!$selectedLesson) return [];
		return $materials.filter((m) => m.lesson_id === $selectedLesson.id);
	}
);

export const selectedLessonContent = derived(
	[selectedLesson, lessonContent],
	([$selectedLesson, $content]) => {
		if (!$selectedLesson) return [];
		return $content.filter((c) => c.lesson_id === $selectedLesson.id);
	}
);

export const selectedLessonObjectives = derived(
	[selectedLesson, lessonObjectives],
	([$selectedLesson, $objectives]) => {
		if (!$selectedLesson) return [];
		return $objectives.filter((o) => o.lesson_id === $selectedLesson.id);
	}
);

export const selectedLessonMedia = derived(
	[selectedLesson, lessonMedia],
	([$selectedLesson, $media]) => {
		if (!$selectedLesson) return [];
		return $media.filter((m) => m.lesson_id === $selectedLesson.id);
	}
);

// Functions
export async function fetchLessons(goalId?: number) {
	loading.set(true);
	error.set(null);

	try {
		let query = supabase.from('edu_lessons').select('*');

		if (goalId) {
			query = query.eq('goal_id', goalId);
		}

		const { data, error: fetchError } = await query.order('lesson_number', { ascending: true });

		if (fetchError) throw fetchError;

		lessons.set(data || []);
	} catch (err) {
		const message = err instanceof Error ? err.message : 'Failed to fetch lessons';
		error.set(message);
		console.error('Error fetching lessons:', err);
	} finally {
		loading.set(false);
	}
}

export async function fetchLessonMaterials(lessonId?: number) {
	try {
		let query = supabase.from('edu_lesson_materials').select('*');

		if (lessonId) {
			query = query.eq('lesson_id', lessonId);
		}

		const { data, error: fetchError } = await query.order('order_num', { ascending: true });

		if (fetchError) throw fetchError;

		lessonMaterials.set(data || []);
	} catch (err) {
		console.error('Error fetching lesson materials:', err);
	}
}

export async function fetchLessonContent(lessonId?: number) {
	try {
		let query = supabase.from('edu_lesson_content').select('*');

		if (lessonId) {
			query = query.eq('lesson_id', lessonId);
		}

		const { data, error: fetchError } = await query.order('order_num', { ascending: true });

		if (fetchError) throw fetchError;

		lessonContent.set(data || []);
	} catch (err) {
		console.error('Error fetching lesson content:', err);
	}
}

export async function fetchLessonObjectives(lessonId?: number) {
	try {
		let query = supabase.from('edu_lesson_objectives').select('*');

		if (lessonId) {
			query = query.eq('lesson_id', lessonId);
		}

		const { data, error: fetchError } = await query.order('order_num', { ascending: true });

		if (fetchError) throw fetchError;

		lessonObjectives.set(data || []);
	} catch (err) {
		console.error('Error fetching lesson objectives:', err);
	}
}

export async function fetchLessonMedia(lessonId?: number) {
	try {
		let query = supabase.from('edu_lesson_media').select('*');

		if (lessonId) {
			query = query.eq('lesson_id', lessonId);
		}

		const { data, error: fetchError } = await query.order('order_num', { ascending: true });

		if (fetchError) throw fetchError;

		lessonMedia.set(data || []);
	} catch (err) {
		console.error('Error fetching lesson media:', err);
	}
}

export async function fetchLessonDetails(lessonId: number) {
	detailsLoading.set(true);
	error.set(null);

	try {
		// Fetch lesson
		const { data: lessonData, error: lessonError } = await supabase
			.from('edu_lessons')
			.select('*')
			.eq('id', lessonId)
			.single();

		if (lessonError) throw lessonError;

		selectedLesson.set(lessonData);

		// Fetch related data
		await Promise.all([
			fetchLessonMaterials(lessonId),
			fetchLessonContent(lessonId),
			fetchLessonObjectives(lessonId),
			fetchLessonMedia(lessonId)
		]);
	} catch (err) {
		const message = err instanceof Error ? err.message : 'Failed to fetch lesson details';
		error.set(message);
		console.error('Error fetching lesson details:', err);
	} finally {
		detailsLoading.set(false);
	}
}

export function clearSelectedLesson() {
	selectedLesson.set(null);
}

// Update functions
export async function updateLesson(
	lessonId: number,
	updates: Partial<Omit<Lesson, 'id' | 'created_at' | 'updated_at'>>
) {
	try {
		const { data, error: updateError } = await supabase
			.from('edu_lessons')
			.update({ ...updates, updated_at: new Date().toISOString() })
			.eq('id', lessonId)
			.select()
			.single();

		if (updateError) throw updateError;

		// Update local stores
		lessons.update((all) => all.map((l) => (l.id === lessonId ? data : l)));
		selectedLesson.update((current) => (current?.id === lessonId ? data : current));

		return { success: true, data };
	} catch (err) {
		const message = err instanceof Error ? err.message : 'Failed to update lesson';
		error.set(message);
		console.error('Error updating lesson:', err);
		return { success: false, error: message };
	}
}

export async function updateMaterial(
	materialId: number,
	updates: Partial<Omit<LessonMaterial, 'id' | 'created_at'>>
) {
	try {
		const { data, error: updateError } = await supabase
			.from('edu_lesson_materials')
			.update(updates)
			.eq('id', materialId)
			.select()
			.single();

		if (updateError) throw updateError;

		// Update local store
		lessonMaterials.update((all) => all.map((m) => (m.id === materialId ? data : m)));

		return { success: true, data };
	} catch (err) {
		const message = err instanceof Error ? err.message : 'Failed to update material';
		console.error('Error updating material:', err);
		return { success: false, error: message };
	}
}

export async function updateContent(
	contentId: number,
	updates: Partial<Omit<LessonContent, 'id' | 'created_at' | 'updated_at'>>
) {
	try {
		const { data, error: updateError } = await supabase
			.from('edu_lesson_content')
			.update({ ...updates, updated_at: new Date().toISOString() })
			.eq('id', contentId)
			.select()
			.single();

		if (updateError) throw updateError;

		// Update local store
		lessonContent.update((all) => all.map((c) => (c.id === contentId ? data : c)));

		return { success: true, data };
	} catch (err) {
		const message = err instanceof Error ? err.message : 'Failed to update content';
		console.error('Error updating content:', err);
		return { success: false, error: message };
	}
}

export async function updateMedia(
	mediaId: number,
	updates: Partial<Omit<LessonMedia, 'id' | 'created_at'>>
) {
	try {
		const { data, error: updateError } = await supabase
			.from('edu_lesson_media')
			.update(updates)
			.eq('id', mediaId)
			.select()
			.single();

		if (updateError) throw updateError;

		// Update local store
		lessonMedia.update((all) => all.map((m) => (m.id === mediaId ? data : m)));

		return { success: true, data };
	} catch (err) {
		const message = err instanceof Error ? err.message : 'Failed to update media';
		console.error('Error updating media:', err);
		return { success: false, error: message };
	}
}

// Create functions
export async function createLesson(
	lesson: Omit<Lesson, 'id' | 'created_at' | 'updated_at'>
) {
	try {
		const { data, error: createError } = await supabase
			.from('edu_lessons')
			.insert(lesson)
			.select()
			.single();

		if (createError) throw createError;

		// Update local store
		lessons.update((all) => [...all, data]);

		return { success: true, data };
	} catch (err) {
		const message = err instanceof Error ? err.message : 'Failed to create lesson';
		error.set(message);
		console.error('Error creating lesson:', err);
		return { success: false, error: message };
	}
}

export async function createMaterial(
	material: Omit<LessonMaterial, 'id' | 'created_at'>
) {
	try {
		const { data, error: createError } = await supabase
			.from('edu_lesson_materials')
			.insert(material)
			.select()
			.single();

		if (createError) throw createError;

		// Update local store
		lessonMaterials.update((all) => [...all, data]);

		return { success: true, data };
	} catch (err) {
		const message = err instanceof Error ? err.message : 'Failed to create material';
		console.error('Error creating material:', err);
		return { success: false, error: message };
	}
}

export async function createContent(
	content: Omit<LessonContent, 'id' | 'created_at' | 'updated_at'>
) {
	try {
		const { data, error: createError } = await supabase
			.from('edu_lesson_content')
			.insert(content)
			.select()
			.single();

		if (createError) throw createError;

		// Update local store
		lessonContent.update((all) => [...all, data]);

		return { success: true, data };
	} catch (err) {
		const message = err instanceof Error ? err.message : 'Failed to create content';
		console.error('Error creating content:', err);
		return { success: false, error: message };
	}
}

export async function createMedia(media: Omit<LessonMedia, 'id' | 'created_at'>) {
	try {
		const { data, error: createError } = await supabase
			.from('edu_lesson_media')
			.insert(media)
			.select()
			.single();

		if (createError) throw createError;

		// Update local store
		lessonMedia.update((all) => [...all, data]);

		return { success: true, data };
	} catch (err) {
		const message = err instanceof Error ? err.message : 'Failed to create media';
		console.error('Error creating media:', err);
		return { success: false, error: message };
	}
}

// Delete functions
export async function deleteLesson(lessonId: number) {
	try {
		const { error: deleteError } = await supabase
			.from('edu_lessons')
			.delete()
			.eq('id', lessonId);

		if (deleteError) throw deleteError;

		// Update local stores
		lessons.update((all) => all.filter((l) => l.id !== lessonId));
		selectedLesson.update((current) => (current?.id === lessonId ? null : current));

		return { success: true };
	} catch (err) {
		const message = err instanceof Error ? err.message : 'Failed to delete lesson';
		error.set(message);
		console.error('Error deleting lesson:', err);
		return { success: false, error: message };
	}
}

export async function deleteMaterial(materialId: number) {
	try {
		const { error: deleteError } = await supabase
			.from('edu_lesson_materials')
			.delete()
			.eq('id', materialId);

		if (deleteError) throw deleteError;

		// Update local store
		lessonMaterials.update((all) => all.filter((m) => m.id !== materialId));

		return { success: true };
	} catch (err) {
		const message = err instanceof Error ? err.message : 'Failed to delete material';
		console.error('Error deleting material:', err);
		return { success: false, error: message };
	}
}

export async function deleteContent(contentId: number) {
	try {
		const { error: deleteError } = await supabase
			.from('edu_lesson_content')
			.delete()
			.eq('id', contentId);

		if (deleteError) throw deleteError;

		// Update local store
		lessonContent.update((all) => all.filter((c) => c.id !== contentId));

		return { success: true };
	} catch (err) {
		const message = err instanceof Error ? err.message : 'Failed to delete content';
		console.error('Error deleting content:', err);
		return { success: false, error: message };
	}
}

export async function deleteMedia(mediaId: number) {
	try {
		const { error: deleteError } = await supabase
			.from('edu_lesson_media')
			.delete()
			.eq('id', mediaId);

		if (deleteError) throw deleteError;

		// Update local store
		lessonMedia.update((all) => all.filter((m) => m.id !== mediaId));

		return { success: true };
	} catch (err) {
		const message = err instanceof Error ? err.message : 'Failed to delete media';
		console.error('Error deleting media:', err);
		return { success: false, error: message };
	}
}

// Approval functions
export async function approveLesson(lessonId: number, userId: string) {
	loading.set(true);
	error.set(null);

	try {
		const { data, error: approveError } = await supabase
			.from('edu_lessons')
			.update({
				is_approved: true,
				approved_by: userId,
				approved_at: new Date().toISOString()
			})
			.eq('id', lessonId)
			.select()
			.single();

		if (approveError) throw approveError;

		// Update local stores
		lessons.update((all) => all.map((l) => (l.id === lessonId ? data : l)));
		selectedLesson.update((current) => (current?.id === lessonId ? data : current));

		return { success: true };
	} catch (err) {
		const message = err instanceof Error ? err.message : 'Failed to approve lesson';
		error.set(message);
		console.error('Error approving lesson:', err);
		return { success: false, error: message };
	} finally {
		loading.set(false);
	}
}

export async function unapproveLesson(lessonId: number) {
	loading.set(true);
	error.set(null);

	try {
		const { data, error: unapproveError } = await supabase
			.from('edu_lessons')
			.update({
				is_approved: false,
				approved_by: null,
				approved_at: null
			})
			.eq('id', lessonId)
			.select()
			.single();

		if (unapproveError) throw unapproveError;

		// Update local stores
		lessons.update((all) => all.map((l) => (l.id === lessonId ? data : l)));
		selectedLesson.update((current) => (current?.id === lessonId ? data : current));

		return { success: true };
	} catch (err) {
		const message = err instanceof Error ? err.message : 'Failed to unapprove lesson';
		error.set(message);
		console.error('Error unapproving lesson:', err);
		return { success: false, error: message };
	} finally {
		loading.set(false);
	}
}

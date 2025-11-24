<script lang="ts">
	import { goto } from '$app/navigation';
	import { getSdgColor, getSdgTextColor, SDG_NAMES } from '$lib/utils/sdg-colors';
	import { favoritesStore } from '$lib/stores/favorites';
	import { getLessonSlug } from '$lib/utils/slugify';
	import { formatGradeLevel } from '$lib/utils/grade-formatter';
	import type { Lesson } from '$lib/stores/lessons';
	import type { Goal } from '$lib/stores/goals';

	interface Props {
		lesson: Lesson;
		goal: Goal | undefined;
	}

	let { lesson, goal }: Props = $props();

	const favorites = favoritesStore;
	const isFavorite = $derived($favorites.includes(lesson.id));

	const goalNumber = $derived(goal?.goal_number || 0);
	const borderColor = $derived(getSdgColor(goalNumber));
	const pillBgColor = $derived(getSdgColor(goalNumber));
	const pillTextColor = $derived(getSdgTextColor(goalNumber));

	// Format grade levels for display
	const gradeLevels = $derived.by(() => {
		const formatted = formatGradeLevel(lesson.grade_level);
		return formatted ? [formatted] : [];
	});

	function toggleFavorite(event: MouseEvent) {
		event.stopPropagation();
		event.preventDefault();
		favoritesStore.toggle(lesson.id);
	}

	function handleCardClick() {
		goto(`/lessons/${getLessonSlug(lesson)}`);
	}
</script>

<div
	class="card bg-base-100 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer group w-full h-full"
	style="border: 1.5px solid {borderColor}; border-radius: 20px;"
	role="button"
	tabindex="0"
	onclick={handleCardClick}
	onkeydown={(e) => e.key === 'Enter' && handleCardClick()}
>
	<div class="card-body p-5 flex flex-col justify-between h-full">
		<!-- Header with title and favorite icon -->
		<div class="flex flex-col gap-1.5 mb-3">
			<div class="flex items-start justify-between gap-2">
				<h3 class="text-2xl font-normal leading-tight flex-1 min-w-0 line-clamp-2" style="font-family: 'Founders Grotesk', sans-serif; letter-spacing: -0.32px;">
					{lesson.title}
				</h3>

				<!-- Favorite Icon -->
				<button
					class="btn btn-ghost btn-sm btn-circle flex-shrink-0 opacity-70 group-hover:opacity-100 transition-opacity"
					onclick={toggleFavorite}
					aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
				>
					{#if isFavorite}
						<!-- Filled heart -->
						<svg class="w-5 h-5" style="fill: {borderColor};" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
						</svg>
					{:else}
						<!-- Outline heart -->
						<svg class="w-5 h-5" style="stroke: {borderColor};" fill="none" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<path stroke-linecap="round" stroke-linejoin="round" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
						</svg>
					{/if}
				</button>
			</div>

			<!-- Description -->
			<p class="text-base leading-snug text-base-content line-clamp-2" style="font-family: 'Founders Grotesk', sans-serif; line-height: 1.2;">
				{#if goal}
					Explore Goal {goal.goal_number}: {goal.title} through {lesson.art_form.toLowerCase()}.
				{:else}
					{lesson.art_form} lesson
				{/if}
			</p>
		</div>

		<!-- Pills -->
		<div class="flex flex-wrap gap-1.5 mt-auto">
			<!-- Goal pill -->
			{#if goal}
				<div
					class="px-3 pb-0.5 pt-0 rounded-full text-sm font-normal truncate"
					style="background-color: {pillBgColor}; color: {pillTextColor}; font-family: 'Founders Grotesk', sans-serif; letter-spacing: -0.16px; line-height: 1.2; height: 28px; display: flex; align-items: center;"
				>
					{goal.goal_number}. {SDG_NAMES[goal.goal_number]}
				</div>
			{/if}

			<!-- Art form pill -->
			<div
				class="px-3 pb-0.5 pt-0 rounded-full text-sm font-normal"
				style="background-color: {pillBgColor}; color: {pillTextColor}; font-family: 'Founders Grotesk', sans-serif; letter-spacing: -0.16px; line-height: 1.2; height: 28px; display: flex; align-items: center;"
			>
				{lesson.art_form}
			</div>

			<!-- Grade level pills -->
			{#each gradeLevels as gradeLevel}
				<div
					class="px-3 pb-0.5 pt-0 rounded-full text-sm font-normal"
					style="background-color: {pillBgColor}; color: {pillTextColor}; font-family: 'Founders Grotesk', sans-serif; letter-spacing: -0.16px; line-height: 1.2; height: 28px; display: flex; align-items: center;"
				>
					{gradeLevel}
				</div>
			{/each}
		</div>
	</div>
</div>

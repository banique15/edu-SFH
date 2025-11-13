<script lang="ts">
	import { onMount } from 'svelte';
	import type { ArtForm } from '$lib/stores/lessons';
	import { SDG_NAMES } from '$lib/utils/sdg-colors';

	interface Props {
		selectedGradeLevels: string[];
		selectedSubjects: ArtForm[];
		selectedGoals: number[];
		onGradeLevelToggle: (level: string) => void;
		onSubjectToggle: (subject: ArtForm) => void;
		onGoalToggle: (goalNumber: number) => void;
		onApplyFilters: () => void;
	}

	let {
		selectedGradeLevels,
		selectedSubjects,
		selectedGoals,
		onGradeLevelToggle,
		onSubjectToggle,
		onGoalToggle,
		onApplyFilters
	}: Props = $props();

	// Start collapsed on mobile, expanded on desktop
	let isExpanded = $state(false);
	
	// Check if we're on desktop and expand by default on initial load
	onMount(() => {
		// Check if screen is desktop size (lg breakpoint is 1024px)
		if (typeof window !== 'undefined') {
			isExpanded = window.innerWidth >= 1024;
		}
	});

	const gradeLevelOptions = ['All', '5-8', '9-12'];
	const subjectOptions: ArtForm[] = [
		'Art',
		'Musical Exploration',
		'Creative Writing',
		'Dance/Movement',
		'Drama'
	];
	const goalNumbers = Array.from({ length: 17 }, (_, i) => i + 1);

	function toggleExpanded() {
		isExpanded = !isExpanded;
	}

	function isGradeLevelSelected(level: string): boolean {
		return selectedGradeLevels.includes(level);
	}

	function isSubjectSelected(subject: ArtForm): boolean {
		return selectedSubjects.includes(subject);
	}

	function isGoalSelected(goalNumber: number): boolean {
		return selectedGoals.includes(goalNumber);
	}

	// Format subject names for display
	function formatSubjectName(subject: ArtForm): string {
		if (subject === 'Art') return 'Visual Art';
		if (subject === 'Dance/Movement') return 'Dance & Movement';
		return subject;
	}
</script>

<div class="bg-base-100 border border-base-300 rounded-[20px] h-fit lg:sticky lg:top-4 transition-all duration-200" class:p-5={isExpanded} class:p-3={!isExpanded}>
	<!-- Header with toggle -->
	<div class="flex items-center justify-between transition-all duration-200" class:mb-6={isExpanded} class:mb-0={!isExpanded}>
		<h2 class="text-2xl text-primary font-normal" style="font-family: 'Founders Grotesk', sans-serif; letter-spacing: -0.32px;">
			Filter
		</h2>
		<button
			class="btn btn-ghost btn-sm btn-circle"
			onclick={toggleExpanded}
			aria-label={isExpanded ? 'Collapse filters' : 'Expand filters'}
		>
			<svg
				class="w-6 h-6 transition-transform duration-200"
				class:rotate-180={!isExpanded}
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
			>
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
			</svg>
		</button>
	</div>

	{#if isExpanded}
		<div class="space-y-6">
			<!-- Grade Level -->
			<div>
				<h3 class="text-base font-medium mb-2.5" style="font-family: 'Founders Grotesk', sans-serif;">
					Grade Level
				</h3>
				<div class="flex flex-wrap gap-1.5">
					{#each gradeLevelOptions as level}
						<button
							class="px-3.5 py-1.5 rounded-full text-sm font-normal transition-all"
							class:bg-primary={isGradeLevelSelected(level)}
							class:text-primary-content={isGradeLevelSelected(level)}
							class:border-2={!isGradeLevelSelected(level)}
							class:border-base-content={!isGradeLevelSelected(level)}
							class:text-base-content={!isGradeLevelSelected(level)}
							style="font-family: 'Founders Grotesk', sans-serif; letter-spacing: -0.16px; line-height: 1.2;"
							onclick={() => onGradeLevelToggle(level)}
						>
							{#if isGradeLevelSelected(level) && level !== 'All'}
								<span class="inline-flex items-center gap-1.5">
									{level}
									<svg class="w-2 h-2" fill="currentColor" viewBox="0 0 8 8">
										<path d="M1.41 0L0 1.41l2.83 2.83L0 7.07 1.41 8.48 4.24 5.65 7.07 8.48 8.48 7.07 5.65 4.24 8.48 1.41 7.07 0 4.24 2.83 1.41 0z"/>
									</svg>
								</span>
							{:else}
								{level}
							{/if}
						</button>
					{/each}
				</div>
			</div>

			<!-- Subjects -->
			<div>
				<h3 class="text-base font-medium mb-2.5" style="font-family: 'Founders Grotesk', sans-serif;">
					Subjects
				</h3>
				<div class="flex flex-wrap gap-1.5">
					{#each subjectOptions as subject}
						<button
							class="px-3.5 py-1.5 rounded-full text-sm font-normal transition-all"
							class:bg-primary={isSubjectSelected(subject)}
							class:text-primary-content={isSubjectSelected(subject)}
							class:border-2={!isSubjectSelected(subject)}
							class:border-base-content={!isSubjectSelected(subject)}
							class:text-base-content={!isSubjectSelected(subject)}
							style="font-family: 'Founders Grotesk', sans-serif; letter-spacing: -0.16px; line-height: 1.2;"
							onclick={() => onSubjectToggle(subject)}
						>
							{#if isSubjectSelected(subject)}
								<span class="inline-flex items-center gap-1.5">
									{formatSubjectName(subject)}
									<svg class="w-2 h-2" fill="currentColor" viewBox="0 0 8 8">
										<path d="M1.41 0L0 1.41l2.83 2.83L0 7.07 1.41 8.48 4.24 5.65 7.07 8.48 8.48 7.07 5.65 4.24 8.48 1.41 7.07 0 4.24 2.83 1.41 0z"/>
									</svg>
								</span>
							{:else}
								{formatSubjectName(subject)}
							{/if}
						</button>
					{/each}
				</div>
			</div>

			<!-- Sustainable Development Goals -->
			<div>
				<h3 class="text-base font-medium mb-2.5" style="font-family: 'Founders Grotesk', sans-serif;">
					Sustainable Development Goals
				</h3>
				<div class="flex flex-wrap gap-1.5 max-h-96 overflow-y-auto pr-1">
					<!-- All goals option -->
					<button
						class="px-2.5 py-1 rounded-full text-xs font-normal transition-all"
						class:bg-primary={selectedGoals.length === 0}
						class:text-primary-content={selectedGoals.length === 0}
						class:border-2={selectedGoals.length > 0}
						class:border-base-content={selectedGoals.length > 0}
						class:text-base-content={selectedGoals.length > 0}
						style="font-family: 'Founders Grotesk', sans-serif; line-height: 1.2;"
						onclick={() => {
							// Clear all goals when "All" is clicked
							selectedGoals.forEach(goal => onGoalToggle(goal));
						}}
					>
						{#if selectedGoals.length === 0}
							<span class="inline-flex items-center gap-1.5">
								All
								<svg class="w-2 h-2" fill="currentColor" viewBox="0 0 10 10">
									<path d="M1.41 0L0 1.41l2.83 2.83L0 7.07 1.41 8.48 4.24 5.65 7.07 8.48 8.48 7.07 5.65 4.24 8.48 1.41 7.07 0 4.24 2.83 1.41 0z"/>
								</svg>
							</span>
						{:else}
							All
						{/if}
					</button>

					<!-- Individual goals -->
					{#each goalNumbers as goalNumber}
						<button
							class="px-2.5 py-1 rounded-full text-xs font-normal transition-all"
							class:bg-primary={isGoalSelected(goalNumber)}
							class:text-primary-content={isGoalSelected(goalNumber)}
							class:border-2={!isGoalSelected(goalNumber)}
							class:border-base-content={!isGoalSelected(goalNumber)}
							class:text-base-content={!isGoalSelected(goalNumber)}
							style="font-family: 'Founders Grotesk', sans-serif; line-height: 1.2;"
							onclick={() => onGoalToggle(goalNumber)}
						>
							{goalNumber}. {SDG_NAMES[goalNumber]}
						</button>
					{/each}
				</div>
			</div>

			<!-- Apply Filters Button -->
			<button
				class="btn btn-primary w-full rounded-full"
				style="font-family: 'Founders Grotesk', sans-serif;"
				onclick={onApplyFilters}
			>
				Apply Filters
			</button>
		</div>
	{/if}
</div>

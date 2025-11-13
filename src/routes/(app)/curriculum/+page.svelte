<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { lessons, fetchLessons, type ArtForm } from '$lib/stores/lessons';
	import { goals, fetchGoals } from '$lib/stores/goals';
	import { favoritesStore } from '$lib/stores/favorites';
	import LessonCard from '$lib/components/library/LessonCard.svelte';
	import SearchBar from '$lib/components/library/SearchBar.svelte';
	import FilterSidebar from '$lib/components/library/FilterSidebar.svelte';
	import Footer from '$lib/components/Footer.svelte';

	// Filter state
	let searchQuery = $state('');
	let selectedGradeLevels = $state<string[]>(['All']);
	let selectedSubjects = $state<ArtForm[]>([]);
	let selectedGoals = $state<number[]>([]);

	// Derived filtered lessons
	let filteredLessons = $derived.by(() => {
		let result = $lessons;

		// Search filter
		if (searchQuery.trim()) {
			const query = searchQuery.toLowerCase();
			result = result.filter(
				(lesson) =>
					lesson.title.toLowerCase().includes(query) ||
					lesson.art_form.toLowerCase().includes(query)
			);
		}

		// Grade level filter
		if (!selectedGradeLevels.includes('All') && selectedGradeLevels.length > 0) {
			result = result.filter((lesson) => {
				if (!lesson.grade_level) return false;
				return selectedGradeLevels.some((level) => lesson.grade_level?.includes(level));
			});
		}

		// Subject filter
		if (selectedSubjects.length > 0) {
			result = result.filter((lesson) => selectedSubjects.includes(lesson.art_form));
		}

		// SDG Goals filter
		if (selectedGoals.length > 0) {
			result = result.filter((lesson) => selectedGoals.includes(lesson.goal_id));
		}

		return result;
	});

	// Saved lessons (favorites)
	let savedLessons = $derived.by(() => {
		return $lessons.filter((lesson) => $favoritesStore.includes(lesson.id));
	});

	onMount(async () => {
		await Promise.all([fetchGoals(), fetchLessons()]);
		favoritesStore.initialize();

		// Check for grade parameter in URL and set filter
		const gradeParam = $page.url.searchParams.get('grade');
		if (gradeParam) {
			// Set the grade filter directly - values are '5-8' or '9-12'
			if (gradeParam === '5-8' || gradeParam === '9-12') {
				selectedGradeLevels = [gradeParam];
			}
		}
	});

	function handleSearchChange(value: string) {
		searchQuery = value;
	}

	function handleGradeLevelToggle(level: string) {
		if (level === 'All') {
			selectedGradeLevels = ['All'];
		} else {
			// Remove 'All' if it exists
			selectedGradeLevels = selectedGradeLevels.filter((l) => l !== 'All');

			// Toggle the level
			if (selectedGradeLevels.includes(level)) {
				selectedGradeLevels = selectedGradeLevels.filter((l) => l !== level);
				// If no levels selected, set back to All
				if (selectedGradeLevels.length === 0) {
					selectedGradeLevels = ['All'];
				}
			} else {
				selectedGradeLevels = [...selectedGradeLevels, level];
			}
		}
	}

	function handleSubjectToggle(subject: ArtForm) {
		if (selectedSubjects.includes(subject)) {
			selectedSubjects = selectedSubjects.filter((s) => s !== subject);
		} else {
			selectedSubjects = [...selectedSubjects, subject];
		}
	}

	function handleGoalToggle(goalNumber: number) {
		if (selectedGoals.includes(goalNumber)) {
			selectedGoals = selectedGoals.filter((g) => g !== goalNumber);
		} else {
			selectedGoals = [...selectedGoals, goalNumber];
		}
	}

	function handleApplyFilters() {
		// Filters are applied reactively, but this provides user feedback
		console.log('Filters applied');
	}

	// Create a reactive map of lesson goal_id to Goal for efficient lookups
	let goalMap = $derived.by(() => {
		const map = new Map();
		for (const goal of $goals) {
			map.set(goal.id, goal);
		}
		return map;
	});

	// Reactive function to get goal for a lesson
	function getGoalForLesson(lessonGoalId: number) {
		return goalMap.get(lessonGoalId);
	}
</script>

<svelte:head>
	<title>Curriculum Library | Sing for Hope Education</title>
</svelte:head>

<div class="min-h-screen bg-base-200/30 pb-8 p-6">
	<div class="max-w-7xl mx-auto py-6">
		<!-- Page Title -->
		<h1 class="text-4xl lg:text-5xl font-normal mb-6 text-base-content py-4 lg:py-9 text-primary" style="font-family: 'Founders Grotesk', sans-serif; letter-spacing: -0.52px;">
			Curriculum Library
		</h1>

		<!-- Search Bar -->
		<div id="curriculum-search">
			<SearchBar bind:searchQuery onSearchChange={handleSearchChange} />
		</div>

		<!-- Main Content: Filters + Lesson Grid -->
		<div class="grid grid-cols-1 lg:grid-cols-[320px_1fr] xl:grid-cols-[340px_1fr] gap-6 mb-12">
			<!-- Filter Sidebar -->
			<div>
				<FilterSidebar
					{selectedGradeLevels}
					{selectedSubjects}
					{selectedGoals}
					onGradeLevelToggle={handleGradeLevelToggle}
					onSubjectToggle={handleSubjectToggle}
					onGoalToggle={handleGoalToggle}
					onApplyFilters={handleApplyFilters}
				/>
			</div>

			<!-- Lesson Grid -->
			<div>
				{#if filteredLessons.length === 0}
					<div class="text-center py-16">
						<svg class="w-24 h-24 mx-auto mb-4 text-base-content/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
						</svg>
						<h3 class="text-xl font-medium text-base-content/60 mb-2">No lessons found</h3>
						<p class="text-base-content/50">Try adjusting your filters or search query</p>
					</div>
				{:else}
					<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
						{#each filteredLessons as lesson (lesson.id)}
							<LessonCard {lesson} goal={getGoalForLesson(lesson.goal_id)} />
						{/each}
					</div>
				{/if}
			</div>
		</div>

		<!-- Saved Lessons Section -->
		<div class="bg-base-100 rounded-[20px] p-6 lg:p-8">
			<div class="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between mb-6">
				<h2 class="text-3xl lg:text-4xl font-normal" style="font-family: 'Founders Grotesk', sans-serif; letter-spacing: -0.52px;">
					Your saved lessons
				</h2>
				<a
					href="/account"
					class="btn btn-outline btn-sm rounded-full w-full lg:w-auto"
					style="font-family: 'Founders Grotesk', sans-serif;"
				>
					Go to My Account
				</a>
			</div>

			{#if savedLessons.length > 0}
				<!-- Horizontal scroll container -->
				<div class="relative">
					<div class="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory hide-scrollbar">
						{#each savedLessons.slice(0, 4) as lesson (lesson.id)}
							<div class="flex-none w-72 snap-start">
								<LessonCard {lesson} goal={getGoalForLesson(lesson.goal_id)} />
							</div>
						{/each}
					</div>

					{#if savedLessons.length > 4}
						<div class="flex items-center justify-center gap-2 mt-4">
							<button class="text-sm text-base-content hover:text-primary transition-colors" style="font-family: 'Founders Grotesk', sans-serif;">
								See more
							</button>
							<svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
							</svg>
						</div>
					{/if}
				</div>
			{:else}
				<div class="text-center py-10 border border-dashed border-base-content/20 rounded-[16px]">
					<p class="text-base-content/70 text-lg mb-3">You haven't saved any lessons yet.</p>
					<p class="text-base-content/50 mb-6">Tap the heart icon on lessons to build your personal collection.</p>
					<a href="#curriculum-search" class="btn btn-primary rounded-full">Browse lessons</a>
				</div>
			{/if}
		</div>
	</div>
</div>


<style>
	.hide-scrollbar {
		-ms-overflow-style: none;
		scrollbar-width: none;
	}
	.hide-scrollbar::-webkit-scrollbar {
		display: none;
	}
</style>

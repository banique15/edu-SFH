<script lang="ts">
	import { onMount } from "svelte";
	import { goto } from "$app/navigation";
	import { lessons, fetchLessons } from "$lib/stores/lessons";
	import { goals, fetchGoals } from "$lib/stores/goals";
	import SubjectHero from "$lib/components/SubjectHero.svelte";
	import LessonCard from "$lib/components/LessonCard.svelte";
	import CreativeWritingSVG from "$lib/components/subjects/CreativeWritingSVG.svelte";
	import { slugify } from "$lib/utils/slugify";
	import type { PageData } from "./$types";

	let { data }: { data: PageData } = $props();

	let selectedGrade = $state<"5-8" | "9-12">("5-8");

	// Filter lessons by art form
	let filteredLessons = $derived(
		$lessons.filter((lesson) => lesson.art_form === data.artForm),
	);

	// Further filter by grade level
	let gradeLessons = $derived(
		filteredLessons.filter((lesson) => {
			if (!lesson.grade_level) return true;
			if (selectedGrade === "5-8") {
				return (
					lesson.grade_level.includes("5") ||
					lesson.grade_level.includes("6") ||
					lesson.grade_level.includes("7") ||
					lesson.grade_level.includes("8")
				);
			} else {
				return (
					lesson.grade_level.includes("9") ||
					lesson.grade_level.includes("10") ||
					lesson.grade_level.includes("11") ||
					lesson.grade_level.includes("12")
				);
			}
		}),
	);

	onMount(async () => {
		await fetchLessons();
		await fetchGoals();
	});

	function handleLessonClick(lessonTitle: string) {
		const slug = slugify(lessonTitle);
		goto(`/lessons/${slug}`);
	}

	// Helper to get goal data by ID
	function getGoalById(goalId: number) {
		return $goals.find((g) => g.id === goalId);
	}
</script>

<div class="min-h-screen">
	<!-- Hero Section -->
	{#if data.slug === "creative-writing"}
		<SubjectHero
			artForm={data.artForm}
			description={data.description}
			imageUrl={data.imageUrl}
		>
			{#snippet svgComponent()}
				<CreativeWritingSVG />
			{/snippet}
		</SubjectHero>
	{:else}
		<SubjectHero
			artForm={data.artForm}
			description={data.description}
			bgColor={data.bgColor}
			imageUrl={data.imageUrl}
		/>
	{/if}

	<!-- Main Content -->
	<div class="container mx-auto py-8 lg:py-12 w-full ">
		<!-- Grade Level Tabs -->
		<div class="mb-8 bg-[#EEEAE5] p-3 rounded-xl">
			<div class="flex gap-3 w-full">
				<button
					class="flex-1 py-3 px-6 rounded-lg font-medium transition-all {selectedGrade === '5-8' ? 'bg-white shadow-sm text-black' : 'text-black/60'}"
					onclick={() => (selectedGrade = "5-8")}
				>
					Grades 5-8
				</button>
				<button
					class="flex-1 py-3 px-6 rounded-lg font-medium transition-all {selectedGrade === '9-12' ? 'bg-white shadow-sm text-black' : 'text-black/60'}"
					onclick={() => (selectedGrade = "9-12")}
				>
					Grades 9-12
				</button>
			</div>
		</div>

		<!-- Lessons Section -->
		<section>
			<div class="flex flex-row justify-between items-center mb-6">
				<h2 class="text-2xl lg:text-3xl font-bold">Lessons</h2>
				<div class="text-sm text-base-content/60">
					{gradeLessons.length}
					{gradeLessons.length === 1 ? "lesson" : "lessons"} available
				</div>
			</div>
			{#if gradeLessons.length === 0}
				<div class="text-center py-16">
					<svg
						class="w-20 h-20 mx-auto mb-4 opacity-20"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="1.5"
							d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
						/>
					</svg>
					<p class="text-lg text-base-content/50">
						No lessons available for Grades {selectedGrade}
					</p>
				</div>
			{:else}
				<div
					class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
				>
					{#each gradeLessons as lesson}
						{@const goal = getGoalById(lesson.goal_id)}
						<LessonCard
							{lesson}
							{goal}
							onclick={() => handleLessonClick(lesson.title)}
						/>
					{/each}
				</div>
			{/if}
		</section>
	</div>
</div>

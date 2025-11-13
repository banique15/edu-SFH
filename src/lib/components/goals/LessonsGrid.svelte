<script lang="ts">
	import type { Lesson } from "$lib/stores/lessons";
	import type { Goal } from "$lib/stores/goals";
	import LessonCard from "$lib/components/library/LessonCard.svelte";

	interface Props {
		lessons: Lesson[];
		goal: Goal;
	}

	let { lessons, goal }: Props = $props();

	let selectedGrade = $state<string>("all");

	const gradeLevels = [
		{ value: "all", label: "All Grades" },
		{ value: "5-8", label: "Grades 5-8" },
		{ value: "9-12", label: "Grades 9-12" },
	];

	const filteredLessons = $derived(() => {
		if (selectedGrade === "all") return lessons;
		return lessons.filter((lesson) => {
			if (!lesson.grade_level) return true;
			return lesson.grade_level.includes(selectedGrade);
		});
	});
</script>


<div class="bg-base-200/30 py-12">
	<div class="max-w-7xl mx-auto ">
		<div
			class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4"
		>
			<h2 class="text-4xl ">Lessons</h2>

			<!-- Grade Level Tabs -->
			<div class="tabs tabs-boxed bg-base-100">
				{#each gradeLevels as grade}
					<button
						class="tab"
						class:tab-active={selectedGrade === grade.value}
						onclick={() => (selectedGrade = grade.value)}
					>
						{grade.label}
					</button>
				{/each}
			</div>
		</div>

		{#if filteredLessons().length === 0}
			<div class="text-center py-12">
				<p class="text-base-content/50">
					No lessons found for this grade level.
				</p>
			</div>
		{:else}
			<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
				{#each filteredLessons() as lesson (lesson.id)}
					<LessonCard {lesson} {goal} />
				{/each}
			</div>
		{/if}
	</div>
</div>

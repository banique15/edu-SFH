<script lang="ts">
	import type { Lesson } from "$lib/stores/lessons";
	import type { Goal } from "$lib/stores/goals";
	import LessonCard from "$lib/components/library/LessonCard.svelte";

	interface Props {
		lessons: Lesson[];
		goal: Goal;
		selectedGrade: string;
	}

	let { lessons, goal, selectedGrade }: Props = $props();

	const filteredLessons = $derived(() => {
		return lessons.filter((lesson) => {
			if (!lesson.grade_level) return false;

			const parseGrades = (gradeStr: string): number[] => {
				// Handle range "5-8"
				if (gradeStr.includes("-")) {
					const [start, end] = gradeStr.split("-").map(Number);
					if (!isNaN(start) && !isNaN(end)) {
						const range = [];
						for (let i = start; i <= end; i++) range.push(i);
						return range;
					}
				}
				// Handle comma-separated "5,6,7,8"
				return gradeStr
					.split(",")
					.map((s) => parseInt(s.trim()))
					.filter((n) => !isNaN(n));
			};

			const lessonGrades = parseGrades(lesson.grade_level);
			const selectedGrades = parseGrades(selectedGrade);

			return lessonGrades.some((g) => selectedGrades.includes(g));
		});
	});
</script>


<div class="bg-base-200/30 py-12">
	<div class="max-w-7xl mx-auto ">
		<div class="mb-8">
			<h2 class="text-4xl ">Lessons</h2>
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

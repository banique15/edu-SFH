<script lang="ts">
	import GoalHero from "$lib/components/goals/GoalHero.svelte";
	import GoalIntroduction from "$lib/components/goals/GoalIntroduction.svelte";
	import LessonsGrid from "$lib/components/goals/LessonsGrid.svelte";
	import ObjectivesSection from "$lib/components/goals/ObjectivesSection.svelte";
	import ActionPlanningSection from "$lib/components/goals/ActionPlanningSection.svelte";
	import GoalTargetsSection from "$lib/components/goals/GoalTargetsSection.svelte";
	import GradeLevelToggle from "$lib/components/goals/GradeLevelToggle.svelte";
	import type { PageData } from "./$types";
	import Footer from "$lib/components/Footer.svelte";
	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();

	let selectedGrade = $state<string>("5-8");
</script>

<svelte:head>
	<title
		>Goal {data.goal.goal_number}: {data.goal.title} | SFS Education</title
	>
	<meta
		name="description"
		content={data.goal.description ||
			`Learn about UN SDG Goal ${data.goal.goal_number}`}
	/>
</svelte:head>

<div class="min-h-screen bg-[#FDF9F1] px-6">
	<!-- Hero Section -->
	<GoalHero goal={data.goal} goals={data.goals} />

	<!-- Grade Level Toggle (Sticky across all sections) -->
	<div class="sticky top-0 z-10 bg-[#FDF9F1] py-4 -mx-6 px-6">
		<div class="max-w-7xl mx-auto w-full border border-base-300">
			<GradeLevelToggle
				{selectedGrade}
				onGradeChange={(grade) => (selectedGrade = grade)}
			/>
		</div>
	</div>

	<!-- Introduction Section -->
	<GoalIntroduction
		goal={data.goal}
		featuredLesson={data.featuredLesson}
		staticContent={data.staticContent}
		videos={data.staticContent?.videos}
		{selectedGrade}
	/>

	<!-- Lessons Section -->
	{#if data.lessons.length > 0}
		<LessonsGrid lessons={data.lessons} goal={data.goal} {selectedGrade} />
	{/if}

	<!-- Objectives Section -->
	{#if data.objectives.length > 0}
		<ObjectivesSection
			objectives={data.objectives}
			goal={data.goal}
			{selectedGrade}
		/>
	{/if}

	<!-- Action Planning Section -->
	{#if data.staticContent?.actionPlanning}
		<ActionPlanningSection
			goal={data.goal}
			actionPlanning={data.staticContent.actionPlanning}
			{selectedGrade}
		/>
	{/if}

	<!-- Targets & Indicators -->
	{#if data.targets.length > 0}
		<GoalTargetsSection targets={data.targets} />
	{/if}
</div>

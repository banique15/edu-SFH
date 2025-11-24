<script lang="ts">
	import {
		getSdgColor,
		getSdgTextColor,
		SDG_NAMES,
	} from "$lib/utils/sdg-colors";
	import { favoritesStore } from "$lib/stores/favorites";
	import LessonCard from "$lib/components/library/LessonCard.svelte";
	import LessonHero from "$lib/components/goals/LessonHero.svelte";
	import LessonContentSection from "$lib/components/goals/LessonContentSection.svelte";
	import { getLessonSlug } from "$lib/utils/slugify";
	import { formatGradeLevel } from "$lib/utils/grade-formatter";
	import type { PageData } from "./$types";

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();

	// Make all values reactive so they update when data changes
	const lesson = $derived(data.lesson);
	const goal = $derived(data.goal);
	const materials = $derived(data.materials);
	const content = $derived(data.content);
	const objectives = $derived(data.objectives);
	const media = $derived(data.media);
	const previousLesson = $derived(data.previousLesson);
	const nextLesson = $derived(data.nextLesson);
	const relatedLessons = $derived(data.relatedLessons);

	// Get SDG colors
	const goalNumber = $derived(goal?.goal_number || 0);
	const sdgColor = $derived(getSdgColor(goalNumber));
	const sdgTextColor = $derived(getSdgTextColor(goalNumber));

	// Debug logging
	console.log("=== Lesson Page Client Debug ===");
	console.log("Goal:", goal);
	console.log("Goal Number:", goalNumber);
	console.log("SDG Color:", sdgColor);
	console.log("SDG Text Color:", sdgTextColor);
	console.log("================================");

	// Favorite state
	const favorites = favoritesStore;
	const isFavorite = $derived($favorites.includes(lesson.id));

	function toggleFavorite() {
		favoritesStore.toggle(lesson.id);
	}

	function handlePrint() {
		window.print();
	}

	// Parse grade levels
	const gradeLevels = $derived.by(() => {
		const formatted = formatGradeLevel(lesson.grade_level);
		if (!formatted) return "All Grades";
		// Remove "Grades " prefix if present, since it's added elsewhere
		return formatted.replace(/^Grades\s+/, '');
	});

	// Group objectives by category
	const objectivesByCategory = $derived.by(() => {
		const grouped: Record<string, typeof objectives> = {};
		objectives.forEach((obj) => {
			if (!grouped[obj.category]) {
				grouped[obj.category] = [];
			}
			grouped[obj.category].push(obj);
		});
		return grouped;
	});

	// Section collapse states - all expanded by default
	let collapsedSections = $state<Record<string, boolean>>({});

	function toggleSection(key: string) {
		collapsedSections[key] = !collapsedSections[key];
	}
</script>

<svelte:head>
	<title>{lesson.title} | SFS Education Curriculum</title>
	<meta
		name="description"
		content="{lesson.art_form} lesson for Goal {goal?.goal_number}: {goal?.title}"
	/>
</svelte:head>

{#key lesson.id}

<div class="min-h-screen mt-4 sm:mt-6 p-6">
	<!-- Hero Section -->
	<LessonHero
		{lesson}
		{goal}
		{sdgColor}
		{sdgTextColor}
		{isFavorite}
		onToggleFavorite={toggleFavorite}
		onPrint={handlePrint}
		{gradeLevels}
		{materials}
	/>

	<!-- Main Content -->
	<div class="max-w-7xl mx-auto py-6 sm:py-8">
		<div class="space-y-6">
			<!-- Content Sections from Supabase -->
			{#each content as section (section.id)}
				<LessonContentSection
					{section}
					{sdgColor}
					lessonId={lesson.id}
					{media}
					isCollapsed={collapsedSections[`content-${section.id}`]}
					onToggle={() => toggleSection(`content-${section.id}`)}
				/>
			{/each}

				<!-- Learning Objectives Section -->
			{#if objectives.length > 0}
				<section class="print:break-inside-avoid">
					<button
						class="w-full text-left px-0 py-4 flex items-center justify-between border-b border-gray-300"
						onclick={() => toggleSection("objectives")}
					>
						<h2
							class="text-xl sm:text-2xl font-normal text-gray-900"
							style="font-family: 'Founders Grotesk', sans-serif; letter-spacing: -0.01em;"
						>
							Learning Objectives
						</h2>
						<svg
							class="w-6 h-6 transition-transform print:hidden text-gray-600"
							class:rotate-180={collapsedSections["objectives"]}
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M19 9l-7 7-7-7"
							/>
						</svg>
					</button>

					{#if !collapsedSections["objectives"]}
						<div class="px-0 py-5 space-y-6">
							{#each Object.entries(objectivesByCategory) as [category, categoryObjectives]}
								<div>
									<h3
										class="font-semibold text-lg mb-3"
										style="font-family: 'Founders Grotesk', sans-serif; color: {sdgColor};"
									>
										{category}
									</h3>
									<ul class="space-y-2">
										{#each categoryObjectives as objective}
											<li class="flex items-start gap-3">
												<div
													class="mt-1.5 w-2 h-2 rounded-full flex-shrink-0"
													style="background-color: {sdgColor};"
												></div>
												<div
													class="flex-1 text-sm"
													style="font-family: 'Founders Grotesk', sans-serif; color: #374151;"
												>
													{objective.description}
													{#if objective.nccas_standard}
														<span
															class="text-xs text-gray-500 ml-1"
															>({objective.nccas_standard})</span
														>
													{/if}
												</div>
											</li>
										{/each}
									</ul>
								</div>
							{/each}
						</div>
					{/if}
				</section>
			{/if}

			<!-- Media & Songs Section -->
			{#if media.length > 0}
				<section class="print:break-inside-avoid">
					<button
						class="w-full text-left px-0 py-4 flex items-center justify-between border-b border-gray-300"
						onclick={() => toggleSection("media")}
					>
						<h2
							class="text-xl sm:text-2xl font-normal text-gray-900"
							style="font-family: 'Founders Grotesk', sans-serif; letter-spacing: -0.01em;"
						>
							Media & Songs
						</h2>
						<svg
							class="w-6 h-6 transition-transform print:hidden text-gray-600"
							class:rotate-180={collapsedSections["media"]}
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M19 9l-7 7-7-7"
							/>
						</svg>
					</button>

					{#if !collapsedSections["media"]}
						<div class="px-0 py-5 space-y-4">
							{#each media as item}
								<div
									class="border-l-4 pl-4 py-2"
									style="border-color: {sdgColor};"
								>
									<div
										class="font-semibold text-lg"
										style="font-family: 'Founders Grotesk', sans-serif; color: #1F2937;"
									>
										{item.title}
									</div>
									{#if item.artist}
										<div
											class="text-sm text-gray-600 mt-1"
											style="font-family: 'Founders Grotesk', sans-serif;"
										>
											by {item.artist}
										</div>
									{/if}
									{#if item.genre}
										<div class="mt-2">
											<span
												class="inline-block px-2 py-1 text-xs rounded-full"
												style="background-color: {sdgColor}20; color: {sdgColor}; font-family: 'Founders Grotesk', sans-serif;"
											>
												{item.genre}
											</span>
										</div>
									{/if}
									{#if item.url}
										<a
											href={item.url}
											target="_blank"
											rel="noopener noreferrer"
											class="inline-block mt-2 text-sm hover:underline print:hidden"
											style="color: {sdgColor}; font-family: 'Founders Grotesk', sans-serif;"
										>
											View Media →
										</a>
									{/if}
								</div>
							{/each}
						</div>
					{/if}
				</section>
			{/if}
		</div>
	</div>

	<!-- Lesson Navigation -->
	{#if previousLesson || nextLesson}
		<div class="max-w-7xl mx-auto py-8 print:hidden">
			<div
				class="flex items-center justify-between gap-4 px-4 sm:px-6 lg:px-8"
			>
				<!-- Previous Lesson -->
				{#if previousLesson}
					<a
						href="/lessons/{getLessonSlug(previousLesson)}"
						class="flex items-center gap-3 group flex-1 max-w-md"
					>
						<div
							class="inline-flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all group-hover:scale-110 flex-shrink-0"
							style="border-color: {sdgColor};"
						>
							<span class="text-xl" aria-hidden="true"
								>&larr;</span
							>
						</div>
						<div class="flex-1 min-w-0">
							<div
								class="text-xs sm:text-sm opacity-70 mb-1"
								style="color: {sdgColor}; font-family: 'Founders Grotesk', sans-serif;"
							>
								Previous Lesson
							</div>
							<div
								class="text-sm sm:text-base font-medium truncate group-hover:underline"
								style="color: #1F2937; font-family: 'Founders Grotesk', sans-serif;"
							>
								{previousLesson.title}
							</div>
						</div>
					</a>
				{:else}
					<div class="flex-1"></div>
				{/if}

				<!-- Next Lesson -->
				{#if nextLesson}
					<a
						href="/lessons/{getLessonSlug(nextLesson)}"
						class="flex items-center gap-3 group flex-1 max-w-md justify-end text-right"
					>
						<div class="flex-1 min-w-0">
							<div
								class="text-xs sm:text-sm opacity-70 mb-1"
								style="color: {sdgColor}; font-family: 'Founders Grotesk', sans-serif;"
							>
								Next Lesson
							</div>
							<div
								class="text-sm sm:text-base font-medium truncate group-hover:underline"
								style="color: #1F2937; font-family: 'Founders Grotesk', sans-serif;"
							>
								{nextLesson.title}
							</div>
						</div>
						<div
							class="inline-flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all group-hover:scale-110 flex-shrink-0"
							style="border-color: {sdgColor};"
						>
							<span class="text-xl" aria-hidden="true"
								>&rarr;</span
							>
						</div>
					</a>
				{:else}
					<div class="flex-1"></div>
				{/if}
			</div>
		</div>
	{/if}

	<!-- Related Lessons Section -->
	{#if relatedLessons.length > 0}
		<div class="py-12 print:hidden" style="background-color: white;">
			<div class="max-w-7xl mx-auto">
				<div class=" mx-auto">
					<div class="flex items-center justify-between mb-8">
						<h2
							class="text-3xl sm:text-4xl font-normal"
							style="font-family: 'Founders Grotesk', sans-serif; letter-spacing: -0.02em; color: #1F2937;"
						>
							More {lesson.art_form} Lessons
						</h2>
						<a
							href="/curriculum"
							class="text-sm hover:underline print:hidden"
							style="color: {sdgColor}; font-family: 'Founders Grotesk', sans-serif;"
						>
							View All →
						</a>
					</div>

					<div
						class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
					>
						{#each relatedLessons.slice(0, 3) as relatedLesson}
							<LessonCard
								lesson={relatedLesson}
								goal={relatedLesson.goal}
							/>
						{/each}
					</div>
				</div>
			</div>
		</div>
	{/if}
</div>
{/key}

<style>
	/* Print styles */
	@media print {
		.print\:hidden {
			display: none !important;
		}

		.print\:break-inside-avoid {
			break-inside: avoid;
			page-break-inside: avoid;
		}

		.print\:pb-6 {
			padding-bottom: 1.5rem;
		}

		.print\:cursor-default {
			cursor: default;
		}

		:global(body) {
			print-color-adjust: exact;
			-webkit-print-color-adjust: exact;
		}

		/* Expand all sections for print */
		section button svg {
			display: none;
		}
	}

	/* Custom prose styles */
	.prose {
		line-height: 1.7;
	}

	.prose :global(p) {
		margin-bottom: 1em;
	}

	.prose :global(ul) {
		list-style-type: disc;
		padding-left: 1.5em;
		margin-bottom: 1em;
	}

	.prose :global(ol) {
		list-style-type: decimal;
		padding-left: 1.5em;
		margin-bottom: 1em;
	}

	.prose :global(li) {
		margin-bottom: 0.5em;
	}

	.prose :global(strong) {
		font-weight: 600;
	}

	.prose :global(em) {
		font-style: italic;
	}
</style>

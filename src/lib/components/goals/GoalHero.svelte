<script lang="ts">
	import type { Goal } from "$lib/stores/goals";
	import { getSdgColor, getSdgTextColor } from "$lib/utils/sdg-colors";
	import { getGoalSlug } from "$lib/utils/slugify";

	interface Material {
		id?: string;
		name: string;
		description?: string;
		is_optional?: boolean;
	}

	interface Props {
		goal: Goal;
		goals?: Goal[];
		materials?: Material[];
	}

	let { goal, goals = [], materials = [] }: Props = $props();

	const bgColor = $derived(getSdgColor(goal.goal_number));
	const textColor = $derived(getSdgTextColor(goal.goal_number));
	const goalIconSrc = $derived(`/icons/sdg-goal-${goal.goal_number}.svg`);

	// Navigation logic - use actual goal titles from database
	const previousGoal = $derived(
		goals.find((g) => g.goal_number === goal.goal_number - 1),
	);
	const nextGoal = $derived(
		goals.find((g) => g.goal_number === goal.goal_number + 1),
	);
	const hasPrevious = $derived(!!previousGoal);
	const hasNext = $derived(!!nextGoal);
	const previousUrl = $derived(
		previousGoal ? `/goals/${getGoalSlug(previousGoal)}` : "#",
	);
	const nextUrl = $derived(
		nextGoal ? `/goals/${getGoalSlug(nextGoal)}` : "#",
	);

	// Split materials into 3 columns for desktop/tablet
	const materialsColumns = $derived.by(() => {
		if (materials.length === 0) return [[], [], []];
		const itemsPerColumn = Math.ceil(materials.length / 3);
		return [
			materials.slice(0, itemsPerColumn),
			materials.slice(itemsPerColumn, itemsPerColumn * 2),
			materials.slice(itemsPerColumn * 2),
		];
	});
</script>

<div
	class="relative overflow-hidden max-w-7xl mx-auto mt-9"
	style="color: {textColor};"
>
	<!-- Mobile: Rounded Background - Dynamic height -->
	<div
		class="absolute inset-0 w-full h-full rounded-2xl md:hidden"
		style="background-color: {bgColor};"
	></div>

	<!-- Desktop: SVG Background Shape - Stretches to cover all content -->
	<div class="absolute inset-0 w-full h-full hidden md:block overflow-hidden">
		<svg
			class="w-full h-full"
			viewBox="0 0 1284 291"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			preserveAspectRatio="none"
		>
			<path
				d="M2.36916e-05 20C2.46572e-05 8.95433 8.95437 1.06023e-05 20 1.15679e-05L1264 0.000120322C1275.05 0.000121288 1284 8.95444 1284 20.0001L1284 181C1284 192.046 1275.05 201 1264 201L1086.53 201C1075.48 201 1066.53 209.954 1066.53 221L1066.53 271C1066.53 282.046 1057.57 291 1046.53 291L20 291C8.95435 291 7.8281e-07 282.046 1.74846e-06 271L2.36916e-05 20Z"
				fill={bgColor}
			/>
		</svg>
	</div>

	<!-- Content -->
	<div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-12">
		<!-- Mobile: Grid layout with logo at top right -->
		<div class="grid grid-cols-2 gap-4 md:hidden">
			<div class="col-span-1">
				<h1 class="text-4xl mb-4">
					Goal {goal.goal_number}: {goal.title}
				</h1>
			</div>
			<div class="col-span-1 flex justify-end items-start">
				<div class="w-20 h-20">
					<img
						src={goalIconSrc}
						alt={`Goal ${goal.goal_number} icon`}
						class="w-full h-full object-contain"
						loading="lazy"
					/>
				</div>
			</div>
			<div class="col-span-2">
				{#if goal.description}
					<p class="text-lg opacity-90 mb-6">
						{goal.description}
					</p>
				{/if}

				<!-- Materials Section - Mobile -->
				{#if materials.length > 0}
					<div class="mb-6">
						<h2 class="text-lg font-semibold mb-3 opacity-90">
							Materials Needed
						</h2>
						<ul
							class="list-disc list-outside space-y-2 text-base opacity-90 pl-5"
						>
							{#each materials as material}
								<li>{material.name}</li>
							{/each}
						</ul>
					</div>
				{/if}

				<div class="flex items-center justify-between">
					<a
						href="#targets"
						class="inline-flex items-center gap-2 font-semibold text-lg opacity-90 hover:opacity-100"
					>
						See Goal {goal.goal_number} Targets &amp; Indicators
						<span aria-hidden="true">&rarr;</span>
					</a>

					<!-- Previous/Next Navigation -->
					<div class="flex items-center gap-3">
						<a
							href={previousUrl}
							class="inline-flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all {hasPrevious
								? 'opacity-90 hover:opacity-100 hover:scale-110'
								: 'opacity-30 pointer-events-none'}"
							style="border-color: #6b7280;"
							aria-label="Previous goal"
							aria-disabled={!hasPrevious}
						>
							<span
								class="text-xl"
								style="color: #000000;"
								aria-hidden="true">&larr;</span
							>
						</a>
						<a
							href={nextUrl}
							class="inline-flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all {hasNext
								? 'opacity-90 hover:opacity-100 hover:scale-110'
								: 'opacity-30 pointer-events-none'}"
							style="border-color: #6b7280;"
							aria-label="Next goal"
							aria-disabled={!hasNext}
						>
							<span
								class="text-xl"
								style="color: #000000;"
								aria-hidden="true">&rarr;</span
							>
						</a>
					</div>
				</div>
			</div>
		</div>

		<!-- Desktop: Original flex layout -->
		<div
			class="hidden md:flex flex-col md:flex-row items-start justify-between gap-6 relative"
		>
			<div class="flex-1">
				<h1 class="text-3xl md:text-4xl lg:text-6xl mb-4">
					Goal {goal.goal_number}: {goal.title}
				</h1>
				{#if goal.description}
					<p class="text-lg md:text-2xl opacity-90 max-w-4xl mb-6">
						{goal.description}
					</p>
				{/if}

				<!-- Materials Section - Desktop/Tablet (3 columns) -->
				{#if materials.length > 0}
					<div class="mb-6 md:mb-8">
						<h2
							class="text-lg md:text-xl font-semibold mb-4 opacity-90"
						>
							Materials Needed
						</h2>
						<div
							class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6"
						>
							{#each materialsColumns as column}
								{#if column.length > 0}
									<ul
										class="list-disc list-outside space-y-2 text-base md:text-lg opacity-90 pl-5 md:pl-6"
									>
										{#each column as material}
											<li>{material.name}</li>
										{/each}
									</ul>
								{/if}
							{/each}
						</div>
					</div>
				{/if}

				<div class="flex items-center mt-8 md:mt-16">
					<a
						href="#targets"
						class="inline-flex items-center gap-2 font-semibold text-lg opacity-90 hover:opacity-100"
					>
						See Goal {goal.goal_number} Targets &amp; Indicators
						<span aria-hidden="true">&rarr;</span>
					</a>
				</div>
			</div>
			<div class="flex-shrink-0">
				<div class="w-24 h-24 md:w-32 md:h-32">
					<img
						src={goalIconSrc}
						alt={`Goal ${goal.goal_number} icon`}
						class="w-full h-full object-contain"
						loading="lazy"
					/>
				</div>
			</div>

			<!-- Previous/Next Navigation - Positioned at far right -->
			<div class="absolute right-[0px] bottom-0 flex items-center gap-3">
				<a
					href={previousUrl}
					class="inline-flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all {hasPrevious
						? 'opacity-90 hover:opacity-100 hover:scale-110'
						: 'opacity-30 pointer-events-none'}"
					style="border-color: #6b7280;"
					aria-label="Previous goal"
					aria-disabled={!hasPrevious}
				>
					<span
						class="text-xl"
						style="color: #000000;"
						aria-hidden="true">&larr;</span
					>
				</a>
				<a
					href={nextUrl}
					class="inline-flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all {hasNext
						? 'opacity-90 hover:opacity-100 hover:scale-110'
						: 'opacity-30 pointer-events-none'}"
					style="border-color: #6b7280;"
					aria-label="Next goal"
					aria-disabled={!hasNext}
				>
					<span
						class="text-xl"
						style="color: #000000;"
						aria-hidden="true">&rarr;</span
					>
				</a>
			</div>
		</div>
	</div>
</div>

<script lang="ts">
	import type { Lesson } from '$lib/stores/lessons';
	import type { Goal } from '$lib/stores/goals';
	import { getSdgColor, getSdgTextColor, getSdgTintColor, SDG_NAMES } from '$lib/utils/sdg-colors';
	import { getGoalSlug } from '$lib/utils/slugify';

	interface Props {
		lesson: Lesson;
		goal: Goal | null;
		sdgColor: string;
		sdgTextColor: string;
		isFavorite: boolean;
		onToggleFavorite: () => void;
		onPrint: () => void;
		gradeLevels: string;
	}

	let {
		lesson,
		goal,
		sdgColor,
		sdgTextColor,
		isFavorite,
		onToggleFavorite,
		onPrint,
		gradeLevels
	}: Props = $props();

	const goalNumber = goal?.goal_number || 0;
	const tintColor = getSdgTintColor(goalNumber);

	// Format duration
	const durationText = $derived.by(() => {
		if (lesson.duration_min && lesson.duration_max) {
			return `${lesson.duration_min}-${lesson.duration_max} Minutes`;
		} else if (lesson.duration_min) {
			return `${lesson.duration_min}+ Minutes`;
		}
		return 'Flexible';
	});
</script>

<div class="relative w-full max-w-[1283px] mx-auto px-4 sm:px-6 lg:px-10" style="color: {sdgTextColor};">
	<!-- Background Shape -->
	<div class="absolute inset-0 overflow-hidden h-[300px] sm:h-[400px] lg:h-[476px]">
		<!-- Mobile: Simple rounded rectangle -->
		<div class="w-full h-full rounded-2xl lg:hidden" style="background-color: {sdgColor};"></div>
		
		<!-- Desktop: SVG shape -->
		<svg class="hidden lg:block w-full h-full" viewBox="0 0 1284 447" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMin meet">
			<path d="M3.72617e-05 20C3.82273e-05 8.95429 8.95438 1.0646e-05 20 1.16116e-05L1263.5 0.000120322C1274.55 0.000121288 1283.5 8.95444 1283.5 20.0001L1283.5 181C1283.5 192.046 1274.55 201 1263.5 201L871.127 201C860.081 201 851.127 209.954 851.127 221L851.127 426.224C851.127 437.269 842.173 446.224 831.127 446.224L20 446.224C8.95435 446.224 7.82811e-07 437.269 1.74846e-06 426.224L3.72617e-05 20Z" fill={sdgColor}/>
		</svg>
	</div>

	<!-- Content Container -->
	<div class="relative flex flex-col lg:flex-row gap-4 sm:gap-6 pt-6 pb-4 sm:pt-8 sm:pb-6 lg:py-10 min-h-[300px] sm:min-h-[400px] lg:min-h-[446px]">
		<!-- Left Section: Lesson Information -->
		<div class="flex flex-col justify-between w-full lg:w-[770px]">
			<!-- Top Info Section -->
			<div class="flex flex-col gap-3 sm:gap-4 lg:gap-5">
				<!-- Title and Subtitle -->
				<div class="flex flex-col gap-3 sm:gap-4 lg:gap-5">
					<h1
						class="font-normal whitespace-pre-wrap text-2xl sm:text-3xl md:text-4xl lg:text-[50px] leading-[0.9] tracking-[0.01em] sm:tracking-[0.01em] lg:tracking-[0.5px]"
						style="font-family: 'Founders Grotesk', sans-serif;"
					>
						{lesson.title}
					</h1>

					{#if lesson.description}
						<p
							class="whitespace-pre-wrap text-base sm:text-lg md:text-xl lg:text-[24px] leading-[1.3]"
							style="font-family: 'Founders Grotesk', sans-serif;"
						>
							{lesson.description}
						</p>
					{/if}
				</div>

				<!-- Pills -->
				<div class="flex flex-wrap gap-1.5">
					{#if goal}
						<div
							class="flex items-center justify-center px-2 sm:px-3 h-6 sm:h-7 rounded-full"
							style="background-color: {tintColor};"
						>
							<span
								class="text-xs sm:text-sm lg:text-base leading-[1.2] tracking-[-0.01em] sm:tracking-[-0.16px] pb-0.5 sm:pb-0.5"
								style="font-family: 'Founders Grotesk', sans-serif;"
							>
								{goal.goal_number}. {SDG_NAMES[goal.goal_number]}
							</span>
						</div>
					{/if}

					<div
						class="flex items-center justify-center px-2 sm:px-3 h-6 sm:h-7 rounded-full"
						style="background-color: {tintColor};"
					>
						<span
							class="text-xs sm:text-sm lg:text-base leading-[1.2] tracking-[-0.01em] sm:tracking-[-0.16px] pb-0.5 sm:pb-0.5"
							style="font-family: 'Founders Grotesk', sans-serif;"
						>
							{lesson.art_form}
						</span>
					</div>

					<div
						class="flex items-center justify-center px-2 sm:px-3 h-6 sm:h-7 rounded-full"
						style="background-color: {tintColor};"
					>
						<span
							class="text-xs sm:text-sm lg:text-base leading-[1.2] tracking-[-0.01em] sm:tracking-[-0.16px] pb-0.5 sm:pb-0.5"
							style="font-family: 'Founders Grotesk', sans-serif;"
						>
							Grades {gradeLevels}
						</span>
					</div>
				</div>

				<!-- Time -->
				<div class="flex items-center gap-1.5">
					<svg
						class="w-5 h-5 sm:w-6 sm:h-6"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.2 3.2.8-1.3-4.5-2.7V7z"
							fill="currentColor"
						/>
					</svg>
					<span
						class="text-sm sm:text-base leading-[1.2] tracking-[-0.01em] sm:tracking-[-0.16px]"
						style="font-family: 'Founders Grotesk', sans-serif;"
					>
						{durationText}
					</span>
				</div>
			</div>
		</div>

		<!-- Right Section: Buttons and Goal Overview -->
		<div class="flex flex-col w-full lg:w-[413px] mt-6 lg:mt-0">
			<!-- Favorite & Print Buttons -->
			<div class="flex items-center justify-start sm:justify-end gap-1.5 mb-4 sm:mb-6">
				<!-- Favorite Button -->
				<button
					class="w-10 h-10 sm:w-11 sm:h-11 rounded-full border-2 flex items-center justify-center hover:opacity-80 transition-opacity flex-shrink-0"
					style="border-color: {sdgTextColor};"
					onclick={onToggleFavorite}
					aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
				>
					{#if isFavorite}
						<svg class="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
							<path
								d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
							/>
						</svg>
					{:else}
						<svg
							class="w-5 h-5 sm:w-6 sm:h-6"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							viewBox="0 0 24 24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
							/>
						</svg>
					{/if}
				</button>

				<!-- Print Button -->
				<button
					class="h-10 sm:h-11 px-4 sm:px-6 rounded-full border-2 flex items-center gap-1.5 hover:opacity-80 transition-opacity"
					style="border-color: {sdgTextColor};"
					onclick={onPrint}
				>
					<svg class="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="currentColor">
						<path
							d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"
						/>
					</svg>
					<span
						class="pb-0.5 sm:pb-1 text-sm sm:text-base lg:text-[18px] font-medium sm:font-[500] leading-[1.2]"
						style="font-family: 'Founders Grotesk', sans-serif;"
					>
						Print Lesson
					</span>
				</button>
			</div>

			<!-- Goal Overview Card -->
			{#if goal}
				<div
					class="-mx-4 sm:-mx-6 lg:mx-0 lg:ml-9 lg:absolute lg:bottom-0 lg:w-[418px] rounded-2xl p-5 sm:p-6 lg:p-7 flex flex-row gap-3 sm:gap-4 lg:gap-4 mt-[70px] lg:mt-0 lg:min-h-[227px]"
					style="background-color: #EEEAE5; border-top-left-radius: 10px;"
				>
					<!-- Left Column: Title, Description, Link -->
					<div class="flex flex-col gap-3 sm:gap-4 flex-1">
						<h3
							class="font-medium text-xl sm:text-2xl lg:text-[28px] leading-[1] tracking-[-0.01em] sm:tracking-[-0.02em] lg:tracking-[-0.28px] text-black"
							style="font-family: 'Founders Grotesk', sans-serif;"
						>
							Goal {goal.goal_number}: {SDG_NAMES[goal.goal_number]}
						</h3>

						<p
							class="text-sm sm:text-base leading-[1.2] tracking-[-0.01em] sm:tracking-[-0.16px] text-black/60"
							style="font-family: 'Founders Grotesk', sans-serif;"
						>
							You can find an introduction to Goal {goal.goal_number}, as well as the Targets &
							Indicators, Objectives, and Action Planning Resources on the Goal overview page.
						</p>

						<a
							href="/goals/{getGoalSlug(goal)}"
							class="underline hover:opacity-80 text-sm sm:text-base leading-[1.2] tracking-[-0.01em] sm:tracking-[-0.16px] text-black"
							style="font-family: 'Founders Grotesk', sans-serif;"
						>
							See Goal {goal.goal_number} Overview
						</a>
					</div>

					<!-- Right Column: Icon -->
					<div class="flex items-start justify-center lg:justify-start flex-shrink-0">
						<div
							class="w-12 h-12 sm:w-14 sm:h-14 lg:w-20 lg:h-20 rounded-full flex items-center justify-center"
							style="background-color: {sdgColor};"
						>
							<img
								src="/icons/sdg-goal-{goal.goal_number}.svg"
								alt="Goal {goal.goal_number} icon"
								class="w-7 h-7 sm:w-8 sm:h-8 lg:w-12 lg:h-12"
							/>
						</div>
					</div>
				</div>
			{/if}
		</div>
	</div>
</div>

<style>
	/* Print styles */
	@media print {
		button {
			display: none !important;
		}
	}
</style>

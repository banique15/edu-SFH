<script lang="ts">
	import type { Lesson } from '$lib/stores/lessons';
	import type { Goal } from '$lib/stores/goals';
	import { favoritesStore } from '$lib/stores/favorites';
	import { SDG_NAMES } from '$lib/utils/sdg-colors';

	interface LessonCardProps {
		lesson: Lesson;
		goal?: Goal;
		description?: string;
		onclick?: () => void;
		showFavorite?: boolean;
		onFavoriteToggle?: (lessonId: number) => void;
	}

	let { lesson, goal, description, onclick, showFavorite = false, onFavoriteToggle }: LessonCardProps = $props();

	let favorites = $state<number[]>([]);

	// Subscribe to favorites store
	favoritesStore.subscribe(value => {
		favorites = value;
	});

	let isFavorited = $derived(favoritesStore.isFavorite(lesson.id, favorites));

	// Helper to get SDG short title
	function getShortGoalTitle(goalNumber: number): string {
		return SDG_NAMES[goalNumber] || `Goal ${goalNumber}`;
	}

	// Helper to get SDG goal colors (based on official UN SDG color palette)
	function getGoalColor(goalNumber: number): string {
		const colors: Record<number, string> = {
			1: 'bg-[#E5243B] text-white',  // No Poverty - Red
			2: 'bg-[#DDA63A] text-white',  // Zero Hunger - Yellow
			3: 'bg-[#4C9F38] text-white',  // Good Health - Green
			4: 'bg-[#C5192D] text-white',  // Quality Education - Red
			5: 'bg-[#FF3A21] text-white',  // Gender Equality - Orange
			6: 'bg-[#26BDE2] text-white',  // Clean Water - Blue
			7: 'bg-[#FCC30B] text-gray-900', // Affordable Energy - Yellow
			8: 'bg-[#A21942] text-white',  // Decent Work - Burgundy
			9: 'bg-[#FD6925] text-white',  // Industry Innovation - Orange
			10: 'bg-[#DD1367] text-white', // Reduced Inequalities - Pink
			11: 'bg-[#FD9D24] text-gray-900', // Sustainable Cities - Orange
			12: 'bg-[#BF8B2E] text-white', // Responsible Consumption - Brown
			13: 'bg-[#3F7E44] text-white', // Climate Action - Green
			14: 'bg-[#0A97D9] text-white', // Life Below Water - Blue
			15: 'bg-[#56C02B] text-white', // Life on Land - Green
			16: 'bg-[#00689D] text-white', // Peace Justice - Blue
			17: 'bg-[#19486A] text-white'  // Partnerships - Navy
		};
		return colors[goalNumber] || 'bg-gray-500 text-white';
	}

	function getBorderColor(goalNumber: number): string {
		const colors: Record<number, string> = {
			1: '#E5243B',
			2: '#DDA63A',
			3: '#4C9F38',
			4: '#C5192D',
			5: '#FF3A21',
			6: '#26BDE2',
			7: '#FCC30B',
			8: '#A21942',
			9: '#FD6925',
			10: '#DD1367',
			11: '#FD9D24',
			12: '#BF8B2E',
			13: '#3F7E44',
			14: '#0A97D9',
			15: '#56C02B',
			16: '#00689D',
			17: '#19486A'
		};
		return colors[goalNumber] || '#6B7280';
	}

	function handleFavoriteClick(e: MouseEvent) {
		e.stopPropagation();
		if (onFavoriteToggle) {
			onFavoriteToggle(lesson.id);
		} else {
			favoritesStore.toggle(lesson.id);
		}
	}
</script>

<button
	class="bg-white border-[1.5px] rounded-[20px] p-5 hover:shadow-md transition-all duration-200 text-left cursor-pointer group w-full flex flex-col justify-between h-[249px]"
	style="border-color: {goal ? getBorderColor(goal.goal_number) : '#E5E7EB'}"
	{onclick}
>
	<div class="flex flex-col gap-1.5">
		<!-- Title and Favorite Icon -->
		<div class="flex items-start justify-between gap-2 mb-1">
			<h3 class="text-[28px] font-normal leading-none tracking-[-0.32px] text-black line-clamp-2 flex-1">
				{lesson.title}
			</h3>
			{#if showFavorite}
				<button
					class="flex-shrink-0 w-9 h-9"
					onclick={handleFavoriteClick}
					type="button"
				>
					{#if isFavorited}
						<!-- Filled heart -->
						<svg width="36" height="36" viewBox="0 0 36 36" fill="none">
							<path d="M18 30.6L15.78 28.584C9.36 22.752 5.04 18.864 5.04 14.16C5.04 10.272 8.136 7.19999 12 7.19999C14.208 7.19999 16.32 8.20799 18 9.79199C19.68 8.20799 21.792 7.19999 24 7.19999C27.864 7.19999 30.96 10.272 30.96 14.16C30.96 18.864 26.64 22.752 20.22 28.584L18 30.6Z" fill="{goal ? getBorderColor(goal.goal_number) : '#EF4444'}"/>
						</svg>
					{:else}
						<!-- Outline heart -->
						<svg width="36" height="36" viewBox="0 0 36 36" fill="none">
							<path d="M18 30.6L15.78 28.584C9.36 22.752 5.04 18.864 5.04 14.16C5.04 10.272 8.136 7.19999 12 7.19999C14.208 7.19999 16.32 8.20799 18 9.79199C19.68 8.20799 21.792 7.19999 24 7.19999C27.864 7.19999 30.96 10.272 30.96 14.16C30.96 18.864 26.64 22.752 20.22 28.584L18 30.6Z" stroke="{goal ? getBorderColor(goal.goal_number) : '#6B7280'}" stroke-width="1.5" fill="none"/>
						</svg>
					{/if}
				</button>
			{/if}
		</div>

		<!-- Description -->
		<p class="text-[18px] font-normal leading-[1.2] text-black line-clamp-2">
			{description || 'Explore this engaging lesson focused on creative learning and sustainable development.'}
		</p>
	</div>

	<!-- Tags -->
	<div class="flex flex-wrap gap-1.5">
		{#if goal}
			<span class="rounded-[53px] px-3 py-1 text-[16px] truncate font-normal leading-[1.2] tracking-[-0.16px] {getGoalColor(goal.goal_number)}">
				{goal.goal_number}. {getShortGoalTitle(goal.goal_number)}
			</span>
		{/if}
		<span class="rounded-[53px] px-3 py-1 text-[16px] font-normal leading-[1.2] tracking-[-0.16px] {getGoalColor(goal?.goal_number || 1)}">
			{lesson.art_form}
		</span>
		{#if lesson.grade_level}
			<span class="rounded-[53px] px-3 py-1 text-[16px] font-normal leading-[1.2] tracking-[-0.16px] {getGoalColor(goal?.goal_number || 1)}">
				Grades {lesson.grade_level}
			</span>
		{/if}
	</div>
</button>

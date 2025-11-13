<script lang="ts">
	import type { Goal } from '$lib/stores/goals';
	import type { Lesson } from '$lib/stores/lessons';

	interface Props {
		goals?: Goal[];
		lessons?: Lesson[];
		showGoals?: boolean;
		showLessons?: boolean;
		compact?: boolean;
	}

	let {
		goals = [],
		lessons = [],
		showGoals = true,
		showLessons = true,
		compact = false
	}: Props = $props();

	let goalsApproved = $derived(goals.filter(g => g.is_approved).length);
	let goalsTotal = $derived(goals.length);
	let goalsProgress = $derived(goalsTotal > 0 ? (goalsApproved / goalsTotal) * 100 : 0);

	let lessonsApproved = $derived(lessons.filter(l => l.is_approved).length);
	let lessonsTotal = $derived(lessons.length);
	let lessonsProgress = $derived(lessonsTotal > 0 ? (lessonsApproved / lessonsTotal) * 100 : 0);

	let overallApproved = $derived(goalsApproved + lessonsApproved);
	let overallTotal = $derived(goalsTotal + lessonsTotal);
	let overallProgress = $derived(overallTotal > 0 ? (overallApproved / overallTotal) * 100 : 0);
</script>

{#if compact}
	<!-- Compact View - Single Line -->
	<div class="flex items-center gap-4 text-sm">
		{#if showGoals && showLessons}
			<div class="flex items-center gap-2">
				<div class="badge badge-sm badge-outline">Overall</div>
				<span class="font-medium">{overallApproved}/{overallTotal}</span>
				<div class="w-24 bg-base-300 rounded-full h-2">
					<div
						class="bg-success h-2 rounded-full transition-all duration-300"
						style="width: {overallProgress}%"
					></div>
				</div>
				<span class="text-xs text-base-content/60">{overallProgress.toFixed(0)}%</span>
			</div>
		{/if}
		{#if showGoals}
			<div class="flex items-center gap-2">
				<svg class="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
				</svg>
				<span class="font-medium">{goalsApproved}/{goalsTotal}</span>
			</div>
		{/if}
		{#if showLessons}
			<div class="flex items-center gap-2">
				<svg class="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
				</svg>
				<span class="font-medium">{lessonsApproved}/{lessonsTotal}</span>
			</div>
		{/if}
	</div>
{:else}
	<!-- Full View - Cards -->
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
		{#if showGoals && showLessons}
			<!-- Overall Progress -->
			<div class="stats shadow-sm border border-base-300">
				<div class="stat">
					<div class="stat-title text-xs">Overall Progress</div>
					<div class="stat-value text-2xl">{overallApproved}<span class="text-base opacity-60">/{overallTotal}</span></div>
					<div class="stat-desc mt-2">
						<div class="w-full bg-base-300 rounded-full h-2">
							<div
								class="bg-success h-2 rounded-full transition-all duration-300"
								style="width: {overallProgress}%"
							></div>
						</div>
						<span class="text-xs mt-1 block">{overallProgress.toFixed(1)}% Complete</span>
					</div>
				</div>
			</div>
		{/if}

		{#if showGoals}
			<!-- Goals Progress -->
			<div class="stats shadow-sm border border-base-300">
				<div class="stat">
					<div class="stat-figure text-primary">
						<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/>
						</svg>
					</div>
					<div class="stat-title text-xs">Goals Approved</div>
					<div class="stat-value text-2xl">{goalsApproved}<span class="text-base opacity-60">/{goalsTotal}</span></div>
					<div class="stat-desc mt-2">
						<div class="w-full bg-base-300 rounded-full h-2">
							<div
								class="bg-primary h-2 rounded-full transition-all duration-300"
								style="width: {goalsProgress}%"
							></div>
						</div>
						<span class="text-xs mt-1 block">{goalsProgress.toFixed(1)}%</span>
					</div>
				</div>
			</div>
		{/if}

		{#if showLessons}
			<!-- Lessons Progress -->
			<div class="stats shadow-sm border border-base-300">
				<div class="stat">
					<div class="stat-figure text-secondary">
						<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
						</svg>
					</div>
					<div class="stat-title text-xs">Lessons Approved</div>
					<div class="stat-value text-2xl">{lessonsApproved}<span class="text-base opacity-60">/{lessonsTotal}</span></div>
					<div class="stat-desc mt-2">
						<div class="w-full bg-base-300 rounded-full h-2">
							<div
								class="bg-secondary h-2 rounded-full transition-all duration-300"
								style="width: {lessonsProgress}%"
							></div>
						</div>
						<span class="text-xs mt-1 block">{lessonsProgress.toFixed(1)}%</span>
					</div>
				</div>
			</div>
		{/if}
	</div>
{/if}

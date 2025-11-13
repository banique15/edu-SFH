<script lang="ts">
	import type { PageData } from './$types';
	import { getGoalSlug } from '$lib/utils/slugify';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();

	const sdgColors = [
		'bg-red-600',      // Goal 1
		'bg-amber-500',    // Goal 2
		'bg-green-600',    // Goal 3
		'bg-red-700',      // Goal 4
		'bg-orange-600',   // Goal 5
		'bg-cyan-500',     // Goal 6
		'bg-yellow-400',   // Goal 7
		'bg-rose-700',     // Goal 8
		'bg-orange-500',   // Goal 9
		'bg-pink-600',     // Goal 10
		'bg-amber-600',    // Goal 11
		'bg-yellow-600',   // Goal 12
		'bg-green-700',    // Goal 13
		'bg-blue-600',     // Goal 14
		'bg-lime-600',     // Goal 15
		'bg-blue-800',     // Goal 16
		'bg-indigo-900'    // Goal 17
	];

	function getGoalColor(goalNumber: number): string {
		return sdgColors[goalNumber - 1] || 'bg-primary';
	}
</script>

<svelte:head>
	<title>UN Sustainable Development Goals | SFS Education</title>
	<meta name="description" content="Explore the 17 UN Sustainable Development Goals with arts-integrated curriculum and lessons." />
</svelte:head>

<div class="min-h-screen bg-base-200/30">
	<!-- Header -->
	<div class="bg-gradient-to-r from-green-700 to-green-800 text-white py-16">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<h1 class="text-4xl md:text-5xl font-bold mb-4">
				UN Sustainable Development Goals
			</h1>
			<p class="text-xl text-white/90 max-w-3xl">
				Explore our comprehensive curriculum built around the 17 UN SDGs, featuring
				arts-integrated lessons designed to inspire and educate students in grades 5-12.
			</p>
		</div>
	</div>

	<!-- Goals Grid -->
	<div class="max-w-7xl mx-auto p-6 py-12">
		{#if data.goals.length === 0}
			<div class="text-center py-12">
				<p class="text-base-content/50">No goals found.</p>
			</div>
		{:else}
			<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
				{#each data.goals as goal}
					<a
						href="/goals/{getGoalSlug(goal)}"
						class="card bg-base-100 shadow-lg hover:shadow-xl transition-all duration-300 border border-base-300 hover:border-primary/30 hover:-translate-y-1 group"
					>
						<div class="card-body p-0">
							<!-- Colored header -->
							<div class="{getGoalColor(goal.goal_number)} text-white p-6">
								<div class="flex items-center justify-between mb-3">
									<span class="badge badge-lg bg-white/20 border-white/30 text-white font-bold">
										{goal.goal_number}
									</span>
									{#if goal.is_approved}
										<svg class="w-5 h-5 text-white/80" fill="currentColor" viewBox="0 0 20 20">
											<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
										</svg>
									{/if}
								</div>
								<h3 class="text-lg font-bold leading-tight">
									{goal.title}
								</h3>
							</div>

							<!-- Card content -->
							<div class="p-6">
								{#if goal.description}
									<p class="text-sm text-base-content/70 line-clamp-3 mb-4">
										{goal.description}
									</p>
								{/if}
								<div class="flex items-center gap-2 text-primary group-hover:gap-3 transition-all">
									<span class="text-sm font-medium">Explore Goal</span>
									<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
									</svg>
								</div>
							</div>
						</div>
					</a>
				{/each}
			</div>
		{/if}
	</div>

	<!-- Call to Action -->
	<div class="bg-gradient-to-r from-green-700 to-green-800 text-white py-12 mt-12">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
			<h2 class="text-3xl font-bold mb-4">Ready to Get Started?</h2>
			<p class="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
				Each goal includes comprehensive lesson plans, learning objectives, and action
				planning resources to help you bring the SDGs to life in your classroom.
			</p>
			<a href="/" class="btn btn-lg bg-white text-green-700 hover:bg-white/90 border-none">
				View Dashboard
			</a>
		</div>
	</div>
</div>

<script lang="ts">
	import { authStore } from '$lib/auth'
	import { onMount } from 'svelte';
	import { goals, fetchGoals } from '$lib/stores/goals';
	import { lessons, fetchLessons } from '$lib/stores/lessons';
	import ProgressStats from '$lib/components/ProgressStats.svelte';

	let goalsCount = $derived($goals.length);
	let lessonsCount = $derived($lessons.length);

	onMount(() => {
		fetchGoals();
		fetchLessons();
	});
</script>

<svelte:head>
	<title>Dashboard | Sing for Hope Education</title>
	<meta name="description" content="Education curriculum dashboard for UN SDG goals and arts-integrated lessons" />
</svelte:head>

<div class="min-h-full p-6 lg:p-8 fade-in">
	<div class="max-w-7xl mx-auto space-y-8">
	<div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
		<div>
			<h1 class="text-3xl lg:text-4xl font-bold text-base-content">Education Curriculum Dashboard</h1>
			<p class="text-sm lg:text-base text-base-content/60 mt-1">
				Welcome back, <span class="font-medium">{$authStore?.email}</span>
			</p>
		</div>
		<div class="text-xs lg:text-sm text-base-content/50">
			{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
		</div>
	</div>

	<!-- Summary Stats -->
	<div>
		<h2 class="text-xl lg:text-2xl font-bold text-base-content mb-6">Overview</h2>
		<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
			<a href="/admin/goals" class="card bg-gradient-to-br from-base-100 to-base-200 shadow-depth-1 border border-base-300 transition-all duration-300 hover:scale-105 cursor-pointer group">
				<div class="card-body p-6">
					<div class="flex items-start justify-between">
						<div class="flex-1">
							<p class="text-xs lg:text-sm font-medium text-base-content/60 group-hover:text-primary transition-colors">SDG Goals</p>
							<p class="text-2xl lg:text-3xl font-bold text-base-content mt-2">{goalsCount}</p>
							<p class="text-xs text-base-content/50 mt-1 hidden lg:block">UN Sustainable Development Goals</p>
						</div>
						<div class="text-primary/20 group-hover:text-primary/40 transition-colors">
							<svg class="w-8 h-8 lg:w-10 lg:h-10" fill="currentColor" viewBox="0 0 20 20">
								<path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
							</svg>
						</div>
					</div>
				</div>
			</a>

			<a href="/admin/lessons" class="card bg-gradient-to-br from-base-100 to-base-200 shadow-depth-1 border border-base-300 transition-all duration-300 hover:scale-105 cursor-pointer group">
				<div class="card-body p-6">
					<div class="flex items-start justify-between">
						<div class="flex-1">
							<p class="text-xs lg:text-sm font-medium text-base-content/60 group-hover:text-secondary transition-colors">Lessons</p>
							<p class="text-2xl lg:text-3xl font-bold text-base-content mt-2">{lessonsCount}</p>
							<p class="text-xs text-base-content/50 mt-1 hidden lg:block">Arts-integrated curriculum</p>
						</div>
						<div class="text-secondary/20 group-hover:text-secondary/40 transition-colors">
							<svg class="w-8 h-8 lg:w-10 lg:h-10" fill="currentColor" viewBox="0 0 20 20">
								<path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"/>
							</svg>
						</div>
					</div>
				</div>
			</a>
		</div>
	</div>

	<!-- Curriculum Approval Progress -->
	<div>
		<h2 class="text-xl lg:text-2xl font-bold text-base-content mb-6">Curriculum Review Progress</h2>
		<ProgressStats goals={$goals} lessons={$lessons} showGoals={true} showLessons={true} compact={false} />
	</div>

	<div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
		<!-- About the Curriculum -->
		<div class="card bg-base-100 shadow-depth-1 border border-base-300">
			<div class="card-body p-6">
				<h2 class="text-lg lg:text-xl font-bold text-base-content mb-4">About This Curriculum</h2>
				<div class="space-y-3 text-sm text-base-content/70">
					<p>
						This curriculum is built around the 17 UN Sustainable Development Goals (SDGs),
						integrating arts education to foster creativity, empathy, and global citizenship.
					</p>
					<p>
						Each goal includes five comprehensive lessons across different art forms:
					</p>
					<ul class="list-disc list-inside space-y-1 ml-2">
						<li>Musical Exploration</li>
						<li>Visual Arts</li>
						<li>Creative Writing</li>
						<li>Dance/Movement</li>
						<li>Drama</li>
					</ul>
				</div>
			</div>
		</div>

		<!-- Quick Actions -->
		<div class="card bg-base-100 shadow-depth-1 border border-base-300">
			<div class="card-body p-6">
				<h2 class="text-lg lg:text-xl font-bold text-base-content mb-4">Quick Actions</h2>
				<div class="grid grid-cols-1 gap-3">
					<a href="/admin/goals" data-sveltekit-preload-data="hover" class="btn btn-primary gap-2 justify-start">
						<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
							<path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
						</svg>
						<span>Manage SDG Goals</span>
					</a>
					<a href="/admin/lessons" data-sveltekit-preload-data="hover" class="btn btn-secondary gap-2 justify-start">
						<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
							<path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"/>
						</svg>
						<span>Manage Lessons</span>
					</a>
					<a href="/" data-sveltekit-preload-data="hover" class="btn btn-outline gap-2 justify-start">
						<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
							<path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z"/>
						</svg>
						<span>View Public Site</span>
					</a>
				</div>
			</div>
		</div>
	</div>


	<!-- Learning Objectives Categories -->
	<div class="card bg-base-100 shadow-depth-1 border border-base-300">
		<div class="card-body p-6">
			<h2 class="text-lg lg:text-xl font-bold text-base-content mb-4">Learning Objective Categories</h2>
			<div class="grid grid-cols-1 md:grid-cols-5 gap-6">
				<div class="p-4 rounded-lg bg-primary/10 border border-primary/20">
					<h3 class="font-bold text-primary mb-2">Knowledge</h3>
					<p class="text-xs text-base-content/60">What students should know and understand</p>
				</div>
				<div class="p-4 rounded-lg bg-secondary/10 border border-secondary/20">
					<h3 class="font-bold text-secondary mb-2">Discourse</h3>
					<p class="text-xs text-base-content/60">How students discuss and analyze</p>
				</div>
				<div class="p-4 rounded-lg bg-accent/10 border border-accent/20">
					<h3 class="font-bold text-accent mb-2">Attitudes</h3>
					<p class="text-xs text-base-content/60">Values and perspectives to develop</p>
				</div>
				<div class="p-4 rounded-lg bg-info/10 border border-info/20">
					<h3 class="font-bold text-info mb-2">Capacity</h3>
					<p class="text-xs text-base-content/60">Skills and abilities to build</p>
				</div>
				<div class="p-4 rounded-lg bg-success/10 border border-success/20">
					<h3 class="font-bold text-success mb-2">Action</h3>
					<p class="text-xs text-base-content/60">Real-world applications</p>
				</div>
			</div>
		</div>
	</div>
	</div>
</div>

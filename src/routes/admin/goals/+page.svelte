<script lang="ts">
	import { onMount } from 'svelte';
	import { goals, loading, error, fetchGoals, selectedGoal, fetchGoalDetails, selectedGoalTargets, selectedGoalObjectives, clearSelectedGoal, updateGoal, updateTarget, updateObjective, approveGoal, unapproveGoal } from '$lib/stores/goals';
	import { user } from '$lib/auth';
	import ProgressStats from '$lib/components/ProgressStats.svelte';

	let editingGoal = $state(false);
	let editingTargetId = $state<number | null>(null);
	let editingObjectiveId = $state<number | null>(null);

	let editForm = $state({
		title: '',
		description: ''
	});

	let targetEditForm = $state({
		description: ''
	});

	let objectiveEditForm = $state({
		description: '',
		nccas_standard: ''
	});

	onMount(() => {
		fetchGoals();
	});

	function selectGoal(goal: typeof $goals[0]) {
		fetchGoalDetails(goal.id);
		editingGoal = false;
		editingTargetId = null;
		editingObjectiveId = null;
	}

	function startEditGoal() {
		if (!$selectedGoal) return;
		editForm.title = $selectedGoal.title;
		editForm.description = $selectedGoal.description || '';
		editingGoal = true;
	}

	function cancelEditGoal() {
		editingGoal = false;
	}

	async function saveGoal() {
		if (!$selectedGoal) return;

		const result = await updateGoal($selectedGoal.id, {
			title: editForm.title,
			description: editForm.description
		});

		if (result.success) {
			editingGoal = false;
		}
	}

	function startEditTarget(targetId: number, description: string) {
		targetEditForm.description = description;
		editingTargetId = targetId;
	}

	function cancelEditTarget() {
		editingTargetId = null;
	}

	async function saveTarget(targetId: number) {
		const result = await updateTarget(targetId, {
			description: targetEditForm.description
		});

		if (result.success) {
			editingTargetId = null;
		}
	}

	function startEditObjective(objectiveId: number, description: string, nccas: string | null) {
		objectiveEditForm.description = description;
		objectiveEditForm.nccas_standard = nccas || '';
		editingObjectiveId = objectiveId;
	}

	function cancelEditObjective() {
		editingObjectiveId = null;
	}

	async function saveObjective(objectiveId: number) {
		const result = await updateObjective(objectiveId, {
			description: objectiveEditForm.description,
			nccas_standard: objectiveEditForm.nccas_standard || null
		});

		if (result.success) {
			editingObjectiveId = null;
		}
	}

	async function handleApproveGoal() {
		if (!$selectedGoal || !$user) return;

		const result = await approveGoal($selectedGoal.id, $user.id);
		if (result.success) {
			// Refresh goals to update the sidebar
			await fetchGoals();
		}
	}

	async function handleUnapproveGoal() {
		if (!$selectedGoal) return;

		const result = await unapproveGoal($selectedGoal.id);
		if (result.success) {
			// Refresh goals to update the sidebar
			await fetchGoals();
		}
	}

	function formatApprovalDate(dateString: string | null) {
		if (!dateString) return '';
		return new Date(dateString).toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'short',
			day: 'numeric'
		});
	}
</script>

<svelte:head>
	<title>Manage Goals | Sing for Hope Education</title>
	<meta name="description" content="Manage UN SDG goals, targets, and objectives" />
</svelte:head>

<div class="h-full flex flex-col lg:flex-row bg-base-200/30">
	<!-- Sidebar: Goals List -->
	<div class="w-full lg:w-80 xl:w-96 border-r border-base-300 bg-base-100 flex flex-col">
		<!-- Header -->
		<div class="p-4 border-b border-base-300 bg-base-100">
			<h1 class="text-xl font-bold mb-3">UN SDG Goals</h1>
			<ProgressStats goals={$goals} showLessons={false} compact={true} />
		</div>

		<!-- Goals List -->
		<div class="flex-1 overflow-y-auto p-2">
			{#if $loading}
				<div class="flex justify-center items-center h-32">
					<span class="loading loading-spinner loading-md"></span>
				</div>
			{:else if $error}
				<div class="alert alert-error alert-sm m-2">
					<span class="text-xs">{$error}</span>
				</div>
			{:else if $goals.length === 0}
				<div class="text-center text-base-content/50 py-8 text-sm">
					No goals found
				</div>
			{:else}
				<div class="space-y-1">
					{#each $goals as goal}
						<button
							class="w-full text-left p-3 rounded-lg transition-all hover:bg-base-200"
							class:bg-primary={$selectedGoal?.id === goal.id}
							class:text-primary-content={$selectedGoal?.id === goal.id}
							class:shadow-sm={$selectedGoal?.id === goal.id}
							onclick={() => selectGoal(goal)}
						>
							<div class="flex items-start gap-3">
								<div class="badge badge-sm" class:badge-neutral={$selectedGoal?.id !== goal.id} class:badge-primary-content={$selectedGoal?.id === goal.id}>
									{goal.goal_number}
								</div>
								<div class="flex-1 min-w-0">
									<div class="font-medium text-sm">{goal.title}</div>
								</div>
								{#if goal.is_approved}
									<svg class="w-4 h-4 flex-shrink-0" class:text-success={$selectedGoal?.id !== goal.id} class:text-primary-content={$selectedGoal?.id === goal.id} fill="currentColor" viewBox="0 0 20 20">
										<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
									</svg>
								{/if}
							</div>
						</button>
					{/each}
				</div>
			{/if}
		</div>
	</div>

	<!-- Main Content: Goal Details -->
	<div class="flex-1 overflow-y-auto">
		{#if $selectedGoal}
			<div class="max-w-5xl mx-auto p-6">
				<!-- Header Section -->
				<div class="mb-6">
					{#if !editingGoal}
						<div class="flex items-start justify-between mb-2">
							<div class="flex-1">
								<div class="flex items-center gap-2 mb-2">
									<span class="badge">Goal {$selectedGoal.goal_number}</span>
								</div>
								<h1 class="text-3xl font-bold">{$selectedGoal.title}</h1>
								{#if $selectedGoal.description}
									<p class="text-base-content/70 mt-3">{$selectedGoal.description}</p>
								{/if}
							</div>
							<div class="flex items-center gap-2">
								{#if $selectedGoal.is_approved}
									<button class="btn btn-success btn-sm gap-1" onclick={handleUnapproveGoal}>
										<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
											<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
										</svg>
										Approved
									</button>
								{:else}
									<button class="btn btn-outline btn-sm gap-1" onclick={handleApproveGoal}>
										<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
										</svg>
										Approve & Lock
									</button>
								{/if}
								<div class="dropdown dropdown-end">
									<button tabindex="0" class="btn btn-ghost btn-sm btn-circle" aria-label="Options">
										<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"/>
										</svg>
									</button>
									<ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow-lg border border-base-300">
										<li><button onclick={startEditGoal} disabled={$selectedGoal.is_approved}>
											<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
											</svg>
											Edit Goal
										</button></li>
										<li><a href="/lessons?goal={$selectedGoal.id}">
											<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
												<path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"/>
											</svg>
											View Lessons
										</a></li>
										<li><button onclick={clearSelectedGoal}>
											<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
											</svg>
											Close
										</button></li>
									</ul>
								</div>
							</div>
						</div>
					{:else}
						<!-- Edit Goal Form -->
						<div class="bg-base-200/50 rounded-xl p-6 mb-6">
							<div class="flex items-center justify-between mb-4">
								<h3 class="font-semibold">Edit Goal {$selectedGoal.goal_number}</h3>
								<button class="btn btn-ghost btn-sm" onclick={cancelEditGoal}>Cancel</button>
							</div>
							<div class="space-y-4">
								<div class="form-control">
									<label class="label" for="goal-title">
										<span class="label-text">Title</span>
									</label>
									<input
										id="goal-title"
										type="text"
										class="input input-bordered w-full"
										bind:value={editForm.title}
										placeholder="Goal title"
									/>
								</div>
								<div class="form-control">
									<label class="label" for="goal-description">
										<span class="label-text">Description</span>
									</label>
									<textarea
										id="goal-description"
										class="textarea textarea-bordered w-full"
										rows="3"
										bind:value={editForm.description}
										placeholder="Goal description"
									></textarea>
								</div>
							</div>
							<div class="flex justify-end gap-2 mt-4">
								<button class="btn btn-ghost btn-sm" onclick={cancelEditGoal}>Cancel</button>
								<button class="btn btn-primary btn-sm" onclick={saveGoal}>Save Changes</button>
							</div>
						</div>
					{/if}

					<!-- Approval Status Info -->
					{#if $selectedGoal.is_approved && $selectedGoal.approved_at}
						<div class="alert alert-success">
							<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
								<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
							</svg>
							<div class="text-sm">
								<div class="font-semibold">Content Approved & Locked</div>
								<div class="text-xs opacity-80">Approved on {formatApprovalDate($selectedGoal.approved_at)}</div>
							</div>
						</div>
					{/if}
				</div>

				<div class="space-y-6">
					<!-- Targets Section -->
					{#if $selectedGoalTargets.length > 0 && !editingGoal}
						<section>
							<div class="flex items-center justify-between mb-3">
								<h2 class="text-lg font-semibold flex items-center gap-2">
									<svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/>
									</svg>
									Targets
								</h2>
							</div>
							<div class="space-y-2">
								{#each $selectedGoalTargets as target}
									{#if editingTargetId === target.id}
										<div class="bg-base-200/50 rounded-lg p-4 border border-base-300">
											<div class="flex items-center gap-2 mb-3">
												<span class="badge badge-sm badge-outline">{target.target_number}</span>
												<span class="text-sm font-medium text-base-content/60">Editing</span>
											</div>
											<textarea
												class="textarea textarea-bordered w-full mb-3"
												rows="3"
												bind:value={targetEditForm.description}
												placeholder="Target description"
											></textarea>
											<div class="flex gap-2 justify-end">
												<button class="btn btn-ghost btn-xs" onclick={cancelEditTarget}>Cancel</button>
												<button class="btn btn-primary btn-xs" onclick={() => saveTarget(target.id)}>Save</button>
											</div>
										</div>
									{:else}
										<div class="flex items-start gap-3 p-3 bg-base-100 rounded-lg border border-base-300 group hover:border-primary/20 transition-colors">
											<span class="badge badge-sm badge-outline">{target.target_number}</span>
											<p class="text-sm flex-1">{target.description}</p>
											{#if !$selectedGoal.is_approved}
												<button
													class="btn btn-ghost btn-xs btn-square opacity-0 group-hover:opacity-100 transition-opacity"
													onclick={() => startEditTarget(target.id, target.description)}
													aria-label="Edit target"
												>
													<svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
														<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
													</svg>
												</button>
											{/if}
										</div>
									{/if}
								{/each}
							</div>
						</section>
					{/if}

					<!-- Learning Objectives Section -->
					{#if $selectedGoalObjectives.length > 0 && !editingGoal}
						<section>
							<div class="flex items-center justify-between mb-3">
								<h2 class="text-lg font-semibold flex items-center gap-2">
									<svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
									</svg>
									Learning Objectives
								</h2>
							</div>
							<div class="space-y-4">
								{#each ['Knowledge', 'Discourse', 'Attitudes', 'Capacity', 'Action'] as category}
									{@const categoryObjectives = $selectedGoalObjectives.filter(o => o.category === category)}
									{#if categoryObjectives.length > 0}
										<div>
											<h3 class="font-semibold text-sm mb-2 flex items-center gap-2">
												<span class="badge badge-sm badge-outline">{category}</span>
											</h3>
											<div class="space-y-2">
												{#each categoryObjectives as objective}
													{#if editingObjectiveId === objective.id}
														<div class="bg-base-200/50 rounded-lg p-4 border border-base-300">
															<div class="text-xs font-medium text-base-content/60 mb-3">Editing {category} Objective</div>
															<textarea
																class="textarea textarea-bordered w-full mb-3"
																rows="3"
																bind:value={objectiveEditForm.description}
																placeholder="Objective description"
															></textarea>
															<input
																type="text"
																class="input input-bordered input-sm w-full mb-3"
																bind:value={objectiveEditForm.nccas_standard}
																placeholder="NCCAS Standard (e.g., Cr1.1.la)"
															/>
															<div class="flex gap-2 justify-end">
																<button class="btn btn-ghost btn-xs" onclick={cancelEditObjective}>Cancel</button>
																<button class="btn btn-primary btn-xs" onclick={() => saveObjective(objective.id)}>Save</button>
															</div>
														</div>
													{:else}
														<div class="flex items-start gap-3 p-3 bg-base-100 rounded-lg border border-base-300 group hover:border-primary/20 transition-colors">
															<div class="flex-1 min-w-0">
																<p class="text-sm text-base-content/80">{objective.description}</p>
																{#if objective.nccas_standard}
																	<span class="text-xs text-base-content/50 mt-1 block">({objective.nccas_standard})</span>
																{/if}
															</div>
															{#if !$selectedGoal.is_approved}
																<button
																	class="btn btn-ghost btn-xs btn-square opacity-0 group-hover:opacity-100 transition-opacity"
																	onclick={() => startEditObjective(objective.id, objective.description, objective.nccas_standard)}
																	aria-label="Edit objective"
																>
																	<svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
																		<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
																	</svg>
																</button>
															{/if}
														</div>
													{/if}
												{/each}
											</div>
										</div>
									{/if}
								{/each}
							</div>
						</section>
					{/if}
				</div>
			</div>
		{:else}
			<div class="flex items-center justify-center h-full">
				<div class="text-center text-base-content/40">
					<svg class="w-20 h-20 mx-auto mb-4 opacity-30" fill="currentColor" viewBox="0 0 20 20">
						<path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z"/>
					</svg>
					<p class="text-lg font-medium mb-1">No goal selected</p>
					<p class="text-sm">Choose a goal from the sidebar to view details</p>
				</div>
			</div>
		{/if}
	</div>
</div>

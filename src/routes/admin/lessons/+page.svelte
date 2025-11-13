<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import {
		lessons,
		loading,
		detailsLoading,
		error,
		fetchLessons,
		selectedLesson,
		fetchLessonDetails,
		selectedLessonMaterials,
		selectedLessonContent,
		selectedLessonMedia,
		clearSelectedLesson,
		updateLesson,
		updateMaterial,
		updateContent,
		updateMedia,
		createLesson,
		createMaterial,
		createContent,
		createMedia,
		deleteMaterial,
		deleteContent,
		deleteMedia,
		deleteLesson,
		approveLesson,
		unapproveLesson,
		type ArtForm
	} from '$lib/stores/lessons';
	import { goals, fetchGoals } from '$lib/stores/goals';
	import { user } from '$lib/auth';
	import ProgressStats from '$lib/components/ProgressStats.svelte';

	let goalFilter = $state<number | null>(null);
	let approvalFilter = $state<'all' | 'approved' | 'pending'>('all');

	// Edit states
	let editingLesson = $state(false);
	let editingMaterialId = $state<number | null>(null);
	let editingContentId = $state<number | null>(null);
	let editingMediaId = $state<number | null>(null);
	let showCreateLesson = $state(false);
	let showAddMaterial = $state(false);
	let showAddContent = $state(false);
	let showAddMedia = $state(false);

	// Edit forms
	let lessonEditForm = $state({
		title: '',
		art_form: '' as ArtForm,
		duration_min: null as number | null,
		duration_max: null as number | null,
		grade_level: ''
	});

	let materialEditForm = $state({
		material_type: '',
		name: '',
		description: '',
		is_optional: false
	});

	let contentEditForm = $state({
		section_type: '',
		section_title: '',
		content: ''
	});

	let mediaEditForm = $state({
		media_type: '',
		title: '',
		artist: '',
		genre: '',
		url: ''
	});

	// Create lesson form
	let createLessonForm = $state({
		goal_id: 1,
		lesson_number: 1,
		title: '',
		art_form: 'Musical Exploration' as ArtForm,
		duration_min: null as number | null,
		duration_max: null as number | null,
		grade_level: ''
	});

	onMount(async () => {
		await fetchGoals();

		const goalParam = $page.url.searchParams.get('goal');
		if (goalParam) {
			goalFilter = parseInt(goalParam);
			fetchLessons(goalFilter);
		} else {
			fetchLessons();
		}
	});

	function selectLesson(lesson: typeof $lessons[0]) {
		fetchLessonDetails(lesson.id);
	}

	function handleGoalFilter(goalId: number | null) {
		goalFilter = goalId;
		if (goalId) {
			fetchLessons(goalId);
		} else {
			fetchLessons();
		}
	}

	// Lesson editing
	function startEditLesson() {
		if (!$selectedLesson) return;
		lessonEditForm.title = $selectedLesson.title;
		lessonEditForm.art_form = $selectedLesson.art_form;
		lessonEditForm.duration_min = $selectedLesson.duration_min;
		lessonEditForm.duration_max = $selectedLesson.duration_max;
		lessonEditForm.grade_level = $selectedLesson.grade_level || '';
		editingLesson = true;
	}

	async function saveLesson() {
		if (!$selectedLesson) return;
		const result = await updateLesson($selectedLesson.id, {
			title: lessonEditForm.title,
			art_form: lessonEditForm.art_form,
			duration_min: lessonEditForm.duration_min,
			duration_max: lessonEditForm.duration_max,
			grade_level: lessonEditForm.grade_level || null
		});
		if (result.success) editingLesson = false;
	}

	function cancelEditLesson() {
		editingLesson = false;
	}

	// Material editing
	function startEditMaterial(materialId: number, material: typeof $selectedLessonMaterials[0]) {
		materialEditForm.material_type = material.material_type;
		materialEditForm.name = material.name;
		materialEditForm.description = material.description || '';
		materialEditForm.is_optional = material.is_optional;
		editingMaterialId = materialId;
	}

	async function saveMaterial(materialId: number) {
		const result = await updateMaterial(materialId, {
			material_type: materialEditForm.material_type,
			name: materialEditForm.name,
			description: materialEditForm.description || null,
			is_optional: materialEditForm.is_optional
		});
		if (result.success) editingMaterialId = null;
	}

	function cancelEditMaterial() {
		editingMaterialId = null;
	}

	async function removeMaterial(materialId: number) {
		if (confirm('Are you sure you want to delete this material?')) {
			await deleteMaterial(materialId);
		}
	}

	// Content editing
	function startEditContent(contentId: number, content: typeof $selectedLessonContent[0]) {
		contentEditForm.section_type = content.section_type;
		contentEditForm.section_title = content.section_title;
		contentEditForm.content = content.content;
		editingContentId = contentId;
	}

	async function saveContent(contentId: number) {
		const result = await updateContent(contentId, {
			section_type: contentEditForm.section_type,
			section_title: contentEditForm.section_title,
			content: contentEditForm.content
		});
		if (result.success) editingContentId = null;
	}

	function cancelEditContent() {
		editingContentId = null;
	}

	async function removeContent(contentId: number) {
		if (confirm('Are you sure you want to delete this section?')) {
			await deleteContent(contentId);
		}
	}

	// Media editing
	function startEditMedia(mediaId: number, media: typeof $selectedLessonMedia[0]) {
		mediaEditForm.media_type = media.media_type;
		mediaEditForm.title = media.title;
		mediaEditForm.artist = media.artist || '';
		mediaEditForm.genre = media.genre || '';
		mediaEditForm.url = media.url || '';
		editingMediaId = mediaId;
	}

	async function saveMedia(mediaId: number) {
		const result = await updateMedia(mediaId, {
			media_type: mediaEditForm.media_type,
			title: mediaEditForm.title,
			artist: mediaEditForm.artist || null,
			genre: mediaEditForm.genre || null,
			url: mediaEditForm.url || null
		});
		if (result.success) editingMediaId = null;
	}

	function cancelEditMedia() {
		editingMediaId = null;
	}

	async function removeMedia(mediaId: number) {
		if (confirm('Are you sure you want to delete this media item?')) {
			await deleteMedia(mediaId);
		}
	}

	// Create new lesson
	async function handleCreateLesson() {
		const result = await createLesson({
			...createLessonForm,
			is_approved: false,
			approved_by: null,
			approved_at: null
		});
		if (result.success) {
			showCreateLesson = false;
			createLessonForm = {
				goal_id: 1,
				lesson_number: 1,
				title: '',
				art_form: 'Musical Exploration',
				duration_min: null,
				duration_max: null,
				grade_level: ''
			};
			if (goalFilter) {
				fetchLessons(goalFilter);
			} else {
				fetchLessons();
			}
		}
	}

	// Delete lesson
	async function handleDeleteLesson() {
		if (!$selectedLesson) return;
		if (confirm(`Are you sure you want to delete "${$selectedLesson.title}"? This will also delete all associated materials, content, and media.`)) {
			const result = await deleteLesson($selectedLesson.id);
			if (result.success) {
				clearSelectedLesson();
				if (goalFilter) {
					fetchLessons(goalFilter);
				} else {
					fetchLessons();
				}
			}
		}
	}

	// Add new material
	async function handleAddMaterial() {
		if (!$selectedLesson) return;
		const maxOrder = $selectedLessonMaterials.reduce((max, m) => Math.max(max, m.order_num), 0);
		const result = await createMaterial({
			lesson_id: $selectedLesson.id,
			material_type: materialEditForm.material_type,
			name: materialEditForm.name,
			description: materialEditForm.description || null,
			is_optional: materialEditForm.is_optional,
			order_num: maxOrder + 1
		});
		if (result.success) {
			showAddMaterial = false;
			materialEditForm = {
				material_type: '',
				name: '',
				description: '',
				is_optional: false
			};
		}
	}

	// Add new content section
	async function handleAddContent() {
		if (!$selectedLesson) return;
		const maxOrder = $selectedLessonContent.reduce((max, c) => Math.max(max, c.order_num), 0);
		const result = await createContent({
			lesson_id: $selectedLesson.id,
			section_type: contentEditForm.section_type,
			section_title: contentEditForm.section_title,
			content: contentEditForm.content,
			order_num: maxOrder + 1
		});
		if (result.success) {
			showAddContent = false;
			contentEditForm = {
				section_type: '',
				section_title: '',
				content: ''
			};
		}
	}

	// Add new media
	async function handleAddMedia() {
		if (!$selectedLesson) return;
		const maxOrder = $selectedLessonMedia.reduce((max, m) => Math.max(max, m.order_num), 0);
		const result = await createMedia({
			lesson_id: $selectedLesson.id,
			media_type: mediaEditForm.media_type,
			title: mediaEditForm.title,
			artist: mediaEditForm.artist || null,
			genre: mediaEditForm.genre || null,
			url: mediaEditForm.url || null,
			description: null,
			order_num: maxOrder + 1
		});
		if (result.success) {
			showAddMedia = false;
			mediaEditForm = {
				media_type: '',
				title: '',
				artist: '',
				genre: '',
				url: ''
			};
		}
	}

	const artFormOptions: ArtForm[] = ['Musical Exploration', 'Art', 'Creative Writing', 'Dance/Movement', 'Drama'];

	// Filtered lessons based on approval status
	let filteredLessons = $derived(
		approvalFilter === 'all'
			? $lessons
			: approvalFilter === 'approved'
			? $lessons.filter(l => l.is_approved)
			: $lessons.filter(l => !l.is_approved)
	);

	async function handleApproveLesson() {
		if (!$selectedLesson || !$user) return;

		const result = await approveLesson($selectedLesson.id, $user.id);
		if (result.success) {
			// Refresh lessons to update the sidebar
			if (goalFilter) {
				await fetchLessons(goalFilter);
			} else {
				await fetchLessons();
			}
		}
	}

	async function handleUnapproveLesson() {
		if (!$selectedLesson) return;

		const result = await unapproveLesson($selectedLesson.id);
		if (result.success) {
			// Refresh lessons to update the sidebar
			if (goalFilter) {
				await fetchLessons(goalFilter);
			} else {
				await fetchLessons();
			}
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
	<title>Manage Lessons | Sing for Hope Education</title>
	<meta name="description" content="Manage arts-integrated curriculum lessons" />
</svelte:head>

<div class="h-full flex flex-col lg:flex-row bg-base-200/30">
	<!-- Sidebar: Lessons List -->
	<div class="w-full lg:w-80 xl:w-96 border-r border-base-300 bg-base-100 flex flex-col">
		<!-- Header -->
		<div class="p-4 border-b border-base-300 bg-base-100">
			<div class="flex items-center justify-between mb-3">
				<h1 class="text-xl font-bold">Lessons</h1>
				<button class="btn btn-primary btn-sm gap-1" onclick={() => showCreateLesson = true}>
					<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
					</svg>
					New
				</button>
			</div>
			<div class="mb-3">
				<ProgressStats lessons={$lessons} showGoals={false} compact={true} />
			</div>
			<div class="space-y-2">
				<select
					class="select select-bordered select-sm w-full"
					bind:value={goalFilter}
					onchange={() => handleGoalFilter(goalFilter)}
				>
					<option value={null}>All Goals</option>
					{#each $goals as goal}
						<option value={goal.id}>Goal {goal.goal_number}: {goal.title}</option>
					{/each}
				</select>
				<select
					class="select select-bordered select-sm w-full"
					bind:value={approvalFilter}
				>
					<option value="all">All Status</option>
					<option value="approved">Approved Only</option>
					<option value="pending">Pending Review</option>
				</select>
			</div>
		</div>

		<!-- Lessons List -->
		<div class="flex-1 overflow-y-auto p-2">
			{#if $loading}
				<div class="flex justify-center items-center h-32">
					<span class="loading loading-spinner loading-md"></span>
				</div>
			{:else if $error}
				<div class="alert alert-error alert-sm m-2">
					<span class="text-xs">{$error}</span>
				</div>
			{:else if filteredLessons.length === 0}
				<div class="text-center text-base-content/50 py-8 text-sm">
					{#if approvalFilter === 'approved'}
						No approved lessons found
					{:else if approvalFilter === 'pending'}
						No pending lessons found
					{:else}
						No lessons found
					{/if}
				</div>
			{:else}
				<div class="space-y-1">
					{#each filteredLessons as lesson}
						<button
							class="w-full text-left p-3 rounded-lg transition-all hover:bg-base-200"
							class:bg-primary={$selectedLesson?.id === lesson.id}
							class:text-primary-content={$selectedLesson?.id === lesson.id}
							class:shadow-sm={$selectedLesson?.id === lesson.id}
							onclick={() => selectLesson(lesson)}
						>
							<div class="flex items-start gap-2">
								<div class="flex-1 min-w-0">
									<div class="font-medium text-sm truncate">{lesson.title}</div>
									<div class="text-xs opacity-70 mt-0.5">{lesson.art_form}</div>
									<div class="flex gap-1.5 mt-1.5">
										{#if lesson.duration_min && lesson.duration_max}
											<span class="text-xs opacity-60">{lesson.duration_min}-{lesson.duration_max}min</span>
										{/if}
										{#if lesson.grade_level}
											<span class="text-xs opacity-60">• Grades {lesson.grade_level}</span>
										{/if}
									</div>
								</div>
								{#if lesson.is_approved}
									<svg class="w-4 h-4 flex-shrink-0" class:text-success={$selectedLesson?.id !== lesson.id} class:text-primary-content={$selectedLesson?.id === lesson.id} fill="currentColor" viewBox="0 0 20 20">
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

	<!-- Main Content: Lesson Details -->
	<div class="flex-1 overflow-y-auto">
		{#if $detailsLoading}
			<div class="flex items-center justify-center h-full">
				<span class="loading loading-spinner loading-lg"></span>
			</div>
		{:else if $selectedLesson}
			<div class="max-w-5xl mx-auto p-6">
				<!-- Header Section -->
				<div class="mb-6">
					{#if !editingLesson}
						<div class="flex items-start justify-between mb-2">
							<div class="flex-1">
								<div class="flex items-center gap-2 mb-2">
									<span class="badge badge-sm">{$selectedLesson.art_form}</span>
									{#if $selectedLesson.grade_level}
										<span class="text-xs text-base-content/60">Grades {$selectedLesson.grade_level}</span>
									{/if}
									{#if $selectedLesson.duration_min && $selectedLesson.duration_max}
										<span class="text-xs text-base-content/60">• {$selectedLesson.duration_min}-{$selectedLesson.duration_max} minutes</span>
									{/if}
								</div>
								<h1 class="text-3xl font-bold">{$selectedLesson.title}</h1>
							</div>
							<div class="flex items-center gap-2">
								{#if $selectedLesson.is_approved}
									<button class="btn btn-success btn-sm gap-1" onclick={handleUnapproveLesson}>
										<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
											<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
										</svg>
										Approved
									</button>
								{:else}
									<button class="btn btn-outline btn-sm gap-1" onclick={handleApproveLesson}>
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
										<li><button onclick={startEditLesson} disabled={$selectedLesson.is_approved}>
											<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
											</svg>
											Edit Lesson
										</button></li>
										<li><button onclick={handleDeleteLesson} class="text-error" disabled={$selectedLesson.is_approved}>
											<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
											</svg>
											Delete Lesson
										</button></li>
										<li><button onclick={clearSelectedLesson}>
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
						<!-- Edit Lesson Form -->
						<div class="bg-base-200/50 rounded-xl p-6 mb-6">
							<div class="flex items-center justify-between mb-4">
								<h3 class="font-semibold">Edit Lesson Details</h3>
								<button class="btn btn-ghost btn-sm" onclick={cancelEditLesson}>Cancel</button>
							</div>
							<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
								<div class="form-control md:col-span-2">
									<label class="label" for="lesson-title">
										<span class="label-text">Title</span>
									</label>
									<input
										id="lesson-title"
										type="text"
										class="input input-bordered"
										bind:value={lessonEditForm.title}
									/>
								</div>
								<div class="form-control">
									<label class="label" for="lesson-art-form">
										<span class="label-text">Art Form</span>
									</label>
									<select
										id="lesson-art-form"
										class="select select-bordered"
										bind:value={lessonEditForm.art_form}
									>
										{#each artFormOptions as artForm}
											<option value={artForm}>{artForm}</option>
										{/each}
									</select>
								</div>
								<div class="form-control">
									<label class="label" for="lesson-grade-level">
										<span class="label-text">Grade Level</span>
									</label>
									<input
										id="lesson-grade-level"
										type="text"
										class="input input-bordered"
										bind:value={lessonEditForm.grade_level}
										placeholder="9-12"
									/>
								</div>
								<div class="form-control">
									<label class="label" for="lesson-duration-min">
										<span class="label-text">Min Duration (min)</span>
									</label>
									<input
										id="lesson-duration-min"
										type="number"
										class="input input-bordered"
										bind:value={lessonEditForm.duration_min}
										placeholder="30"
									/>
								</div>
								<div class="form-control">
									<label class="label" for="lesson-duration-max">
										<span class="label-text">Max Duration (min)</span>
									</label>
									<input
										id="lesson-duration-max"
										type="number"
										class="input input-bordered"
										bind:value={lessonEditForm.duration_max}
										placeholder="45"
									/>
								</div>
							</div>
							<div class="flex justify-end gap-2 mt-4">
								<button class="btn btn-ghost btn-sm" onclick={cancelEditLesson}>Cancel</button>
								<button class="btn btn-primary btn-sm" onclick={saveLesson}>Save Changes</button>
							</div>
						</div>
					{/if}

					<!-- Approval Status Info -->
					{#if $selectedLesson.is_approved && $selectedLesson.approved_at}
						<div class="alert alert-success">
							<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
								<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
							</svg>
							<div class="text-sm">
								<div class="font-semibold">Content Approved & Locked</div>
								<div class="text-xs opacity-80">Approved on {formatApprovalDate($selectedLesson.approved_at)}</div>
							</div>
						</div>
					{/if}
				</div>

				<div class="space-y-6">
					<!-- Materials Section -->
					<section>
						<div class="flex items-center justify-between mb-3">
							<h2 class="text-lg font-semibold flex items-center gap-2">
								<svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
								</svg>
								Materials
							</h2>
							<button class="btn btn-ghost btn-xs gap-1" onclick={() => showAddMaterial = true} disabled={$selectedLesson.is_approved}>
								<svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
								</svg>
								Add
							</button>
						</div>

						{#if showAddMaterial}
							<div class="bg-base-200/30 rounded-lg p-4 mb-3 border border-base-300">
								<div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
									<input
										type="text"
										class="input input-bordered input-sm"
										bind:value={materialEditForm.material_type}
										placeholder="Type (e.g., Supplies)"
									/>
									<input
										type="text"
										class="input input-bordered input-sm"
										bind:value={materialEditForm.name}
										placeholder="Name"
									/>
								</div>
								<input
									type="text"
									class="input input-bordered input-sm w-full mb-3"
									bind:value={materialEditForm.description}
									placeholder="Description (optional)"
								/>
								<div class="flex items-center justify-between">
									<label class="label cursor-pointer gap-2 p-0">
										<input type="checkbox" class="checkbox checkbox-sm" bind:checked={materialEditForm.is_optional} />
										<span class="label-text text-sm">Optional</span>
									</label>
									<div class="flex gap-2">
										<button class="btn btn-ghost btn-xs" onclick={() => showAddMaterial = false}>Cancel</button>
										<button class="btn btn-primary btn-xs" onclick={handleAddMaterial}>Add Material</button>
									</div>
								</div>
							</div>
						{/if}

						{#if $selectedLessonMaterials.length > 0}
							<div class="space-y-2">
								{#each $selectedLessonMaterials as material}
									{#if editingMaterialId === material.id}
										<div class="bg-base-200/50 rounded-lg p-4 border border-base-300">
											<div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
												<input
													type="text"
													class="input input-bordered input-sm"
													bind:value={materialEditForm.material_type}
													placeholder="Type"
												/>
												<input
													type="text"
													class="input input-bordered input-sm"
													bind:value={materialEditForm.name}
													placeholder="Name"
												/>
											</div>
											<input
												type="text"
												class="input input-bordered input-sm w-full mb-3"
												bind:value={materialEditForm.description}
												placeholder="Description"
											/>
											<div class="flex items-center justify-between">
												<label class="label cursor-pointer gap-2 p-0">
													<input type="checkbox" class="checkbox checkbox-xs" bind:checked={materialEditForm.is_optional} />
													<span class="label-text text-xs">Optional</span>
												</label>
												<div class="flex gap-2">
													<button class="btn btn-ghost btn-xs" onclick={cancelEditMaterial}>Cancel</button>
													<button class="btn btn-primary btn-xs" onclick={() => saveMaterial(material.id)}>Save</button>
												</div>
											</div>
										</div>
									{:else}
										<div class="flex items-start gap-3 p-3 bg-base-100 rounded-lg border border-base-300 group hover:border-primary/20 transition-colors">
											<div class="flex-1 min-w-0">
												<div class="flex items-center gap-2 mb-1">
													<span class="badge badge-sm badge-outline">{material.material_type}</span>
													{#if material.is_optional}
														<span class="badge badge-xs">Optional</span>
													{/if}
												</div>
												<div class="font-medium text-sm">{material.name}</div>
												{#if material.description}
													<div class="text-xs text-base-content/60 mt-1">{material.description}</div>
												{/if}
											</div>
											{#if !$selectedLesson.is_approved}
												<div class="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
													<button class="btn btn-ghost btn-xs btn-square" onclick={() => startEditMaterial(material.id, material)} aria-label="Edit">
														<svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
															<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
														</svg>
													</button>
													<button class="btn btn-ghost btn-xs btn-square text-error" onclick={() => removeMaterial(material.id)} aria-label="Delete">
														<svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
															<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
														</svg>
													</button>
												</div>
											{/if}
										</div>
									{/if}
								{/each}
							</div>
						{:else}
							<div class="text-center py-8 text-sm text-base-content/50">
								No materials added yet
							</div>
						{/if}
					</section>

					<!-- Media & Songs Section -->
					<section>
						<div class="flex items-center justify-between mb-3">
							<h2 class="text-lg font-semibold flex items-center gap-2">
								<svg class="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
									<path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z"/>
								</svg>
								Media & Songs
							</h2>
							<button class="btn btn-ghost btn-xs gap-1" onclick={() => showAddMedia = true} disabled={$selectedLesson.is_approved}>
								<svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
								</svg>
								Add
							</button>
						</div>

						{#if showAddMedia}
							<div class="bg-base-200/30 rounded-lg p-4 mb-3 border border-base-300">
								<div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
									<input
										type="text"
										class="input input-bordered input-sm"
										bind:value={mediaEditForm.media_type}
										placeholder="Type (e.g., Song)"
									/>
									<input
										type="text"
										class="input input-bordered input-sm"
										bind:value={mediaEditForm.title}
										placeholder="Title"
									/>
									<input
										type="text"
										class="input input-bordered input-sm"
										bind:value={mediaEditForm.artist}
										placeholder="Artist"
									/>
									<input
										type="text"
										class="input input-bordered input-sm"
										bind:value={mediaEditForm.genre}
										placeholder="Genre"
									/>
								</div>
								<input
									type="text"
									class="input input-bordered input-sm w-full mb-3"
									bind:value={mediaEditForm.url}
									placeholder="URL (optional)"
								/>
								<div class="flex justify-end gap-2">
									<button class="btn btn-ghost btn-xs" onclick={() => showAddMedia = false}>Cancel</button>
									<button class="btn btn-primary btn-xs" onclick={handleAddMedia}>Add Media</button>
								</div>
							</div>
						{/if}

						{#if $selectedLessonMedia.length > 0}
							<div class="grid grid-cols-1 md:grid-cols-2 gap-2">
								{#each $selectedLessonMedia as media}
									{#if editingMediaId === media.id}
										<div class="bg-base-200/50 rounded-lg p-3 border border-base-300">
											<div class="space-y-2">
												<input type="text" class="input input-bordered input-sm w-full" bind:value={mediaEditForm.media_type} placeholder="Type"/>
												<input type="text" class="input input-bordered input-sm w-full" bind:value={mediaEditForm.title} placeholder="Title"/>
												<input type="text" class="input input-bordered input-sm w-full" bind:value={mediaEditForm.artist} placeholder="Artist"/>
												<input type="text" class="input input-bordered input-sm w-full" bind:value={mediaEditForm.genre} placeholder="Genre"/>
												<input type="text" class="input input-bordered input-sm w-full" bind:value={mediaEditForm.url} placeholder="URL"/>
												<div class="flex gap-2 justify-end">
													<button class="btn btn-ghost btn-xs" onclick={cancelEditMedia}>Cancel</button>
													<button class="btn btn-primary btn-xs" onclick={() => saveMedia(media.id)}>Save</button>
												</div>
											</div>
										</div>
									{:else}
										<div class="flex items-center gap-2 p-2 bg-base-100 rounded-lg border border-base-300 group hover:border-primary/20 transition-colors">
											<svg class="w-4 h-4 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
												<path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z"/>
											</svg>
											<div class="flex-1 min-w-0">
												<div class="font-medium text-sm truncate">{media.title}</div>
												<div class="text-xs text-base-content/60 truncate">{media.artist}</div>
											</div>
											{#if media.genre}
												<span class="badge badge-xs">{media.genre}</span>
											{/if}
											{#if !$selectedLesson.is_approved}
												<div class="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
													<button class="btn btn-ghost btn-xs btn-square" onclick={() => startEditMedia(media.id, media)} aria-label="Edit">
														<svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
															<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
														</svg>
													</button>
													<button class="btn btn-ghost btn-xs btn-square text-error" onclick={() => removeMedia(media.id)} aria-label="Delete">
														<svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
															<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
														</svg>
													</button>
												</div>
											{/if}
										</div>
									{/if}
								{/each}
							</div>
						{:else}
							<div class="text-center py-8 text-sm text-base-content/50">
								No media added yet
							</div>
						{/if}
					</section>

					<!-- Lesson Plan Sections -->
					<section>
						<div class="flex items-center justify-between mb-3">
							<h2 class="text-lg font-semibold flex items-center gap-2">
								<svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
								</svg>
								Lesson Plan
							</h2>
							<button class="btn btn-ghost btn-xs gap-1" onclick={() => showAddContent = true} disabled={$selectedLesson.is_approved}>
								<svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
								</svg>
								Add Section
							</button>
						</div>

						{#if showAddContent}
							<div class="bg-base-200/30 rounded-lg p-4 mb-3 border border-base-300">
								<div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
									<input
										type="text"
										class="input input-bordered input-sm"
										bind:value={contentEditForm.section_type}
										placeholder="Type (e.g., Activity)"
									/>
									<input
										type="text"
										class="input input-bordered input-sm"
										bind:value={contentEditForm.section_title}
										placeholder="Title"
									/>
								</div>
								<textarea
									class="textarea textarea-bordered w-full mb-3"
									bind:value={contentEditForm.content}
									placeholder="Content"
									rows="4"
								></textarea>
								<div class="flex justify-end gap-2">
									<button class="btn btn-ghost btn-xs" onclick={() => showAddContent = false}>Cancel</button>
									<button class="btn btn-primary btn-xs" onclick={handleAddContent}>Add Section</button>
								</div>
							</div>
						{/if}

						{#if $selectedLessonContent.length > 0}
							<div class="space-y-3">
								{#each $selectedLessonContent as content}
									{#if editingContentId === content.id}
										<div class="bg-base-200/50 rounded-lg p-4 border border-base-300">
											<div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
												<input
													type="text"
													class="input input-bordered input-sm"
													bind:value={contentEditForm.section_type}
													placeholder="Type"
												/>
												<input
													type="text"
													class="input input-bordered input-sm"
													bind:value={contentEditForm.section_title}
													placeholder="Title"
												/>
											</div>
											<textarea
												class="textarea textarea-bordered w-full mb-3"
												bind:value={contentEditForm.content}
												rows="5"
											></textarea>
											<div class="flex justify-end gap-2">
												<button class="btn btn-ghost btn-xs" onclick={cancelEditContent}>Cancel</button>
												<button class="btn btn-primary btn-xs" onclick={() => saveContent(content.id)}>Save</button>
											</div>
										</div>
									{:else}
										<div class="bg-base-100 rounded-lg p-4 border border-base-300 group hover:border-primary/20 transition-colors">
											<div class="flex items-start justify-between mb-2">
												<div class="flex items-center gap-2">
													<span class="badge badge-sm">{content.section_type}</span>
													<h3 class="font-semibold text-sm">{content.section_title}</h3>
												</div>
												{#if !$selectedLesson.is_approved}
													<div class="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
														<button class="btn btn-ghost btn-xs btn-square" onclick={() => startEditContent(content.id, content)} aria-label="Edit">
															<svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
																<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
															</svg>
														</button>
														<button class="btn btn-ghost btn-xs btn-square text-error" onclick={() => removeContent(content.id)} aria-label="Delete">
															<svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
																<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
															</svg>
														</button>
													</div>
												{/if}
											</div>
											<div class="text-sm text-base-content/80 whitespace-pre-line leading-relaxed">{content.content}</div>
										</div>
									{/if}
								{/each}
							</div>
						{:else}
							<div class="text-center py-8 text-sm text-base-content/50">
								No lesson plan sections added yet
							</div>
						{/if}
					</section>
				</div>
			</div>
		{:else}
			<div class="flex items-center justify-center h-full">
				<div class="text-center text-base-content/40">
					<svg class="w-20 h-20 mx-auto mb-4 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
					</svg>
					<p class="text-lg font-medium mb-1">No lesson selected</p>
					<p class="text-sm">Choose a lesson from the sidebar to view details</p>
				</div>
			</div>
		{/if}
	</div>
</div>

<!-- Create Lesson Modal -->
{#if showCreateLesson}
	<div class="modal modal-open">
		<div class="modal-box max-w-2xl">
			<h3 class="font-bold text-lg mb-4">Create New Lesson</h3>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
				<div class="form-control md:col-span-2">
					<label class="label" for="new-lesson-goal">
						<span class="label-text">Goal</span>
					</label>
					<select
						id="new-lesson-goal"
						class="select select-bordered"
						bind:value={createLessonForm.goal_id}
					>
						{#each $goals as goal}
							<option value={goal.id}>Goal {goal.goal_number}: {goal.title}</option>
						{/each}
					</select>
				</div>
				<div class="form-control">
					<label class="label" for="new-lesson-number">
						<span class="label-text">Lesson Number</span>
					</label>
					<input
						id="new-lesson-number"
						type="number"
						class="input input-bordered"
						bind:value={createLessonForm.lesson_number}
						min="1"
					/>
				</div>
				<div class="form-control">
					<label class="label" for="new-lesson-art-form">
						<span class="label-text">Art Form</span>
					</label>
					<select
						id="new-lesson-art-form"
						class="select select-bordered"
						bind:value={createLessonForm.art_form}
					>
						{#each artFormOptions as artForm}
							<option value={artForm}>{artForm}</option>
						{/each}
					</select>
				</div>
				<div class="form-control md:col-span-2">
					<label class="label" for="new-lesson-title">
						<span class="label-text">Title</span>
					</label>
					<input
						id="new-lesson-title"
						type="text"
						class="input input-bordered"
						bind:value={createLessonForm.title}
						placeholder="Lesson title"
					/>
				</div>
				<div class="form-control">
					<label class="label" for="new-lesson-grade-level">
						<span class="label-text">Grade Level</span>
					</label>
					<input
						id="new-lesson-grade-level"
						type="text"
						class="input input-bordered"
						bind:value={createLessonForm.grade_level}
						placeholder="e.g., 9-12"
					/>
				</div>
				<div class="form-control">
					<label class="label">
						<span class="label-text">Duration (minutes)</span>
					</label>
					<div class="flex gap-2">
						<input
							type="number"
							class="input input-bordered flex-1"
							bind:value={createLessonForm.duration_min}
							placeholder="Min"
						/>
						<input
							type="number"
							class="input input-bordered flex-1"
							bind:value={createLessonForm.duration_max}
							placeholder="Max"
						/>
					</div>
				</div>
			</div>
			<div class="modal-action">
				<button class="btn btn-ghost" onclick={() => showCreateLesson = false}>Cancel</button>
				<button class="btn btn-primary" onclick={handleCreateLesson}>Create Lesson</button>
			</div>
		</div>
		<div class="modal-backdrop" onclick={() => showCreateLesson = false}></div>
	</div>
{/if}

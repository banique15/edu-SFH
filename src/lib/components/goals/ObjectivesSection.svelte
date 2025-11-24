<script lang="ts">
	import type {
		GoalObjectiveContent,
		ObjectiveCategory,
	} from "$lib/data/goal-content";
	import type { Goal } from "$lib/stores/goals";
	import { getSdgColor } from "$lib/utils/sdg-colors";
	import { user } from "$lib/auth";
	import { isAdmin } from "$lib/utils/auth-helpers";
	import {
		updateObjective,
		createObjective,
		deleteObjective,
	} from "$lib/stores/goals";
	import { invalidateAll } from "$app/navigation";

	interface Props {
		objectives: GoalObjectiveContent[];
		goal: Goal;
		selectedGrade: string;
	}

	let { objectives, goal, selectedGrade }: Props = $props();

	const goalColor = $derived(getSdgColor(goal.goal_number));

	const categories: ObjectiveCategory[] = [
		"Knowledge",
		"Discourse",
		"Attitudes",
		"Capacity",
		"Action",
	];

	let editingObjectiveId = $state<number | null>(null);
	let creatingObjectiveCategory = $state<ObjectiveCategory | null>(null);
	let objectiveEditForm = $state({
		description: "",
		nccas_standard: "",
		grade_level: "",
	});
	let objectiveCreateForm = $state({
		description: "",
		nccas_standard: "",
		grade_level: "",
	});
	let saving = $state(false);
	let deleting = $state(false);
	let errorMessage = $state<string | null>(null);
	let successMessage = $state<string | null>(null);

	const userIsAdmin = $derived(isAdmin($user?.email));

	function getObjectivesByCategory(category: ObjectiveCategory) {
		const categoryObjectives =
			objectives.find((obj) => obj.category === category)?.items ?? [];

		// Filter by grade level
		return categoryObjectives.filter((obj) => {
			// If no grade_level is set (null/undefined), don't show it
			if (!obj.grade_level) {
				return false;
			}
			// Check if the grade_level matches the selected grade
			return obj.grade_level === selectedGrade;
		});
	}

	function startEditObjective(
		objectiveId: number,
		description: string,
		nccas: string | null,
		gradeLevel: string | null,
	) {
		objectiveEditForm.description = description;
		objectiveEditForm.nccas_standard = nccas || "";
		objectiveEditForm.grade_level = gradeLevel || "";
		editingObjectiveId = objectiveId;
		errorMessage = null;
		successMessage = null;
	}

	function cancelEditObjective() {
		editingObjectiveId = null;
		errorMessage = null;
		successMessage = null;
	}

	function startCreateObjective(category: ObjectiveCategory) {
		objectiveCreateForm.description = "";
		objectiveCreateForm.nccas_standard = "";
		objectiveCreateForm.grade_level = selectedGrade;
		creatingObjectiveCategory = category;
		errorMessage = null;
		successMessage = null;
	}

	function cancelCreateObjective() {
		creatingObjectiveCategory = null;
		errorMessage = null;
		successMessage = null;
	}

	async function saveCreateObjective() {
		if (!creatingObjectiveCategory) return;

		saving = true;
		errorMessage = null;
		successMessage = null;

		try {
			const result = await createObjective({
				goal_id: goal.id,
				category: creatingObjectiveCategory,
				description: objectiveCreateForm.description,
				nccas_standard: objectiveCreateForm.nccas_standard || null,
				grade_level: objectiveCreateForm.grade_level || null,
			});

			if (result.success) {
				successMessage = "Objective created successfully";
				creatingObjectiveCategory = null;
				objectiveCreateForm.description = "";
				objectiveCreateForm.nccas_standard = "";
				objectiveCreateForm.grade_level = "";

				// Refresh the page data
				await invalidateAll();
			} else {
				errorMessage = result.error || "Failed to create objective";
			}
		} catch (err) {
			errorMessage =
				err instanceof Error
					? err.message
					: "Failed to create objective";
		} finally {
			saving = false;
		}
	}

	async function handleDeleteObjective(objectiveId: number) {
		if (!confirm("Are you sure you want to delete this objective?")) return;

		deleting = true;
		errorMessage = null;
		successMessage = null;

		try {
			const result = await deleteObjective(objectiveId);

			if (result.success) {
				successMessage = "Objective deleted successfully";

				// Refresh the page data
				await invalidateAll();
			} else {
				errorMessage = result.error || "Failed to delete objective";
			}
		} catch (err) {
			errorMessage =
				err instanceof Error
					? err.message
					: "Failed to delete objective";
		} finally {
			deleting = false;
		}
	}

	async function saveObjective(objectiveId: number) {
		saving = true;
		errorMessage = null;
		successMessage = null;

		try {
			const updates: any = {
				description: objectiveEditForm.description,
				nccas_standard: objectiveEditForm.nccas_standard || null,
			};

			// Only update grade_level if it's provided
			if (objectiveEditForm.grade_level) {
				updates.grade_level = objectiveEditForm.grade_level;
			} else {
				updates.grade_level = null;
			}

			const result = await updateObjective(objectiveId, updates);

			if (result.success) {
				successMessage = "Objective updated successfully";
				editingObjectiveId = null;

				// Refresh the page data
				await invalidateAll();
			} else {
				errorMessage = result.error || "Failed to update objective";
			}
		} catch (err) {
			errorMessage =
				err instanceof Error
					? err.message
					: "Failed to update objective";
		} finally {
			saving = false;
		}
	}
</script>

<div class="bg-[#FDF9F1] py-12">
	<div class="max-w-7xl mx-auto">
		<div class="collapse collapse-arrow rounded-2xl mb-6">
			<input type="checkbox" checked />
			<div class="collapse-title text-4xl">Objectives</div>
			<div class="collapse-content">
				<p class="text-base-content/70 mb-8">
					These learning objectives are organized into five categories
					that together form a comprehensive approach to understanding
					and engaging with this goal.
				</p>

				<!-- Error/Success Messages -->
				{#if errorMessage}
					<div class="alert alert-error mb-4">
						<svg
							class="w-5 h-5"
							fill="currentColor"
							viewBox="0 0 20 20"
						>
							<path
								fill-rule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
								clip-rule="evenodd"
							/>
						</svg>
						<span>{errorMessage}</span>
					</div>
				{/if}

				{#if successMessage}
					<div class="alert alert-success mb-4">
						<svg
							class="w-5 h-5"
							fill="currentColor"
							viewBox="0 0 20 20"
						>
							<path
								fill-rule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
								clip-rule="evenodd"
							/>
						</svg>
						<span>{successMessage}</span>
					</div>
				{/if}

				<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
					{#each categories as category}
						{@const categoryObjectives =
							getObjectivesByCategory(category)}
						{#if categoryObjectives.length > 0 || userIsAdmin}
							<div
								class="card bg-white border-2 rounded-2xl shadow-sm"
								style="border-color: {goalColor};"
							>
								<div class="card-body">
									<div
										class="flex items-center justify-between mb-2"
									>
										<h3
											class="card-title text-2xl tracking-wide"
										>
											{category}
										</h3>
										{#if userIsAdmin}
											<button
												class="btn btn-sm btn-ghost btn-circle"
												onclick={() =>
													startCreateObjective(
														category,
													)}
												disabled={creatingObjectiveCategory ===
													category}
												aria-label="Add objective"
											>
												<svg
													class="w-4 h-4"
													fill="none"
													stroke="currentColor"
													viewBox="0 0 24 24"
												>
													<path
														stroke-linecap="round"
														stroke-linejoin="round"
														stroke-width="2"
														d="M12 4v16m8-8H4"
													/>
												</svg>
											</button>
										{/if}
									</div>
									<ul class="space-y-3">
										{#if creatingObjectiveCategory === category && userIsAdmin}
											<li
												class="text-sm text-base-content/80 leading-relaxed"
											>
												<div
													class="bg-base-200/50 rounded-lg p-4 border border-base-300"
												>
													<div
														class="text-xs font-medium text-base-content/60 mb-3"
													>
														New {category} Objective
													</div>
													<textarea
														class="textarea textarea-bordered w-full mb-3"
														rows="3"
														bind:value={
															objectiveCreateForm.description
														}
														placeholder="Objective description"
													></textarea>
													<input
														type="text"
														class="input input-bordered input-sm w-full mb-3"
														bind:value={
															objectiveCreateForm.nccas_standard
														}
														placeholder="NCCAS Standard (e.g., Cr1.1.la)"
													/>
													<select
														class="select select-bordered select-sm w-full mb-3"
														bind:value={
															objectiveCreateForm.grade_level
														}
													>
														<option value=""
															>All Grades</option
														>
														<option value="5-8"
															>Grades 5-8</option
														>
														<option value="9-12"
															>Grades 9-12</option
														>
													</select>
													<div
														class="flex gap-2 justify-end"
													>
														<button
															class="btn btn-ghost btn-xs"
															onclick={cancelCreateObjective}
															disabled={saving}
														>
															Cancel
														</button>
														<button
															class="btn btn-primary btn-xs"
															onclick={saveCreateObjective}
															disabled={saving ||
																!objectiveCreateForm.description.trim()}
														>
															{saving
																? "Creating..."
																: "Create"}
														</button>
													</div>
												</div>
											</li>
										{/if}
										{#each categoryObjectives as objective}
											{#if editingObjectiveId === objective.id && userIsAdmin}
												<li
													class="text-sm text-base-content/80 leading-relaxed"
												>
													<div
														class="bg-base-200/50 rounded-lg p-4 border border-base-300"
													>
														<div
															class="text-xs font-medium text-base-content/60 mb-3"
														>
															Editing {category} Objective
														</div>
														<textarea
															class="textarea textarea-bordered w-full mb-3"
															rows="3"
															bind:value={
																objectiveEditForm.description
															}
															placeholder="Objective description"
														></textarea>
														<input
															type="text"
															class="input input-bordered input-sm w-full mb-3"
															bind:value={
																objectiveEditForm.nccas_standard
															}
															placeholder="NCCAS Standard (e.g., Cr1.1.la)"
														/>
														<select
															class="select select-bordered select-sm w-full mb-3"
															bind:value={
																objectiveEditForm.grade_level
															}
														>
															<option value=""
																>All Grades</option
															>
															<option value="5-8"
																>Grades 5-8</option
															>
															<option value="9-12"
																>Grades 9-12</option
															>
														</select>
														<div
															class="flex gap-2 justify-end"
														>
															<button
																class="btn btn-ghost btn-xs"
																onclick={cancelEditObjective}
																disabled={saving}
															>
																Cancel
															</button>
															<button
																class="btn btn-primary btn-xs"
																onclick={() =>
																	saveObjective(
																		objective.id!,
																	)}
																disabled={saving}
															>
																{saving
																	? "Saving..."
																	: "Save"}
															</button>
														</div>
													</div>
												</li>
											{:else}
												<li
													class="text-sm text-base-content/80 leading-relaxed"
												>
													<div
														class="flex gap-2 group"
													>
														<span
															class="mt-1"
															style="color: {goalColor};"
															>•</span
														>
														<div class="flex-1">
															<p>
																{objective.description}
															</p>
															{#if objective.nccas}
																<span
																	class="text-xm text-base-content/50 mt-1 block"
																>
																	({objective.nccas})
																</span>
															{/if}
														</div>
														{#if userIsAdmin && objective.id}
															<div
																class="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity"
															>
																<button
																	class="btn btn-ghost btn-xs btn-square"
																	onclick={() =>
																		startEditObjective(
																			objective.id!,
																			objective.description,
																			objective.nccas ||
																				null,
																			objective.grade_level ||
																				null,
																		)}
																	aria-label="Edit objective"
																>
																	<svg
																		class="w-3 h-3"
																		fill="none"
																		stroke="currentColor"
																		viewBox="0 0 24 24"
																	>
																		<path
																			stroke-linecap="round"
																			stroke-linejoin="round"
																			stroke-width="2"
																			d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
																		/>
																	</svg>
																</button>
																<button
																	class="btn btn-ghost btn-xs btn-square text-error"
																	onclick={() =>
																		handleDeleteObjective(
																			objective.id!,
																		)}
																	disabled={deleting}
																	aria-label="Delete objective"
																>
																	<svg
																		class="w-3 h-3"
																		fill="none"
																		stroke="currentColor"
																		viewBox="0 0 24 24"
																	>
																		<path
																			stroke-linecap="round"
																			stroke-linejoin="round"
																			stroke-width="2"
																			d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
																		/>
																	</svg>
																</button>
															</div>
														{/if}
													</div>
												</li>
											{/if}
										{/each}
									</ul>
								</div>
							</div>
						{/if}
					{/each}
				</div>
			</div>
		</div>
	</div>
</div>

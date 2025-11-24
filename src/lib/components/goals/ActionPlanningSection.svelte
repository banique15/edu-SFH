<script lang="ts">
	import type { Goal } from "$lib/stores/goals";
	import { getSdgColor, getSdgTextColor } from "$lib/utils/sdg-colors";
	import { user } from "$lib/auth";
	import { isAdmin } from "$lib/utils/auth-helpers";
	import {
		updateActionPlanning,
		createActionPlanning,
		updateActionSection,
		createActionSection,
		deleteActionSection,
		updateActionItem,
		createActionItem,
		deleteActionItem,
	} from "$lib/stores/goals";
	import { invalidateAll } from "$app/navigation";

	interface Props {
		goal: Goal;
		actionPlanning?: any;
		selectedGrade: string;
	}

	let { goal, actionPlanning, selectedGrade }: Props = $props();
	let isOpen = $state(true);
	const panelId = `goal-action-planning-${goal.goal_number}`;

	const bgColor = $derived(getSdgColor(goal.goal_number));
	const textColor = $derived(getSdgTextColor(goal.goal_number));
	const userIsAdmin = $derived(isAdmin($user?.email));

	// Editing state
	let editingStatement = $state(false);
	let editingSectionId = $state<number | null>(null);
	let editingItemId = $state<number | null>(null);
	let creatingSection = $state(false);
	let creatingItemSectionId = $state<number | null>(null);
	let saving = $state(false);
	let deleting = $state(false);
	let errorMessage = $state<string | null>(null);
	let successMessage = $state<string | null>(null);

	// Form state
	let statementForm = $state("");
	let sectionForm = $state({ title: "", description: "" });
	let itemForm = $state("");

	// Filter action planning by grade level
	const filteredActionPlanning = $derived.by(() => {
		if (!actionPlanning) {
			return null;
		}

		// If actionPlanning is an array, filter by grade level
		if (Array.isArray(actionPlanning)) {
			if (actionPlanning.length === 0) {
				return null;
			}
			// First try to find exact match for selected grade
			const exactMatch = actionPlanning.find(
				(ap: any) => ap.grade_level === selectedGrade,
			);
			if (exactMatch) {
				return exactMatch;
			}
			// Fallback to one without grade_level (legacy/static content)
			const noGradeLevel = actionPlanning.find(
				(ap: any) => !ap.grade_level,
			);
			if (noGradeLevel) {
				return noGradeLevel;
			}
			// Last resort: return first item
			return actionPlanning[0];
		}

		// If it's a single object, check if it has grade_level
		const ap = actionPlanning as any;
		if ("grade_level" in ap && ap.grade_level !== selectedGrade) {
			return null;
		}

		return ap;
	});

	const currentActionPlanning = $derived.by(() => {
		const ap: any = filteredActionPlanning;
		if (!ap) return null;

		// Ensure sections is always an array (even if empty)
		if (ap && typeof ap === "object") {
			return {
				...ap,
				sections: Array.isArray(ap.sections) ? ap.sections : [],
			};
		}

		return ap;
	});

	// Helper function to parse item text and extract concrete actions
	function parseItemText(text: string): {
		main: string;
		concreteAction?: string;
	} {
		// Check for nested concrete action format (from markdown parsing)
		if (text.includes("\n  - ")) {
			const parts = text.split("\n  - ");
			return {
				main: parts[0].trim(),
				concreteAction: parts[1]?.trim(),
			};
		}

		// Check for markdown bold format
		const concreteActionMatch = text.match(
			/\*\*Concrete Action:\*\*\s*(.+?)(?=\n\n|\n\*\*|$)/s,
		);
		if (concreteActionMatch) {
			return {
				main: text
					.replace(/\*\*Concrete Action:\*\*\s*.+$/s, "")
					.trim(),
				concreteAction: concreteActionMatch[1].trim(),
			};
		}
		return { main: text };
	}

	// Helper function to split items into columns for 3-column layout
	function splitIntoColumns(items: any[], columns: number = 3): any[][] {
		const itemsPerColumn = Math.ceil(items.length / columns);
		const result: any[][] = [];
		for (let i = 0; i < columns; i++) {
			result.push(
				items.slice(i * itemsPerColumn, (i + 1) * itemsPerColumn),
			);
		}
		return result;
	}

	// Separate sections into first section and holistic actions
	const organizedSections = $derived.by(() => {
		const ap = currentActionPlanning;
		if (
			!ap ||
			!ap.sections ||
			!Array.isArray(ap.sections) ||
			ap.sections.length === 0
		) {
			return { firstSection: null, holisticSections: [] };
		}

		const sections = ap.sections;

		// Find "Small, Everyday Actions" or "Taking Action Beyond the Classroom" as first section
		const firstSection =
			sections.find(
				(s: any) =>
					s.title === "Small, Everyday Actions to Inspire Change" ||
					s.title === "Taking Action Beyond the Classroom",
			) || sections[0];

		// Holistic sections are those that come after the first section or have "Holistic Actions" in title
		const holisticSections = sections.filter(
			(s: any) =>
				s !== firstSection &&
				(s.title.includes("Awareness") ||
					s.title.includes("Local Engagement") ||
					s.title.includes("Global Citizenship") ||
					s.title.includes("Holistic")),
		);

		return { firstSection, holisticSections };
	});

	// Get action planning ID from current data
	const actionPlanningId = $derived.by(() => {
		const ap = currentActionPlanning as any;
		return ap?.id || null;
	});

	// Helper functions for editing
	function startEditStatement() {
		const ap = currentActionPlanning as any;
		statementForm = ap?.statement || "";
		editingStatement = true;
		errorMessage = null;
		successMessage = null;
	}

	function cancelEditStatement() {
		editingStatement = false;
		errorMessage = null;
		successMessage = null;
	}

	async function saveStatement() {
		if (!actionPlanningId) {
			// Create new action planning if it doesn't exist
			saving = true;
			errorMessage = null;
			successMessage = null;

			try {
				const result = await createActionPlanning({
					goal_id: goal.id,
					statement: statementForm,
					grade_level: selectedGrade,
				});

				if (result.success) {
					successMessage = "Action planning created successfully";
					editingStatement = false;
					await invalidateAll();
				} else {
					errorMessage = result.error || "Failed to create action planning";
				}
			} catch (err) {
				errorMessage = err instanceof Error ? err.message : "Failed to create action planning";
			} finally {
				saving = false;
			}
		} else {
			saving = true;
			errorMessage = null;
			successMessage = null;

			try {
				const result = await updateActionPlanning(actionPlanningId, {
					statement: statementForm,
				});

				if (result.success) {
					successMessage = "Statement updated successfully";
					editingStatement = false;
					await invalidateAll();
				} else {
					errorMessage = result.error || "Failed to update statement";
				}
			} catch (err) {
				errorMessage = err instanceof Error ? err.message : "Failed to update statement";
			} finally {
				saving = false;
			}
		}
	}

	function startEditSection(sectionId: number, title: string, description: string | null) {
		sectionForm.title = title;
		sectionForm.description = description || "";
		editingSectionId = sectionId;
		errorMessage = null;
		successMessage = null;
	}

	function cancelEditSection() {
		editingSectionId = null;
		errorMessage = null;
		successMessage = null;
	}

	async function saveSection(sectionId: number) {
		saving = true;
		errorMessage = null;
		successMessage = null;

		try {
			const result = await updateActionSection(sectionId, {
				title: sectionForm.title,
				description: sectionForm.description || null,
			});

			if (result.success) {
				successMessage = "Section updated successfully";
				editingSectionId = null;
				await invalidateAll();
			} else {
				errorMessage = result.error || "Failed to update section";
			}
		} catch (err) {
			errorMessage = err instanceof Error ? err.message : "Failed to update section";
		} finally {
			saving = false;
		}
	}

	function startCreateSection() {
		sectionForm.title = "";
		sectionForm.description = "";
		creatingSection = true;
		errorMessage = null;
		successMessage = null;
	}

	function cancelCreateSection() {
		creatingSection = false;
		errorMessage = null;
		successMessage = null;
	}

	async function saveCreateSection() {
		if (!actionPlanningId) {
			errorMessage = "Please create action planning statement first";
			return;
		}

		saving = true;
		errorMessage = null;
		successMessage = null;

		try {
			const result = await createActionSection({
				action_planning_id: actionPlanningId,
				title: sectionForm.title,
				description: sectionForm.description || null,
				order_num: 0, // Will be set by the function
			});

			if (result.success) {
				successMessage = "Section created successfully";
				creatingSection = false;
				await invalidateAll();
			} else {
				errorMessage = result.error || "Failed to create section";
			}
		} catch (err) {
			errorMessage = err instanceof Error ? err.message : "Failed to create section";
		} finally {
			saving = false;
		}
	}

	async function handleDeleteSection(sectionId: number) {
		if (!confirm("Are you sure you want to delete this section? All items in this section will also be deleted.")) return;

		deleting = true;
		errorMessage = null;
		successMessage = null;

		try {
			const result = await deleteActionSection(sectionId);

			if (result.success) {
				successMessage = "Section deleted successfully";
				await invalidateAll();
			} else {
				errorMessage = result.error || "Failed to delete section";
			}
		} catch (err) {
			errorMessage = err instanceof Error ? err.message : "Failed to delete section";
		} finally {
			deleting = false;
		}
	}

	function startEditItem(itemId: number, text: string) {
		itemForm = text;
		editingItemId = itemId;
		errorMessage = null;
		successMessage = null;
	}

	function cancelEditItem() {
		editingItemId = null;
		errorMessage = null;
		successMessage = null;
	}

	async function saveItem(itemId: number) {
		saving = true;
		errorMessage = null;
		successMessage = null;

		try {
			const result = await updateActionItem(itemId, {
				text: itemForm,
			});

			if (result.success) {
				successMessage = "Item updated successfully";
				editingItemId = null;
				await invalidateAll();
			} else {
				errorMessage = result.error || "Failed to update item";
			}
		} catch (err) {
			errorMessage = err instanceof Error ? err.message : "Failed to update item";
		} finally {
			saving = false;
		}
	}

	function startCreateItem(sectionId: number) {
		itemForm = "";
		creatingItemSectionId = sectionId;
		errorMessage = null;
		successMessage = null;
	}

	function cancelCreateItem() {
		creatingItemSectionId = null;
		errorMessage = null;
		successMessage = null;
	}

	async function saveCreateItem() {
		if (!creatingItemSectionId) return;

		saving = true;
		errorMessage = null;
		successMessage = null;

		try {
			const result = await createActionItem({
				section_id: creatingItemSectionId,
				text: itemForm,
				order_num: 0, // Will be set by the function
			});

			if (result.success) {
				successMessage = "Item created successfully";
				creatingItemSectionId = null;
				await invalidateAll();
			} else {
				errorMessage = result.error || "Failed to create item";
			}
		} catch (err) {
			errorMessage = err instanceof Error ? err.message : "Failed to create item";
		} finally {
			saving = false;
		}
	}

	async function handleDeleteItem(itemId: number) {
		if (!confirm("Are you sure you want to delete this item?")) return;

		deleting = true;
		errorMessage = null;
		successMessage = null;

		try {
			const result = await deleteActionItem(itemId);

			if (result.success) {
				successMessage = "Item deleted successfully";
				await invalidateAll();
			} else {
				errorMessage = result.error || "Failed to delete item";
			}
		} catch (err) {
			errorMessage = err instanceof Error ? err.message : "Failed to delete item";
		} finally {
			deleting = false;
		}
	}

	// Helper to get item ID from item data (handles both string and object formats)
	function getItemId(item: any, section: any, index: number): number | null {
		// If item is an object with id, return it
		if (typeof item === "object" && item !== null && item.id) {
			return item.id;
		}
		// If item is a string, try to find the corresponding object in section.items
		if (typeof item === "string" && section && section.items) {
			// Look for an object in the items array that matches this string
			const itemObj = section.items.find((i: any) => {
				if (typeof i === "object" && i !== null) {
					return i.text === item;
				}
				return i === item;
			});
			return itemObj?.id || null;
		}
		return null;
	}

	// Helper to get item text
	function getItemText(item: any): string {
		if (typeof item === "string") return item;
		if (typeof item === "object" && item !== null) {
			return item.text || String(item);
		}
		return String(item);
	}
</script>

<div class="py-12">
	<div class="max-w-7xl mx-auto">
		<div
			class="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20"
		>
			<button
				type="button"
				class="w-full flex items-center justify-between gap-4 px-6 py-4 text-left"
				onclick={() => (isOpen = !isOpen)}
				aria-expanded={isOpen}
				aria-controls={panelId}
			>
				<span class="text-2xl md:text-3xl font-bold"
					>Action Planning</span
				>
				<svg
					class={`w-6 h-6 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
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
			{#if isOpen}
				<div id={panelId} class="border-t border-white/20 p-6">
					<div class="prose prose-invert max-w-none">
						<!-- Error/Success Messages -->
						{#if errorMessage}
							<div class="alert alert-error mb-4 not-prose">
								<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
									<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"/>
								</svg>
								<span>{errorMessage}</span>
							</div>
						{/if}

						{#if successMessage}
							<div class="alert alert-success mb-4 not-prose">
								<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
									<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
								</svg>
								<span>{successMessage}</span>
							</div>
						{/if}

						{#if currentActionPlanning}
							{@const ap = currentActionPlanning as any}

							<!-- Statement -->
							<div
								class="flex flex-col gap-4 rounded-3xl p-6 mb-8 relative group not-prose"
								style="background-color: {bgColor}; color: {textColor};"
							>
								{#if editingStatement}
									<div class="space-y-4">
										<textarea
											class="textarea textarea-bordered w-full text-2xl md:text-3xl"
											rows="3"
											bind:value={statementForm}
											placeholder="Action planning statement"
											disabled={saving}
										></textarea>
										<div class="flex gap-2 justify-end">
											<button
												class="btn btn-ghost btn-sm"
												onclick={cancelEditStatement}
												disabled={saving}
											>
												Cancel
											</button>
											<button
												class="btn btn-primary btn-sm"
												onclick={saveStatement}
												disabled={saving}
											>
												{saving ? "Saving..." : "Save"}
											</button>
										</div>
									</div>
								{:else}
									<div class="flex items-start justify-between gap-4">
										<p class="text-2xl md:text-3xl flex-1">
											{("statement" in ap
												? ap.statement
												: null) ??
												`Empowering youth to become active agents of change for Goal ${goal.goal_number}. Even small, consistent actions can create meaningful impact.`}
										</p>
										{#if userIsAdmin}
											<button
												class="btn btn-ghost btn-xs btn-square opacity-0 group-hover:opacity-100 transition-opacity"
												onclick={startEditStatement}
												aria-label="Edit statement"
											>
												<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
													<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
												</svg>
											</button>
										{/if}
									</div>
								{/if}
							</div>

							<!-- Sections -->
							{#if ap.sections && Array.isArray(ap.sections) && ap.sections.length > 0}
								{@const organized = organizedSections}
								<div class="space-y-12">
									<!-- First Section (3-column layout if it's "Small, Everyday Actions") -->
									{#if organized && organized.firstSection}
										{@const firstSection =
											organized.firstSection}
										{@const isThreeColumn =
											firstSection.title ===
												"Small, Everyday Actions to Inspire Change" ||
											firstSection.title ===
												"Taking Action Beyond the Classroom"}
										<div class="space-y-6">
											<div
												class="flex items-start justify-between gap-4"
											>
												{#if editingSectionId === firstSection.id}
													<div class="flex-1 space-y-4">
														<input
															type="text"
															class="input input-bordered w-full text-2xl md:text-3xl font-bold"
															bind:value={sectionForm.title}
															placeholder="Section title"
															disabled={saving}
														/>
														<textarea
															class="textarea textarea-bordered w-full"
															rows="2"
															bind:value={sectionForm.description}
															placeholder="Section description (optional)"
															disabled={saving}
														></textarea>
														<div class="flex gap-2 justify-end">
															<button
																class="btn btn-ghost btn-xs"
																onclick={cancelEditSection}
																disabled={saving}
															>
																Cancel
															</button>
															<button
																class="btn btn-primary btn-xs"
																onclick={() => saveSection(firstSection.id)}
																disabled={saving}
															>
																{saving ? "Saving..." : "Save"}
															</button>
														</div>
													</div>
												{:else}
													<div class="flex-1 group">
														<h3
															class="text-2xl md:text-3xl font-bold"
														>
															{firstSection.title}
														</h3>
														{#if userIsAdmin}
															<button
																class="btn btn-ghost btn-xs btn-square opacity-0 group-hover:opacity-100 transition-opacity mt-2"
																onclick={() => startEditSection(firstSection.id, firstSection.title, firstSection.description || null)}
																aria-label="Edit section"
															>
																<svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
																	<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
																</svg>
															</button>
															<button
																class="btn btn-ghost btn-xs btn-square opacity-0 group-hover:opacity-100 transition-opacity mt-2 ml-2"
																onclick={() => handleDeleteSection(firstSection.id)}
																aria-label="Delete section"
																disabled={deleting}
															>
																<svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
																	<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
																</svg>
															</button>
														{/if}
													</div>
												{/if}
											</div>
											{#if firstSection.description && firstSection.description !== "Holistic Actions" && editingSectionId !== firstSection.id}
												<p
													class="text-base md:text-lg text-base-content/80 mb-6"
												>
													{firstSection.description}
												</p>
											{/if}

											{#if firstSection.items && firstSection.items.length > 0}
												{#if isThreeColumn}
													{@const columns =
														splitIntoColumns(
															firstSection.items,
															3,
														)}
													<div
														class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
													>
														{#each columns as column, colIndex}
															<div
																class="space-y-12"
															>
																{#each column as item, itemIndex}
																	{@const itemText = getItemText(item)}
																	{@const itemId = getItemId(item, firstSection, itemIndex)}
																	{@const parsed = parseItemText(itemText)}
																	{#if editingItemId === itemId}
																		<div class="bg-base-200/50 rounded-lg p-4 border border-base-300 space-y-3">
																			<textarea
																				class="textarea textarea-bordered w-full"
																				rows="4"
																				bind:value={itemForm}
																				placeholder="Item text"
																				disabled={saving}
																			></textarea>
																			<div class="flex gap-2 justify-end">
																				<button
																					class="btn btn-ghost btn-xs"
																					onclick={cancelEditItem}
																					disabled={saving}
																				>
																					Cancel
																				</button>
																				<button
																					class="btn btn-primary btn-xs"
																					onclick={() => itemId && saveItem(itemId)}
																					disabled={saving || !itemId}
																				>
																					{saving ? "Saving..." : "Save"}
																				</button>
																			</div>
																		</div>
																	{:else}
																		<div class="space-y-2 group/item">
																			<div class="flex items-start gap-2">
																				<p class="text-base leading-relaxed flex-1">
																					{@html parsed.main.replace(
																						/\*\*(.+?)\*\*(.*)/s,
																						'<strong class="block mb-1">$1</strong>$2',
																					)}
																				</p>
																				{#if userIsAdmin && itemId}
																					<button
																						class="btn btn-ghost btn-xs btn-square opacity-0 group-hover/item:opacity-100 transition-opacity"
																						onclick={() => itemId && startEditItem(itemId, itemText)}
																						aria-label="Edit item"
																					>
																						<svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
																							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
																						</svg>
																					</button>
																					<button
																						class="btn btn-ghost btn-xs btn-square opacity-0 group-hover/item:opacity-100 transition-opacity"
																						onclick={() => itemId && handleDeleteItem(itemId)}
																						aria-label="Delete item"
																						disabled={deleting}
																					>
																						<svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
																							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
																						</svg>
																					</button>
																				{/if}
																			</div>
																			{#if parsed.concreteAction}
																				<div class="ml-4 pl-4 border-l-2 border-base-content/20">
																					<p class="text-sm text-base-content/70">
																						<strong>Concrete Action:</strong>
																						{parsed.concreteAction}
																					</p>
																				</div>
																			{/if}
																		</div>
																	{/if}
																{/each}
																{#if userIsAdmin && firstSection.id}
																	{#if creatingItemSectionId === firstSection.id}
																		<div class="bg-base-200/50 rounded-lg p-4 border border-base-300 space-y-3">
																			<textarea
																				class="textarea textarea-bordered w-full"
																				rows="4"
																				bind:value={itemForm}
																				placeholder="Item text"
																				disabled={saving}
																			></textarea>
																			<div class="flex gap-2 justify-end">
																				<button
																					class="btn btn-ghost btn-xs"
																					onclick={cancelCreateItem}
																					disabled={saving}
																				>
																					Cancel
																				</button>
																				<button
																					class="btn btn-primary btn-xs"
																					onclick={saveCreateItem}
																					disabled={saving}
																				>
																					{saving ? "Saving..." : "Save"}
																				</button>
																			</div>
																		</div>
																	{:else}
																		<button
																			class="btn btn-ghost btn-xs w-full opacity-0 group-hover:opacity-100 transition-opacity"
																			onclick={() => firstSection.id && startCreateItem(firstSection.id)}
																		>
																			+ Add Item
																		</button>
																	{/if}
																{/if}
															</div>
														{/each}
													</div>
												{:else}
													<div class="space-y-4">
														{#each firstSection.items as item, itemIndex}
															{@const itemText = getItemText(item)}
															{@const itemId = getItemId(item, firstSection, itemIndex)}
															{@const parsed = parseItemText(itemText)}
															{#if editingItemId === itemId}
																<div class="bg-base-200/50 rounded-lg p-4 border border-base-300 space-y-3">
																	<textarea
																		class="textarea textarea-bordered w-full"
																		rows="4"
																		bind:value={itemForm}
																		placeholder="Item text"
																		disabled={saving}
																	></textarea>
																	<div class="flex gap-2 justify-end">
																		<button
																			class="btn btn-ghost btn-xs"
																			onclick={cancelEditItem}
																			disabled={saving}
																		>
																			Cancel
																		</button>
																		<button
																			class="btn btn-primary btn-xs"
																			onclick={() => itemId && saveItem(itemId)}
																			disabled={saving || !itemId}
																		>
																			{saving ? "Saving..." : "Save"}
																		</button>
																	</div>
																</div>
															{:else}
																<div class="space-y-2 group/item">
																	<div class="flex items-start gap-2">
																		<p class="text-base leading-relaxed flex-1">
																			{@html parsed.main.replace(
																				/\*\*(.+?)\*\*/g,
																				"<strong>$1</strong>",
																			)}
																		</p>
																		{#if userIsAdmin && itemId}
																			<button
																				class="btn btn-ghost btn-xs btn-square opacity-0 group-hover/item:opacity-100 transition-opacity"
																				onclick={() => itemId && startEditItem(itemId, itemText)}
																				aria-label="Edit item"
																			>
																				<svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
																					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
																				</svg>
																			</button>
																			<button
																				class="btn btn-ghost btn-xs btn-square opacity-0 group-hover/item:opacity-100 transition-opacity"
																				onclick={() => itemId && handleDeleteItem(itemId)}
																				aria-label="Delete item"
																				disabled={deleting}
																			>
																				<svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
																					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
																				</svg>
																			</button>
																		{/if}
																	</div>
																	{#if parsed.concreteAction}
																		<div class="ml-4 pl-4 border-l-2 border-base-content/20">
																			<p class="text-sm text-base-content/70">
																				<strong>Concrete Action:</strong>
																				{parsed.concreteAction}
																			</p>
																		</div>
																	{/if}
																</div>
															{/if}
														{/each}
														{#if userIsAdmin && firstSection.id}
															{#if creatingItemSectionId === firstSection.id}
																<div class="bg-base-200/50 rounded-lg p-4 border border-base-300 space-y-3">
																	<textarea
																		class="textarea textarea-bordered w-full"
																		rows="4"
																		bind:value={itemForm}
																		placeholder="Item text"
																		disabled={saving}
																	></textarea>
																	<div class="flex gap-2 justify-end">
																		<button
																			class="btn btn-ghost btn-xs"
																			onclick={cancelCreateItem}
																			disabled={saving}
																		>
																			Cancel
																		</button>
																		<button
																			class="btn btn-primary btn-xs"
																			onclick={saveCreateItem}
																			disabled={saving}
																		>
																			{saving ? "Saving..." : "Save"}
																		</button>
																	</div>
																</div>
															{:else}
																<button
																	class="btn btn-ghost btn-xs w-full"
																	onclick={() => firstSection.id && startCreateItem(firstSection.id)}
																>
																	+ Add Item
																</button>
															{/if}
														{/if}
													</div>
												{/if}
											{/if}
										</div>
									{/if}

									<!-- Create Section (Admin Only) -->
									{#if userIsAdmin && actionPlanningId}
										{#if creatingSection}
											<div class="bg-base-200/50 rounded-lg p-6 border border-base-300 space-y-4">
												<h4 class="font-semibold">Create New Section</h4>
												<input
													type="text"
													class="input input-bordered w-full"
													bind:value={sectionForm.title}
													placeholder="Section title"
													disabled={saving}
												/>
												<textarea
													class="textarea textarea-bordered w-full"
													rows="2"
													bind:value={sectionForm.description}
													placeholder="Section description (optional)"
													disabled={saving}
												></textarea>
												<div class="flex gap-2 justify-end">
													<button
														class="btn btn-ghost btn-xs"
														onclick={cancelCreateSection}
														disabled={saving}
													>
														Cancel
													</button>
													<button
														class="btn btn-primary btn-xs"
														onclick={saveCreateSection}
														disabled={saving}
													>
														{saving ? "Saving..." : "Save"}
													</button>
												</div>
											</div>
										{:else}
											<button
												class="btn btn-ghost btn-sm w-full"
												onclick={startCreateSection}
											>
												+ Add Section
											</button>
										{/if}
									{/if}

									<!-- Holistic Actions Sections -->
									{#if organized && organized.holisticSections && organized.holisticSections.length > 0}
										{@const holisticColumns =
											splitIntoColumns(
												organized.holisticSections,
												3,
											)}
										<div class="space-y-8">
											<h3
												class="text-2xl md:text-3xl font-bold"
											>
												Holistic Actions
											</h3>
											<div
												class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
											>
												{#each holisticColumns as column, colIndex}
													<div class="space-y-6">
														{#each column as section, sectionIndex}
															{@const prevColumnsCount =
																holisticColumns
																	.slice(
																		0,
																		colIndex,
																	)
																	.reduce(
																		(
																			sum,
																			col,
																		) =>
																			sum +
																			col.length,
																		0,
																	)}
															{@const sectionNumber =
																prevColumnsCount +
																sectionIndex +
																1}
															<div
																class="space-y-4"
															>
																<div
																	class="flex items-start gap-3"
																>
																	<!-- Numbered badge with goal color -->
																	<div
																		class="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg"
																		style="background-color: {bgColor}; color: {textColor};"
																	>
																		{sectionNumber}
																	</div>
																	<div class="flex-1 group/section">
																		{#if editingSectionId === section.id}
																			<div class="space-y-2">
																				<input
																					type="text"
																					class="input input-bordered input-sm w-full"
																					bind:value={sectionForm.title}
																					placeholder="Section title"
																					disabled={saving}
																				/>
																				<textarea
																					class="textarea textarea-bordered textarea-sm w-full"
																					rows="2"
																					bind:value={sectionForm.description}
																					placeholder="Section description (optional)"
																					disabled={saving}
																				></textarea>
																				<div class="flex gap-2 justify-end">
																					<button
																						class="btn btn-ghost btn-xs"
																						onclick={cancelEditSection}
																						disabled={saving}
																					>
																						Cancel
																					</button>
																					<button
																						class="btn btn-primary btn-xs"
																						onclick={() => saveSection(section.id)}
																						disabled={saving}
																					>
																						{saving ? "Saving..." : "Save"}
																					</button>
																				</div>
																			</div>
																		{:else}
																			<h4 class="text-xl md:text-2xl font-bold">
																				{section.title}
																			</h4>
																			{#if userIsAdmin}
																				<div class="flex gap-1 mt-1 opacity-0 group-hover/section:opacity-100 transition-opacity">
																					<button
																						class="btn btn-ghost btn-xs btn-square"
																						onclick={() => startEditSection(section.id, section.title, section.description || null)}
																						aria-label="Edit section"
																					>
																						<svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
																							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
																						</svg>
																					</button>
																					<button
																						class="btn btn-ghost btn-xs btn-square"
																						onclick={() => handleDeleteSection(section.id)}
																						aria-label="Delete section"
																						disabled={deleting}
																					>
																						<svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
																							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
																						</svg>
																					</button>
																				</div>
																			{/if}
																		{/if}
																	</div>
																</div>

																<!-- Items for Holistic Actions -->
																{#if section.items && section.items.length > 0}
																	<ul class="space-y-3 list-disc list-inside">
																		{#each section.items as item, itemIndex}
																			{@const itemText = getItemText(item)}
																			{@const itemId = getItemId(item, section, itemIndex)}
																			{@const parsed = parseItemText(itemText)}
																			{#if editingItemId === itemId}
																				<li class="bg-base-200/50 rounded-lg p-3 border border-base-300 space-y-2">
																					<textarea
																						class="textarea textarea-bordered textarea-sm w-full"
																						rows="3"
																						bind:value={itemForm}
																						placeholder="Item text"
																						disabled={saving}
																					></textarea>
																					<div class="flex gap-2 justify-end">
																						<button
																							class="btn btn-ghost btn-xs"
																							onclick={cancelEditItem}
																							disabled={saving}
																						>
																							Cancel
																						</button>
																						<button
																							class="btn btn-primary btn-xs"
																							onclick={() => itemId && saveItem(itemId)}
																							disabled={saving || !itemId}
																						>
																							{saving ? "Saving..." : "Save"}
																						</button>
																					</div>
																				</li>
																			{:else}
																				<li class="text-base leading-relaxed group/item flex items-start gap-2">
																					<span class="flex-1">
																						{@html parsed.main.replace(
																							/\*\*(.+?)\*\*/g,
																							"<strong>$1</strong>",
																						)}
																						{#if parsed.concreteAction}
																							<div class="ml-6 mt-2 pl-4 border-l-2 border-base-content/20">
																								<p class="text-sm text-base-content/70">
																									<strong>Concrete Action:</strong>
																									{parsed.concreteAction}
																								</p>
																							</div>
																						{/if}
																					</span>
																					{#if userIsAdmin && itemId}
																						<button
																							class="btn btn-ghost btn-xs btn-square opacity-0 group-hover/item:opacity-100 transition-opacity"
																							onclick={() => itemId && startEditItem(itemId, itemText)}
																							aria-label="Edit item"
																						>
																							<svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
																								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
																							</svg>
																						</button>
																						<button
																							class="btn btn-ghost btn-xs btn-square opacity-0 group-hover/item:opacity-100 transition-opacity"
																							onclick={() => itemId && handleDeleteItem(itemId)}
																							aria-label="Delete item"
																							disabled={deleting}
																						>
																							<svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
																								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
																							</svg>
																						</button>
																					{/if}
																				</li>
																			{/if}
																		{/each}
																	</ul>
																{/if}
																{#if userIsAdmin && section.id}
																	{#if creatingItemSectionId === section.id}
																		<div class="bg-base-200/50 rounded-lg p-3 border border-base-300 space-y-2 mt-2">
																			<textarea
																				class="textarea textarea-bordered textarea-sm w-full"
																				rows="3"
																				bind:value={itemForm}
																				placeholder="Item text"
																				disabled={saving}
																			></textarea>
																			<div class="flex gap-2 justify-end">
																				<button
																					class="btn btn-ghost btn-xs"
																					onclick={cancelCreateItem}
																					disabled={saving}
																				>
																					Cancel
																				</button>
																				<button
																					class="btn btn-primary btn-xs"
																					onclick={saveCreateItem}
																					disabled={saving}
																				>
																					{saving ? "Saving..." : "Save"}
																				</button>
																			</div>
																		</div>
																	{:else}
																		<button
																			class="btn btn-ghost btn-xs w-full mt-2"
																			onclick={() => section.id && startCreateItem(section.id)}
																		>
																			+ Add Item
																		</button>
																	{/if}
																{/if}
															</div>
														{/each}
													</div>
												{/each}
											</div>
										</div>
									{/if}
								</div>
							{/if}
						{:else}
							<div
								class="bg-white/5 border border-dashed border-white/30 rounded-xl p-8"
							>
								<p class="text-base md:text-lg mb-4">
									No action planning content available for {selectedGrade ===
									"5-8"
										? "Grades 5-8"
										: "Grades 9-12"}.
								</p>
							</div>
						{/if}
					</div>
				</div>
			{/if}
		</div>
	</div>
</div>

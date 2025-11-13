<script lang="ts">
	import { onMount } from 'svelte';

	interface Material {
		id: string | number;
		name: string;
		description?: string;
		is_optional?: boolean;
	}

	interface Props {
		materials: Material[];
		sdgColor: string;
		lessonId: number | string;
	}

	let { materials, sdgColor, lessonId }: Props = $props();

	// State for checked materials
	let checkedMaterials = $state<Set<string | number>>(new Set());
	
	// State for collapsed/expanded
	let isExpanded = $state(true);

	// Load saved state from localStorage
	onMount(() => {
		if (typeof window !== 'undefined') {
			const storageKey = `lesson-materials-${lessonId}`;
			const saved = localStorage.getItem(storageKey);
			if (saved) {
				try {
					const savedIds = JSON.parse(saved);
					checkedMaterials = new Set(savedIds);
				} catch (e) {
					console.error('Failed to parse saved materials state:', e);
				}
			}
			
			// Load collapsed state
			const collapsedKey = `lesson-materials-collapsed-${lessonId}`;
			const collapsed = localStorage.getItem(collapsedKey);
			if (collapsed !== null) {
				isExpanded = collapsed !== 'true';
			}
		}
	});

	// Save state to localStorage whenever it changes
	$effect(() => {
		if (typeof window !== 'undefined') {
			const storageKey = `lesson-materials-${lessonId}`;
			const ids = Array.from(checkedMaterials);
			localStorage.setItem(storageKey, JSON.stringify(ids));
		}
	});

	function toggleMaterial(materialId: string | number) {
		if (checkedMaterials.has(materialId)) {
			checkedMaterials.delete(materialId);
		} else {
			checkedMaterials.add(materialId);
		}
		// Trigger reactivity
		checkedMaterials = new Set(checkedMaterials);
	}

	function isChecked(materialId: string | number): boolean {
		return checkedMaterials.has(materialId);
	}

	function toggleExpanded() {
		isExpanded = !isExpanded;
		// Save collapsed state to localStorage
		if (typeof window !== 'undefined') {
			const collapsedKey = `lesson-materials-collapsed-${lessonId}`;
			localStorage.setItem(collapsedKey, String(!isExpanded));
		}
	}
</script>

{#if materials.length > 0}
	<div class="w-full max-w-7xl mx-auto">
		<section class="print:break-inside-avoid">
			<!-- Header (Clickable) -->
			<button
				onclick={toggleExpanded}
				class="w-full text-left px-0 py-4 flex items-center justify-between border-b border-gray-300 transition-colors print:cursor-default print:pointer-events-none"
				aria-expanded={isExpanded}
				aria-controls="materials-checklist"
			>
				<div class="flex-1">
					<h2
						class="text-xl sm:text-2xl font-normal text-gray-900"
						style="font-family: 'Founders Grotesk', sans-serif; letter-spacing: -0.01em;"
					>
						Materials Needed
					</h2>
				</div>
				<svg
					class="w-6 h-6 transition-transform flex-shrink-0 print:hidden text-gray-600"
					class:rotate-180={isExpanded}
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

			<!-- Checklist Items -->
			<div class="print:block" class:hidden={!isExpanded}>
				<div id="materials-checklist" class="px-0 py-5">
					<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
						{#each materials as material (material.id)}
							<label
								class="flex items-start gap-3 p-4 rounded-lg border-2 cursor-pointer transition-all hover:shadow-md group bg-white material-item"
								class:opacity-60={isChecked(material.id)}
								class:material-checked={isChecked(material.id)}
								style="border-color: {isChecked(material.id) ? sdgColor : '#E5E7EB'};"
							>
								<!-- Checkbox -->
								<div class="flex-shrink-0 mt-0.5">
									<input
										type="checkbox"
										checked={isChecked(material.id)}
										onchange={() => toggleMaterial(material.id)}
										class="sr-only"
										aria-label="Check {material.name}"
									/>
									<div
										class="w-5 h-5 sm:w-6 sm:h-6 rounded border-2 flex items-center justify-center transition-all"
										style="border-color: {isChecked(material.id) ? sdgColor : '#9CA3AF'}; background-color: {isChecked(material.id) ? sdgColor : 'transparent'};"
									>
										{#if isChecked(material.id)}
											<svg
												class="w-3 h-3 sm:w-4 sm:h-4 text-white"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
											>
												<path
													stroke-linecap="round"
													stroke-linejoin="round"
													stroke-width="3"
													d="M5 13l4 4L19 7"
												/>
											</svg>
										{/if}
									</div>
								</div>

								<!-- Content -->
								<div class="flex-1 min-w-0">
									<div class="flex items-start gap-2 flex-wrap">
										<span
											class="text-sm sm:text-base leading-[1.4] tracking-[-0.01em]"
											class:line-through={isChecked(material.id)}
											style="font-family: 'Founders Grotesk', sans-serif; color: {isChecked(material.id) ? '#9CA3AF' : '#1F2937'};"
										>
											{material.name}
										</span>
										{#if material.is_optional}
											<span
												class="inline-flex items-center px-2 py-0.5 text-xs rounded-full font-medium"
												style="background-color: {sdgColor}20; color: {sdgColor}; font-family: 'Founders Grotesk', sans-serif;"
											>
												Optional
											</span>
										{/if}
									</div>
									{#if material.description}
										<p
											class="text-xs sm:text-sm mt-1.5 leading-[1.4]"
											class:line-through={isChecked(material.id)}
											style="font-family: 'Founders Grotesk', sans-serif; color: {isChecked(material.id) ? '#9CA3AF' : '#6B7280'};"
										>
											{material.description}
										</p>
									{/if}
								</div>
							</label>
						{/each}
					</div>
				</div>
			</div>
		</section>
	</div>
{/if}

<style>
	/* Print styles */
	@media print {
		/* Always show materials section in print */
		.print\:block {
			display: block !important;
		}

		/* Disable interactions */
		label {
			cursor: default;
			pointer-events: none;
		}

		/* Hide checkbox inputs */
		input[type="checkbox"] {
			display: none;
		}

		/* Make checkbox indicators visible and print-friendly */
		label > div:first-child > div {
			border: 2px solid #1F2937 !important;
			background-color: transparent !important;
			width: 18px !important;
			height: 18px !important;
		}

		/* Show checkmark for checked items - keep SVG visible but style it for print */
		.material-checked svg {
			display: block !important;
			color: #1F2937 !important;
			width: 12px !important;
			height: 12px !important;
		}

		/* Style checked checkbox background for print */
		.material-checked > div:first-child > div {
			background-color: transparent !important;
			border-color: #1F2937 !important;
		}

		/* Print-friendly styling for material items */
		label {
			border: 1px solid #E5E7EB !important;
			background-color: #FFFFFF !important;
			box-shadow: none !important;
			opacity: 1 !important;
			page-break-inside: avoid;
			break-inside: avoid;
		}

		/* Ensure text is readable in print */
		label span,
		label p {
			color: #1F2937 !important;
		}

		/* Strikethrough for checked items in print */
		.material-checked span:first-of-type {
			text-decoration: line-through;
			color: #6B7280 !important;
		}

		.material-checked p {
			text-decoration: line-through;
			color: #9CA3AF !important;
		}

		/* Optional badge styling for print */
		label span[style*="background-color"] {
			background-color: #F3F4F6 !important;
			color: #1F2937 !important;
			border: 1px solid #D1D5DB !important;
		}

		/* Grid layout for print - 2 columns for better space usage */
		.grid {
			grid-template-columns: repeat(2, 1fr) !important;
			gap: 12px !important;
		}

		/* Section spacing for print */
		section {
			margin-bottom: 20px;
		}

		/* Header styling for print */
		button {
			border-bottom: 2px solid #1F2937 !important;
		}

		h2 {
			color: #1F2937 !important;
		}
	}
</style>


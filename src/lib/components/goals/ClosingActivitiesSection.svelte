<script lang="ts">
	import { extractActivities, replaceLinksWithHtml, convertBoldToHtml } from '$lib/utils/content-parser';
	import type { LessonContent } from '$lib/stores/lessons';

	interface Props {
		section: LessonContent;
		sdgColor: string;
		isCollapsed?: boolean;
		onToggle?: () => void;
	}

	let { section, sdgColor, isCollapsed = false, onToggle }: Props = $props();

	const activities = $derived(extractActivities(section.content));

	// Format text with links and bold
	function formatText(text: string): string {
		let formatted = replaceLinksWithHtml(text, sdgColor);
		formatted = convertBoldToHtml(formatted);
		return formatted;
	}
</script>

<section class="print:break-inside-avoid">
	<!-- Header -->
	<button
		class="w-full text-left px-0 py-4 flex items-center justify-between border-b border-gray-300 transition-colors print:cursor-default print:pointer-events-none"
		onclick={onToggle}
		aria-expanded={!isCollapsed}
		aria-controls="closing-activities-content"
	>
		<div class="flex-1">
			<h2
				class="text-xl sm:text-2xl font-normal text-gray-900"
				style="font-family: 'Founders Grotesk', sans-serif; letter-spacing: -0.01em;"
			>
				{section.section_title}
			</h2>
		</div>
		<svg
			class="w-6 h-6 transition-transform flex-shrink-0 print:hidden text-gray-600"
			class:rotate-180={!isCollapsed}
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

	<!-- Content -->
	{#if !isCollapsed}
		<div id="closing-activities-content" class="px-0 py-5 print:block">
			<div class="space-y-4">
				{#each activities as activity}
					<div
						class="p-4 rounded-lg border-l-4 bg-white"
						style="border-color: {sdgColor};"
					>
						<h3
							class="text-lg font-semibold mb-2"
							style="font-family: 'Founders Grotesk', sans-serif; color: {sdgColor};"
						>
							{activity.title}
						</h3>
						<div
							class="text-base leading-[1.7]"
							style="font-family: 'Founders Grotesk', sans-serif; color: #374151;"
						>
							{@html formatText(activity.description)}
						</div>
					</div>
				{/each}
			</div>
		</div>
	{/if}
</section>

<style>
	@media print {
		.print\:block {
			display: block !important;
		}

		button {
			border-bottom: 2px solid #1F2937 !important;
		}

		h2 {
			color: #1F2937 !important;
		}

		div[class*="p-4"] {
			border: 1px solid #E5E7EB !important;
			page-break-inside: avoid;
		}
	}
</style>


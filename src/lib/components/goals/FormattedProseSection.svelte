<script lang="ts">
	import { formatContentHtml } from '$lib/utils/content-parser';
	import type { LessonContent } from '$lib/stores/lessons';

	interface Props {
		section: LessonContent;
		sdgColor: string;
		isCollapsed?: boolean;
		onToggle?: () => void;
	}

	let { section, sdgColor, isCollapsed = false, onToggle }: Props = $props();

	const formattedContent = $derived(formatContentHtml(section.content, sdgColor));
</script>

<section class="print:break-inside-avoid">
	<!-- Header -->
	<button
		class="w-full text-left px-0 py-4 flex items-center justify-between border-b border-gray-300 transition-colors print:cursor-default print:pointer-events-none"
		onclick={onToggle}
		aria-expanded={!isCollapsed}
		aria-controls="formatted-prose-content"
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
		<div id="formatted-prose-content" class="px-0 py-5 print:block">
			<div
				class="prose prose-lg max-w-none"
				style="font-family: 'Founders Grotesk', sans-serif; color: #1F2937; line-height: 1.7;"
			>
				{@html formattedContent}
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
	}

	:global(.prose p) {
		margin-bottom: 1em;
	}

	:global(.prose ul),
	:global(.prose ol) {
		list-style-type: disc;
		padding-left: 1.5em;
		margin-bottom: 1em;
	}

	:global(.prose li) {
		margin-bottom: 0.5em;
	}

	:global(.prose strong) {
		font-weight: 600;
	}

	:global(.prose a) {
		text-decoration: underline;
	}
</style>


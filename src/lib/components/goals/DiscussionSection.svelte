<script lang="ts">
	import { extractQuestions, extractClosingStatement, replaceLinksWithHtml, convertBoldToHtml } from '$lib/utils/content-parser';
	import type { LessonContent } from '$lib/stores/lessons';

	interface Props {
		section: LessonContent;
		sdgColor: string;
		isCollapsed?: boolean;
		onToggle?: () => void;
	}

	let { section, sdgColor, isCollapsed = false, onToggle }: Props = $props();

	const questions = $derived(extractQuestions(section.content));
	const closingStatement = $derived(extractClosingStatement(section.content));

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
		aria-controls="discussion-content"
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
		<div id="discussion-content" class="px-0 py-5 print:block">
			{#if questions.length > 0}
				<ul class="space-y-3 mb-4">
					{#each questions as question}
						<li class="flex items-start gap-3">
							<div
								class="mt-1.5 w-2 h-2 rounded-full flex-shrink-0"
								style="background-color: {sdgColor};"
							></div>
							<div
								class="flex-1 text-base leading-[1.7]"
								style="font-family: 'Founders Grotesk', sans-serif; color: #374151;"
							>
								{@html formatText(question)}
							</div>
						</li>
					{/each}
				</ul>
			{/if}

			{#if closingStatement}
				<div
					class="mt-4 pt-4 border-t border-gray-200 text-base leading-[1.7] font-medium"
					style="font-family: 'Founders Grotesk', sans-serif; color: #1F2937;"
				>
					{@html formatText(closingStatement)}
				</div>
			{/if}
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

		ul li {
			page-break-inside: avoid;
		}
	}
</style>


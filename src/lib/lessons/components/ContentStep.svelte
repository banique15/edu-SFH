<script lang="ts">
	interface Props {
		title: string;
		content: string;
		guidingQuestions?: string[];
		sdgColor?: string;
	}

	let { title, content, guidingQuestions = [], sdgColor = '#339933' }: Props = $props();
</script>

<div class="content-step mb-8">
	<h3
		class="text-xl sm:text-2xl font-normal mb-4"
		style="font-family: 'Founders Grotesk', sans-serif; letter-spacing: -0.01em; color: #1F2937;"
	>
		{title}
	</h3>
	<div
		class="prose prose-lg max-w-none mb-4"
		style="font-family: 'Founders Grotesk', sans-serif; color: #1F2937; line-height: 1.7;"
	>
		{@html content}
	</div>
	{#if guidingQuestions.length > 0}
		<div class="guiding-questions mt-4">
			<h4
				class="text-lg font-semibold mb-2"
				style="font-family: 'Founders Grotesk', sans-serif; color: {sdgColor};"
			>
				Guiding Questions:
			</h4>
			<ul class="space-y-2">
				{#each guidingQuestions as question}
					<li class="flex items-start gap-3">
						<div
							class="mt-1.5 w-2 h-2 rounded-full flex-shrink-0"
							style="background-color: {sdgColor};"
						></div>
						<div
							class="flex-1 text-sm"
							style="font-family: 'Founders Grotesk', sans-serif; color: #374151;"
						>
							{@html question}
						</div>
					</li>
				{/each}
			</ul>
		</div>
	{/if}
</div>

<style>
	:global(.content-step .prose p) {
		margin-bottom: 1em;
	}

	:global(.content-step .prose ul),
	:global(.content-step .prose ol) {
		list-style-type: disc;
		padding-left: 1.5em;
		margin-bottom: 1em;
	}

	:global(.content-step .prose li) {
		margin-bottom: 0.5em;
	}

	:global(.content-step .prose strong) {
		font-weight: 600;
	}

	:global(.content-step .prose em) {
		font-style: italic;
	}
</style>


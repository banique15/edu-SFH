<script lang="ts">
	interface Props {
		content: string;
	}

	let { content }: Props = $props();
</script>

<div class="introduction">
	<h3
		class="text-xl sm:text-2xl font-normal mb-4"
		style="font-family: 'Founders Grotesk', sans-serif; letter-spacing: -0.01em; color: #1F2937;"
	>
		Introduction
	</h3>
	<div
		class="prose prose-lg max-w-none"
		style="font-family: 'Founders Grotesk', sans-serif; color: #1F2937; line-height: 1.7;"
	>
		{@html content}
	</div>
</div>

<style>
	:global(.introduction .prose p) {
		margin-bottom: 1em;
	}

	:global(.introduction .prose ul),
	:global(.introduction .prose ol) {
		list-style-type: disc;
		padding-left: 1.5em;
		margin-bottom: 1em;
	}

	:global(.introduction .prose li) {
		margin-bottom: 0.5em;
	}

	:global(.introduction .prose strong) {
		font-weight: 600;
	}

	:global(.introduction .prose em) {
		font-style: italic;
	}
</style>


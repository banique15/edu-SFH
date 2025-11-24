<script lang="ts">
	interface Props {
		title: string;
		content: string;
		sdgColor?: string;
	}

	let { title, content, sdgColor = '#339933' }: Props = $props();
</script>

<div class="closing-activity mb-8">
	<h3
		class="text-xl sm:text-2xl font-normal mb-4"
		style="font-family: 'Founders Grotesk', sans-serif; letter-spacing: -0.01em; color: #1F2937;"
	>
		{title}
	</h3>
	<div
		class="prose prose-lg max-w-none"
		style="font-family: 'Founders Grotesk', sans-serif; color: #1F2937; line-height: 1.7;"
	>
		{@html content}
	</div>
</div>

<style>
	:global(.closing-activity .prose p) {
		margin-bottom: 1em;
	}

	:global(.closing-activity .prose ul),
	:global(.closing-activity .prose ol) {
		list-style-type: disc;
		padding-left: 1.5em;
		margin-bottom: 1em;
	}

	:global(.closing-activity .prose li) {
		margin-bottom: 0.5em;
	}

	:global(.closing-activity .prose strong) {
		font-weight: 600;
	}

	:global(.closing-activity .prose em) {
		font-style: italic;
	}
</style>


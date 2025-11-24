<script lang="ts">
	interface Props {
		content: string;
		sdgColor?: string;
	}

	let { content, sdgColor = '#339933' }: Props = $props();
</script>

<div class="personal-connection mb-8">
	<h3
		class="text-xl sm:text-2xl font-normal mb-4"
		style="font-family: 'Founders Grotesk', sans-serif; letter-spacing: -0.01em; color: #1F2937;"
	>
		Personal Connection
	</h3>
	<div
		class="prose prose-lg max-w-none"
		style="font-family: 'Founders Grotesk', sans-serif; color: #1F2937; line-height: 1.7;"
	>
		{@html content}
	</div>
</div>

<style>
	:global(.personal-connection .prose p) {
		margin-bottom: 1em;
	}

	:global(.personal-connection .prose ul),
	:global(.personal-connection .prose ol) {
		list-style-type: disc;
		padding-left: 1.5em;
		margin-bottom: 1em;
	}

	:global(.personal-connection .prose li) {
		margin-bottom: 0.5em;
	}

	:global(.personal-connection .prose strong) {
		font-weight: 600;
	}

	:global(.personal-connection .prose em) {
		font-style: italic;
	}
</style>


<script lang="ts">
	interface Props {
		title: string;
		content: string;
		sdgColor?: string;
	}

	let { title, content, sdgColor = '#339933' }: Props = $props();
</script>

<div class="custom-section mb-8" style="--sdg-color: {sdgColor};">
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
	:global(.custom-section .prose p) {
		margin-bottom: 1em;
	}

	:global(.custom-section .prose ul),
	:global(.custom-section .prose ol) {
		list-style-type: disc;
		padding-left: 1.5em;
		margin-bottom: 1em;
	}

	:global(.custom-section .prose li) {
		margin-bottom: 0.5em;
	}

	:global(.custom-section .prose strong) {
		font-weight: 600;
	}

	:global(.custom-section .prose em) {
		font-style: italic;
	}

	:global(.custom-section .prose a) {
		color: var(--sdg-color);
		text-decoration: underline;
	}
</style>


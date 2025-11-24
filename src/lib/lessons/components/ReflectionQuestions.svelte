<script lang="ts">
	interface Props {
		questions: string[];
		sdgColor?: string;
	}

	let { questions, sdgColor = '#339933' }: Props = $props();
</script>

<div class="reflection-questions mb-8">
	<h3
		class="text-xl sm:text-2xl font-normal mb-4"
		style="font-family: 'Founders Grotesk', sans-serif; letter-spacing: -0.01em; color: #1F2937;"
	>
		Reflection and Summary
	</h3>
	<p
		class="text-sm mb-4"
		style="font-family: 'Founders Grotesk', sans-serif; color: #6B7280;"
	>
		Ask guiding questions like:
	</p>
	<ul class="space-y-3">
		{#each questions as question}
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


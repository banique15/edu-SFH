<script lang="ts">
	interface Material {
		name: string;
		description?: string;
		isOptional?: boolean;
	}

	interface Props {
		materials: Material[];
		sdgColor?: string;
	}

	let { materials, sdgColor = '#339933' }: Props = $props();
</script>

<div class="materials-list">
	<h3
		class="text-xl sm:text-2xl font-normal mb-4"
		style="font-family: 'Founders Grotesk', sans-serif; letter-spacing: -0.01em; color: #1F2937;"
	>
		Materials
	</h3>
	<ul class="space-y-2">
		{#each materials as material}
			<li class="flex items-start gap-3">
				<div
					class="mt-1.5 w-2 h-2 rounded-full flex-shrink-0"
					style="background-color: {sdgColor};"
				></div>
				<div
					class="flex-1 text-sm"
					style="font-family: 'Founders Grotesk', sans-serif; color: #374151;"
				>
					{#if material.isOptional}
						<span class="italic text-gray-500">[Optional] </span>
					{/if}
					{@html material.name}
					{#if material.description}
						<span class="text-gray-500"> - {material.description}</span>
					{/if}
				</div>
			</li>
		{/each}
	</ul>
</div>


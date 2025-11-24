<script lang="ts">
	import type { Snippet } from 'svelte';

	interface SubjectHeroProps {
		artForm: string;
		description: string;
		bgColor?: string;
		imageUrl?: string;
		svgComponent?: Snippet;
	}

	let {
		artForm,
		description,
		bgColor,
		imageUrl = 'https://images.unsplash.com/photo-1455849318743-b2233052fcff?w=800&q=80',
		svgComponent
	}: SubjectHeroProps = $props();
</script>

<div class="relative w-full overflow-hidden">
	<div class="container mx-auto py-8 lg:py-12">
		<div class="flex flex-col lg:flex-row items-center gap-6 lg:gap-8">
			<!-- Left Side: SVG Shape with Text -->
			<div class="relative w-full lg:w-[80%] h-[280px] lg:h-[350px]">
				{#if svgComponent}
					<!-- Use custom SVG component if provided -->
					<div class="w-full h-full">
						{@render svgComponent()}
					</div>
				{:else}
					<!-- SVG with dynamic color -->
					<svg
						class="absolute inset-0 w-full h-full"
						viewBox="0 0 914 350"
						fill="none"
						preserveAspectRatio="xMinYMin meet"
					>
						<path
							d="M3.07695e-05 20C3.17994e-05 8.9543 8.95432 -1.31494e-05 20 -1.2244e-05L894 5.93958e-05C905.046 6.03012e-05 914 8.95438 914 20.0001L914 155C914 166.046 905.046 175 894 175L738 175C726.954 175 718 183.954 718 195L718 330C718 341.046 709.046 350 698 350L20 350C8.95428 350 8.34907e-07 341.046 1.86482e-06 330L3.07695e-05 20Z"
							fill={bgColor || '#349552'}
						/>
					</svg>
					<div class="relative h-full flex items-start px-8 pt-6">
						<h1 class="text-white text-7xl leading-tight tracking-tight">
							{artForm}
						</h1>
					</div>
				{/if}
			</div>

			<!-- Right Side: Rounded Image -->
			<div class="w-full lg:w-[25%] h-[280px] lg:h-[350px] flex-shrink-0">
				<div class="w-full h-full rounded-[20px] overflow-hidden shadow-lg">
					<img
						src={imageUrl}
						alt="{artForm} students"
						class="w-full h-full object-cover"
					/>
				</div>
			</div>
		</div>
	</div>
</div>

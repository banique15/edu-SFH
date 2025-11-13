<script lang="ts">
	interface Props {
		searchQuery: string;
		onSearchChange: (value: string) => void;
	}

	let { searchQuery = $bindable(), onSearchChange }: Props = $props();

	function handleInput(event: Event) {
		const target = event.target as HTMLInputElement;
		searchQuery = target.value;
		onSearchChange(target.value);
	}
</script>

<div class="bg-base-100 border border-base-300 rounded-[20px] p-6 mb-6">
	<div class="flex flex-col items-center gap-4">
		<!-- Header text -->
		<h2 class="text-center text-3xl text-primary font-normal" style="font-family: 'Founders Grotesk', sans-serif; letter-spacing: -0.32px;">
			Use our classroom assistant to help find a lesson
		</h2>
		<!-- Subtitle -->
		<p class="text-center text-base text-base-content/70" style="font-family: 'Founders Grotesk', sans-serif;">
			or use the filters below to refine results
		</p>

		<!-- Search input -->
		<div class="relative w-full max-w-2xl">
			<input
				type="text"
				value={searchQuery}
				oninput={handleInput}
				placeholder="Search or describe the type of lesson you're looking for"
				class="input input-bordered w-full pr-12 rounded-full border-2 border-base-content"
				style="font-family: 'Founders Grotesk', sans-serif;"
			/>
			<!-- Search icon -->
			<div class="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
				<svg class="w-5 h-5 text-base-content/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
				</svg>
			</div>
		</div>

		
	</div>
</div>

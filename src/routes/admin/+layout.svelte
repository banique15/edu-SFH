<script lang="ts">
	import TopNav from '$lib/components/TopNav.svelte';
	import BottomNav from '$lib/components/BottomNav.svelte';

	let { children } = $props();
</script>

<div class="flex flex-col h-screen">
	<!-- Mobile header with logo -->
	<div class="lg:hidden flex-none bg-base-100 shadow-sm px-4 py-2">
		<div class="flex items-center justify-center">
			<a href="/admin" class="flex items-center">
				<img
					src="/sfh-logo.png"
					alt="Sing for Hope"
					class="h-12 w-auto"
				/>
			</a>
		</div>
	</div>

	<!-- Desktop Top Navigation -->
	<TopNav />

	<!-- Main content with bottom padding for mobile nav -->
	<main class="flex-1 bg-base-100 overflow-y-auto min-h-0 pb-20 lg:pb-0">
		{@render children()}
	</main>

	<!-- Bottom Navigation (Mobile only) -->
	<BottomNav />
</div>

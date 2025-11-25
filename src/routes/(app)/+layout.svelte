<script lang="ts">
	import PublicHeader from '$lib/components/PublicHeader.svelte';
	import LoginModal from '$lib/components/LoginModal.svelte';
	import { page } from '$app/stores';
	import { authStore } from '$lib/auth';
	import { requiresLogin, isPublicRoute } from '$lib/utils/auth-helpers';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();

	// Show login modal if user is not authenticated and route requires login
	let showLoginModal = $derived(
		!$authStore &&
		requiresLogin($page.url.pathname) &&
		!isPublicRoute($page.url.pathname)
	);

	let loginModalOpen = $state(false);

	// TEMPORARILY DISABLED: Watch for changes and trigger modal
	// $effect(() => {
	// 	if (showLoginModal) {
	// 		loginModalOpen = true;
	// 	}
	// });
</script>

<div class="bg-[#fdf9f1] min-h-screen overflow-x-hidden">
	<div class="px-4 sm:px-6">
		<PublicHeader />
	</div>

	<main class="min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-6rem)] lg:min-h-[calc(100vh-188px)] z-10 overflow-x-hidden">
		{@render children()}	
	</main>
	<Footer />
</div>

<LoginModal bind:open={loginModalOpen} />

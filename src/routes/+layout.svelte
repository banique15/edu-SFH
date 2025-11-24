<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	import { authStore } from '$lib/auth';
	import ErrorDisplay from '$lib/components/ui/ErrorDisplay.svelte';
	import Toast from '$lib/components/ui/Toast.svelte';

	let { children } = $props();

	onMount(() => {
		authStore.initialize();
	});
</script>

{@render children()}

<!-- Global Error Display -->
<ErrorDisplay />

<!-- Toast Notifications -->
<Toast />

<script lang="ts">
	import { page } from '$app/stores';

	const navItems = [
		{
			name: 'Dashboard',
			href: '/admin',
			icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
			disabled: false
		},
		{
			name: 'Goals',
			href: '/admin/goals',
			icon: 'M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z',
			disabled: false
		},
		{
			name: 'Lessons',
			href: '/admin/lessons',
			icon: 'M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z',
			disabled: false
		},
		{
			name: 'Users',
			href: '/admin/users',
			icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z',
			disabled: false
		}
	];

	function isActive(href: string): boolean {
		if (href === '/admin') {
			return $page.url.pathname === '/admin';
		}
		return $page.url.pathname.startsWith(href);
	}
</script>

<!-- Fixed bottom navigation - only visible on mobile -->
<div class="fixed bottom-0 left-0 right-0 lg:hidden z-50 border-t border-base-300 bg-base-100 shadow-lg">
	<div class="grid grid-cols-4 h-16">
		{#each navItems as item}
			{#if item.disabled}
				<span
					class="flex flex-col items-center justify-center gap-1 opacity-40 cursor-not-allowed"
					aria-disabled="true"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="2"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d={item.icon} />
					</svg>
					<span class="text-[10px] font-medium">{item.name}</span>
				</span>
			{:else}
				<a
					href={item.href}
					data-sveltekit-preload-data="tap"
					data-sveltekit-preload-code="eager"
					class="flex flex-col items-center justify-center gap-1 transition-colors duration-200 hover:bg-base-200"
					class:text-primary={isActive(item.href)}
					class:bg-base-200={isActive(item.href)}
					aria-current={isActive(item.href) ? 'page' : undefined}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="2"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d={item.icon} />
					</svg>
					<span class="text-[10px] font-medium">{item.name}</span>
				</a>
			{/if}
		{/each}
	</div>
</div>

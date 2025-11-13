<script lang="ts">
	import { page } from '$app/stores';
	import { authStore } from '$lib/auth';

	const navItems = [
		{ name: 'Dashboard', href: '/admin', disabled: false },
		{ name: 'Goals', href: '/admin/goals', disabled: false },
		{ name: 'Lessons', href: '/admin/lessons', disabled: false },
		{ name: 'Users', href: '/admin/users', disabled: false }
	];

	function isActive(href: string): boolean {
		if (href === '/admin') {
			return $page.url.pathname === '/admin';
		}
		return $page.url.pathname.startsWith(href);
	}
</script>

<nav class="bg-base-100 border-b border-base-300 shadow-sm hidden lg:block relative z-[100]">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex items-center justify-between h-16">
			<!-- Logo -->
			<div class="flex items-center gap-8">
				<a href="/" class="flex items-center">
					<img
						src="/sfh-logo.png"
						alt="Sing for Hope"
						class="h-12 w-auto"
					/>
				</a>

				<!-- Main Navigation -->
				<div class="flex items-center gap-1">
					{#each navItems as item}
						{#if !item.disabled}
							<a
								href={item.href}
								class="px-4 py-2 rounded-lg text-sm font-medium transition-all"
								class:bg-primary={isActive(item.href)}
								class:text-primary-content={isActive(item.href)}
								class:hover:bg-base-200={!isActive(item.href)}
								class:text-base-content={!isActive(item.href)}
							>
								{item.name}
							</a>
						{/if}
					{/each}
				</div>
			</div>

			<!-- Right side -->
			<div class="flex items-center gap-4">
				<!-- View Public Site Link -->
				{#if $authStore}
					<a href="/" class="btn btn-ghost btn-sm">
						<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
							<path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z"/>
						</svg>
						Public Site
					</a>

					<!-- User Menu -->
					<div class="dropdown dropdown-end">
						<div tabindex="0" role="button" class="btn btn-ghost btn-sm gap-2">
							<div class="avatar placeholder">
								<div class="bg-primary text-primary-content rounded-full w-8">
									<span class="text-xs font-bold">
										{$authStore.email?.charAt(0).toUpperCase()}
									</span>
								</div>
							</div>
						</div>
						<ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-50 w-52 p-2 shadow-lg border border-base-300 mt-2">
							<li><span class="text-sm opacity-60">{$authStore.email}</span></li>
							<li><hr class="my-1" /></li>
							<li><button onclick={authStore.signOut}>Logout</button></li>
						</ul>
					</div>
				{/if}
			</div>
		</div>
	</div>
</nav>

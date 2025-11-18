<script lang="ts">
	import { onMount } from 'svelte';
	import { goals, fetchGoals } from '$lib/stores/goals';
	import { getGoalSlug } from '$lib/utils/slugify';

	let dropdownOpen = $state(false);

	onMount(() => {
		fetchGoals();
	});

	function toggleDropdown() {
		dropdownOpen = !dropdownOpen;
	}

	function closeDropdown() {
		dropdownOpen = false;
	}

	function handleClickOutside(event: MouseEvent) {
		const target = event.target as HTMLElement;
		if (dropdownOpen && !target.closest('.dropdown-container')) {
			dropdownOpen = false;
		}
	}
</script>

<svelte:window onclick={handleClickOutside} />

<!-- Footer -->
<footer class="bg-gradient-to-b from-[#349552] to-[#023902] py-[40px] px-6">
	<div class="max-w-7xl mx-auto">
		<!-- Mobile Footer -->
		<div class="block lg:hidden">
			<div class="space-y-8">
				<!-- Curriculum Section -->
				<div>
					<h3 class="text-white text-[30px] font-normal leading-[1.2] tracking-[-0.3px] mb-8">
						Curriculum
					</h3>
					
					<!-- Two column layout for By Subject and By Grade -->
					<div class="grid grid-cols-2 gap-8 mb-8">
						<!-- By Subject -->
						<div>
							<h4 class="text-white text-[20px] font-medium leading-[1.2] mb-4">
								By Subject
							</h4>
							<ul class="space-y-2 text-white text-[18px] font-normal leading-[1.2]">
								<li><a href="/subjects/visual-arts" class="cursor-pointer hover:opacity-80 transition-opacity">Visual Art</a></li>
								<li><a href="/subjects/creative-writing" class="cursor-pointer hover:opacity-80 transition-opacity">Creative Writing</a></li>
								<li><a href="/subjects/dance" class="cursor-pointer hover:opacity-80 transition-opacity">Dance & Movement</a></li>
								<li><a href="/subjects/drama" class="cursor-pointer hover:opacity-80 transition-opacity">Drama</a></li>
								<li><a href="/subjects/music" class="cursor-pointer hover:opacity-80 transition-opacity">Music</a></li>
							</ul>
						</div>

						<!-- By Grade -->
						<div>
							<h4 class="text-white text-[20px] font-medium leading-[1.2] mb-4">
								By Grade
							</h4>
							<ul class="space-y-2 text-white text-[18px] font-normal leading-[1.2]">
								<li><a href="/curriculum?grade=5-8" class="cursor-pointer hover:opacity-80 transition-opacity">Grades 5-8</a></li>
								<li><a href="/curriculum?grade=9-12" class="cursor-pointer hover:opacity-80 transition-opacity">Grades 9-12</a></li>
							</ul>
						</div>
					</div>

					<!-- By Global Goal -->
					<div class="mb-8">
						<h4 class="text-white text-[20px] font-medium leading-[1.2] mb-4">
							By Global Goal
						</h4>
						<div class="relative dropdown-container">
							<button
								type="button"
								onclick={toggleDropdown}
								class="w-full bg-white rounded-[8px] px-[16px] py-[12px] flex items-center justify-between cursor-pointer hover:bg-gray-100 transition-colors"
							>
								<span class="text-black text-[18px] font-normal leading-[1.2]">Select a goal</span>
								<svg class="w-[12.573px] h-[6.827px] transition-transform {dropdownOpen ? 'rotate-180' : ''}" viewBox="0 0 13 7" fill="none">
									<path
										d="M1 1L6.5 6L12 1"
										stroke="black"
										stroke-width="1.5"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
							</button>

							{#if dropdownOpen}
								<div class="absolute z-50 w-full mt-2 bg-white rounded-[8px] shadow-lg max-h-[400px] overflow-y-auto">
									{#each $goals as goal}
										<a
											href="/goals/{getGoalSlug(goal)}"
											onclick={closeDropdown}
											class="block px-[17px] py-[10px] text-black text-[16px] hover:bg-gray-100 transition-colors border-b border-gray-100 last:border-b-0"
										>
											<span class="font-medium">Goal {goal.goal_number}:</span> {goal.title}
										</a>
									{/each}
								</div>
							{/if}
						</div>
					</div>
				</div>

				<!-- About and Contributors Section -->
				<div>
					<h3 class="text-white text-[30px] font-normal leading-[1.2] tracking-[-0.3px] mb-4">
						About
					</h3>
					<h3 class="text-white text-[30px] font-normal leading-[1.2] tracking-[-0.3px] mb-8">
						Contributors
					</h3>
				</div>

				<!-- Sing for Hope Section -->
				<div class="bg-white rounded-[15px] p-6">
					<div class="flex justify-between items-start gap-4">
						<div class="flex-1 space-y-4">
							<div>
								<h3 class="text-black text-[28px] font-medium leading-none tracking-[-0.28px] mb-3">
									Sing for Hope
								</h3>
								<p class="text-black text-[16px] font-normal leading-[1.4] tracking-[-0.16px]">
									Our creative programs bring hope, healing, and connection to millions of people in hospitals, care facilities, schools, refugee camps, transit hubs, and community spaces worldwide.
								</p>
							</div>
							
							<a
								href="https://singforhope.org"
								target="_blank"
								rel="noopener noreferrer"
								class="inline-flex items-center justify-center bg-[#349552] text-white text-[18px] font-medium leading-[1.2] px-8 py-3 rounded-[40px] hover:bg-[#2d7d45] transition-colors min-h-[48px]"
							>
								Learn more
							</a>
						</div>
						
						<!-- Logo -->
						<div class="flex-shrink-0 w-[60px] h-[60px]">
							<img src="sfh-logo.png" alt="Sing for Hope Logo" class="w-full h-full object-contain" />
						</div>
					</div>
				</div>

				<!-- Bottom Logos -->
				<div class="flex justify-center items-center gap-6 mt-8">
					<img src="logo1.png" alt="SDG Logo" class="h-[60px]" />
					<img src="logo2.png" alt="NCAS Logo" class="h-[60px]" />
				</div>

				<!-- Copyright -->
				<div class="text-center mt-8">
					<p class="text-white/60 text-[14px] leading-[1.4] tracking-[-0.14px]">
						Copyright ©2025 Sing for Hope, Inc. All rights reserved.
					</p>
				</div>
			</div>
		</div>

		<!-- Desktop Footer -->
		<div class="hidden lg:grid grid-cols-[200px_1fr_2fr] gap-8">
			<!-- Curriculum Column -->
			<div>
				<h3
					class="text-white text-[30.682px] font-normal leading-[1.198] tracking-[-0.3068px] mb-8"
				>
					Curriculum
				</h3>

				<div class="space-y-6">
					<div>
						<h4
							class="text-white text-[20px] font-medium leading-[1.2] mb-3"
						>
							By Subject
						</h4>
						<ul
							class="space-y-1 text-white text-[18px] font-normal leading-[1.2]"
						>
							<li>
								<a
									href="/subjects/visual-arts"
									class="cursor-pointer hover:opacity-80 transition-opacity"
									>Visual Art</a
								>
							</li>
							<li>
								<a
									href="/subjects/creative-writing"
									class="cursor-pointer hover:opacity-80 transition-opacity"
									>Creative Writing</a
								>
							</li>
							<li>
								<a
									href="/subjects/dance"
									class="cursor-pointer hover:opacity-80 transition-opacity"
									>Dance & Movement</a
								>
							</li>
							<li>
								<a
									href="/subjects/music"
									class="cursor-pointer hover:opacity-80 transition-opacity"
									>Music</a
								>
							</li>
							<li>
								<a
									href="/subjects/drama"
									class="cursor-pointer hover:opacity-80 transition-opacity"
									>Drama</a
								>
							</li>
						</ul>
					</div>

					<div>
						<h4
							class="text-white text-[20px] font-medium leading-[1.2] mb-3"
						>
							By Grade
						</h4>
						<ul
							class="space-y-1 text-white text-[18px] font-normal leading-[1.2]"
						>
							<li>
								<a
									href="/curriculum?grade=5-8"
									class="cursor-pointer hover:opacity-80 transition-opacity"
									>Grades 5-8</a
								>
							</li>
							<li>
								<a
									href="/curriculum?grade=9-12"
									class="cursor-pointer hover:opacity-80 transition-opacity"
									>Grades 9-12</a
								>
							</li>
						</ul>
					</div>
				</div>
			</div>

			<!-- About Column -->
			<div>
				<div class="space-y-6">
					<div>
						<h4
							class="text-white text-[20px] font-medium leading-[1.2] mb-3"
						>
							By Global Goal
						</h4>
						<div class="relative dropdown-container">
							<button
								type="button"
								onclick={toggleDropdown}
								class="w-full bg-white rounded-[8px] px-[17px] py-[13px] flex items-center justify-between cursor-pointer hover:bg-gray-100 transition-colors"
							>
								<span class="text-black text-[18px]"
									>Select a goal</span
								>
								<svg class="w-3 h-2 transition-transform {dropdownOpen ? 'rotate-180' : ''}" viewBox="0 0 13 7" fill="none">
									<path
										d="M1 1L6.5 6L12 1"
										stroke="black"
										stroke-width="1.5"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
							</button>

							{#if dropdownOpen}
								<div class="absolute z-50 w-full mt-2 bg-white rounded-[8px] shadow-lg max-h-[400px] overflow-y-auto">
									{#each $goals as goal}
										<a
											href="/goals/{getGoalSlug(goal)}"
											onclick={closeDropdown}
											class="block px-[17px] py-[10px] text-black text-[16px] hover:bg-gray-100 transition-colors border-b border-gray-100 last:border-b-0"
										>
											<span class="font-medium">Goal {goal.goal_number}:</span> {goal.title}
										</a>
									{/each}
								</div>
							{/if}
						</div>
					</div>

					<div class="mt-12">
						
						<ul
							class="space-y-1 text-white text-[24px] font-normal leading-[1.198] tracking-[-0.24px]"
						>
							<li>
								<a
									href="/about"
									class="cursor-pointer hover:opacity-80 transition-opacity"
									>- About</a
								>
							</li>
							<li>
								<a
									href="/about#contributors"
									class="cursor-pointer hover:opacity-80 transition-opacity"
									>- Contributors</a
								>
							</li>
						</ul>
					</div>
				</div>
			</div>

			<!-- Sing for Hope Column -->
			<div>
				<div
					class="relative bg-white rounded-[15px] p-[28px] flex justify-between gap-12"
				>
					<div class="space-y-8">
						<div>
							<h3
								class="text-black text-[28px] font-medium leading-none tracking-[-0.28px] mb-1"
							>
								Sing for Hope
							</h3>
							<p
								class="text-black text-[18px] font-normal leading-[1.2]"
							>
								Our creative programs bring hope, healing, and
								connection to millions of people in hospitals,
								care facilities, schools, refugee camps, transit
								hubs, and community spaces worldwide.
							</p>
						</div>

						<a
							href="https://singforhope.org"
							target="_blank"
							rel="noopener noreferrer"
							class="inline-block bg-[#349552] text-white text-[18px] font-medium leading-[1.2] px-6 py-3 rounded-[40px] hover:bg-[#2d7d45] transition-colors"
						>
							Learn more
						</a>
					</div>
					<div>
						<img src="sfh-logo.png" />
					</div>
				</div>
				<div class="flex justify-end items-center mt-6">
					<img src="logo1.png" />
					<img src="logo2.png" />
				</div>
			</div>
		</div>

		<!-- Desktop Bottom Footer -->
		<div class="hidden lg:flex mt-16 items-end justify-between">
			<p
				class="text-white/50 text-[14px] leading-[1.198] tracking-[-0.14px]"
			>
				Copyright ©2025 Sing for Hope, Inc. All rights reserved.
			</p>

			<div class="flex gap-4 items-center">
				<div class="text-white/70 text-xs uppercase tracking-wider">
					<div class="flex flex-col gap-1">
						<span class="font-semibold">Sustainable</span>
						<span class="font-semibold">Development Goals</span>
					</div>
				</div>
				<div class="h-10 w-px bg-white/30"></div>
				<div class="text-white/70 text-xs uppercase tracking-wider">
					<div class="flex flex-col gap-1">
						<span class="font-semibold">NCAS</span>
						<span class="text-[10px]">Arts Education</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</footer>

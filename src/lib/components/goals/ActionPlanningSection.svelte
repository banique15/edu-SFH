<script lang="ts">
	import type { Goal } from "$lib/stores/goals";
	import type { GoalStaticContent } from "$lib/data/goal-content";
	import { getSdgColor, getSdgTextColor } from "$lib/utils/sdg-colors";

	interface Props {
		goal: Goal;
		actionPlanning?: GoalStaticContent["actionPlanning"];
	}

	let { goal, actionPlanning }: Props = $props();
	let isOpen = $state(true);
	const panelId = `goal-action-planning-${goal.goal_number}`;

	const bgColor = $derived(getSdgColor(goal.goal_number));
	const textColor = $derived(getSdgTextColor(goal.goal_number));
</script>

<div class="py-12">
	<div class="max-w-7xl mx-auto">
		<div
			class="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20"
		>
			<button
				type="button"
				class="w-full flex items-center justify-between gap-4 px-6 py-4 text-left"
				onclick={() => (isOpen = !isOpen)}
				aria-expanded={isOpen}
				aria-controls={panelId}
			>
				<span class="text-2xl md:text-3xl font-bold"
					>Action Planning</span
				>
				<svg
					class={`w-6 h-6 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M19 9l-7 7-7-7"
					/>
				</svg>
			</button>
			{#if isOpen}
				<div
					id={panelId}
					class="border-t border-white/20 px-6 md:px-8 lg:px-10 py-8 md:py-10"
				>
					<div class="prose prose-invert max-w-none">
						<div
							class="flex flex-col gap-4 rounded-3xl p-8 md:p-10 mb-8"
							style="background-color: {bgColor}; color: {textColor};"
						>
							<p
								class="text-2xl md:text-3xl mb-0 leading-relaxed"
							>
								{actionPlanning?.statement ??
									`Empowering youth to become action agents of change for Goal ${goal.goal_number}. Even small, consistent actions can create meaningful impact.`}
							</p>
						</div>
						{#if actionPlanning && actionPlanning.sections.length > 0}
							<div class="space-y-8 md:space-y-10">
								{#each actionPlanning.sections as section}
									<div class="space-y-4">
										<h3
											class="text-xl md:text-2xl font-bold mb-2"
										>
											{section.title}
										</h3>
										{#if section.description}
											<p
												class="text-base md:text-lg mb-6 text-base-content/80"
											>
												{section.description}
											</p>
										{/if}
										<div class="space-y-4 md:space-y-5">
											{#each section.items as item}
												<div
													class="bg-white/5 border border-white/20 rounded-xl p-5 md:p-6 hover:bg-white/10 transition-colors"
												>
													<p
														class="text-lg md:text-xl leading-relaxed"
													>
														{item}
													</p>
												</div>
											{/each}
										</div>
									</div>
								{/each}
							</div>
						{:else}
							<div
								class="bg-white/5 border border-dashed border-white/30 rounded-xl p-8"
							>
								<p class="text-base md:text-lg">
									Action examples are coming soon for this
									goal. Check back shortly!
								</p>
							</div>
						{/if}
					</div>
				</div>
			{/if}
		</div>
	</div>
</div>

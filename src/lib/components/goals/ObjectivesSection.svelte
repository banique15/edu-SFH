<script lang="ts">
	import type { GoalObjectiveContent, ObjectiveCategory } from '$lib/data/goal-content';
	import type { Goal } from '$lib/stores/goals';
	import { getSdgColor } from '$lib/utils/sdg-colors';

	interface Props {
		objectives: GoalObjectiveContent[];
		goal: Goal;
	}

	let { objectives, goal }: Props = $props();

	const goalColor = $derived(getSdgColor(goal.goal_number));

	const categories: ObjectiveCategory[] = ['Knowledge', 'Discourse', 'Attitudes', 'Capacity', 'Action'];

	function getObjectivesByCategory(category: ObjectiveCategory) {
		return objectives.find(obj => obj.category === category)?.items ?? [];
	}
</script>

<div class="bg-[#FDF9F1] py-12">
	<div class="max-w-7xl mx-auto ">
		<div class="collapse collapse-arrow rounded-2xl mb-6 border border-base-200 ">
			<input type="checkbox" checked />
			<div class="collapse-title text-4xl ">
				Objectives
			</div>
			<div class="collapse-content">
				<p class="text-base-content/70 mb-8">
					These learning objectives are organized into five categories that together form a
					comprehensive approach to understanding and engaging with this goal.
				</p>

				<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
					{#each categories as category}
						{@const categoryObjectives = getObjectivesByCategory(category)}
						{#if categoryObjectives.length > 0}
							<div
								class="card bg-white border-2 rounded-2xl shadow-sm"
								style="border-color: {goalColor};"
							>
								<div class="card-body">
									<h3 class="card-title text-2xl  tracking-wide mb-2">
										{category}
									</h3>
									<ul class="space-y-3">
										{#each categoryObjectives as objective}
											<li class="text-sm text-base-content/80 leading-relaxed">
											<div class="flex gap-2">
												<span class="mt-1" style="color: {goalColor};">•</span>
													<div class="flex-1">
														<p>{objective.description}</p>
														{#if objective.nccas}
															<span class="text-xm text-base-content/50 mt-1 block">
																({objective.nccas})
															</span>
														{/if}
													</div>
												</div>
											</li>
										{/each}
									</ul>
								</div>
							</div>
						{/if}
					{/each}
				</div>
			</div>
		</div>
	</div>
</div>

<script lang="ts">
	import type { GoalTargetContent } from "$lib/data/goal-content";

	interface Props {
		targets: GoalTargetContent[];
	}

	let { targets }: Props = $props();
</script>

<div id="targets" class="bg-[#FDF9F1] py-12">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="collapse collapse-arrow rounded-2xl border border-base-200">
			<input type="checkbox" />
			<div class="collapse-title text-2xl md:text-3xl font-bold">
				Targets & Indicators
			</div>
			<div class="collapse-content space-y-8">
				<div>
					<h2 class="text-3xl font-bold">Benchmarking Progress</h2>
					<p class="text-base-content/70 max-w-3xl mt-3">
						A quick view of the official UN targets for this goal paired
						with the indicators that track global progress. Use these to
						connect classroom inquiry with real-world data.
					</p>
				</div>

				<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
					{#each targets as target}
						<div
							class="card bg-base-200/60 shadow-sm border border-base-200"
						>
							<div class="card-body space-y-4">
								<div class="flex items-center gap-3">
									<div
										class="w-12 h-12 rounded-full bg-base-100 flex items-center justify-center font-semibold text-lg"
									>
										{target.number}
									</div>
									<div>
										<p
											class="text-xs uppercase tracking-wider text-base-content/60"
										>
											{target.title}
										</p>
										<p class="text-base font-semibold">
											{target.description}
										</p>
									</div>
								</div>

							{#if target.indicators.length > 0}
								<div class="bg-base-100 rounded-xl p-4 space-y-3">
									<p
										class="text-sm font-semibold text-base-content/70"
									>
										Indicators
									</p>
									<ul
										class="space-y-2 text-sm text-base-content/80"
									>
										{#each target.indicators as indicator}
											<li class="flex gap-2">
												<span
													class="text-primary font-semibold"
													>{indicator.number}</span
												>
												<p class="flex-1 leading-snug">
													{indicator.description}
												</p>
											</li>
										{/each}
									</ul>
								</div>
							{/if}
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>
</div>

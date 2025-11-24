<script lang="ts">
	import Footer from "$lib/components/Footer.svelte";
	import Hero from "$lib/components/home/Hero.svelte";
	import { getGoalSlug } from "$lib/utils/slugify";
	import type { PageData } from "./$types";
	import Subjects from "$lib/components/home/Subjects.svelte";
	import Goals from "$lib/components/home/Goals.svelte";
	import Grades from "$lib/components/home/Grades.svelte";
	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();

	let openFaq = $state<number | null>(null);

	function toggleFaq(index: number) {
		openFaq = openFaq === index ? null : index;
	}

	// Create a map from goal_number to goal for easy lookup
	const goalsByNumber = $derived(
		data.goals.reduce(
			(acc, goal) => {
				acc[goal.goal_number] = goal;
				return acc;
			},
			{} as Record<number, (typeof data.goals)[0]>,
		),
	);

	function getGoalLink(goalNumber: number): string {
		const goal = goalsByNumber[goalNumber];
		return goal ? `/goals/${getGoalSlug(goal)}` : `/goals/${goalNumber}`;
	}
</script>

<svelte:head>
	<title>Sing for Hope Classroom | Arts-Based Curriculum</title>
	<meta
		name="description"
		content="Inspire change through the arts with our accessible, fun, and ready-to-use arts-based curriculum for grades 5-12 based on the UN's Sustainable Development Goals."
	/>
</svelte:head>

<Hero />

<Goals {data} />

<Subjects />

<Grades />

<!-- Student Photo Section -->
<section class="relative h-[545px] overflow-hidden pt-12">
	<img
		src="/Home/home-desktop-faq.png"
		alt="Students engaging in arts education"
		class="w-full h-full object-cover"
	/>
</section>

<!-- FAQ Section -->
<section class="bg-white py-[80px] px-6">
	<div class="max-w-7xl mx-auto">
		<h2
			class="text-[48px] font-normal leading-[0.9] tracking-[-0.48px] text-black mb-[58px]"
		>
			FAQ's
		</h2>

		<div class="space-y-0">
			<!-- FAQ Item 1 -->
			<div class="border-t border-black">
				<button
					onclick={() => toggleFaq(0)}
					class="w-full py-6 cursor-pointer hover:bg-base-50 transition-colors"
				>
					<div class="flex items-center justify-between">
						<p
							class="text-[24px] font-medium leading-[1.1] tracking-[-0.24px] text-black text-left"
						>
							Who is this curriculum designed for?
						</p>
						<svg
							class="w-4 h-2 transition-transform duration-300 flex-shrink-0 ml-4"
							class:rotate-180={openFaq === 0}
							viewBox="0 0 17 9"
							fill="none"
						>
							<path
								d="M1 1L8.5 8L16 1"
								stroke="black"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</div>
				</button>
				{#if openFaq === 0}
					<div class="pb-6 px-4">
						<p class="text-[18px] leading-[1.5] text-black/80">
							This curriculum is designed for educators working
							with students in grades 5-12. It's perfect for
							classroom teachers, arts educators, and community
							program leaders who want to integrate arts-based
							learning with the UN's Sustainable Development
							Goals.
						</p>
					</div>
				{/if}
			</div>

			<!-- FAQ Item 2 -->
			<div class="border-t border-black">
				<button
					onclick={() => toggleFaq(1)}
					class="w-full py-6 cursor-pointer hover:bg-base-50 transition-colors"
				>
					<div class="flex items-center justify-between">
						<p
							class="text-[24px] font-medium leading-[1.1] tracking-[-0.24px] text-black text-left"
						>
							How are the lessons structured?
						</p>
						<svg
							class="w-4 h-2 transition-transform duration-300 flex-shrink-0 ml-4"
							class:rotate-180={openFaq === 1}
							viewBox="0 0 17 9"
							fill="none"
						>
							<path
								d="M1 1L8.5 8L16 1"
								stroke="black"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</div>
				</button>
				{#if openFaq === 1}
					<div class="pb-6 px-4">
						<p class="text-[18px] leading-[1.5] text-black/80">
							Each of the 17 UN Sustainable Development Goals has
							5 corresponding lessons, one for each art form:
							Music, Visual Arts, Creative Writing,
							Dance/Movement, and Drama. Every lesson includes
							learning objectives, materials lists, step-by-step
							activities, and assessment guidelines.
						</p>
					</div>
				{/if}
			</div>

			<!-- FAQ Item 3 -->
			<div class="border-t border-black">
				<button
					onclick={() => toggleFaq(2)}
					class="w-full py-6 cursor-pointer hover:bg-base-50 transition-colors"
				>
					<div class="flex items-center justify-between">
						<p
							class="text-[24px] font-medium leading-[1.1] tracking-[-0.24px] text-black text-left"
						>
							Are there grade-specific versions of the lessons?
						</p>
						<svg
							class="w-4 h-2 transition-transform duration-300 flex-shrink-0 ml-4"
							class:rotate-180={openFaq === 2}
							viewBox="0 0 17 9"
							fill="none"
						>
							<path
								d="M1 1L8.5 8L16 1"
								stroke="black"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</div>
				</button>
				{#if openFaq === 2}
					<div class="pb-6 px-4">
						<p class="text-[18px] leading-[1.5] text-black/80">
							Yes! Each lesson includes grade-specific learning
							objectives tailored for both grades 5-8 and grades
							9-12. This ensures that the content is
							developmentally appropriate while maintaining the
							core concepts across all age groups.
						</p>
					</div>
				{/if}
			</div>

			<!-- FAQ Item 4 -->
			<div class="border-t border-b border-black">
				<button
					onclick={() => toggleFaq(3)}
					class="w-full py-6 cursor-pointer hover:bg-base-50 transition-colors"
				>
					<div class="flex items-center justify-between">
						<p
							class="text-[24px] font-medium leading-[1.1] tracking-[-0.24px] text-black text-left"
						>
							Is this curriculum free to use?
						</p>
						<svg
							class="w-4 h-2 transition-transform duration-300 flex-shrink-0 ml-4"
							class:rotate-180={openFaq === 3}
							viewBox="0 0 17 9"
							fill="none"
						>
							<path
								d="M1 1L8.5 8L16 1"
								stroke="black"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</div>
				</button>
				{#if openFaq === 3}
					<div class="pb-6 px-4">
						<p class="text-[18px] leading-[1.5] text-black/80">
							Yes! All of our curriculum materials are completely
							free to access and use. We believe in making quality
							arts education accessible to all educators and
							students. You can browse, download, and implement
							any of our lessons at no cost.
						</p>
					</div>
				{/if}
			</div>
		</div>
	</div>
</section>

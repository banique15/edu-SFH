<script lang="ts">
	import { goto } from "$app/navigation";

	let selectedGrade = $state<"5-8" | "9-12">("5-8");

	function handleGradeSelect(grade: "5-8" | "9-12") {
		selectedGrade = grade;
	}

	function handleSeeAllLessons() {
		// Navigate to curriculum page with the selected grade as a URL parameter
		goto(`/curriculum?grade=${selectedGrade}`);
	}
</script>

<!-- Lessons by Grade Section -->
<section class="bg-[#fdf9f1] py-12 px-6 mb-16">
	<div class="max-w-4xl mx-auto">
		<!-- Title -->
		<h2 class="text-3xl md:text-5xl font-normal leading-tight text-black mb-8">
			Lessons by Grade
		</h2>
		
		<!-- Grade Buttons -->
		<div class="flex gap-8 md:gap-12 mb-12">
			<button
				class="relative cursor-pointer bg-transparent border-none p-0"
				onclick={() => handleGradeSelect("5-8")}
			>
				<p class="text-2xl md:text-4xl font-normal leading-tight text-black transition-opacity pb-3"
					class:opacity-100={selectedGrade === "5-8"}
					class:opacity-50={selectedGrade !== "5-8"}
				>
					Grades 5-8
				</p>
				{#if selectedGrade === "5-8"}
					<div class="absolute left-0 bottom-0 w-full h-1 bg-[#349552]"></div>
				{/if}
			</button>
			<button
				class="relative cursor-pointer bg-transparent border-none p-0"
				onclick={() => handleGradeSelect("9-12")}
			>
				<p class="text-2xl md:text-4xl font-normal leading-tight text-black transition-opacity pb-3"
					class:opacity-100={selectedGrade === "9-12"}
					class:opacity-50={selectedGrade !== "9-12"}
				>
					Grades 9-12
				</p>
				{#if selectedGrade === "9-12"}
					<div class="absolute left-0 bottom-0 w-full h-1 bg-[#349552]"></div>
				{/if}
			</button>
		</div>

		<!-- See All Lessons Button -->
		<button
			class="w-full max-w-lg bg-white border-2 border-black rounded-[30px] flex items-center justify-between px-8 py-6 cursor-pointer hover:bg-gray-50 transition-colors"
			onclick={handleSeeAllLessons}
		>
			<span class="text-2xl md:text-3xl font-normal text-black">
				See All Lessons
			</span>
			<svg
				class="w-8 h-8 md:w-10 md:h-10"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<path d="M5 12h14M12 5l7 7-7 7"/>
			</svg>
		</button>
	</div>
</section>

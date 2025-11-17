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
<!-- Mobile Layout -->
<section class="bg-[#fdf9f1] py-12 px-6 mb-16 md:hidden">
	<div class="max-w-4xl mx-auto">
		<!-- Title -->
		<h2 class="text-3xl font-normal leading-tight text-black mb-8">
			Lessons by Grade
		</h2>
		
		<!-- Grade Buttons -->
		<div class="flex gap-12 mb-12 justify-center">
			<button
				class="relative cursor-pointer bg-transparent border-none p-0"
				onclick={() => handleGradeSelect("5-8")}
			>
				<p class="text-3xl font-normal leading-tight text-black transition-opacity pb-3"
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
				<p class="text-3xl font-normal leading-tight text-black transition-opacity pb-3"
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
			<span class="text-2xl font-normal text-black">
				See All Lessons
			</span>
			<svg
				class="w-8 h-8"
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

<!-- Tablet Layout -->
<section class="bg-[#fdf9f1] py-8 px-6 mb-16 hidden md:block lg:hidden">
	<div class="max-w-4xl mx-auto">
		<!-- Title -->
		<h2 class="text-4xl font-normal leading-tight text-black mb-6">
			Lessons by Grade
		</h2>
		
		<!-- Grade Buttons -->
		<div class="flex gap-12 mb-8">
			<button
				class="relative cursor-pointer bg-transparent border-none p-0"
				onclick={() => handleGradeSelect("5-8")}
			>
				<p class="text-3xl font-light leading-tight text-black transition-opacity pb-2"
					class:opacity-100={selectedGrade === "5-8"}
					class:opacity-50={selectedGrade !== "5-8"}
				>
					Grades 5-8
				</p>
				{#if selectedGrade === "5-8"}
					<div class="absolute left-0 bottom-0 w-full h-[3px] bg-[#349552]"></div>
				{/if}
			</button>
			<button
				class="relative cursor-pointer bg-transparent border-none p-0"
				onclick={() => handleGradeSelect("9-12")}
			>
				<p class="text-3xl font-light leading-tight text-black transition-opacity pb-2"
					class:opacity-100={selectedGrade === "9-12"}
					class:opacity-50={selectedGrade !== "9-12"}
				>
					Grades 9-12
				</p>
				{#if selectedGrade === "9-12"}
					<div class="absolute left-0 bottom-0 w-full h-[3px] bg-[#349552]"></div>
				{/if}
			</button>
		</div>

		<!-- See All Lessons Button -->
		<button
			class="w-full max-w-2xl bg-white border-[1.5px] border-black rounded-[20px] flex items-center justify-between px-8 py-6 cursor-pointer hover:bg-gray-50 transition-colors"
			onclick={handleSeeAllLessons}
		>
			<span class="text-3xl font-normal text-black">
				See All Lessons
			</span>
			<svg
				class="w-12 h-6"
				viewBox="0 0 56 29"
				fill="none"
			>
				<path
					d="M36 14.5L51 14.5M51 14.5L43 6.5M51 14.5L43 22.5"
					stroke="black"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
		</button>
	</div>
</section>

<!-- Desktop Layout (Figma Design) -->
<section class="bg-[#fdf9f1] relative py-16 px-20 mb-16 hidden lg:block">
	<div class="max-w-7xl mx-auto">
		<!-- Divider Line at top -->
		<div class="absolute left-1/2 top-0 transform -translate-x-1/2 w-full max-w-[1494px] h-px bg-black"></div>
		
		<div class="relative">
			<!-- Title -->
			<h2 class="text-[48px] font-normal leading-[0.9] tracking-[-0.48px] text-black mb-8">
				Lessons by Grade
			</h2>
			
			<!-- Grade Buttons and See All Lessons Button Container -->
			<div class="flex items-center justify-between">
				<!-- Grade Buttons -->
				<div class="flex gap-[75px] items-end">
					<button
						class="relative cursor-pointer bg-transparent border-none p-0"
						onclick={() => handleGradeSelect("5-8")}
					>
						<p class="text-[46px] font-light leading-[42px] tracking-[-0.46px] text-black transition-opacity pb-2"
							class:opacity-100={selectedGrade === "5-8"}
							class:opacity-50={selectedGrade !== "5-8"}
						>
							Grades 5-8
						</p>
						{#if selectedGrade === "5-8"}
							<div class="absolute left-0 bottom-0 w-[195px] h-[3px] bg-[#349552]"></div>
						{/if}
					</button>
					<button
						class="relative cursor-pointer bg-transparent border-none p-0"
						onclick={() => handleGradeSelect("9-12")}
					>
						<p class="text-[46px] font-light leading-[42px] tracking-[-0.46px] text-black transition-opacity pb-2"
							class:opacity-100={selectedGrade === "9-12"}
							class:opacity-50={selectedGrade !== "9-12"}
						>
							Grades 9-12
						</p>
						{#if selectedGrade === "9-12"}
							<div class="absolute left-0 bottom-0 w-[195px] h-[3px] bg-[#349552]"></div>
						{/if}
					</button>
				</div>

				<!-- See All Lessons Button -->
				<button
					class="bg-white border-[1.5px] border-black rounded-[20px] flex items-center justify-between px-[41.5px] cursor-pointer hover:bg-gray-50 transition-colors w-[624px] h-[119px] flex-shrink-0"
					onclick={handleSeeAllLessons}
				>
					<span class="text-[48px] font-normal leading-[0.9] tracking-[-0.48px] text-black">
						See All Lessons
					</span>
					<svg
						class="w-[100px] h-[45px] flex-shrink-0"
						viewBox="0 0 100 45"
						fill="none"
					>
						<path
							d="M36 22.5L85 22.5M85 22.5L70 7.5M85 22.5L70 37.5"
							stroke="black"
							stroke-width="3"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</button>
			</div>
		</div>
	</div>
</section>

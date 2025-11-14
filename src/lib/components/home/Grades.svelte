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
<section class="relative h-[182px] mb-[64px] px-6 lg:overflow-x-visible overflow-x-hidden">
	<div class="max-w-7xl mx-auto py-[64px] w-full">
		<div class="flex justify-between w-full flex-col md:flex-row">
			<div class="flex gap-[25px] relative flex-col">
				<div>
					<h2
						class="text-[38px] font-normal leading-[0.9] tracking-[-0.48px] text-black"
					>
						Lessons by Grade
					</h2>
				</div>
				<div class="flex gap-[25px]">
					<button
						class="relative cursor-pointer bg-transparent border-none p-0"
						onclick={() => handleGradeSelect("5-8")}
					>
						<p
							class="text-[46px] font-light leading-[42px] tracking-[-0.46px] text-black transition-opacity"
							class:opacity-100={selectedGrade === "5-8"}
							class:opacity-50={selectedGrade !== "5-8"}
						>
							Grades 5-8
						</p>
						{#if selectedGrade === "5-8"}
							<div
								class="absolute -bottom-2 left-0 w-[196px] h-[3px] bg-[#349552] rounded-full"
							></div>
						{/if}
					</button>
					<button
						class="relative cursor-pointer bg-transparent border-none p-0 hover:opacity-70 transition-opacity"
						class:opacity-100={selectedGrade === "9-12"}
						class:opacity-50={selectedGrade !== "9-12"}
						onclick={() => handleGradeSelect("9-12")}
					>
						<p
							class="text-[46px] font-light leading-[42px] tracking-[-0.46px] text-black"
						>
							Grades 9-12
						</p>
						{#if selectedGrade === "9-12"}
							<div
								class="absolute -bottom-2 left-0 w-[210px] h-[3px] bg-[#349552] rounded-full"
							></div>
						{/if}
					</button>
				</div>
			</div>

			<!-- See All Lessons Button -->
			<button
				class="  w-full max-w-[624px] h-[119px] bg-white border-[1.5px] border-black rounded-[20px] flex items-center justify-between px-[42px] cursor-pointer hover:bg-base-200 transition-colors"
				onclick={handleSeeAllLessons}
			>
				<p
					class="text-[48px] font-normal leading-[0.9] tracking-[-0.48px] text-black"
				>
					See All Lessons
				</p>
				<svg
					class="w-[100px] h-[45px]"
					viewBox="0 0 100 45"
					fill="none"
				>
					<path
						d="M70 22.5L90 22.5M90 22.5L80 12.5M90 22.5L80 32.5"
						stroke="black"
						stroke-width="3"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			</button>
		</div>
	</div>
</section>

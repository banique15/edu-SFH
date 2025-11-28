<script lang="ts">
	import { getSdgColor } from "$lib/utils/sdg-colors";
	import Footer from "$lib/components/Footer.svelte";
</script>

<svelte:head>
	<title>About | Sing for Hope Classroom</title>
	<meta
		name="description"
		content="Learn about Sing for Hope's arts-based curriculum for grades 5-12, built around the UN's Sustainable Development Goals."
	/>
</svelte:head>

<div class="bg-[#fdf9f1] w-full">
	<!-- Main Content Container -->
	<div
		class="flex flex-col gap-12 md:gap-16 lg:gap-20 xl:gap-[120px] items-center pt-6 md:pt-8 pb-12 md:pb-16 max-w-7xl mx-auto px-4"
	>
		<!-- Hero Image -->
		<div class="w-full h-[200px] sm:h-[250px] md:h-[280px] lg:h-[336px] rounded-[20px] overflow-hidden">
			<img
				src="/About/about-desktop-hero.png"
				alt="Students engaging in arts education"
				class="w-full h-full object-cover"
			/>
		</div>

		<!-- Section 1: Main Headline & Goals -->
		<div class="flex flex-col gap-12 md:gap-10 lg:gap-[54px] items-center w-full max-w-sm md:max-w-4xl">
			<!-- Main Headline -->
			<h1
				class="text-[32px] md:text-5xl lg:text-6xl xl:text-[84px] leading-none md:leading-[0.9] tracking-[-0.32px] md:tracking-[-0.05em] lg:tracking-[-0.08em] xl:tracking-[-2.1px] text-[#349552] text-center font-normal w-full max-w-[325px] md:max-w-none"
			>
				What if every young person had the power to build a better world?
			</h1>

			<!-- Header & Copy -->
			<div
				class="flex flex-col gap-[6px] md:gap-[12px] items-center text-center w-full max-w-[351px] md:max-w-2xl"
			>
				<p
					class="text-[20px] md:text-2xl lg:text-[28px] leading-[1.2] md:leading-none tracking-normal md:tracking-[-0.02em] lg:tracking-[-0.28px] text-black font-medium max-w-[320px] md:max-w-none"
				>
					This is the question that inspired the Sing for Hope Global
					Goals Arts Curriculum.
				</p>
				<p class="text-[16px] md:text-xl lg:text-[24px] leading-[1.2] md:leading-[1.3] tracking-[-0.16px] md:tracking-normal text-black max-w-[320px] md:max-w-none">
					The United Nations' 17 Global Goals for Sustainable
					Development stand as a powerful blueprint for peace and
					prosperity, yet they presented a unique opportunity for
					creative engagement.
				</p>
			</div>

			<!-- Goal Blocks Grid -->
			<div
				class="flex flex-wrap gap-[7px] md:gap-[10px] items-start justify-center w-full max-w-[353px] md:max-w-3xl"
			>
				{#each Array(17) as _, i}
					{@const goalNum = i + 1}
					<div
						class="w-[52.75px] h-[52.75px] md:w-20 md:h-20 lg:w-[89.204px] lg:h-[89.204px] rounded-[10px] md:rounded-xl lg:rounded-[17.736px] p-[9.591px] md:p-0 flex flex-col items-center justify-center"
						style="background-color: {getSdgColor(goalNum)}"
					>
						<img
							src="/About/about-goal-{goalNum}.svg"
							alt="SDG Goal {goalNum}"
							class="h-full w-auto object-contain"
						/>
					</div>
				{/each}
			</div>

			<!-- Bottom Text -->
			<p
				class="text-[16px] md:text-xl lg:text-[24px] leading-[1.2] md:leading-[1.3] tracking-[-0.16px] md:tracking-normal text-black text-center w-full max-w-[320px] md:max-w-2xl"
			>
				With artists consistently at the forefront of movements for
				social justice and peace, it became clear that the Global Goals
				could be amplified by the universal language of the arts.
			</p>
		</div>

		<!-- Section 2: Text & Subjects -->
		<div class="w-full flex flex-col gap-12 md:gap-8 lg:flex-row items-center lg:items-center justify-between lg:px-[78px]">
			<p class="text-[16px] md:text-xl lg:text-[24px] leading-[1.2] md:leading-[1.3] tracking-[-0.16px] md:tracking-normal text-black text-center lg:text-left w-full lg:w-auto lg:max-w-md max-w-[320px] md:max-w-none">
				Our curriculum was born from this conviction: to give a creative
				voice to the Global Goals and share them through the
				transformative power of the arts.
			</p>

			<!-- Subject Blocks -->
			<div class="flex flex-wrap gap-[7px] md:gap-[10px] items-start justify-center w-full max-w-[353px] md:max-w-none lg:w-auto">
				<div
					class="bg-[#349552] rounded-[15px] md:rounded-[20px] h-[56px] md:h-[88px] px-[18.759px] md:px-[24px] py-[18.759px] md:py-[24px] flex items-center w-[203px] md:w-auto"
				>
					<p
						class="text-[25.013px] md:text-3xl lg:text-[34px] leading-none tracking-[-0.2501px] md:tracking-[-0.03em] lg:tracking-[-0.44px] text-white whitespace-nowrap"
					>
						Creative Writing
					</p>
				</div>
				<div
					class="bg-[#19486a] rounded-[15px] md:rounded-[20px] h-[56px] md:h-[88px] px-[18.759px] md:px-[24px] py-[18.759px] md:py-[24px] flex items-center w-[142px] md:w-auto"
				>
					<p
						class="text-[25.013px] md:text-3xl lg:text-[34px] leading-none tracking-[-0.2501px] md:tracking-[-0.03em] lg:tracking-[-0.44px] text-white whitespace-nowrap"
					>
						Visual Art
					</p>
				</div>
				<div
					class="bg-[#dd1367] rounded-[15px] md:rounded-[20px] h-[57px] md:h-[88px] px-[18.759px] md:px-[24px] py-[18.759px] md:py-[24px] flex items-center w-[156px] md:w-auto"
				>
					<p
						class="text-[25.013px] md:text-3xl lg:text-[34px] leading-none tracking-[-0.2501px] md:tracking-[-0.03em] lg:tracking-[-0.44px] text-white whitespace-nowrap"
					>
						Drama
					</p>
				</div>
				<div
					class="bg-[#ff3a21] rounded-[15px] md:rounded-[20px] h-[57px] md:h-[88px] px-[18.759px] md:px-[24px] py-[18.759px] md:py-[24px] flex items-center w-[189px] md:w-auto"
				>
					<p
						class="text-[25.013px] md:text-3xl lg:text-[34px] leading-none tracking-[-0.2501px] md:tracking-[-0.03em] lg:tracking-[-0.44px] text-white whitespace-nowrap"
					>
						Music
					</p>
				</div>
				<div
					class="bg-[#26bde2] rounded-[15px] md:rounded-[20px] h-[57px] md:h-[88px] px-[18.759px] md:px-[24px] py-[18.759px] md:py-[24px] flex items-center w-[353px] md:w-auto"
				>
					<p
						class="text-[25.013px] md:text-3xl lg:text-[34px] leading-none tracking-[-0.2501px] md:tracking-[-0.03em] lg:tracking-[-0.44px] text-white whitespace-nowrap"
					>
						Dance & Movement
					</p>
				</div>
			</div>
		</div>

		<!-- Section 3: Image Blocks -->
		<div class="h-auto min-h-[300px] md:min-h-[400px] lg:h-[460px] w-full relative px-4 sm:px-6 md:px-12 lg:px-[78px]">
			<!-- Large left image -->
			<div
				class="absolute left-4 sm:left-6 md:left-12 lg:left-[78px] top-0 w-[40%] md:w-[45%] lg:w-[460px] h-[200px] sm:h-[250px] md:h-[300px] lg:h-[460px] rounded-[20px] overflow-hidden"
			>
				<img
					src="/About/about-desktop-block-1.png"
					alt="Students creating art"
					class="w-full h-full object-cover"
				/>
			</div>

			<!-- Top right large image -->
			<div
				class="absolute right-4 sm:right-6 md:right-12 lg:right-[78px] top-0 w-[55%] md:w-[50%] lg:w-[587px] h-[120px] sm:h-[150px] md:h-[200px] lg:h-[272.75px] rounded-[20px] overflow-hidden"
			>
				<img
					src="/About/about-desktop-block-2.png"
					alt="Students in classroom"
					class="w-full h-full object-cover"
				/>
			</div>

			<!-- Bottom left of right side -->
			<div
				class="absolute right-[45%] sm:right-[40%] md:right-[35%] lg:right-[calc(78px+218px)] top-[130px] sm:top-[160px] md:top-[210px] lg:top-[292.75px] w-[35%] md:w-[30%] lg:w-[369px] h-[70px] sm:h-[90px] md:h-[120px] lg:h-[167.25px] rounded-[20px] overflow-hidden"
			>
				<img
					src="/About/about-desktop-block-4.png"
					alt="Students engaged"
					class="w-full h-full object-cover"
				/>
			</div>

			<!-- Bottom right small -->
			<div
				class="absolute right-4 sm:right-6 md:right-12 lg:right-[78px] top-[130px] sm:top-[160px] md:top-[210px] lg:top-[292.75px] w-[18%] md:w-[20%] lg:w-[198px] h-[70px] sm:h-[90px] md:h-[120px] lg:h-[167.25px] rounded-[20px] overflow-hidden"
			>
				<img
					src="/About/about-desktop-block-5.png"
					alt="Creative expression"
					class="w-full h-full object-cover"
				/>
			</div>
		</div>

		<!-- Section 4: Text + Image (Text Left) -->
		<div class="w-full px-4 sm:px-6 md:px-12 lg:px-[78px] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-8">
			<p class="text-base sm:text-lg md:text-xl lg:text-[24px] leading-[1.3] text-black w-full lg:w-auto lg:max-w-[600px]">
				The Sing for Hope Global Goals Arts Curriculum is a
				first-of-its-kind, free digital platform that empowers students
				in grades 5-12 to explore urgent global issues and imagine
				solutions through music, visual art, creative writing, dance,
				and drama. Designed for educators worldwide and aligned with the
				National Core Arts Standards (NCAS), this Curriculum is more
				than a resource; it's a movement.
			</p>

			<div
				class="w-full lg:w-[460px] h-[300px] sm:h-[350px] md:h-[400px] lg:h-[460px] rounded-[20px] overflow-hidden shrink-0"
			>
				<img
					src="/About/about-desktop-block-6.png"
					alt="Curriculum in action"
					class="w-full h-full object-cover"
				/>
			</div>
		</div>

		<!-- Section 5: Image + Text (Image Left) -->
		<div class="w-full px-4 sm:px-6 md:px-12 lg:px-[78px] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-8">
			<div
				class="w-full lg:w-[460px] h-[300px] sm:h-[350px] md:h-[400px] lg:h-[460px] rounded-[20px] overflow-hidden shrink-0 order-2 lg:order-1"
			>
				<img
					src="/About/about-desktop-block-2.png"
					alt="Students collaborating"
					class="w-full h-full object-cover"
				/>
			</div>

			<p class="text-base sm:text-lg md:text-xl lg:text-[24px] leading-[1.3] text-black w-full lg:w-auto lg:max-w-[600px] order-1 lg:order-2">
				Across the initial pilot in the Bronx and Westchester County,
				educators who embedded the Global Goals into their culture
				through the arts saw fundamental transformation: improved
				behavior, higher participation, and stronger attendance. Why?
				When students see their creativity linked to real-world change,
				they find purpose. The curriculum channels that purpose into
				developing the skills they need to become compassionate leaders
				and advocates for a better world.
			</p>
		</div>

		<!-- Section 6: Mission Text -->
		<div class="w-full max-w-4xl px-4 sm:px-6 lg:px-8">
			<p class="text-base sm:text-lg md:text-xl lg:text-[24px] leading-[1.3] text-black text-center">
				The Curriculum equips young people with the creative,
				intellectual, and socio-emotional skills they need to become
				compassionate, informed global citizens, powerful advocates for
				positive change, and champions for Sing for Hope's mission of
				"Creating a Better World Through the Arts."
			</p>
		</div>

		<!-- Section 7: Contributors -->
		<!--
		<div
			id="contributors"
			class="bg-[#1a562c] rounded-[20px] w-[845px] p-[60px] flex flex-col gap-[10px] items-center"
		>
			<div class="flex flex-col gap-[24px] items-center w-full">
				<div
					class="flex flex-col gap-[12px] items-center text-center text-white"
				>
					<h2 class="text-[48px] leading-[0.9] tracking-[-0.48px]">
						Thank you to our contributors
					</h2>
					<p class="text-[18px] leading-[1.2]">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Donec maximus turpis eget efficitur facilisis. Phasellus
						vel hendrerit est, fringilla posuere est. In id ex in
						nisl pellentesque rhoncus fringilla.
					</p>
				</div>

				<a
					href="/contributors"
					class="bg-[#349552] text-white text-[18px] font-medium leading-[1.2] px-[24px] py-[8px] pb-[8px] pt-[5px] rounded-[40px] h-[44px] flex items-center justify-center hover:bg-[#2d7d45] transition-colors"
				>
					Learn more
				</a>
			</div>
		</div>
		-->

		<!-- Section 8: Scrolling Text -->
		<div class="w-full h-auto min-h-[100px] md:min-h-[150px] lg:h-[193px] overflow-x-auto">
			<p
				class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[55px] leading-[0.9] tracking-[-0.05em] md:tracking-[-0.08em] lg:tracking-[-0.12em] xl:tracking-[-3.625px] text-[#349552] whitespace-nowrap px-4 sm:px-6 md:px-8 text-center"
			>
				Creating a Better World Through the Arts.
			</p>
		</div>

		<!-- Section 9: Browse Curriculum Button -->
		<a
			href="/curriculum"
			class="bg-white border-[1.5px] border-black rounded-[20px] w-full max-w-2xl p-6 md:p-8 lg:p-[48px] flex items-center justify-between hover:bg-gray-50 transition-colors cursor-pointer"
		>
			<p class="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] leading-[0.9] tracking-[-0.02em] md:tracking-[-0.03em] lg:tracking-[-0.48px] text-black">
				Browse Curriculum
			</p>
			<svg class="w-16 h-7 sm:w-20 sm:h-9 md:w-24 md:h-11 lg:w-[100px] lg:h-[44.83px]" viewBox="0 0 100 45" fill="none">
				<path
					d="M70 22.5L90 22.5M90 22.5L80 12.5M90 22.5L80 32.5"
					stroke="black"
					stroke-width="3"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
		</a>
	</div>
</div>


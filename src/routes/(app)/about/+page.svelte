<script lang="ts">
	import { getSdgColor } from "$lib/utils/sdg-colors";
</script>

<svelte:head>
	<title>About | Sing for Hope Classroom</title>
	<meta
		name="description"
		content="Learn about Sing for Hope's arts-based curriculum for grades 5-12, built around the UN's Sustainable Development Goals."
	/>
</svelte:head>

<div class="bg-[#fdf9f1] w-full">
	<!-- Mobile Layout (hidden on md and up) -->
	<div class="block md:hidden">
		<div class="flex flex-col gap-12 items-center pt-6 pb-12 max-w-sm mx-auto px-4">
			<!-- Section 1: Mobile About Content -->
			<div class="flex flex-col gap-12 items-center w-full">
				
				<!-- Main Headline -->
				<h1 class="text-[32px] leading-none tracking-[-0.32px] text-[#349552] text-center font-normal max-w-[325px]">
					What if every young person had the power to build a better world?
				</h1>

				<!-- Header & Copy -->
				<div class="flex flex-col gap-1.5 items-center text-center w-full max-w-[351px]">
					<p class="text-[20px] leading-[1.2] text-black font-medium max-w-[320px]">
						This is the question that inspired the Sing for Hope Global Goals Arts Curriculum.
					</p>
					<p class="text-[16px] leading-[1.2] tracking-[-0.16px] text-black max-w-[320px]">
						The United Nations' 17 Global Goals for Sustainable Development stand as a powerful blueprint for peace and prosperity, yet they presented a unique opportunity for creative engagement.
					</p>
				</div>

				<!-- Goal Blocks Grid -->
				<div class="flex flex-wrap gap-[7px] items-start justify-center w-full max-w-[353px]">
					{#each Array(17) as _, i}
						{@const goalNum = i + 1}
						<div
							class="w-[52.75px] h-[52.75px] rounded-[10px] p-[9.591px] flex items-center justify-center"
							style="background-color: {getSdgColor(goalNum)}"
						>
							<img
								src="/About/about-goal-{goalNum}.svg"
								alt="SDG Goal {goalNum}"
								class="max-w-full max-h-full object-contain"
							/>
						</div>
					{/each}
				</div>

				<!-- Bottom Text -->
				<p class="text-[16px] leading-[1.2] tracking-[-0.16px] text-black text-center max-w-[320px]">
					With artists consistently at the forefront of movements for social justice and peace, it became clear that the Global Goals could be amplified by the universal language of the arts.
				</p>

				<!-- Text & Subjects Section -->
				<div class="flex flex-col gap-12 items-center w-full">
					<p class="text-[16px] leading-[1.2] tracking-[-0.16px] text-black text-center max-w-[320px]">
						Our curriculum was born from this conviction: to give a creative voice to the Global Goals and share them through the transformative power of the arts.
					</p>

					<!-- Subject Blocks -->
					<div class="flex flex-col gap-[7px] items-center w-full max-w-[353px]">
						<!-- First row: Creative Writing and Visual Art -->
						<div class="flex gap-[7px] w-full">
							<div class="bg-[#349552] rounded-[15px] h-[56px] px-[18.759px] py-[18.759px] flex items-center flex-1">
								<p class="text-[20px] leading-none tracking-[-0.2px] text-white whitespace-nowrap">
									Creative Writing
								</p>
							</div>
							<div class="bg-[#19486a] rounded-[15px] h-[56px] px-[18.759px] py-[18.759px] flex items-center flex-1">
								<p class="text-[20px] leading-none tracking-[-0.2px] text-white whitespace-nowrap">
									Visual Art
								</p>
							</div>
						</div>
						
						<!-- Second row: Drama and Music -->
						<div class="flex gap-[7px] w-full">
							<div class="bg-[#dd1367] rounded-[15px] h-[56px] px-[18.759px] py-[18.759px] flex items-center flex-1">
								<p class="text-[20px] leading-none tracking-[-0.2px] text-white whitespace-nowrap">
									Drama
								</p>
							</div>
							<div class="bg-[#ff3a21] rounded-[15px] h-[56px] px-[18.759px] py-[18.759px] flex items-center flex-1">
								<p class="text-[20px] leading-none tracking-[-0.2px] text-white whitespace-nowrap">
									Music
								</p>
							</div>
						</div>
						
						<!-- Third row: Dance & Movement (full width) -->
						<div class="w-full">
							<div class="bg-[#26bde2] rounded-[15px] h-[56px] px-[18.759px] py-[18.759px] flex items-center w-full">
								<p class="text-[20px] leading-none tracking-[-0.2px] text-white whitespace-nowrap">
									Dance & Movement
								</p>
							</div>
						</div>
			
						<!-- Section 2: Image Blocks -->
						<div class="flex flex-col gap-12 items-center w-full max-w-sm mx-auto">
							<!-- Image Collage -->
							<div class="relative w-[353px] h-[202px]">
								<!-- Main background image -->
								<img
									src="/About/about-desktop-block-1.png"
									alt="Students learning through arts"
									class="absolute top-0 left-0 w-[353px] h-[202px] object-cover rounded-[10px]"
								/>
								<!-- Small overlay image bottom right -->
								<img
									src="/About/about-desktop-block-4.png"
									alt="Student artwork"
									class="absolute top-[128.5px] left-[170.8px] w-[86.9px] h-[73.4px] object-cover rounded-tl-[10px] rounded-bl-[10px] rounded-br-[10px] rounded-tr-[5px]"
								/>
								<!-- Small overlay image bottom left -->
								<img
									src="/About/about-desktop-block-5.png"
									alt="Creative expression"
									class="absolute top-[128.4px] left-0 w-[162px] h-[73.5px] object-cover rounded-[10px]"
								/>
							</div>
			
							<!-- Text + Image Section 1 -->
							<div class="flex flex-col gap-[34px] items-center w-full max-w-[352px]">
								<p class="text-[16px] leading-[1.2] tracking-[-0.16px] text-black text-center w-[320px]">
									The Sing for Hope Global Goals Arts Curriculum is a first-of-its-kind, free digital platform that empowers students in grades 5-12 to explore urgent global issues and imagine solutions through music, visual art, creative writing, dance, and drama. Designed for educators worldwide and aligned with the National Core Arts Standards (NCAS), this Curriculum is more than a resource; it's a movement.
								</p>
								
								<div class="w-full aspect-square rounded-[12px] overflow-hidden">
									<img
										src="/About/about-desktop-block-6.png"
										alt="Students engaged in creative learning"
										class="w-full h-full object-cover"
									/>
								</div>
								
								<div class="w-[353px] h-[353px] rounded-[15px] overflow-hidden">
									<img
										src="/About/about-desktop-block-2.png"
										alt="Arts curriculum in action"
										class="w-full h-full object-cover"
									/>
								</div>
								
								<p class="text-[16px] leading-[1.2] tracking-[-0.16px] text-black text-center w-[320px]">
									Across the initial pilot in the Bronx and Westchester County, educators who embedded the Global Goals into their culture through the arts saw fundamental transformation: improved behavior, higher participation, and stronger attendance. Why? When students see their creativity linked to real-world change, they find purpose. The curriculum channels that purpose into developing the skills they need to become compassionate leaders and advocates for a better world.
								</p>
								
								<p class="text-[16px] leading-[1.2] tracking-[-0.16px] text-black text-center w-full">
									The Curriculum equips young people with the creative, intellectual, and socio-emotional skills they need to become compassionate, informed global citizens, powerful advocates for positive change, and champions for Sing for Hope's mission of "Creating a Better World Through the Arts."
								</p>
							</div>
			
							<!-- Contributors Section -->
							<div class="bg-[#1a562c] rounded-[20px] p-10 w-[352px] flex flex-col gap-6 items-center">
								<div class="flex flex-col gap-3 items-center text-center text-white w-full">
									<h3 class="text-[28px] leading-none tracking-[-0.28px] font-medium">
										Thank you to our contributors
									</h3>
									<p class="text-[16px] leading-[1.2] tracking-[-0.16px]">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus turpis eget efficitur facilisis. Phasellus vel hendrerit est, fringilla posuere est. In id ex in nisl pellentesque rhoncus fringilla.
									</p>
								</div>
								<button class="bg-[#349552] rounded-[40px] px-[18px] py-[6px] pb-[8px] h-9 flex items-center justify-center">
									<span class="text-[16px] leading-[1.2] tracking-[-0.16px] text-white font-medium whitespace-nowrap">
										Learn more
									</span>
								</button>
							</div>
			
							<!-- Scrolling Text -->
							<div class="w-[392px] h-[60px] overflow-x-auto overflow-y-hidden relative">
								<p class="absolute left-1/2 top-0 transform -translate-x-1/2 text-[60px] leading-[0.9] tracking-[-0.6px] text-[#349552] whitespace-nowrap w-[3062px]">
									Creating a Better World Through the Arts.
								</p>
							</div>
			
							<!-- Browse Curriculum Button -->
							<a
								href="/curriculum"
								class="bg-white border border-black rounded-[12px] w-[352px] p-[28px] flex items-center justify-between hover:bg-gray-50 transition-colors cursor-pointer"
							>
								<span class="text-[28px] leading-[0.9] tracking-[-0.28px] text-black whitespace-nowrap">
									Browse Curriculum
								</span>
								<svg class="w-[59px] h-[26px]" viewBox="0 0 59 26" fill="none">
									<path
										d="M41 13L53 13M53 13L46 6M53 13L46 20"
										stroke="black"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Desktop Layout (hidden on mobile, shown on md and up) -->
	<div class="hidden md:block">
		<div class="flex flex-col gap-12 md:gap-16 lg:gap-20 xl:gap-[120px] items-center pt-6 md:pt-8 pb-12 md:pb-16 max-w-7xl mx-auto">
			<!-- Hero Image -->
			<div class="w-full h-[200px] sm:h-[250px] md:h-[280px] lg:h-[336px] rounded-[20px] overflow-hidden">
				<img
					src="/About/about-desktop-hero.png"
					alt="Students engaging in arts education"
					class="w-full h-full object-cover"
				/>
			</div>

			<!-- Section 1: Main Headline & Goals -->
			<div class="flex flex-col gap-8 md:gap-10 lg:gap-[54px] items-center w-full max-w-4xl">
				<!-- Main Headline -->
				<h1
					class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[84px] leading-[0.9] tracking-[-0.03em] md:tracking-[-0.05em] lg:tracking-[-0.08em] xl:tracking-[-2.1px] text-[#349552] text-center font-normal w-full"
				>
					What if every young person had the power to build a better
					world?
				</h1>

				<!-- Header & Copy -->
				<div
					class="flex flex-col gap-3 md:gap-[12px] items-center text-center w-full max-w-2xl"
				>
					<p
						class="text-lg sm:text-xl md:text-2xl lg:text-[28px] leading-none tracking-[-0.01em] md:tracking-[-0.02em] lg:tracking-[-0.28px] text-black font-medium"
					>
						This is the question that inspired the Sing for Hope Global
						Goals Arts Curriculum.
					</p>
					<p class="text-base sm:text-lg md:text-xl lg:text-[24px] leading-[1.3] text-black">
						The United Nations' 17 Global Goals for Sustainable
						Development stand as a powerful blueprint for peace and
						prosperity, yet they presented a unique opportunity for
						creative engagement.
					</p>
				</div>

				<!-- Goal Blocks Grid -->
				<div
					class="flex flex-wrap gap-2 md:gap-[10px] items-start justify-center w-full max-w-3xl"
				>
					{#each Array(17) as _, i}
						{@const goalNum = i + 1}
						<div
							class="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-[89.204px] lg:h-[89.204px] rounded-lg md:rounded-xl lg:rounded-[17.736px] p-0 flex flex-col items-center justify-center"
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
					class="text-base sm:text-lg md:text-xl lg:text-[24px] leading-[1.3] text-black text-center w-full max-w-2xl"
				>
					With artists consistently at the forefront of movements for
					social justice and peace, it became clear that the Global Goals
					could be amplified by the universal language of the arts.
				</p>
			</div>

			<!-- Section 2: Text & Subjects -->
			<div class="w-full px-4 sm:px-6 md:px-12 lg:px-[78px] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-8">
				<p class="text-base sm:text-lg md:text-xl lg:text-[24px] leading-[1.3] text-black w-full lg:w-auto lg:max-w-md">
					Our curriculum was born from this conviction: to give a creative
					voice to the Global Goals and share them through the
					transformative power of the arts.
				</p>

				<!-- Subject Blocks -->
				<div class="flex flex-col gap-3 w-full lg:w-auto">
					<div class="flex flex-wrap gap-2 md:gap-[10px] w-full lg:w-[632px]">
						<div
							class="bg-[#349552] rounded-[20px] h-auto min-h-[60px] md:h-[88px] px-4 md:px-6 lg:px-[24px] py-3 md:py-4 lg:py-[24px] flex items-center"
						>
							<p
								class="text-xl sm:text-2xl md:text-3xl lg:text-[34px] leading-none tracking-[-0.02em] md:tracking-[-0.03em] lg:tracking-[-0.44px] text-white"
							>
								Creative Writing
							</p>
						</div>
						<div
							class="bg-[#19486a] rounded-[20px] h-auto min-h-[60px] md:h-[88px] px-4 md:px-6 lg:px-[24px] py-3 md:py-4 lg:py-[24px] flex items-center"
						>
							<p
								class="text-xl sm:text-2xl md:text-3xl lg:text-[34px] leading-none tracking-[-0.02em] md:tracking-[-0.03em] lg:tracking-[-0.44px] text-white"
							>
								Visual Art
							</p>
						</div>
						<div
							class="bg-[#dd1367] rounded-[20px] h-auto min-h-[60px] md:h-[88px] px-4 md:px-6 lg:px-[24px] py-3 md:py-4 lg:py-[24px] flex items-center"
						>
							<p
								class="text-xl sm:text-2xl md:text-3xl lg:text-[34px] leading-none tracking-[-0.02em] md:tracking-[-0.03em] lg:tracking-[-0.44px] text-white"
							>
								Drama
							</p>
						</div>
					</div>
					<div class="flex flex-wrap gap-2 md:gap-[10px] w-full lg:w-[632px]">
						<div
							class="bg-[#ff3a21] rounded-[20px] h-auto min-h-[60px] md:h-[88px] px-4 md:px-6 lg:px-[24px] py-3 md:py-4 lg:py-[24px] flex items-center"
						>
							<p
								class="text-xl sm:text-2xl md:text-3xl lg:text-[34px] leading-none tracking-[-0.02em] md:tracking-[-0.03em] lg:tracking-[-0.44px] text-white"
							>
								Music
							</p>
						</div>
						<div
							class="bg-[#26bde2] rounded-[20px] h-auto min-h-[60px] md:h-[88px] px-4 md:px-6 lg:px-[24px] py-3 md:py-4 lg:py-[24px] flex items-center"
						>
							<p
								class="text-xl sm:text-2xl md:text-3xl lg:text-[34px] leading-none tracking-[-0.02em] md:tracking-[-0.03em] lg:tracking-[-0.44px] text-white"
							>
								Dance & Movement
							</p>
						</div>
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
</div>

<script lang="ts">
	import { favoritesStore } from '$lib/stores/favorites';
	import LessonCard from '$lib/components/LessonCard.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import type { PageData } from './$types';
	import { goto } from '$app/navigation';
	import { getLessonSlug } from '$lib/utils/slugify';

	let { data }: { data: PageData } = $props();

	// Subscribe to favorites
	let favorites = $state<number[]>([]);
	favoritesStore.subscribe((value) => {
		favorites = value;
	});

	// Filter lessons based on favorites
	let favoriteLessons = $derived(
		data.allLessons.filter((lesson) => favorites.includes(lesson.id)).slice(0, 8)
	);

	// Get recommended lessons (non-favorited)
	let recommendedLessons = $derived(
		data.allLessons.filter((lesson) => !favorites.includes(lesson.id)).slice(0, 2)
	);

	// Helper to get lesson description from content
	function getLessonDescription(lessonId: number): string {
		const content = data.lessonContents.find((c) => c.lesson_id === lessonId);
		if (content?.content) {
			// Extract first sentence or up to 100 characters
			const text = content.content.replace(/<[^>]*>/g, '');
			const firstSentence = text.split('.')[0];
			return firstSentence.length > 100
				? firstSentence.substring(0, 100) + '...'
				: firstSentence;
		}
		return '';
	}

	// Helper to get goal for a lesson
	function getGoalForLesson(lessonId: number) {
		const lesson = data.allLessons.find((l) => l.id === lessonId);
		if (lesson) {
			return data.goals.find((g) => g.id === lesson.goal_id);
		}
		return undefined;
	}

	let showAllFavorites = $state(false);
	let displayedFavorites = $derived(showAllFavorites ? favoriteLessons : favoriteLessons.slice(0, 8));
</script>

<svelte:head>
	<title>My Account | Sing for Hope Classroom</title>
	<meta name="description" content="Manage your Sing for Hope Classroom account and saved lessons" />
</svelte:head>

<div class="bg-[#fdf9f1] min-h-screen p-6">
	<!-- Page Content -->
	<div class="max-w-7xl mx-auto py-16">
		<!-- My Account Header -->
		<div class="flex flex-col gap-12 mb-[60px]">
			<h1 class="text-[84px] font-normal leading-[0.9] tracking-[-2.1px] text-[#349552]">
				My Account
			</h1>

			<!-- Account Overview Card -->
			<div class="bg-white rounded-[20px] p-5">
				<div class="flex items-start justify-between">
					<!-- Profile Info -->
					<div class="flex items-center gap-8">
						<!-- Avatar -->
						<div class="w-[104px] h-[104px] rounded-full bg-gray-200 overflow-hidden flex items-center justify-center">
							{#if data.profile?.avatar_url}
								<img
									src={data.profile.avatar_url}
									alt="Profile"
									class="w-full h-full object-cover"
								/>
							{:else}
								<!-- Default avatar placeholder -->
								<svg
									class="w-16 h-16 text-gray-400"
									fill="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
									/>
								</svg>
							{/if}
						</div>

						<!-- User Details -->
						<div class="flex flex-col gap-4">
							<div class="text-[19.744px] leading-[27px] tracking-[-0.1974px] text-black">
								<p class="font-medium mb-0">
									{data.profile?.full_name || data.userEmail || 'User'}
								</p>
								{#if data.profile?.location}
									<p class="font-normal mb-0">{data.profile.location}</p>
								{/if}
								{#if data.profile?.preferred_subject}
									<p class="font-normal mb-0">{data.profile.preferred_subject}</p>
								{/if}
							</div>

							<!-- Filter Pills -->
							<div class="flex gap-2 flex-wrap">
								{#if data.profile?.preferred_grades && data.profile.preferred_grades.length > 0}
									{#each data.profile.preferred_grades as grade}
										<div
											class="border-[1.5px] border-black rounded-[49.918px] px-3.5 py-1"
										>
											<p
												class="text-[16px] font-normal leading-[1.2] tracking-[-0.16px] text-black"
											>
												{grade}
											</p>
										</div>
									{/each}
								{/if}
								{#if data.profile?.preferred_subject}
									<div class="border-[1.5px] border-black rounded-[49.918px] px-3.5 py-1">
										<p
											class="text-[16px] font-normal leading-[1.2] tracking-[-0.16px] text-black"
										>
											{data.profile.preferred_subject}
										</p>
									</div>
								{/if}
							</div>
						</div>
					</div>

					<!-- Edit Button -->
					<a
						href="/account/edit"
						class="border-[1.5px] border-black rounded-[40px] px-6 py-2 hover:bg-black hover:text-white transition-colors"
					>
						<p class="text-[18px] font-medium leading-[1.2] text-current">Edit</p>
					</a>
				</div>
			</div>
		</div>

		<!-- Your Saved Lessons -->
		<div class="flex flex-col gap-3 mb-[60px]">
			<h2 class="text-[48px] font-normal leading-[0.9] tracking-[-0.48px] text-black">
				Your Saved Lessons
			</h2>

			{#if favoriteLessons.length > 0}
				<!-- Lessons Grid -->
				<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
					{#each displayedFavorites as lesson}
						<LessonCard
							{lesson}
							goal={getGoalForLesson(lesson.id)}
							description={getLessonDescription(lesson.id)}
							showFavorite={true}
							onclick={() => goto(`/lessons/${getLessonSlug(lesson)}`)}
						/>
					{/each}
				</div>

				<!-- See More Button -->
				{#if favoriteLessons.length > 8}
					<div class="flex justify-center pt-6">
						<button
							onclick={() => (showAllFavorites = !showAllFavorites)}
							class="flex items-center gap-2 text-[16px] font-normal text-black hover:opacity-70 transition-opacity"
						>
							<span>{showAllFavorites ? 'See less' : 'See more'}</span>
							<svg
								class="w-2 h-1 transition-transform {showAllFavorites ? 'rotate-180' : ''}"
								viewBox="0 0 13 7"
								fill="none"
							>
								<path
									d="M1 1L6.5 6L12 1"
									stroke="black"
									stroke-width="1.5"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
						</button>
					</div>
				{/if}
			{:else}
				<div class="bg-white rounded-[20px] p-12 text-center">
					<p class="text-[18px] text-gray-600 mb-4">
						You haven't saved any lessons yet
					</p>
					<a
						href="/curriculum"
						class="inline-block bg-[#349552] text-white text-[18px] font-medium px-6 py-3 rounded-[40px] hover:bg-[#2d7d45] transition-colors"
					>
						Browse Curriculum
					</a>
				</div>
			{/if}
		</div>

		<!-- Recommended Lessons -->
		{#if recommendedLessons.length > 0}
			<div class="bg-[#eeeae5] rounded-[20px] p-11">
				<div class="flex items-center justify-between mb-8">
					<h2 class="text-[48px] font-normal leading-[0.9] tracking-[-0.48px] text-black">
						Recommended Lessons
					</h2>
					<a
						href="/curriculum"
						class="bg-[#349552] text-white text-[18px] font-medium px-6 py-3 rounded-[40px] hover:bg-[#2d7d45] transition-colors"
					>
						Browse Curriculum
					</a>
				</div>

				<div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
					{#each recommendedLessons as lesson}
						<LessonCard
							{lesson}
							goal={getGoalForLesson(lesson.id)}
							description={getLessonDescription(lesson.id)}
							showFavorite={true}
							onclick={() => goto(`/lessons/${getLessonSlug(lesson)}`)}
						/>
					{/each}
				</div>
			</div>
		{/if}
	</div>
</div>

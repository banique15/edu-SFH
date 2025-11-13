<script lang="ts">
	import type { Goal } from "$lib/stores/goals";
	import type { Lesson } from "$lib/stores/lessons";
	import type { GoalStaticContent } from "$lib/data/goal-content";
	import { getLessonSlug } from "$lib/utils/slugify";
	import { getSdgColor, getSdgTintColor } from "$lib/utils/sdg-colors";

	interface Props {
		goal: Goal;
		featuredLesson: Lesson | null;
		staticContent?: GoalStaticContent | null;
		videos?: GoalStaticContent["videos"];
	}

	let { goal, featuredLesson, staticContent, videos }: Props = $props();

	// Get goal colors for featured lesson section
	const goalColor = $derived(getSdgColor(goal.goal_number));
	const goalTintColor = $derived(getSdgTintColor(goal.goal_number));

	// Use videos prop if provided, otherwise fall back to staticContent.videos
	const displayVideos = $derived(videos ?? staticContent?.videos);

	// Carousel state
	let currentVideoIndex = $state(0);

	const hasMultipleVideos = $derived(
		displayVideos ? displayVideos.length > 1 : false,
	);

	function goToVideo(index: number) {
		if (displayVideos && index >= 0 && index < displayVideos.length) {
			currentVideoIndex = index;
		}
	}

	function nextVideo() {
		if (displayVideos) {
			currentVideoIndex = (currentVideoIndex + 1) % displayVideos.length;
		}
	}

	function previousVideo() {
		if (displayVideos) {
			currentVideoIndex =
				(currentVideoIndex - 1 + displayVideos.length) %
				displayVideos.length;
		}
	}

	const artFormColors: Record<string, string> = {
		"Musical Exploration": "badge-primary",
		Art: "badge-secondary",
		"Creative Writing": "badge-accent",
		"Dance/Movement": "badge-info",
		Drama: "badge-error",
	};

	/**
	 * Converts YouTube URLs to embed format
	 * Handles:
	 * - youtube.com/watch?v=VIDEO_ID
	 * - youtu.be/VIDEO_ID
	 * - youtube.com/embed/VIDEO_ID (already embed format)
	 */
	function getYouTubeEmbedUrl(url: string): string {
		if (!url) return url;

		try {
			// Already in embed format
			if (url.includes("/embed/")) {
				// Ensure it has proper parameters
				try {
					const embedUrl = new URL(url);
					embedUrl.searchParams.set("rel", "0");
					embedUrl.searchParams.set("modestbranding", "1");
					return embedUrl.toString();
				} catch {
					// If URL parsing fails, try to add parameters manually
					const separator = url.includes("?") ? "&" : "?";
					return `${url}${separator}rel=0&modestbranding=1`;
				}
			}

			// Extract video ID from various YouTube URL formats
			let videoId = "";

			// youtube.com/watch?v=VIDEO_ID or youtube.com/watch?v=VIDEO_ID&other=params
			const watchMatch = url.match(
				/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\s?#]+)/,
			);
			if (watchMatch) {
				videoId = watchMatch[1];
			}

			if (!videoId) {
				// If we can't extract, return original URL
				return url;
			}

			// Return embed URL with proper parameters
			return `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`;
		} catch (error) {
			// If anything fails, return original URL
			console.warn(
				"Failed to convert YouTube URL to embed format:",
				error,
			);
			return url;
		}
	}
</script>

<div class="py-12">
	<div class="max-w-7xl mx-auto">
		<h2 class="text-4xl md:text-5xl mb-2">
			{staticContent?.introHeadline ??
				`Introduction to Goal ${goal.goal_number}`}
		</h2>
		<p class="text-base-content/70 mb-8 max-w-3xl md:text-2xl">
			{staticContent?.introDescription ??
				`A curriculum designed for Goal ${goal.goal_number} that inspires the values and competencies behind this mission for grades 5-12.`}
		</p>

		<div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
			<!-- Video carousel -->
			<div class="relative">
				{#if displayVideos && displayVideos.length > 0}
					<div
						class="relative bg-white border border-base-200 rounded-2xl shadow-sm overflow-hidden"
					>
						<!-- Carousel container -->
						<div
							class="relative aspect-video bg-black overflow-hidden"
						>
							<div
								class="flex transition-transform duration-500 ease-in-out h-full"
								style="transform: translateX(-{currentVideoIndex *
									100}%)"
							>
								{#each displayVideos as video, index}
									<div
										class="min-w-full h-full relative flex-shrink-0"
									>
										<iframe
											title={video.title}
											src={getYouTubeEmbedUrl(video.url)}
											allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
											allowfullscreen
											class="absolute inset-0 w-full h-full border-0"
											loading={index === currentVideoIndex
												? "eager"
												: "lazy"}
										></iframe>
									</div>
								{/each}
							</div>

							<!-- Navigation buttons -->
							{#if hasMultipleVideos}
								<button
									type="button"
									onclick={previousVideo}
									class="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all z-10"
									aria-label="Previous video"
								>
									<svg
										class="w-6 h-6"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M15 19l-7-7 7-7"
										></path>
									</svg>
								</button>
								<button
									type="button"
									onclick={nextVideo}
									class="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all z-10"
									aria-label="Next video"
								>
									<svg
										class="w-6 h-6"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M9 5l7 7-7 7"
										></path>
									</svg>
								</button>
							{/if}
						</div>

						<!-- Video info -->
						<div class="p-4">
							{#if displayVideos[currentVideoIndex]}
								<p
									class="text-sm font-semibold text-base-content mb-1"
								>
									{displayVideos[currentVideoIndex].title}
								</p>
								{#if displayVideos[currentVideoIndex].description}
									<p class="text-xs text-base-content/70">
										{displayVideos[currentVideoIndex]
											.description}
									</p>
								{/if}
							{/if}
						</div>

						<!-- Dot indicators -->
						{#if hasMultipleVideos}
							<div
								class="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10 pointer-events-none"
							>
								{#each displayVideos as _, index}
									<button
										type="button"
										onclick={() => goToVideo(index)}
										class="pointer-events-auto w-2 h-2 rounded-full transition-all {index ===
										currentVideoIndex
											? 'bg-white w-6'
											: 'bg-white/50 hover:bg-white/75'}"
										aria-label="Go to video {index + 1}"
									></button>
								{/each}
							</div>
						{/if}
					</div>
				{:else}
					<div class="relative">
						<div
							class="aspect-video bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl flex items-center justify-center overflow-hidden"
						>
							<div class="text-center p-8">
								<svg
									class="w-32 h-32 mx-auto text-amber-600/30 mb-4"
									fill="currentColor"
									viewBox="0 0 20 20"
								>
									<path
										d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z"
									/>
									<path
										d="M3.5 9.289l.348.149a.999.999 0 01.652.92v4.134c0 .266.11.52.304.693l3.124 2.799a1 1 0 001.342 0l3.124-2.799c.194-.174.304-.427.304-.693V10.36c0-.405.259-.764.652-.92l.348-.149-3.78-1.62a1 1 0 00-.788 0L3.5 9.289z"
									/>
								</svg>
								<p class="text-sm text-amber-700/50">
									Illustration Placeholder
								</p>
							</div>
						</div>
					</div>
				{/if}
			</div>

			<!-- Featured Lesson Spotlight -->
			{#if featuredLesson}
				<div
					class="text-white rounded-2xl p-8 shadow-xl featured-lesson-spotlight"
					style="background: linear-gradient(to bottom right, {goalColor}, {goalTintColor}); --goal-color: {goalColor};"
				>
					<h3 class="text-xl font-bold mb-4">
						Featured Lesson: {featuredLesson.art_form}
					</h3>
					<h4 class="text-2xl font-bold mb-4">
						{featuredLesson.title}
					</h4>
					<p class="text-white/90 mb-6 leading-relaxed">
						Dive into Goal {goal.goal_number} through the lens of {featuredLesson.art_form.toLowerCase()}.
						This lesson provides hands-on activities and creative
						exploration designed to bring the concepts to life for
						students.
					</p>
					<div class="flex flex-wrap gap-2 mb-6">
						{#if featuredLesson.duration_min}
							<span
								class="badge bg-white/20 border-white/30 text-white"
							>
								{featuredLesson.duration_min}-{featuredLesson.duration_max ||
									featuredLesson.duration_min} min
							</span>
						{/if}
						{#if featuredLesson.grade_level}
							<span
								class="badge bg-white/20 border-white/30 text-white"
							>
								Grades {featuredLesson.grade_level}
							</span>
						{/if}
						<span
							class="badge bg-white/20 border-white/30 text-white"
						>
							{featuredLesson.art_form}
						</span>
					</div>
					<a
						href="/lessons/{getLessonSlug(featuredLesson)}"
						class="btn btn-white btn-outline hover:bg-white featured-lesson-button"
					>
						Get Started
					</a>
				</div>
			{/if}
		</div>
	</div>
</div>

<style>
	.featured-lesson-spotlight .featured-lesson-button:hover {
		color: var(--goal-color);
	}
</style>

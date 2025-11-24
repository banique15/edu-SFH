<script lang="ts">
	import type { Goal } from "$lib/stores/goals";
	import type { Lesson } from "$lib/stores/lessons";
	import type { GoalStaticContent } from "$lib/data/goal-content";
	import { getLessonSlug } from "$lib/utils/slugify";
	import { getSdgColor, getSdgTintColor } from "$lib/utils/sdg-colors";
	import { formatGradeLevel } from "$lib/utils/grade-formatter";

	interface Props {
		goal: Goal;
		featuredLesson: Lesson | null;
		staticContent?: GoalStaticContent | null;
		videos?: GoalStaticContent["videos"];
		selectedGrade: string;
	}

	let { goal, featuredLesson, staticContent, videos, selectedGrade }: Props = $props();

	// Get goal colors for featured lesson section
	const goalColor = $derived(getSdgColor(goal.goal_number));
	const goalTintColor = $derived(getSdgTintColor(goal.goal_number));

	// Use videos prop if provided, otherwise fall back to staticContent.videos
	const allVideos = $derived(videos ?? staticContent?.videos);

	// Filter video based on selected grade: PRIMARY for 5-8, SECONDARY for 9-12
	const currentVideo = $derived.by(() => {
		if (!allVideos || allVideos.length === 0) return null;
		
		const videoType = selectedGrade === "5-8" ? "PRIMARY" : "SECONDARY";
		return allVideos.find(video => video.title === videoType) || null;
	});

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
		<p class="text-base-content/70 mb-8 w-full md:text-2xl">
			{staticContent?.introDescription ??
				`A curriculum designed for Goal ${goal.goal_number} that inspires the values and competencies behind this mission for grades 5-12.`}
		</p>

		<div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
			<!-- Video display -->
			<div class="relative">
				{#if currentVideo}
					<div
						class="relative bg-white border border-base-200 rounded-2xl shadow-sm overflow-hidden"
					>
						<!-- Video container -->
						<div
							class="relative aspect-video bg-black overflow-hidden"
						>
							<iframe
								title={currentVideo.title}
								src={getYouTubeEmbedUrl(currentVideo.url)}
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								allowfullscreen
								class="absolute inset-0 w-full h-full border-0"
								loading="eager"
							></iframe>
						</div>
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
						{#if formatGradeLevel(featuredLesson.grade_level)}
							<span
								class="badge bg-white/20 border-white/30 text-white"
							>
								{formatGradeLevel(featuredLesson.grade_level)}
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

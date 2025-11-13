<script lang="ts">
	import type { Lesson } from '$lib/stores/lessons';
	import { getLessonSlug } from '$lib/utils/slugify';

	interface Props {
		lesson: Lesson;
	}

	let { lesson }: Props = $props();

	const artFormColors: Record<string, string> = {
		'Musical Exploration': 'badge-primary',
		'Art': 'badge-secondary',
		'Creative Writing': 'badge-accent',
		'Dance/Movement': 'badge-info',
		'Drama': 'badge-error'
	};

	const artFormIcons: Record<string, string> = {
		'Musical Exploration': '🎵',
		'Art': '🎨',
		'Creative Writing': '✍️',
		'Dance/Movement': '💃',
		'Drama': '🎭'
	};
</script>

<div class="card bg-base-100 shadow-lg hover:shadow-xl transition-all duration-300 border border-base-300 hover:border-primary/30">
	<div class="card-body">
		<!-- Icon header -->
		<div class="flex items-start justify-between mb-3">
			<div class="text-4xl">
				{artFormIcons[lesson.art_form] || '📚'}
			</div>
			<div class="badge {artFormColors[lesson.art_form] || 'badge-neutral'} badge-sm">
				{lesson.art_form}
			</div>
		</div>

		<h3 class="card-title text-lg mb-2">
			{lesson.title}
		</h3>

		<p class="text-sm text-base-content/70 mb-4 line-clamp-2">
			Explore this goal through {lesson.art_form.toLowerCase()} activities and creative expression.
		</p>

		<div class="flex flex-wrap gap-2 mb-4">
			{#if lesson.duration_min && lesson.duration_max}
				<span class="badge badge-outline badge-sm">
					{lesson.duration_min}-{lesson.duration_max} min
				</span>
			{/if}
			{#if lesson.grade_level}
				<span class="badge badge-outline badge-sm">
					Grades {lesson.grade_level}
				</span>
			{/if}
		</div>

		<div class="card-actions">
			<a href="/lessons/{getLessonSlug(lesson)}" class="btn btn-primary btn-sm btn-block">
				Get Started
			</a>
		</div>
	</div>
</div>

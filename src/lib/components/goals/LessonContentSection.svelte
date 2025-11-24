<script lang="ts">
	import type { LessonContent } from '$lib/stores/lessons';
	import ReflectionSummary from './ReflectionSummary.svelte';
	import AssessmentSection from './AssessmentSection.svelte';
	import IntroductionSection from './IntroductionSection.svelte';
	import DiscussionSection from './DiscussionSection.svelte';
	import PersonalConnectionSection from './PersonalConnectionSection.svelte';
	import ClosingActivitiesSection from './ClosingActivitiesSection.svelte';
	import FormattedProseSection from './FormattedProseSection.svelte';

	import type { LessonMedia } from '$lib/stores/lessons';

	interface Props {
		section: LessonContent;
		sdgColor: string;
		lessonId: number | string;
		media?: LessonMedia[];
		isCollapsed?: boolean;
		onToggle?: () => void;
	}

	let { section, sdgColor, lessonId, media = [], isCollapsed = false, onToggle }: Props = $props();

	// Normalize section title for matching
	function normalizeTitle(title: string): string {
		return title
			.toLowerCase()
			.replace(/&/g, 'and')
			.replace(/\s+/g, ' ')
			.trim();
	}

	// Determine which component to use based on section title
	const componentType = $derived.by(() => {
		const normalized = normalizeTitle(section.section_title);
		
		// Universal sections (90%+ of lessons)
		if (normalized.includes('reflection') && normalized.includes('summary')) {
			return 'reflection-summary';
		}
		if (normalized === 'assessment') {
			return 'assessment';
		}
		if (normalized === 'introduction') {
			return 'introduction';
		}
		
		// Common sections (5-50% of lessons)
		if (normalized === 'discussion') {
			return 'discussion';
		}
		if (normalized.includes('personal') && normalized.includes('connection')) {
			return 'personal-connection';
		}
		if (normalized.includes('closing') && (normalized.includes('activity') || normalized.includes('option'))) {
			return 'closing-activities';
		}
		
		// Default to formatted prose
		return 'formatted-prose';
	});
</script>

{#if componentType === 'reflection-summary'}
	<ReflectionSummary {section} {sdgColor} {isCollapsed} {onToggle} />
{:else if componentType === 'assessment'}
	<AssessmentSection {section} {sdgColor} {isCollapsed} {onToggle} />
{:else if componentType === 'introduction'}
	<IntroductionSection {section} {sdgColor} media={media} {isCollapsed} {onToggle} />
{:else if componentType === 'discussion'}
	<DiscussionSection {section} {sdgColor} {isCollapsed} {onToggle} />
{:else if componentType === 'personal-connection'}
	<PersonalConnectionSection {section} {sdgColor} {isCollapsed} {onToggle} />
{:else if componentType === 'closing-activities'}
	<ClosingActivitiesSection {section} {sdgColor} {isCollapsed} {onToggle} />
{:else}
	<FormattedProseSection {section} {sdgColor} {isCollapsed} {onToggle} />
{/if}


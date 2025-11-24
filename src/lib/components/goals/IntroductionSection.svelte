<script lang="ts">
	import { parseContent, replaceLinksWithHtml, convertBoldToHtml, extractImageLinks } from '$lib/utils/content-parser';
	import type { LessonContent, LessonMedia } from '$lib/stores/lessons';
	import LessonImage from './LessonImage.svelte';
	import ImageGallery from '../lessons/ImageGallery.svelte';

	interface Props {
		section: LessonContent;
		sdgColor: string;
		media?: LessonMedia[];
		isCollapsed?: boolean;
		onToggle?: () => void;
	}

	let { section, sdgColor, media = [], isCollapsed = false, onToggle }: Props = $props();

	const parsed = $derived(parseContent(section.content));
	const imageLinks = $derived(extractImageLinks(section.content));

	// Match images from database with image links in content
	const matchedImages = $derived.by(() => {
		if (!media || media.length === 0) return [];
		
		const images: Array<{
			url: string;
			title?: string;
			credit?: string;
			alt?: string;
			fallbackUrl?: string;
		}> = [];

		for (const link of imageLinks) {
			// Find matching media item by original_url
			const mediaItem = media.find(m => 
				m.media_type === 'image' && 
				(m.original_url === link.url || m.url === link.url)
			);

			if (mediaItem) {
				images.push({
					url: mediaItem.image_url || mediaItem.url || '',
					title: mediaItem.title || link.title,
					credit: mediaItem.credit || mediaItem.artist || link.credit,
					alt: mediaItem.alt_text || link.title || '',
					fallbackUrl: mediaItem.original_url || mediaItem.url || undefined
				});
			}
		}

		return images;
	});

	// Format text with links and bold, but exclude image links (they'll be displayed separately)
	function formatText(text: string): string {
		// Remove image links from text before formatting
		let cleanedText = text;
		for (const link of imageLinks) {
			const linkPattern = `[${link.text}](${link.url})`;
			cleanedText = cleanedText.replace(linkPattern, '');
		}
		
		let formatted = replaceLinksWithHtml(cleanedText, sdgColor);
		formatted = convertBoldToHtml(formatted);
		return formatted;
	}
</script>

<section class="print:break-inside-avoid">
	<!-- Header -->
	<button
		class="w-full text-left px-0 py-4 flex items-center justify-between border-b border-gray-300 transition-colors print:cursor-default print:pointer-events-none"
		onclick={onToggle}
		aria-expanded={!isCollapsed}
		aria-controls="introduction-content"
	>
		<div class="flex-1">
			<h2
				class="text-xl sm:text-2xl font-normal text-gray-900"
				style="font-family: 'Founders Grotesk', sans-serif; letter-spacing: -0.01em;"
			>
				{section.section_title}
			</h2>
		</div>
		<svg
			class="w-6 h-6 transition-transform flex-shrink-0 print:hidden text-gray-600"
			class:rotate-180={!isCollapsed}
			fill="none"
			stroke="currentColor"
			viewBox="0 0 24 24"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M19 9l-7 7-7-7"
			/>
		</svg>
	</button>

	<!-- Content -->
	{#if !isCollapsed}
		<div id="introduction-content" class="px-0 py-5 print:block">
			<div
				class="prose prose-lg max-w-none"
				style="font-family: 'Founders Grotesk', sans-serif; color: #1F2937; line-height: 1.7;"
			>
				{#each parsed.paragraphs as paragraph}
					<p class="mb-4">
						{@html formatText(paragraph)}
					</p>
				{/each}

				{#each parsed.bulletLists as list}
					<ul class="my-4 space-y-2 pl-6">
						{#each list as item}
							<li class="list-disc">
								{@html formatText(item)}
							</li>
						{/each}
					</ul>
				{/each}
			</div>

			<!-- Display Images -->
			{#if matchedImages.length > 0}
				<div class="mt-6">
					{#if matchedImages.length === 1}
						<LessonImage
							src={matchedImages[0].url}
							title={matchedImages[0].title}
							credit={matchedImages[0].credit}
							alt={matchedImages[0].alt}
							{sdgColor}
							fallbackUrl={matchedImages[0].fallbackUrl}
						/>
					{:else}
						<ImageGallery
							images={matchedImages}
							columns={2}
							gap="1.5rem"
							aspectRatio="16 / 9"
							{sdgColor}
						/>
					{/if}
				</div>
			{/if}
		</div>
	{/if}
</section>

<style>
	@media print {
		.print\:block {
			display: block !important;
		}

		button {
			border-bottom: 2px solid #1F2937 !important;
		}

		h2 {
			color: #1F2937 !important;
		}

		p, ul {
			page-break-inside: avoid;
		}
	}

	:global(.prose p) {
		margin-bottom: 1em;
	}

	:global(.prose ul) {
		list-style-type: disc;
		padding-left: 1.5em;
		margin-bottom: 1em;
	}

	:global(.prose li) {
		margin-bottom: 0.5em;
	}

	:global(.prose strong) {
		font-weight: 600;
	}
</style>


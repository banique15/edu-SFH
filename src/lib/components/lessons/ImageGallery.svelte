<script lang="ts">
	/**
	 * ImageGallery Component
	 * Displays a grid of images with optional captions and attributions
	 * Used primarily for Visual Arts lessons and Creative Writing lessons
	 */

	interface Image {
		url: string;
		title?: string;
		caption?: string;
		artist?: string;
		medium?: string;
		alt?: string;
	}

	interface Props {
		images: Image[];
		columns?: number; // Number of columns in grid (default: 2)
		gap?: string; // Gap between images (default: '1rem')
		aspectRatio?: string; // Image aspect ratio (default: 'auto')
		sdgColor?: string; // For accent colors
	}

	let { images, columns = 2, gap = '1rem', aspectRatio = 'auto', sdgColor = '#339933' }: Props = $props();

	// Calculate grid template columns
	const gridCols = $derived(`repeat(${columns}, 1fr)`);
</script>

<div class="image-gallery" style="gap: {gap};">
	<div class="gallery-grid" style="grid-template-columns: {gridCols}; gap: {gap};">
		{#each images as image, index}
			<div class="gallery-item">
				<div class="image-wrapper" style="aspect-ratio: {aspectRatio};">
					<img
						src={image.url}
						alt={image.alt || image.title || `Image ${index + 1}`}
						class="gallery-image"
						loading="lazy"
					/>
				</div>

				{#if image.title || image.caption || image.artist || image.medium}
					<div class="image-info">
						{#if image.title}
							<h4 class="image-title" style="color: {sdgColor};">
								{image.title}
							</h4>
						{/if}

						{#if image.artist}
							<p class="image-artist">
								by {image.artist}
							</p>
						{/if}

						{#if image.medium}
							<p class="image-medium">
								{image.medium}
							</p>
						{/if}

						{#if image.caption}
							<p class="image-caption">
								{image.caption}
							</p>
						{/if}
					</div>
				{/if}
			</div>
		{/each}
	</div>
</div>

<style>
	.image-gallery {
		width: 100%;
	}

	.gallery-grid {
		display: grid;
		width: 100%;
	}

	.gallery-item {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.image-wrapper {
		width: 100%;
		overflow: hidden;
		border-radius: 8px;
		background-color: #f5f5f5;
	}

	.gallery-image {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
		transition: transform 0.3s ease;
	}

	.gallery-item:hover .gallery-image {
		transform: scale(1.02);
	}

	.image-info {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}

	.image-title {
		font-family: 'Founders Grotesk', sans-serif;
		font-size: 18px;
		font-weight: 600;
		line-height: 1.2;
		margin: 0;
	}

	.image-artist {
		font-family: 'Founders Grotesk', sans-serif;
		font-size: 14px;
		font-style: italic;
		color: #6b7280;
		margin: 0;
	}

	.image-medium {
		font-family: 'Founders Grotesk', sans-serif;
		font-size: 14px;
		color: #9ca3af;
		margin: 0;
	}

	.image-caption {
		font-family: 'Founders Grotesk', sans-serif;
		font-size: 14px;
		line-height: 1.4;
		color: #4b5563;
		margin: 0;
		margin-top: 0.25rem;
	}

	/* Responsive adjustments */
	@media (max-width: 768px) {
		.gallery-grid {
			grid-template-columns: 1fr !important;
		}
	}

	/* Print styles */
	@media print {
		.gallery-grid {
			break-inside: avoid;
			page-break-inside: avoid;
		}

		.gallery-item {
			break-inside: avoid;
			page-break-inside: avoid;
		}

		.gallery-image {
			max-height: 400px;
		}
	}
</style>

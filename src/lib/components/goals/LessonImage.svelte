<script lang="ts">
	interface Props {
		src: string;
		title?: string;
		credit?: string;
		caption?: string;
		alt?: string;
		sdgColor?: string;
		fallbackUrl?: string;
	}

	let { src, title, credit, caption, alt, sdgColor = '#339933', fallbackUrl }: Props = $props();

	let imageError = $state(false);
	let imageLoaded = $state(false);

	function handleError() {
		if (fallbackUrl && !imageError) {
			imageError = true;
		}
	}

	function handleLoad() {
		imageLoaded = true;
	}

	const displaySrc = $derived(imageError && fallbackUrl ? fallbackUrl : src);
	const displayAlt = $derived(alt || title || 'Lesson image');
</script>

<div class="lesson-image-container">
	<div class="image-wrapper">
		<img
			src={displaySrc}
			alt={displayAlt}
			class="lesson-image"
			class:loaded={imageLoaded}
			onerror={handleError}
			onload={handleLoad}
			loading="lazy"
		/>
		{#if !imageLoaded && !imageError}
			<div class="image-placeholder">
				<svg
					class="loading-spinner"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
				>
					<circle cx="12" cy="12" r="10" opacity="0.25" />
					<path d="M12 2 A10 10 0 0 1 22 12" opacity="0.75" />
				</svg>
			</div>
		{/if}
	</div>

	{#if title || credit || caption}
		<div class="image-info">
			{#if title}
				<h4
					class="image-title"
					style="color: {sdgColor};"
				>
					{title}
				</h4>
			{/if}

			{#if credit}
				<p class="image-credit">
					Credit: {credit}
				</p>
			{/if}

			{#if caption}
				<p class="image-caption">
					{caption}
				</p>
			{/if}
		</div>
	{/if}
</div>

<style>
	.lesson-image-container {
		width: 100%;
		margin: 1.5rem 0;
	}

	.image-wrapper {
		position: relative;
		width: 100%;
		border-radius: 8px;
		overflow: hidden;
		background-color: #f5f5f5;
		aspect-ratio: 16 / 9;
	}

	.lesson-image {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
		opacity: 0;
		transition: opacity 0.3s ease;
	}

	.lesson-image.loaded {
		opacity: 1;
	}

	.image-placeholder {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #f5f5f5;
	}

	.loading-spinner {
		animation: spin 1s linear infinite;
		color: #9ca3af;
	}

	@keyframes spin {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}

	.image-info {
		margin-top: 0.75rem;
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}

	.image-title {
		font-family: 'Founders Grotesk', sans-serif;
		font-size: 16px;
		font-weight: 600;
		line-height: 1.3;
		margin: 0;
	}

	.image-credit {
		font-family: 'Founders Grotesk', sans-serif;
		font-size: 13px;
		font-style: italic;
		color: #6b7280;
		margin: 0;
	}

	.image-caption {
		font-family: 'Founders Grotesk', sans-serif;
		font-size: 14px;
		line-height: 1.5;
		color: #4b5563;
		margin: 0;
		margin-top: 0.25rem;
	}

	/* Responsive */
	@media (max-width: 768px) {
		.image-wrapper {
			aspect-ratio: 4 / 3;
		}
	}

	/* Print styles */
	@media print {
		.lesson-image-container {
			page-break-inside: avoid;
			margin: 1rem 0;
		}

		.image-wrapper {
			border: 1px solid #e5e7eb;
		}

		.image-placeholder {
			display: none;
		}
	}
</style>


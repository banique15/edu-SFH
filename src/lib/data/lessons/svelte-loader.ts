import type { Component } from 'svelte';
import { slugify } from '$lib/utils/slugify';

/**
 * Load a lesson Svelte component by slug
 * Returns the component or null if not found
 * Tries multiple slug variations to handle mismatches between database slugs and file names
 */
export async function loadLessonComponent(slug: string, lessonTitle?: string): Promise<Component | null> {
	// Try the exact slug first
	try {
		const module = await import(`$lib/lessons/${slug}.svelte`);
		return module.default;
	} catch (error) {
		// If that fails and we have a title, try slugifying the title
		if (lessonTitle) {
			const titleSlug = slugify(lessonTitle);
			if (titleSlug !== slug) {
				try {
					const module = await import(`$lib/lessons/${titleSlug}.svelte`);
					return module.default;
				} catch (err) {
					// Continue to next attempt
				}
			}
		}
		
		// Try common variations
		const variations = [
			slug.replace(/-/g, ''),
			slug.replace(/^goal\d+-/, ''), // Remove goal prefix if present
			slug.replace(/^a-/, ''), // Remove leading "a-"
			slug.replace(/^the-/, ''), // Remove leading "the-"
		];
		
		for (const variation of variations) {
			if (variation !== slug && variation.length > 0) {
				try {
					const module = await import(`$lib/lessons/${variation}.svelte`);
					return module.default;
				} catch (err) {
					// Continue to next variation
				}
			}
		}
		
		console.log(`Failed to load lesson component for slug "${slug}" (tried ${variations.length + 2} variations)`);
		return null;
	}
}

/**
 * Get lesson slug from lesson title
 */
export function getLessonSlugFromTitle(title: string): string {
	return slugify(title);
}


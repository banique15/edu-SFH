/**
 * Art Form Utilities
 * Helper functions and constants for working with lesson art forms
 */

// Art form type definition
export type ArtForm =
	| 'Musical Exploration'
	| 'Art'
	| 'Creative Writing'
	| 'Dance/Movement'
	| 'Drama';

/**
 * Homepage subject colors (for reference)
 * These match the colors used in the Subjects section on the homepage
 */
export const ART_FORM_COLORS: Record<string, string> = {
	'Creative Writing': '#349552',    // Green
	'Art': '#19486A',                 // Dark Blue
	'Visual Art': '#19486A',          // Dark Blue (alternate name)
	'Musical Exploration': '#FF3A21', // Orange-Red
	'Music': '#FF3A21',               // Orange-Red (alternate name)
	'Dance/Movement': '#0A97D9',      // Cyan/Light Blue
	'Dance & Movement': '#0A97D9',    // Cyan/Light Blue (alternate name)
	'Drama': '#DD1367'                // Magenta/Pink
};

/**
 * Get the art form color
 */
export function getArtFormColor(artForm: string): string {
	return ART_FORM_COLORS[artForm] || '#349552'; // Fallback to Creative Writing green
}

/**
 * Normalize art form name for consistency
 * Maps various art form names to their canonical form
 */
export function normalizeArtForm(artForm: string): ArtForm {
	const normalized = artForm.toLowerCase().trim();

	if (normalized.includes('music')) return 'Musical Exploration';
	if (normalized.includes('art') || normalized.includes('visual')) return 'Art';
	if (normalized.includes('writing')) return 'Creative Writing';
	if (normalized.includes('dance') || normalized.includes('movement')) return 'Dance/Movement';
	if (normalized.includes('drama')) return 'Drama';

	// Default fallback
	return artForm as ArtForm;
}

/**
 * Get display name for art form (for UI)
 */
export function getArtFormDisplayName(artForm: string): string {
	const displayNames: Record<string, string> = {
		'Musical Exploration': 'Music',
		'Art': 'Visual Art',
		'Creative Writing': 'Creative Writing',
		'Dance/Movement': 'Dance & Movement',
		'Drama': 'Drama'
	};

	return displayNames[artForm] || artForm;
}

/**
 * Get art form icon/emoji
 */
export function getArtFormIcon(artForm: string): string {
	const icons: Record<string, string> = {
		'Musical Exploration': '🎵',
		'Music': '🎵',
		'Art': '🎨',
		'Visual Art': '🎨',
		'Creative Writing': '✍️',
		'Dance/Movement': '💃',
		'Dance & Movement': '💃',
		'Drama': '🎭'
	};

	return icons[artForm] || '📚';
}

/**
 * Check if art form has image gallery support
 */
export function hasImageGallery(artForm: string): boolean {
	const normalized = normalizeArtForm(artForm);
	return normalized === 'Art' || normalized === 'Creative Writing';
}

/**
 * Check if art form uses script/dialogue formatting
 */
export function hasScriptFormat(artForm: string): boolean {
	const normalized = normalizeArtForm(artForm);
	return normalized === 'Drama';
}

/**
 * Get art form-specific section title prefix
 * Used for naming conventions in lessons
 */
export function getArtFormSectionPrefix(artForm: string): string {
	const prefixes: Record<string, string> = {
		'Musical Exploration': 'Unlocking',
		'Art': 'Exploring',
		'Creative Writing': 'Writing',
		'Dance/Movement': 'Moving',
		'Drama': 'Performing'
	};

	const normalized = normalizeArtForm(artForm);
	return prefixes[normalized] || 'Activity';
}

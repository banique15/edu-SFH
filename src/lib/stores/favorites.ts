import { writable } from 'svelte/store';
import { browser } from '$app/environment';

const STORAGE_KEY = 'sfh-edu-favorites';

/**
 * Load favorites from localStorage
 */
function loadFavorites(): number[] {
	if (!browser) return [];

	try {
		const stored = localStorage.getItem(STORAGE_KEY);
		return stored ? JSON.parse(stored) : [];
	} catch (error) {
		console.error('Error loading favorites from localStorage:', error);
		return [];
	}
}

/**
 * Save favorites to localStorage
 */
function saveFavorites(favorites: number[]): void {
	if (!browser) return;

	try {
		localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
	} catch (error) {
		console.error('Error saving favorites to localStorage:', error);
	}
}

/**
 * Create the favorites store
 */
function createFavoritesStore() {
	const { subscribe, set, update } = writable<number[]>(loadFavorites());

	return {
		subscribe,
		/**
		 * Toggle a lesson as favorite
		 */
		toggle: (lessonId: number) => {
			update((favorites) => {
				const newFavorites = favorites.includes(lessonId)
					? favorites.filter((id) => id !== lessonId)
					: [...favorites, lessonId];

				saveFavorites(newFavorites);
				return newFavorites;
			});
		},
		/**
		 * Check if a lesson is favorited
		 */
		isFavorite: (lessonId: number, favorites: number[]): boolean => {
			return favorites.includes(lessonId);
		},
		/**
		 * Add a lesson to favorites
		 */
		add: (lessonId: number) => {
			update((favorites) => {
				if (!favorites.includes(lessonId)) {
					const newFavorites = [...favorites, lessonId];
					saveFavorites(newFavorites);
					return newFavorites;
				}
				return favorites;
			});
		},
		/**
		 * Remove a lesson from favorites
		 */
		remove: (lessonId: number) => {
			update((favorites) => {
				const newFavorites = favorites.filter((id) => id !== lessonId);
				saveFavorites(newFavorites);
				return newFavorites;
			});
		},
		/**
		 * Clear all favorites
		 */
		clear: () => {
			set([]);
			saveFavorites([]);
		},
		/**
		 * Initialize/reload from localStorage
		 */
		initialize: () => {
			set(loadFavorites());
		}
	};
}

export const favoritesStore = createFavoritesStore();

// @ts-nocheck
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = async ({ params }: Parameters<PageLoad>[0]) => {
	const { slug } = params;

	// Map slugs to art form names and configurations
	const artFormConfig: Record<string, { name: string; bgColor: string; description: string; imageUrl: string }> = {
		'creative-writing': {
			name: 'Creative Writing',
			bgColor: '#349552', // Green - matches homepage
			description: 'Explore storytelling, poetry, and written expression through SDG-themed lessons',
			imageUrl: '/Subject Pages/CreativeWriting-Desktop-Hero.png'
		},
		'music': {
			name: 'Music',
			bgColor: '#FF3A21', // Red/Orange - matches homepage
			description: 'Discover music, rhythm, and sound as tools for learning and social change',
			imageUrl: '/Subject Pages/Music-Desktop-Hero.png'
		},
		'visual-arts': {
			name: 'Visual Art',
			bgColor: '#19486A', // Blue - matches homepage
			description: 'Create visual art that explores global issues and sustainable development',
			imageUrl: '/Subject Pages/VisualArt-Desktop-Hero.png'
		},
		'dance': {
			name: 'Dance & Movement',
			bgColor: '#0A97D9', // Light Blue - matches homepage
			description: 'Express ideas through movement and choreography inspired by the SDGs',
			imageUrl: '/Subject Pages/DanceMovement-Desktop-Hero.png'
		},
		'drama': {
			name: 'Drama',
			bgColor: '#DD1367', // Pink/Magenta - matches homepage
			description: 'Use theater and performance to explore social issues and global goals',
			imageUrl: '/Subject Pages/Drama-Desktop-Hero.png'
		}
	};

	const config = artFormConfig[slug];

	if (!config) {
		throw error(404, 'Subject not found');
	}

	return {
		slug,
		artForm: config.name,
		bgColor: config.bgColor,
		description: config.description,
		imageUrl: config.imageUrl
	};
};

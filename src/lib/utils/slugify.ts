/**
 * Convert a string to a URL-friendly slug
 * Example: "No Poverty" -> "no-poverty"
 */
export function slugify(text: string): string {
	return text
		.toLowerCase()
		.trim()
		.replace(/[^\w\s-]/g, '') // Remove non-word chars (except spaces and hyphens)
		.replace(/[\s_]+/g, '-') // Replace spaces and underscores with hyphens
		.replace(/--+/g, '-') // Replace multiple hyphens with single hyphen
		.replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
}

/**
 * Get a slug from a goal object
 */
export function getGoalSlug(goal: { title: string; goal_number?: number }): string {
	return slugify(goal.title);
}

/**
 * Get a slug from a lesson object
 */
export function getLessonSlug(lesson: { title: string; id?: number }): string {
	return slugify(lesson.title);
}

/**
 * Get a slug from a goal title and number (for cases where we just have the number)
 * This is a mapping of the 17 UN SDG goal titles
 */
const SDG_TITLES: Record<number, string> = {
	1: 'No Poverty',
	2: 'Zero Hunger',
	3: 'Good Health and Well-being',
	4: 'Quality Education',
	5: 'Gender Equality',
	6: 'Clean Water and Sanitation',
	7: 'Affordable and Clean Energy',
	8: 'Decent Work and Economic Growth',
	9: 'Industry Innovation and Infrastructure',
	10: 'Reduced Inequalities',
	11: 'Sustainable Cities and Communities',
	12: 'Responsible Consumption and Production',
	13: 'Climate Action',
	14: 'Life Below Water',
	15: 'Life on Land',
	16: 'Peace Justice and Strong Institutions',
	17: 'Partnerships for the Goals'
};

export function getSlugFromGoalNumber(goalNumber: number): string {
	const title = SDG_TITLES[goalNumber];
	return title ? slugify(title) : `goal-${goalNumber}`;
}

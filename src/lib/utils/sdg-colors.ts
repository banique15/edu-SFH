/**
 * Official UN Sustainable Development Goals Colors
 * Source: https://www.un.org/sustainabledevelopment/
 */

export const SDG_COLORS: Record<number, string> = {
	1: '#C71B30', // No Poverty (custom brand red)
	2: '#dda63a', // Zero Hunger
	3: '#4c9f38', // Good Health and Well-being
	4: '#c5192d', // Quality Education
	5: '#ff3a21', // Gender Equality
	6: '#26bde2', // Clean Water and Sanitation
	7: '#fcc30b', // Affordable and Clean Energy
	8: '#a21942', // Decent Work and Economic Growth
	9: '#fd6925', // Industry, Innovation and Infrastructure
	10: '#dd1367', // Reduced Inequalities
	11: '#fd9d24', // Sustainable Cities and Communities
	12: '#bf8b2e', // Responsible Consumption and Production
	13: '#3f7e44', // Climate Action
	14: '#0a97d9', // Life Below Water
	15: '#56c02b', // Life on Land
	16: '#00689d', // Peace, Justice and Strong Institutions
	17: '#19486a' // Partnerships for the Goals
};

/**
 * Get the SDG color for a specific goal number
 */
export function getSdgColor(goalNumber: number): string {
	return SDG_COLORS[goalNumber] || '#339933'; // Fallback to primary green
}

/**
 * Get text color (white or black) based on SDG background color for optimal contrast
 */
export function getSdgTextColor(goalNumber: number): string {
	// Goals with light backgrounds that need dark text
	const lightBackgrounds = [2, 6, 7, 11, 12, 15];
	return lightBackgrounds.includes(goalNumber) ? '#000000' : '#ffffff';
}

/**
 * SDG Tint Colors (darker shades for pill badges, etc.)
 */
export const SDG_TINT_COLORS: Record<number, string> = {
	1: '#9a1829', // No Poverty
	2: '#9a7428', // Zero Hunger
	3: '#356f27', // Good Health and Well-being
	4: '#850010', // Quality Education
	5: '#b32816', // Gender Equality
	6: '#1a859e', // Clean Water and Sanitation
	7: '#b18907', // Affordable and Clean Energy
	8: '#71112e', // Decent Work and Economic Growth
	9: '#b24a19', // Industry, Innovation and Infrastructure
	10: '#9c0d48', // Reduced Inequalities
	11: '#b16e19', // Sustainable Cities and Communities
	12: '#856120', // Responsible Consumption and Production
	13: '#2c5930', // Climate Action
	14: '#076a98', // Life Below Water
	15: '#3c861e', // Life on Land
	16: '#00486e', // Peace, Justice and Strong Institutions
	17: '#113249' // Partnerships for the Goals
};

/**
 * Get the SDG tint color (darker shade) for a specific goal number
 */
export function getSdgTintColor(goalNumber: number): string {
	return SDG_TINT_COLORS[goalNumber] || '#265926'; // Fallback to darker green
}

/**
 * SDG Goal names for reference
 */
export const SDG_NAMES: Record<number, string> = {
	1: 'No Poverty',
	2: 'Zero Hunger',
	3: 'Good Health and Well-being',
	4: 'Quality Education',
	5: 'Gender Equality',
	6: 'Clean Water and Sanitation',
	7: 'Affordable and Clean Energy',
	8: 'Decent Work and Economic Growth',
	9: 'Industry, Innovation and Infrastructure',
	10: 'Reduced Inequalities',
	11: 'Sustainable Cities and Communities',
	12: 'Responsible Consumption and Production',
	13: 'Climate Action',
	14: 'Life Below Water',
	15: 'Life on Land',
	16: 'Peace, Justice and Strong Institutions',
	17: 'Partnerships for the Goals'
};

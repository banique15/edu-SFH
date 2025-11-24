/**
 * Format grade level string to display as grouped ranges
 * Converts individual grades (e.g., "5,6,7,8") to grouped format (e.g., "Grades 5-8")
 * 
 * @param gradeLevel - Grade level string from database (e.g., "5,6,7,8" or "9,10,11,12" or "5,6,7,8,9,10,11,12")
 * @returns Formatted grade level string (e.g., "Grades 5-8", "Grades 9-12", "Grades 5-12")
 */
export function formatGradeLevel(gradeLevel: string | null | undefined): string | null {
	if (!gradeLevel) return null;
	
	// If it's already a range string (e.g. "5-8"), return it with "Grades" prefix
	if (gradeLevel.includes('-') && !gradeLevel.includes(',')) {
		return `Grades ${gradeLevel}`;
	}
	
	// Parse individual grades
	const parts = gradeLevel.split(',').map(g => g.trim()).filter(g => g);
	const gradeSet = new Set(parts);
	
	// Check for all grades 5-12
	if (gradeSet.has('5') && gradeSet.has('6') && gradeSet.has('7') && gradeSet.has('8') &&
	    gradeSet.has('9') && gradeSet.has('10') && gradeSet.has('11') && gradeSet.has('12') &&
	    gradeSet.size === 8) {
		return 'Grades 5-12';
	}
	
	// Check for grades 5-8
	if (gradeSet.has('5') && gradeSet.has('6') && gradeSet.has('7') && gradeSet.has('8') &&
	    gradeSet.size === 4) {
		return 'Grades 5-8';
	}
	
	// Check for grades 9-12
	if (gradeSet.has('9') && gradeSet.has('10') && gradeSet.has('11') && gradeSet.has('12') &&
	    gradeSet.size === 4) {
		return 'Grades 9-12';
	}
	
	// If it's already formatted correctly, return as is
	if (gradeLevel.toLowerCase().includes('grades')) {
		return gradeLevel;
	}
	
	// Fallback: return as is (shouldn't happen in normal cases)
	return `Grades ${gradeLevel}`;
}


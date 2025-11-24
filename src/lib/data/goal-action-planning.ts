import { readFileSync, existsSync } from 'fs';
import { join } from 'path';

export interface ActionPlanningSection {
	title: string;
	description?: string;
	items: string[];
}

export interface ActionPlanning {
	statement: string;
	sections: ActionPlanningSection[];
	grade_level: string;
}

/**
 * Parse action planning content from a goal markdown file
 */
function parseActionPlanningFromMarkdown(filePath: string, gradeLevel: string): ActionPlanning | null {
	if (!existsSync(filePath)) {
		return null;
	}

	try {
		const content = readFileSync(filePath, 'utf-8');
		
		// Extract Action Planning section - find everything from ## Action Planning to next ## or end
		const apStartIndex = content.indexOf('## Action Planning');
		if (apStartIndex === -1) {
			return null;
		}
		
		// Find content after "## Action Planning" heading
		const afterHeading = content.substring(apStartIndex + '## Action Planning'.length);
		
		// Find the start of the next ## section (level 2 heading, not ####)
		// Match \n## followed by space to ensure it's a level 2 heading
		const nextSectionMatch = afterHeading.match(/\n##\s/);
		const actionPlanningContent = nextSectionMatch 
			? afterHeading.substring(0, nextSectionMatch.index).trim()
			: afterHeading.trim();
		
		// Extract statement (first paragraph before any ### sections)
		const statementMatch = actionPlanningContent.match(/^(.+?)(?=###|$)/s);
		const statement = statementMatch ? statementMatch[1].trim() : '';
		
		const sections: ActionPlanningSection[] = [];
		
		// Check for "Small, Everyday Actions to Inspire Change" section
		const everydayActionsMatch = actionPlanningContent.match(/### Small, Everyday Actions to Inspire Change\s+(.*?)(?=### Holistic Actions|###|$)/s);
		if (everydayActionsMatch) {
			const everydayContent = everydayActionsMatch[1].trim();
			const items: string[] = [];
			
			// Extract all top-level bullet points (not nested)
			const lines = everydayContent.split('\n');
			let currentItem = '';
			for (const line of lines) {
				if (line.match(/^-\s+/)) {
					if (currentItem) {
						items.push(currentItem.trim());
					}
					currentItem = line.replace(/^-\s+/, '').trim();
				} else if (line.trim() && currentItem) {
					currentItem += ' ' + line.trim();
				}
			}
			if (currentItem) {
				items.push(currentItem.trim());
			}
			
			sections.push({
				title: 'Small, Everyday Actions to Inspire Change',
				items
			});
		}
		
		// Check for "Taking Action Beyond the Classroom" section (for grades 5-8)
		const takingActionMatch = actionPlanningContent.match(/### Taking Action Beyond the Classroom\s+(.*?)(?=###|$)/s);
		if (takingActionMatch) {
			const takingActionContent = takingActionMatch[1].trim();
			
			// Extract description (text before first bullet)
			const descriptionMatch = takingActionContent.match(/^(.+?)(?=^-|$)/s);
			const description = descriptionMatch ? descriptionMatch[1].trim() : undefined;
			
			const items: string[] = [];
			// Extract all top-level bullet points with their nested concrete actions
			const lines = takingActionContent.split('\n');
			let currentItem = '';
			let inNested = false;
			
			for (let i = 0; i < lines.length; i++) {
				const line = lines[i];
				const isTopLevelBullet = line.match(/^-\s+/);
				const isNestedBullet = line.match(/^\s{2,}-\s+/);
				
				if (isTopLevelBullet && !isNestedBullet) {
					if (currentItem) {
						items.push(currentItem.trim());
					}
					currentItem = line.replace(/^-\s+/, '').trim();
					inNested = false;
				} else if (isNestedBullet) {
					// This is a nested bullet (concrete action)
					const nestedContent = line.replace(/^\s+-\s+/, '').trim();
					if (currentItem) {
						currentItem += '\n  - ' + nestedContent;
					}
					inNested = true;
				} else if (line.trim() && currentItem && !isTopLevelBullet) {
					// Continuation of current item (either main or nested)
					if (inNested) {
						currentItem += ' ' + line.trim();
					} else {
						currentItem += ' ' + line.trim();
					}
				}
			}
			if (currentItem) {
				items.push(currentItem.trim());
			}
			
			sections.push({
				title: 'Taking Action Beyond the Classroom',
				description,
				items
			});
		}
		
		// Check for "Holistic Actions" section
		const holisticMatch = actionPlanningContent.match(/### Holistic Actions\s+(.*?)(?=###|$)/s);
		if (holisticMatch) {
			const holisticContent = holisticMatch[1].trim();
			
			// Extract subsections (#### headings)
			const subsectionRegex = /####\s+(.+?)\n(.*?)(?=####|$)/gs;
			let subsectionMatch;
			
			while ((subsectionMatch = subsectionRegex.exec(holisticContent)) !== null) {
				const subsectionTitle = subsectionMatch[1].trim();
				const subsectionContent = subsectionMatch[2].trim();
				
				const items: string[] = [];
				// Extract all top-level bullet points
				const lines = subsectionContent.split('\n');
				let currentItem = '';
				
				for (const line of lines) {
					if (line.match(/^-\s+/)) {
						if (currentItem) {
							items.push(currentItem.trim());
						}
						currentItem = line.replace(/^-\s+/, '').trim();
					} else if (line.trim() && currentItem) {
						currentItem += ' ' + line.trim();
					}
				}
				if (currentItem) {
					items.push(currentItem.trim());
				}
				
				sections.push({
					title: subsectionTitle,
					items
				});
			}
		}
		
		return {
			statement,
			sections,
			grade_level: gradeLevel
		};
	} catch (error) {
		console.error(`Error parsing action planning from ${filePath}:`, error);
		return null;
	}
}

/**
 * Get action planning for a specific goal and grade level
 */
export function getActionPlanningFromMarkdown(goalNumber: number, gradeLevel: string): ActionPlanning | null {
	// Determine the correct path - process.cwd() might be at project root or apps/edu
	const cwd = process.cwd();
	let goalsDir: string;
	
	// Check if we're in apps/edu directory
	if (cwd.endsWith('apps/edu')) {
		goalsDir = join(cwd, 'goals');
	} else {
		// We're at project root
		goalsDir = join(cwd, 'apps/edu/goals');
	}
	
	const fileName = `goal${goalNumber}-grades-${gradeLevel}.md`;
	const filePath = join(goalsDir, fileName);
	
	if (!existsSync(filePath)) {
		console.error(`Goal file not found: ${filePath} (cwd: ${cwd})`);
		return null;
	}
	
	return parseActionPlanningFromMarkdown(filePath, gradeLevel);
}

/**
 * Get action planning for all grade levels of a goal
 */
export function getAllActionPlanningFromMarkdown(goalNumber: number): ActionPlanning[] {
	const result: ActionPlanning[] = [];
	
	for (const gradeLevel of ['5-8', '9-12']) {
		const planning = getActionPlanningFromMarkdown(goalNumber, gradeLevel);
		if (planning) {
			result.push(planning);
		}
	}
	
	return result;
}


/**
 * Content Parser Utility
 * Parses markdown-like content from lesson sections into structured data
 */

export interface ParsedLink {
	text: string;
	url: string;
}

export interface ParsedImageLink {
	text: string;
	url: string;
	title?: string;
	credit?: string;
	context?: string;
}

export interface ParsedContent {
	paragraphs: string[];
	bulletLists: string[][];
	links: ParsedLink[];
	pattern: 'list' | 'paragraph' | 'mixed';
}

/**
 * Parse markdown links from content
 * Supports format: [text](url)
 */
export function parseLinks(content: string): ParsedLink[] {
	const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
	const links: ParsedLink[] = [];
	let match;

	while ((match = linkRegex.exec(content)) !== null) {
		links.push({
			text: match[1],
			url: match[2]
		});
	}

	return links;
}

/**
 * Replace markdown links with HTML anchor tags
 */
export function replaceLinksWithHtml(content: string, sdgColor?: string): string {
	const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
	const colorStyle = sdgColor ? `style="color: ${sdgColor};"` : '';
	
	return content.replace(linkRegex, (match, text, url) => {
		return `<a href="${url}" target="_blank" rel="noopener noreferrer" ${colorStyle} class="hover:underline">${text}</a>`;
	});
}

/**
 * Parse bullet point lists from content
 * Supports formats: *, -, +, and numbered lists
 */
export function parseBulletList(content: string): string[] {
	const lines = content.split('\n');
	const items: string[] = [];
	
	for (const line of lines) {
		const trimmed = line.trim();
		// Match bullet points: *, -, +, or numbered lists
		const bulletMatch = trimmed.match(/^[\*\-\+]\s+(.+)$/);
		const numberedMatch = trimmed.match(/^\d+\.\s+(.+)$/);
		
		if (bulletMatch) {
			items.push(bulletMatch[1].trim());
		} else if (numberedMatch) {
			items.push(numberedMatch[1].trim());
		}
	}
	
	return items;
}

/**
 * Parse paragraphs from content
 * Splits content into paragraphs (separated by blank lines)
 */
export function parseParagraphs(content: string): string[] {
	// Split by double newlines or single newline after a period/question mark/exclamation
	const paragraphs = content
		.split(/\n\s*\n/)
		.map(p => p.trim())
		.filter(p => p.length > 0 && !p.match(/^[\*\-\+]\s/) && !p.match(/^\d+\.\s/));
	
	return paragraphs;
}

/**
 * Detect the pattern of content
 */
export function detectSectionPattern(content: string): 'list' | 'paragraph' | 'mixed' {
	const lines = content.split('\n').filter(l => l.trim());
	const bulletCount = lines.filter(l => l.trim().match(/^[\*\-\+]\s/) || l.trim().match(/^\d+\.\s/)).length;
	const paragraphCount = lines.filter(l => l.trim().length > 0 && !l.trim().match(/^[\*\-\+]\s/) && !l.trim().match(/^\d+\.\s/)).length;
	
	if (bulletCount > paragraphCount * 2) {
		return 'list';
	} else if (paragraphCount > bulletCount * 2) {
		return 'paragraph';
	} else {
		return 'mixed';
	}
}

/**
 * Parse content into structured format
 */
export function parseContent(content: string): ParsedContent {
	const pattern = detectSectionPattern(content);
	const paragraphs = parseParagraphs(content);
	const bulletLists: string[][] = [];
	const links = parseLinks(content);
	
	// Extract bullet lists (group consecutive bullet points)
	const lines = content.split('\n');
	let currentList: string[] = [];
	
	for (const line of lines) {
		const trimmed = line.trim();
		const bulletMatch = trimmed.match(/^[\*\-\+]\s+(.+)$/);
		const numberedMatch = trimmed.match(/^\d+\.\s+(.+)$/);
		
		if (bulletMatch || numberedMatch) {
			currentList.push((bulletMatch?.[1] || numberedMatch?.[1] || '').trim());
		} else {
			if (currentList.length > 0) {
				bulletLists.push(currentList);
				currentList = [];
			}
		}
	}
	
	if (currentList.length > 0) {
		bulletLists.push(currentList);
	}
	
	return {
		paragraphs,
		bulletLists,
		links,
		pattern
	};
}

/**
 * Extract opening statement from Reflection and Summary content
 * Returns the paragraph before bullet points
 */
export function extractOpeningStatement(content: string): string {
	const lines = content.split('\n');
	const openingLines: string[] = [];
	
	for (const line of lines) {
		const trimmed = line.trim();
		// Stop at first bullet point or empty line before bullets
		if (trimmed.match(/^[\*\-\+]\s/) || trimmed.match(/^\d+\.\s/)) {
			break;
		}
		if (trimmed.length > 0) {
			openingLines.push(trimmed);
		}
	}
	
	return openingLines.join(' ').trim();
}

/**
 * Extract questions from content (for Reflection, Discussion, etc.)
 */
export function extractQuestions(content: string): string[] {
	return parseBulletList(content);
}

/**
 * Extract closing statement from Discussion content
 * Returns text after the bullet points
 */
export function extractClosingStatement(content: string): string {
	const lines = content.split('\n');
	let foundBullets = false;
	let foundEndOfBullets = false;
	const closingLines: string[] = [];
	
	for (const line of lines) {
		const trimmed = line.trim();
		const isBullet = trimmed.match(/^[\*\-\+]\s/) || trimmed.match(/^\d+\.\s/);
		
		if (isBullet) {
			foundBullets = true;
			foundEndOfBullets = false;
			continue;
		}
		
		// After finding bullets, look for first non-empty line that's not a bullet
		if (foundBullets && !foundEndOfBullets) {
			if (trimmed.length > 0) {
				foundEndOfBullets = true;
				closingLines.push(trimmed);
			}
		} else if (foundEndOfBullets && trimmed.length > 0) {
			// Continue collecting closing statement
			closingLines.push(trimmed);
		}
	}
	
	return closingLines.join(' ').trim();
}

/**
 * Extract activities from Closing Activity Options
 * Each activity has a bold header followed by description
 */
export function extractActivities(content: string): Array<{ title: string; description: string }> {
	const activities: Array<{ title: string; description: string }> = [];
	const lines = content.split('\n');
	
	let currentActivity: { title: string; description: string } | null = null;
	
	for (const line of lines) {
		// Remove tabs and trim
		const trimmed = line.replace(/^\t+/, '').trim();
		// Match bold headers: **Title:** or **Title** (may have tabs before)
		const boldMatch = trimmed.match(/^\*\*([^*]+)\*\*:?\s*(.*)$/);
		
		if (boldMatch) {
			// Save previous activity if exists
			if (currentActivity) {
				const desc = currentActivity.description.trim();
				if (desc || currentActivity.title.trim()) {
					activities.push(currentActivity);
				}
			}
			// Start new activity
			currentActivity = {
				title: boldMatch[1].trim(),
				description: boldMatch[2].trim()
			};
		} else if (currentActivity && trimmed.length > 0) {
			// Continue description (skip if it's another bold header that didn't match)
			if (!trimmed.match(/^\*\*/)) {
				if (currentActivity.description) {
					currentActivity.description += ' ' + trimmed;
				} else {
					currentActivity.description = trimmed;
				}
			}
		}
	}
	
	// Add last activity
	if (currentActivity) {
		const desc = currentActivity.description.trim();
		if (desc || currentActivity.title.trim()) {
			activities.push(currentActivity);
		}
	}
	
	return activities;
}

/**
 * Convert markdown bold to HTML
 */
export function convertBoldToHtml(content: string): string {
	return content.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
}

/**
 * Extract image links from content
 * Returns image links with parsed metadata
 */
export function extractImageLinks(content: string): ParsedImageLink[] {
	const links = parseLinks(content);
	const imageLinks: ParsedImageLink[] = [];
	
	// Check if URL is an image
	function isImageUrl(url: string): boolean {
		const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg', '.bmp'];
		const urlLower = url.toLowerCase();
		return imageExtensions.some(ext => urlLower.includes(ext)) || 
			   urlLower.match(/\.(jpg|jpeg|png|gif|webp|svg|bmp)(\?|$)/i);
	}
	
	for (const link of links) {
		if (isImageUrl(link.url)) {
			// Parse title and credit from link text
			// Format: [Title, Credit Source](url) or [Title](url)
			const commaMatch = link.text.match(/^(.+?),\s*(.+)$/);
			
			const imageLink: ParsedImageLink = {
				text: link.text,
				url: link.url
			};
			
			if (commaMatch) {
				imageLink.title = commaMatch[1].trim();
				imageLink.credit = commaMatch[2].trim();
			} else {
				imageLink.title = link.text.trim();
			}
			
			imageLinks.push(imageLink);
		}
	}
	
	return imageLinks;
}

/**
 * Format content with proper HTML formatting
 */
export function formatContentHtml(content: string, sdgColor?: string): string {
	let formatted = content;
	
	// Replace links
	formatted = replaceLinksWithHtml(formatted, sdgColor);
	
	// Convert bold
	formatted = convertBoldToHtml(formatted);
	
	// Replace newlines with <br> for paragraphs (but preserve list structure)
	const lines = formatted.split('\n');
	const formattedLines: string[] = [];
	let inList = false;
	
	for (let i = 0; i < lines.length; i++) {
		const line = lines[i];
		const trimmed = line.trim();
		const isBullet = trimmed.match(/^[\*\-\+]\s/) || trimmed.match(/^\d+\.\s/);
		
		if (isBullet) {
			if (!inList) {
				formattedLines.push('<ul>');
				inList = true;
			}
			// Remove bullet marker and wrap in <li>
			const listItem = trimmed.replace(/^[\*\-\+]\s+/, '').replace(/^\d+\.\s+/, '');
			formattedLines.push(`<li>${listItem}</li>`);
		} else {
			if (inList) {
				formattedLines.push('</ul>');
				inList = false;
			}
			if (trimmed.length > 0) {
				formattedLines.push(`<p>${trimmed}</p>`);
			} else if (i < lines.length - 1) {
				formattedLines.push('<br>');
			}
		}
	}
	
	if (inList) {
		formattedLines.push('</ul>');
	}
	
	return formattedLines.join('\n');
}


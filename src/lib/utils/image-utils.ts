/**
 * Image Utilities
 * Functions for downloading, validating, and processing images
 */

import type { SupabaseClient } from '@supabase/supabase-js';

export interface ImageMetadata {
	title: string;
	credit?: string;
	url: string;
	altText?: string;
	context?: string;
}

export interface DownloadedImage {
	buffer: ArrayBuffer | Buffer;
	filename: string;
	contentType: string;
	metadata: ImageMetadata;
}

/**
 * Validate if a URL points to an image
 */
export function isImageUrl(url: string): boolean {
	const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg', '.bmp'];
	const urlLower = url.toLowerCase();
	return imageExtensions.some(ext => urlLower.includes(ext)) || 
		   urlLower.match(/\.(jpg|jpeg|png|gif|webp|svg|bmp)(\?|$)/i);
}

/**
 * Download image from URL
 */
export async function downloadImage(url: string, timeout = 30000): Promise<DownloadedImage> {
	try {
		const controller = new AbortController();
		const timeoutId = setTimeout(() => controller.abort(), timeout);

		const response = await fetch(url, {
			signal: controller.signal,
			headers: {
				'User-Agent': 'Mozilla/5.0 (compatible; LessonImageDownloader/1.0)'
			}
		});

		clearTimeout(timeoutId);

		if (!response.ok) {
			throw new Error(`Failed to download image: ${response.status} ${response.statusText}`);
		}

		const contentType = response.headers.get('content-type') || '';
		if (!contentType.startsWith('image/')) {
			throw new Error(`URL does not point to an image: ${contentType}`);
		}

		const arrayBuffer = await response.arrayBuffer();
		// Use Buffer in Node.js, ArrayBuffer in browser
		const buffer = typeof Buffer !== 'undefined' ? Buffer.from(arrayBuffer) : arrayBuffer;

		// Validate it's actually an image by checking file signature
		const isValidImage = validateImageBuffer(buffer);
		if (!isValidImage) {
			throw new Error('Downloaded file is not a valid image');
		}

		// Generate filename from URL
		const urlPath = new URL(url).pathname;
		const urlFilename = urlPath.split('/').pop() || 'image';
		const extension = getExtensionFromContentType(contentType) || getExtensionFromFilename(urlFilename);
		const filename = sanitizeFilename(urlFilename.replace(/\.[^.]+$/, '') || 'image') + extension;

		return {
			buffer,
			filename,
			contentType,
			metadata: {
				title: '',
				url
			}
		};
	} catch (error) {
		if (error instanceof Error && error.name === 'AbortError') {
			throw new Error(`Image download timeout after ${timeout}ms`);
		}
		throw error;
	}
}

/**
 * Validate image buffer by checking file signatures
 */
function validateImageBuffer(buffer: ArrayBuffer | Buffer): boolean {
	const length = buffer instanceof ArrayBuffer ? buffer.byteLength : buffer.length;
	if (length < 4) return false;
	
	// Convert to Uint8Array for consistent access
	const bytes = buffer instanceof ArrayBuffer 
		? new Uint8Array(buffer) 
		: new Uint8Array(buffer);

	// Check common image file signatures
	const signatures = [
		[0xFF, 0xD8, 0xFF], // JPEG
		[0x89, 0x50, 0x4E, 0x47], // PNG
		[0x47, 0x49, 0x46, 0x38], // GIF
		[0x52, 0x49, 0x46, 0x46], // WEBP (RIFF)
		[0x3C, 0x3F, 0x78, 0x6D], // SVG (XML)
		[0x42, 0x4D], // BMP
	];

	return signatures.some(sig => {
		return sig.every((byte, index) => bytes[index] === byte);
	});
}

/**
 * Get file extension from content type
 */
function getExtensionFromContentType(contentType: string): string | null {
	const mimeMap: Record<string, string> = {
		'image/jpeg': '.jpg',
		'image/jpg': '.jpg',
		'image/png': '.png',
		'image/gif': '.gif',
		'image/webp': '.webp',
		'image/svg+xml': '.svg',
		'image/bmp': '.bmp'
	};

	return mimeMap[contentType.toLowerCase()] || null;
}

/**
 * Get file extension from filename
 */
function getExtensionFromFilename(filename: string): string {
	const match = filename.match(/\.([^.]+)$/);
	return match ? `.${match[1].toLowerCase()}` : '.jpg';
}

/**
 * Sanitize filename for safe storage
 */
function sanitizeFilename(filename: string): string {
	return filename
		.replace(/[^a-zA-Z0-9-_]/g, '-')
		.replace(/-+/g, '-')
		.replace(/^-|-$/g, '')
		.substring(0, 100)
		.toLowerCase();
}

/**
 * Generate unique filename for lesson image
 */
export function generateImageFilename(lessonSlug: string, imageIndex: number, title: string, extension: string): string {
	const sanitizedTitle = sanitizeFilename(title).substring(0, 50);
	return `${lessonSlug}-img-${imageIndex}-${sanitizedTitle}${extension}`;
}

/**
 * Upload image to Supabase storage
 */
export async function uploadImageToSupabase(
	supabase: SupabaseClient,
	bucket: string,
	path: string,
	buffer: ArrayBuffer | Buffer,
	contentType: string
): Promise<string> {
	// Convert ArrayBuffer to Blob if needed
	const blob = buffer instanceof ArrayBuffer 
		? new Blob([buffer], { type: contentType })
		: buffer;
	
	const { data, error } = await supabase.storage
		.from(bucket)
		.upload(path, blob, {
			contentType,
			upsert: false,
			cacheControl: '3600'
		});

	if (error) {
		throw new Error(`Failed to upload image to Supabase: ${error.message}`);
	}

	// Get public URL
	const { data: urlData } = supabase.storage
		.from(bucket)
		.getPublicUrl(path);

	if (!urlData?.publicUrl) {
		throw new Error('Failed to get public URL for uploaded image');
	}

	return urlData.publicUrl;
}

/**
 * Parse image metadata from markdown link text
 * Format: [Title, Credit Source](url) or [Title](url)
 */
export function parseImageMetadata(linkText: string, url: string, context?: string): ImageMetadata {
	// Try to parse "Title, Credit" format
	const commaMatch = linkText.match(/^(.+?),\s*(.+)$/);
	
	if (commaMatch) {
		return {
			title: commaMatch[1].trim(),
			credit: commaMatch[2].trim(),
			url,
			altText: commaMatch[1].trim(),
			context
		};
	}

	// Fallback to just title
	return {
		title: linkText.trim(),
		url,
		altText: linkText.trim(),
		context
	};
}

/**
 * Check if image already exists in database
 */
export async function imageExists(
	supabase: SupabaseClient,
	originalUrl: string,
	lessonId: number
): Promise<boolean> {
	const { data, error } = await supabase
		.from('edu_lesson_media')
		.select('id')
		.eq('lesson_id', lessonId)
		.eq('original_url', originalUrl)
		.single();

	return !error && data !== null;
}


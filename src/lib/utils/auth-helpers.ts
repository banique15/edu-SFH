/**
 * Authentication helper utilities
 */

// List of admin email addresses with full access
export const ADMIN_EMAILS = [
	'javier@singforhope.org',
	'jennifer@singforhope.org',
	'richard@singforhope.org',
	'it@singforhope.org'
];

/**
 * Check if an email belongs to an admin user
 */
export function isAdmin(email: string | null | undefined): boolean {
	if (!email) return false;
	return ADMIN_EMAILS.includes(email.toLowerCase());
}

/**
 * Public routes that don't require authentication
 */
export const PUBLIC_ROUTES = ['/', '/about', '/curriculum', '/login'];

/**
 * Check if a path is a public route
 */
export function isPublicRoute(pathname: string): boolean {
	return PUBLIC_ROUTES.includes(pathname);
}

/**
 * Check if a path is an admin route
 */
export function isAdminRoute(pathname: string): boolean {
	return pathname.startsWith('/admin');
}

/**
 * Check if a path requires login (but not admin)
 */
export function requiresLogin(pathname: string): boolean {
	// Any route that's not public and not the login page requires auth
	return !isPublicRoute(pathname) && pathname !== '/login';
}

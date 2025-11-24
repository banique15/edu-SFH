import { createServerClient } from '@supabase/ssr'
import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } from '$env/static/public'
import { redirect } from '@sveltejs/kit'
import type { Handle } from '@sveltejs/kit'
import { isAdmin, isPublicRoute, isAdminRoute } from '$lib/utils/auth-helpers'

export const handle: Handle = async ({ event, resolve }) => {
	const pathname = event.url.pathname

	// Skip auth checks for static assets to avoid unnecessary function invocations
	// Note: __data.json endpoints still need processing but won't call getSession()
	const isStaticAsset = 
		pathname.startsWith('/_app/') ||
		pathname.startsWith('/fonts/') ||
		pathname.startsWith('/icons/') ||
		pathname.startsWith('/Home/') ||
		pathname.startsWith('/About/') ||
		pathname.startsWith('/Subject Pages/') ||
		pathname.startsWith('/Pop-up/') ||
		pathname.match(/\.(ico|png|jpg|jpeg|gif|svg|webp|woff|woff2|ttf|eot|css|js)$/i)

	if (isStaticAsset) {
		// Skip Supabase client creation for static assets to avoid any overhead
		return resolve(event)
	}

	// Check if this is a SvelteKit data endpoint (__data.json)
	// These still need Supabase client but shouldn't call getSession() unnecessarily
	const isDataEndpoint = pathname.endsWith('/__data.json')

	// Create a server-side Supabase client that handles cookies properly
	// Only create this for actual page requests, not static assets
	event.locals.supabase = createServerClient(
		PUBLIC_SUPABASE_URL,
		PUBLIC_SUPABASE_ANON_KEY,
		{
			cookies: {
				get: (key) => event.cookies.get(key),
				set: (key, value, options) => {
					event.cookies.set(key, value, { ...options, path: '/' })
				},
				remove: (key, options) => {
					event.cookies.delete(key, { ...options, path: '/' })
				}
			}
		}
	)

	// Redirect old /home route to new root (before any auth checks)
	if (pathname === '/home') {
		throw redirect(302, '/')
	}

	// Public routes - allow anyone (skip session check for performance)
	// For __data.json endpoints, skip session check entirely
	if (isPublicRoute(pathname) || pathname === '/login' || isDataEndpoint) {
		// Only check session if we need to redirect from login page (and not a data endpoint)
		if (pathname === '/login' && !isDataEndpoint) {
			const { data: { session } } = await event.locals.supabase.auth.getSession()
			if (session) {
				const userIsAdmin = isAdmin(session.user?.email)
				throw redirect(302, userIsAdmin ? '/admin' : '/')
			}
		}
		event.locals.session = null
		return resolve(event, {
			filterSerializedResponseHeaders(name) {
				return name === 'content-range'
			}
		})
	}

	// Admin routes - require admin access (only check session here, skip for data endpoints)
	if (isAdminRoute(pathname) && !isDataEndpoint) {
		const { data: { session } } = await event.locals.supabase.auth.getSession()
		event.locals.session = session
		
		if (!session) {
			// Not logged in, redirect to login
			throw redirect(302, '/login')
		}

		const userIsAdmin = isAdmin(session.user?.email)
		if (!userIsAdmin) {
			// Logged in but not admin, redirect to home
			throw redirect(302, '/')
		}

		return resolve(event, {
			filterSerializedResponseHeaders(name) {
				return name === 'content-range'
			}
		})
	}

	// All other routes - lazy load session only if needed
	// Most routes don't need server-side session, client-side will handle auth
	// This avoids millions of getSession() calls for anonymous users
	event.locals.session = null

	return resolve(event, {
		filterSerializedResponseHeaders(name) {
			return name === 'content-range'
		}
	})
}
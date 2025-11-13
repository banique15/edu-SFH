import { createServerClient } from '@supabase/ssr'
import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } from '$env/static/public'
import { redirect } from '@sveltejs/kit'
import type { Handle } from '@sveltejs/kit'
import { isAdmin, isPublicRoute, isAdminRoute } from '$lib/utils/auth-helpers'

export const handle: Handle = async ({ event, resolve }) => {
	// Create a server-side Supabase client that handles cookies properly
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

	// Get the session from the server-side client
	const { data: { session } } = await event.locals.supabase.auth.getSession()
	event.locals.session = session

	const pathname = event.url.pathname

	// Redirect old /home route to new root
	if (pathname === '/home') {
		throw redirect(302, '/')
	}

	// Public routes - allow anyone
	if (isPublicRoute(pathname) || pathname === '/login') {
		// If already logged in and trying to access login, redirect to admin for admins, home for others
		if (pathname === '/login' && session) {
			const userIsAdmin = isAdmin(session.user?.email)
			throw redirect(302, userIsAdmin ? '/admin' : '/')
		}
		return resolve(event, {
			filterSerializedResponseHeaders(name) {
				return name === 'content-range'
			}
		})
	}

	// Admin routes - require admin access
	if (isAdminRoute(pathname)) {
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

	// All other routes require login (but not admin)
	// These will show login modal via client-side logic
	return resolve(event, {
		filterSerializedResponseHeaders(name) {
			return name === 'content-range'
		}
	})
}
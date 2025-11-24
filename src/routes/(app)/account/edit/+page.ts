import { supabase } from '$lib/supabase';
import type { PageLoad } from './$types';
import type { Profile } from '$lib/schemas/profile';

export const load: PageLoad = async ({ parent }) => {
	// Wait for parent layout to load (ensures auth is ready)
	await parent();

	try {
		// Get current user
		const {
			data: { user },
			error: userError
		} = await supabase.auth.getUser();

		if (userError || !user) {
			throw new Error('User not authenticated');
		}

		// Fetch user profile
		const { data: profile, error: profileError } = await supabase
			.from('profiles')
			.select('*')
			.eq('id', user.id)
			.single();

		if (profileError) throw profileError;

		return {
			profile: profile as Profile,
			userEmail: user.email
		};
	} catch (error) {
		console.error('Error loading edit profile page:', error);
		return {
			profile: null,
			userEmail: null
		};
	}
};

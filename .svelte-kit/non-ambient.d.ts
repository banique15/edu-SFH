
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	export interface AppTypes {
		RouteId(): "/(app)" | "/" | "/(app)/about" | "/(app)/account" | "/(app)/account/edit" | "/admin" | "/admin/goals" | "/admin/lessons" | "/admin/users" | "/(app)/curriculum" | "/dev" | "/(app)/goals" | "/(app)/goals/[slug]" | "/(app)/lessons" | "/(app)/lessons/[slug]" | "/login" | "/(app)/signup" | "/(app)/subjects" | "/(app)/subjects/[slug]";
		RouteParams(): {
			"/(app)/goals/[slug]": { slug: string };
			"/(app)/lessons/[slug]": { slug: string };
			"/(app)/subjects/[slug]": { slug: string }
		};
		LayoutParams(): {
			"/(app)": { slug?: string };
			"/": { slug?: string };
			"/(app)/about": Record<string, never>;
			"/(app)/account": Record<string, never>;
			"/(app)/account/edit": Record<string, never>;
			"/admin": Record<string, never>;
			"/admin/goals": Record<string, never>;
			"/admin/lessons": Record<string, never>;
			"/admin/users": Record<string, never>;
			"/(app)/curriculum": Record<string, never>;
			"/dev": Record<string, never>;
			"/(app)/goals": { slug?: string };
			"/(app)/goals/[slug]": { slug: string };
			"/(app)/lessons": { slug?: string };
			"/(app)/lessons/[slug]": { slug: string };
			"/login": Record<string, never>;
			"/(app)/signup": Record<string, never>;
			"/(app)/subjects": { slug?: string };
			"/(app)/subjects/[slug]": { slug: string }
		};
		Pathname(): "/" | "/about" | "/about/" | "/account" | "/account/" | "/account/edit" | "/account/edit/" | "/admin" | "/admin/" | "/admin/goals" | "/admin/goals/" | "/admin/lessons" | "/admin/lessons/" | "/admin/users" | "/admin/users/" | "/curriculum" | "/curriculum/" | "/dev" | "/dev/" | "/goals" | "/goals/" | `/goals/${string}` & {} | `/goals/${string}/` & {} | "/lessons" | "/lessons/" | `/lessons/${string}` & {} | `/lessons/${string}/` & {} | "/login" | "/login/" | "/signup" | "/signup/" | "/subjects" | "/subjects/" | `/subjects/${string}` & {} | `/subjects/${string}/` & {};
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/.DS_Store" | "/About/about-desktop-block-1.png" | "/About/about-desktop-block-2.png" | "/About/about-desktop-block-4.png" | "/About/about-desktop-block-5.png" | "/About/about-desktop-block-6.png" | "/About/about-desktop-hero.png" | "/About/about-goal-1.svg" | "/About/about-goal-10.svg" | "/About/about-goal-11.svg" | "/About/about-goal-12.svg" | "/About/about-goal-13.svg" | "/About/about-goal-14.svg" | "/About/about-goal-15.svg" | "/About/about-goal-16.svg" | "/About/about-goal-17.svg" | "/About/about-goal-2.svg" | "/About/about-goal-3.svg" | "/About/about-goal-4.svg" | "/About/about-goal-5.svg" | "/About/about-goal-6.svg" | "/About/about-goal-7.svg" | "/About/about-goal-8.svg" | "/About/about-goal-9.svg" | "/Home/home-desktop-faq.png" | "/Home/home-desktop-hero-frame-1.png" | "/Home/home-desktop-hero-frame-2.png" | "/Home/home-desktop-hero-frame-3.png" | "/Home/home-desktop-hero-frame-4.png" | "/Home/ncas-mobile.png" | "/Home/ncas.png" | "/Home/sdgs-mobile.png" | "/Home/sdgs.png" | "/Home/subject1.png" | "/Home/subject2.png" | "/Home/subject3.png" | "/Home/subject4.png" | "/Home/subject5.png" | "/Pop-up/Lesson-Snapshot-Popup.png" | "/Subject Pages/CreativeWriting-Desktop-Hero.png" | "/Subject Pages/DanceMovement-Desktop-Hero.png" | "/Subject Pages/Drama-Desktop-Hero.png" | "/Subject Pages/Music-Desktop-Hero.png" | "/Subject Pages/VisualArt-Desktop-Hero.png" | "/favicon.png" | "/fonts/founders-grotesk-medium.woff2" | "/fonts/founders-grotesk-regular.woff2" | "/header.png" | "/icons/sdg-goal-1.svg" | "/icons/sdg-goal-10.svg" | "/icons/sdg-goal-11.svg" | "/icons/sdg-goal-12.svg" | "/icons/sdg-goal-13.svg" | "/icons/sdg-goal-14.svg" | "/icons/sdg-goal-15.svg" | "/icons/sdg-goal-16.svg" | "/icons/sdg-goal-17.svg" | "/icons/sdg-goal-2.svg" | "/icons/sdg-goal-3.svg" | "/icons/sdg-goal-4.svg" | "/icons/sdg-goal-5.svg" | "/icons/sdg-goal-6.svg" | "/icons/sdg-goal-7.svg" | "/icons/sdg-goal-8.svg" | "/icons/sdg-goal-9.svg" | "/logo.png" | "/logo1.png" | "/logo2.png" | "/sfh-logo.png" | string & {};
	}
}
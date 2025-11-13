<script lang="ts">
	// Development Status Tracker - Hardcoded values for tracking feature completion

	type FeatureStatus = 'complete' | 'in-progress' | 'not-started';

	interface Feature {
		name: string;
		status: FeatureStatus;
		notes?: string;
	}

	interface FeatureCategory {
		name: string;
		features: Feature[];
		expanded: boolean;
	}

	interface PageSection {
		name: string;
		status: FeatureStatus;
		components?: string[];
	}

	interface PageFeature {
		route: string;
		name: string;
		status: FeatureStatus;
		sections: PageSection[];
		notes?: string;
	}

	// Global Features Data
	let globalFeatures = $state<FeatureCategory[]>([
		{
			name: 'Authentication System',
			expanded: true,
			features: [
				{ name: 'Login wall popup (LoginModal)', status: 'complete' },
				{ name: 'Email-based login/signup flow', status: 'complete' },
				{ name: 'Session management (Supabase)', status: 'complete' },
				{ name: 'Protected routes', status: 'complete' },
				{ name: 'Logout functionality', status: 'complete' },
				{ name: 'Password reset', status: 'not-started', notes: 'Need to implement' }
			]
		},
		{
			name: 'Account Management',
			expanded: true,
			features: [
				{ name: 'View account page', status: 'complete' },
				{ name: 'Edit account settings', status: 'in-progress', notes: 'Form exists, needs validation' },
				{ name: 'Profile avatar upload', status: 'in-progress' },
				{ name: 'Profile preferences (grades, subjects)', status: 'complete' },
				{ name: 'Account deletion', status: 'not-started' }
			]
		},
		{
			name: 'Navigation Components',
			expanded: false,
			features: [
				{ name: 'Public header', status: 'complete' },
				{ name: 'Top navigation (admin)', status: 'complete' },
				{ name: 'Bottom navigation', status: 'complete' },
				{ name: 'Footer', status: 'complete' },
				{ name: 'Mobile responsive navigation', status: 'complete' }
			]
		},
		{
			name: 'Favorites System',
			expanded: false,
			features: [
				{ name: 'Save/unsave lessons (heart icon)', status: 'complete' },
				{ name: 'View favorites in account page', status: 'complete' },
				{ name: 'Persistent storage (localStorage)', status: 'complete' },
				{ name: 'Sync favorites with database', status: 'not-started', notes: 'Consider implementing' }
			]
		},
		{
			name: 'Search & Filtering',
			expanded: false,
			features: [
				{ name: 'Search lessons', status: 'not-started' },
				{ name: 'Filter by grade level', status: 'not-started' },
				{ name: 'Filter by subject/art form', status: 'not-started' },
				{ name: 'Filter by SDG goal', status: 'not-started' }
			]
		},
		{
			name: 'Error Handling System',
			expanded: false,
			features: [
				{ name: 'Error store with add/remove/clear', status: 'complete' },
				{ name: 'Automatic error handling', status: 'complete' },
				{ name: 'Error display components', status: 'complete' },
				{ name: 'Error logging and debugging', status: 'complete' }
			]
		},
		{
			name: 'Toast Notifications',
			expanded: false,
			features: [
				{ name: 'Toast store implementation', status: 'complete' },
				{ name: 'Success/Error/Warning/Info types', status: 'complete' },
				{ name: 'Auto-dismiss with configurable timeout', status: 'complete' },
				{ name: 'Toast display component', status: 'complete' }
			]
		},
		{
			name: 'Utility Functions',
			expanded: false,
			features: [
				{ name: 'SDG color mapping', status: 'complete' },
				{ name: 'Slug generation', status: 'complete' },
				{ name: 'Authentication helpers', status: 'complete' },
				{ name: 'Form validation', status: 'complete' },
				{ name: 'Date formatting', status: 'complete' },
				{ name: 'CSV import/export', status: 'in-progress', notes: 'Import complete, export needed' }
			]
		},
		{
			name: 'Content Approval Workflow',
			expanded: false,
			features: [
				{ name: 'Approve/unapprove goals', status: 'complete' },
				{ name: 'Approve/unapprove lessons', status: 'complete' },
				{ name: 'Approval audit trail (user, timestamp)', status: 'complete' },
				{ name: 'Admin-only approval permissions', status: 'in-progress', notes: 'RLS policies needed' }
			]
		},
		{
			name: 'Data Management (CRUD Operations)',
			expanded: false,
			features: [
				{ name: 'Goals CRUD', status: 'complete' },
				{ name: 'Targets CRUD', status: 'complete' },
				{ name: 'Indicators CRUD', status: 'complete' },
				{ name: 'Objectives CRUD', status: 'complete' },
				{ name: 'Lessons CRUD', status: 'complete' },
				{ name: 'Lesson Materials CRUD', status: 'complete' },
				{ name: 'Lesson Content CRUD', status: 'complete' },
				{ name: 'Lesson Media CRUD', status: 'complete' },
				{ name: 'Lesson Objectives CRUD', status: 'complete' },
				{ name: 'Profiles CRUD', status: 'complete' }
			]
		},
		{
			name: 'Real-time Features',
			expanded: false,
			features: [
				{ name: 'Supabase client setup', status: 'complete' },
				{ name: 'Real-time subscriptions', status: 'not-started', notes: 'Can add for collaborative editing' },
				{ name: 'Reactive store updates', status: 'complete' },
				{ name: 'Optimistic UI updates', status: 'in-progress' }
			]
		},
		{
			name: 'Component Library',
			expanded: false,
			features: [
				{ name: 'Goal Components (GoalHero, ObjectivesSection, etc.)', status: 'complete' },
				{ name: 'Lesson Components (LessonHero, LessonCard, etc.)', status: 'complete' },
				{ name: 'Library Components (SearchBar, FilterSidebar)', status: 'in-progress' },
				{ name: 'UI Components (Modal, Toast, Pagination, etc.)', status: 'complete' },
				{ name: 'Subject Components (Art form SVGs)', status: 'in-progress', notes: 'Only Creative Writing complete' },
				{ name: 'Navigation Components (TopNav, BottomNav, etc.)', status: 'complete' }
			]
		},
		{
			name: 'Cross-Cutting Features',
			expanded: false,
			features: [
				{ name: 'Responsive Design (mobile, tablet, desktop)', status: 'complete' },
				{ name: 'Accessibility (ARIA labels, keyboard nav)', status: 'in-progress', notes: 'Basic support, needs audit' },
				{ name: 'Performance Optimization', status: 'in-progress', notes: 'Lazy loading, code splitting needed' },
				{ name: 'SEO & Meta tags', status: 'complete' },
				{ name: 'Loading states', status: 'complete' },
				{ name: 'Error boundaries', status: 'complete' }
			]
		}
	]);

	// Per-Page Features Data
	let pages = $state<PageFeature[]>([
		{
			route: '/',
			name: 'Home/Landing',
			status: 'complete',
			sections: [
				{ name: 'Hero Section', status: 'complete', components: ['SubjectHero'] },
				{ name: 'Featured Content', status: 'complete' },
				{ name: 'CTA Buttons', status: 'complete' }
			]
		},
		{
			route: '/login',
			name: 'Login Page',
			status: 'complete',
			sections: [
				{ name: 'Email/Password Form', status: 'complete' },
				{ name: 'Sign up link', status: 'complete' },
				{ name: 'Return URL handling', status: 'complete' },
				{ name: 'Error handling', status: 'complete' }
			]
		},
		{
			route: '/about',
			name: 'About Page',
			status: 'in-progress',
			sections: [
				{ name: 'About content', status: 'in-progress' },
				{ name: 'Team section', status: 'not-started' }
			],
			notes: 'Content needs to be finalized'
		},
		{
			route: '/curriculum',
			name: 'Curriculum Browser',
			status: 'in-progress',
			sections: [
				{ name: 'Lessons grid', status: 'complete', components: ['LessonCard'] },
				{ name: 'Filtering options', status: 'not-started' },
				{ name: 'Search functionality', status: 'not-started' },
				{ name: 'Pagination', status: 'not-started' }
			],
			notes: 'Basic display works, needs filtering'
		},
		{
			route: '/goals',
			name: 'SDG Goals List',
			status: 'complete',
			sections: [
				{ name: 'Goals grid', status: 'complete' },
				{ name: 'Goal cards with icons', status: 'complete' },
				{ name: 'Click to detail', status: 'complete' }
			]
		},
		{
			route: '/goals/[slug]',
			name: 'Goal Detail Page',
			status: 'complete',
			sections: [
				{ name: 'Goal header', status: 'complete' },
				{ name: 'Goal description', status: 'complete' },
				{ name: 'Learning objectives', status: 'complete' },
				{ name: 'Related lessons', status: 'complete' },
				{ name: 'Targets & indicators', status: 'complete' }
			]
		},
		{
			route: '/lessons',
			name: 'Lessons List',
			status: 'complete',
			sections: [
				{ name: 'Lessons grid', status: 'complete', components: ['LessonCard'] },
				{ name: 'Favorite toggle', status: 'complete' },
				{ name: 'Filtering', status: 'not-started' }
			]
		},
		{
			route: '/lessons/[slug]',
			name: 'Lesson Detail Page',
			status: 'in-progress',
			sections: [
				{ name: 'Lesson header', status: 'complete' },
				{ name: 'Materials list', status: 'complete' },
				{ name: 'Content sections', status: 'complete' },
				{ name: 'Media examples', status: 'in-progress' },
				{ name: 'Grade-specific objectives', status: 'complete' },
				{ name: 'Print/Download', status: 'not-started' }
			],
			notes: 'Media player integration needed'
		},
		{
			route: '/subjects/[slug]',
			name: 'Subject Pages',
			status: 'in-progress',
			sections: [
				{ name: 'Subject hero', status: 'complete', components: ['SubjectHero'] },
				{ name: 'Subject description', status: 'in-progress' },
				{ name: 'Related lessons', status: 'in-progress' }
			],
			notes: 'Content needed for all subjects'
		},
		{
			route: '/account',
			name: 'Account Page',
			status: 'complete',
			sections: [
				{ name: 'Profile display', status: 'complete' },
				{ name: 'Saved lessons grid', status: 'complete', components: ['LessonCard'] },
				{ name: 'Recommended lessons', status: 'complete' },
				{ name: 'Edit profile link', status: 'complete' }
			]
		},
		{
			route: '/account/edit',
			name: 'Edit Account',
			status: 'in-progress',
			sections: [
				{ name: 'Profile form', status: 'complete' },
				{ name: 'Avatar upload', status: 'in-progress' },
				{ name: 'Form validation', status: 'in-progress' },
				{ name: 'Save functionality', status: 'in-progress' }
			],
			notes: 'Needs testing and validation'
		},
		{
			route: '/admin',
			name: 'Admin Dashboard',
			status: 'in-progress',
			sections: [
				{ name: 'Stats overview', status: 'in-progress' },
				{ name: 'Quick actions', status: 'not-started' }
			]
		},
		{
			route: '/admin/goals',
			name: 'Admin Goals Management',
			status: 'in-progress',
			sections: [
				{ name: 'Goals list', status: 'complete' },
				{ name: 'Add/Edit goals', status: 'in-progress' },
				{ name: 'Delete goals', status: 'not-started' }
			]
		},
		{
			route: '/admin/lessons',
			name: 'Admin Lessons Management',
			status: 'in-progress',
			sections: [
				{ name: 'Lessons list', status: 'complete' },
				{ name: 'Add/Edit lessons', status: 'in-progress' },
				{ name: 'Delete lessons', status: 'not-started' },
				{ name: 'Manage content sections', status: 'in-progress' }
			]
		},
		{
			route: '/admin/users',
			name: 'Admin Users Management',
			status: 'in-progress',
			sections: [
				{ name: 'Users list', status: 'in-progress' },
				{ name: 'User roles', status: 'not-started' },
				{ name: 'Delete users', status: 'not-started' }
			]
		},
		{
			route: '/dev',
			name: 'Development Status Tracker',
			status: 'complete',
			sections: [
				{ name: 'Global features tracking', status: 'complete' },
				{ name: 'Page-by-page status', status: 'complete' },
				{ name: 'Progress statistics', status: 'complete' },
				{ name: 'Filter by status', status: 'complete' },
				{ name: 'Collapsible categories', status: 'complete' },
				{ name: 'Status legend', status: 'complete' }
			],
			notes: 'Comprehensive development tracker for all features'
		}
	]);

	// Computed stats
	let globalStats = $derived(() => {
		const allFeatures = globalFeatures.flatMap((cat) => cat.features);
		const total = allFeatures.length;
		const complete = allFeatures.filter((f) => f.status === 'complete').length;
		const inProgress = allFeatures.filter((f) => f.status === 'in-progress').length;
		const notStarted = allFeatures.filter((f) => f.status === 'not-started').length;
		return { total, complete, inProgress, notStarted, percentage: Math.round((complete / total) * 100) };
	});

	let pageStats = $derived(() => {
		const total = pages.length;
		const complete = pages.filter((p) => p.status === 'complete').length;
		const inProgress = pages.filter((p) => p.status === 'in-progress').length;
		const notStarted = pages.filter((p) => p.status === 'not-started').length;
		return { total, complete, inProgress, notStarted, percentage: Math.round((complete / total) * 100) };
	});

	// Helper functions
	function getStatusColor(status: FeatureStatus): string {
		switch (status) {
			case 'complete':
				return 'bg-green-500';
			case 'in-progress':
				return 'bg-yellow-500';
			case 'not-started':
				return 'bg-gray-400';
		}
	}

	function getStatusTextColor(status: FeatureStatus): string {
		switch (status) {
			case 'complete':
				return 'text-green-700';
			case 'in-progress':
				return 'text-yellow-700';
			case 'not-started':
				return 'text-gray-600';
		}
	}

	function getStatusIcon(status: FeatureStatus): string {
		switch (status) {
			case 'complete':
				return '✓';
			case 'in-progress':
				return '🚧';
			case 'not-started':
				return '⭕';
		}
	}

	function getStatusLabel(status: FeatureStatus): string {
		switch (status) {
			case 'complete':
				return 'Complete';
			case 'in-progress':
				return 'In Progress';
			case 'not-started':
				return 'Not Started';
		}
	}

	function toggleCategory(index: number) {
		globalFeatures[index].expanded = !globalFeatures[index].expanded;
	}

	// Filter state
	let filterStatus = $state<FeatureStatus | 'all'>('all');
	let filteredPages = $derived(() => {
		if (filterStatus === 'all') return pages;
		return pages.filter((p) => p.status === filterStatus);
	});
</script>

<svelte:head>
	<title>Development Status Tracker | SFH Education</title>
</svelte:head>

<div class="bg-[#fdf9f1] min-h-screen">
	<div class="container mx-auto px-4 md:px-8 max-w-[1400px] py-16">
		<!-- Header -->
		<div class="mb-12">
			<h1 class="text-6xl font-normal leading-[0.9] tracking-[-2.1px] text-[#349552] mb-4">
				Development Status
			</h1>
			<p class="text-xl text-gray-600">Track feature completion across the application</p>
		</div>

		<!-- Overall Stats Cards -->
		<div class="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
			<!-- Global Features Stats -->
			<div class="bg-white rounded-[20px] p-8">
				<h2 class="text-2xl font-semibold mb-4 text-gray-900">Global Features</h2>
				<div class="mb-4">
					<div class="flex justify-between mb-2">
						<span class="text-gray-700">Progress</span>
						<span class="font-semibold text-[#349552]">{globalStats().percentage}%</span>
					</div>
					<div class="w-full bg-gray-200 rounded-full h-3">
						<div
							class="bg-[#349552] h-3 rounded-full transition-all duration-300"
							style="width: {globalStats().percentage}%"
						></div>
					</div>
				</div>
				<div class="grid grid-cols-3 gap-4 text-center mt-6">
					<div>
						<div class="text-3xl font-bold text-green-600">{globalStats().complete}</div>
						<div class="text-sm text-gray-600">Complete</div>
					</div>
					<div>
						<div class="text-3xl font-bold text-yellow-600">{globalStats().inProgress}</div>
						<div class="text-sm text-gray-600">In Progress</div>
					</div>
					<div>
						<div class="text-3xl font-bold text-gray-500">{globalStats().notStarted}</div>
						<div class="text-sm text-gray-600">Not Started</div>
					</div>
				</div>
			</div>

			<!-- Pages Stats -->
			<div class="bg-white rounded-[20px] p-8">
				<h2 class="text-2xl font-semibold mb-4 text-gray-900">Pages</h2>
				<div class="mb-4">
					<div class="flex justify-between mb-2">
						<span class="text-gray-700">Progress</span>
						<span class="font-semibold text-[#349552]">{pageStats().percentage}%</span>
					</div>
					<div class="w-full bg-gray-200 rounded-full h-3">
						<div
							class="bg-[#349552] h-3 rounded-full transition-all duration-300"
							style="width: {pageStats().percentage}%"
						></div>
					</div>
				</div>
				<div class="grid grid-cols-3 gap-4 text-center mt-6">
					<div>
						<div class="text-3xl font-bold text-green-600">{pageStats().complete}</div>
						<div class="text-sm text-gray-600">Complete</div>
					</div>
					<div>
						<div class="text-3xl font-bold text-yellow-600">{pageStats().inProgress}</div>
						<div class="text-sm text-gray-600">In Progress</div>
					</div>
					<div>
						<div class="text-3xl font-bold text-gray-500">{pageStats().notStarted}</div>
						<div class="text-sm text-gray-600">Not Started</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Global Features Section -->
		<div class="mb-12">
			<h2 class="text-4xl font-normal leading-[0.9] tracking-[-0.48px] text-black mb-6">
				Global Features
			</h2>

			<div class="space-y-4">
				{#each globalFeatures as category, index}
					<div class="bg-white rounded-[20px] overflow-hidden">
						<!-- Category Header -->
						<button
							onclick={() => toggleCategory(index)}
							class="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
						>
							<div class="flex items-center gap-4">
								<svg
									class="w-5 h-5 transition-transform {category.expanded ? 'rotate-90' : ''}"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M9 5l7 7-7 7"
									/>
								</svg>
								<h3 class="text-xl font-semibold text-gray-900">{category.name}</h3>
							</div>
							<div class="text-sm text-gray-600">
								{category.features.filter((f) => f.status === 'complete').length} / {category.features.length}
							</div>
						</button>

						<!-- Category Features -->
						{#if category.expanded}
							<div class="px-6 pb-6 pt-2 space-y-3">
								{#each category.features as feature}
									<div class="flex items-start gap-3 p-3 rounded-lg bg-gray-50">
										<div class="flex-shrink-0 mt-0.5">
											<span class="text-xl">{getStatusIcon(feature.status)}</span>
										</div>
										<div class="flex-1">
											<div class="flex items-center gap-2 mb-1">
												<span class="text-gray-900">{feature.name}</span>
												<span
													class="px-2 py-0.5 rounded-full text-xs font-medium {getStatusTextColor(
														feature.status
													)} bg-opacity-20 {getStatusColor(feature.status)}"
												>
													{getStatusLabel(feature.status)}
												</span>
											</div>
											{#if feature.notes}
												<p class="text-sm text-gray-600 italic">{feature.notes}</p>
											{/if}
										</div>
									</div>
								{/each}
							</div>
						{/if}
					</div>
				{/each}
			</div>
		</div>

		<!-- Per-Page Features Section -->
		<div>
			<div class="flex items-center justify-between mb-6">
				<h2 class="text-4xl font-normal leading-[0.9] tracking-[-0.48px] text-black">
					Page-by-Page Status
				</h2>

				<!-- Filter Buttons -->
				<div class="flex gap-2">
					<button
						onclick={() => (filterStatus = 'all')}
						class="px-4 py-2 rounded-lg text-sm font-medium transition-colors {filterStatus === 'all'
							? 'bg-[#349552] text-white'
							: 'bg-white text-gray-700 hover:bg-gray-100'}"
					>
						All
					</button>
					<button
						onclick={() => (filterStatus = 'complete')}
						class="px-4 py-2 rounded-lg text-sm font-medium transition-colors {filterStatus === 'complete'
							? 'bg-green-600 text-white'
							: 'bg-white text-gray-700 hover:bg-gray-100'}"
					>
						Complete
					</button>
					<button
						onclick={() => (filterStatus = 'in-progress')}
						class="px-4 py-2 rounded-lg text-sm font-medium transition-colors {filterStatus === 'in-progress'
							? 'bg-yellow-600 text-white'
							: 'bg-white text-gray-700 hover:bg-gray-100'}"
					>
						In Progress
					</button>
					<button
						onclick={() => (filterStatus = 'not-started')}
						class="px-4 py-2 rounded-lg text-sm font-medium transition-colors {filterStatus === 'not-started'
							? 'bg-gray-600 text-white'
							: 'bg-white text-gray-700 hover:bg-gray-100'}"
					>
						Not Started
					</button>
				</div>
			</div>

			<!-- Pages Grid -->
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
				{#each filteredPages() as page}
					<div class="bg-white rounded-[20px] p-6 hover:shadow-lg transition-shadow">
						<!-- Page Header -->
						<div class="mb-4">
							<div class="flex items-start justify-between mb-2">
								<div>
									<h3 class="text-lg font-semibold text-gray-900 mb-1">{page.name}</h3>
									<code class="text-sm text-gray-600 bg-gray-100 px-2 py-1 rounded">{page.route}</code>
								</div>
								<span class="text-2xl">{getStatusIcon(page.status)}</span>
							</div>
							<span
								class="inline-block px-3 py-1 rounded-full text-sm font-medium {getStatusTextColor(
									page.status
								)} bg-opacity-20 {getStatusColor(page.status)}"
							>
								{getStatusLabel(page.status)}
							</span>
						</div>

						<!-- Sections Checklist -->
						<div class="space-y-2 mb-4">
							{#each page.sections as section}
								<div class="flex items-start gap-2 text-sm">
									<span class="flex-shrink-0 mt-0.5">{getStatusIcon(section.status)}</span>
									<div class="flex-1">
										<span class="text-gray-700">{section.name}</span>
										{#if section.components}
											<div class="text-xs text-gray-500 mt-0.5">
												Components: {section.components.join(', ')}
											</div>
										{/if}
									</div>
								</div>
							{/each}
						</div>

						<!-- Notes -->
						{#if page.notes}
							<div class="mt-4 pt-4 border-t border-gray-200">
								<p class="text-sm text-gray-600 italic">💡 {page.notes}</p>
							</div>
						{/if}
					</div>
				{/each}
			</div>
		</div>

		<!-- Legend -->
		<div class="mt-12 bg-white rounded-[20px] p-6">
			<h3 class="text-lg font-semibold text-gray-900 mb-4">Status Legend</h3>
			<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
				<div class="flex items-center gap-3">
					<span class="text-2xl">✓</span>
					<div>
						<div class="font-medium text-green-700">Complete</div>
						<div class="text-sm text-gray-600">Feature is fully implemented and tested</div>
					</div>
				</div>
				<div class="flex items-center gap-3">
					<span class="text-2xl">🚧</span>
					<div>
						<div class="font-medium text-yellow-700">In Progress</div>
						<div class="text-sm text-gray-600">Feature is being developed or needs work</div>
					</div>
				</div>
				<div class="flex items-center gap-3">
					<span class="text-2xl">⭕</span>
					<div>
						<div class="font-medium text-gray-600">Not Started</div>
						<div class="text-sm text-gray-600">Feature has not been started yet</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

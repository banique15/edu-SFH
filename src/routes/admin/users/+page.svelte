<script lang="ts">
	import { ADMIN_EMAILS } from '$lib/utils/auth-helpers';
</script>

<svelte:head>
	<title>User Management | Admin Dashboard</title>
	<meta name="description" content="Manage users and permissions" />
</svelte:head>

<div class="min-h-full p-6 lg:p-8 fade-in">
	<div class="max-w-7xl mx-auto space-y-8">
		<div>
			<h1 class="text-3xl lg:text-4xl font-bold text-base-content">User Management</h1>
			<p class="text-sm lg:text-base text-base-content/60 mt-1">
				Manage user accounts and permissions
			</p>
		</div>

		<!-- Admin Users Card -->
		<div class="card bg-base-100 shadow-depth-1 border border-base-300">
			<div class="card-body p-6">
				<h2 class="text-xl lg:text-2xl font-bold text-base-content mb-6">Administrator Accounts</h2>

				<div class="overflow-x-auto">
					<table class="table table-zebra">
						<thead>
							<tr>
								<th>Email</th>
								<th>Role</th>
								<th>Status</th>
							</tr>
						</thead>
						<tbody>
							{#each ADMIN_EMAILS as email}
								<tr>
									<td class="font-medium">{email}</td>
									<td>
										<span class="badge badge-primary">Administrator</span>
									</td>
									<td>
										<span class="badge badge-success">Active</span>
									</td>
								</tr>
							{/each}
						</tbody>
					</table>
				</div>

				<div class="alert alert-info mt-6">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
					</svg>
					<span>Administrator emails are currently hardcoded in the application. To add or remove admins, update the <code>ADMIN_EMAILS</code> constant in <code>src/lib/utils/auth-helpers.ts</code></span>
				</div>
			</div>
		</div>

		<!-- Future Features Card -->
		<div class="card bg-base-100 shadow-depth-1 border border-base-300">
			<div class="card-body p-6">
				<h2 class="text-xl lg:text-2xl font-bold text-base-content mb-4">Planned Features</h2>

				<ul class="space-y-3">
					<li class="flex items-start gap-3">
						<svg class="w-5 h-5 text-base-content/40 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
						</svg>
						<div>
							<p class="font-medium">User Registration System</p>
							<p class="text-sm text-base-content/60">Allow new users to register and request access</p>
						</div>
					</li>
					<li class="flex items-start gap-3">
						<svg class="w-5 h-5 text-base-content/40 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
						</svg>
						<div>
							<p class="font-medium">Role-Based Access Control</p>
							<p class="text-sm text-base-content/60">Define different permission levels (Educator, Reviewer, Admin)</p>
						</div>
					</li>
					<li class="flex items-start gap-3">
						<svg class="w-5 h-5 text-base-content/40 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
						</svg>
						<div>
							<p class="font-medium">Activity Logging</p>
							<p class="text-sm text-base-content/60">Track user actions and content modifications</p>
						</div>
					</li>
					<li class="flex items-start gap-3">
						<svg class="w-5 h-5 text-base-content/40 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
						</svg>
						<div>
							<p class="font-medium">Email Notifications</p>
							<p class="text-sm text-base-content/60">Notify admins of new registrations and content changes</p>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</div>

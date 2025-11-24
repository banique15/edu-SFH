<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	let { open = $bindable(false) } = $props();

	function handleSignUp() {
		// Store the current page to redirect back after login/signup
		const returnUrl = $page.url.pathname;
		goto(`/login?returnUrl=${encodeURIComponent(returnUrl)}`);
	}

	function handleSignIn() {
		// Same as sign up - the login page handles both
		const returnUrl = $page.url.pathname;
		goto(`/login?returnUrl=${encodeURIComponent(returnUrl)}`);
	}

	function handleClose() {
		// Just close the modal, allow user to continue browsing
		open = false;
	}
</script>

{#if open}
	<!-- Modal backdrop -->
	<div
		class="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
		onclick={handleClose}
		onkeydown={(e) => e.key === 'Escape' && handleClose()}
		role="button"
		tabindex="-1"
		aria-label="Close modal"
	>
		<!-- Modal content -->
		<div
			class="bg-white rounded-[20px] w-full max-w-4xl shadow-xl scale-in overflow-hidden relative"
			onclick={(e) => e.stopPropagation()}
		>
			<!-- Close button -->
			<button
				onclick={handleClose}
				class="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
				aria-label="Close"
			>
				<svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
				</svg>
			</button>

			<div class="grid grid-cols-1 lg:grid-cols-2 gap-0">
				<!-- Left Column: Content -->
				<div class="p-8 lg:p-10 flex flex-col justify-center">
					<!-- Heading -->
					<h2 class="text-2xl lg:text-3xl font-semibold text-gray-900 mb-6 leading-tight">
						Make an account to access<br>our free curriculum.
					</h2>

					<!-- Feature list -->
					<div class="space-y-4 mb-8">
						<!-- Feature 1: Clipboard -->
						<div class="flex items-start gap-3">
							<div class="flex-shrink-0 w-6 h-6 mt-0.5">
								<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" class="w-6 h-6 text-gray-700">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
								</svg>
							</div>
							<p class="text-base text-gray-700 leading-relaxed">
								Access ready-to-use, free lessons for grades 6-12
							</p>
						</div>

						<!-- Feature 2: Target -->
						<div class="flex items-start gap-3">
							<div class="flex-shrink-0 w-6 h-6 mt-0.5">
								<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" class="w-6 h-6 text-gray-700">
									<circle cx="12" cy="12" r="10" stroke-width="2"/>
									<circle cx="12" cy="12" r="6" stroke-width="2"/>
									<circle cx="12" cy="12" r="2" fill="currentColor"/>
								</svg>
							</div>
							<p class="text-base text-gray-700 leading-relaxed">
								Connect learning to use UN Global Goals and National Arts Standards
							</p>
						</div>

						<!-- Feature 3: Heart -->
						<div class="flex items-start gap-3">
							<div class="flex-shrink-0 w-6 h-6 mt-0.5">
								<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" class="w-6 h-6 text-gray-700">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
								</svg>
							</div>
							<p class="text-base text-gray-700 leading-relaxed">
								Save your favorite lessons to "Your Classroom"
							</p>
						</div>
					</div>

					<!-- Actions -->
					<div class="space-y-3">
						<button
							onclick={handleSignUp}
							class="w-full btn bg-[#349552] hover:bg-[#2d7d45] text-white border-0 text-base h-12 normal-case font-medium"
						>
							Sign up
						</button>
						<button
							onclick={handleSignIn}
							class="text-sm text-gray-600 hover:text-gray-900 underline w-full text-center"
						>
							Already have an account? Sign in
						</button>
					</div>
				</div>

				<!-- Right Column: Preview Image -->
				<div class="hidden lg:flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-6">
					<div class="relative w-full h-full flex items-center justify-center">
						<img
							src="/Pop-up/Lesson-Snapshot-Popup.png"
							alt="Curriculum preview"
							class="max-w-full h-auto object-contain rounded-lg shadow-lg"
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
{/if}

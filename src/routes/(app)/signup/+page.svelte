<script lang="ts">
	const steps = [
		{ id: 1, label: 'Your information' },
		{ id: 2, label: 'Grades you teach' },
		{ id: 3, label: 'Primary subject' },
		{ id: 4, label: 'Curriculum interests' }
	];

	let currentStep = $state(1);

	let formData = $state({
		firstName: '',
		lastName: '',
		email: '',
		country: '',
		state: '',
		city: '',
		grades: [] as string[],
		primarySubject: '',
		curriculumInterests: [] as string[]
	});

	const gradeOptions = [
		{ value: '5-8', label: 'Grades 5-8' },
		{ value: '9-12', label: 'Grades 9-12' }
	];

	const subjectOptions = [
		'Arts Integration',
		'Creative Writing',
		'Dance / Movement',
		'Drama / Theatre',
		'English Language Arts',
		'Mathematics',
		'Music',
		'Physical Education',
		'Science',
		'Social Studies',
		'Special Education',
		'Technology / Computer Science',
		'Visual Art'
	];

	const curriculumOptions = ['All', 'Creative Writing', 'Visual Art', 'Drama', 'Dance/Movement', 'Music'];

	function goToStep(direction: 'next' | 'prev') {
		if (direction === 'next' && currentStep < steps.length) {
			currentStep += 1;
		}

		if (direction === 'prev' && currentStep > 1) {
			currentStep -= 1;
		}
	}

	function toggleGrade(value: string) {
		if (formData.grades.includes(value)) {
			formData = {
				...formData,
				grades: formData.grades.filter((grade) => grade !== value)
			};
		} else {
			formData = { ...formData, grades: [...formData.grades, value] };
		}
	}

	function toggleCurriculum(value: string) {
		if (formData.curriculumInterests.includes(value)) {
			formData = {
				...formData,
				curriculumInterests: formData.curriculumInterests.filter((option) => option !== value)
			};
		} else {
			formData = { ...formData, curriculumInterests: [...formData.curriculumInterests, value] };
		}
	}
</script>

<svelte:head>
	<title>Sign Up | Sing for Hope Education</title>
</svelte:head>

<div class="min-h-screen bg-base-200/40 py-12">
	<div class="container mx-auto max-w-5xl px-4">
		<div class="mb-10 text-center">
			<p class="text-sm uppercase tracking-[0.2em] text-primary mb-3">Get started</p>
			<h1 class="text-4xl lg:text-5xl font-normal text-base-content mb-4" style="font-family: 'Founders Grotesk', sans-serif; letter-spacing: -0.52px;">
				Create your educator account
			</h1>
			<p class="text-base-content/70 max-w-3xl mx-auto">
				Tell us a little about yourself so we can personalize your experience inside the Sing for Hope Curriculum Library.
			</p>
		</div>

		<!-- Step indicator -->
		<div class="flex flex-col gap-4 mb-8 lg:flex-row lg:items-center lg:justify-between">
			<div class="flex items-center gap-4 overflow-x-auto">
				{#each steps as step}
					<div class="flex items-center gap-3">
						<div
							class={`w-10 h-10 rounded-full flex items-center justify-center border-2 text-sm font-medium transition-all duration-200 ${
								currentStep >= step.id
									? 'bg-primary border-primary text-white'
									: 'border-base-content/20 text-base-content/60'
							}`}
						>
							{step.id}
						</div>
						<div>
							<p class="text-sm uppercase tracking-wide text-base-content/60">Step {step.id}</p>
							<p class="font-medium text-base-content">{step.label}</p>
						</div>
					</div>
					{#if step.id < steps.length}
						<div class="hidden lg:block w-16 h-px bg-base-content/20"></div>
					{/if}
				{/each}
			</div>
			<div class="text-sm text-base-content/60">UI prototype – functionality coming soon</div>
		</div>

		<div class="bg-base-100 rounded-[24px] shadow-xl border border-base-300/40 p-6 lg:p-10">
			{#if currentStep === 1}
				<div class="space-y-8">
					<div>
						<h2 class="text-2xl font-semibold text-base-content mb-2">Your contact information</h2>
						<p class="text-base-content/70">We’ll use this information to personalize your dashboard and stay in touch.</p>
					</div>

					<div class="grid grid-cols-1 md:grid-cols-2 gap-5">
						<label class="form-control">
							<span class="label-text font-medium mb-1">First name</span>
							<input type="text" class="input input-bordered rounded-xl" placeholder="Ada" bind:value={formData.firstName} />
						</label>
						<label class="form-control">
							<span class="label-text font-medium mb-1">Last name</span>
							<input type="text" class="input input-bordered rounded-xl" placeholder="Lovelace" bind:value={formData.lastName} />
						</label>
						<label class="form-control md:col-span-2">
							<span class="label-text font-medium mb-1">Email</span>
							<input type="email" class="input input-bordered rounded-xl" placeholder="you@school.org" bind:value={formData.email} />
						</label>
						<label class="form-control">
							<span class="label-text font-medium mb-1">Country</span>
							<input type="text" class="input input-bordered rounded-xl" placeholder="United States" bind:value={formData.country} />
						</label>
						<label class="form-control">
							<span class="label-text font-medium mb-1">State / Province</span>
							<input type="text" class="input input-bordered rounded-xl" placeholder="New York" bind:value={formData.state} />
						</label>
						<label class="form-control">
							<span class="label-text font-medium mb-1">City</span>
							<input type="text" class="input input-bordered rounded-xl" placeholder="New York City" bind:value={formData.city} />
						</label>
					</div>
				</div>
			{:else if currentStep === 2}
				<div class="space-y-6">
					<div>
						<h2 class="text-2xl font-semibold text-base-content mb-2">What grades do you teach?</h2>
						<p class="text-base-content/70">Select all that apply.</p>
					</div>
					<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
						{#each gradeOptions as option}
							<button
								type="button"
								onclick={() => toggleGrade(option.value)}
								class={`p-5 rounded-2xl border text-left transition-all ${
									formData.grades.includes(option.value)
										? 'border-primary bg-primary/10 text-primary'
										: 'border-base-300 hover:border-base-content/50'
								}`}
							>
								<span class="text-lg font-semibold">{option.label}</span>
								<p class="text-sm text-base-content/70 mt-1">Middle & high school learners</p>
							</button>
						{/each}
					</div>
				</div>
			{:else if currentStep === 3}
				<div class="space-y-6">
					<div>
						<h2 class="text-2xl font-semibold text-base-content mb-2">What primary subject do you teach?</h2>
						<p class="text-base-content/70">Choose the subject that best matches your classroom focus.</p>
					</div>
					<label class="form-control">
						<span class="label-text font-medium mb-2">Subject area</span>
						<div class="relative">
							<select class="select select-bordered w-full rounded-2xl pr-10" bind:value={formData.primarySubject}>
								<option value="" disabled selected hidden>Choose a subject</option>
								{#each subjectOptions as subject}
									<option value={subject}>{subject}</option>
								{/each}
							</select>
							<svg class="w-4 h-4 absolute right-4 top-1/2 -translate-y-1/2 text-base-content/60" viewBox="0 0 20 20" fill="none">
								<path d="M5 7L10 12L15 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
							</svg>
						</div>
					</label>
				</div>
			{:else}
				<div class="space-y-6">
					<div>
						<h2 class="text-2xl font-semibold text-base-content mb-2">What curriculum are you interested in?</h2>
						<p class="text-base-content/70">Select all that apply.</p>
					</div>
					<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
						{#each curriculumOptions as option}
							<button
								type="button"
								onclick={() => toggleCurriculum(option)}
								class={`p-5 rounded-2xl border text-left transition-all ${
									formData.curriculumInterests.includes(option)
										? 'border-primary bg-primary/10 text-primary'
										: 'border-base-300 hover:border-base-content/50'
								}`}
							>
								<div class="flex items-center justify-between">
									<span class="text-lg font-semibold">{option}</span>
									{#if formData.curriculumInterests.includes(option)}
										<svg class="w-5 h-5 text-primary" viewBox="0 0 20 20" fill="none">
											<path d="M5 10L8.33333 13.3333L15 6.66667" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
										</svg>
									{/if}
								</div>
								<p class="text-sm text-base-content/70 mt-1">Access curated lessons and planning tools.</p>
							</button>
						{/each}
					</div>
				</div>
			{/if}

			<div class="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
				<button
					class="btn btn-ghost text-base-content/80"
					onclick={() => goToStep('prev')}
					disabled={currentStep === 1}
				>
					← Back
				</button>

				<div class="flex-1 text-right">
					{#if currentStep < steps.length}
						<button class="btn btn-primary rounded-full px-10" onclick={() => goToStep('next')}>
							Next step
						</button>
					{:else}
						<button class="btn btn-primary rounded-full px-10">Submit application</button>
					{/if}
				</div>
			</div>
		</div>
	</div>
</div>

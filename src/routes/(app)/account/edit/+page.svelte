<script lang="ts">
	import { goto } from '$app/navigation';
	import { supabase } from '$lib/supabase';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	// Form state
	let fullName = $state(data.profile?.full_name || '');
	let location = $state(data.profile?.location || '');
	let preferredSubject = $state(data.profile?.preferred_subject || '');
	let selectedGrades = $state<string[]>(data.profile?.preferred_grades || []);

	let saving = $state(false);
	let error = $state<string | null>(null);
	let success = $state(false);

	const subjectOptions = ['Music', 'Visual Art', 'Creative Writing', 'Dance/Movement', 'Drama'];
	const gradeOptions = ['Grades 5-8', 'Grades 9-12'];

	function toggleGrade(grade: string) {
		if (selectedGrades.includes(grade)) {
			selectedGrades = selectedGrades.filter((g) => g !== grade);
		} else {
			selectedGrades = [...selectedGrades, grade];
		}
	}

	async function handleSave() {
		if (!data.profile) return;

		saving = true;
		error = null;
		success = false;

		try {
			const { error: updateError } = await supabase
				.from('profiles')
				.update({
					full_name: fullName || null,
					location: location || null,
					preferred_subject: preferredSubject || null,
					preferred_grades: selectedGrades.length > 0 ? selectedGrades : null
				})
				.eq('id', data.profile.id);

			if (updateError) throw updateError;

			success = true;
			setTimeout(() => {
				goto('/account');
			}, 1000);
		} catch (err) {
			error = err instanceof Error ? err.message : 'Failed to update profile';
			console.error('Error updating profile:', err);
		} finally {
			saving = false;
		}
	}

	function handleCancel() {
		goto('/account');
	}
</script>

<svelte:head>
	<title>Edit Profile | Sing for Hope Classroom</title>
	<meta name="description" content="Edit your Sing for Hope Classroom profile" />
</svelte:head>

<div class="bg-[#fdf9f1] min-h-screen">
	<div class="container mx-auto px-4 md:px-8 max-w-[800px] pt-16 pb-16">
		<!-- Header -->
		<div class="mb-8">
			<h1 class="text-[48px] md:text-[64px] font-normal leading-[0.9] tracking-[-2.1px] text-[#349552] mb-4">
				Edit Profile
			</h1>
			<p class="text-[18px] text-gray-600">
				Update your account information and preferences
			</p>
		</div>

		<!-- Form -->
		<div class="bg-white rounded-[20px] p-8 shadow-sm">
			<form onsubmit={(e) => { e.preventDefault(); handleSave(); }} class="space-y-6">
				<!-- Full Name -->
				<div>
					<label for="fullName" class="block text-[18px] font-medium text-black mb-2">
						Full Name
					</label>
					<input
						type="text"
						id="fullName"
						bind:value={fullName}
						class="w-full px-4 py-3 border-[1.5px] border-gray-300 rounded-lg text-[16px] focus:outline-none focus:border-[#349552] transition-colors"
						placeholder="Enter your full name"
					/>
				</div>

				<!-- Location -->
				<div>
					<label for="location" class="block text-[18px] font-medium text-black mb-2">
						Location
					</label>
					<input
						type="text"
						id="location"
						bind:value={location}
						class="w-full px-4 py-3 border-[1.5px] border-gray-300 rounded-lg text-[16px] focus:outline-none focus:border-[#349552] transition-colors"
						placeholder="e.g., Minneapolis, MN"
					/>
				</div>

				<!-- Preferred Subject -->
				<div>
					<label for="subject" class="block text-[18px] font-medium text-black mb-2">
						Preferred Subject
					</label>
					<select
						id="subject"
						bind:value={preferredSubject}
						class="w-full px-4 py-3 border-[1.5px] border-gray-300 rounded-lg text-[16px] focus:outline-none focus:border-[#349552] transition-colors bg-white"
					>
						<option value="">Select a subject</option>
						{#each subjectOptions as subject}
							<option value={subject}>{subject}</option>
						{/each}
					</select>
				</div>

				<!-- Preferred Grades -->
				<div>
					<label class="block text-[18px] font-medium text-black mb-3">
						Preferred Grade Levels
					</label>
					<div class="flex flex-wrap gap-3">
						{#each gradeOptions as grade}
							<button
								type="button"
								onclick={() => toggleGrade(grade)}
								class="border-[1.5px] rounded-[49.918px] px-5 py-2 text-[16px] font-normal leading-[1.2] tracking-[-0.16px] transition-colors {selectedGrades.includes(
									grade
								)
									? 'bg-black text-white border-black'
									: 'bg-white text-black border-black hover:bg-gray-50'}"
							>
								{grade}
							</button>
						{/each}
					</div>
				</div>

				<!-- Error Message -->
				{#if error}
					<div class="bg-red-50 border border-red-200 rounded-lg p-4">
						<p class="text-red-600 text-[16px]">{error}</p>
					</div>
				{/if}

				<!-- Success Message -->
				{#if success}
					<div class="bg-green-50 border border-green-200 rounded-lg p-4">
						<p class="text-green-600 text-[16px]">Profile updated successfully!</p>
					</div>
				{/if}

				<!-- Action Buttons -->
				<div class="flex gap-4 pt-4">
					<button
						type="submit"
						disabled={saving}
						class="flex-1 bg-[#349552] text-white text-[18px] font-medium px-6 py-3 rounded-[40px] hover:bg-[#2d7d45] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
					>
						{saving ? 'Saving...' : 'Save Changes'}
					</button>
					<button
						type="button"
						onclick={handleCancel}
						disabled={saving}
						class="flex-1 border-[1.5px] border-black text-black text-[18px] font-medium px-6 py-3 rounded-[40px] hover:bg-black hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
					>
						Cancel
					</button>
				</div>
			</form>
		</div>
	</div>
</div>

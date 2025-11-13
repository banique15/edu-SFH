<script lang="ts">
	/**
	 * ScriptDisplay Component
	 * Displays script/dialogue content with proper formatting
	 * Used primarily for Drama lessons
	 */

	interface ScriptLine {
		type: 'dialogue' | 'stage-direction' | 'character' | 'action';
		character?: string;
		content: string;
	}

	interface Props {
		lines?: ScriptLine[];
		rawContent?: string; // Alternative: raw script text
		sdgColor?: string; // For character name colors
	}

	let { lines, rawContent, sdgColor = '#339933' }: Props = $props();

	// Parse raw content into lines if provided instead of structured lines
	const parsedLines = $derived.by(() => {
		if (lines) return lines;
		if (!rawContent) return [];

		// Simple parser for raw script content
		// Detects character names (ALL CAPS followed by colon) and stage directions (in parentheses)
		const result: ScriptLine[] = [];
		const contentLines = rawContent.split('\n');

		for (const line of contentLines) {
			const trimmed = line.trim();
			if (!trimmed) continue;

			// Check for character name (ALL CAPS followed by colon)
			if (/^[A-Z\s]+:/.test(trimmed)) {
				const [character, ...dialogue] = trimmed.split(':');
				result.push({ type: 'character', character: character.trim(), content: '' });
				if (dialogue.length > 0) {
					result.push({ type: 'dialogue', content: dialogue.join(':').trim() });
				}
			}
			// Check for stage direction (in parentheses or brackets)
			else if (/^\(.*\)$/.test(trimmed) || /^\[.*\]$/.test(trimmed)) {
				result.push({ type: 'stage-direction', content: trimmed });
			}
			// Default to dialogue
			else {
				result.push({ type: 'dialogue', content: trimmed });
			}
		}

		return result;
	});
</script>

<div class="script-display">
	{#each parsedLines as line}
		{#if line.type === 'character'}
			<div class="character-name" style="color: {sdgColor};">
				{line.character || line.content}
			</div>
		{:else if line.type === 'stage-direction'}
			<div class="stage-direction">
				{line.content}
			</div>
		{:else if line.type === 'action'}
			<div class="action">
				{line.content}
			</div>
		{:else}
			<div class="dialogue">
				{#if line.character}
					<span class="inline-character" style="color: {sdgColor};">{line.character}:</span>
				{/if}
				{line.content}
			</div>
		{/if}
	{/each}
</div>

<style>
	.script-display {
		font-family: 'Founders Grotesk', sans-serif;
		line-height: 1.6;
		padding: 1rem;
		background-color: #fafaf9;
		border-radius: 8px;
		border-left: 4px solid currentColor;
	}

	.character-name {
		font-size: 16px;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.5px;
		margin-top: 1rem;
		margin-bottom: 0.25rem;
	}

	.character-name:first-child {
		margin-top: 0;
	}

	.dialogue {
		font-size: 16px;
		color: #1f2937;
		margin-bottom: 0.75rem;
		padding-left: 1rem;
	}

	.inline-character {
		font-weight: 600;
		margin-right: 0.5rem;
	}

	.stage-direction {
		font-size: 14px;
		font-style: italic;
		color: #6b7280;
		margin: 0.5rem 0;
		padding-left: 2rem;
	}

	.action {
		font-size: 15px;
		color: #374151;
		margin: 0.5rem 0;
		padding-left: 1rem;
		font-weight: 500;
	}

	/* Print styles */
	@media print {
		.script-display {
			break-inside: avoid;
			page-break-inside: avoid;
			background-color: transparent;
			border-left: 2px solid currentColor;
		}
	}
</style>

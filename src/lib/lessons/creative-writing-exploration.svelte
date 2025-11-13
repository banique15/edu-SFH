<script lang="ts">
	import MaterialsList from './components/MaterialsList.svelte';
	import DiscussionPrompts from './components/DiscussionPrompts.svelte';
	import ClosingActivity from './components/ClosingActivity.svelte';
	import PersonalConnection from './components/PersonalConnection.svelte';
	import CustomSection from './components/CustomSection.svelte';
	import { getSdgColor } from '$lib/utils/sdg-colors';

	interface Props {
		sdgColor?: string;
	}

	let { sdgColor = getSdgColor(5) }: Props = $props();
</script>

<div class="lesson-content">

	<MaterialsList materials={[{"name":"`\t`Excerpts from stories, poems, or speeches that highlight themes of gender equality or inequality. Choose based on your class age and level.","isOptional":false},{"name":"`\t`Speeches by influential women like Ruth Bader Ginsburg, Michelle Obama, or Greta Thunberg.","isOptional":false},{"name":"`\t`Paper or notebooks for writing","isOptional":false},{"name":"`\t`Pens/Pencils","isOptional":false},{"name":"`\t`Whiteboard or large paper for brainstorming","isOptional":false},{"name":"`\t`Markers","isOptional":false}]} {sdgColor} />

	<CustomSection title={"CREATIVE WRITING EXPLORATION"} content={"<strong>(10-30 MINUTES) (GRADES 5-12)</strong>"} {sdgColor} />

	<CustomSection title={"Song Examples"} content={"<strong>Reading</strong>\n<ul>\n<li>Allow students about 5-10 minutes to engage with the chosen piece, either reading to themselves or aloud (students or educator), giving the class more or less preamble/guidance about the piece depending on their needs.</li>\n</ul>"} {sdgColor} />

	<CustomSection title={"Discussion"} content={"<ul>\n<li>Who is the main character and what are their challenges or triumphs?</li>\n<li>What emotions does their story evoke in you?</li>\n<li>How does their experience relate tot he concept of gender equality?</li>\n<li>What literary devices (metaphors, symbolism, etc.) does the author use to convey their message?</li>\n<li>What are the underlying themes of the piece?</li>\n<li>How do these themes connect to the specific targets of Global Goal 5 (e.g., ending discrimination, violence against women, etc.)?</li>\n</ul><br>Emphasize how creative writing can be a powerful tool for giving voice to marginalized groups, challenging stereotypes, and advocating for social change."} {sdgColor} />

	<PersonalConnection content={"<ul>\n<li>Ask students to reflect on their own experiences or observations related to gender equality.</li>\n<li>Have you ever witnessed or experienced gender bias or discrimination?</li>\n<li>Are there any specific challenges that girls or women face in your community or around the world that you’re aware of?</li>\n<li>What are your hopes for a more gender-equal world?</li>\n</ul><br>Encourage students to share their thoughts and feelings in a safe and respectful environment."} {sdgColor} />

	<ClosingActivity title={"Closing Activity Options"} content={"<p>`\t`<strong>One Word Summary:</strong> Ask each student to think of one word encapsulating their biggest takeaway or feeling about gender equality after this creative writing exploration. Have them share their word with the class, briefly explaining their choice. <strong>Bonus:</strong> Collect all the words to make a word cloud.<br>`\t`<strong>Quote Connection:</strong> Share an inspiring quote about gender equality. Facilitate an open discussion about how this quote connects to the music and activity they experienced in class. <strong>Example:</strong> \"Education is the most powerful weapon which you can use to change the world.\" - Nelson Mandela<br>`\t`<strong>“Unspoken Voices” Challenge:</strong> Ask students to “speed write” a short story, poem, or monologue from the perspective of someone whose voice is often unheard in discussions about gender equality. This could be a person from a marginalized community, a man advocating for gender equality, or even a fictional character representing a specific challenge or solution.<br>`\t`<strong>“Call to Action” Gallery:</strong> Have students write persuasive letters to their local representatives or school administrators, advocating for specific actions to promote gender equality in their community or school. Encourage them to use evidence from the excerpts and discussions to support their arguments. When everyone is finished, place all the letters together on a wall or large poster board, visually showing how when we do things together we are more powerful.</p>"} {sdgColor} />

</div>

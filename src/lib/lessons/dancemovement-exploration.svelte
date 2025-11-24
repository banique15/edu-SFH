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

	let { sdgColor = getSdgColor(6) }: Props = $props();
</script>

<div class="lesson-content">

	<MaterialsList materials={[{"name":"\\","isOptional":false},{"name":"`\t`Device with internet access and projector/screen to display the video","isOptional":false},{"name":"`\t`Whiteboard or large chart paper","isOptional":false},{"name":"`\t`Markers","isOptional":false},{"name":"`\t` Open space for movement","isOptional":true},{"name":"`\t` Audio","isOptional":true}]} {sdgColor} />

	<CustomSection title={"DANCE/MOVEMENT EXPLORATION"} content={"<strong>(10-30 MINUTES) (GRADES 5-12)</strong>"} {sdgColor} />

	<CustomSection title={"Dance Video Examples"} content={"<p>`\t`<strong><a href=\"https://www.youtube.com/@GlobalWaterDances/videos\" target=\"_blank\" rel=\"noopener noreferrer\">Global Water Dances</a></strong><br>`\t`Traditional Rain Dances<br>`\t\t`<a href=\"https://www.youtube.com/watch?v=OznBbtrTrX4\" target=\"_blank\" rel=\"noopener noreferrer\">Native American</a><br>`\t\t`<a href=\"https://www.youtube.com/watch?v=Y0vbRhL__l4\" target=\"_blank\" rel=\"noopener noreferrer\">Hawaiian</a><br><a href=\"https://www.youtube.com/watch?v=so3MrmFxdj8\" target=\"_blank\" rel=\"noopener noreferrer\">African</a></p>"} {sdgColor} />

	<CustomSection title={"Watching"} content={"<ul>\n<li>Allow students about 5-10 minutes to engage with the chosen piece, watching as a class, giving the class more or less preamble/guidance about the piece depending on their needs.</li>\n</ul>"} {sdgColor} />

	<CustomSection title={"Discussion"} content={"<ul>\n<li>What emotions or ideas did the dancers convey through their movements?</li>\n<li>How did the choreography and music create a specific atmosphere or mood?</li>\n<li>What symbols or metaphors related to water or sanitation did you notice in the dance?</li>\n<li>How does the dance relate to the concept of clean water and sanitation?</li>\n<li>Can you identify any specific movements or elements that connect to the targets of Global Goal 6 (e.g., access to clean water, water conservation)?</li>\n<li>What challenges or solutions related to water and sanitation were expressed or implied in the dance?</li>\n<li>Who is the main character and what are their challenges or triumphs?</li>\n<li>What emotions does their story evoke in you?</li>\n<li>How does their experience relate tot he concept of water or sanitation?</li>\n<li>What are the underlying themes of the piece?</li>\n<li>How do these themes connect to the specific targets of Global Goal 6 (e.g., equal access to safe water, improvement of water quality, etc.)?</li>\n</ul><br>Emphasize how dance/movement can be a powerful tool for giving voice to marginalized groups, challenging stereotypes, and advocating for social change."} {sdgColor} />

	<PersonalConnection content={"<ul>\n<li>Ask students to reflect on their own experiences or observations related to water and sanitation.</li>\n<li>How does access to clean water and sanitation impact your daily life?</li>\n<li>Have you ever experienced water scarcity or poor sanitation? How did it affect you?</li>\n<li>What are some actions you can take to conserve water and protect our water resources?</li>\n</ul><br>Encourage students to share their personal stories and connect them to the themes explored in the dance."} {sdgColor} />

	<ClosingActivity title={"Closing Activity Options"} content={"<p>`\t`<strong>One Word Summary:</strong> Ask each student to think of one word encapsulating their biggest takeaway or feeling about clean water and sanitation after this dance/movement exploration. Have them share their word with the class, briefly explaining their choice. <strong>Bonus:</strong> Collect all the words to make a word cloud.<br>`\t`<strong>Quote Connection:</strong> Share an inspiring quote about water and sanitation. Facilitate an open discussion about how this quote connects to the dance and activity they experienced in class. <strong>Example:</strong> \"Water is life's mater and matrix, mother and medium. There is no life without water.\" - Albert Szent-Györgyi<br>`\t`<strong>\"Unspoken Voices\" Challenge:</strong> Ask students to \"speed write\" a short story, poem, or monologue from the perspective of someone whose voice is often unheard in discussions about water and sanitation. This could be a person from a marginalized community, a community member advocating for access to clean water and sanitation, or even a fictional character representing a specific challenge or solution.<br>`\t`<strong>\"Water Dance\" Choreography:</strong> Play music with water-related sounds (e.g. rain, ocean waves, flowing rivers, etc.). Invite students to move freely in response to the music, exploring different qualities of movement that represent water (e.g., fluidity, power, stillness, cleansing, etc.). Encourage them to express their emotions and ideas about water and sanitation through their bodies. Feel free to change the sounds throughout the activity and with it, the students will need to in turn change their qualities of movement to match.</p>"} {sdgColor} />

</div>

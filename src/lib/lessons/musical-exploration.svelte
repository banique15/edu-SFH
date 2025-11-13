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

	let { sdgColor = getSdgColor(13) }: Props = $props();
</script>

<div class="lesson-content">

	<MaterialsList materials={[{"name":"`\t`Speaker or computer for audio playback","isOptional":false},{"name":"Lyrics Sheets (optional and dependent on the song chosen) OR projected lyrics","isOptional":true},{"name":"Images or short video clips depicting the impacts of climate change (e.g., melting glaciers, extreme weather events, deforestation) and climate action (e.g., renewable energy, community gardens, sustainable transportation) [optional, for visual context]","isOptional":true}]} {sdgColor} />

	<CustomSection title={"MUSICAL EXPLORATION"} content={"<strong>(10-30 MINUTES) (GRADES 5-12)</strong>"} {sdgColor} />

	<CustomSection title={"Song Examples"} content={"<p>4 Degrees, Anohni<br>Feels Like Summer, Childish Gambino**<br>Big Yellow Taxi, Joni Mitchell<br>Mercy Mercy Me (The Ecology), Marvin Gaye<br>Trouble in the Water, Common, Malik Yusef, Kumasi ft. Aaron Fresh, Choklate, Laci Kay  <a href=\"https://www.youtube.com/watch?v=FjwXb-Hriik\" target=\"_blank\" rel=\"noopener noreferrer\">Clean Version</a><br>Moon Over Marin, Dead Kennedys<br>A Day in the Life of a Tree, The Beach Boys<br>Atlantic, The Weather Station<br>Supernature, Cerrone<br>(Nothing But) Flowers, Talking Heads<br>We Took the Wrong Step Years Ago, Hawkwind<br>Fall on Me, REM<br>Amazonia, Gojira<br>After the Gold Rush, Neil Young<br>Up from the Skies, The Jimi Hendrix Experience<br>Despite Repeated Warnings, Paul McCartney</p>"} {sdgColor} />

	<CustomSection title={"Discussion"} content={"<ul>\n<li>Ask students to reflect on the lyrics, melody, and overall mood of the song(s)</li>\n<li>What emotions do you feel when you hear this song?</li>\n<li>What are the main messages or themes that these songs convey about the environment and our planet?</li>\n<li>How do the musical elements (melody, rhythm, harmony, dynamics) contribute to the overall mood and message of the song? For example, does the music sound urgent, sad, hopeful, or angry?</li>\n<li>How might the artist’s perspective or the time period in which the song was written influence its message about the environment?</li>\n<li>How does this song(s) relate to the idea of taking urgent action to combat climate change and its impacts (Global Goal 13)?</li>\n<li>Can you connect specific lyrics or musical elements to any of the targets within Global Goal 13? For example, does a song talk about extreme weather (Target 13.1), the need for change (Target 13.2), or raising awareness (Target 13.3)?</li>\n<li>What are some of the challenges and opportunities associated with addressing climate change that these songs might highlight?</li>\n<li>How do these songs make you think differently about our relationship with the planet and the urgency of climate action?</li>\n</ul><br>Emphasize how music can be a powerful tool for expressing emotions, raising awareness, and inspiring action around critical global issues like climate change."} {sdgColor} />

	<PersonalConnection content={"<p>Guiding Questions\n<ul>\n<li>What are some of the ways you have already noticed the effects of climate change in your own community or through the news? (Consider local weather patterns, news about extreme events, changes in nature).</li>\n<li>How does the idea of climate change make you feel? (Worried, hopeful, confused, etc.)</li>\n<li>What are some things you already do or see others doing to help the environment?</li>\n<li>What are some ways that young people like you can get involved in taking action on climate change?</li>\n<li>How can understanding the urgency of climate action impact the choices you make every day?</li>\n</ul><br>Encourage students to share their personal experiences and connect them to the broader themes explored in the song(s).</p>"} {sdgColor} />

	<ClosingActivity title={"Closing Activity Options"} content={"<p>`\t`<strong>One Word Summary:</strong> Ask each student to think of one word encapsulating their biggest takeaway or feeling about climate action after this musical exploration. Have them share their word with the class, briefly explaining their choice. <strong>Bonus:</strong> Collect all the words to make a word cloud.<br>`\t`<strong>Quote Connection:</strong> Share an inspiring quote about climate action or environmental stewardship. Facilitate an open discussion about how this quote connects to the music and activity they experienced in class. <strong>Example:</strong> “Climate change is the single biggest thing that humans have ever done on this planet. The one thing that needs to be bigger is our movement to stop it.” - Bill McKibben<br>`\t`<strong>Songwriting Challenge:</strong> Divide students into small groups and challenge them to write a short song or rap verse about climate action. Encourage them to consider the challenges, solutions, and the importance of action surrounding the climate.<br>`\t`<strong>Global Goal Playlist:</strong> Have students work individually or in groups to brainstorm other songs that they think relate to different aspects of Global Goal 13. They can briefly explain their choices.<br>`\t`<strong>Creative Writing Connection:</strong> Have students write a short story, poem, or song lyrics inspired by the music and discussions, focusing on thei feelings or ideas about climate change and the need for action.</p>"} {sdgColor} />

</div>

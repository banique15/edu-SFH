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

	let { sdgColor = getSdgColor(8) }: Props = $props();
</script>

<div class="lesson-content">

	<MaterialsList materials={[{"name":"Device with internet access and projector/screen to display videos","isOptional":false}]} {sdgColor} />

	<CustomSection title={"DRAMA EXPLORATION"} content={"<strong>(10-30 MINUTES) (GRADES 5-12)</strong>"} {sdgColor} />

	<CustomSection title={"Drama Examples"} content={"<a href=\"https://www.youtube.com/watch?v=4fOIk0-igeE\" target=\"_blank\" rel=\"noopener noreferrer\">Charlie Chaplin \\- Factory Work</a>, Modern Times<br><a href=\"https://www.youtube.com/watch?v=hKi3-5gO4uE\" target=\"_blank\" rel=\"noopener noreferrer\">Chris is Hired</a>, The Pursuit of Happyness<br><a href=\"https://www.youtube.com/watch?v=YvqpyDWvDyE\" target=\"_blank\" rel=\"noopener noreferrer\">Union Scene</a>, Norma Rae<br><a href=\"https://www.youtube.com/watch?v=M37QsnD6nZ4\" target=\"_blank\" rel=\"noopener noreferrer\">Union Terms</a>, Made in Dagenham"} {sdgColor} />

	<CustomSection title={"Viewing"} content={"<ul>\n<li>Allow students about time to engage with the chosen piece, giving the class more or less preamble/guidance about the work depending on their needs.</li>\n</ul>"} {sdgColor} />

	<DiscussionPrompts prompts={["What emotions does this scene evoke in you?","What messages or stories do you think the actors and writers of this piece are trying to convey?","What challenges do the characters face in terms of finding decent work, achieving economic stability, or experiencing fair treatment?","How do these stories portray the impact of economic forces on individuals, families, and communities?","What messages do these scenes convey about the importance of decent work, economic growth, and social justice?","How do these scenes relate to the concept of work/economic growth and the goals of Global Goal 8?","Can you identify any specific part of the scene that resonates with a particular target of Global Goal 8? How so?","How does the scene illustrate the challenges or successes in achieving decent work and economic growth?","What symbols or visual elements stand out to you and what might they represent in the context of decent work and economic growth?","What challenges or solutions related to work and economic growth are expressed or implied?"]} {sdgColor} />

	<PersonalConnection content={"<em> Ask students to reflect on their own experiences related to work and economic growth.<br></em> Have they or someone they know faced challenges related to employment, economic hardship, or unfair working conditions?<br><em> How do these issues affect their lives and communities?<br></em> What actions can they take to promote decent work and economic growth in their own spheres of influence?<br>Encourage students to share their personal stories or observations that connect with the themes explored in the drama examples."} {sdgColor} />

	<ClosingActivity title={"Closing Activity Options"} content={"<strong>One Word Summary:</strong> Ask each student to think of one word encapsulating their biggest takeaway or feeling about employment and economic growth after this drama exploration. Have them share their word with the class, briefly explaining their choice. <strong>Bonus:</strong> Collect all the words to make a word cloud.<br><strong>Quote Connection:</strong> Share an inspiring quote about decent work and economic growth. Facilitate an open discussion about how this quote connects to the scene and activity they experienced in class. <strong>Example:</strong> \"Decent work is not just about having a job; it's about having a job that provides dignity, respect, and a fair wage.\" \\- Juan Somavia, Former Director-General of the International Labour Organization  \"Economic growth without social justice is unsustainable.\" \\- Winnie Byanyima, Executive Director of UNAIDS<br><strong>Artwork Challenge:</strong> Divide students into small groups and challenge them to create a \"flash art\" project with mixed media in 10 minutes. Encourage them to consider the challenges, solutions, and the importance of achieving decent work and economic growth.<br><strong>Write the Change:</strong> Have students write a short story, poem, or short script in 10 minutes inspired by the drama examples and discussion, exploring themes related to decent work, economic growth, and social justice."} {sdgColor} />

</div>

<script lang="ts">
	import MaterialsList from './components/MaterialsList.svelte';
	import DiscussionPrompts from './components/DiscussionPrompts.svelte';
	import ReflectionQuestions from './components/ReflectionQuestions.svelte';
	import AssessmentCriteria from './components/AssessmentCriteria.svelte';
	import CustomSection from './components/CustomSection.svelte';
	import { getSdgColor } from '$lib/utils/sdg-colors';

	interface Props {
		sdgColor?: string;
	}

	let { sdgColor = getSdgColor(3) }: Props = $props();
</script>

<div class="lesson-content">

	<MaterialsList materials={[{"name":"Mirrors (one per student or access to a large mirror for the class)","isOptional":false},{"name":"Variety of art materials:","isOptional":false},{"name":"Drawing paper or sturdy cardstock","isOptional":false},{"name":"Pencils, charcoal, or markers for sketching","isOptional":false},{"name":"Paints (watercolor, acrylic, or tempera)","isOptional":false},{"name":"Colored pencils or crayons","isOptional":false},{"name":"Collage materials","description":"magazines, newspapers, fabric scraps, etc.","isOptional":false},{"name":"Other mixed media options","description":"yarn, beads, natural materials, etc.","isOptional":false},{"name":"Scissors and glue (for collage option)","isOptional":false},{"name":"Whiteboard or large chart paper","isOptional":false},{"name":"Markers","isOptional":false},{"name":"Notebooks or Paper","isOptional":false},{"name":"Pens/Pencils","isOptional":false}]} {sdgColor} />

	<CustomSection title={"Self-Portraits for a Healthy World"} content={"<strong>(30-60 MINUTES)</strong>"} {sdgColor} />

	<CustomSection title={"Gallery Walk and Discussion"} content={"<p>Create a gallery space where students can display their self-portraits.<br>Have students walk around and appreciate each other's work.<br>Facilitate a discussion about the artwork, encouraging students to:<br><em> Share their creative choices and the meaning behind their self-portraits.<br></em> Identify common themes or symbols related to health and well being.<br><em> Discuss how the artwork reflects the different aspects of Global Goal 3\\.<br></em> Talk about hwo they can support each other in their individual and collective journeys towards better health.</p>"} {sdgColor} />

	<ReflectionQuestions questions={["How did creating a self-portrait help you connect with your own health and well being?","How did creating a self-portrait focused on your health and wellbeing differ from creating a traditional self-portrait?","What aspects of your physical, mental, and emotional health did you chose to emphasize in your artwork, and why?","Did the process of self-reflection and brainstorming reveal any new insights about your own wellbeing and health?","In what ways did creating this self-portrait help you connect your personal experiences to the broader themes of Global Goal 3?","How did the discussion about the different dimensions of health (physical, mental, emotional, social) influence you artistic choices?","Did creating your self-portrait help you see the interconnectedness of these different aspects of your health? Can you give an example from your artwork?","How did exploring Global Goal 3 make you think differently about what it means to be truly healthy?","What rold do you think self-awareness and understanding play in our journey towards better health and wellbeing?","What personal goals for your own health and wellbeing did this self-reflection and art making process bring to light?","What are some ways that art, like your self-portrait, could be used to communicate the importance of health and wellbeing to others?"]} {sdgColor} />

	<AssessmentCriteria criteria={["Consistent and enthusiastic involvement in all phases of the lesson, including the initial brainstorming, self-reflection, art creation, gallery walk, and class discussions.","Comprehension of Global Goal 3 and its targets and core concepts (e.g., physical, mental, emotional, social dimensions of health) as demonstrated through the symbolism and intention within the self-portrait and verbal explanations.","Originality and effectiveness in using chosen art materials and techniques (e.g., color, symbolism, mixed media, abstract elements) to represent different aspects of personal health and wellbeing.","How clearly and powerfully the finished self-portrait communicates its intended message about health and wellbeing. Did the artwork successfully evoke thought or emotion in the viewer?","Ability to interpret and provide thoughtful feedback on classmates' artwork, connecting it to the broader themes of health and wellbeing.","Ability to relate elements of the self-portrait or personal health journey to specific concepts of Global Goal 3 during discussions.","Nuance and insight demonstrated in the self-reflection and brainstorming process, particularly in identifying personal strengths, areas for improvement, and aspirations related to personal health."]} {sdgColor} />

</div>

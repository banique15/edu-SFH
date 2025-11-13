<script lang="ts">
	import MaterialsList from './components/MaterialsList.svelte';
	import ReflectionQuestions from './components/ReflectionQuestions.svelte';
	import AssessmentCriteria from './components/AssessmentCriteria.svelte';
	import CustomSection from './components/CustomSection.svelte';
	import { getSdgColor } from '$lib/utils/sdg-colors';

	interface Props {
		sdgColor?: string;
	}

	let { sdgColor = getSdgColor(1) }: Props = $props();
</script>

<div class="lesson-content">

	<MaterialsList materials={[{"name":"Fabric scraps of various colors, textures, and patterns","isOptional":false},{"name":"Yarn or embroidery thread","isOptional":false},{"name":"Needles","isOptional":false},{"name":"Scissors","isOptional":false},{"name":"Whiteboard or large chart paper","isOptional":false},{"name":"Markers","isOptional":false},{"name":"Notebooks or Paper","isOptional":false},{"name":"Pens/Pencils","isOptional":false},{"name":"\\[Optional\\] Embroidery hoops","isOptional":true},{"name":"\\[Optional\\] Cardboard or foam board for mounting","isOptional":true}]} {sdgColor} />

	<CustomSection title={"Weaving the Threads of Resilience: A Textile Art Exploration of Poverty"} content={"<strong>(30-60 MINUTES)</strong>"} {sdgColor} />

	<ReflectionQuestions questions={["What was the most significant thing you learned about poverty or resilience through this textile art exploration?","Did creating this artwork change your perspective on poverty in any way? If so, how?","What new insights did you gain about the power of art, specifically textile art, to communicate complex social issues?","What connections did you make between the physical act of working with the fabric and the abstract concepts of poverty and resilience?","What did you learn about the interconnectedness of individuals and communities in the context of poverty and overcoming challenges?","What challenges did your group face during the collaborative creation process, and how did you overcome them?","How did the different textures, colors, and patterns of the fabric influence your artistic choices and the meaning of your piece?","What did you discover about your own creative process while working with textiles?","How did the metaphor of weaving as interconnectedness and resilience resonate with you during the art-making process?","In what ways did the limitations or possibilities of the materials shape your final artwork?","How did the images, articles, and discussions at the beginning of the lesson influence yoru approach to creating your art?","Did any personal experiences or observations connect with the themes of poverty and resilience explored in this lesson?","What emotions did you experience while creating your artwork, and how do those emotions relate to the issue of poverty?","What are some ways that you can continue to use your creativity to engage with and raise awareness about social issues like poverty?"]} {sdgColor} />

	<AssessmentCriteria criteria={["Consistent and enthusiastic involvement in all phases of the lesson, including initial discussions about poverty, material exploration, collaborative textile creation, and group presentations.","Comprehension of Global Goal 1 and its core concepts (e.g., economic hardship, social exclusion, resilience) as demonstrated through the symbolism and intention with the textile artwork and verbal explanations.","Originality and effectiveness in using chosen textile elements (e.g., weaving, stitching, appliqué, laying of fabric scraps) to convey aspects of poverty and/or resilience.","How clearly and powerfully the finished collaborative artwork communicates its intended message. Did the textile piece successfully evoke thought or emotion related to the experience of poverty or the spirit of resilience?","Ability to work effectively within the small groups, contributing ideas, respecting diverse artistic choices, sharing tasks, and collaborating cohesively to create the shared textile piece.","Ability to articulate artistic choices and to interpret and provide thoughtful feedback on other groups' artwork, connecting it to the broader themes of poverty and resilience.","Nuance and depth of understanding demonstrated in reflections, particularly concerning the role of art in social change and the interconnectedness of individuals and communities in overcoming poverty."]} {sdgColor} />

</div>

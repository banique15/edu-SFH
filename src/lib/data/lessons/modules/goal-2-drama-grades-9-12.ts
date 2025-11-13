import type { LessonContentData } from '../types';
import { registerLessonContent } from '../index';

const lessonContent: LessonContentData = {
	goalNumber: 2,
	artForm: 'Drama' as const,
	gradeLevel: '9-12' as const,
	title: "Seeds of Change: A Drama for Zero Hunger",
	duration: "30-60 MINUTES",
	materials: [
  {
    "name": "Open space for movement and acting",
    "isOptional": false
  },
  {
    "name": "Whiteboard or large chart paper",
    "isOptional": false
  },
  {
    "name": "Markers",
    "isOptional": false
  },
  {
    "name": "Notebooks or Paper",
    "isOptional": false
  },
  {
    "name": "Pens/Pencils",
    "isOptional": false
  },
  {
    "name": "\\[Optional\\] Simple props, Scarves, hats, small objects to represent food, etc.",
    "isOptional": false
  }
],
	introduction: "Have students stand in a circle. Explain the concept of a food chain, how each organism depends on others for survival. Draw a simple food chain on the board, using arrows to show the flow of energy from one organism to the next. Examples: Grass → Rabbit → Fox, Algae → Small Fish → Larger Fish → Bird of Prey, Phytoplankton → Zooplankton → Small Fish → Larger Fish → Shark, Tree → Caterpillar → Bird → Snake, Cactus → Insect → Lizard → Hawk. Introduce a \"hunger chain\" scenario: Explain that they will be creating a human \"hunger chain.\" Give one student a scenario that would disrupt their access to food (the whole class will hear the scenario for reference). Examples: A farmer loses their crop due to a flood, A factory worker is laid off and can no longer afford groceries, A truck driver carrying food is caught in a conflict zone, A family's food stamps are cut due to budget cuts, A store owner raises food prices due to shortages. This student then acts out their struggle silently, using body language and facial expressions to convey their situation. The next student in the circle observes and then reacts to the first student's actions, showing how they are affected by the disruption. This continues around the circle, with each student reacting to the person before them. In all scenarios, the goal is to show how disruptions in one part of the food system can have far-reaching consequences. By embodying different roles in the hunger chain, students can gain a deeper understanding of the interconnectedness of food security and the human impact of disruptions. Discuss how interconnected food security is, and how disruptions can impact entire communities.",
	steps: [
  {
    "title": "Hunger Chain Activity",
    "content": "Students participate in the hunger chain activity, where one student acts out a disruption scenario and each subsequent student reacts to show how the disruption spreads. Examples include: Student 1 (Farmer) finds out crops have failed due to severe drought, Student 2 (Farmworker) observes the farmer's distress and reacts with worry, Student 3 (Grocery Store Owner) sees the farmworker's anxiety and reacts with concern, Student 4 (Customer) notices the grocery store owner's worry and becomes alarmed. The chain continues with the ripple effect spreading through the circle. Alternative scenarios include refugee displacement due to war, with reactions from aid workers, community members, and government officials. After the activity, discuss: How did the initial disruption spread throughout the chain? Did the impact of the disruption change as it went around the circle? How did it feel to be part of the chain? What are some real-world examples of how disruptions can affect entire communities?",
    "order": 1
  },
  {
    "title": "Role Play: Voices of Hunger",
    "content": "Divide students into groups. Assign each group one of Global Goal 2's targets. Students will research their target and brainstorm a short skit portraying the people affected by that issue. This could be farmers, malnourished children, policymakers, scientists, etc. Research resources include: UN Sustainable Development Goals Website, World Food Programme, Food and Agriculture Organization of the United Nations, and target-specific resources. Encourage students to delve deeper into their target: Target 2.1 (Ending Hunger) - Focus on experiences of individuals and families struggling with hunger, Target 2.2 (Ending Malnutrition) - Depict impact of malnutrition on children and women, Target 2.3 (Small-Scale Food Producers) - Portray lives of small-scale food producers, Target 2.4 (Sustainable Food Production) - Showcase impact of climate change on food production, Target 2.5 (Genetic Diversity) - Explore importance of genetic diversity and seed preservation, Targets 2.a/b/c (Investment, Trade, Markets) - Dive into complexities of international cooperation and trade policies. Encourage creativity, having students use humor, drama, or music to convey their message.",
    "order": 2
  },
  {
    "title": "Skit Performances",
    "content": "Have each group perform their skit. After each performance, facilitate discussion about the themes, characters, and connections to Global Goal 2 targets. Encourage the audience to ask questions and provide feedback.",
    "order": 3
  },
  {
    "title": "Reflection & Summary",
    "content": "Have students reflect on their learning experience through discussion or writing. Ask guiding questions like: How did the \"hunger chain\" activity make you feel? Were you surprised, angry, sad, hopeful, etc.? What was challenging or surprising about portraying different characters in the skits? How did different skits connect to each other? What are the most important takeaways about ending hunger and achieving food security? Connect the drama experience to real-world efforts to achieve Global Goal 2.",
    "order": 4
  }
],
	reflectionQuestions: [
  "How did the \"hunger chain\" activity make you feel? Were you surprised, angry, sad, hopeful, etc.?",
  "What was challenging or surprising about portraying different characters in the skits?",
  "How did different skits connect to each other?",
  "What are the most important takeaways about ending hunger and achieving food security?",
  "Connect the drama experience to real-world efforts to achieve Global Goal 2"
],
	discussionPrompts: [
		"How did the initial disruption spread throughout the chain?",
		"Did the impact of the disruption change as it went around the circle?",
		"How did it feel to be part of the chain?",
		"What are some real-world examples of how disruptions can affect entire communities?",
		"What was challenging or surprising about portraying different characters in the skits?",
		"How did different skits connect to each other?",
		"What are the most important takeaways about ending hunger and achieving food security?"
	],
	personalConnection: "Students reflect on how the \"hunger chain\" activity made them feel and what was challenging or surprising about portraying different characters. They connect the drama experience to real-world efforts to achieve Global Goal 2 and consider their role in addressing hunger.",
	closingActivities: [
		{
			title: "Skit Performances",
			description: "Each group performs their skit portraying people affected by Global Goal 2 targets. After each performance, the class discusses themes, characters, and connections to the targets. The audience asks questions and provides feedback."
		},
		{
			title: "Hunger Chain Activity",
			description: "Students participate in a hunger chain activity where disruptions spread through a circle, showing how food system disruptions have far-reaching consequences. They discuss how interconnected food security is and how disruptions can impact entire communities."
		}
	],
	objectives: [
		{
			category: "Knowledge",
			description: "Define food insecurity in its various dimensions (chronic, acute, hidden hunger) and identify its complex causes (poverty, conflict, climate change, inequality, food waste) and far-reaching consequences on individuals, families, and communities globally.",
			nccasStandard: "Cr1.1.la, Cn10.1.la",
			order: 1
		},
		{
			category: "Knowledge",
			description: "Understand the critical interconnectedness of hunger with other global challenges such as poverty, armed conflict, environmental degradation, and social injustice, analyzing how these factors exacerbate food insecurity and hinder sustainable development.",
			nccasStandard: "Cn10.1.la, Cn11.1.la",
			order: 2
		},
		{
			category: "Discourse",
			description: "Participate thoughtfully and respectfully in nuanced discussions about the multifaceted challenges of food insecurity, exploring diverse perspectives from individuals, communities, policymakers, and activists working on solutions.",
			nccasStandard: "Re9.1.la, Cn11.1.la",
			order: 3
		},
		{
			category: "Discourse",
			description: "Analyze and interpret the powerful ways in which music and art across various cultures and time periods have depicted the realities of hunger, food scarcity, and the human yearning for sustenance and dignity.",
			nccasStandard: "Re7.1.la, Re8.1.la",
			order: 4
		},
		{
			category: "Discourse",
			description: "Communicate their developing ideas, informed insights, and potential solutions for addressing hunger and promoting food security through purposeful and impactful creative expression in movement, art creation, and articulate discussions.",
			nccasStandard: "Cr3.1.la, Pr5.1.la",
			order: 5
		},
		{
			category: "Attitudes",
			description: "Develop a profound sense of empathy and compassion for the lived experiences of individuals and communities facing the daily realities of food insecurity, fostering a deeper understanding of their resilience and dignity.",
			nccasStandard: "Re8.1.la, Cn10.1.la",
			order: 6
		},
		{
			category: "Attitudes",
			description: "Appreciate the fundamental importance of achieving food security and improved nutrition as a cornerstone for a healthy, equitable, and sustainable world, recognizing it as a basic human right.",
			nccasStandard: "Cn11.1.la",
			order: 7
		},
		{
			category: "Attitudes",
			description: "Cultivate an open and critical mindset towards considering diverse and innovative solutions and approaches to tackling the complex challenge of hunger, acknowledging the need for multi-faceted and collaborative action.",
			nccasStandard: "Re9.1.la",
			order: 8
		},
		{
			category: "Capacity",
			description: "Develop advanced critical thinking skills by thoroughly analyzing the systemic causes and devastating consequences of hunger and food insecurity at local, national, and global scales, evaluating the strengths and limitations of various proposed solutions.",
			nccasStandard: "Re9.1.la, Cn10.1.la",
			order: 9
		},
		{
			category: "Capacity",
			description: "Practice sophisticated collaboration and articulate communication skills through engaging in thoughtful group activities, co-creating impactful artistic responses, and effectively conveying complex ideas and proposed actions.",
			nccasStandard: "Cr2.1.la, Pr5.1.la",
			order: 10
		},
		{
			category: "Capacity",
			description: "Develop refined creative expression skills through purposeful experimentation and thoughtful application of diverse artistic mediums (music, movement, drama, visual art, writing) to communicate nuanced understandings and inspire meaningful engagement with the issue of hunger.",
			nccasStandard: "Cr3.1.la",
			order: 11
		},
		{
			category: "Action",
			description: "Brainstorm, evaluate, and propose practical, ethical, and sustainable solutions to address food insecurity at various levels, considering the interconnectedness of the food system and the need for systemic change.",
			nccasStandard: "Cr3.1.la, Pr6.1.la, Cn11.1.la",
			order: 12
		},
		{
			category: "Action",
			description: "Identify and explore concrete ways they can take informed and meaningful action within their own communities and beyond to combat hunger, promote food security, and support organizations working towards these goals.",
			nccasStandard: "Pr6.1.la, Cn11.1.la",
			order: 13
		},
		{
			category: "Action",
			description: "Commit to ongoing learning and critical reflection on the complexities of hunger and its solutions, fostering a sense of sustained engagement and responsible global citizenship in the pursuit of a Zero Hunger world.",
			nccasStandard: "Re9.1.la, Cn11.1.la",
			order: 14
		}
	],
	media: [
		{
			title: "UN Sustainable Development Goals Website",
			description: "Research resource for Global Goal 2",
			url: "https://sdgs.un.org/goals/goal2",
			order: 1
		},
		{
			title: "World Food Programme",
			description: "Research resource for hunger and food security",
			url: "https://www.wfp.org",
			order: 2
		},
		{
			title: "Food and Agriculture Organization",
			description: "Research resource for hunger and food security",
			url: "https://www.fao.org/home/en/",
			order: 3
		},
		{
			title: "World Hunger Education Service",
			description: "Research resource for Target 2.1 (Ending Hunger)",
			url: "https://www.worldhunger.org/",
			order: 4
		},
		{
			title: "The Hunger Project",
			description: "Research resource for Target 2.1 (Ending Hunger)",
			url: "https://thp.org/",
			order: 5
		},
		{
			title: "UNICEF Nutrition",
			description: "Research resource for Target 2.2 (Ending Malnutrition)",
			url: "https://www.unicef.org/nutrition",
			order: 6
		},
		{
			title: "International Fund for Agricultural Development",
			description: "Research resource for Target 2.3 (Small-Scale Food Producers)",
			url: "https://www.ifad.org/",
			order: 7
		},
		{
			title: "Crop Trust",
			description: "Research resource for Target 2.5 (Genetic Diversity)",
			url: "https://www.croptrust.org/",
			order: 8
		},
		{
			title: "Svalbard Global Seed Vault",
			description: "Research resource for Target 2.5 (Genetic Diversity)",
			url: "https://www.croptrust.org/our-work/svalbard-global-seed-vault/",
			order: 9
		},
		{
			title: "World Trade Organization Agriculture",
			description: "Research resource for Targets 2.a/b/c (Investment, Trade, Markets)",
			url: "https://www.wto.org/english/tratop_e/agric_e/agric_e.htm",
			order: 10
		},
		{
			title: "International Food Policy Research Institute",
			description: "Research resource for Targets 2.a/b/c (Investment, Trade, Markets)",
			url: "https://www.ifpri.org/",
			order: 11
		}
	],
	assessmentCriteria: [
  "Consistent and enthusiastic involvement in all phases of the lesson, including the \"Hunger Chain\" warm-up, scenario development, skit rehearsals, performances, and class discussions.",
  "Comprehension of Global Goal 2, its targets and core concepts (e.g., malnutrition, small-scale producers, sustainable production) as demonstrated through the thematic content and character portrayal within the skits and verbal explanations.",
  "Originality and effectiveness in using dramatic techniques (e.g., role-play, character development, physical expression, vocal delivery, use of simple props) to vividly represent specific aspects of hunger and food security.",
  "How clearly and powerfully the finished skits communicated the intended message about hunger and its challenges or solutions. Did the performance successfully evoke thought or emotion in the audience?",
  "Ability to work effectively within the small groups, contributing ideas, respecting diverse interpretations, and collaborating cohesively during the skit creation and rehearsal process.",
  "Ability to step into the shoes of different characters affected by hunger (e.g., farmer, refugee, policymaker), conveying the motivations and challenges authentically.",
  "Nuance and depth of understanding demonstrated in reflections, particularly concerning the human experience of hunger and the complexities of achieving Zero Hunger."
],
};

registerLessonContent(lessonContent);

export default lessonContent;

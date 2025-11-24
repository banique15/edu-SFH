import type { LessonContentData } from '../types';
import { registerLessonContent } from '../index';

const lessonContent: LessonContentData = {
	goalNumber: 2,
	artForm: 'Music' as const,
	gradeLevel: '9-12' as const,
	title: "Harvesting Harmony: Music and a World With Zero Hunger",
	duration: "15-45 MINUTES",
	materials: [
  {
    "name": "Audio",
    "isOptional": false
  },
  {
    "name": "Song lyrics and/or summaries printed or displayed",
    "isOptional": false
  },
  {
    "name": "Percussion instruments (drums, shakers, tambourines, etc.) or improvised instruments (pots, pans, boxes, etc.)",
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
  }
],
	introduction: "Introduce the United Nations' Global Goal 2: Zero Hunger. Explain the scope of the goal: ending hunger, achieving food security, improving nutrition, and promoting sustainable agriculture. Share statistics or personal stories that highlight the importance of this goal. Examples: \"Nearly 690 million people went hungry in 2019, up by 10 million from 2018.\" (Source: United Nations), Share the impact of hunger in America, compromises and coping strategies. (Source: Feeding America), \"If recent trends continue, the number of people affected by hunger would surpass 840 million by 2030\" (Source: United Nations), A day in the life of a mother in Uganda's Imvepi refugee camp (Source: Oxfam).",
	steps: [
  {
    "title": "Musical Food Chain",
    "content": "Introduce the concept of a food chain and its importance for a healthy ecosystem. Explain that a food chain is a linear sequence of organisms where each one serves as a source of food for the next. Emphasize the importance of each link in the chain for a healthy ecosystem. Divide students into groups, assigning each group a part of the food chain: Sun (the primary source of energy for all living things), Soil (provides nutrients and a foundation for plant growth), Seed (the starting point for new plant life), Farmer (cultivates and nurtures crops or raises livestock), Consumer (eats plants or animals to obtain energy), Decomposer (breaks down dead organisms, returning nutrients to the soil). Each group creates a rhythmic pattern or short melody on their instruments, representing their role in the food chain. Examples: Sun - A steady, repetitive beat on a drum or rhythmic clapping to represent the sun's constant energy, Soil - A low, rumbling sound on a drum or shaking a container filled with rice/beans/etc. to represent the earth's grounding presence, Seed - A gentle, growing melody on a xylophone or pitched percussion instrument to represent the seed's potential for growth, Farmer - A more complex rhythm on a drum or shaker with varying tempos and dynamics to represent the farmer's active role in cultivation, Consumer - A melodic line on a recorder or other pitched instrument to represent the consumer's dependence on the food chain, Decomposer - A soft, decaying sound on a cymbal or triangle to represent the decomposer's role in the cycle of life. Encourage experimentation with different sounds and tempos to reflect the unique characteristics of each element in the food chain. Layer the rhythms and melodies to create a collaborative musical piece symbolizing the interconnectedness of the food system. Gradually introduce each group's sound, building a collaborative musical piece that demonstrates the interdependence of the food chain. Discuss how disruptions in the food chain, like droughts or pests, can be represented musically (e.g., through sudden changes in tempo or the introduction of dissonant sounds). Simulate disruptions in the food chain by abruptly changing rhythms, adding dissonant sounds, or silencing certain parts of the music. Discuss how these changes reflect real-world problems like droughts, floods, or pesticide use.",
    "order": 1
  },
  {
    "title": "Sounds of Sustainability",
    "content": "Discuss the concept of sustainable agriculture and its importance for long-term food security. Explain that sustainable agriculture involves practices that prioritize environmental health, social equity, and economic viability. It aims to produce food while minimizing negative impacts on the environment and ensuring long-term food security. Brainstorm sounds associated with sustainable farming practices. Examples: Flowing water - Gentle chimes or rain sticks to represent responsible irrigation practices, Buzzing bees - Humming or buzzing sounds to signify pollination and biodiversity, Wind rustling through crops - Shaking leaves or blowing through straws to evoke healthy, diverse fields, Farm animals grazing - Animal sounds or gentle drumming to represent integrated livestock systems. Using instruments or vocalizations, create a soundscape that represents a sustainable farm environment. Combine the sounds to create a harmonious soundscape that embodies a sustainable farm environment. Encourage students to explore different textures and dynamics to create a rich and vibrant soundscape. Discuss how sustainable practices can be reflected in the music. Examples: Steady rhythms - Balanced cycles of a healthy ecosystem, Harmonious melodies - Cooperation between humans and nature in sustainable agriculture, Dynamic shifts - Natural fluctuations of weather and seasons.",
    "order": 2
  },
  {
    "title": "Reflection & Summary",
    "content": "Have students reflect on their learning experience through discussion or writing. Ask guiding questions like: How did the \"Musical Food Chain\" activity help you understand the interconnectedness of our food system? What did the different rhythmic patterns and melodies representing each part of the food chain communicate to you about their role and importance? How did the simulated disruptions in the food chain sound? What emotions or ideas did these musical changes evoke? What did you learn about how music can represent complex systems and concepts like the food chain and sustainable agriculture? How did the \"Sounds of Sustainability\" soundscape differ from the \"disruption\" sounds? What musical elements created that contrast? Did any of the statistics or stories shared at the beginning of the lesson resonate with you personally? How did actively creating music related to hunger and food security make the issue more tangible or impactful? What did you learn about the relationship between human actions and the health of the food system through this musical exploration? What emotions did you experience while creating sounds for either the food chain or the sustainable farm environment? How might the power of music and sound be used to communicate the urgency of achieving Zero Hunger to a wider audience? How can the ideas and sounds we explored today inspire you to make more sustainable food choices in your own life? What role do you think music can play in raising awareness about global issues like hunger and food insecurity? What is one key takeaway about the interconnectedness of the food system and the importance of Zero Hunger that you will remember from this lesson?",
    "order": 3
  }
],
	reflectionQuestions: [
  "How did the \"Musical Food Chain\" activity help you understand the interconnectedness of our food system?",
  "What did the different rhythmic patterns and melodies representing each part of the food chain communicate to you about their role and importance?",
  "How did the simulated disruptions in the food chain sound? What emotions or ideas did  these musical changes evoke?",
  "What did you learn about how music can represent complex systems and concepts like the food chain and sustainable agriculture?",
  "How did the \"Sounds of Sustainability\" soundscape differ from the \"disruption\" sounds? What musical elements created that contrast?",
  "What did you learn about how music can represent complex systems and concepts like the food chain and sustainable agriculture?",
  "Did any of the statistics or stories shared at the beginning of the lesson resonate with you personally?",
  "How did actively creating music related to hunger and food security make the issue more tangible or impactful?",
  "What did you learn about the relationship between human actions and the health of the food system through this musical exploration?",
  "What emotions did you experience while creating sounds for either the food chain or the sustainable farm environment?",
  "How might the power of music and sound be used to communicate the urgency of achieving Zero Hunger to a wider audience?",
  "How can the ideas and sounds we explored today inspire you to make more sustainable food choices in your own life?",
  "What role do you think music can play in raising awareness about global issues like hunger and food insecurity?",
  "What is one key takeaway about the interconnectedness of the food system and the importance of Zero Hunger that you will remember from this lesson?"
],
	discussionPrompts: [
		"How did the \"Musical Food Chain\" activity help you understand the interconnectedness of our food system?",
		"What did the different rhythmic patterns and melodies representing each part of the food chain communicate to you about their role and importance?",
		"How did the simulated disruptions in the food chain sound? What emotions or ideas did these musical changes evoke?",
		"What did you learn about how music can represent complex systems and concepts like the food chain and sustainable agriculture?",
		"How did the \"Sounds of Sustainability\" soundscape differ from the \"disruption\" sounds? What musical elements created that contrast?",
		"Did any of the statistics or stories shared at the beginning of the lesson resonate with you personally?",
		"How did actively creating music related to hunger and food security make the issue more tangible or impactful?",
		"What did you learn about the relationship between human actions and the health of the food system through this musical exploration?",
		"What emotions did you experience while creating sounds for either the food chain or the sustainable farm environment?",
		"How might the power of music and sound be used to communicate the urgency of achieving Zero Hunger to a wider audience?",
		"How can the ideas and sounds we explored today inspire you to make more sustainable food choices in your own life?",
		"What role do you think music can play in raising awareness about global issues like hunger and food insecurity?"
	],
	personalConnection: "Students reflect on how the ideas and sounds explored can inspire them to make more sustainable food choices in their own life. They consider the role music can play in raising awareness about global issues like hunger and food insecurity, and how they can use music to communicate the urgency of achieving Zero Hunger.",
	closingActivities: [
		{
			title: "Sounds of Sustainability",
			description: "Students create a soundscape representing a sustainable farm environment using instruments or vocalizations. They combine sounds like flowing water, buzzing bees, wind rustling through crops, and farm animals grazing to create a harmonious soundscape that embodies sustainable farming practices."
		},
		{
			title: "Musical Food Chain Performance",
			description: "Students perform their collaborative musical piece that demonstrates the interdependence of the food chain. They gradually introduce each group's sound, building a collaborative musical piece, and then simulate disruptions in the food chain to show how real-world problems affect the system."
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
			title: "United Nations - Hunger Statistics",
			description: "Source for hunger statistics and information",
			url: "https://www.un.org/sustainabledevelopment/hunger/",
			order: 1
		},
		{
			title: "Feeding America - Impact of Hunger",
			description: "Source for information about hunger in America",
			url: "https://www.feedingamerica.org/hunger-in-america/impact-of-hunger",
			order: 2
		},
		{
			title: "Oxfam - A Mother's Perseverance",
			description: "Story about a day in the life of a mother in Uganda's Imvepi refugee camp",
			url: "https://www.oxfamamerica.org/explore/stories/a-mothers-perseverance/",
			order: 3
		}
	],
	assessmentCriteria: [
  "Consistent and enthusiastic involvement in all phases of the lesson, including the initial brainstorming, \"Musical Food Chain\" activity, \"Sounds of Sustainability\" exploration, and class discussions.",
  "Comprehension of Global Goal 2 and its targets and core concepts (e.g., interconnectedness of food systems, causes of hunger, sustainable agriculture) as demonstrated through the musical choices and symbolism within the compositions and verbal explanations.",
  "Originality and effectiveness in creating rhythmic patterns, melodies, and soundscapes that vividly represent specific aspects of the food chain, disruptions, or sustainable farming.",
  "How clearly and powerfully the collaborative musical pieces communicated the intended message about hunger and food security. Did the music successfully evoke thought or emotion in the audience?",
  "Ability to work effectively within the small groups, contributing ideas, respecting diverse musical interpretations, and collaborating cohesively to create and perform the musical pieces.",
  "Willingness and ability to maintain a steady beat, execute rhythmic patterns with reasonable precision, and blend sounds/voices effectively within the ensemble, demonstrating musical awareness.",
  "Nuance and depth of understanding demonstrated in reflections particularly concernign the role of music in addressing social issues and the complexities of achieving Zero Hunger."
],
};

registerLessonContent(lessonContent);

export default lessonContent;

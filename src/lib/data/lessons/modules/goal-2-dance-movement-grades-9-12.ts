import type { LessonContentData } from '../types';
import { registerLessonContent } from '../index';

const lessonContent: LessonContentData = {
	goalNumber: 2,
	artForm: 'Dance/Movement' as const,
	gradeLevel: '9-12' as const,
	title: "A Lesson on Hunger Through Dance and Movement",
	duration: "20-40 MINUTES",
	materials: [
  {
    "name": "Open space for movement",
    "isOptional": false
  },
  {
    "name": "Audio",
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
	introduction: "Before diving into the movement, begin by providing some context about the global challenge of hunger. Global Statistics: Briefly present some statistics on the prevalence of hunger. Mention figures like the number of people experiencing hunger daily or the percentage of children suffering from malnutrition. Reliable sources for this information include the World Food Programme or the Food and Agriculture Organization. Causes of Hunger: Explain that hunger is a complex issue with multiple contributing factors. Briefly discuss some major causes like poverty, conflict, climate change, and food waste. Personal Stories: Share compelling personal stories (real or fictionalized) that illustrate the human impact of hunger. These stories can highlight the experiences of individuals and families struggling with food insecurity, demonstrating the challenges they face and the resilience they exhibit. You can find suitable stories through reputable news outlets, documentaries, or organizations focused on hunger relief.",
	steps: [
  {
    "title": "Warm-Up: Fueling the Body",
    "content": "Start with a quick round of movements that convey both energy and lack of energy. Explain that food fuels our bodies for movement, just like fuel powers a car. Examples: Arm circles, punches, and kicks; Leaps, twirls, and other expansive movements; Facial expressions and body language that conveys joy and energy; Slow, dragging steps; Hunched posture, hands clutching stomach; Facial expressions showing pain or exhaustion.",
    "order": 1
  },
  {
    "title": "Movement Challenge: Hunger Pangs vs. Feast Mode",
    "content": "Divide students into two groups: \"Full Bellies\" and \"Empty Stomachs\". Play high-energy music (\"feast mode\") while students in the \"Full Bellies\" group move freely with strong, powerful motions showcasing energy and abundance. Encourage students to move with abandon, celebrating the abundance of food. They could dance, skip, jump, or even roll on the floor, expressing the pure joy of a full belly. For the \"Empty Stomachs\" (\"famine mode\") group, play slow, somber music or have them move in silence. Encourage students to use body language to depict weakness, fatigue, and discomfort. Guide students to express the physical and emotional toll of hunger. They could collapse to the ground, tremble, or clutch their stomachs in pain. Their movements should convey weakness, desperation, and the inability to find sustenance.",
    "order": 2
  },
  {
    "title": "Freeze Frame: The Unequal Plate",
    "content": "Call out \"Unequal Plate!\" Students freeze in their positions. Ask them to consider how food is distributed globally. Some have full plates (high energy) while others have little or nothing (low energy). Examples of questions: What does it feel like to be frozen in a position of abundance or scarcity? How might those feelings impact a person's daily life and opportunities? What emotions might someone experience in each scenario?",
    "order": 3
  },
  {
    "title": "Group Movement: Obstacles on the Plate",
    "content": "Form small groups, each representing a major obstacle to food security. Examples: Poverty, Conflict, Climate Change, Natural Disasters, Political Instability, Lack of Infrastructure, Food Waste. Instruct each group to create a short, choreographed movement sequence showing their assigned obstacle and its impact on access to food. Encourage creative use of body language and interaction to showcase the challenges.",
    "order": 4
  },
  {
    "title": "Interactive Performance",
    "content": "Each group presents their movement sequence in front of the class, briefly explaining their assigned obstacle. After each performance, instead of simply watching, the entire class will participate by mirroring specific movements from the presented sequence. Select key movements that highlight the impact of the obstacle on hunger. For example: If a group performs movements depicting poverty, the class might mirror slumped postures or restricted movement. The mirroring activity helps students viscerally experience the interconnectedness of these issues with hunger and demonstrates how problems like poverty or conflict can limit a person's ability to access food and maintain good health.",
    "order": 5
  },
  {
    "title": "Reflection & Summary",
    "content": "Have students reflect on their learning experience through discussion or writing. Ask guiding questions like: What are some of the underlying causes of hunger that we discussed? (poverty, conflict, climate change, economic inequality, etc.) How does hunger affect a person's physical and mental health? What are some of the social and economic consequences of widespread hunger? How does hunger impact education and learning? How can our individual choices about food consumption affect hunger issues globally? How are hunger, poverty, conflict, and environmental issues linked? How did using movement help you understand hunger? What surprised you about the challenges and global issue of food insecurity? Knowing the obstacles, what are some ways we can work towards a world with less hunger? What are some actions you might take to learn more or get involved in solutions?",
    "order": 6
  }
],
	reflectionQuestions: [
  "What are some of the underlying causes of hunger that we discussed? (poverty, conflict, climate change, economic inequality, etc.)",
  "How does hunger affect a person’s physical and mental health?",
  "What are some of the social and economic consequences of widespread hunger?",
  "How does hunger impact education and learning?",
  "How can our individual choices about food consumption affect hunger issues globally?",
  "How are hunger, poverty, conflict, and environmental issues linked?",
  "How did using movement help you understand hunger?",
  "What surprised you about the challenges and global issue of food insecurity?",
  "Knowing the obstacles, what are some ways we can work towards a world with less hunger?",
  "What are some actions you might take to learn more or get involved in solutions?"
],
	discussionPrompts: [
		"What does it feel like to be frozen in a position of abundance or scarcity?",
		"How might those feelings impact a person's daily life and opportunities?",
		"What emotions might someone experience in each scenario?",
		"What are some of the underlying causes of hunger that we discussed? (poverty, conflict, climate change, economic inequality, etc.)",
		"How does hunger affect a person's physical and mental health?",
		"What are some of the social and economic consequences of widespread hunger?",
		"How does hunger impact education and learning?",
		"How can our individual choices about food consumption affect hunger issues globally?",
		"How are hunger, poverty, conflict, and environmental issues linked?",
		"How did using movement help you understand hunger?",
		"What surprised you about the challenges and global issue of food insecurity?",
		"Knowing the obstacles, what are some ways we can work towards a world with less hunger?",
		"What are some actions you might take to learn more or get involved in solutions?"
	],
	personalConnection: "Students reflect on how their individual choices about food consumption might affect hunger issues globally. They consider actions they might take to learn more or get involved in solutions, and how they can work towards a world with less hunger.",
	closingActivities: [
		{
			title: "Interactive Performance",
			description: "Each group presents their movement sequence in front of the class, briefly explaining their assigned obstacle. After each performance, the entire class participates by mirroring specific movements from the presented sequence, helping students viscerally experience the interconnectedness of these issues with hunger."
		},
		{
			title: "Freeze Frame: The Unequal Plate",
			description: "Students freeze in their positions representing abundance or scarcity. They consider how food is distributed globally and reflect on what it feels like to be in each position, how those feelings impact daily life and opportunities, and what emotions someone might experience in each scenario."
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
			title: "Children Speak Up About the Hunger Crisis",
			artist: "World Vision International",
			description: "Video about the human impact of hunger",
			url: "https://www.youtube.com/watch?v=9HMaxjsnqhg",
			order: 1
		},
		{
			title: "Why Are So Many People Going Hungry?",
			artist: "United Nations",
			description: "Video explaining the causes of hunger",
			url: "https://www.youtube.com/watch?v=Ke06QUfOeTE",
			order: 2
		},
		{
			title: "What Does Hunger Look Like In the United States?",
			artist: "Twin Cities PBS",
			description: "Video about hunger in the United States",
			url: "https://www.youtube.com/watch?v=JZvfjAaCEMg",
			order: 3
		},
		{
			title: "World Food Programme",
			description: "Source for hunger statistics and information",
			url: "https://www.wfp.org/",
			order: 4
		},
		{
			title: "Food and Agriculture Organization",
			description: "Source for hunger statistics and information",
			url: "https://www.fao.org/home/en",
			order: 5
		}
	],
	assessmentCriteria: [
  "Consistent and enthusiastic involvement in all phases of the lesson, including the warm-up, \"Hunger Pangs vs. Feast Mode\" exploration, \"Unequal Plate\" activity, group movement choreography, and class discussions.",
  "Comprehension of the multifaceted nature of hunger (e.g., physical, emotional, social aspects; causes like poverty, conflict, climate change) as demonstrated through the symbolism and intention within the movement pieces and verbal explanations.",
  "Originality and effectiveness in designing and performing movements that vividly represent specific aspects of hunger (e.g., weakness, desperation) and obstacles to food security (e.g., conflict, lack of infrastructure).",
  "How clearly and powerfully the movement sequences communicated the intended message about hunger and its challenges. Did the movements successfully evoke thought or emotion in the audience?",
  "Ability to work effectively within the small groups, contributing ideas, respecting diverse interpretations, and collaborating cohesively during the choreography process. Also, observe the engagement in the whole-class mirroring activity, demonstrating responsiveness and connection.",
  "Willingness to use entire bodies and facial expressions to convey emotions and experiences associated with hungeer and the obstacles to food security.",
  "Nuance and depth of understanding demonstrated in reflections, particularly concerning the role of embodied learning in understanding the human experience of hunger."
],
};

registerLessonContent(lessonContent);

export default lessonContent;

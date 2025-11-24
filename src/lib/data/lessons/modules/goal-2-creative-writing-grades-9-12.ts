import type { LessonContentData } from '../types';
import { registerLessonContent } from '../index';

const lessonContent: LessonContentData = {
	goalNumber: 2,
	artForm: 'Creative Writing' as const,
	gradeLevel: '9-12' as const,
	title: "Words to Nourish: Creative Writing for a Zero Hunger World",
	duration: "30-60 MINUTES",
	materials: [
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
	introduction: "Provide each student with a sheet of paper/have them use their notebooks. Instruct them to divide the paper into two columns: \"Hunger\" and \"Abundance.\" Give them a few minutes to brainstorm and write down three words or phrases that come to mind for each column. Encourage them to think beyond the literal definitions and consider emotions, images, or personal experiences. Invite students to share their words with the class. Create a list on the board or large paper, grouping similar words together. Facilitate a short discussion around contrasts, connections, emotions, and personal experiences. Briefly re-introduce UN Global Goal 2 and its targets if necessary. Explain that the creative writing activity will help them explore different perspectives and challenges related to achieving these goals.",
	steps: [
  {
    "title": "Choose Your Voice",
    "content": "Decide if students will work individually or in small groups. If working individually, assign each student a unique target from Global Goal 2. If working in small groups, assign each group a target. If possible, try to cover all targets. Consider having students randomly select their target or allowing them to choose one that interests them. Explain that the goal of this activity is to step into the shoes of someone whose life is directly impacted by the chosen target. Emphasize the importance of empathy and understanding different perspectives. Encourage students to think beyond the obvious and consider less visible groups affected by hunger and food insecurity.",
    "order": 1
  },
  {
    "title": "Character Brainstorming",
    "content": "Remind students that there are no right or wrong answers when it comes to choosing their character. Encourage students to delve deeper into their chosen character and their world. Have them create a character profile, considering details like: Name (a name that reflects their cultural background or personality), Age, Location (where do they live? rural village, bustling city, refugee camp, etc.), Family and Community (who are the important people in their lives?), Daily Life (what are their typical activities and routines?), Personality (what are their strengths, weaknesses, and dreams?). Guide students to identify the specific challenges and struggles their character faces that are directly related to their assigned target. Encourage students to think about their character's hopes and dreams for the future. What changes would they like to see in their community or the world? Have students brainstorm potential solutions or actions that could improve their character's situation and contribute to achieving the Global Goal 2 Targets. Remind them to consider both individual and collective actions, as well as local and global solutions.",
    "order": 2
  },
  {
    "title": "Write Your Story",
    "content": "Give students the freedom to choose their preferred form of creative writing: Short Story (tell a narrative about a day in the life of their character, highlighting their challenges, hopes, and actions), Poem (use vivid imagery and language to capture the emotions and experiences of their character), or Monologue (write a powerful speech from their character's point of view, expressing their struggles, dreams, and calls to action). Provide writing prompts or sentence starters if needed. Encourage students to use sensory details and strong verbs to bring their stories to life. Circulate the room, offering support and guidance as they write.",
    "order": 3
  },
  {
    "title": "Sharing Circle",
    "content": "Arrange the classroom in a circle if possible. This fosters a sense of equality and encourages everyone to participate. Establish guidelines for respectful listening and feedback, emphasizing the importance of creating a safe and supportive space where everyone feels comfortable sharing their work. Remind students to: Listen attentively without interrupting, Focus on providing positive feedback and constructive suggestions, Avoid judgement or criticism, Use \"I\" statements when expressing their opinions. Invite students to volunteer to share their writing aloud. If the class is large, divide students into smaller groups to share their writing. If some students are hesitant to share aloud, offer alternative options, such as: Partner Sharing (pair students up to read their writing to each other), Written Feedback (have students exchange their writing and provide written comments), or Anonymous Sharing (collect the writing pieces and read them aloud anonymously). Encourage students to actively listen to each other's writing, noting key themes, emotions, and ideas. After each sharing, guide the discussion toward identifying connections between the different pieces: Common Themes (what common challenges or hopes do the characters share?), Contrasting Perspectives (how do the different characters' experiences highlight the complexity of hunger and food insecurity?), Solutions and Actions (what solutions or actions are suggested in the writing? How do these connect to the Global Goal 2 targets?).",
    "order": 4
  },
  {
    "title": "Reflection & Summary",
    "content": "Have students reflect on their learning experience through discussion or writing. Ask guiding questions like: How did writing from your character's perspective affect your understanding of the hunger and food insecurity? What surprised you or challenged your assumptions? What new insights did you gain about hunger and food security? How do the stories we shared connect to the challenges and solutions outlined in Global Goal 2? What role can creative expression play in raising awareness and inspiring action around social issues? How do you feel about your ability to make a difference in the fight against hunger? Emphasize the power of individual and collective action to make a difference.",
    "order": 5
  }
],
	reflectionQuestions: [
  "How did writing from your character’s perspective affect your understanding of the hunger and food insecurity?",
  "What surprised you or challenged your assumptions?",
  "What new insights did you gain about hunger and food security?",
  "How do the sotries we shared connect to the challenges and solutions outlined in Global Goal 2?",
  "What role can creative expression play in raising awareness and inspiring action around social issues?",
  "How do you feel about your ability to make a difference in the fight against hunger?"
],
	discussionPrompts: [
		"What are some of the stark contrasts between the words associated with \"hunger\" and \"abundance\"?",
		"Are there any unexpected connections or similarities between the two columns?",
		"What emotions do these words evoke? How do they make you feel?",
		"Has anyone had personal experiences with hunger or abundance? How did those experiences shape their understanding of these concepts?",
		"What specific challenges and struggles does your character face that are directly related to their assigned target?",
		"What are your character's hopes and dreams for the future? What changes would they like to see in their community or the world?",
		"What potential solutions or actions could improve your character's situation and contribute to achieving the Global Goal 2 Targets?",
		"What common challenges or hopes do the characters share?",
		"How do the different characters' experiences highlight the complexity of hunger and food insecurity?",
		"What solutions or actions are suggested in the writing? How do these connect to the Global Goal 2 targets?"
	],
	personalConnection: "Students reflect on how writing from their character's perspective affected their understanding of hunger and food insecurity. They consider their ability to make a difference in the fight against hunger and the power of individual and collective action.",
	closingActivities: [
		{
			title: "Sharing Circle",
			description: "Students arrange in a circle and share their writing aloud, or participate in smaller groups, partner sharing, written feedback, or anonymous sharing. They actively listen to each other's writing, noting key themes, emotions, and ideas, and identify connections between different pieces."
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
	assessmentCriteria: [
  "Consistent and enthusiastic involvement in all phases of the lesson, including the initial \"Hunger\" and \"Abundance\" brainstorm, the creative writing exercise, and active participation in class discussions (including the optional peer review or sharing circle).",
  "Comprehension of Global Goal 2 and its targets and core concepts (e.g., food insecurity, malnutrition, sustainable agriculture, resilience) as demonstrated through the thematic content, specific details, and chosen perspectives within the creative writing piece.",
  "Originality and effectiveness in using chosen creative writing techniques (e.g., vivid imagery, sensory details, emotional language, character voice, plot elements for stories/monologues, persuasive arguments for essays) to convey the message about hunger.",
  "How clearly and powerfully the finished creative writing piece communicates its intended message about Zero Hunger. Did the writing successfully evoke thought or emotion in the reader/listener?",
  "Ability to effectively portray a character's experience from a specific viewpoint (e.g., a single mother, a farmer, a refugee), conveying the thoughts, feelings, and challenges related to hunger authentically (if applicable).",
  "Ability to provide thoughtful, specific, and supportive feedback to peers, focusing on clarity, language, and emotional impact (if applicable).",
  "Nuance and depth of understanding demonstrated in reflections, particularly concerning the human experience of poverty and the complexities of achieving Zero Hunger."
],
};

registerLessonContent(lessonContent);

export default lessonContent;

import type { LessonContentData } from '../types';
import { registerLessonContent } from '../index';

const lessonContent: LessonContentData = {
	goalNumber: 2,
	artForm: 'Creative Writing' as const,
	gradeLevel: '5-8' as const,
	title: "Writing Our Way to a Full Plate",
	duration: "40-60 MINUTES",
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
    "name": "Paper or notebooks",
    "isOptional": false
  },
  {
    "name": "Pens/Pencils",
    "isOptional": false
  },
  {
    "name": "\\[Optional\\] Simple drawing materials (crayons,colored pencils) if students prefer to draw their story map",
    "isOptional": false
  }
],
	introduction: "Welcome students to an exciting adventure in creative writing, and explain that they will use the power of words to explore the important idea of Global Goal 2: Zero Hunger.\n\n* Explain that Global Goal 2 is a commitment to make sure everyone, everywhere has enough healthy food to eat, all the time. It means kids can grow strong and learn well, and families have enough nutritious food every day.  \n* It’s about fairness, health, and making sure no one goes hungry.\n\nTell the class that writers are like world-class chefs. They can mix words together to create stories that make people think, feel, and even inspire them to help\\!  \nToday, they will become “Storytellers for Zero Hunger,” using their words to show what happens when people don’t have enough food, and how they can find solutions to make sure every plate is full.",
	steps: [
  {
    "title": "My Food Story Map",
    "order": 1,
    "content": "Explain that they class will create a \"Food Story Map\" to help plan what they will write. It's like drawing a path for the story, from a challenge to a solution.  \nHave each student take a piece of paper and fold it into three sections, creating three \"boxes\" or \"steps\" for the story map. *(Alternatively, draw a simple winding path on the board that has a start, middle, and end.)*\n\n* *Step 1/The Beginning/The Challenge/\"The Empty Plate\"*  \n  * Ask students to think about what it's like when someone doesn't have enough food. What does it look like, sound like, or feel like to not have enough food?  \n    * In this first box, draw a small picture or write a few words that show a problem related to hunger.   \n  * Examples:  \n    * An empty plate, a quiet kitchen, a tummy rumbling, someone feeling weak or tired, worried eyes, a withered garden, very little food in the pantry, searching for food, feeling sad or left out.  \n* *Step 2/The Middle/The Action/The Journey or Helping Hand:*  \n  * Ask students: What happens next? What is the challenge to getting food? OR Whats the first step someone takes to help? How does a helping hand get involved?  \n    * In this middle box, draw or write about the action, the journey, or the struggle to find food or the effort to help.  \n  * Examples:  \n    * Someone is looking for food, a friend offers a helping hand, a community builds a garden together, people share food, a new idea pops up, someone plants a seed, people start working as a team, a message of hope spreads, a neighbor shares vegetables.  \n* *Step 3/The End/The Solution or Hope/The Full Plate*  \n  * Ask students: What does it look, sound, or feel like when the problem is solved and everyone has enough food? What's the happy ending? How do people feel?  \n    * In this last box, draw or write about the solution, the joy, and the abundance.  \n  * Examples:  \n    * A table full of delicious food, laughter around a meal, strong and healthy people, sounds of busy cooking, children playing with energy, a vibrant garden, smiles, sharing, new friendships, feeling thankful, feeling full and happy, celebrating community.\n\nCirculate, offering support and asking questions like:\n\n* How does your first picture show that feeling of wanting fod?  \n* What kind of action is happening in your middle box?  \n* What happy sounds would you hear in your \"Full Plate\" picture?"
  },
  {
    "title": "Write The Story of Hope",
    "order": 2,
    "content": "Explain to the students that they will now use their Food Story Maps to write their very own short story or poem about Global Goal 2\\.   \nThey can tell the story/write the poem from the point of view of a child, a family, or even a magical seed growing in a garden, whatever inspires them.  \nOffer creative writing prompts if needed, encouraging the class to use their story map ideas.  \nExamples:\n\n* *The Empty Lunchbox's Journey*  \n  * Write a story or poem about a child with an empty lunchbox, and how, with the help of friends or community, that lunchbox becomes full. Describe what happens, what they see, hear, and feel along the way.  \n* *The Garden's Secret*  \n  * Write a story or poem about a magical garden that grows food for everyone in a neighborhood. What makes this garden special? How do people work together to care for it? What does it feel like when everyone has fresh, healthy food?  \n* *A Recipe for a Happy Town*  \n  * Write a poem that is like a recipe for a town where no one is hungry. What are the \"ingredients\" (like kindness, sharing, hard work)? What \"steps\" do people take? What's the delicious \"result\" for the community?\n\nEncourage students to use vivid details and strong action words from their Story Map to bring their writing to life. Remind them to think about the feelings of their characters.  \nCirculate, offering support and guidance as they write. Ask questions like:\n\n* How can you show that someone is hungry without saying \"they were hungry\"?  \n* What sounds can you add to your happy ending?"
  },
  {
    "title": "Sharing Our Stories",
    "content": "Organize students into pairs or small groups (3-4 students)  \nInstruct them to take turns reading their writing aloud to their partner/group.  \nAs they listen, encourage students to offer kind and helpful comments. Guide them with questions.  \nExamples:\n\n* What did you see or feel when you heard this story/poem?  \n* What was your favorite part, and why?  \n* How did this story/poem connect to our Global Goal 2: Zero Hunger?  \n* Did any words or phrases stand out to you?\n\n\\[Optional\\] After group sharing, invite a few volunteers to share their writing with the whole class. Facilitate a supportive discussion about the different ideas and feelings expressed in the writing.  \nCelebrate the efforts in using words to make a difference.",
    "order": 3
  },
  {
    "title": "Recipe for Hope (Quick Draw/Write)",
    "content": "Explain that to finish this lesson, the class will quickly create a \"Recipe for Hope.\"  \nHave students think about everything they learned and created today in regards to Global Goal 2\\. \n\n* Ask what they think the most important \"ingredients\" or actions are to make sure everyone has enough food?  \n* Have studnets quickly write or draw the 1-3 \"ingredients\" or actions for solving hunger on a small piece of paper or in their journals. They can be single words (e.g., \"sharing,\" \"kindness,\" \"gardens\") or small symbols/drawings.  \n* Have students briefly share one idea aloud, or silently reflect internally.",
    "order": 4
  },
  {
    "title": "Reflection & Summary",
    "order": 5,
    "content": "Have students reflect on their learning experience through discussion or writing.  \nAsk guiding questions like:\n\n* How did creating a \"Food Story Map\" and writing your own story/poem help you understand Global Goal 2: Zero Hunger in a new way?  \n* What did you learn about the power of using words to show what happens when people are hungry, and how people can help?  \n* Which stories or ideas from your classmates made you think or feel the most, and why?  \n* What's one small thing you can do in your own life today to help plant \"seeds of help\" for Global Goal 2 in your home or community?"
  }
],
	reflectionQuestions: [
  "How did creating a “Food Story Map” and writing your own story/poem help you understand Global Goal 2: Zero Hunger in a new way?",
  "What did you learn about the power of using words to show what happens when people are hungry, and how people can help?",
  "Which stories or ideas from your classmates made you think or feel the most, and why?",
  "What’s one small thing you can do in your own life today to help plant “seeds of help” for Global Goal 2 in your home or community?"
],
	discussionPrompts: [
		"What does it look like, sound like, or feel like to not have enough food?",
		"What happens next? What is the challenge to getting food? OR What's the first step someone takes to help? How does a helping hand get involved?",
		"What does it look, sound, or feel like when the problem is solved and everyone has enough food? What's the happy ending? How do people feel?",
		"How does your first picture show that feeling of wanting food?",
		"What kind of action is happening in your middle box?",
		"What happy sounds would you hear in your \"Full Plate\" picture?",
		"How can you show that someone is hungry without saying \"they were hungry\"?",
		"What sounds can you add to your happy ending?",
		"What did you see or feel when you heard this story/poem?",
		"What was your favorite part, and why?",
		"How did this story/poem connect to our Global Goal 2: Zero Hunger?",
		"Did any words or phrases stand out to you?",
		"What do you think the most important \"ingredients\" or actions are to make sure everyone has enough food?"
	],
	personalConnection: "Students reflect on how they can personally contribute to addressing hunger in their own lives and communities. They consider actions they can take today to help plant \"seeds of help\" for Global Goal 2.",
	closingActivities: [
		{
			title: "Recipe for Hope",
			description: "Students quickly create a \"Recipe for Hope\" by writing or drawing 1-3 \"ingredients\" or actions for solving hunger. These can be single words (e.g., \"sharing,\" \"kindness,\" \"gardens\") or small symbols/drawings. Students briefly share one idea aloud or silently reflect internally."
		}
	],
	objectives: [
		{
			category: "Knowledge",
			description: "Identify and define basic needs related to food (e.g., enough food, healthy food, clean water for growing food) and recognize what it means to be hungry or to have enough food to eat.",
			nccasStandard: "Cr1.1.Ma, Cn10.1.Ma",
			order: 1
		},
		{
			category: "Knowledge",
			description: "Recognize that hunger is a problem that affects people in many places around the world, and understand that different communities have diverse experiences with food.",
			nccasStandard: "Cn10.1.Ma, Cn11.1.Ma",
			order: 2
		},
		{
			category: "Knowledge",
			description: "Understand that having access to enough healthy food helps people grow strong, learn well, and feel happy.",
			nccasStandard: "Cn10.1.Ma, Cn11.1.Ma",
			order: 3
		},
		{
			category: "Discourse",
			description: "Explore and describe how feelings and messages about hunger and food are expressed through various art forms (visual art, creative writing, dance, drama, music) by reflecting on visuals, words, music/sounds, movement, and stories.",
			nccasStandard: "Re7.1.Ma, Re8.1.Ma",
			order: 4
		},
		{
			category: "Discourse",
			description: "Participate in respectful discussions about what happens when people don't have enough food and simple ways people and communities can help each other get food.",
			nccasStandard: "Re9.1.Ma, Cn11.1.Ma",
			order: 5
		},
		{
			category: "Discourse",
			description: "Communicate their own thoughts, feelings, and ideas about Global Goal 2: Zero Hunger through creative expression in various artistic mediums.",
			nccasStandard: "Cr3.1.Ma",
			order: 6
		},
		{
			category: "Attitudes",
			description: "Develop empathy and compassion for individuals and communities experiencing hunger, understanding the importance of everyone having access to healthy food.",
			nccasStandard: "Re8.1.Ma, Cn10.1.Ma",
			order: 7
		},
		{
			category: "Attitudes",
			description: "Appreciate the value of food and the efforts involved in growing, harvesting, and preparing it, recognizing it as a precious resource that should not be wasted.",
			nccasStandard: "Cn11.1.Ma",
			order: 8
		},
		{
			category: "Attitudes",
			description: "Cultivate a mindset of kindness and helpfulness, fostering a personal desire to contribute to positive change and ensure everyone has enough to eat.",
			nccasStandard: "Re9.1.Ma",
			order: 9
		},
		{
			category: "Capacity",
			description: "Develop critical thinking skills by observing and discussing how different artistic elements can represent the challenges of hunger and the joy of having enough food.",
			nccasStandard: "Re9.1.Ma, Cn10.1.Ma",
			order: 10
		},
		{
			category: "Capacity",
			description: "Practice collaboration and communication skills through engaging in group art projects, shared writing activities, and coordinated movement, drama, or musical performances to tell stories about hunger and hope.",
			nccasStandard: "Cr2.1.Ma, Pr5.1.Ma",
			order: 11
		},
		{
			category: "Capacity",
			description: "Develop creative expression skills through purposeful experimentation with diverse artistic mediums (visual art, creative writing, dance, drama, music) to communicate their understandings and feelings about \"Zero Hunger.\"",
			nccasStandard: "Cr3.1.Ma",
			order: 12
		},
		{
			category: "Action",
			description: "Identify simple acts of kindness and concrete ways they can help address food needs in their daily lives and communities.",
			nccasStandard: "Pr6.1.Ma, Cn11.1.Ma",
			order: 13
		},
		{
			category: "Action",
			description: "Participate in collaborative artistic projects that creatively express messages of hope, community support, and solutions for a world without hunger.",
			nccasStandard: "Cr3.1.Ma, Pr6.1.Ma",
			order: 14
		},
		{
			category: "Action",
			description: "Reflect on their personal role in contributing to a world where everyone has enough food, fostering a sense of responsible global citizenship in working towards Zero Hunger.",
			nccasStandard: "Re9.1.Ma, Cn11.1.Ma",
			order: 15
		}
	],
	assessmentCriteria: [
  "Consistent and enthusiastic involvement in all phases of the lesson, including the brainstorming, individual story mapping, creative writing, partner/group sharing, and class discussions.",
  "Understanding of the core concept of Global Goal 2 (Zero Hunger, ensuring everyone has enough healthy food), as demonstrated through the content and message of the \"Food Story Map\" and written piece, and verbal contributions.",
  "Originality and effort put into their story or poem. Look for evidence of connection to Global Goal 2 (does the writing clearly relate to the idea of people needing food or people helping each other get food), use of details (are there attempts to use sensory details and descriptive words from the brainstorm to make the writing vivid), and narrative/poetic structure (does it follow a basic story arc or poetic structure as outlined in the prompt)?",
  "Ability to respectfully share writing with peers and offer kind and helpful comments during the sharing sessions.",
  "Ability to articulate learning and personal connections during the reflection and summary discussion."
],
};

registerLessonContent(lessonContent);

export default lessonContent;

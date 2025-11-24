import type { LessonContentData } from '../types';
import { registerLessonContent } from '../index';

const lessonContent: LessonContentData = {
	goalNumber: 7,
	artForm: 'Creative Writing' as const,
	gradeLevel: '5-8' as const,
	title: "The Power of Words: Convincing for Clean Energy",
	duration: "30-60 MINUTES",
	materials: [
  {
    "name": "Paper or notebooks",
    "isOptional": false
  },
  {
    "name": "Pens/pencils",
    "isOptional": false
  },
  {
    "name": "Whiteboard or large chart paper",
    "isOptional": false
  },
  {
    "name": "Energy Cards: Small slips of paper or index cards with words, phrases, or short scenarios related to energy. You will need one set per group.",
    "isOptional": false
  }
],
	introduction: "Welcome students to an exciting creative writing class. Explain that they will use their words and imagination to explore a really important idea: Global Goal 7, Affordable and Clean Energy.  \nThis goal focuses on making sure everyone, everywhere, has access to energy that is affordable (not too expensive), reliable (always there when you need it), and clean (good for the planet). Emphasize that this means lights for homes and schools, clean ways to cook food, and power for our devices, all without harming the Earth.  \nExplain to students that today, they will become “persuasive writers.” Clarify that persuasive writing is all about trying to convince someone of think, feel, or do something, using strong words and good reasons. Tell students that persuasive writing is like being a detective for ideas — you gather clues (reasons) to prove your point.  \nExplain that persuasive writing is actually everywhere: in ads for toys and electronics, in letters to congress people, or even when you convince a friend to play a certain game (just not written down\\!). Today, they will use persuasive writing to convince others about the importance of clean energy.",
	steps: [
  {
    "title": "Warm Up",
    "order": 1,
    "content": "Explain that the class will play a quick warm up game, where you will give students a simple topic, and they will then quickly think of one “claim” (something they believe is true about the topic). They will then give one “spark” for that same topic (a short reason or idea that makes their claim convincing or exciting).  \nExamples\n\n* *Topic: Recess*  \n  * Ask: Make a claim about recess. What do you think about it?  \n    * Students share: Recess is the best part of the day or recess helps us focus in class, etc. Have a few students share their claims.  \n  * Then ask: Now, give it a spark. What’s one quick reason or exciting idea that supports your claim?  \n    * Students share: Because we get to run and play or because it gives our brains a break, etc. Have a few students share their claims with sparks.  \n* *Topic: Reading*  \n  * Ask: Make a claim about reading. What do you think about it?  \n    * Students share: Reading is so fun or reading helps you learn amazing things, etc.  \n  * Then ask: Now, give it a spark. What’s one quick reason or exciting idea that supports your claim?  \n    * Students share: Because you can visit other worlds or because it gives you so much new information.  \n* *Topic: Saving Energy*  \n  * Ask: Make a claim about saving energy. What do you think about it?  \n    * Students share: Saving energy is important or saving energy helps everyone, etc.  \n  * Then ask: Now, give it a spark. What’s one quick reason or exciting idea that supports your claim?  \n    * Students share: Because it helps the earth or because it means more power for others, etc.\n\nConclude the warm up activity by affirming the quick thinking about claims and reasons, explaining that these are the building blocks of persuasive writing."
  },
  {
    "title": "Writing Our Energy Messages",
    "order": 2,
    "content": "Divide students into small groups (3-4 groups per class). Provide each group with a set of Energy Fact/Feeling Cards (each group should have about 20 cards total).  \nInstruct groups to look at their cards and explain the categories.\n\n* *Energy Problems:* Cards that describe challenges or negative impacts of energy.  \n  * [Examples](https://docs.google.com/document/d/1hvun20-VHd1Z2p5mc5dTjvA7npPbV8GyB2zvn4IkyVM/edit?usp=drive_link)  \n* *Clean Energy Powers:* Cards that describe benefits of clean energy or how it works.  \n  * [Examples](https://docs.google.com/document/d/17q-qIiA6sjbcj4sI1Hnkci2k7sdDg46u0zIfMsHgnxI/edit?usp=drive_link)\n\nInstruct students to sort their cards into these categories.   \nEncourage groups to discuss why each card fits into a particular pile.  \nCirculate, offering guidance and asking guiding questions like:\n\n* Why did you put this card in Energy Problems?  \n* What’s one card in Clean Energy Powers that makes your feel positive?  \n* Which idea sparks your interest the most?\n\nAfter sorting, instruct each individual student to choose one idea from a card that they find particularly interesting or important. This will be the main idea they focus on for their persuasive writing piece. Students can choose a card from Energy Problems OR Clean Energy Powers.\n\n* If an Energy Problems idea is chosen, the persuasive writing will focus on convincing others why this problem is bad and why it needs to be solved through clean energy.  \n* If a Clean Energy Powers idea is chosen, the persuasive writing will focuson convincing others why this clean energy solution is good and why we should support it."
  },
  {
    "title": "My Energy Message",
    "order": 3,
    "content": "Make sure each student has paper/journal and pen/pencil.  \nExplain: You will now write a short persuasive piece (about 1-2 paragraphs) to convince someone about Global Goal 7: Affordable and Clean Energy.  \nInstruct students to choose one of the following formats:\n\n* *Persuasive Paragraph:* Write a short persuasive pice trying to convince a friend, family member, or classmate to save energy or use clean energy, using the idea from the chosen card.  \n* *Community Announcement:* Write a short announcement (like for morning announcements or a school newspaper, speaking to many instead of one) trying to convince people to support clean energy, using the idea from the chosen card.\n\nEmphasize the key parts of persuasive writing:\n\n* *Start strong:* Grab attention\\! (e.g., Did you know…? Imagine a a world where…).  \n* *Give reasons:* Use solid ideas to support your point (e.g., Clean air is better for our lungs. Solar power is always on\\!).  \n* *Use convincing words:* Use strong verbs and words that show why your idea is important (e.g., vital, amazing, harmful, important, terrible, sparkling, powerful).  \n* *Tell the audience what to do:* A clear “call to action” (e.g., So turn off the lights\\! Join the clean energy team\\!).\n\nCirculate, offering guidance as the class writes. Ask guiding questions like:\n\n* Whats the one most important reason you want to share from your chosen card?  \n* How can you make your opening sentence grab the reader’s attention?  \n* Can you use a word you remember from your Clean Energy Powers cards to make your reason sound even better?  \n* What would you like your reader to do after reading your message?  \n* Does your message make someone feel hopeful, worried, or ready to act?"
  },
  {
    "title": "Peer Review and Sharing",
    "order": 4,
    "content": "Have students pair up or divide them into pairs. Instruct them to exchange their persuasive pieces with their partner.  \nGuide the peer review process with guiding questions, focusing on the persuasive elements.  \nExamples:\n\n* What did your partners message want you to do or think? Were you convinced? Why or why not?  \n* What were the strongest reasons your partner used? Which ideas from our brainstormed cards did they use well?  \n* Did their message make you feel something? What emotions did it create?  \n* What is one positive comment you can give them about their writing?  \n* What is one suggestion to make their message even more convincing?\n\nIf time permits and if desired, allow a few minutes for students to make quick revisions based on their partner’s feedback. Volunteers can then share their persuasive piece with the whole class."
  },
  {
    "title": "Reflection & Summary",
    "order": 5,
    "content": "Have students reflect on their learning experience through discussion or writing.  \nAsk guiding questions like:\n\n* How did trying to convince someone with your writing help you understand Global Goal 7: Affordable and Clean Energy in a new way?  \n* What did you learn about the power of using strong reasons and exciting words to persuade people?  \n* Which messages from your classmates made you think, “Wow, that’s a powerful way to talk about energy\\!” and why?  \n* What does this activity tell us about how we can all work towards Global Goal 7?  \n* What’s one small action you feel inspired to take this week to save energy or promote clean energy, perhaps because you feel more convinced now?"
  }
],
	reflectionQuestions: [
  "How did trying to convince someone with your writing help you understand Global Goal 7: Affordable and Clean Energy in a new way?",
  "What did you learn about the power of using strong reasons and exciting words to persuade people?",
  "Which messages from your classmates made you think, “Wow, that’s a powerful way to talk about energy\\!” and why?",
  "What does this activity tell us about how we can all work towards Global Goal 7?",
  "What’s one small action you feel inspired to take this week to save energy or promote clean energy, perhaps because you feel more convinced now?"
],
	discussionPrompts: [
		"Make a claim about recess. What do you think about it?",
		"Now, give it a spark. What's one quick reason or exciting idea that supports your claim?",
		"Make a claim about reading. What do you think about it?",
		"Make a claim about saving energy. What do you think about it?",
		"Why did you put this card in Energy Problems?",
		"What's one card in Clean Energy Powers that makes you feel positive?",
		"Which idea sparks your interest the most?",
		"What's the one most important reason you want to share from your chosen card?",
		"How can you make your opening sentence grab the reader's attention?",
		"Can you use a word you remember from your Clean Energy Powers cards to make your reason sound even better?",
		"What would you like your reader to do after reading your message?",
		"Does your message make someone feel hopeful, worried, or ready to act?",
		"What did your partner's message want you to do or think? Were you convinced? Why or why not?",
		"What were the strongest reasons your partner used? Which ideas from our brainstormed cards did they use well?",
		"Did their message make you feel something? What emotions did it create?",
		"What is one positive comment you can give them about their writing?",
		"What is one suggestion to make their message even more convincing?"
	],
	personalConnection: "Students reflect on how energy impacts their daily life and what energy sources they use. They consider if they've ever experienced a power outage or energy shortage and how it affected them. They think about actions they can take to conserve energy and promote sustainable energy practices, and how persuasive writing can help convince others to take action.",
	closingActivities: [
		{
			title: "Peer Review and Sharing",
			description: "Students pair up and exchange their persuasive pieces. They provide feedback focusing on persuasive elements, then make quick revisions based on partner feedback. Volunteers share their persuasive piece with the whole class."
		}
	],
	objectives: [
		{
			category: "Knowledge",
			description: "Identify and define the importance of energy in daily life and recognize that energy should be affordable, reliable, and clean for everyone.",
			nccasStandard: "Cr1.1.Ma, Cn10.1.Ma",
			order: 1
		},
		{
			category: "Knowledge",
			description: "Recognize the difference between clean (renewable) and non-clean energy sources, and understand the benefits of using clean energy for the planet and people.",
			nccasStandard: "Cn10.1.Ma, Cn11.1.Ma",
			order: 2
		},
		{
			category: "Knowledge",
			description: "Understand that there are challenges in getting clean energy to everyone and that saving energy is important.",
			nccasStandard: "Cn10.1.Ma, Cn11.1.Ma",
			order: 3
		},
		{
			category: "Discourse",
			description: "Explore and describe how messages and ideas about energy and sustainability are expressed through various art forms (visual art, creative writing, dance, drama, music) by reflecting on visuals, words, movements, sounds, and stories.",
			nccasStandard: "Re7.1.Ma, Re8.1.Ma",
			order: 4
		},
		{
			category: "Discourse",
			description: "Participate in respectful discussions about energy challenges and solutions, including how to save energy and how clean energy sources work.",
			nccasStandard: "Re9.1.Ma, Cn11.1.Ma",
			order: 5
		},
		{
			category: "Discourse",
			description: "Communicate their own thoughts, feelings, and ideas, about Global Goal 7: Affordable and Clean Energy through creative expression in various artistic mediums.",
			nccasStandard: "Cr3.1.Ma",
			order: 6
		},
		{
			category: "Attitudes",
			description: "Develop empathy and concern for individuals and communities who lack access to reliable or clean energy, recognizing the impact on their daily lives.",
			nccasStandard: "Re8.1.Ma, Cn10.1.Ma",
			order: 7
		},
		{
			category: "Attitudes",
			description: "Appreciate the value of clean energy sources (like sun, wind, and water power) and their role in protecting our planet and creating a healthier future.",
			nccasStandard: "Cn11.1.Ma",
			order: 8
		},
		{
			category: "Attitudes",
			description: "Cultivate a sense of personal responsibility for their own energy use and a positive attitude towards saving energy and supporting clean energy solutions.",
			nccasStandard: "Re9.1.Ma",
			order: 9
		},
		{
			category: "Capacity",
			description: "Develop critical thinking skills by observing and discussing how different artistic elements (like colors, shapes, rhythms, movements, or persuasive words) can represent energy challenges, transformations, and solutions.",
			nccasStandard: "Re9.1.Ma, Cn10.1.Ma",
			order: 10
		},
		{
			category: "Capacity",
			description: "Practice collaboration and communication skills through engaging in group art projects, shared writing activities, and coordinated movement, drama, or musical performances to tell stories about energy.",
			nccasStandard: "Cr2.1.Ma, Pr5.1.Ma",
			order: 11
		},
		{
			category: "Capacity",
			description: "Develop creative expression skills through purposeful experimentation with diverse artistic mediums (visual art, creative writing, dance, drama, music) to communicate their understandings and feelings about Affordable and Clean Energy.",
			nccasStandard: "Cr3.1.Ma",
			order: 12
		},
		{
			category: "Action",
			description: "Identify simple and age-appropriate actions they can take to conserve energy and support clean energy practices in their daily lives, schools, and homes.",
			nccasStandard: "Pr6.1.Ma, Cn11.1.Ma",
			order: 13
		},
		{
			category: "Action",
			description: "Participate in collaborative artistic projects that creatively express messages of hope and support for Clean Energy for All.",
			nccasStandard: "Cr3.1.Ma, Pr6.1.Ma",
			order: 14
		},
		{
			category: "Action",
			description: "Reflect on their personal role in creating a more sustainable energy future for all, fostering a sense of responsible global citizenship.",
			nccasStandard: "Re9.1.Ma, Cn11.1.Ma",
			order: 15
		}
	],
	media: [
		{
			title: "Energy Problems Cards",
			description: "Examples of Energy Problems cards for the lesson",
			url: "https://docs.google.com/document/d/1hvun20-VHd1Z2p5mc5dTjvA7npPbV8GyB2zvn4IkyVM/edit?usp=drive_link",
			order: 1
		},
		{
			title: "Clean Energy Powers Cards",
			description: "Examples of Clean Energy Powers cards for the lesson",
			url: "https://docs.google.com/document/d/17q-qIiA6sjbcj4sI1Hnkci2k7sdDg46u0zIfMsHgnxI/edit?usp=drive_link",
			order: 2
		}
	],
	assessmentCriteria: [
  "Consistent and enthusiastic involvement in all phases of the lesson, including the warm up, brainstorm, individual writing process, and class discussions.",
  "Understanding of the core concept of affordable and clean energy (benefits, problems, solutions), as demonstrated through the content and message of the persuasive piece and the verbal explanations.",
  "Originality and effort in crafting the persuasive piece. Look for evidence of a clear claim and message (does the writing clearly state what it wants to convince the reader of, based on the chosen card?), reasons and evidence (are ideas from the cards used to support the message?), call to action (is there a clear suggestion for what the reader should think or do?), and engaging language (are strong verbs and descriptive words used to make it convincing?).",
  "Ability to provide thoughtful, specific, and supportive feedback to peers, focusing on persuasive effectiveness.",
  "Ability to articulate learning and personal connections during the reflection and summary discussion."
],
};

registerLessonContent(lessonContent);

export default lessonContent;

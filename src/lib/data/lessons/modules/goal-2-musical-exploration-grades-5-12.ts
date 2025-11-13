import type { LessonContentData } from '../types';
import { registerLessonContent } from '../index';

const lessonContent: LessonContentData = {
	goalNumber: 2,
	artForm: 'Musical Exploration' as const,
	gradeLevel: '5-12' as const,
	title: 'Musical Exploration',
	duration: '10-30 MINUTES',
	materials: [
		{
			name: 'Audio',
			isOptional: false,
			order: 1
		},
		{
			name: 'Lyrics Sheets (optional and dependent on the song chosen)',
			isOptional: true,
			order: 2
		}
	],
	introduction: 'Welcome students to a musical exploration of Global Goal 2: Zero Hunger. Music has the power to express emotions, raise awareness, and inspire action around social issues like food insecurity. Today, we will explore songs that address hunger, food security, and the human yearning for sustenance and dignity.',
	steps: [
		{
			title: 'Song Examples',
			content: 'Listen to one or more of the following songs that connect to Global Goal 2:\n\n* Bread and Roses by Mimi Fariña\n* We are the World by USA for Africa\n* Imagine by John Legend\n* Hunger Strike by Temple of the Dog\n* Do They Know It\'s Christmas? By BandAid\n* Food Glorious Food from Oliver!\n* An Droichead Beag (The Little Bridge) by The Dubliners\n* Famine Song, The Choral Project',
			order: 1
		}
	],
	discussionPrompts: [
		'Ask students to reflect on the lyrics, melody, and overall mood of the song(s)',
		'What emotions do you feel when you hear this song?',
		'How does the song depict challenges related to food security?',
		'How does the artist\'s background or experiences influence their perspective on hunger and food insecurity?',
		'Can you relate the song\'s message to any real-life situations or issues related to hunger and food insecurity?',
		'Emphasize how music can be a powerful tool for expressing emotions, raising awareness, and inspiring action around social issues like food insecurity.',
		'Ask students to identify the main message of the song(s) and how it relates to hunger.',
		'Discuss the power of music to raise awareness and inspire action.'
	],
	personalConnection: 'Ask students to consider the song\'s message and the concept of food security. Have students ever encountered situations or information related to this topic? Even if students haven\'t personally experienced food insecurity, ask them to relate the song\'s message to their understanding of the issue.',
	closingActivities: [
		{
			title: 'One Word Summary',
			description: 'Ask each student to think of one word encapsulating their biggest takeaway or feeling about hunger after this musical exploration. Have them share their word with the class, briefly explaining their choice. Bonus: Collect all the words to make a word cloud.'
		},
		{
			title: 'Quote Connection',
			description: 'Share an inspiring quote about hunger or resilience. Facilitate an open discussion about how this quote connects to the music and activity they experienced in class. Example: "Poverty is not an accident. Like slavery and apartheid, it is man-made and can be removed by the actions of human beings." Nelson Mandela'
		},
		{
			title: 'Songwriting Challenge',
			description: 'Divide students into small groups and challenge them to write a short song or rap verse about hunger and/or resilience. Encourage them to consider the challenges, solutions, and the importance of achieving Zero Hunger.'
		}
	],
	media: [
		{
			title: 'Bread and Roses',
			artist: 'Mimi Fariña',
			order: 1
		},
		{
			title: 'We are the World',
			artist: 'USA for Africa',
			order: 2
		},
		{
			title: 'Imagine',
			artist: 'John Legend',
			order: 3
		},
		{
			title: 'Hunger Strike',
			artist: 'Temple of the Dog',
			order: 4
		},
		{
			title: 'Do They Know It\'s Christmas?',
			artist: 'BandAid',
			order: 5
		},
		{
			title: 'Food Glorious Food',
			artist: 'From Oliver!',
			order: 6
		},
		{
			title: 'An Droichead Beag (The Little Bridge)',
			artist: 'The Dubliners',
			order: 7
		},
		{
			title: 'Famine Song',
			artist: 'The Choral Project',
			order: 8
		}
	],
	reflectionQuestions: [
		'What emotions do you feel when you hear this song?',
		'How does the song depict challenges related to food security?',
		'How does the artist\'s background or experiences influence their perspective on hunger and food insecurity?',
		'Can you relate the song\'s message to any real-life situations or issues related to hunger and food insecurity?',
		'What is the main message of the song(s) and how does it relate to hunger?',
		'How can music be a powerful tool for expressing emotions, raising awareness, and inspiring action around social issues like food insecurity?',
		'What is one word that encapsulates your biggest takeaway or feeling about hunger after this musical exploration?',
		'How does the quote connect to the music and activity you experienced in class?'
	],
	objectives: [
		{
			category: 'Knowledge',
			description: 'Identify and define basic needs related to food (e.g., enough food, healthy food, clean water for growing food) and recognize what it means to be hungry or to have enough food to eat.',
			nccasStandard: 'Cr1.1.Ma, Cn10.1.Ma',
			order: 1
		},
		{
			category: 'Knowledge',
			description: 'Recognize that hunger is a problem that affects people in many places around the world, and understand that different communities have diverse experiences with food.',
			nccasStandard: 'Cn10.1.Ma, Cn11.1.Ma',
			order: 2
		},
		{
			category: 'Knowledge',
			description: 'Understand that having access to enough healthy food helps people grow strong, learn well, and feel happy.',
			nccasStandard: 'Cn10.1.Ma, Cn11.1.Ma',
			order: 3
		},
		{
			category: 'Discourse',
			description: 'Explore and describe how feelings and messages about hunger and food are expressed through various art forms (visual art, creative writing, dance, drama, music) by reflecting on visuals, words, music/sounds, movement, and stories.',
			nccasStandard: 'Re7.1.Ma, Re8.1.Ma',
			order: 4
		},
		{
			category: 'Discourse',
			description: 'Participate in respectful discussions about what happens when people don\'t have enough food and simple ways people and communities can help each other get food.',
			nccasStandard: 'Re9.1.Ma, Cn11.1.Ma',
			order: 5
		},
		{
			category: 'Discourse',
			description: 'Communicate their own thoughts, feelings, and ideas about Global Goal 2: Zero Hunger through creative expression in various artistic mediums.',
			nccasStandard: 'Cr3.1.Ma',
			order: 6
		},
		{
			category: 'Attitudes',
			description: 'Develop empathy and compassion for individuals and communities experiencing hunger, understanding the importance of everyone having access to healthy food.',
			nccasStandard: 'Re8.1.Ma, Cn10.1.Ma',
			order: 7
		},
		{
			category: 'Attitudes',
			description: 'Appreciate the value of food and the efforts involved in growing, harvesting, and preparing it, recognizing it as a precious resource that should not be wasted.',
			nccasStandard: 'Cn11.1.Ma',
			order: 8
		},
		{
			category: 'Attitudes',
			description: 'Cultivate a mindset of kindness and helpfulness, fostering a personal desire to contribute to positive change and ensure everyone has enough to eat.',
			nccasStandard: 'Re9.1.Ma',
			order: 9
		},
		{
			category: 'Capacity',
			description: 'Develop critical thinking skills by observing and discussing how different artistic elements can represent the challenges of hunger and the joy of having enough food.',
			nccasStandard: 'Re9.1.Ma, Cn10.1.Ma',
			order: 10
		},
		{
			category: 'Capacity',
			description: 'Practice collaboration and communication skills through engaging in group art projects, shared writing activities, and coordinated movement, drama, or musical performances to tell stories about hunger and hope.',
			nccasStandard: 'Cr2.1.Ma, Pr5.1.Ma',
			order: 11
		},
		{
			category: 'Capacity',
			description: 'Develop creative expression skills through purposeful experimentation with diverse artistic mediums (visual art, creative writing, dance, drama, music) to communicate their understandings and feelings about \"Zero Hunger.\"',
			nccasStandard: 'Cr3.1.Ma',
			order: 12
		},
		{
			category: 'Action',
			description: 'Identify simple acts of kindness and concrete ways they can help address food needs in their daily lives and communities.',
			nccasStandard: 'Pr6.1.Ma, Cn11.1.Ma',
			order: 13
		},
		{
			category: 'Action',
			description: 'Participate in collaborative artistic projects that creatively express messages of hope, community support, and solutions for a world without hunger.',
			nccasStandard: 'Cr3.1.Ma, Pr6.1.Ma',
			order: 14
		},
		{
			category: 'Action',
			description: 'Reflect on their personal role in contributing to a world where everyone has enough food, fostering a sense of responsible global citizenship in working towards Zero Hunger.',
			nccasStandard: 'Re9.1.Ma, Cn11.1.Ma',
			order: 15
		}
	],
	assessmentCriteria: [
		'Active listening and engagement during song exploration and discussion',
		'Ability to identify and articulate the main message of songs related to hunger and food security',
		'Understanding of how music can express emotions, raise awareness, and inspire action around social issues',
		'Ability to connect song messages to real-life situations and issues related to hunger and food insecurity',
		'Thoughtful participation in discussions about the power of music to address social issues',
		'Creative expression through songwriting challenge or other musical activities',
		'Reflection on personal connections to the topic of hunger and food security'
	]
};

registerLessonContent(lessonContent);

export default lessonContent;


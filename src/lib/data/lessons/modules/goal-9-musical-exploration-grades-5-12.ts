import type { LessonContentData } from '../types';
import { registerLessonContent } from '../index';

const lessonContent: LessonContentData = {
	goalNumber: 9,
	artForm: 'Musical Exploration' as const,
	gradeLevel: '5-12' as const,
	title: 'Musical Exploration',
	duration: '10-30 MINUTES',
	materials: [
		{
			name: 'Speaker or computer for audio playback',
			isOptional: false,
			order: 1
		},
		{
			name: 'Lyrics Sheets (optional and dependent on the song chosen)',
			isOptional: true,
			order: 2
		}
	],
	introduction: 'Welcome students to a musical exploration of Global Goal 9: Industry, Innovation, and Infrastructure. Music has the power to express emotions, raise awareness, and inspire action around social issues like building resilient infrastructure, promoting sustainable industrialization, and fostering innovation. Today, we will explore songs that address these themes.',
	steps: [
		{
			title: 'Song Examples',
			content: 'Listen to one or more of the following songs that connect to Global Goal 9:\n\n* The Scientist by Coldplay\n* Metal by Gary Numan\n* Video Killed the Radio Star by The Buggles\n* Computer Love by Kraftwerk\n* (Nothing But) Flowers by Talking Heads\n* Deeper Understanding by Kate Bush\n* Memory Machine by The Dismemberment Plan\n* Digital Wellness by St. Vincent\n* Allentown by Billy Joel\n* Factory by Bruce Springsteen',
			order: 1
		}
	],
	discussionPrompts: [
		'What emotions or feelings do these songs evoke in you?',
		'What are the main messages or themes that these songs convey about building, creating, and progressing?',
		'How do the musical elements (melody, rhythm, harmony, dynamics) contribute to the overall mood and message of each song?',
		'How do these songs relate to the idea of building resilient infrastructure, promoting sustainable industrialization, and fostering innovation?',
		'Can you connect specific lyrics or musical elements to any of the targets within Global Goal 9?',
		'What are some of the challenges and opportunities associated with achieving the targets of Global Goal 9?',
		'How do these songs make you think differently about the role of infrastructure, industry, and innovation in our lives and communities?',
		'What are some of the potential positive and negative impacts of industrialization and technological advancement?',
		'How can we ensure that progress and development benefit everyone and protect our planet?'
	],
	personalConnection: 'Have you ever seen examples of resilient infrastructure in your community (e.g., buildings that withstand natural disasters, reliable transportation systems)? How has technology or innovation impacted your life or your community? What are some examples of industries or businesses in your area? How do they contribute to the local economy? What are some ways that you can contribute to building a more sustainable and innovative future? Encourage students to share their personal stories, while respecting privacy and creating a safe space for open discussion.',
	closingActivities: [
		{
			title: 'One Word Summary',
			description: 'Ask each student to think of one word encapsulating their biggest takeaway or feeling about Global Goal 9 after this musical exploration. Have them share their word with the class, briefly explaining their choice. Bonus: Collect all the words to make a word cloud.'
		},
		{
			title: 'Quote Connection',
			description: 'Share an inspiring quote about infrastructure, industrialization, or innovation. Facilitate an open discussion about how this quote connects to the music and activity they experienced in class. Example: "Innovation distinguishes between a leader and a follower." - Steve Jobs'
		},
		{
			title: 'Songwriting Challenge',
			description: 'Divide students into small groups and challenge them to write a short song or rap verse about infrastructure, innovation, and industry. Encourage them to consider the challenges, solutions, and the importance of achieving Global Goal 9.'
		},
		{
			title: 'Global Goal Playlist',
			description: 'Have students work in groups to create a playlist of songs that represent different aspects of Global Goal 9.'
		},
		{
			title: 'Visual Art Connection',
			description: 'Have students create a visual representation of one of the songs or a specific target within Global Goal 9. They can use drawing, painting, collage, or any other visual art form to express their interpretation of the music and its connection to the global goal.'
		},
		{
			title: 'Creative Writing Connection',
			description: 'Have students write a short story, poem, or song lyrics inspired by the music and discussions, exploring themes related to infrastructure, industrialization, innovation, or sustainability.'
		}
	],
	media: [
		{
			title: 'The Scientist',
			artist: 'Coldplay',
			order: 1
		},
		{
			title: 'Metal',
			artist: 'Gary Numan',
			order: 2
		},
		{
			title: 'Video Killed the Radio Star',
			artist: 'The Buggles',
			order: 3
		},
		{
			title: 'Computer Love',
			artist: 'Kraftwerk',
			order: 4
		},
		{
			title: '(Nothing But) Flowers',
			artist: 'Talking Heads',
			order: 5
		},
		{
			title: 'Deeper Understanding',
			artist: 'Kate Bush',
			order: 6
		},
		{
			title: 'Memory Machine',
			artist: 'The Dismemberment Plan',
			order: 7
		},
		{
			title: 'Digital Wellness',
			artist: 'St. Vincent',
			order: 8
		},
		{
			title: 'Allentown',
			artist: 'Billy Joel',
			order: 9
		},
		{
			title: 'Factory',
			artist: 'Bruce Springsteen',
			order: 10
		}
	]
};

registerLessonContent(lessonContent);

export default lessonContent;


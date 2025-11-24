import type { LessonContentData } from '../types';
import { registerLessonContent } from '../index';

const lessonContent: LessonContentData = {
	goalNumber: 8,
	artForm: 'Drama' as const,
	gradeLevel: '5-12' as const,
	title: 'Drama Exploration',
	duration: '10-30 MINUTES',
	materials: [
		{
			name: 'Device with internet access and projector/screen to display videos',
			isOptional: false,
			order: 1
		}
	],
	introduction: 'Welcome students to a drama exploration of Global Goal 8: Decent Work and Economic Growth. Drama can be a powerful tool for expressing ideas, challenging perspectives, and inspiring action around social issues like equitable work. Today, we will explore dramatic scenes that address work, economic growth, and social justice.',
	steps: [
		{
			title: 'Drama Examples',
			content: 'Watch and discuss one or more of the following dramatic scenes:\n\n* [Charlie Chaplin - Factory Work](https://www.youtube.com/watch?v=4fOIk0-igeE), Modern Times\n* [Chris is Hired](https://www.youtube.com/watch?v=hKi3-5gO4uE), The Pursuit of Happyness\n* [Union Scene](https://www.youtube.com/watch?v=YvqpyDWvDyE), Norma Rae\n* [Union Terms](https://www.youtube.com/watch?v=M37QsnD6nZ4), Made in Dagenham\n\nAllow students about time to engage with the chosen piece, giving the class more or less preamble/guidance about the work depending on their needs.',
			order: 1
		}
	],
	discussionPrompts: [
		'What emotions does this scene evoke in you?',
		'What messages or stories do you think the actors and writers of this piece are trying to convey?',
		'What challenges do the characters face in terms of finding decent work, achieving economic stability, or experiencing fair treatment?',
		'How do these stories portray the impact of economic forces on individuals, families, and communities?',
		'What messages do these scenes convey about the importance of decent work, economic growth, and social justice?',
		'How do these scenes relate to the concept of work/economic growth and the goals of Global Goal 8?',
		'Can you identify any specific part of the scene that resonates with a particular target of Global Goal 8? How so?',
		'How does the scene illustrate the challenges or successes in achieving decent work and economic growth?',
		'What symbols or visual elements stand out to you and what might they represent in the context of decent work and economic growth?',
		'What challenges or solutions related to work and economic growth are expressed or implied?',
		'Emphasize how drama can be a powerful tool for expressing ideas, challenging perspectives, and inspiring action around social issues like equitable work.'
	],
	personalConnection: 'Ask students to reflect on their own experiences related to work and economic growth. Have they or someone they know faced challenges related to employment, economic hardship, or unfair working conditions? How do these issues affect their lives and communities? What actions can they take to promote decent work and economic growth in their own spheres of influence? Encourage students to share their personal stories or observations that connect with the themes explored in the drama examples.',
	closingActivities: [
		{
			title: 'One Word Summary',
			description: 'Ask each student to think of one word encapsulating their biggest takeaway or feeling about employment and economic growth after this drama exploration. Have them share their word with the class, briefly explaining their choice. Bonus: Collect all the words to make a word cloud.'
		},
		{
			title: 'Quote Connection',
			description: 'Share an inspiring quote about decent work and economic growth. Facilitate an open discussion about how this quote connects to the scene and activity they experienced in class. Example: "Decent work is not just about having a job; it\'s about having a job that provides dignity, respect, and a fair wage." - Juan Somavia, Former Director-General of the International Labour Organization. "Economic growth without social justice is unsustainable." - Winnie Byanyima, Executive Director of UNAIDS'
		},
		{
			title: 'Artwork Challenge',
			description: 'Divide students into small groups and challenge them to create a "flash art" project with mixed media in 10 minutes. Encourage them to consider the challenges, solutions, and the importance of achieving decent work and economic growth.'
		},
		{
			title: 'Write the Change',
			description: 'Have students write a short story, poem, or short script in 10 minutes inspired by the drama examples and discussion, exploring themes related to decent work, economic growth, and social justice.'
		}
	],
	media: [
		{
			title: 'Factory Work',
			artist: 'Charlie Chaplin',
			genre: 'Modern Times',
			url: 'https://www.youtube.com/watch?v=4fOIk0-igeE',
			order: 1
		},
		{
			title: 'Chris is Hired',
			artist: 'The Pursuit of Happyness',
			url: 'https://www.youtube.com/watch?v=hKi3-5gO4uE',
			order: 2
		},
		{
			title: 'Union Scene',
			artist: 'Norma Rae',
			url: 'https://www.youtube.com/watch?v=YvqpyDWvDyE',
			order: 3
		},
		{
			title: 'Union Terms',
			artist: 'Made in Dagenham',
			url: 'https://www.youtube.com/watch?v=M37QsnD6nZ4',
			order: 4
		}
	]
};

registerLessonContent(lessonContent);

export default lessonContent;


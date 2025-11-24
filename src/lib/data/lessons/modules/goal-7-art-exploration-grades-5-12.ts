import type { LessonContentData } from '../types';
import { registerLessonContent } from '../index';

const lessonContent: LessonContentData = {
	goalNumber: 7,
	artForm: 'Art' as const,
	gradeLevel: '5-12' as const,
	title: 'Art Exploration',
	duration: '10-30 MINUTES',
	materials: [
		{
			name: 'Device with internet access and projector/screen to display images/art pieces',
			isOptional: false,
			order: 1
		},
		{
			name: 'Whiteboard or large paper for brainstorming',
			isOptional: false,
			order: 2
		},
		{
			name: 'Markers',
			isOptional: false,
			order: 3
		},
		{
			name: 'Paper and drawing/painting materials',
			isOptional: false,
			order: 4
		}
	],
	introduction: 'Welcome students to an art exploration of Global Goal 7: Affordable and Clean Energy. Art can be a powerful tool for expressing ideas, challenging perspectives, and inspiring action around social issues like energy access and sustainability. Today, we will explore artworks that address energy challenges and solutions.',
	steps: [
		{
			title: 'Art Examples',
			content: 'View and discuss one or more of the following artworks:\n\n* [The Weather Project](https://olafureliasson.net/artwork/the-weather-project-2003/), Olafur Eliasson\n* [Sun Tunnels](https://holtsmithsonfoundation.org/sun-tunnels), Nancy Holt\n* [Solar Trees](https://www.designboom.com/design/ross-lovegrove-solar-tree-at-clerkenwell-design-week/), Ross Lovegrove\n* [Inopportune](https://massmoca.org/event/cai-guo-qiang-inopportune/), Cai Guo-Qiang\n* [The Sower](https://www.vangoghmuseum.nl/en/collection/s0029V1962), Vincent van Gogh\n* [Impression, Sunrise](https://smarthistory.org/claude-monets-impression-sunrise/), Claude Monet\n* [The Windmill at Wijk bij Duurstede](https://en.wikipedia.org/wiki/Windmill_at_Wijk_bij_Duurstede), Jacob van Ruisdael\n\nAllow students about 5 minutes to engage with the chosen piece, giving the class more or less preamble/guidance about the artwork depending on their needs.',
			order: 1
		}
	],
	discussionPrompts: [
		'What emotions does this artwork evoke in you?',
		'What messages or stories do you think the artists are trying to convey?',
		'How do these artworks relate to the concept of energy and the goals of Global Goal 7?',
		'Can you identify any specific part of the artwork that resonates with a particular target of Global Goal 7? How so?',
		'How does the artwork illustrate the challenges or successes in achieving affordable and clean energy?',
		'What symbols or visual elements stand out to you and what might they represent in the context of affordable and clean energy?',
		'How do the artists use color, shape and composition to express their messages?',
		'What symbols or metaphors related to energy do you notice in the art?',
		'What challenges or solutions related to energy are expressed or implied in the art?',
		'Emphasize how art can be a powerful tool for expressing ideas, challenging perspectives, and inspiring action around social issues like energy.'
	],
	personalConnection: 'Ask students to reflect on their own experiences related to energy. How does energy impact your daily life? What are some of the energy sources you use? Have you ever experienced a power outage or energy shortage? How did it affect you? What actions can you take to conserve energy and promote sustainable energy practices? Encourage students to share their personal stories and connect them to the themes explored in the artwork.',
	closingActivities: [
		{
			title: 'One Word Summary',
			description: 'Ask each student to think of one word encapsulating their biggest takeaway or feeling about energy after this art exploration. Have them share their word with the class, briefly explaining their choice. Bonus: Collect all the words to make a word cloud.'
		},
		{
			title: 'Quote Connection',
			description: 'Share an inspiring quote about energy. Facilitate an open discussion about how this quote connects to the art and activity they experienced in class. Example: "Education is the most powerful weapon which you can use to change the world." - Nelson Mandela'
		},
		{
			title: 'Artwork Challenge',
			description: 'Divide students into small groups and challenge them to create a "flash art" project with mixed media in 10 minutes. Encourage them to consider the challenges, solutions, and the importance of achieving affordable and clean energy.'
		},
		{
			title: 'Global Goal Gallery',
			description: 'Have students work in groups to find other artwork that represents different aspects of Global Goal 7 and resonates with them.'
		},
		{
			title: '"Power of One" Challenge',
			description: 'Ask students to write a short poem or create a simple visual metaphor (taking no longer than 10 minutes) representing the impact of individual actions on energy consumption and sustainability. (Visual metaphor example: single lightbulb with a green seedling sprouting, raindrops falling into a bucket)'
		}
	],
	media: [
		{
			title: 'The Weather Project',
			artist: 'Olafur Eliasson',
			url: 'https://olafureliasson.net/artwork/the-weather-project-2003/',
			order: 1
		},
		{
			title: 'Sun Tunnels',
			artist: 'Nancy Holt',
			url: 'https://holtsmithsonfoundation.org/sun-tunnels',
			order: 2
		},
		{
			title: 'Solar Trees',
			artist: 'Ross Lovegrove',
			url: 'https://www.designboom.com/design/ross-lovegrove-solar-tree-at-clerkenwell-design-week/',
			order: 3
		},
		{
			title: 'Inopportune',
			artist: 'Cai Guo-Qiang',
			url: 'https://massmoca.org/event/cai-guo-qiang-inopportune/',
			order: 4
		},
		{
			title: 'The Sower',
			artist: 'Vincent van Gogh',
			url: 'https://www.vangoghmuseum.nl/en/collection/s0029V1962',
			order: 5
		},
		{
			title: 'Impression, Sunrise',
			artist: 'Claude Monet',
			url: 'https://smarthistory.org/claude-monets-impression-sunrise/',
			order: 6
		},
		{
			title: 'The Windmill at Wijk bij Duurstede',
			artist: 'Jacob van Ruisdael',
			url: 'https://en.wikipedia.org/wiki/Windmill_at_Wijk_bij_Duurstede',
			order: 7
		}
	]
};

registerLessonContent(lessonContent);

export default lessonContent;


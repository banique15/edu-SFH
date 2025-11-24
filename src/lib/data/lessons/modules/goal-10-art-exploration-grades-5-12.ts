import type { LessonContentData } from '../types';
import { registerLessonContent } from '../index';

const lessonContent: LessonContentData = {
	goalNumber: 10,
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
	introduction: 'Welcome students to an art exploration of Global Goal 10: Reduced Inequalities. Art can be a powerful tool for expressing ideas, challenging perspectives, and inspiring action around social issues like inequality. Today, we will explore artworks that address equality, fairness, and social justice.',
	steps: [
		{
			title: 'Art Examples',
			content: 'View and discuss one or more of the following artworks:\n\n* [The Migration Series](https://lawrencemigration.phillipscollection.org/the-migration-series), Jacob Lawrence\n* [Guernica](https://www.un.org/ungifts/guernica-tapestry-after-guernica-pablo-picasso), Pablo Picasso\n* [The Gleaners](https://www.theartist.me/artwork/the-gleaners/), Jean-François Millet\n* [The Problem We All Live With](https://www.kennedy-center.org/education/resources-for-educators/classroom-resources/media-and-interactives/media/visual-arts/norman-rockwell--the-problem-we-all-live-with/), Norman Rockwell\n* [Scramble for Africa](https://www.google.com/search?sca_esv=61a617c25f5cc0b4&rlz=1C5CHFA_enUS1124US1124&sxsrf=ADLYWIKau3kz5Rf6WJsPsQ4ohRkbR-Yixw:1736457151090&q=scramble+for+africa+Yinka+Shonibare), Yinka Shonibare\n* [Woven Chronicle, 2002](https://reenakallat.com/woven-chronicle-2022/), Reena Saini Kallat\n* [Temporary Storage: The Belongings of Juan Manuel Montes](https://www.texasobserver.org/wp-content/uploads/2017/11/Ontiveros-Temporary-Storage_The-Belongings-of-Juan-Manuel-Montes-768x1274.jpg), Camilo Ontiveros\n* [The Raft of Medusa](https://www.britannica.com/topic/The-Raft-of-the-Medusa), Théodore Géricault\n* [Exodus](https://www.google.com/search?sca_esv=61a617c25f5cc0b4&rlz=1C5CHFA_enUS1124US1124&sxsrf=ADLYWILrnzevDb3rhZDnTv50Q8K5DFwh_A:1736457528473&q=%22Exodus%22+by+Sebasti%C3%A3o+Salgado&udm=2), Sebastiãno Salgado (photo book)\n\nAllow students about 5 minutes to engage with the chosen piece, giving the class more or less preamble/guidance about the artwork depending on their needs.',
			order: 1
		}
	],
	discussionPrompts: [
		'What emotions or thoughts does this artwork evoke in you?',
		'What messages or stories do you think the artists are trying to convey?',
		'How do these artworks relate to the concept of equality and the goals of Global Goal 10?',
		'Can you identify any specific elements in the artwork that resonate with a particular target of Global Goal 10? How so?',
		'How does the artwork illustrate the challenges or successes in achieving reduced inequalities?',
		'What symbols or visual elements stand out to you and what might they represent in the context of equality and fairness?',
		'How do the artists use color, shape and composition to express their messages?',
		'What are some of the ways inequality is portrayed in the artwork?',
		'What symbols or metaphors related to equality do you notice in the art?',
		'What challenges or solutions related to equality are expressed or implied in the art?',
		'Emphasize how art can be a powerful tool for expressing ideas, challenging perspectives, and inspiring action around social issues like inequality.'
	],
	personalConnection: 'Have you ever witnessed or experienced inequality in your own life or community? What are some examples of inequality that you have seen in the news or media? How does inequality affect different groups of people in different ways? What actions can you take to promote equality and fairness in your own life and community? Encourage students to share their personal stories and connect them to the themes explored in the artwork.',
	closingActivities: [
		{
			title: 'One Word Summary',
			description: 'Ask each student to think of one word encapsulating their biggest takeaway or feeling about equality after this art exploration. Have them share their word with the class, briefly explaining their choice. Bonus: Collect all the words to make a word cloud.'
		},
		{
			title: 'Quote Connection',
			description: 'Share an inspiring quote about equality and social justice. Facilitate an open discussion about how this quote connects to the art and activity they experienced in class. Example: "Injustice anywhere is a threat to justice everywhere." - Martin Luther King Jr.'
		},
		{
			title: 'Artwork Challenge',
			description: 'Divide students into small groups and challenge them to create a "flash art" project with mixed media in 10 minutes. Encourage them to use symbols, metaphors, and visual storytelling to convey their message.'
		},
		{
			title: 'Global Goal Gallery',
			description: 'Have students work in groups to find other artwork that represents different aspects of Global Goal 10 and resonates with them. Create a digital or physical gallery to showcase these works.'
		},
		{
			title: '"Power of One" Challenge',
			description: 'Ask students to write a short poem or create a simple visual metaphor (taking no longer than 10 minutes) representing the impact of individual actions on equality and fairness. (Visual metaphor example: A hand holding a sapling, with diverse hands of different skin tones reaching up from the ground, as if to support and nurture the tree.)'
		},
		{
			title: '"Equality in Action" Challenge',
			description: 'Ask students to brainstorm and write down specific actions they can take to promote equality and reduce inequalities in their school, community, or the world. Encourage them to share their ideas and commit to taking action.'
		}
	],
	media: [
		{
			title: 'The Migration Series',
			artist: 'Jacob Lawrence',
			url: 'https://lawrencemigration.phillipscollection.org/the-migration-series',
			order: 1
		},
		{
			title: 'Guernica',
			artist: 'Pablo Picasso',
			url: 'https://www.un.org/ungifts/guernica-tapestry-after-guernica-pablo-picasso',
			order: 2
		},
		{
			title: 'The Gleaners',
			artist: 'Jean-François Millet',
			url: 'https://www.theartist.me/artwork/the-gleaners/',
			order: 3
		},
		{
			title: 'The Problem We All Live With',
			artist: 'Norman Rockwell',
			url: 'https://www.kennedy-center.org/education/resources-for-educators/classroom-resources/media-and-interactives/media/visual-arts/norman-rockwell--the-problem-we-all-live-with/',
			order: 4
		},
		{
			title: 'Scramble for Africa',
			artist: 'Yinka Shonibare',
			order: 5
		},
		{
			title: 'Woven Chronicle, 2002',
			artist: 'Reena Saini Kallat',
			url: 'https://reenakallat.com/woven-chronicle-2022/',
			order: 6
		},
		{
			title: 'Temporary Storage: The Belongings of Juan Manuel Montes',
			artist: 'Camilo Ontiveros',
			order: 7
		},
		{
			title: 'The Raft of Medusa',
			artist: 'Théodore Géricault',
			url: 'https://www.britannica.com/topic/The-Raft-of-the-Medusa',
			order: 8
		},
		{
			title: 'Exodus',
			artist: 'Sebastiãno Salgado',
			description: 'Photo book',
			order: 9
		}
	]
};

registerLessonContent(lessonContent);

export default lessonContent;


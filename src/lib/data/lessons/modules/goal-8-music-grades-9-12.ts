import type { LessonContentData } from '../types';
import { registerLessonContent } from '../index';

const lessonContent: LessonContentData = {
	goalNumber: 8,
	artForm: 'Music' as const,
	gradeLevel: '9-12' as const,
	title: 'Harmonizing for Humanity',
	duration: '30-60 MINUTES',
	materials: [
		{
			name: 'Music classroom with various instruments (pianos, guitars, drums, ukeleles, etc.)',
			isOptional: false,
			order: 1
		},
		{
			name: 'Music stands/tables and chairs for ensemble playing',
			isOptional: false,
			order: 2
		},
		{
			name: 'Whiteboard or projector for displaying lyrics and information',
			isOptional: false,
			order: 3
		},
		{
			name: 'Markers',
			isOptional: false,
			order: 4
		},
		{
			name: 'Notebooks or paper',
			isOptional: false,
			order: 5
		},
		{
			name: 'Pens/Pencils',
			isOptional: false,
			order: 6
		},
		{
			name: 'Sheet music or lyrics for songs related to work, justice, and equality (examples below)',
			isOptional: false,
			order: 7
		},
		{
			name: 'Music player and access to recordings of the chosen songs',
			isOptional: false,
			order: 8
		}
	],
	introduction: 'Begin with a musical icebreaker to get students engaged and thinking about the connections between music and work. Introduce or re-introduce Global Goal 8: Decent Work and Economic Growth. Explain the core idea of ensuring fair and sustainable working conditions for everyone while promoting global economic progress. Briefly introduce the different targets within Global Goal 8, highlighting their interconnectedness and importance.',
	steps: [
		{
			title: 'Exploring Musical Concepts',
			content: 'Have each student choose an instrument or assign them an instrument available.\n\n*Rhythm and Dynamics*\n\nExplain how rhythm and dynamics in music can represent different aspects of work. Example: Fast tempo and strong dynamics can represent the energy and intensity of physical labor, while a slower tempo and softer dynamics might represent more contemplative or creative work. Have students experiment with different rhythms and dynamics on their instruments, creating musical representations of various types of work. This can be connected to Target 8.2 (economic productivity) by discussing how different industries and sectors contribute to the overall economy.\n\n*Harmony and Melody*\n\nDiscuss how harmony and melody in music can symbolize collaboration and the interconnectedness of different parts working together towards a common goal. Example: Have students play simple chords or melodies together, emphasizing the importance of each part contributing to the overall sound. This can be connected to Target 8.5 (full and productive employment) by discussing the importance of diverse skills and talents contributing to a thriving workforce.\n\n*Form and Structure*\n\nDiscuss how musical forms and structures can represent different systems and processes in the world of work. Example: Compare a repetitive work song to a complex symphony, drawing parallels to different types of jobs and industries. This can be connected to Target 8.3 (promoting entrepreneurship) by discussing how businesses and organizations need structure and organization to function effectively.',
			order: 1
		},
		{
			title: 'Music and Global Goal 8',
			content: 'Song Selection: Choose songs that connect to specific Global Goal 8 Targets.\n\nExamples:\n\n* **Target 8.1** *(Sustain per capita economic growth):* "Imagine" by John Lennon, a vision of a world without poverty and inequality. "The Climb" by Miley Cyrus, overcoming challenges and striving for progress. "9 to 5" by Dolly Parton, the daily grind and aspirations for a better life.\n* **Target 8.2** *(Achieve higher levels of economic productivity):* "We Built This City" by Starship, celebrating innovation and human ingenuity. "Work Song" by Hozier, the value of hard work and dedication. "Stronger" by Kelly Clarkson, resilience and overcoming obstacles in the face of adversity.\n* **Target 8.3** *(Promote development-oriented policies):* "Opportunity" by Pete Seeger, about the importance of creating opportunities for all. "The Greatest" by Sia, celebrating individuality and achieving your dreams.\n* **Target 8.4** *(Improve global resource efficiency):* "Big Yellow Taxi" by Joni Mitchell, an environmental anthem about the consequences of unsustainable practices. "Earth Song" by Michael Jackson, a plea for environmental protection and sustainability. "Mercy Mercy Me (The Ecology)" by Marvin Gaye, lamenting the destruction of the environment.\n* **Target 8.5** *(Achieve full and productive employment):* "Working Class Hero" by John Lennon, a critique of social inequality and the struggles of working people. "Respect" by Aretha Franklin, demanding equality and respect in the workplace. "Fight Song" by Rachel Platten, overcoming challenges and fighting for your dreams. "Workin in a Coal Mine" by DEVO.\n* **Target 8.6** *(Substantially reduce youth unemployment):* "The Times They Are a-Changin\'" by Bob Dylan, a call for change and empowerment for young people. "Where is the Love?" by Black Eyed Peas, a call for unity and understanding in a world facing challenges.\n* **Target 8.7** *(Eradicate forced labor and child labor):* "Redemption Song" by Bob Marley, a song about freedom and overcoming oppression. "Free Fallin\'" by Tom Petty, a longing for freedom and escape from difficult circumstances.\n* **Target 8.8** *(Protect labor rights):* "Bread and Roses" by Mimi Farina, a labor anthem about the fight for fair wages and decent working conditions. "Union Maid" by Woody Guthrie, a classic labor anthem about the power of collective action. "Seven Nation Army" by The White Stripes, an anthem of resistance and fighting for what you believe in.\n* **Target 8.9** *(Promote sustainable tourism):* "Island in the Sun" by Harry Belafonte, celebrating the beauty and culture of different places while promoting respect for local communities. "Kokomo" by the Beach Boys, celebrating the beauty of different cultures and destinations.\n* **Target 8.10** *(Strengthen domestic financial institutions):* "Money (That\'s What I Want)" by Barrett Strong, a song that can spark discussion about the role of money in society and the importance of financial access. "Material Girl" by Madonna, a commentary on consumerism and the desire for material possessions.\n* **Target 8.a** *(Increase Aid for Trade support):* "We Are the World" by USA for Africa, a song about global solidarity and helping those in need. "Heal the World" by Michael Jackson, a call for global unity and compassion. "One Love" by Bob Marley, a message of peace, unity, and global harmony.\n* **Target 8.b** *(Develop a global strategy for youth employment):* "Get Up, Stand Up" by Bob Marley, a call to action for young people to stand up for their rights and create a better future.\n\nChoose a song or song(s) for the class to analyze. Listen to the chosen song(s) once or twice so the class understand the lyrics and music of the song(s). Guide students to analyze not just the lyrics but also the musical elements of the song and how they contribute to the overall message. Discuss the lyrics of the chosen song(s) focusing on how they connect to Global Goal 8, the target(s), and the challenges of achieving decent work and economic growth. Analyze the musical elements of the song(s) (melody, harmony, rhythm, dynamics) and how they contribute to the overall message and emotional impact.',
			order: 2,
			guidingQuestions: [
				'What emotions or thoughts did this song evoke in you?',
				'How does the music enhance the message of the lyrics?',
				'What specific lines or musical elements stood out to you?',
				'How does this song connect to your own experiences or observations about the world of work?',
				'How does the melody evoke certain emotions or create a particular mood?',
				'How does the harmony support the melody and create a sense of unity or dissonance?',
				'How do the dynamics (loudness and softness) contribute to the emotional impact of the song?',
				'What instruments are used, and how do they contribute to the overall sound and message?',
				'Can you relate to any of the situations or emotions described in the song?',
				'Have you ever experienced or witnessed any of the issues raised in the song?',
				'How does this song make you feel about the future of work?',
				'Does this song offer any solutions or suggestions for addressing the challenges related to decent work and economic growth?',
				'What are the different perspectives presented in the song?',
				'Do you agree with the message of the song? Why or why not?'
			]
		}
	],
	reflectionQuestions: [
		'How did exploring musical concepts like rhythm, dynamics, harmony, and melody help you understand the complexities of decent work and economic growth?',
		'What did you learn about how different musical elements can represent specific aspects of work - like the energy of labor, the fairness of systems, or the interconnectedness of a thriving economy?',
		'Did analyzing the chosen songs and their musical components change your perspective on the human experiences related to work and economic justice?',
		'How can music, even without lyrics, powerfully communicate ideas about economic productivity, fair wages, or sustainable employment?',
		'Did any of the musical examples or activities resonate with your own aspirations for future work, or observations about the world of work around you?',
		'What emotions or insights did you gain about the importance of decent work and economic growth for all people, both locally and globally?',
		'How has this lesson influenced your thinking about the value of different types of work and the need for fair conditions?',
		'What new perspectives did you gain on the challenges and opportunities within the global economy through this musical exploration?',
		'How might understanding the interconnectedness of different parts of a musical piece (like a symphony) relate to the interconnectedness of a global workforce?',
		'What did you learn about how music can be a tool for raising awareness about social issues and inspiring action towards decent work and economic growth?',
		'What is one key takeaway about Global Goal 8 that you will remember from this lesson?',
		'How might you use music or your understanding of its power to advocate for fair labor practices or economic opportunity in your community?',
		'Do you feel more motivated to support businesses that promote decent work practices after this lesson? Why or why not?',
		'What role can you play in ensuring that economic growth is sustainable and benefits everyone?'
	],
	assessmentCriteria: [
		'Consistent and enthusiastic involvement in all phases of the lesson, including the warm-up, instrument exploration, song analysis, collaborative composition, and class discussions.',
		'Comprehension of Global Goal 8 and its targets and core concepts (e.g., fair wages, safe working conditions, youth employment, sustainable growth). This will be evidenced through the musical choices and explanations that reflect these concepts.',
		'Originality and effectiveness in applying musical elements (e.g., rhythm, dynamics, harmony, melody, instrumentation) to represent specific aspects of work and economic growth.',
		'How clearly and powerfully the finished musical piece communicated its intended message about Global Goal 8. Did the music successfully evoke thought or emotion related to decent work and economic justice?',
		'Ability to work effectively within the groups, contributing ideas, respecting diverse musical interpretations, and collaborating cohesively during the composition and rehearsal process.',
		'Willingness to experiment with musical expression and the ability to present compositions with clarity and intent, even if musical skills are beginner-level.',
		'Nuance and depth of understanding demonstrated in reflections, particularly concerning the role of music in addressing work-related challenges and promoting wellbeing.'
	],
	media: [
		{
			title: 'Imagine',
			artist: 'John Lennon',
			order: 1
		},
		{
			title: 'The Climb',
			artist: 'Miley Cyrus',
			order: 2
		},
		{
			title: '9 to 5',
			artist: 'Dolly Parton',
			order: 3
		},
		{
			title: 'We Built This City',
			artist: 'Starship',
			order: 4
		},
		{
			title: 'Work Song',
			artist: 'Hozier',
			order: 5
		},
		{
			title: 'Stronger',
			artist: 'Kelly Clarkson',
			order: 6
		},
		{
			title: 'Opportunity',
			artist: 'Pete Seeger',
			order: 7
		},
		{
			title: 'The Greatest',
			artist: 'Sia',
			order: 8
		},
		{
			title: 'Big Yellow Taxi',
			artist: 'Joni Mitchell',
			order: 9
		},
		{
			title: 'Earth Song',
			artist: 'Michael Jackson',
			order: 10
		},
		{
			title: 'Mercy Mercy Me (The Ecology)',
			artist: 'Marvin Gaye',
			order: 11
		},
		{
			title: 'Working Class Hero',
			artist: 'John Lennon',
			order: 12
		},
		{
			title: 'Respect',
			artist: 'Aretha Franklin',
			order: 13
		},
		{
			title: 'Fight Song',
			artist: 'Rachel Platten',
			order: 14
		},
		{
			title: 'Workin in a Coal Mine',
			artist: 'DEVO',
			order: 15
		},
		{
			title: 'The Times They Are a-Changin\'',
			artist: 'Bob Dylan',
			order: 16
		},
		{
			title: 'Where is the Love?',
			artist: 'Black Eyed Peas',
			order: 17
		},
		{
			title: 'Redemption Song',
			artist: 'Bob Marley',
			order: 18
		},
		{
			title: 'Free Fallin\'',
			artist: 'Tom Petty',
			order: 19
		},
		{
			title: 'Bread and Roses',
			artist: 'Mimi Farina',
			order: 20
		},
		{
			title: 'Union Maid',
			artist: 'Woody Guthrie',
			order: 21
		},
		{
			title: 'Seven Nation Army',
			artist: 'The White Stripes',
			order: 22
		},
		{
			title: 'Island in the Sun',
			artist: 'Harry Belafonte',
			order: 23
		},
		{
			title: 'Kokomo',
			artist: 'The Beach Boys',
			order: 24
		},
		{
			title: 'Money (That\'s What I Want)',
			artist: 'Barrett Strong',
			order: 25
		},
		{
			title: 'Material Girl',
			artist: 'Madonna',
			order: 26
		},
		{
			title: 'We Are the World',
			artist: 'USA for Africa',
			order: 27
		},
		{
			title: 'Heal the World',
			artist: 'Michael Jackson',
			order: 28
		},
		{
			title: 'One Love',
			artist: 'Bob Marley',
			order: 29
		},
		{
			title: 'Get Up, Stand Up',
			artist: 'Bob Marley',
			order: 30
		}
	]
};

registerLessonContent(lessonContent);

export default lessonContent;


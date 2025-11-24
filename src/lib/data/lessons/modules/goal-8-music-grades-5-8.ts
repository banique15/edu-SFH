import type { LessonContentData } from '../types';
import { registerLessonContent } from '../index';

const lessonContent: LessonContentData = {
	goalNumber: 8,
	artForm: 'Music' as const,
	gradeLevel: '5-8' as const,
	title: 'Making Music for Great Jobs',
	duration: '30-60 MINUTES',
	materials: [
		{
			name: 'Music classroom/open space',
			isOptional: false,
			order: 1
		},
		{
			name: 'Variety of simple percussion instruments (e.g., hand drums, shakers, tambourines, rhythm sticks, claves). Encourage students to find improvised instruments safely from the classroom (e.g., clapping hands, stomping feet, tapping pencils, plastic containers as shakers, snapping fingers).',
			isOptional: false,
			order: 2
		},
		{
			name: 'Whiteboard or large chart paper',
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
			name: 'Audio',
			isOptional: false,
			order: 7
		}
	],
	introduction: 'Welcome students to an exciting music class. Explain that they will use the power of music to explore a really important idea: Global Goal 8, Decent Work and Economic Growth. Clarify that Global Goal 8 is like a huge promise the world has made: a promise to make sure everyone, everywhere, has a good job - one that is fair, safe, and where they are treated with respect. Emphasize that it\'s also about helping communities and countries grow stronger in a way that helps everyone and doesn\'t harm our planet. Explain this means jobs that are safe, pay fairly, and help the world be a better place. Explain to students that just like a symphony has many different instruments and sounds working together, the world of work has many different jobs and people, all contributing. Clarify that music can help us understand how all these parts work together for a better world.',
	steps: [
		{
			title: 'Warm Up: Guess the Work Sound',
			content: 'Explain that the class will use their voice, body percussion, or an instrument to create a sound or short rhythm that represents a common job or work activity. Instruct students to listen carefully, try to imitate the sound/rhythm quietly, and then guess what job it might be.\n\n*Teacher Plays, Students Guess*\n\n* Perform a rhythmic sound for a job using your voice, body percussion, or a simple instrument.\n  Examples of Rhythms/Sounds and Jobs:\n  * *Hammering:* tap-tap-tap-BANG! (using hand on desk or drum, with a louder final hit) - *Job:* Builder or construction worker.\n  * *Sweeping:* shhh-shhh (hands rubbing together, or a soft brush sound with shakers) - *Job:* Cleaner or janitor\n  * *Typing:* click-clack-click-clack (finger taps/claves) - *Job:* Writer/author, office worker.\n  * *Pumping Water:* pump-whoosh-pump-whoosh (using arm motion and vocal sounds) - *Job:* Farmer, well digger.\n  * *Stirring/Cooking:* stir-stir-stir-ding! (using hand motion and a vocal ding or bell sound) - *Job:* Cook/chef, baker.\n  * *Driving:* vroom-vroom-honk (vocal sounds, with a short jerky rhythm) - *Bus Driver, delivery person.*\n\n*Students Imitate and Guess*\n\n* After each sound/rhythm, instruct students to try and imitate the sound/rhythm with their own body percussion or instruments.\n* Then ask: What job do you think that rhythm/sound represents? Discuss and affirm guesses.\n\n*[Optional] Student Leads*\n\n* If time allows and class is comfortable, invite a few students to create their own job sound for the class to imitate and guess.\n\nConclude by affirming the students\' rhythmic listening and connection between sound and work.',
			order: 1
		},
		{
			title: 'Exploring Musical Concepts for Work',
			content: 'Explain that music has special ingredients that help tell a story or show feelings about jobs and growth. The class will experiment with these concepts using their instruments and voices.\n\n* *Rhythm and Dynamics:* Rhythm is the pattern of sounds (like a heartbeat or a drumbeat), and dynamics refers to how loud or soft the music is.\n  * Ask: How would a fast, steady rhythm with loud dynamics show a busy factory or a quick, strong worker?\n    * E.g., tap-tap-tap-tap-tap-tap quickly and loudly on a drum, or rapid claps.\n  * Ask: How would a slow, uneven rhythm with soft dynamics show a tired worker or a job that feels a bit difficult?\n    * E.g., STOMP…quiet tap…STOMP slowly and softly, or a slow, sighing hum.\n* *Melody and Harmony:* Melody is the tune (the part you might hum), and harmony is when different notes or voices sound good together.\n  * Ask: How would a simple, happy melody (high or low) show a job that feels fair and good?\n    * E.g., a simple rising hum like do-re-mi, or a cheerful la-la-la\n  * Ask: How could different voices or instruments playing simple sounds together show teamwork and how everyone contributes to a job?\n    * E.g., one group hums a low note, another a high note, blending them together.\n  * Have students explore simple melodies and layering sounds.\n* *Form and Structure:* Form is how a piece of music is organized into different sections, like a song having a verse and a chorus.\n  * Ask: How could you use two different musical sections to show a problem at work and then a solution?\n    * E.g., an "A" part that\'s messy and then a "B" part that\'s organized.\n  * Have students try moving from one contrasting musical idea to another.\n    * E.g., chaotic banging followed by a calm, steady beat.\n* *Timbre (Instrument Sounds):* Timbre is the unique sound quality of an instrument or voice (what makes a drum sound different from a shaker, or your voice different from a robot\'s).\n  * Ask: What instrument sounds like hard, strong work?\n    * E.g., a drum, a rhythm stick.\n  * Ask: What sounds like something new and exciting being invented?\n    * E.g., a shaker, a bell, a unique vocal sound.\n  * Ask: What kind of vocal sound would represent a specific feeling about work?\n    * E.g., hum, cheer, sigh, whisper.\n  * Have students explore different instrument/vocal sounds.\n\nGuide students to explore with their instruments and voices to demonstrate how these different musical elements can tell a story about work and economic growth. This serves as an integrated brainstorming process.',
			order: 2
		},
		{
			title: 'Music and Global Goal 8',
			content: 'Explain that music can tell powerful stories about work and economic growth. The class will listen to one or two age-appropriate songs (or look at their lyrics, or both) that connect to Global Goal 8.\n\nSong Examples:\n\n* ["The Climb"](https://www.youtube.com/watch?v=NG2zyeVRcbs) by Miley Cyrus\n* ["We Built This City"](https://www.youtube.com/watch?v=K1b8AhIsSYQ) by Starship\n* ["Stronger (What Doesn\'t Kill You)"](https://www.youtube.com/watch?v=Xn676-fLq7I) by Kelly Clarkson\n* ["9 to 5"](https://www.youtube.com/watch?v=UbxUSsFXYo4) by Dolly Parton\n* ["Working Class Hero"](https://www.youtube.com/watch?v=Ve-mANenpC4) by John Lennon\n* ["Working in the Coal Mine"](https://www.youtube.com/watch?v=0O445CcK0qY) by DEVO\n\nPlay the chosen song(s). Guide students to analyze not just the lyrics but also the musical elements of the song and how they contribute to the overall message.',
			order: 3,
			guidingQuestions: [
				'What emotions or thoughts did this song make you feel? How did the music (like the beat, the loudness, the instruments) make you feel that way?',
				'How does the rhythm of the song make you think about work or effort? (e.g., Is it fast like a busy day? Slow like careful work? Steady like teamwork?).',
				'What do you notice about the loudness and softness (dynamics) in the song? Where does it get louder or softer, and what feeling does that give you about the story?',
				'Do you hear different instrument sounds? How do they help tell the story or show the feelings about work?',
				'How does the melody (the tune) of the song make you feel about the message of hard work or teamwork? (e.g., is it happy and bouncy? Strong and determined? Calm and gentle?).',
				'What specific lyrics (if present and appropriate) stand out to you about jobs, fairness, or growing stronger?',
				'Does this song connect to your own experiences or observations about the world of work or building things?',
				'Does this song make you feel like everyone has a chance to do good work?',
				'Does this song show the importance of teamwork or trying hard?'
			]
		},
		{
			title: 'Mini-Musical Statements',
			content: 'Have students break into pairs or small groups (3-4 students). Explain that each student will now create a very short mini-musical statement (about 15-20 seconds long) using the musical concepts explored. The statement should express one idea or feeling about Global Goal 8: Decent Work and Economic Growth.\n\n* Instruct students to choose one musical concept (e.g., Rhythm and Dynamics, Melody and Harmony, Form and Structure) and use it to show an idea about jobs or growth.\n\nExample prompts for mini-statements:\n\n* *Focus on Rhythm and Dynamics*\n  * Create a short rhythm and use loud/soft sounds to show a job that feels fair and energetic, OR a job that feels slow and unfair.\n* *Focus on Melody and Harmony*\n  * Create a simple melody (vocal or instrumental) and add another sound/voice (harmony) to show teamwork or different parts of a job blending together nicely.\n* *Focus on Form and Structure*\n  * Create a short musical piece that has two clear parts: one part shows a problem at work (e.g., disorganized, noisy) and the second part shows the solution (e.g., organized, calm).\n\nEncourage students to use their chosen instruments and voices, and aim for clarity in expressing their idea.\n\nCirculate, offering guidance and asking guiding questions like:\n\n* How are you showing fair work just with rhythm and loudness?\n* How does your melody make me feel like people are working together?',
			order: 4
		},
		{
			title: 'Performance and Discussion',
			content: 'Explain that students will now share their mini-musical statements. Instruct the audience to listen carefully and try to hear the idea being expressed.\n\nFor each group:\n\n* Instruct the group to perform their mini-musical statement.\n* Ask the audience: What musical concept did they focus on (rhythm, melody, etc.)? What idea about jobs or growth did you hear?\n* Then invite the performing students to briefly explain their artistic choice: "We used [musical concept] to show [idea from GG8] because [reason].\n* Affirm their creativity and ability to express big ideas through music.',
			order: 5
		},
		{
			title: 'Cool Down: Musical Check-Out',
			content: 'Instruct students to find a comfortable, relaxed position.\n\n*Choose Sound/Rhythm*\n\n* Have students silently think about their biggest takeaway from today about Global Goal 8: Decent Work and Economic Growth, and think about what one sound or very short rhythm could represent that learning or feeling for them. It could be a happy sound, a thoughtful rhythm, a quiet hum, or a confident tap.\n  * Give students a few seconds to think and decide.\n\n*Check-Out Sounds*\n\n* Start a quiet, steady pulse (e.g., a gentle foot tap). Instruct students to, one by one, when they feel ready, add their chosen sound/rhythm to the collective pulse. The goal is a gentle, overlapping soundscape.\n\n*Final Silence*\n\n* After everyone has shared their sound/rhythm, guide the collective sound to slowly diminish and fade into complete silence.\n\nGuide students to take one last breath, feeling calm and reflecting on their learning.',
			order: 6
		}
	],
	reflectionQuestions: [
		'How did exploring musical concepts like rhythm, melody, and harmony help you understand Global Goal 8: Decent Work and Economic Growth in a new way?',
		'What did you learn about the power of music to help us tell stories about challenges and solutions in the world of work?',
		'Which musical examples or ideas from your classmates made you think or feel the most about good jobs and fair growth, and why?',
		'What do our activities tell us about how we can all work towards Global Goal 8?',
		'What\'s one small action you feel inspired to take this week to be fair in your own work (like homework or chores) or support good work in your community?'
	],
	assessmentCriteria: [
		'Consistent and enthusiastic involvement in all phases of the lesson, including the warm up, musical concept explorations, mini-statement creation, and class discussions.',
		'Understanding of the core concept of decent work and economic growth (fair jobs, safe workplaces, sustainable growth, teamwork), as demonstrated through the musical choices and explanations that reflect these concepts.',
		'Originality and effectiveness in applying one chosen musical concept (rhythm/dynamics, melody/harmony, or form/structure) to represent an idea about decent work in the mini-musical statement. Look for clear intent and expression.',
		'Ability to work effectively during group explorations, contributing ideas, and experimenting with sounds. Also assess the responsiveness and ability to blend in collective warm up and cool down activities.',
		'Ability to articulate learning and personal connections during the reflection and summary discussion.'
	],
	media: [
		{
			title: 'The Climb',
			artist: 'Miley Cyrus',
			url: 'https://www.youtube.com/watch?v=NG2zyeVRcbs',
			order: 1
		},
		{
			title: 'We Built This City',
			artist: 'Starship',
			url: 'https://www.youtube.com/watch?v=K1b8AhIsSYQ',
			order: 2
		},
		{
			title: 'Stronger (What Doesn\'t Kill You)',
			artist: 'Kelly Clarkson',
			url: 'https://www.youtube.com/watch?v=Xn676-fLq7I',
			order: 3
		},
		{
			title: '9 to 5',
			artist: 'Dolly Parton',
			url: 'https://www.youtube.com/watch?v=UbxUSsFXYo4',
			order: 4
		},
		{
			title: 'Working Class Hero',
			artist: 'John Lennon',
			url: 'https://www.youtube.com/watch?v=Ve-mANenpC4',
			order: 5
		},
		{
			title: 'Working in the Coal Mine',
			artist: 'DEVO',
			url: 'https://www.youtube.com/watch?v=0O445CcK0qY',
			order: 6
		}
	]
};

registerLessonContent(lessonContent);

export default lessonContent;


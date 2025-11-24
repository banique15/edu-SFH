import type { LessonContentData } from '../types';
import { registerLessonContent } from '../index';

const lessonContent: LessonContentData = {
	goalNumber: 8,
	artForm: 'Drama' as const,
	gradeLevel: '5-8' as const,
	title: "DRAMA",
	duration: "",
	materials: [
  {
    "name": "Classroom space suitable for acting and movement",
    "isOptional": false
  },
  {
    "name": "Whiteboard or large chart paper",
    "isOptional": false
  },
  {
    "name": "Markers",
    "isOptional": false
  },
  {
    "name": "Notebooks or paper",
    "isOptional": false
  },
  {
    "name": "Pens/Pencils",
    "isOptional": false
  },
  {
    "name": "[Job Dilemma Cards](https://docs.google.com/document/d/13v_29SmrOnDX0SUih95CzTdcM0oTXJa1s7oeaCihpDw/edit?usp=sharing): Prepared small slips of paper or index cards (one card per small group). Each will have a short scenario describing a simple problem or challenge related to getting a good job, being fair at work, or economic growth that isn’t helping everyone. Each card will also suggest 2-4 characters.",
    "isOptional": false
  },
  {
    "name": "\\[Optional\\] Costumes and props (simple items like hats, aprons, tools, paper money, signs \\- emphasis on imagination over realism)",
    "isOptional": false
  }
],
	introduction: "Welcome students to an exciting drama class. Explain that they will use acting and imagination to explore a really important topic: Global Goal 8, Decent Work and Economic Growth.  \nClarify that Global Goal 8 is like a huge promise the world has made: a promise to make sure everyone, everywhere, has a good job \\- one that is fair, safe, and where they are treated with respect. Emphasize that it’s also about helping communities and countries grow stronger in a way that helps everyone and doesn’t harm our planet. Explain this means jobs that are safe, pay fairly, and help the world be a better place.  \nExplain that drama is a powerful way to bring stories to life, show feelings, explore problems, and even think about solutions. Clarify that actors use their voices, bodies, and imaginations to transform into different characters and situations.  \nTell students that today, they will all become job storytellers, acting out scenes about different kinds of work, the challenges people face, and how we can work towards a world with decent work and growth for all.",
	steps: [
  {
    "title": "The Drama of Decent Work",
    "content": "**(30-60 MINUTES)**"
  },
  {
    "title": "Warm Up: Workday Transformation",
    "content": "Explain that students will transform everyday action into exaggerated “workday moves” that show different job feelings.   \nInstruct students to stand up and find their own space, with enough room to move around.  \n*Everyday Start*\n\n* *Say*: You’re getting ready for your school day. Show me a very normal, tired stretch in the morning.  \n  * Demonstrate a simple, sleepy stretch for students to follow.  \n* Say: Now, transform that stretch into a super strong, ready to work stretch of a builder or a farmer.  \n  * Demonstrate big, powerful stretches for students to follow.\n\n*The Daily Grind*\n\n* Say: Show me a very normal walk to class.   \n  * Demonstrate a normal walk, students follow.  \n* Say: Now, transform that into the exaggerated, repetitive walk of someone walking a very long way to work.  \n  * Demonstrate a hunched, slow, repetitive walk, students follow.\n\n*The Breakthrough*\n\n* You just heard a fantastic idea for a new, fair way to work\\! Show me an exaggerated burst of excitement or a “lightbulb” moment.  \n  * Demonstrate and students mime big, sudden movements, wide eyes, huge smile, maybe a jump.\n\n*Fair and Proud Walk*\n\n* Show me the smooth, proud movements of someone doing fair work that they love. How do you move when you feel respected and happy at your job?  \n  * Students move with open, confident, flowing gestures, happy faces.\n\nConclude the warm up by affirming their expressive abilities."
  },
  {
    "title": "Job Dilemma Cards",
    "content": "Divide the class into small groups of 3-5 students. Explain that each group will receive a Job Dilemma card with a real-life work situation, and their job will be to brainstorm how to act it out.  \nNote: If using the example Job Dilemma Cards, feel free to remove characters as needed to match the number of students in each group.  \nProvide each group with their one pre-written Job Dilemma card.  \n[Job Dilemma Card Examples](https://docs.google.com/document/d/13v_29SmrOnDX0SUih95CzTdcM0oTXJa1s7oeaCihpDw/edit?usp=sharing)  \nInstruct each group to look at their card.   \nAsk: What is the job? What is the problem or challenge? Who are the characters?  \nTell students their challenge is to quickly discuss and prepare a short, silent scene (about 1 \\- 2 minutes long) about this dilemma. Have the groups focus on showing the characters’ feelings and the problem clearly. Students can use movement and improvised dialogue, have them think about what their characters would say to each other in this situation.  \nExample Discussion Points for Groups:\n\n* Who will play each character listed on the card?  \n* What are the most important actions and lines to show the problem clearly for the audience?  \n* How will you show the characters’ feelings (e.g., frustration, tiredness, worry, pride, unfairness) using your voice and body language?  \n* What might your characters say to each other in this moment?  \n* What simple props (optional) could you use to make the scene clearer?  \n* What do you think is the main problem this job dilemma shows us about decent work or economic growth?\n\nGive groups 5-7 minutes to quickly discuss their dilemma, assign roles, and decide on a few actions or spoken phrases to show their scene.   \nCirculate, offering guidance and encouragement, prompting them to think about how they will clearly show the problem for the audience."
  },
  {
    "title": "Exploring Drama Techniques",
    "content": "Quickly review some drama techniques with the class that will help them bring their Job Dilemma scenes to life:\n\n* *Role-Playing:* Instruct students that they will step into the shoes of their characters. Ask them to think about:  \n  * How would this character walk?  \n  * How would their voice sound (high, low, fast, slow, loud, soft)?  \n  * What’s their main feeling?  \n* Have students practice walking/speaking as their character briefly.  \n* *Scene Creation (Blocking and Action):* Explain that a scene needs clear actions. Guide students to understand:  \n  * Show, don’t tell.  \n  * If a character is worried, don’t just say it, act it. Wring your hands, pace, or frown.  \n  * If a character is building something, mime the tools.  \n  * What would a character say while doing something?  \n* Have students quickly rehearse a single action from their group’s dilemma, focusing on showing it clearly with both voice and body language.  \n* *Improvisation:* Remind students that improvisation means making things up on the spot, reacting naturally to their group members and the situation. Explain that they don’t need a full script; they can trust themselves to find the words and actions.  \n  * *Give a simple prompt:* (ex. Your character just discovered something missing that they need. Show their reaction\\!)  \n* Have students quickly improvise the reaction to the prompt given."
  },
  {
    "title": "Scene Creation: Our Work Stories",
    "content": "Explain that the groups will now use their brainstormed ideas and learned drama techniques to perform their short Job Dilemma scenes. Remind them to clearly show the problem on the card.  \nDesignate a performance space.  \nHave each group perform their short scene, clearly depicting the challenge or conflict from their Job Dilemma card.  \nAfter each scene, invite the audience to share. Ask guiding questions like:\n\n* What job did you see in the scene? What was the main problem or challenge they faced?  \n* What emotions did the characters show? How did the actors use their voices or bodies to show those feelings?  \n* What did this scene make you think about decent work or economic growth?\n\nRepeat the process for all groups."
  },
  {
    "title": "Cool Down: The Steady Pulse of Progress",
    "content": "This cool down connects directly to the lesson’s themes of work, stability, and growth, promoting a calm, collective feeling and classroom.  \nExplain that the class will now bring down their energy. Instruct the class to be seated in a circle formation, in a position comfortable for them. They can gently close their eyes if comfortable.  \n*Inner Pulse*\n\n* Say: Gently place one hand over your heart. Feel your own steady pulse. Imagine this pulse is the constant, fair rhythm of good and fair work happening all over the world.  \n  * Guide students to focus on their heartbeat.\n\n*Collective Pulse*\n\n* Say: Now, very gently, begin to tap a soft, steady rhythm with one finger on your leg. Imagine this rhythm joining with everyone else’s rhythm in the room, creating one big, calm, powerful pulse of progress. Feel how strong we are together.  \n  * Guide the class to create a very quiet, unified rhythmic pulse, bringing all the separate rhythms together.\n\n*Breath of Growth*\n\n* Say; As you keep this gentle beat, take a deep breath in, imagining you’re breathing in hope and fairness. As you breathe out slowly, imagine sending out kindness and progress into the world. Feel steady and peaceful.  \n  * Guide 2-3 deep breaths with the steady gentle tapping, focusing on positive visualization.\n\nGently guide students to let their tapping fade to stillness, returning to quiet breathing, feeling calm and connected to the idea of fair and steady progress and work for all.  \nBring students back by wiggling fingers and toes before opening their eyes, feeling calm and ready."
  },
  {
    "title": "Reflection & Summary",
    "content": "Have students reflect on their learning experience through discussion or writing.  \nAsk guiding questions like:\n\n* How did acting out different job challenges help you understand Global goal 8: Decent Work and Economic Growth in a new way?  \n* What did you learn about what makes a “good” job and how economic growth can be fair for everyone?  \n* Which scenes or ideas from your classmates made you think or feel the most about jobs and growth, and why?  \n* What’s one small action you feel inspired to take this week to be fair in your own work (like homework or chores) or support good work in your community?"
  },
  {
    "title": "Making Music for Great Jobs",
    "content": "**(30-60 MINUTES)**"
  },
  {
    "title": "Warm Up: Guess the Work Sound",
    "content": "Explain that the class will use their voice, body percussion, or an instrument to create a sound or short rhythm that represents a common job or work activity. Instruct students to listen carefully, try to imitate the sound/rhythm quietly, and then guess what job it might be.  \n*Teacher Plays, Students Guess*\n\n* Perform a rhythmic sound for a job using your voice, body percussion, or a simple instrument.  \n  Examples of Rhythms/Sounds and Jobs  \n  * *Hammering:* tap-tap-tap-BANG\\! (using hand on desk or drum, with a louder final hit)  \n    * *Job:* Builder or construction worker.  \n  * *Sweeping:* shhh-shhh (hands rubbing together, or a soft brush sound with shakers)  \n    * *Job:* Cleaner or janitor  \n  * *Typing:* click-clack-click-clack (finger taps/claves)  \n    * *Job:* Writer/author, office worker.  \n  * *Pumping Water:* pump-whoosh-pump-whoosh (using arm motion and vocal sounds)  \n    * *Job:* Farmer, well digger.  \n  * *Stirring/Cooking:* stir-stir-stir-ding\\! (using hand motion and a vocal ding or bell sound)  \n    * *Job:* Cook/chef, baker.  \n  * *Driving:* vroom-vroom-honk (vocal sounds, with a short jerky rhythm)  \n    * *Bus Driver, delivery person.*\n\n*Students Imitate and Guess*\n\n* After each sound/rhythm, instruct students to try and imitate the sound/rhythm with their own body percussion or instruments.   \n* Then ask: What job do you think that rhythm/sound represents? Discuss and affirm guesses.\n\n*\\[Optional\\] Student Leads*\n\n* If time allows and class is comfortable, invite a few students to create their own job sound for the class to imitate and guess.\n\nConclude by affirming the students’ rhythmic listening and connection between sound and work."
  },
  {
    "title": "Exploring Musical Concepts for Work",
    "content": "Explain that music has special ingredients that help tell a story or show feelings about jobs and growth. The class will experiment with these concepts using their instruments and voices.\n\n* *Rhythm and Dynamics:* Rhythm is the pattern of sounds (like a heartbeat or a drumbeat), and dynamics refers to how loud or soft the music is.  \n  * Ask: How would a fast, steady rhythm with loud dynamics show a busy factory or a quick, strong worker?  \n    * E.g., tap-tap-tap-tap-tap-tap quickly and loudly on a drum, or rapid claps.  \n  * Ask: How would a slow, uneven rhythm with soft dynamics show a tired worker or a job that feels a bit difficult?  \n    * E.g., STOMP…quiet tap…STOMP slowly ans softly, or a slow, sighing hum.  \n* *Melody and Harmony:* Melody is the tune (the part you might hum), and harmony is when different notes or voices sound good together.  \n  * Ask: How would a simple, happy melody (high or low) show a job that feels fair and good?  \n    * E.g., a simple rising hum like do-re-mi, or a cheerful la-la-la  \n  * Ask: How could different voices or instruments playing simple sounds together show teamwork and how everyone contributes to a job?  \n    * E.g., one group hums a low note, another a high note, blending them together.  \n  * Have students explore simple melodies and layering sounds.  \n* *Form and Structure:* Form is how a piece of music is organized into different sections, like a song having a verse and a chorus.  \n  * Ask: How could you use two different musical sections to show a problem at work and then a solution?  \n    * E.g., an “A” part that’s messy and then a “B” part that’s organized.  \n  * Have students try moving from one contrasting musical idea to another.  \n    * E.g., chaotic banging followed by a calm, steady beat.  \n* *Timbre (Instrument Sounds):* Timbre is the unique sound quality of an instrument or voice (what makes a drum sound different from a shaker, or your voice different from a robot’s).  \n  * Ask: What instrument sounds like hard, strong work?  \n    * E.g., a drum, a rhythm stick.  \n  * Ask: What sounds like something new and exciting being invented?  \n    * E.g., a shaker, a bell, a unique vocal sound.  \n  * Ask: What kind of vocal sound would represent a specific feeling about work?  \n    * E.g., hum, cheer, sigh, whisper.  \n  * Have students explore different instrument/vocal sounds.\n\nGuide students to explore with their instruments and voices to demonstrate how these different musical elements can tell a story about work and economic growth. This serves as an integrated brainstorming process."
  },
  {
    "title": "Music and Global Goal 8",
    "content": "Explain that music can tell powerful stories about work and economic growth. The class will listen to one or two age-appropriate songs (or look at their lyrics, or both) that connect to Global Goal 8\\.  \nSong Examples:\n\n* [“The Climb”](https://www.youtube.com/watch?v=NG2zyeVRcbs) by Miley Cyrus  \n* [“We Built This City”](https://www.youtube.com/watch?v=K1b8AhIsSYQ) by Starship  \n* [“Stronger (What Doesn’t Kill You)”](https://www.youtube.com/watch?v=Xn676-fLq7I) by Kelly Clarkson  \n* [“9 to 5”](https://www.youtube.com/watch?v=UbxUSsFXYo4) by Dolly Parton  \n* [“Working Class Hero”](https://www.youtube.com/watch?v=Ve-mANenpC4) by John Lennon  \n* [“Working in the Coal Mine”](https://www.youtube.com/watch?v=0O445CcK0qY) by DEVO\n\nPlay the chosen song(s). Guide students to analyze not just the lyrics but also the musical elements of the song and how they contribute to the overall message. Ask guiding questions like:\n\n* What emotions or thoughts did this song make you feel? How did the music (like the beat, the loudness, the instruments) make you feel that way?  \n* How does the rhythm of the song make you think about work or effort? (e.g., Is it fast like a busy day? Slow like careful work? Steady like teamwork?).  \n* What do you notice about the loudness and softness (dynamics) in the song? Where does it get louder or softer, and what feeling does that give you about the story?  \n* Do you hear different instrument sounds? How do they help tell the story or show the feelings about work?  \n* How does the melody (the tune) of the song make you feel about the message of hard work or teamwork? (e.g., is it happy and bouncy? Strong and determined? Calm and gentle?).  \n* What specific lyrics (if present and appropriate) stand out to you about jobs, fairness, or growing stronger?  \n* Does this song connect to your own experiences or observations about the world of work or building things?  \n* Does this song make you feel like everyone has a chance to do good work?  \n* Does this song show the importance of teamwork or trying hard?"
  },
  {
    "title": "Mini-Musical Statements",
    "content": "Have students break into pairs or small groups (3-4 students). Explain that each student will now create a very short mini-musical statement (about 15-20 seconds long) using the musical concepts explored. The statement should express one idea or feeling about Global Goal 8: Decent Work and Economic Growth.\n\n* Instruct students to choose one musical concept (e.g., Rhythm and Dynamics, Melody and Harmony, Form and Structure) and use it to show an idea about jobs or growth.\n\nExample prompts for mini-statements\n\n* *Focus on Rhythm and Dynamics*  \n  * Create a short rhythm and use loud/soft sounds to show a job that feels fair and energetic, OR a job that feels slow and unfair.  \n* *Focus on Melody and Harmony*  \n  * Create a simple melody (vocal or instrumental) and add another sound/voice (harmony) to show teamwork or different parts of a job blending together nicely.  \n* *Focus on Form and Structure*  \n  * Create a short musical piece that has two clear parts: one part shows a problem at work (e.g., disorganized, noisy) and the second part shows the solution (e.g., organized, calm).\n\nEncourage students to use their chosen instruments and voices, and aim for clarity in expressing their idea.  \nCirculate, offering guidance and asking guiding questions like:\n\n* How are you showing fair work just with rhythm and loudness?  \n* How does your melody make me feel like people are working together?"
  },
  {
    "title": "Performance and Discussion",
    "content": "Explain that students will now share their mini-musical statements. Instruct the audience to listen carefully and try to hear the idea being expressed.  \nFor each group:\n\n* Instruct the group to perform their mini-musical statement.  \n* Ask the audience: What musical concept did they focus on (rhythm, melody, etc.)? What idea about jobs or growth did you hear?  \n* Then invite the performing students to briefly explain their artistic choice: “We used \\[musical concept\\] to show \\[idea from GG8\\] because \\[reason\\].  \n* Affirm their creativity and ability to express big ideas through music."
  },
  {
    "title": "Cool Down: Musical Check-Out",
    "content": "Instruct students to find a comfortable, relaxed position.  \n*Choose Sound/Rhythm*\n\n* Have students silently think about their biggest takeaway from today about Global Goal 8: Decent Work and Economic Growth, and think about what one sound or very short rhythm could represent that learning or feeling for them. It could be a happy sound, a thoughtful rhythm, a quiet hum, or a confident tap.  \n  * Give students a few seconds to think and decide.\n\n*Check-Out Sounds*\n\n* Start a quiet, steady pulse (e.g., a gentle foot tap). Instruct students to, one by one, when they feel ready, add their chosen sound/rhythm to the collective pulse. The goal is a gentle, overlapping soundscape.\n\n*Final Silence*\n\n* After everyone has shared their sound/rhythm, guide the collective sound to slowly diminish and fade into complete silence.\n\nGuide students to take one last breath, feeling calm and reflecting on their learning."
  }
],
	reflectionQuestions: [
  "How did acting out different job challenges help you understand Global goal 8: Decent Work and Economic Growth in a new way?",
  "What did you learn about what makes a “good” job and how economic growth can be fair for everyone?",
  "Which scenes or ideas from your classmates made you think or feel the most about jobs and growth, and why?",
  "What’s one small action you feel inspired to take this week to be fair in your own work (like homework or chores) or support good work in your community?"
],
	assessmentCriteria: [
  "Consistent and enthusiastic involvement in all phases of the lesson, including the warm up, brainstorm, group scene creation, and class discussion.",
  "Understanding of the core concept of decent work and economic growth (fair jobs, safe workplaces, sustainable growth), as demonstrated through the content and verbal explanations within the improvised scenes.",
  "Originality and effectiveness in performing the scenes. Look for evidence of character portrayal (does the student effectively embody the character through voice, body language, and facial expressions?), clear problem (does the scene clearly communicate the job dilemma or challenge?), emotional conveyance (are emotions related to the dilemma shown effectively through acting?), use of improvised dialogue (is the dialogue natural and does it advance the scene?), and collaboration (does the group work together to create a cohesive scene?).",
  "Ability to articulate learning and personal connections during the reflection and summary discussion."
],
};

registerLessonContent(lessonContent);

export default lessonContent;

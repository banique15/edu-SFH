import type { LessonContentData } from '../types';
import { registerLessonContent } from '../index';

const lessonContent: LessonContentData = {
	goalNumber: 7,
	artForm: 'Music' as const,
	gradeLevel: '5-8' as const,
	title: "MUSIC",
	duration: "",
	materials: [
  {
    "name": "A variety of drums and percussion instruments (e.g., hand drums, djembes, bongos, tambourines, shakers, claves, rhythm sticks). Aim for one per student, or enough for students to share in pairs. If instruments are limited, encourage students to find improvised instruments safely from the classroom (e.g., clapping hands, stomping feet, tapping pencils on desks, plastic container shakers, snapping fingers, etc.).",
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
    "name": "Audio",
    "isOptional": false
  },
  {
    "name": "Paper or notebooks",
    "isOptional": false
  },
  {
    "name": "Pens/pencils",
    "isOptional": false
  }
],
	introduction: "Welcome students to an exciting music class. Explain that they will use the power of rhythm, sound, and drumming to explore a really important idea: Global Goal 7, Affordable and Clean Energy.  \nThis goal focuses on making sure everyone, everywhere, has access to energy that is affordable (not too expensive), reliable (always there when you need it), and clean (good for the planet). Emphasize that this means lights for homes and schools, clean ways to cook food, and power for our devices, all without harming the Earth.  \nAsk students:\n\n* What does energy feel like in your body? Do you feel it when you jump, run, or even think hard?  \n* Where do you feel energy in your body? (e.g., in your heart beating, your muscles when you move, your brain when you think).  \n* What sounds do you associate with energy? (e.g. a whoosh for speed, a thump for power, etc.).\n\nExplain that today, they will become energy drummers, using instruments to explore the sounds of energy, from nature’s clean power to the challenges some communities face, and the solutions that bring light and health.",
	steps: [
  {
    "title": "A Drumming Journey for Clean Power",
    "content": "**(30-60 MINUTES)**"
  },
  {
    "title": "Warm Up: Energy Sound Portraits",
    "content": "Explain that the class will create Energy Sound Portraits, where each student will make sounds that represent different kinds of energy, then blend them together. Ensure each student has an instrument.  \n*Your Energy Sound*\n\n* Give students a few simple energy prompts. For each prompt, instruct them to explore their instrument to find one sound or short rhythm that represents that type of energy. Encourage students to try different sounds quietly. They can also use their voices if desired and appropriate for the class.  \n  Example Prompts:  \n  * *Prompt 1: A Tiny Spark:* What sound represents a tiny spark of energy? (e.g., a quiet tap, a gentle click, a soft brush).  \n  * *Prompt 2: A Bright Sunbeam:* What sound represents a bright sunbeam? (e.g., a shimmering shake, a sustained beat, a clear hum).  \n  * *Prompt 3: A Strong Wind:* What sound represents a strong wind? (e.g., a swishing, a rising drum roll, a whoosing).  \n  * *Prompt 4: A Quiet Battery:* What sound represents energy that is stored quietly, like a battery? (e.g, a low steady hum, a soft tap, a quiet ticking).\n\n*Blending Our Portraits (Collective Soundscape)*\n\n* Explain that they will now create a collective soundscape by blending all the individual sound portraits together.  \n  * Ask for a volunteer to start with their Tiny Spark sound.  \n  * Then indicate other students, one by one (or in small clusters), to gradually at their chosen sound portrait (e.g., their sunbeam sound, their strong wind sound, etc.).   \n  * Instruct students to listen carefully to each other and blend their sounds, making space for everyone.  \n  * Guide the collective soundscape to build in energy (as more sounds are added) and then slowly fade to a quiet, harmonious blend.\n\nConclude the warm up by affirming the individual sound creativity and the class’s ability to blend into a cohesive group."
  },
  {
    "title": "Musical Journey: Harnessing Nature’s Energy",
    "content": "With their instruments, allow students to freely explore the sounds and rhythms they can create. Encourage experimentation with different tempos, dynamics (loud/soft), and patterns, using what they learned in the warm up to inspire and inform.  \nExplain that they will now use their instruments to explore the energy of nature’s clean power sources: sun, wind, and water. Guide students to find a comfortable seated position (if not already seated).\n\n* *The Sun’s Energy*  \n  * Say: Imagine the warm, powerful rays of the sun. How can your instrument create a sound or rhythm that represents the sun’s energy? Is it steady, bright, strong, or gentle?  \n    Musical Exploration Examples:  \n    * Steady, continuous beats on a drum.  \n    * Shimmering sounds from shakers or cymbals.  \n    * Bright, clear sounds from claves or woodblocks.  \n    * A steady warm hum (vocals).  \n  * Allow students a minute or two to explore the sounds of the sun with their instruments.  \n* *The Wind’s Energy*  \n  * Say: Imagine a gentle breeze, then a strong, gusty wind. How does the wind’s energy feel different from the sun’s? What kind of rhythm or beat capures the movement and power of the wind on your instrument?  \n    Musical Exploration Examples:  \n    * Light, swirling sounds from shakers.  \n    * Rising and falling dynamics on a drum for gusts.  \n    * Swishing sound on cymbals.  \n    * Whistling or whoosing sound (vocals).  \n    * Light taps on percussion instruments.  \n  * Allow students a minute or two to explore the sounds of the wind.  \n* *The Water’s Energy*  \n  * Say: Imagine a flowing river, then a powerful waterfall. How does the water’s energy feel different from the sun and the wind? How can you express the energy of water through your instrument; a smooth flow, a powerful crash, or gentle trickles?  \n    Musical Exploration Examples:  \n    * Smooth, continuous rolls on a drum.  \n    * Quick, repetitive sounds for trickling.  \n    * A loud, crashing sound for a wave.  \n    * Bubbling (vocals).  \n    * Fluid, sweeping sounds on cymbals.  \n  * Allow students a minute or two to explore the sounds of water.  \n* *Combined Energy Symphony*  \n  * Say: Now, we will try ot combine the energies of the sun, wind, and water into a single rhythm. How can you use your instrument and voice to create a soundscape that represents all three elements working together to make clean energy?  \n  * Allow students a few minutes to create their own combined soundscape, encouraging listening and blending."
  },
  {
    "title": "Energy Sound Storyboard",
    "content": "Divid students into small groups (3-4 students). Provide each with a group with a piece of paper and pen/pencil for brainstorming.  \nInstruct each group to draw a simple storyboard with three panels, representing the flow of a short story about energy.\n\n* *Panel 1, The Energy Challenge (Problem)*  \n  * e.g., no lights, dirty air, expensive power.  \n* *Panel 2, The Search for Solutions (Action)*  \n  * e.g., people working, inventing, learning.  \n* *Panel 3, The Clean Energy Solution (Hope)*  \n  * e.g., solar panels, wind turbines, efficient use, etc.\n\nFor each panel, instruct groups to brainstorm things like:\n\n* *Key Words/Phrases:* What words describe this part of the story?  \n* *Sounds/Rhythms:* What specific sounds, rhythms, or instruments from your exploration (plus more) would represent this panel?  \n* *Emotional Tone:* How does this part of the story feel musically? (e.g., tense, slow, fast, bright, determined, joyful, etc.).\n\nCirculate, offering guidance. Ask guiding questions like:\n\n* What sound expresses darkness or pollution?  \n* What rhythm shows working hard to find a solution?  \n* What instruments or vocalizations would sound clean or powerful for your solution?"
  },
  {
    "title": "Rhythm of Solutions: Group Compositions",
    "content": "Explain that each group will now create a short musical composition/song (about 45-60 seconds long) based on their storyboard. The song should tell the story using rhythms, sounds, and dynamics.  \nInstruct groups to:\n\n* *Use their storyboard:* Translate the sounds, rhythms, and emotional tones from each panel into a flowing musical piece.  \n* *Explore dynamics:* How can loud/soft show different feelings?  \n* *Explore tempo:* How can fast/slow rhythms show urgency or calmness?  \n* *Explore texture:* How can different instruments or vocal sounds be layered to create a rich soundscape?  \n* *Practice:* Rehearse their composition/song, ensuring smooth transitions between the storyboard panels.\n\nCirculate, offering guidance and encouraging creative choices. Ask guiding questions like:\n\n* How are you showing the change from the challenge sound to the solution sound?  \n* Are you clearly hearing the story in your music?  \n* How does everyones instrument/voice contribute to the whole piece?"
  },
  {
    "title": "Energy Jam Session: Shared Compositions",
    "content": "Gather all students together, with a defined space for performances.  \nBefore the first group performs, assign a simple, universal participation role to the audience. This role will continue for all performances.\n\n* The audience will maintain a steady, gentle beat throughout each performance along with the performing group. This creates a supportive foundation and energy for the group on “stage”.\n\nFor each group:\n\n* Instruct the performing group to introduce their composition briefly (e.g., “Our song shows \\[challenge\\] and how we find \\[solution\\].”).  \n* Cue the audience to begin their participation role, based on the tempo needed from the performing group.  \n* The performing group plays their song/composition, bleding with the audience’s participation.\n\nAfter the performance, lead a brief discussion, focusing on both the performing group’s work and the audience’s participation. Ask guiding questions like:\n\n* What challenge did you show in your music, and what was your solution?  \n* How did the audience’s participation make your composition feel different or more powerful?  \n* What did you hear in the composition that showed the challenge? What showed the solution?  \n* How did your support help the music?  \n* Did you feel more connected to the story because you were participating?\n\nContinue the process for all groups (or have the discussion after all groups have performed) ensuring each group has the opportunity to share and experience the active support of their classmates."
  },
  {
    "title": "Reflection & Summary",
    "content": "Have students reflect on their learning experience through discussion or writing.  \nAsk guiding questions like:\n\n* How did creating rhythms and soundscapes, and participating in the jam session, help you understand Global Goal 7: Affordable and Clean Energy in a new way?  \n* What did you learn about the power of music to help us tell stories about challenges and solutions related to energy?  \n* Which compositions/songs or ideas from your classmates made you think or feel the most about clean energy, and why?  \n* What do these activities tell us about how we can all work towards Global Goal 7?  \n* What’s one small action you feel inspired to take this week to save energy or promote clean energy?"
  }
],
	reflectionQuestions: [
  "How did creating rhythms and soundscapes, and participating in the jam session, help you understand Global Goal 7: Affordable and Clean Energy in a new way?",
  "What did you learn about the power of music to help us tell stories about challenges and solutions related to energy?",
  "Which compositions/songs or ideas from your classmates made you think or feel the most about clean energy, and why?",
  "What do these activities tell us about how we can all work towards Global Goal 7?",
  "What’s one small action you feel inspired to take this week to save energy or promote clean energy?"
],
	assessmentCriteria: [
  "Consistent and enthusiastic involvement in all phases of the lesson, including the warm up, musical journey explorations, brainstorm, group composition, jam session, and discussion.",
  "Understanding of the core concepts of affordable and clean energy (access, renewables, efficiency, challenges, solutions), as demonstrated through the sounds, rhythms, and message in the group compositions and verbal contributions during discussions.",
  "Originality and effectiveness in crafting the group compositions. Look for evidence of a clear narrative (does the music clearly tell a story about energy?), use of elements (are there attempts to use dynamics, tempo, rhythm, and sound choices to convey the narrative and emotional tone?), and translation of ideas (is there a clear connection between the storyboard ideas and musical choices?).",
  "Ability to work effectively within the small groups, contributing ideas, respecting diverse musical choices, and collaborating cohesively to create the piece.",
  "Responsiveness and ability to blend during the jam session as audience members.",
  "Ability to articulate learning and personal connections during the reflection and summary discussion."
],
};

registerLessonContent(lessonContent);

export default lessonContent;

import type { LessonContentData } from '../types';
import { registerLessonContent } from '../index';

const lessonContent: LessonContentData = {
	goalNumber: 2,
	artForm: 'Music' as const,
	gradeLevel: '5-8' as const,
	title: "Jamming for Zero Hunger",
	duration: "15-45 MINUTES",
	materials: [
  {
    "name": "Simple percussion instruments: hand drums, shakers, tambourines, rhythm sticks, claves). If instruments are limited, encourage students to find improvised instruments safely from the classroom (e.g., clapping hands, stomping feet, tapping pencils on desks, using plastic containers as shakers, snapping fingers).",
    "isOptional": false
  },
  {
    "name": "Audio",
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
    "name": "Notebooks or Paper",
    "isOptional": false
  },
  {
    "name": "Pens/Pencils",
    "isOptional": false
  },
  {
    "name": "\\[Optional\\] Pictures of diverse healthy foods, gardens, farms, children eating happily",
    "isOptional": false
  }
],
	introduction: "Welcome students to a musical adventure, and explain that they will be using the power of rhythm and sound to explore Global Goal 2: Zero Hunger, a very important idea.\n\n* Explain that Global Goal 2 is a commitment to make sure everyone, everywhere, has enough healthy food to eat, all the time. It means kids can grow strong and learn well, and families have enough nutritious food every day.  \n* It’s about fairness, health, and making sure no one goes hungry.\n\nDiscuss how music can make us feel strong, happy, determined, or even help us understand big challenges, and that today the class will be using rhythm and voice to create sounds that show what a world with and without hunger looks like.",
	steps: [
  {
    "title": "Rhythm Builders",
    "order": 1,
    "content": "Begin with an active rhythmic warm-up to prepare students for making music and moving with rhythm.\n\n* *Clap-Echo:* I’ll clap a short rhythm, and you all echo it back exactly. Listen carefully\\! (Clap simple 2-4 beat rhythm).   \n  Examples:  \n  * Clap-clap-rest-clap, clap-stomp-clap-stomp, snap-snap-clap-clap  \n  * Clap-clap-clap-rest, stomp-stomp-clap-clap, snap-snap-snap-snap  \n  * Encourage varying tempo (fast/slow) and dynamics (loud/soft).  \n* *Body Percussion Exploration:* Now let’s explore more sounds. Can you rub your hands together to make a “rustling” sound? Pat your knees for a “thump? Tap your chest for a “drum beat”? What other cool sounds can you make with your body? (Allow a minute or so for free exploration.\n\n\tExamples:\n\n* Finger snaps, tongue clicks, foot taps, thigh slaps, chest pats.  \n* *Call-and-Response Lead:* I’ll make a rhythm and call out a specific student, and you make a different rhythm back. We’re having a rhythm conversation.\n\n\tExample:\n\n* Teacher: tap-tap-tap-clap Student: stomp-stomp-stomp-clap"
  },
  {
    "title": "Making Our Music for Zero Hunger",
    "order": 2,
    "content": "Explain that we are going to imagine a “Food Journey” from where food grows all the way to our plates. We’ll think about the sounds of a happy, healthy food journey, and the sounds when a food journey is struggling.  \nDivide the white board/paper into two columns: \"Sounds of a Full Plate\" and \"Sounds of a Struggling Plate\".\n\n* *Sounds of a Full Plate:* Imagine food growing in a garden, being harvested, cooked, and happily eaten. What sounds would you hear? What kind of music wold be in the background? What positive sounds do people make when they have enough food?\n\n\tExamples:\n\n* Chirping birds, gentle rain, rustling leaves, buzzing bees, happy singing, clinking dishes, sizzling food, chopping vegetables, bubbling pots, laughing, chewing satisfied sighs, joyful shouts, happy talking, clinking glasses, upbeat music, steady rhythms, clear melodies, harmonious sounds.  \n* Write these ideas under “Sounds of a Full Plate” using one color marker (e.g., blue).  \n* *Sounds of a Struggling Plate:* Now, imagine a food journey that’s having trouble. What if the garden is dry? What if there’s no one to harvest? What if people are hungry? What sounds might you hear (or not hear)? What kind of music would be playing?\n\n\tExamples:\n\n* Cracking dry earth, distant thunder (but no rain), silence, sad sighs, quiet stomach rumbles, worried whispers, slow heavy footsteps (searching), empty cupboard creaks, no sizzling, quiet kitchen, crying, weak voices, coughs, desperate shouts, no laughter, slow tense music, dissonant sounds, uneven rhythms, breaks in sound.  \n* Write these ideas under “Sounds of a Struggling Plate” using a different color marker (e.g., red).\n\nBriefly summarize: Our brainstorm shows how different sounds can tell different sotires about food and hunger. We’ll use these ideas to create our own music."
  },
  {
    "title": "Group Creation: Our Zero Hunger Rhythm",
    "order": 3,
    "content": "Divide students into small groups (3-4 students). Provide each group with a few simple percussion instruments, or remind them they can use body percussion/improvised instruments.  \nExplain that each group will create a short musical piece (about 30-60 seconds long) using sounds and rhythms from the brainstorm. The piece needs to tell a sthort story about Global Goal 2\\. They can either show:\n\n* *The Challenge:* Use sounds from “Sounds of a Struggling Plate” to create a piece about hunger.  \n* *The Solution & Hope:* Use sounds from “Sounds of a Full Plate” to create a piece about solving hunger and having enough.\n\nEncourage groups to think about:\n\n* *What’s the story:* Which specific idea from the brainstorm will they show? (e.g., dry garden needing water for challenge or community garden growing food for hope)  \n* *Instruments/Sounds:* How will they use the instruments, body percussion, and voices to make sounds from the chosen list?  \n* *Rhythm:* Will it be fast, slow, steady, or uneven?  \n* *Dynamics:* Will it be loud, soft, or change volume?  \n* *Collaboration:* How will everyone in the group contribute to the music?\n\nCirculate among groups, offering guidance and encouraging creativity. Ask questions like:\n\n* How are you using \\[instrument\\] to make the sound of \\[idea\\]?  \n* Can you make your rhythm sound more \\[worried/joyful/etc.\\]?  \n* How could you start your piece to show the challenge, and then change it to show hope?  \n* What’s one special sound you can make with your voice or body that fits your story?  \n* How are you making sure everyone’s sound is heard in your group’s music?"
  },
  {
    "title": "Performances: Our Zero Hunger Jams",
    "order": 4,
    "content": "Have each group perform their musical piece for the class. Encourage the audience to listen carefully and try to hear the story being told.  \nAfter each performance, invite th audience to share:\n\n* What story or feeling did you hear in their music?  \n* Which sounds or rhythms stood out to you?  \n* Did their music sound like a “struggling plate” or a “full plate”?\n\nInvite the performing group to briefly explain their intended message: \n\n* What message about Global Goal 2: Zero Hunger did you want your music to tell?"
  },
  {
    "title": "Humming Hope",
    "order": 5,
    "content": "Explain to students that we will now bring the energy down with a “humming hope” cool-down. Ask them to find a comfortable, relaxed position, sitting or standing. Have them take a deep breath in through their nose and then begin.\n\n* *Gentle Hum:* As you breathe out, make a soft, gentle hum. Try to keep your hum smooth and steady. Feel the vibration in your chest. (Guide the students through this).  \n* *Collective Hum:* Now, let’s all hum together. Listen to the hums around you, and try to make your sound blend in with everyone else’s. We’re creating one peaceful, hopeful sound together. (Encourage a quiet, unified hum).  \n* *Focus on Hope:* As you hum, imagine that sound is a wave of hope, spreading out to everyone in our community, and then all around the world, bringing joy and a full plate to everyone. Feel that peaceful, hopeful energy. (Continue for 1-2 minutes).\n\nEnd by slowly fading the hum, taking one last deep breath, and feeling the quiet energy."
  },
  {
    "title": "Reflection & Summary",
    "order": 6,
    "content": "Have students reflect on their learning experience through discussion or writing.  \nAsk guiding questions like:\n\n* How did making music and sounds help you understand Global Goal 2: Zero Hunger in a different way?  \n* What did you learn about how different sounds and rhythms can show big feelings like hunger, happiness, or sharing?  \n* Which sounds or musical pieces today made you think or feel the most about people needing food or people helping?  \n* What does our \"Jamming for Zero Hunger\" activity tell us about how we can all work together to make sure everyone has enough healthy food?  \n* What's one small thing you can do in your own life today to help make sure every plate is full, perhaps inspired by the music we made?"
  }
],
	reflectionQuestions: [
  "How did making music and sounds help you understand Global Goal 2: Zero Hunger in a different way?",
  "What did you learn about how different sounds and rhythms can show big feelings like hunger, happiness, or sharing?",
  "Which sounds or musical pieces today made you think or feel the most about people needing food or people helping?",
  "What does our \"Jamming for Zero Hunger\" activity tell us about how we can all work together to make sure everyone has enough healthy food?",
  "What’s one small thing you can do in your own life today to help make sure every plate is full, perhaps inspired by the music we made?"
],
	discussionPrompts: [
		"What sounds would you hear? What kind of music would be in the background? What positive sounds do people make when they have enough food?",
		"What sounds might you hear (or not hear)? What kind of music would be playing?",
		"How are you using [instrument] to make the sound of [idea]?",
		"Can you make your rhythm sound more [worried/joyful/etc.]?",
		"How could you start your piece to show the challenge, and then change it to show hope?",
		"What's one special sound you can make with your voice or body that fits your story?",
		"How are you making sure everyone's sound is heard in your group's music?",
		"What story or feeling did you hear in their music?",
		"Which sounds or rhythms stood out to you?",
		"Did their music sound like a \"struggling plate\" or a \"full plate\"?",
		"What message about Global Goal 2: Zero Hunger did you want your music to tell?"
	],
	personalConnection: "Students reflect on how they can personally help make sure every plate is full, inspired by the music they created. They consider small actions they can take in their own lives today.",
	closingActivities: [
		{
			title: "Humming Hope",
			description: "Students bring the energy down with a \"humming hope\" cool-down. They make a soft, gentle hum, then all hum together creating one peaceful, hopeful sound. As they hum, they imagine that sound is a wave of hope, spreading out to everyone in the community and around the world, bringing joy and a full plate to everyone."
		},
		{
			title: "Performances: Our Zero Hunger Jams",
			description: "Each group performs their musical piece for the class. The audience shares what story or feeling they heard, which sounds or rhythms stood out, and whether the music sounded like a 'struggling plate' or a 'full plate'. The performing group explains their intended message about Global Goal 2."
		}
	],
	objectives: [
		{
			category: "Knowledge",
			description: "Identify and define basic needs related to food (e.g., enough food, healthy food, clean water for growing food) and recognize what it means to be hungry or to have enough food to eat.",
			nccasStandard: "Cr1.1.Ma, Cn10.1.Ma",
			order: 1
		},
		{
			category: "Knowledge",
			description: "Recognize that hunger is a problem that affects people in many places around the world, and understand that different communities have diverse experiences with food.",
			nccasStandard: "Cn10.1.Ma, Cn11.1.Ma",
			order: 2
		},
		{
			category: "Knowledge",
			description: "Understand that having access to enough healthy food helps people grow strong, learn well, and feel happy.",
			nccasStandard: "Cn10.1.Ma, Cn11.1.Ma",
			order: 3
		},
		{
			category: "Discourse",
			description: "Explore and describe how feelings and messages about hunger and food are expressed through various art forms (visual art, creative writing, dance, drama, music) by reflecting on visuals, words, music/sounds, movement, and stories.",
			nccasStandard: "Re7.1.Ma, Re8.1.Ma",
			order: 4
		},
		{
			category: "Discourse",
			description: "Participate in respectful discussions about what happens when people don't have enough food and simple ways people and communities can help each other get food.",
			nccasStandard: "Re9.1.Ma, Cn11.1.Ma",
			order: 5
		},
		{
			category: "Discourse",
			description: "Communicate their own thoughts, feelings, and ideas about Global Goal 2: Zero Hunger through creative expression in various artistic mediums.",
			nccasStandard: "Cr3.1.Ma",
			order: 6
		},
		{
			category: "Attitudes",
			description: "Develop empathy and compassion for individuals and communities experiencing hunger, understanding the importance of everyone having access to healthy food.",
			nccasStandard: "Re8.1.Ma, Cn10.1.Ma",
			order: 7
		},
		{
			category: "Attitudes",
			description: "Appreciate the value of food and the efforts involved in growing, harvesting, and preparing it, recognizing it as a precious resource that should not be wasted.",
			nccasStandard: "Cn11.1.Ma",
			order: 8
		},
		{
			category: "Attitudes",
			description: "Cultivate a mindset of kindness and helpfulness, fostering a personal desire to contribute to positive change and ensure everyone has enough to eat.",
			nccasStandard: "Re9.1.Ma",
			order: 9
		},
		{
			category: "Capacity",
			description: "Develop critical thinking skills by observing and discussing how different artistic elements can represent the challenges of hunger and the joy of having enough food.",
			nccasStandard: "Re9.1.Ma, Cn10.1.Ma",
			order: 10
		},
		{
			category: "Capacity",
			description: "Practice collaboration and communication skills through engaging in group art projects, shared writing activities, and coordinated movement, drama, or musical performances to tell stories about hunger and hope.",
			nccasStandard: "Cr2.1.Ma, Pr5.1.Ma",
			order: 11
		},
		{
			category: "Capacity",
			description: "Develop creative expression skills through purposeful experimentation with diverse artistic mediums (visual art, creative writing, dance, drama, music) to communicate their understandings and feelings about \"Zero Hunger.\"",
			nccasStandard: "Cr3.1.Ma",
			order: 12
		},
		{
			category: "Action",
			description: "Identify simple acts of kindness and concrete ways they can help address food needs in their daily lives and communities.",
			nccasStandard: "Pr6.1.Ma, Cn11.1.Ma",
			order: 13
		},
		{
			category: "Action",
			description: "Participate in collaborative artistic projects that creatively express messages of hope, community support, and solutions for a world without hunger.",
			nccasStandard: "Cr3.1.Ma, Pr6.1.Ma",
			order: 14
		},
		{
			category: "Action",
			description: "Reflect on their personal role in contributing to a world where everyone has enough food, fostering a sense of responsible global citizenship in working towards Zero Hunger.",
			nccasStandard: "Re9.1.Ma, Cn11.1.Ma",
			order: 15
		}
	],
	media: [
		{
			title: "Pictures of diverse healthy foods, gardens, farms, children eating happily",
			description: "Optional images for discussion inspiration",
			order: 1
		}
	],
	assessmentCriteria: [
  "Consistent and enthusiastic involvement in all phases of the lesson, including the warm-up, brainstorming, group music creation, and class discussions.",
  "Understanding of the core concept of Global Goal 2 (Zero Hunger, ensuring everyone has enough healthy food), as demonstrated through the sounds, rhythms, and message in the muiscal pieces and verbal contributions during discussions.",
  "Originality and effort in crafting musical pieces. Look for evidence of connection to Global Goal 2 (does the music clearly relate to the idea of hunger or helping to provide food), use of elements (are there attempts to use musical elements (rhythm, dynamics, sound choices, simple vocalizations) to convey the message?",
  "Ability to work effectively within the small groups, contributing ideas, respecting diverse musical choices, and collaborating cohesively to create the pieces.",
  "Ability to articulate learning and personal connections during the reflection and summary discussion."
],
};

registerLessonContent(lessonContent);

export default lessonContent;

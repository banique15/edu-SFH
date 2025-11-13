import type { LessonContentData } from '../types';
import { registerLessonContent } from '../index';

const lessonContent: LessonContentData = {
	goalNumber: 5,
	artForm: 'Creative Writing' as const,
	gradeLevel: '5-8' as const,
	title: "CREATIVE WRITING",
	duration: "",
	materials: [
  {
    "name": "Paper or notebooks",
    "isOptional": false
  },
  {
    "name": "Pens/pencils",
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
  }
],
	introduction: "Welcome students to an exciting creative writing class. Explain that they will use their words and imagination to explore a really important idea: Global Goal 6, Clean Water and Sanitation.  \nClarify that Global Goal 6 means everyone, everywhere, has access to clean water for drinking, washing, and playing, and safe ways to keep our environments clean (like good restrooms and trash disposal). Emphasize that this means healthy rivers, lakes, and oceans, and clean hands for all.  \nExplain to students that writers are artists (like painters, sculptors, etc.) but instead of brushes, colors, or clay, they use words to create pictures in the reader’s mind. Clarify that descriptive writing helps readers “see,” “hear,” “feel,” “smell,” and even “taste” a scene, making it come alive.   \nTell the class that today, they will all become word painters, using their senses to write powerful descriptions about water; whether it’s clean and beautiful, or facing challenges, or showing how people can help\\!  \nBegin by showing the class images of contrasting water environments (polluted vs. pristine).  \nExamples:  \n*Pristine*\n\n* [Plitvice Lakes National Park, Croatia](https://www.afar.com/magazine/visiting-plitvice-lakes-national-park-in-croatia)  \n* [Bora Bora, French Polynesia](https://www.wendyperrin.com/?destination=tahiti-insiders-guide)  \n* [Victoria Falls, Zambia/Zimbabwe](https://www.safaribookings.com/blog/victoria-falls-zambia-vs-zimbabwe-which-side-is-better)  \n* [Lake Baikal, Russia](https://www.russiabeyond.com/travel/332795-myth-busting-lake-baikal)\n\n*Polluted*\n\n* [Yangtze River, China](https://www.ecohubmap.com/hot-spot/pollution-of-the-yangtze-river/178xvrml7n2wlmf)  \n* [Pasig River, Philippines](https://medium.com/@seansarmiento44/pasig-river-is-it-too-late-b9e9dae61cbe)  \n* [Lake Victoria, East Africa](https://www.newscientist.com/article/mg24632890-900-lake-victoria-is-at-risk-of-dying-from-pollution-and-climate-change/)  \n* [The Dead Sea, Israel/Jordan](https://www.researchgate.net/figure/The-shrinkage-of-the-Dead-Sea_fig1_344219537)\n\nOpen a discussion with guiding questions like:\n\n* How do these images make you feel? What emotions come up when you see the sparkling, clean water? What about the murky, polluted water?  \n* What do you see in the clean water pictures that makes it look so inviting? What do you see in the polluted pictures that makes it look unhealthy?  \n* Why is having clean water and clean ways to get rid of waste so important for people and for the environment?  \n* Do you think descriptive words can make someone really feel the importance of clean water? How?",
	steps: [
  {
    "title": "Painting With Words for Clean Water",
    "content": "**(30-60 MINUTES)**"
  },
  {
    "title": "Warm Up: Sensory Spotlight, Water Sounds and Feelings",
    "content": "Explain to the class that they will listen to different water sounds and think about the feelings and words they inspire. Instruct students to get seated comfortably, relax their eyes, and open their ears.  \n*Pure Water Sound*\n\n* Play a short (15-20 second) recording of a gentle stream or ocean waves.   \n  Examples:  \n  * [Gentle Stream](https://www.youtube.com/watch?v=UJZxtO9XNno)  \n  * [Ocean Waves](https://www.youtube.com/watch?v=WHPEKLQID4U)  \n* Ask guiding questions like:  \n  * What do you hear in this sound?  \n  * What words come to your mind?  \n  * What feelings does it give you in your body or heart?  \n    Examples of answers you might hear:  \n    * Calm, peaceful, flowing, gentle, refreshing, clear, light, happy, serene, cool, beautiful.\n\n*Challenging Water Sound*\n\n* Play a short (15-20 second) recording of dripping water (like a leaky faucet) or a distant, harsh industrial sound (representing pollution).   \n  Examples:  \n  * [Dripping Tap](https://www.youtube.com/watch?v=pAC4kC7qW1E)  \n  * [Industrial Sounds](https://www.youtube.com/watch?v=rU0v9uTwtUY)  \n* Ask guiding questions like:  \n  * What do you hear in this sound?  \n  * What words come to your mind?  \n  * What feelings does it give you in your body or heart?  \n    Examples of answers you might hear:  \n    * Annoying, wasteful, worrying, broken, dirty, sad, heavy, noisy, sticky, unhealthy, uncomfortable.\n\n*Action Sound*\n\n* Play a short (15-20 second) recording of cheerful splashing (like handwashing) or people working or playing together with water.   \n  Examples:  \n  * [Handwashing Sound](https://www.youtube.com/watch?v=Jqp85qeM8JY)  \n  * [Waterpark Sounds](https://www.youtube.com/watch?v=2EcOCFT44pI)  \n  * [Waterpark Ambiance](https://www.youtube.com/watch?v=KA1oEokVPU8)  \n* Ask guiding questions like:  \n  * What do you hear now?  \n  * What words and feelings does this sound inpsire about helping?  \n    Examples of answers you might hear:  \n    * Clean, active, joyful, strong, together, fresh, hopeful, fun, friends, busy, organized, healthy, happy.\n\nConclude by affirming their listening and word-generating skills."
  },
  {
    "title": "Painting with Words",
    "content": "Explain that the class will create a Sensory Word Collector to gather some awesome descriptive words for their upcoming writing. They will think about clean water, pollution, and solutions, collecting words for all five senses.  \nOn the whiteboard, draw a large diagram with five sections (can be whatever shape you choose), one for each sense: *Sight, Sound, Touch, Smell, Taste.*  \nPrompt students to shout out (or raise their hands to be called on) words for each sense, related to the following scenarios.\n\n* *Sparkling, Clean Water*  \n  * If you were drinking from a clear stream or washing your hands with clean water, what would you…  \n    * *See?*  \n      Examples:  \n      * Clear, sparkling, shimmering, deep blue, crystal, bubbles, smooth, reflections, clean.  \n    * *Hear?*  \n      Examples:  \n      * Trickling, bubbling, gurgling, splashing, gentle lapping, quiet flow, soft drips.  \n    * *Touch?*  \n      Examples:  \n      * Cool, refreshing, smooth, slick, soft, wet, gentle, slippery.  \n    * *Smell?*  \n      Examples:  \n      * Fresh, clean, earthy, damp, scentless, airy, crisp.  \n    * *Taste?*  \n      Examples:  \n      * Pure, cool, refreshing, crisp, clean.  \n* *Polluted/Scarce Water*  \n  * Imagine water that’s dirty or almost gone. What would you…  \n    * *See?*  \n      Examples:  \n      * Murky, brown, slimy, plastic floating, trash, dull, cracked earth, dry, dusty, dull colors, cloudy, sticky.  \n    * *Hear?*  \n      Examples:  \n      * Silence, distant coughs, flies, dripping, industrial sounds, sloshing, squelching, grumbling stomach.  \n    * *Touch?*  \n      Examples:  \n      * Gritty, slimy, sticky, hot, rough, dry, parched, itchy, uncomfortable.  \n    * *Smell?*  \n      Examples:  \n      * Rotten, stale, fishy, chemical, metallic, foul, dusty, damp.  \n    * *Taste?*  \n      Examples:  \n      * Bitter, metallic, dusty, salty, gritty, foul.  \n* *People Helping*  \n  * What would you experience when people are working to get clean water or clean up pollution?  \n    * *See?*  \n      Examples:  \n      * Helping hands, shovels, clean up tools, smiles, bright colors, planted trees, pipes, happy faces, clear water emerging, green plants.  \n    * *Hear?*  \n      Examples:  \n      * Laughter, cheerful voices, splashing, tools clanking, pumps working, birds singing, grateful sighs.  \n    * *Touch?*  \n      Examples:  \n      * Cool water, smooth tools, soft soil, warm sun, tired muscles after hard work.  \n    * *Smell?*  \n      Examples:  \n      * Fresh air, clean earth, soap, growing plants, clean scent after rain.  \n    * *Taste?*  \n      Examples:  \n      * Refreshing water, clean taste in mouth.\n\nWrite the words in the appropriate sensory sections on the board/paper. This creates a rich vocabulary bank for the upcoming writing."
  },
  {
    "title": "My Water Story",
    "content": "Give each student a piece of paper or have them write in their journals, etc.  \nExplain that they will choose one scenario (a challenge with water OR a hopeful solution) from the brainstormed grid. They will write a short descriptive piece (about 1-2 paragraphs) that brings that specific scene to life using their words.  \nEncourage students to use:\n\n* *Strong verbs:* sparkled, gurgled, trudged, shimmered, choked, flowed, tangled, erupted, etc.  \n* *Descriptive adjectives:* crystal clear, parched, slimy, vibrant, heavy, joyous, resilient.  \n* *Show, Don’t Tell:* Instead of saying “The water was dirty,” describe its “muddy brown swirls” and the “slippery green moss” coating the stones. Remind students they are painting a picture with their words.\n\nCirculate, offering support and guidance as they write, asking guiding questions like:\n\n* What specific details can you add about what your character sees in this scene?  \n* Can you describe a sound that makes the reader really feel \\[thirsty/happy/tired/etc.\\]?  \n* How would the water feel on their skin, or the ground feel under their feet?  \n* What emotion do you want the reader to feel, and how can your sensory words help with that?  \n* Are you showing the challenge, or the solution, or the action of helping?"
  },
  {
    "title": "Sharing and Wordsmithing",
    "content": "Have students pair up or form small groups (3-4 students).  \nInstruct them to take turns reading their descriptive writing pieces aloud to their partner/groups.  \nAs they listen, encourage peers to identify and praise specific sensory details that are particularly vivid or effective. Gently guide students to offer suggestions for improvement, focusing on how to further enhance the sensory experience for the reader.  \nExample Feedback Prompts:\n\n* I love how you described \\[specific detail from a sense\\]. It made me really feel like I was there. Which sense did you focus on most?  \n* I could almost \\[hear/feel/see/etc.\\] \\[specific detail\\]. How did you think of that particular word?  \n* Could you add a \\[smell/taste/etc.\\] to this part to make it even stronger?  \n* What feeling did you want your words to create for me? Can you tell me more about that?  \n* Your writing painted a clear picture of \\[clean water/pollution/helping\\]. What words helped you do that?\n\nThen, invite a few volunteers to share one sentence from their writing that they are particularly proud of, or one idea they got from their partner’s feedback."
  },
  {
    "title": "Reflection & Summary",
    "content": "Have students reflect on their learning experience through discussion or writing.  \nAsk guiding questions like:\n\n* How did focusing on sensory details (what you can see, hear, feel, smell, and taste) change how you thought about clean water and sanitation?  \n* What did you learn about how powerful words can be to make someone really feel what it’s like to have clean water, or to face pollution?  \n* Which descriptions from your classmates’ writing made you think or feel the most about clean water, and why?  \n* What does this activity tell us about how we can all work towards Global Goal 6: Clean Water and Sanitation?  \n* What’s one small action you feel inspired to take this week to help keep water clean or save water?"
  }
],
	reflectionQuestions: [
  "How did focusing on sensory details (what you can see, hear, feel, smell, and taste) change how you thought about clean water and sanitation?",
  "What did you learn about how powerful words can be to make someone really feel what it’s like to have clean water, or to face pollution?",
  "Which descriptions from your classmates’ writing made you think or feel the most about clean water, and why?",
  "What does this activity tell us about how we can all work towards Global Goal 6: Clean Water and Sanitation?",
  "What’s one small action you feel inspired to take this week to help keep water clean or save water?"
],
	assessmentCriteria: [
  "Consistent and enthusiastic involvement in all phases of the lesson, including the warm up, brainstorm, individual process, and class discussions (both sharing and listening).",
  "Understanding of the core concept of clean water and sanitation (access, hygiene, pollution prevention), as demonstrated through the thematic content and sensory details in the descriptive writing and verbal explanations.",
  "Originality and effectiveness in crafting vivid descriptive pieces. Look for evidence of connection to Global Goal 6 (does the writing clearly depict a scene related to clean water, pollution, or solutions?), use of sensory detail (does the writing effectively engage at least three sense to bring the scene to life?), and strong language (are strong verbs and descriptive adjectives used to enhance the impact?).",
  "Ability to provide thoughtful, specific, and supportive feedback to peers, focusing on sensory effectiveness.",
  "Ability to articulate learning and personal connections during the reflection and summary discussion."
],
};

registerLessonContent(lessonContent);

export default lessonContent;

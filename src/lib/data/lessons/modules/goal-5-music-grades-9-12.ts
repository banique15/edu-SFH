import type { LessonContentData } from '../types';
import { registerLessonContent } from '../index';

const lessonContent: LessonContentData = {
	goalNumber: 5,
	artForm: 'Music' as const,
	gradeLevel: '9-12' as const,
	title: "MUSIC",
	duration: "",
	materials: [
  {
    "name": "Whiteboard or large chart paper",
    "isOptional": false
  },
  {
    "name": "Markers",
    "isOptional": false
  },
  {
    "name": "Instruments of any kind (can be simple classroom percussion or even just clapping/stomping)",
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
	introduction: "Begin by playing short audio clips of various water sounds such as:\n\n* [Flowing River](https://www.youtube.com/watch?v=2LMqOdCHQWw)  \n* [Rainstorm](https://www.youtube.com/watch?v=jX6kn9_U8qk)  \n* [Ocean Waves](https://www.youtube.com/watch?v=bn9F19Hi1Lk)  \n* [Trickling Water](https://www.youtube.com/watch?v=lNwPVp4gu14)\n\n\tStart a discussion sparking reflection on the importance of water, asking questions such as:\n\n* How do these sounds make you feel?  \n* What role does water play in your daily life?  \n* Can you think of any specific times when you didn’t have access to clean water? How did that affect you?  \n* Can you imagine daily life without access to clean water?\n\n\tRe-introduce Global Goal 6 if necessary: Ensure availability and sustainable management of water and sanitation for all.  \n\tExplain that music and rhythm have a unique ability to stick in our minds. Think of catchy jingles from commercials or how easily we remember song lyrics (especially choruses, the most catchy parts of the song). The same principle can be applied to learning more complex information.  \n\tResearch suggests that rhythm can enhance brain activity and improve memory recall. When we associate information with a rhythm or melody, it creates stronger neural connections, making it easier to retrieve and remember the information later.  \n\tIntroduce the concept of mnemonics \\- memory aids that use patterns of letters, ideas, or associations to help us remember facts and concepts. Explain that music and rhymes can be powerful mnemonic devices. \n\n* Music Staff: “Every Good Boy Does Fine” (E,G,B,D,F)  \n* Colors of the Rainbow: “ROYGBIV” (red, orange, yellow, green, blue, indigo, violet)  \n* Order of planets: “My Very Educated Mother Just Served Us Noodles” (Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune)\n\n\tMusic can also evoke emotions, which can further enhance memory and engagement. When we feel connected to the information on an emotional level, we are more likely to remember it and be motivated to take action.",
	steps: [
  {
    "title": "Memorizing Global Goal 6 Through Music and Mnemonics",
    "content": "**(30-60 MINUTES)**"
  },
  {
    "title": "Target Breakdown: Rhyme Time",
    "content": "Divide students into groups of 3-4, assigning each a goal/target.  \n\tHave each group:\n\n* Rewrite their target in as simple a way as they possibly can, for a younger audience (have students think of elementary school kids)  \n* Brainstorm a catchy rhyme or short jingle that encapsulates the target’s essence. Examples for inspiration:  \n  * *Target 6.1 \\- Clean Water for All*  \n    * *Simplified Target:* Everyone deserves clean water to drink.  \n    * *Rhyme/Jingle:* Clean water, clear and bright, a basic need a human right\\!  \n    * *Mnemonic:* “SAFE”,"
  },
  {
    "title": "Mnemonic Mashup: Memorization and Performance",
    "content": "Have each group present their rhyme/jingle to the class, showcasing their chosen rhythm and melody.  \nWrite each groups mnemonic/rhyme on the board or large paper so classmates can easily follow along, and also to assist in memorization.  \nEncourage students to offer positive feedback and suggestions for improvement, focusing on clarity, catchiness, and connection to the goal/target.  \nIf time allows, the class can practice and memorize each groups rhyme/jingle, fostering a sense of collective learning and collaboration.  \nAfter all the performances, facilitate a discussion about its overall impact and effectiveness. Ask questions like:\n\n* Did the combination of mnemonics, rhymes, and rhythms help you remember the  key messages of Global Goal 6?  \n* Which elements of the performance were particularly memorable or impactful?  \n* How did the collaborative nature of the performance reflect the importance of working together to achieve clean water and sanitation for all?  \n* Did any of the rhymes or or melodies evoke specific emotions in you? Which ones and why?  \n* How did the overall performance make you feel about the issue of clean water and sanitation?  \n* Did the performance inspire you to take action or learn more about Global Goal 6?  \n* What were some of the most creative or unique elements of the performance?  \n* How did the different groups use movement, gestures, and visuals to enhance their message?  \n* Were there any unexpected or surprising moments in the performance?  \n* How did the groups work together to create a cohesive and impactful performance?  \n* Did you notice any challenges or successes in the collaborative process?  \n* What did you learn about teamwork and communication through this activity?"
  }
],
	reflectionQuestions: [
  "How did creating rhymes and jingles help you remember the key messages of Global Goal 6?",
  "Did the collaborative performance enhance your understanding of the interconnectedness of the different targets?",
  "How can we use music and mnemonics to raise awareness and inspire action around important issues?",
  "Can you think of any specific examples of how the challenges or solutions presented in the performance relate to real-world water and sanitation issues?",
  "How can we, as individuals and as a community, contribute to addressing these issues?",
  "What role can music and creative expression play in raising awareness and inspiring action around Global Goal 6?",
  "What was your favorite part of the performance, and why?",
  "What did you learn about yourself or your classmates through this activity?",
  "How has this experience changed your perspective on the importance of clean water and sanitation?"
],
	assessmentCriteria: [
  "Consistent and enthusiastic involvement in all phases of the lesson, including the initial sound exploration, target simplification, rhyme/mnemonic creation, musical performance, and class discussions.",
  "Comprehension of Global Goal 6 and its targets and core concepts (e.g., water access, sanitation, water quality, water efficiency). This will be evidenced through the accuracy and clarity of the simplified targets, rhymes/jingles, and mnemonics.",
  "Originality and effectiveness in crafting catchy rhymes/jingles and memorable mnemonics that accurately reflect their assigned target and its key message.",
  "Rhythm, melody, and overall performance quality of the musical presentations. Did the performance effectively capture the audience’s attention and enhance memorization of the target?",
  "Ability to work effectively within small groups, contributing ideas, respecting diverse musical tastes, and collaborating cohesively to create and perform the musical mnemonic.",
  "Willingness to experiment with different rhythms, melodies, and vocal techniques, embracing the creative process and demonstrating problem-solving during the musical composition.",
  "Nuance and depth of understanding demonstrated in reflections, particularly concerning the power of music and mnemonics to aid learning and promote advocacy."
],
};

registerLessonContent(lessonContent);

export default lessonContent;

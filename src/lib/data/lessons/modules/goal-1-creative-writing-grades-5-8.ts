import type { LessonContentData } from '../types';
import { registerLessonContent } from '../index';

const lessonContent: LessonContentData = {
	goalNumber: 1,
	artForm: 'Creative Writing' as const,
	gradeLevel: '5-8' as const,
	title: "CREATIVE WRITING",
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
    "name": "Notebooks or Paper",
    "isOptional": false
  },
  {
    "name": "Pens/Pencils",
    "isOptional": false
  }
],
	introduction: "Welcome students to an exciting creative writing adventure. Tell them that today, they will use the power of their words to explore a very important idea, Global Goal 1: No Poverty.  \nThis goal is a global commitment to ensure everyone, regardless of where they live, has what they need to live a happy, healthy life. This includes having enough food, a safe home, clean water, clothes, and a chnace to learn and grow. It’s about fairness and making sure no one is left behind.  \n\tConnect Global Goal 1 to writing, explaining that writing can paint pictures in people’s minds, make them feel emotions, and even inspire them to make the world a better place. Tell students that today, they will harness that power, using their creative writing skills to think about a world where everyone has enough and how they can help make that a reality.",
	steps: [
  {
    "title": "Words of Hope: Creating Stories for No Poverty",
    "content": ""
  },
  {
    "title": "Story Sparks for a Better World",
    "content": "Begin by asking students: \n\n* What are some of the most important things every person needs to be happy and healthy?  \n* Encourage students to think about basic necessities beyond just toys or electronics.  \n  * Examples: Food to eat, clean water to drink, a safe and warm home to sleep in, clothes to wear, doctors and medicine when they’re sick, schools and books to learn, kind friends and family, a chance to play and have fun, feeling safe, someone to listen to them, a way to learn new skills, a sense of belonging.\n\nOn the whiteboard or large paper, create two columns. Label one “When Everyone has Enough” and the other “When People Need Help.”  \nGuide the discussion by asking students to describe what it looks, sounds, or feels like in both situations. Use the senses to make it more concrete.\n\n* “*When People Need Help”*:   \n  * What might it look like if someone doesn’t have enough food?  \n  * What might a neighborhood sound like if kids can’t go to school?  \n  * How might a person feel if they don’t hae a warm coat in the winter?  \n* Answer Examples:  \n  * An empty fridge  \n  * A quiet playground  \n  * A person shivering in the cold  \n  * Someone looking sad or worried  \n  * A leaky roof  \n  * Children working instead of playing  \n  * A family sharing very little food  \n* *“When Everyone Has Enough”*  \n  * What sights would you see in a community where everyone helps each other?  \n  * What sounds would you hear?  \n  * How would people feel?  \n* Answer examples:  \n  * A family sharing a yummy meal  \n  * Laughter echoing from a full playground  \n  * Warm clothes on everyone  \n  * A doctor helping someone feel better  \n  * Kids reading together  \n  * Big smiles  \n  * A sense of belonging\n\nRecord student responses in the appropriate columns. This creates a shared word bank for their writing."
  },
  {
    "title": "Creative Writing Exercise",
    "content": "Explain that it is now time to choose a “story spark” and create their own piece of writing. They can write either a short story or a poem (or, educator can require one if desired).  \nOffer the following writing prompts, or a prompt of your own. Encourage students to use the words and ides from the brainstorming session to make their writing come alive with details and feelings.\n\n* *Prompt 1: The Day We All Shared*  \n  * Write a story or poem about a time (real or imagined) when people in a family, a school, or a neighborhood came together to share what they had so that everyone had enough. What happened? Who helped? How did it make everyone feel?  \n* *Prompt 2: A Day in a World Without Poverty*  \n  * Imagine a world where Global Goal 1 has come true, and no one lives in poverty. Write a story or poem about a normal day for a child in that world. What do they see, hear, feel? What are they doing? How do they know everyone has what they need?  \n* *Prompt 3: The Helping Hand*  \n  * Write a story or poem from the point of view of someone who receives a helping hand when they really need it (like a warm coat, a healthy meal, or a new book for school). How does that help change their day or their feelings? Or, write from the point of view of someone giving the helping hand.\n\nEncourage students to use vivid imagery (what you see, hear, smell, touch, taste) and emotional language to make their stories and poems powerful. Remind them to think about the feelings people experience."
  },
  {
    "title": "Sharing Words of Hope",
    "content": "Organize students into pairs or small groups (3-4 students).  \nInstruct students to take turns reading their writing aloud to their partner/group.  \nAs they listen, encourage students to offer positive and constructive feedback. Focus on questions like:\n\n* What did you see or feel when you heard this story/poem?  \n* What was your favorite part, and why?  \n* How did this story/poem connect to Global Goal 1: No Poverty?  \n* Did any words or phrases stand out to you?\n\nAfter group sharing, invite a few volunteers to share their writing with the whole class. Facilitate a supportive live discussion about the different ideas and feelings expressed in the writing."
  }
],
	reflectionQuestions: [
  "What was the most important thing you learned about Global Goal 1: No Poverty today, through our writing?",
  "Did writing a story or poem about these ideas change how you think or feel about poverty?",
  "What did you discover about how powerful our words can be to share ideas and feelings?",
  "How did using details about what you see, hear, and feel help make your writing stronger?",
  "Think about the stories we read and heard today. What’s one small think you can do in your own life to help make sure everyone has what they need?"
],
	assessmentCriteria: [
  "Consistent and thoughtful involvement in all phase of the lesson, including the initial brainstorm, individual creative writing, partner sharing, and active participation in class discussions.",
  "Comprehension of the core concept of Global Goal 1 (“No Poverty” and what it means for basic needs and community support), as demonstrated through the content and message of the creative writing pieces and verbal contributions during discussions.",
  "Originality and effort put into the story or poem. Look for evidence of the writing clearly relating to the idea of people needing help or people helping each other to meet basic needs, and attempts to use sensory details (what you see, hear, feel, etc.), descriptive words to make the writing vivid. Does the writing try to convey feelings like hope, kindness, challenge, or happiness?",
  "Ability to respectfully share writing with peers and offer constructive feedback during the sharing sessions.",
  "Ability to articulate learning and personal connections during the reflection and summary discussion."
],
};

registerLessonContent(lessonContent);

export default lessonContent;

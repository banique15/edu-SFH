import type { LessonContentData } from '../types';
import { registerLessonContent } from '../index';

const lessonContent: LessonContentData = {
	goalNumber: 3,
	artForm: 'Creative Writing' as const,
	gradeLevel: '5-8' as const,
	title: "CREATIVE WRITING",
	duration: "",
	materials: [
  {
    "name": "Paper or notebook",
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
    "name": "Small slips of paper for “Character” and “Situation” draws",
    "isOptional": false
  }
],
	introduction: "Introduce students to Global Goal 3: Good Health and Well-Being.\n\n* This goal aims to make sure everyone, everywhere, has a healthy life and feels good, no matter their age. This means having doctors when you’re sick, staying safe, being able to exercise, eating healthy food, and also feeling happy and calm inside your mind.  \n* It’s about caring for our whole selves, our bodies, our minds, our feelings, and even our friendships.\n\nDiscuss how writers can use their words to paint pictures in people’s minds, make them feel emotions, and even inspire them to help make the world a better place.  \nPresent that today, the class will be these storytellers, creating Health Tales that show what good health and well-being look like, and how we can help everyone achieve it.",
	steps: [
  {
    "title": "Health Tales: Stories for a Healthy World",
    "content": ""
  },
  {
    "title": "Health Word Association Chain",
    "content": "Begin with a word association warm-up to get everyone thinking about health.  \nExplain that the entire class will play this association chain game.\n\n* I’ll say a word related to health, and the next person quickly says a new word that comes to their mind when they hear by word. We’ll go around the room (or in a circle), building a chain of ideas.\n\n\tExample:\n\n* *Teacher:* Health  \n* *Student 1:* Strong  \n* *Student 2:* Muscles  \n* *Student 3:* Exercise  \n* *Student 4:* Running  \n* *Student 5:* Happy  \n* *Student 6:* Smile  \n* *Student 7:* Friends  \n* *Student 8:* Sharing  \n* *Student 9: Kindness*  \n* *Student 10:* Peace  \n* *Student 11:* Quiet  \n* *Student 12:* Sleeping  \n* *Student 13:* Energy  \n* *Student 14:* Food  \n* *Student 15:* Yummy  \n* *Student 16:* Healthy  \n* *Student 17:* Doctors  \n* *Student 18:* Hospitals  \n* *Student 19:* Medicine  \n* *Student 20:* Feeling better  \n* *Student 21:* Sunshine  \n* *Student 22:* Outside  \n* *Student 23:* Play  \n* *Student 24:* Laughter  \n* *Student 25:* Calm  \n* *Student 26:* Books  \n* *Student 27:* Learning  \n* *Student 28:* Brain  \n* *Student 29:* Thinking  \n* *Student 30:* Mind\n\nEncourage quick thinking and don’t worry if a word repeats. The goal is to get lots of ideas flowing."
  },
  {
    "title": "Writing Our Health Tales",
    "content": "Explain that the students will now get some specific ideas for their stories.  \nThe class will brainstorm two different categories: “Health Heroes” (characters) and “Health Challenges or Solutions” (situations). From there each student will choose a pair to be their story’s spark.  \nOn the whiteboard/paper, create two the two columns: Health Heroes, and Health Challenges/Solutions.  \nAsk: \n\n* Who are some people, real or imaginary, who might be part of a story about health and well-being?  \n* Have students think about different ages, roles, or even animals.  \n  Examples:  \n  * A child who loves to play  \n  * A wise grandparent  \n  * A busy doctor  \n  * A kind nurse  \n  * A super athlete  \n  * A quiet reader  \n  * A friendly neighbor  \n  * A new kid in town  \n  * A shy artist  \n  * A curious scientist  \n  * A little puppy  \n  * A talking tree  \n  * A worried parent  \n  * A funny clown  \n  * A brave explorer  \n  * A speedy runner  \n* Write these ideas under Health Heroes.\n\nAsk: What are some situations related to health? Problems people might face, or amazing ways people get healthy or help others? Think about body health, mind health, feelings health, or friendship health.  \nExamples of Challenges:\n\n* Someone feels lonely  \n  * A friend gets sick  \n  * A character has a bad day and feels sad  \n  * A new food tastes bad  \n  * A character feels worried about something  \n  * Trouble falling asleep  \n  * Feeling left out of a game  \n  * A scraped knee  \n  * A tricky math problem making their brain feel fuzzy  \n  * A loud noise that makes them feel jumpy\n\n  Examples of Solutions:\n\n  * A friend invites someone to play  \n  * Getting a good night’s sleep  \n  * Eating a yummy healthy meal  \n  * Someone shares a smile  \n  * A character learns how to calm down  \n  * A doctor helps someone feel better  \n  * Finding a fun way to exercise  \n  * Learning something new that makes their brain happy  \n  * A community builds a safe park  \n  * Helping someone who feels sad  \n  * Sharing a laugh"
  },
  {
    "title": "Write Your Health Tale",
    "content": "Explain that each student will choose one Health Hero and one Challenge AND Solution (three choices total). Ask students to think about how they connect.  \nHave students use their chosen pieces to write their own short story. Ensure the writing shows what happens, what the character sees, thinks, and feels.  \nIf helpful, offer these creative writing prompts based on the chosen sparks:\n\n* A Day in the Life of My Health Hero:   \n  * Write a story about your chosen Health Hero and how they experience their challenge and solution situation in one day. What do they see? What do they hear? What do they think in their mind? How do they feel in their body and heart?  \n* The Journey to Well-being:  \n  * Write a story about your Health Hero’s journey through a challenge to find a solution. How do they feel at the beginning? What steps do they take? How do they feel at the end when good health or well-being is found or shared?  \n* A Health Lesson Shared  \n  * Write a story where your Health Hero helps someone else understand an important lesson about being healthy and well. What is the lesson? How do they share it?\n\nEncourage students to use vivid details and strong action words. Remind them to think about how their character experiences the world (what they see, hear, smell, touch, feel inside).  \nCirculate, offering support and guidance as they write. Ask guiding questions like:\n\n* How can you show us that your character is worried without saying “they were worried”?  \n* What sounds would your character hear in that situation?  \n* What specific colors or shapes come to your mind when you think about their feelings?"
  },
  {
    "title": "Sharing Our Health Tales",
    "content": "Organize students into pairs or small groups (3-4 students).  \nInstruct them to take turns reading their writing aloud to their group or partner.  \nAs they listen, encourage students to offer kind and helpful comments. Guide them with questions like:\n\n* What did you see or feel when you heard this story?  \n* What was your favorite part, and why?  \n* How did this story connect to Global Goal 3?  \n* What did you learn about your character’s feelings or experience?\n\nAfter group sharing, invite a few volunteers to share their writing with the whole class.   \nFacilitate a supportive discussion about the different ideas and feelings expressed in the writing."
  },
  {
    "title": "Gratitude for Wellness Quick List",
    "content": "Have students think about all the ways they feel healthy and well today, in their bodies, minds, feelings, and friendships.  \nAsk students: What are you thankful for?  \nHave students quickly jot down 1-3 things they are grateful for related to their health and well-being on a piece of paper or their journals. They can be single words or small symbols/drawings.  \nHave students briefly share one idea aloud, or internally reflect on one idea that means the most to them."
  },
  {
    "title": "Reflection & Summary",
    "content": "Have students reflect on their learning experience through discussion or writing.  \nAsk guiding questions like:\n\n* How did writing a stgory or poem about health heroes and challenges/solutions help you understand Global Goal 3: Good Health and Well-being in a new way?  \n* Waht did you learn about the power of using words to show how characters feel, think, and experience health challenges or solutions?  \n* Which stories or ideas from your classmates made you think or feel the most about good health, and why?  \n* What does our Health Tales activity tell us about how we can all work towards Global Goal 3, for ourselves and for everyone?  \n* What’s one small thing you can do this week to take care of your own body, mind, or feelings, inspired by the stories we wrote today?"
  }
],
	reflectionQuestions: [
  "How did writing a stgory or poem about health heroes and challenges/solutions help you understand Global Goal 3: Good Health and Well-being in a new way?",
  "Waht did you learn about the power of using words to show how characters feel, think, and experience health challenges or solutions?",
  "Which stories or ideas from your classmates made you think or feel the most about good health, and why?",
  "What does our Health Tales activity tell us about how we can all work towards Global Goal 3, for ourselves and for everyone?",
  "What’s one small thing you can do this week to take care of your own body, mind, or feelings, inspired by the stories we wrote today?"
],
	assessmentCriteria: [
  "Consistent and enthusiastic involvement in all phases of the lesson, including the warm-up, brainstorm, creative writing, partner/group sharing, and class discussions.",
  "Understanding of the core concept of Global Goal 3 (Good Health and Well-being, covering body, mind, feelings, and social health), as demonstrated through the content and message of the written piece and verbal contributions.",
  "Originality and effort put into the story. Look for evidenced of connection to Global Goal 3 (does the writing clearly relate to aspects of good health and well-being?), use of details (are there attempts to use sensory details and descriptive words from the brainstorm to make the writing vivid?), does it follow a basic story arc?",
  "Ability to respectfully share the writing with peers and offer kind and helpful comments during the sharing sessions.",
  "Ability to articulate learning and personal connections during the reflection and summary discussion."
],
};

registerLessonContent(lessonContent);

export default lessonContent;

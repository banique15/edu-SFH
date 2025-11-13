import type { LessonContentData } from '../types';
import { registerLessonContent } from '../index';

const lessonContent: LessonContentData = {
	goalNumber: 3,
	artForm: 'Drama' as const,
	gradeLevel: '5-8' as const,
	title: "DRAMA",
	duration: "",
	materials: [
  {
    "name": "Open space for movement and improvisation",
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
    "name": "[Emotion/Feeling Cards](https://docs.google.com/document/d/1L1rX21BDvhpnR2JYjt6oQY4KWMOv67ybiZqAErTOwpw/edit?usp=drive_link): Slips of paper with simple emotions that can be challenging (see attached examples that can be used, or create your own). Prepare enough for each group to draw one.",
    "isOptional": false
  },
  {
    "name": "[Action Cards](https://docs.google.com/document/d/1C8f1BcXelnafb0-YkSn1Sx27Aam-befi92rshBOdj8w/edit?usp=drive_link): Slips of paper with simple, positive actions for supporting well-being (see attached examples that can be used, or create your own). Prepare enough for each group to draw one.",
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
    "name": "\\[Optional\\] Simple props: Scarves, hats, balls, notebooks, empty water bottles, etc. Easily accessible classroom items.",
    "isOptional": false
  }
],
	introduction: "Introduce/re-introduce students to Global Goal 3: Good Health and Well-being.\n\n* This goal aims to make sure everyone, everywhere, has a healthy life and feels good, no matter their age. This means taking care of our bodies, but it also means taking care of our minds and hearts. It’s okay to have big feeligns like worries or sadness, and it’s super important to know how to manage them and how to help our friends.  \n* That’s what a big part of Global Goal 3 is about, promoting mental health and well-being.\n\nTell students that actors are incredible storytellers. They can use their voices, bodies, and imaginations to show feelings, problems, and amazing ways to feel strong and healthy inside.  \nToday, we will be actors, showing what it’s like to have different feelings and how we can use helpful actions to feel good and support each other.",
	steps: [
  {
    "title": "Feeling Strong: Drama for our Hearts and Minds",
    "content": ""
  },
  {
    "title": "Warm-Up: Emotion Sculptors",
    "content": "Begin with a fun, active emotional warm-up to get everyone ready to act and explore feelings.\n\n* Let’s get our bodies and faces ready to show feelings. When I call out an emotion, quickly freeze with your body and face in a way that shows feeling. Hold still\\! Then relax.  \n* There’s no right or wrong way to show a feeling, just try your best.  \n* Examples of emotions to call out:  \n  * *Happy*: e.g. big smile, open arms, light jump, head held high, bouncy posture.  \n  * *Sad:* e.g. slumped shoulders, head down, quiet sigh, slow movement, a tearful face.  \n  * *Surprised:* e.g. wide eyes, open mouth, jumping back slightly, hands over mouth, stiff body.  \n  * *Confused:* e.g. furrowed brow, head tilted, shrugging shoulders, scratching head, slow uncertain steps.  \n  * *Excited:* e.g., bouncy steps, big smile, quick movements, clapping hands, jumping up and down.  \n  * *Worried:* e.g., worried face, hands clasped, shoulders hunched, looking down, fidgeting.  \n  * *Brave:* e.g., standing tall, chest out, firm stance, strong gaze, confident walk.  \n  * *Calm:* e.g., slow smooth movements, gentle smile, relaxed shoulders, soft breathing, peaceful expression.  \n* Encourage full body expression and clear facial gestures. Keep it quick and fun."
  },
  {
    "title": "Emotion-Action Brainstorm",
    "content": "Explain that we will be thinking about tricky feelings, and then the helpful actions that can make us feel better, or help our friends feel better.  \nDraw a large circle in the center of your whiteboard/paper and write “My Feelings”.  \nDraw two main branches from the center:\n\n* *Tricky Feelings*  \n  * Ask students: What are some tricky feelings that we sometimes have? How do they make us feel? Write these ideas using one color marker (e.g., red)  \n    Examples:  \n    * Worried (like a knot in your stomach)  \n    * Sad (like a gray cloud)  \n    * Frustrated (like wanting to stomp your feet)  \n    * Shy (like wanting to disappear)  \n    * Confused (like a puzzle you can’t solve)  \n    * Lonely (like no one’s around)  \n    * Nervous (like butterflies are in your stomach)  \n    * Disappointed (like a popped balloon)  \n* *Helpful Feelings*  \n  * Ask students: What are some feelings that make us feel good and strong? Write these ideas using a different color marker (e.g., blue).  \n    Examples:  \n    * Calm (like smooth water)  \n    * Happy (like sunshine)  \n    * Brave (like a superhero)  \n    * Peaceful (like a quiet forest)  \n    * Joyful (like jumping up and down with excitement)  \n    * Proud (like standing tall)  \n    * Loved (like a warm hug)  \n    * Confident (like you can do anything)  \n* Now, for both types of feelings, draw lines from the feeling words to a new bubble: Actions to Help.  \n  * Ask students: When we have tricky feelings, or when we want to keep a helpful feeling strong, what are some actions we can take? What can we do to help a friend who has a tricky feeling?  \n    Examples:  \n    * Talk to a grown-up  \n    * Talk to a friend  \n    * Take deep breaths  \n    * Draw/write about feelings  \n    * Ask for help  \n    * Spend time in nature (go outside)  \n    * Help someone else  \n    * Listen quietly  \n    * Share a laugh  \n    * Get a hug  \n    * Do something creative (sing/draw/dance/etc.)  \n    * Exercise/play  \n    * Read a good book  \n    * Get enough sleep  \n    * Eat healthy snacks  \n    * Do something kind for someone  \n    * Think happy thoughts  \n    * Ask a question to understand  \n* Add these action items to the web.  \n  * Summarize: Our web shows that all feelings are okay, and there are many helpful actions we can take to feel strong and support each other’s well-being."
  },
  {
    "title": "Group Scene Creation: Feeling Stories in Motion",
    "content": "Divide students into small groups (3-4 students).  \nEach group will draw one [Feeling Card](https://docs.google.com/document/d/1L1rX21BDvhpnR2JYjt6oQY4KWMOv67ybiZqAErTOwpw/edit?usp=drive_link) and one [Action Card](https://docs.google.com/document/d/1C8f1BcXelnafb0-YkSn1Sx27Aam-befi92rshBOdj8w/edit?usp=drive_link).  \nExplain that each group will create a short, mini play without words (like an old silent film) that lasts about 30 seconds to one minute.  \nEach scene needs to show:\n\n* *The Feeling:* Show a character experiencing the tricky feeling from the card chosen.  \n* *The Helping Action:* Show how someone, or the character themselves, takes the helping action from the card chosen, and how it makes things better or shows support.\n\nEncourage groups to think about:\n\n* *Characters:* Who are the people in the scene? What are their stories? Do they have names?  \n* *Body Language and Facial Expressions:* How can they use their bodies and faces to show the feeling and the action clearly without words?  \n* *Action:* What simple actions can they use to show the feeling and then theaction?  \n* *Teamwork:* How does everyone in the group contribute to the scene and work together?  \n* *Props \\[Optional\\]:* Can they use any simple classroom props?\n\nCirculate among groups, offering guidance and encouragement. Ask guiding questions like:\n\n* How are you showing \\[feeling\\] with your body and face?  \n* What simple actions can you use to show \\[action\\]?  \n* Does your scene show a change from the feeling to feeling better?  \n* How can your characters interact to show kindness and support?  \n* Are you thinking about the beginning (feeling) and the end (action) of your short play/story?"
  },
  {
    "title": "Our Feeling Stories",
    "content": "Have each group perform their short scene for the class. Remind the audience to be respectful and quiet, focusing on the story and feelings being told.  \nAfter each performance, invite the audience to share and discuss. Ask guiding questions like:\n\n* What tricky feeling did you see the character having?  \n* What helping action did you see happening?  \n* What story or message about feelings did their scene tell?  \n* What emotions did the scene make you feel?\n\nInvite the peforming group to quickly explain the intended message."
  },
  {
    "title": "Reflection & Summary",
    "content": "Have students reflect on their learning experience through discussion or writing.  \nAsk guiding questions like:\n\n* How did acting out scenes about tricky feelings and helpful actions help you understand what it means to be healthy and well inside your mind and heart?  \n* What did you learn about how our feelings can change, and how we can use different actions to feel better or help our friends feel better?  \n* Which scenes or ideas from your classmates made you think or feel the most about mental well-being, and why?  \n* What does our “Feeling Strong” activity tell us about how we can all work towards Global Goal 3, especially by supporting each other’s feelings?  \n* What’s one small thing you can do this week to take care of your own mind or feelings, or to help a friend do the same, inspired by our drama today?"
  }
],
	reflectionQuestions: [
  "How did acting out scenes about tricky feelings and helpful actions help you understand what it means to be healthy and well inside your mind and heart?",
  "What did you learn about how our feelings can change, and how we can use different actions to feel better or help our friends feel better?",
  "Which scenes or ideas from your classmates made you think or feel the most about mental well-being, and why?",
  "What does our “Feeling Strong” activity tell us about how we can all work towards Global Goal 3, especially by supporting each other’s feelings?",
  "What’s one small thing you can do this week to take care of your own mind or feelings, or to help a friend do the same, inspired by our drama today?"
],
	assessmentCriteria: [
  "Consistent and enthusiastic involvement in all phases of the lesson, including the warm-up, brainstorm, group scene creation, and active participation in class discussions (both performing and observing).",
  "Understanding of the core concept of mental and emotional well-being within Global Goal 3, as demonstrated through the content and message of the scenes and verbal explanations.",
  "Originality and effectiveness in using dramatic techniques (e.g., character portrayl, body language, facial expressions, clear actions) to vividly represent a tricky feeling and a corresponding helping action. Look for clear effort in expressing feelings and concepts without words.",
  "Ability to work effectively within the small groups, contributing ideas, respecting diverse interpretations, and collaborating cohesively to create and perform the scenes.",
  "Ability to articulate learning and personal connections during the reflection and summary discussion."
],
};

registerLessonContent(lessonContent);

export default lessonContent;

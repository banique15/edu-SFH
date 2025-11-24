import type { LessonContentData } from '../types';
import { registerLessonContent } from '../index';

const lessonContent: LessonContentData = {
	goalNumber: 11,
	artForm: 'Drama' as const,
	gradeLevel: '5-8' as const,
	title: "DRAMA",
	duration: "",
	materials: [
  {
    "name": "Classroom or performance space with ample room for movement and staging",
    "isOptional": false
  },
  {
    "name": "Simple staging elements (e.g., chairs, tables, risers, etc.)",
    "isOptional": false
  },
  {
    "name": "\\[Optional} Simple costumes and props to enhance the theatrical experience",
    "isOptional": false
  },
  {
    "name": "Whiteboard or projector",
    "isOptional": false
  },
  {
    "name": "Markers, pens",
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
    "name": "Unfairness Fable Cards \\- Slips of paper or cards with three prompts on each card:",
    "isOptional": false
  },
  {
    "name": "A Character",
    "isOptional": false
  },
  {
    "name": "An Unfair Rule",
    "isOptional": false
  },
  {
    "name": "A Silly Solution",
    "isOptional": false
  },
  {
    "name": "[Examples](https://docs.google.com/document/d/1ozw64KOiVnYo3fW62gVLtQ5KPhK_g1jKWMQ792hxpkc/edit?usp=sharing)",
    "isOptional": false
  }
],
	introduction: "Welcome students to an exciting drama class. Explain that they will use acting and imagination to explore a really important idea: Global Goal 10, Reduced Inequalities.  \n\tClarify that Global Goal 10 is like a huge promise the world has made: a promise to make sure everyone, everywhere, has fair and equal chances. Emphasize that this means treating all people with respect, no matter their age, gender, background, abilities, or what they look like. Explain that it’s about making sure everyone has the same opportunities to learn, grow, and succeed.  \n\tBegin by showing a short video clip(s) of an age-appropriate satirical performance or sketch/skit. Explain that this type of humor is called satire. Clarify that satire uses humor and exaggeration to make a serious point about a problem. Tell students that it’s like using a magnifying glass to show how silly or unfair a problem is, so that people will notice and want to change it.  \n\tExamples (ensure your example is appropriate for your specific classroom and students)\n\n* [Family Guy Satire](https://www.youtube.com/watch?v=HBkvgdv-000)  \n* [Wall E Satire](https://www.youtube.com/watch?v=-3iBw-WgqqY)  \n* [Monty Python’s, Life of Brian \\- You’re All Individuals](https://www.youtube.com/watch?v=KHbzSif78qQ)  \n* [Monty Python \\- The Spanish Inquisition](https://www.youtube.com/watch?v=vt0Y39eMvpI)  \n* [Shrek Satire](https://www.youtube.com/watch?v=CPaoFt1etaQ)  \n* [Squid on Strike](https://www.youtube.com/watch?v=7V8gnXmi_2Q)  \n* [Spongebob Squarepants Jellyfish Hunter](https://www.youtube.com/watch?v=vbhzCnXE1C8)  \n* [Adventure Time](https://www.youtube.com/watch?v=6La0UqNEl60)\n\n\tFacilitate a discussion about the key elements and purpose of satire. Ask guiding questions like:\n\n* What made that clip funny? Did the actors or animators use exaggeration?  \n* What serious idea or problem do you think the humor was trying to make a point about, if any?  \n* Why do you think humor can sometimes be a good way to get people to think about a serious topic?  \n* Can you think of a time you saw something silly that actually made you think, “Hey, that’s not right\\!”?\n\n\tThen, introduce satirical techniques that the class will explore:\n\n* *Exaggeration:* This is making something bigger, funnier, or sillier than it really is. Explain that students will use over-the-top movements and funny voices to show a problem.  \n* *Humor with a Point:* Emphasize that the humor isn’t meant to make fun of people, but to highlight how silly or unfair a situation is, so the audience understand the message.",
	steps: [
  {
    "title": "The Silly & The Serious: A Satirical Look at Fairness",
    "content": "**(30-60 MINUTES)**"
  },
  {
    "title": "Exaggeration and Opposite Emotion",
    "content": "Instruct students to find their own space.  \n\t*Normal Action, Big Feeling*\n\n* Give students a simple action (e.g., walking, sitting down, picking something up, etc.) as well as different emotions. Have students perform that action with the called-out emotions, but extremely exaggerated. Instruct them to make it bigger and funnier/crazier than it really is.\n\n  Example\n\n  * *Action:* Walking across the room.  \n    * *Emotion:* Extremely happy.  \n      * *Movement:* Bouncy, silly walk with a huge smile.  \n    * *Emotion:* Extremely sad.  \n      * *Movement:* Slow, dragging walk with dramatic sigh.  \n    * *Emotion:* Extremely proud.  \n      * *Movement:* Chest puffed out, chin high, long strides.\n\n\t*Opposite Emotion*\n\n* Now, give students a new action and one emotion for students to act out in an exaggerated fashion. When signaled, students will have to instantly transform that action into its opposite emotion without being told exactly what that emotion is.\n\n  Example\n\n  * *Action:* Standing and waiting for a bus.  \n    * *Emotion:* Extremely bored.  \n      * *Movement:* Dramatic yawn, slumped posture, tapping feet.  \n    * *Signal to Change to Opposite Emotion.*  \n      * *Movement:* Jumping up and down, looking around wildy, waving arms, big smile. (Extremely excited)\n\n\tLead the class through a few rounds of this, affirming the quick emotional shifts and exaggerated expressions. Explain that this is great practice for satire, which often contrasts a silly situation with a serious point."
  },
  {
    "title": "The Unfairness Fable",
    "content": "Explain that the class will brainstorm ideas for their satirical skits by creating their very own Unfairness Fables.  \n\tDivide students into small groups of 3-5. Provide each group with one pre-written Unfairness Fable Card.  \n\t[Examples](https://docs.google.com/document/d/1ozw64KOiVnYo3fW62gVLtQ5KPhK_g1jKWMQ792hxpkc/edit?usp=sharing)  \n\tInstruct the groups to read their card together. Explain that they will use the problem and solution to create a short, humorous, and exaggerated scene. Encourage them to think about how they will use the humor to make a point about the underlying unfairness.  \n\tGive groups 5-7 minutes to quickly discuss the card, assign roles, and decide on a few action to show their scene."
  },
  {
    "title": "Exploring Satirical Techniques",
    "content": "Quickly review some satirical techniques that will help make the scenes funnier and more impactful.\n\n* *Exaggeration:* Remind students that making movements and emotions bigger and funnier than in real life is key.  \n* *Irony:* Explain that irony is when you say one thing but mean the opposite.  \n* *Making a Point:* Remind students that the goal is not just to be silly, but to get the audience to think about the underlying problem of inequality. Have students think about the real, serious problem hiding underneath the funny part of their scene."
  },
  {
    "title": "Scene Creation: Silly Problem, Serious Point",
    "content": "Introduce a new element to the creation of the groups’ skits. Explain that each skit should have two parts:\n\n* *The Silly Problem:* The exaggerated, funny part of the skit showing the ridiculous Unfair Rule and the characters’ reactions.  \n* *The Serious Point:* At the end of the funny scene, all actors should freeze in a tableau (a frozen picture) that shows the real, serious feeling of that unfairness( e.g., a tableau of a character feeling sad or excluded, or a tableau of people working together to solve a real problem, etc.).\n\n\tEncourage groups to:\n\n* *Use Exaggeration:* Use big movements and funny voices in the satirical part.  \n* *Show the Contrast:* Make the shift from the silly scene to the serious frozen picture very clear and powerful.  \n* *Collaboration:* All group members should have a clear role in both the silly scene and the final, serious tableau.\n\n\tCirculate, offering guidance and asking guiding questions like:\n\n* How can you make the Unfair Rule feel extra silly?  \n* What’s one moment you will freeze on to show the serious feeling of being left out?"
  },
  {
    "title": "Performance and Discussion",
    "content": "Have each group perform their two-part skit for the class. Remind the audience to be respectful and pay close attention to both the underlying message in the silly part and the final message in the serious frozen picture.  \n\tAfter each skit, facilitate a brief discussion with guiding questions like:\n\n* What was the funny problem you saw in the skit? What made it silly?  \n* What was the serious point you think they were making in their final frozen picture?  \n* What did the contrast between the silly part and the serious part make you think about? Why do you think they made that choice?  \n* What emotions did the skit evoke in you, in both the silly and the serious parts?\n\n\tInvite the performing group to briefly explain the intended message.\n\n* Our skit was funny, but the serious point we wanted to make was about the real world problem of \\[e.g., unfair rules or being left out\\]."
  }
],
	reflectionQuestions: [
  "How did using humor and exaggeration help you think about Global Goal 10: Reduced Inequalities?",
  "What did you learn about the importance of fairness and being kind to everyone, even when you were acting out silly scenes?",
  "What was the most powerful part of the lesson for you: the funny parts, the serious parts, or the moment where they switched?",
  "What do these activities tell us about how we can all work towards Global Goal 10?",
  "What’s one small thing you can do this week to make your own classroom or school a more fair and inclusive place, using what you learned about being both silly and serious?"
],
	assessmentCriteria: [
  "Consistent and enthusiastic involvement in all phases of the lesson, including the warm up, brainstorm, group skit creation, and class discussions.",
  "Understanding of the core concept of reduced inequalities (fairness, equal opportunity, inclusion, respect for all), as demonstrated through the skit content and verbal explanations.",
  "Originality and effectiveness in using dramatic techniques. Look for exaggeration and humor (does the group use exaggeration and physical comedy effectively in the “silly problem” scene?), clear message (does the skit clearly communicate the underlying problem of inequality, and is the final tableau’s message of a serious feeling or point clear?), and effective contrast (is the shift from the silly part to the serious part powerful and intentional?).",
  "Ability to work effectively within the small groups, contributing ideas, respecting diverse interpretations, and collaborating cohesively to create and perform the skits.",
  "Ability to articulate learning and personal connections during the reflection and summary discussion."
],
};

registerLessonContent(lessonContent);

export default lessonContent;

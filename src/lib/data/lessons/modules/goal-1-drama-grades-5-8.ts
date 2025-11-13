import type { LessonContentData } from '../types';
import { registerLessonContent } from '../index';

const lessonContent: LessonContentData = {
	goalNumber: 1,
	artForm: 'Drama' as const,
	gradeLevel: '5-8' as const,
	title: "DRAMA",
	duration: "",
	materials: [
  {
    "name": "Slips of Paper with Themes (examples below)",
    "isOptional": false
  },
  {
    "name": "Optional Props: chairs, tables, scarves/blankets/cloth, cardboard, books, pens/pencils, bowls/plates, signs, etc.",
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
  }
],
	introduction: "Welcome students to a drama activity. Explain that today, they are going to become “living pictures” to explore a really important idea: Global Goal 1: No Poverty.\n\n* Discuss how Global Goal 1 is a commitment to work towards everyone, everywhere, having what they need to live a healthy and happy life.  \n* This means having enough food, a safe home, clean water, clothes, and a chance to go to school and feel healthy and happy. It’s about fairness and making sure no one is left behind.\n\nIntroduce Tableau Vivant:\n\n* A fancy French term to “living picture.”  \n* It means you’ll work in small groups to create a frozen scene \\- like a photograph \\- using only your bodies, facial expressions, and any props you find.  \n* You won’t use any words.  \n* This is a powerful way to tell a story or show a feeling without speaking.  \n* Think of it as a silent movie where you are the actors, showing big ideas with just one powerful moment.",
	steps: [
  {
    "title": "Freeze Frame for Fairness: Creating Living Pictures for Global Goal 1",
    "content": "**(15-30 MINUTES)**"
  },
  {
    "title": "Our Living Pictures",
    "content": "Explain to students:\n\n* We’re going to make a list of things every person needs, and then think about what happens when they don’t have them, and how people can help. This will give us some great ideas for our “living pictures”\\!\n\nDraw two columns on the whiteboard or paper. Label the first column “Things Everyone Needs” and the second column “When Needs Aren’t Met (Challenges) / How People Help (Solutions).  \nAsk:\n\n* What are some of the most important things every person needs to be happy and healthy?\n\nWrite these ideas under “Things Everyone Needs” using one color marker (e.g., blue).\n\n* *Examples:* Food, clean water, a safe home, clothes, school/learning, feeling safe, kindness/friends, doctors/medicine.\n\nNow, for each item in the “Things Everyone Needs” column, ask two questions about record the answers in the second column using different colors (e.g., red for challenges, green for solutions).\n\n* For “Food”:  \n  * What does it look, sound, or feel like if someone doesn’t have enough food? (e.g., empty fridge tummy rumbling, feeling tired, looking sad, can’t focus).   \n  * What does it look, sound, or feel like when people help someone get food? (e.g., sharing a meal, a food drive, a community garden, smiles, full tummies, happy sounds).  \n* For “Safe Home”:  \n  * What does it look, sound, or feel like if someone doesn’t have a safe home? (e.g., cold, scared, nowhere to sleep, leaky roof, noisy, no privacy).  \n  * What does it look, sound, or feel like when people help someone find a safe home? (e.g., building together, warm blankets, welcoming hands, smiling faces, quiet, safe space).  \n* For “School/Learning”:  \n  * What does it look, sound, or feel like if a child doesn’t get to go to school? (e.g., empty classroom, sad child, no books, feeling left out, can’t learn new things).  \n  * What does it look, sound, or feel like when people help a child go to school? (e.g., books, smiling teacher, happy friends,  learning, sharing ideas, feeling smart).  \n* For “Feeling Safe”:  \n  * What does it look, sound, or feel like if someone doesn’t feel safe? (e.g., hiding, scared, worried, looking around nervously, dark, loud noises).  \n  * What does it look, sound, or feel like when people help someone feel safe? (e.g., huge, strong hands, friends protecting, calm, peaceful, smiling faces).\n\nThis dual listing provides a direct vocabulary for creating contrasting tableaux."
  },
  {
    "title": "Creating Our Tableaux",
    "content": "Divide students into small groups (3-4 students per group).  \nEach group will draw one slip of paper. Explain that the slip has two tableau ideas on it.\n\n* Idea 1: “The Challenge”  \n  * This will be a frozen picture showing a problem or a need that someone might have (drawing inspiration from the “Challenges” part of our brainstorm).  \n* Idea 2: “The Hope/Action”  \n  * This will be a different frozen picture showing how that challenge can be met with kindness, sharing, or community support (drawing inspiration from the “Solutions” part of our brainstorm).\n\nGive groups 5-10 minutes to plan and practice their two tableaux.  \nEncourage students to think about:\n\n* *Bodies:* How can their bodies show the emotion or situation? (e.g., slumped shoulders for sadness, open arms for welcome, hands reaching out for help).  \n* *Facial Expressions:* How can their faces show what the characters are feeling? (e.g., worried, hopeful, tired, happy).  \n* *Levels:* Can they use different levels (standing tall, crouching low, sitting)?  \n* *Props (Optional):* Can they use any classroom props to make their picture clearer? (e.g., a chair for home, a book for school, a scarf as a blanket).\n\nRemind students that the pictures are silent.  \nCirculate among groups, offering encouragement and guidance. Ask guiding questions like:\n\n* What big idea about Global Goal 1 are you trying to show in this picture?  \n* How are your bodies showing the feeling of (hunger/hope/sharing)?  \n* What message do you want the audience to understand without you speaking?  \n* How is everyone in the group contributing to the picture?  \n* How can your facial expressions make the feeling even stronger?  \n* Are you thinking about what the audience will see when they look at your frozen picture?  \n* How do your two pictures show a “before” and “after” or a “problem” and a “solution”?"
  },
  {
    "title": "Presenting Our Living Pictures",
    "content": "Gather the class to watch each group’s tableaux. Remind the audience to be silent and focus on what they see.  \nHave each group present their first tableau (“The Challenge”) silently, holding the pose for about 5-10 seconds.  \nThen, have them immediately transition to their second tableau (“The Hope/Action”), holding that pose silently for another 5-10 seconds.  \nAfter both tableaux, invite the audience to share their observations. Ask guiding questions like:\n\n* What did you see in the first picture? What feelings did it show?  \n* What did you see in the second picture? What changed? What feelings did it show?  \n* How did the two pictures tell a story together, without words?\n\nThe presenting group can also be invited to explain their intended message and artistic choices. Ask guiding questions like:\n\n* What was the challenge your group wanted to show in the first picture?  \n* What was the hope or action you showed in the second picture?  \n* Why did you choose those body positions or facial expressions?  \n* How does your “living picture” connect to Global Goal 1: No Poverty?"
  },
  {
    "title": "Cool Down",
    "content": "Lead a gentle cool-down, encouraging students to focus on their breathing and release any tension. Play calming music.  \nExamples of cool-down movements with guiding prompts:\n\n* *Deep Breathing:* Lie down or sit comfortably. Take a slow, deep brath in, feeling your belly rise. Now, breathe out slowly, letting all your worries and tensions go. Imagine breathing in calm and peace, feeling your body relax. (Focus on diaphragmatic breathing, deep sighs).  \n* *Gentle Stretching:* Slowly stretch your arms up towards the sky, then gently reach for your toes. Feel your body release any tightness or stiffness. Imagine your body becoming light and relaxed, like a soft cloud. (Simple stretches for arms, legs, back, neck rolls).  \n* *Mindfulness Walk:* Gently walk around the space, noticing each step. Feel your feet on the ground. Be present in this moment, noticing the quiet and calm around you. What does it feel like to move slowly and peacefully? (Quiet, slow walking, focusing on footfalls).  \n* *Tree Post (Modified):* Stand tall and strong like a tree, rooted to the ground. Feel your balance. Imagine being strong and resilient, just like a tree that can weather any storm, stable and peaceful. (Balance on one foot, other foot resting on ankle or calf, arms extended or at prayer position, focus on stillness).  \n* *Visualization:* Close your eyes (if comfortable). Imagine a world where everyone has what they need, where people are kind and helpful to one another. See happy faces, hear joyful sounds. Feel the warmth of a peaceful and fair world all around you, knowing you can be a part of it. (Guided visualization, focusing on positive imagery)."
  }
],
	reflectionQuestions: [
  "How did creating and watching these “living pictures” help you understand Global Goal 1: No Poverty in a new way?",
  "What did you learn about how people might feel when they need help, or when they are helping others, through our silent scenes?",
  "Which tableaux made you think or feel the most, and why?",
  "What does our “Freeze Frame for Fairness” activity tell us about how we can all work together to make sure everyone has what they need?",
  "What’s one small thing you can do in your own life today to show kindness or help someone who might need something?"
],
	assessmentCriteria: [
  "Consistent and enthusiastic involvement in all phases of the lesson, including the brainstorming, group tableau creation, and active participation in class discussions (both presenting and observing).",
  "Understanding of the core concept of Global Goal 1, as demonstrated through the symbolism and intention in the two tableaux and verbal explanations.",
  "Originality and effectiveness in designing and performing frozen pictures that vividly representing a challenge and a corresponding hope/action related to “No Poverty,” using only bodies, facial expressions, and props. Look for clear effort in expressing the feeling and concept without words.",
  "Ability to work effectively within the small groups, contributing ides, respecting diverse interpretations, adn colalboratin cohesively to crate the tableaux.",
  "Ability to articulate learning and personal connections during the reflection and summary discussion."
],
};

registerLessonContent(lessonContent);

export default lessonContent;

import type { LessonContentData } from '../types';
import { registerLessonContent } from '../index';

const lessonContent: LessonContentData = {
	goalNumber: 8,
	artForm: 'Dance/Movement' as const,
	gradeLevel: '5-8' as const,
	title: "DANCE/MOVEMENT",
	duration: "",
	materials: [
  {
    "name": "Room for movement",
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
    "name": "Large drawing paper (one per pair or small group)",
    "isOptional": false
  },
  {
    "name": "Pencils or crayons",
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
    "name": "\\[Optional\\] Handout with simple icons or words representing different jobs",
    "isOptional": false
  }
],
	introduction: "Welcome students to an engaging dance and movement class. Explain that they will use their bodies and creativity to explore a really important idea: Global Goal 8, Decent Work and Economic Growth.  \nClarify that Global Goal 8 is like a huge promise the world has made: a promise to make sure everyone, everywhere, has a good job. Emphasize that a “good job” means one that is fair (people get paid fairly), safe (people don’t get hurt), respectful, and where they feel proud of their work. Explain that it’s also about helping communities and countries grow stronger in a way that helps everyone and doesn’t harm our planet. This means jobs that are safe, pay fairly, and help the world be a better place.  \nExplain to students that sometimes, our bodies can express feelings and ideas even when words are hard to find. Introduce the idea of expressive movement \\- letting your body move freely and spontaneously to show how you feel or what you think about something.  \nTell students that today, they will all become movement storytellers, using their bodies to explore what fair work feels like, what challenges some jobs might have, and how a community can grow in a good way.",
	steps: [
  {
    "title": "Dancing Towards Decent Work: Movement for Fair Futures",
    "content": "**(30-60 MINUTES)**"
  },
  {
    "title": "Warm Up: Job Mood Moves",
    "content": "Explain that the class will explore different “job moods” with their bodies.  \nInstruct students to find a comfortable space and close their eyes gently if comfortable.  \n*Busy Worker*\n\n* Say: Imagine you are a busy worker, doing something important. How does your body move when it’s busy? It is fast, focused, repetitive?  \n  * Guide students to make quick, purposeful movements, like a buzzing bee or diligent builder.\n\n*Tired Worker*\n\n* Say: Now, imagine a worker who is very tired. How does your body move when it’s tired? Is it slow, heavy, slouching?  \n  * Guide students to make slow, weary movements, showing fatigue in their shoulders and steps.\n\n*Proud Worker*\n\n* Say: Imagine a worker who just finished something amazing and feels very proud of their job. How does your body move when it feels proud? Is it tall, open, strong?  \n  * Guide students to make expansive, confident movements, standing tall with a proud expression.\n\n*Worried Worker*\n\n* Say: Imagine a worker who is worried about their job, or worried about being safe at their job. How does your body move when it’s worried? Is it small, tense, restless?  \n  * Guide students to make smaller, more constrained movements, perhaps fidgeting or looking around nervously.\n\n*Fair and Happy Worker*\n\n* Say: Imagine a worker who feels completely safe, happy, and that they are being treated fairly in their job. How does your body move when it’s joyful and free at work?  \n  * Guide students to make light, flowing, joyful movements, perhaps a little dance or happy skip.\n\nConclude the warm up by affirming the students’ expressive abilities and explaining they will use these skills to tell stories about decent work."
  },
  {
    "title": "Work Flow and Blockages Drawing",
    "content": "Divide students into pairs or small groups (3-4 students). Provide each group with a large piece of drawing paper and pencils/crayons.  \n*The Basic Job Flow*\n\n* Instruct each group to choose one simple job they know (e.g., baker, farmer, builder, teacher, doctor, inventor, scientist, chef, etc.). You then instruct them to draw a simple “flowchart” or “comic strip” type drawing with 3-4 boxes that shows the steps of that job.  \n  Example  \n  * *Baker:* Mix dough → Bake bread —\\> Sell bread.  \n  * *Farmer:* Plant seeds → Water plants → Harvest food.  \n  * *Scientist:* Ask question → Run experiment → Check result → Share discovery.  \n  * *Doctor:* Listen to patient → Examine patient → Find problem → Help patient get well.\n\n*The Blockage*\n\n* Explain that sometimes, things aren’t fair or safe at work, or economic growth isn’t good for everyone.   \n* Instruct groups to choose one box in their job flow and draw a blockage (a problem or unfairness) that stops the flow of good work. They should also note what that blockage feels like (either through the drawing or text/symbol).  \n  Examples of Blockages  \n  * *Unfair Pay:* Draw person looking sad/angry with empty pockets, maybe a tiny dollar sign.  \n  * *Unsafe Tools:* Draw broken tools, a dangerous machine with “angry” lines around it.  \n  * *No Jobs:* Draw a person looking sad, with a question mark, no one around.  \n  * *Pollution from a Factory:* Draw a factory chimney blowing black smoke onto happy trees.  \n  * *Kids Working:* Draw a small child struggling with something heavy/working instead of playing or learning.  \n  * *Job gets Boring/Repetitive:* Draw someone looking sleepy, doing the same thing over and over.  \n  * *Business Not Growing Fairly:* Draw one side of a building growing huge and the other very small.\n\n*The Flow Again*\n\n* Instruct groups to draw or note how the blockage is removed or solved, showing what happens when the work is fair, safe, and helps everyone. They should also draw or note what that feels like. This can be a new box or within their existing boxes.  \n  Examples of Solutions  \n  * *Fair Pay:* Person smiling, happy with full pockets.  \n  * *Safe Tools:* Draw a shiny, new, safe tool being happily used.  \n  * *New Job Idea:* Draw a lightbulb over someone’s head, or hands working together.  \n  * *Clean Factory:* Draw the factory with a filter, blowing clean air, smiling plants.  \n  * *Child Goes to School:* Draw a child happily reading in a classroom.\n\nCirculate, offering guidance and asking guiding questions like:\n\n* How does your drawing show that blockage feels unfair?  \n* What action in your flow again drawing shows everyone is happy and safe?"
  },
  {
    "title": "Movement for Decent Work",
    "content": "Explain that the class will now explore their own feelings about good work and challenges through individual, expressive movement.  \nSet a mood with instrumental music (use a mix of thoughtful, slightly tense, and hopeful tracks).  \nExample Music:\n\n* [*Counting Stars*](https://www.youtube.com/watch?v=hT_nvWreIhg) by One Republic  \n* [*Wake Me Up*](https://www.youtube.com/watch?v=5y_KJAg8bHI) by Avicii  \n* [*Levels*](https://www.youtube.com/watch?v=_ovdm2yX4MA) by Avicii  \n* [*The Avengers Theme*](https://www.youtube.com/watch?v=QtxeJ703w18) by Alan Silvestri  \n* [*Ho Hey*](https://www.youtube.com/watch?v=zvCBSSwgtg4) by The Lumineers  \n* [*Caravan*](https://www.youtube.com/watch?v=YkLBSLxo5LE) by Duke Ellington  \n* [*Something Big*](https://www.youtube.com/watch?v=mytLRy32Viw) by Shawn Mendes  \n* [*We Built This City*](https://www.youtube.com/watch?v=K1b8AhIsSYQ) by Starship  \n* [*Can’t Hold Us*](https://www.youtube.com/watch?v=2zNSgSzhBfM) by Macklemore & Ryan Lewis ft. Ray Dalton\n\nGuide students to find a personal space. Instruct them to bring their attention inward and allow any feelings or images related to the idea of a fair job, a challenging job, or growth that helps everyone to guide their movement.  \nClarify that there is no right or wrong way to move; the focus is on honest and spontaneous expression of their personal thoughts and feelings.  \nRemind students to keep their eyes open and be aware of their surroundings.  \nPrompts for Exploration:\n\n* How does your body move when it feels like hard, unfair work? Is it heavy, restricted, or tired?  \n* What movement shows working safely? Is it smooth, strong, careful?  \n* How does your body express the feeling of creating something new or having a new idea for you?  \n* What movement shows economic growth that’s unfair? Maybe some parts are huge and fat, while others are small and stuck?  \n* How does your body move and feel when it shows fair pay? What about when someone feels proud of their job?  \n* What movement can show everyone working together for growth that helps the planet?  \n* Hoe do you move when you feel like a problem is blocking good work? How do you move when you find a solution?\n\nEncourage students to explore different levels (high, low, middle), speeds (fast,slow), and qualities of movement (strong, light, fluid, sharp)."
  },
  {
    "title": "Movement Scenes: Our Work Story",
    "content": "Have students go back to their small groups (3-4 students).  \nInstruct each group to create a short (1-2 minute) improvised dance story using the ideas from their initial drawing. Their story should have three clear parts:\n\n* *Part 1: The Basic Job Flow* (showing the normal job steps).  \n* *Part 2: The Blockage* (showing the problem or unfairness stopping the flow).  \n* *Part 3: The Flow Again* (showing the solution and the good work continuing fairly).\n\nEncourage groups to use:\n\n* *Expressive Movements:* Show the feelings (e.g., busy, tired, proud, worried) from their drawings with their bodies and faces.  \n* *Symbolic Actions:* Use gestures or simple movements to represent parts of the job or the blockage (e.g., miming holding a tool, showing heavy lifting, a collapsed body for a problem, a hand reaching out for help).  \n* *Group Shapes:* How can their bodies together form shapes that show teamwork, unfairness (e.g., one person pushed down), or celebration?  \n* *Transitions:* How can they smoothly move from the flow to the blockage and back to flow again?\n\nProvide music for them to create and rehearse (use the same mix of thoughtful/hopeful tracks).  \nCirculate, offering guidance and asking guiding questions like:\n\n* How does your group show the blockage clearly with your movements?  \n* What’s the main feeling in your flow again part?  \n* How does everyone contribute to the story?"
  },
  {
    "title": "Observe and Share",
    "content": "Gather the class. Instruct them that each group will share their dance while the other groups act as focused observers. Emphasize that observing means watching with attention and without judgement, noticing what the movement makes them think or feel.  \nEach group performs their Work Story Dance.  \nAfter each performance, facilitate a brief discussion. Ask questions like:\n\n* What job did you see in their dance? What was the problem they showed?  \n* How did they show the blockage with their bodies? What did it feel like to watch that movement?  \n* Hoe did they show the solution and the flow again? What positive movements did you see?  \n* What did the dance make you think or feel about fair jobs or good growth?  \n* How did their bodies tell a story without using words?\n\nEncourage the performing group to share:\n\n* What was challenging or rewarding about creating your dance?  \n* How did your group work together?"
  },
  {
    "title": "Reflection & Summary",
    "content": "Have students reflect on their learning experience through discussion or writing.  \nAsk guiding questions like:\n\n* How did using your body to express feelings about jobs and growth help you understand Global Goal 8: Decent Work and Economic Growth in a new way?  \n* What did you learn about hwo jobs can be fair or unfair, and how communities can grow in a good way?  \n* Which dance stories or ideas from your classmates made you think or feel the most about jobs and growth, and why?  \n* What do these activities tell us about how we can all work towards Global Goal 8?  \n* What’s one small action you feel inspired to take this week to be fair in your own work (like homework or chores) or support good work in your community?"
  }
],
	reflectionQuestions: [
  "How did using your body to express feelings about jobs and growth help you understand Global Goal 8: Decent Work and Economic Growth in a new way?",
  "What did you learn about hwo jobs can be fair or unfair, and how communities can grow in a good way?",
  "Which dance stories or ideas from your classmates made you think or feel the most about jobs and growth, and why?",
  "What do these activities tell us about how we can all work towards Global Goal 8?",
  "What’s one small action you feel inspired to take this week to be fair in your own work (like homework or chores) or support good work in your community?"
],
	assessmentCriteria: [
  "Consistent and enthusiastic involvement in all phases of the lesson, including the warm up, brainstorm, individual movement exploration, group scene creation, and class discussions.",
  "Understanding of the core concept of decent work and economic growth (fair jobs, safe workplaces, sustainable growth), as demonstrated through the symbolism, emotions, and message in the group dance stories and verbal explanations.",
  "Originality and effectiveness in using bodies to convey emotions and ideas related to jobs and growth. Look for clear portrayal of job moods and work flow/blockages through movement, expressive use of levels, speeds, and qualities of movement, and ability to tell a clear story (problem-solution) through movement in group scenes.",
  "Ability to work effectively within the small groups, contributing ideas, respecting diverse approaches, and collaborating cohesively to choreograph and perform the dance scenes.",
  "Ability to articulate learning and personal connections during the reflection and summary discussion."
],
};

registerLessonContent(lessonContent);

export default lessonContent;

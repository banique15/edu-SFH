import type { LessonContentData } from '../types';
import { registerLessonContent } from '../index';

const lessonContent: LessonContentData = {
	goalNumber: 3,
	artForm: 'Dance/Movement' as const,
	gradeLevel: '5-8' as const,
	title: "DANCE/MOVEMENT",
	duration: "",
	materials: [
  {
    "name": "Open space for movement",
    "isOptional": false
  },
  {
    "name": "Audio",
    "isOptional": false
  },
  {
    "name": "Visual Aids: Images or videos showcasing the selected folk dance, or images of the dance’s origin country/culture",
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
    "name": "\\[Optional\\] Colorful scarves for expressive movement",
    "isOptional": false
  },
  {
    "name": "References for chosen folk dance (e.g., “Mayim Mayim” Israel,  “Sirtaki” Greece, “The Electric Slide” USA )",
    "isOptional": false
  },
  {
    "name": "Examples:",
    "isOptional": false
  },
  {
    "name": "“Mayim Mayim”",
    "isOptional": false
  },
  {
    "name": "“Sirtaki”",
    "isOptional": false
  },
  {
    "name": "“The Electric Slide”",
    "isOptional": false
  }
],
	introduction: "Introduce or re-introduce the class to Global Goal 3: Good Health and Well-being.\n\n* This goal aims to make sure everyone, everywhere, has a healthy life and feels good, no matter their age. This means having doctors when you’re sick, staying safe, being able to exercise, eating healthy food, and also feeling happy and calm inside your mind.  \n* It’s about caring for our whole selves. Our bodies, our minds, our feelings, and even our friendships.\n\nStart a discussion with students about dance: that it is a way people from all over the word celebrate, tell stories, and stay healthy. It helps our bodies move, makes our minds focused, helps us express feelings, and connects us to friends.  \nLet them know that today the class will learn a simple folk dance from another part of the world to see how dance makes us healthy and helps us feel connected.",
	steps: [
  {
    "title": "A Global Dance Party for Wellbeing",
    "content": ""
  },
  {
    "title": "Energy Ball Movement",
    "content": "Begin with an energetic warm-up to get students ready to move their bodies and dance.  \nHave the class stand in a large circle.  \nInstruct the stduents to imagine there’s a big, invisible ball of warm, gentle energy in the middle of the circle.  \nMovements begin:\n\n* *Teacher starts:* I’m going to grab a piece of this energy, make a movement, and pass it to the person next to me.  \n  * (Mimes grabbing energy, does a simple movement like a slow arm circle, and passes the imaginary ball).  \n* *Pass the movement:* When you receive the energy, you’ll copy the movement, then add your own new simple movement to it, and pass the ball to the next person. Each person adds a new movement, building on the previous one.\n\n\tExamples of movements:\n\n* A gentle sway, a small bounce, a soft clap, a reach, a stretch, a spin in place, a small jump, wiggling fingers, bending knees.  \n* Let’s see how big and complex our Energy Ball can get as we pass it around.   \n  * Remind students to keep it gentle and safe, while also encouraging them to listen with their bodies and mirror accurately before adding their own touch.\n\nAfter a few rounds, guide students to make the Energy Ball get smaller and quieter, bringing it back to stillness."
  },
  {
    "title": "Learning About Our Dance",
    "content": "Introduce the chosen folk dance. For example:\n\n* Today, we’re going to learn “Mayim Mayim,” which means “water, water” in Hebrew. It’s a joyful dance from Israel that celebrates water; something very important for our health.  \n  * *Share cultural context:* This dance has been done for a long time and helps people feel connected. It reminds us that people all over the world use dance to celebrate important things like water, harvests, or special events.  \n  * *Show visual aids:* Briefly show a short video clip of the dance being performed. Point out the basic formations (like circles) and the general energy.  \n  * *Discuss symbolism:* Why do you think people would dance about water? How does dancing in a circle make people feel connected?"
  },
  {
    "title": "Basic Steps and Movement Exploration",
    "content": "Break down the basic steps of the chosen folk dance (e.g., for Mayim Mayim, this would be the basic step-together-step pattern, and the crossing step).\n\n* *Demonstrate clearly and slowly:* Watch me first. We’ll start with a simple step-together-step. Right foot steps out, left foot comes to meet it. Now the left foot steps out, right foot meets it. (Repeat slowly, facing away from students to make mirroring easier).  \n* *Practice individually:* Try it in your own space. How does this movement feel in your legs? What happens if you try to make it bouncy or smooth?  \n* *Practice in groups/circles:* Now, let’s try it together. We’ll form a circle and hold hands (or just put hands on shoulders). We’ll try the steps moving together. Remember, it’s okay if it’s not perfect. The fun is in trying and moving together. (Focus on group unison and encouragement).  \n* *Connect to health:* Ask guiding questions like:  \n  * How does moving our bodies like this make us feel physically healthy? (e.g., gets our hearts pumping, makes our muscles stronger, helps our balance).   \n  * How does dancing with friends make us feel happy and connected? (e.g., makes us smile, helps us to laugh and get along, feel like part of a team, less lonely)."
  },
  {
    "title": "My Dance & My Health Brainstorm",
    "content": "Explain that the class will now create a Movement Web on the board/large paper.\n\n* We’ll connect our dance to different ways we stay healthy and well. In our bodies, minds, feelings, and with our friends.\n\nWrite “My Healthy Self (Through Dance)” in a central bubble on the whiteboard/paper.  \nDraw four branches coming from the center, and ask students to brainstorm how the dance they just learned connects to each type of health:\n\n* *Body Health:* How does learning this dance help your body?  \n  Examples:  \n  * Makes muscles stronger, helps coordination, gets heart pumping, improves balance, gives energy.  \n* *Mind Health:* How does learning new steps in this danace help your brain?  \n  Examples:  \n  * Helps focus, memory, problem solving, makes brain feel active, calms us down.  \n* *Feelings Health:* How does dancing make your feelings feel healthy?  \n  Examples:  \n  * Makes me happy, feel joyful, helps me get out anxious feelings, feel peaceful, proud when I get a step right.  \n* *Friendship Health:* How does doing this dance with others help your friendships?  \n  Examples:  \n  * We work as a team, we laugh together, we help each other, feel connected, feel like part of a group, meet new people.\n\nBriefly summarize: Our dance helps us in so many ways. It’s like a full body, full mind, full heart workout for good health."
  },
  {
    "title": "Group Creation: Health Dance Freeze Frames",
    "content": "Divide students into small groups (3-4 students).  \nExplain that each group will create a short sequence of two to three frozen poses (like still pictures) that show our the folk dance (or dance in general) helps with one type of health from the Movement Web (body, mind, feelings, or friendship health).  \nGive groups 3-5 minutes to plan their sequence of poses.  \nEncourage students to think about:\n\n* *Clear Message:* Which type of health are they showing?  \n* *Body Language:* How do their bodies show the action or feeling?  \n* *Facial Expressions:* How do their faces tell the story?  \n* *Levels and Interaction:* Can they use different levels (high, low) or interact with each other to show connection?\n\nCirculate, offering support. Ask guiding questions like:\n\n* How can you show “strong body” with these poses?  \n* How can you faces show “happy feelings?"
  },
  {
    "title": "Performance: Our Health Dance Stories",
    "content": "Have each group briefly present their two to three poses in sequence to the class. Encourage the audience to guess which type of health they are showing.  \nAfter each group, invite a few students to share what they saw and felt from the poses, and which type of health they think was shown.  \nFinally, invite the presenting group to confirm the intended health focus:\n\n* Our poses showed \\[body/mind/feelings/friendship\\] health beacuse \\[reason\\]."
  },
  {
    "title": "Reflection & Summary",
    "content": "Have students reflect on their learning experience through discussion or writing.  \nAsk guiding questions like:\n\n* How did dancing and creating poses help you understand Global Goal 3: Good Health and Well-being in a new way?  \n* What did you lean about how our bodies, minds, feelings, and friendships all work together for our health?  \n* Which movements or ideas from our Movement Web made you think or feel the most about good health, and why?  \n* What does our Dancing for Health activity tell us about how people from different cultures use dance to celebrate well-being?  \n* What’s one small thing you can do this week to take care of your own body, mind, or feelings, inspired by our dance today?"
  }
],
	reflectionQuestions: [
  "How did dancing and creating poses help you understand Global Goal 3: Good Health and Well-being in a new way?",
  "What did you lean about how our bodies, minds, feelings, and friendships all work together for our health?",
  "Which movements or ideas from our Movement Web made you think or feel the most about good health, and why?",
  "What does our Dancing for Health activity tell us about how people from different cultures use dance to celebrate well-being?",
  "What’s one small thing you can do this week to take care of your own body, mind, or feelings, inspired by our dance today?"
],
	assessmentCriteria: [
  "Consistent and enthusiastic involvement in all phases of the lesson, including the warm-up, folk dance learning, brainstorm, group pose creation, and class discussions.",
  "Understanding of the core concept of Global Goal 3 (Good Health and Well-being, covering body, mind, feelings, and social health), as demonstrated through movement choices, poses, and verbal contributions during discussions.",
  "Originality and effectiveness in using bodies to convey emotions and ideas related to health. Look for clear effort in expressing the feeling and concept.",
  "Ability to work effectively within the small groups during the pose creation, contributing ideas, respecting diverse interpretations, and collaborating cohesively.",
  "Ability to articulate learning and personal connections during the reflection and summary discussion."
],
};

registerLessonContent(lessonContent);

export default lessonContent;

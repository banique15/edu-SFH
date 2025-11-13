import type { LessonContentData } from '../types';
import { registerLessonContent } from '../index';

const lessonContent: LessonContentData = {
	goalNumber: 2,
	artForm: 'Art' as const,
	gradeLevel: '5-8' as const,
	title: "Colorful Crops and Communities: Art for a World Without Hunger",
	duration: "40-60 MINUTES",
	materials: [
  {
    "name": "Large sheets of drawing paper or recycled cardboard (one per student, or one large piece to divide into two section)",
    "isOptional": false
  },
  {
    "name": "Art supplies: Markers, paints, colored pencils, crayons, paints (tempera or watercolor), collage materials",
    "isOptional": false
  },
  {
    "name": "Scissors and glue (for collage)",
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
    "name": "\\[Optional\\] Age appropriate images of diverse healthy foods, gardens, farms, children eating happily, people sharing meals (for discussion inspiration).",
    "isOptional": false
  }
],
	introduction: "Welcome students to an exciting art project, where they will use their creativity to explore a really important idea: Global Goal 2: Zero Hunger.\n\n* Explain that Global Goal 2 is a commitment to make sure everyone, everywhere has enough healthy food to eat, all the time. It means kids can grow strong and learn well, and families have enough nutritious food every day.  \n* It’s about fairness, health, and making sure no one goes hungry.\n\nDiscuss how art is a powerful way to tell stories without words, to show feelings, and to share important messages. Today, the students will be artists, painting a picture of what a world with and without hunger looks like, and how we can all help make Global Goal 2 come true\\!\\\\",
	steps: [
  {
    "title": "Our Art Journey to Zero Hunger",
    "content": "Explain that the class will be doing a \"Sensory Harvest\" brainstorm to gather ideas for their art. They will think about what a world with enough food feels like, and what it's like when people don't have enough. Then, the class will think about how they can help\\!  \nDraw three sections on the whiteboard: The Full Plate (Having Enough), The Empty Plate (Not Enough) and Planting Seeds of Hope (Actions)\n\n* *The Full Plate* (Having Enough)  \n  * Ask students to close their eyes (if comfortable) or just imagine a delicious, healthy meal. Ask questions like:  \n    * What do you see on the plate?  \n    * What do you smell?  \n    * What do you hear (like people eating or cooking)?  \n    * How do you feel in your body and emotions when you have enough food?  \n    * What do healthy foods taste like?  \n  * Examples  \n    * See: Bright red apples, green leafy salads, warm bread, colorful fruits, steam rising from soup.  \n    * Smell: Fresh-baked cookies, savory spices, sweet fruit.  \n    * Hear: Chewing, laughter, clinking forks, sizzle from a pan, satisfied sighs.  \n    * Feel: Full, warm, strong, energetic, happy, content, thankful.  \n    * Taste: Sweet, juicy, salty, crispy, fresh, yummy.  \n  * Write these sensory words under \"The Full Plate\" using one color marker (e.g., blue).  \n* *The Empty Plate* (Not Enough)  \n  * Ask students to shift their focus and imagine a plate that is empty, and someone that is hungry. Ask questions like:  \n    * What might you see around them?  \n    * What might you hear (or not hear)?  \n    * How might their body and emotions feel?  \n    * *Note:* Emphasize that we're imagining, not trying to scare anyone, depending on your class's sensitivity.  \n  * Examples:  \n    * See: Empty shelves, worried faces, hungry bodies, faded colors, quiet rooms, dirt, cracked ground in gardens.  \n    * Hear: Tummy rumbling, sad sighs, silence where there should be laughter, quiet footsteps, no sounds of cooking.  \n    * Feel: Weak, tired, sad, worried, scared, frustrated, cold, dizzy.  \n    * Taste: None, because there's no food.  \n  * Write these under \"The Empty Plate\" using a different color marker (e.g., red).  \n* *Planting Seeds of Help* (Action)  \n  * Based on the contrast, ask students:  \n    * What actions can people take to help make sure everyone has enough healthy food?  \n    * What does it look like when people are helping to end hunger?  \n  * Examples:  \n    * Sharing food, planting gardens, volunteering at a food bank, collecting cans of food, building farms, teaching others to grow food, talking about it, reaching out a hand, giving hugs, delivering meals, making food healthy, scientists finding new ways to grow food, using less food waste.  \n  * Write these actions under \"Planting Seeds of Hope\" using the blue marker (or whichever marker you started with.  \n  * This brainstorm will provide a rich pool of ideas for the upcoming art.",
    "order": 1
  },
  {
    "title": "My Story of Zero Hunger",
    "content": "Give each student a large sheet of paper. Explain that they will create an artwork that tells a story about Global Goal 2: Zero Hunger.  \nOffer two main approaches for their artwork:\n\n* *\"Before and After Picture\":* Divide your paper into two halves. On one side, draw/paint/collage something from \"The Empty Plate\" or a \"challenge.\" On the other side, draw/paint/collage something from \"The Full Plate\" or a \"Planting Seeds of Help\" action. This shows the journey from challenge to hope.  \n* *\"One Powerful Idea\":* Create one picture that shows a strong message about either \"The Full Plate\" (joy, abundance, sharing) OR a powerful \"Planting Seeds of Help\" action.\n\nEncourage students to use the words and ideas from the \"Sensory Harvest\" brainstorm to make their art come alive.  \nProvide access to a variety of art supplies. Emphasize that all art styles are welcome, and they should use the materials they feel most comfortable with to express their message.  \nCirculate around the classroom, offering support and encouraging experimentation. Ask open-ended questions to spark creativity and deeper thinking like:\n\n* What emotions are you trying to show in your art? How does (color/shape/texture/etc.) help tell that story?  \n* What symbols are you using for food, or hunger, or helping? Like, is this a sun for hope, or a broken fence for a challenge?  \n* How does your art connect to the idea that everyone deserves healthy food?  \n* What message do you hope viewers will take away from your artwork about Global Goal 2?  \n* If someone looked at your artwork, what feelins would you want them to have?  \n* How did thinking about the taste of food help you draw/paint your picture?  \n* Why did you choose (this color) for the challenge side, and (that color) for the hope side?  \n* Are you showing how a community works together to grow food or share meals?",
    "order": 2
  },
  {
    "title": "My Artist Statement",
    "content": "Have students write a very short \"Artist Statement\" on the back of their artwork or on a small separate slip of paper.  \nEncourage students to give their artwork a creative title.  \nA template can be provided if needed:\n\n* My artwork (title) shows \\[what was drawn/painted/collaged\\] about Global Goal 2\\. I want people to feel/think \\[a feeling or idea\\] when they see it.",
    "order": 3
  },
  {
    "title": "Silent Gallery Walk and Positive Thoughts",
    "content": "Have students carefully place their finished artwork on tables or tape them to a designated wall space to create a \"gallery.\"  \nExplain that the class will take a \"Gallery Walk.\" \n\n* They will move slowly and quietly around the room, looking at everyone's artwork.   \n* Don't touch, and don't talk. Just look and think.  \n* As they look at each piece, choose one word or one positive thought that comes to mind for each artwork. It could be \"hopeful,\" \"colorful,\" \"strong,\" \"kind,\" or \"delicious,\" Have the students keep that thought in their mind as they move.\n\nAfter the walk, have students return to their seats. Instruct them to close their eyes for a moment and think about all the amazing art they just saw created by their classmates. Encourage them to feel the positive energy in the room from all the creative ideas about Global Goal 2\\.",
    "order": 4
  },
  {
    "title": "Reflection & Summary",
    "content": "Have students reflect on their learning experience through discussion or writing.  \nAsk guiding questions like:\n\n* How did creating art help you understand the challenges of hunger and the importance of Global Goal 2?  \n* What did you learn about the power of using colors, shapes, and pictures to tell a story about hunger or hope?  \n* Which artworks or ideas from your classmates made you think or feel the most, and why?  \n* How might your personal food choices and habits be connected to the global issue of hunger (e.g., finishing your plate, reducing food waste, being thankful for your food).  \n* What's one small thing you can do to help plant \"seeds of help\" for Global Goal 2 in your own life or community?",
    "order": 5
  }
],
	reflectionQuestions: [
  "How did creating art help you understand the challenges of hunger and the importance of Global Goal 2?",
  "What did you learn about the power of using colors, shapes, and pictures to tell a story about hunger or hope?",
  "Which artworks or ideas from your classmates made you think or feel the most, and why?",
  "How might your personal food choices and habits be connected to the global issue of hunger (e.g., finishing your plate, reducing food waste, being thankful for your food).",
  "What’s one small thing you can do to help plant “seeds of help” for Global Goal 2 in your own life or community?"
],
	discussionPrompts: [
		"What do you see on the plate?",
		"What do you smell?",
		"What do you hear (like people eating or cooking)?",
		"How do you feel in your body and emotions when you have enough food?",
		"What do healthy foods taste like?",
		"What might you see around them?",
		"What might you hear (or not hear)?",
		"How might their body and emotions feel?",
		"What actions can people take to help make sure everyone has enough healthy food?",
		"What does it look like when people are helping to end hunger?",
		"What emotions are you trying to show in your art? How does (color/shape/texture/etc.) help tell that story?",
		"What symbols are you using for food, or hunger, or helping? Like, is this a sun for hope, or a broken fence for a challenge?",
		"How does your art connect to the idea that everyone deserves healthy food?",
		"What message do you hope viewers will take away from your artwork about Global Goal 2?",
		"If someone looked at your artwork, what feelings would you want them to have?",
		"How did thinking about the taste of food help you draw/paint your picture?",
		"Why did you choose (this color) for the challenge side, and (that color) for the hope side?",
		"Are you showing how a community works together to grow food or share meals?"
	],
	personalConnection: "After creating their artwork, students reflect on how their personal food choices and habits might be connected to the global issue of hunger. They consider actions like finishing their plate, reducing food waste, and being thankful for their food.",
	closingActivities: [
		{
			title: "Silent Gallery Walk",
			description: "Students place their finished artwork on tables or tape them to a designated wall space to create a gallery. They move slowly and quietly around the room, looking at everyone's artwork, choosing one word or positive thought for each piece."
		},
		{
			title: "Artist Statement",
			description: "Students write a brief artist statement on the back of their artwork or on a separate slip of paper, giving their artwork a creative title and explaining what it shows about Global Goal 2."
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
			title: "Age appropriate images of diverse healthy foods, gardens, farms, children eating happily, people sharing meals",
			description: "Optional images for discussion inspiration",
			order: 1
		}
	],
	assessmentCriteria: [
  "Consistent and enthusiastic involvement in all phases of the lesson, including the brainstorming, individual artwork creation, gallery walk, and class discussions.",
  "Understanding of the core concept of Global Goal 2 (Zero Hunger \\- ensuring everyone has enough healthy food), as demonstrated through the thematic content and symbolism in the artwork and verbal explanations.",
  "Originality and effectiveness in using chosen art forms (drawing, painting, collage) and materials to vividly represent the chosen theme (challenge and hope, or one powerful idea). Look for impactful visual interpretations and effort in the art.",
  "Thoughtfulness of the brief Artist Statements, demonstrating a connection between the art, the message, and Global Goal 2\\.",
  "Ability to articulate the learning and personal connections during the reflection and summary discussion."
],
};

registerLessonContent(lessonContent);

export default lessonContent;

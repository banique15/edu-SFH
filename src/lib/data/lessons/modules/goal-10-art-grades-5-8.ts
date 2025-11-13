import type { LessonContentData } from '../types';
import { registerLessonContent } from '../index';

const lessonContent: LessonContentData = {
	goalNumber: 10,
	artForm: 'Art' as const,
	gradeLevel: '5-8' as const,
	title: "ART",
	duration: "",
	materials: [
  {
    "name": "Simple printmaking supplies",
    "isOptional": false
  },
  {
    "name": "Recycled foam sheets (e.g., craft foam, foam trays \\- clean, flat pieces), or thin, sturdy cardboard/cardstock for students to cut/carve. One piece per student (e.g., 4x6 inches or 5x7 inches)",
    "isOptional": false
  },
  {
    "name": "“Carving” tools (pens, blunt pencils, etc., something with a hard, slightly pointed tip for pressing into foam)",
    "isOptional": false
  },
  {
    "name": "Brayers, rollers, sponges, paintbrushes, or even fingers to spread ink.",
    "isOptional": false
  },
  {
    "name": "Printing ink (tempera is a good option)",
    "isOptional": false
  },
  {
    "name": "Paper for printing",
    "isOptional": false
  },
  {
    "name": "Scissors (or other cutting tools), glue, other collage materials if wanted",
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
    "name": "Scrap paper",
    "isOptional": false
  },
  {
    "name": "[How to Make Styrofoam Prints](https://www.youtube.com/watch?v=eCjQXse8eB0)  [How do to Printmaking with Styrofoam](https://www.youtube.com/watch?v=g9f0yKfLBpY)",
    "isOptional": false
  },
  {
    "name": "[Printmaking: Super Easy Styrofoam Technique](https://www.youtube.com/watch?v=ls62PSy4qkE)  [DIY Printmaking with Household Items](https://www.youtube.com/watch?v=Y1SlLvguCXk)",
    "isOptional": false
  },
  {
    "name": "Stenciling Videos:",
    "isOptional": false
  },
  {
    "name": "[DIY Handmade Stencil Making & Printing](https://www.youtube.com/watch?v=C6ZmVeVWt4k)  [DIY Handmade Stencil Making & Printing](https://www.youtube.com/watch?v=gaOZywcJHGk)",
    "isOptional": false
  },
  {
    "name": "[Stencil Printing](https://www.youtube.com/watch?v=nbsjnkG_hmw)",
    "isOptional": false
  }
],
	introduction: "Welcome students to an exciting art class. Explain that they will use their imaginations and creativity to explore a really important idea: Global Goal 10, Reduced Inequalities.  \nClarify that Global Goal 10 is like a huge promise the world has made: a promise to make sure everyone, everywhere, has fair and equal chances. Emphasize that this means treating all people with respect, no matter their age, gender, background, abilities, or what they look like. It’s about making sure everyone has the same opportunities to learn, grow, and succeed.  \nShow image examples of compelling printmaking examples from various artists and cultures. Explain that printmaking is a cool way to make art by creating an image on one surfact (like a foam block) and then pressing it onto paper to make many copies. Clarify that artists use printmaking to tell stories, share messages, and even make statements about fairness.  \nExamples:\n\n* [*Sharecropper*](https://www.artic.edu/artworks/117319/sharecropper), Elizabeth Catlett (Focus on how the bold lines show the strength and dignity of the subject, even through hardship. Explain she made art to show people’s strength and fairness.)  \n* [*The Great Wave off Kanagawa*](https://www.metmuseum.org/art/collection/search/45434), Hokusai (Focus on how the strong lines and bold, flat colors make a powerful image, and that many copies could be made.)  \n* [*Hope*](https://en.wikipedia.org/wiki/Barack_Obama_%22Hope%22_poster#/media/File:Barack_Obama_Hope_poster.jpg) or [*Obey Giant*](https://store.obeygiant.com/products/obey-offset-poster?srsltid=AfmBOor_zH-sZOPYDi-13aLKzBL5lqBsmF4cGE_OZ3LDHrVA9Wi1BR6n), Shepard Fairey\n\nFacilitate a discussion about the characteristics of printmaking, asking guiding questions like:\n\n* What do you notice about these artworks? Do they have strong lines? Bold shapes? What are the colors like?  \n* What messages or ideas do you think they are trying to convey? Do they make you think about important topics like fairness?  \n* How do these artworks make you feel? Do they feel strong, thoughtful, or inspiring?  \n* Why do you think artists like to make copies of their art? How can making many copies help share a message with more people?  \n* How can printmaking be used to tell stories or raise awareness about being fair to everyone?",
	steps: [
  {
    "title": "Printing Our Future: Art for a Fairer World",
    "content": "**(30-60 MINUTES)**"
  },
  {
    "title": "Pattern of Fairness",
    "content": "Have all students prepare with a piece of scrap paper and a writing utensil.  \n\t*Basic Fairness Pattern*\n\n* Say: Imagine the idea of fairness. What simple shape or line pattern repeats and makes you think of fairness, equality, or everyone being included? (e.g., a circle repeating, alternating stripes, interlocking shapes, a hand repeated).  \n  * Have students quickly draw that simple pattern on their paper.\n\n\t*Unfairness Pattern*\n\n* Say: Now, imagine unfairness. What kind of pattern would show things not being equal, or feeling stuck or left out? (e.g., a broken line repeating, one shape much bigger/smaller than others in a patter, a zig-zag that doesn’t connect).  \n  * Have students quickly draw an unfairness pattern on their paper next to the first pattern.\n\n\t*Building a Solution Pattern*\n\n* Say: Finally, how would a repeating pattern show building a solution or making things equal? It could start small and grow, or connect broken parts. (e.g., repeating arrows pointing forward, interlocking hands, a pattern of smiling faces, a pattern where broken lines come together).  \n  * Have students quickly draw a solution pattern on their paper.\n\n\tConclude this warm up by affirming creating pattern thinking, explaining that these patterns will help inspire their prints for Global Goal 10\\."
  },
  {
    "title": "Exploring Printmaking Techniques",
    "content": "Explain that the class will focus on two main printingmaking techniques: Relief Printing (making a stamp) and Stenciling (cutting holes to paint through). Clarify that both are great for making bold, clear images that can be repeated. Note: If best for your class, focus on only one technique.  \n\t*Relief Printing (Foam)*\n\n* Demonstrate the process: Imagine you’re making a stamp. You’ll use a pencil to draw a picture into a soft foam sheet. The parts you press down will **not** rint, and the parts that stick up **will** print. Then you’ll roll ink onto the raised parts and press it onto paper.  \n* Show a simple example.  \n* Ask guiding questions like:  \n  * What kinds of lines or shapes would be easy to press into foam for a print?  \n  * How can you make a bold picture that tells a clear story on your stamp?\n\n\t*Stenciling*\n\n* Demonstrate the process: Stenciling is like cutting a cookie cutter. You’ll cut a shape **out** of paper or cardboard/cardstock. Then you’ll place the paper with the hole over another paper, and paint through the hole. When you lift the stencil, the shape is left behind.  \n* Show a simple example.  \n* Ask guiding questions like:  \n  * What kind of simple shapes would be good for a stencil?  \n  * How can you use a stencil to repeat a message or a symbol about fairness?"
  },
  {
    "title": "Equality Symbol Sketch",
    "content": "Divide students into small groups (3-4 students). Provide each student with a piece of paper for sketching and a range of colorful writing utensils.  \n\tFor the next few minutes, have students quickly sketch as many visual symbols or simple drawings as they can that represent the following ideas for Global Goal 10: Reduced Inequalities. These ideas can be written on the board if you’d like students to draw based on all the ideas at once, or you can call out the ideas one at a time.  \n\tIdeas to Sketch:\n\n* *Fairness* (e.g., equal signs, a balanced scale, two hands shaking, a heart, a circle of diverse figures, two people the same height, a check mark for right).  \n* *Inclusion/Everyone Belongs* (e.g., many different shapes/colors together, hands holding, a puzzle piece fitting in, open doors, a welcoming smile, people linking arms).  \n* *Challenges/Unfairness* (e.g., a broken chain, a fence, one person outside a group, a tilted scale, a sad face, an X mark, a barrier, a question mark, someone pointing unfairly).  \n* *Strength/Empowerment* (e.g., a strong fist, a star, a crown, a person standing tall, a lightbulb, an arrow pointing up, a lightning bolt).  \n* *Working Together* (gears turning, people pulling a rope, hand building, interlocking shapes).\n\n\tInstruct students to make their sketches simple and clear, suitable for a print or stencil.  \n\tCirculate, offering guidance and asking guiding questions like:\n\n* How can you draw a simple symbol for equal chances?  \n* What does feeling left out look like as a simple drawing?  \n* How could you show everyone belongs?\n\n\tAfter the sketching time, instruct groups to quickly share their favorite symbols with each other, explaining what they mean."
  },
  {
    "title": "My Equality Print",
    "content": "Explain that each student will now create their own print, using either the relief printing (foam stamp) or stenciling technique (or just giving one option if preferred). The prints will be inspired by the ideas and symbols from the brainstorming and Global Goal 10\\.  \n\tRemind students of the chosen technique:\n\n* *For Relief Printing (Foam):* Draw the design directly onto the foam with pencil, etc. Remember that the parts pressed down will be the white parts of the print, and the raised will be the color. Lines should be bold.  \n* *For Stenciling:* Draw the design onto paper/cardboard/cardstock, then carefully cut out the parts that should be printed. The holes are where the color will go.\n\n\tEmphasize:\n\n* *Clear Message:* What big ideas about fairness or equality to they want their print to show?  \n* *Bold and Simple:* Keep the design clear and strong.  \n* *Expressive Color:* Choose colors that help express the feeling of their message (e.g., bright for hope, strong for fairness, contrasting for a problem).\n\n\tCirculate, offering support and encouragement. Ask guiding questions like:\n\n* How will your chosen symbol look clear on your print?  \n* What colors will make your message about \\[fairness/inclusion/a challenge\\] stand out?  \n* Are you thinking about how your print will help others understand Global Goal 10?"
  },
  {
    "title": "Exhibition and Discussion",
    "content": "Explain that they will now create a gallery with the completed prints. Instruct students to carefully place their finished prints on desks, the floor, or tape them to a designated wall space (be aware of wet paint and timing).  \n\tExplain that the class will now go on a gallery walk. They should move quietly around the room, looking at everyone’s prints. Think about the messages of fairness, inclusion, or challenges that each print shows.  \n\tAfter the walk, gather the class. Explain that each student will have a chance to briefly share an observation about one print is that not their own that caught their eye.\n\n* Instruct students to silently choose one classmate’s print that mes them think “Wow, that’s a powerful story about fairness.” or “I love how that looks.”  \n* Then ask for volunteers to point to the print they chose and briefly share:  \n  * What symbol or image did you see in this print?  \n  * What colors or lines made it stand out?  \n  * What big idea about fairness or equality (Global Goal 10\\) did this print make you think about?  \n* If desired, after a student shares about a print, you can invite the original artist of that print to add their intended message or inspiration.  \n* Continue this spotlight and share process for a few students as time allows."
  },
  {
    "title": "Reflection & Summary",
    "content": "Have students reflect on their learning experience through discussion or writing.  \nAsk guiding questions like:\n\n* How did creating prints with bold messages help you understand Global Goal 10: Reduced Inequalities in a new way?  \n* What did you learn about the importance of everyone having fair chances and being treated with respect?  \n* Which prints or ideas from your classmates made you think or feel the most about fairness and inclusion, and why?  \n* What did these activities tell us about how we can all work towards Global Goal 10?  \n* What’s one small action you feel inspired to take this week to promote fairness and equality?"
  }
],
	reflectionQuestions: [
  "How did creating prints with bold messages help you understand Global Goal 10: Reduced Inequalities in a new way?",
  "What did you learn about the importance of everyone having fair chances and being treated with respect?",
  "Which prints or ideas from your classmates made you think or feel the most about fairness and inclusion, and why?",
  "What did these activities tell us about how we can all work towards Global Goal 10?",
  "What’s one small action you feel inspired to take this week to promote fairness and equality?"
],
	assessmentCriteria: [
  "Consistent and enthusiastic involvement in all phases of the lesson, including the warm up, brainstorm, individual print creation, and class discussions.",
  "Understanding of the core concept of reduced inequalities (fairness, equal opportunity, inclusion, respect for all), as demonstrated through the symbolism and message in the print and verbal explanations.",
  "Originality and effectiveness in creating the Equality Print. Look for evidence of connection to Global Goal 10 (does the print clearly represent an idea related to fairness, inclusion, or a challenge/solution?), use of printmaking techniques (are there attempts to use the chosen technique to create a clear, bold image?), and clarity of message (is the message about equality or fairness visually apparent?).",
  "Ability to articulate learning and personal connections during the reflection and summary discussion."
],
};

registerLessonContent(lessonContent);

export default lessonContent;

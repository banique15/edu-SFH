import type { LessonContentData } from '../types';
import { registerLessonContent } from '../index';

const lessonContent: LessonContentData = {
	goalNumber: 9,
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
    "name": "\\[Optional\\] Simple costumes and props to enhance the theatrical experience (scarves, fabric, branches, etc.)",
    "isOptional": false
  },
  {
    "name": "Whiteboard or projector",
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
    "name": "Images or videos related to Global Goal 9 themes",
    "isOptional": false
  },
  {
    "name": "Images related to Ancient Greek theater",
    "isOptional": false
  },
  {
    "name": "[Oracle’s Prophecy Cards](https://docs.google.com/document/d/1C2RKWQLlQLNQ3u7fzCWW8x_281Oz5NYeBGxp80Fi88k/edit?usp=drive_link) (slips of paper with simple scenarios, each describing a challenge or moment of innovation related to building, industry, or a new idea)",
    "isOptional": false
  }
],
	introduction: "Welcome students to an exciting drama/theater class. Explain that they will use their voices, bodies, and imaginations to explore a really important idea: Global Goal 9, Industry, Innovtion, and Infrastructure.  \nClarify that Global Goal 9 is like a huge promise the world has made: a promise to help communities and countries build strong, lasting things (like safe roads, schools, and hospitals) \\- that’s infrastructure. Emphasize it’s also about new ideas and inventions that make life better \\- that’s innovation. And it’s about making sure industries (where things are made) are fair and sustainable, helping everyone grow \\- that’s industry. Basically, it’s about building a better, smarter world for everyone.  \nBegin by showing images or video clips related to Ancient Greek theater.  \nExamples:\n\n* Videos  \n  * [Greek theater for Middle School](https://www.youtube.com/watch?v=rFDT-c6QGpk&list=PLskeB88FVaQje5XHGUlGIs-OzEBkIX_L1&index=1) Playlist  \n* Images  \n  * [Ancient Greek Theater Photos](https://www.google.com/search?sca_esv=5f3e024f075fa025&rlz=1C5CHFA_enUS1124US1124&udm=2&fbs=AIIjpHxU7SXXniUZfeShr2fp4giZ1Y6MJ25_tmWITc7uy4KIemkjk18Cn72Gp24fGkjjh6xLbYFZ8GT1BuPL80sm6IbhzkquKE-P1VhyYiAE4vBxJoSelASgiqmyFvdIJIXiuRLGCnmygIxUy1y622XSbl4YPhBaWmg_S5Tb-WCQHnbc-d3XDvfpnmMQW_C6J3joypcurQdV7wqYp4Y0Y3U864rX2o0f9w&q=ancient+greek+theaters+photos&sa=X&ved=2ahUKEwiH_6mX8eKOAxXplGoFHZC1Mt0QtKgLegQIDxAB&biw=1327&bih=628&dpr=2)\n\nExplain that thousands of years ago, the Ancient Greeks invented theater as we know it today. They performed outdoors in huge ampitheaters, telling powerful stories about heroes, gods, and big challenges.  \nOpen a discussion, asking guiding questions like:\n\n* What do you notice about these images/videos?  \n* Does the theater look big? Outdoors?  \n* What do you think it would have been like to attend a play in ancient Greece?\n\nFacilitate a discussion about the key elements of Ancient Greek Theater, that the class will explore today.\n\n* *The Chorus:* Explain that a “chorus” was a group of performers who moved and spoke together as one voice. They helped tell the story, showed what people in the town were thinking, or gave advice to the actors. Clarify that sometimes they chanted or sang together too.  \n* *Masks and Big Emotions:* Explain that actors in Greek Theater wore big masks that showed clear emotions (like happy, sad, angry, surprised). They used these masks, along with big movements and loud voices, to show their characters’ feelings to everyone in the huge theater.  \n* *Simple Storytelling:* Explain that Greek plays often told clear stories about big problems or important lessons, sometimes with sad endings (tragedies) and sometimes with funny endings (comedies). Clarify that today, the class will tell stories about building, inventing, and growing our world.",
	steps: [
  {
    "title": "Ancient Voices, Modern Ideas: Drama for Global Goal 9",
    "content": "**(30-60 MINUTES)**"
  },
  {
    "title": "Warm Up: Chorus of Actions and Reactions",
    "content": "Explain that the class will warm up by practicing acting and reacting together as a chorus.  \nInstruct students to spread out in the space.  \n*Leader’s Action*\n\n* Perform a simple, clear action that could be part of building or inventing (e.g., swinging a hammer, pushing a heavy lever, sketching an idea, connecting wires, lifting a beam). Instruct students to watch you closely.\n\n*Chorus Reaction*\n\n* After the action, instruct the entire class (acting as the chorus) to respond with one unified vocal sound or simple body gesture that shows a strong reaction to the initial action.  \n  * The students (chorus) may have a few moments to discuss and decide how to react together.\n\n  Example\n\n  * *Initial Action:* Swinging a hammer, heavy motion → *Chorus Reacts:* A unified “thump” (vocal sound) or a unified “whooosh” (vocal sound with body swaying).  \n  * *Initial Action:* Struggling to lift a heavy beam (strained motion) → *Chorus Reacts:* A unified “oh no” (vocal sound) or a unified “ugh” (vocal sound with body slump.  \n  * *Initial Action:* Suddenly getting a brilliant idea (miming lightbulb above head, bright face) → *Chorus Reacts:* A unified “a-ha” (vocal sound) or a unified “pop” (vocal sound with small hop/jump).\n\n*\\[Optional\\] Student Leaders*\n\n* If time allows and class is comfortable, invite a few students to take turns being the leader, creating an action for the chorus to react to.\n\nConclude warm up by affirming the students’ unison and expressive reactions, explaining this collective voice and body will be powerful in the upcoming Greek-style scenes."
  },
  {
    "title": "Oracle’s Prophecy and Build Challenge",
    "content": "Explain that the class will brainstorm ideas for their Greek-style scenes. They will receive a “prophecy” about a future problem, and then brainstorm how to solve it together.  \nDivide students into small groups (5-8 students). Provide each group with one pre-written “Oracle’s Prophecy Card”.  \nExplain that each card has a prophecy (challenge or situation) about building, inventing, or industries. Instruct the groups to read their prophecies and quickly brainstorm:\n\n* *The Problem:* What is the main challenge in the prophecy?  \n* *The Characters:* Who are the important people/things in this story (e.g., a frustrated builder, a new machine, a town leader, the citizens/chorus)?  \n* *The Chorus’s Role:* What kind of comments, questions, or emotional reactions would the chorus (the rest of the group) have to this prophecy? (e.g., Oh the trouble\\! What shall we do? Hope will guide us\\!)  \n* *The Solution/Action:* What’s a simple, creative way to solve this problem related to Global Goal 9?\n\n[Oracle’s Prophecy Card Examples](https://docs.google.com/document/d/1C2RKWQLlQLNQ3u7fzCWW8x_281Oz5NYeBGxp80Fi88k/edit?usp=drive_link)  \nGive groups 5-7 minutes to quickly discuss their prophecy and brainstorm. Circulate, prompting them to think about dramatic actions and chorus reactions."
  },
  {
    "title": "Exploring Greek Theater Techniques",
    "content": "Explain that students will now review how Greek Theater elements help tell their stories.  \n*Masks and Emotions*\n\n* Discuss how Greek masks showed big, clear emotions and characters. Ask questions like:  \n  * If your main character wore a mask, what emotion would it show?  \n  * How would the character’s body show that emotion to a large audience?\n\n*Choral Speaking and Movement*\n\n* Explain that the Chrous (the rest of the group not playing the main character roles in the moment) will speak and move together to comment on the scene.  \n* Have groups practice a simple choral verse for their prophecy’s problem.  \n  * Example: If the prophecy is “The Whispers of the Wobbly Bridge” the chorus might chant “Oh, the bridge\\! It trembles so\\! What shall we do? Where shall we go?”  \n* The chorus can also try a unified movement (e.g. a slow sway, a collective shudder, a strong unified stomp) that matches their chant.  \n* Emphasize how the chorus works as one body and voice to express the feeling of the community.\n\nGuide groups to decide how they will use these elements in their scene."
  },
  {
    "title": "Scene Creation: Our Innovation Tales",
    "content": "Explain that each group will now create a short (1-2 minute) improvised scene based on their “Oracle’s Prophecy”. They will use their main characters, and the chorus will speak and move together to help tell the story. The scene should clearly show the problem from the prophecy and hint at a solution or hope for the future.  \nInstruct groups to:\n\n* *Assign Roles:* Decide who plays main characters and who is part of the chorus, if the group hasn’t already.  \n* *Act it Out:* Show the problem with clear actions and dialogue (even if simple, improvised words).  \n* *Chorus’s Role:* The chorus will speak/chant/move together to comment on the action or show the community’s feelings.  \n* *Simple Staging:* Use chairs or other simple props creatively.  \n* *Show Change/Hope:* Ensure the scene moves from the problem towards a moment of hope or a clear idea for a solution.\n\nCirculate, offering guidance and asking guiding questions like:\n\n* How does your chorus show the town’s worry?  \n* What big movement can your main character make when they get a new idea?  \n* Are you using loud or soft voices to show the problem?"
  },
  {
    "title": "Performances and Discussion",
    "content": "Gather the class for performances. Remind the audience to observe carefully, paying attention to the Greek Theater elements used (chorus, emotions, clear storytelling).  \nHave each group perform.  \nAfter each group performance, facilitate a class discussion, asking guiding questions like:\n\n* What problem related to building, inventing, or industry did you see in their scene?  \n* How did the chorus help tell the story or show the community’s feelings?  \n* What emotions did you see on the characters’ faces or in their movements?  \n* What solution or hope did you see in the scene?  \n* How did using Greek Theater ideas (like the chorus and moving together) make the story powerful?  \n* What did this scene make you think about Global Goal 9?\n\nThe performing group can share artistic choices if desired."
  }
],
	reflectionQuestions: [
  "How did exploring Ancient Greek Theater techniques (like the chorus moving and speaking together, or showing big emotions) help you understand the themes of Global Goal 9?",
  "What did you learn about the power of these ancient theatrical forms to communicate complex ideas about industry, innovation, and infrastructure, even today?",
  "What new insights did you gain about Global Goal 9 and the importance of building strong things, creating new ideas, and helping our world grow?",
  "What do these activities tell us about how we can all work towards Global Goal 9?",
  "What’s one small action you feel inspired to take this week to support new ideas or help build a better world?"
],
	assessmentCriteria: [
  "Consistent and enthusiastic involvement in all phases of the lesson, including the warm up, brainstorm, scene creation, and class discussions.",
  "Understanding of the core concept of industry, innovation, and infrastructure (building, new ideas, fair industry), as demonstrated through the content and verbal explanations within the improvised scenes.",
  "Originality and effectiveness in performing the scenes. Look for evidence of chorus use (does the chorus effectively move and speak together to comment or react?), clear problem/solution (does the scene clearly communicate the challenge and hint at a solution/hope?), emotional conveyance (are emotions shown effectively through big movements, clear voices, and facial expressions, even without masks?), and collaboration (does the group work together to create a cohesive scene?).",
  "Ability to articulate learning and personal connections during the reflection and summary discussion.",
  "Examples*",
  "Images of the [theater of Dionysus in Athens](https://www.google.com/search?sca_esv=3c191617fa4b492a&rlz=1C5CHFA_enUS1124US1124&q=theatre+of+dionysus+in+athens&udm=2&fbs=AEQNm0Aa4sjWe7Rqy32pFwRj0UkWd8nbOJfsBGGB5IQQO6L3J5m2RNdZ7TqBBDB_EAGU4N0Gj7jht9k3vUWXDur_yRu9Ej7TRDiMA6Fsaw_swDyX-TgTNqfp3ABkQru3yYyCMY_GWkwB7ZaAhZAm7_dfpGsmVlyhefv98Uuvgh_HdzRfGDoad7y-3I7qlO4SzEMvBOF6s_2n9LNvRzKdyY2aYRXE5uK_Nw&sa=X&ved=2ahUKEwi_vJ73k-mKAxXzGtAFHS1XBL4QtKgLegQIFhAB&biw=1200&bih=728&dpr=2)",
  "Video clips/summaries/etc. of modern performances of Ancient Greek plays.",
  "[Antigone by Sophocles \\- Animated Play Summary](https://www.youtube.com/watch?v=gnoZmoZbjwg)",
  "[Antigone](https://www.youtube.com/watch?v=Lak0__1Hqwc)",
  "[The Bacchae (Euripides) extract featuring Terence Stamp and Edward Fox](https://www.youtube.com/watch?v=ge4ynDhFVsg)",
  "[Bacchae \\- Ancient Greek Play animatic](https://www.youtube.com/watch?v=TdD8_9G0xq8)"
],
};

registerLessonContent(lessonContent);

export default lessonContent;

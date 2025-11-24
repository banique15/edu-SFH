import type { LessonContentData } from '../types';
import { registerLessonContent } from '../index';

const lessonContent: LessonContentData = {
	goalNumber: 8,
	artForm: 'Creative Writing' as const,
	gradeLevel: '5-8' as const,
	title: "CREATIVE WRITING",
	duration: "",
	materials: [
  {
    "name": "Paper or notebooks",
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
    "name": "\\[Optional\\] Images or videos related to various jobs (e.g., a farmer, a builder, a teacher, a doctor, someone creating new tech, a healthy bustling market, etc.)",
    "isOptional": false
  }
],
	introduction: "Welcome students to an exciting creative writing class. Explain that they will use their words and imagination to explore a really important idea: Global Goal 8, Decent Work and Economic Growth.  \nClarify that Global Goal 8 is like a huge promise the world has made: a promise to make sure everyone, everywhere, has a good job \\- one that is fair, safe, and where they are treated with respect. Emphasize that it’s also about helping communities and countries grow stronger in a way that helps everyone and doesn’t harm our planet. This means jobs that are safe, pay fairly, and help the world be a better place.  \nIntroduce the art of Haiku poetry. \n\n* Explain that Haiku is a special kind of short poem that comes from Japan.  \n* Haiku has three lines, and each line has a specific number of syllables: 5 in the first line, 7 in the second line, and 5 in the third. (5-7-5)  \n* Clarify that even though Haiku is short, it can capture a big idea or a strong feeling, like a snapshot with words.\n\nModel a few Haiku examples related to common experiences or simple observations to illustrate the 5-7-5 structure and the “snapshot” idea.  \nExamples:\n\n* *About Nature (Traditional Inspiration)*  \n  * Green grass softly grows *(5)*  \n    Sun shines on the gentle breeze *(7)*  \n    Warm summer day now *(5)*  \n* *About School (Relatable)*  \n  * Pencils quickly write *(5)*  \n    New ideas fill up my brain *(7)*  \n    Learning feels so good *(5)*  \n* *About Global Goal 8*  \n  * Hard work fills the day *(5)*  \n    Fair pay makes a happy smile *(7)*  \n    Growth for everyone *(5)*  \n  * Safe tools in my hands *(5)*  \n    Building strong things for our town *(7)*  \n    Proud of what we do *(5)*  \n  * Green factories hum *(5)*  \n    Clean jobs health the Earth grow strong *(7)*  \n    Future shines so bright *(5)*\n\nExplain that even short poems like haikus can hold big messages about important topics like jobs and growth.",
	steps: [
  {
    "title": "Haiku for Humans: Tiny Words for Big Work",
    "content": "**(30-60 MINUTES)**"
  },
  {
    "title": "Warm Up: Word Count Challenge",
    "content": "Introduce the Word Count Challenge to warm up for Haiku. In this warm up, students will be given a simple topic, and they will have to describe it using exactly 5 or 7 words.  \nInstruct students to take a piece of scrap paper and a pen/pencil, and that they will have to be ready to quickly write down words for each challenge.  \n*Challenge 1: Describe a Sunny Day*\n\n* Say: In exactly 5 words, describe a sunny day.  \n  * E.g., Bright, warm sun shines down.\n\n*Challenge 2: Describe a Favorite Food*\n\n* Say: In exactly 7 words, describe your favorite food.  \n  * E.g., Cheesy, warm pizza tastes so good.\n\n*Challenge 3: Describe a Sport/Game: In exactly 5 words, describe a sport or game.*\n\n* Say: In exactly 5 words, describe a sport or game.  \n  * E.g., Running fast with friends.\n\nHave a few students share their responses after each challenge.  \nConclude the warm up by affirming the students’ conciseness and creativity, as the skills they just used are key for Haiku."
  },
  {
    "title": "Haiku Idea Shuffle",
    "content": "On the whiteboard/large paper, make two columns.  \n*Column 1: Job Aspects (What parts of a job or growth are you thinking about?)*  \nExamples of ideas for this column\n\n* The worker feels…  \n* The workplace looks…  \n* Our community grows…  \n* The challenge is…  \n* The solution is…  \n* A good job has…  \n* The Earth’s work…  \n* New ideas bloom…\n\n*Column 2: Focus Words (What feelings or ideas about good jobs/growth do you want to show?)*  \nExamples of ideas for this column\n\n* Strong  \n* Fair  \n* Busy  \n* Clean  \n* Problem  \n* Hope  \n* Together  \n* Safe  \n* Proud  \n* Learn  \n* Grow  \n* Help  \n* Kind  \n* New  \n* Bright  \n* Planet  \n* Future  \n* Everyone  \n* Respect\n\nInstruct students (either individually or in pairs) to choose one phrase from the Job Aspects column, and one word from the Focus Words column that they think fit or are interesting together. These are their spark words.  \nNow, have students use those words to brainstorm a short phrase that is either 5 or 7 syllables long (their choice).  \nExamples\n\n* Student chooses: “The worker feels…” and “Proud”.  \n  * *5 Syllables:* Worker feels so proud.  \n  * *7 Syllables:* Proud worker helps our town.  \n* Student chooses: “The challenge is…” and “Problem”.  \n  * *5 Syllables:* Jobs are a problem.  \n  * *7 Syllables:* Unfair problems make jobs hard.  \n* Student chooses: “The Earth’s work…” and “Clean”.  \n  * *5 Syllables:* Earth needs clean jobs now.  \n  * *7 Syllables:* A cleaner Earth works for us.  \n* Student chooses: “New ideas bloom…” and “Bright”.  \n  * *5 Syllables:* Bright ideas bloom fast.  \n  * *7 Syllables:* New bright ideas bloom now.  \n* Student chooses: “The workplace looks…” and “Safe”.  \n  * *5 Syllables:* Workplace looks so safe.  \n  * *7 Syllables:* Safe workplace helps us grow.  \n* Student chooses: “A good job has…” and “Respect”.  \n  * *5 Syllables:* Good job has respect.  \n  * *7 Syllables:* Respect in good job always.\n\nEmphasize that the goal is to generate many short, themed phrases quickly.  \nCirculate, offering guidance and asking guiding questions like:\n\n* How can you make that line exactly 5 syllables?  \n* What Focus Word helps show the feeling of \\[Job Aspect\\]?  \n* Can you think of an action word for your line?"
  },
  {
    "title": "Haiku Creation: Our Decent Work Haikus",
    "content": "Explain that each student will write a Haiku poem about Global Goal 8, using ideas from and inspired by the Haiku Idea Shuffle brainstorm.  \nEncourage students to pick a specific “snapshot” or feeling about jobs and growth that they want to capture. They can write about:\n\n* What a good, fair job looks/feels like.  \n* A challenge at work or with growth.  \n* A solution or hope for better work/growth.  \n* How everyone works together for growth.\n\nRemind students of the 5-7-5 structure. Encourage them to:\n\n* *Use vivid words:* Make the reader see or feel the Haiku.  \n* *Be concise:* Every word counts.  \n* *Count syllables carefully:* Tap your chin or count on your fingers for each syllable.\n\nProvide specific writing prompts if needed. Examples:\n\n* Write a Haiku about…  \n  * a farmer working safely in the sun.  \n  * a challenge in a factory, or a solution.  \n  * a child who can finally go to school instead of work.  \n  * new ideas making jobs better.  \n  * how everyone helps a business grow.  \n  * a busy, fair marketplace.  \n  * a job that helps the environment.  \n  * how fair pay makes a difference.\n\nCirculate, offering support and guidance as the class writes. Ask guiding questions like:\n\n* Are you counting your syllables?  \n* How can you make this feeling stronger with fewer words?  \n* What Job Action can you describe in 7 syllables?"
  },
  {
    "title": "Gallery Walk: Haiku Showcase",
    "content": "Have students post their Haiku poems around the classroom, on the walls or on tables/desks.  \nExplain the purpose of the gallery walk: to appreciate each other’s concise writing and gain different perspectives on Global Goal 8\\.   \nInstruct students to quietly walk around, reading the Haikus.  \nInstruct students to pay attention to:\n\n* Which Haiku captures a strong picture or feeling about jobs/growth?  \n* Does the Haiku follow the 5-7-5 rhythm? Can you hear it when you read it quietly?  \n* What message about Global Goal 8 does the Haiku give you?  \n* Does the Haiku make you think about a job you know, or a new type of job?  \n* What kind of person do you imagine wrote this Haiku? What feelings do they have about work?  \n* How does such a short poem make you think about a big idea?\n\nInvite volunteers to share one Haiku they saw (not their own) that resonated with them. Have the student read that Haiku aloud and explain why it stood out or what message they interpreted.  \nFacilitate a class discussion, asking guiding questions like:\n\n* What common ideas or feelings about decent work and economic growth did you find in the Haiku?  \n* Did any Haiku surprise you or make you think about a job or a problem in a new way?  \n* Hoe did using such short poems make the message about Global Goal 8 powerful?  \n* What did you learn about putting big ideas into small packages?  \n* How did the Haikus show both the challenges and the hopes for jobs and growth?  \n* Were there any Haikus that showed both a problem and solution?"
  },
  {
    "title": "Cool Down: Collective Haiku Reflection",
    "content": "Explain that the students will write one last Haiku (or two depending on class size) about Global Goal 8, this time as a class.  \nThe class will go around the room (or circle) and each student will add one word to build the poem’s lines. The poem can be written on the board/large paper while it is being created so the class can remember what they just made together.  \nEmphasize that listening and counting syllables is very important.  \n*Line 1 (5 syllables):* Start by saying the first word (e.g. “Good”), or let a student start. Then go around the class, each student adding one word until the line has exactly 5 syllables. Count the syllables aloud if helpful.\n\n* *Example: Starter Word:* Good → *Student 1:* jobs → *Student 2:* help → *Student 3:* us → *Student 4: grow.* \n\n*Line 2 (7 syllables):* Then move to the next student in sequence. They will add one word to start the second line, and the class continues adding one word each, building to 7 syllables.\n\n* *Example: Student 5:* Fair → *Student 6:* work → *Student 7:* makes → *Student 8:* people → *Student 9:* proud —\\> *Student 10:* each → *Student 11:* day.\n\n*Line 3: (5 syllables):* Move to the next student. They add one word to start the third line, and the class continues adding words to reach 5 syllables, completing the Haiku.\n\n* *Example: Student 12:* earth → *Student 13:* shines → *Student 14:* so → *Student 15:* bright.\n\nRead the completed class Haiku aloud. Create a second one if needed and time allows.  \nExample:\n\n* Good jobs help us grow  \n  Fair work makes people proud each day  \n  Earth shines so bright."
  },
  {
    "title": "Reflection & Summary",
    "content": "Have students reflect on their learning experience through discussion or writing.  \nAsk guiding questions like:\n\n* How did writing short Haiku poems help you understand Global Goal 8: Decent Work and Economic Growth in a new way?  \n* What did you learn about how jobs and economies can be complex, and how Haiku can capture big ideas in small ways?  \n* Which Haikus or ideas from your classmates made you think or feel the most about jobs and growth, and why?  \n* What do these activities tell us about how we can all work towards Global Goal 8?  \n* What’s one small action you feel inspired to take this week to be fair in your own work (like homework or chores or support good work in your community?"
  }
],
	reflectionQuestions: [
  "How did writing short Haiku poems help you understand Global Goal 8: Decent Work and Economic Growth in a new way?",
  "What did you learn about how jobs and economies can be complex, and how Haiku can capture big ideas in small ways?",
  "Which Haikus or ideas from your classmates made you think or feel the most about jobs and growth, and why?",
  "What do these activities tell us about how we can all work towards Global Goal 8?",
  "What’s one small action you feel inspired to take this week to be fair in your own work (like homework or chores or support good work in your community?"
],
	assessmentCriteria: [
  "Consistent and enthusiastic involvement in all phases of the lesson, including the warm up, brainstorm, individual Haiku writing, and class discussions.",
  "Understanding of the core concept of decent work and economic growth (fair jobs, safe workplaces, sustainable growth), as demonstrated through the thematic content and concise imagery in the Haiku poems and verbal explanations.",
  "Originality and effectiveness in crafting Haiku poems. Look for evidence of adherence to structure (does the Haiku follow the 5-7-5 syllable count accurately?), connection to Global Goal 8 (does the Haiku clearly capture an idea related to decent work or economic growth?), and conciceness and imagery (does the Haiku use precise words to create a vivid “snapshot” or feeling?).",
  "Ability to articulate learning and personal connections during the reflection and summary discussion."
],
};

registerLessonContent(lessonContent);

export default lessonContent;

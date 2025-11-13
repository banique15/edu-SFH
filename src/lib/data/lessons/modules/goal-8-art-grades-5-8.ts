import type { LessonContentData } from '../types';
import { registerLessonContent } from '../index';

const lessonContent: LessonContentData = {
	goalNumber: 8,
	artForm: 'Art' as const,
	gradeLevel: '5-8' as const,
	title: "ART",
	duration: "",
	materials: [
  {
    "name": "White drawing paper: Enough for each student to have at least one large sheet (e.g., 9x12 or 11x14 inches)",
    "isOptional": false
  },
  {
    "name": "Rulers",
    "isOptional": false
  },
  {
    "name": "Pencils",
    "isOptional": false
  },
  {
    "name": "Fine-tipped black markers or pens",
    "isOptional": false
  },
  {
    "name": "Colored pencils or markers",
    "isOptional": false
  },
  {
    "name": "Projector or whiteboard to display images/examples",
    "isOptional": false
  },
  {
    "name": "“Job Illusion” cards: Prepare small slips of paper or index cards (about 20-30 total) with concepts related to jobs, work, and the economy. One set per group required.",
    "isOptional": false
  },
  {
    "name": "Large display surface: Bulletin board, large poster board, or wall where the class’s individual art pieces can be assembled into one large, collaborative installation.",
    "isOptional": false
  },
  {
    "name": "Tape",
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
  }
],
	introduction: "Welcome students to an exciting art class. Explain that they will use their imagination and creativity to explore a really important idea: Global Goal 8, Decent Work and Economic Growth.  \nClarify that Global Goal 8 is like a huge promise the world has made: a promise to make sure everyone, everywhere, has a good job \\- one that is fair, safe, and where they are treated with respect. Emphasize that it’s also about helping communities and countries grow stronger in a way that helps everyone and doesn’t harm our planet. Explain that this means opportunities for learning, creating new businesses, and making sure everyone can work and earn a fair living.  \nIntroduce the concept of optical illusions and Op Art.\n\n* Explain that optical illusions are tricky pictures that play with your eyes, making you see things that aren’t really there, like lines that seem to wiggle or shapes that pop out.  \n* Clarify that Op Art is a style of art that uses simple lines, shapes, and colors to create these amazing tricks, making the art seem to move, bulge, or shimmer.   \n* Tell students that Op Art can help us think about things we don’t always see at first glance, just like some important ideas about jobs and how our world’s economy grows.\n\nShow selected visual aids of Op Art pieces. Examples:\n\n* [*Zebras*](https://www.wikiart.org/en/victor-vasarely/zebra-1937) by Victor Vasarely: This iconic painting uses alternating curved stripes to create the illusion of two zebras facing one another. They might seem to be moving or almost vibrating, showing how simple lines can create a sense of 3D form and motion.  \n* [*Movement in Squares*](https://bridget-riley.publications.britishart.yale.edu/catalogue/1/) by Bridget Riley: This piece uses many squares that gradually change in shape, creating an illusion that the entire image is waving or undulating, even though it is perfectly flat. It shows how small changes in repeated patterns can create a powerful sense of movement.  \n* [Works](https://www.google.com/search?sca_esv=1e37bafbf7b08436&rlz=1C5CHFA_enUS1124US1124&sxsrf=AE3TifMctzp1TKsyNFVB7ieeM5BtOD3QUw:1752774522776&q=Marina+Apollonio&udm=2&fbs=AIIjpHxU7SXXniUZfeShr2fp4giZ1Y6MJ25_tmWITc7uy4KIeiAkWG4OlBE2zyCTMjPbGmMU8EWskMk2JSE__efdUJ3x-dd8PyEzi5Y9BtPQcYyUv-qqGBKcZRAt6t3qPZ3-iSZ6GtBRrUomyC2rUgS4TDygQfIaiWCtBi0gw2eDDygE9ZsO235rUXAUX4XMOSF0AZ0oNb07blcuzshZNivp14ZK7ZppxA&sa=X&ved=2ahUKEwjnv7T2ucSOAxUATDABHXoXJHkQtKgLKAF6BAgZEAE&biw=1327&bih=728&dpr=2) by Marina Apollonio: Apollonio’s artwork often uses repeating circles and lines in high contrast (like black and white) to create a strong illusion of a spinning spiral or tunnel that pulls the eye into the center. It gives the feeling of a dizzying movement or deep space.\n\nFacilitate a discussion about the art. Ask guiding questions like:\n\n* What tricky things do your eyes see in this artwork? Does it seem to wiggle, pop out, or shimmer?  \n* What shapes and lines do you notice? Are they straight, curvy, repeating?  \n* What colors did the artist use? Are they bright, dark, or contrasting?  \n* How does this art make you feel? Does it feel energetic, dizzy, or calm?  \n* How do you think Op Art, with its tricks and hidden patterns, could help us think about things we don’t always see about jobs or how money moves in the world?",
	steps: [
  {
    "title": "Optical Wonders: Art for Great Jobs & A Growing World",
    "content": "**(30-60 MINUTES)**"
  },
  {
    "title": "Warm Up: Seeing the Trick",
    "content": "Explain that the class will look at some simple optical illusions to warm up their eyes and brains for the Op Art they will create. Instruct them to observe the images carefully.  \n*Illusion Obervation:* Display various examples of simple optical illusions.  \nExamples:\n\n* [Moving Circles](https://www.google.com/search?q=moving+optical+illusion+circles+static+image&rlz=1C5CHFA_enUS1124US1124&oq=moving+optical+illusion+circles+static+image&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQIRigATIHCAIQIRigATIHCAMQIRirAtIBBzI2OGowajmoAgCwAgE&sourceid=chrome&ie=UTF-8#vhid=SiF2TcIcAaz-3M&vssid=_HC15aPbwCuncwN4P7dCj2A0_51): Static images that appear to move.  \n* [Wavy Lines](https://www.google.com/search?sca_esv=1e37bafbf7b08436&rlz=1C5CHFA_enUS1124US1124&sxsrf=AE3TifOQOqYO5qenxh7BURnYTmgt5au_nA:1752771912633&q=wavy+lines+optical+illusion+static&udm=2&fbs=AIIjpHxU7SXXniUZfeShr2fp4giZ1Y6MJ25_tmWITc7uy4KIeoJTKjrFjVxydQWqI2NcOhZVmrJB8DQUK5IzxA2fZbQF4YL5sNSRJGgx0e9Z9AxEx1bmPbSY3ROQyoKhw9UuuwMa6u73fOSUeNMl3nUidiZzLnwz6Z8MHmWi4YdNSL-h_t8V7LARbEt0dOcH9HsmIXwiB-7_vX2wqahbyWxd3rXB8FJu8Q&sa=X&ved=2ahUKEwi3-OWZsMSOAxXjHNAFHewbI5EQtKgLKAF6BAgXEAE&biw=1327&bih=728&dpr=2): Lines that appear bent or wavy due to other lines/patterns around them.  \n* [Cube/3D Boxes](https://www.google.com/search?sca_esv=1e37bafbf7b08436&rlz=1C5CHFA_enUS1124US1124&sxsrf=AE3TifMjbX95lEEpRlgwdICwfAUaasAf8w:1752771976749&q=cube+optical+illusion&udm=2&fbs=AIIjpHxU7SXXniUZfeShr2fp4giZ1Y6MJ25_tmWITc7uy4KIeioyp3OhN11EY0n5qfq-zEMZldv_eRjZ2XLYc5GnVnME7glWodDcaQwvGYJtospyF4GO5MC0p7Um53mJ2FnRmWzLfvs8MM15EI7IZ9K-WzjfyMSonUBkTYoaEYz_aoCWKu9TQ8dof5M0D_kBJ6KHVqAfl1pdvC4fEdvCuKBOfnDqAXG81w&sa=X&ved=2ahUKEwjFpq-4sMSOAxWv3ckDHdUoJ8gQtKgLKAF6BAgQEAE&biw=1327&bih=728&dpr=2): Flat drawings that look like they pop out or recede due to shading and line placement.\n\n*Discussion:* After each illusion, ask guiding questions like:\n\n* What do you think you see happening in this picture? Does it look like it’s moving, wiggling, or popping out?  \n* How do you think the artist tricked your eyes? What lines or colors might be making the illusion?  \n* Does focusing on it make your eyes feel different?  \n* How can these kinds of eye tricks be used to show a message or feeling?\n\nConclude the warm up by affirming their visual exploration and curiosity, explaining that these simple tricks are the start of Op Art and can be used to make powerful art about big ideas."
  },
  {
    "title": "Job Illusion Card Sort",
    "content": "Divide students into small groups (3-4 students). Provide each group with one set (20-30 cards) of the Job Illusion Cards.  \n[Examples of Job Illusion Cards](https://drive.google.com/drive/folders/155jSokhlcxw9xH7GqR3SjfXu1i8-_41L?usp=drive_link)  \nInstruct groups to spread out all their cards. Then explain two sorting categories:\n\n* *Growth and Good Work:* Cards that describe positive aspects of jobs, fairness, safety, and healthy growth.  \n* *Challenges and Hidden Problems:* Cards that describe unfairness, unsafe jobs, or problems with growth.\n\nInstruct students to sort their cards into these two categories/piles. Encourage groups to discuss why each card fits into a particular category.  \nCirculate, offering guidance and asking guiding questions like:\n\n* Why did you put this card in Challenges?  \n* What card in Growth and Good Work makes you feel proud?  \n* What cards have stood out to you so far?\n\nAfter sorting, instruct each student individually to choose one card (can be from either pile/category) that they find particularly interesting or important to use for their art project."
  },
  {
    "title": "My Optical Message",
    "content": "Explain that each student will now create their own Op Art piece using one of the provided templates, inspired by the idea on their chosen Job Illusion Card. (Note: Depending on skill level, students may draw their own Op Art from scratch, using the templates as prompts or not at all. Adjust for your class’s comfortability).  \nDisplay the Op Art templates and briefly explain each one (can use as many or as few templates as desired).  \n[Examples of Op Art Templates](https://drive.google.com/drive/folders/1vIGr6PNrWNVODhdajz0EUEODLGZh96nP?usp=drive_link)  \nInstruct students to choose one template to work with. They will draw their chosen art onto their large drawing paper using rulers and pencils first. Have students think about their chosen idea from the Job Illusion card and which design connects to this idea, and why.  \nAfter the pencil lines are finished, instruct students to trace those lines with a black marker to make them crisp, which is crucial for the optical effect.  \nFinally, instruct students to add contrasting colors to enhance the optical illusion and connect it to the idea on their chosen Job Illusion Card.  \nCirculate among students, offering guidance and encouragement. Ask guiding questions like:\n\n* How are you using your art to make your idea \\[e.g., fair pay\\] wiggle, or pop out in your drawing?  \n* What colors make your optical illusion stronger and also show the feeling of your card/idea?  \n* Are you thinking about what message someone will get just by looking at the optical effect you’re creating?"
  },
  {
    "title": "Gallery Walk and Explanation",
    "content": "Explain to the class they will now create a gallery with all the completed artworks. Instruct students to carefully place their finished artwork on desks, on the floor, or tape them to a designated wall space.  \nExplain: We will now go on a silent gallery walk. Move slowly and quietly around the room, looking at everyone’s amazing artwork. Look at the optical tricks. What do you think each piece is trying to tell you about jobs or growth?  \nEncourage students to pay attention to:\n\n* What optical illusion do you see happening in the artwork? Does it seem to move, pop out, or shimmer?  \n* What colors or patterns stand out? What do they make you feel?  \n* Based on the illusion and colors, what big idea about jobs or growth do you think this artwork is trying to show?\n\nEmphasize that students should come up with their own interpretations.  \nAfter the silent walk, gather the class together. Ask for a few volunteers to share one artwork they saw (not their own) and explain what optical illusion they saw and what message they interpreted from it about jobs or growth.  \nAfter they share, invite the artist to briefly reveal the specific Job Illusion Card idea they chose and how their art represents it."
  },
  {
    "title": "Reflection & Summary",
    "content": "Have students reflect on their learning experience through discussion or writing.  \nAsk guiding questions like:\n\n* How did creating Op Art illusions help you understand Global Goal 8: Decent Work and Economic Growth in a new way?  \n* What did you learn about how jobs and economies can be complex, sometimes having “hidden” sides that Op Art helped us see?  \n* Which artworks or ideas from your classmates made you think or feel the most about jobs and growth, and why?  \n* What does our activity tell us about how we can all work towards Global Goal 8?  \n* What’s one small action you feel inspired to take this week to be fair in your own work (like homework or chores) or support good work in your community?"
  }
],
	reflectionQuestions: [
  "How did creating Op Art illusions help you understand Global Goal 8: Decent Work and Economic Growth in a new way?",
  "What did you learn about how jobs and economies can be complex, sometimes having “hidden” sides that Op Art helped us see?",
  "Which artworks or ideas from your classmates made you think or feel the most about jobs and growth, and why?",
  "What does our activity tell us about how we can all work towards Global Goal 8?",
  "What’s one small action you feel inspired to take this week to be fair in your own work (like homework or chores) or support good work in your community?"
],
	assessmentCriteria: [
  "Consistent and enthusiastic involvement in all phases of the lesson, including the warm up, brainstorm, individual art creation, and class discussions.",
  "Understanding of the core concept of decent work and economic growth (fair jobs, safe workplaces, sustainable growth), as demonstrated through the symbolism and message in the individual Op Art piece and verbal explanations.",
  "Originality and effort in creating the art piece. Look for evidence of connection to Global Goal 8 (does the artwork clearly represent an idea related to work or growth (challenge or solution) from the chosen card?), and use of Op Art technique (are there attempts to use lines, shapes, and colors from the chosen template to create an optical illusion that conveys the idea?).",
  "Ability to articulate learning and personal connections during the reflection and summary discussion."
],
};

registerLessonContent(lessonContent);

export default lessonContent;

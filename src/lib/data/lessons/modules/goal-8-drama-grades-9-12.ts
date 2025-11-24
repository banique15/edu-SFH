import type { LessonContentData } from '../types';
import { registerLessonContent } from '../index';

const lessonContent: LessonContentData = {
	goalNumber: 8,
	artForm: 'Drama' as const,
	gradeLevel: '9-12' as const,
	title: "DRAMA",
	duration: "",
	materials: [
  {
    "name": "Classroom space suitable for acting and movement",
    "isOptional": false
  },
  {
    "name": "Whiteboard or projector",
    "isOptional": false
  },
  {
    "name": "Markers or pens",
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
    "name": "Costumes and props (optional, but encouraged for enhanced immersion)",
    "isOptional": false
  },
  {
    "name": "Scripts or scenarios based on SDG 8 targets (see examples below)",
    "isOptional": false
  },
  {
    "name": "Character profiles and background information for role-playing",
    "isOptional": false
  }
],
	introduction: "Setting the Stage: Begin by asking students to share their dream jobs or career aspirations. Discuss the importance of work in their lives and in society.  \nIntroducing SDG 8: Introduce the UN Sustainable Development Goals and focus on Goal 8: Decent Work and Economic Growth. Briefly explain the core idea of ensuring fair and sustainable working conditions for everyone while promoting global economic progress.",
	steps: [
  {
    "title": "Staging Change: Exploring Decent Work and Economic Growth Through Drama",
    "content": "**(30-60 MINUTES)**"
  },
  {
    "title": "Exploring Drama Techniques",
    "content": "Warm-up Activities: Engage students in warm-up activities like vocal exercises, improvisation games, and physical warm-ups to build confidence and encourage creative expression.  \n\tIntroducing Key Concepts: Discuss key drama techniques like role-playing, character development, improvisation, and creating believable scenes. Explain how these techniques can be used to explore complex issues and perspectives."
  },
  {
    "title": "Drama and Global Goal 8",
    "content": "Target Focus: Divide students into smaller groups. Assign each group a specific target from SDG 8 (or allow them to choose one that interests them). Provide each group with the SDG 8 handout and any relevant character profiles or background information.  \n\tScenario Development: Provide each group with a script or scenario based on their target.  \n\t[Scripts](https://docs.google.com/document/d/1khvolqMm3Hr_Ko9vSFwiVxMKhps5WKolFsfZ9KjvSNA/edit?usp=sharing)  \n\tRehearsing and Performing: Allow time for groups to rehearse their scenes, develop their characters, and plan their performances. Encourage them to use costumes, props, and creative staging to enhance their presentations.  \n\tPerformances and Discussion: Have each group perform their scene for the class. After each performance, facilitate a discussion about the issues raised in the scene, the characters' perspectives, and potential solutions or actions."
  },
  {
    "title": "Reflection & Summary",
    "content": "Have students reflect on their learning experience through discussion or writing.  \nAsk guiding questions like:\n\n* How did stepping into different roles and performing a scene about Global Goal 8 help you understand the complexities of decent work and economic growth on a deeper level?  \n* What emotions did you connect with while portraying your character’s experiences, and how did those emotions relate to the challenges or opportunities of work?  \n* Did the act of physically embodying a situation related to fair wages, child labor, or safe conditions change your perspective on these issues?  \n* What did you learn about the unspoken struggles or triumphs related to work that can be conveyed through dramatic expression?  \n* How did the interaction with your scene partners (or the audience in a forum theater setting) deepen your understanding of diverse perspectives on work?  \n* What did you learn about the power of storytelling and theatrical representation in raising awareness about social issues like decent work?  \n* How can drama highlight the human impact of ecnomic systems or policy decisions?  \n* What role did creativity and collaboration play in developing and performing your scene, and how does that relate to addressing global challenges?  \n* Did the themes explored in your scene, or in others’ scenes, resonate with any of your own observations or experiences related to work, fairness, or economic opportunity?  \n* What key messages about decent work and economic growth do you think the scenes conveyed most powerfully?  \n* How has this lesson influenced your thinking about your own future work or how you might contribute to a more just and equitable economy?  \n* How can drama continue to be a tool for you, personally, to engage with and advocate for social change?"
  },
  {
    "title": "Harmonizing for Humanity",
    "content": "**(30-60 MINUTES)**"
  },
  {
    "title": "Exploring Musical Concepts",
    "content": "Have each student choose an instrument or assign them an instrument available.  \n\t*Assigned Instruments:* To ensure a variety of instruments and a balanced ensemble, assign instruments to students based on their existing skills, preferences, or the needs of the class.  \n\t*Student Choice:* If you have enough instruments and flexibility, allow students to choose an instrument they are interested in learning or already have some experience with.  \n\t*Combination:* You can use a combination of assignment and choice, allowing students to express preferences while ensuring a balanced ensemble.  \n*Rhythm and Dynamics*  \nExplain how rhythm and dynamics in music can represent different aspects of work.  \n\t*Example:* Fast tempo and strong dynamics can represent the energy and intensity of physical labor, while a slower tempo and softer dynamics might represent more contemplative or creative work.  \nHave students experiment with different rhythms and dynamics on their instruments, creating musical representations of various types of work.  \n\tThis can be connected to Target 8.2 (economic productivity) by discussing how different industries and sectors contribute to the overall economy.  \n*Harmony and Melody*  \nDiscuss how harmony and melody in music can symbolize collaboration and the interconnectedness of different parts working together towards a common goal.  \n\t*Example:* Have students play simple chords or melodies together, emphasizing the importance of each part contributing to the overall sound,.  \n\tThis can be connected to Target 8.5 (full and productive employment) by discussing the importance of diverse skills and talents contributing to a thriving workforce.  \n*Form and Structure*  \nDiscuss how musical forms and structures can represent different systems and processes in the world of work.  \n\t*Example:* Compare a repetitive work song to a complex symphony, drawing parallels to different types of jobs and industries.  \n\tThis can be connected to Target 8.3 (promoting entrepreneurship) by discussing how businesses and organizations need structure and organization to function effectively."
  },
  {
    "title": "Music and Global Goal 8",
    "content": "Song Selection: Choose songs that connect to specific Global Goal 8 Targets.  \n*Examples:*\n\n*"
  },
  {
    "title": "Target 8.1",
    "content": "*(Sustain per capital economic growth):* “Imagine” by John Lennon, a vision of a world without poverty and inequality. “The Climb” by Miley Cyrus, overcoming challenges and striving for progress. “9 to 5” by Dolly Parton, the daily grind and aspirations for a better life.  \n*"
  },
  {
    "title": "Target 8.2",
    "content": "*(Achieve higher levels of economic productivity):* “We Built This City” by Starship, celebrating innovation and human ingenuity. “Work Song” by Hozier, the value of hard work and dedication. “Stronger” by Kelly Clarkson, resilience and overcoming obstacles in the face of adversity.  \n*"
  },
  {
    "title": "Target 8.3",
    "content": "*(Promote development-oriented policies):* “Opportunity” by Pete Seeger, about the importance of creating opportunities for all. “The Greatest” by Sia, celebrating individuality and achieving your dreams.  \n*"
  },
  {
    "title": "Target 8.4",
    "content": "*(Improve global resource efficiency):* “Big Yellow Taxi” by Joni Mitchell, an environmental anthem about the consequences of unsustainble practices. “Earth Song” by Michael Jackson, a plea for environmental protection and sustainability. “Mercy Mercy Me (The Ecology)” by Marvin Gaye, lamenting the destruction of the environment.  \n*"
  },
  {
    "title": "Target 8.5",
    "content": "*(Achieve full and productive employment):* “Working Class Hero” by John Lennon, a critique of social inequality and the struggles of working people. “Respect” by Aretha Franklin, demanding equality and respect in the workplace. “Fight Song” by Rachel Platten, overcoming challenges and fighting for your dreams. “Workin in a Coal Mine” by DEVO.  \n*"
  },
  {
    "title": "Target 8.6",
    "content": "*(Substantially reduce youth unemployment):* “The Times They Are a-Changin’” by Bob Dylan, a call for change and empowerment for young people. “Where is the Love?” by Black Eyed Peas, a call for unity and understanding ina  world facing challenges.  \n*"
  },
  {
    "title": "Target 8.7",
    "content": "*(Eradicate forced labor and child labor):* “Redemption Song” by Bob Marley, a song about freedom and overcoming oppression. “Free Fallin’” by Tom Petty, a longing for freedom and escape from difficult circumstances.  \n*"
  },
  {
    "title": "Target 8.8",
    "content": "*(Protect labor rights):* “Bread and Roses” by Mimi Farina, a labor anthem about the fight for fair wages and decent working conditions. “Union Maid” by Woody Guthrie, a classic labor anthem about the power of collective action. “Seven Nation Army” by The White Stripes, an anthem of resistance and fighting for what you believe in.  \n*"
  },
  {
    "title": "Target 8.9",
    "content": "*(Promote sustainable tourism):* “Island in the Sun” by Harry Belafonte, celebrating the beauty and culture of different places while promoting respect for local communities. “Kokomo” by the Beach Boys, celebrating the beauty of different cultures and destinations.  \n*"
  },
  {
    "title": "Target 8.10",
    "content": "*(Strengthen domestic financial institutions):* “Money (That’s What I Want)” by Barrett Strong, a song that can spark discussion about the role of money in society and the importance of financial access. “Material Girl” by Madonna, a commentary on consumerism and the desire for material possessions.  \n*"
  },
  {
    "title": "Target 8.a",
    "content": "*(Increase Aid for Trade support):* “We Are the World” by USA for Africa, a song about global solidarity and helping those in need. “Heal the World” by Michael Jackson, a call for global unity and compassion. “One Love” by Bob Marley, a message of peace, unity, and global harmony.  \n*"
  },
  {
    "title": "Target 8.b",
    "content": "*(Develop a global strategy for youth employment):* “Get Up, Stand Up” by Bob Marley, a call to action for young people to stand up for their rights and create a better future.\n\nChoose a song or song(s) for the class to analyze. Listen to the chosen song(s) once or twice so the class understand the lyrics and music of the song(s).  \nGuide students to analyze not just the lyrics but also the musical elements of the song and how they contribute to the overall message.  \nDiscuss the lyrics of the chosen song(s) focusing on how they connect to Global Goal 8, the target(s), and the challenges of achieving decent work and economic growth.  \nAnalyze the musical elements of the song(s) (melody, harmony, rhythm, dynamics) and how they contribute to the overall message and emotional impact.  \n*Guiding Questions:*  \n\tWhat emotions or thoughts did this song evoke in you?  \n\tHow does the music enhance the message of the lyrics?  \n\tWhat specific lines or musical elements stood out to you?  \nHow does this song connect to your own experiences or observations about the world of work?  \nHow does the melody evoke certain emotions or create a particular mood?  \nHoe does the harmony support the melody and create a sense of unity or dissonance?  \nHow do the dynamics (loudness and softness) contribute to the emotional impact of the song?  \nWhat intruments are used, and how do they contribute to the overall sound and message?  \nCan you relate to any of the situations or emotions described in the song?  \nHave you ever experienced or witnessed any of the issues raised in the song?  \nHow does this song make you feel about the future of work?  \nDoes this song offer any solutions or suggestions for addressing the challenges related to decent work and economic growth?  \nWhat are the different perspectives presented in the song?  \nDo you agree with the message of the song? Why or why not?"
  }
],
	reflectionQuestions: [
  "How did stepping into different roles and performing a scene about Global Goal 8 help you understand the complexities of decent work and economic growth on a deeper level?",
  "What emotions did you connect with while portraying your character’s experiences, and how did those emotions relate to the challenges or opportunities of work?",
  "Did the act of physically embodying a situation related to fair wages, child labor, or safe conditions change your perspective on these issues?",
  "What did you learn about the unspoken struggles or triumphs related to work that can be conveyed through dramatic expression?",
  "How did the interaction with your scene partners (or the audience in a forum theater setting) deepen your understanding of diverse perspectives on work?",
  "What did you learn about the power of storytelling and theatrical representation in raising awareness about social issues like decent work?",
  "How can drama highlight the human impact of ecnomic systems or policy decisions?",
  "What role did creativity and collaboration play in developing and performing your scene, and how does that relate to addressing global challenges?",
  "Did the themes explored in your scene, or in others’ scenes, resonate with any of your own observations or experiences related to work, fairness, or economic opportunity?",
  "What key messages about decent work and economic growth do you think the scenes conveyed most powerfully?",
  "How has this lesson influenced your thinking about your own future work or how you might contribute to a more just and equitable economy?",
  "How can drama continue to be a tool for you, personally, to engage with and advocate for social change?"
],
	assessmentCriteria: [
  "Consistent and enthusiastic involvement in all phases of the lesson, including the warm-up activities, scenario development, scene rehearsals, performances, and class discussions.",
  "Comprehension of Global Goal 8 and its targets and core concepts (e.g., fair wages, safe working conditions, ending child labor). This will be evidenced through the relevance and accuracy of the scenarios and verbal explanations.",
  "Originality and effectiveness in utilizing key drama techniques such as role-playing, character development (vocal and physical), improvisation, and basic staging to explore and communicate themes related to decent work.",
  "How clearly and powerfully the improvised or rehearsed scenes communicated the intended message about Global Goal 8 and any chosen themes/concepts. Did the performance successfully evoke thought or empathy in the audience?",
  "How well students stepped into the shoes of different characters affected by work-related issues (e.g., a struggling farmer, a factory worker, a policy maker), conveying their motications and challenges authentically.",
  "Ability to work effectively and respectfully within the small groups, contributing ideas, sharing responsibilities, and collaborating cohesively during scene development and performance.",
  "Creativity, realism, and potential impact of the solutions or actions presented within the scenes or discussed during the post-performance analysis.",
  "Nuance and insight demonstrated in reflections, particularly concerning the human experience of work and economic justice, and the role of drama in addressing social issues."
],
};

registerLessonContent(lessonContent);

export default lessonContent;

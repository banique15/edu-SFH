import type { LessonContentData } from '../types';
import { registerLessonContent } from '../index';

const lessonContent: LessonContentData = {
	goalNumber: 9,
	artForm: 'Music' as const,
	gradeLevel: '9-12' as const,
	title: "MUSIC",
	duration: "",
	materials: [
  {
    "name": "Music classroom or a space with ample room for movement and sound exploration",
    "isOptional": false
  },
  {
    "name": "Access to a variety of instruments (percussion, keyboards, string instruments, etc.)",
    "isOptional": false
  },
  {
    "name": "Consider using readily available classroom objects as instruments (e.g., desks, charis, books, pencils, etc.) to create unique sounds",
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
	introduction: "Begin by engaging students in a sound exploration activity. Have students close their eyes and listen to a variety of sounds (e.g., nature sounds, city sounds, machine sounds, musical excerpts).  \n\tExamples\n\n* [Forest Stream Sounds, Gentle Bird Song, Relaxing Nature Sounds](https://www.youtube.com/watch?v=1wn-OSiNVjE)  \n* [Night Walk in New York Times Square](https://www.youtube.com/watch?v=Dq6wyZyUq1k)  \n* [Sounds of a Factory](https://www.youtube.com/watch?v=VjD2k9A-zRs)  \n* [Beethoven \\- Symphony No. 5 (Proms 2012\\)](https://www.youtube.com/watch?v=jv2WJMVPQi8)\n\n\tGuiding Questions\n\n* What sounds did you hear?  \n* How did these sounds make you feel?  \n* What images or ideas came to mind as you listened?\n\nFacilitate a discussion about the connections between music and the themes of industry, innovation, and infrastructure.  \n\tKey Points\n\n* Music can be used to express the rhythms and sounds of industry and technology.  \n* Music can evoke emotions and ideas related to progress, innovation, and sustainability.  \n* Music can inspire action and promote collaboration towards achieving Global Goal 9\\.\n\n\tGuiding Questions\n\n* How can music be used to represent the sounds of construction, manufacturing, or technology?  \n* How can music convey the emotions of hope, progress, or concern related to sustainable development?  \n* What are some examples of songs that inspire you to take action or make a difference in the world?\n\nIntroduce/re-introduce Global Goal 9: Industry, Innovation, and Infrastructure. Explain the core idea of building resilient infrastructure, promoting inclusive and sustainable industrialization, and fostering innovation.  \nBriefly introduce the different targets within Global Goal 9, highlighting their interconnectedness and importance.  \n\tGuiding Questions\n\n* What are some of the challenges in achieving these targets?  \n* How might these targets affect different people and communities around the world?",
	steps: [
  {
    "title": "Sounds from a Smarter World: Composing a World of Innovation",
    "content": "**(30-60 MINUTES)**"
  },
  {
    "title": "Exploring Musical Elements",
    "content": "*Rhythm:* Discuss how rhythm in music can represent the patterns and processes of industry and technology.  \n\tExamples\n\n* Play recordings of music with different rhythms (e.g., a steady beat representing a factory assembly line, a syncopated rhythm representing technololgical innovation).  \n  * [Kraftwerk, “The Model”](https://www.youtube.com/watch?v=GEnx9xS79Lc)  \n    * This electronic music track features a repetitive, driving beat that evokes the rhythmic precision of a factory.  \n  * [Daft Punk, “Technologic”](https://www.youtube.com/watch?v=D8K90hX4PrE)  \n    * This electronic music track uses a syncopated rhythm and robotic vocals to create a sense of futuristic technology and innovation.\n\nHave students create their own rhythmic patterns using body percussion or classroom instruments. Guide students through this if needed.  \n\tGuiding Questions\n\n* How can different rhythms evoke different feelings or images related to industry and technology?  \n* How can rhythm be used to create a sense of order, chaos, or progress?\n\n*Melody:* Discuss how melody in music can convey emotions and ideas related to sustainable development.  \n\tExamples\n\n* Play recordings of music with different melodies (e.g., a soaring melody representing hope and progress, a melancholic melody representing environmental concerns).  \n  * [John Williams, “Theme from E.T.”](https://www.youtube.com/watch?v=Ps1-YlB1TIQ)  \n    * This iconic film score features a soaring and uplifting melody that evokes a sense of wonder, hope, and possibility.  \n  * [Claude Debussy, “Clair de Lune”](https://www.youtube.com/watch?v=c977QdbTImU)  \n    * This impressionist piano piece has a melancholic and reflective melody that can evoke a sense of longing or sadness, potentially connecting to conerns about environmental degredation.  \n* Have students experiment with creating their own melodies using their instruments or their own voices. Guide students through this if needed.\n\n\tGuiding Questions\n\n* How can different melodies evoke different emotions or moods related to sustainability?  \n* How can melody be used to tell a story or express a message about the environment or social justice?\n\n*Harmony:* Discuss how harmony in music can represent collaboration and interconnectedness, essential for achieving Global Goal 9\\.  \n\tExamples\n\n* Play recordings of music with different harmonies (e.g., consonant harmonies representing unity and cooperation, dissonant harmonies representing conflict or challenges).  \n  * [The Staple Singers, “I’ll Take You There”](https://www.youtube.com/watch?v=IhHBr7nMMio)  \n    * This classic pop song features beautiful vocal harmonies that create a sense of unity, peace, and cooperation.  \n  * [Igor Stravinsky, “The Rite of Spring (Sacrificial Dance)”](https://www.youtube.com/watch?v=BiH3vA7q0jo)  \n    * This avant-garde ballet score features dissonant and jarring harmonies that create a sense of tension, conflict, and chaos.  \n* Have students experiment with creating simple harmonies using their instruments or their own voices. Guide students through this if needed.\n\n\tGuiding Questions\n\n* How can harmony be used to create a sense of balance, tension, or resolution in music?  \n* How can harmony represent the collaboration needed to achieve the Global Goals, and in particular Global Goal 9?\n\n*Dynamics:* Discuss how dynamics (loudness and softness) in music can represent the power and impact of industry and innovation.  \n\tExamples\n\n* Play recordings of music with varying dynamics (e.g., loud and powerful sections representing industrial processes, quiet and reflective sections representing the impact on communities or the environment).  \n  * [Gustav Holst, “The Planets, Op. 32: IV. Jupiter, the Bringer of Jollity”](https://www.youtube.com/watch?v=IBLghXA8NCk)  \n    * This orchestral piece features a wide range of dynamics, from quiet and reflective passages to loud and triumphant sections, which can be used to represent the varying power and impact of industrial processes and their effects on communities and the environment.  \n  * [Radiohead, “Paranoid Android”](https://www.youtube.com/watch?v=YTH8cxXBGBo)  \n    * This progressive rock song is known for its dramatic shifts in dynamics and mood, which can be interpreted as a reflection of the unpredictable nature of technological advancement and its impact on society.  \n* Have students experiment with creating dynamic variations in their own music-making. Guide students through this if needed.\n\n\tGuiding Questions\n\n* How can dynamics be used to create contrast, emphasis, or emotional impact in music?  \n* How can dynamics represent the scale and impact of industrial development or technological advancements?"
  },
  {
    "title": "Music and Global Goal 9",
    "content": "Explore how the musical elements introduced can be put into practice to represent the themes and targets of Global Goal 9 through a guided activity.  \n*Rhythm*  \nDifferent rhythms can represent various aspects of industry, innovation, and infrastructure.  \n\tExample\n\n* A steady, repetitive rhythm could represent the consistent work of a factory, while a more syncopated or irregular rhythm could represent technological innovation or the construction of new infrastructure.\n\nLead students in a call-and-response activity where you create a rhythm using body percussion (clapping, snapping, stomping, etc.), and students echo the rhythm back to you.  \nGradually increase the complexity of rhythms, incorporating different dynamics and tempos to represent different aspects of Global Goal 9\\.  \n\tExample\n\n* Create a rhythm that starts slow and simple, then gradually becomes faster and more complex, representing the progress and development of industry and technology.\n\n*Melody*  \nDifferent melodies can evoke emotions and ideas related to Global Goal 9\\.  \n\tExample\n\n* A soaring, uplifting melody could represent the hope and optimism associated with sustainable development, while a more melancholic melody could represent the challenges and concerns related to environmental sustainability.\n\nLead students in a vocal exploration where you sing a simple melody or phrase, and students echo it back to you, experimenting with different dynamics and expressions.  \n\tExample\n\n* Create a melody that starts with a single note, gradually adding more notes and harmonies to represent the growth and interconnectedness of sustainable industries.\n\n*Harmony*  \nHarmony in music can represent collaboration and interconnectedness, essential for achieving Global Goal 9\\.  \n\tExample\n\n* Have students sing or play simple chords or harmonies together, emphasizing the importance of each part contributing to the overall sound.\n\nConnect this to Target 9.2 (Inclusive Industrialization) by discussing the importance of diverse skills and talents contributing to a thriving workforce.  \n*Dynamics*  \nDynamics in music can represent the power and impact of industry and innovation.  \n\tExample\n\n* Have students experiment with different dynamics while singing or playing instruments, creating contrasts and variations that represent the different aspects of Global Goal 9\\.\n\nConnect this to Target 9.4 (Sustainable Infrastructure) by discussing how industries can reduce their environmental impact and promote sustainable practices.  \n*Sound Effects*  \nSound effects can be used to represent different aspects of industry, innovation, and infrastructure.  \n\tExample\n\n* Have students create sound effects using their voices, body percussion, or classroom objects to represent the sounds of construction, transportation, or technology.\n\nConnect this to Target 9.5 (Innovation) by discussing how new technologies and inventions can create new sounds and possibilities."
  },
  {
    "title": "Sharing and Discussion",
    "content": "Have students share their experiences with the guided music activity. Encourage them to describe the sounds they created, the emotions they felt, and the connections they made to Global Goal 9\\.  \n\tGuided Questions\n\n* How did the different musical elements (rhythm, melody, harmony, dynamics) help you understand the themes of Global Goal 9?  \n* What were some of the most effective or memorable sounds or musical moments?  \n* How did the activity make you think differently about the role of industry, innovation, and infrastructure in creating a sustainable future?  \n* How can music and sound be used to raise awareness and inspire action on global issues?"
  }
],
	reflectionQuestions: [
  "How did creating and exploring sounds \\- using rhythm, melody, harmony, and dynamics \\- help you to understand the themes of industry, innovation, and infrastructure in a new way?",
  "What did you learn about how different musical elements can represent specific aspects of Global Goal 9, such as the consistent work of a factory, the sudden burst of innovation, or the complexity of interconnected infrastructure?",
  "Did the activity change how you perceive the sounds around you in your daily life? Do you now hear “music” or patterns in everyday industry and technology?",
  "How did actively making music, rather than just listening, deepen your personal connection to Global Goal 9?",
  "What did you learn about the power of music and sound to evoke emotions and communicate messages about progress, challenges, and sustainability?",
  "How did exploring Global Goal 9 through music and sound help you to grasp their interconnectedness?",
  "Did any particular sound or musical moment created by the class powerfully represent a challenge or solution related to Global Goal 9?",
  "What role do you think innovation and technology play in achieving sustainability, as reflected in the sounds we explored?",
  "How can understanding “sounds of progress” motivate us to contribute to building a more sustainable future?",
  "Did this lesson spark any new ideas about how you might use music or sound in your own life to advocate for Global Goal 9?",
  "What is one key takeaway about industry, innovation, and infrastructure that you will remember from this musical exploration?",
  "How has this lesson influenced your thinking about your own role in fostering innovation or supporting sustainable infrastructure in your community?",
  "What kind of impact do you think a powerful soundscape or musical piece about Global Goal 9 could have on listeners?",
  "How can music truly inspire change and promote collaboration towards achieving the Global Goals?"
],
	assessmentCriteria: [
  "Consistent and enthusiastic involvement in all phases of the lesson, including sound explorations, rhythmic exercises, guided music activities, and class discussions.",
  "Comprehension of Global Goal 9 and its connection to industry, innovation, and infrastructure, as demonstrated through musical choices (e.g., specific rhythms, melodies, dynamics used) and verbal explanations.",
  "Originality and effectiveness in using chosen musical elements (rhythm, melody, harmony, dynamics, sound effects) to convey their message about Global Goal 9\\. Look for innovative use of available instruments or sounds.",
  "How clearly and powerfully the collective musical exploration communicated its intended message about Global Goal 9\\. Did the soundscape evoke thought or emotion related to the Goal?",
  "Ability to work effectively as a class, listening to each other’s contributions, responding musically, and contributing to the cohesive overall sound.",
  "Nuance and insight demonstrated in reflections, particularly concerning the role of sound and music in understanding global challenges and the complexities of achieving sustainable development."
],
};

registerLessonContent(lessonContent);

export default lessonContent;

import type { LessonContentData } from '../types';
import { registerLessonContent } from '../index';

const lessonContent: LessonContentData = {
	goalNumber: 3,
	artForm: 'Music' as const,
	gradeLevel: '9-12' as const,
	title: "MUSIC",
	duration: "",
	materials: [
  {
    "name": "Instruments (classroom instruments, personal instruments if available, or digital music creation software/apps)",
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
	introduction: "Engage students' curiosity: Ask them to close their eyes and imagine what \"health\" sounds like.  \nAfter a brief moment of reflection, have them share their ideas.  \nIntroduce Global Goal 3: \"Ensure healthy lives and promote well-being for all at all ages.\"  \nAsk students “What does it mean to be healthy?” Give them a moment to brainstorm individually, then open it up for a brief class discussion.  \nDiscuss how health is about more than just not being sick. It’s about feeling good physically, mentally, and emotionally. It’s about having access to the care you need, and living in a safe, clean environment.  \nDiscuss the various targets within Goal 3, using simplified language and real-world examples.  \nExplain how music can be a powerful tool for expressing emotions, raising awareness, and advocating for change related to health issues.",
	steps: [
  {
    "title": "Soundtracks for a Healthy World",
    "content": "**(30-60 MINUTES)**"
  },
  {
    "title": "Musical Brainstorming: Target Melodies",
    "content": "Divide students into groups and assign each group one of the Global Goal 3 targets.  \nHave them brainstorm musical elements that represent their assigned target:\n\n* *Instruments*:   \n  * What instruments or sounds would best capture the essence of the issue? (e.g., gentle strings for maternal health, upbeat percussion for child survival, somber piano for mental health)  \n  * What instruments create a sound that matches the mood of your target?  \n  * Are there any instruments associated with specific cultures or health practices that could be relevant?  \n  * Would you use a solo instrument, a small ensemble, or a full orchestra to represent the scale of the issue?  \n* *Tempo*:   \n  * Would the music be fast or slow? Energetic or reflective?  \n  * Does your target evoke a sense of urgency or a more reflective pace?  \n  * Would a fast tempo convey energy and action, or would a slower tempo better express sadness or contemplation?  \n* *Dynamics*:   \n  * Would it be loud or soft? Would there be changes in volume to represent different emotions or situations?  \n  * Does your target suggest a powerful, loud sound, or a more intimate, quiet one?  \n  * Could you use changes in volume to represent the ups and downs of a health journey, or the contrast between illness and recovery?  \n* *Melody*:   \n  * Does your target inspire a hopeful, major-key melody, or a more somber, minor-key one? Is it uplifting or melancholic?  \n  * Could you use a simple, repetitive melody to represent a persistent challenge, or a complex, evolving  melody to signify progress and change?  \n* Example Brainstorming (Target 3.6: Road Safety)  \n  * *Instruments:* Car horns, sirens, percussive sounds to represent the chaos of accidents; gentle strings or piano for moments of reflection or loss.  \n  * *Tempo*: Could start fast-paced to depict the speed and danger of traffic, then slow down dramatically to represent the aftermath of an accident.  \n  * *Dynamics*: Loud, jarring sounds for the accident itself, followed by a hushed, somber mood. Crescendos and decrescendos could represent the fluctuating emotions of those involved.  \n  * *Melody*: A mix of minor and major keys to reflect the tragedy and hope associated with road safety. Perhaps a recurring motif that transforms throughout the piece, symbolizing the journey from danger to safety."
  },
  {
    "title": "Compose and Create",
    "content": "Provide time for each group to compose a short musical piece (1-2 minutes) that reflects their assigned target.  \nEncourage creativity and experimentation with different instruments, sounds, and musical elements.\n\n* If using digital music creation tools, provide guidance and support as needed.\n\nFor groups without access to instruments, they can create a vocal piece, body percussion, or even use found objects to create soundscapes."
  },
  {
    "title": "Performance and Sharing",
    "content": "Have each group perform or present their musical creation to the class.  \nEncourage active listening and respectful feedback.  \nAfter each group’s performance, guide a discussion with questions like:\n\n* *Emotional Impact*  \n  * How did the music make you feel? What specific musical elements contributed to those emotions?  \n  * Did the music effectively capture the essence of the assigned Target? How?  \n* *Connections to the Target*  \n  * What specific aspects of the Target did the music represent?  \n  * Were there any symbolic sounds or melodies that stood out to you?  \n  * How did the music convey the challenges or solutions related to the Target?  \n* *Overall Theme of Health and Well Being*  \n  * How does this musical piece conribute to the understanding of health and well being?  \n  * What message does it convey about the importance of achieving Global Goal 3?  \n  * How can music inspire us to take action and make a difference in the world?\n\nFacilitate a discussion about the connections between the music, the chosen Global Goal 3 targets, and the overall theme of health and well-being."
  }
],
	reflectionQuestions: [
  "How did the process of composing music for Global Goal 3 deepend your understanding?",
  "What musical elements, such as tempo, dynamics, melody, and instrumentation, did your group find most effective in representing your idea?",
  "How did the emotional tone you aimed for in your music connect with the human experiences associated with that challenge?",
  "How did the collaborative process of composing with your group contribute to your understanding of working together towards a common goal, similar to the efforts needed for Global Goal 3?",
  "What did you learn about the diverse range of health challenges addressed by Global Goal 3?",
  "How did the act of creating something (a musical piece) make the concept of “health and wellbeing for all” feel more tangible or actionable?",
  "What do you believe is the role of art, and specifically music, in advocating for health and social change?",
  "What kind of impact do you think a powerful and moving piece of music could have on someone who is facing some of the health challenges presented?"
],
	assessmentCriteria: [
  "Consistent and enthusiastic involvement in all phases of the lesson, including the initial brainstorming, musical element exploration, group composition, performance, and class discussions.",
  "Comprehension of Global Goal 3 and its targets and core concepts (e.g., maternal health, child survival, NCDs, mental health) as demonstrated through the thematic content and musical choices within the compositions and verbal explanations.",
  "Originality and effectiveness in applying chosen musical elements (e.g., instruments, tempo, dynamics, melody, harmony) to represent the emotions, challenges, and solutions related to the specific health target.",
  "How clearly and powerfully the finished musical pieces communicated the intended message about Global Goal 3\\. Did the musical successfully evoke thought or emotion in the audience?",
  "Ability to work effectively within the small groups, contributing ideas, respecting diverse musical interpretations, and collaborating cohesively during the composition and rehearsal process.",
  "Willingness to experiment with musical expression and the ability to present the compositions with clarity and intent, even in musical skills are beginner-level.",
  "Nuance and depth of understanding demonstrated in reflections, particularly concerning the role of music in addressing health challenges and promoting wellbeing."
],
};

registerLessonContent(lessonContent);

export default lessonContent;

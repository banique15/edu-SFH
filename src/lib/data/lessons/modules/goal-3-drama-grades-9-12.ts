import type { LessonContentData } from '../types';
import { registerLessonContent } from '../index';

const lessonContent: LessonContentData = {
	goalNumber: 3,
	artForm: 'Drama' as const,
	gradeLevel: '9-12' as const,
	title: "DRAMA",
	duration: "",
	materials: [
  {
    "name": "Open space for movement and improvisation",
    "isOptional": false
  },
  {
    "name": "Props: Simple objects to represent medical tools, environmental hazards, etc.",
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
	introduction: "Begin by having students stand in a circle. Explain that rhythm is a fundamental part of life, found in our heartbeat, the cycles of nature, and even our daily routines. Today, as a warm up, they will explore rhythm and improvisation through body percussion.  \n\tGuide students to start with a simple, steady beat by clapping their hands. Then, encourage them to experiment with other sounds, like snapping fingers, stomping feet, patting their legs, or even vocalizations.  \n\tChoose one student to be the “conductor.” They can change the rhythm, add new sounds, or introduce simple movements that the rest of the group follows. Switch leaders every 30 seconds or so, giving multiple students a chance to lead.  \n\tAfter the activity, facilitate a discussion about the connection between rhythm and health:\n\n* *Physical Health:* How did moving your body and keeping the rhythm make you feel? Did it increase your heart rate or energy levels?  \n* *Mental and Emotional Health:* How did focusing on the rhythm and coordinating with others affect your concentration and mood? Did it create a sense of connection or joy?  \n* *Balance and Well Being:* How can finding a healthy rhythm in our daily lives contribute to our overall well being? What are some examples of healthy rhythms (regular sleep, exercise, balanced meals, etc.)?",
	steps: [
  {
    "title": "Act for Health: Improvising Solutions for a Better World",
    "content": "**(30-60 MINUTES)**"
  },
  {
    "title": "Scene Starters: The Challenge",
    "content": "Divide students into groups of 3-4. Each group will receive a Global Goal 3 Target.  \n\tProvide each group with scenario prompts related to their target. Examples:\n\n* *Target 3.1 \\- Maternal Health*  \n  * A pregnant teenager in a rural area is afraid to tell her family about her pregnancy and doesn't know where to seek prenatal care.  \n  * A woman experiences complications during childbirth at home, and her family struggles to find transportation to a hospital.  \n  * A community rallies to support a new mother who is experiencing postpartum depression.  \n* *Target 3.2 \\- Child Survival*  \n  * A family in a conflict zone struggles to access clean water and vaccinations for their children.  \n  * A healthcare worker in a remote village tries to convince parents to bring their sick children to the clinic for treatment.  \n  * A school implements a nutrition program to address childhood malnutrition.  \n* *Target 3.3 \\- Ending Epidemics*  \n  * A community faces a sudden outbreak of an unknown illness and must work together to contain it.  \n  * A person living with HIV faces stigma and discrimination while trying to access treatment.  \n  * A group of researchers races against time to develop a new vaccine for a deadly disease.  \n* *Target 3.4 \\- Non-Communicable Diseases and Mental Health*  \n  * A family copes with a loved one's cancer diagnosis.  \n  * A teenager struggles with anxiety and depression, feeling isolated and misunderstood.  \n  * A community organizes a mental health awareness campaign to reduce stigma and encourage people to seek help.  \n* *Target 3.5 \\- Substance Abuse*  \n  * A friend group deals with one member's addiction.  \n  * A person in recovery struggles with relapse triggers and seeks support from their community.  \n  * A school implements a drug prevention program to educate students about the dangers of substance abuse.  \n* *Target 3.6 \\- Road Safety*  \n  * A group of friends witnesses a car accident and must decide how to respond.  \n  * A community advocates for safer roads and stricter traffic laws after a tragic accident.  \n  * A teenager learns about the dangers of distracted driving and makes a pledge to be a responsible driver.  \n* *Target 3.7 \\- Sexual and Reproductive Health*  \n  * A young woman in a conservative community seeks information about family planning options.  \n  * A group of teenagers discusses the importance of consent and healthy relationships.  \n  * A school implements a comprehensive sex education program to empower students to make informed choices about their sexual and reproductive health.  \n* *Target 3.8 \\- Universal Health Coverage*  \n  * A family struggles to afford healthcare for their chronically ill child.  \n  * A community health worker advocates for affordable medicines in their village.  \n  * A country debates the implementation of a universal healthcare system.  \n* *Target 3.9 \\- Pollution and Contamination*  \n  * An environmental activist fights against pollution from a nearby factory that is affecting the health of their community.  \n  * A group of students investigates the impact of plastic pollution on marine life and human health.  \n  * A city implements policies to improve air quality and reduce the number of respiratory illnesses.  \n* *Target 3.a \\- Tobacco Control*  \n  * A teenager tries to quit smoking with the support of their friends and family.  \n  * A group of students organizes a campaign to raise awareness about the dangers of tobacco use.  \n  * A government debates the implementation of stricter tobacco control measures.  \n* *Target 3.b \\- Medicines and Vaccines*  \n  * A scientist researching a new vaccine for a neglected tropical disease faces challenges and setbacks.  \n  * A community in a developing country struggles to access affordable essential medicines.  \n  * International organizations work to negotiate fair prices for life-saving medications.  \n* *Target 3.c \\- Health Workforce*  \n  * A nurse in a rural clinic overwhelmed by the number of patients and lack of resources.  \n  * A group of medical students volunteers in an underserved community.  \n  * A government invests in training and retaining healthcare workers in rural areas.  \n* *Target 3.d \\- Global Health Risks*  \n  * *An epidemiologist tracking the spread of a new infectious disease, trying to prevent a global pandemic.*  \n  * *A community prepares for a potential natural disaster, implementing early warning systems and evacuation plans.*  \n  * *International cooperation is essential in addressing global health threats like climate change and antimicrobial resistance.*\n\n\tGroups have 5-10 minutes to create a short scene based on their prompt, with no pre-planning.\n\n* Have students focus on portraying the emotions and challenges of the situation."
  },
  {
    "title": "Scene Reversal: The Solution",
    "content": "Each group keeps their original scenario **but** is now tasked with improvising a scene wher ethe situation is **improved,** or solutions are being implemented.  \n\tSolutions can be real or imaginative, from medical advances to community support systems to policy changes. Examples:\n\n* *Medical Advances:*  \n  * New vaccines  \n  * Cures for diseases  \n  * Improved diagnostic tools  \n  * Telemedicine  \n* *Community Support Systems*  \n  * Support groups  \n  * Mental health hotlines  \n  * Community health centers  \n  * Educational programs  \n* *Policy Changes*  \n  * Increased funding for healthcare  \n  * Stricter regulations on pollution  \n  * Improved access to clean water and sanitation  \n  * Policies promoting healthy behaviors  \n* *Technological Innovations*  \n  * Mobile health apps  \n  * Wearable devices to monitorhealth  \n  * AI-powered diagnostics  \n* *Individual Actions*  \n  * Healthy lifestyle choices  \n  * Seeking help when needed  \n  * Volunteering in the community  \n  * Advocating for change\n\nGroups share new scenes. Open a class discussion. Example questions:\n\n* How did the mood shift between scenes?  \n* What solutions were presented? Are they feasible in the real world?  \n* What obstacles might prevent those solutions?"
  }
],
	reflectionQuestions: [
  "How did physically improvising the challenges and solutions related to Global Goal 3 deepen your understanding of the issue?",
  "What emotions did you connect with while portraying your character and the different scenarios?",
  "Did the “scene reversal’ activity \\- moving from challenge to solution \\- offer a sense of hope or agency in addressing these health issues?",
  "How did the immediacy of improvisation help you connect with the human element of these global health concerns?",
  "What did you learn about the power of storytelling and dramatic representation in raising awareness about health issues?",
  "What were some of the most effective ways your group used character, setting, and action to communicate the chosen health challenge and potential solutions?",
  "What role did creativity and spontaneity play in finding potential solutions during the improvisation process?",
  "Did exploring these health challenges through drama spark any personal connections or reflections on your own health and wellbeing or the health of your community?",
  "What did you learn about the importance of empathy and understanding when considering the health struggles of others?",
  "What are some of the key takeaways from the different scenes presented today that you think are important for others to understand about Global Goal 3?"
],
	assessmentCriteria: [
  "Consistent and enthusiastic involvement in all phases of the lesson, including the “Pulse of Life” warm-up, scene creation, and class discussions.",
  "Comprehension of Global Goal 3 and its targets and core concepts (e.g., maternal health, child survival, NCDs mental health) as demonstrated through the thematic content and character portrayal within the improvised scenes and verbal explanations.",
  "Originality and effectiveness in using improvisational techniques (e.g., character development, setting the scene, reacting to others, building the narrative) to explore the challenges and potential solutions related to the specific health issue.",
  "How clearly and powerfully the improvised scenes communicated the intended message about the health challenge and potential solutions. Did the performance successfully evoke thought or emotion in the audience?",
  "Ability to work effectively within the small groups, contributing ideas, respecting diverse interpretations, and collaborating cohesively to create and perform the scenes.",
  "How well students stepped into the shoes of different characters affected by the health issue, conveying the motivations and challenges authentically.",
  "Nuance and depth of understanding demonstrated in reflections, particularly concerning the human experience of health challenges and the complexities of finding solutions."
],
};

registerLessonContent(lessonContent);

export default lessonContent;

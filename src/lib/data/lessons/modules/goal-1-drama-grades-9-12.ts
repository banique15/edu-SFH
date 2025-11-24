import type { LessonContentData } from '../types';
import { registerLessonContent } from '../index';

const lessonContent: LessonContentData = {
	goalNumber: 1,
	artForm: 'Drama' as const,
	gradeLevel: '9-12' as const,
	title: "DRAMA",
	duration: "",
	materials: [
  {
    "name": "Inspiring Images or Short Videos (examples below)",
    "isOptional": false
  },
  {
    "name": "Slips of Paper with Themes (examples below)",
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
    "name": "\\[Optional\\] Simple Props: chairs, tables, scarves/blankets/cloth, cardboard, books, pens/pencils, bowls/plates, signs, etc.",
    "isOptional": false
  }
],
	introduction: "",
	steps: [
  {
    "title": "Living Pictures: Tableau Vivant for Global Goal 1",
    "content": "**(15-30 MINUTES)**"
  },
  {
    "title": "Tips:",
    "content": "* Emphasize the importance of empathy and respect throughout both activities.  \n* Provide ample time for students to express their thoughts and feelings.  \n* Encourage creativity and allow students to explore different perspectives.  \n* Use open-ended questions to foster deeper reflection and understanding."
  }
],
	reflectionQuestions: [
  "How did creating a “living picture” help you understand the chosen aspect of poverty or resilience on a deeper level?",
  "What did you learn about the power of nonverbal communication to convey complex emotions and social issues?",
  "What were some of the challenges in communicating your theme effectively without using words?",
  "How did the process of creating a static image, compared to a moving performance, affect your understanding of the issue?",
  "What did you notice about the impact of the tableaux on the audience? What emotions or thoughts did it evoke?",
  "What different interpretations did you observe from the audience, and how did they compare to your group’s intended message?",
  "Did seeing the other groups’ tableaux broaden your understanding of the many facets of poverty and resilience?",
  "How did the different themes presented by each group connect to create a larger picture of the issue?",
  "What did you learn about the importance of perspective and empaty in understanding the experiences of others?",
  "How did the act of creating a tableau shift your perspective on poverty or resilience compared to simply reading or talking about it?",
  "Did any of the tableaux resonate with you on a personal level, perhaps connecting to your own feelings or experiences?",
  "What did you learn about the strength and dignity of individuals facing poverty through this activity?",
  "How might the experience of creating or witnessing these “living pictures’ influence your willingness to take action to address poverty?",
  "What kind of message about poverty and resilience do you think could be effectively conveyed through tableau vivant to a wider audience?",
  "What role do you see for creative expression, like drama, in advocating for social change adn addressing issues like poverty?"
],
	assessmentCriteria: [
  "Consistent and enthusiastic involvement in all phases of the lesson, including the initial image/video discussions, brainstorming themes, group tableau creation, and sharing sessions.",
  "Comprehension of Global Goal 1, targets and concepts, as demonstrated through the symbolism and intention within their tableau vivant and verbal explanations.",
  "Originality and effectiveness in designing a frozen picture that vividly respresents the specific aspects of poverty (e.g., hunger, homelessness, lack of education) and/or resilience (e.g., hope, determination, community support) using only their bodies and facial expressions.",
  "How clearly and powerfully the tableau communicated its intended message without words. Did the tableau successfully evoke thought or emotion in the audience?",
  "Ability to work effectively within the small groups, contributing ideas, respecting diverse interpretations, and collaborating cohesively to create the tableau.",
  "Ability to observe other groups’ tableaux critically and empathetically, offering thoughtful interpretations and asking insightful questions during the discussion phase.",
  "Nuance and depth of understanding demonstrated in reflections, particularly concerning the role of nonverbal communication in understanding the human experience of poverty."
],
};

registerLessonContent(lessonContent);

export default lessonContent;

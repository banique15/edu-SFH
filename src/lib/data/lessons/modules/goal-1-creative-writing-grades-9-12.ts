import type { LessonContentData } from '../types';
import { registerLessonContent } from '../index';

const lessonContent: LessonContentData = {
	goalNumber: 1,
	artForm: 'Creative Writing' as const,
	gradeLevel: '9-12' as const,
	title: "CREATIVE WRITING",
	duration: "",
	materials: [
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
    "name": "Pens/pencils",
    "isOptional": false
  }
],
	introduction: "",
	steps: [
  {
    "title": "Understanding Poverty Through Creative Writing",
    "content": "**(20-40 MINUTES)**"
  }
],
	reflectionQuestions: [
  "What was the most significant thing you learned about poverty, whether material, social, or emotional, through this creative writing exercise?",
  "Did writing from a specific perspective or focusing on particular emotions deepen your understanding of the lived experience of poverty? If so, how?",
  "What surprised you or challenged your initial thoughts about poverty during the brainstorming and writing process?",
  "How did exploring the different categories of poverty (material, social, emotional) help you see the issue in a more complex way?",
  "What connections did you draw between the different aspects of poverty (e.g., how might a lack ofmaterial resources impact emotional wellbeing)?",
  "How did you approach choosing a perspective or focus for your creative writing piece?",
  "What challenges did you encounter while trying to convey the realities of poverty through your chosen form?",
  "How did you use literary devices like imagery, sensory details, and emotional language to bring your writing to life?",
  "What did you learn about the power of storytelling and creative expression to communicate complex social issues?",
  "Did the peer review process offer any new insights into your own writing or the topic of poverty?",
  "Did any personal experiences or observations connect with the themes of poverty explored in this lesson?",
  "What emotions did you experience while writing about poverty, and how might those emotions motivate you to take action?",
  "What are some of the key takeaways from teh different writing pieces shared today that you think are important for others to understand about poverty?",
  "How has this lesson influenced your thinking about your own role in addressing poverty in your community or globally?"
],
	assessmentCriteria: [
  "Consistent and thoughtful involvement in all phases of the lesson, including the initial poverty brainstorm, individual creative writing, peer review (if applicable), and active participation in class discussions.",
  "Comprehension of the multifaceted nature of poverty (material, social, emotional), as demonstrated through the content and depth of the creative writing pieces and verbal contributions during discussions.",
  "Originality and effectiveness in using creative writing techniques (e.g., vivid imagery, sensory details, emotional language, character voice) to bring the chosen aspect of poverty or resilience to life.",
  "How clearly and powerfully the finished creative writing piece communicates its intended message about poverty. Did the writing successfully evoke thought or emotion in the reader/listener?",
  "Ability to effectively portray a character’s experience from a specific perspective, conveying thoughts, feelings, and challenges related to poverty authentically (if applicable).",
  "Ability to provide thoughtful, specific, and supportive feedback to peers during the review process, focusing on clarity, language, and emotional impact.",
  "Nuance and depth of understanding demonstrated in reflections, particularly concerning the human experience of poverty and its complexities."
],
};

registerLessonContent(lessonContent);

export default lessonContent;

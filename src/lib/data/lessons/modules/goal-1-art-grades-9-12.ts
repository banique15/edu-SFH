import type { LessonContentData } from '../types';
import { registerLessonContent } from '../index';

const lessonContent: LessonContentData = {
	goalNumber: 1,
	artForm: 'Art' as const,
	gradeLevel: '9-12' as const,
	title: "ART",
	duration: "",
	materials: [
  {
    "name": "Fabric scraps of various colors, textures, and patterns",
    "isOptional": false
  },
  {
    "name": "Yarn or embroidery thread",
    "isOptional": false
  },
  {
    "name": "Needles",
    "isOptional": false
  },
  {
    "name": "Scissors",
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
    "name": "\\[Optional\\] Embroidery hoops",
    "isOptional": false
  },
  {
    "name": "\\[Optional\\] Cardboard or foam board for mounting",
    "isOptional": false
  }
],
	introduction: "",
	steps: [
  {
    "title": "Weaving the Threads of Resilience: A Textile Art Exploration of Poverty",
    "content": "**(30-60 MINUTES)**"
  },
  {
    "title": "Image:",
    "content": "[Life Inside a Sprawling Homeless Camp](https://www.planetizen.com/news/2019/12/107754-life-inside-sprawling-homeless-camp) (Source: Planetizen News)  \n*"
  },
  {
    "title": "Image:",
    "content": "[Inside the horrific unregulated sweatshops of Bangladesh](https://www.dailymail.co.uk/news/article-3339578/Crammed-squalid-factories-produce-clothes-West-just-20p-day-children-forced-work-horrific-unregulated-workshops-Bangladesh.html) (Source: Daily Mail)  \n*"
  },
  {
    "title": "Image:",
    "content": "[An unhoused individual sleeps under an American flag blanket in New York City](https://www.npr.org/sections/health-shots/2023/03/21/1164275807/poverty-by-america-matthew-desmond-inequality) (Source: NPR)  \n*"
  },
  {
    "title": "Article:",
    "content": "[Why Poverty Persists in America](https://www.nytimes.com/2023/03/09/magazine/poverty-by-america-matthew-desmond.html) (Source: The New York Times)  \n*"
  },
  {
    "title": "Article:",
    "content": "[This is What it Means to be Poor in India Today](https://www.cnn.com/interactive/2017/10/world/i-on-india-income-gap/) (Source: CNN)\n\nDiscuss the emotions and experiences associated with poverty, emphasizing the importance of empathy and understanding.   \nPoverty is often associated with feelings of shame, isolation, hopelessness, and despair. It can also lead to stress, anxiety, and depression.  \nIt is crucial to recognize the resilience, strength, and dignity of individuals and communities experiencing poverty.  \nThese discussions can help students develop empathy and understand that poverty is not a personal failing but a complex issue with various underlying causes.  \nAsk guiding questions like:\n\n* What were your immediate feelings or reactions as you looked at these images or read/listened to the articles?  \n* What did you notice?  \n* What do you think might be the daily challenges faced by the people in the images/articles?  \n* If you were to imagine yourself in the situation depicted, what might be some of the emotions you would feel?  \n* Beyond the visible hardships, what are some of the less obvious struggles someone experiencing poverty might face (e.g., feelings of isolation, lack of opportunity, stress)?  \n* How might poverty affect a person’s sense of hope or their dreams for the future?  \n* What do you think it might feel like to not have reliable access to basic necessities like food, water, or shelter?  \n* How might societal attitudes or judgements impact someone experiencing poverty?  \n* What might be some of the strengths and resilience that people living in poverty develop?\n\n\tConnect these discussions to the different textures and colors of fabric scraps, exploring how they might represent different aspects of poverty and resilience. Examples:\n\n*"
  },
  {
    "title": "Rough, coarse fabric:",
    "content": "The harsh realities of poverty, the feeling of being worn down by circumstances.  \n*"
  },
  {
    "title": "Bright, vibrant colors:",
    "content": "Hope, resilience, and the determination to overcome challenges.  \n*"
  },
  {
    "title": "Soft, delicate fabric:",
    "content": "Vulnerability and the need for support and protection.  \n*"
  },
  {
    "title": "Intricate patterns:",
    "content": "The complexity of poverty and the diverse experiences of those affected by it.\n\n*"
  },
  {
    "title": "Give voice to the voiceless:",
    "content": "Provide a platform for those experiencing poverty to share their stories and perspectives.  \n*"
  },
  {
    "title": "Evoke empathy:",
    "content": "Help others understand and connect with the emotional realities of poverty.  \n*"
  },
  {
    "title": "Inspire action:",
    "content": "Motivate individuals and communities to take steps to address poverty.  \n*"
  },
  {
    "title": "Promote healing and resilience:",
    "content": "Offer a creative outlet for individuals to process their experiences and find strength in community.  \n*"
  },
  {
    "title": "Challenge stereotypes:",
    "content": "Break down misconceptions about poverty and those affected by it.  \n*"
  },
  {
    "title": "Advocate for change:",
    "content": "Raise awareness and inspire policy changes to create a more equitable society."
  }
],
	reflectionQuestions: [
  "What was the most significant thing you learned about poverty or resilience through this textile art exploration?",
  "Did creating this artwork change your perspective on poverty in any way? If so, how?",
  "What new insights did you gain about the power of art, specifically textile art, to communicate complex social issues?",
  "What connections did you make between the physical act of working with the fabric and the abstract concepts of poverty and resilience?",
  "What did you learn about the interconnectedness of individuals and communities in the context of poverty and overcoming challenges?",
  "What challenges did your group face during the collaborative creation process, and how did you overcome them?",
  "How did the different textures, colors, and patterns of the fabric influence your artistic choices and the meaning of your piece?",
  "What did you discover about your own creative process while working with textiles?",
  "How did the metaphor of weaving as interconnectedness and resilience resonate with you during the art-making process?",
  "In what ways did the limitations or possibilities of the materials shape your final artwork?",
  "How did the images, articles, and discussions at the beginning of the lesson influence yoru approach to creating your art?",
  "Did any personal experiences or observations connect with the themes of poverty and resilience explored in this lesson?",
  "What emotions did you experience while creating your artwork, and how do those emotions relate to the issue of poverty?",
  "What are some ways that you can continue to use your creativity to engage with and raise awareness about social issues like poverty?"
],
	assessmentCriteria: [
  "Consistent and enthusiastic involvement in all phases of the lesson, including initial discussions about poverty, material exploration, collaborative textile creation, and group presentations.",
  "Comprehension of Global Goal 1 and its core concepts (e.g., economic hardship, social exclusion, resilience) as demonstrated through the symbolism and intention with the textile artwork and verbal explanations.",
  "Originality and effectiveness in using chosen textile elements (e.g., weaving, stitching, appliqué, laying of fabric scraps) to convey aspects of poverty and/or resilience.",
  "How clearly and powerfully the finished collaborative artwork communicates its intended message. Did the textile piece successfully evoke thought or emotion related to the experience of poverty or the spirit of resilience?",
  "Ability to work effectively within the small groups, contributing ideas, respecting diverse artistic choices, sharing tasks, and collaborating cohesively to create the shared textile piece.",
  "Ability to articulate artistic choices and to interpret and provide thoughtful feedback on other groups’ artwork, connecting it to the broader themes of poverty and resilience.",
  "Nuance and depth of understanding demonstrated in reflections, particularly concerning the role of art in social change and the interconnectedness of individuals and communities in overcoming poverty."
],
};

registerLessonContent(lessonContent);

export default lessonContent;

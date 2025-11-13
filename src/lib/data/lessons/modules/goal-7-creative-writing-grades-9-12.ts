import type { LessonContentData } from '../types';
import { registerLessonContent } from '../index';

const lessonContent: LessonContentData = {
	goalNumber: 7,
	artForm: 'Creative Writing' as const,
	gradeLevel: '9-12' as const,
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
    "name": "Images or videos showcasing the impact of energy issues, both positive and negative",
    "isOptional": false
  },
  {
    "name": "\\[Optional\\] examples of persuasive writing",
    "isOptional": false
  },
  {
    "name": "Speeches, opinion articles, persuasive essays, ads",
    "isOptional": false
  }
],
	introduction: "Begin with a thought-provoking question or quote about energy, such as:\n\n* Imagine a world where everyone has access to clean, affordable energy. What would that world look like?  \n* Is is possible to power the world without harming it?  \n* Can we create a future where energy is both abundant and sustainable?  \n* How can we ensure that the benefits of clean energy reach everyone, regardless of their location or income?  \n* “We have a choice. We can remain addicted to fossil fuels with all the consequences that brings, or we can break the habit, embrace the clean energy alternatives and the new jobs they create.” \\- Barack Obama  \n* “Renewable energy is not only good for the environment, it’s good for the economy.” \\- Paul Krugman  \n* “The Stone Age didn’t end for lack of stones, and the oil age will end long before the world runs out of oil.” \\- Sheikh Zaki Yamani  \n* Over 770 million people worldwide still lack access to electricity. Source: [International Energy Agency](https://www.iea.org/reports/recommendations-of-the-global-commission-on-people-centred-clean-energy-transitions/recommendation-5)\n\n\tRe-introduce Global Goal 7 if necessary: Ensure access to affordable, reliable, sustainable and modern energy for all.  \n\tConnect to students’ lives by facilitating a brief discussion about how energy impacts their daily lives, asking questions like:\n\n* How do you use energy at home, school, and in your community?  \n* Have you ever experienced a power outage or energy shortage? How did it affect you?  \n* What are some of the environmental impacts of energy production and consumption that you’re aware of?",
	steps: [
  {
    "title": "Power of Persuasion: Championing Clean Energy With Creative Writing",
    "content": "**(30-60 MINUTES)**"
  },
  {
    "title": "Understanding Persuasive Writing",
    "content": "Explain the purpose and key elements of persuasive writing, emphasizing the use of\n\n* *Strong arguments and evidence:* Facts, statistics, expert opinions, and personal anecdotes.  \n* *Emotional appeals:* Connecting with the reader’s values, beliefs, and concerns.  \n* *Call to action:* Clearly stating what the writer wants the reader to do or believe.\n\n\tExamine examples of persuasive writing related to energy or other social issues. Identify the techniques used and discuss their effectiveness.   \n\tExamples:\n\n* [How Dare You](https://www.npr.org/2019/09/23/763452863/transcript-greta-thunbergs-speech-at-the-u-n-climate-action-summit), Greta Thunberg  \n  * Thunberg uses powerful language and repetition to express her anger and frustration, directly addressing world leaders and accusing them of inaction.  \n  * Thunberg establishes her credibility by citing scientific evidence and highlighting the urgency of the climate crisis.  \n  * Thunberg demands immediate and drastic action to reduce greenhouse gas emissions.  \n* [The Story of Bottled Water,](https://www.storyofstuff.org/movies/story-of-bottled-water/) The Story of Stuff Project  \n  * The video uses facts and statistics to debunk the myth that bottled water is safer or healthier than tap water.  \n  * The video reveals the environmental impact of bottled water production and the tactics used by corporations to create demand.  \n  * The video encourages viewers to reduce their reliance on bottled water and switch to reusable containers.  \n* [Renewable Energy is Key to Fighting Climate Change](https://www.nrdc.org/bio/noah-long/renewable-energy-key-fighting-climate-change#:~:text=Mike%20Linenberger%20/%20NREL,no%20signs%20of%20slowing%20down.), Noah Long & Kevin Steinberger  \n  * This written piece uses clear explanations and examples to make the case for renewable energy as an impactful climate solution."
  },
  {
    "title": "Goal/Target Deep Dive and Brainstorming",
    "content": "Distribute a [concise fact sheet](https://docs.google.com/document/d/16ZmQ8CJovHgLOcGflCS6xQ97bObbU3utcuoiq6-GqKI/edit?usp=drive_link) about Global Goal 7, highlighting key statistics, challenges, and potential solutions.  \n\tExplain that students can either choose the overall goal of Affordable and Clean Energy or focus on one specific target that resonates with them.  \n\tEncourage each student to reflect on the information presented and brainstorm potential arguments, evidence, and emotional appeals they could use int heir persuasive piece.  \nAsk students guiding questions to help them brainstorm:\n\n* What specific aspects of the goal or target do you find most compelling or important?  \n* What facts or statistics from the fact sheet stand out to you?  \n* Can you think of any personal stories or experiences that connect to this issue?  \n* What emotions do you want to evoke in your readers?  \n* What specific actions do you want your readers to take after reading your piece?\n\nExample prompts\n\n* *Overall Global Goal 7*  \n  * Why is affordable and clean energy essential for a sustainable future?  \n  * How does lack of access to energy impact individuals and communities?  \n  * What are the environmental and economic benefits of transitioning to clean energy sources?  \n* *Target 7.1 \\- Access to Energy*  \n  * How can we make energy more affordable and accessible for everyone, especially in developing countries?  \n  * What are the benefits of universal access to energy for education, healthcare, and economic opportunities?  \n* *Target 7.2 \\- Renewable Energy*  \n  * Why should we transition to renewable energy sources like solar and wind power?  \n  * How can we overcome the challenges associated with renewable energy adoption, such as cost and intermittency?  \n* *Target 7.3 \\- Energy Efficiency*  \n  * What are some simple and effective ways individuals and communities can reduce energy waste?  \n  * How can energy efficiency contribute to a more sustainable future and reduce our carbon footprint?  \n* *Target 7.a \\- International Cooperation*  \n  * Why is international collaboration essential for achieving clean energy goals?  \n  * How can developed countries support developing countries in their transition to clean energy?  \n* *Target 7.b \\- Infrastructure and Technology*  \n  * What are the key infrastructure and technology needs for expanding access to modern and sustainable energy services?  \n  * How can investments in clean energy infrastructure benefit both the environment and the economy?"
  },
  {
    "title": "Persuasive Writing Workshop",
    "content": "Briefly review the different persuasive writing formats and encourage students to choose one that best suits their interests and strengths.\n\n* Speech, letter, article, etc.\n\n\tRemind students to consider their intended audience and tailor their language and tone accordingly.  \n\tGuide students in creating a simple outline to organize their main arguments, supporting evidence, and any emotional appeals they plan to use.  \n\tBriefly discuss the importance of a strong introduction, clear body paragraphs, and compelling conclusion.  \n\tSet a timer or watch the clock for 10 minutes, and allow students to focus on drafting their persuasive pieces.  \n\tCirculate the room, offering support and answering questions. Encourage students to use the fact sheet for reference and inspiration, and remind them to focus on clarity and persuasion."
  },
  {
    "title": "Power in Pairs: Peer Review",
    "content": "Have students pair up (by choice or by assignment) and exchange their drafts with a partner.  \n\tGuide the peer review process with specific questions such as:\n\n* Are the arguments clear and well-supported by evidence?  \n* Does the writing evoke emotions and connect with the reader?  \n* Is there a clear call to action?  \n* Are there any areas where the writing could be improved for clarity or impact?\n\n\tIf time permits, allow a few minutes for students to make quick revisions based on their partner’s feedback."
  }
],
	reflectionQuestions: [
  "What new persuasive writing techniques did you learn or practice during this activity?",
  "How did the process of researching and brainstorming help you develop your arguments?",
  "What challenges did you encounter during the writing process, and how did you overcome them?",
  "How did you feel about using your writing to advocate for a cause you care about?",
  "Did this experience change your perspective on the power of individual voices and collective action?",
  "In what other areas of your life could you apply persuasive writing skills?",
  "What new insights did you gain about Global Goal 7 and the importance of affordable and clean energy?",
  "How has this activity impacted your understanding of the challenges and opportunities related to energy access and sustainability?",
  "What specific actions or changes are you inspired to make in your own life or community as a result of this project?"
],
	assessmentCriteria: [
  "Consistent and enthusiastic involvement in all phases of the lesson, including the initial energy discussion, understanding persuasive writing, brainstorming arguments, the individual writing process, and active participation in discussions (including peer review).",
  "Comprehension of Global Goal 7 and its targets and core concepts (e.g., energy access, renewable energy, energy efficiency). This will be evidenced through the strength and accuracy of arguments within the persuasive writing and verbal explanations.",
  "Originality and effectiveness in crafting persuasive writing that utilizes strong arguments, compelling evidence (even if fictionalized), emotional appeals, and a clear call to action to champion clean energy.",
  "How clearly and powerfully the finished persuasive piece communicates its intended message about Global Goal 7\\. Did the writing successfully evoke thought, emotion, or a desire for action in the reader?",
  "Quality of the writing craft, including strong verbs, vivid imagery, logical organization, and appropriate tone, demonstrating attention to persuasive language.",
  "Ability to articulate persuasive choices adn to interpret and provide thoughtful feedback on classmates’ writing, connecting it to Global Goal 7 themes.",
  "Nuance and depth of understanding demonstrated in reflections, particularly concerning the role of individual voices and persuasive writing in advocating for clean energy."
],
};

registerLessonContent(lessonContent);

export default lessonContent;

import type { LessonContentData } from '../types';
import { registerLessonContent } from '../index';

const lessonContent: LessonContentData = {
	goalNumber: 7,
	artForm: 'Drama' as const,
	gradeLevel: '9-12' as const,
	title: "DRAMA",
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
    "name": "Index cards or slips of paper",
    "isOptional": false
  },
  {
    "name": "Paper or notebooks",
    "isOptional": false
  },
  {
    "name": "Pens/pencils",
    "isOptional": false
  },
  {
    "name": "\\[Optional\\] Props and costumes",
    "isOptional": false
  }
],
	introduction: "Begin by capturing the students’ attention with a relatable hook that connects Global Goal 7 to their daily lives. Examples:\n\n*",
	steps: [
  {
    "title": "Power Up: A Forum Theater Experience on Sustainable Energy",
    "content": "**(30-60 MINUTES)**"
  },
  {
    "title": "Start with a question",
    "content": "* How many of you used your phones this morning? Checked social media? Watched a video? Played a game?  \n  * After a show of hands, connect their responses to the need for reliable energy.  \n  * All those things require energy, but not everyone in the world has the same access to electricity that we do.  \n*"
  },
  {
    "title": "Show a short, impactful video",
    "content": "* Find a short clip that highlights the challenges of energy poverty or the benefits of clean energy. This could be a news report on a community without electricity, a time-lapse of a solar farm being built, or a story about a student who invented a new energy-efficient device.\n\n    Examples:\n\n*"
  },
  {
    "title": "Energy Poverty:",
    "content": "[https://www.youtube.com/watch?v=xraThzKoXU8](https://www.youtube.com/watch?v=xraThzKoXU8)  \n*"
  },
  {
    "title": "Benefits of Clean Energy:",
    "content": "[https://m.youtube.com/watch?v=zwsAf0do-yo](https://m.youtube.com/watch?v=zwsAf0do-yo)  \n*"
  },
  {
    "title": "Solar Farm Timelapse:",
    "content": "[https://www.youtube.com/watch?v=FFv5xHUNNyw](https://www.youtube.com/watch?v=FFv5xHUNNyw)  \n*"
  },
  {
    "title": "Student Innovation in Energy Efficiency:",
    "content": "[https://m.youtube.com/user/studentenergy](https://m.youtube.com/user/studentenergy)  \n*"
  },
  {
    "title": "Use a powerful image",
    "content": "* Show the class an image that contrasts a brightly lit city with a rural area in darkness, or a polluted cityscape with a clean energy landscape. Ask students to share their observations and feelings about the images.\n\n\tOnce you have their attention, reintroduce Global Goal 7: Affordable and Clean Energy. Explain its core mission: to ensure that everyone in the world has access to affordable, reliable, sustainable, and modern energy by 2030\\.  \n\tExplain its importance and relevance to students’ lives\n\n* Connect to everyday experiences: Think abou thow much you rely on energy throughout your day. From charging your phones and laptops to using lights and appliances, energy powers our lives. But it’s easy to take for granted. GG 7 aims to ensure everyone has that same opportunity.  \n* Highlight the link between energy and other aspects of life: Access to energy is crucial for education, healthcare, economic development, and even cooking food. Without reliable energy, it’s harder to study, get medical treatment, start a business, or even have a warm meal.  \n* Emphasize the environmental impact: The way we produce and consume energy has a huge impact on the environment. GG 7 aims to shift towards cleaner sources of energy like solar and wind power to reduce pollution and combat climate change."
  },
  {
    "title": "Scenario Setup",
    "content": "Divide the class into groups of 4-6 students to encourage collaboration and allow for diverse perspectives.  \n\tExplain the concept of forum theater to the class. Here is a brief explanation:\n\n* Today, we’re going to be using a technique called forum theater. It’s a type of interactive theater where the audience plays an active role in shaping the story”\n\n\tHere’s how it works:\n\n* A scene is presented: A small group will perform a short scene based on a real-life issue or challenge.  \n* The audience intervenes: After watching the scene, you, the audience, can stop the action at any point and suggest different choices or actions for the characters.  \n* The scene is replayed: The actors will then improvise and incorporate your suggestions, replaying the scene with the new ideas.  \n* We explore solutions: This process can repeat multiple times, allowing us to explore different perspectives and potential solutions to the problem presented in the scene.\n\n\tHighlight that forum theater is interactive, collaborative, empowering, and focused on problem-solving.  \n\tExample: Imagine a scene where two friends are arguing about whether to install solar panels on their house. One friend is worried about the cost, while the other is concerned about the environmental impact of using fossil fuels. You, as the audience, could intervene and suggest ways to overcome the cost barrier, or present information about the long-term benefits of solar energy.”  \n\tAssign each group one of the GG7 targets to focus their scenario on.  \n\tHave each group brainstorm a short scenario (3-5 minutes long) related to their assigned target, or give them a prewritten scenario/starting point. Encourage students to:\n\n* Be specific: Instead of general ideas, focus on a particular situation or challenge.  \n* Include conflict: A good scenario has a clear conflict or dilemma that needs to be resolved.  \n* Consider stakeholders: Who are the different people or groups involved in this issue? What are their perspectives and motivations?\n\n\tExample scenarios for each target:\n\n*"
  },
  {
    "title": "Target 7.1 \\-",
    "content": "Universal access to affordable, reliable and modern energy services:  \n  * A remote village in Nepal relies on kerosene lamps for lighting, which are expensive, dangerous, and unhealthy. A new micro-hydropower project is  proposed, but some villagers are hesitant due to concerns about cost and environmental impact.  \n  * Possible characters: Village elder, young student, local shopkeeper, project developer, environmental activist.  \n*"
  },
  {
    "title": "Target 7.2 \\-",
    "content": "Increase renewable energy share:  \n  * A coastal town is considering building an offshore wind farm to reduce its reliance on fossil fuels. However, some residents worry about the visual impact on the coastline and potential effects on marine life.  \n  * Possible characters: Town mayor, local fisherman, wind energy developer, tourism operator, concerned citizen.  \n*"
  },
  {
    "title": "Target 7.3 \\-",
    "content": "Double the global rate of improvement in energy efficiency:  \n  * A high school is trying to reduce its energy consumption and carbon footprint. Students have different ideas about the best approach, such as installing solar panels, upgrading to energy-efficient appliances, or implementing a school-wide energy conservation campaign.  \n  * Possible characters: Student council president, school principal, science teacher, maintenance worker, student environmental club members.  \n*"
  },
  {
    "title": "Target 7.a \\-",
    "content": "Enhance international cooperation:  \n  * A group of students from different countries are participating in an online forum to discuss solutions to energy poverty in developing nations. They debate the merits of different approaches, such as providing solar lanterns, investing in microgrids, or promoting energy-efficient cookstoves.  \n  * Possible characters: Students from different countries with varying perspectives on energy access and development.  \n*"
  },
  {
    "title": "Target 7.b \\-",
    "content": "Expand infrastructure and upgrade technology:  \n  * A small island nation in the Pacific is struggling to provide reliable electricity to its residents due to its limited resources and vulnerability to natural disasters. They are exploring options for building a resilient and sustainable energy system, such as investing in solar power and battery storage.  \n  * Possible characters: Island government official, community leader, renewable energy expert, international aid worker, local resident.\n\n\tEncourage students to draw from real-world examples, personal experiences, or current events. This will make their scenarios more relevant and engaging.  \n\tProvide time for groups to brainstorm, outline their scenarios, and assign roles."
  },
  {
    "title": "Forum Theater Performance",
    "content": "Invite one group to volunteer to perform their scenario for the class.  \n\tGive the group a few minutes if needed to prepare their performance space and decide on any basic props/costumes they might want to use (if available), but ensure they are keeping it simple. The focus should be on the story and interaction.  \n\tThe group performs their scenario for the class, clearly depicting the challenge or conflict related to their target.  \n\tAfter the initial performance, explain to the audience that they have the power to intervene and change the course of the story.\n\n* “Stop\\!” Explain that any audience member can shout “Stop\\!” at any point during a scene where they think a character could make a different choice or take a different action.  \n* “What else could they do?” When the scene is stopped, encourage the audience to offer suggestions: “What else could the character do in this situation?”  \n* “Spect-actor” takes the stage: If an audience member has a strong suggestion, they can even step into the scene and replace the original actor, demonstrating their idea. This person becomes a “spect-actor.”\n\n\tThe actors (including any spect-actors) then improvise and incorporate the audience’s suggestions, replaying the scene with the new ideas. Examples:\n\n*"
  },
  {
    "title": "Target 7.1 \\-",
    "content": "Universal access to affordable, reliable and modern energy services:  \n  * Original Scene: The village elder expresses concerns about the cost of the micro-hydropower project, fearing it will burden the community financially.  \n  * Audience Intervention: “Stop\\! Maybe the villagers could apply for a grant or microloan to help finance the project.”  \n  * Replay: The project developer enters the scene and mentions the availability of government subsidies and international aid programs that could help reduce the financial burden on the community. The village elder expresses renewed interest and suggests organizing a community meeting to discuss fundraising options.  \n*"
  },
  {
    "title": "Target 7.2 \\-",
    "content": "Increase renewable energy share:  \n  * Original Scene: The local fisherman worries that the offshore wind farm will disrupt fish migration patterns and negatively impact his livelihood.  \n  * Audience intervention: “Stop\\! Could the wind farm developers conduct an environmental impact assessment to address the fisherman’s concerns?”  \n  * Replay: The wind energy developer presents data from environmental studies showing minimal impact on marine life and highlights the potential for creating new jobs in the renewable energy sector. The fisherman remains skeptical but agrees to participate in further discussions with the developers and marine biologists.  \n*"
  },
  {
    "title": "Target 7.3 \\-",
    "content": "Double the global rate of improvement in energy efficiency:  \n  * Original Scene: The student council president proposes installing solar panels on the school roof, but the principal expresses concerns abou the upfront costs.  \n  * Audience Intervention: “Stop\\! Could the students organize fundraising events or apply for grants to help cover the cost of the solar panels?”  \n  * Replay: The students present a plan for a school-wide fundraising campaign involving bake sales, car washes, and a student-led concert. The principal is impressed by their initiative and agrees to explore grant opportunities to support the project.  \n*"
  },
  {
    "title": "Target 7.a \\-",
    "content": "Enhance international cooperation:  \n  * Original Scene: A student from a developed country suggests providing solar lanterns to communities without electricity, but a student from a developing country argues that this is a short-term solution and doesn’t address the root causes of energy poverty.  \n  * Audience Intervention: “Stop\\! Could they explore ways to combine solar lanterns with educational programs on sustainable energy and entrepreneurship?”  \n  * Replay: The students discuss the idea of creating a “solar lantern lending library” coupled with workshops on how to use and maintain the lanterns, as well as training on how to start small businesses using solar power. They agree that this approach could empower communities and promote long-term sustainability.  \n*"
  },
  {
    "title": "Target 7.b \\-",
    "content": "Expand infrastructure and upgrade technology:  \n  * Original Scene: The community leader expresses frustration with the lack of technical expertise and financial resources to implement a resilient energy system on their island.  \n  * Audience Intervention: “Stop\\! Could they partner with unversities or international organizations to access technical assistance and funding?”  \n  * Replay: The international aid worker informs the community leader about a program that connects small island nations with experts in renewable energy and sustainable development. They discuss the possibility of securing grants and training local technicians to build and maintain the new energy infrastructure.\n\nThis process of intervention and replay can continue multiple times (depnding on time) allowing for explaration of different perspectives and potential solutions. Encourage the audience to consider:\n\n* Different stakeholders: How might different people or groups be affected by the proposed solutions?  \n* Potential obstacles: What challenges might arise in implementing these solutions?  \n* Long-term impact: What are the potential long-term benefits and drawbacks of different approaches?"
  },
  {
    "title": "Assessment:",
    "content": "* Consistent and enthusiastic involvement in all phases of the lesson, including the initial energy discussion, scenario creation, forum theater performances, class discussions.  \n* Comprehension of Global Goal 7 and its targets and core concepts (e.g., energy access, renewable energy, energy efficiency). This will be evidenced through the relevance and accuracy of the scenarios, the ability to improvise within the forum theater format, and verbal explanations.  \n* Originality and effectiveness in crafting a compelling scenario that highlights a relevant conflict related to the assigned concept. Asses ability to improvise and adapt within the forum theater format, responding to audience interventions in a thoughtful and engaging manner.  \n* How clearly and powerfully the group’s performance communicated the challenges and potential solutions related to the concept/goal. Did the performance successfully evoke thought, emotion, or a desire for action in the audience?  \n* Understanding of the forum theater process itself, including the ability to effectively use techniques like “Stop\\!” and “What else could they do?” to explore different perspectives and solutions.  \n* Ability to work effectively within the small groups, contributing ideas, respecting diverse viewpoints, and collaborating cohesively to develop and perform the scenario.  \n* Nuance and depth of understanding demonstrated in the reflections, particularly concerning the power of theater as a tool for social change and the complexities of achieving affordable and clean energy."
  }
],
	reflectionQuestions: [
  "What were some of the key challenges related to energy access and sustainability highlighted in the forum theater scenarios?",
  "What were some of the most creative or surprising solutions that emerged during the forum theater activity?",
  "How did participating in the forum theater activity change your perspective on Global Goal 7?",
  "Did stepping into the role of a “spect-actor” and influencing the scene change your understanding of the issues?",
  "How did exploring different perspectives through forum theater help you to think critically about energy solutions?",
  "How can theater and performance be used as tools for social change and advocacy, particularly in relation to energy and sustainability?",
  "*Assessment:**",
  "Consistent and enthusiastic involvement in all phases of the lesson, including the initial energy discussion, scenario creation, forum theater performances, class discussions.",
  "Comprehension of Global Goal 7 and its targets and core concepts (e.g., energy access, renewable energy, energy efficiency). This will be evidenced through the relevance and accuracy of the scenarios, the ability to improvise within the forum theater format, and verbal explanations.",
  "Originality and effectiveness in crafting a compelling scenario that highlights a relevant conflict related to the assigned concept. Asses ability to improvise and adapt within the forum theater format, responding to audience interventions in a thoughtful and engaging manner.",
  "How clearly and powerfully the group’s performance communicated the challenges and potential solutions related to the concept/goal. Did the performance successfully evoke thought, emotion, or a desire for action in the audience?",
  "Understanding of the forum theater process itself, including the ability to effectively use techniques like “Stop\\!” and “What else could they do?” to explore different perspectives and solutions.",
  "Ability to work effectively within the small groups, contributing ideas, respecting diverse viewpoints, and collaborating cohesively to develop and perform the scenario.",
  "Nuance and depth of understanding demonstrated in the reflections, particularly concerning the power of theater as a tool for social change and the complexities of achieving affordable and clean energy."
],
};

registerLessonContent(lessonContent);

export default lessonContent;

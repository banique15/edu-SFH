import type { LessonContentData } from '../types';
import { registerLessonContent } from '../index';

const lessonContent: LessonContentData = {
	goalNumber: 2,
	artForm: 'Art' as const,
	gradeLevel: '9-12' as const,
	title: "Exploring Hunger and Hope with Fine Art",
	duration: "15-45 MINUTES",
	materials: [
  {
    "name": "Large sheets of drawing paper or recycled cardboard",
    "isOptional": false
  },
  {
    "name": "Art supplies: Markers, paints, colored pencils, charcoal, pastels, collage materials (magazines, newspapers, fabric scraps)",
    "isOptional": false
  },
  {
    "name": "Scissors and glue (for collage)",
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
	introduction: "Begin with a thought-provoking piece of art related to hunger. Examples include Zero Hunger Mural by Emmanuel Jarus, Transaction Denied by Xena Ni and Mollie Ruskin, Gorta by Lilian Lucy Davidson, Guernica by Pablo Picasso, The Potato Eaters by Vincent Van Gogh, and Empty Stomachs by Subodh Gupta. Engage students in a brief discussion about the dual nature of the hunger issue; the harsh realities and the potential for solutions. Present students with two creative options: Challenge of Hunger (depict the harsh realities of hunger and food insecurity, emphasize the emotional and physical impact of hunger, discuss how art can be used to raise awareness, evoke empathy, and spur action) or Seeds of Hope (illustrate solutions and positive actions that address hunger, highlight the importance of positive action and creative solutions, encourage students to explore how art can inspire, uplift, and empower communities). Give students a few minutes to quietly consider which theme they feel most drawn to. Explain that there are no right or wrong answers, and encourage students to choose the theme that resonates most with them.",
	steps: [
  {
    "title": "Artistic Exploration",
    "content": "Provide a variety of art supplies and encourage students to explore different art forms (drawing, painting, collage) to express their chosen theme. Research (optional/if timing allows): If students want to conduct online research for inspiration or reference images, guide them towards reputable sources like World Food Programme (WFP), Food and Agriculture Organization (FAO), Action Against Hunger, and reputable news outlets (e.g., The New York Times, BBC). If using the internet for research purposes, remind students of responsible online behavior and reliable sources. Circulate around the classroom, offering support and encouraging experimentation. Ask open-ended questions to spark creativity and deeper thinking: What emotions are you trying to convey through your art? What symbols or metaphors are you using to represent hunger or hope? How does your art connect to your personal experiences or beliefs about food and hunger? What message do you hope viewers will take away from your artwork? Offer technical assistance and suggestions as needed.",
    "order": 1
  },
  {
    "title": "Artist Statement",
    "content": "Have students write brief Artist Statements about their work, explaining their choices and intentions. The statement should include: Title (give artwork a meaningful title), Medium (what materials were used?), Inspiration (what was the inspiration to create this piece? Was it a specific image, story, or personal experience?), Message (what is the main message or feeling of the piece?), and Impact (how does the student hope this artwork will affect viewers?).",
    "order": 2
  },
  {
    "title": "Gallery Showcase",
    "content": "Designate an area where artwork can be displayed prominently. This could be a bulletin board, a wall, or even tables arranged in a gallery-like fashion. If preferred, students can stand next to their artwork and share their creative choices and thought processes with the class. For larger classes (or if preferred) consider pairing students for \"gallery walk\" discussions, during which they provide respectful feedback on each others work.",
    "order": 3
  },
  {
    "title": "Gallery Walk",
    "content": "Allow students to walk the \"gallery\" and view each other's work, offering constructive feedback and questions. You can provide prompts to guide their observations: What do you think is the most successful aspect of this artwork? What emotions or thoughts does this piece evoke in you? Can you identify any specific elements (colors, lines, shapes) that contribute to the overall message? If you were the artist, what might you change or add to this piece, and why? Lead a class discussion about the artwork, focusing on common themes, powerful images, and the emotions evoked. Ask for volunteers to share their artwork and artist statements. Guide the discussion towards identifying common themes, such as: The struggle for survival, The power of community, Hope for a brighter future, The importance of sharing resources. Point out powerful images that evoke strong emotions, such as: Empty bowls or plates, Hands reaching out for food, Faces filled with despair or hope. Encourage students to reflect on how the artwork collectively tells a story about hunger and the human spirit. Discuss the role of art in raising awareness and inspiring action around social issues.",
    "order": 4
  },
  {
    "title": "Reflection & Summary",
    "content": "Have students reflect on their learning experience through discussion or writing. Ask guiding questions like: How did creating art help you understand the challenges of hunger? Did your chosen theme (challenge or hope) influence your artistic expression? In your artwork, did you use any symbols or metaphors to represent hunger or hope? How do those elements contribute to your message? How might your personal food choices and habits be connected to the global issue of hunger? Do you think individuals have a responsibility to take action against hunger? Why or why not? How can we use art or creative expression to raise awareness about hunger and inspire change?",
    "order": 5
  }
],
	reflectionQuestions: [
  "How did creating art help you understand the challenges of hunger?",
  "Did your chosen theme (challenge or hope) influence your artistic expression?",
  "In your artwork, did you use any symbols or metaphors to represent hunger or hope? How do those elements contribute to your message?",
  "How might your personal food choices and habits be connected to the global issue of hunger?",
  "Do you think individuals have a responsibility to take action against hunger? Why or why not?",
  "How can we use art or creative expression to raise awareness about hunger and inspire change?"
],
	discussionPrompts: [
		"What images or ideas come to mind when you think about hunger?",
		"Can you think of any examples of people or communities overcoming food insecurity?",
		"What emotions are you trying to convey through your art?",
		"What symbols or metaphors are you using to represent hunger or hope?",
		"How does your art connect to your personal experiences or beliefs about food and hunger?",
		"What message do you hope viewers will take away from your artwork?",
		"What do you think is the most successful aspect of this artwork?",
		"What emotions or thoughts does this piece evoke in you?",
		"Can you identify any specific elements (colors, lines, shapes) that contribute to the overall message?",
		"If you were the artist, what might you change or add to this piece, and why?"
	],
	personalConnection: "Students reflect on how their personal food choices and habits might be connected to the global issue of hunger. They consider whether individuals have a responsibility to take action against hunger and how they can use art or creative expression to raise awareness about hunger and inspire change.",
	closingActivities: [
		{
			title: "Gallery Walk",
			description: "Students walk the gallery and view each other's work, offering constructive feedback and questions. They identify common themes, powerful images, and emotions evoked. They discuss the role of art in raising awareness and inspiring action around social issues."
		},
		{
			title: "Gallery Showcase",
			description: "Artwork is displayed prominently in a designated area. Students can stand next to their artwork and share their creative choices and thought processes with the class, or participate in paired gallery walk discussions."
		}
	],
	objectives: [
		{
			category: "Knowledge",
			description: "Define food insecurity in its various dimensions (chronic, acute, hidden hunger) and identify its complex causes (poverty, conflict, climate change, inequality, food waste) and far-reaching consequences on individuals, families, and communities globally.",
			nccasStandard: "Cr1.1.la, Cn10.1.la",
			order: 1
		},
		{
			category: "Knowledge",
			description: "Understand the critical interconnectedness of hunger with other global challenges such as poverty, armed conflict, environmental degradation, and social injustice, analyzing how these factors exacerbate food insecurity and hinder sustainable development.",
			nccasStandard: "Cn10.1.la, Cn11.1.la",
			order: 2
		},
		{
			category: "Discourse",
			description: "Participate thoughtfully and respectfully in nuanced discussions about the multifaceted challenges of food insecurity, exploring diverse perspectives from individuals, communities, policymakers, and activists working on solutions.",
			nccasStandard: "Re9.1.la, Cn11.1.la",
			order: 3
		},
		{
			category: "Discourse",
			description: "Analyze and interpret the powerful ways in which music and art across various cultures and time periods have depicted the realities of hunger, food scarcity, and the human yearning for sustenance and dignity.",
			nccasStandard: "Re7.1.la, Re8.1.la",
			order: 4
		},
		{
			category: "Discourse",
			description: "Communicate their developing ideas, informed insights, and potential solutions for addressing hunger and promoting food security through purposeful and impactful creative expression in movement, art creation, and articulate discussions.",
			nccasStandard: "Cr3.1.la, Pr5.1.la",
			order: 5
		},
		{
			category: "Attitudes",
			description: "Develop a profound sense of empathy and compassion for the lived experiences of individuals and communities facing the daily realities of food insecurity, fostering a deeper understanding of their resilience and dignity.",
			nccasStandard: "Re8.1.la, Cn10.1.la",
			order: 6
		},
		{
			category: "Attitudes",
			description: "Appreciate the fundamental importance of achieving food security and improved nutrition as a cornerstone for a healthy, equitable, and sustainable world, recognizing it as a basic human right.",
			nccasStandard: "Cn11.1.la",
			order: 7
		},
		{
			category: "Attitudes",
			description: "Cultivate an open and critical mindset towards considering diverse and innovative solutions and approaches to tackling the complex challenge of hunger, acknowledging the need for multi-faceted and collaborative action.",
			nccasStandard: "Re9.1.la",
			order: 8
		},
		{
			category: "Capacity",
			description: "Develop advanced critical thinking skills by thoroughly analyzing the systemic causes and devastating consequences of hunger and food insecurity at local, national, and global scales, evaluating the strengths and limitations of various proposed solutions.",
			nccasStandard: "Re9.1.la, Cn10.1.la",
			order: 9
		},
		{
			category: "Capacity",
			description: "Practice sophisticated collaboration and articulate communication skills through engaging in thoughtful group activities, co-creating impactful artistic responses, and effectively conveying complex ideas and proposed actions.",
			nccasStandard: "Cr2.1.la, Pr5.1.la",
			order: 10
		},
		{
			category: "Capacity",
			description: "Develop refined creative expression skills through purposeful experimentation and thoughtful application of diverse artistic mediums (music, movement, drama, visual art, writing) to communicate nuanced understandings and inspire meaningful engagement with the issue of hunger.",
			nccasStandard: "Cr3.1.la",
			order: 11
		},
		{
			category: "Action",
			description: "Brainstorm, evaluate, and propose practical, ethical, and sustainable solutions to address food insecurity at various levels, considering the interconnectedness of the food system and the need for systemic change.",
			nccasStandard: "Cr3.1.la, Pr6.1.la, Cn11.1.la",
			order: 12
		},
		{
			category: "Action",
			description: "Identify and explore concrete ways they can take informed and meaningful action within their own communities and beyond to combat hunger, promote food security, and support organizations working towards these goals.",
			nccasStandard: "Pr6.1.la, Cn11.1.la",
			order: 13
		},
		{
			category: "Action",
			description: "Commit to ongoing learning and critical reflection on the complexities of hunger and its solutions, fostering a sense of sustained engagement and responsible global citizenship in the pursuit of a Zero Hunger world.",
			nccasStandard: "Re9.1.la, Cn11.1.la",
			order: 14
		}
	],
	media: [
		{
			title: "Zero Hunger Mural",
			artist: "Emmanuel Jarus",
			description: "Mural depicting hunger and hope",
			url: "https://images.squarespace-cdn.com/content/55b7f4ffe4b0a286c4c3499e/1601909498615-J10UJASP71CANOJY4HKG/Photo_6684768_DJI_96_jpg_20120327_0_202092774948_photo_original.jpg?format=1500w&content-type=image%2Fjpeg",
			order: 1
		},
		{
			title: "Transaction Denied",
			artist: "Xena Ni and Mollie Ruskin",
			description: "Artwork exploring food insecurity",
			url: "https://www.artshelp.com/content/images/2022/09/1AD950CF-3F86-4EB2-A573-9B77CDA3699B-OP.jpg",
			order: 2
		},
		{
			title: "Gorta",
			artist: "Lilian Lucy Davidson",
			description: "Artwork depicting hunger",
			url: "https://roaringwaterjournal.com/wp-content/uploads/2019/01/gorta-by-lilian-lucy-davidson-ighm.jpg",
			order: 3
		},
		{
			title: "Guernica",
			artist: "Pablo Picasso",
			description: "Famous artwork depicting suffering and conflict",
			order: 4
		},
		{
			title: "The Potato Eaters",
			artist: "Vincent Van Gogh",
			description: "Artwork depicting rural poverty and hunger",
			order: 5
		},
		{
			title: "Empty Stomachs",
			artist: "Subodh Gupta",
			description: "Contemporary artwork exploring hunger",
			order: 6
		},
		{
			title: "World Food Programme",
			description: "Research source for hunger and food security information",
			url: "https://www.wfp.org/",
			order: 7
		},
		{
			title: "Food and Agriculture Organization",
			description: "Research source for hunger and food security information",
			url: "https://www.fao.org/home/en",
			order: 8
		},
		{
			title: "Action Against Hunger",
			description: "Research source for hunger and food security information",
			url: "https://www.actionagainsthunger.org/",
			order: 9
		},
		{
			title: "The New York Times",
			description: "Reputable news source for hunger-related articles",
			url: "https://www.nytimes.com/",
			order: 10
		},
		{
			title: "BBC",
			description: "Reputable news source for hunger-related articles",
			url: "https://www.bbc.com/",
			order: 11
		}
	],
	assessmentCriteria: [
  "Consistent and enthusiastic involvement in all phases of the lesson, including the initial art observation and discussion, creative choice selection, individual artwork creation, gallery walk, and class discussions.",
  "Comprehension of Global Goal 2 and its targets and core concepts (e.g., food insecurity, malnutrition, sustainable agriculture, resilience) as demonstrated through the thematic content and symbolism within the artwork and verbal explanations.",
  "Originality and effectiveness in using chosen art forms (drawing, painting, collage) and materials to vividly represent the chosen theme (challenge of hunger or seeds of hope). Look for impacgtful visual interpretations.",
  "How clearly and powerfully the finished artwork communicates its intended message about hunger and/or hope. Did the piece successfully evoke thought or emotion in the viewer?",
  "Thoughtfulness of artistic choices, as articulated in the Artist Statements, explaining inspiration, message, and intended impact.",
  "Ability to observe and interpret classmates' artwork thoughtfully, providing constructive feedback and demonstrating an understanding of how art conveys complex themes.",
  "Nuance and depth of understanding demonstrated in reflections, particuclarly concerning the human experience of hunger, the role of art in social change, and the importance of taking action."
],
};

registerLessonContent(lessonContent);

export default lessonContent;

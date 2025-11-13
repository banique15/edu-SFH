import type { LessonContentData } from '../types';
import { registerLessonContent } from '../index';

const lessonContent: LessonContentData = {
	goalNumber: 11,
	artForm: 'Art' as const,
	gradeLevel: '9-12' as const,
	title: "ART",
	duration: "",
	materials: [
  {
    "name": "Simple printmaking supplies",
    "isOptional": false
  },
  {
    "name": "Foam (recycled egg cartons, to-go containers, foam sheets, puffy cardboard, etc.)",
    "isOptional": false
  },
  {
    "name": "“Carving” tools (pens or something with a hard tip)",
    "isOptional": false
  },
  {
    "name": "Cardboard or cardstock",
    "isOptional": false
  },
  {
    "name": "Brayers or rollers (can also use paint brushes or any other tool to brush paint onto the stamp or through the stencil)",
    "isOptional": false
  },
  {
    "name": "Printing ink (tempera is a good option)",
    "isOptional": false
  },
  {
    "name": "Paper for printing",
    "isOptional": false
  },
  {
    "name": "Scissors (or other cutting tools), glue, other collage materials if wanted",
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
    "name": "[How to Make Styrofoam Prints](https://www.youtube.com/watch?v=eCjQXse8eB0)  [How do to Printmaking with Styrofoam](https://www.youtube.com/watch?v=g9f0yKfLBpY)",
    "isOptional": false
  },
  {
    "name": "[Printmaking: Super Easy Styrofoam Technique](https://www.youtube.com/watch?v=ls62PSy4qkE)  [DIY Printmaking with Household Items](https://www.youtube.com/watch?v=Y1SlLvguCXk)",
    "isOptional": false
  },
  {
    "name": "Stenciling Videos:",
    "isOptional": false
  },
  {
    "name": "[DIY Handmade Stencil Making & Printing](https://www.youtube.com/watch?v=C6ZmVeVWt4k)  [DIY Handmade Stencil Making & Printing](https://www.youtube.com/watch?v=gaOZywcJHGk)",
    "isOptional": false
  },
  {
    "name": "[Stencil Printing](https://www.youtube.com/watch?v=nbsjnkG_hmw)",
    "isOptional": false
  }
],
	introduction: "Begin by showing a short video or slideshow of compelling printmaking examples from various artists and cultures  \n\tExamples  \n\t\t[Works by Elizabeth Catlett](https://www.google.com/search?q=Works+by+Elizabeth+Catlett&rlz=1C5CHFA_enUS1124US1124&oq=Works+by+Elizabeth+Catlett&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQIRifBTIHCAIQIRifBTIHCAMQIRifBTIHCAQQIRifBTIHCAUQIRifBTIHCAYQIRifBTIHCAcQIRifBTIHCAgQIRifBTIHCAkQIRifBdIBBzM3MGowajmoAgCwAgE&sourceid=chrome&ie=UTF-8) (African American printmaker who addressed social justice themes).  \n\t\t[Japanese Woodblock Prints](https://www.google.com/search?sca_esv=0e1ef5976a2cfd09&rlz=1C5CHFA_enUS1124US1124&sxsrf=ADLYWIKlL-4T5FLo-_L-hNWfkCaoAZ2LSA:1736463428288&q=japanese+woodblock+prints&udm=2&fbs=AEQNm0Aa4sjWe7Rqy32pFwRj0UkWd8nbOJfsBGGB5IQQO6L3J03RPjGV0MznOJ6Likin94o1r5LfEXWFkRDyPajU30-jeRNtfXivtrn0HJW3O7kvgI-lHSudxpbNHbSsIRvUP_2WismCJcykTxgj22XPvKjjxArAYI45dqUtbdGjUVi9RZh_7MQCiY9JPcpRiGKzK73U0q5CTo-L_4ZOeZpB6SkJFgc3Pw&sa=X&sqi=2&ved=2ahUKEwjz3ruu3umKAxVT2MkDHRxFDc0QtKgLegQIFBAB&biw=1200&bih=728&dpr=2) (Traditional technique with bold lines and vibrant colors).  \n\t\t[Prints by Käthe Kollwitz](https://www.google.com/search?sca_esv=0e1ef5976a2cfd09&rlz=1C5CHFA_enUS1124US1124&sxsrf=ADLYWIKoN4nGEur_tKUYeATbFfpex4MWtQ:1736463471621&q=Prints+by+K%C3%A4the+Kollwitz&udm=2&fbs=AEQNm0Aa4sjWe7Rqy32pFwRj0UkWd8nbOJfsBGGB5IQQO6L3J03RPjGV0MznOJ6Likin94o1r5LfEXWFkRDyPajU30-jlDcXwRVTByGx4VdKZ6GPzFySlTPBGOjLRBdHTKxeZmdeIA02KMtcmXYbZ9s2Kwl2xj5KMk3FW13OuMR1VH1zYgWAk0ArXQEf7T3DGJM9HnfG-20ubQhN1hlsmfo2u2xXJCINMg&sa=X&ved=2ahUKEwjTxZDD3umKAxVkyMkDHTeiG6QQtKgLegQIFBAB&biw=1200&bih=728&dpr=2) (German Expressionist artist who depicted social inequality and human suffering).  \n\t\t[Prints by Shepard Fairy](https://www.google.com/search?sca_esv=0e1ef5976a2cfd09&rlz=1C5CHFA_enUS1124US1124&sxsrf=ADLYWILjsudJcm32evLARaLLnX9Zg3ufjA:1736463516272&q=shepard+fairey+prints&udm=2&fbs=AEQNm0Aa4sjWe7Rqy32pFwRj0UkWd8nbOJfsBGGB5IQQO6L3J03RPjGV0MznOJ6Likin94pT_oR1DTSof42bOBxoTNxGeB1pS5_mub79WlyOO98XhEgJ5ByfFkeFUd9hlGBCmUZgrzLESyrkqGBL7osK5ZH3-0drzcH2VIMmwLRButbs-cMHhV8leQ--AYHsqw2WSrddKuHyCX6iowNOKZDTcJOO0G_14g&sa=X&sqi=2&ved=2ahUKEwi33LXY3umKAxWgM9AFHe4UK3YQtKgLegQIExAB&biw=1200&bih=728&dpr=2) (Contemporary social commentary)  \n\tGuiding Questions\n\n* What do you notice about these artworks?  \n* What messages or ideas do you think they are trying to convey?  \n* How do these artworks make you feel?\n\nFacilitate a discussion about the characteristics of printmaking  \n\tKey Points\n\n* The process of creating images by transferring ink from a matrix (printing plate) to a surface (usually paper).  \n* Allows for multiple copies of the same image to be created.  \n* Can be used to express a wide range of ideas and emotions.  \n* Encompasses a variety of techniques (relief printing, intaglio, lithography, screen printing, monotype).\n\n\tGuiding Questions\n\n* What are some of the advantages of creating art through printmaking?  \n* Why do you think artists choose to express themselves through this medium?  \n* How can printmaking be used to tell stories, convey messages, or raise awareness about social issues?\n\nIntroduce/re-introduce Global Goal 10: Reduced Inequalities. Explain the core idea of reducing inequality within and among countries, ensuring equal opportunities and access to resources for all.  \nBriefly introduce the different targets withing Global Goal 10, highlighting their interconnectedness and importance.  \n\tGuiding Questions\n\n* What are some of the causes and consequences of inequality?  \n* How does inequality affect different people and communities around the world?  \n* What can we do to create a more just and equitable world?",
	steps: [
  {
    "title": "Printing Equality: Exploring Global Goal 10 Through Printmaking",
    "content": "**(30-60 MINUTES)**"
  },
  {
    "title": "Exploring Printmaking Techniques",
    "content": "*Relief Printing:* Discuss and show the process of relief printing, where the image is created by carving away material from a printing plate (e.g., foam sheet, linoleum). The raised areas hold the ink and transfer the image to the paper.  \n\tExamples\n\n* [After Selling His Blood](https://artsandculture.google.com/asset/after-selling-his-blood/vgG44UFqqar1Ng?hl=en), Huang Xinbo  \n  * This Chinese woodblock print demonstrates how a simple relief print can still push boundaries and evoke emotion.  \n* [Bread and Puppet theater posters](https://www.google.com/search?q=%22Bread+and+Puppet+Theatre%22+posters&rlz=1C5CHFA_enUS1124US1124&oq=%22Bread+and+Puppet+Theatre%22+posters&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIICAEQABgWGB4yCggCEAAYgAQYogQyCggDEAAYgAQYogQyCggEEAAYogQYiQXSAQcyNTVqMGo0qAIAsAIA&sourceid=chrome&ie=UTF-8)  \n  * This Vermont-based theater company uses woodcut relief prints to create large-scale, politically charged posters with bold imagery and text.  \n* [The Prophet](https://www.moma.org/collection/works/62151), Emil Nolde  \n  * The German Expressionist woodcut features bold lines and stark contrasts to create a powerful and emotional portrait.  \n* [Relief Printmaking with Foam, Museum of Modern Art](https://www.youtube.com/watch?v=N0S8o_LEqkw)  \n  * This short video demonstrates the process of creating a relief print using foam board and simple carving tools.\n\n\tGuiding Questions\n\n* What are some of the different tools and materials used in relief printing?  \n* How can you create different textures and effects through carving?  \n* What are some of the advantages and limitations of relief printing?\n\n*Monotype:* Discuss and show the process of monotype, where a unique image is created by drawing or painting on a smooth surface (e.g., glass, Plexiglas) and then transferring the image to paper.  \n\tExamples\n\n* [Three Ballet Dancers (Trois danseuses)](https://www.moma.org/audio/playlist/27/479), Edgar Degas  \n  * This monotype print captures the atmospheric and expressive qualities of the medium to create a haunting image.  \n* [Man With An Ax](https://www.artic.edu/artworks/159076/man-with-an-ax), Paul Gauguin  \n  * This vibrant monotype print demonstrates the use of bold colors to create a unique and captivating image.  \n* [Poppys](https://www.mutualart.com/Artwork/POPPYS/7CC97AD82DB7BE36), Tracy Emin  \n  * This contemporary monotype print gives us a different view of monotype.  \n* [Monotype Printmaking at SUNY Oswego](https://www.youtube.com/watch?v=C2pJaaR3Km0)\n\nGuiding Questions\n\n* How is monotype different from other printmaking techniques?  \n* What are some of the creative possibilities of monotype?  \n* How can you create different textures and layers in a monotype?\n\n*Stenciling:* Discuss and show the process of stenciling, where an image is created by cutting a design into a stencil material (e.g., paper, cardboard) and then applying ink or paint through the openings.  \n\tExamples\n\n* [Obey](https://store.obeygiant.com/products/obey-offset-poster), Shepard Fairey  \n  * This iconic stencil print uses bold graphics and a limited color palette to create a powerful and recognizable image.  \n* [Love is in the Air](https://banksyexplained.com/love-is-in-the-air/), Banksy  \n  * This stencil print depicts a masked protester throwing a bouquet of flowers, offering a message of peace and hope in the face of conflict.  \n* [How to Screen Print Using the Stencil Technique, Blick Art Materials](https://www.youtube.com/watch?v=9OCgFA9RJIo)  \n  * This video demonstrates the process of creating stencils and using them to create screen prints.\n\nGuiding Questions\n\n* What are some of the advantages of using stencils in printmaking?  \n* How can you create multi-layered stencil prints?  \n* How can stencils be used to create bold and graphic images?"
  },
  {
    "title": "Printmaking and Global Goal 10",
    "content": "Facilitate a brainstorming session where students generate ideas for printmaking projects that connect to the different targets within Global Goal 10\\.  \n\tGuiding Questions\n\n* What are some visual metaphors or symbols that could represent each target?  \n* How can we use printmaking techniques to convey the challenges and consequences of inequality?  \n* How can we use printmaking to promote understanding, empathy, and action towards achieving Global Goal 10?\n\n\tExamples\n\n*"
  },
  {
    "title": "Target 10.1",
    "content": "*(Income Growth):* Create a print with a ladder motif, where the rungs represent different income levels, and the distance between the rungs symbolize income inequality.  \n*"
  },
  {
    "title": "Target 10.2",
    "content": "*(Social Inclusion):* Create a print with overlapping figures and colors, representing the diversity and interconnectedness of society and the importance of inclusion.  \n*"
  },
  {
    "title": "Target 10.3",
    "content": "*(Equal Opportunity):* Create a series of prints with figures breaking free from chains or barriers, symbolizing the struggle for equal opportunities and the dismantling of discriminatory systems.  \n*"
  },
  {
    "title": "Target 10.4",
    "content": "*(Social Protection):* Create a print with a safety net motif, representing the importance of social protection policies in supporting vulnerable populations.  \n*"
  },
  {
    "title": "Target 10.5",
    "content": "*(Financial Markets):* Create a print with abstract shapes and lines representing the complexity and interconnectedness of global financial markets, highlighting the need for regulation and transparency.  \n*"
  },
  {
    "title": "Target 10.6",
    "content": "*(Global Institutions):* Create a print with a globe motif and figures representing different countries, emphasizing the importance of equitable representation and voice for developing countries in global decision-making.  \n*"
  },
  {
    "title": "Target 10.7",
    "content": "*(Migration):* Create a series of prints depicting the journeys and experiences of migrants, highlighting the challenges and opportunities associated with migration and the need for safe and responsible migration policies.  \n*"
  },
  {
    "title": "Target 10.a",
    "content": "*(Special and Differential Treatment):* Create a print with scales representing the imbalance of power between developed and developing countries, advocating for fair trade practices and support for developing economies.  \n*"
  },
  {
    "title": "Target 10.b",
    "content": "*(Development Assistance):* Create a print with hands reaching out to help others, symbolizing the importance of development assistance and international cooperation in reducing inequality.  \n*"
  },
  {
    "title": "Target 10.c",
    "content": "*(Remittances):* Create a print with a money transfer motif, highlighting the importance of reducing transaction costs for migrant remittances to support families and communities in developing countries.\n\nDivide students into smaller groups or allow them to work individually. Each group/student selects or is assigned one target from Global Goal 10 (or can focus on the Goal holistically) and creates a printmaking project that represents a specific aspect of that target/goal.  \nEncourage students to experiment with different techniques to convey their chosen message effectively.  \nWhile students work, circulate to observe, offer encouragement, and answer questions.  \n\tPrompt Deeper Thinking\n\n* I see you’re using a lot of contrasting colors. How does that connect to the target you chose/Global Goal 10?  \n* What message are you trying to convey with this image?  \n* How does your artwork encourage viewers to think about inequality and social justice?"
  },
  {
    "title": "Exhibition and Discussion",
    "content": "Once the artwork is complete, have students display their prints around the classroom. Allow time for students to walk around, view each other’s work, and engage in informal discussions.  \nFacilitate a class discussion about the artwork, focusing on the connection to Global Goal 10 and the effectiveness of the chosen printmaking techniques.  \n\tGuiding Questions\n\n* What are some of the most powerful or impactful artworks you saw?  \n* How did the different artworks make you think differently about inequality and social justice?  \n* What are some of the common themes or messages you noticed in the artwork?  \n* How did the use of printmaking techniques enhance the message of the artwork?"
  }
],
	reflectionQuestions: [
  "How did you use printmaking techniques (like relief, monotype, or stenciling) help you express your ideas and emotions about reducing inequalities?",
  "What did you learn about how repetition and multiple copies (inherent in printmaking) can amplify a message about social justice or inequality?",
  "Did the process of creating prints, even with simple materials, change how you perceive the visibility or permanence of issues related to inequality?",
  "What did you discover about the power of graphic imagery and stark contrasts (often found in prints) to communicate urgent messages about social change?",
  "How can printmaking, as an art form that can be easily reproduced and shared, be a powerful tool for broadcasting messages about equality and inclusion?",
  "What new insights did you gain about Global Goal 10 and the complexities of reducing inequality within and among countries?",
  "How did the artwork created by your classmates, using different approaches, broaden your understanding of diverse forms of inequality (e.g., income, social, access, migration)?",
  "Did any specific print of the process of creating it make you think differently about the causes or consequences of inequality?",
  "What common themes or calls to action for a more just and equitable world emerged across the different prints?",
  "How does visual art, like printmaking, help to make abstract concepts of inequality more tangible and relatable?",
  "Did creating your print spark any personal connections or reflections on your own experiences or observations related to fairness and equality in your life or community?",
  "What emotions did you connect with while creating your artwork, and how might those emotions motivate you to take action related to Global Goal 10?",
  "How has this lesson influenced your thinking about your own role in promoting a more just and inclusive society?"
],
	assessmentCriteria: [
  "Consistent and enthusiastic involvement in all phases of the lesson, including discussions, printmaking technique exploration, art creation, and the exhibition/discussion.",
  "Comprehension of Global Goal 10 and its targets and core concepts. This will be evidenced by the symbolism and message within their print(s) and their verbal explanations.",
  "Originality and effectiveness in using chosen printmaking elements (e.g., relief, monotype, stenciling) to convey their message about reducing inequalities. Look for impactful visuals and thoughtful execution.",
  "How clearly and powerfully the finished prints communicate the intended message about Global Goal 10\\. Did the artwork successfully evoke thought or emotion related to the goal?",
  "Willingness to experiment with materials and techniques, embracing the unique qualities of printmaking, and problem-solving during the creative process.",
  "Ability to articulate artistic choices and to interpret and provide thoughtful feedback on classmates’ artwork, connecting it to Global Goal 10\\.",
  "Nuance and depth of understanding demonstrated in reflections, particularly concerning the role of art in social change and the complexities of achieving a more equitable world."
],
};

registerLessonContent(lessonContent);

export default lessonContent;

import type { LessonContentData } from '../types';
import { registerLessonContent } from '../index';

const lessonContent: LessonContentData = {
	goalNumber: 9,
	artForm: 'Art' as const,
	gradeLevel: '9-12' as const,
	title: "ART",
	duration: "",
	materials: [
  {
    "name": "Variety of drawing and/or painting materials (pencils, markers, paints, charcoal, pastels)",
    "isOptional": false
  },
  {
    "name": "Large sheets of paper or cardboard for creating murals/larger-scale artwork",
    "isOptional": false
  },
  {
    "name": "Stencils (pre-made or materials for students to create their own)",
    "isOptional": false
  },
  {
    "name": "Spray paint (if allowed and appropriate for classroom setting, with proper safety precautions)",
    "isOptional": false
  },
  {
    "name": "Collage materials (magazines, newspapers, found objects)",
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
    "name": "Images of street art examples",
    "isOptional": false
  }
],
	introduction: "Begin by showing a short video or images of compelling street art examples from around the word.   \n*Examples:*  \n\tBanksy  \n\t\t[Works](https://www.google.com/search?q=banksy+works&sca_esv=24d1c3d5cf171cb0&rlz=1C5CHFA_enUS1124US1124&biw=1200&bih=728&sxsrf=ADLYWIIrvvj9azkyHtDvTVGKBuDrHT_Ptw%3A1733175293585&ei=_SdOZ4y1I6y3wN4P686b6Qc&ved=0ahUKEwjMp9SNhYqKAxWsG9AFHWvnJn0Q4dUDCA8&uact=5&oq=banksy+works&gs_lp=Egxnd3Mtd2l6LXNlcnAiDGJhbmtzeSB3b3JrczIPEAAYgAQYFBiHAhhGGPsBMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMhsQABiABBgUGIcCGEYY-wEYlwUYjAUY3QTYAQFIgAhQpgJYhwdwAXgBkAEAmAFYoAH5AqoBATW4AQPIAQD4AQGYAgagAosDwgIKEAAYsAMY1gQYR8ICDRAAGIAEGLADGEMYigXCAg4QABiwAxjkAhjWBNgBAcICExAuGIAEGLADGEMYyAMYigXYAQHCAhkQLhiABBiwAxhDGMcBGMgDGIoFGK8B2AEBwgINEAAYgAQYsQMYRhj7AcICDRAuGIAEGLEDGBQYhwLCAgoQABiABBhDGIoFwgINEAAYgAQYsQMYQxiKBcICCBAAGIAEGLEDwgIKEAAYgAQYFBiHAsICGRAAGIAEGLEDGEYY-wEYlwUYjAUY3QTYAQHCAgUQLhiABJgDAIgGAZAGEroGBggBEAEYCZIHATagB_8k&sclient=gws-wiz-serp)  \n\t\t[Who is Banksy \\- British Street Art](https://www.youtube.com/watch?v=QtgyZ7zueYA)  \n\tEduardo Kobra  \n\t\t[Works](https://www.google.com/search?q=eduardo+kobra+works&sca_esv=24d1c3d5cf171cb0&rlz=1C5CHFA_enUS1124US1124&biw=1200&bih=728&sxsrf=ADLYWILk1T3ripG9x2ccTjsUcxxnTy-j-Q%3A1733175295309&ei=_ydOZ7nLEq7Fp84P0IfbwAw&ved=0ahUKEwj5xr2OhYqKAxWu4skDHdDDFsgQ4dUDCA8&uact=5&oq=eduardo+kobra+works&gs_lp=Egxnd3Mtd2l6LXNlcnAiE2VkdWFyZG8ga29icmEgd29ya3MyBRAAGIAEMgYQABgWGB4yBhAAGBYYHjILEAAYgAQYhgMYigUyCxAAGIAEGIYDGIoFMggQABiABBiiBDIIEAAYgAQYogQyCBAAGIAEGKIEMggQABiABBiiBDIIEAAYgAQYogRI_iRQzwNYlSRwBXgBkAEAmAF4oAGBDaoBBDE4LjO4AQPIAQD4AQGYAhqgAvoNqAIUwgIKEAAYsAMY1gQYR8ICDRAuGIAEGLADGEMYigXCAg0QABiABBiwAxhDGIoFwgIEECMYJ8ICChAjGIAEGCcYigXCAgoQABiABBhDGIoFwgIREC4YgAQYsQMY0QMYgwEYxwHCAhAQABiABBixAxhDGIMBGIoFwgILEAAYgAQYsQMYgwHCAg4QLhiABBixAxjRAxjHAcICCBAuGIAEGLEDwgIIEAAYgAQYsQPCAgcQIxgnGOoCwgIQEC4YxwEYJxjqAhiOBRivAcICFhAuGNEDGAMYtAIYxwEY6gIYjwHYAQHCAhAQLhgDGLQCGOoCGI8B2AEBwgIQEAAYAxi0AhjqAhiPAdgBAcICExAuGAMY1AIYtAIY6gIYjwHYAQHCAhMQLhiABBjHARgnGIoFGI4FGK8BwgILEAAYgAQYkQIYigXCAgsQLhiABBiRAhiKBcICCxAuGIAEGLEDGIMBwgIPECMYgAQYJxiKBRhGGPkBwgINEC4YgAQYsQMYQxiKBcICChAuGIAEGEMYigXCAgUQLhiABMICJxAAGIAEGIoFGEYY-QEYlwUYjAUY3QQYRhj5ARj0Axj1Axj2A9gBAcICDRAAGIAEGLEDGEMYigXCAhAQLhiABBixAxiDARiKBRgKwgIQEAAYgAQYkQIYigUYRhj7AcICHBAAGIAEGJECGIoFGEYY-wEYlwUYjAUY3QTYAQGYAwmIBgGQBgq6BgYIARABGAqSBwQyMy4zoAfupwM&sclient=gws-wiz-serp)  \n\t\t[Kobra: Brazil’s Street Art King](https://www.youtube.com/watch?v=UlAg8udmgKo)  \n\tLady Pink  \n\t\t[Works](https://www.google.com/search?sca_esv=24d1c3d5cf171cb0&rlz=1C5CHFA_enUS1124US1124&sxsrf=ADLYWILO9cMHvFBThdbxYOqIT8nwN6i0lA:1733175374345&q=lady+pink+works&udm=2&fbs=AEQNm0Aa4sjWe7Rqy32pFwRj0UkWd8nbOJfsBGGB5IQQO6L3J6jP6aG80L-e2fp1-X3f05ehOuLXo03yoIKLWy31WZSxqtwwfFO117_gMSEAXUso2orrdGjldTTQypqxvaUdRsscvzCM6geb4BKcJBo9xmw99IrgD83wpxuinDZMlPiAW3wWw_4U9Ji_qqOpvLwRfk7OUHvO570UXv3BG9wKT4TlvdWeuQ&sa=X&ved=2ahUKEwjRoJW0hYqKAxXl4skDHS1sMi4QtKgLegQIFRAB&biw=1200&bih=728&dpr=2)  \n\t\t[‘Lady Pink’ talks about breaking barriers in graffiti](https://www.youtube.com/watch?v=gWMflez2SJ0)  \nGuiding Questions:  \n\tWhat do you notice about the artworks?  \n\tWhat messages or ideas do you think they are trying to convey?  \n\tHow do these artworks make you feel?  \nIntroducing Street Art: Facilitate a discussion about the characteristics of street art.  \nKey Points:\n\n* Often created in public spaces for public audiences.  \n* Can be used to express social and political messages.  \n* Often challenges traditional art forms and institutions.  \n* Can be temporary or permanent.  \n* Encompasses a variety of styles and techniques (murals, stencils, graffiti, installations).\n\nGuiding Questions:  \n\tWhat are some of the benefits and challenges of creating art in public spaces?  \n\tWhy do you think street artists choose to express themselves in this way?  \n\tHow can street art be used to make a difference in the world?  \nIntroduce or reintroduce Global Goal 9: Industry, Innovation, and Infrastructure. Explain the core idea of building resilient infrastructure, promoting inclusive and sustainable industrialization, and fostering innovation.  \nBriefly introduce the different targets, using the handout to provide a visual overview.  \nGuiding Questions:  \n\tWhat are some of the challenges in achieving these targets?  \n\tHow might these targets affect different people and communities around the world?",
	steps: [
  {
    "title": "Art for Impact: Street Art for a Sustainable World",
    "content": "**(30-60 MINUTES)**"
  },
  {
    "title": "Exploring Street Art Techniques",
    "content": "*Murals*  \nShow examples of different mural styles and techniques.  \n\tRealistic Murals: Photorealistic murals that depict people, places, or objects with lifelike accuracy.  \n\t\t[“Girl With a Pierced Eardrum”,](https://banksyexplained.com/girl-with-a-pierced-eardrum-2014-3/) Banksy  \n\t\t[“The Kiss (O Beijo)”](https://www.flickr.com/photos/richard_burger/16020179392), Eduardo Kobra  \n\tAbstract Murals: Murals that use non-representational forms, colors, and patterns to evoke emotions and/or ideas.  \n\t\t[“Untitled”](https://www.brooklynstreetart.com/theblog/wp-content/uploads/2023/11/brooklyn-street-art-maya-hayuk_vincentLanzolla_points-de-vue-bayonne-france-10-23-web-4.jpg), Maya Hayuk  \n\t\t[“Tuttomondo”,](https://en.wikipedia.org/wiki/Tuttomondo) Keith Haring  \n\tGeometric Murals: Murals that use geometric shapes and patterns to create dynamic and visually engaging compositions.  \n\t\t[“11 Mirages to Freedom”](https://www.thisiscolossal.com/2016/03/okuda-san-miguel-wraps-a-moroccan-church-in-a-vibrant-geometric-mural/), Okuda San Miguel  \n\t\t[Multiple Murals](https://www.google.com/search?sca_esv=c2c3ea615d0b866b&rlz=1C5CHFA_enUS1124US1124&sxsrf=ADLYWILTbRXkCVE6barmRfObDeGMGirGlg:1733179118804&q=%22Mural%22+by+1010&udm=2&fbs=AEQNm0Aa4sjWe7Rqy32pFwRj0UkWd8nbOJfsBGGB5IQQO6L3J03RPjGV0MznOJ6Likin94pT_oR1DTSof42bOBxoTNxGUBPtuVdJiiZkfXU2rpWZHjawOPHK_JnmFlEe9Dw7kf4nGlJghtd1QWaJUyXA6x0bUFwr9aQ_HTO7YnsuGkBYkaMviQDfi37si3UNN3tyAVwbtSdEZfN5ll47y-pCe4qLj4BL7g&sa=X&ved=2ahUKEwiVk9Wtk4qKAxVk78kDHTidEe8QtKgLegQIGhAB&biw=1200&bih=728&dpr=2), 1010  \nDiscuss the use of color, composition, and perspective in murals.  \n\tColor: Using color to create mood, contrast, and visual interest.  \n\tComposition: Arranging elements within the mural to create balance, focal points, and visual flow.  \n\tPerspective: Using perspective techniques to create depth and dimension, making the mural appear three dimensional.  \nGuiding Questions:  \n\tWhat are some of the challenges of creating large-scale artwork in public spaces?  \n\tHow can murals be used to beautify communities and inspire social change?  \n*Stencils*  \nDemonstrate and/or discuss the process of creating and using stencils.  \nShow examples of stencil art with different levels of complexity and detail.  \n\tSimple stencils with bold shapes and single colors.  \n\tComplex stencils with intricate details and multiple layers.  \nDiscuss the advantages of using stencils for creating bold and impactful images.  \n\tPrecision: Stencils allow for clean lines and sharp edges.  \n\tRepetition: Stencils can be used to create repeating patterns or to reproduce the same image multiple times.  \n\tEfficiency: Stencils can be a quick and efficient way to create large scale artwork.  \nGuiding Questions:  \n\tHow can stencils be used to create repeating patterns or convey a specific message?  \n\tWhat are some of the creative possibilities of using stencils with different colors and layers?  \n*Graffiti Art:*   \nDiscuss the history and evolution of graffiti art, from its origins in urban subcultures to its recognition as a legitimate art form.  \n\tEarly graffiti: Ancient cave paintings, inscriptions on walls in ancient cities.  \n\tModern graffiti: Emergence in the 1960s and 70s in Philadelphia and NYC.  \n\tHip-hop culture: Connection to hip-hop music, breakdancing, and DJing  \n\tStreet art movement: Evolution into a broader street art movement encompassing murals, stencils, etc.  \nShow examples of different graffiti styles.  \n\tBubble letters: Rounded, cartoon like letters  \n\tWildstyle: Intricate, interlocking letters with dynamic shapes and three-dimensional effects.  \n\tCalligraphy: Elegant and stylized lettering inspired by calligraphy traditions.  \nDiscuss the use of line, color, and form in graffiti art.  \n\tLine: Using lines to create letterforms, shapes, and dynamic movement.  \n\tColor: Using color to create contrast, depth, and visual impact.  \n\tForm: Creating three-dimensional effects and illusions of depth through shading and perspective techniques.  \nGuiding Questions:  \n\tWhat are some of the controversies surrounding graffiti art?  \n\tHow can graffiti art be used to express individuality and challenge social norms?"
  },
  {
    "title": "Street Art and Global Goal 9",
    "content": "Facilitate a brainstorming session where students generate ideas for how street art can be used to represent Global Goal 9 and/or some of the targets within Global Goal 9\\.  \nGuiding Questions:  \n\tWhat are some visual metaphors or symbols that could represent Global Goal 9 and/or its targets?  \n\tHow can we use street art techniques to convey the challenges and opportunities associated with Global Goal 9 and/or each target?  \n\tHow can we use street art to inspire action and encourage people to contribute to achieving Global Goal 9?  \nExamples:\n\n*"
  },
  {
    "title": "Target 9.1",
    "content": "*(Resilient Infrastructure)*: Create a mural depicting a futuristic city with sustainable transportation systems and green buildings.  \n*"
  },
  {
    "title": "Target 9.2",
    "content": "*(Inclusive and Sustainable Industrialization)*: Design a stencil series showing diverse individuals working in various industries, emphasizing the importance of inclusivity and equal opportunities.  \n*"
  },
  {
    "title": "Target 9.3",
    "content": "*(Access to Financial Services)*: Create a graffiti artwork with symbols representing financial empowerment and access to resources for small businesses.  \n*"
  },
  {
    "title": "Target 9.4",
    "content": "*(Sustainable Infrastructure)*: Develop an installation using recycled materials to raise awareness about the importance of resource efficiency and waste reduction.  \n*"
  },
  {
    "title": "Target 9.5",
    "content": "*(Innovation)*: Create a mural depicting a timeline of technological advancements, highlighting the importance of scientific research and development.  \n*"
  },
  {
    "title": "Target 9.a",
    "content": "*(Infrastructure Development in Developing Countries)*: Create a mural depicting a bridge connecting two communities, symbolizing the importance of infrastructure for connecting people and facilitating economic development.  \n*"
  },
  {
    "title": "Target 9.b",
    "content": "*(Domestic Technology Development)*: Design a series of stencils showcasing local inventions and innovations, highlighting the creativity and ingenuity within the community.  \n*"
  },
  {
    "title": "Target 9.c",
    "content": "*(Access to Information and Communications Technology)*: Create a graffiti artwork with symbols representing connectivity, communication, and access to information, emphasizing the importance of digital inclusion.\n\nDivide students into smaller groups or allow them to work individually. Each group/student selects one target from GG9 (or can focus on the Goal holistically) and creates a street art-inspired piece that represents a specific aspect of that target/goal.  \nEncourage students to experiment with different street art techniques to convey their chosen message effectively.  \nWhile students work, circulate to observe, offer encouragement, and answer questions. Prompt deeper thinking:  \n\tI see you’re using a lot of bright colors. How does that connect to the target you chose?  \n\tWhat message are you trying to convey with this image?  \n\tHow does your artwork encourage viewers to think about GG 9?"
  },
  {
    "title": "Gallery Walk and Discussion",
    "content": "Once the artwork is completed, have students display their creations around the classroom. Allow time for students to walk around, view each other’s work, and engage in informal discussions.  \nFacilitate a class discussion about the artwork, focusing on the connection to GG 9 and the effectiveness of the chosen street art techniques.  \nGuiding Questions:  \n\tWhat are some of the most powerful or impactful artworks you saw?  \n\tHow did the different artworks make you think differently about GG 9?  \n\tWhat are some of the common themes or messages you noticed in the artwork?  \n\tHow did the use of street art techniques enhance the message of the artwork?"
  }
],
	reflectionQuestions: [
  "How did creating street art-inspired pieces help you visualize the importance of resilient infrastructure, inclusive industrialization, and innovation for a sustainable future?",
  "What new insights did you gain about the challenges and opportunities associated with Global Goal 9 through this artistic exploration?",
  "Did exploring different street art techniques (murals, stencils, graffiti) change your perspective on how art can communicate complex ideas and make a difference in public spaces?",
  "How did the process of creating a visually impactful piece connect with your understanding of the urgency and scale of achieving Global Goal 9?",
  "What message about industry, innovation, and infrastructure do you hope your artwork would convey to someone seeing it in a public space?",
  "What is one specific action you feel inspired to take after this lesson to contribute to building  more sustainable and innovate communities?"
],
	assessmentCriteria: [
  "Consistent and enthusiastic involvement in all phases of the lesson, including brainstorming, art creation, group discussions, and the gallery walk.",
  "Comprehension of Global Goal 9 and its core concepts, as demonstrated through the symbolism and message within their artwork and their verbal explanations.",
  "Originality and effectiveness in using chosen street art elements (e.g., stencil, mural style, graffiti elements, collage) to convey their message. Look for bold visuals and impactful compositions.",
  "How clearly and powerfully the finished artwork communicates its intended message about industry, innovation, and infrastructure, particularly in relation to challenges and solutions.",
  "Ability to articulate artistic choices and to interpret and provide thoughtful feedback on classmates’ artwork, connecting it to Global Goal 9\\.",
  "Nuance and depth of understanding demonstrated in reflections, particularly concerning the role of art in social change and the complexities of achieving sustainable development."
],
};

registerLessonContent(lessonContent);

export default lessonContent;

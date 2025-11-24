import type { LessonContentData } from '../types';
import { registerLessonContent } from '../index';

const lessonContent: LessonContentData = {
	goalNumber: 7,
	artForm: 'Art' as const,
	gradeLevel: '5-8' as const,
	title: "Light Up Our World: Building Energy Art For Everyone",
	duration: "30-60 MINUTES",
	materials: [
  {
    "name": "Recycled/repurposed materials",
    "isOptional": false
  },
  {
    "name": "Ask students to bring in clean, safe materials from home a day or two before the lesson. This emphasizes resourcefulness and repurposing. E.g., cardboard boxes, plastic bottles, aluminum cans, newspapers,  magazines, fabric scraps, old CDs/DVDs, paper towel/toilet paper tubes, plastic lids, clean plastic bags, old wires or pipe cleaners, etc.",
    "isOptional": false
  },
  {
    "name": "General Art Supplies",
    "isOptional": false
  },
  {
    "name": "Scissors",
    "isOptional": false
  },
  {
    "name": "Glue, tape",
    "isOptional": false
  },
  {
    "name": "Markers, crayons, colored pencils, pens, paints, etc.",
    "isOptional": false
  },
  {
    "name": "Pieces of scrap paper",
    "isOptional": false
  },
  {
    "name": "Images or videos of installation art pieces focused on energy or environmental themes",
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
    "name": "Paper or notebooks",
    "isOptional": false
  },
  {
    "name": "Pens/pencils",
    "isOptional": false
  }
],
	introduction: "Welcome students to an exciting art class. Explain that they will use their imagination and creativity to explore a really important idea: Global Goal 7, Affordable and Clean Energy. This goal focuses on making sure everyone, everywhere, has access to energy that is affordable (not too expensive), reliable (always there when you need it), and clean (good for the planet, not polluting). Emphasize that this means lights for homes and schools, clean ways to cook food, and power for devices, all without harming the earth.  \nShow some images that contrast energy challenges with clean energy solutions.  \nExamples:  \nEnergy Challenges\n\n* [Energy Poverty, World Economic Forum](https://assets.weforum.org/article/image/large_a5es8TYU_LIcrKtwuLcGzE-ieQDLkkQAnFVN97guuXc.jpg)  \n* [Cooking Over a Fire, University of Queensland](https://www.uq.edu.au/research/impact/stories/energy-and-the-forgotten-millions/assets/dTLgmqJlFj/uq-energy-poverty-research-group-1-750x500.jpeg)  \n* [Polluted City, IQ Air](https://cdn.shopify.com/s/files/1/0677/4059/8571/articles/MostPolluted_Desktop_A_f6540a8e-007a-4341-8e12-6c640eb4f030.jpg?v=1705573810&width=1400&height=729&crop=center)  \n* [Polluted City, The Atlantic](https://cdn.theatlantic.com/assets/media/img/posts/harbinbicycle.jpg)\n\nClean Energy Solutions\n\n* [Clean City, KJZZ](https://kjzz.com/resources/media/38db248f-9682-4768-95a9-d6382c0953ae-medium16x9_saltlakecityskylinegetty2.jpg?1620314200997)  \n* [Child Reading Under a Solar Lamp, Little Sun](https://149484825.v2.pressablecdn.com/wp-content/uploads/2021/10/power-to-read-Denyse-K.-Uwera_24-1-1280x1015.png)  \n* [Wind Turbines, Caltech Science Exchange](https://caltechsites-prod.s3.amazonaws.com/scienceexchange/images/wind-turbine-future-energy.2e16d0ba.fill-933x525-c100.jpg)  \n* [Solar Panels Installed, SDG Action](https://sdg-action.org/wp-content/uploads/2022/04/Ogunbiyi_main-1024x546.jpg)\n\nOpen a discussion with guiding questions like:\n\n* How do these images make you feel? What emotions come up when you see homes without lights, or smoky cooking fires indoors? What about sparkling solar panels or giant wind turbines?  \n* Think about your own day. How do you use energy from the moment you wake up (lights, charging devices, toast for breakfast) until you go to bed (reading light, TV)? What would your life be like without it?  \n* Why is it important that energy is not just available, but also affordable and clean for everyone, everywhere?  \n* Do you think art can be a powerful way to make people think about energy and our planet?\n\nIntroduce the art style of Installation Art. Explain that Installation Art is a special kind of art that fills a space or room, making you feel like you can walk inside the artwork. Tell students that artists use all sorts of materials, sometimes even light or sound, to transform a place and make you think and feel differently about something. Explain that today, they will all become energy artists, working together as a class to build one big, amazing installation that shows the power of clean energy and a bright future.  \nShow selected visual aids of Installatin Art pieces.  \nExamples:\n\n* [*Waste Labyrinth*](https://www.designboom.com/art/luzinterruptus-labyrinth-of-plastic-waste-installation-madrid-07-30-2017/) or [*Plastic Island*](https://unurth.com/Luzinterruptus-Plastic-Island-London) by Luzinterruptus: Focus on how they use many recycled plastic bottles/waste to create glowing, immersive spaces, highlighting pollution in a visually striking way.  \n* [*The Weather Project*](https://olafureliasson.net/artwork/the-weather-project-2003/) by Olafur Eliasson: Focus on how he uses light and mist to create an immersive, atmospheric experience, evoking natural phenomena.  \n* [The Work of Daniel Popper](https://www.google.com/search?sca_esv=3c6e154600cb80ae&rlz=1C5CHFA_enUS1124US1124&sxsrf=AE3TifO2ugofpNdHxRaCJuwasBahpzzU6g:1752249899332&q=Daniel+Popper&udm=2&fbs=AIIjpHxU7SXXniUZfeShr2fp4giZ1Y6MJ25_tmWITc7uy4KIeuYzzFkfneXafNx6OMdA4MRo3L_oOc-1oJ7O1RV73dx3MIyCigtuiU2aDjExIvydX85cOq96-7Mxd4KSNCLhHwZjNl1D--59A3Pz1jRAtenzCJ-qzCnOKtvU69k0YYAuhlzxHSrRNQ-gtEYBj8xSow3FJ3v7l7zsi4eO0Nw9mEGcGVLxNQ&sa=X&ved=2ahUKEwixzbrGl7WOAxUd4ckDHZdJOV0QtKgLKAF6BAgqEAE&biw=1327&bih=728&dpr=2): Focus on large, impressive structures that light up or integrate with nature, showing power and beauty.  \n* [The Work of Chihuly](https://www.google.com/search?q=Chihuly&sca_esv=3c6e154600cb80ae&rlz=1C5CHFA_enUS1124US1124&udm=2&biw=1327&bih=728&sxsrf=AE3TifMpIrsVkwMXQxvj_asGkyfLPjUqqw%3A1752249910183&ei=NjZxaKT9Ct7Lp84PzaK-6QI&ved=0ahUKEwik8NDLl7WOAxXe5ckDHU2RLy0Q4dUDCBE&uact=5&oq=Chihuly&gs_lp=EgNpbWciB0NoaWh1bHkyCBAAGIAEGLEDMggQABiABBixAzIIEAAYgAQYsQMyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAESIUHUIUGWIUGcAN4AJABAJgBV6ABV6oBATG4AQPIAQD4AQL4AQGYAgSgAmbCAgcQIxgnGMkCwgIKEAAYgAQYQxiKBcICBhAAGAcYHpgDAIgGAZIHATSgB4oFsgcBMbgHWsIHBTAuMy4xyAcM&sclient=img): Focus on immersive, vibrant environments that can inspire transformation of a space with art and light.\n\nFacilitate a discussion about the art, asking guiding questions like:\n\n* What do you notice about how these artworks fill the space? Do they make you feel like you could walk inside them?  \n* What kinds of materials did these artists use? Do you see anything that looks like it was recycled or repurposed?  \n* How do these artworks use light or color to create a special feeling?  \n* How do these artists use art to express a big idea, like about nature, or light, or even pollution?",
	steps: [
  {
    "title": "Warm Up: Color and Light Burst",
    "order": 1,
    "content": "Have each student get a piece of scrap paper and access to writing utensils of different colors (pens/pencils/markers/crayons).  \n*Tiny Spark*\n\n* Say: Imagine a tiny, tiny spark of energy. What color is it? What shape is it? How does that tiny spark feel?  \n  * Give students a few moments to imagine.  \n* Say: Now, quickly make a tiny scribble or drawing on your paper that captures that spark.\n\n*Bright Sunbeam*\n\n* Say: Now, imagine a powerful, bright sunbeam. What colors are in that sunbeam? What shape would it be? How does that sunbeam feel, warm, strong, bright?  \n  * Give students a few moments to imagine.  \n* Say: Now, quickly make another quick scribble or shape on your paper for the sunbeam.\n\n*Whirling Wind*\n\n* Say: Imagine the energy of whirling wind, moving unseen but powerful. What colors would represent wind energy? What kind of lines or shapes would it make? How does it feel, fast, breezy strong?  \n  * Give students a few moments to imagine.  \n* Say: Quickly sketch that feeling onto your paper.\n\n*Flickering Candle*\n\n* Say: Finally, imagine a small, flickering candle flame, bringing gentle light. What colors do you see in the flame? What kind of shape does it make? How does the gentle light feel?  \n  * Give students a few moments to imagine.  \n* Say: Quickly capture that image on your paper.\n\nConclude the warm up by affirming their imaginative and visual thinking."
  },
  {
    "title": "Building Our Collective Energy Future",
    "order": 2,
    "content": "Explain that the class will take part in an Energy Chain Reaction Brainstorm by thinking about energy problems, how they affect things, and then how solutions create positive changes. This will create a chain of ideas. Designate a section of the board/large paper for this brainstorm. Guide the class verbally. Start With a Challenge: Present a simple, relatable energy challenge, then, go around the room and have each student present an idea for what happens as a result of that initial challenge. Imagine a home or school that has no electricity at night. What's the very next thing that happens because of that? Example Chains: No electricity at night → (Student 1: Can't read books) → (Student 2: Can't do homework) → (Student 3: Fall behind in school) → (Student 4: Feel sad/frustrated). Cooking food on smoky fires → (Student 1: Hard to breathe) → (Student 2: Gets sick/coughs) → (Student 3: Air gets dirty outside) → (Student 4: Trees cut down for wood). Cars make a lot of smoke → (Student 1: Air pollution) → (Student 2: People get sick) → (Student 3: The Earth becomes dirty) → (Student 4: Hard to play outside). Follow the Reaction: Encourage students to offer the next immediate consequence of the previous idea. Write their responses on the board, drawing arrows to connect them and forming a chain. Introduce a Solution: After a few \"challenge\" ripples, ask: Now, what's a smart solution to stop this problem, or make things better? Write in the solution ideas. Example: (Student 5: Give them solar lamps). Positive Ripples: Ask: What are the good things that happen because of this solution? What positive changes ripple out? Write these positive effects, continuing the chain. Example chain continued: No electricity at night → (Student 1: Can't read books) → (Student 2: Can't do homework) → (Student 3: Fall behind in school) → (Student 4: Feel sad/frustrated) → Solution: (Student 5: Give them solar lamps) → Positive Changes: (Student 6: Can read at night) → (Student 7: Do homework) → (Student 8: Learn more) → (Student 9: Feel proud) → (Student 10: Go to college). Facilitate this process, ensuring all students have a chance to contribute ideas to the evolving chain. Remind them to think about both the challenges and the hopeful solutions related to energy."
  },
  {
    "title": "Installation Art Creation: Building Our Collective Energy Future",
    "order": 3,
    "content": "Explain that the entire class will now work together to build one large, cohesive art using ideas from the brainstorm. Dedicate a specific area in the classroom (e.g., a large table cluster, a corner, a section of the wall) for this installation.  \nDivide students into 3-5 small groups. Each group will be assigned a specific Energy Zone or Story Section of the overall art installation, inspired by the brainstorm.  \nExamples\n\n* *The Challenge Zone:* Showing problems like no lights, pollution, expensive energy.  \n* *Solar Power Section:* Showing how the sun helps, solar power.  \n* *Water Power and Saving Zone:* Showing clean water energy, smart energy use.  \n* *The Bright Future:* Showing happy people with clean energy, strong communities.\n\nProvide each group with a selection of recycled materials and art supplies.  \nInstruct groups to:\n\n* *Build their section:* Create sculptures, structures, or collage elements for their assigned Zone or Section, using the recycled materials and decorating them with the art supplies.  \n* *Connect Ideas:* Ensure their section visually represents the ideas, feelings, and actions from the brainstorm related to their assigned zone.  \n* *Think about connection:* Emphasize that their individual group’s art piece will connect to other groups’ pieces to form the larger class installation. They should think about how their section might physically or visually flow into the next, and can discuss with other groups while creating their piece (e.g., arrows, pathways, shared colors).\n\nCirculate among the class, offering guidance and encouraging creative use of materials. Ask guiding questions like:\n\n* How are you using this cardboard to show a problem with energy?  \n* Can you make this plastic bottle look like a spinning wind turbine?  \n* What colors will you use to show clean energy? What about polluted energy?  \n* How does your sculpture make me feel the idea of \\[clean air/darkness/etc.\\]?  \n* Are you thinking about how your piece will fit into the overall class story when we put it all together?"
  },
  {
    "title": "Grand Energy Art Tour",
    "order": 4,
    "content": "Explain that the class will now assemble all the group sculptures/mini-installations together in the designated area to create one grand, collective energy art installation. Physically help arrange the pieces to tell a story from the Challenge Zone through Solutions to The Bright Future.  \nExplain: We will now go on a guided Grand Energy Art Tour for our class’s amazing installation. Move slowly and quietly through the designated space (or around the central display). Listen as each group briefly explains their section, and think about how all our art connects to tell the story of Global Goal 7\\.  \nLead the tour, pausing at each groups section.\n\n* Have each group briefly explain their part of the installation.  \n  Example  \n  * This is our \\[Energy Zone/Sectioin Name\\]. We used \\[materials\\] to show \\[ideas/feelings\\] from our brainstorm. We think it helps tell the story of \\[challenge/solution\\].  \n* Ask the rest of the class guiding questions like:  \n  * What do you see in this section that connects to energy challenges or solutions?  \n  * What message does this part of our art tell you?  \n* Guide the transition from one section to the next, emphasizing how the different parts (challenges, solar, wind water, efficiency, future) connect to form a complete picture of Global Goal 7\\.\n\nConclude the tour by having everyone stand together in front of the entire installation, taking a moment to appreciate their collective creation."
  },
  {
    "title": "Reflection & Summary",
    "order": 5,
    "content": "Have students reflect on their learning experience through discussion or writing.  \nAsk guiding questions like:\n\n* How did building one big art installation together as a class help you understand Global Goal 7: Affordable and Clean Energy in a new way?  \n* What did you learn about the importance of energy being affordable, reliable, and clean for everyone?  \n* Which artworks or ideas from your classmates made you think or feel the most about energy, and why?  \n* What does our activity tell us about how we can all work towards Global Goal 7?  \n* What’s one small action you feel inspired to take this week to save energy or promote clean energy?"
  }
],
	reflectionQuestions: [
  "How did building one big art installation together as a class help you understand Global Goal 7: Affordable and Clean Energy in a new way?",
  "What did you learn about the importance of energy being affordable, reliable, and clean for everyone?",
  "Which artworks or ideas from your classmates made you think or feel the most about energy, and why?",
  "What does our activity tell us about how we can all work towards Global Goal 7?",
  "What’s one small action you feel inspired to take this week to save energy or promote clean energy?"
],
	discussionPrompts: [
		"How do these images make you feel? What emotions come up when you see homes without lights, or smoky cooking fires indoors? What about sparkling solar panels or giant wind turbines?",
		"Think about your own day. How do you use energy from the moment you wake up (lights, charging devices, toast for breakfast) until you go to bed (reading light, TV)? What would your life be like without it?",
		"Why is it important that energy is not just available, but also affordable and clean for everyone, everywhere?",
		"Do you think art can be a powerful way to make people think about energy and our planet?",
		"What do you notice about how these artworks fill the space? Do they make you feel like you could walk inside them?",
		"What kinds of materials did these artists use? Do you see anything that looks like it was recycled or repurposed?",
		"How do these artworks use light or color to create a special feeling?",
		"How do these artists use art to express a big idea, like about nature, or light, or even pollution?",
		"Imagine a home or school that has no electricity at night. What's the very next thing that happens because of that?",
		"Now, what's a smart solution to stop this problem, or make things better?",
		"What are the good things that happen because of this solution? What positive changes ripple out?",
		"How are you using this cardboard to show a problem with energy?",
		"Can you make this plastic bottle look like a spinning wind turbine?",
		"What colors will you use to show clean energy? What about polluted energy?",
		"How does your sculpture make me feel the idea of [clean air/darkness/etc.]?",
		"Are you thinking about how your piece will fit into the overall class story when we put it all together?",
		"What do you see in this section that connects to energy challenges or solutions?",
		"What message does this part of our art tell you?"
	],
	personalConnection: "Students reflect on how energy impacts their daily life and what energy sources they use. They consider if they've ever experienced a power outage or energy shortage and how it affected them. They think about actions they can take to conserve energy and promote sustainable energy practices.",
	closingActivities: [
		{
			title: "Grand Energy Art Tour",
			description: "The class assembles all group sculptures/mini-installations together to create one grand, collective energy art installation. Students go on a guided tour, moving slowly through the space as each group explains their section. The class discusses how all the art connects to tell the story of Global Goal 7, and everyone stands together in front of the entire installation to appreciate their collective creation."
		}
	],
	objectives: [
		{
			category: "Knowledge",
			description: "Identify and define the importance of energy in daily life and recognize that energy should be affordable, reliable, and clean for everyone.",
			nccasStandard: "Cr1.1.Ma, Cn10.1.Ma",
			order: 1
		},
		{
			category: "Knowledge",
			description: "Recognize the difference between clean (renewable) and non-clean energy sources, and understand the benefits of using clean energy for the planet and people.",
			nccasStandard: "Cn10.1.Ma, Cn11.1.Ma",
			order: 2
		},
		{
			category: "Knowledge",
			description: "Understand that there are challenges in getting clean energy to everyone and that saving energy is important.",
			nccasStandard: "Cn10.1.Ma, Cn11.1.Ma",
			order: 3
		},
		{
			category: "Discourse",
			description: "Explore and describe how messages and ideas about energy and sustainability are expressed through various art forms (visual art, creative writing, dance, drama, music) by reflecting on visuals, words, movements, sounds, and stories.",
			nccasStandard: "Re7.1.Ma, Re8.1.Ma",
			order: 4
		},
		{
			category: "Discourse",
			description: "Participate in respectful discussions about energy challenges and solutions, including how to save energy and how clean energy sources work.",
			nccasStandard: "Re9.1.Ma, Cn11.1.Ma",
			order: 5
		},
		{
			category: "Discourse",
			description: "Communicate their own thoughts, feelings, and ideas, about Global Goal 7: Affordable and Clean Energy through creative expression in various artistic mediums.",
			nccasStandard: "Cr3.1.Ma",
			order: 6
		},
		{
			category: "Attitudes",
			description: "Develop empathy and concern for individuals and communities who lack access to reliable or clean energy, recognizing the impact on their daily lives.",
			nccasStandard: "Re8.1.Ma, Cn10.1.Ma",
			order: 7
		},
		{
			category: "Attitudes",
			description: "Appreciate the value of clean energy sources (like sun, wind, and water power) and their role in protecting our planet and creating a healthier future.",
			nccasStandard: "Cn11.1.Ma",
			order: 8
		},
		{
			category: "Attitudes",
			description: "Cultivate a sense of personal responsibility for their own energy use and a positive attitude towards saving energy and supporting clean energy solutions.",
			nccasStandard: "Re9.1.Ma",
			order: 9
		},
		{
			category: "Capacity",
			description: "Develop critical thinking skills by observing and discussing how different artistic elements (like colors, shapes, rhythms, movements, or persuasive words) can represent energy challenges, transformations, and solutions.",
			nccasStandard: "Re9.1.Ma, Cn10.1.Ma",
			order: 10
		},
		{
			category: "Capacity",
			description: "Practice collaboration and communication skills through engaging in group art projects, shared writing activities, and coordinated movement, drama, or musical performances to tell stories about energy.",
			nccasStandard: "Cr2.1.Ma, Pr5.1.Ma",
			order: 11
		},
		{
			category: "Capacity",
			description: "Develop creative expression skills through purposeful experimentation with diverse artistic mediums (visual art, creative writing, dance, drama, music) to communicate their understandings and feelings about Affordable and Clean Energy.",
			nccasStandard: "Cr3.1.Ma",
			order: 12
		},
		{
			category: "Action",
			description: "Identify simple and age-appropriate actions they can take to conserve energy and support clean energy practices in their daily lives, schools, and homes.",
			nccasStandard: "Pr6.1.Ma, Cn11.1.Ma",
			order: 13
		},
		{
			category: "Action",
			description: "Participate in collaborative artistic projects that creatively express messages of hope and support for Clean Energy for All.",
			nccasStandard: "Cr3.1.Ma, Pr6.1.Ma",
			order: 14
		},
		{
			category: "Action",
			description: "Reflect on their personal role in creating a more sustainable energy future for all, fostering a sense of responsible global citizenship.",
			nccasStandard: "Re9.1.Ma, Cn11.1.Ma",
			order: 15
		}
	],
	media: [
		{
			title: "Energy Poverty",
			description: "Image showing energy poverty challenges",
			url: "https://assets.weforum.org/article/image/large_a5es8TYU_LIcrKtwuLcGzE-ieQDLkkQAnFVN97guuXc.jpg",
			order: 1
		},
		{
			title: "Cooking Over a Fire",
			description: "Image showing cooking challenges without clean energy",
			url: "https://www.uq.edu.au/research/impact/stories/energy-and-the-forgotten-millions/assets/dTLgmqJlFj/uq-energy-poverty-research-group-1-750x500.jpeg",
			order: 2
		},
		{
			title: "Polluted City",
			description: "Image showing air pollution from non-clean energy",
			url: "https://cdn.shopify.com/s/files/1/0677/4059/8571/articles/MostPolluted_Desktop_A_f6540a8e-007a-4341-8e12-6c640eb4f030.jpg?v=1705573810&width=1400&height=729&crop=center",
			order: 3
		},
		{
			title: "Polluted City (Alternative)",
			description: "Image showing air pollution",
			url: "https://cdn.theatlantic.com/assets/media/img/posts/harbinbicycle.jpg",
			order: 4
		},
		{
			title: "Clean City",
			description: "Image showing clean energy solutions",
			url: "https://kjzz.com/resources/media/38db248f-9682-4768-95a9-d6382c0953ae-medium16x9_saltlakecityskylinegetty2.jpg?1620314200997",
			order: 5
		},
		{
			title: "Child Reading Under a Solar Lamp",
			description: "Image showing clean energy solution in action",
			url: "https://149484825.v2.pressablecdn.com/wp-content/uploads/2021/10/power-to-read-Denyse-K.-Uwera_24-1-1280x1015.png",
			order: 6
		},
		{
			title: "Wind Turbines",
			description: "Image showing wind energy",
			url: "https://caltechsites-prod.s3.amazonaws.com/scienceexchange/images/wind-turbine-future-energy.2e16d0ba.fill-933x525-c100.jpg",
			order: 7
		},
		{
			title: "Solar Panels Installed",
			description: "Image showing solar energy solution",
			url: "https://sdg-action.org/wp-content/uploads/2022/04/Ogunbiyi_main-1024x546.jpg",
			order: 8
		},
		{
			title: "Waste Labyrinth",
			artist: "Luzinterruptus",
			description: "Installation art using recycled materials",
			url: "https://www.designboom.com/art/luzinterruptus-labyrinth-of-plastic-waste-installation-madrid-07-30-2017/",
			order: 9
		},
		{
			title: "Plastic Island",
			artist: "Luzinterruptus",
			description: "Installation art highlighting pollution",
			url: "https://unurth.com/Luzinterruptus-Plastic-Island-London",
			order: 10
		},
		{
			title: "The Weather Project",
			artist: "Olafur Eliasson",
			description: "Installation art using light and mist",
			url: "https://olafureliasson.net/artwork/the-weather-project-2003/",
			order: 11
		}
	],
	assessmentCriteria: [
  "Observe consistent and enthusiastic involvement in all phases of the lesson, including the warm up, brainstorm, whole-class art creation, and class discussions.",
  "Understanding of the core concept of affordable and clean energy (access, renewables, efficiency, challenges, solutions), as demonstrated through the symbolism, emotions, and message in the contribution to the class art installation and verbal explanations.",
  "Originality and effort in creating the section of the collective installation. Look for evidence of connection to Global Goal 7 (does the section clearly represent ideas related to energy challenges, solutions, or energy for everyone, fitting into the overall narrative?), use of recycled materials (are recycled/repurposed materials used creatively and thoughtfully?), and showing emotions/feelings (are there attempts to use shapes, colors, and arrangement to convey a message or emotion about energy within the section?).",
  "Ability to work effectively within the small groups, contributing ideas, respecting diverse approaches, and collaborating cohesively to build a part of the unified class installation.",
  "Ability to articulate learning and personal connections during the reflection and summary discussion."
],
};

registerLessonContent(lessonContent);

export default lessonContent;

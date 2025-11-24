import type { LessonContentData } from '../types';
import { registerLessonContent } from '../index';

const lessonContent: LessonContentData = {
	goalNumber: 5,
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
    "name": "Sensory items related to water",
    "isOptional": false
  },
  {
    "name": "Small containers with clean/dirty water samples",
    "isOptional": false
  },
  {
    "name": "Sand, pebbles, or small plants to represent ecosystems",
    "isOptional": false
  },
  {
    "name": "Images or videos of water-related scenes",
    "isOptional": false
  },
  {
    "name": "Whiteboard or large chart paper",
    "isOptional": false
  },
  {
    "name": "Markers",
    "isOptional": false
  }
],
	introduction: "Set up sensory stations with the following\n\n* *Sight:* Images of contrasting water scenes (pristine vs. polluted)  \n  * [Plitvice Lakes National Park, Croatia](https://www.afar.com/magazine/visiting-plitvice-lakes-national-park-in-croatia)  \n  * [Bora Bora, French Polynesia](https://www.wendyperrin.com/?destination=tahiti-insiders-guide)  \n  * [Victoria Falls, Zambia/Zimbabwe](https://www.safaribookings.com/blog/victoria-falls-zambia-vs-zimbabwe-which-side-is-better)  \n  * [Lake Baikal, Russia](https://www.russiabeyond.com/travel/332795-myth-busting-lake-baikal)  \n  * [Yangtze River, China](https://www.ecohubmap.com/hot-spot/pollution-of-the-yangtze-river/178xvrml7n2wlmf)  \n  * [Pasig River, Philippines](https://medium.com/@seansarmiento44/pasig-river-is-it-too-late-b9e9dae61cbe)  \n  * [Lake Victoria, East Africa](https://www.newscientist.com/article/mg24632890-900-lake-victoria-is-at-risk-of-dying-from-pollution-and-climate-change/)  \n  * [The Dead Sea, Israel/Jordan](https://www.researchgate.net/figure/The-shrinkage-of-the-Dead-Sea_fig1_344219537)  \n* *Touch:* Containers of water (different temperatures, textures if safe), natural items   \n  * Ice water (ensure safe handling)  \n  * Room temperature water  \n  * Warm water (not hot, ensure safety)  \n  * Container with some sand/silt mixed in (to represent sediment in polluted water)  \n  * Water with a very faint drop of food coloring to show how even small contamination is visible (if safe)  \n  * Smooth river stones, rough bark from a tree, soft moss, dried leaves or seed pods  \n* *Sound:* Recordings of flowing water, rain, ocean waves, or even dripping water.  \n  * [Gentle stream](https://www.youtube.com/watch?v=UJZxtO9XNno)  \n  * [Rainstorm](https://www.youtube.com/watch?v=yIQd2Ya0Ziw)  \n  * [Ocean waves](https://www.youtube.com/watch?v=WHPEKLQID4U)  \n  * [Dripping faucet](https://www.youtube.com/watch?v=pAC4kC7qW1E)  \n  * [Industrial sounds](https://www.youtube.com/watch?v=rU0v9uTwtUY)  \n* *Smell and Taste (if safe):* Clean water vs. slightly salty/mineral/sparkling water/flavored water/etc.  \n  * Filtered water (from water fountain or bottled)  \n  * Distilled water  \n  * Mineral water  \n  * Sparkling water",
	steps: [
  {
    "title": "Words From The Source: A Descriptive Writing Lesson to Champion Clean Water and Sanitation",
    "content": "**(30-60 MINUTES)**"
  },
  {
    "title": "NOTES:",
    "content": "Water for touch/smell/taste must be safe. Be mindful of allergies or sensory sensitivities when choosing items.   \n\tStudents rotate through stations, jotting down words/phrases capturing their sensory experiences.  \n\tWhe possible, circulate around the classroom, asking questions at the stations such as:\n\n* How would this water feel on your skin after a long day?  \n* Does this sound make you feel relaxed or anxious? Why?  \n* If you had to drink this every day, how would it impact your life?\n\n\tOnce students have rotated through all stations, start an open discussion with questions such as:\n\n* What words did you use for clean water vs. dirty? How did the experience differ?  \n* Which sense was most powerful in conveying the value of clean water?  \n* How do our senses help us understand the NEED for clean water and sanitation?"
  },
  {
    "title": "Target Deep Dive: Descriptive Details",
    "content": "Divide students into pairs or allow them to work individually.  \n\tAssign each a different Global Goal 6 target, and provide students with simplified Global Goal 6 and targets.  \n\tExplain that descriptive writing uses vivid sensory details to bring a scene to life and evoke emotions in the reader.  \n\tChallenge students to go beyond the obvious and brainstorm specific sensory details related to three aspects of their target:\n\n* *The problem the target addresses*  \n  * What does this problem look like, sound like, feel like, smell like, or even taste like?  \n  * Encourage students to imagine the concrete, sensory experiences of people facing this challenge.  \n* *A success sotry linked to the goal/target*  \n  * What would success look like, sound like, feel like, smell like, or even taste like?  \n  * Encourage students to paint a vivid picture of a positive outcome related to their target.  \n* *An action that supports the target*  \n  * What actions can people take to address this challenge? How can those actions be described using sensory details?  \n  * Encourage students to think about the sights, sounds, smells, and feelings associated with taking action and making a difference.\n\n\tExample Sensory Brainstorms\n\n* *Target 6.1 \\- Clean Water Access*  \n  * *Problem:* The metallic taste of contaminated water, the parched feeling of thirst, the sight of cracked earth.  \n  * *Success Story:* The sound of children laughing as they splash in a clean river, the refreshing taste of pure water, the sight of lush green fields.  \n  * *Action:* The squelch of mud as volunteers plant trees along a riverbank, the feeling of hope as a community installs a new water pump.  \n* *Target 6.2 \\- Sanitation and Hygiene*  \n  * *Problem:* The stench of open sewers, the sight of flies buzzing around waste, the discomfort of not having a private toilet.  \n  * *Success Story:* The smell of soap, the sound of running water from a new well, the feeling of dignity and privacy.  \n  * *Action:* The cheerful chatter of children learning about handwashing, the colorful posters promoting hygiene practices, the sense of accomplishment after building a latrine.  \n* *Target 6.3 \\- Water Quality*  \n  * *Problem:* The murky brown color of a polluted river, the lifelessness of fish floating on the surface, the chemical smell in the air.  \n  * *Success Story:* The clear, sparkling water of a restored river, the sound of birds singing along its banks, the sight of healthy fish swimming in its depths.  \n  * *Action:* The sight of volunteers cleaning a riverbank, the smell of fresh paint on a  “no littering” sign, the satisfaction of seeing positive change in the environment.  \n* *Target 6.4 \\- Water Use Effciency*  \n  * *Problem:* The dryness of cracked soil, the sound of a sputtering faucet, the worry of not having enough water for crops.  \n  * *Success Story:* The sight of thriving crops irrigated with efficient drip systems, the sound of rainwater harvesting, the feeling of self-sufficiency.  \n  * *Action:* The cool touch of water-saving showerheads, the sight of a lush green lawn watered with recycled graywater, the satisfaction of reducing one’s own water footprint.  \n* *Target 6.5 \\- Integrated Water Management*  \n  * *Problem:* The tension of conflicting water needs, the frustration of competing interests, the sight of a dried up riverbed.  \n  * *Success Story:* The sound of collaborative discussions, the sight of a map outlining shared water resources, the feeling of unity and cooperation.  \n  * *Action:* The excitement of attending a community forum on water management, the act of signing a petition for sustainable water policies, the sense of empowerment in participating in decision-making.  \n* *Target 6.6 \\- Protecting Ecosystems*  \n  * *Problem:* The silence of a dying wetland, the sight of plastic debris tangled in mangroves, the smell of stagnant water.  \n  * *Success Story:* The chorus of frogs and birds in a restored wetland, the sight of lush vegetation and clear water, the feeling of connection to nature.  \n  * *Action:* The slosh of boots wading through a marsh during a clean-up effort, the sound of shovels planting native species, the joy of witnessing a revitalized ecosystem.  \n* *Target 6.a \\- International Cooperation*  \n  * *Problem:* The desperation of communities lacking access to clean water, the frustration of limited resources, the isolation felt by those left behind.  \n  * *Success Story:* The cheers of a village celebrating a new water well, the sight of international experts sharing knowledge and technology, the feeling of global solidarity.  \n  * *Action:* The excitement of participating in a cultural exchange program focused on water solutions. The act of donating to a water charity, the satisfaction of supporting international collaboration.  \n* *Target 6.b \\- Community Participation*  \n  * *Problem:* The apathy and disengagement of communities regarding water issues, the feeling of powerlessness, the lack of a collective voice.  \n  * *Success Story:* The vibrant energy of a community meeting discussing water solutions, the sound of diverse voices being heard, the feeling of empowerment and ownership.   \n  * *Action:* The act of attending a local water board meeting, the excitement of organizing a community clean-up day, the pride in taking ownership of one’s water resources."
  },
  {
    "title": "Descriptive Writing: Painting with Words",
    "content": "Remind students of the sensory brainstorm they just completed, highlighting the powerful descriptions they just created.  \n\tExplain that they will now choose one of the scenarios they brainstormed for their assigned goal/target and individually write a short descriptive piece, focusing on bringing that scene to life through vivid sensory details. Encourage them to choose one that resonates with them and inspires their creativity.  \n\tEmphasize the importance of engaging at least three senses in their writing:  \n\t\tSight, sound, touch, taste, and smell  \n\tEncourage students to use strong verbs, descriptive adjectives, and figurative language to create a rich and immersive experience for the reader.  \n\tSensory focus and writing process\n\n* *Sensory Immersion:* If possible, revisit the sensory stations or provide visual reminders of the brainstormed sensory details.  \n* *Show, Don’t Tell:* Emphasize the importance of using vivid descriptions that engage at least three senses to bring their chosen scene to life.  \n* *Character & Setting:* Encourage students to develop a central character or characters within their scene, along with a clear setting that complements the chosen scenario.  \n* *Emotional Impact:* Guide students to consider the emotions associated with the scene and use descriptive language to convey those feelings to the reader.  \n* *Call to Action (Optional):* For older or more advanced students, suggest they include a subtle or explicit call to action within their writing, inspiring readers to consider their role in addressing water and sanitation challenges."
  },
  {
    "title": "Sharing and Wordsmithing (OPTIONAL/IF TIME ALLOWS)",
    "content": "Have students pair back up or form small groups to share their descriptive writing pieces.  \n\tAs they read their work aloud, encourage peers to identify and praise specific sensory details that are particularly vivid or effective.  \n\tGently guide students to offer suggestions for improvement, focusing on how to further enhance the sensory experience for the reader.  \n\tExample feedback:\n\n* I love how you described the crackling sound of the dry earth under the farmer’s boots. It really made me feel like I was there.  \n* The way you described the metallic taste of the contaminated water was really powerful and unsettling.  \n* I can almost hear the joyful laughter and the sound of the pump in your description of the village celebrating clean water.  \n* Maybe you could add a description of the feeling of the cool water on the villagers’ skin as they drink for the first time.  \n* I wonder if you could include the smell of the blooming flowers in the restored wetland to further enhance the sense of renewal.\n\n\tFor an extra challenge, have each student or group choose one sentence from their writing that they want to enhance with even more sensory detail.  \n\tEncourage students to brainstorm additional words or phrases that appeal to different senses, using their collective notes from the sensory immersion activity as inspiration.  \n\tCirculate among the groups, offering guidance and encouragement as needed.  \n\tProvide examples of constructive feedback, focusing on specific sensory details and their impact of the reader. Introduce new vocabulary or literary devices that can enhance descriptive writing.  \n\tEncourage students to share ideas and inspire each other’s creativity.  \n\tHave students share their upgraded sentences with their partners/groups, comparing the original and revised versions to see how the added details enrich the description.  \nAfter all groups have shared, highlighti the power of descriptive language to evoke emotions and create a sense of connection to an issue. Ask students:\n\n* How did the vivid descriptions in your writing or your classmates’ writing make  you feel about the issue of clean water and sanitation?  \n  * Explain that by painting a clear picture of the challenges and potential solutions, descriptive language can inspire people to take action and make a difference."
  }
],
	reflectionQuestions: [
  "How did focusing on sensory details \\- sight, sound, touch, smell, and possibly taste \\- change your perception of the challenges and solutions related to clean water and sanitation?",
  "What senses did you find the most powerful in conveying the importance or lack of clean water and sanitation in your writing? Why?",
  "Did the sensory immersion activity at the beginning of the lesson influence the descriptive language you used in your writing? If so, how?",
  "How can painting a picture with words, using vivid sensory details, make the issues of clean water and sanitation more real and impactful for a reader?",
  "What did you learn about the connection between our senses and our understanding of environmental and social issues?",
  "Waht did the diverse writing pieces shared by the class reveal about the many different ways that access to clean water and sanitation (or the lack thereof) impacts individuals and communities?",
  "Did exploring both the positive and negative sensory experiences associated with water and sanitation give you a more nuanced understanding of the issue?",
  "What role do you think storytelling and creative writing can play in raising awareness and advocating for solutions to water and sanitation challenges?",
  "What emotions did you connect with while writing about these issues, and how  might those emotions motivate you to take action?",
  "What are some of the key takeaways from the descriptive writing pieces shared today that you think are important for others to understand about clean water and sanitation?"
],
	assessmentCriteria: [
  "Consistent and enthusiastic involvement in all phases of the lesson, including the initial sensory immersion, brainstorming, the individual writing process, and active participation in discussions (including optional sharing and wordsmithing).",
  "Comprehension of Global Goal 6 and its targets and core concepts (e.g., pollution, access, ecosystems, water efficiency). This will be evidenced through the thematic content and sensory details within the descriptive writing and verbal explanations.",
  "Originality and effectiveness in crafting vivid descriptive pieces that effectively utilize sensory details (sight, sound, smell, touch, taste) and strong verbs to bring the chosen water-related scene to life.",
  "How clearly and powerfully the finished writing piece communicates its intended message about Global Goal 6\\. Did the description successfully evoke thought or emotion in the reader/listener regarding water’s importance, its challenges, or solutions?",
  "Quality of the writing craft, including precise word choice, rich sensory language, and the creation of atmosphere, demonstrating attention to descriptive impact.",
  "Ability to articulate personal creative choices and to interpret and provide thoughtful feedback on classmates’ writing, focusing on sensory effectiveness and connection to Global Goal 6 themes (if applicable).",
  "Nuance and depth of understanding demonstrated in reflections, particularly concerning the role of storytelling in advocating for environmental change and the complexities of water management."
],
};

registerLessonContent(lessonContent);

export default lessonContent;

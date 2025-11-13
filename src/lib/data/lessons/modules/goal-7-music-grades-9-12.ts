import type { LessonContentData } from '../types';
import { registerLessonContent } from '../index';

const lessonContent: LessonContentData = {
	goalNumber: 7,
	artForm: 'Music' as const,
	gradeLevel: '9-12' as const,
	title: "MUSIC",
	duration: "",
	materials: [
  {
    "name": "A variety of drums and percussion instruments (enough for each student to have one or to share in pairs) (Examples: djembes, bongos, tambourines, shakers, claves, etc.)",
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
    "name": "Audio",
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
	introduction: "Begin by reintroducing Global Goal 7 if needed: Affordable and Clean Energy. Explain its mission to ensure everyone has access to affordable, reliable, sustainable, and modern energy by 2030\\.  \n\tGuide students to connect the concept of energy to their own bodies and the vibrations they feel. \n\n* What does energy feel like?  \n* Where do you feel energy in your body?  \n* Have students jump, shake their arms, and notice the sensations.\n\n\tDistribute the drums and percussion instruments. Allow students to freely explore the sounds and rhythms they can create. Encourage students to experiment with different tempos, dynamics, and patterns.",
	steps: [
  {
    "title": "Rhythm of Energy: A Drumming Journey Towards Sustainable Development",
    "content": "**(30-60 MINUTES)**"
  },
  {
    "title": "Guided Visualization: Harnessing the Energy Within",
    "content": "Explain to students that this will help them connect with the concept of energy on a personal level and translate those feelings into rhythms and sounds.  \n\tDim the lights if possible and have students put down their drums/percussion instruments. Ask them to find a comfortable seated position and close their eyes.  \n\tGuide students to take a few deep breaths, inhaling slowly and exhaling fully. Encourage students to release any tension in their bodies and focus on the present moment. Lead them through the sun visualization:\n\n* “Imagine the warm rays of the sun shining down on you. Feel the energy of the sun filling you with warmth and light. Notice how this energy feels. Is it bright? Is it powerful? Is it gentle?”  \n* “Now, pick up your instrument and try to express the energy of the sun through sound. What rhythm or beat represents the sun’s rays? How can you use your instrument to create a feeling of warmth and light?”\n\n\tAllow students a minute or two to explore the sounds of the sun with their percussion before moving on to the wind visualization:\n\n* “Now, imagine a gentle breeze blowing. Feel the power of the wind as it moves around you. Is it strong and gusty, or soft and flowing? How does the wind’s energy feel different from the sun’s energy?”  \n* “Translate the feeling of the wind into a rhythm on your drum. What kind of beat captures the movement and power of the wind? Can you create a sound that rises and falls like a gust of wind?”\n\n\tGive students another minute or two to explore the sounds of the wind, before transitioning to the water visualization:\n\n* “Imagine a flowing river or a crashing wave. Feel the energy of the water as it moves and changes. Is it calm and steady, or powerful and dynamic? How does the water’s energy feel different from the sun and the wind?”  \n* “Express the energy of water through your drum. Can you create a rhythm that flows like a river? Can you make a sound that crashes like a wave? Experiment with different tempos and dynamics to capture the feeling of water.”\n\n\tAgain, give students time to explore the sounds of water. Then, the class will combine all the elements:\n\n* “Now, try to combine the energies of the sun, wind, and water into a single rhythm. How can you use your drum to create a soundscape that represents all three elements working together?”  \n* “Imagine a world where these natural forces provide clean and sutainable energy for everyone. What does that sound like?”\n\nAllow students a few minutes to create their own soundscape.  \nAsk students to slowly bring their attention back to the room. Have them take a deep breath and open their eyes, noticing how they feel after connecting with the energy of the sun, wind, and water."
  },
  {
    "title": "Rhythm of the World",
    "content": "Divide the class into small groups. Assign each group one of the targets from Global Goal 7 and provide them with a corresponding scenario.   \n\tUse the following scenarios or create your own:\n\n*"
  },
  {
    "title": "Target 7.1 \\- Access to Energy",
    "content": "* Scenario: A young girl in a rural village dreams of becoming a doctor but struggles to study at night due to the lack of electricity. Her family relies on kerosene lamps, which are expensive and emit harmful fumes. When a solar-powered lamp is introduced to the village, her life changes dramatically. The drumming represents the girl's initial frustration and limitations, followed by the hope and opportunity that comes with access to clean and reliable lighting.  \n  * Characters**:** The young girl, her parents, a village elder, a solar lamp distributor.  \n  * Scenario**:** A remote village in the Amazon rainforest finally gains access to electricity through a new solar microgrid. The villagers celebrate with joyful drumming and dancing, expressing their excitement for the opportunities this brings (education, healthcare, economic development). However, the celebration is interrupted by a sudden storm that damages the solar panels, cutting off the power and highlighting the vulnerability of their new energy source.  \n  * Characters**:** Village elder, school teacher, young student, clinic nurse, microgrid technician.  \n*"
  },
  {
    "title": "Target 7.2 \\- Renewable Energy",
    "content": "* Scenario: A community living near a coal-fired power plant experiences the negative impacts of air pollution and health problems. They organize a protest with drumming and chanting, demanding a transition to cleaner energy sources. A debate ensues between those who support the continued use of coal for economic reasons and those who advocate for renewable energy to protect the environment and public health.  \n  * Characters: Community members, factory workers, environmental activists, local politicians, health professionals.  \n  * Scenario**:** A city council meeting is held to debate the construction of a large wind farm in a rural area. Farmers express concerns about the impact on their land and livelihoods, while environmental activists and renewable energy advocates argue for the benefits of clean energy and reducing reliance on fossil fuels. The drumming represents the tension and conflicting perspectives in the debate.  \n  * Characters**:** Mayor, farmer, environmental activist, wind energy developer, concerned citizen.  \n*"
  },
  {
    "title": "Target 7.3 \\- Energy Efficiency",
    "content": "* Scenario: A family is trying to reduce their energy consumption at home. They create a \"wasteful\" rhythm with loud, chaotic drumming representing their current energy habits (leaving lights on, using old appliances, taking long showers). Through discussion and cooperation, they gradually refine their rhythm, making it quieter and more efficient, symbolizing their efforts to conserve energy and adopt more sustainable practices.  \n  * Characters: Parents, children, energy auditor (optional).  \n  * Scenario**:** A group of students are tasked with designing an energy-efficient school building. They experiment with different rhythms and sounds to represent various energy-saving features: solar panels (bright, rhythmic beats), insulation (muted, steady drumming), natural lighting (light, airy sounds), and efficient appliances (smooth, flowing rhythms). They work together to create a harmonious composition that symbolizes a sustainable and energy-efficient school.  \n  * Characters**:** Students, architect, teacher, school principal.  \n*"
  },
  {
    "title": "Target 7.a \\- International Cooperation",
    "content": "* Scenario: Scientists and engineers from different countries collaborate on developing a new type of solar panel that is more efficient and affordable. Each group uses drumming to represent their unique cultural approach to the problem and the challenges they face. Through shared knowledge and collaboration, they combine their rhythms to create a powerful and innovative solution that symbolizes the potential of international cooperation to advance clean energy technology.  \n  * Characters: Scientists, engineers, government representatives, international organizations.  \n  * Scenario: Students from different countries participate in a global online conference on climate change and energy solutions. Each group represents a different country with its own unique drumming style and perspective on energy issues. Through dialogue and collaboration, they try to synchronize their rhythms, symbolizing the importance of international cooperation in addressing global energy challenges and achieving SDG 7\\.  \n  * Characters: Students from different countries with diverse perspectives on energy and climate change.  \n*"
  },
  {
    "title": "Target 7.b \\- Infrastructure and Technology",
    "content": "* Scenario**:** A remote island community relies on diesel generators for electricity, which are expensive, noisy, and polluting. They decide to transition to a hybrid energy system that combines solar power, wind turbines, and battery storage. The drumming represents the initial struggle with limited resources and unreliable power, followed by the gradual implementation of new technologies and the eventual achievement of a more resilient and sustainable energy system.  \n  * Characters**:** Island residents, community leaders, engineers, renewable energy experts.  \n  * Scenario: A small island nation is devastated by a hurricane that destroys its outdated energy infrastructure. The initial drumming is slow and fragmented, representing the lack of power and limited resources. As the island rebuilds with support from international aid and invests in resilient renewable energy technologies (solar, wind, battery storage), the drumming becomes stronger, more complex, and interconnected, symbolizing the development of a modern and sustainable energy system.  \n  * Characters: Island residents, government officials, aid workers, engineers.\n\n\tOnce each group has their scenario, encourage them to explore the emotions and themes through drumming. How can they use rhythm, tempo, and dynamics to represent the conflict, challenges, and potential solutions in their scenario? Examples:\n\n* Example (Target 7.1): The initial joy and celebration could be represented by fast, upbeat drumming. The storm and power outage could be depicted with sudden stops and chaotic rhythms. The vulnerability and uncertainty could be conveyed through slower, more hesitant drumming.\n\nCharacter Representation: Can different drum sounds or rhythms represent different characters or perspectives in the scenario?\n\n* Example (Target 7.2): Farmers might be represented by a steady, grounded rhythm, while environmental activists might have a more dynamic and flowing rhythm.\n\nSound Effects: Encourage the use of vocal sounds and body percussion to enhance the storytelling and create sound effects.\n\n* Example (Target 7.3): The \"wasteful\" rhythm could include shouting and stomping, while the \"efficient\" rhythm could be quieter and more controlled."
  },
  {
    "title": "Call and Response: Echoes of Challenges and Solutions",
    "content": "Have students gather in a circle with their drums and percussion instruments.  \n\tExplain the activity\n\n* “Now we are going to use our drums to have a conversation about the challenges and solutions related to energy. I’ll start by playing a rhythm that represents a specific challenge, and you’ll respond with thythms that represent possible solutions.”\n\n\tDemonstrate with a simple example. Play a slow, heavy rhythm.\n\n* “This rhythm represents energy poverty. The lack of access to electricity in many parts of the world.”\n\n\tThen, demonstrate a bright, steady rhythm.\n\n* “This rhythm represents the solution: solar power bringing light to those communities.”\n\n\tGuide the class to play these rhythms together, and practice transitioning smoothly between the two rhythms.  \n\tBegin by leading the class to play a challenge rhythm. Be expressive with your drumming and facial expressions to convey the feeling of the challenge and encourage students to play with feeling.  \n\tAfter a short period, cue the class to transition to the corresponding solution rhythm. Ensure everyone switches together to create a unified sound.  \n\tProvide feedback and encouragement.  \n\tIntroduce as many challenge and solution rhythms as the class can handle, teaching the students each rhythm slowly then introducing them to the call out group section.  \n\tExample rhythms:  \n\t\tChallenge:\n\n*"
  },
  {
    "title": "Energy Poverty:",
    "content": "Slow, heavy, with long pauses, perhaps using only the bass drum or low-pitched instruments. It should convey a sense of lack, stillness, and difficulty.  \n*"
  },
  {
    "title": "Climate Change:",
    "content": "Chaotic, erratic, with sudden changes in tempo and dynamics. Use a variety of instruments to create a sense of unpredictability and urgency.  \n*"
  },
  {
    "title": "Reliance on Fossil Fuels:",
    "content": "Repetitive, monotonous, perhaps using a single drum or instrument played in a simple, unchanging pattern. This represents the unsustainable and limited nature of fossil fuels.  \n*"
  },
  {
    "title": "Lack of International Cooperation:",
    "content": "Fragmented, disjointed, with different groups playing contrasting rhythms that clash rather than blend. This symbolizes the lack of unity and coordination in addressing global energy challenges.\n\n  Solution:\n\n*"
  },
  {
    "title": "Solar Power:",
    "content": "Bright, steady, with a clear and consistent beat. Use lighter-sounding instruments like shakers and bells.  \n*"
  },
  {
    "title": "Sustainable Practices:",
    "content": "Grounded, balanced, with a moderate tempo and a mix of instruments. This represents a holistic approach to energy and environmental sustainability.  \n*"
  },
  {
    "title": "Renewable Energy Sources:",
    "content": "Diverse and dynamic, with varying rhythms and a mix of instruments. This symbolizes the many options for clean energy.  \n*"
  },
  {
    "title": "Global Collaboration:",
    "content": "Unified, synchronized, with all students playing the same rhythm together in a strong and steady beat. This represents the power of collective action.\n\n\tAfter exploring the challenges and solutions, smoothly transition to the sound collage activity."
  },
  {
    "title": "Sound Collage",
    "content": "Ensure everyone is in a circle, able to see and hear each other clearly.  \nBriefly recap the themes explored in the lesson: \"We've learned about the challenges of energy poverty and climate change, the potential of renewable energy, the importance of energy efficiency, and the need for global cooperation. Now, let's express all of this together, through sound.\"  \nChoose one student to begin the sound collage with a rhythm/beat of their choice.  \n\tInstruct the rest of the class to listen intently to the initial soloist.  \n\tAs the first student plays, call on other students one-by-one to gradually join in, adding their own sounds and rhythms. Emphasize listening and responding to each other rather than simply playing at the same time.  \n\tEncourage students to start softly and gradually increase volume as more people join. This creates a sense of building energy and momentum.  \n\tProvide verbal cues and suggestions to shape the overall sound collage.\n\n* Let’s hear some sounds representing the power of the sun\\!  \n* Can we add some rhythms that show the urgency of climate change?  \n* I’m hearing a lot of individual sounds, can we create some connections?  \n* Let’s bring in some quieter sounds to represent energy efficiency.\n\n\tUse hand gestures or body movements to guide the dynamics and tempo of the collage. You can raise your hand to indicate increasing volume or slow down your movements to encourage a calmer rhythm.  \n\tEncourage students to express their own creativity while also listening and responding to the sounds around them.  \n\tRemind them to use dynamics and create space for quieter sounds to be heard.  \n\tGive a clear signal (e.g., a raised hand or specific sound) to indicate that the sound collage is coming to a close.  \n\tGuide the class to end with a unified and powerful rhythm that represents a collective commitment to achieving GG 7\\. You can start this rhythm yourself and have the class join in, creating a sense of shared purpose and determination.  \n\tTips for a Successful Sound Collage:\n\n* Establish clear expectations and guidelines.  \n* Start with a single soloist to avoid chaos.  \n* Encourage active listening and responding.  \n* Provide clear cues and guidance throughout the activity.  \n* Create a safe and supportive environment for creative expression.  \n* End with a sense of unity and purpose."
  }
],
	reflectionQuestions: [
  "How did drumming and rhythm help you connect with the concepts of energy and its different forms (sun, wind water) on a more visceral level?",
  "What did the process of translating the related challenges and solutions into rhythmic patterns teach you about the issues?",
  "How did the collaborative sound collage at the end of the lesson reflect the idea of diverse energy sources coming together to power the world?",
  "What did you notice about the power of rhythm to convey urgency, hope, or the potential for change in relation to energy issues?",
  "How did the contrasting rhythms representing challenges and solutions help you understand the complexities of transitioning to sustainable energy?",
  "What did you learn about the interconnectedness of different aspects of Global Goal 7, such as energy access, renewable energy, and energy efficiency?",
  "Did any of the rhythmic scenarios or the overall exploration of energy resonate with your own energy consumption habits or your awareness of energy issues in your community?",
  "What emotions did you connect with while drumming about the challenges and potential of clean energy?",
  "What is one key takeaway about the need for affordable and clean energy and the power of collective action taht you will remember from this lesson?"
],
	assessmentCriteria: [
  "Consistent and enthusiastic involvement in all phases of the lesson, including the initial energy visualizations, group rhythmic scenario creation, call-and-response activities, and the final sound collage.",
  "Comprehension of Global Goal 7 and its targets and core concepts (e.g., energy access, renewable sources, efficiency, international cooperation). This will be evidenced through the symbolism and intention within the rhythmic contributions and verbal explanations.",
  "Originality and effectiveness in translating abstract ideas and scenarios into distinct rhythmic patterns, sounds, and dynamics using available instruments or body percussion.",
  "How clearly and powerfully the individual and collective rhythmic pieces communicated the intended message about Global Goal 7\\. Did the sounds successfully evoke thought or emotion related to energy challenges or solutions?",
  "Ability to work effectively within the small groups to create scenarios, and the ability to work as a cohesive whole class during call-and-response and the sound collage, demonstrating active listening and responsive playing.",
  "Willingness and ability to maintain a steady beat, execute rhythmic patterns with reasonable precision, and blend the sounds effectively within the ensemble, demonstrating musical awareness.",
  "Nuance and depth of understanding demonstrated in the reflections, particularly concerning the role of music in advocating for sustainable energy and the complexities of achieving energy goals."
],
};

registerLessonContent(lessonContent);

export default lessonContent;

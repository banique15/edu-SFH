import type { LessonContentData } from '../types';
import { registerLessonContent } from '../index';

const lessonContent: LessonContentData = {
	goalNumber: 5,
	artForm: 'Art' as const,
	gradeLevel: '5-8' as const,
	title: "ART",
	duration: "",
	materials: [
  {
    "name": "Large sheets of sturdy paper (e.g., drawing paper, cardstock, or even watercolor paper \\- one per student)",
    "isOptional": false
  },
  {
    "name": "Variety of expressive art materials:",
    "isOptional": false
  },
  {
    "name": "Paints: tempera or acrylic paints in a wide range of colors",
    "isOptional": false
  },
  {
    "name": "Brushes: variety of sizes",
    "isOptional": false
  },
  {
    "name": "Water containers",
    "isOptional": false
  },
  {
    "name": "Pallettes or disposable plates for mixing colors",
    "isOptional": false
  },
  {
    "name": "Drop cloths or newspapers to protect work surfaces if needed",
    "isOptional": false
  },
  {
    "name": "\\[Optional\\] Sponges, paper towels (for dabbing/lifting color)",
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
    "name": "Paper/notebooks",
    "isOptional": false
  },
  {
    "name": "Pens/pencils",
    "isOptional": false
  }
],
	introduction: "Welcome students to an exciting art class. Explain that they will use their imaginations and creativity to explore a really important idea: Global Goal 6, Clean Water and Sanitation.  \nClarify that Global Goal 6 means everyone, everywhere, has access to clean water for drinking, washing, and playing, and safe ways to keep our environments clean (like good restrooms and trash disposal). You emphasize that this means healthy rivers, lakes, and oceans, and clean hands for all\\!  \nShow students images of contrasting water environments (polluted vs. pristine).   \nExamples:\n\n* Pristine Natural Environments  \n  * [Banff National Park, Canada](https://www.britannica.com/place/Banff-National-Park)  \n  * [Crater Lake National Park, Oregon](https://www.youtube.com/watch?v=kZADEu0QvmQ)  \n  * [Water of the Maldives](https://www.reddit.com/r/oddlysatisfying/comments/c7gnpz/does_anyone_else_find_crystal_clear_water_super/#lightbox)  \n  * [Great Barrier Reef, Australia](https://www.britannica.com/place/Great-Barrier-Reef)  \n  * [Amazon Rainforest](https://education.nationalgeographic.org/resource/where-does-amazon-river-begin/)  \n* Polluted Water Sources  \n  * [Great Pacific Garbage Patch](https://education.nationalgeographic.org/resource/great-pacific-garbage-patch/)  \n  * [Bangladesh’s “dead river”](https://www.youtube.com/watch?app=desktop&v=t85EDm75i1Q)  \n  * [Citarum River, Indonesia](http://www.austroindonesianartsprogram.org/blog/most-polluted-river-world-citarum-river-indonesia)  \n  * [Ganges River, India](https://www.borgenmagazine.com/israel-and-india-team-up-to-restore-the-ganges-river/)  \n  * [Deepwater Horizon oil spill, Gulf of Mexico](https://www.britannica.com/event/Deepwater-Horizon-oil-spill)\n\nOpen a discussion with guiding questions like:\n\n* How do these images make you feel? What emotions come up when you see the sparkling, clean water? What about the murky, polluted water?  \n* What do you see in the clean water pictures that makes it look so inviting? What do you see in the polluted pictures that makes it look unhealthy?  \n* Why is having clean water and clean ways to get rid of waste so important for people and for animals?  \n* Do you think art can be a powerful way to make people care about clean water?  \n* What might a painting look like if it showed the feeling of dirty water? What about the feeling of clean, fresh water?\n\nIntroduce the class to the art style of Color Field Painting. Explain that this is a type of art where artists use large areas of color to show feelings and ideas, often without drawing specific objects. Tell students that Color Field artists often poured or brushed paint to creat big, flowing shapes and blended colors, sometimes making it look like vast landscapes or deep emotions. You explain that hey cared more about how colors made you feel than about painting a realistic picture.  \nShow selected visual aids of Color Field paintings.  \nExamples:\n\n* [Blue, Green, and Brown,](https://www.mark-rothko.org/blue-green-and-brown.jsp) Mark Rothko: Focus on large rectangles of color stacked, how they create mood and depth, similar to water.  \n* [Mountains and Sea](https://en.wikipedia.org/wiki/Mountains_and_Sea), Helen Frakenthaler: Focus on how colors seem to flow and bleed into each other like water, bright, open feeling.  \n* [Riverhead](https://www.frankenthalerfoundation.org/artworks/riverhead/details/all), Helen Frankenthaler: Focus on flowing, watery forms and colors, its dynamic movement, and the interconnectedness of water systems.  \n* [PH-950](https://www.artsy.net/artwork/clyfford-still-ph-950), Clyfford Still: Focus on the edges and dark colors evoking the negative impacts of pollution on our water sources.  \n* [Light Depth](https://www.si.edu/object/light-depth%3Ahmsg_2018.036), Sam Gilliam: Focus on the sense of flowing fabric and vibrant color, how it is reminiscent of water or movement.  \n* [Ocean Park \\#60](https://anderson.stanford.edu/collection/ocean-park-60-by-richard-diebenkorn/), Richard Diebenkorn: Focus on geometric shapes and blocks of color that evoke a sense of landscape or light, vastness.  \n* [Tet](https://whitney.org/collection/works/1745), Morris Louis: Focus on transparent, flowing washes of color that seem to stain the canvas, like water.\n\nFacilitate an open discussion about the art, asking guiding questions like:\n\n* What colors do you see in these paintings? Do they feel bright, dark, calm, or energetic?  \n* How do the big areas of color make you feel? Do they remind you of anything, even if it’s not a clear picture?  \n* How do these artists use colors to show a big feeling or a vast space?  \n* Do you think you could show the feeling of clean water or dirty water just using big colors like this?",
	steps: [
  {
    "title": "Color Field for Clean Water: Painting the Vision",
    "content": ""
  },
  {
    "title": "Warm Up: Color Flow Movement",
    "content": "Instruct students to stand in a comfortable space and position and close their eyes gently if they are comfortable.  \nSay: Imagine a color that makes you feel peaceful and clear, like clean water. See that color flowing into your fingertips. Now, very slowly, gently, move your fingers and hands, letting that color flow out of them like water. Let the color flow down your arms. How does it feel when your arms move in a gentle movement, like water?\n\n* Guide students to make slow, fluid arm movements.\n\nSay: Now, imagine a color that makes you feel heavy or murky like dirty water. See that color gathering in your feet. How does that color make your legs move? Maybe slow and trudging? Let it flow up to your knees, your hips. What kind of slow, heavy movement can you make with your whole body to show that feeling?\n\n* Guide students in slow, resistive, heavy body movements.\n\nSay: Now, imagine a clear, bright color washing over you, cleaning away the heavy color. Let your body flow freely and lightly again, like sparkling clean water. Take a deep breath, feeling clean and refreshed.\n\n* Guide a transition back to light, fluid movements, emphasizing deep breaths.\n\nConclude the warm up by affirming the exploration of movement and color, explaining that these ideas and feelings will be used in their upcoming paintings."
  },
  {
    "title": "Painting Our Watery World",
    "content": "Explain to the class that they will create a Water Word Association Grid to brainstorm ideas for their Color Field paintings. They will think about words related to clean water, pollution, and the actions we take, and then connect them to colors and feelings.  \nOn the whiteboard/paper, draw a simple grid with two column and room for several rows.\n\n* *Column 1: Water Words* (Words related to Global Goal 6).  \n* *Column 2: Colors and Feelings for Our Art* (Colors and emotions linked to the words).\n\nAsk students to shout of words related to:\n\n* *Clean Water:* What words come to mind when you think of clean, fresh water or good hygiene?  \n  Examples:  \n  * Clear, sparkling, fresh, pure, safe, healthy, flowing, bubbling, clean hands, soap, happy, life, refreshing, blue, green, bright, peaceful.  \n* *Polluted Water/Challenges:* What words come to mind when you think of dirty water, or not having enough clean water, or sanitation problems?  \n  Examples:  \n  * Dirty, murky, brown, trash, plastic, sick, sad, scarce, smelly, broken, unfair, worried, dark, stagnant, dry, slimy, gross.  \n* *Actions/Solutions:* What words come to mind when you think about helping to get clean water, or cleaning up pollution, or staying healthy?  \n  Examples:  \n  * Helping, cleaning, sharing, working together, building, caring, protecting, recycling, fixing, hopeful, strong, community, brave, bright, active.\n\nWrite all of these brainstormed words in the Water Words column.  \nNow, for each word in the Water Words column, ask: What colors or feelings would represent this word in a painting? What kind of feelings would these colors give you?  \nWrite the associated colors and feelings in the Colors and Feelings for Our Art column.  \nExample connections:\n\n* Sparkling → bright blues, white, joyful  \n* Sick → muddy greens, grays, sad  \n* Helping → warm yellows, bright oranges, energetic\n\nSummarize that they have now created a grid that gives us a palette of feelings and colors to use for their paintings."
  },
  {
    "title": "Expressive Painting",
    "content": "Give each student a large piece of paper and access to the art materials.  \nExplain that they will create their own Color Field painting about Global goal 6: Clean Water and Sanitation. They can choose to show the feeling of clean, healthy water, or the feeling of polluted/scarce water, or even how we move from pollution to cleanliness.  \nEncourage students to:\n\n* *Use large areas of color:* Fill most of their paper with big swaths of color, like a Color Field artist.  \n* *Blend and layer colors:* Let colors mix on the paper, or paint one color over another to create new shades and depth, like water flowing.  \n* *Show feelings with color:* Use the colors from the brainstorm grid to show emotions (e.g., bright blues for hope, muddy browns for pollution, vibrant greens for life, etc.).  \n* *Experiment with techniques:* Try brushing, dabbing, or even gently tilting the paper to let the paint flow.  \n* *Focus on the feelings:* Remember, it’s not about drawing a realistic picture, but translating the feeling of clean water, pollution, or active solutions onto the paper.\n\nCirculate, offering support and encouraging experimentation. Ask guiding questions like:\n\n* What feeling about water are you showing with this \\[color/area\\]?  \n* How does the way you’re blending these colors make them feel like flowing water or murky water?  \n* Can you use a strong, clear color to show the power of clean water?  \n* What message about clean water do you want viewers to feel when they see your artwork?  \n* How does your painting’s texture or flow remind you of water?"
  },
  {
    "title": "Gallery Walk",
    "content": "Once all paintings have been completed/time allotted for painting is over, instruct all students to carefully place their finished paintings on desks/tables, the floor, etc.  \nExplain that the class will now go on a silent gallery walk. Students will move slowly and quietly around the room, looking at everyone’s amazing artwork. Ask students to not touch the art, and not to talk. Just look, feel, and think about what each painting shows them about water.  \nInstruct students to pay attention to things like (can ask before the walk or during):\n\n* What colors stand out to you in a painting? What do those colors make you feel?  \n* Do the paintings remind you of clean water, dirty water, or people helping? How do they show that?  \n* Do the paintings make you think about a challenge with water, or a solution and hope?  \n* How do your fellow student artists use big areas of color to tell a story or show a feeling?\n\nEmphasize that students should make their own interpretations and focus on the emotions and messages they receive from each piece. Explain aht they do not need to write anything down during this walk."
  },
  {
    "title": "Reflection & Summary",
    "content": "Have students reflect on their learning experience through discussion or writing.  \nAsk guiding questions like:\n\n* How did painting with big colors and showing feelings help you understand Global Goal 6: Clean Water and Sanitation in a new way?  \n* What did you learn about the importance of clean water and why it’s a big promise and responsibility for everyone in the world?  \n* Which artworks or ideas from your classmates made you think or feel the most about clean water, and why?  \n* What does this activity tell us about how we can all work towards Global Goal 6?  \n* What’s one small action you feel inspired to take this week to help keep water clean or save water?"
  }
],
	reflectionQuestions: [
  "How did painting with big colors and showing feelings help you understand Global Goal 6: Clean Water and Sanitation in a new way?",
  "What did you learn about the importance of clean water and why it’s a big promise and responsibility for everyone in the world?",
  "Which artworks or ideas from your classmates made you think or feel the most about clean water, and why?",
  "What does this activity tell us about how we can all work towards Global Goal 6?",
  "What’s one small action you feel inspired to take this week to help keep water clean or save water?"
],
	assessmentCriteria: [
  "Consistent and enthusiastic involvement in all phases of the lesson, including the warm up, artwork creation, and class discussions.",
  "Understanding of the core concept of clean water and sanitation (access, hygiene, pollution prevention), as demonstrated through the symbolism, emotions, and message in the Color Field painting and verbal explanations.",
  "Originality and effectiveness in creating the art piece. Look for evidence of connection to Global Goal 6 (does the artwork clearly represent feelings or ideas related to clean water, pollution, or solutions, using the concept of Color Field?), and use of elements (are there attempts to use large areas of color, blending, layering, and color contrasts to convey the message and feelings?).",
  "Ability to articulate learning and personal connections during the reflection and summary discussion."
],
};

registerLessonContent(lessonContent);

export default lessonContent;

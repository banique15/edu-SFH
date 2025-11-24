import type { LessonContentData } from '../types';
import { registerLessonContent } from '../index';

const lessonContent: LessonContentData = {
	goalNumber: 9,
	artForm: 'Art' as const,
	gradeLevel: '5-8' as const,
	title: "ART",
	duration: "",
	materials: [
  {
    "name": "Variety of drawing and/or painting materials (pencils, markers, colored pencils, crayons, paints)",
    "isOptional": false
  },
  {
    "name": "Large square pieces of paper or cardstock (one per student, recommend size 4” x 4”)",
    "isOptional": false
  },
  {
    "name": "\\[Optional\\] Stencils (pre-made simple stencils like shapes, letters, arrows) or materials for students to create simple stencils",
    "isOptional": false
  },
  {
    "name": "Collage materials (magazines, newspapers, colored paper scraps, fabric scraps, found objects)",
    "isOptional": false
  },
  {
    "name": "Scissors",
    "isOptional": false
  },
  {
    "name": "Glue",
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
    "name": "Large display surface: a wall, bulletin board, or large piece of poster board where the class’s art can be assembled into one large, collaborative mural",
    "isOptional": false
  }
],
	introduction: "Welcome students to an exciting art class. Explain that they will use their imaginations and creativity to explore a really important idea: Global Goal 9, Industry, Innovation, and Infrastructure.  \nClarify that Global Goal 9 is like a huge promise the world has made: a promise to help communities and countries build strong, lasting things (like safe roads, schools, and hospitals) \\- that’s infrastructure. Emphasize it’s also about new ideas and inventions that make life better \\- that’s innovation. And it’s about making sure industries (where things are made) are fair and sustainable, helping everyone grow \\- that’s industry. Basically, it’s about building a better, smarter world for everyone.  \nThen show a short video or images of compelling street art examples.  \nExamples\n\n* Banksy  \n  * [Works](https://www.google.com/search?q=banksy+works&sca_esv=24d1c3d5cf171cb0&rlz=1C5CHFA_enUS1124US1124&biw=1200&bih=728&sxsrf=ADLYWIIrvvj9azkyHtDvTVGKBuDrHT_Ptw%3A1733175293585&ei=_SdOZ4y1I6y3wN4P686b6Qc&ved=0ahUKEwjMp9SNhYqKAxWsG9AFHWvnJn0Q4dUDCA8&uact=5&oq=banksy+works&gs_lp=Egxnd3Mtd2l6LXNlcnAiDGJhbmtzeSB3b3JrczIPEAAYgAQYFBiHAhhGGPsBMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMhsQABiABBgUGIcCGEYY-wEYlwUYjAUY3QTYAQFIgAhQpgJYhwdwAXgBkAEAmAFYoAH5AqoBATW4AQPIAQD4AQGYAgagAosDwgIKEAAYsAMY1gQYR8ICDRAAGIAEGLADGEMYigXCAg4QABiwAxjkAhjWBNgBAcICExAuGIAEGLADGEMYyAMYigXYAQHCAhkQLhiABBiwAxhDGMcBGMgDGIoFGK8B2AEBwgINEAAYgAQYsQMYRhj7AcICDRAuGIAEGLEDGBQYhwLCAgoQABiABBhDGIoFwgINEAAYgAQYsQMYQxiKBcICCBAAGIAEGLEDwgIKEAAYgAQYFBiHAsICGRAAGIAEGLEDGEYY-wEYlwUYjAUY3QTYAQHCAgUQLhiABJgDAIgGAZAGEroGBggBEAEYCZIHATagB_8k&sclient=gws-wiz-serp)  \n  * [Who is Banksy \\- British Street Art](https://www.youtube.com/watch?v=QtgyZ7zueYA)  \n* Eduardo Kobra  \n  * [Works](https://www.google.com/search?q=eduardo+kobra+works&sca_esv=24d1c3d5cf171cb0&rlz=1C5CHFA_enUS1124US1124&biw=1200&bih=728&sxsrf=ADLYWILk1T3ripG9x2ccTjsUcxxnTy-j-Q%3A1733175295309&ei=_ydOZ7nLEq7Fp84P0IfbwAw&ved=0ahUKEwj5xr2OhYqKAxWu4skDHdDDFsgQ4dUDCA8&uact=5&oq=eduardo+kobra+works&gs_lp=Egxnd3Mtd2l6LXNlcnAiE2VkdWFyZG8ga29icmEgd29ya3MyBRAAGIAEMgYQABgWGB4yBhAAGBYYHjILEAAYgAQYhgMYigUyCxAAGIAEGIYDGIoFMggQABiABBiiBDIIEAAYgAQYogQyCBAAGIAEGKIEMggQABiABBiiBDIIEAAYgAQYogRI_iRQzwNYlSRwBXgBkAEAmAF4oAGBDaoBBDE4LjO4AQPIAQD4AQGYAhqgAvoNqAIUwgIKEAAYsAMY1gQYR8ICDRAuGIAEGLADGEMYigXCAg0QABiABBiwAxhDGIoFwgIEECMYJ8ICChAjGIAEGCcYigXCAgoQABiABBhDGIoFwgIREC4YgAQYsQMY0QMYgwEYxwHCAhAQABiABBixAxhDGIMBGIoFwgILEAAYgAQYsQMYgwHCAg4QLhiABBixAxjRAxjHAcICCBAuGIAEGLEDwgIIEAAYgAQYsQPCAgcQIxgnGOoCwgIQEC4YxwEYJxjqAhiOBRivAcICFhAuGNEDGAMYtAIYxwEY6gIYjwHYAQHCAhAQLhgDGLQCGOoCGI8B2AEBwgIQEAAYAxi0AhjqAhiPAdgBAcICExAuGAMY1AIYtAIY6gIYjwHYAQHCAhMQLhiABBjHARgnGIoFGI4FGK8BwgILEAAYgAQYkQIYigXCAgsQLhiABBiRAhiKBcICCxAuGIAEGLEDGIMBwgIPECMYgAQYJxiKBRhGGPkBwgINEC4YgAQYsQMYQxiKBcICChAuGIAEGEMYigXCAgUQLhiABMICJxAAGIAEGIoFGEYY-QEYlwUYjAUY3QQYRhj5ARj0Axj1Axj2A9gBAcICDRAAGIAEGLEDGEMYigXCAhAQLhiABBixAxiDARiKBRgKwgIQEAAYgAQYkQIYigUYRhj7AcICHBAAGIAEGJECGIoFGEYY-wEYlwUYjAUY3QTYAQGYAwmIBgGQBgq6BgYIARABGAqSBwQyMy4zoAfupwM&sclient=gws-wiz-serp)  \n  * [Kobra: Brazil’s Street Art King](https://www.youtube.com/watch?v=UlAg8udmgKo)  \n* Lady Pink  \n  * [Works](https://www.google.com/search?sca_esv=24d1c3d5cf171cb0&rlz=1C5CHFA_enUS1124US1124&sxsrf=ADLYWILO9cMHvFBThdbxYOqIT8nwN6i0lA:1733175374345&q=lady+pink+works&udm=2&fbs=AEQNm0Aa4sjWe7Rqy32pFwRj0UkWd8nbOJfsBGGB5IQQO6L3J6jP6aG80L-e2fp1-X3f05ehOuLXo03yoIKLWy31WZSxqtwwfFO117_gMSEAXUso2orrdGjldTTQypqxvaUdRsscvzCM6geb4BKcJBo9xmw99IrgD83wpxuinDZMlPiAW3wWw_4U9Ji_qqOpvLwRfk7OUHvO570UXv3BG9wKT4TlvdWeuQ&sa=X&ved=2ahUKEwjRoJW0hYqKAxXl4skDHS1sMi4QtKgLegQIFRAB&biw=1200&bih=728&dpr=2)  \n  * [‘Lady Pink’ talks about breaking barriers in graffiti](https://www.youtube.com/watch?v=gWMflez2SJ0)\n\nExplain that street art is a powerful kind of art created in public spaces, often on walls, to share big messages. Clarify that street artists use bold colors, strong lines, and sometimes symbols to make their art pop and grab attention.  \nFacilitate a discussion about the art, asking guiding questions like:\n\n* What do you notice about these artworks? Are they big or smal? Are the colors bright?  \n* What messages or ideas do you think they are trying to convey? Do they make you think about something important?  \n* How do these artworks make you feel? Do they feel strong, exciting, or hopeful?  \n* Why do you think artists choose to put their art in public places like walls, instead of just in a museum or gallery?  \n* How can street art be used to make a difference in the world or make a place look better?",
	steps: [
  {
    "title": "Building a Better Future with Street Art",
    "content": "**(30-60 MINUTES)**"
  },
  {
    "title": "Warm Up: Imagination Blueprint",
    "content": "Make sure all students have a small piece of paper and writing utensil.  \n*Tiny Invention*\n\n* Have students close their eyes if comfortable, and Imagine a tiny, super-useful invention that could help someone in the classroom. What does it look like? What does it do?  \n  * Give students a few moments to think.  \n* Have students quickly draw a tiny sketch of the invention on their paper.\n\n*Amazing Infrastructure*\n\n* Next, have students imagine a piece of amazing infrastructure \\- like a bridge that helps cars get over it quickly, a school that helps clean the air, or a train that always has enough seats. What does it look like? What makes it awesome?  \n  * Give students a few moments to think.  \n* Have students quickly sketch a tiny blueprint of their amazing structure on their paper.\n\n*Community Innovation*\n\n* Finally, have students imagine a brand new idea or innovation that could make the community as a whole better \\- maybe a new way to share food, or a robot that helps recycle. What does that idea look like?  \n  * Give students a few moments to think.  \n* Have students quickly sketch that idea onto their paper.\n\nConclude by affirming their imaginative thinking and quick sketching, explaining that these blueprints are the start of some great brainstorming."
  },
  {
    "title": "Community Transformation Map",
    "content": "Explain that the class will create a Community Transformation Map to brainstorm ideas for their street art.  \nDivide students into small groups (3-4 students). Provide each group with a piece of paper and markers/crayons.  \nInstruct each group to:\n\n* *Choose a Spot:* Choose one type of place or structure that could be anywhere in a community (e.g., a street, a park, a school, a factory, a home, etc.)  \n* *Draw “Now”:* In one corner of their paper, draw or write a few words to show what the place might look like now, focusing on something that needs improving (e.g., a bumpy road, a factory with smoke, a dark street at night, a playground with old swings, etc.)  \n* *Draw “Future Vision”:* In another corner, draw or write a few words to show what that place could look like in the future with Innovation, Infrastructure, or Industry from Global Goal 9 (e.g., a smooth safe road, a clean factory, a street with solar lights, a new playground built with recycled materials, etc.)  \n* *Connect Ideas for Art:* As a group, brainstorm how these “Now” and “Future” ideas could be shown using street art styles (bold colors, strong lines, simple symbols, stencils, etc.) They can show these ideas in the center of their paper using rough sketches, words, etc.\n\nCirculate, offering guidance and asking guiding questions like:\n\n* How can your drawings show the difference between a bumpy road and a super-smooth one?  \n* What colors would make your future factory look clean?  \n* What kind of symbol could show a new idea happening in the park?"
  },
  {
    "title": "My Innovation Tile",
    "content": "Explain that each student will now create their own Street Art Tile \\- a piece of art that will then become part of a bigger mural.  \nTheir tile will show an idea about Global Goal 9: Industry, Innovation, and Infrastructure, inspired by the brainstorm and any ideas that may follow.  \nHand out the square pieces of paper/cardstock, and ensure students have access to art supplies.  \nStudents will choose a simple street art technique to focus on, ensuring it emphasizes bold visuals and clear messages.  \nExamples/Prompts\n\n* *Stencil Style:* Create a simple drawing with a clear message (e.g., Build Smart\\!, New Ideas Shine\\!). Use bold lines and colors. Students can use a stencil for crisp shapes or letters if available.  \n* *Mural Style:* Draw a simple scene showing a challenge turning into a solution (e.g., a broken bridge becoming strong, a dark building getting bright lights). Use large, bold shapes and bright colors.  \n* *Grafitti/Pattern Style:* Create a repeating pattern of shapes or lines that represents something from Global Goal 9 (e.g., gears for industry, lightbulbs for ideas, arrows for progress). Use strong, contrasting colors.\n\nEmphasize:\n\n* *Bold lines and colors:* Think about how street artists use bright colors and strong lines to make their art stand out.  \n* *Clear message:* Even without words (or with very few), what big idea about building, inventing, or growing is being shown?  \n* *Make it pop:* Make the art eye catching\\!\n\nCirculate, offering support and encouragement, asking guiding questions like:\n\n* How can you use strong lines to show a very strong bridge?  \n* What colors make your new idea look like it’s really popping out?  \n* Can you use a cut out from a magazine to add interesting textures to your building?  \n* What message about innovation or infrastructure do you hope someone gets from your tile?"
  },
  {
    "title": "Collective Mural Assembly and Gallery",
    "content": "When all tiles are completed, have the class assemble all the individual tiles together to create one collective Innovation Mural. Physically help arrange the tiles on the designated space and attach (with tape/glue/etc.). If desired, they can be organized to create a visual journey, or just randomly.  \nExplain that the class will now go on a silent gallery “walk” of the mural. Have students move slowly and quietly (whether actually moving their bodies or just sitting and moving their eyes to look at the mural) around the mural, looking at everyone’s creative work and thinking about the big ideas connected to building, inventing, and growing.  \nAfter the silent “walk,” gather the class. Explain that each student will briefly share an observation about one tile that is not their own that caught their eye.  \nInstruct students to silently choose one classmate’s tile that makes them think: “Wow, that’s a brilliant idea\\!” or “That tells a powerful story” or “That looks really cool\\!”  \nAsk for volunteers to point to the tile they chose and briefly share:\n\n* What street art style did you see in this tile?  \n* What colors or shapes made it stand out?  \n* What big idea about building, inventing, or growing did this tile make you think about?\n\nAfter a students shares about a tile, invite the original artist to come forward briefly add their intended message or inspiration: “My tile shows \\[idea\\] because \\[reason\\].  \nContinue this spotlight and share process as time allows, ensuring diverse tiles are highlighted."
  }
],
	reflectionQuestions: [
  "How did creating street art-inspired tiles and building our collective mural help you understand Global Goal 9: Industry, Innovation, and Infrastructure in a new way?",
  "What did you learn about the importance of building strong things, creating new ideas, and making industries fair for everyone?",
  "Which parts of our collective artwork or ideas from your classmates made you think or feel the most about innovation and infrastructure, and why?",
  "What do our activities tell us about how we can all work towards Global Goal 9?",
  "What’s one small action you feel inspired to take this week to support new ideas or help build a better world?"
],
	assessmentCriteria: [
  "Consistent and enthusiastic involvement in all phases of the lesson, including the warm up, brainstorm, individual tile creation, and class discussions.",
  "Understanding of the core concept of industry, innovation, and infrastructure (building, new ideas, fair industry), as demonstrated through the symbolism and message in the individual art tile and verbal explanations.",
  "Originality and effort in creating the Innovation Tile. Look for evidence of connection to Global Goal 9 (does the tile clearly represent an idea related to building, innovation, or industry?), use of street art elements (are there attempts to use bold lines, strong colors, symbols, or a mural/stencil style to convey the idea?), and contribution to whole (does the tile contribute visually and thematically to the larger class mural?).",
  "Ability to articulate learning and personal connections during the reflection and summary discussion."
],
};

registerLessonContent(lessonContent);

export default lessonContent;

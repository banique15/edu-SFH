const fs = require('fs');
const content = fs.readFileSync('goal-content.ts', 'utf8');

// Find all goal entries
const goalRegex = /"goal-(\d+)":\s*\{/g;
let match;
const goals = [];

while ((match = goalRegex.exec(content)) !== null) {
  const goalNum = match[1];
  const startPos = match.index;
  
  // Find the matching closing brace
  let depth = 0;
  let pos = startPos + match[0].length - 1;
  let found = false;
  
  while (pos < content.length && !found) {
    if (content[pos] === '{') depth++;
    if (content[pos] === '}') {
      depth--;
      if (depth === 0) {
        const goalContent = content.substring(startPos + match[0].length - 1, pos + 1);
        goals.push({ num: goalNum, content: goalContent });
        found = true;
      }
    }
    pos++;
  }
}

// Create individual files
goals.forEach(goal => {
  const fileContent = `import type { GoalStaticContent } from "./goal-content";

export const goal${goal.num}Content: GoalStaticContent = ${goal.content};
`;
  fs.writeFileSync(`goal-${goal.num}-content.ts`, fileContent);
  console.log(`Created goal-${goal.num}-content.ts`);
});

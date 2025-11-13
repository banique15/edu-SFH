# Lesson Content Management

This directory contains the TypeScript-based lesson content system, implementing a hybrid approach where:

- **Supabase** is used for lesson metadata (title, art_form, goal_id, duration, etc.) and relationships
- **TypeScript files** are used for detailed lesson content (instructions, materials, steps, etc.)

## Structure

```
lessons/
├── types.ts              # TypeScript interfaces for lesson content
├── index.ts              # Registration and lookup functions
├── loader.ts             # Functions to load lesson content
├── modules/              # Generated lesson module files
│   ├── index.ts          # Auto-generated imports (DO NOT EDIT)
│   ├── goal-1-art-grades-5-8.ts
│   ├── goal-1-art-grades-9-12.ts
│   └── ... (87 total lesson files)
└── README.md             # This file
```

## Generating Lesson Files

Lesson files are generated from markdown files in `_intake/edu/` using:

```bash
bun run apps/edu/scripts/generate-lessons.ts
```

This script:
1. Parses markdown lesson files (`goal*-lessons.md`)
2. Extracts lesson modules (ART, CREATIVE WRITING, DANCE/MOVEMENT, DRAMA, MUSIC)
3. Generates TypeScript files for each module
4. Auto-generates `modules/index.ts` with all imports

## Usage

### Loading Lesson Content

```typescript
import { loadLessonContent } from '$lib/data/lessons/loader';

const content = await loadLessonContent(
  goalNumber,    // e.g., 1
  artForm,       // e.g., 'Art'
  gradeLevel     // e.g., '5-8'
);
```

### In Page Server Load

The lesson detail page (`/lessons/[slug]/+page.server.ts`) automatically:
1. Fetches lesson metadata from Supabase
2. Loads detailed content from TypeScript files
3. Falls back to Supabase if TypeScript content not found

## Benefits

- ✅ **Version Control**: All content changes tracked in git
- ✅ **Type Safety**: TypeScript interfaces enforce structure
- ✅ **Easy Customization**: Edit files directly, no DB access needed
- ✅ **Better DX**: IDE support, autocomplete, refactoring
- ✅ **Performance**: No database queries for static content
- ✅ **Flexibility**: Customize individual lessons easily

## File Format

Each lesson module file follows this structure:

```typescript
import type { LessonContentData } from '../types';
import { registerLessonContent } from '../index';

const lessonContent: LessonContentData = {
  goalNumber: 1,
  artForm: 'Art' as const,
  gradeLevel: '5-8' as const,
  title: 'Lesson Title',
  duration: '30-60 MINUTES',
  materials: [...],
  introduction: '...',
  steps: [...],
  // ... other fields
};

registerLessonContent(lessonContent);
export default lessonContent;
```

## Migration Notes

- Lesson metadata (title, art_form, goal_id) remains in Supabase
- Detailed content (materials, steps, instructions) is now in TypeScript files
- The system automatically transforms TypeScript content to match the expected page format
- Fallback to Supabase ensures backward compatibility


# Lesson Processing Prompt

Use this prompt to process each lesson file from the `lessons/` directory:

---

**Process the next lesson file:**

1. Take the first `.md` file from `lessons/` directory (alphabetically)
2. Move it to `lessons/wip/`
3. Find the corresponding lesson in Supabase using the MCP server:
   - Query `edu_lessons` table by title (use ILIKE for case-insensitive matching)
   - Get the lesson ID
4. Fetch all existing content from Supabase:
   - `edu_lesson_content` (sections)
   - `edu_lesson_materials` (materials list)
   - `edu_lesson_objectives` (if any)
   - `edu_lesson_media` (if any)
5. Use the browser to view the lesson page at `http://localhost:5173/lessons/[slug]` (generate slug from title using slugify function)
6. Compare the markdown file content with what's in Supabase and what's displayed on the website
7. Update Supabase with ALL detailed content from the markdown:
   - **Materials**: Ensure all materials from markdown are in Supabase (add any missing ones)
   - **Content Sections**: Update each section with full detailed content including:
     - All prompts, examples, and guiding questions
     - All music/external links (preserve markdown link format)
     - All bullet points and lists
     - All detailed instructions
   - **Assessment**: If markdown has an Assessment section, ensure it's added/updated in Supabase
8. Verify all content displays correctly on the website by:
   - Refreshing the browser page
   - Checking that all sections show complete content
   - Ensuring links work
   - Verifying materials list is complete
9. Once verified, move the file from `lessons/wip/` to `lessons/processed/`

**Important Notes:**
- Preserve all formatting, links, and detailed prompts from the markdown
- Don't condense or summarize - include ALL content
- Maintain markdown link syntax in Supabase content (e.g., `[Text](URL)`)
- Ensure section titles match between markdown and Supabase
- Add any missing sections (like Assessment) that exist in markdown but not in Supabase




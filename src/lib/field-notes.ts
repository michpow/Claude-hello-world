import fs from "fs";
import path from "path";
import matter from "gray-matter";

// This is the folder where your markdown field notes live.
// To add a new note, just create a new .md file in this folder!
const FIELD_NOTES_DIR = path.join(process.cwd(), "src/content/field-notes");

// TypeScript "interface" — think of it like a blueprint that describes
// what shape a field note object should have. This helps catch errors
// early if you forget a field or use the wrong type.
export interface FieldNote {
  slug: string;       // URL-friendly name, e.g. "clarifying-direction"
  title: string;      // Display title
  date: string;       // Date string like "2026-02-12"
  excerpt: string;    // Short preview text
  content: string;    // The full markdown body
}

// Reads ALL field notes from the content/field-notes folder,
// sorted by date (newest first).
export function getAllNotes(): FieldNote[] {
  // Get all files ending in .md from the field notes directory
  const files = fs.readdirSync(FIELD_NOTES_DIR).filter((f) => f.endsWith(".md"));

  const notes = files.map((filename) => {
    // The slug is the filename without ".md"
    const slug = filename.replace(/\.md$/, "");

    // Read the file contents
    const filePath = path.join(FIELD_NOTES_DIR, filename);
    const fileContents = fs.readFileSync(filePath, "utf-8");

    // "gray-matter" splits the file into two parts:
    //   1. data — the frontmatter (title, date, excerpt) between the --- markers
    //   2. content — everything below the frontmatter (the actual note)
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title ?? slug,
      date: data.date ?? "",
      excerpt: data.excerpt ?? "",
      content,
    };
  });

  // Sort by date, newest first
  return notes.sort((a, b) => (a.date > b.date ? -1 : 1));
}

// Reads a SINGLE field note by its slug.
// Used on the individual field note page (/field-notes/clarifying-direction).
export function getNoteBySlug(slug: string): FieldNote | null {
  const filePath = path.join(FIELD_NOTES_DIR, `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContents = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title ?? slug,
    date: data.date ?? "",
    excerpt: data.excerpt ?? "",
    content,
  };
}

import fs from "fs";
import path from "path";
import matter from "gray-matter";

// This is the folder where your markdown blog posts live.
// To add a new post, just create a new .md file in this folder!
const BLOG_DIR = path.join(process.cwd(), "src/content/blog");

// TypeScript "interface" — think of it like a blueprint that describes
// what shape a blog post object should have. This helps catch errors
// early if you forget a field or use the wrong type.
export interface BlogPost {
  slug: string;       // URL-friendly name, e.g. "my-first-post"
  title: string;      // Display title
  date: string;       // Date string like "2026-02-12"
  excerpt: string;    // Short preview text
  content: string;    // The full markdown body
}

// Reads ALL blog posts from the content/blog folder,
// sorted by date (newest first).
export function getAllPosts(): BlogPost[] {
  // Get all files ending in .md from the blog directory
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".md"));

  const posts = files.map((filename) => {
    // The slug is the filename without ".md" — e.g. "my-first-post.md" → "my-first-post"
    const slug = filename.replace(/\.md$/, "");

    // Read the file contents
    const filePath = path.join(BLOG_DIR, filename);
    const fileContents = fs.readFileSync(filePath, "utf-8");

    // "gray-matter" splits the file into two parts:
    //   1. data — the frontmatter (title, date, excerpt) between the --- markers
    //   2. content — everything below the frontmatter (the actual blog post)
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
  return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
}

// Reads a SINGLE blog post by its slug.
// Used on the individual blog post page (/blog/my-first-post).
export function getPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(BLOG_DIR, `${slug}.md`);

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

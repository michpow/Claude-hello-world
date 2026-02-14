// TypeScript interface — a "shape" definition for project data.
// Every project object must have these fields. If you forget one,
// TypeScript will warn you before you even run the code.
export interface Project {
  title: string;
  description: string;
  tags: string[];
  github: string;
  liveUrl?: string; // The "?" means this field is optional
}

// Your project data lives here. To add a new project to your site,
// just add a new object to this array!
export const projects: Project[] = [
  {
    title: "Portfolio Website",
    description:
      "This very site! A personal portfolio and blog built from scratch with Next.js, TypeScript, and Tailwind CSS. Features a markdown-powered blog system.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Markdown"],
    github: "https://github.com/michpow/Claude-hello-world",
  },
  {
    title: "Project Two",
    description:
      "A placeholder for your next project. Replace this with something you build!",
    tags: ["React", "API"],
    github: "#",
  },
  {
    title: "Project Three",
    description:
      "Another placeholder. As you learn more, add your projects here to show off your growing skills.",
    tags: ["JavaScript", "CSS"],
    github: "#",
  },
];

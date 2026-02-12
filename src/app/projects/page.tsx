import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Michelle Powell",
  description: "A showcase of projects I've built while learning web development.",
};

const projects = [
  {
    title: "Portfolio Website",
    description:
      "This very site! A personal portfolio and blog built with Next.js, TypeScript, and Tailwind CSS.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
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
      "Another placeholder. As you learn more, add your projects here.",
    tags: ["JavaScript", "CSS"],
    github: "#",
  },
];

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="mb-4 text-3xl font-bold text-heading">Projects</h1>
      <p className="mb-10 text-gray">
        Here are some things I&apos;ve been building. More to come as I keep learning!
      </p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.title}
            className="group rounded-xl border border-gray-light bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
          >
            {/* Image placeholder */}
            <div className="mb-4 h-36 rounded-lg bg-gray-light transition-colors group-hover:bg-pink-light" />

            <h2 className="mb-2 text-lg font-semibold text-heading">{project.title}</h2>
            <p className="mb-4 text-sm text-gray leading-relaxed">{project.description}</p>

            {/* Tags */}
            <div className="mb-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-pink-light px-3 py-1 text-xs font-medium text-pink-dark"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Links */}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-pink-dark hover:underline"
            >
              View on GitHub &rarr;
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

import type { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects | Michelle Powell",
  description: "A showcase of projects I've built while learning web development.",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="mb-4 text-3xl font-bold text-heading">Projects</h1>
      <p className="mb-10 text-gray">
        Here are some things I&apos;ve been building. More to come as I keep
        learning!
      </p>

      {/* Responsive grid — 1 column on mobile, 2 on medium screens, 3 on large */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
}

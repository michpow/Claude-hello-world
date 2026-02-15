import type { Project } from "@/data/projects";
import { FiGithub, FiExternalLink } from "react-icons/fi";

// A reusable card component for displaying a single project.
// "Props" are like function parameters for components — they let
// you pass data into the component from the outside.
interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group rounded-xl border border-gray-light bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md dark:bg-dark-surface">
      {/* Image placeholder — replace with real screenshots later */}
      <div className="mb-4 h-36 rounded-lg bg-gray-light transition-colors group-hover:bg-pink-light" />

      <h2 className="mb-2 text-lg font-semibold text-heading">
        {project.title}
      </h2>
      <p className="mb-4 text-sm leading-relaxed text-gray">
        {project.description}
      </p>

      {/* Tech tags — the colored pills showing what technologies were used */}
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
      <div className="flex gap-4">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-sm font-medium text-pink-dark hover:underline"
        >
          <FiGithub className="h-4 w-4" />
          GitHub
        </a>
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm font-medium text-pink-dark hover:underline"
          >
            <FiExternalLink className="h-4 w-4" />
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}

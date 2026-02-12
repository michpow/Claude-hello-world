import type { Experience } from "@/data/experiences";
import { FiExternalLink } from "react-icons/fi";

interface ExperienceCardProps {
  experience: Experience;
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <div className="group rounded-xl border border-gray-light bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
      <p className="mb-1 text-xs font-medium text-pink-dark">
        {experience.period}
      </p>
      <h2 className="mb-1 text-lg font-semibold text-heading">
        {experience.title}
      </h2>
      <p className="mb-3 text-sm font-medium text-gray">{experience.company}</p>
      <p className="mb-4 text-sm leading-relaxed text-gray">
        {experience.description}
      </p>

      <div className="mb-4 flex flex-wrap gap-2">
        {experience.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-pink-light px-3 py-1 text-xs font-medium text-pink-dark"
          >
            {tag}
          </span>
        ))}
      </div>

      {experience.companyUrl && (
        <a
          href={experience.companyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-sm font-medium text-pink-dark hover:underline"
        >
          <FiExternalLink className="h-4 w-4" />
          {experience.company}
        </a>
      )}
    </div>
  );
}

import type { CompanyExperience } from "@/data/experiences";
import { FiExternalLink } from "react-icons/fi";

interface ExperienceCardProps {
  experience: CompanyExperience;
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <div className="rounded-xl border border-gray-light bg-white p-6 shadow-sm dark:bg-dark-surface">
      {/* Company header */}
      <div className="mb-6 flex items-start justify-between">
        <div>
          <h2 className="text-xl font-bold text-heading">{experience.company}</h2>
          <p className="text-sm text-gray">{experience.overallPeriod}</p>
        </div>
        {experience.companyUrl && (
          <a
            href={experience.companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm font-medium text-pink-dark hover:underline"
          >
            <FiExternalLink className="h-4 w-4" />
          </a>
        )}
      </div>

      {/* Roles timeline */}
      <div className="relative space-y-0">
        {experience.roles.map((role, index) => (
          <div key={role.title + role.period} className="relative flex gap-4">
            {/* Timeline line and dot */}
            <div className="flex flex-col items-center">
              <div className="mt-1.5 h-3 w-3 shrink-0 rounded-full border-2 border-pink-dark bg-white dark:bg-dark-surface" />
              {index < experience.roles.length - 1 && (
                <div className="w-0.5 grow bg-pink-primary/40" />
              )}
            </div>

            {/* Role content */}
            <div className={index < experience.roles.length - 1 ? "pb-6" : ""}>
              <p className="text-xs font-medium text-pink-dark">{role.period}</p>
              <h3 className="text-base font-semibold text-heading">{role.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-gray">
                {role.description}
              </p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {role.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-pink-light px-2.5 py-0.5 text-xs font-medium text-pink-dark"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Artifacts",
  description:
    "A selection of artifacts used to support decisions, alignment, and execution. All examples are anonymized.",
};

const artifacts = [
  {
    title: "Roadmap snapshot",
    why: "Created to align leadership and engineering on quarterly priorities during a period of rapid change.",
    decision: "Helped the team commit to three high-impact bets instead of spreading effort across eight competing requests.",
    mattered: "Reduced scope debates in sprint planning and gave the team a shared reference point for saying no.",
  },
  {
    title: "Decision memo excerpt",
    why: "Written to capture the reasoning behind a pricing model shift before the decision was finalized.",
    decision: "Supported a move from static to dynamic pricing by documenting tradeoffs, risks, and rollback criteria.",
    mattered: "Gave stakeholders confidence in the direction and created a record the team could revisit as conditions changed.",
  },
  {
    title: "Workflow diagram",
    why: "Mapped the end-to-end booking flow to surface bottlenecks between automated and manual steps.",
    decision: "Identified where human-in-the-loop intervention added value and where it was just adding latency.",
    mattered: "Led to targeted automation that improved throughput without removing judgment from high-stakes decisions.",
  },
];

export default function ArtifactsPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="mb-4 text-3xl font-bold text-heading">Artifacts</h1>
      <p className="mb-10 text-gray">
        A selection of artifacts I&apos;ve used to support decisions, alignment,
        and execution. All examples are anonymized.
      </p>

      <div className="space-y-8">
        {artifacts.map((artifact) => (
          <article
            key={artifact.title}
            className="rounded-xl border border-gray-light bg-white p-6"
          >
            <h2 className="mb-4 text-lg font-bold text-heading">
              {artifact.title}
            </h2>

            <div className="space-y-4">
              <div>
                <h3 className="mb-1 text-sm font-semibold uppercase tracking-wide text-pink-dark">
                  Why it existed
                </h3>
                <p className="text-sm leading-relaxed text-gray">
                  {artifact.why}
                </p>
              </div>

              <div>
                <h3 className="mb-1 text-sm font-semibold uppercase tracking-wide text-pink-dark">
                  What decision it supported
                </h3>
                <p className="text-sm leading-relaxed text-gray">
                  {artifact.decision}
                </p>
              </div>

              <div>
                <h3 className="mb-1 text-sm font-semibold uppercase tracking-wide text-pink-dark">
                  Why it mattered
                </h3>
                <p className="text-sm leading-relaxed text-gray">
                  {artifact.mattered}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

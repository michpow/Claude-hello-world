import type { Metadata } from "next";
import { FiDownload } from "react-icons/fi";

export const metadata: Metadata = {
  title: "Resume",
  description: "Download Michelle Powell's resume.",
};

export default function ResumePage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="mb-8 text-3xl font-bold text-heading">Resume</h1>

      <a
        href="/resume.pdf"
        className="inline-flex items-center gap-2 rounded-full bg-pink-dark px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-pink-medium"
      >
        <FiDownload className="h-4 w-4" />
        Download Resume (PDF)
      </a>
    </div>
  );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Michelle Powell",
  description: "Get in touch with Michelle — links to GitHub, LinkedIn, and email.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-xl px-6 py-16 text-center">
      <h1 className="mb-4 text-3xl font-bold text-heading">Get in Touch</h1>
      <p className="mb-10 text-gray">
        I&apos;d love to hear from you! Whether it&apos;s a question, opportunity, or
        just a hello — feel free to reach out.
      </p>

      <div className="flex flex-col gap-4">
        <a
          href="mailto:hello@example.com"
          className="rounded-xl border border-gray-light bg-white px-6 py-4 text-center shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
        >
          <p className="font-semibold text-heading">Email</p>
          <p className="text-sm text-gray">hello@example.com</p>
        </a>

        <a
          href="https://github.com/michpow"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl border border-gray-light bg-white px-6 py-4 text-center shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
        >
          <p className="font-semibold text-heading">GitHub</p>
          <p className="text-sm text-gray">github.com/michpow</p>
        </a>

        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl border border-gray-light bg-white px-6 py-4 text-center shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
        >
          <p className="font-semibold text-heading">LinkedIn</p>
          <p className="text-sm text-gray">Connect with me</p>
        </a>
      </div>
    </div>
  );
}

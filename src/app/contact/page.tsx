import type { Metadata } from "next";
import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi";

export const metadata: Metadata = {
  title: "Contact",
  description: "Connect with Michelle — links to GitHub, LinkedIn, and email.",
};

const contactLinks = [
  {
    label: "Email",
    value: "michellerajpowell@gmail.com",
    href: "mailto:michellerajpowell@gmail.com",
    icon: FiMail,
  },
  {
    label: "GitHub",
    value: "github.com/michpow",
    href: "https://github.com/michpow",
    icon: FiGithub,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/michpowell",
    href: "https://www.linkedin.com/in/michpowell",
    icon: FiLinkedin,
  },
];

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="mb-4 text-3xl font-bold text-heading">Let&apos;s Connect</h1>
      <p className="mb-10 text-gray">
        If you&apos;re building products, navigating complexity, or thinking
        about how AI actually fits into real teams – I&apos;m always happy to
        connect.
      </p>

      <div className="flex flex-col gap-4">
        {contactLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("mailto") ? undefined : "_blank"}
            rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
            className="flex items-center gap-4 rounded-xl border border-gray-light bg-white px-6 py-4 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md dark:bg-dark-surface"
          >
            <link.icon className="h-6 w-6 text-pink-dark" />
            <div className="text-left">
              <p className="font-semibold text-heading">{link.label}</p>
              <p className="text-sm text-gray">{link.value}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

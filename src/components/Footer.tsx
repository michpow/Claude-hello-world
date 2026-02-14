import Link from "next/link";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="border-t border-gray-light bg-pink-light">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 py-8 text-center md:flex-row md:justify-between md:text-left">
        <p className="text-sm text-gray">
          Michelle Powell
        </p>

        {/* Page links */}
        <div className="flex gap-6">
          <Link href="/about" className="text-sm text-gray transition-colors hover:text-pink-dark">
            About
          </Link>
          <Link href="/field-notes" className="text-sm text-gray transition-colors hover:text-pink-dark">
            Field Notes
          </Link>
          <Link href="/contact" className="text-sm text-gray transition-colors hover:text-pink-dark">
            Contact
          </Link>
        </div>

        {/* Social icons */}
        <div className="flex gap-4">
          <a href="https://github.com/michpow" target="_blank" rel="noopener noreferrer" className="text-gray transition-colors hover:text-pink-dark">
            <FiGithub className="h-5 w-5" />
          </a>
          <a href="https://www.linkedin.com/in/michpowell" target="_blank" rel="noopener noreferrer" className="text-gray transition-colors hover:text-pink-dark">
            <FiLinkedin className="h-5 w-5" />
          </a>
          <a href="mailto:michellerajpowell@gmail.com" className="text-gray transition-colors hover:text-pink-dark">
            <FiMail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}

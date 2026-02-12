import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-light bg-pink-light">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-6 py-8 text-center md:flex-row md:justify-between md:text-left">
        <p className="text-sm text-gray">
          &copy; {new Date().getFullYear()} Michelle Powell. Built with Next.js &amp; Tailwind CSS.
        </p>
        <div className="flex gap-6">
          <Link href="/about" className="text-sm text-gray transition-colors hover:text-pink-dark">
            About
          </Link>
          <Link href="/blog" className="text-sm text-gray transition-colors hover:text-pink-dark">
            Blog
          </Link>
          <Link href="/contact" className="text-sm text-gray transition-colors hover:text-pink-dark">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}

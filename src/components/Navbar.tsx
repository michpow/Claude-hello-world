"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/experience", label: "Experience" },
  { href: "/field-notes", label: "Field Notes" },
  { href: "/artifacts", label: "Artifacts" },
  { href: "/about", label: "About" },
  { href: "/resume", label: "Resume" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-light bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold text-heading transition-opacity hover:opacity-80">
          Michelle<span className="text-pink-primary">.</span>
        </Link>

        <div className="hidden gap-8 md:flex">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm font-medium transition-colors hover:text-pink-dark ${
                  isActive ? "text-pink-dark" : "text-gray"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute -bottom-4 left-0 right-0 h-0.5 bg-pink-dark" />
                )}
              </Link>
            );
          })}
        </div>

        <button
          className="flex flex-col gap-1.5 p-1 md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          <span
            className={`block h-0.5 w-6 bg-heading transition-all duration-200 ${
              mobileMenuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-heading transition-all duration-200 ${
              mobileMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-heading transition-all duration-200 ${
              mobileMenuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-gray-light bg-white transition-all duration-200 md:hidden ${
          mobileMenuOpen ? "max-h-80 py-4" : "max-h-0 border-t-0 py-0"
        }`}
      >
        <div className="px-6">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`block py-2.5 text-sm font-medium transition-colors hover:text-pink-dark ${
                  isActive ? "text-pink-dark" : "text-gray"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

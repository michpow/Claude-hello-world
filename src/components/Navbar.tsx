"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import DarkModeToggle from "./DarkModeToggle";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/field-notes", label: "Field Notes" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu when navigating to a new page.
  // useEffect runs "side effects" — code that happens in response to changes.
  // Here it watches the URL (pathname) and closes the menu whenever it changes.
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-light bg-white/80 backdrop-blur-md dark:bg-dark-bg/80">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        {/* Logo / Name */}
        <Link href="/" className="text-xl font-bold text-heading transition-opacity hover:opacity-80">
          Michelle<span className="text-pink-primary">.</span>
        </Link>

        <div className="flex items-center gap-2">
          {/* Dark mode toggle */}
          <DarkModeToggle />

          {/* Hamburger button */}
          <button
            className="flex flex-col gap-1.5 p-1"
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
      </div>

      {/* Menu — slides open when hamburger is tapped */}
      <div
        className={`overflow-hidden border-t border-gray-light bg-white transition-all duration-200 dark:bg-dark-bg ${
          mobileMenuOpen ? "max-h-64 py-4" : "max-h-0 border-t-0 py-0"
        }`}
      >
        <div className="px-6 text-center md:text-right">
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

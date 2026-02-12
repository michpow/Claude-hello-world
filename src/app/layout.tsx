import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

// Metadata controls what shows up in browser tabs, Google search results,
// and social media link previews (LinkedIn, Twitter, etc.).
// "Open Graph" (og) tags are specifically for social media cards.
export const metadata: Metadata = {
  title: {
    default: "Michelle Powell | Portfolio",
    template: "%s | Michelle Powell",
  },
  description:
    "Personal portfolio and blog — built with Next.js, TypeScript, and Tailwind CSS.",
  keywords: [
    "Michelle Powell",
    "portfolio",
    "web developer",
    "React",
    "Next.js",
    "blog",
  ],
  authors: [{ name: "Michelle Powell" }],
  openGraph: {
    title: "Michelle Powell | Portfolio",
    description:
      "Aspiring developer building beautiful things for the web. Check out my projects and blog.",
    type: "website",
    locale: "en_US",
    siteName: "Michelle Powell",
  },
  twitter: {
    card: "summary_large_image",
    title: "Michelle Powell | Portfolio",
    description:
      "Aspiring developer building beautiful things for the web. Check out my projects and blog.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

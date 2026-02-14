import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

// Metadata controls what shows up in browser tabs, Google search results,
// and social media link previews (LinkedIn, Twitter, etc.).
// "Open Graph" (og) tags are specifically for social media cards.
export const metadata: Metadata = {
  title: {
    default: "Michelle Powell | Director of Product",
    template: "%s | Michelle Powell",
  },
  description:
    "Director of Product who helps teams navigate ambiguity and turn messy problem spaces into products that scale.",
  keywords: [
    "Michelle Powell",
    "Director of Product",
    "product management",
    "product leadership",
    "SaaS",
    "logistics",
    "product strategy",
  ],
  authors: [{ name: "Michelle Powell" }],
  openGraph: {
    title: "Michelle Powell | Director of Product",
    description:
      "Director of Product who helps teams navigate ambiguity and turn messy problem spaces into products that scale.",
    type: "website",
    locale: "en_US",
    siteName: "Michelle Powell",
  },
  twitter: {
    card: "summary_large_image",
    title: "Michelle Powell | Director of Product",
    description:
      "Director of Product who helps teams navigate ambiguity and turn messy problem spaces into products that scale.",
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

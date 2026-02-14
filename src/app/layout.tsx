import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

// Metadata controls what shows up in browser tabs, Google search results,
// and social media link previews (LinkedIn, Twitter, etc.).
// "Open Graph" (og) tags are specifically for social media cards.
export const metadata: Metadata = {
  title: {
    default: "Michelle Powell | director of product",
    template: "%s | Michelle Powell",
  },
  description:
    "director of product leader specializing in AI/ML product strategy, 0→1 SaaS platforms, and cross-functional team leadership.",
  keywords: [
    "Michelle Powell",
    "director of product",
    "product management",
    "AI/ML product strategy",
    "SaaS",
    "B2B",
    "product leader",
  ],
  authors: [{ name: "Michelle Powell" }],
  openGraph: {
    title: "Michelle Powell | director of product",
    description:
      "director of product specializing in AI/ML product strategy, 0→1 SaaS platforms, and scaling empowered product teams.",
    type: "website",
    locale: "en_US",
    siteName: "Michelle Powell",
  },
  twitter: {
    card: "summary_large_image",
    title: "Michelle Powell | director of product",
    description:
      "director of product specializing in AI/ML product strategy, 0→1 SaaS platforms, and scaling empowered product teams.",
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

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
    "Director of Product leader specializing in AI/ML product strategy, 0→1 SaaS platforms, and cross-functional team leadership.",
  keywords: [
    "Michelle Powell",
    "Director of Product",
    "product management",
    "AI/ML product strategy",
    "SaaS",
    "B2B",
    "product leader",
  ],
  authors: [{ name: "Michelle Powell" }],
  openGraph: {
    title: "Michelle Powell | Director of Product",
    description:
      "Director of Product specializing in AI/ML product strategy, 0→1 SaaS platforms, and scaling empowered product teams.",
    type: "website",
    locale: "en_US",
    siteName: "Michelle Powell",
  },
  twitter: {
    card: "summary_large_image",
    title: "Michelle Powell | Director of Product",
    description:
      "Director of Product specializing in AI/ML product strategy, 0→1 SaaS platforms, and scaling empowered product teams.",
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
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        {/* Inline script to apply dark mode class before first paint to prevent FOUC */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&matchMedia('(prefers-color-scheme:dark)').matches))document.documentElement.classList.add('dark')}catch(e){}})()`,
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ThemeToggle from "@/components/ui/ThemeToggle";
import PageTransition from "@/components/layout/PageTransition";
import GlowCursor from "@/components/ui/GlowCursor";
import JsonLd from "@/components/seo/JsonLd";
import { getSiteUrl } from "@/lib/site";

const displayFont = Inter({
  subsets: ["latin"],
  variable: "--font-display",
});

const bodyFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
});

const monoFont = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const siteUrl = getSiteUrl();
const defaultTitle = "Aaryan Suri — Software & infrastructure that ships";
const defaultDescription =
  "CE @ UMD (QUEST). Incoming Capital One Analyst Engineering Intern (Summer 2026). Shipped housing.dbknews.com, AWS cost work (~14% savings), PostPilot, and applied ML (AIE).";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: "%s — Aaryan Suri",
  },
  description: defaultDescription,
  keywords: [
    "Aaryan Suri",
    "software engineer",
    "infrastructure",
    "UMD",
    "Computer Engineering",
    "NEXT.js",
    "AWS",
    "machine learning",
  ],
  authors: [{ name: "Aaryan Suri", url: siteUrl }],
  creator: "Aaryan Suri",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Aaryan Suri",
    title: defaultTitle,
    description: defaultDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
  },
  robots: { index: true, follow: true },
};

export interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      className={`${displayFont.variable} ${bodyFont.variable} ${monoFont.variable}`}
      suppressHydrationWarning
    >
      <body>
        <JsonLd />
        <a
          href="#main"
          className="focus-ring sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-sm focus:bg-[color:var(--bg-secondary)] focus:px-3 focus:py-2 focus:text-sm focus:text-[color:var(--text-primary)]"
        >
          Skip to content
        </a>
        <Navbar
          rightSlot={
            <ThemeToggle ariaLabel="Toggle light/dark theme" />
          }
        />
        <main id="main" className="mx-auto w-full max-w-[1200px] px-4 pb-16 pt-6">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
        <GlowCursor />
      </body>
    </html>
  );
}


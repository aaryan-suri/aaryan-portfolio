import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ThemeToggle from "@/components/ui/ThemeToggle";
import PageTransition from "@/components/layout/PageTransition";
import GlowCursor from "@/components/ui/GlowCursor";

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

export const metadata: Metadata = {
  title: "Aaryan Suri — Portfolio",
  description:
    "Systems + product engineering portfolio. I build infrastructure and applied ML pipelines that ship.",
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
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)]"
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


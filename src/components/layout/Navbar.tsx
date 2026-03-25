"use client";

import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { X } from "lucide-react";
import MagneticHover from "@/components/ui/MagneticHover";

export interface NavbarProps {
  rightSlot?: React.ReactNode;
}

export default function Navbar({ rightSlot }: NavbarProps) {
  const reducedMotion = useReducedMotion();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--border)] bg-[color:var(--bg-primary)]/70 backdrop-blur">
      <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between px-4 py-3">
        <div className="flex items-center gap-4">
          <MagneticHover className="inline-flex" strengthPx={12}>
            <Link
              href="/"
              className="focus-ring rounded-sm text-sm font-semibold tracking-wide text-[color:var(--text-primary)]"
            >
              Aaryan Suri
            </Link>
          </MagneticHover>

          <nav aria-label="Primary" className="hidden gap-5 md:flex">
            <div className="flex gap-5">
              <MagneticHover className="inline-flex" strengthPx={12}>
                <Link
                  href="/projects"
                  className="focus-ring rounded-sm text-sm text-[color:var(--text-secondary)] transition-colors hover:text-[color:var(--text-primary)]"
                >
                  Projects
                </Link>
              </MagneticHover>
              <MagneticHover className="inline-flex" strengthPx={12}>
                <Link
                  href="/experience"
                  className="focus-ring rounded-sm text-sm text-[color:var(--text-secondary)] transition-colors hover:text-[color:var(--text-primary)]"
                >
                  Experience
                </Link>
              </MagneticHover>
              <MagneticHover className="inline-flex" strengthPx={12}>
                <Link
                  href="/about"
                  className="focus-ring rounded-sm text-sm text-[color:var(--text-secondary)] transition-colors hover:text-[color:var(--text-primary)]"
                >
                  About
                </Link>
              </MagneticHover>
            </div>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden md:flex">{rightSlot}</div>

          <div className="md:hidden">
            <MagneticHover className="inline-flex" strengthPx={10}>
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="focus-ring inline-flex h-9 items-center justify-center rounded-md border border-[color:var(--border)] bg-[color:var(--bg-secondary)] px-3 text-sm text-[color:var(--text-secondary)]"
                aria-label="Open menu"
              >
                Menu
              </button>
            </MagneticHover>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            key="mobile-menu"
            className="fixed inset-0 z-[60] md:hidden"
            initial={reducedMotion ? { opacity: 1 } : { opacity: 0 }}
            animate={reducedMotion ? { opacity: 1 } : { opacity: 1 }}
            exit={reducedMotion ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.18 }}
          >
            <button
              type="button"
              className="absolute inset-0 cursor-default border-0 bg-black/40 p-0"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            />

            <motion.div
              className="absolute right-0 top-0 h-full w-full max-w-[420px] border-l border-[color:var(--border)] bg-[color:var(--bg-primary)] p-4"
              initial={reducedMotion ? { x: 0 } : { x: 24, opacity: 0 }}
              animate={reducedMotion ? { x: 0 } : { x: 0, opacity: 1 }}
              exit={reducedMotion ? { x: 0 } : { x: 24, opacity: 0 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
            >
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold text-[color:var(--text-primary)]">
                  Aaryan Suri
                </div>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="focus-ring inline-flex h-9 w-9 items-center justify-center rounded-md border border-[color:var(--border)] bg-[color:var(--bg-secondary)] text-[color:var(--text-secondary)]"
                  aria-label="Close menu"
                >
                  <X size={18} />
                </button>
              </div>

              <nav aria-label="Mobile" className="mt-6 flex flex-col gap-3">
                <MagneticHover className="inline-flex w-full" strengthPx={10}>
                  <Link
                    href="/"
                    onClick={() => setOpen(false)}
                    className="focus-ring w-full rounded-lg border border-[color:var(--border)] bg-[color:var(--bg-secondary)] px-4 py-3 text-sm text-[color:var(--text-secondary)] transition-colors hover:text-[color:var(--text-primary)]"
                  >
                    Home
                  </Link>
                </MagneticHover>
                <MagneticHover className="inline-flex w-full" strengthPx={10}>
                  <Link
                    href="/projects"
                    onClick={() => setOpen(false)}
                    className="focus-ring w-full rounded-lg border border-[color:var(--border)] bg-[color:var(--bg-secondary)] px-4 py-3 text-sm text-[color:var(--text-secondary)] transition-colors hover:text-[color:var(--text-primary)]"
                  >
                    Projects
                  </Link>
                </MagneticHover>
                <MagneticHover className="inline-flex w-full" strengthPx={10}>
                  <Link
                    href="/experience"
                    onClick={() => setOpen(false)}
                    className="focus-ring w-full rounded-lg border border-[color:var(--border)] bg-[color:var(--bg-secondary)] px-4 py-3 text-sm text-[color:var(--text-secondary)] transition-colors hover:text-[color:var(--text-primary)]"
                  >
                    Experience
                  </Link>
                </MagneticHover>
                <MagneticHover className="inline-flex w-full" strengthPx={10}>
                  <Link
                    href="/about"
                    onClick={() => setOpen(false)}
                    className="focus-ring w-full rounded-lg border border-[color:var(--border)] bg-[color:var(--bg-secondary)] px-4 py-3 text-sm text-[color:var(--text-secondary)] transition-colors hover:text-[color:var(--text-primary)]"
                  >
                    About
                  </Link>
                </MagneticHover>
              </nav>

              <div className="mt-6">{rightSlot}</div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}


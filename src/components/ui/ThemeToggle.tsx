"use client";

import { useEffect, useMemo, useState } from "react";

export interface ThemeToggleProps {
  ariaLabel?: string;
}

type Theme = "dark" | "light";

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "dark";

  const stored = window.localStorage.getItem("theme");
  if (stored === "dark" || stored === "light") return stored;

  const prefersLight = window.matchMedia?.("(prefers-color-scheme: light)")?.matches;
  return prefersLight ? "light" : "dark";
}

export default function ThemeToggle({ ariaLabel }: ThemeToggleProps) {
  const [theme, setTheme] = useState<Theme>(() => getInitialTheme());

  const nextTheme = useMemo<Theme>(() => (theme === "dark" ? "light" : "dark"), [theme]);

  useEffect(() => {
    const root = document.documentElement;
    root.dataset.theme = theme;
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      type="button"
      aria-label={ariaLabel ?? "Toggle light/dark theme"}
      onClick={() => setTheme(nextTheme)}
      className="btn-outline focus-ring px-3 py-1.5 text-xs"
    >
      {theme === "dark" ? "Light" : "Dark"}
    </button>
  );
}


"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

export interface GlowCursorProps {
  className?: string;
}

export default function GlowCursor({ className }: GlowCursorProps) {
  const reducedMotion = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const dotRef = useRef<HTMLDivElement | null>(null);
  const glowRef = useRef<HTMLDivElement | null>(null);

  const colors = useMemo(() => {
    return {
      accent: "var(--accent)",
      accentSubtle: "var(--accent-subtle)",
    };
  }, []);

  useEffect(() => {
    if (reducedMotion) return;

    const finePointer = window.matchMedia?.("(pointer: fine)")?.matches ?? true;
    if (!finePointer) return;

    setEnabled(true);

    const pos = { x: 0, y: 0 };
    const target = { x: 0, y: 0 };
    let raf = 0;

    const onMove = (e: PointerEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
    };

    const tick = () => {
      // Simple easing to avoid rerendering.
      pos.x += (target.x - pos.x) * 0.18;
      pos.y += (target.y - pos.y) * 0.18;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;
      }
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;
      }

      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, [reducedMotion]);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={glowRef}
        aria-hidden="true"
        className={`pointer-events-none fixed left-0 top-0 z-40 h-3 w-3 rounded-full blur-xl opacity-70 ${className ?? ""}`}
        style={{
          background: colors.accentSubtle,
          transition: "opacity 200ms ease",
        }}
      />
      <div
        ref={dotRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-50 h-1.5 w-1.5 rounded-full"
        style={{
          background: colors.accent,
          transform: "translate3d(-100px, -100px, 0)",
        }}
      />
    </>
  );
}


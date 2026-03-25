"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

export interface AnimatedSectionProps {
  children: ReactNode;
  delayMs?: number;
  className?: string;
  once?: boolean;
}

export default function AnimatedSection({
  children,
  delayMs = 0,
  className,
  once = true,
}: AnimatedSectionProps) {
  const reducedMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (reducedMotion) return;
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once, reducedMotion]);

  if (reducedMotion) return <div className={className}>{children}</div>;

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 14 }}
      transition={{ duration: 0.55, delay: delayMs / 1000, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}


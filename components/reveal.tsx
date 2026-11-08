"use client";

import { useEffect, useRef, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function Reveal({ children, className = "", delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const show = () => node.classList.add("is-visible");

    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      show();
      return;
    }

    // Anything already in (or just outside) the viewport is revealed on mount.
    // This keeps content honest for fast programmatic scrolls and full-page
    // captures, where IntersectionObserver callbacks can lag behind the paint.
    const nearViewport = () => {
      const rect = node.getBoundingClientRect();
      return (
        rect.top < window.innerHeight * 1.05 &&
        rect.bottom > -window.innerHeight * 0.25
      );
    };

    if (nearViewport()) {
      const frame = window.requestAnimationFrame(show);
      return () => window.cancelAnimationFrame(frame);
    }

    let observer: IntersectionObserver | null = null;
    let ticking = false;

    const stop = () => {
      observer?.disconnect();
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    };

    function check() {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        ticking = false;
        if (nearViewport()) {
          show();
          stop();
        }
      });
    }

    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            show();
            stop();
          }
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -4% 0px" },
    );

    observer.observe(node);
    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check, { passive: true });

    return stop;
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </div>
  );
}

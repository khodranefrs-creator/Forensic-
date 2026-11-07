"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Very restrained pointer parallax for the hero artwork. The wrapper only
 * listens on fine-pointer, motion-safe desktops; everything else stays static.
 */
export function HeroArt({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const mq = window.matchMedia(
      "(min-width: 64rem) and (hover: hover) and (prefers-reduced-motion: no-preference)",
    );
    if (!mq.matches) return;

    let frame = 0;
    const onMove = (event: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const x = (event.clientX / window.innerWidth - 0.5) * 12;
        const y = (event.clientY / window.innerHeight - 0.5) * 10;
        node.style.setProperty("--art-x", `${x.toFixed(2)}px`);
        node.style.setProperty("--art-y", `${y.toFixed(2)}px`);
      });
    };
    const reset = () => {
      node.style.setProperty("--art-x", "0px");
      node.style.setProperty("--art-y", "0px");
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("blur", reset);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("blur", reset);
    };
  }, []);

  return (
    <div className="hero-art">
      <div ref={ref} className="hero-art-motion">
        {children}
      </div>
    </div>
  );
}

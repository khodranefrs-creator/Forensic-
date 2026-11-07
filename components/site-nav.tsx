"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, Play, X } from "lucide-react";
import { Aperture } from "@/components/aperture";
import { ClarityMark } from "@/components/clarity-mark";
import { Logo } from "@/components/logo";
import { navItems, site } from "@/lib/content";

export function SiteNav() {
  const [active, setActive] = useState<string>("home");
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    let ticking = false;

    const update = () => {
      ticking = false;
      const marker = window.scrollY + window.innerHeight * 0.34;
      let current: string = navItems[0].id;

      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top + window.scrollY;
        if (top <= marker) current = item.id;
      }

      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;

      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 12
      ) {
        current = navItems[navItems.length - 1].id;
      }

      setActive(current);
      setProgress(
        scrollable > 0
          ? Math.min(100, Math.max(0, (window.scrollY / scrollable) * 100))
          : 0,
      );
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const closeMenu = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
        return;
      }

      if (event.key !== "Tab" || !panelRef.current) return;

      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      triggerRef.current?.focus();
    };
  }, [open, closeMenu]);

  return (
    <>
      {/* Desktop left navigation rail */}
      <aside
        className="rail fixed inset-y-0 left-0 z-50 hidden flex-col border-r border-line nav:flex"
        aria-label="Primary navigation"
      >
        <div className="rail-brand">
          <a
            href="#home"
            className="block w-[13.75rem] outline-offset-4"
            aria-label="The Forensic Neuroscientist — back to top"
          >
            <Logo priority sizes="220px" className="h-auto w-full" />
          </a>
          <p className="mt-3 max-w-[25ch] text-[0.875rem] leading-[1.6] text-slate">
            Neuroscience, forensic science &amp; human understanding.
          </p>

          <div className="rail-rule">
            <ClarityMark size={15} />
            <span className="font-mono text-[0.625rem] uppercase tracking-[0.16em]">
              Signal to clarity
            </span>
          </div>
        </div>

        <div className="mx-7 h-px bg-line" />

        <nav
          className="no-scrollbar mt-2 flex-1 overflow-y-auto px-4 pb-4 pt-3"
          aria-label="Page sections"
        >
          <ul>
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="rail-link"
                  data-active={active === item.id}
                  aria-current={active === item.id ? "location" : undefined}
                  onClick={() => setActive(item.id)}
                >
                  <span className="nav-num">{item.number}</span>
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="border-t border-line p-5">
          <a href="#contact" className="btn btn-primary w-full">
            Start a conversation
            <ArrowUpRight size={16} strokeWidth={1.75} aria-hidden="true" />
          </a>
          <a
            href={site.youtube.channelUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="mt-4 flex items-center gap-2.5 px-1 text-[0.875rem] font-medium text-slate transition-colors hover:text-ink"
          >
            <span className="flex size-7 items-center justify-center rounded-full border border-line">
              <Play size={10} strokeWidth={1.8} aria-hidden="true" />
            </span>
            YouTube channel
            <ArrowUpRight
              size={13}
              strokeWidth={1.8}
              className="ml-auto"
              aria-hidden="true"
            />
          </a>
        </div>

        <div className="flex items-center justify-between px-6 pb-5 font-mono text-[0.625rem] uppercase tracking-[0.12em] text-muted">
          <span>© {new Date().getFullYear()}</span>
          <span>Science / Evidence / Context</span>
        </div>

        <div className="rail-progress" aria-hidden="true">
          <span style={{ height: `${progress}%` }} />
        </div>
      </aside>

      {/* Mobile top bar */}
      <header className="fixed inset-x-0 top-0 z-[70] border-b border-line bg-paper/92 backdrop-blur-md nav:hidden">
        <div className="flex h-20 items-center justify-between px-5 sm:px-8">
          <a
            href="#home"
            className="block w-[9.5rem] outline-offset-4 sm:w-[10.5rem]"
            aria-label="The Forensic Neuroscientist — back to top"
          >
            <Logo
              priority
              sizes="(min-width: 640px) 168px, 152px"
              className="h-auto w-full"
            />
          </a>
          <button
            ref={triggerRef}
            type="button"
            className="group flex items-center gap-3 border border-ink/20 px-3.5 py-2.5 text-[0.75rem] font-semibold uppercase tracking-[0.12em] text-ink transition-colors hover:border-ink hover:bg-ink hover:text-paper"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(true)}
          >
            <span>Menu</span>
            <Menu size={17} strokeWidth={1.7} aria-hidden="true" />
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      {open && (
        <div
          ref={panelRef}
          id="mobile-menu"
          className="menu-panel fixed inset-0 z-[100] flex flex-col bg-paper nav:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
        >
          <div className="flex h-20 shrink-0 items-center justify-between border-b border-line px-5 sm:px-8">
            <a
              href="#home"
              className="block w-[9.5rem] sm:w-[10.5rem]"
              onClick={closeMenu}
              aria-label="The Forensic Neuroscientist — back to top"
            >
              <Logo sizes="168px" className="h-auto w-full" />
            </a>
            <button
              ref={closeRef}
              type="button"
              onClick={closeMenu}
              className="flex size-11 items-center justify-center border border-ink/20 text-ink transition-colors hover:border-ink hover:bg-ink hover:text-paper"
              aria-label="Close menu"
            >
              <X size={19} strokeWidth={1.7} aria-hidden="true" />
            </button>
          </div>

          <div className="relative flex flex-1 flex-col overflow-y-auto px-5 pb-8 pt-5 sm:px-8">
            <Aperture className="pointer-events-none absolute -bottom-24 -right-24 size-[22rem] text-azure-deep/10" />

            <div className="relative">
              <p className="font-mono text-[0.625rem] uppercase tracking-[0.18em] text-muted">
                Sections / {navItems.length.toString().padStart(2, "0")}
              </p>

              <nav className="mt-4" aria-label="Page sections">
                <ul>
                  {navItems.map((item, index) => (
                    <li
                      key={item.id}
                      className="menu-item"
                      style={{ "--item-index": index } as React.CSSProperties}
                    >
                      <a
                        href={`#${item.id}`}
                        className="mobile-nav-link"
                        aria-current={
                          active === item.id ? "location" : undefined
                        }
                        onClick={closeMenu}
                      >
                        <span className="mobile-nav-num">{item.number}</span>
                        <span className="flex-1">{item.label}</span>
                        {active === item.id && <ClarityMark size={20} />}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="mt-8 flex flex-col gap-4">
                <a
                  href="#contact"
                  onClick={closeMenu}
                  className="btn btn-primary w-full"
                >
                  Start a conversation
                  <ArrowUpRight size={16} strokeWidth={1.75} aria-hidden="true" />
                </a>
                <a
                  href={site.youtube.channelUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="arrow-link self-start"
                >
                  <Play size={13} strokeWidth={1.8} aria-hidden="true" />
                  Visit the YouTube channel
                  <ArrowUpRight size={13} strokeWidth={1.8} aria-hidden="true" />
                </a>
              </div>

              <p className="mt-10 border-t border-line pt-5 font-mono text-[0.625rem] uppercase leading-[1.9] tracking-[0.16em] text-muted">
                The intersection of science, evidence &amp; human understanding
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

import { ArrowUp, ArrowUpRight, Play } from "lucide-react";
import { Logo } from "@/components/logo";
import { navItems, site } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-[#061a24] text-paper">
      <div className="shell pb-8 pt-14 lg:pt-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <a
              href="#home"
              className="inline-block bg-cream p-5 outline-offset-4"
              aria-label="The Forensic Neuroscientist — back to top"
            >
              <Logo sizes="240px" className="h-auto w-[13rem]" />
            </a>
            <p className="mt-6 max-w-[27ch] font-display text-[clamp(1.45rem,1.2rem+0.7vw,1.8rem)] italic leading-[1.3] tracking-[-0.02em] text-paper/90">
              Science, evidence, and human understanding — connected.
            </p>
            <p className="mt-4 max-w-[34ch] text-[0.82rem] leading-relaxed text-paper/65">
              An education, training, and consultation practice making complex
              neuroscience accessible, relevant, and useful.
            </p>
          </div>

          <div className="lg:col-span-3 lg:col-start-7">
            <p className="font-mono text-[0.5625rem] uppercase tracking-[0.16em] text-paper/60">
              Explore
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="text-[0.82rem] text-paper/65 transition-colors hover:text-paper"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="font-mono text-[0.5625rem] uppercase tracking-[0.16em] text-paper/60">
              Connect
            </p>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={site.youtube.channelUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group inline-flex items-center gap-2.5 text-[0.82rem] text-paper/65 transition-colors hover:text-paper"
                >
                  <Play size={11} strokeWidth={1.8} aria-hidden="true" />
                  YouTube channel
                  <ArrowUpRight
                    size={12}
                    strokeWidth={1.8}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2.5 text-[0.82rem] text-paper/65 transition-colors hover:text-paper"
                >
                  Get in touch
                  <ArrowUpRight
                    size={12}
                    strokeWidth={1.8}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </a>
              </li>
              <li>
                <a
                  href="#education"
                  className="text-[0.82rem] text-paper/65 transition-colors hover:text-paper"
                >
                  Education &amp; training
                </a>
              </li>
              <li>
                <a
                  href="#consultation"
                  className="text-[0.82rem] text-paper/65 transition-colors hover:text-paper"
                >
                  Consultation
                </a>
              </li>
            </ul>

            <a
              href="#home"
              className="mt-8 inline-flex items-center gap-2 border border-paper/20 px-3.5 py-2 font-mono text-[0.5rem] uppercase tracking-[0.14em] text-paper/70 transition-colors hover:border-paper/60 hover:text-paper"
            >
              <ArrowUp size={11} strokeWidth={1.8} aria-hidden="true" />
              Back to top
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-paper/12 pt-5 text-[0.65rem] text-paper/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} The Forensic Neuroscientist. All rights reserved.</p>
          <p className="font-mono text-[0.5rem] uppercase tracking-[0.14em]">
            Neuroscience / Forensic science / Human understanding
          </p>
        </div>
      </div>
    </footer>
  );
}

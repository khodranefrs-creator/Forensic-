import { ArrowUpRight, Play } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/reveal";
import { site } from "@/lib/content";

const includeItems = [
  "The question or context you are working with",
  "Who the work is for — a team, a program, or a specific audience",
  "What you are hoping to understand or achieve",
];

export function Contact() {
  return (
    <section id="contact" className="dark-surface section overflow-hidden">
      <div
        className="pointer-events-none absolute -bottom-56 -left-56 hidden h-[36rem] w-[36rem] opacity-[0.14] lg:block"
        aria-hidden="true"
      >
        <svg viewBox="0 0 400 400" className="h-full w-full" fill="none">
          <circle cx="200" cy="200" r="198" stroke="#B9E0F3" strokeWidth="0.7" />
          <circle cx="200" cy="200" r="168" stroke="#F4940E" strokeWidth="0.8" />
          <circle cx="200" cy="200" r="136" stroke="#B9E0F3" strokeOpacity="0.5" strokeWidth="0.7" strokeDasharray="2 6" />
          <line x1="0" y1="200" x2="400" y2="200" stroke="#B9E0F3" strokeOpacity="0.3" strokeWidth="0.7" />
          <line x1="200" y1="0" x2="200" y2="400" stroke="#B9E0F3" strokeOpacity="0.3" strokeWidth="0.7" />
          <circle cx="200" cy="62" r="3" fill="#F4940E" />
        </svg>
      </div>

      <div className="shell relative z-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6">
            <Reveal>
              <p className="label label-dark">07 / Contact</p>
              <h2 className="display mt-6 text-[clamp(2.7rem,1.05rem+3.4vw,4.4rem)] leading-[0.99] text-paper">
                Bring the science <em className="text-ember">into focus.</em>
              </h2>
              <p className="body-copy mt-7 max-w-[37ch]">
                For training inquiries, consultation questions, or a conversation
                about how neuroscience might inform your work, get in touch.
              </p>
            </Reveal>

            <Reveal delay={100}>
              <div className="mt-10 max-w-[25rem] border-t border-paper/15 pt-6">
                <p className="font-mono text-[0.5625rem] uppercase tracking-[0.16em] text-paper/60">
                  What to include
                </p>
                <ul className="mt-4 space-y-3">
                  {includeItems.map((item, index) => (
                    <li key={item} className="flex gap-4">
                      <span className="pt-0.5 font-mono text-[0.5625rem] tracking-[0.1em] text-ember">
                        0{index + 1}
                      </span>
                      <span className="text-[0.875rem] leading-[1.6] text-paper/70">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={site.youtube.channelUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-8 flex max-w-[25rem] items-center gap-3 border-t border-paper/15 pt-5 text-[0.8rem] text-paper/65 transition-colors hover:text-paper"
              >
                <span className="flex size-7 items-center justify-center rounded-full border border-paper/25">
                  <Play size={10} strokeWidth={1.8} aria-hidden="true" />
                </span>
                <span>Find the practice on YouTube</span>
                <ArrowUpRight
                  size={13}
                  strokeWidth={1.8}
                  className="ml-auto"
                  aria-hidden="true"
                />
              </a>
            </Reveal>
          </div>

          <Reveal className="lg:col-span-6 lg:col-start-7" delay={120}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { learningFormats } from "@/lib/content";

export function Education() {
  return (
    <section id="education" className="dark-surface section overflow-hidden">
      <div
        className="pointer-events-none absolute -right-40 -top-44 hidden h-[34rem] w-[34rem] opacity-[0.16] lg:block"
        aria-hidden="true"
      >
        <svg viewBox="0 0 400 400" className="h-full w-full" fill="none">
          <circle
            cx="200"
            cy="200"
            r="196"
            stroke="#B9E0F3"
            strokeWidth="0.7"
            strokeDasharray="2 7"
          />
          <circle cx="200" cy="200" r="160" stroke="#F4940E" strokeWidth="0.8" />
          <circle cx="200" cy="200" r="120" stroke="#B9E0F3" strokeOpacity="0.4" strokeWidth="0.7" />
          <circle cx="200" cy="200" r="62" stroke="#B9E0F3" strokeOpacity="0.35" strokeWidth="0.7" />
          <line x1="200" y1="0" x2="200" y2="400" stroke="#B9E0F3" strokeOpacity="0.25" strokeWidth="0.7" />
          <line x1="0" y1="200" x2="400" y2="200" stroke="#B9E0F3" strokeOpacity="0.25" strokeWidth="0.7" />
          <circle cx="200" cy="40" r="3" fill="#F4940E" />
        </svg>
      </div>

      <div className="shell relative z-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-8">
            <Reveal>
              <p className="label label-dark">04 / Education &amp; Training</p>
              <h2 className="display mt-6 max-w-[14ch] text-[clamp(2.25rem,1.3rem+3.6vw,4.4rem)] leading-[1.01] text-paper">
                Learning that makes neuroscience{" "}
                <em className="text-ember">usable.</em>
              </h2>
            </Reveal>
          </div>

          <Reveal className="lg:col-span-4 lg:col-start-9 lg:self-end" delay={100}>
            <p className="body-copy">
              Sessions are built around understanding, application, and the
              confidence to engage with scientific ideas in practice. Content is
              shaped around the audience in the room.
            </p>
            <p className="mt-5 font-mono text-[0.5625rem] uppercase leading-[1.9] tracking-[0.15em] text-paper/60">
              Workshops / Seminars / Professional development / Bespoke sessions
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-px border-y border-paper/15 bg-paper/15 sm:grid-cols-2 lg:mt-20 xl:grid-cols-4">
          {learningFormats.map((format, index) => (
            <Reveal
              key={format.title}
              delay={index * 70}
              className="bg-ink"
            >
              <div className="group flex h-full flex-col p-6 transition-colors duration-300 hover:bg-ink-2 sm:p-7">
                <div className="flex items-baseline justify-between">
                  <span className="font-display text-[2.6rem] italic leading-none text-ember/80">
                    {format.number}
                  </span>
                  <span className="h-px w-7 bg-paper/20 transition-all duration-300 group-hover:w-12 group-hover:bg-ember" />
                </div>
                <h3 className="mt-7 font-display text-[1.4rem] leading-[1.2] tracking-[-0.02em] text-paper">
                  {format.title}
                </h3>
                <p className="mt-3 text-[0.855rem] leading-[1.65] text-paper/60">
                  {format.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-10 flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
            <p className="max-w-[34rem] text-[0.875rem] leading-relaxed text-paper/65">
              Working with a specific team, profession, or scientific question?
              Training can begin there.
            </p>
            <a href="#contact" className="btn btn-ember w-full sm:w-auto">
              Discuss a Training Program
              <ArrowUpRight size={16} strokeWidth={1.8} aria-hidden="true" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

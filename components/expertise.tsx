import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { expertiseAreas } from "@/lib/content";

export function Expertise() {
  return (
    <section id="expertise" className="section border-y border-line bg-sand/45">
      <div className="shell">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="lg:sticky lg:top-12">
                <p className="label">03 / Expertise</p>
                <h2 className="display mt-6 max-w-[12ch] text-[clamp(2.3rem,1.3rem+2.4vw,3.4rem)] leading-[1.02]">
                  Six ways we connect <em className="text-azure-deep">science and practice.</em>
                </h2>
                <p className="body-copy mt-7 max-w-[36ch]">
                  The work moves between education, training, and consultation.
                  Each area can stand alone or come together around a larger
                  question.
                </p>
                <a href="#contact" className="arrow-link mt-8">
                  Discuss your context
                  <ArrowUpRight size={14} strokeWidth={1.8} aria-hidden="true" />
                </a>

                <div className="mt-12 hidden max-w-[19rem] border-t border-ink/15 pt-4 lg:block">
                  <p className="font-mono text-[0.5625rem] uppercase leading-[1.9] tracking-[0.15em] text-muted">
                    Areas of focus are adapted to the audience, the setting, and
                    the question at hand.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            {expertiseAreas.map((area, index) => (
              <Reveal
                key={area.title}
                delay={index * 55}
                className={
                  index === expertiseAreas.length - 1
                    ? "border-b border-ink/15"
                    : ""
                }
              >
                <a
                  href="#contact"
                  className="expertise-row group"
                >
                  <span className="row-num pt-1 font-mono text-[0.5625rem] tracking-[0.12em] text-muted">
                    {area.number}
                  </span>
                  <h3 className="row-title font-display text-[clamp(1.45rem,1.2rem+0.65vw,1.8rem)] leading-[1.16] tracking-[-0.02em] text-ink">
                    {area.title}
                    <span className="ml-2 hidden align-middle font-mono text-[0.4375rem] font-normal uppercase tracking-[0.14em] text-muted md:inline">
                      {area.tag}
                    </span>
                  </h3>
                  <p className="row-desc max-w-[36ch] text-[0.875rem] leading-[1.65] text-slate md:pt-1.5">
                    {area.description}
                  </p>
                  <ArrowUpRight
                    size={17}
                    strokeWidth={1.5}
                    className="row-arrow mt-0.5"
                    aria-hidden="true"
                  />
                  <span className="sr-only"> — discuss this area</span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

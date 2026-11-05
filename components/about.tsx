import { Reveal } from "@/components/reveal";
import { IntersectionDiagram } from "@/components/intersection-diagram";

const principles = [
  {
    title: "Scientific care",
    copy: "Evidence is considered carefully — including the limits of what it can tell us.",
  },
  {
    title: "Plain-language clarity",
    copy: "Complex ideas are made useful, without simplifying them into false certainty.",
  },
  {
    title: "Human context",
    copy: "Neuroscience is understood as part of human behavior, not apart from it.",
  },
];

export function About() {
  return (
    <section id="about" className="section">
      <div className="shell">
        <Reveal>
          <div className="flex items-center justify-between gap-6">
            <p className="label">02 / About</p>
            <p className="hidden font-mono text-[0.5625rem] uppercase tracking-[0.16em] text-muted sm:block">
              Education / Training / Consultation
            </p>
          </div>
        </Reveal>

        <div className="mt-9 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-8">
            <h2 className="display max-w-[16ch] text-[clamp(2.2rem,1.4rem+3.1vw,4.1rem)] leading-[1.02]">
              Where neuroscience meets <em className="text-azure-deep">forensic understanding.</em>
            </h2>
          </Reveal>

          <Reveal className="lg:col-span-3 lg:col-start-10 lg:self-end" delay={100}>
            <div className="border-l border-ember pl-4">
              <p className="font-mono text-[0.5625rem] uppercase leading-[1.9] tracking-[0.16em] text-muted">
                A professional practice at the meeting point of brain science and
                the law.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-14 lg:mt-20 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-5" delay={80}>
            <IntersectionDiagram />
          </Reveal>

          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal delay={120}>
              <p className="body-copy first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:font-display first-letter:text-[3.9rem] first-letter:italic first-letter:leading-[0.68] first-letter:text-ember-deep">
                The Forensic Neuroscientist is an education, training, and
                consultation practice working where brain science and the legal
                system meet. Our purpose is to make complex neuroscience more
                accessible to the professionals who encounter it — and to connect
                scientific ideas to the real-world questions they raise.
              </p>
              <p className="body-copy mt-6">
                That means translating research into clear language, connecting
                concepts to practice, and being honest about what the evidence can
                and cannot tell us. The work is scientific in its foundations and
                human in its application: curious, precise, and grounded in the
                contexts where knowledge is actually used.
              </p>
            </Reveal>

            <Reveal delay={180}>
              <blockquote className="mt-9 border-l-2 border-ember pl-5">
                <p className="pull-line text-ink">
                  Complex science. Clear thinking. Human context.
                </p>
              </blockquote>
            </Reveal>

            <Reveal delay={220}>
              <dl className="mt-10">
                {principles.map((principle, index) => (
                  <div
                    key={principle.title}
                    className="grid grid-cols-[2rem_1fr] gap-x-3 border-t border-line py-4 last:border-b"
                  >
                    <dt className="pt-1 font-mono text-[0.5625rem] tracking-[0.12em] text-ember-deep">
                      0{index + 1}
                    </dt>
                    <dd>
                      <p className="font-display text-[1.35rem] leading-snug tracking-[-0.02em]">
                        {principle.title}
                      </p>
                      <p className="mt-1 max-w-[38ch] text-[0.875rem] leading-relaxed text-slate">
                        {principle.copy}
                      </p>
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

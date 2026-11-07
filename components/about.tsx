import { ClarityMark } from "@/components/clarity-mark";
import { ClarityDiagram } from "@/components/clarity-diagram";
import { Reveal } from "@/components/reveal";
import { SectionMarker } from "@/components/section-marker";

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

function PrincipleGlyph({ count }: { count: number }) {
  const circles = [
    { cx: 17, cy: 17 },
    { cx: 31, cy: 17 },
    { cx: 24, cy: 29 },
  ];

  return (
    <svg
      width="56"
      height="44"
      viewBox="0 0 48 42"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      {circles.map((circle, index) => (
        <circle
          key={`${circle.cx}-${circle.cy}`}
          cx={circle.cx}
          cy={circle.cy}
          r="12.5"
          stroke="currentColor"
          strokeWidth="0.9"
          strokeOpacity={index < count ? 0.9 : 0.22}
          fill="currentColor"
          fillOpacity={index < count ? 0.05 : 0}
        />
      ))}
      {count === 3 && <circle cx="24" cy="21" r="2.4" fill="var(--color-ember)" />}
    </svg>
  );
}

export function About() {
  return (
    <section id="about" className="section about">
      <span className="section-ghost" aria-hidden="true">
        02
      </span>

      <div className="shell">
        <Reveal>
          <SectionMarker
            number="02"
            label="About / Clarity"
            note="A working model"
          />
        </Reveal>

        <div className="about-intro">
          <Reveal className="about-intro__title">
            <h2 className="h-section about-heading">
              Where neuroscience meets{" "}
              <em className="text-azure-deep">forensic understanding.</em>
            </h2>
          </Reveal>

          <Reveal className="about-intro__note" delay={100}>
            <div className="about-note">
              <ClarityMark size={22} className="about-note__mark" />
              <p>
                A professional practice at the meeting point of brain science,
                the law, and the people who work between them.
              </p>
              <p className="about-note__meta">Education / Training / Consultation</p>
            </div>
          </Reveal>
        </div>

        <div className="about-body">
          <Reveal className="about-body__copy">
            <div className="about-copy">
              <p className="body-copy drop-cap">
                The Forensic Neuroscientist is an education, training and
                consultation practice working where brain science and the legal
                system meet. Our purpose is to make complex neuroscience more
                accessible to the professionals who encounter it — and to connect
                scientific ideas to the real-world questions they raise.
              </p>
              <p className="body-copy">
                That means translating research into clear language, connecting
                concepts to practice, and being honest about what the evidence can
                and cannot tell us. The work is scientific in its foundations and
                human in its application: curious, precise, and grounded in the
                contexts where knowledge is actually used.
              </p>
            </div>
          </Reveal>

          <Reveal className="about-body__quote" delay={140}>
            <blockquote className="about-quote">
              <span className="about-quote__label">Working principle / 01</span>
              <p>Complex science. Clear thinking. Human context.</p>
              <footer>
                <span className="about-quote__rule" aria-hidden="true" />
                The standard the work is held to
              </footer>
            </blockquote>
          </Reveal>
        </div>

        <div className="clarity-band bleed">
          <div className="clarity-band__grid" aria-hidden="true" />
          <div className="clarity-band__inner">
            <Reveal>
              <div className="clarity-band__intro">
                <p className="clarity-band__label">Fig. 02 / The working model</p>
                <p className="clarity-band__note">
                  Not three subjects in isolation. One question, held from three
                  directions.
                </p>
                <div className="clarity-band__legend" aria-hidden="true">
                  <span>
                    <i className="bg-azure-deep" />
                    Science
                  </span>
                  <span>
                    <i className="bg-ember-deep" />
                    Evidence
                  </span>
                  <span>
                    <i className="bg-ink" />
                    Human context
                  </span>
                </div>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <ClarityDiagram />
            </Reveal>
          </div>
        </div>

        <div className="about-principles">
          <Reveal>
            <div className="about-principles__head">
              <p className="label">Principles / 03</p>
              <p>How the work is held, whatever the question.</p>
            </div>
          </Reveal>

          <div className="principle-grid">
            {principles.map((principle, index) => (
              <Reveal
                key={principle.title}
                className="principle"
                delay={index * 80}
              >
                <div className="principle__head">
                  <span className="principle__glyph">
                    <PrincipleGlyph count={index + 1} />
                  </span>
                  <span className="principle__num">0{index + 1}</span>
                </div>
                <h3>{principle.title}</h3>
                <p>{principle.copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

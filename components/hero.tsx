import { ArrowDown, ArrowUpRight, Play } from "lucide-react";
import { ClarityMark } from "@/components/clarity-mark";
import { HeroArt } from "@/components/hero-art";
import { SignalLens } from "@/components/signal-lens";

const disciplines = [
  { number: "01", label: "Neuroscience" },
  { number: "02", label: "Forensic science" },
  { number: "03", label: "Psychology" },
  { number: "04", label: "The legal system" },
];

export function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-atmosphere" aria-hidden="true">
        <span className="hero-wash" />
        <span className="hero-grid-lines" />
        <span className="hero-trace" />
        <span className="hero-vertical-note">Signal → Clarity</span>
      </div>

      <div className="shell hero-inner">
        <div className="hero-top hero-enter">
          <p className="hero-ident">
            <span className="hero-ident__name">The Forensic Neuroscientist</span>
            <span className="hero-ident__role">
              Neuroscience education, training &amp; consultation
            </span>
          </p>
          <p className="hero-top-note">
            <span>Science, translated for practice</span>
            <span className="hero-scroll-cue">
              Scroll
              <ArrowDown size={12} strokeWidth={1.6} aria-hidden="true" />
            </span>
          </p>
        </div>

        <div className="hero-grid">
          <div className="hero-copy">
            <h1 className="hero-title">
              <span
                className="hero-title__line hero-enter"
                style={{ "--enter-delay": "80ms" } as React.CSSProperties}
              >
                Understanding
              </span>
              <span
                className="hero-title__line hero-title__line--indent hero-enter"
                style={{ "--enter-delay": "150ms" } as React.CSSProperties}
              >
                the <em>Brain.</em>
              </span>
              <span
                className="hero-title__line hero-enter"
                style={{ "--enter-delay": "230ms" } as React.CSSProperties}
              >
                Examining
              </span>
              <span
                className="hero-title__line hero-title__line--indent hero-enter"
                style={{ "--enter-delay": "300ms" } as React.CSSProperties}
              >
                the <em>Evidence.</em>
              </span>
              <span
                className="hero-title__line hero-enter"
                style={{ "--enter-delay": "380ms" } as React.CSSProperties}
              >
                Advancing
              </span>
              <span
                className="hero-title__line hero-title__line--indent hero-title__line--coda hero-enter"
                style={{ "--enter-delay": "450ms" } as React.CSSProperties}
              >
                Forensic <em>Knowledge.</em>
              </span>
            </h1>

            <div
              className="hero-baseline hero-enter"
              style={{ "--enter-delay": "560ms" } as React.CSSProperties}
            >
              <p className="hero-lede body-copy">
                Education, training and consultation where neuroscience meets
                forensic science and the law — making complex evidence clearer
                for the people who work with it.
              </p>

              <div className="hero-actions">
                <a href="#expertise" className="btn btn-primary">
                  Explore the practice
                  <ArrowDown size={15} strokeWidth={1.8} aria-hidden="true" />
                </a>
                <a href="#watch" className="btn btn-text">
                  <span className="btn-play">
                    <Play
                      size={10}
                      strokeWidth={2}
                      fill="currentColor"
                      aria-hidden="true"
                    />
                  </span>
                  Watch the introduction
                  <ArrowUpRight
                    size={14}
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>
          </div>

          <HeroArt>
            <div className="hero-figure">
              <div className="hero-figure__meta">
                <span>Fig. 01 / Working model</span>
                <span className="hidden sm:inline">Signal lens</span>
              </div>

              <SignalLens />

              <div className="hero-figure__foot">
                <span className="hero-figure__key">
                  <i className="bg-azure" />
                  Signal
                </span>
                <span className="hero-figure__key">
                  <i className="bg-ember" />
                  Clarity
                </span>
                <span className="hero-figure__key">
                  <i className="bg-ink-4" />
                  Meaning
                </span>
              </div>
            </div>
          </HeroArt>
        </div>

        <div
          className="hero-strip hero-enter"
          style={{ "--enter-delay": "680ms" } as React.CSSProperties}
        >
          <span className="hero-strip__label">
            <ClarityMark size={16} />
            Fields in conversation
          </span>
          {disciplines.map((discipline) => (
            <span key={discipline.label} className="hero-strip__item">
              <span className="strip-num">{discipline.number}</span>
              {discipline.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

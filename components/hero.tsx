import {
  ArrowDown,
  Brain,
  Fingerprint,
  Play,
  Scale,
  Users,
} from "lucide-react";
import { NeuralPlate } from "@/components/neural-plate";

const disciplines = [
  { label: "Neuroscience", icon: Brain },
  { label: "Forensic science", icon: Fingerprint },
  { label: "Psychology", icon: Users },
  { label: "The legal system", icon: Scale },
];

export function Hero() {
  return (
    <section id="home" className="hero">
      <div className="shell flex w-full flex-1 flex-col justify-center">
        <div className="hero-enter flex flex-wrap items-center justify-between gap-3 border-b border-line pb-5">
          <p className="label">Neuroscience / Forensic science / Education</p>
          <p className="hidden font-mono text-[0.5625rem] uppercase tracking-[0.16em] text-muted sm:block">
            Science, translated for practice
          </p>
        </div>

        <div className="mt-9 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8 xl:gap-12">
          <div className="hero-copy lg:col-span-7 xl:col-span-7">
            <h1 className="hero-title">
              <span className="line hero-enter" style={{ "--enter-delay": "80ms" } as React.CSSProperties}>
                Understanding
              </span>
              <span className="line hero-enter" style={{ "--enter-delay": "140ms" } as React.CSSProperties}>
                the <em>Brain.</em>
              </span>
              <span className="line hero-enter" style={{ "--enter-delay": "220ms" } as React.CSSProperties}>
                Examining
              </span>
              <span className="line hero-enter" style={{ "--enter-delay": "280ms" } as React.CSSProperties}>
                the <em>Evidence.</em>
              </span>
              <span className="line hero-enter" style={{ "--enter-delay": "360ms" } as React.CSSProperties}>
                Advancing
              </span>
              <span
                className="line last hero-enter"
                style={{ "--enter-delay": "420ms" } as React.CSSProperties}
              >
                Forensic <em>Knowledge.</em>
              </span>
            </h1>

            <p
              className="body-copy hero-enter mt-7 max-w-[35rem] text-[0.98rem] sm:text-[1.05rem]"
              style={{ "--enter-delay": "540ms" } as React.CSSProperties}
            >
              Bridging neuroscience, forensic science, and professional education
              through specialized training, thoughtful consultation, and
              accessible scientific insight.
            </p>

            <div
              className="hero-enter mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
              style={{ "--enter-delay": "620ms" } as React.CSSProperties}
            >
              <a href="#expertise" className="btn btn-primary w-full sm:w-auto">
                Explore Our Expertise
                <ArrowDown size={15} strokeWidth={1.8} aria-hidden="true" />
              </a>
              <a href="#watch" className="btn btn-outline w-full sm:w-auto">
                <span className="flex size-6 items-center justify-center rounded-full border border-ink/25">
                  <Play
                    size={9}
                    strokeWidth={2}
                    fill="currentColor"
                    aria-hidden="true"
                  />
                </span>
                Watch Our Videos
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 xl:col-span-5">
            <div
              className="hero-enter mx-auto w-full max-w-[22rem] lg:ml-auto lg:mr-0 lg:max-w-none"
              style={{ "--enter-delay": "300ms" } as React.CSSProperties}
            >
              <NeuralPlate />
              <div className="mt-3 flex items-center justify-between font-mono text-[0.5rem] uppercase tracking-[0.16em] text-muted">
                <span>Connectome / visual study</span>
                <span className="hidden sm:inline">Science in context</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="shell mt-8 w-full sm:mt-10">
        <div className="discipline-strip">
          {disciplines.map(({ label, icon: Icon }) => (
            <div key={label} className="discipline-item">
              <Icon size={13} strokeWidth={1.6} aria-hidden="true" />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

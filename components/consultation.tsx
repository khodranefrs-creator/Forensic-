import { ArrowUpRight } from "lucide-react";
import { Aperture } from "@/components/aperture";
import { ClarityMark } from "@/components/clarity-mark";
import { ProcessSignal } from "@/components/process-signal";
import { Reveal } from "@/components/reveal";
import { SectionMarker } from "@/components/section-marker";
import { consultationSteps } from "@/lib/content";

const scopeItems = [
  "A scientific perspective on a defined question",
  "Clear, proportionate language",
  "An honest account of the limits of evidence",
];

export function Consultation() {
  return (
    <section id="consultation" className="consultation section">
      <span className="section-ghost" aria-hidden="true">
        05
      </span>

      <div className="shell">
        <Reveal>
          <SectionMarker
            number="05"
            label="Consultation"
            note="A considered method"
          />
        </Reveal>

        <div className="consultation-head">
          <Reveal className="consultation-head__title">
            <h2 className="h-section">
              Scientific insight.{" "}
              <em className="text-azure-deep">Informed perspective.</em>
            </h2>
          </Reveal>

          <Reveal className="consultation-head__note" delay={100}>
            <p className="body-copy">
              Consultation is a space to examine neuroscience questions with care
              — whether you are preparing a case, developing a programme, or
              making sense of complex scientific material.
            </p>
            <p className="body-copy mt-4">
              Each inquiry begins with understanding the question, the context,
              and the limits of what the science can tell us.
            </p>
          </Reveal>
        </div>

        <div className="consultation-layout">
          <div className="consultation-process">
            <Reveal>
              <div className="consultation-method-top">
                <span>Method / 01—03</span>
                <span>Question → Science → Translation</span>
              </div>

              <ProcessSignal />

              <ol className="process">
                {consultationSteps.map((step) => (
                  <li key={step.number} className="process__step">
                    <span className="process__marker">{step.number}</span>
                    <div className="process__content">
                      <h3>{step.title}</h3>
                      <div>
                        <p>{step.description}</p>
                        <span className="process__cue">
                          <ClarityMark size={13} />
                          {step.number === "01"
                            ? "Context first"
                            : step.number === "02"
                              ? "Evidence, with limits"
                              : "Language that can be used"}
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>

          <Reveal className="consultation-aside" delay={120}>
            <aside className="method-plate">
              <Aperture className="method-plate__art" />
              <p className="method-plate__eyebrow">Scope / How we work</p>
              <p className="method-plate__quote">
                Considered science. Proportionate language.
              </p>
              <p className="method-plate__copy">
                The aim is not to overstate what neuroscience can settle. It is
                to give the question a clearer, more honest scientific frame —
                and to explain it in language that can actually be used.
              </p>

              <ul className="method-plate__list">
                {scopeItems.map((item, index) => (
                  <li key={item}>
                    <span>0{index + 1}</span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="method-plate__rule" aria-hidden="true" />
              <a href="#contact" className="arrow-link arrow-link-ember">
                Start a conversation
                <ArrowUpRight size={15} strokeWidth={1.8} aria-hidden="true" />
              </a>
            </aside>
          </Reveal>
        </div>

        <Reveal className="consultation-scope" delay={80}>
          <p>
            Consultation is scientific and educational in nature — not clinical
            care, diagnosis or legal representation.
          </p>
          <a href="#contact" className="arrow-link">
            Ask about scope
            <ArrowUpRight size={14} strokeWidth={1.8} aria-hidden="true" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

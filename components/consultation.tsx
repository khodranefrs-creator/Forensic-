import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { consultationSteps } from "@/lib/content";

export function Consultation() {
  return (
    <section id="consultation" className="section">
      <div className="shell">
        <Reveal>
          <p className="label">05 / Consultation</p>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-8">
            <h2 className="display text-[clamp(2.2rem,1.15rem+3.95vw,4.6rem)] leading-[0.99]">
              <span className="block">Scientific insight.</span>
              <em className="block text-azure-deep">Informed perspective.</em>
            </h2>
          </Reveal>

          <Reveal className="lg:col-span-4 lg:col-start-9 lg:self-end" delay={100}>
            <p className="body-copy">
              Consultation is a space to examine neuroscience questions with care
              — whether you are preparing a case, developing a program, or making
              sense of complex scientific material.
            </p>
            <p className="body-copy mt-4">
              Each inquiry begins with understanding the question, the context, and
              the limits of what the science can tell us.
            </p>
          </Reveal>
        </div>

        <Reveal delay={140}>
          <div className="mt-16 border-t border-ink/20 pt-6">
            <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-[0.5625rem] uppercase tracking-[0.16em] text-muted">
              <span>Method / 01—03</span>
              <span>Question → Science → Translation</span>
            </div>

            <div className="mt-9 grid grid-cols-1 gap-9 sm:grid-cols-3 sm:gap-8">
              {consultationSteps.map((step, index) => (
                <div
                  key={step.number}
                  className={`relative ${
                    index > 0
                      ? "border-t border-line pt-7 sm:border-l sm:border-t-0 sm:pl-8 sm:pt-0"
                      : "border-t border-line pt-7 sm:border-t-0 sm:pt-0"
                  }`}
                >
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-[0.5625rem] tracking-[0.12em] text-ember-deep">
                      {step.number}
                    </span>
                    <h3 className="font-display text-[clamp(1.4rem,1.2rem+0.5vw,1.7rem)] leading-tight tracking-[-0.02em]">
                      {step.title}
                    </h3>
                  </div>
                  <p className="mt-3 max-w-[31ch] text-[0.875rem] leading-[1.65] text-slate sm:pr-6">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={180}>
          <div className="mt-14 grid grid-cols-1 items-center gap-8 border-y border-line py-8 lg:grid-cols-12 lg:py-9">
            <div className="lg:col-span-7">
              <p className="pull-line max-w-[22ch]">
                Scientific insight, brought to the question at hand.
              </p>
            </div>
            <div className="lg:col-span-5 lg:justify-self-end">
              <a href="#contact" className="btn btn-primary w-full sm:w-auto">
                Start a Conversation
                <ArrowUpRight size={16} strokeWidth={1.8} aria-hidden="true" />
              </a>
              <p className="mt-3 max-w-[34ch] text-[0.72rem] leading-relaxed text-muted">
                Consultation is scientific and educational in nature — not
                clinical care or legal representation.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

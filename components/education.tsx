import { ArrowUpRight } from "lucide-react";
import { ClarityMark } from "@/components/clarity-mark";
import { EducationArc } from "@/components/education-arc";
import { Reveal } from "@/components/reveal";
import { SectionMarker } from "@/components/section-marker";
import { learningArc, learningFormats } from "@/lib/content";

const learningNotes = [
  "Built around the audience in the room",
  "Grounded in practice, not abstraction",
  "Open to questions and disagreement",
];

export function Education() {
  return (
    <section id="education" className="dark-surface education section">
      <div className="education-orbit" aria-hidden="true">
        <svg viewBox="0 0 400 400" className="h-full w-full" fill="none">
          <circle
            cx="200"
            cy="200"
            r="196"
            stroke="#24B1FA"
            strokeOpacity="0.18"
            strokeWidth="0.7"
            strokeDasharray="1 8"
          />
          <circle
            cx="200"
            cy="200"
            r="162"
            stroke="#F4940E"
            strokeOpacity="0.45"
            strokeWidth="0.8"
          />
          <circle
            cx="200"
            cy="200"
            r="124"
            stroke="#B9E0F3"
            strokeOpacity="0.16"
            strokeWidth="0.7"
          />
          <circle
            cx="200"
            cy="200"
            r="66"
            stroke="#B9E0F3"
            strokeOpacity="0.14"
            strokeWidth="0.7"
          />
          <path d="M 200 4 L 200 396" stroke="#B9E0F3" strokeOpacity="0.1" />
          <path d="M 4 200 L 396 200" stroke="#B9E0F3" strokeOpacity="0.1" />
          <circle cx="200" cy="38" r="3" fill="#F4940E" />
        </svg>
      </div>

      <div className="shell relative z-10">
        <Reveal>
          <SectionMarker
            dark
            number="04"
            label="Education & Training"
            note="Understand / Apply / Communicate"
          />
        </Reveal>

        <div className="education-head">
          <Reveal className="education-head__title">
            <h2 className="h-section">
              Learning that makes neuroscience{" "}
              <em className="text-ember">usable.</em>
            </h2>
          </Reveal>

          <Reveal className="education-head__note" delay={100}>
            <p className="body-copy">
              Sessions are built around understanding, application, and the
              confidence to engage with scientific ideas in practice. Content is
              shaped around the audience in the room.
            </p>
            <p className="education-formats-line">
              Workshops / Seminars / Professional development / Bespoke sessions
            </p>
          </Reveal>
        </div>

        <div className="education-body">
          <Reveal className="learning-plate">
            <div className="learning-plate__head">
              <p className="learning-plate__kicker">
                <ClarityMark size={15} />
                The learning arc / 01—03
              </p>
              <h3>Three movements. One outcome.</h3>
              <p>
                From first principle to confident explanation — the shape every
                session works toward.
              </p>
            </div>

            <div className="learning-plate__arc">
              <EducationArc tone="light" />
            </div>

            <div className="learning-steps">
              {learningArc.map((step, index) => (
                <div key={step.number} className="learning-step">
                  <span className="learning-step__num">{step.number}</span>
                  <p className="learning-step__title">{step.title}</p>
                  <p className="learning-step__copy">{step.copy}</p>
                  {index < learningArc.length - 1 && (
                    <span className="learning-step__link" aria-hidden="true" />
                  )}
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className="education-human" delay={120}>
            <p className="education-human__kicker">Why it matters</p>
            <p className="education-human__quote">
              “No two rooms are the same. The teaching starts with the people
              in it.”
            </p>
            <p className="education-human__copy">
              The aim is not to deliver a fixed lecture. It is to leave people
              with language they can use, questions they can ask, and a clearer
              sense of where the science ends and interpretation begins.
            </p>
            <ul className="education-human__list">
              {learningNotes.map((note) => (
                <li key={note}>
                  <span aria-hidden="true" />
                  {note}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="education-formats-head">
          <p className="education-formats-head__label">Ways to learn / 04</p>
          <p className="education-formats-head__note">
            Each format can be adapted for a team, a programme or a single
            session.
          </p>
        </div>

        <div className="education-formats">
          {learningFormats.map((format, index) => (
            <Reveal
              key={format.title}
              className="education-format"
              delay={index * 60}
            >
              <span className="education-format__num">{format.number}</span>
              <h3 className="education-format__title">{format.title}</h3>
              <span className="education-format__bar" aria-hidden="true" />
              <p className="education-format__desc">{format.description}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="education-cta" delay={100}>
          <p>
            Working with a specific team, profession or scientific question?
            Training can begin there.
          </p>
          <a href="#contact" className="btn btn-ember">
            Discuss a training programme
            <ArrowUpRight size={16} strokeWidth={1.8} aria-hidden="true" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

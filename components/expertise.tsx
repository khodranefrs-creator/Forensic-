import { ArrowUpRight } from "lucide-react";
import { ExpertiseGlyph, type GlyphVariant } from "@/components/expertise-glyph";
import { Reveal } from "@/components/reveal";
import { SectionMarker } from "@/components/section-marker";
import { expertiseAreas } from "@/lib/content";

const variants: GlyphVariant[] = [
  "converge",
  "orbit",
  "wave",
  "matrix",
  "prism",
  "broadcast",
];

export function Expertise() {
  return (
    <section id="expertise" className="expertise section">
      <div className="expertise-watermark" aria-hidden="true" />
      <span className="section-ghost" aria-hidden="true">
        03
      </span>

      <div className="shell">
        <Reveal>
          <SectionMarker
            number="03"
            label="Expertise"
            note="Six connected areas of focus"
          />
        </Reveal>

        <div className="expertise-head">
          <Reveal className="expertise-head__title">
            <h2 className="h-section">
              Six ways we connect{" "}
              <em className="text-azure-deep">science and practice.</em>
            </h2>
          </Reveal>

          <Reveal className="expertise-head__note" delay={100}>
            <p className="body-copy">
              The work moves between education, training and consultation. Each
              area can stand alone, or come together around a larger question.
            </p>
            <a href="#contact" className="arrow-link">
              Discuss your context
              <ArrowUpRight size={15} strokeWidth={1.8} aria-hidden="true" />
            </a>
          </Reveal>
        </div>

        <Reveal className="atlas-legend" delay={60}>
          <span className="atlas-legend__index">Atlas / 01—06</span>
          <span className="atlas-legend__line" aria-hidden="true" />
          <span className="atlas-legend__note">
            Six areas of focus in one connected field of practice
          </span>
        </Reveal>

        <div className="expertise-atlas">
          {expertiseAreas.map((area, index) => (
            <Reveal
              key={area.title}
              className={`atlas-cell atlas-cell--${index + 1}`}
              delay={index * 55}
            >
              <a href="#contact" className="atlas-tile">
                <span className="atlas-tile__ghost" aria-hidden="true">
                  {area.number}
                </span>

                <div className="atlas-tile__top">
                  <span className="atlas-tile__num">{area.number}</span>
                  <span className="atlas-tile__tag">{area.tag}</span>
                </div>

                <div className="atlas-tile__art">
                  <ExpertiseGlyph variant={variants[index]} />
                </div>

                <div className="atlas-tile__body">
                  <h3>{area.title}</h3>
                  <p>{area.description}</p>
                  <span className="atlas-tile__cta">
                    Explore this area
                    <ArrowUpRight
                      size={13}
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />
                  </span>
                </div>
                <span className="sr-only"> — discuss this area</span>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal className="expertise-foot" delay={80}>
          <p>
            Areas of focus are adapted to the audience, the setting and the
            question at hand — never delivered as a fixed catalogue.
          </p>
          <a href="#education" className="arrow-link">
            See how learning works
            <ArrowUpRight size={14} strokeWidth={1.8} aria-hidden="true" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

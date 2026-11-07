import { ArrowUpRight, Play } from "lucide-react";
import { Aperture } from "@/components/aperture";
import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/reveal";
import { SectionMarker } from "@/components/section-marker";
import { site } from "@/lib/content";

const includeItems = [
  "The question or context you are working with",
  "Who the work is for — a team, a programme, or a specific audience",
  "What you are hoping to understand or achieve",
];

const nextSteps = [
  { number: "01", title: "You send a note", copy: "A short outline is enough." },
  {
    number: "02",
    title: "It is read with care",
    copy: "The question and context are considered.",
  },
  {
    number: "03",
    title: "We decide what is useful",
    copy: "Including whether a conversation is the right next step.",
  },
];

export function Contact() {
  return (
    <section id="contact" className="dark-surface contact section">
      <Aperture className="contact-orbit" />
      <span className="contact-ghost" aria-hidden="true">
        07
      </span>

      <div className="shell relative z-10">
        <Reveal>
          <SectionMarker
            dark
            number="07"
            label="Contact / Inquiry"
            note="Scientific & educational"
          />
        </Reveal>

        <div className="contact-head">
          <div className="contact-copy">
            <Reveal>
              <h2 className="h-section contact-heading">
                Bring the science <em className="text-ember">into focus.</em>
              </h2>
              <p className="body-copy mt-7 max-w-[36ch]">
                For training inquiries, consultation questions, or a conversation
                about how neuroscience might inform your work, get in touch.
              </p>
            </Reveal>

            <Reveal delay={100}>
              <div className="contact-checklist">
                <p className="contact-checklist__label">What to include</p>
                <ul>
                  {includeItems.map((item, index) => (
                    <li key={item}>
                      <span>0{index + 1}</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="contact-next">
                <p className="contact-checklist__label">What happens next</p>
                <ol>
                  {nextSteps.map((step) => (
                    <li key={step.number}>
                      <span>{step.number}</span>
                      <div>
                        <p>{step.title}</p>
                        <span>{step.copy}</span>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              <a
                href={site.youtube.channelUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="contact-channel"
              >
                <span className="contact-channel__icon">
                  <Play size={11} strokeWidth={1.8} aria-hidden="true" />
                </span>
                <span>Find the practice on YouTube</span>
                <ArrowUpRight size={14} strokeWidth={1.8} aria-hidden="true" />
              </a>

              <p className="contact-note">
                Inquiries are read with care. No clinical care or legal
                representation is offered.
              </p>
            </Reveal>
          </div>

          <Reveal className="contact-form-wrap" delay={120}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

import { ArrowUpRight, Play } from "lucide-react";
import { ResourceArt } from "@/components/resource-art";
import { Reveal } from "@/components/reveal";
import { SectionMarker } from "@/components/section-marker";
import { resourceTracks, site } from "@/lib/content";

const artVariants = ["signal", "applied", "watch"] as const;

export function Resources() {
  const [feature, ...sideTracks] = resourceTracks;

  return (
    <section id="resources" className="library section">
      <span className="section-ghost" aria-hidden="true">
        06
      </span>

      <div className="shell">
        <Reveal>
          <SectionMarker
            number="06"
            label="Resources / Library"
            note="A growing index"
          />
        </Reveal>

        <div className="library-head">
          <Reveal className="library-head__title">
            <h2 className="h-section">
              A growing <em className="text-ember-deep">knowledge base.</em>
            </h2>
          </Reveal>

          <Reveal className="library-head__note" delay={100}>
            <p className="body-copy">
              An honest index of what exists: conversations on YouTube, and
              written tracks that are still in development.
            </p>
            <p className="library-head__meta">
              Entries appear when they are published.
            </p>
          </Reveal>
        </div>

        <div className="library-grid">
          <Reveal className="library-feature">
            <a href={feature.href} className="resource resource--feature group">
              <div className="resource__art">
                <ResourceArt variant={artVariants[0]} />
                <span className="resource__art-label">Fig. 03 / Signal field</span>
              </div>
              <span className="resource__arrow" aria-hidden="true">
                <ArrowUpRight size={15} strokeWidth={1.7} />
              </span>

              <div className="resource__body">
                <div className="resource__meta">
                  <span className="resource__num">{feature.number} / Feature</span>
                  <span className="resource__status">{feature.status}</span>
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <span className="resource__cta">
                  {feature.linkLabel}
                  <ArrowUpRight size={13} strokeWidth={1.8} aria-hidden="true" />
                </span>
              </div>
            </a>
          </Reveal>

          <div className="library-side">
            {sideTracks.map((track, index) => {
              const external = track.href.startsWith("http");
              return (
                <Reveal key={track.title} delay={80 + index * 60}>
                  <a
                    href={track.href}
                    {...(external
                      ? { target: "_blank", rel: "noreferrer noopener" }
                      : {})}
                    className="resource resource--side group"
                  >
                    <div className="resource__inner">
                      <div className="resource__art">
                        <ResourceArt variant={artVariants[index + 1]} />
                      </div>
                      <div className="resource__body">
                        <div className="resource__meta">
                          <span className="resource__num">{track.number} / Track</span>
                          <span
                            className={`resource__status ${
                              external ? "resource__status--live" : ""
                            }`}
                          >
                            {track.status}
                          </span>
                        </div>
                        <h3>{track.title}</h3>
                        <p>{track.description}</p>
                        <span className="resource__cta">
                          {external && (
                            <Play
                              size={11}
                              strokeWidth={1.8}
                              aria-hidden="true"
                            />
                          )}
                          {track.linkLabel}
                          <ArrowUpRight
                            size={12}
                            strokeWidth={1.8}
                            aria-hidden="true"
                          />
                        </span>
                      </div>
                    </div>
                    <span className="resource__arrow" aria-hidden="true">
                      <ArrowUpRight size={14} strokeWidth={1.7} />
                    </span>
                  </a>
                </Reveal>
              );
            })}
          </div>
        </div>

        <Reveal className="library-foot" delay={120}>
          <p>
            This is a working library. Entries appear here when they are
            published — nothing is presented as complete before it exists.
            Suggestions for topics are welcome.
          </p>
          <div className="library-foot__links">
            <a href="#contact" className="arrow-link">
              Suggest a topic
              <ArrowUpRight size={14} strokeWidth={1.8} aria-hidden="true" />
            </a>
            <a
              href={site.youtube.channelUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="arrow-link"
            >
              Full archive on YouTube
              <ArrowUpRight size={14} strokeWidth={1.8} aria-hidden="true" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

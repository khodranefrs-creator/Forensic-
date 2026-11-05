import { ArrowUpRight, Play } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { resourceTracks, site } from "@/lib/content";

export function Resources() {
  return (
    <section id="resources" className="section">
      <div className="shell">
        <div className="grid grid-cols-1 gap-9 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-7">
            <p className="label">06 / Resources</p>
            <h2 className="display mt-6 max-w-[13ch] text-[clamp(2.5rem,1.4rem+3.3vw,4.25rem)] leading-[1.01]">
              A growing <em className="text-ember-deep">knowledge base.</em>
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-4 lg:col-start-9 lg:self-end" delay={100}>
            <p className="body-copy">
              Accessible explanations, applied perspectives, and video resources
              for anyone who wants to understand neuroscience beyond the
              headlines.
            </p>
            <p className="mt-4 font-mono text-[0.5625rem] uppercase leading-[1.9] tracking-[0.15em] text-muted">
              New material is added as it is released.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-12 lg:mt-20 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-3">
            <div className="lg:sticky lg:top-12">
              <p className="font-display text-[2.8rem] italic leading-none text-ink/50">
                Index
              </p>
              <p className="mt-5 max-w-[20ch] font-mono text-[0.5625rem] uppercase leading-[1.9] tracking-[0.15em] text-muted">
                Three ways to keep learning. More will follow.
              </p>
              <a href="#contact" className="arrow-link mt-8">
                Suggest a topic
                <ArrowUpRight size={14} strokeWidth={1.8} aria-hidden="true" />
              </a>
            </div>
          </Reveal>

          <div className="lg:col-span-8 lg:col-start-5">
            {resourceTracks.map((track, index) => {
              const external = track.href.startsWith("http");
              return (
                <Reveal key={track.title} delay={index * 70}>
                  <a
                    href={track.href}
                    {...(external
                      ? { target: "_blank", rel: "noreferrer noopener" }
                      : {})}
                    className="group block border-t border-ink/20 py-7 first:border-t-0 first:pt-0 last:border-b last:pb-7"
                  >
                    <div className="flex items-start justify-between gap-6">
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                          <span className="font-mono text-[0.5625rem] tracking-[0.12em] text-ember-deep">
                            {track.number}
                          </span>
                          <span className="flex items-center gap-1.5 font-mono text-[0.5rem] uppercase tracking-[0.14em] text-muted">
                            <span
                              className={`size-1 rounded-full ${
                                external ? "bg-ember" : "bg-ink/30"
                              }`}
                            />
                            {track.status}
                          </span>
                        </div>
                        <h3 className="mt-3 font-display text-[clamp(1.9rem,1.5rem+1.1vw,2.55rem)] leading-[1.08] tracking-[-0.025em] transition-colors duration-300 group-hover:text-azure-deep">
                          {track.title}
                        </h3>
                        <p className="mt-3 max-w-[44ch] text-[0.9rem] leading-[1.68] text-slate">
                          {track.description}
                        </p>
                        <span className="mt-4 inline-flex items-center gap-2 text-[0.75rem] font-semibold text-ink">
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
                            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            aria-hidden="true"
                          />
                        </span>
                      </div>
                      <span className="mt-1 flex size-10 shrink-0 items-center justify-center border border-ink/15 transition-colors duration-300 group-hover:border-ink group-hover:bg-ink group-hover:text-paper">
                        <ArrowUpRight
                          size={16}
                          strokeWidth={1.5}
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                  </a>
                </Reveal>
              );
            })}

            <Reveal delay={220}>
              <p className="mt-8 max-w-[50ch] text-[0.78rem] leading-relaxed text-muted">
                Have a question you would like to see explained? Topic suggestions
                are welcome —{" "}
                <a
                  href="#contact"
                  className="underline decoration-ember decoration-2 underline-offset-4 transition-colors hover:text-ink"
                >
                  get in touch
                </a>
                . You can also explore the full archive on the{" "}
                <a
                  href={site.youtube.channelUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="underline decoration-ember decoration-2 underline-offset-4 transition-colors hover:text-ink"
                >
                  YouTube channel
                </a>
                .
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

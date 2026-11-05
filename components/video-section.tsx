"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowUpRight, Play } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { site } from "@/lib/content";

export function VideoSection() {
  const [playing, setPlaying] = useState(false);
  const { featuredVideoId, featuredVideoTitle, featuredVideoUrl, channelUrl, channelLabel } =
    site.youtube;

  return (
    <section id="watch" className="section-tight border-y border-line bg-cream">
      <div className="shell">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end lg:gap-12">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="label">Watch / Featured</p>
              <h2 className="display mt-6 max-w-[10ch] text-[clamp(2.4rem,1.4rem+3.1vw,4rem)] leading-[1.01]">
                Science, <em className="text-azure-deep">in conversation.</em>
              </h2>
              <p className="body-copy mt-6 max-w-[36ch]">
                An introduction to the channel and its exploration of brain
                science, behavior, and the questions that connect them. New
                perspectives, explained with clarity.
              </p>

              <div className="mt-8 border-t border-line pt-5">
                <p className="font-mono text-[0.5625rem] uppercase tracking-[0.16em] text-muted">
                  Official YouTube channel
                </p>
                <a
                  href={channelUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="arrow-link mt-2.5"
                >
                  {channelLabel}
                  <ArrowUpRight size={14} strokeWidth={1.8} aria-hidden="true" />
                </a>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={120}>
              <div className="relative aspect-video overflow-hidden border border-ink/20 bg-ink">
                {playing ? (
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${featuredVideoId}?autoplay=1&rel=0&modestbranding=1`}
                    title={featuredVideoTitle}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="absolute inset-0 h-full w-full"
                  />
                ) : (
                  <button
                    type="button"
                    onClick={() => setPlaying(true)}
                    className="group absolute inset-0 h-full w-full text-left"
                  >
                    <span className="sr-only">Play featured video: </span>
                    <Image
                      src="/featured-video.jpg"
                      alt=""
                      fill
                      sizes="(min-width: 1200px) 62vw, (min-width: 1024px) 58vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                    />
                    <span className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-ink/20" />

                    <span className="absolute left-5 top-5 flex items-center gap-2 font-mono text-[0.5rem] uppercase tracking-[0.16em] text-paper/75">
                      <span className="size-1.5 rounded-full bg-ember" />
                      Featured introduction
                    </span>

                    <span className="absolute left-1/2 top-1/2 flex size-[4.5rem] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-paper/35 bg-paper/10 backdrop-blur-sm transition-all duration-300 group-hover:scale-105 group-hover:border-ember group-hover:bg-ember">
                      <Play
                        size={20}
                        strokeWidth={1.5}
                        fill="currentColor"
                        className="ml-1 text-paper transition-colors group-hover:text-ink"
                        aria-hidden="true"
                      />
                    </span>

                    <span className="absolute inset-x-0 bottom-0 flex flex-col gap-1.5 p-5 sm:p-6">
                      <span className="font-mono text-[0.5rem] uppercase tracking-[0.16em] text-paper/60">
                        Now playing / 01
                      </span>
                      <span className="font-display text-[clamp(1.15rem,1rem+0.7vw,1.6rem)] leading-tight tracking-[-0.02em] text-paper">
                        {site.youtube.featuredVideoShortTitle}
                      </span>
                      <span className="text-[0.72rem] uppercase tracking-[0.1em] text-paper/55">
                        Exploring brain science &amp; criminal behavior
                      </span>
                    </span>
                  </button>
                )}
              </div>

              <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
                <p className="font-mono text-[0.5625rem] uppercase tracking-[0.14em] text-muted">
                  YouTube / Video 01
                </p>
                <a
                  href={featuredVideoUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="btn btn-outline"
                >
                  <Play size={13} strokeWidth={1.8} aria-hidden="true" />
                  Watch on YouTube
                  <ArrowUpRight size={14} strokeWidth={1.8} aria-hidden="true" />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

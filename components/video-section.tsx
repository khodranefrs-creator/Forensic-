"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowUpRight, Play } from "lucide-react";
import { ClarityMark } from "@/components/clarity-mark";
import { Reveal } from "@/components/reveal";
import { site } from "@/lib/content";

const channelNotes = [
  { number: "01", label: "Brain science & behavior" },
  { number: "02", label: "Forensic questions" },
  { number: "03", label: "Plain-language explanation" },
];

export function VideoSection() {
  const [playing, setPlaying] = useState(false);
  const {
    featuredVideoId,
    featuredVideoTitle,
    featuredVideoUrl,
    channelUrl,
    channelLabel,
  } = site.youtube;

  return (
    <section id="watch" className="film section">
      <div className="shell">
        <Reveal>
          <div className="section-marker">
            <span className="section-marker__num">Film</span>
            <ClarityMark size={19} className="section-marker__mark" />
            <span className="section-marker__label">In conversation</span>
            <span className="section-marker__line" aria-hidden="true" />
            <span className="section-marker__note">Official YouTube channel</span>
          </div>
        </Reveal>

        <div className="film-head">
          <Reveal className="film-head__title">
            <h2 className="h-section">
              Science, <em className="text-azure-deep">in conversation.</em>
            </h2>
          </Reveal>

          <Reveal className="film-head__note" delay={100}>
            <p className="body-copy">
              A place to think out loud. Short, considered explanations of the
              science behind behavior, evidence and professional practice.
            </p>
            <p className="film-head__signature">
              <span>From the channel</span>
              <span>{channelLabel}</span>
            </p>
          </Reveal>
        </div>

        <div className="film-stage">
          <Reveal className="film-frame-wrap">
            <figure className="film-frame">
              <div className="film-screen">
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
                    <span className="sr-only">
                      Play featured video: {featuredVideoTitle}
                    </span>
                    <Image
                      src="/featured-video.jpg"
                      alt=""
                      fill
                      sizes="(min-width: 1200px) 64vw, (min-width: 1024px) 58vw, 100vw"
                      className="object-cover"
                    />
                    <span className="film-veil" aria-hidden="true" />
                    <span className="film-badge">Featured introduction</span>

                    <span className="film-play" aria-hidden="true">
                      <Play
                        size={24}
                        strokeWidth={1.3}
                        fill="currentColor"
                        className="ml-1"
                      />
                    </span>

                    <span className="film-screen__caption">
                      <span className="film-index">
                        Now playing / Video 01 — Introduction
                      </span>
                      <span className="film-title">
                        {site.youtube.featuredVideoShortTitle}
                      </span>
                    </span>

                    <span className="film-corner film-corner--tl" aria-hidden="true" />
                    <span className="film-corner film-corner--tr" aria-hidden="true" />
                    <span className="film-corner film-corner--bl" aria-hidden="true" />
                    <span className="film-corner film-corner--br" aria-hidden="true" />
                  </button>
                )}
              </div>

              <figcaption className="film-caption">
                <span className="film-caption__index">Film 01 / Introduction</span>
                <span className="film-caption__title">
                  {site.youtube.featuredVideoTitle}
                </span>
                <a
                  href={featuredVideoUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="film-caption__link"
                >
                  Open on YouTube
                  <ArrowUpRight size={13} strokeWidth={1.8} aria-hidden="true" />
                </a>
              </figcaption>
            </figure>
          </Reveal>

          <Reveal className="film-rail" delay={140}>
            <p className="film-rail__kicker">
              <ClarityMark size={15} />
              The channel / 01
            </p>
            <p className="film-rail__lede">
              An introduction to the practice and its exploration of brain
              science, behavior, and the questions that connect them.
            </p>

            <div className="film-rail__list">
              {channelNotes.map((note) => (
                <p key={note.number} className="film-rail__item">
                  <span>{note.number}</span>
                  {note.label}
                </p>
              ))}
            </div>

            <a
              href={channelUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="film-channel"
            >
              <span className="film-channel__icon">
                <Play size={12} strokeWidth={1.8} aria-hidden="true" />
              </span>
              <span>
                <span className="film-channel__label">Visit the channel</span>
                <span className="film-channel__name">{channelLabel}</span>
              </span>
              <ArrowUpRight
                size={15}
                strokeWidth={1.8}
                className="ml-auto"
                aria-hidden="true"
              />
            </a>

            <p className="film-rail__note">
              Video is where the practice thinks out loud — not a replacement for
              a conversation.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

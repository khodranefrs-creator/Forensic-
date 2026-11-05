export function IntersectionDiagram() {
  return (
    <figure className="border-t border-line pt-4">
      <div className="flex items-center justify-between font-mono text-[0.5rem] uppercase tracking-[0.16em] text-muted">
        <span>Fig. 02 / The intersection</span>
        <span>Working model</span>
      </div>

      <svg
        viewBox="0 0 440 360"
        className="mt-4 h-auto w-full"
        role="img"
        aria-labelledby="intersection-title intersection-desc"
      >
        <title id="intersection-title">
          The intersection of science, evidence and human understanding
        </title>
        <desc id="intersection-desc">
          Three overlapping circles labelled science, evidence and human
          understanding meet at a central point called clarity.
        </desc>

        <g fill="none" strokeWidth="1.1">
          <circle
            cx="172"
            cy="148"
            r="88"
            stroke="#0B709D"
            strokeOpacity="0.72"
            fill="#24B1FA"
            fillOpacity="0.035"
          />
          <circle
            cx="268"
            cy="148"
            r="88"
            stroke="#C47606"
            strokeOpacity="0.85"
            fill="#F4940E"
            fillOpacity="0.03"
          />
          <circle
            cx="220"
            cy="228"
            r="88"
            stroke="#08222F"
            strokeOpacity="0.5"
            fill="#08222F"
            fillOpacity="0.014"
          />
        </g>

        <g
          stroke="#5E7078"
          strokeOpacity="0.45"
          strokeWidth="0.7"
          strokeDasharray="2 4"
          fill="none"
        >
          <path d="M 94 44 L 94 58 L 126 76" />
          <path d="M 348 44 L 348 58 L 315 76" />
          <path d="M 356 338 L 356 324 L 288 292" />
          <path d="M 220 156 L 220 134" />
        </g>

        <g
          fill="#5E7078"
          fontFamily="var(--font-mono)"
          fontSize="7.5"
          letterSpacing="1.5"
        >
          <text x="58" y="37">
            SCIENCE
          </text>
          <text x="314" y="37">
            EVIDENCE
          </text>
          <text x="318" y="345">
            HUMAN UNDERSTANDING
          </text>
        </g>

        <circle cx="220" cy="169" r="2.5" fill="#F4940E" />
        <text
          x="220"
          y="190"
          textAnchor="middle"
          fill="#08222F"
          fontFamily="var(--font-display)"
          fontStyle="italic"
          fontSize="27"
          letterSpacing="-0.6"
        >
          clarity
        </text>
        <text
          x="220"
          y="205"
          textAnchor="middle"
          fill="#5E7078"
          fontFamily="var(--font-mono)"
          fontSize="6"
          letterSpacing="1.4"
        >
          IN PRACTICE
        </text>

        <g stroke="#08222F" strokeOpacity="0.35" strokeWidth="0.8">
          <path d="M 20 20 L 20 32 M 20 20 L 32 20" />
          <path d="M 420 20 L 420 32 M 420 20 L 408 20" />
          <path d="M 20 340 L 20 328 M 20 340 L 32 340" />
          <path d="M 420 340 L 420 328 M 420 340 L 408 340" />
        </g>
      </svg>

      <figcaption className="mt-1 border-t border-line pt-3 text-[0.78rem] leading-relaxed text-muted">
        Science, evidence and human understanding are considered together — not
        in isolation.
      </figcaption>
    </figure>
  );
}

const circles = [
  { cx: 334, cy: 256, stroke: "#0B709D", fill: "#24B1FA", delay: 0 },
  { cx: 506, cy: 256, stroke: "#9A5700", fill: "#F4940E", delay: 180 },
  { cx: 420, cy: 344, stroke: "#07212E", fill: "#07212E", delay: 360 },
];

export function ClarityDiagram() {
  return (
    <figure className="clarity-figure">
      <svg
        viewBox="0 0 840 570"
        role="img"
        aria-labelledby="clarity-title clarity-desc"
      >
        <title id="clarity-title">
          The intersection of science, evidence and human understanding
        </title>
        <desc id="clarity-desc">
          Three large overlapping circles labelled science, evidence and human
          context meet at a central amber point labelled clarity. A key
          identifies each field.
        </desc>

        <defs>
          <radialGradient id="clarity-core" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#F4940E" stopOpacity="0.34" />
            <stop offset="100%" stopColor="#F4940E" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Instrument scaffold */}
        <g fill="none" stroke="#07212E" strokeOpacity="0.12" strokeWidth="0.7">
          <path d="M 420 18 L 420 44" />
          <path d="M 420 552 L 420 528" />
          <path d="M 62 285 L 92 285" />
          <path d="M 748 285 L 778 285" />
          <circle cx="420" cy="285" r="262" strokeDasharray="1 8" />
        </g>

        <g fill="none" strokeWidth="1">
          {circles.map((circle, index) => (
            <circle
              key={circle.cx}
              cx={circle.cx}
              cy={circle.cy}
              r="188"
              stroke={circle.stroke}
              strokeOpacity="0.7"
              fill={circle.fill}
              fillOpacity={index === 2 ? 0.018 : 0.045}
              className="clarity-draw"
              style={{ "--draw-delay": `${circle.delay}ms` } as React.CSSProperties}
            />
          ))}
        </g>

        {/* Field annotations */}
        <g
          fontFamily="var(--font-display)"
          fontStyle="italic"
          fontSize="23"
          letterSpacing="-0.4"
        >
          <text x="196" y="128" fill="#0B709D" fillOpacity="0.9">
            science
          </text>
          <text x="644" y="128" textAnchor="end" fill="#9A5700" fillOpacity="0.9">
            evidence
          </text>
          <text
            x="420"
            y="512"
            textAnchor="middle"
            fill="#07212E"
            fillOpacity="0.7"
          >
            human context
          </text>
        </g>

        <g fill="none" strokeWidth="1">
          <path d="M 120 104 L 156 104" stroke="#0B709D" strokeOpacity="0.55" />
          <path d="M 684 104 L 720 104" stroke="#9A5700" strokeOpacity="0.55" />
          <path d="M 420 534 L 420 554" stroke="#07212E" strokeOpacity="0.4" />
        </g>

        {/* Clarity point */}
        <circle cx="420" cy="290" r="54" fill="url(#clarity-core)" />
        <circle cx="420" cy="290" r="7" fill="#F4940E" />
        <circle
          cx="420"
          cy="290"
          r="19"
          fill="none"
          stroke="#F4940E"
          strokeOpacity="0.5"
          strokeWidth="0.8"
          strokeDasharray="1.5 4"
        />

        <text
          x="420"
          y="338"
          textAnchor="middle"
          fill="#07212E"
          fontFamily="var(--font-display)"
          fontStyle="italic"
          fontSize="44"
          letterSpacing="-1.4"
        >
          clarity
        </text>
        <text
          x="420"
          y="358"
          textAnchor="middle"
          fill="#566A72"
          fontFamily="var(--font-mono)"
          fontSize="9"
          letterSpacing="2.2"
        >
          IN PRACTICE
        </text>
      </svg>

      <figcaption>
        Clarity is not a fourth discipline. It is what emerges when science,
        evidence and human context are held together — carefully, and without
        false certainty.
      </figcaption>
    </figure>
  );
}

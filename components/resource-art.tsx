type ResourceArtProps = {
  variant: "signal" | "applied" | "watch";
};

const signalField = Array.from({ length: 22 }, (_, index) => {
  const y = 60 + index * 13.4;
  return {
    d: `M 20 ${y.toFixed(1)} C 130 ${y.toFixed(1)}, 220 200, 420 200`,
    opacity: 0.3 - Math.abs(index - 10.5) * 0.016,
  };
});

const appliedDots = Array.from({ length: 48 }, (_, index) => {
  const column = index % 8;
  const row = Math.floor(index / 8);
  return { x: 150 + column * 42, y: 54 + row * 42, key: index };
});

export function ResourceArt({ variant }: ResourceArtProps) {
  if (variant === "signal") {
    return (
      <svg
        viewBox="0 0 600 400"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <radialGradient id="ra-signal-bg" cx="46%" cy="42%" r="72%">
            <stop offset="0%" stopColor="#16485d" />
            <stop offset="62%" stopColor="#0a2a39" />
            <stop offset="100%" stopColor="#04151d" />
          </radialGradient>
          <radialGradient id="ra-signal-core" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#F4940E" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#F4940E" stopOpacity="0" />
          </radialGradient>
        </defs>

        <rect width="600" height="400" fill="url(#ra-signal-bg)" />
        <g stroke="#B9E0F3" strokeOpacity="0.08">
          {Array.from({ length: 9 }, (_, index) => (
            <path key={index} d={`M ${70 + index * 62} 0 L ${70 + index * 62} 400`} />
          ))}
          {Array.from({ length: 6 }, (_, index) => (
            <path key={index} d={`M 0 ${46 + index * 62} L 600 ${46 + index * 62}`} />
          ))}
        </g>

        <g strokeLinecap="round">
          {signalField.map((line, index) => (
            <path
              key={index}
              d={line.d}
              stroke={index === 10 ? "#F4940E" : "#7FCBF1"}
              strokeOpacity={index === 10 ? 0.9 : Math.max(line.opacity, 0.06)}
              strokeWidth={index === 10 ? 1.4 : 0.8}
            />
          ))}
        </g>

        <circle cx="420" cy="200" r="74" fill="url(#ra-signal-core)" />
        <circle
          cx="420"
          cy="200"
          r="24"
          fill="#04151d"
          stroke="#24B1FA"
          strokeOpacity="0.8"
        />
        <circle cx="420" cy="200" r="5.5" fill="#F4940E" />
        <circle
          cx="420"
          cy="200"
          r="52"
          stroke="#24B1FA"
          strokeOpacity="0.25"
          strokeDasharray="1.5 6"
        />
        <circle
          cx="420"
          cy="200"
          r="112"
          stroke="#24B1FA"
          strokeOpacity="0.12"
        />
      </svg>
    );
  }

  if (variant === "applied") {
    return (
      <svg
        viewBox="0 0 600 400"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        aria-hidden="true"
        focusable="false"
      >
        <rect width="600" height="400" fill="#EFE7D9" />

        <g fill="#07212E" fillOpacity="0.16">
          {appliedDots.map((dot) => (
            <circle key={dot.key} cx={dot.x} cy={dot.y} r="1.6" />
          ))}
        </g>

        <g strokeWidth="1">
          <circle
            cx="258"
            cy="188"
            r="118"
            stroke="#0B709D"
            strokeOpacity="0.55"
            fill="#24B1FA"
            fillOpacity="0.05"
          />
          <circle
            cx="344"
            cy="188"
            r="118"
            stroke="#9A5700"
            strokeOpacity="0.55"
            fill="#F4940E"
            fillOpacity="0.04"
          />
          <circle
            cx="300"
            cy="256"
            r="118"
            stroke="#07212E"
            strokeOpacity="0.35"
            fill="#07212E"
            fillOpacity="0.012"
          />
        </g>

        <circle cx="300" cy="212" r="5.2" fill="#F4940E" />
        <circle
          cx="300"
          cy="212"
          r="18"
          stroke="#9A5700"
          strokeOpacity="0.4"
          strokeDasharray="1.5 4"
        />

        <g
          fontFamily="var(--font-display)"
          fontStyle="italic"
          fontSize="34"
          fill="#07212E"
          fillOpacity="0.8"
        >
          <text x="300" y="370" textAnchor="middle">
            context
          </text>
        </g>
        <path d="M 60 370 L 236 370" stroke="#07212E" strokeOpacity="0.2" />
        <path d="M 364 370 L 540 370" stroke="#07212E" strokeOpacity="0.2" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 600 400"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id="ra-watch-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0B709D" />
          <stop offset="100%" stopColor="#07212E" />
        </linearGradient>
      </defs>

      <rect width="600" height="400" fill="url(#ra-watch-bg)" />
      <g stroke="#B9E0F3" strokeOpacity="0.18">
        {[46, 92, 138, 184, 230].map((radius) => (
          <circle key={radius} cx="300" cy="200" r={radius} />
        ))}
      </g>
      <g stroke="#B9E0F3" strokeOpacity="0.3">
        <path d="M 300 14 L 300 386" />
        <path d="M 114 200 L 486 200" />
      </g>

      <circle cx="300" cy="200" r="64" fill="#F7F3EA" fillOpacity="0.06" />
      <circle
        cx="300"
        cy="200"
        r="64"
        stroke="#F7F3EA"
        strokeOpacity="0.6"
      />
      <path
        d="M 286 172 L 334 200 L 286 228 Z"
        fill="#F7F3EA"
        fillOpacity="0.92"
      />

      <circle cx="404" cy="96" r="4" fill="#F4940E" />
      <circle cx="154" cy="314" r="3" fill="#24B1FA" />
    </svg>
  );
}

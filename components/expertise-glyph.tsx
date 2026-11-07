export type GlyphVariant =
  | "converge"
  | "orbit"
  | "wave"
  | "matrix"
  | "prism"
  | "broadcast";

type ExpertiseGlyphProps = {
  variant: GlyphVariant;
  className?: string;
};

const convergeLines = Array.from({ length: 11 }, (_, index) => {
  const y = 18 + index * 8.4;
  return `M 8 ${y.toFixed(1)} C 62 ${y.toFixed(1)}, 96 60, 158 60`;
});

const waveBars = Array.from({ length: 34 }, (_, index) => {
  const height = 12 + Math.abs(Math.sin(index * 0.72)) * 54;
  return { x: 14 + index * 5.1, height };
});

export function ExpertiseGlyph({ variant, className }: ExpertiseGlyphProps) {
  return (
    <svg
      viewBox="0 0 200 120"
      fill="none"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {variant === "converge" && (
        <g strokeLinecap="round">
          {convergeLines.map((d, index) => (
            <path
              key={d}
              d={d}
              stroke="currentColor"
              strokeOpacity={index === 5 ? 0.9 : 0.3}
              strokeWidth={index === 5 ? 1.2 : 0.8}
            />
          ))}
          <circle cx="160" cy="60" r="4" fill="var(--color-ember)" />
          <circle
            cx="160"
            cy="60"
            r="15"
            stroke="currentColor"
            strokeOpacity="0.3"
            strokeWidth="0.8"
            strokeDasharray="1.5 4"
          />
        </g>
      )}

      {variant === "orbit" && (
        <g stroke="currentColor" strokeWidth="0.85">
          <ellipse
            cx="100"
            cy="60"
            rx="82"
            ry="35"
            strokeOpacity="0.55"
            transform="rotate(-17 100 60)"
          />
          <ellipse
            cx="100"
            cy="60"
            rx="82"
            ry="35"
            strokeOpacity="0.28"
            transform="rotate(21 100 60)"
          />
          <circle
            cx="100"
            cy="60"
            r="16"
            strokeOpacity="0.8"
            fill="currentColor"
            fillOpacity="0.05"
          />
          <circle cx="171" cy="38" r="3.6" fill="var(--color-ember)" stroke="none" />
          <circle cx="30" cy="83" r="2.2" fill="currentColor" stroke="none" />
        </g>
      )}

      {variant === "wave" && (
        <g strokeLinecap="round">
          <path
            d="M 8 60 C 28 20, 50 100, 70 60 S 112 20, 132 60 S 172 98, 192 56"
            stroke="currentColor"
            strokeOpacity="0.7"
            strokeWidth="1"
          />
          <path
            d="M 8 60 C 28 20, 50 100, 70 60 S 112 20, 132 60 S 172 98, 192 56"
            stroke="currentColor"
            strokeOpacity="0.16"
            strokeWidth="7"
          />
          <path d="M 8 94 L 192 94" stroke="currentColor" strokeOpacity="0.2" />
          <circle cx="70" cy="60" r="3.4" fill="var(--color-ember)" stroke="none" />
          <circle cx="132" cy="60" r="2.3" fill="currentColor" stroke="none" />
        </g>
      )}

      {variant === "matrix" && (
        <g>
          {Array.from({ length: 40 }, (_, index) => {
            const column = index % 8;
            const row = Math.floor(index / 8);
            const active = index === 19;
            return (
              <rect
                key={index}
                x={22 + column * 20}
                y={14 + row * 23}
                width="7"
                height="7"
                fill={active ? "var(--color-ember)" : "currentColor"}
                fillOpacity={active ? 1 : 0.3}
              />
            );
          })}
          <path
            d="M 25.5 77.5 L 185.5 77.5"
            stroke="var(--color-ember)"
            strokeOpacity="0.5"
            strokeDasharray="2 5"
          />
        </g>
      )}

      {variant === "prism" && (
        <g stroke="currentColor" strokeLinecap="round">
          <path
            d="M 104 16 L 142 104 L 66 104 Z"
            strokeOpacity="0.7"
            fill="currentColor"
            fillOpacity="0.035"
          />
          <path d="M 6 60 L 96 60" strokeOpacity="0.45" />
          <path d="M 108 60 L 192 18" strokeOpacity="0.35" />
          <path d="M 108 60 L 192 60" stroke="#F4940E" strokeOpacity="0.9" />
          <path d="M 108 60 L 192 102" strokeOpacity="0.35" />
          <circle cx="108" cy="60" r="2.8" fill="var(--color-ember)" stroke="none" />
        </g>
      )}

      {variant === "broadcast" && (
        <g strokeLinecap="round">
          {waveBars.map((bar, index) => (
            <path
              key={index}
              d={`M ${bar.x} ${60 - bar.height / 2} L ${bar.x} ${60 + bar.height / 2}`}
              stroke={index === 17 ? "var(--color-ember)" : "currentColor"}
              strokeOpacity={index === 17 ? 1 : 0.38}
              strokeWidth={index === 17 ? 1.6 : 0.9}
            />
          ))}
          <path d="M 8 60 L 192 60" stroke="currentColor" strokeOpacity="0.16" />
          <circle
            cx="100"
            cy="60"
            r="30"
            stroke="currentColor"
            strokeOpacity="0.18"
            strokeDasharray="1 5"
          />
        </g>
      )}
    </svg>
  );
}

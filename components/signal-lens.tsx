import type { CSSProperties } from "react";

const CX = 310;
const CY = 310;

const polar = (radius: number, degrees: number) => {
  const radians = (degrees * Math.PI) / 180;
  return [
    Number((CX + radius * Math.cos(radians)).toFixed(2)),
    Number((CY + radius * Math.sin(radians)).toFixed(2)),
  ] as const;
};

const ticks = Array.from({ length: 96 }, (_, index) => {
  const degrees = index * 3.75;
  const major = index % 8 === 0;
  const [x1, y1] = polar(major ? 260 : 268, degrees);
  const [x2, y2] = polar(280, degrees);
  return { x1, y1, x2, y2, major, key: `tick-${index}` };
});

const signalLines = Array.from({ length: 34 }, (_, index) => {
  const t = index / 33;
  const y0 = Number((92 + t * 436).toFixed(1));
  const y1 = Number((296 + (t - 0.5) * 58).toFixed(1));
  const opacity = Number((0.34 - Math.abs(t - 0.5) * 0.36).toFixed(2));
  return {
    d: `M 18 ${y0} C 118 ${y0}, 210 ${y1}, 276 ${y1}`,
    opacity,
    accent: index === 17,
    key: `signal-${index}`,
    index,
  };
});

const outputRays = Array.from({ length: 13 }, (_, index) => {
  const degrees = -64 + index * 10.6;
  const [x1, y1] = polar(118, degrees);
  const [x2, y2] = polar(246, degrees);
  return { x1, y1, x2, y2, key: `ray-${index}` };
});

const wave = Array.from({ length: 48 }, (_, index) => {
  const x = 22 + index * 5.6;
  const envelope = Math.min(1, index / 12);
  const y =
    CY +
    Math.sin(index * 1.15) * 12 * envelope +
    Math.sin(index * 0.42) * 5 * envelope;
  return `${index === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)}`;
}).join(" ");

const innerRings = [78, 118, 158, 198, 234];

export function SignalLens() {
  return (
    <figure className="lens-figure">
      <div className="lens-stage">
        <svg
          viewBox="0 0 620 620"
          className="lens-svg"
          role="img"
          aria-labelledby="lens-title lens-desc"
        >
          <title id="lens-title">
            Signal resolving into clarity — the practice&apos;s working model
          </title>
          <desc id="lens-desc">
            A dark circular scientific instrument. Fine signal lines and a
            waveform converge through three overlapping translucent fields into a
            single amber point labelled clarity, then radiate outward as ordered
            structure.
          </desc>

          <defs>
            <radialGradient id="lens-disc" cx="34%" cy="26%" r="82%">
              <stop offset="0%" stopColor="#1b566d" />
              <stop offset="44%" stopColor="#0b2f3e" />
              <stop offset="100%" stopColor="#03121a" />
            </radialGradient>
            <radialGradient id="lens-halo" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#F4940E" stopOpacity="0.72" />
              <stop offset="42%" stopColor="#F4940E" stopOpacity="0.24" />
              <stop offset="100%" stopColor="#F4940E" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="lens-blue-halo" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#24B1FA" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#24B1FA" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="lens-arc" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#24B1FA" stopOpacity="0" />
              <stop offset="34%" stopColor="#24B1FA" stopOpacity="0.95" />
              <stop offset="72%" stopColor="#F4940E" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#F4940E" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="lens-field-left" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#24B1FA" stopOpacity="0.22" />
              <stop offset="100%" stopColor="#24B1FA" stopOpacity="0.03" />
            </linearGradient>
            <linearGradient id="lens-field-right" x1="1" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#F4940E" stopOpacity="0.17" />
              <stop offset="100%" stopColor="#F4940E" stopOpacity="0.02" />
            </linearGradient>
            <clipPath id="lens-clip">
              <circle cx={CX} cy={CY} r="250" />
            </clipPath>
            <filter id="lens-soft" x="-40%" y="-40%" width="180%" height="180%">
              <feGaussianBlur stdDeviation="9" />
            </filter>
          </defs>

          {/* Ambient glow behind the instrument */}
          <circle cx={CX} cy={CY} r="292" fill="url(#lens-blue-halo)" />

          {/* Outer orbit system */}
          <g className="lens-rotate-reverse" fill="none">
            <circle
              cx={CX}
              cy={CY}
              r="286"
              stroke="#24B1FA"
              strokeOpacity="0.3"
              strokeWidth="0.7"
              strokeDasharray="1 10"
            />
            <circle
              cx={CX}
              cy={CY}
              r="296"
              stroke="#24B1FA"
              strokeOpacity="0.12"
              strokeWidth="0.6"
            />
            <circle cx={CX} cy="14" r="2.6" fill="#24B1FA" fillOpacity="0.8" stroke="none" />
            <circle cx={CX} cy="606" r="1.7" fill="#F4940E" stroke="none" />
          </g>

          <circle
            cx={CX}
            cy={CY}
            r="250"
            fill="url(#lens-disc)"
            stroke="#24B1FA"
            strokeOpacity="0.32"
            strokeWidth="1"
          />
          <circle
            cx={CX}
            cy={CY}
            r="246"
            fill="none"
            stroke="#B9E0F3"
            strokeOpacity="0.08"
            strokeWidth="1.6"
          />

          <g className="lens-rotate" fill="none">
            {ticks.map((tick) => (
              <line
                key={tick.key}
                x1={tick.x1}
                y1={tick.y1}
                x2={tick.x2}
                y2={tick.y2}
                stroke="#B9E0F3"
                strokeOpacity={tick.major ? 0.5 : 0.17}
                strokeWidth={tick.major ? 1 : 0.6}
              />
            ))}
          </g>

          <g clipPath="url(#lens-clip)">
            {/* Instrument grid */}
            <g fill="none">
              {innerRings.map((radius) => (
                <circle
                  key={`ring-${radius}`}
                  cx={CX}
                  cy={CY}
                  r={radius}
                  stroke="#B9E0F3"
                  strokeOpacity="0.09"
                  strokeWidth="0.6"
                  strokeDasharray={radius > 190 ? "1 6" : undefined}
                />
              ))}
              {outputRays.map((ray) => (
                <line
                  key={ray.key}
                  x1={ray.x1}
                  y1={ray.y1}
                  x2={ray.x2}
                  y2={ray.y2}
                  stroke="#B9E0F3"
                  strokeOpacity="0.11"
                  strokeWidth="0.6"
                />
              ))}
              <path
                d={`M 40 ${CY} L 580 ${CY}`}
                stroke="#B9E0F3"
                strokeOpacity="0.1"
                strokeWidth="0.6"
              />
              <path
                d={`M ${CX} 40 L ${CX} 580`}
                stroke="#B9E0F3"
                strokeOpacity="0.07"
                strokeWidth="0.6"
              />
            </g>

            {/* Three translucent fields */}
            <g strokeWidth="0.95">
              <circle
                cx="268"
                cy="278"
                r="150"
                stroke="#24B1FA"
                strokeOpacity="0.8"
                fill="url(#lens-field-left)"
              />
              <circle
                cx="352"
                cy="278"
                r="150"
                stroke="#F4940E"
                strokeOpacity="0.68"
                fill="url(#lens-field-right)"
              />
              <circle
                cx="310"
                cy="352"
                r="150"
                stroke="#B9E0F3"
                strokeOpacity="0.4"
                fill="#B9E0F3"
                fillOpacity="0.022"
              />
            </g>

            {/* Incoming signal field */}
            <g fill="none" strokeLinecap="round">
              {signalLines.map((line) => (
                <path
                  key={line.key}
                  d={line.d}
                  className="lens-signal"
                  style={{ "--i": line.index } as CSSProperties}
                  stroke={line.accent ? "#F4940E" : "#7FCBF1"}
                  strokeOpacity={line.accent ? 0.9 : Math.max(line.opacity, 0.03)}
                  strokeWidth={line.accent ? 1.4 : 0.8}
                />
              ))}

              <path
                d={wave}
                stroke="#24B1FA"
                strokeOpacity="0.5"
                strokeWidth="1.1"
                strokeDasharray="3 4"
              />
            </g>

            {/* Resolved structure */}
            <g fill="none" strokeLinecap="round">
              <path
                d="M 356 210 L 566 210"
                stroke="#B9E0F3"
                strokeOpacity="0.18"
                strokeWidth="0.7"
              />
              <path
                d="M 356 410 L 566 410"
                stroke="#B9E0F3"
                strokeOpacity="0.18"
                strokeWidth="0.7"
              />
              <path
                d="M 386 186 L 574 186"
                stroke="#B9E0F3"
                strokeOpacity="0.09"
                strokeWidth="0.6"
              />
              <path
                d="M 386 434 L 574 434"
                stroke="#B9E0F3"
                strokeOpacity="0.09"
                strokeWidth="0.6"
              />
              <path
                d="M 372 310 L 588 310"
                stroke="#F4940E"
                strokeOpacity="0.22"
                strokeWidth="0.7"
              />
              {[0, 1, 2, 3].map((index) => (
                <circle
                  key={`node-${index}`}
                  cx={400 + index * 48}
                  cy={310}
                  r={index === 2 ? 2.6 : 1.5}
                  fill={index === 2 ? "#F4940E" : "#B9E0F3"}
                  fillOpacity={index === 2 ? 1 : 0.4}
                  stroke="none"
                />
              ))}
            </g>

            {/* Annotation leaders */}
            <g
              fontFamily="var(--font-mono)"
              fontSize="9.5"
              letterSpacing="2.4"
              fill="#B9E0F3"
              fillOpacity="0.55"
            >
              <path
                d="M 34 232 L 92 232 L 118 260"
                fill="none"
                stroke="#24B1FA"
                strokeOpacity="0.35"
              />
              <text x="34" y="222">
                SIGNAL
              </text>
              <path
                d="M 586 388 L 528 388 L 494 356"
                fill="none"
                stroke="#F4940E"
                strokeOpacity="0.4"
              />
              <text x="586" y="404" textAnchor="end">
                STRUCTURE
              </text>
            </g>
          </g>

          {/* Outer arc + marker */}
          <path
            d="M 154 62 A 294 294 0 0 1 486 108"
            fill="none"
            stroke="url(#lens-arc)"
            strokeOpacity="0.9"
            strokeWidth="1.4"
          />
          <circle cx="486" cy="108" r="3.6" fill="#F4940E" />
          <circle
            cx="486"
            cy="108"
            r="10"
            fill="none"
            stroke="#F4940E"
            strokeOpacity="0.35"
            strokeDasharray="1.5 4"
          />

          {/* Clarity point */}
          <circle cx={CX} cy="302" r="78" fill="url(#lens-halo)" />
          <g className="lens-core">
            <circle
              cx={CX}
              cy="302"
              r="46"
              fill="none"
              stroke="#F4940E"
              strokeOpacity="0.22"
              strokeWidth="0.7"
              strokeDasharray="1 7"
            />
            <circle
              cx={CX}
              cy="302"
              r="26"
              fill="#03121a"
              stroke="#24B1FA"
              strokeOpacity="0.9"
              strokeWidth="1.1"
            />
            <circle
              cx={CX}
              cy="302"
              r="26"
              fill="#24B1FA"
              fillOpacity="0.08"
            />
            <circle cx={CX} cy="302" r="7" fill="#F4940E" />
            <circle cx={CX} cy="302" r="2.4" fill="#FFF6E6" />
            <circle cx={CX} cy="302" r="38" fill="none" stroke="#24B1FA" strokeOpacity="0.18" />
          </g>

          <text
            x={CX}
            y="396"
            textAnchor="middle"
            fill="#F7F3EA"
            fontStyle="italic"
            fontSize="40"
            letterSpacing="-1.4"
          >
            clarity
          </text>
          <text
            x={CX}
            y="418"
            textAnchor="middle"
            fill="#B9E0F3"
            fillOpacity="0.55"
            fontFamily="var(--font-mono)"
            fontSize="8"
            letterSpacing="2.8"
          >
            IN PRACTICE
          </text>
        </svg>
      </div>
    </figure>
  );
}

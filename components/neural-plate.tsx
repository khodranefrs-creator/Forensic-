const CX = 300;
const CY = 362;

type Ring = { radius: number; count: number; offset: number };
type ArtNode = {
  x: number;
  y: number;
  radius: number;
  ring: number;
  index: number;
  orange: boolean;
};
type ArtLink = { d: string; orange: boolean; opacity: number };

const rings: Ring[] = [
  { radius: 52, count: 6, offset: 0.35 },
  { radius: 92, count: 9, offset: 1.02 },
  { radius: 132, count: 12, offset: 0.18 },
  { radius: 172, count: 15, offset: 1.6 },
  { radius: 208, count: 18, offset: 0.72 },
];

function mulberry32(seed: number) {
  let value = seed;
  return () => {
    value |= 0;
    value = (value + 0x6d2b79f5) | 0;
    let t = Math.imul(value ^ (value >>> 15), 1 | value);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const random = mulberry32(104729);

const nodes: ArtNode[] = rings.flatMap((ring, ringIndex) =>
  Array.from({ length: ring.count }, (_, index) => {
    const jitter = (random() - 0.5) * 0.16;
    const angle = ring.offset + (index / ring.count) * Math.PI * 2 + jitter;
    const radius = ring.radius + (random() - 0.5) * 7;
    return {
      x: CX + Math.cos(angle) * radius,
      y: CY + Math.sin(angle) * radius * 0.94,
      radius: 1.15 + random() * 2.1,
      ring: ringIndex,
      index,
      orange: random() > 0.91,
    };
  }),
);

function nodesInRing(ringIndex: number) {
  return nodes.filter((node) => node.ring === ringIndex);
}

function curvedPath(a: ArtNode, b: ArtNode, bend: number) {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const length = Math.hypot(dx, dy) || 1;
  const midX = (a.x + b.x) / 2;
  const midY = (a.y + b.y) / 2;
  const controlX = midX + (-dy / length) * length * 0.16 * bend;
  const controlY = midY + (dx / length) * length * 0.16 * bend;
  return `M ${a.x.toFixed(1)} ${a.y.toFixed(1)} Q ${controlX.toFixed(1)} ${controlY.toFixed(1)} ${b.x.toFixed(1)} ${b.y.toFixed(1)}`;
}

const links: ArtLink[] = [];

for (let ringIndex = 0; ringIndex < rings.length; ringIndex += 1) {
  const current = nodesInRing(ringIndex);
  for (let index = 0; index < current.length; index += 1) {
    if (index % 2 === 0) {
      const next = current[(index + 1) % current.length];
      links.push({
        d: curvedPath(current[index], next, index % 4 === 0 ? 0.65 : -0.5),
        orange: random() > 0.86,
        opacity: 0.2,
      });
    }

    if (ringIndex < rings.length - 1) {
      const outer = nodesInRing(ringIndex + 1);
      let nearest = outer[0];
      let best = Number.POSITIVE_INFINITY;
      for (const candidate of outer) {
        const distance = Math.hypot(
          candidate.x - current[index].x,
          candidate.y - current[index].y,
        );
        if (distance < best) {
          best = distance;
          nearest = candidate;
        }
      }
      links.push({
        d: curvedPath(
          current[index],
          nearest,
          (index + ringIndex) % 2 === 0 ? 0.75 : -0.55,
        ),
        orange: random() > 0.79,
        opacity: 0.24,
      });
    }
  }
}

const innerNodes = nodesInRing(0);
for (let index = 0; index < innerNodes.length; index += 1) {
  if (index % 2 === 0) {
    links.push({
      d: curvedPath(innerNodes[index], { ...innerNodes[0], x: CX, y: CY }, 0.4),
      orange: index === 0,
      opacity: 0.32,
    });
  }
}

const ticks = Array.from({ length: 72 }, (_, index) => {
  const angle = (index / 72) * Math.PI * 2 - Math.PI / 2;
  const outer = index % 6 === 0 ? 235 : 231;
  const inner = index % 6 === 0 ? 224 : 228;
  return {
    x1: CX + Math.cos(angle) * inner,
    y1: CY + Math.sin(angle) * inner,
    x2: CX + Math.cos(angle) * outer,
    y2: CY + Math.sin(angle) * outer,
    strong: index % 6 === 0,
  };
});

const ringLabels = [
  { text: "000", x: CX, y: CY - 248, anchor: "middle" as const },
  { text: "090", x: CX + 252, y: CY + 3, anchor: "start" as const },
  { text: "180", x: CX, y: CY + 256, anchor: "middle" as const },
  { text: "270", x: CX - 252, y: CY + 3, anchor: "end" as const },
];

export function NeuralPlate({ className = "" }: { className?: string }) {
  return (
    <div className={`neural-panel aspect-[4/5] w-full ${className}`}>
      <div className="neural-grid" aria-hidden="true" />

      <svg
        viewBox="0 0 600 750"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <radialGradient id="core-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#F4940E" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#F4940E" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="scan-wedge" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="#24B1FA" stopOpacity="0.11" />
            <stop offset="100%" stopColor="#F4940E" stopOpacity="0.035" />
          </linearGradient>
          <linearGradient id="plate-fade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#B9E0F3" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#B9E0F3" stopOpacity="0.25" />
          </linearGradient>
        </defs>

        {/* faint scan wedge */}
        <path
          d={`M ${CX} ${CY} L ${CX} ${CY - 236} A 236 236 0 0 1 ${CX + 220} ${CY - 84} Z`}
          fill="url(#scan-wedge)"
        />

        {/* outer orbit */}
        <ellipse
          cx={CX}
          cy={CY}
          rx="282"
          ry="196"
          transform={`rotate(-21 ${CX} ${CY})`}
          fill="none"
          stroke="#24B1FA"
          strokeOpacity="0.16"
          strokeWidth="0.8"
          strokeDasharray="2 8"
        />
        <circle cx="64" cy="242" r="3" fill="#F4940E" />

        {/* measurement ring */}
        <circle
          cx={CX}
          cy={CY}
          r="236"
          fill="none"
          stroke="#7FD3FA"
          strokeOpacity="0.3"
          strokeWidth="0.8"
        />
        <circle
          cx={CX}
          cy={CY}
          r="218"
          fill="none"
          stroke="#7FD3FA"
          strokeOpacity="0.12"
          strokeWidth="0.8"
        />

        {ticks.map((tick, index) => (
          <line
            key={`tick-${index}`}
            x1={tick.x1}
            y1={tick.y1}
            x2={tick.x2}
            y2={tick.y2}
            stroke="#B9E0F3"
            strokeOpacity={tick.strong ? 0.48 : 0.22}
            strokeWidth="0.75"
          />
        ))}

        {/* orange emphasis arc */}
        <path
          d={`M ${CX + Math.cos(-1.15) * 247} ${CY + Math.sin(-1.15) * 247} A 247 247 0 0 1 ${CX + Math.cos(-0.15) * 247} ${CY + Math.sin(-0.15) * 247}`}
          fill="none"
          stroke="#F4940E"
          strokeWidth="1.6"
          strokeLinecap="round"
          opacity="0.9"
        />

        {ringLabels.map((label) => (
          <text
            key={label.text}
            x={label.x}
            y={label.y}
            textAnchor={label.anchor}
            fill="#9CC9DD"
            fillOpacity="0.6"
            fontFamily="var(--font-mono)"
            fontSize="7"
            letterSpacing="1.2"
          >
            {label.text}
          </text>
        ))}

        {/* crosshair */}
        <line
          x1={CX - 230}
          y1={CY}
          x2={CX + 230}
          y2={CY}
          stroke="#B9E0F3"
          strokeOpacity="0.14"
          strokeWidth="0.7"
          strokeDasharray="1 7"
        />
        <line
          x1={CX}
          y1={CY - 230}
          x2={CX}
          y2={CY + 230}
          stroke="#B9E0F3"
          strokeOpacity="0.14"
          strokeWidth="0.7"
          strokeDasharray="1 7"
        />

        {/* connections */}
        <g fill="none" strokeLinecap="round">
          {links.map((link, index) => (
            <path
              key={`link-${index}`}
              d={link.d}
              stroke={link.orange ? "#F4940E" : "#69C9F1"}
              strokeOpacity={link.orange ? 0.55 : link.opacity}
              strokeWidth={link.orange ? 0.95 : 0.7}
            />
          ))}

          {links
            .filter((_, index) => index % 19 === 4 || index % 31 === 12)
            .slice(0, 7)
            .map((link, index) => (
              <path
                key={`signal-${index}`}
                d={link.d}
                stroke="#F4940E"
                strokeOpacity="0.8"
                strokeWidth="1.3"
                className={`signal-path ${index % 2 === 0 ? "slow" : ""}`}
              />
            ))}
        </g>

        {/* nodes */}
        <g>
          {nodes.map((node, index) => (
            <g key={`node-${index}`} className="neural-node">
              {node.orange && (
                <>
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r={node.radius + 4}
                    fill="none"
                    stroke="#F4940E"
                    strokeOpacity="0.6"
                    strokeWidth="0.7"
                  />
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r={node.radius + 1}
                    fill="#F4940E"
                    opacity="0.16"
                  />
                </>
              )}
              <circle
                cx={node.x}
                cy={node.y}
                r={node.radius}
                fill={node.orange ? "#F4940E" : "#9ADCF8"}
                fillOpacity={node.orange ? 0.95 : 0.68}
              />
            </g>
          ))}
        </g>

        {/* core */}
        <g>
          <circle cx={CX} cy={CY} r="52" fill="url(#core-glow)" />
          <circle
            cx={CX}
            cy={CY}
            r="10"
            fill="none"
            stroke="#F4940E"
            strokeOpacity="0.9"
            strokeWidth="0.8"
          />
          <circle cx={CX} cy={CY} r="4.2" fill="#F4940E" />
          <circle
            cx={CX}
            cy={CY}
            r="13"
            fill="none"
            stroke="#F4940E"
            strokeWidth="0.8"
            className="neural-node node-pulse"
          />
        </g>

        {/* annotations */}
        <g
          stroke="#9CC9DD"
          strokeOpacity="0.45"
          strokeWidth="0.7"
          fill="none"
        >
          <path d="M 44 104 L 112 104 L 168 190" />
          <path d="M 412 628 L 458 628 L 432 520" />
        </g>
        <text
          x="42"
          y="96"
          fill="#B9E0F3"
          fillOpacity="0.72"
          fontFamily="var(--font-mono)"
          fontSize="7"
          letterSpacing="1.35"
        >
          CORTICAL DYNAMICS
        </text>
        <text
          x="412"
          y="645"
          fill="#B9E0F3"
          fillOpacity="0.72"
          fontFamily="var(--font-mono)"
          fontSize="7"
          letterSpacing="1.35"
        >
          BEHAVIORAL INFERENCE
        </text>

        {/* corner registration marks */}
        <g stroke="#B9E0F3" strokeOpacity="0.38" strokeWidth="0.8">
          <path d="M 24 664 L 24 678 L 38 678" />
          <path d="M 576 664 L 576 678 L 562 678" />
        </g>
      </svg>

      <div className="absolute left-5 top-5 z-10 flex items-center gap-2.5 font-mono text-[0.5rem] uppercase tracking-[0.18em] text-azure/75">
        <span className="inline-block size-1.5 bg-ember" />
        Fig. 01
      </div>
      <div className="absolute right-5 top-5 z-10 font-mono text-[0.5rem] uppercase tracking-[0.18em] text-paper/65">
        Neural field study
      </div>

      <div className="absolute inset-x-0 bottom-0 z-10 border-t border-paper/15 bg-ink/55 px-5 py-4 backdrop-blur-[2px]">
        <p className="font-display text-[1.05rem] italic leading-snug text-paper/95">
          Neural architecture &amp; human behavior
        </p>
        <p className="mt-1 font-mono text-[0.5rem] uppercase tracking-[0.16em] text-paper/65">
          Science / Evidence / Context
        </p>
      </div>
    </div>
  );
}

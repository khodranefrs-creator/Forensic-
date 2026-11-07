type ArcTone = "dark" | "light";

const nodes = [
  { cx: 320, cy: 135, number: "01" },
  { cx: 640, cy: 72, number: "02" },
  { cx: 940, cy: 30, number: "03" },
];

export function EducationArc({ tone = "dark" }: { tone?: ArcTone }) {
  const light = tone === "light";
  const ink = light ? "#0B2D3A" : "#B9E0F3";
  const nodeFill = light ? "#FCFAF5" : "#061C27";
  const arc = light ? "#0B709D" : "#24B1FA";
  const accent = light ? "#9A5700" : "#F4940E";
  const label = light ? "#566A72" : "#B9E0F3";

  return (
    <svg viewBox="0 0 1000 200" fill="none" aria-hidden="true" focusable="false">
      <g stroke={ink} strokeOpacity={light ? 0.14 : 0.1} strokeWidth="0.7">
        {Array.from({ length: 11 }, (_, index) => (
          <path key={index} d={`M ${40 + index * 92} 16 L ${40 + index * 92} 184`} />
        ))}
        <path d="M 40 184 L 964 184" strokeOpacity={light ? 0.22 : 0.16} />
      </g>

      <path
        d="M 40 178 C 166 178, 220 150, 320 135 S 540 92, 640 72 S 862 42, 940 30"
        stroke={arc}
        strokeOpacity="0.18"
        strokeWidth="9"
        strokeLinecap="round"
      />
      <path
        d="M 40 178 C 166 178, 220 150, 320 135 S 540 92, 640 72 S 862 42, 940 30"
        stroke={arc}
        strokeOpacity="0.9"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeDasharray="7 7"
      />

      {nodes.map((node, index) => (
        <g key={node.number}>
          <circle
            cx={node.cx}
            cy={node.cy}
            r={index === 2 ? 22 : 16}
            fill={nodeFill}
            stroke={index === 2 ? accent : arc}
            strokeOpacity={index === 2 ? 1 : 0.75}
            strokeWidth="1.1"
          />
          <circle
            cx={node.cx}
            cy={node.cy}
            r="3.6"
            fill={index === 2 ? accent : arc}
          />
          {index === 2 && (
            <>
              <circle
                cx={node.cx}
                cy={node.cy}
                r="35"
                stroke={accent}
                strokeOpacity="0.3"
                strokeDasharray="1.5 6"
              />
              <circle
                cx={node.cx}
                cy={node.cy}
                r="50"
                stroke={accent}
                strokeOpacity="0.14"
              />
            </>
          )}
        </g>
      ))}

      <g
        fill={label}
        fillOpacity={light ? 0.8 : 0.5}
        fontFamily="var(--font-mono)"
        fontSize="9"
        letterSpacing="1.6"
      >
        <text x="40" y="198">
          SIGNAL
        </text>
        <text x="940" y="198" textAnchor="end">
          CLARITY
        </text>
      </g>
    </svg>
  );
}

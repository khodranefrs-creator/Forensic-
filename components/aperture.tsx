type ApertureProps = {
  className?: string;
};

export function Aperture({ className }: ApertureProps) {
  return (
    <svg
      viewBox="0 0 240 240"
      fill="none"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="120" cy="120" r="116" stroke="currentColor" strokeOpacity="0.5" strokeWidth="0.8" />
      <circle
        cx="120"
        cy="120"
        r="101"
        stroke="currentColor"
        strokeOpacity="0.34"
        strokeWidth="0.7"
        strokeDasharray="1 7"
      />
      <circle cx="120" cy="120" r="74" stroke="currentColor" strokeOpacity="0.24" strokeWidth="0.7" />
      <circle cx="120" cy="120" r="46" stroke="currentColor" strokeOpacity="0.3" strokeWidth="0.7" />

      {Array.from({ length: 24 }, (_, index) => {
        const angle = (index * 15 * Math.PI) / 180;
        const inner = index % 3 === 0 ? 104 : 109;
        const outer = 116;
        return (
          <line
            key={index}
            x1={120 + inner * Math.cos(angle)}
            y1={120 + inner * Math.sin(angle)}
            x2={120 + outer * Math.cos(angle)}
            y2={120 + outer * Math.sin(angle)}
            stroke="currentColor"
            strokeOpacity={index % 3 === 0 ? 0.55 : 0.24}
            strokeWidth="0.7"
          />
        );
      })}

      <circle cx="120" cy="120" r="17" stroke="currentColor" strokeOpacity="0.5" strokeWidth="0.8" />
      <circle cx="120" cy="120" r="4.5" fill="var(--color-ember)" />
      <circle cx="120" cy="16" r="2.8" fill="var(--color-ember)" />
      <path d="M 120 4 L 120 28" stroke="currentColor" strokeOpacity="0.3" />
    </svg>
  );
}

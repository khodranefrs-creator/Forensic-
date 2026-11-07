type ClarityMarkProps = {
  size?: number;
  className?: string;
  accent?: string;
  strokeWidth?: number;
};

/**
 * The recurring brand glyph: three overlapping circles resolving to a single
 * amber point of clarity. Used as a section marker and as a small signifier
 * throughout the site.
 */
export function ClarityMark({
  size = 26,
  className,
  accent = "var(--color-ember)",
  strokeWidth = 1,
}: ClarityMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <circle
        cx="15.6"
        cy="16"
        r="10.4"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        opacity="0.62"
      />
      <circle
        cx="24.4"
        cy="16"
        r="10.4"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        opacity="0.62"
      />
      <circle
        cx="20"
        cy="23.6"
        r="10.4"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        opacity="0.62"
      />
      <circle cx="20" cy="18.5" r="2.15" fill={accent} />
    </svg>
  );
}

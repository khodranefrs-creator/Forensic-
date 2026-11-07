import { ClarityMark } from "@/components/clarity-mark";

type SectionMarkerProps = {
  number: string;
  label: string;
  note?: string;
  dark?: boolean;
};

export function SectionMarker({
  number,
  label,
  note,
  dark = false,
}: SectionMarkerProps) {
  return (
    <div className={`section-marker${dark ? " section-marker--dark" : ""}`}>
      <span className="section-marker__num">{number}</span>
      <ClarityMark
        size={19}
        className="section-marker__mark"
        accent={dark ? "var(--color-ember)" : "var(--color-ember)"}
      />
      <span className="section-marker__label">{label}</span>
      <span className="section-marker__line" aria-hidden="true" />
      {note ? <span className="section-marker__note">{note}</span> : null}
    </div>
  );
}

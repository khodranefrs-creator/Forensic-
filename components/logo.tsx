import Image from "next/image";
import type { CSSProperties } from "react";

type LogoProps = {
  className?: string;
  priority?: boolean;
  sizes?: string;
  style?: CSSProperties;
};

export function Logo({ className, priority, sizes = "220px", style }: LogoProps) {
  return (
    <Image
      src="/weblogo.png"
      alt="The Forensic Neuroscientist"
      width={1738}
      height={788}
      className={className}
      priority={priority}
      sizes={sizes}
      style={style}
    />
  );
}

import leaves1 from "@/assets/leaves-1.png";
import leaves2 from "@/assets/leaves-2.png";

type Variant = "watercolor" | "outline";

interface Props {
  variant?: Variant;
  className?: string;
  /** 0 - 1, default 0.18 */
  opacity?: number;
  /** rotation deg + flip */
  rotate?: number;
  flip?: boolean;
}

export default function LeafDecor({
  variant = "watercolor",
  className = "",
  opacity = 0.22,
  rotate = 0,
  flip = false,
}: Props) {
  const src = variant === "watercolor" ? leaves1 : leaves2;
  return (
    <img
      src={src}
      alt=""
      aria-hidden="true"
      loading="lazy"
      decoding="async"
      fetchPriority="low"
      className={`pointer-events-none select-none absolute object-contain ${className}`}
      style={{
        opacity,
        transform: `rotate(${rotate}deg) ${flip ? "scaleX(-1)" : ""}`,
      }}
    />
  );
}

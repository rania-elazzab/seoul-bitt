import { useMemo } from "react";

import { cn } from "../../lib/utils";

const GLYPHS = ["✦", "✧", "⋆"];

/**
 * Sparkles — scattered twinkling star glyphs behind content.
 * Deterministic pseudo-random (seeded by index) so it never re-shuffles.
 */
function Sparkles({
  className,
  count = 8,
  minSize = 10,
  maxSize = 18,
  color = "#d52b2b",
  ...props
}) {
  const stars = useMemo(() => {
    const mulberry = (seed) => {
      let t = (seed + 0x6d2b79f5) | 0;
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };

    return Array.from({ length: count }, (_, i) => {
      const rand = mulberry(i + 7);
      return {
        id: i,
        glyph: GLYPHS[i % GLYPHS.length],
        top: mulberry(i + 3) * 100,
        left: mulberry(i + 5) * 100,
        size: minSize + mulberry(i + 11) * (maxSize - minSize),
        delay: mulberry(i + 17) * 4,
        duration: 2.2 + mulberry(i + 23) * 3.5,
        opacity: 0.35 + rand * 0.5,
      };
    });
  }, [count, minSize, maxSize]);

  return (
    <div data-slot="sparkles" aria-hidden className={cn("pointer-events-none absolute inset-0", className)} {...props}>
      {stars.map((s) => (
        <span
          key={s.id}
          className="sparkle absolute select-none"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            fontSize: s.size,
            color,
            opacity: s.opacity,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.duration}s`,
          }}
        >
          {s.glyph}
        </span>
      ))}
    </div>
  );
}

export { Sparkles };
import { useRef } from "react";

import { cn } from "../../lib/utils";

/**
 * TiltCard — perspective tilt on pointer move (aceternity-style).
 * Purely CSS transforms, no animation library needed.
 */
function TiltCard({
  className,
  children,
  maxTilt = 8,
  glare = true,
  ...props
}) {
  const frameRef = useRef(null);

  const handlePointerMove = (event) => {
    const el = frameRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;

    const rotY = (px - 0.5) * 2 * maxTilt;
    const rotX = (0.5 - py) * 2 * maxTilt;

    el.style.setProperty("--tilt-x", `${rotX.toFixed(2)}deg`);
    el.style.setProperty("--tilt-y", `${rotY.toFixed(2)}deg`);
    el.style.setProperty("--glow-x", `${px * 100}%`);
    el.style.setProperty("--glow-y", `${py * 100}%`);
  };

  const handlePointerLeave = () => {
    const el = frameRef.current;
    if (!el) return;
    el.style.setProperty("--tilt-x", "0deg");
    el.style.setProperty("--tilt-y", "0deg");
  };

  return (
    <div
      ref={frameRef}
      data-slot="tilt-card"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className={cn(
        "group relative will-change-transform",
        "[transform:perspective(900px)_rotateX(var(--tilt-x,0deg))_rotateY(var(--tilt-y,0deg))]",
        "transition-[transform] duration-200 ease-out",
        className
      )}
      style={{ transformStyle: "preserve-3d" }}
      {...props}
    >
      {children}
      {glare && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-10 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(500px circle at var(--glow-x,50%) var(--glow-y,50%), rgba(255,255,255,0.22), transparent 45%)",
            transform: "translateZ(30px)",
          }}
        />
      )}
    </div>
  );
}

export { TiltCard };
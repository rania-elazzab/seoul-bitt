import { cn } from "../../lib/utils";

/**
 * BorderBeam — a glowing arc that travels around a rounded
 * container. Spins an oversized conic gradient behind content.
 * - `running` renders it active immediately.
 * - otherwise it fades in + spins on parent `.group` hover.
 */
function BorderBeam({
  className,
  running = false,
  size = 240,
  duration = "7s",
  colorFrom = "rgba(213,43,43,0.05)",
  colorTo = "rgba(213,43,43,0.9)",
  ...props
}) {
  return (
    <div
      data-slot="border-beam"
      className={cn(
        "pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-[inherit]",
        running && "is-running",
        className
      )}
      aria-hidden
      {...props}
    >
      <div
        className="absolute left-1/2 top-1/2"
        style={{
          width: size * 2,
          height: size * 2,
          transform: "translate(-50%, -50%)",
        }}
      >
        <div
          className="border-beam-ring"
          style={{
            background: `conic-gradient(transparent 20%, ${colorFrom} 38%, ${colorTo} 46%, transparent 54%)`,
            animationDuration: duration,
            animationPlayState: running ? "running" : "paused",
            opacity: running ? 1 : undefined,
          }}
        />
      </div>
    </div>
  );
}

export { BorderBeam };
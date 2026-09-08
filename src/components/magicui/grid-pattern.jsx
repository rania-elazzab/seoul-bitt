import { cn } from "../../lib/utils";

/**
 * GridPattern — SVG dot or line grid with a radial fade mask.
 */
function GridPattern({
  className,
  spotColor = "#171512",
  spotOpacity = 0.09,
  lineStroke = "#171512",
  lineOpacity = 0.06,
  width = 40,
  height = 40,
  spots = false,
  lines = false,
  mask = true,
  ...props
}) {
  const isGrid = !spots && !lines;
  // default mode renders lines
  const useSpots = spots || (!isGrid && !lines ? false : spots);
  const useLines = lines || isGrid;

  return (
    <svg
      aria-hidden
      className={cn(
        "pointer-events-none absolute size-full",
        mask &&
          "[mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black_10%,transparent_72%)]",
        className
      )}
      {...props}
    >
      {useSpots && (
        <defs>
          <pattern id="seoul-dot-grid" width={width} height={height} patternUnits="userSpaceOnUse">
            <circle cx={width / 2} cy={height / 2} r="1" fill={spotColor} fillOpacity={spotOpacity} />
          </pattern>
        </defs>
      )}
      {useLines && (
        <defs>
          <pattern id="seoul-line-grid" width={width} height={height} patternUnits="userSpaceOnUse">
            <path d={`M ${width} 0 H 0 V ${height}`} fill="none" stroke={lineStroke} strokeOpacity={lineOpacity} />
          </pattern>
        </defs>
      )}
      {useSpots && <rect width="100%" height="100%" fill="url(#seoul-dot-grid)" />}
      {useLines && <rect width="100%" height="100%" fill="url(#seoul-line-grid)" />}
    </svg>
  );
}

export { GridPattern };
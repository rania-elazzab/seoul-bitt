import { Children, forwardRef } from "react";

import { cn } from "../../lib/utils";

/**
 * Marquee — horizontal auto-scrolling strip.
 * Duplicates children so the track can loop seamlessly.
 */
const Marquee = forwardRef(function Marquee(
  { className, children, reverse = false, pauseOnHover = true, duration = "30s", ...props },
  ref
) {
  return (
    <div
      ref={ref}
      data-slot="marquee"
      className={cn("fade-x group flex w-full overflow-hidden", className)}
      style={{ "--marquee-duration": duration }}
      {...props}
    >
      <div
        className={cn(
          "marquee-track flex w-max shrink-0 items-center gap-8 pr-8",
          reverse && "[animation-direction:reverse]",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
      >
        {Children.map(children, (child, i) => (
          <div key={i} className="shrink-0">
            {child}
          </div>
        ))}
        {Children.map(children, (child, i) => (
          <div key={`dup-${i}`} className="shrink-0" aria-hidden>
            {child}
          </div>
        ))}
      </div>
    </div>
  );
});

export { Marquee };
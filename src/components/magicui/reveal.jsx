import { useInView } from "../../hooks/use-in-view";
import { cn } from "../../lib/utils";

/**
 * Reveal — fade/slide-in on scroll via IntersectionObserver.
 * `delay` is applied as a transition-delay in ms.
 */
function Reveal({
  className,
  children,
  delay = 0,
  as: Comp = "div",
  from = "up",
  once = true,
  ...props
}) {
  const { ref, inView } = useInView(once ? {} : { once: false });

  const hidden =
    from === "up"
      ? "-translate-y-6 opacity-0"
      : from === "down"
        ? "translate-y-6 opacity-0"
        : from === "left"
          ? "-translate-x-8 opacity-0"
          : from === "right"
            ? "translate-x-8 opacity-0"
            : from === "zoom"
              ? "scale-95 opacity-0"
              : "opacity-0";

  return (
    <Comp
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out will-change-transform",
        inView ? "translate-x-0 translate-y-0 scale-100 opacity-100" : hidden,
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
      {...props}
    >
      {children}
    </Comp>
  );
}

export { Reveal };
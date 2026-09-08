import { cn } from "../../lib/utils";

/**
 * MovingBorder — animated gradient border around a content box.
 * Accepted `as` prop to render as an anchor when needed.
 */
function MovingBorder({
  className,
  children,
  as: Comp = "div",
  borderRadius = "1rem",
  containerClassName,
  gradientClassName,
  duration = "4s",
  reverse = false,
  ...props
}) {
  return (
    <Comp
      data-slot="moving-border"
      className={cn(
        "group/button relative grid place-items-center",
        className
      )}
      style={{ borderRadius }}
      {...props}
    >
      <div
        aria-hidden
        className={cn(
          "absolute inset-0 z-0 overflow-hidden rounded-[inherit]",
          containerClassName
        )}
      >
        <div
          className={cn(
            "absolute inset-[-100%] p-[2px]",
            "bg-[conic-gradient(transparent_55%,rgba(213,43,43,0.9)_70%,rgba(213,43,43,0.2)_80%,transparent_100%)]",
            reverse && "scale-x-[-1]",
            gradientClassName
          )}
          style={{
            animation: `mb-spin ${duration} linear infinite`,
            animationDirection: reverse ? "reverse" : "normal",
          }}
        />
      </div>
      <div className="relative z-10">{children}</div>
    </Comp>
  );
}

export { MovingBorder };
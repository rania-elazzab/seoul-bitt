import { cn } from "../../lib/utils";

/**
 * ShineButton — primary CTA with a traveling light sweep
 * (aceternity "shimmer" style), transparent text on hover.
 * Pass `href` to render as an anchor.
 */
function ShineButton({ className, children, href, ...props }) {
  const Comp = href ? "a" : "button";
  return (
    <Comp
      href={href}
      data-slot="shine-button"
      className={cn(
        "group relative isolate inline-flex cursor-pointer items-center justify-center gap-3 overflow-hidden",
        "rounded-lg bg-ink px-7 py-4 text-xs font-bold tracking-[0.12em] text-cream uppercase shadow-lg",
        "transition-[background-color,transform,box-shadow] duration-300",
        "hover:-translate-y-0.5 hover:bg-red hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red focus-visible:ring-offset-2 focus-visible:ring-offset-cream",
        className
      )}
      {...props}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 bg-gradient-to-r from-transparent via-white/35 to-transparent transition-all duration-700 ease-out group-hover:left-full group-hover:via-white/50"
        style={{ animation: "shine-sweep 4s ease-in-out infinite" }}
      />
      <span className="relative z-10 inline-flex items-center gap-2.5">
        {children}
      </span>
    </Comp>
  );
}

export { ShineButton };
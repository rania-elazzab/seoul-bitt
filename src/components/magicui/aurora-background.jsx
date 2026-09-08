import { cn } from "../../lib/utils";

/**
 * AuroraBackground — soft radial glows layered behind content.
 * Aceternity-style ambience, kept subtle to match the warm palette.
 */
function AuroraBackground({ className, children, ...props }) {
  return (
    <div
      data-slot="aurora-background"
      className={cn(
        "relative flex w-full flex-col overflow-hidden",
        className
      )}
      {...props}
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="aurora-gradient absolute -top-40 right-0 h-[520px] w-[520px] rounded-full bg-red/8 blur-[120px]" />
        <div className="absolute top-1/3 -left-32 h-[420px] w-[420px] rounded-full bg-ink/6 blur-[110px]" />
        <div className="absolute -bottom-40 left-1/3 h-[460px] w-[460px] rounded-full bg-red/6 blur-[130px]" />
      </div>
      {children}
    </div>
  );
}

export { AuroraBackground };
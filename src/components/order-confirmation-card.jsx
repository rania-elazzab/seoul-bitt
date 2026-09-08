import { Heart } from "lucide-react";
import { useEffect, useState } from "react";

import { cn } from "../lib/utils";

/**
 * OrderConfirmationCard — temporary magical confirmation shown
 * in the center of the screen after a Cart order is placed.
 *
 * Manages its own mount/visibility so the exit animation plays
 * before the DOM node is removed. Automatically closes itself
 * after a few seconds via `onClose`.
 */
function OrderConfirmationCard({ open, onClose }) {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (open) {
      const enterTimer = setTimeout(() => {
        setMounted(true);
        setVisible(true);
      }, 20);
      const autoClose = setTimeout(onClose, 2900);
      return () => {
        clearTimeout(enterTimer);
        clearTimeout(autoClose);
      };
    }

    const hideTimer = setTimeout(() => setVisible(false), 10);
    const exitTimer = setTimeout(() => setMounted(false), 420);
    return () => {
      clearTimeout(hideTimer);
      clearTimeout(exitTimer);
    };
  }, [open, onClose]);

  if (!mounted) return null;

  return (
    <div
      aria-live="polite"
      className="pointer-events-none fixed inset-0 z-[300] flex items-center justify-center p-6"
    >
      <div
        data-slot="order-confirmation-card"
        className={cn(
          "pointer-events-auto relative w-full max-w-sm overflow-hidden rounded-2xl border border-line-soft bg-cream px-8 py-10 text-center",
          "shadow-[0_40px_120px_-24px_rgba(213,43,43,0.45),0_25px_60px_-30px_rgba(23,21,18,0.4)]",
          visible ? "card-anim-in" : "card-anim-out"
        )}
      >
        {/* Sparkles */}
        <span className="sparkle absolute top-5 left-6 text-lg text-red" aria-hidden>✦</span>
        <span className="sparkle absolute right-6 bottom-5 text-lg text-red" style={{ animationDelay: "0.8s" }} aria-hidden>✧</span>
        <span className="sparkle absolute bottom-8 left-9 text-sm text-red/70" style={{ animationDelay: "1.4s" }} aria-hidden>✧</span>
        <span className="sparkle absolute top-8 right-9 text-sm text-red/70" style={{ animationDelay: "0.4s" }} aria-hidden>✦</span>

        {/* Icon */}
        <div className="relative mx-auto mb-6 grid size-[74px] place-items-center rounded-full bg-red text-white">
          <Heart className="size-7 fill-current" strokeWidth={1.5} />
          <span
            className="absolute inset-0 animate-ping rounded-full border border-red/40"
            style={{ animationDuration: "2.4s" }}
            aria-hidden
          />
        </div>

        {/* Copy */}
        <p className="font-mono text-[0.62rem] font-bold tracking-[0.24em] text-red uppercase">
          Seoul-Bit
        </p>
        <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-ink">
          Order Confirmed!
        </h2>
        <p className="mt-2.5 text-sm leading-relaxed text-muted">
          Your delicious order is stacked and on its way. 🥢
        </p>
      </div>
    </div>
  );
}

export { OrderConfirmationCard };
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { forwardRef } from "react";

import { cn } from "../../lib/utils";

const Sheet = DialogPrimitive.Root;
const SheetTrigger = DialogPrimitive.Trigger;
const SheetClose = DialogPrimitive.Close;
const SheetPortal = DialogPrimitive.Portal;

const SheetOverlay = forwardRef(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    data-slot="sheet-overlay"
    className={cn(
      "fixed inset-0 z-50 bg-ink/45 backdrop-blur-[2px]",
      "data-[state=open]:animate-in data-[state=open]:fade-in-0",
      "data-[state=closed]:animate-out data-[state=closed]:fade-out-0",
      className
    )}
    {...props}
  />
));
SheetOverlay.displayName = "SheetOverlay";

const SheetContent = forwardRef(
  ({ className, children, side = "right", ...props }, ref) => {
    const sideClass =
      side === "right"
        ? "inset-y-0 right-0 h-full w-full max-w-md border-l border-line-soft data-[state=open]:slide-in-from-right data-[state=closed]:slide-out-to-right"
        : side === "left"
          ? "inset-y-0 left-0 h-full w-full max-w-md border-r border-line-soft"
          : side === "top"
            ? "inset-x-0 top-0 h-auto border-b border-line-soft"
            : "inset-x-0 bottom-0 h-auto border-t border-line-soft";

    return (
      <SheetPortal>
        <SheetOverlay />
        <DialogPrimitive.Content
          ref={ref}
          data-slot="sheet-content"
          className={cn(
            "fixed z-50 flex flex-col bg-cream p-6 shadow-2xl duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0 dark:bg-neutral-950",
            sideClass,
            className
          )}
          {...props}
        >
          <DialogPrimitive.Close
            data-slot="sheet-close"
            className="absolute top-5 right-5 z-10 grid h-9 w-9 cursor-pointer place-items-center rounded-full border border-ink/15 bg-cream text-ink transition hover:bg-red hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <X size={16} strokeWidth={2.5} />
            <span className="sr-only">Close</span>
          </DialogPrimitive.Close>
          {children}
        </DialogPrimitive.Content>
      </SheetPortal>
    );
  }
);
SheetContent.displayName = "SheetContent";

function SheetHeader({ className, ...props }) {
  return (
    <div
      data-slot="sheet-header"
      className={cn("flex flex-col space-y-1.5 text-center sm:text-left", className)}
      {...props}
    />
  );
}

function SheetFooter({ className, ...props }) {
  return (
    <div
      data-slot="sheet-footer"
      className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)}
      {...props}
    />
  );
}

function SheetTitle({ className, ...props }) {
  return (
    <DialogPrimitive.Title
      data-slot="sheet-title"
      className={cn("font-display text-2xl font-semibold text-ink", className)}
      {...props}
    />
  );
}

function SheetDescription({ className, ...props }) {
  return (
    <DialogPrimitive.Description
      data-slot="sheet-description"
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  );
}

export {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
};
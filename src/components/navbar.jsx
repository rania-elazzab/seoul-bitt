import { Menu, ShoppingBag, X } from "lucide-react";
import { useEffect, useState } from "react";

import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { cn } from "../lib/utils";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Menu", href: "#menu" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

function Logo() {
  return (
    <a
      href="#home"
      className="group flex items-center gap-2.5"
      aria-label="Seoul-Bit home"
    >
      <span className="grid size-8 place-items-center rounded-full bg-ink font-display text-sm font-bold text-cream transition-colors duration-300 group-hover:bg-red">
        S
      </span>
      <span className="font-display text-lg font-semibold tracking-tight text-ink">
        SEOUL<span className="text-red">-</span>BIT
      </span>
    </a>
  );
}

function Navbar({ totalItems, onOpenCart }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-all duration-300",
        scrolled
          ? "border-line-soft bg-cream/85 shadow-[0_1px_24px_rgba(23,21,18,0.06)] backdrop-blur-xl"
          : "border-transparent bg-cream/70 backdrop-blur-md"
      )}
    >
      <div className="mx-auto flex h-[72px] w-full max-w-7xl items-center justify-between px-5 sm:px-8">
        <Logo />

        <nav className="hidden items-center gap-9 md:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative text-[0.72rem] font-semibold tracking-[0.14em] text-ink uppercase transition-colors hover:text-red"
            >
              {link.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-red transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={onOpenCart}
            className="group relative cursor-pointer"
            aria-label={`Open cart, ${totalItems} items`}
          >
            <span className="flex items-center gap-2 rounded-lg bg-ink px-4 py-2.5 text-[0.7rem] font-bold tracking-[0.1em] text-cream uppercase transition-colors hover:bg-red">
              <ShoppingBag size={14} strokeWidth={2.5} />
              Cart
            </span>
            {totalItems > 0 && (
              <Badge
                variant="red"
                className="absolute -top-2 -right-2 size-5 justify-center rounded-full p-0 text-[0.6rem]"
              >
                {totalItems}
              </Badge>
            )}
          </button>

          <Button
            variant="outline"
            size="icon"
            className="md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "grid overflow-hidden transition-all duration-300 md:hidden",
          open ? "grid-rows-[1fr] border-t border-line-soft" : "grid-rows-[0fr]"
        )}
      >
        <nav className="min-h-0" aria-label="Mobile">
          <ul className="flex flex-col px-6 py-4">
            {NAV_LINKS.map((link, i) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between border-b border-line-soft/60 py-4 text-xs font-bold tracking-[0.16em] text-ink uppercase transition-colors last:border-none hover:text-red"
                >
                  <span>{link.label}</span>
                  <span className="text-[0.7rem] text-red">0{i + 1}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export { Navbar };
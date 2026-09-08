import { ArrowUp } from "lucide-react";

import { GridPattern } from "./magicui/grid-pattern";
import { Marquee } from "./magicui/marquee";

const STRIP_WORDS = [
  "김치 · KIMCHI",
  "불고기 · BULGOGI",
  "떡볶이 · TTEOKBOKKI",
  "비빔밥 · BIBIMBAP",
  "김밥 · KIMBAP",
  "잡채 · JAPCHAE",
];

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-cream">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <GridPattern
          className="size-full opacity-40"
          lineStroke="#f5f0e7"
          lineOpacity={0.05}
          width={48}
          height={48}
          mask={false}
        />
        <div className="absolute -bottom-24 left-1/3 size-80 rounded-full bg-red/15 blur-[120px]" />
      </div>

      {/* Marquee wrap */}
      <div className="relative overflow-hidden border-b border-cream/10 py-5">
        <Marquee duration="26s">
          {STRIP_WORDS.map((word) => (
            <span key={word} className="flex items-center gap-8 font-display text-lg font-medium tracking-wide text-cream/80">
              <span>{word}</span>
              <span className="text-red">✧</span>
            </span>
          ))}
        </Marquee>
      </div>

      <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-10 px-5 py-14 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
        {/* Brand */}
        <div>
          <a href="#home" className="group inline-flex items-center gap-2.5">
            <span className="grid size-9 place-items-center rounded-full bg-cream font-display text-sm font-bold text-ink transition-colors group-hover:bg-red group-hover:text-white">
              S
            </span>
            <span className="font-display text-xl font-semibold tracking-tight">
              SEOUL<span className="text-red">-</span>BIT
            </span>
          </a>
          <p className="mt-3 font-mono text-[0.65rem] tracking-[0.22em] text-cream/50 uppercase">
            Seoul on your plate.
          </p>
        </div>

        {/* Center nav */}
        <nav className="flex flex-wrap items-center gap-x-7 gap-y-3" aria-label="Footer">
          {[
            ["Home", "#home"],
            ["Menu", "#menu"],
            ["About", "#about"],
            ["Contact", "#contact"],
          ].map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="text-[0.7rem] font-semibold tracking-[0.14em] text-cream/70 uppercase transition-colors hover:text-red"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="grid size-10 place-items-center rounded-full border border-cream/15 text-cream/80 transition-all hover:border-red hover:bg-red hover:text-white"
          >
            <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" aria-hidden>
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" stroke="none" />
            </svg>
          </a>
          <a
            href="#home"
            aria-label="Back to top"
            className="grid size-10 place-items-center rounded-full bg-cream text-ink transition-colors hover:bg-red hover:text-white"
          >
            <ArrowUp size={16} />
          </a>
        </div>
      </div>

      <div className="relative border-t border-cream/10">
        <p className="mx-auto w-full max-w-7xl px-5 py-5 font-mono text-[0.62rem] tracking-[0.16em] text-cream/40 uppercase sm:px-8">
          © 2026 Seoul-Bit · Made with <span className="text-red">♡</span> in Seoul
        </p>
      </div>
    </footer>
  );
}

export { Footer };
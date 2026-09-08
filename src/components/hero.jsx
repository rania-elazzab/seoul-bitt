import { ArrowDownRight, Sparkle } from "lucide-react";

import { AuroraBackground } from "./magicui/aurora-background";
import { BorderBeam } from "./magicui/border-beam";
import { GridPattern } from "./magicui/grid-pattern";
import { Marquee } from "./magicui/marquee";
import { Reveal } from "./magicui/reveal";
import { ShineButton } from "./magicui/shine-button";
import { Sparkles } from "./magicui/sparkles";
import { TiltCard } from "./magicui/tilt-card";
import { Badge } from "./ui/badge";
import { logo } from "../data/menu";

const HERO_TAGS = [
  "서울 · SEOUL",
  "맛있는 · DELICIOUS",
  "매운 · SPICY",
  "달콤한 · SWEET",
  "거리 음식 · STREET FOOD",
];

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* Background layers */}
      <AuroraBackground className="absolute inset-0" aria-hidden>
        <GridPattern
          className="size-full opacity-70"
          width={56}
          height={56}
          mask
        />
        <Sparkles count={14} className="-left-[5%] top-[12%]" color="#d52b2b" />
      </AuroraBackground>

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 px-5 pt-16 pb-10 sm:px-8 lg:grid-cols-2 lg:gap-10 lg:pt-24 lg:pb-16">
        {/* Copy */}
        <div className="relative order-2 lg:order-1">
          <Reveal>
            <Badge variant="outline" className="mb-7 gap-2 text-[0.66rem]">
              <Sparkle size={12} className="text-red" />
              서 울 · Seoul · Street Flavor
            </Badge>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="font-display text-[15vw] leading-[0.9] font-semibold tracking-[-0.04em] text-ink sm:text-[14vw] lg:text-[6.4rem]">
              Taste
              <br />
              <span className="text-red italic">Seoul.</span>
            </h1>
          </Reveal>

          <Reveal delay={180}>
            <p className="mt-7 max-w-md text-pretty text-base leading-relaxed text-muted">
              Korean comfort food with a bold little Seoul-Bit twist —
              <span className="font-semibold text-ink"> primal, playful and full of flavor.</span>
            </p>
          </Reveal>

          <Reveal delay={260}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <ShineButton href="#menu">
                Explore Menu
                <ArrowDownRight size={15} strokeWidth={2.5} />
              </ShineButton>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 px-1 py-2 text-xs font-bold tracking-[0.16em] text-ink uppercase"
              >
                <span className="border-b border-transparent transition-colors group-hover:border-red group-hover:text-red">
                  Say Hello
                </span>
                <span className="text-red">↗</span>
              </a>
            </div>
          </Reveal>
        </div>

        {/* Visual */}
        <div className="relative order-1 lg:order-2">
          <Reveal from="zoom" delay={120}>
            <TiltCard className="mx-auto w-full max-w-md lg:max-w-none">
              <div className="relative overflow-hidden rounded-2xl">
                <BorderBeam className="size-full" running />
                <div className="relative aspect-square overflow-hidden rounded-xl bg-ink">
                  <img
                    src={logo}
                    alt="Seoul-Bit signature dishes"
                    className="size-full object-cover"
                    draggable={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 grid size-9 place-items-center bg-cream font-mono text-[0.6rem] font-bold text-ink">
                    SEOUL
                  </span>
                </div>
              </div>
            </TiltCard>

            {/* Floating sticker */}
            <div className="float-y absolute -right-2 bottom-8 grid size-28 place-items-center rounded-full bg-red text-center text-[0.68rem] font-bold leading-snug text-white shadow-xl lg:-right-6">
              <span>
                SEOUL
                <br />
                BIT <span className="align-middle">✦</span>
              </span>
            </div>

            {/* Floating price chip */}
            <div className="absolute -top-5 -left-2 rounded-lg border border-line-soft bg-cream/95 px-4 py-2.5 shadow-lg backdrop-blur lg:-left-8">
              <p className="font-mono text-[0.6rem] tracking-widest text-muted uppercase">
                From the wok
              </p>
              <p className="font-display text-lg font-semibold text-ink">
                $8.90 <span className="text-[0.65rem] text-red">HOT</span>
              </p>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Marquee divider */}
      <div className="relative border-y border-line-soft bg-ink py-4">
        <Marquee duration="22s">
          {HERO_TAGS.map((tag) => (
            <span
              key={tag}
              className="flex items-center gap-8 font-display text-sm font-medium tracking-wide text-cream"
            >
              <span>{tag}</span>
              <span className="text-red">✦</span>
            </span>
          ))}
        </Marquee>
      </div>

      {/* Scroll hint */}
      <div className="relative hidden items-center justify-center pt-8 lg:flex">
        <span className="font-mono text-[0.6rem] tracking-[0.2em] text-muted uppercase">
          Scroll to discover
        </span>
        <span className="ml-3 text-red">
          <ArrowDownRight size={14} />
        </span>
      </div>
    </section>
  );
}

export { Hero };
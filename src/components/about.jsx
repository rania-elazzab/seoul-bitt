import { Flame, Heart, Leaf } from "lucide-react";

import { MovingBorder } from "./magicui/moving-border";
import { Reveal } from "./magicui/reveal";
import { Sparkles } from "./magicui/sparkles";
import { Badge } from "./ui/badge";

const PILLARS = [
  {
    icon: Flame,
    title: "Bold flavors",
    text: "Gochujang, garlic and fire — every dish carries the punch of Seoul street food.",
  },
  {
    icon: Heart,
    title: "Made for craving",
    text: "Simple plates, honest ingredients, and that nostalgia-heavy taste of home.",
  },
  {
    icon: Leaf,
    title: "Fresh & fast",
    text: "Prepared to order so it hits your table hot, bright and full of life.",
  },
];

function About() {
  return (
    <section id="about" className="relative overflow-hidden py-24 lg:py-32">
      <Sparkles count={10} className="top-10 right-0" color="#d52b2b" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        {/* Symbol */}
        <Reveal from="left" className="order-2 lg:order-1">
          <div className="relative mx-auto max-w-[340px]">
            <MovingBorder
              borderRadius="1rem"
              duration="5s"
              className="rounded-2xl"
            >
              <div className="grid aspect-square w-full place-items-center rounded-2xl border border-ink/70 bg-cream font-display text-[clamp(3.5rem,9vw,7rem)] font-bold tracking-tight text-ink">
                S-B
              </div>
            </MovingBorder>
            <span className="float-slow absolute -top-8 right-6 text-2xl text-red" style={{ "--rotate": "8deg" }}>
              ✦
            </span>
          </div>
        </Reveal>

        {/* Copy */}
        <div className="order-1 lg:order-2">
          <Reveal>
            <Badge variant="outline" className="mb-6 text-[0.62rem]">
              A little Seoul
            </Badge>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="font-display text-[2.6rem] leading-[1.02] font-semibold tracking-tight text-ink sm:text-6xl lg:text-[5.2rem]">
              Good food.
              <br />
              <span className="text-red italic">Good energy.</span>
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-6 max-w-lg text-pretty text-base leading-relaxed text-muted">
              Seoul-Bit brings the energy of Seoul street food to every bite —
              simple, playful and full of flavor. Han-geul on the plate,
              han-geul in the heart.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {PILLARS.map((pillar, i) => (
              <Reveal key={pillar.title} delay={i * 90}>
                <div className="group rounded-xl border border-line-soft bg-cream-deep/70 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-red/40 hover:shadow-lg">
                  <pillar.icon className="size-5 text-red" strokeWidth={2} />
                  <h3 className="mt-3 font-mono text-[0.68rem] font-bold tracking-[0.14em] text-ink uppercase">
                    {pillar.title}
                  </h3>
                  <p className="mt-1.5 text-[0.78rem] leading-relaxed text-muted">
                    {pillar.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export { About };
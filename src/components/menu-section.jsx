import { Plus, Star } from "lucide-react";
import { useState } from "react";

import { BorderBeam } from "./magicui/border-beam";
import { GridPattern } from "./magicui/grid-pattern";
import { Reveal } from "./magicui/reveal";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { categoryOrder, formatPrice, menu } from "../data/menu";

function FoodCard({ item, onAdd }) {
  return (
    <Reveal
      delay={(item.id % 4) * 70}
      className="group/card relative h-full"
    >
      <article className="relative h-full overflow-hidden rounded-2xl border border-cream/10 bg-ink-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-red/50 hover:shadow-[0_20px_60px_-20px_rgba(213,43,43,0.45)]">
        <BorderBeam running={false} className="opacity-0 transition-opacity duration-300 group-hover/card:opacity-100" />

        {/* Image */}
        <div className="relative aspect-square overflow-hidden">
          <img
            src={item.image}
            alt={item.name}
            className="size-full object-cover transition-transform duration-700 ease-out group-hover/card:scale-105"
            loading="lazy"
            draggable={false}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-soft via-transparent to-transparent opacity-60" />

          <span className="absolute top-3 left-3 grid size-8 place-items-center bg-cream font-mono text-[0.6rem] font-bold text-ink">
            {String(item.id).padStart(2, "0")}
          </span>

          {item.tag && (
            <Badge variant="red" className="absolute top-3 right-3 gap-1 px-2.5 py-0.5 text-[0.58rem] tracking-[0.1em]">
              <Star size={9} className="fill-current" />
              {item.tag}
            </Badge>
          )}

          <span className="absolute bottom-3 left-3 font-mono text-[0.65rem] tracking-[0.2em] text-cream/80">
            KR · {item.id}
          </span>
        </div>

        {/* Info */}
        <div className="p-5">
          <h4 className="font-display text-base font-semibold text-cream">
            {item.name}
          </h4>
          <p className="mt-2 line-clamp-2 min-h-[2.5rem] text-[0.78rem] leading-relaxed text-cream/55">
            {item.desc}
          </p>

          <div className="mt-4 flex items-center justify-between gap-3 border-t border-cream/10 pt-4">
            <span className="font-display text-lg font-semibold text-cream">
              {formatPrice(item.price)}
            </span>
            <button
              type="button"
              onClick={() => onAdd(item)}
              className="inline-flex cursor-pointer items-center gap-1.5 rounded-md border border-red/60 px-3.5 py-2 text-[0.62rem] font-bold tracking-[0.12em] text-red uppercase transition-all duration-200 hover:bg-red hover:text-white"
            >
              <Plus size={12} strokeWidth={3} />
              Add
            </button>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

function MenuSection({ onAdd }) {
  const [activeCategory, setActiveCategory] = useState(categoryOrder[0]);

  return (
    <section id="menu" className="relative overflow-hidden bg-ink text-cream">
      {/* Background */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <GridPattern
          className="size-full opacity-40"
          lineStroke="#f5f0e7"
          lineOpacity={0.05}
          width={64}
          height={64}
          mask
        />
        <div className="absolute -top-40 left-1/4 size-[480px] rounded-full bg-red/10 blur-[140px]" />
        <div className="absolute -bottom-32 right-0 size-[420px] rounded-full bg-red/10 blur-[130px]" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        {/* Heading */}
        <Reveal className="mx-auto max-w-2xl text-center">
          <Badge variant="cream" className="mb-6 text-[0.62rem]">
            ★ The Menu
          </Badge>
          <h2 className="font-display text-[2.2rem] leading-[1] font-semibold tracking-tight text-cream sm:text-6xl lg:text-7xl">
            Pick your <span className="text-red italic">Seoul-Bit.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-md text-pretty text-sm leading-relaxed text-cream/60">
            A small menu. Big flavors. Made to crave —
            from the streets of Seoul to your table.
          </p>
        </Reveal>

        {/* Tabs */}
        <Reveal delay={120}>
          <Tabs
            value={activeCategory}
            onValueChange={setActiveCategory}
            className="mt-12"
          >
            <div className="flex justify-center">
              <TabsList className="border-cream/15 bg-cream/10">
                {categoryOrder.map((category, index) => (
                  <TabsTrigger key={category} value={category} className="text-cream/70 data-[state=active]:bg-cream data-[state=active]:text-ink">
                    <span className="mr-1 font-mono text-[0.58rem] opacity-70">
                      0{index + 1}
                    </span>
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {/* Category content */}
            {categoryOrder.map((category) => (
              <TabsContent
                key={category}
                value={category}
                className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
              >
                {menu[category].map((item) => (
                  <FoodCard key={item.id} item={item} onAdd={onAdd} />
                ))}
              </TabsContent>
            ))}
          </Tabs>
        </Reveal>
      </div>
    </section>
  );
}

export { MenuSection };
import { ArrowUpRight, Clock, Mail, MapPin } from "lucide-react";

import { GridPattern } from "./magicui/grid-pattern";
import { Reveal } from "./magicui/reveal";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

const DETAILS = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@seoul-bit.com",
    href: "mailto:hello@seoul-bit.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Seoul, South Korea",
  },
  {
    icon: Clock,
    label: "Opening hours",
    value: "11:00 — 22:00",
  },
];

function ContactSection({ onSubmit }) {
  return (
    <section id="contact" className="relative overflow-hidden border-t border-line-soft bg-cream py-24 lg:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <GridPattern className="size-full opacity-50" width={56} height={56} spots mask />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl items-start gap-14 px-5 sm:px-8 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        {/* Heading + details */}
        <div>
          <Reveal>
            <Badge variant="outline" className="mb-6 text-[0.62rem]">
              Get in touch
            </Badge>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="font-display text-[2.6rem] leading-[1.02] font-semibold tracking-tight text-ink sm:text-6xl lg:text-[5rem]">
              Let's talk
              <br />
              <span className="text-red italic">Seoul-Bit.</span>
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-6 max-w-md text-pretty text-base leading-relaxed text-muted">
              Have a question, a suggestion, or simply want to say hello?
              Send us a message — we read everything.
            </p>
          </Reveal>

          <div className="mt-10 flex flex-col gap-2.5">
            {DETAILS.map((detail, i) => (
              <Reveal key={detail.label} delay={i * 70}>
                <div className="group flex items-center gap-4 rounded-xl px-3 py-3 transition-colors hover:bg-cream-deep">
                  <span className="grid size-10 shrink-0 place-items-center rounded-lg border border-line-soft text-red">
                    <detail.icon size={16} strokeWidth={2} />
                  </span>
                  <div>
                    <p className="font-mono text-[0.6rem] font-bold tracking-[0.16em] text-muted uppercase">
                      {detail.label}
                    </p>
                    {detail.href ? (
                      <a
                        href={detail.href}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink transition-colors hover:text-red"
                      >
                        {detail.value}
                        <ArrowUpRight size={13} className="opacity-0 transition-opacity group-hover:opacity-100" />
                      </a>
                    ) : (
                      <span className="text-sm font-semibold text-ink">{detail.value}</span>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Form */}
        <Reveal from="right" delay={120}>
          <form onSubmit={onSubmit} className="relative rounded-2xl border border-line-soft bg-cream-deep/60 p-6 shadow-lg sm:p-9">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="contact-name">Your name</Label>
                <Input id="contact-name" name="name" type="text" placeholder="Kim Min-Ji" required className="bg-cream" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contact-email">Your email</Label>
                <Input id="contact-email" name="email" type="email" placeholder="you@example.com" required className="bg-cream" />
              </div>
            </div>

            <div className="mt-5 space-y-2">
              <Label htmlFor="contact-message">Your message</Label>
              <Textarea
                id="contact-message"
                name="message"
                rows={6}
                placeholder="Annyeong! I'd love to hear more about…"
                required
                className="bg-cream"
              />
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
              <p className="font-mono text-[0.6rem] tracking-[0.18em] text-muted uppercase">
                반가워요 · we reply fast
              </p>
              <Button type="submit" className="group gap-2.5 px-7 py-3">
                Send message
                <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

export { ContactSection };
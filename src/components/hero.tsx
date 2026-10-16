import Image from "next/image";
import { ArrowDown } from "@phosphor-icons/react/dist/ssr";
import { site } from "@/lib/site";
import { ButtonLink } from "./button-link";
import { Reveal } from "./reveal";

export function Hero() {
  return (
    <section
      id="top"
      className="mx-auto grid min-h-[calc(100dvh-4rem)] max-w-7xl grid-cols-1 items-center gap-10 px-4 pt-12 pb-16 md:px-8 lg:grid-cols-12 lg:gap-16 lg:pt-16"
    >
      <div className="lg:col-span-7">
        <Reveal trigger="mount">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
            Fractional CTO + Technical Consulting
          </p>
        </Reveal>
        <Reveal trigger="mount" delay={0.08}>
          <h1 className="mt-6 max-w-[17ch] text-4xl leading-[1.05] font-semibold tracking-tighter md:text-5xl lg:text-6xl">
            Technical leadership, without the full-time hire.
          </h1>
        </Reveal>
        <Reveal trigger="mount" delay={0.16}>
          <p className="mt-6 max-w-[46ch] text-lg leading-relaxed text-muted">
            I help startups and growing companies set technical direction, then build alongside
            their teams to ship it.
          </p>
        </Reveal>
        <Reveal trigger="mount" delay={0.24} className="mt-10 flex flex-wrap gap-3">
          <ButtonLink href="#contact">{site.contactLabel}</ButtonLink>
          <ButtonLink href="#approach" variant="ghost">
            How I work
            <ArrowDown size={16} weight="bold" aria-hidden />
          </ButtonLink>
        </Reveal>
      </div>

      <Reveal trigger="mount" delay={0.12} className="lg:col-span-5">
        <div className="relative aspect-[4/3] overflow-hidden bg-surface sm:aspect-[16/10] lg:aspect-[4/5]">
          <Image
            src="/images/hero-structure.jpg"
            alt="Looking up the glass facade of a tall office tower"
            fill
            priority
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover"
          />
        </div>
      </Reveal>
    </section>
  );
}

import Image from "next/image";
import { Compass, Code, MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "./reveal";

const iconProps = { size: 28, weight: "light", "aria-hidden": true } as const;

function Deliverables({ items }: { items: string[] }) {
  return (
    <ul className="mt-8 grid gap-2 font-mono text-[13px] text-muted">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span aria-hidden className="text-accent">
            +
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}

/**
 * Asymmetric three-cell bento: strategy (tinted, widest), execution (surface),
 * discovery (full-width with photography). Collapses to one column below md.
 */
export function Practice() {
  return (
    <section id="practice" className="mx-auto max-w-7xl px-4 py-24 md:px-8 md:py-32">
      <Reveal>
        <h2 className="max-w-[18ch] text-3xl font-semibold tracking-tighter md:text-5xl">
          Where I can help
        </h2>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-12">
        <Reveal className="flex flex-col justify-between bg-accent-soft p-8 md:col-span-7 md:p-12">
          <Compass {...iconProps} className="text-accent" />
          <div className="mt-16">
            <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">Technical strategy</h3>
            <p className="mt-4 max-w-[48ch] leading-relaxed text-muted">
              A clear, practical technical plan tied to your business goals, built from your actual
              constraints, team, and runway.
            </p>
            <Deliverables
              items={["Architecture and platform direction", "Build, buy, or partner decisions", "Hiring plans and team shape"]}
            />
          </div>
        </Reveal>

        <Reveal delay={0.08} className="flex flex-col justify-between bg-surface p-8 md:col-span-5 md:p-12">
          <Code {...iconProps} />
          <div className="mt-16">
            <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">Execution and implementation</h3>
            <p className="mt-4 leading-relaxed text-muted">
              I write code with your team. Scalable systems, clean foundations, and a strategy that
              actually ships.
            </p>
            <Deliverables items={["Hands-on backend and data work", "Infrastructure as code", "Code review and mentoring"]} />
          </div>
        </Reveal>

        <Reveal className="grid grid-cols-1 overflow-hidden border border-line md:col-span-12 md:grid-cols-12">
          <div className="relative aspect-[16/9] md:col-span-5 md:aspect-auto md:min-h-[320px]">
            <Image
              src="/images/horizon.jpg"
              alt="A dark horizon at dusk with a single bright point in the sky"
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-between p-8 md:col-span-7 md:p-12">
            <MagnifyingGlass {...iconProps} />
            <div className="mt-12">
              <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">Opportunity discovery</h3>
              <p className="mt-4 max-w-[52ch] leading-relaxed text-muted">
                Time spent with you and your team to find the real problem first, so the solution is
                grounded in how your business works.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

import { Reveal } from "./reveal";

const steps = [
  {
    title: "Listen",
    body: "We start with your goals, your team, and the problem underneath the problem. Describe the issue before the fix you have in mind.",
  },
  {
    title: "Map",
    body: "I lay out the options, the trade-offs, and a recommendation, in plain language your whole leadership team can weigh in on.",
  },
  {
    title: "Build",
    body: "I work in the codebase alongside your engineers, so the plan becomes production software and not a slide deck.",
  },
  {
    title: "Hand off",
    body: "Documentation, runbooks, and a team that owns the system. The goal is that you need me less over time.",
  },
];

/** Sticky intro on the left, steps scroll past on the right. Stacks below lg. */
export function Approach() {
  return (
    <section id="approach" className="bg-surface">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 py-24 md:px-8 md:py-32 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <h2 className="text-3xl font-semibold tracking-tighter md:text-5xl">How an engagement runs</h2>
              <p className="mt-6 max-w-[42ch] leading-relaxed text-muted">
                Fractional means part-time, not partial. You get senior technical judgement for as
                many days a month as the work needs.
              </p>
            </Reveal>
          </div>
        </div>

        <ol className="grid gap-16 border-l border-line pl-8 md:pl-12 lg:col-span-7">
          {steps.map((step, i) => (
            <Reveal as="li" key={step.title} delay={i * 0.05} className="relative">
              <span aria-hidden className="absolute top-3 -left-[37px] size-2.5 bg-accent md:-left-[53px]" />
              <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">{step.title}</h3>
              <p className="mt-3 max-w-[52ch] text-lg leading-relaxed text-muted">{step.body}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

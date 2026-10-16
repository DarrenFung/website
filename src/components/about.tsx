import { Reveal } from "./reveal";

const focus = [
  { area: "Backend", tools: "Ruby on Rails, PostgreSQL" },
  { area: "Infrastructure", tools: "AWS, Terraform" },
  { area: "Data", tools: "Airflow, EMR, Apache Iceberg, Redshift" },
  { area: "Frontend", tools: "React, React Native" },
];

export function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-4 py-24 md:px-8 md:py-32">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-3">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">About Darren</p>
        </Reveal>
        <div className="lg:col-span-9">
          <Reveal>
            <h2 className="max-w-[30ch] text-2xl leading-snug font-medium tracking-tight text-balance md:text-4xl md:leading-[1.2]">
              I&rsquo;ve spent more than 15 years building software and leading engineering teams.
              <span className="text-muted">
                {" "}
                Most of that time has been deep in backend systems, cloud infrastructure, and data
                platforms, which is where I&rsquo;m most useful.
              </span>
            </h2>
          </Reveal>

          <dl className="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 border-t border-line pt-10 sm:grid-cols-2 lg:grid-cols-4">
            {focus.map((item, i) => (
              <Reveal key={item.area} delay={i * 0.05}>
                <dt className="text-sm font-semibold">{item.area}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-muted">{item.tools}</dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

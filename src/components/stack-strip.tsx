// Logos are self-hosted from Simple Icons (public/logos) and rendered as masks
// so they take the theme's text colour. AWS has no Simple Icons mark, so the
// AWS data stack is named in the About section instead.
const stack = [
  { slug: "rubyonrails", name: "Ruby on Rails" },
  { slug: "postgresql", name: "PostgreSQL" },
  { slug: "terraform", name: "Terraform" },
  { slug: "apacheairflow", name: "Apache Airflow" },
  { slug: "apachespark", name: "Apache Spark" },
  { slug: "docker", name: "Docker" },
  { slug: "kubernetes", name: "Kubernetes" },
  { slug: "githubactions", name: "GitHub Actions" },
  { slug: "python", name: "Python" },
  { slug: "typescript", name: "TypeScript" },
  { slug: "react", name: "React" },
];

function LogoRow({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul className="flex shrink-0 items-center gap-14 pr-14" aria-hidden={hidden || undefined}>
      {stack.map((item) => (
        <li key={item.slug} className="flex items-center gap-3 text-muted">
          <span
            role={hidden ? undefined : "img"}
            aria-label={hidden ? undefined : item.name}
            className="logo-mask block size-7"
            style={{ "--logo": `url(/logos/${item.slug}.svg)` } as React.CSSProperties}
          />
        </li>
      ))}
    </ul>
  );
}

export function StackStrip() {
  return (
    <section aria-labelledby="stack-heading" className="border-y border-line py-10">
      <h2 id="stack-heading" className="sr-only">
        Technologies I work with
      </h2>
      <div className="marquee overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
        <div className="marquee-track flex w-max">
          <LogoRow />
          <LogoRow hidden />
        </div>
      </div>
    </section>
  );
}

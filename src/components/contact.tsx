import { site } from "@/lib/site";
import { CopyEmail } from "./copy-email";
import { Reveal } from "./reveal";

export function Contact() {
  return (
    <section id="contact" className="border-t border-line">
      <div className="mx-auto max-w-7xl px-4 py-24 md:px-8 md:py-36">
        <Reveal>
          <h2 className="max-w-[16ch] text-4xl leading-[1.05] font-semibold tracking-tighter md:text-6xl">
            Tell me what you&rsquo;re building.
          </h2>
          <p className="mt-6 max-w-[52ch] text-lg leading-relaxed text-muted">
            Start with the problem you&rsquo;re facing, then what you want to achieve. I reply within
            one business day.
          </p>
        </Reveal>
        <Reveal delay={0.1} className="mt-14 flex flex-col items-start gap-6 md:flex-row md:items-center md:gap-10">
          <a
            href={`mailto:${site.email}`}
            className="text-3xl font-medium tracking-tighter break-all text-accent underline decoration-1 underline-offset-[10px] transition-colors hover:text-fg md:text-5xl"
          >
            {site.email}
          </a>
          <CopyEmail email={site.email} />
        </Reveal>
      </div>
    </section>
  );
}

import { Reveal } from "./reveal";

export function Quote() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-24 text-center md:px-8 md:py-36">
      <Reveal>
        <figure>
          <blockquote className="text-3xl leading-[1.15] font-medium tracking-tighter text-balance md:text-5xl">
            &ldquo;We must all obey the great law of change. It is the most powerful law of nature.&rdquo;
          </blockquote>
          <figcaption className="mt-8 text-sm text-muted">Edmund Burke, statesman and philosopher</figcaption>
        </figure>
      </Reveal>
    </section>
  );
}

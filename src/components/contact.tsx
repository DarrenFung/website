import { ContactForm } from "./contact-form";
import { Reveal } from "./reveal";

export function Contact() {
  return (
    <section id="contact" className="border-t border-line">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 py-24 md:px-8 md:py-32 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <h2 className="max-w-[14ch] text-4xl leading-[1.05] font-semibold tracking-tighter md:text-6xl">
            Tell me what you&rsquo;re building.
          </h2>
          <p className="mt-6 max-w-[40ch] text-lg leading-relaxed text-muted">
            Send a note and I&rsquo;ll reply within one business day.
          </p>
        </Reveal>
        <Reveal delay={0.1} className="lg:col-span-7">
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}

import { About } from "@/components/about";
import { Approach } from "@/components/approach";
import { Contact } from "@/components/contact";
import { Hero } from "@/components/hero";
import { Practice } from "@/components/practice";
import { Quote } from "@/components/quote";
import { SiteNav } from "@/components/site-nav";
import { StackStrip } from "@/components/stack-strip";
import { site } from "@/lib/site";

export default function Home() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <StackStrip />
        <Practice />
        <Approach />
        <Quote />
        <About />
        <Contact />
      </main>
      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-8 text-sm text-muted md:flex-row md:justify-between md:px-8">
          <p>{site.company}</p>
          <a href="#contact" className="hover:text-fg">
            {site.contactLabel}
          </a>
        </div>
      </footer>
    </>
  );
}

import { nav, site } from "@/lib/site";
import { ButtonLink } from "./button-link";

export function SiteNav() {
  return (
    <header className="sticky top-0 z-30 border-b border-line bg-bg/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-8">
        <a href="#top" className="text-[15px] font-semibold tracking-tight">
          {site.name}
          <span className="font-normal text-muted"> Consulting</span>
        </a>
        <nav aria-label="Primary" className="flex items-center gap-8">
          <ul className="hidden items-center gap-8 text-sm text-muted md:flex">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="transition-colors hover:text-fg">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <ButtonLink href="#contact" className="h-9 px-4">
            {site.contactLabel}
          </ButtonLink>
        </nav>
      </div>
    </header>
  );
}

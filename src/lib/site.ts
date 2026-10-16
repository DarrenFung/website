// Single source of truth for contact details and shared labels.
export const site = {
  name: "Darren Fung",
  company: "Darren Fung Consulting Inc.",
  url: "https://www.darrenfung.ca",
  email: "me@darrenfung.ca",
  title: "Darren Fung | Fractional CTO & Technical Consulting",
  description:
    "Fractional CTO and hands-on technical consulting for startups and growing companies: technical strategy, architecture, and delivery.",
  // One label per intent, used everywhere on the page.
  contactLabel: "Get in touch",
} as const;

export const nav = [
  { href: "#practice", label: "Practice" },
  { href: "#approach", label: "Approach" },
  { href: "#about", label: "About" },
] as const;

# darrenfung.ca

Single-page site for Darren Fung Consulting Inc. Next.js 16 (App Router, static), Tailwind v4, Motion, Phosphor icons, Geist via `next/font`.

## Develop

```bash
yarn
yarn dev
```

`yarn build` produces a fully static page; `yarn lint` runs ESLint.

## Where things live

- `src/lib/site.ts` - email, metadata copy, nav, and the shared "Get in touch" label
- `src/app/globals.css` - colour tokens (light and dark via `prefers-color-scheme`) and the stack marquee
- `src/components/` - one file per section; `reveal.tsx` is the only animation wrapper
- `public/images/` - hero and practice photography (placeholders from picsum.photos, replace with your own)
- `public/logos/` - stack logos from Simple Icons, rendered as masks so they follow the theme
- `next.config.ts` - 308 redirects from the old Squarespace URLs (`/contact-us`, `/about`, `/areas-of-practice`)

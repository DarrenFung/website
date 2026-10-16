import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fully static site: `next build` writes plain HTML/CSS/JS to `out/`, which
  // Netlify serves directly. Redirects live in netlify.toml (unsupported here).
  output: "export",
  // No image server in a static export; images in public/ are pre-sized.
  images: { unoptimized: true },
  reactCompiler: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;

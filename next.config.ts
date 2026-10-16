import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  reactCompiler: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  // The previous Squarespace site linked to these paths. The new site is a
  // single page, so keep the old URLs working by pointing them at sections.
  async redirects() {
    return [
      { source: "/contact-us", destination: "/#contact", permanent: true },
      { source: "/about", destination: "/#about", permanent: true },
      { source: "/areas-of-practice", destination: "/#practice", permanent: true },
    ];
  },
};

export default nextConfig;

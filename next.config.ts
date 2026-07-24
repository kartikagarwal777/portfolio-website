import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Cloudflare Pages serves this portfolio as static assets from the `out`
  // directory, so no Node.js server is required after the build finishes.
  output: "export",

  // Static exports cannot use Next.js' server-side image optimizer. Keeping
  // this enabled makes future `next/image` usage compatible with Pages.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

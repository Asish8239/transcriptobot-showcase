
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,

  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
    root: process.cwd(),
  },

  images: {
    unoptimized: true,
  },

  trailingSlash: true,
};

export default nextConfig;

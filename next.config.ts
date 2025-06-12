import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    domains: ["easydevsolucoes.github.io"],
    unoptimized: true,
  },
  experimental: {
    optimizePackageImports: ["tailwindcss"],
  },
  trailingSlash: true,
};

export default nextConfig;

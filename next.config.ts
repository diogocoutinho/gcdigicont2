import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    domains: ["easydevsolucoes.com.br"],
    unoptimized: true,
  },
  experimental: {
    optimizePackageImports: ["tailwindcss"],
  },
  trailingSlash: true,
};

export default nextConfig;

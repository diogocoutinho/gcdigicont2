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
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  trailingSlash: true,
};

export default nextConfig;

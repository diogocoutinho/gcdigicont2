import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    // Exportação estática: as imagens são servidas como estão (já otimizadas em /public).
    unoptimized: true,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  poweredByHeader: false,
  trailingSlash: true,
};

export default nextConfig;

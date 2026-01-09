import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  eslint: {
    ignoreDuringBuilds: false,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  output: 'standalone',
};

export default nextConfig;

import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  experimental: {
    useCache: true,
  },
};

export default nextConfig;

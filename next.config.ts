import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // output: 'standalone', // Needed for serverless deployment
  // distDir: 'build',
  images: {
    domains: ['firebasestorage.googleapis.com'],
  },
  async redirects() {
    return [
      // Basic redirect
      {
        source: '/',
        destination: '/menu',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;

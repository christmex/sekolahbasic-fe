import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
      {
        protocol: "https",
        hostname: "hoirqrkdgbmvpwutwuwj.supabase.co",
      },
      {
        protocol: 'https',
        hostname: 'filamic.test',
        port: '', // Biarkan kosong kalau standar https
        pathname: '/storage/**',
      },
    ],
  },
};

export default nextConfig;

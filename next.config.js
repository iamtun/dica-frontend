/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.giainhanh.io',
      },
    ],
    domains: ["giainhanh.io"]
  },
}

module.exports = nextConfig

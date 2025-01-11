/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['nextjs.org', 'vercel.com'],
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
};

export default nextConfig;

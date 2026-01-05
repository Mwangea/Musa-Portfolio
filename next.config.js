/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { 
    unoptimized: true,
  },
  // Trailing slash helps with static hosting SEO
  trailingSlash: true,
};

module.exports = nextConfig;

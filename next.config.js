/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'external-content.duckduckgo.com',
      'i.pinimg.com',
      'mir-s3-cdn-cf.behance.net',
      'img.ltwebstatic.com',
      'via.placeholder.com',
      'images.unsplash.com'
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      }
    ],
    unoptimized: true
  },
  // Ensure static assets are properly handled
  assetPrefix: undefined,
  webpack: (config) => {
    return config;
  }
}

module.exports = nextConfig 
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/pilton-festival',
  assetPrefix: '/pilton-festival',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.piltonfestival.co.uk',
        port: '',
        pathname: '/Images/**',
      },
    ],
  },
  experimental: {
    optimizePackageImports: ['@/components'],
  },
}

module.exports = nextConfig
/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  ...(isProd && {
    basePath: '/pilton-festival',
    assetPrefix: '/pilton-festival',
  }),
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
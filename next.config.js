/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  transpilePackages: [
    '@topiko/theme-core',
    '@topiko/ui-blocks'
  ],
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    serverComponentsExternalPackages: [
      'payload',
      '@payloadcms/db-postgres',
      'drizzle-kit',
      'drizzle-orm',
    ],
  },
  // Force all routes to be dynamic
  trailingSlash: false,
  generateStaticParams: false,
  webpack: (config, { isServer, dev }) => {
    // Prevent PayloadCMS from loading during build
    if (isServer && !dev) {
      config.resolve.alias = {
        ...config.resolve.alias,
        'payload': false,
        '@payloadcms/db-postgres': false,
      }
    }
    
    if (isServer) {
      config.externals = [
        ...(config.externals || []), 
        'drizzle-kit',
        'esbuild'
      ]
    }
    return config
  },
};

module.exports = nextConfig;
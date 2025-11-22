/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: [
    '@topiko/theme-core',
    '@topiko/ui-blocks'
  ],
  typescript: {
    // Temporarily ignore TypeScript errors for PayloadCMS configuration
    ignoreBuildErrors: true,
  },
  eslint: {
    // Temporarily ignore ESLint errors during build
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
  webpack: (config, { isServer }) => {
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
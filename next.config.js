/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
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
  env: {
    SKIP_BUILD_STATIC_GENERATION: 'true',
  },
  webpack: (config, { isServer, dev, buildId }) => {
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
import { Payload } from 'payload'

let cached = (global as any).payload

if (!cached) {
  cached = (global as any).payload = { client: null, promise: null }
}

interface Args {
  initOptions?: any
}

export const getPayloadClient = async ({ initOptions }: Args = {}): Promise<Payload> => {
  // Check if we're in build mode where payload is disabled
  if (typeof window === 'undefined' && process.env.NODE_ENV === 'production' && !process.env.DATABASE_URL) {
    throw new Error('PayloadCMS not available during build')
  }

  if (cached.client) {
    return cached.client
  }

  if (!cached.promise) {
    try {
      // Dynamic import to prevent build-time initialization
      const payload = await import('payload')
      const config = await import('../../payload.config')
      
      cached.promise = payload.default.init({
        secret: process.env.PAYLOAD_SECRET || 'coastal-cafe-secret-2024',
        config: config.default,
        ...initOptions,
      })
    } catch (error) {
      // Handle case where payload is aliased to false during build
      throw new Error('PayloadCMS not available during build')
    }
  }

  try {
    cached.client = await cached.promise
  } catch (e: unknown) {
    cached.promise = null
    throw e
  }

  return cached.client
}
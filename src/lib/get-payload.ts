import payload, { Payload } from 'payload'
import config from '../../payload.config'

let cached = (global as any).payload

if (!cached) {
  cached = (global as any).payload = { client: null, promise: null }
}

interface Args {
  initOptions?: Parameters<typeof payload.init>[0]
}

export const getPayloadClient = async ({ initOptions }: Args = {}): Promise<Payload> => {
  // Skip PayloadCMS initialization during build if no real database URL
  if (!process.env.DATABASE_URL || process.env.DATABASE_URL.includes('localhost')) {
    throw new Error('Database not configured for build environment')
  }

  if (cached.client) {
    return cached.client
  }

  if (!cached.promise) {
    cached.promise = payload.init({
      secret: process.env.PAYLOAD_SECRET || 'coastal-cafe-secret-2024',
      config,
      ...initOptions,
    })
  }

  try {
    cached.client = await cached.promise
  } catch (e: unknown) {
    cached.promise = null
    throw e
  }

  return cached.client
}
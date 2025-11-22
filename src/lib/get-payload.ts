import { Payload } from 'payload'

let cached = (global as any).payload

if (!cached) {
  cached = (global as any).payload = { client: null, promise: null }
}

interface Args {
  initOptions?: any
}

export const getPayloadClient = async ({ initOptions }: Args = {}): Promise<Payload> => {
  if (cached.client) {
    return cached.client
  }

  if (!cached.promise) {
    // Dynamic import to prevent build-time initialization
    const payload = await import('payload')
    const config = await import('../../payload.config')
    
    cached.promise = payload.default.init({
      secret: process.env.PAYLOAD_SECRET || 'coastal-cafe-secret-2024',
      config: config.default,
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
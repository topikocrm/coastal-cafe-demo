import { getPayloadClient } from '../../../lib/get-payload'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const payload = await getPayloadClient()
    
    // Test database connection and get counts
    const [heroCount, menuCount, featuresCount, contactCount] = await Promise.all([
      payload.count({ collection: 'coastal-cafe-hero' }),
      payload.count({ collection: 'coastal-cafe-menu' }),
      payload.count({ collection: 'coastal-cafe-features' }),
      payload.count({ collection: 'coastal-cafe-contact' }),
    ])

    const siteSettings = await payload.findGlobal({
      slug: 'site-settings',
    })

    return NextResponse.json({
      status: 'healthy',
      timestamp: new Date().toISOString(),
      database: {
        connected: true,
        collections: {
          'coastal-cafe-hero': heroCount.totalDocs,
          'coastal-cafe-menu': menuCount.totalDocs,
          'coastal-cafe-features': featuresCount.totalDocs,
          'coastal-cafe-contact': contactCount.totalDocs,
        },
        siteSettings: siteSettings ? 'configured' : 'default',
      },
      environment: {
        nodeEnv: process.env.NODE_ENV,
        hasDatabase: !!process.env.DATABASE_URL,
        hasPayloadSecret: !!process.env.PAYLOAD_SECRET,
      },
    })
  } catch (error) {
    console.error('Status check error:', error)
    return NextResponse.json(
      {
        status: 'error',
        timestamp: new Date().toISOString(),
        database: {
          connected: false,
          error: error instanceof Error ? error.message : 'Unknown error',
        },
        environment: {
          nodeEnv: process.env.NODE_ENV,
          hasDatabase: !!process.env.DATABASE_URL,
          hasPayloadSecret: !!process.env.PAYLOAD_SECRET,
        },
      },
      { status: 500 }
    )
  }
}
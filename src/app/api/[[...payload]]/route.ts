import { getPayloadClient } from '../../../lib/get-payload'
import { NextRequest, NextResponse } from 'next/server'

// This is the main API route that handles all PayloadCMS requests
export async function GET(
  request: NextRequest,
  { params }: { params: { payload: string[] } }
) {
  const payload = await getPayloadClient()
  const { searchParams } = new URL(request.url)
  
  // Handle different API endpoints
  const route = params.payload?.join('/') || ''
  
  try {
    switch (route) {
      case 'collections/coastal-cafe-hero':
        const heroData = await payload.find({
          collection: 'coastal-cafe-hero',
          limit: 1,
        })
        return NextResponse.json(heroData)
        
      case 'collections/coastal-cafe-menu':
        const menuData = await payload.find({
          collection: 'coastal-cafe-menu',
          limit: 50,
          where: {
            available: {
              equals: true,
            },
          },
          sort: 'category',
        })
        return NextResponse.json(menuData)
        
      case 'collections/coastal-cafe-features':
        const featuresData = await payload.find({
          collection: 'coastal-cafe-features',
          limit: 10,
          sort: 'order',
        })
        return NextResponse.json(featuresData)
        
      case 'collections/coastal-cafe-contact':
        const contactData = await payload.find({
          collection: 'coastal-cafe-contact',
          limit: 1,
        })
        return NextResponse.json(contactData)
        
      case 'globals/site-settings':
        const siteSettings = await payload.findGlobal({
          slug: 'site-settings',
        })
        return NextResponse.json(siteSettings)
        
      default:
        return NextResponse.json(
          { error: 'Endpoint not found' },
          { status: 404 }
        )
    }
  } catch (error) {
    console.error('PayloadCMS API Error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function POST(
  request: NextRequest,
  { params }: { params: { payload: string[] } }
) {
  const payload = await getPayloadClient()
  const route = params.payload?.join('/') || ''
  
  try {
    const body = await request.json()
    
    // Handle POST requests for creating new documents
    switch (route) {
      case 'collections/coastal-cafe-menu':
        const newMenuItem = await payload.create({
          collection: 'coastal-cafe-menu',
          data: body,
        })
        return NextResponse.json(newMenuItem)
        
      case 'collections/coastal-cafe-features':
        const newFeature = await payload.create({
          collection: 'coastal-cafe-features',
          data: body,
        })
        return NextResponse.json(newFeature)
        
      default:
        return NextResponse.json(
          { error: 'POST endpoint not found' },
          { status: 404 }
        )
    }
  } catch (error) {
    console.error('PayloadCMS API POST Error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
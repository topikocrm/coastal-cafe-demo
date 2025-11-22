import { NextRequest } from 'next/server'
import { getPayloadClient } from '../../../../lib/get-payload'

// PayloadCMS API route handler
export async function GET(
  req: NextRequest,
  { params }: { params: { slug: string[] } }
): Promise<Response> {
  const { slug } = params
  const searchParams = req.nextUrl.searchParams
  
  try {
    const payload = await getPayloadClient()
    
    // Handle different API endpoints
    if (slug[0] === 'admin') {
      // Admin interface requests
      return new Response('Admin interface', { 
        status: 200,
        headers: { 'Content-Type': 'text/html' }
      })
    }
    
    if (slug[0] === 'collections') {
      // Collection API requests
      const collection = slug[1]
      const operation = slug[2] || 'find'
      
      switch (operation) {
        case 'find':
          const docs = await payload.find({
            collection,
            limit: parseInt(searchParams.get('limit') || '10'),
            page: parseInt(searchParams.get('page') || '1'),
          })
          return Response.json(docs)
          
        case 'findByID':
          const id = slug[3]
          const doc = await payload.findByID({
            collection,
            id,
          })
          return Response.json(doc)
          
        default:
          return Response.json({ error: 'Invalid operation' }, { status: 400 })
      }
    }
    
    return Response.json({ error: 'Invalid API endpoint' }, { status: 404 })
  } catch (error) {
    console.error('Payload API Error:', error)
    return Response.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function POST(
  req: NextRequest,
  { params }: { params: { slug: string[] } }
): Promise<Response> {
  const { slug } = params
  
  try {
    const payload = await getPayloadClient()
    const body = await req.json()
    
    if (slug[0] === 'collections') {
      const collection = slug[1]
      
      const doc = await payload.create({
        collection,
        data: body,
      })
      
      return Response.json(doc)
    }
    
    return Response.json({ error: 'Invalid API endpoint' }, { status: 404 })
  } catch (error) {
    console.error('Payload API Error:', error)
    return Response.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: { slug: string[] } }
): Promise<Response> {
  const { slug } = params
  
  try {
    const payload = await getPayloadClient()
    const body = await req.json()
    
    if (slug[0] === 'collections') {
      const collection = slug[1]
      const id = slug[2]
      
      const doc = await payload.update({
        collection,
        id,
        data: body,
      })
      
      return Response.json(doc)
    }
    
    return Response.json({ error: 'Invalid API endpoint' }, { status: 404 })
  } catch (error) {
    console.error('Payload API Error:', error)
    return Response.json({ error: 'Internal server error' }, { status: 500 })
  }
}
import { Metadata } from 'next'

// Simple admin redirect page
export default function AdminPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="text-6xl mb-4">🏗️</div>
        <h1 className="text-2xl font-semibold mb-4">Coastal Café CMS</h1>
        <p className="text-gray-600 mb-6">Content Management System</p>
        <div className="space-y-2">
          <p className="text-sm text-gray-500">
            This page will be configured to show the PayloadCMS admin interface.
          </p>
          <p className="text-sm text-gray-500">
            For now, access the CMS through the API routes.
          </p>
        </div>
        <div className="mt-6 space-x-4">
          <a 
            href="/test" 
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            🧪 Test CMS Integration
          </a>
          <a 
            href="/" 
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            🌊 View Website
          </a>
        </div>
      </div>
    </div>
  )
}

export const metadata: Metadata = {
  title: 'Coastal Café CMS',
  description: 'Content management system for Coastal Café & Bistro',
}
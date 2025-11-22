import { Metadata } from 'next'

// Force dynamic rendering
export const dynamic = 'force-dynamic'

// PayloadCMS Admin Interface
export default function AdminPage() {
  return (
    <div className="min-h-screen">
      {/* This will be replaced by the actual PayloadCMS admin when properly configured */}
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-2xl mx-auto text-center p-8">
          <div className="text-6xl mb-6">🏗️</div>
          <h1 className="text-3xl font-bold mb-4 text-gray-800">Coastal Café CMS</h1>
          <p className="text-xl text-gray-600 mb-8">Content Management System</p>
          
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
            <div className="flex items-start">
              <div className="text-yellow-600 text-2xl mr-4">⚠️</div>
              <div className="text-left">
                <h3 className="font-semibold text-yellow-800 mb-2">PayloadCMS Admin Configuration</h3>
                <p className="text-yellow-700 text-sm">
                  The PayloadCMS admin interface needs to be properly configured for production. 
                  For now, you can manage content through the test interface and API endpoints.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-semibold text-gray-800 mb-2">🌊 Website</h3>
              <p className="text-gray-600 text-sm mb-4">
                View the beautiful coastal café website
              </p>
              <a 
                href="/" 
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 text-sm"
              >
                View Website
              </a>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-semibold text-gray-800 mb-2">🔧 Development</h3>
              <p className="text-gray-600 text-sm mb-4">
                CMS functionality temporarily disabled for deployment
              </p>
              <div className="bg-gray-300 text-gray-600 px-4 py-2 rounded text-sm cursor-not-allowed">
                CMS Coming Soon
              </div>
            </div>
          </div>

          <div className="text-sm text-gray-500">
            <p className="mb-2">
              <strong>Status:</strong> Static website deployed successfully ✅
            </p>
            <p className="mb-2">
              <strong>CMS:</strong> Temporarily disabled for build compatibility
            </p>
            <p>
              <strong>Next Steps:</strong> CMS will be re-enabled after successful deployment
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export const metadata: Metadata = {
  title: 'Coastal Café CMS',
  description: 'Content management system for Coastal Café & Bistro',
}
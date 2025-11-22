'use client'

import { useState, useEffect } from 'react'

interface TestData {
  hero: any
  menu: any[]
  features: any[]
  contact: any
  siteSettings: any
  status: any
}

export default function TestPage() {
  const [data, setData] = useState<TestData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchTestData() {
      try {
        // Test API endpoints
        const [statusRes, heroRes, menuRes, featuresRes, contactRes, settingsRes] = await Promise.all([
          fetch('/api/status'),
          fetch('/api/collections/coastal-cafe-hero'),
          fetch('/api/collections/coastal-cafe-menu'),
          fetch('/api/collections/coastal-cafe-features'),
          fetch('/api/collections/coastal-cafe-contact'),
          fetch('/api/globals/site-settings'),
        ])

        const [status, hero, menu, features, contact, siteSettings] = await Promise.all([
          statusRes.json(),
          heroRes.json(),
          menuRes.json(),
          featuresRes.json(),
          contactRes.json(),
          settingsRes.json(),
        ])

        setData({
          status,
          hero: hero.docs?.[0] || hero,
          menu: menu.docs || [],
          features: features.docs || [],
          contact: contact.docs?.[0] || contact,
          siteSettings,
        })
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error')
      } finally {
        setLoading(false)
      }
    }

    fetchTestData()
  }, [])

  const seedDatabase = async () => {
    try {
      setLoading(true)
      const response = await fetch('/api/seed', { method: 'POST' })
      const result = await response.json()
      
      if (result.success) {
        alert('Database seeded successfully!')
        window.location.reload()
      } else {
        alert('Error seeding database: ' + result.error)
      }
    } catch (err) {
      alert('Error seeding database: ' + (err instanceof Error ? err.message : 'Unknown error'))
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🌊</div>
          <h1 className="text-2xl font-semibold mb-2">Loading Test Data...</h1>
          <p className="text-gray-600">Testing CMS integration</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center text-red-600">
          <div className="text-6xl mb-4">❌</div>
          <h1 className="text-2xl font-semibold mb-2">Error</h1>
          <p>{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
          >
            Retry
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            🧪 CMS Integration Test
          </h1>
          <p className="text-gray-600">
            Testing PayloadCMS integration and dynamic content fetching
          </p>
          
          <div className="mt-4 flex gap-4">
            <a 
              href="/admin" 
              target="_blank"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              🏗️ Open CMS Admin
            </a>
            <a 
              href="/" 
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              🌊 View Website
            </a>
            <button 
              onClick={seedDatabase}
              className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
            >
              🌱 Seed Database
            </button>
          </div>
        </header>

        {/* Status Check */}
        <section className="mb-8 bg-white rounded-lg p-6 shadow">
          <h2 className="text-xl font-semibold mb-4">📊 System Status</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className={`p-3 rounded ${data?.status.status === 'healthy' ? 'bg-green-100' : 'bg-red-100'}`}>
              <div className="text-sm font-semibold">Database</div>
              <div className={data?.status.database?.connected ? 'text-green-600' : 'text-red-600'}>
                {data?.status.database?.connected ? '✅ Connected' : '❌ Disconnected'}
              </div>
            </div>
            <div className="p-3 rounded bg-blue-100">
              <div className="text-sm font-semibold">Environment</div>
              <div className="text-blue-600">{data?.status.environment?.nodeEnv}</div>
            </div>
            <div className="p-3 rounded bg-purple-100">
              <div className="text-sm font-semibold">Hero Items</div>
              <div className="text-purple-600">{data?.status.database?.collections?.['coastal-cafe-hero'] || 0}</div>
            </div>
            <div className="p-3 rounded bg-orange-100">
              <div className="text-sm font-semibold">Menu Items</div>
              <div className="text-orange-600">{data?.status.database?.collections?.['coastal-cafe-menu'] || 0}</div>
            </div>
          </div>
        </section>

        {/* Hero Data */}
        <section className="mb-8 bg-white rounded-lg p-6 shadow">
          <h2 className="text-xl font-semibold mb-4">🌊 Hero Content</h2>
          {data?.hero ? (
            <div>
              <h3 className="font-semibold text-lg">{data.hero.title}</h3>
              <p className="text-gray-600 mb-2">{data.hero.subtitle}</p>
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                CTA: {data.hero.ctaText} → {data.hero.ctaUrl}
              </span>
            </div>
          ) : (
            <p className="text-gray-500">No hero content found</p>
          )}
        </section>

        {/* Menu Data */}
        <section className="mb-8 bg-white rounded-lg p-6 shadow">
          <h2 className="text-xl font-semibold mb-4">🍽️ Menu Items ({data?.menu?.length || 0})</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {data?.menu?.map((item, index) => (
              <div key={index} className="border rounded p-3">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold">{item.name}</h3>
                  <span className="text-green-600 font-bold">${item.price}</span>
                </div>
                <p className="text-gray-600 text-sm mb-2">{item.description}</p>
                <div className="flex gap-2 text-xs">
                  <span className="bg-gray-100 px-2 py-1 rounded">{item.category}</span>
                  {item.featured && <span className="bg-yellow-100 px-2 py-1 rounded">⭐ Featured</span>}
                  {item.dietary?.map((diet: string) => (
                    <span key={diet} className="bg-green-100 px-2 py-1 rounded">{diet}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Features Data */}
        <section className="mb-8 bg-white rounded-lg p-6 shadow">
          <h2 className="text-xl font-semibold mb-4">⭐ Features ({data?.features?.length || 0})</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {data?.features?.map((feature, index) => (
              <div key={index} className="text-center p-4 border rounded">
                <div className="text-3xl mb-2">{feature.icon}</div>
                <h3 className="font-semibold mb-1">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Data */}
        <section className="mb-8 bg-white rounded-lg p-6 shadow">
          <h2 className="text-xl font-semibold mb-4">📞 Contact Info</h2>
          {data?.contact ? (
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <strong>Phone:</strong> {data.contact.phone}<br />
                <strong>Email:</strong> {data.contact.email}
              </div>
              <div>
                <strong>Address:</strong><br />
                <span className="whitespace-pre-line">{data.contact.address}</span>
              </div>
              <div className="md:col-span-2">
                <strong>Hours:</strong><br />
                <span className="whitespace-pre-line">{data.contact.hours}</span>
              </div>
            </div>
          ) : (
            <p className="text-gray-500">No contact info found</p>
          )}
        </section>

        {/* Site Settings */}
        <section className="mb-8 bg-white rounded-lg p-6 shadow">
          <h2 className="text-xl font-semibold mb-4">⚙️ Site Settings</h2>
          {data?.siteSettings ? (
            <div>
              <p><strong>Site Name:</strong> {data.siteSettings.siteName}</p>
              <p><strong>Tagline:</strong> {data.siteSettings.tagline}</p>
              {data.siteSettings.socialMedia && (
                <div className="mt-2">
                  <strong>Social Media:</strong>
                  <div className="flex gap-2 mt-1">
                    {Object.entries(data.siteSettings.socialMedia).map(([platform, url]) => (
                      url && (
                        <a
                          key={platform}
                          href={url as string}
                          className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {platform}
                        </a>
                      )
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <p className="text-gray-500">No site settings found</p>
          )}
        </section>
      </div>
    </div>
  )
}
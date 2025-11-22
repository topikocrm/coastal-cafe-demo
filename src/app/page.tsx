import HeroSection from '../components/HeroSection'
import FeaturesSection from '../components/FeaturesSection'
import MenuSection from '../components/MenuSection'
import ContactSection from '../components/ContactSection'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

// Type definitions for our CMS content
interface HeroContent {
  id: string
  title: string
  subtitle: string
  ctaText: string
  ctaUrl: string
  backgroundImage?: {
    url: string
    alt: string
  }
}

interface MenuItem {
  id: string
  name: string
  description: string
  price: number
  category: string
  dietary: string[]
  available: boolean
  featured: boolean
  image?: {
    url: string
    alt: string
  }
}

interface Feature {
  id: string
  title: string
  description: string
  icon: string
  order: number
}

interface ContactInfo {
  id: string
  phone: string
  email: string
  address: string
  hours: string
  mapUrl?: string
}

interface SiteSettings {
  siteName: string
  tagline: string
  logo?: {
    url: string
    alt: string
  }
  socialMedia: {
    facebook?: string
    instagram?: string
    twitter?: string
  }
}

async function getContentFromCMS() {
  // Try to load real CMS content at runtime
  if (typeof window === 'undefined' && process.env.DATABASE_URL) {
    try {
      const { getPayloadClient } = await import('../lib/get-payload')
      const payload = await getPayloadClient()

      // Fetch real content from CMS
      const [heroData, menuData, featuresData, contactData, siteSettings] = await Promise.all([
        payload.find({ collection: 'coastal-cafe-hero', limit: 1 }),
        payload.find({ collection: 'coastal-cafe-menu', limit: 50, where: { available: { equals: true } }, sort: 'category' }),
        payload.find({ collection: 'coastal-cafe-features', limit: 10, sort: 'order' }),
        payload.find({ collection: 'coastal-cafe-contact', limit: 1 }),
        payload.findGlobal({ slug: 'site-settings' }),
      ])

      return {
        hero: heroData.docs[0] || getFallbackContent().hero,
        menu: menuData.docs || [],
        features: featuresData.docs || [],
        contact: contactData.docs[0] || getFallbackContent().contact,
        siteSettings: siteSettings || getFallbackContent().siteSettings,
      }
    } catch (error) {
      console.error('CMS Error:', error)
    }
  }
  
  // Return fallback content if CMS fails or during build
  return getFallbackContent()
}

function getFallbackContent() {
  return {
    hero: {
      id: 'fallback',
      title: 'Coastal Café & Bistro',
      subtitle: 'Fresh seafood, ocean views, and locally roasted coffee',
      ctaText: 'Reserve Table',
      ctaUrl: '#contact',
    },
    menu: [],
    features: [],
    contact: {
      id: 'fallback',
      phone: '(555) 123-WAVE',
      email: 'hello@coastalcafe.com',
      address: '123 Ocean View Drive\nSeaside, CA 93955',
      hours: 'Mon-Thu: 7am-9pm\nFri-Sat: 7am-10pm\nSun: 8am-8pm',
    },
    siteSettings: {
      siteName: 'Coastal Café & Bistro',
      tagline: 'Where ocean meets cuisine',
      socialMedia: {},
    },
  }
}

// Force dynamic rendering to enable CMS functionality
export const dynamic = 'force-dynamic'

export default async function HomePage() {
  const { hero, menu, features, contact, siteSettings } = await getContentFromCMS()

  return (
    <main className="min-h-screen">
      <Navigation siteSettings={siteSettings} />
      
      <HeroSection hero={hero} />
      
      {features.length > 0 && (
        <FeaturesSection features={features} />
      )}
      
      {menu.length > 0 && (
        <MenuSection menu={menu} />
      )}
      
      <ContactSection contact={contact} />
      
      <Footer siteSettings={siteSettings} contactInfo={contact} />
      
      {/* CMS Admin Link (for demo purposes) */}
      <div className="fixed bottom-4 right-4 z-50">
        <a 
          href="/admin" 
          target="_blank"
          className="btn-primary text-sm shadow-lg"
        >
          🏗️ Edit Content
        </a>
      </div>
    </main>
  )
}
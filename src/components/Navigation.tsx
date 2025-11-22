'use client'

import { useState } from 'react'

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

interface NavigationProps {
  siteSettings: SiteSettings
}

export default function Navigation({ siteSettings }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: 'Home', href: '#' },
    { name: 'Menu', href: '#menu' },
    { name: 'About', href: '#features' },
    { name: 'Contact', href: '#contact' },
    { name: 'Reservations', href: '#contact' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-lg">
      <div className="container-coastal">
        <div className="flex justify-between items-center py-4">
          
          {/* Logo/Brand */}
          <div className="flex items-center">
            {siteSettings.logo ? (
              <img 
                src={siteSettings.logo.url} 
                alt={siteSettings.logo.alt}
                className="h-10 w-auto mr-3"
              />
            ) : (
              <div className="text-3xl mr-3">🌊</div>
            )}
            <div>
              <h1 className="text-xl font-bold text-primary">
                {siteSettings.siteName}
              </h1>
              <p className="text-xs text-gray-600 hidden sm:block">
                {siteSettings.tagline}
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-primary font-medium transition-colors duration-200 relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-200"></span>
              </a>
            ))}
            
            {/* CTA Button */}
            <a 
              href="#contact" 
              className="btn-primary ml-4"
            >
              Reserve Table
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary focus:outline-none focus:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 bg-white/95 backdrop-blur-sm animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-700 hover:text-primary font-medium transition-colors duration-200 px-4 py-2"
                >
                  {item.name}
                </a>
              ))}
              <div className="px-4 pt-2">
                <a 
                  href="#contact" 
                  className="btn-primary w-full text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Reserve Table
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
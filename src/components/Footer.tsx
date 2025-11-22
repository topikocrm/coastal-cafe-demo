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

interface FooterProps {
  siteSettings: SiteSettings
  contactInfo: {
    phone: string
    email: string
    address: string
    hours: string
  }
}

export default function Footer({ siteSettings, contactInfo }: FooterProps) {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Home', href: '#' },
    { name: 'Menu', href: '#menu' },
    { name: 'About Us', href: '#features' },
    { name: 'Contact', href: '#contact' },
    { name: 'Reservations', href: '#contact' },
  ]

  const services = [
    { name: 'Dine-In', href: '#menu' },
    { name: 'Takeout', href: '#contact' },
    { name: 'Private Events', href: '#contact' },
    { name: 'Catering', href: '#contact' },
    { name: 'Gift Cards', href: '#contact' },
  ]

  return (
    <footer className="bg-gradient-to-r from-primary to-accent text-white">
      
      {/* Main footer content */}
      <div className="container-coastal py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Brand section */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              {siteSettings.logo ? (
                <img 
                  src={siteSettings.logo.url} 
                  alt={siteSettings.logo.alt}
                  className="h-12 w-auto mr-3 brightness-0 invert"
                />
              ) : (
                <div className="text-4xl mr-3">🌊</div>
              )}
              <div>
                <h3 className="text-2xl font-bold">{siteSettings.siteName}</h3>
                <p className="text-sm opacity-80">{siteSettings.tagline}</p>
              </div>
            </div>
            
            <p className="text-sm opacity-90 leading-relaxed mb-6">
              Experience the finest coastal dining with breathtaking ocean views, 
              fresh local ingredients, and warm hospitality that keeps our guests 
              coming back.
            </p>
            
            {/* Social media links */}
            <div className="flex space-x-4">
              {siteSettings.socialMedia.facebook && (
                <a 
                  href={siteSettings.socialMedia.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                  aria-label="Facebook"
                >
                  📘
                </a>
              )}
              {siteSettings.socialMedia.instagram && (
                <a 
                  href={siteSettings.socialMedia.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                  aria-label="Instagram"
                >
                  📷
                </a>
              )}
              {siteSettings.socialMedia.twitter && (
                <a 
                  href={siteSettings.socialMedia.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                  aria-label="Twitter"
                >
                  🐦
                </a>
              )}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 relative">
              Quick Links
              <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-secondary"></div>
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-sm opacity-80 hover:opacity-100 hover:text-secondary transition-all duration-200 flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">
                      {link.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 relative">
              Services
              <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-secondary"></div>
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <a 
                    href={service.href}
                    className="text-sm opacity-80 hover:opacity-100 hover:text-secondary transition-all duration-200 flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">
                      {service.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 relative">
              Contact Info
              <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-secondary"></div>
            </h4>
            
            <div className="space-y-4">
              {/* Phone */}
              <div className="flex items-start gap-3">
                <div className="text-secondary text-lg mt-0.5">📞</div>
                <div>
                  <a 
                    href={`tel:${contactInfo.phone.replace(/[^0-9]/g, '')}`}
                    className="text-sm opacity-80 hover:opacity-100 hover:text-secondary transition-colors"
                  >
                    {contactInfo.phone}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <div className="text-secondary text-lg mt-0.5">✉️</div>
                <div>
                  <a 
                    href={`mailto:${contactInfo.email}`}
                    className="text-sm opacity-80 hover:opacity-100 hover:text-secondary transition-colors"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3">
                <div className="text-secondary text-lg mt-0.5">📍</div>
                <div>
                  <address className="text-sm opacity-80 not-italic whitespace-pre-line">
                    {contactInfo.address}
                  </address>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-3">
                <div className="text-secondary text-lg mt-0.5">🕒</div>
                <div>
                  <div className="text-sm opacity-80 whitespace-pre-line">
                    {contactInfo.hours}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter signup */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="max-w-md mx-auto text-center">
            <h4 className="text-lg font-semibold mb-4">Stay Connected</h4>
            <p className="text-sm opacity-80 mb-6">
              Subscribe to receive updates on special events, seasonal menus, and exclusive offers.
            </p>
            <div className="flex gap-3">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-secondary"
              />
              <button className="px-6 py-2 bg-secondary text-text rounded-lg hover:bg-secondary/90 transition-colors font-semibold">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom footer */}
      <div className="border-t border-white/20 py-6">
        <div className="container-coastal">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            
            {/* Copyright */}
            <div className="text-sm opacity-80 text-center md:text-left">
              © {currentYear} {siteSettings.siteName}. All rights reserved. | 
              <span className="ml-1">Crafted with love by the sea</span>
            </div>
            
            {/* Legal links */}
            <div className="flex items-center gap-6 text-sm opacity-80">
              <a href="#privacy" className="hover:opacity-100 hover:text-secondary transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="hover:opacity-100 hover:text-secondary transition-colors">
                Terms of Service
              </a>
              <a href="#accessibility" className="hover:opacity-100 hover:text-secondary transition-colors">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Ocean wave decoration */}
      <div className="relative overflow-hidden">
        <svg 
          className="w-full h-8 fill-current text-background opacity-30" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"></path>
        </svg>
      </div>
    </footer>
  )
}
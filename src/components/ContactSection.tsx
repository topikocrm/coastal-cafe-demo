interface ContactInfo {
  id: string
  phone: string
  email: string
  address: string
  hours: string
  mapUrl?: string
}

interface ContactSectionProps {
  contact: ContactInfo
}

export default function ContactSection({ contact }: ContactSectionProps) {
  return (
    <section id="contact" className="section-coastal bg-white">
      <div className="container-coastal">
        
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-coastal-gradient mb-4">
            Visit Our Café
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Come experience the magic of coastal dining. We're located right on the beautiful 
            Seaside coast with easy parking and stunning ocean views.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Contact information */}
          <div className="space-y-8">
            
            {/* Phone */}
            <div className="flex items-start gap-4 p-6 card-coastal group">
              <div className="text-3xl text-primary group-hover:scale-110 transition-transform">
                📞
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-primary">Phone</h3>
                <a 
                  href={`tel:${contact.phone.replace(/[^0-9]/g, '')}`}
                  className="text-lg text-gray-700 hover:text-primary transition-colors"
                >
                  {contact.phone}
                </a>
                <p className="text-sm text-gray-500 mt-1">Call for reservations or takeout orders</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4 p-6 card-coastal group">
              <div className="text-3xl text-primary group-hover:scale-110 transition-transform">
                ✉️
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-primary">Email</h3>
                <a 
                  href={`mailto:${contact.email}`}
                  className="text-lg text-gray-700 hover:text-primary transition-colors"
                >
                  {contact.email}
                </a>
                <p className="text-sm text-gray-500 mt-1">We'll respond within 24 hours</p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4 p-6 card-coastal group">
              <div className="text-3xl text-primary group-hover:scale-110 transition-transform">
                📍
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-primary">Address</h3>
                <address className="text-lg text-gray-700 not-italic whitespace-pre-line">
                  {contact.address}
                </address>
                <p className="text-sm text-gray-500 mt-1">Free parking available</p>
                {contact.mapUrl && (
                  <a 
                    href={contact.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 btn-outline text-sm px-4 py-2"
                  >
                    View on Map
                  </a>
                )}
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-4 p-6 card-coastal group">
              <div className="text-3xl text-primary group-hover:scale-110 transition-transform">
                🕒
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-primary">Hours</h3>
                <div className="text-lg text-gray-700 whitespace-pre-line">
                  {contact.hours}
                </div>
                <p className="text-sm text-gray-500 mt-1">Holiday hours may vary</p>
              </div>
            </div>
          </div>

          {/* Map/Location visual */}
          <div className="lg:sticky lg:top-8">
            <div className="card-coastal p-8 text-center bg-gradient-to-br from-primary/5 to-accent/5">
              
              {/* Map placeholder */}
              <div className="bg-gradient-to-br from-primary to-accent rounded-lg h-64 mb-6 flex items-center justify-center text-white">
                <div className="text-center">
                  <div className="text-6xl mb-4">🗺️</div>
                  <h3 className="text-xl font-semibold">Oceanfront Location</h3>
                  <p className="opacity-90">Right on the beautiful Seaside coast</p>
                </div>
              </div>

              {/* Location highlights */}
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="p-4">
                  <div className="text-2xl mb-2">🅿️</div>
                  <div className="text-sm font-semibold text-gray-700">Free Parking</div>
                </div>
                <div className="p-4">
                  <div className="text-2xl mb-2">🌊</div>
                  <div className="text-sm font-semibold text-gray-700">Ocean View</div>
                </div>
                <div className="p-4">
                  <div className="text-2xl mb-2">♿</div>
                  <div className="text-sm font-semibold text-gray-700">Accessible</div>
                </div>
                <div className="p-4">
                  <div className="text-2xl mb-2">🏖️</div>
                  <div className="text-sm font-semibold text-gray-700">Beach Access</div>
                </div>
              </div>

              {/* Reservation CTA */}
              <div className="mt-8 p-6 bg-white rounded-lg shadow-inner">
                <h3 className="text-xl font-semibold mb-3 text-primary">
                  Ready to Visit?
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Reserve your table now for the best oceanfront seating
                </p>
                <div className="flex flex-col gap-3">
                  <a href="#reservation" className="btn-primary">
                    Make Reservation
                  </a>
                  <a 
                    href={`tel:${contact.phone.replace(/[^0-9]/g, '')}`}
                    className="btn-outline"
                  >
                    Call to Reserve
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-block p-8 bg-gradient-to-r from-primary to-accent rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-4">
              🌅 Join Us for Sunset Dining
            </h3>
            <p className="text-lg opacity-95 mb-6">
              Experience our magical sunset dining with special evening menu and live acoustic music
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#menu" className="btn bg-white text-primary hover:bg-gray-100">
                View Evening Menu
              </a>
              <a href="#events" className="btn border-2 border-white text-white hover:bg-white hover:text-primary">
                Check Events
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
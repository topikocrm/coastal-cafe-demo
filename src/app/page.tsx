export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>Coastal Café & Bistro</h1>
          <p>Fresh seafood, ocean views, and locally roasted coffee</p>
          <a href="#contact" className="btn">Reserve Table</a>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2>Why Choose Coastal Café?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🌊</div>
              <h3>Ocean Views</h3>
              <p>Breathtaking panoramic views of the Pacific Ocean from every table</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🦞</div>
              <h3>Fresh Seafood</h3>
              <p>Daily catch from local fishermen, prepared by our expert chefs</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">☕</div>
              <h3>Local Coffee</h3>
              <p>Artisanally roasted beans from nearby coastal coffee farms</p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="menu">
        <div className="container">
          <h2>Featured Menu</h2>
          <div className="menu-grid">
            <div className="menu-item">
              <h4>Grilled Pacific Salmon</h4>
              <span className="price">$28</span>
              <p>Fresh Atlantic salmon with lemon herb butter and seasonal vegetables</p>
            </div>
            <div className="menu-item">
              <h4>Seafood Chowder</h4>
              <span className="price">$16</span>
              <p>Creamy chowder loaded with clams, mussels, and fresh fish</p>
            </div>
            <div className="menu-item">
              <h4>Fish & Chips</h4>
              <span className="price">$22</span>
              <p>Beer-battered cod with crispy fries and house-made tartar sauce</p>
            </div>
            <div className="menu-item">
              <h4>Lobster Roll</h4>
              <span className="price">$32</span>
              <p>Fresh lobster meat in a toasted brioche roll with lemon aioli</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <div className="container">
          <h2>Visit Us</h2>
          <div className="contact-grid">
            <div className="contact-item">
              <h4>📍 Location</h4>
              <p>123 Ocean View Drive<br />Seaside, CA 93955</p>
            </div>
            <div className="contact-item">
              <h4>📞 Phone</h4>
              <p>(555) 123-WAVE</p>
            </div>
            <div className="contact-item">
              <h4>📧 Email</h4>
              <p>hello@coastalcafe.com</p>
            </div>
            <div className="contact-item">
              <h4>🕒 Hours</h4>
              <p>Mon-Thu: 7am-9pm<br />Fri-Sat: 7am-10pm<br />Sun: 8am-8pm</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Coastal Café & Bistro. Where ocean meets cuisine.</p>
        </div>
      </footer>
    </main>
  )
}
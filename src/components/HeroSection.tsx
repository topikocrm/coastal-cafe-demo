'use client'

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

interface HeroSectionProps {
  hero: HeroContent
}

export default function HeroSection({ hero }: HeroSectionProps) {
  return (
    <section className="hero-ocean-bg min-h-screen flex items-center relative">
      {/* Background overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-accent/70"></div>
      
      <div className="container-coastal relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          
          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in text-shadow-lg">
            {hero.title}
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-8 opacity-90 animate-slide-up text-shadow">
            {hero.subtitle}
          </p>
          
          {/* Call to action button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href={hero.ctaUrl} 
              className="btn bg-secondary text-text hover:bg-secondary/90 text-lg px-8 py-4 shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              {hero.ctaText}
            </a>
            
            <a 
              href="#menu" 
              className="btn-outline border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4"
            >
              View Menu
            </a>
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative wave element */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg 
          className="w-full h-16 md:h-24 fill-current text-background" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"></path>
        </svg>
      </div>
    </section>
  )
}
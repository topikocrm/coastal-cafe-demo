interface Feature {
  id: string
  title: string
  description: string
  icon: string
  order: number
}

interface FeaturesSectionProps {
  features: Feature[]
}

export default function FeaturesSection({ features }: FeaturesSectionProps) {
  if (!features.length) return null

  return (
    <section className="section-coastal bg-white">
      <div className="container-coastal">
        
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-coastal-gradient mb-4">
            What Makes Us Special
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience the best of coastal dining with our unique atmosphere, 
            fresh ingredients, and oceanfront location.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.id} 
              className="card-coastal p-8 text-center group hover:scale-105 transition-all duration-300"
              style={{ 
                animationDelay: `${index * 150}ms`,
                animation: 'slideUp 0.8s ease-out both'
              }}
            >
              
              {/* Feature icon */}
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              
              {/* Feature title */}
              <h3 className="text-2xl font-semibold mb-4 text-primary">
                {feature.title}
              </h3>
              
              {/* Feature description */}
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Default features if none from CMS */}
        {features.length === 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '🌊',
                title: 'Ocean Views',
                description: 'Dine with breathtaking panoramic views of the Pacific Ocean from every table.'
              },
              {
                icon: '🐟',
                title: 'Fresh Seafood',
                description: 'Daily catch from local fishermen, prepared with care and expertise.'
              },
              {
                icon: '☕',
                title: 'Local Coffee',
                description: 'Locally roasted coffee beans, perfectly brewed for the ultimate coastal experience.'
              },
              {
                icon: '🌿',
                title: 'Farm Fresh',
                description: 'Organic ingredients sourced from local farms and sustainable suppliers.'
              },
              {
                icon: '🏖️',
                title: 'Beachside Dining',
                description: 'Outdoor seating with the sand between your toes and ocean breeze in your hair.'
              },
              {
                icon: '👨‍🍳',
                title: 'Expert Chefs',
                description: 'Award-winning culinary team with decades of coastal cuisine experience.'
              },
            ].map((feature, index) => (
              <div 
                key={index}
                className="card-coastal p-8 text-center group hover:scale-105 transition-all duration-300"
                style={{ 
                  animationDelay: `${index * 150}ms`,
                  animation: 'slideUp 0.8s ease-out both'
                }}
              >
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-primary">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
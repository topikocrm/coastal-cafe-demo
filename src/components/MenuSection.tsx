'use client'

import { useState } from 'react'

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

interface MenuSectionProps {
  menu: MenuItem[]
}

const MENU_CATEGORIES = [
  { id: 'all', label: 'All Items', icon: '🍽️' },
  { id: 'breakfast', label: 'Breakfast', icon: '🥞' },
  { id: 'lunch', label: 'Lunch', icon: '🥗' },
  { id: 'dinner', label: 'Dinner', icon: '🍽️' },
  { id: 'coffee', label: 'Coffee', icon: '☕' },
  { id: 'desserts', label: 'Desserts', icon: '🍰' },
]

const DIETARY_ICONS = {
  vegetarian: '🥗',
  vegan: '🌱',
  'gluten-free': '🌾',
  'dairy-free': '🥛',
}

export default function MenuSection({ menu }: MenuSectionProps) {
  const [activeCategory, setActiveCategory] = useState('all')

  // Filter menu items by category
  const filteredMenu = activeCategory === 'all' 
    ? menu 
    : menu.filter(item => item.category === activeCategory)

  // Default menu items if none from CMS
  const defaultMenu: MenuItem[] = [
    {
      id: '1',
      name: 'Grilled Pacific Salmon',
      description: 'Fresh Atlantic salmon with lemon herb butter and seasonal vegetables',
      price: 28,
      category: 'dinner',
      dietary: ['gluten-free'],
      available: true,
      featured: true,
    },
    {
      id: '2',
      name: 'Coastal Clam Chowder',
      description: 'Creamy New England style chowder with fresh clams and herbs',
      price: 12,
      category: 'lunch',
      dietary: [],
      available: true,
      featured: false,
    },
    {
      id: '3',
      name: 'Ocean View Omelette',
      description: 'Three-egg omelette with fresh crab, avocado, and coastal herbs',
      price: 16,
      category: 'breakfast',
      dietary: ['vegetarian'],
      available: true,
      featured: false,
    },
    {
      id: '4',
      name: 'Artisan Coffee Blend',
      description: 'Locally roasted single-origin beans with notes of chocolate and sea salt',
      price: 4,
      category: 'coffee',
      dietary: ['vegan'],
      available: true,
      featured: false,
    },
    {
      id: '5',
      name: 'Key Lime Tart',
      description: 'Classic Florida key lime tart with graham cracker crust',
      price: 8,
      category: 'desserts',
      dietary: ['vegetarian'],
      available: true,
      featured: false,
    },
  ]

  const displayMenu = menu.length > 0 ? filteredMenu : defaultMenu.filter(item => 
    activeCategory === 'all' || item.category === activeCategory
  )

  return (
    <section id="menu" className="section-coastal bg-gradient-to-br from-background to-white">
      <div className="container-coastal">
        
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-coastal-gradient mb-4">
            Our Fresh Menu
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our carefully crafted dishes featuring the finest local ingredients, 
            fresh daily catch, and seasonal specialties.
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {MENU_CATEGORIES.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`
                flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-200
                ${activeCategory === category.id 
                  ? 'bg-primary text-white shadow-lg scale-105' 
                  : 'bg-white text-gray-700 hover:bg-primary/10 hover:text-primary border border-gray-200'
                }
              `}
            >
              <span>{category.icon}</span>
              {category.label}
            </button>
          ))}
        </div>

        {/* Menu items grid */}
        {displayMenu.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {displayMenu.map((item, index) => (
              <div 
                key={item.id}
                className="card-coastal p-6 group hover:shadow-2xl transition-all duration-300"
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  animation: 'slideUp 0.6s ease-out both'
                }}
              >
                <div className="flex justify-between items-start mb-4">
                  
                  {/* Item info */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold text-primary group-hover:text-accent transition-colors">
                        {item.name}
                      </h3>
                      {item.featured && (
                        <span className="text-xs bg-secondary text-text px-2 py-1 rounded-full font-semibold">
                          ⭐ Featured
                        </span>
                      )}
                    </div>
                    
                    <p className="text-gray-600 mb-3 leading-relaxed">
                      {item.description}
                    </p>
                    
                    {/* Dietary indicators */}
                    {item.dietary.length > 0 && (
                      <div className="flex gap-2 mb-3">
                        {item.dietary.map(diet => (
                          <span 
                            key={diet}
                            className="text-xs bg-accent/20 text-accent px-2 py-1 rounded-full flex items-center gap-1"
                            title={diet}
                          >
                            {DIETARY_ICONS[diet as keyof typeof DIETARY_ICONS]}
                            {diet}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  
                  {/* Price */}
                  <div className="text-2xl font-bold text-primary ml-4">
                    ${item.price}
                  </div>
                </div>

                {/* Availability status */}
                <div className="flex justify-between items-center">
                  <div className={`
                    text-sm font-semibold
                    ${item.available ? 'text-accent' : 'text-gray-400'}
                  `}>
                    {item.available ? '✓ Available' : '○ Temporarily unavailable'}
                  </div>
                  
                  {item.available && (
                    <button className="btn-outline text-sm px-4 py-2 group-hover:bg-primary group-hover:text-white transition-all duration-200">
                      Order Now
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🍽️</div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No items in this category</h3>
            <p className="text-gray-500">Try selecting a different menu category.</p>
          </div>
        )}

        {/* CTA section */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl">
          <h3 className="text-2xl font-semibold mb-4 text-primary">
            Ready to Dine with Us?
          </h3>
          <p className="text-gray-600 mb-6">
            Reserve your table now and experience the best coastal dining has to offer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="btn-primary">
              Make Reservation
            </a>
            <a href="tel:(555)123-WAVE" className="btn-outline">
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
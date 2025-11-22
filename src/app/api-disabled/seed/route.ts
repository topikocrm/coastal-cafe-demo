import { NextResponse } from 'next/server'

export async function POST() {
  try {
    const { getPayloadClient } = await import('../../../lib/get-payload')
    const payload = await getPayloadClient()

    // Seed Hero Content
    const heroData = {
      title: 'Coastal Café & Bistro',
      subtitle: 'Experience the finest coastal dining with breathtaking ocean views, fresh local ingredients, and warm hospitality that feels like home.',
      ctaText: 'Reserve Your Table',
      ctaUrl: '#contact',
    }

    await payload.create({
      collection: 'coastal-cafe-hero',
      data: heroData,
    })

    // Seed Menu Items
    const menuItems = [
      {
        name: 'Grilled Pacific Salmon',
        description: 'Fresh Atlantic salmon with lemon herb butter, roasted vegetables, and wild rice pilaf',
        price: 28,
        category: 'dinner',
        dietary: ['gluten-free'],
        available: true,
        featured: true,
      },
      {
        name: 'Coastal Clam Chowder',
        description: 'Creamy New England style chowder with fresh clams, potatoes, and herbs',
        price: 12,
        category: 'lunch',
        dietary: [],
        available: true,
        featured: false,
      },
      {
        name: 'Ocean View Omelette',
        description: 'Three-egg omelette with fresh dungeness crab, avocado, and coastal herbs',
        price: 16,
        category: 'breakfast',
        dietary: ['vegetarian'],
        available: true,
        featured: false,
      },
      {
        name: 'Artisan Coffee Blend',
        description: 'Locally roasted single-origin beans with notes of chocolate and sea salt',
        price: 4,
        category: 'coffee',
        dietary: ['vegan'],
        available: true,
        featured: false,
      },
      {
        name: 'Key Lime Tart',
        description: 'Classic Florida key lime tart with graham cracker crust and fresh whipped cream',
        price: 8,
        category: 'desserts',
        dietary: ['vegetarian'],
        available: true,
        featured: false,
      },
      {
        name: 'Fish & Chips',
        description: 'Beer-battered cod with hand-cut fries, coleslaw, and house-made tartar sauce',
        price: 18,
        category: 'lunch',
        dietary: [],
        available: true,
        featured: true,
      },
      {
        name: 'Seafood Paella',
        description: 'Traditional Spanish paella with mussels, clams, shrimp, and saffron rice',
        price: 32,
        category: 'dinner',
        dietary: ['gluten-free'],
        available: true,
        featured: true,
      },
      {
        name: 'Avocado Toast',
        description: 'Multigrain toast with smashed avocado, cherry tomatoes, and everything seasoning',
        price: 12,
        category: 'breakfast',
        dietary: ['vegan', 'vegetarian'],
        available: true,
        featured: false,
      },
    ]

    for (const item of menuItems) {
      await payload.create({
        collection: 'coastal-cafe-menu',
        data: item,
      })
    }

    // Seed Features
    const features = [
      {
        title: 'Ocean Views',
        description: 'Dine with breathtaking panoramic views of the Pacific Ocean from every table in our restaurant.',
        icon: '🌊',
        order: 1,
      },
      {
        title: 'Fresh Seafood',
        description: 'Daily catch from local fishermen, prepared with expertise and served at the peak of freshness.',
        icon: '🐟',
        order: 2,
      },
      {
        title: 'Local Coffee',
        description: 'Artisan coffee beans roasted locally, perfectly brewed for the ultimate coastal experience.',
        icon: '☕',
        order: 3,
      },
      {
        title: 'Farm Fresh',
        description: 'Organic ingredients sourced from local farms and sustainable suppliers within 50 miles.',
        icon: '🌿',
        order: 4,
      },
      {
        title: 'Beachside Dining',
        description: 'Outdoor seating with the sand between your toes and ocean breeze in your hair.',
        icon: '🏖️',
        order: 5,
      },
      {
        title: 'Expert Chefs',
        description: 'Award-winning culinary team with decades of coastal cuisine experience and passion.',
        icon: '👨‍🍳',
        order: 6,
      },
    ]

    for (const feature of features) {
      await payload.create({
        collection: 'coastal-cafe-features',
        data: feature,
      })
    }

    // Seed Contact Info
    const contactData = {
      phone: '(555) 123-WAVE',
      email: 'hello@coastalcafe.com',
      address: '123 Ocean View Drive\nSeaside, CA 93955',
      hours: 'Monday-Thursday: 7:00 AM - 9:00 PM\nFriday-Saturday: 7:00 AM - 10:00 PM\nSunday: 8:00 AM - 8:00 PM',
      mapUrl: 'https://maps.google.com/?q=123+Ocean+View+Drive+Seaside+CA',
    }

    await payload.create({
      collection: 'coastal-cafe-contact',
      data: contactData,
    })

    // Update Site Settings
    const siteSettingsData = {
      siteName: 'Coastal Café & Bistro',
      tagline: 'Where ocean meets cuisine',
      socialMedia: {
        facebook: 'https://facebook.com/coastalcafe',
        instagram: 'https://instagram.com/coastalcafe',
        twitter: 'https://twitter.com/coastalcafe',
      },
    }

    await payload.updateGlobal({
      slug: 'site-settings',
      data: siteSettingsData,
    })

    return NextResponse.json({
      success: true,
      message: 'Database seeded successfully with Coastal Café content!',
      data: {
        hero: 1,
        menuItems: menuItems.length,
        features: features.length,
        contact: 1,
        siteSettings: 1,
      },
    })
  } catch (error) {
    console.error('Database seeding error:', error)
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to seed database',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    )
  }
}
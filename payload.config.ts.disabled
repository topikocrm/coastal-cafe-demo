import { buildConfig } from 'payload/config'
import { webpackBundler } from '@payloadcms/bundler-webpack'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { slateEditor } from '@payloadcms/richtext-slate'
import path from 'path'

// Define Coastal Café collections
const CoastalCafeHero = {
  slug: 'coastal-cafe-hero',
  labels: {
    singular: 'Hero Section',
    plural: 'Hero Sections',
  },
  admin: {
    group: 'Coastal Café Content',
  },
  fields: [
    {
      name: 'title',
      type: 'text' as const,
      label: 'Main Title',
      required: true,
      defaultValue: 'Coastal Café & Bistro',
    },
    {
      name: 'subtitle',
      type: 'textarea' as const,
      label: 'Subtitle',
      required: true,
      defaultValue: 'Fresh seafood, ocean views, and locally roasted coffee',
    },
    {
      name: 'ctaText',
      type: 'text' as const,
      label: 'Call to Action Text',
      defaultValue: 'Reserve Table',
    },
    {
      name: 'ctaUrl',
      type: 'text' as const,
      label: 'Call to Action URL',
      defaultValue: '/reservations',
    },
    {
      name: 'backgroundImage',
      type: 'upload' as const,
      label: 'Background Image',
      relationTo: 'media',
    },
  ],
}

const CoastalCafeMenu = {
  slug: 'coastal-cafe-menu',
  labels: {
    singular: 'Menu Item',
    plural: 'Menu Items',
  },
  admin: {
    group: 'Coastal Café Content',
  },
  fields: [
    {
      name: 'name',
      type: 'text' as const,
      label: 'Dish Name',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea' as const,
      label: 'Description',
      required: true,
    },
    {
      name: 'price',
      type: 'number' as const,
      label: 'Price',
      required: true,
      min: 0,
    },
    {
      name: 'category',
      type: 'select' as const,
      label: 'Category',
      options: [
        { label: 'Breakfast', value: 'breakfast' },
        { label: 'Lunch', value: 'lunch' },
        { label: 'Dinner', value: 'dinner' },
        { label: 'Coffee', value: 'coffee' },
        { label: 'Desserts', value: 'desserts' },
      ],
      defaultValue: 'lunch',
    },
    {
      name: 'dietary',
      type: 'select' as const,
      label: 'Dietary Options',
      hasMany: true,
      options: [
        { label: 'Vegetarian', value: 'vegetarian' },
        { label: 'Vegan', value: 'vegan' },
        { label: 'Gluten-Free', value: 'gluten-free' },
        { label: 'Dairy-Free', value: 'dairy-free' },
      ],
    },
    {
      name: 'available',
      type: 'checkbox' as const,
      label: 'Available',
      defaultValue: true,
    },
    {
      name: 'featured',
      type: 'checkbox' as const,
      label: 'Featured Item',
      defaultValue: false,
    },
    {
      name: 'image',
      type: 'upload' as const,
      label: 'Dish Image',
      relationTo: 'media',
    },
  ],
}

const CoastalCafeFeatures = {
  slug: 'coastal-cafe-features',
  labels: {
    singular: 'Feature',
    plural: 'Features',
  },
  admin: {
    group: 'Coastal Café Content',
  },
  fields: [
    {
      name: 'title',
      type: 'text' as const,
      label: 'Feature Title',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea' as const,
      label: 'Description',
      required: true,
    },
    {
      name: 'icon',
      type: 'text' as const,
      label: 'Icon (emoji or class)',
      defaultValue: '🌊',
    },
    {
      name: 'order',
      type: 'number' as const,
      label: 'Display Order',
      defaultValue: 1,
    },
  ],
}

const CoastalCafeContact = {
  slug: 'coastal-cafe-contact',
  labels: {
    singular: 'Contact Info',
    plural: 'Contact Info',
  },
  admin: {
    group: 'Coastal Café Content',
  },
  fields: [
    {
      name: 'phone',
      type: 'text' as const,
      label: 'Phone Number',
      defaultValue: '(555) 123-WAVE',
    },
    {
      name: 'email',
      type: 'email' as const,
      label: 'Email',
      defaultValue: 'hello@coastalcafe.com',
    },
    {
      name: 'address',
      type: 'textarea' as const,
      label: 'Address',
      defaultValue: '123 Ocean View Drive\nSeaside, CA 93955',
    },
    {
      name: 'hours',
      type: 'textarea' as const,
      label: 'Business Hours',
      defaultValue: 'Mon-Thu: 7am-9pm\nFri-Sat: 7am-10pm\nSun: 8am-8pm',
    },
    {
      name: 'mapUrl',
      type: 'text' as const,
      label: 'Google Maps URL',
    },
  ],
}

const Users = {
  slug: 'users',
  auth: {
    useAPIKey: true,
  },
  admin: {
    useAsTitle: 'email',
  },
  fields: [
    {
      name: 'name',
      type: 'text' as const,
      label: 'Name',
    },
    {
      name: 'role',
      type: 'select' as const,
      options: [
        { label: 'Admin', value: 'admin' },
        { label: 'Editor', value: 'editor' },
      ],
      defaultValue: 'editor',
    },
  ],
}

const Media = {
  slug: 'media',
  upload: {
    staticURL: '/media',
    staticDir: 'media',
    imageSizes: [
      {
        name: 'thumbnail',
        width: 400,
        height: 300,
        position: 'centre',
      },
      {
        name: 'card',
        width: 768,
        height: 512,
        position: 'centre',
      },
      {
        name: 'hero',
        width: 1200,
        height: 600,
        position: 'centre',
      },
    ],
    adminThumbnail: 'thumbnail',
    mimeTypes: ['image/*'],
  },
  fields: [
    {
      name: 'alt',
      type: 'text' as const,
      label: 'Alt Text',
      required: true,
    },
    {
      name: 'caption',
      type: 'textarea' as const,
      label: 'Caption',
    },
  ],
}

export default buildConfig({
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000',
  admin: {
    user: Users.slug,
    bundler: webpackBundler(),
    meta: {
      titleSuffix: '- Coastal Café CMS',
      favicon: '/favicon.ico',
    },
    css: path.resolve(__dirname, 'src/styles/cms-admin.css'),
  },
  secret: process.env.PAYLOAD_SECRET || 'coastal-cafe-secret-2024',
  collections: [
    Users,
    CoastalCafeHero,
    CoastalCafeMenu,
    CoastalCafeFeatures,
    CoastalCafeContact,
    Media,
  ],
  globals: [
    {
      slug: 'site-settings',
      label: 'Site Settings',
      fields: [
        {
          name: 'siteName',
          type: 'text' as const,
          label: 'Site Name',
          defaultValue: 'Coastal Café & Bistro',
        },
        {
          name: 'tagline',
          type: 'text' as const,
          label: 'Tagline',
          defaultValue: 'Where ocean meets cuisine',
        },
        {
          name: 'logo',
          type: 'upload' as const,
          label: 'Logo',
          relationTo: 'media',
        },
        {
          name: 'socialMedia',
          type: 'group' as const,
          label: 'Social Media',
          fields: [
            {
              name: 'facebook',
              type: 'text' as const,
              label: 'Facebook URL',
            },
            {
              name: 'instagram',
              type: 'text' as const,
              label: 'Instagram URL',
            },
            {
              name: 'twitter',
              type: 'text' as const,
              label: 'Twitter URL',
            },
          ],
        },
      ],
    },
  ],
  editor: slateEditor({}),
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || 'postgresql://localhost:5432/coastal_cafe_build',
    },
  }),
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  upload: {
    limits: {
      fileSize: 5000000, // 5MB
    },
  },
  cors: [
    'http://localhost:3000',
    'http://localhost:3001',
    process.env.FRONTEND_URL || 'https://coastal-cafe.vercel.app',
  ],
  csrf: [
    'http://localhost:3000',
    'http://localhost:3001',
    process.env.FRONTEND_URL || 'https://coastal-cafe.vercel.app',
  ],
  endpoints: [
    {
      path: '/api/seed',
      method: 'post',
      handler: async (req, res) => {
        // Seed database with initial Coastal Café content
        res.json({ message: 'Database seeding endpoint' })
      },
    },
  ],
});
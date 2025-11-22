# Coastal Café Demo - AI Theme Generator

A complete demo showcasing AI-powered theme generation with PayloadCMS, Next.js 14, and Supabase.

## 🌊 Features

- **Dynamic Content Management**: Full PayloadCMS integration with Supabase PostgreSQL
- **Responsive Design**: Mobile-first coastal-themed UI components
- **Real-time Updates**: CMS changes reflected instantly on the frontend
- **Modern Stack**: Next.js 14, TypeScript, Tailwind CSS
- **Production Ready**: Optimized for Vercel deployment

## 🚀 Quick Start

### 1. Environment Setup

Copy the environment example file:
```bash
cp .env.example .env.local
```

Update `.env.local` with your actual values:
```env
DATABASE_URL="postgresql://postgres:[password]@db.[project].supabase.co:5432/postgres"
PAYLOAD_SECRET="your-super-secret-key-here"
NEXT_PUBLIC_SERVER_URL="http://localhost:3000"
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Database Setup

The database schema will be automatically created when you first run the application.

### 4. Run Development Server

```bash
npm run dev
```

Visit:
- **Frontend**: http://localhost:3000
- **CMS Admin**: http://localhost:3000/admin

## 🗄️ Database Configuration

This project uses Supabase PostgreSQL. To set up:

1. Create a new Supabase project
2. Get your database URL from Settings > Database
3. Update `DATABASE_URL` in your `.env.local`
4. The schema will be created automatically

## 🎨 Content Management

The CMS includes these collections:

- **Hero Section**: Main landing content
- **Menu Items**: Restaurant menu with categories
- **Features**: Highlight sections
- **Contact Info**: Business contact details
- **Site Settings**: Global site configuration

### Default Content

The application includes fallback content if the CMS is empty. You can:

1. Start with default content (no setup required)
2. Add custom content through the CMS admin
3. Import the provided seed data

## 🚀 Deployment

### Vercel Deployment

1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main

### Environment Variables for Production

```env
DATABASE_URL="your-supabase-database-url"
PAYLOAD_SECRET="your-production-secret"
NEXT_PUBLIC_SERVER_URL="https://your-domain.vercel.app"
```

### Build Commands

```bash
# Development
npm run dev

# Production build
npm run build

# Start production server
npm start
```

## 🏗️ Architecture

```
coastal-cafe-demo/
├── src/
│   ├── app/                 # Next.js 14 app directory
│   │   ├── api/            # API routes
│   │   ├── admin/          # PayloadCMS admin
│   │   └── page.tsx        # Main page
│   ├── components/         # React components
│   ├── lib/               # Utilities
│   └── styles/            # CSS files
├── payload.config.ts       # PayloadCMS configuration
├── next.config.js         # Next.js configuration
└── vercel.json           # Vercel deployment config
```

## 🎯 CMS Collections

### Hero Content
- Title, subtitle, CTA text
- Background images
- Call-to-action URLs

### Menu Items
- Name, description, price
- Categories (breakfast, lunch, dinner, etc.)
- Dietary restrictions
- Availability status

### Features
- Icon, title, description
- Custom ordering
- Show/hide functionality

### Contact Information
- Phone, email, address
- Business hours
- Social media links

## 🔧 Customization

### Theme Colors
Edit `tailwind.config.js` to customize the coastal theme:

```js
theme: {
  colors: {
    primary: '#1e40af',     // Ocean blue
    secondary: '#fbbf24',   // Sandy yellow
    accent: '#059669',      // Sea green
  }
}
```

### Components
All components are in `src/components/`:
- `HeroSection.tsx` - Landing hero
- `Navigation.tsx` - Header navigation
- `MenuSection.tsx` - Interactive menu
- `FeaturesSection.tsx` - Highlight features
- `ContactSection.tsx` - Contact information
- `Footer.tsx` - Site footer

## 🐛 Troubleshooting

### Common Issues

1. **Database Connection**: Verify DATABASE_URL is correct
2. **CMS Admin 404**: Ensure PayloadCMS is configured properly
3. **Build Errors**: Check all environment variables are set

### Development

```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

## 📧 Support

For issues related to the AI Theme Generator framework, visit the main repository.

## 🏖️ Demo Content

This demo represents a coastal café with:
- Ocean-themed design
- Fresh seafood menu
- Beachside dining atmosphere
- Local coastal community focus

Perfect for restaurants, cafés, or hospitality businesses near the coast!
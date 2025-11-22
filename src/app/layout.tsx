import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Coastal Café & Bistro - Fresh Seafood & Ocean Views',
  description: 'Experience the best coastal dining with fresh seafood, ocean views, and locally roasted coffee. Located in beautiful Seaside, CA.',
  keywords: ['restaurant', 'seafood', 'coastal', 'café', 'bistro', 'ocean view', 'fresh', 'local'],
  openGraph: {
    title: 'Coastal Café & Bistro',
    description: 'Fresh seafood, ocean views, and locally roasted coffee',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <body className={`${inter.className} antialiased bg-background text-text`}>
        <div className="min-h-screen">
          {children}
        </div>
      </body>
    </html>
  )
}
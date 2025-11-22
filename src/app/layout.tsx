import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Coastal Café & Bistro - Fresh Seafood & Ocean Views',
  description: 'Experience the best coastal dining with fresh seafood, ocean views, and locally roasted coffee.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
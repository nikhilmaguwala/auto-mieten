import type { Metadata } from 'next'
import './globals.css'

import { Navbar, Footer } from '@/components'

export const metadata: Metadata = {
  title: 'Auto Mieten',
  description: 'Discover your next car rental experience on Auto Mieten.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
          <Navbar />
          {children}
          <Footer />
      </body>
    </html>
  )
}

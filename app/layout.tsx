import type { Metadata } from 'next'
import './globals.css'

import { Navbar, Footer } from '@/components'

// @ts-ignore
export const metadata: Metadata = {
    title: 'Auto Mieten',
    description: 'Car rental service',
    icons: {
        icon: '/favicon.ico', // /public path
    },
};

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

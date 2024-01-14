import type { Metadata } from 'next'
import './globals.css'

import { Navbar, Footer } from '@/components'

// @ts-ignore
export const metadata: Metadata = {
    title: 'Auto Mieten',
    description: 'Car rental service',
    icons: {
        icon: [
            {
                media: '(prefers-color-scheme: light)',
                url: './favicon.ico',
                href: './favicon.ico',
            },
            {
                media: '(prefers-color-scheme: dark)',
                url: './favicon.ico',
                href: './favicon.ico',
            },
        ],
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

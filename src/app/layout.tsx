import type { Metadata } from 'next'
import { Inter, Merriweather } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-merriweather',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://danhalligan.github.io/pilton-festival'),
  title: 'Pilton Festival - Green Man Day | Community Festival in Somerset',
  description: 'Join us for Pilton Green Man Day, a beloved community festival in Somerset featuring music, food, local crafts, and the ancient Green Man tradition.',
  keywords: ['Pilton Festival', 'Green Man Day', 'Somerset', 'community festival', 'Barnstaple', 'local events'],
  authors: [{ name: 'Pilton Green Man CIO' }],
  icons: {
    icon: '/favicon.ico',
    apple: '/logo.png',
  },
  openGraph: {
    title: 'Pilton Festival - Green Man Day',
    description: 'Community festival celebrating the Green Man tradition in Somerset',
    url: 'https://danhalligan.github.io/pilton-festival',
    siteName: 'Pilton Festival',
    locale: 'en_GB',
    type: 'website',
    images: [
      {
        url: '/logo.png',
        width: 512,
        height: 512,
        alt: 'Pilton Festival Green Man Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pilton Festival - Green Man Day',
    description: 'Community festival celebrating the Green Man tradition in Somerset',
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${merriweather.variable}`}>
      <body className={`${inter.className} antialiased`}>
        <div className="min-h-screen bg-gray-50">
          {children}
        </div>
      </body>
    </html>
  )
}
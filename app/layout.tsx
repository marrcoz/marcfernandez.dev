import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google'

import type { Metadata } from 'next'

import Navbar from 'app/components/navbar'
import Footer from 'app/components/footer'

import { baseURL } from 'app/types'
import 'app/globals.css'

export const metadata: Metadata = {
  title: 'Marc Fernández - Fullstack developer',
  description: 'Portfolio | IT Technician & Software developer',

  openGraph: {
    title: 'Marc Fernández - Fullstack developer',
    description: 'Portfolio | IT Technician & Software developer',
    url: baseURL,
    siteName: 'Marc Fernández - Fullstack developer',
    locale: 'en',
    type: 'website',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="G-3SB44FDV5Q" />
      <body className="mx-4 mt-8 max-w-xl antialiased lg:mx-auto">
        <main className="mt-6 flex min-w-0 flex-auto flex-col px-2 md:px-0">
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}

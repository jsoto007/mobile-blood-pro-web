import { Inter } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata = {
  title: {
    template: '%s | Mobile Blood Pro',
    default: 'Mobile Blood Pro | At-Home Phlebotomy in Central Florida',
  },
  description: 'We provide safe and high-quality phlebotomy services in the comfort of your home while strictly adhering to safety standards.',
  keywords: 'mobile blood draw, at-home phlebotomy, Orlando blood draw, Central Florida phlebotomist, Arelis Perez phlebotomy, home lab testing, mobile phlebotomy Orlando',
  authors: [{ name: 'Arelis Perez' }, { name: 'Mobile Blood Pro' }],
  openGraph: {
    title: 'Mobile Blood Pro | At-Home Phlebotomy in Central Florida',
    description: 'We provide safe and high-quality phlebotomy services in the comfort of your home while strictly adhering to safety standards.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Mobile Blood Pro',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mobile Blood Pro | At-Home Phlebotomy',
    description: 'We provide safe and high-quality phlebotomy services in the comfort of your home while strictly adhering to safety standards.',
  },
}
export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: 'Mobile Blood Pro',
    founder: {
      '@type': 'Person',
      name: 'Arelis Perez',
    },
    description:
      'We provide safe and high-quality phlebotomy services in the comfort of your home while strictly adhering to safety standards.',
    telephone: '+1-516-508-1898',
    areaServed: [
      'Orlando',
      'Winter Park',
      'Lake Mary',
      'Altamonte Springs',
      'Winter Springs',
      'Apopka',
      'Longwood',
      'Mount Dora',
      'The Villages',
    ],
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'FL',
      addressCountry: 'US',
    },
    priceRange: '$$',
  }

  return (
    <html lang="en" className={clsx('bg-gray-50 antialiased', inter.variable)}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}

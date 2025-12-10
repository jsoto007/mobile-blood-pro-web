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
    default: 'At-Home Phlebotomy Orlando & Central Florida',
  },
  description:
    'At-home blood draw Orlando & mobile blood draw near me; Mobile Blood Pro serves Orange, Seminole, Lake, Sumter, and Villages ZIPs 32801–32837, 32701–32792, 34705–34789.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={clsx('bg-gray-50 antialiased', inter.variable)}>
      <body>{children}</body>
    </html>
  )
}

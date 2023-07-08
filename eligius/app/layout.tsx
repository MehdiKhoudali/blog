import './globals.css'
import { Inter, Lobster } from 'next/font/google'

import Head from "next/head"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Eligius',
  description: 'Create your content creator landing page in seconds with eligius',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

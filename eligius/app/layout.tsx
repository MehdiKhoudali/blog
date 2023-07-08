import './globals.css'
import { Inter, Lobster } from 'next/font/google'

import Head from "next/head"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Eligius',
  description: 'Track the performances of your software team with Eligius.',
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

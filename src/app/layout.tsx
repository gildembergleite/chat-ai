import Footer from '@/components/Footer'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Chat AI',
  description: 'Using Vercel SDK to create a chat bot',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col w-full justify-center items-center bg-slate-100 h-screen p-8`}>
        {children}
        <Footer/>
      </body>
    </html>
  )
}

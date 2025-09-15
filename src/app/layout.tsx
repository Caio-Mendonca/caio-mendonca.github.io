import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import { LanguageProvider } from '@/components/LanguageProvider'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'Caio Mendonça - Software Engineer | Python, React & Node.js Developer',
  description: 'Software Engineer with 4+ years of experience building scalable solutions with Python, React, and Node.js. Based in Dublin, Ireland.',
  keywords: 'Software Engineer, Python Developer, React Developer, Node.js, Full Stack Developer, Dublin, Ireland',
  authors: [{ name: 'Caio Mendonça' }],
  creator: 'Caio Mendonça',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://caiomendonca.dev',
    title: 'Caio Mendonça - Software Engineer',
    description: 'Building scalable solutions with Python, React & Node.js',
    siteName: 'Caio Mendonça Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Caio Mendonça - Software Engineer',
    description: 'Building scalable solutions with Python, React & Node.js',
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
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body>
        <LanguageProvider>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}
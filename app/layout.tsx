import React from "react"
import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import { DemoHeader } from '@/components/DemoHeader'
import { Navigation } from '@/components/navigation'
import { DemoFooter } from '@/components/DemoFooter'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: '--font-sans' });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: '--font-mono' });

export const metadata: Metadata = {
  title: 'Developer Portfolio | Full-Stack Engineer',
  description: 'Modern developer portfolio showcasing engineering projects, technical blog posts, and continuous learning journey. Built with Next.js 16, TypeScript, and Tailwind CSS.',
  keywords: ['developer portfolio', 'full-stack engineer', 'technical blog', 'web development', 'software engineering'],
  authors: [{ name: 'Your Name' }],
  creator: 'Your Name',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourportfolio.com',
    title: 'Developer Portfolio | Full-Stack Engineer',
    description: 'Modern developer portfolio showcasing engineering projects and technical insights.',
    siteName: 'Developer Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Developer Portfolio | Full-Stack Engineer',
    description: 'Modern developer portfolio showcasing engineering projects and technical insights.',
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.app'
}

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex min-h-screen flex-col">
            <DemoHeader />
            <Navigation />
            <main className="flex-1">{children}</main>
            <DemoFooter />
          </div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}

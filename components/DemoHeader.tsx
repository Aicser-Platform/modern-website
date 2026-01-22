'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ThemeToggle } from '@/components/theme-toggle'
import { cn } from '@/lib/utils'
import Image from "next/image"

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Projects', href: '/projects' },
  { name: 'Blog', href: '/blog' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

export function DemoHeader() {
  const pathname = usePathname()

  return (
    <div className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
            <Link 
              href="/" 
              className="flex items-center gap-2.5 sm:gap-3 group relative focus:outline-none rounded-lg"
              aria-label="Aicser Home"
            >
              <div className="relative">
                <Image
                  src="https://avatars.githubusercontent.com/u/133837356?s=400&u=f050ed1d6533a8115745104b0c23121b3a6bbeaa&v=4"
                  alt="Aicser Logo"
                  width={32}
                  height={32}
                  className="rounded-lg group-hover:shadow-lg group-hover:scale-105 transition-all duration-300"
                  priority
                />
                <div className="absolute inset-0 rounded-lg bg-primary/20 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300 -z-10"></div>
              </div>
              <span className="text-xl sm:text-2xl font-serif font-bold gradient-text group-hover:opacity-90 transition-opacity">Aicser Portfolio</span>
            </Link>
          
          <div className="flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground',
                  pathname === item.href
                    ? 'text-foreground'
                    : 'text-muted-foreground'
                )}
              >
                {item.name}
              </Link>
            ))}
            <ThemeToggle />
          </div>
        </div>
      </div>
    </div>
  )
}

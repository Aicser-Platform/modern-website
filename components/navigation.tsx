'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ThemeToggle } from '@/components/theme-toggle'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Projects', href: '/projects' },
  { name: 'Blog', href: '/blog' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

export function Navigation() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 animate-in fade-in duration-500">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Branding Section */}
          <Link 
            href="https://ai-studio.aicser.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 transition-all duration-300 hover:opacity-80 hover:scale-105"
          >
            <img 
              src="https://avatars.githubusercontent.com/u/133837356?s=400&u=cc4f9942e676c30ec0390c634e7b5c68cf50c4c8&v=4"
              alt="Aicser AI Studio"
              className="h-7 w-7 rounded-full animate-in zoom-in-50 duration-500"
            />
            <span className="hidden font-semibold sm:inline-block animate-in fade-in slide-in-from-left-2 duration-500 delay-100">Aicser</span>
            <span className="hidden items-center rounded-full border border-primary/20 bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary lg:inline-flex animate-in fade-in slide-in-from-left-2 duration-500 delay-150">
              Template
            </span>
          </Link>
          
          {/* Navigation Links */}
          <nav className="flex items-center gap-1">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'rounded-md px-3 py-2 text-sm font-medium transition-all duration-300 hover:bg-accent hover:text-accent-foreground',
                  pathname === item.href
                    ? 'text-foreground bg-accent/50'
                    : 'text-muted-foreground hover:scale-105'
                )}
                style={{
                  animation: `slideInDown 0.5s ease-out ${0.05 * (index + 1)}s both`,
                }}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-2 ml-auto">
            <ThemeToggle />
            <Button 
              asChild 
              size="sm" 
              className="font-semibold hidden sm:inline-flex animate-in fade-in slide-in-from-right-2 duration-500 delay-200 hover:scale-105 transition-transform"
            >
              <Link 
                href="https://ai-studio.aicser.com/quote"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get This Built
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

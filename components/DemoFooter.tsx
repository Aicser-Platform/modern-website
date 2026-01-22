import Link from 'next/link'
import Image from "next/image"

export function DemoFooter() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
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
                  <span className="text-xl sm:text-2xl font-serif font-bold gradient-text group-hover:opacity-90 transition-opacity">Aicser</span>
                </Link>
            <ul className="space-y-3">
              <li>
                <Link
                  href="https://ai-studio.aicser.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Homepage
                </Link>
              </li>
              <li>
                <Link
                  href="https://ai-studio.aicser.com/templates"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Templates
                </Link>
              </li>
              <li>
                <Link
                  href="https://ai-studio.aicser.com/quote"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Request Quote
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              About
            </h3>
            <p className="text-sm text-muted-foreground">
              This is a demo template showcasing a modern developer portfolio built with Next.js 16, TypeScript, and Tailwind CSS.
            </p>
          </div>
          
          <div className="lg:col-span-2">
            <div className="rounded-lg border border-border bg-card p-6">
              <p className="text-sm font-medium text-card-foreground">
                ✨ This is a production-ready template
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Want this customized for your needs? Contact AI Studio to get your own version built.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2026 Modern Portfolio by Aicser. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

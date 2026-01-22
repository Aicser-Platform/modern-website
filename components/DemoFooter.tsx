import Link from 'next/link'

export function DemoFooter() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              AI Studio
            </h3>
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
            © 2026 Aicser Modern Portfolio by Aicser. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

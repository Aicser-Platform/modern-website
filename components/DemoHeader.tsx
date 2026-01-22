import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function DemoHeader() {
  return (
    <div className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link 
          href="https://ai-studio.aicser.com" 
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 transition-opacity hover:opacity-80"
        >
          <img 
            src="https://avatars.githubusercontent.com/u/133837356?s=400&u=cc4f9942e676c30ec0390c634e7b5c68cf50c4c8&v=4"
            alt="Aicser AI Studio"
            className="h-8 w-8 rounded-full"
          />
          <span className="hidden font-semibold sm:inline-block">Aicser AI Studio</span>
          <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
            Production-Ready Template
          </span>
        </Link>
        
        <Button asChild size="sm" className="font-semibold">
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
  )
}

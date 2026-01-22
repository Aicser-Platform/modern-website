import type { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, Clock } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export const metadata: Metadata = {
  title: 'Blog | Developer Portfolio',
  description: 'Technical writing on web development, software engineering, and continuous learning.',
}

const blogPosts = [
  {
    id: 'building-scalable-apis-nextjs',
    title: 'Building Scalable APIs with Next.js Server Actions',
    excerpt: 'Deep dive into Server Actions and how they simplify full-stack development. Learn patterns for building type-safe, performant APIs without separate backend services.',
    date: '2026-01-15',
    readTime: '8 min read',
    tags: ['Next.js', 'API', 'Server Actions', 'TypeScript'],
  },
  {
    id: 'optimizing-react-performance',
    title: 'Optimizing React Performance: A Practical Guide',
    excerpt: 'Techniques for improving React app performance including memoization, lazy loading, and code splitting. Real-world examples with measurable improvements.',
    date: '2026-01-08',
    readTime: '6 min read',
    tags: ['React', 'Performance', 'Optimization'],
  },
  {
    id: 'typescript-best-practices',
    title: 'TypeScript Best Practices for Large-Scale Applications',
    excerpt: 'Lessons learned from building enterprise applications with TypeScript. Covers type design, organization patterns, and common pitfalls to avoid.',
    date: '2025-12-22',
    readTime: '10 min read',
    tags: ['TypeScript', 'Architecture', 'Best Practices'],
  },
  {
    id: 'web-accessibility-fundamentals',
    title: 'Web Accessibility: Beyond Compliance',
    excerpt: 'Building accessible web applications that everyone can use. Practical techniques for semantic HTML, ARIA, keyboard navigation, and screen reader support.',
    date: '2025-12-10',
    readTime: '7 min read',
    tags: ['Accessibility', 'HTML', 'UX'],
  },
  {
    id: 'database-optimization-strategies',
    title: 'Database Optimization Strategies for Node.js Apps',
    excerpt: 'Optimizing PostgreSQL queries, implementing connection pooling, and designing efficient database schemas for high-traffic applications.',
    date: '2025-11-28',
    readTime: '9 min read',
    tags: ['Database', 'PostgreSQL', 'Performance'],
  },
  {
    id: 'state-management-react',
    title: 'Modern State Management in React: Beyond Redux',
    excerpt: 'Exploring state management solutions including Context API, Zustand, and server state with React Query. When to use each approach.',
    date: '2025-11-15',
    readTime: '8 min read',
    tags: ['React', 'State Management', 'Architecture'],
  },
  {
    id: 'testing-strategies-frontend',
    title: 'Effective Testing Strategies for Frontend Applications',
    excerpt: 'Building confidence in your code with unit tests, integration tests, and E2E tests. Practical examples using Jest, Testing Library, and Playwright.',
    date: '2025-10-30',
    readTime: '11 min read',
    tags: ['Testing', 'Jest', 'Quality Assurance'],
  },
  {
    id: 'ci-cd-modern-web-apps',
    title: 'CI/CD Pipeline for Modern Web Applications',
    excerpt: 'Setting up automated testing, building, and deployment workflows with GitHub Actions and Vercel. Best practices for production deployments.',
    date: '2025-10-12',
    readTime: '7 min read',
    tags: ['DevOps', 'CI/CD', 'Automation'],
  },
]

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-12 animate-slide-in-down">
        <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">
          Technical Writing
        </h1>
        <p className="mt-4 text-pretty text-lg text-muted-foreground">
          Insights on web development, software engineering patterns, and lessons learned from building production applications.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {blogPosts.map((post, index) => (
          <Card key={post.id} className="group flex flex-col transition-smooth hover:shadow-lg hover:scale-105" style={{ animation: `slideInUp 0.6s ease-out ${0.1 * (index + 1)}s both` }}>
            <CardHeader>
              <div className="mb-3 flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4 animate-float" style={{ animationDelay: '0.2s' }} />
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </time>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>
              <CardTitle className="text-balance transition-colors group-hover:text-primary">
                <Link href={`/blog/${post.id}`}>{post.title}</Link>
              </CardTitle>
              <CardDescription className="text-pretty">{post.excerpt}</CardDescription>
            </CardHeader>
            <CardContent className="mt-auto">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

import Link from 'next/link'
import { ArrowRight, Code2, BookOpen, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const featuredProjects = [
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack marketplace with real-time inventory, payment processing, and admin dashboard.',
    tech: ['Next.js', 'PostgreSQL', 'Stripe', 'TypeScript'],
    outcome: 'Reduced page load time by 60% and increased conversion by 40%',
  },
  {
    title: 'Real-Time Collaboration Tool',
    description: 'WebSocket-based application enabling teams to collaborate on documents simultaneously.',
    tech: ['React', 'Node.js', 'WebSockets', 'MongoDB'],
    outcome: 'Supports 1000+ concurrent users with sub-100ms latency',
  },
  {
    title: 'AI Content Analyzer',
    description: 'Machine learning application that analyzes and categorizes content using NLP.',
    tech: ['Python', 'TensorFlow', 'FastAPI', 'React'],
    outcome: '95% accuracy rate with processing time under 2 seconds',
  },
]

const recentPosts = [
  {
    title: 'Building Scalable APIs with Next.js Server Actions',
    excerpt: 'Deep dive into Server Actions and how they simplify full-stack development.',
    date: '2026-01-15',
    readTime: '8 min read',
    tags: ['Next.js', 'API', 'Server Actions'],
  },
  {
    title: 'Optimizing React Performance: A Practical Guide',
    excerpt: 'Techniques for improving React app performance including memoization and lazy loading.',
    date: '2026-01-08',
    readTime: '6 min read',
    tags: ['React', 'Performance', 'Optimization'],
  },
  {
    title: 'TypeScript Best Practices for Large-Scale Applications',
    excerpt: 'Lessons learned from building enterprise applications with TypeScript.',
    date: '2025-12-22',
    readTime: '10 min read',
    tags: ['TypeScript', 'Architecture', 'Best Practices'],
  },
]

export default function HomePage() {
  return (
    <div className="mx-auto max-w-7xl">
      {/* Hero Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-balance text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Full-Stack Developer Building the Future
          </h1>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
            I create accessible, performant web applications that solve real problems. Passionate about clean code, user experience, and continuous learning.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg" className="gap-2">
              <Link href="/projects">
                View Projects
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2 bg-transparent">
              <Link href="/blog">
                Read Blog
                <BookOpen className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="border-t border-border bg-muted/30 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <Code2 className="h-6 w-6 text-primary" />
              <h2 className="text-3xl font-bold tracking-tight">Featured Projects</h2>
            </div>
            <p className="mt-2 text-muted-foreground">
              Real-world applications showcasing technical skills and problem-solving
            </p>
          </div>
          <Button asChild variant="ghost" className="gap-2">
            <Link href="/projects">
              View All
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <Card key={project.title} className="flex flex-col transition-shadow hover:shadow-lg">
              <CardHeader>
                <CardTitle className="text-balance">{project.title}</CardTitle>
                <CardDescription className="text-pretty">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="rounded-lg border border-border bg-muted/50 p-3">
                  <p className="text-sm text-foreground">
                    <Sparkles className="mb-1 mr-1 inline-block h-4 w-4 text-primary" />
                    <strong>Outcome:</strong> {project.outcome}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Recent Blog Posts */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-primary" />
              <h2 className="text-3xl font-bold tracking-tight">Latest Writing</h2>
            </div>
            <p className="mt-2 text-muted-foreground">
              Technical insights and lessons learned from building software
            </p>
          </div>
          <Button asChild variant="ghost" className="gap-2">
            <Link href="/blog">
              View All
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {recentPosts.map((post) => (
            <article key={post.title} className="group">
              <div className="mb-3 flex items-center gap-3 text-sm text-muted-foreground">
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </time>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
              <h3 className="mb-2 text-balance text-xl font-semibold tracking-tight transition-colors group-hover:text-primary">
                <Link href="/blog">{post.title}</Link>
              </h3>
              <p className="mb-4 text-pretty text-muted-foreground">{post.excerpt}</p>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border bg-muted/30 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight">
            {"Let's Build Something Together"}
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            {"I'm always interested in hearing about new projects and opportunities."}
          </p>
          <Button asChild size="lg" className="mt-8">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

import type { Metadata } from 'next'
import { ExternalLink, Github } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Projects | Developer Portfolio',
  description: 'Explore my engineering projects, technical implementations, and problem-solving journey.',
}

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Built a full-stack e-commerce platform with real-time inventory management, secure payment processing via Stripe, and a comprehensive admin dashboard. Implemented product search with Elasticsearch and image optimization with next/image.',
    tech: ['Next.js 16', 'PostgreSQL', 'Stripe', 'TypeScript', 'Prisma', 'Tailwind CSS'],
    outcome: 'Reduced page load time by 60% through SSR and image optimization. Increased conversion rate by 40% with improved UX.',
    learnings: 'Learned about payment security, inventory consistency challenges, and optimizing database queries for scale.',
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    id: 2,
    title: 'Real-Time Collaboration Tool',
    description: 'Developed a WebSocket-based collaborative document editor allowing multiple users to edit simultaneously. Implemented operational transformation for conflict resolution and real-time cursor tracking.',
    tech: ['React', 'Node.js', 'WebSockets', 'MongoDB', 'Redis', 'Docker'],
    outcome: 'Supports 1000+ concurrent users with sub-100ms latency. Successfully handles complex concurrent edits without data loss.',
    learnings: 'Deep dive into distributed systems, eventual consistency, and real-time synchronization patterns.',
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    id: 3,
    title: 'AI Content Analyzer',
    description: 'Machine learning application that analyzes text content using natural language processing. Classifies content by topic, sentiment, and complexity. Built RESTful API with FastAPI and modern React frontend.',
    tech: ['Python', 'TensorFlow', 'FastAPI', 'React', 'scikit-learn', 'spaCy'],
    outcome: 'Achieved 95% accuracy rate on test dataset. Processes content in under 2 seconds with efficient model optimization.',
    learnings: 'Explored ML model optimization, API design for ML services, and bridging Python backends with React frontends.',
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    id: 4,
    title: 'Task Management Dashboard',
    description: 'Comprehensive project management tool with Kanban boards, Gantt charts, team collaboration features, and time tracking. Includes real-time notifications and advanced filtering capabilities.',
    tech: ['Next.js', 'Supabase', 'TypeScript', 'shadcn/ui', 'Recharts'],
    outcome: 'Used by 50+ teams in beta. Improved team productivity metrics by 25% based on user feedback.',
    learnings: 'Gained experience with complex state management, drag-and-drop interactions, and real-time data synchronization.',
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    id: 5,
    title: 'Developer Portfolio Generator',
    description: 'SaaS platform that helps developers create and deploy professional portfolios in minutes. Features customizable templates, markdown blog support, and automatic deployment to Vercel.',
    tech: ['Next.js', 'Vercel API', 'MDX', 'PostgreSQL', 'Stripe'],
    outcome: '200+ portfolios generated in first month. Average setup time reduced from hours to 10 minutes.',
    learnings: 'Learned about multi-tenancy architecture, template systems, and integrating with deployment platforms.',
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    id: 6,
    title: 'Open Source UI Component Library',
    description: 'Accessible, customizable React component library built with TypeScript. Includes comprehensive documentation, Storybook examples, and automated accessibility testing.',
    tech: ['React', 'TypeScript', 'Storybook', 'Jest', 'Radix UI', 'CSS Modules'],
    outcome: '500+ GitHub stars, used in 20+ production applications. 100% accessibility coverage.',
    learnings: 'Deep understanding of component API design, accessibility standards, and maintaining open source projects.',
    github: 'https://github.com',
    demo: 'https://example.com',
  },
]

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-12">
        <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">
          Projects
        </h1>
        <p className="mt-4 text-pretty text-lg text-muted-foreground">
          A collection of engineering projects demonstrating full-stack development, problem-solving, and continuous learning. Each project includes technical details, outcomes, and key learnings.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {projects.map((project) => (
          <Card key={project.id} className="flex flex-col transition-shadow hover:shadow-lg">
            <CardHeader>
              <CardTitle className="text-balance text-2xl">{project.title}</CardTitle>
              <CardDescription className="text-pretty">{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 space-y-6">
              <div>
                <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-foreground">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="rounded-lg border border-border bg-muted/30 p-4">
                <h3 className="mb-2 text-sm font-semibold text-foreground">Outcome</h3>
                <p className="text-sm text-muted-foreground">{project.outcome}</p>
              </div>

              <div>
                <h3 className="mb-2 text-sm font-semibold text-foreground">Key Learnings</h3>
                <p className="text-sm text-muted-foreground">{project.learnings}</p>
              </div>
            </CardContent>
            <CardFooter className="gap-2">
              <Button asChild variant="outline" size="sm" className="gap-2 bg-transparent">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                  Code
                </a>
              </Button>
              <Button asChild size="sm" className="gap-2">
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4" />
                  Live Demo
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

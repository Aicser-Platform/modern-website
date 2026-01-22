import type { Metadata } from 'next'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'About | Developer Portfolio',
  description: 'Learn about my journey as a full-stack developer, skills, and professional background.',
}

const skills = {
  'Frontend': ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML/CSS', 'JavaScript'],
  'Backend': ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'REST APIs', 'GraphQL'],
  'Tools & Platforms': ['Git', 'Docker', 'Vercel', 'AWS', 'GitHub Actions', 'Figma'],
  'Practices': ['Agile', 'TDD', 'CI/CD', 'Code Review', 'Documentation', 'Accessibility'],
}

const timeline = [
  {
    year: '2024 - Present',
    title: 'Senior Full-Stack Developer',
    company: 'Tech Company',
    description: 'Leading development of customer-facing web applications. Architecting scalable solutions and mentoring junior developers.',
  },
  {
    year: '2022 - 2024',
    title: 'Full-Stack Developer',
    company: 'Startup Inc',
    description: 'Built core product features using React and Node.js. Improved application performance by 40% through optimization.',
  },
  {
    year: '2020 - 2022',
    title: 'Frontend Developer',
    company: 'Digital Agency',
    description: 'Developed responsive web applications for diverse clients. Collaborated with designers to create pixel-perfect implementations.',
  },
  {
    year: '2019 - 2020',
    title: 'Self-Taught Developer',
    company: 'Personal Projects',
    description: 'Learned web development through online courses, documentation, and building real projects. Focused on JavaScript and React.',
  },
]

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-12">
        <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">
          About Me
        </h1>
        <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
          {"I'm a full-stack developer passionate about building accessible, performant web applications that solve real problems."}
        </p>
      </div>

      {/* Story Section */}
      <section className="mb-16">
        <h2 className="mb-6 text-2xl font-bold tracking-tight">My Journey</h2>
        <div className="space-y-4 text-pretty leading-relaxed text-muted-foreground">
          <p>
            My journey into software development began with curiosity and a desire to build things. What started as tinkering with HTML and CSS grew into a deep passion for creating web applications that make a difference.
          </p>
          <p>
            Over the years, {"I've"} worked on projects ranging from small business websites to large-scale enterprise applications. Each project has taught me something new—whether {"it's"} a technical skill, a better way to collaborate, or how to approach complex problems with clarity.
          </p>
          <p>
            I believe the best code is code that {"doesn't"} just work, but is maintainable, accessible, and built with the user in mind. {"I'm"} constantly learning new technologies and patterns, while staying grounded in fundamentals that stand the test of time.
          </p>
          <p>
            When {"I'm"} not coding, you can find me contributing to open source, writing technical articles, or exploring new frameworks and tools. I believe in giving back to the developer community that has taught me so much.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="mb-16">
        <h2 className="mb-6 text-2xl font-bold tracking-tight">Skills & Tools</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {Object.entries(skills).map(([category, items]) => (
            <Card key={category}>
              <CardContent className="pt-6">
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-foreground">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Experience Timeline */}
      <section>
        <h2 className="mb-6 text-2xl font-bold tracking-tight">Experience</h2>
        <div className="space-y-8">
          {timeline.map((item, index) => (
            <div key={index} className="relative pl-8 before:absolute before:left-0 before:top-2 before:h-full before:w-px before:bg-border after:absolute after:left-0 after:top-2 after:h-2 after:w-2 after:-translate-x-[3.5px] after:rounded-full after:bg-primary last:before:hidden">
              <div className="mb-1 text-sm font-semibold text-primary">{item.year}</div>
              <h3 className="mb-1 text-lg font-semibold">{item.title}</h3>
              <div className="mb-2 text-sm text-muted-foreground">{item.company}</div>
              <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Focus Section */}
      <section className="mt-16 rounded-lg border border-border bg-muted/30 p-8">
        <h2 className="mb-4 text-2xl font-bold tracking-tight">Current Focus</h2>
        <ul className="space-y-2 text-pretty leading-relaxed text-muted-foreground">
          <li>• Building production-ready applications with Next.js 16 and React Server Components</li>
          <li>• Exploring advanced TypeScript patterns and type-safe API development</li>
          <li>• Improving web accessibility and performance optimization techniques</li>
          <li>• Contributing to open source projects and writing technical content</li>
        </ul>
      </section>
    </div>
  )
}

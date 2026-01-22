import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, Calendar, Clock } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

// Mock blog post data - in production, this would come from a CMS or markdown files
const blogPosts = {
  'building-scalable-apis-nextjs': {
    title: 'Building Scalable APIs with Next.js Server Actions',
    date: '2026-01-15',
    readTime: '8 min read',
    tags: ['Next.js', 'API', 'Server Actions', 'TypeScript'],
    content: `
# Building Scalable APIs with Next.js Server Actions

Server Actions are a powerful new feature in Next.js that simplify full-stack development by allowing you to write server-side code directly in your components.

## What are Server Actions?

Server Actions are asynchronous functions that run on the server. They can be used in Server and Client Components to handle form submissions and data mutations.

## Benefits of Server Actions

### Type Safety
One of the biggest advantages is end-to-end type safety. Your API contracts are defined in TypeScript, and both client and server code share the same types.

### Simplified Architecture
No need to create separate API routes for every data mutation. Server Actions reduce boilerplate and make your codebase more maintainable.

### Progressive Enhancement
Forms using Server Actions work even before JavaScript loads, improving the user experience for all visitors.

## Best Practices

1. **Always validate input** - Never trust client data
2. **Use try-catch blocks** - Handle errors gracefully
3. **Return meaningful errors** - Help users understand what went wrong
4. **Revalidate data** - Keep your UI in sync with server state

## Example Implementation

\`\`\`typescript
'use server'

import { revalidatePath } from 'next/cache'
import { z } from 'zod'

const schema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
})

export async function createUser(formData: FormData) {
  const validated = schema.parse({
    name: formData.get('name'),
    email: formData.get('email'),
  })

  // Database operation
  await db.user.create({ data: validated })

  revalidatePath('/users')
  return { success: true }
}
\`\`\`

## Conclusion

Server Actions represent a significant step forward in full-stack development with Next.js. They reduce complexity while maintaining type safety and improving user experience.
    `,
  },
}

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts[slug as keyof typeof blogPosts]

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: `${post.title} | Developer Portfolio`,
    description: post.title,
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = blogPosts[slug as keyof typeof blogPosts]

  if (!post) {
    notFound()
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <Button asChild variant="ghost" className="mb-8 gap-2">
        <Link href="/blog">
          <ArrowLeft className="h-4 w-4" />
          Back to Blog
        </Link>
      </Button>

      <article>
        <header className="mb-8 border-b border-border pb-8">
          <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">
            {post.title}
          </h1>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
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

          <div className="mt-4 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </header>

        <div className="prose prose-slate max-w-none dark:prose-invert prose-headings:font-bold prose-headings:tracking-tight prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl prose-p:leading-relaxed prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-code:rounded prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:font-mono prose-code:text-sm prose-code:before:content-[''] prose-code:after:content-[''] prose-pre:bg-muted prose-pre:border prose-pre:border-border">
          {post.content.split('\n').map((line, i) => {
            if (line.startsWith('# ')) {
              return (
                <h1 key={i} className="mb-4 mt-8">
                  {line.slice(2)}
                </h1>
              )
            }
            if (line.startsWith('## ')) {
              return (
                <h2 key={i} className="mb-3 mt-6">
                  {line.slice(3)}
                </h2>
              )
            }
            if (line.startsWith('### ')) {
              return (
                <h3 key={i} className="mb-2 mt-4">
                  {line.slice(4)}
                </h3>
              )
            }
            if (line.startsWith('```')) {
              return null // Handle code blocks separately
            }
            if (line.trim() === '') {
              return <br key={i} />
            }
            if (line.match(/^\d+\./)) {
              return (
                <li key={i} className="ml-6">
                  {line.replace(/^\d+\.\s/, '')}
                </li>
              )
            }
            return (
              <p key={i} className="mb-4">
                {line}
              </p>
            )
          })}
        </div>
      </article>
    </div>
  )
}

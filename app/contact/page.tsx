import type { Metadata } from 'next'
import { Github, Linkedin, Mail, Twitter } from 'lucide-react'
import { ContactForm } from '@/components/contact-form'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Contact | Developer Portfolio',
  description: 'Get in touch to discuss projects, opportunities, or just to connect.',
}

const socialLinks = [
  {
    name: 'Email',
    icon: Mail,
    href: 'mailto:your.email@example.com',
    description: 'your.email@example.com',
  },
  {
    name: 'GitHub',
    icon: Github,
    href: 'https://github.com/yourusername',
    description: '@yourusername',
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    href: 'https://linkedin.com/in/yourusername',
    description: '/in/yourusername',
  },
  {
    name: 'Twitter',
    icon: Twitter,
    href: 'https://twitter.com/yourusername',
    description: '@yourusername',
  },
]

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-12 text-center animate-slide-in-down">
        <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">
          {"Let's Connect"}
        </h1>
        <p className="mt-4 text-pretty text-lg text-muted-foreground">
          {"I'm always interested in hearing about new projects, opportunities, or just connecting with fellow developers."}
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Contact Form */}
        <div className="lg:col-span-2 animate-slide-in-left">
          <Card className="transition-smooth hover:shadow-lg" style={{ animation: 'slideInUp 0.6s ease-out both' }}>
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
              <CardDescription>
                Fill out the form below and {"I'll"} get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
        </div>

        {/* Social Links */}
        <div className="space-y-6 animate-slide-in-right">
          <div>
            <h2 className="mb-4 text-xl font-semibold">Connect With Me</h2>
            <div className="space-y-3">
              {socialLinks.map((link, index) => {
                const Icon = link.icon
                return (
                  <Button
                    key={link.name}
                    asChild
                    variant="outline"
                    className="w-full justify-start gap-3 bg-transparent transition-smooth hover:scale-105"
                    style={{ animation: `slideInRight 0.6s ease-out ${0.1 * (index + 1)}s both` }}
                  >
                    <a href={link.href} target="_blank" rel="noopener noreferrer">
                      <Icon className="h-5 w-5" />
                      <div className="flex flex-col items-start gap-0.5">
                        <span className="text-sm font-medium">{link.name}</span>
                        <span className="text-xs text-muted-foreground">{link.description}</span>
                      </div>
                    </a>
                  </Button>
                )
              })}
            </div>
          </div>

          <Card className="bg-muted/30 transition-smooth hover:scale-105" style={{ animation: 'fadeInScale 0.6s ease-out 0.3s both' }}>
            <CardHeader>
              <CardTitle className="text-base">Response Time</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                I typically respond to messages within 24-48 hours. For urgent inquiries, feel free to reach out on LinkedIn.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-muted/30 transition-smooth hover:scale-105" style={{ animation: 'fadeInScale 0.6s ease-out 0.4s both' }}>
            <CardHeader>
              <CardTitle className="text-base">Open to</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Full-time opportunities</li>
                <li>• Freelance projects</li>
                <li>• Technical consulting</li>
                <li>• Speaking engagements</li>
                <li>• Open source collaboration</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

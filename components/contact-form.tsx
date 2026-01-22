'use client'

import React from "react"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/hooks/use-toast'

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message'),
    }

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // In production, this would send to your API endpoint
    console.log('[v0] Contact form submission:', data)

    toast({
      title: 'Message sent!',
      description: "Thanks for reaching out. I'll get back to you soon.",
    })

    setIsSubmitting(false)
    e.currentTarget.reset()
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            placeholder="Your name"
            required
            disabled={isSubmitting}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="your.email@example.com"
            required
            disabled={isSubmitting}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="subject">Subject</Label>
        <Input
          id="subject"
          name="subject"
          placeholder="What would you like to discuss?"
          required
          disabled={isSubmitting}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell me more about your project or inquiry..."
          rows={6}
          required
          disabled={isSubmitting}
          className="resize-none"
        />
      </div>

      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  )
}

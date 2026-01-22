# Developer Portfolio & Knowledge Blog

A modern, production-ready developer portfolio template showcasing engineering projects, technical blog posts, and professional experience. Built with Next.js 16, TypeScript, and Tailwind CSS.

## Features

### Core Functionality
- **Portfolio Showcase** - Display your best projects with detailed case studies
- **Technical Blog** - Share insights, tutorials, and learning experiences
- **About Page** - Professional journey, skills, and experience timeline
- **Contact Form** - Direct communication with form validation and toast notifications
- **Responsive Design** - Mobile-first approach with seamless desktop experience

### Design & UX
- **Light/Dark Mode** - System-aware theme switching with smooth transitions
- **Modern Aesthetics** - Clean, minimal design with generous whitespace
- **Typography** - Professional font pairing (Inter + JetBrains Mono)
- **Micro-interactions** - Subtle hover effects and animations
- **Accessibility** - Semantic HTML, ARIA labels, keyboard navigation

### Technical Excellence
- **Next.js 16** - Latest App Router with Server Components
- **TypeScript** - Type-safe development throughout
- **Tailwind CSS v4** - Modern utility-first styling with custom theme
- **shadcn/ui** - High-quality, accessible component library
- **SEO Optimized** - Meta tags, Open Graph, structured data
- **Performance** - Optimized fonts, images, and code splitting

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Components**: shadcn/ui + Radix UI primitives
- **Icons**: Lucide React
- **Theme**: next-themes
- **Analytics**: Vercel Analytics
- **Fonts**: Inter (sans), JetBrains Mono (mono)

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Clone or download this template**
   ```bash
   # Download from v0.app or use shadcn CLI
   npx shadcn@latest init
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## Project Structure

```
/
├── app/
│   ├── page.tsx              # Home page with hero & featured content
│   ├── projects/
│   │   └── page.tsx          # Projects portfolio
│   ├── blog/
│   │   ├── page.tsx          # Blog listing
│   │   └── [slug]/
│   │       └── page.tsx      # Individual blog posts
│   ├── about/
│   │   └── page.tsx          # About page
│   ├── contact/
│   │   └── page.tsx          # Contact page
│   ├── layout.tsx            # Root layout with theme & nav
│   └── globals.css           # Global styles & theme tokens
├── components/
│   ├── DemoHeader.tsx        # Aicser AI Studio branding header
│   ├── DemoFooter.tsx        # Footer with demo disclaimer
│   ├── navigation.tsx        # Main navigation bar
│   ├── theme-provider.tsx    # Theme context provider
│   ├── theme-toggle.tsx      # Light/dark mode toggle
│   ├── contact-form.tsx      # Contact form component
│   └── ui/                   # shadcn/ui components
└── README.md
```

## Customization Guide

### 1. Personal Information

**Update metadata in `app/layout.tsx`:**
```typescript
export const metadata: Metadata = {
  title: 'Your Name | Full-Stack Developer',
  description: 'Your custom description...',
  // ... update other fields
}
```

**Update content in pages:**
- `app/page.tsx` - Hero section, tagline, featured projects
- `app/about/page.tsx` - Bio, skills, experience
- `app/projects/page.tsx` - Project details and case studies
- `app/blog/page.tsx` - Blog posts (or integrate a CMS)
- `app/contact/page.tsx` - Contact links and social profiles

### 2. Styling & Branding

**Customize colors in `app/globals.css`:**
```css
:root {
  --primary: oklch(0.25 0 0);     /* Your brand color */
  --accent: oklch(0.95 0 0);      /* Accent color */
  /* ... modify other tokens */
}
```

**Change fonts in `app/layout.tsx`:**
```typescript
import { YourFont, YourMonoFont } from 'next/font/google'
```

### 3. Content Management

**Option A: Static Content** (Current)
- Edit page files directly
- Simple and fast
- Version controlled

**Option B: Headless CMS Integration**
- Connect Sanity, Contentful, or Strapi
- Dynamic content updates
- Non-technical editing

**Option C: MDX Blog**
- Write posts in Markdown
- Code syntax highlighting
- Component embedding

### 4. Add Real Projects & Blog Posts

Replace placeholder content with your actual work:

**Projects:**
```typescript
const projects = [
  {
    title: "Your Real Project",
    description: "What you built and why",
    tech: ["React", "Node.js", "PostgreSQL"],
    outcome: "Impact and results",
    learnings: "What you learned",
    link: "https://project-url.com"
  }
]
```

**Blog Posts:**
- Add real articles in `app/blog/[slug]/page.tsx`
- Or integrate a blogging platform
- Include code examples and technical depth

## Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin your-repo-url
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Visit [vercel.com/new](https://vercel.com/new)
   - Import your GitHub repository
   - Configure project settings (auto-detected)
   - Click "Deploy"

3. **Custom Domain** (Optional)
   - Add your custom domain in Vercel dashboard
   - Update DNS records
   - SSL automatically configured

### Other Platforms
- **Netlify**: Connect GitHub repo and deploy
- **Cloudflare Pages**: Similar GitHub integration
- **Self-hosted**: Build with `npm run build` and serve `out/` directory

## Environment Variables

Currently no environment variables required. Add as needed for:

- Contact form backend (email service)
- CMS API keys
- Analytics tokens
- Database connections

Create `.env.local`:
```bash
NEXT_PUBLIC_SITE_URL=https://yourportfolio.com
# Add other variables as needed
```

## Development Tips

### Adding New Pages
```bash
# Create new route
mkdir app/new-page
touch app/new-page/page.tsx
```

### Adding shadcn Components
```bash
# Add new UI components
npx shadcn@latest add [component-name]
```

### Type Safety
```typescript
// Define types for your content
type Project = {
  title: string
  description: string
  tech: string[]
  link?: string
}
```

## Performance Optimizations

- Image optimization with `next/image`
- Font optimization with `next/font`
- Server Components by default
- Code splitting per route
- CSS inlining for critical styles

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## License

This template is provided by **Aicser AI Studio** as a production-ready demo.

© 2026 AI Studio by Aicser. All rights reserved.

## Credits

- **Built with**: [v0.app](https://ai-studio.aicser.com)
- **Framework**: [Next.js](https://nextjs.org)
- **Components**: [shadcn/ui](https://ui.shadcn.com)
- **Icons**: [Lucide](https://lucide.dev)
- **Deployment**: [Vercel](https://vercel.com)

## Support

Need help customizing this template?

- Visit [ai-studio.aicser.com](https://ai-studio.aicser.com)
- Request a custom build
- View more templates

---

**This is a demo template** - Customize it to make it your own!

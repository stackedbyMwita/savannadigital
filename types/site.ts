// ─────────────────────────────────────────────────────────────
// SITE CONFIG — Master Type
// Every piece of content a site can have lives here.
// TypeScript enforces that every company content file
// satisfies this shape completely.
// ─────────────────────────────────────────────────────────────

export type NavItem = {
  label:    string
  href:     string
  // 'route'  — full page navigation via Next.js Link
  // 'anchor' — smooth scroll via Lenis scrollTo (home page sections)
  // Defaults to 'route' in Navbar if omitted
  type?:    'route' | 'anchor'
  children?: Array<{ label: string; href: string }>
}

export type Stat = {
  value: string   // '120+'
  label: string   // 'Projects Delivered'
}

export type BlogAuthor = {
  name: string,
  avatar: string
}

export type Service = {
  icon:        string   // Lucide icon name e.g. 'Code2'
  title:       string
  description: string
  href?:       string
}

export type CaseStudySection = {
  year:        string
  duration:    string
  services:    string[]
  teamSlugs:   string[]   // matches TeamMember.name
  challenge:   string[]   // paragraphs
  approach:    string[]   // paragraphs
  outcome:     string[]   // paragraphs
  screenshots: string[]   // paths to /public or external URLs
}

export type WorkItem = {
  slug:        string
  title:       string
  client:      string
  category:    string
  coverImage:  string
  tags:        string[]
  summary:     string
  results:     Stat[]
  // Optional — present for case study detail pages
  caseStudy?:  CaseStudySection
}

export type TeamMember = {
  slug:       string   // 'amina-oduya' — URL slug for /team/[slug]
  name:       string
  role:       string
  department: string   // 'Engineering' | 'Design' | 'Leadership' | 'Operations'
  bio:        string   // Short bio — used in cards + hero
  fullBio?:   string[] // Paragraphs for the detail page
  avatar:     string
  linkedin?:  string
  twitter?:   string
  skills?:    string[] // ['Product Strategy', 'React', ...]
  // Work items this member contributed to (by slug)
  projects?:  string[]
}

export type Testimonial = {
  quote:    string
  author:   string
  role:     string
  company:  string
  avatar?:  string
}

export type Client = {
  name: string
  logo: string
}

export type BlogPost = {
  slug:       string
  title:      string
  excerpt:    string
  coverImage: string
  category:   string
  date:       string      // ISO string e.g. '2025-03-01'
  readTime:   string      // '5 min read'
  author:     BlogAuthor
  body:       string[]    // paragraphs — index 2 rendered as pull quote
  toc?:       string[]    // sidebar table of contents headings (optional)
  tags?:      string[]    // tag pills at end of article (optional)
}

export type SiteTokens = {
  primary:      string   // '#1A6B3C'
  accent:       string   // '#F59E0B'
  dark:         string   // '#0D1F12'
  surface:      string   // '#F5F0E8'
  text:         string   // '#1C1C1E'
  muted:        string   // '#64748B'
  border?:      string   // '#E2E8F0' — optional, falls back in BrandProvider
  // Font CSS variable names — e.g. 'var(--font-outfit)'
  // Only set if site uses a font different from the global Outfit
  fontDisplay?: string
  fontBody?:    string
}

export type SiteLayout = {
  // true  = hero has dark/image background — use light (white) logo + links when at top
  // false = hero has light background — use dark logo + links always
  heroIsDark:  boolean
  // Controls footer layout
  // 'columns' — full footer with link groups + socials
  // 'minimal' — single row: logo + legal + socials
  footerStyle: 'columns' | 'minimal'
}

export type SiteConfig = {

  // ── Identity ───────────────────────────────────────────────
  id:          string   // 'savanna-digital' — matches NEXT_PUBLIC_SITE_ID
  name:        string   // 'Savanna Digital Solutions'
  tagline:     string   // 'Rooted in Africa. Built for the World.'
  description: string   // Used in meta description
  url:         string   // 'https://savannahdm.vercel.app'

  logo: {
    full:    string   // Full colour logo — for light backgrounds
    mark:    string   // Icon/symbol only
    light:   string   // White version — for dark backgrounds
    dark:    string   // Dark version — alias for full, explicit
    favicon: string   // '/favicon.ico' or '/sites/x/favicon.ico'
  }

  // ── Brand tokens ────────────────────────────────────────────
  // Injected as CSS custom properties by BrandProvider
  tokens: SiteTokens

  // ── Layout behaviour ────────────────────────────────────────
  layout: SiteLayout

  // ── Navigation ──────────────────────────────────────────────
  nav: NavItem[]

  // ── Home page sections ──────────────────────────────────────
  hero: {
    eyebrow:        string      // Small label above headline
    headline:       string[]    // Array of lines — GSAP staggers each
    subheadline:    string
    cta:            { label: string; href: string }
    secondaryCta?:  { label: string; href: string }
    backgroundType: 'gradient' | 'image' | 'particles'
    backgroundSrc?: string      // Required when backgroundType = 'image'
  }

  stats:        Stat[]
  services:     Service[]
  work:         WorkItem[]
  team:         TeamMember[]
  testimonials: Testimonial[]
  clients:      Client[]
  blog:         BlogPost[]

  // ── Contact ─────────────────────────────────────────────────
  contact: {
    email:        string
    phone?:       string
    address?:     string
    // Dropdown options in the contact form
    services:     string[]
    budgetRanges: string[]
  }

  // ── SEO ─────────────────────────────────────────────────────
  seo: {
    titleTemplate:  string    // '%s | Savanna Digital Solutions'
    ogImage:        string    // '/sites/savanna-digital/og.jpg'
    keywords:       string[]
    twitterHandle?: string    // '@savannadigital'
  }

  // ── Footer ──────────────────────────────────────────────────
  footer: {
    tagline: string
    links: Array<{
      group: string
      items: Array<{ label: string; href: string }>
    }>
    socials: Array<{
      platform: 'linkedin' | 'twitter' | 'instagram' | 'behance' | 'github' | 'youtube'
      href:     string
    }>
    legal: string   // '© 2025 Savanna Digital Solutions Ltd.'
  }
}
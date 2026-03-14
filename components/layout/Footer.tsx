'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'motion/react'
import { Linkedin, Twitter, Instagram, Github, Youtube } from 'lucide-react'
import { cn } from '@/lib/utils'
import { site } from '@/content'
import { CTAButton } from '@/components/ui/CTAButton'

// ─────────────────────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────────────────────

const SOCIAL_ICONS = {
  linkedin:  Linkedin,
  twitter:   Twitter,
  instagram: Instagram,
  github:    Github,
  youtube:   Youtube,
  behance:   ({ size }: { size: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029H23.726zm-7.726-3h3.543c-.073-1.89-1.218-2.57-1.783-2.57-.626 0-1.665.375-1.76 2.57zM7.33 5C10.443 5 12 6.58 12 8.757c0 1.493-.817 2.553-2.104 3.084C11.437 12.3 12.5 13.59 12.5 15.5 12.5 18.022 10.898 19 8.368 19H2V5h5.33zm-.077 5.475c1.066 0 1.747-.5 1.747-1.443 0-.856-.627-1.375-1.686-1.375H5v2.818h2.253zm.28 5.793c1.212 0 1.967-.657 1.967-1.698 0-.98-.755-1.65-1.967-1.65H5v3.348h2.533z"/>
    </svg>
  ),
}

function SocialIcon({ platform, href }: { platform: string; href: string }) {
  const Icon = SOCIAL_ICONS[platform as keyof typeof SOCIAL_ICONS]
  if (!Icon) return null

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={platform}
      className={cn(
        'flex items-center justify-center w-9 h-9 rounded-full',
        'transition-colors duration-200',
        'border border-white/10 hover:border-white/30',
        'text-white/40 hover:text-white',
      )}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.94 }}
    >
      <Icon size={15} />
    </motion.a>
  )
}

// ─────────────────────────────────────────────────────────────
// SHARED BOTTOM BAR
// Used in both variants
// ─────────────────────────────────────────────────────────────

function BottomBar() {
  return (
    <div
      className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8"
      style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
    >
      <p className="text-xs tabular-nums" style={{ color: 'rgba(255,255,255,0.3)' }}>
        {site.footer.legal}
      </p>

      <div className="flex items-center gap-6">
        {[
          { label: 'Privacy', href: '/privacy' },
          { label: 'Terms',   href: '/terms'   },
        ].map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="text-xs transition-colors duration-200"
            style={{ color: 'rgba(255,255,255,0.3)' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'rgba(255,255,255,0.7)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'rgba(255,255,255,0.3)'
            }}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────
// COLUMNS VARIANT
// Full footer — logo + tagline + link groups + CTA + socials
// Use for: content-rich sites, agencies, SaaS
// ─────────────────────────────────────────────────────────────

function FooterColumns() {
  return (
    <footer
      className="relative overflow-hidden py-16"
      style={{ backgroundColor: site.tokens.dark }}
    >
      {/* Grain texture */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
        }}
      />

      {/* Large background wordmark — decorative */}
      <div
        aria-hidden
        className="absolute bottom-0 right-10 leading-none select-none pointer-events-none overflow-hidden"
        style={{
          fontSize: 'clamp(6rem, 18vw, 16rem)',
          fontWeight: 900,
          color: 'rgba(255,255,255,0.02)',
          lineHeight: 1,
          letterSpacing: '-0.04em',
        }}
      >
        {site.name.split(' ')[0]}
      </div>

      <div className="container relative pt-20 pb-10">

        {/* ── Top: Logo + tagline + CTA ──────────────────── */}
        <div
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 pb-16"
          style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}
        >
          {/* Left */}
          <div className="max-w-sm space-y-6">
            <Link href="/" aria-label={`${site.name} — Home`}>
              <Image
                src={site.logo.light}
                alt={site.name}
                width={140}
                height={36}
                className="h-9 w-auto"
              />
            </Link>
            <p
              className="text-sm leading-relaxed"
              style={{ color: 'rgba(255,255,255,0.45)' }}
            >
              {site.footer.tagline}
            </p>
            {/* Socials */}
            <div className="flex items-center gap-2">
              {site.footer.socials.map((s) => (
                <SocialIcon key={s.platform} platform={s.platform} href={s.href} />
              ))}
            </div>
          </div>

          {/* Right — CTA block */}
          <div className="space-y-4">
            <p
              className="text-sm font-medium"
              style={{ color: 'rgba(255,255,255,0.5)' }}
            >
              Ready to build something great?
            </p>
            <CTAButton
              href="/contact"
              variant="primary"
              size="md"
            >
              Start a Project
            </CTAButton>
          </div>
        </div>

        {/* ── Middle: Link groups ───────────────────────── */}
        <div className={cn(
          'grid gap-10 py-16',
          site.footer.links.length === 2 ? 'grid-cols-2 md:grid-cols-2' :
          site.footer.links.length === 3 ? 'grid-cols-2 md:grid-cols-3' :
          'grid-cols-2 md:grid-cols-4'
        )}>
          {site.footer.links.map((group) => (
            <div key={group.group} className="space-y-5">
              <p
                className="text-xs uppercase tracking-widest font-semibold"
                style={{ color: 'rgba(255,255,255,0.3)' }}
              >
                {group.group}
              </p>
              <ul className="space-y-3">
                {group.items.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="text-sm transition-colors duration-200 block"
                      style={{ color: 'rgba(255,255,255,0.5)' }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = 'rgba(255,255,255,0.9)'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = 'rgba(255,255,255,0.5)'
                      }}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── Bottom bar ────────────────────────────────── */}
        <BottomBar />

      </div>
    </footer>
  )
}

// ─────────────────────────────────────────────────────────────
// MINIMAL VARIANT
// Single compact band — logo + tagline + socials + legal
// Use for: luxury brands, studios, personal portfolios
// ─────────────────────────────────────────────────────────────

function FooterMinimal() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{ backgroundColor: site.tokens.dark }}
    >
      {/* Subtle top accent line in brand primary */}
      <div
        aria-hidden
        className="absolute top-0 inset-x-0 h-[1px]"
        style={{
          background: `linear-gradient(90deg, transparent, ${site.tokens.primary}, ${site.tokens.accent}, transparent)`,
        }}
      />

      <div className="container py-12">

        {/* ── Main row ──────────────────────────────────── */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">

          {/* Logo + tagline */}
          <div className="flex items-center gap-6">
            <Link href="/" aria-label={`${site.name} — Home`}>
              <Image
                src={site.logo.light}
                alt={site.name}
                width={110}
                height={28}
                className="h-7 w-auto"
              />
            </Link>
            <div
              aria-hidden
              className="hidden md:block w-px h-6"
              style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
            />
            <p
              className="hidden md:block text-sm italic"
              style={{ color: 'rgba(255,255,255,0.3)' }}
            >
              {site.footer.tagline}
            </p>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-2">
            {site.footer.socials.map((s) => (
              <SocialIcon key={s.platform} platform={s.platform} href={s.href} />
            ))}
          </div>

        </div>

        {/* ── Bottom bar ────────────────────────────────── */}
        <div className="mt-10">
          <BottomBar />
        </div>

      </div>
    </footer>
  )
}

// ─────────────────────────────────────────────────────────────
// FOOTER — Factory
// Reads site.layout.footerStyle and renders the correct variant
// ─────────────────────────────────────────────────────────────

export function Footer() {
  if (site.layout.footerStyle === 'minimal') {
    return <FooterMinimal />
  }

  return <FooterColumns />
}
'use client'

import { motion } from 'motion/react'
import { cn } from '@/lib/utils'
import { site } from '@/content'

// ─────────────────────────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────────────────────────

export type SectionTitleProps = {
  badge?:       string
  title:        string
  description?: string

  // Layout variants
  // 'centered' — badge + title + description all centred (default)
  // 'left'     — left-aligned, description beside title on desktop
  // 'split'    — title left, description right (2-column on desktop)
  variant?: 'centered' | 'left' | 'split'

  // Size variants
  // 'sm' — smaller headings, tighter spacing (for cards, sidebars)
  // 'md' — default
  // 'lg' — large hero-style section opener
  size?: 'sm' | 'md' | 'lg'

  // Colour scheme
  // 'light' — dark text on light background (default)
  // 'dark'  — light text on dark background
  scheme?: 'light' | 'dark'

  className?: string
}

// ─────────────────────────────────────────────────────────────
// SPRING CONFIG — stagger between badge → title → description
// ─────────────────────────────────────────────────────────────

const spring = (delay = 0) => ({
  type:      'spring' as const,
  stiffness: 280,
  damping:   70,
  mass:      1,
  delay,
})

const INITIAL = { y: 28, opacity: 0 }
const VISIBLE = { y: 0,  opacity: 1 }
const VIEWPORT = { once: true, margin: '-60px' }

// ─────────────────────────────────────────────────────────────
// SIZE MAP
// ─────────────────────────────────────────────────────────────

const SIZE = {
  sm: {
    badge:       'text-[11px] px-3 py-1',
    title:       'text-xl md:text-2xl',
    description: 'text-sm',
    gap:         'gap-3',
  },
  md: {
    badge:       'text-xs px-3.5 py-1.5',
    title:       'text-2xl md:text-4xl',
    description: 'text-base',
    gap:         'gap-4',
  },
  lg: {
    badge:       'text-xs px-4 py-1.5',
    title:       'text-3xl md:text-5xl',
    description: 'text-lg',
    gap:         'gap-5',
  },
}

// ─────────────────────────────────────────────────────────────
// SECTION TITLE
// ─────────────────────────────────────────────────────────────

export function SectionTitle({
  badge,
  title,
  description,
  variant  = 'centered',
  size     = 'md',
  scheme   = 'light',
  className,
}: SectionTitleProps) {

  const s = SIZE[size]

  const titleColor       = scheme === 'dark' ? 'text-white'          : 'text-text'
  const descriptionColor = scheme === 'dark' ? 'text-white/50'       : 'text-muted'
  const badgeBg          = scheme === 'dark'
    ? 'bg-white/10 border-white/15 text-white/70'
    : 'border'

  // ── CENTERED ──────────────────────────────────────────────
  if (variant === 'centered') {
    return (
      <div className={cn('flex flex-col items-center text-center', s.gap, className)}>

        {badge && (
          <motion.span
            initial={INITIAL}
            whileInView={VISIBLE}
            viewport={VIEWPORT}
            transition={spring(0)}
            className={cn(
              'w-max rounded-full font-medium uppercase tracking-widest',
              s.badge, badgeBg,
            )}
            style={scheme === 'light' ? {
              color:           site.tokens.primary,
              backgroundColor: `${site.tokens.primary}14`,
              border:          `1px solid ${site.tokens.primary}30`,
            } : undefined}
          >
            {badge}
          </motion.span>
        )}

        <motion.h2
          initial={INITIAL}
          whileInView={VISIBLE}
          viewport={VIEWPORT}
          transition={spring(badge ? 0.06 : 0)}
          className={cn(
            'font-bold leading-tight tracking-tight max-w-2xl',
            s.title, titleColor,
          )}
        >
          {title}
        </motion.h2>

        {description && (
          <motion.p
            initial={INITIAL}
            whileInView={VISIBLE}
            viewport={VIEWPORT}
            transition={spring(badge ? 0.12 : 0.06)}
            className={cn(
              'leading-relaxed max-w-xl',
              s.description, descriptionColor,
            )}
          >
            {description}
          </motion.p>
        )}

      </div>
    )
  }

  // ── LEFT ──────────────────────────────────────────────────
  if (variant === 'left') {
    return (
      <div className={cn('flex flex-col items-start', s.gap, className)}>

        {badge && (
          <motion.span
            initial={INITIAL}
            whileInView={VISIBLE}
            viewport={VIEWPORT}
            transition={spring(0)}
            className={cn(
              'w-max rounded-full font-medium uppercase tracking-widest',
              s.badge, badgeBg,
            )}
            style={scheme === 'light' ? {
              color:           site.tokens.primary,
              backgroundColor: `${site.tokens.primary}14`,
              border:          `1px solid ${site.tokens.primary}30`,
            } : undefined}
          >
            {badge}
          </motion.span>
        )}

        <motion.h2
          initial={INITIAL}
          whileInView={VISIBLE}
          viewport={VIEWPORT}
          transition={spring(badge ? 0.06 : 0)}
          className={cn(
            'font-bold leading-tight tracking-tight max-w-xl',
            s.title, titleColor,
          )}
        >
          {title}
        </motion.h2>

        {description && (
          <motion.p
            initial={INITIAL}
            whileInView={VISIBLE}
            viewport={VIEWPORT}
            transition={spring(badge ? 0.12 : 0.06)}
            className={cn(
              'leading-relaxed max-w-lg',
              s.description, descriptionColor,
            )}
          >
            {description}
          </motion.p>
        )}

      </div>
    )
  }

  // ── SPLIT — title left, description right ─────────────────
  if (variant === 'split') {
    return (
      <div className={cn('flex flex-col md:flex-row md:items-end md:justify-between', s.gap, className)}>

        {/* Left — badge + title */}
        <div className="flex flex-col items-start gap-3 flex-1">
          {badge && (
            <motion.span
              initial={INITIAL}
              whileInView={VISIBLE}
              viewport={VIEWPORT}
              transition={spring(0)}
              className={cn(
                'w-max rounded-full font-medium uppercase tracking-widest',
                s.badge, badgeBg,
              )}
              style={scheme === 'light' ? {
                color:           site.tokens.primary,
                backgroundColor: `${site.tokens.primary}14`,
                border:          `1px solid ${site.tokens.primary}30`,
              } : undefined}
            >
              {badge}
            </motion.span>
          )}

          <motion.h2
            initial={INITIAL}
            whileInView={VISIBLE}
            viewport={VIEWPORT}
            transition={spring(badge ? 0.06 : 0)}
            className={cn(
              'font-bold leading-tight tracking-tight',
              s.title, titleColor,
            )}
          >
            {title}
          </motion.h2>
        </div>

        {/* Right — description */}
        {description && (
          <motion.p
            initial={INITIAL}
            whileInView={VISIBLE}
            viewport={VIEWPORT}
            transition={spring(0.12)}
            className={cn(
              'leading-relaxed max-w-sm md:text-right flex-shrink-0',
              s.description, descriptionColor,
            )}
          >
            {description}
          </motion.p>
        )}

      </div>
    )
  }
}
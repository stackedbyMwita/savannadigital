'use client'

import Link from 'next/link'
import { ArrowUpRight, Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'
import { site } from '@/content'

// ─────────────────────────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────────────────────────

type CTAButtonProps = {
  children:   React.ReactNode
  href?:      string
  variant?:   'primary' | 'outline' | 'ghost'
  size?:      'sm' | 'md' | 'lg'
  arrow?:     boolean
  loading?:   boolean
  external?:  boolean
  className?: string
  onClick?:   () => void
}

// ─────────────────────────────────────────────────────────────
// CTABUTTON
// ─────────────────────────────────────────────────────────────

export function CTAButton({
  children,
  href,
  variant  = 'primary',
  size     = 'md',
  arrow    = false,
  loading  = false,
  external = false,
  className,
  onClick,
}: CTAButtonProps) {

  const sizes = {
    sm: 'px-5 py-2 text-xs gap-1.5',
    md: 'px-6 py-3 text-sm gap-2',
    lg: 'px-8 py-3.5 text-base gap-2',
  }[size]

  const iconSize = { sm: 13, md: 14, lg: 16 }[size]

  const variantStyles = {
    primary: {
      className: 'text-white',
      bg:        site.tokens.primary,
      shine:     'rgba(255,255,255,0.15)',
      border:    undefined,
      color:     undefined,
    },
    outline: {
      className: 'bg-transparent border-2',
      bg:        'transparent',
      shine:     `${site.tokens.primary}18`,
      border:    site.tokens.primary,
      color:     site.tokens.primary,
    },
    ghost: {
      className: 'text-white',
      bg:        'rgba(255,255,255,0.10)',
      shine:     'rgba(255,255,255,0.12)',
      border:    undefined,
      color:     undefined,
    },
  }[variant]

  const cls = cn(
    'group relative inline-flex items-center justify-center font-semibold',
    'rounded-full overflow-hidden select-none',
    'transition-all duration-300',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
    'disabled:opacity-50 disabled:pointer-events-none',
    'hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 active:shadow-none',
    sizes,
    variantStyles.className,
    className,
  )

  const style = {
    backgroundColor: variantStyles.bg,
    borderColor:     variantStyles.border,
    color:           variantStyles.color,
  }

  const inner = loading ? (
    <Loader2 size={iconSize} className="animate-spin" />
  ) : (
    <>
      {/* Shine sweep on hover */}
      <span
        aria-hidden
        className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-500 ease-out pointer-events-none"
        style={{
          background: `linear-gradient(105deg, transparent 40%, ${variantStyles.shine} 50%, transparent 60%)`,
        }}
      />
      <span className="relative z-10">{children}</span>
      {arrow && (
        <ArrowUpRight
          size={iconSize}
          className="relative z-10 flex-shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      )}
    </>
  )

  if (href) {
    return (
      <Link
        href={href}
        className={cls}
        style={style}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        onClick={onClick}
      >
        {inner}
      </Link>
    )
  }

  return (
    <button className={cls} style={style} onClick={onClick} disabled={loading}>
      {inner}
    </button>
  )
}
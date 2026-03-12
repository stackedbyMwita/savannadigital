'use client'

import { forwardRef } from 'react'
import Link from 'next/link'
import { ArrowUpRight, Loader2 } from 'lucide-react'
import { motion } from 'motion/react'
import { cn } from '@/lib/utils'
import { site } from '@/content'

// ─────────────────────────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────────────────────────

type BorderStyle = 'rainbow' | 'solid' | 'none'
type RadiusStyle = 'full' | 'lg' | 'md' | 'sm' | 'none'
type ButtonSize  = 'sm' | 'md' | 'lg' | 'xl'
type ButtonVariant = 'primary' | 'outline' | 'ghost' | 'dark'

type BaseProps = {
  children:       React.ReactNode
  variant?:       ButtonVariant
  size?:          ButtonSize
  radius?:        RadiusStyle
  border?:        BorderStyle
  // Override the rainbow/border color — defaults to site accent
  borderColor?:   string
  // Override inner background — defaults to site primary
  innerBg?:       string
  // Override text color
  textColor?:     string
  // Show arrow icon
  arrow?:         boolean
  // Loading state
  loading?:       boolean
  // Full width
  fullWidth?:     boolean
  className?:     string
  // Speed of rainbow rotation in seconds
  animDuration?:  number
}

// When used as a button
type ButtonAsButton = BaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & {
    href?: undefined
  }

// When used as a link
type ButtonAsLink = BaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps> & {
    href:        string
    external?:   boolean
    // Next.js 15+ Link prop — fires before navigation happens
    onNavigate?: () => void
  }

type CTAButtonProps = ButtonAsButton | ButtonAsLink

// ─────────────────────────────────────────────────────────────
// STYLE MAPS
// ─────────────────────────────────────────────────────────────

const radiusMap: Record<RadiusStyle, string> = {
  full: 'rounded-full',
  lg:   'rounded-2xl',
  md:   'rounded-xl',
  sm:   'rounded-lg',
  none: 'rounded-none',
}

const sizeMap: Record<ButtonSize, { outer: string; inner: string; text: string; icon: number }> = {
  sm: {
    outer: 'p-[1.5px]',
    inner: 'px-5 py-2',
    text:  'text-xs',
    icon:  13,
  },
  md: {
    outer: 'p-[1.5px]',
    inner: 'px-6 py-3',
    text:  'text-sm',
    icon:  14,
  },
  lg: {
    outer: 'p-[2px]',
    inner: 'px-8 py-3.5',
    text:  'text-base',
    icon:  16,
  },
  xl: {
    outer: 'p-[2px]',
    inner: 'px-10 py-4',
    text:  'text-lg',
    icon:  18,
  },
}

// ─────────────────────────────────────────────────────────────
// VARIANT RESOLVER
// Returns innerBg and textColor based on variant + site tokens
// Can be fully overridden via props
// ─────────────────────────────────────────────────────────────

function resolveVariant(variant: ButtonVariant): {
  innerBg:    string
  textColor:  string
  borderColor: string
} {
  switch (variant) {
    case 'primary':
      return {
        innerBg:     site.tokens.primary,
        textColor:   '#FFFFFF',
        borderColor: site.tokens.accent,
      }
    case 'dark':
      return {
        innerBg:     site.tokens.dark,
        textColor:   '#FFFFFF',
        borderColor: site.tokens.accent,
      }
    case 'outline':
      return {
        innerBg:     'transparent',
        textColor:   site.tokens.primary,
        borderColor: site.tokens.primary,
      }
    case 'ghost':
      return {
        innerBg:     'rgba(255,255,255,0.08)',
        textColor:   '#FFFFFF',
        borderColor: 'rgba(255,255,255,0.3)',
      }
  }
}

// ─────────────────────────────────────────────────────────────
// RAINBOW KEYFRAMES — injected once into <head>
// ─────────────────────────────────────────────────────────────

const KEYFRAMES = `
  @keyframes cta-rotate {
    100% { transform: rotate(1turn); }
  }
  @keyframes cta-shimmer {
    0%   { opacity: 0.7; }
    50%  { opacity: 1; }
    100% { opacity: 0.7; }
  }
`

// ─────────────────────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────────────────────

export const CTAButton = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  CTAButtonProps
>(function CTAButton(props, _ref) {
  const {
    children,
    variant      = 'primary',
    size         = 'md',
    radius       = 'full',
    border       = 'rainbow',
    borderColor,
    innerBg,
    textColor,
    arrow        = true,
    loading      = false,
    fullWidth    = false,
    className,
    animDuration = 4,
    ...rest
  } = props

  const resolved    = resolveVariant(variant)
  const finalBg     = innerBg     ?? resolved.innerBg
  const finalText   = textColor   ?? resolved.textColor
  const finalBorder = borderColor ?? resolved.borderColor
  const sizes       = sizeMap[size]
  const radiusCls   = radiusMap[radius]

  // ── Build the conic gradient for rainbow border ───────────
  // Uses the site's accent + primary colors for on-brand rainbow
  // rather than a generic RGB rainbow — feels intentional
  const conicGradient = `conic-gradient(
    from 0deg,
    transparent 0deg,
    ${finalBorder} 60deg,
    ${site.tokens.accent} 120deg,
    ${site.tokens.primary}88 180deg,
    transparent 240deg,
    ${finalBorder} 300deg,
    transparent 360deg
  )`

  // ── Inner content ─────────────────────────────────────────
  const innerContent = (
    <>
      {/* Inject keyframes once */}
      <style>{KEYFRAMES}</style>

      {/* Outer wrapper — the border layer */}
      <span
        className={cn(
          'relative z-0 inline-flex overflow-hidden',
          'transition-transform duration-300 ease-out',
          'group-hover:scale-[1.03] group-active:scale-[0.98]',
          radiusCls,
          sizes.outer,
          fullWidth ? 'w-full' : '',
          // Solid border — simple
          border === 'solid' && [
            'border-2',
          ],
        )}
        style={
          border === 'solid'
            ? { borderColor: finalBorder }
            : undefined
        }
      >

        {/* Rainbow rotating pseudo-border */}
        {border === 'rainbow' && (
          <span
            aria-hidden
            className={cn('absolute inset-[-100%] z-[-1]', radiusCls)}
            style={{
              background:       conicGradient,
              animation:        `cta-rotate ${animDuration}s linear infinite`,
              filter:           'blur(2px)',
            }}
          />
        )}

        {/* Shimmer highlight on top of rainbow */}
        {border === 'rainbow' && (
          <span
            aria-hidden
            className={cn('absolute inset-0 z-[-1] opacity-0 group-hover:opacity-100 transition-opacity duration-500', radiusCls)}
            style={{
              background: `radial-gradient(ellipse at 50% 0%, ${finalBorder}40, transparent 70%)`,
            }}
          />
        )}

        {/* Inner pill — the actual button face */}
        <span
          className={cn(
            'relative z-10 inline-flex items-center justify-center gap-2',
            'font-semibold tracking-wide select-none',
            'transition-all duration-300',
            'group-hover:gap-3',
            radiusCls,
            sizes.inner,
            sizes.text,
            fullWidth ? 'w-full' : '',
          )}
          style={{
            backgroundColor: finalBg,
            color:           finalText,
          }}
        >
          {/* Loading spinner */}
          {loading && (
            <Loader2
              size={sizes.icon}
              className="animate-spin flex-shrink-0"
            />
          )}

          {/* Label */}
          <span className={loading ? 'opacity-50' : ''}>
            {children}
          </span>

          {/* Arrow icon — animates on hover */}
          {arrow && !loading && (
            <motion.span
              className="flex-shrink-0"
              initial={{ x: 0, y: 0 }}
              whileHover={{ x: 2, y: -2 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowUpRight size={sizes.icon} />
            </motion.span>
          )}
        </span>
      </span>
    </>
  )

  // ── Shared wrapper classes ────────────────────────────────
  const wrapperClass = cn(
    'group inline-flex cursor-pointer',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
    'disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none',
    fullWidth ? 'w-full' : '',
    className,
  )

  // ── Render as Link or Button ──────────────────────────────
  // IMPORTANT: destructure ALL custom props out before spreading
  // onto DOM elements — React will warn if unknown props hit the DOM
  if ('href' in props && props.href !== undefined) {
    const {
      href,
      external,
      // Strip all custom BaseProps — none of these are valid DOM attrs
      variant:      _variant,
      size:         _size,
      radius:       _radius,
      border:       _border,
      borderColor:  _borderColor,
      innerBg:      _innerBg,
      textColor:    _textColor,
      arrow:        _arrow,
      loading:      _loading,
      fullWidth:    _fullWidth,
      animDuration: _animDuration,
      className:    _className,
      children:     _children,
      ...domLinkProps
    } = props as ButtonAsLink

    return (
      <Link
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className={wrapperClass}
        {...domLinkProps}
      >
        {innerContent}
      </Link>
    )
  }

  // Strip custom props from button spread too
  const {
    variant:      _v,
    size:         _s,
    radius:       _r,
    border:       _b,
    borderColor:  _bc,
    innerBg:      _ib,
    textColor:    _tc,
    arrow:        _a,
    loading:      _l,
    fullWidth:    _fw,
    animDuration: _ad,
    className:    _cl,
    children:     _ch,
    ...domButtonProps
  } = rest as ButtonAsButton

  return (
    <button
      className={wrapperClass}
      disabled={loading}
      {...domButtonProps}
    >
      {innerContent}
    </button>
  )
})

CTAButton.displayName = 'CTAButton'
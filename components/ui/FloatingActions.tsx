'use client'

import { useState, useEffect, useContext } from 'react'
import { ArrowUp, MessageCircle } from 'lucide-react'
import { LenisContext } from '@/components/providers/LenisProvider'
import { site } from '@/content'

// ─────────────────────────────────────────────────────────────
// CONSTANTS
// ─────────────────────────────────────────────────────────────

const RADIUS       = 17          // SVG circle radius (px)
const STROKE       = 2.5         // progress ring stroke width
const CIRCUMFERENCE = 2 * Math.PI * RADIUS   // ~106.8px
const SHOW_AFTER   = 0.12        // show button after 12% scroll

// ─────────────────────────────────────────────────────────────
// FLOATING ACTIONS
// Scroll-to-top with SVG progress ring + WhatsApp launcher
// ─────────────────────────────────────────────────────────────

export function FloatingActions() {
  const lenis         = useContext(LenisContext)
  const [progress, setProgress]   = useState(0)   // 0–1
  const [visible,  setVisible]    = useState(false)
  const [waHovered, setWaHovered] = useState(false)
  const [upHovered, setUpHovered] = useState(false)

  // ── Track scroll progress ─────────────────────────────────
  useEffect(() => {
    const onScroll = () => {
      const scrollY  = window.scrollY
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      if (maxScroll <= 0) return

      const pct = scrollY / maxScroll
      setProgress(pct)
      setVisible(pct > SHOW_AFTER)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll() // run once on mount
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // ── Scroll to top via Lenis ───────────────────────────────
  const scrollToTop = () => {
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.4, easing: (t: number) => 1 - Math.pow(1 - t, 4) })
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  // ── WhatsApp ──────────────────────────────────────────────
  const whatsapp = (site.contact as any).whatsapp as string | undefined
  const waMessage = encodeURIComponent(
    (site.contact as any).message ??
    `Hi ${site.name}, I visited your website and I'd like to discuss a project.`
  )
  const waHref = whatsapp
    ? `https://wa.me/${whatsapp}?text=${waMessage}`
    : null

  // SVG ring values
  const dashOffset = CIRCUMFERENCE - progress * CIRCUMFERENCE

  return (
    <div
      className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3"
      aria-label="Floating actions"
    >

      {/* ── Scroll to top ───────────────────────────────── */}
      <div
        className="relative"
        style={{
          opacity:    visible ? 1 : 0,
          transform:  visible ? 'translateY(0) scale(1)' : 'translateY(12px) scale(0.85)',
          transition: 'opacity 0.35s ease, transform 0.35s ease',
          pointerEvents: visible ? 'auto' : 'none',
        }}
      >
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          onMouseEnter={() => setUpHovered(true)}
          onMouseLeave={() => setUpHovered(false)}
          className="relative w-11 h-11 rounded-full flex items-center justify-center transition-colors duration-200"
          style={{
            backgroundColor: upHovered ? site.tokens.primary : 'white',
            boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
          }}
        >
          {/* SVG progress ring — absolutely positioned over button */}
          <svg
            className="absolute inset-0 -rotate-90"
            width="44"
            height="44"
            viewBox="0 0 44 44"
            fill="none"
            aria-hidden="true"
          >
            {/* Track */}
            <circle
              cx="22"
              cy="22"
              r={RADIUS}
              stroke={site.tokens.border ?? '#E2E8F0'}
              strokeWidth={STROKE}
              fill="none"
            />
            {/* Progress */}
            <circle
              cx="22"
              cy="22"
              r={RADIUS}
              stroke={site.tokens.primary}
              strokeWidth={STROKE}
              fill="none"
              strokeLinecap="round"
              strokeDasharray={CIRCUMFERENCE}
              strokeDashoffset={dashOffset}
              style={{ transition: 'stroke-dashoffset 0.1s linear' }}
            />
          </svg>

          {/* Arrow icon */}
          <ArrowUp
            size={16}
            strokeWidth={2.5}
            style={{
              color:      upHovered ? 'white' : site.tokens.primary,
              transition: 'color 0.2s ease',
              position:   'relative',
              zIndex:     1,
            }}
          />
        </button>
      </div>

      {/* ── WhatsApp ────────────────────────────────────── */}
      {waHref && (
        <a
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          onMouseEnter={() => setWaHovered(true)}
          onMouseLeave={() => setWaHovered(false)}
          className="relative w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200"
          style={{
            backgroundColor: waHovered ? '#20c65a' : '#25D366',
            boxShadow: waHovered
              ? '0 6px 20px rgba(37,211,102,0.45)'
              : '0 4px 16px rgba(37,211,102,0.3)',
            transform: waHovered ? 'scale(1.08)' : 'scale(1)',
          }}
        >
          {/* WhatsApp SVG — official icon shape */}
          <svg
            width="22"
            height="22"
            viewBox="0 0 32 32"
            fill="white"
            aria-hidden="true"
          >
            <path d="M16.004 2.667C8.64 2.667 2.667 8.64 2.667 16c0 2.347.613 4.56 1.68 6.48L2.667 29.333l7.04-1.627A13.267 13.267 0 0 0 16.004 29.333C23.36 29.333 29.333 23.36 29.333 16S23.36 2.667 16.004 2.667zm0 24c-2.08 0-4.027-.56-5.707-1.52l-.413-.24-4.16.96.987-4.013-.267-.427A10.6 10.6 0 0 1 5.333 16c0-5.88 4.787-10.667 10.667-10.667S26.667 10.12 26.667 16 21.88 26.667 16 26.667zm5.867-7.973c-.32-.16-1.893-.933-2.187-1.04-.293-.107-.507-.16-.72.16-.213.32-.827 1.04-.987 1.253-.16.213-.32.24-.64.08-.32-.16-1.36-.507-2.587-1.6-.96-.853-1.6-1.907-1.787-2.227-.187-.32-.013-.48.147-.64.147-.133.32-.347.48-.52.16-.173.213-.293.32-.507.107-.213.053-.4-.027-.56-.08-.16-.72-1.733-.987-2.373-.253-.613-.52-.533-.72-.547-.187-.013-.4-.013-.613-.013s-.56.08-.853.4c-.293.32-1.12 1.093-1.12 2.667s1.147 3.093 1.307 3.307c.16.213 2.267 3.453 5.493 4.84.747.32 1.36.507 1.813.64.76.24 1.453.213 2 .133.613-.093 1.893-.773 2.16-1.52.267-.747.267-1.387.187-1.52-.08-.133-.293-.213-.613-.373z"/>
          </svg>

          {/* Pulse ring */}
          <span
            className="absolute inset-0 rounded-full"
            style={{
              animation:       'wa-pulse 2.5s ease-out infinite',
              backgroundColor: '#25D366',
              opacity:         0,
            }}
          />
        </a>
      )}

      {/* Pulse keyframe injected once */}
      <style>{`
        @keyframes wa-pulse {
          0%   { transform: scale(1);    opacity: 0.5; }
          100% { transform: scale(1.75); opacity: 0;   }
        }
      `}</style>

    </div>
  )
}
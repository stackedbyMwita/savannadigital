'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion } from 'motion/react'
import { gsap } from 'gsap'
import { ArrowDownRight } from 'lucide-react'
import { site } from '@/content'
import { CTAButton } from '@/components/ui/CTAButton'
import { NAV_HEIGHT_PX } from '@/components/layout/Navbar'

// HERO

export function Hero() {
  const headlineRef = useRef<HTMLDivElement>(null)
  const lineRefs    = useRef<HTMLSpanElement[]>([])

  // ── GSAP headline stagger ────────────────────────────────
  useEffect(() => {
    if (!lineRefs.current.length) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        lineRefs.current,
        {
          yPercent:  110,
          opacity:   0,
        },
        {
          yPercent:  0,
          opacity:   1,
          duration:  0.9,
          ease:      'power3.out',
          stagger:   0.12,
          delay:     0.3,
        },
      )
    }, headlineRef)

    return () => ctx.revert()
  }, [])

  const addLineRef = (el: HTMLSpanElement | null, i: number) => {
    if (el) lineRefs.current[i] = el
  }

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        minHeight: `calc(100vh - 0px)`,
        paddingTop: NAV_HEIGHT_PX,
        backgroundColor: site.tokens.surface,
      }}
    >

      {/* ── Background elements ─────────────────────────── */}

      {/* Large decorative circle — top right */}
      <div
        aria-hidden
        className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-[0.3] pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${site.tokens.primary}, transparent 70%)`,
        }}
      />

      {/* Grid pattern overlay */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(${site.tokens.primary} 1px, transparent 1px), linear-gradient(90deg, ${site.tokens.primary} 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* ── Main content ────────────────────────────────── */}
      <div className="container relative h-full flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-8 py-16 lg:py-0" style={{ minHeight: `calc(100vh - ${NAV_HEIGHT_PX}px)` }}>

        {/* ── LEFT — Text content ─────────────────────── */}
        <div className="flex-1 flex flex-col justify-center max-w-2xl">

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-3 mb-8"
          >
            {/* Accent dot */}
            <span
              className="w-2 h-2 rounded-full flex-shrink-0"
              style={{ backgroundColor: site.tokens.accent }}
            />
            <span
              className="text-sm font-medium uppercase tracking-widest"
              style={{ color: site.tokens.primary }}
            >
              {site.hero.eyebrow}
            </span>
          </motion.div>

          {/* Headline — GSAP stagger per line */}
          <div ref={headlineRef} className="overflow-hidden mb-8">
            <h1
              className="font-bold leading-[1.05] tracking-tight"
              style={{
                fontSize:   'clamp(2.8rem, 6.5vw, 5.5rem)',
                color:      site.tokens.dark,
              }}
            >
              {site.hero.headline.map((line, i) => (
                <div key={i} className="overflow-hidden">
                  <span
                    ref={(el) => addLineRef(el, i)}
                    className="block"
                    style={{
                      // Last line gets accent color
                      color: i === site.hero.headline.length - 1
                        ? site.tokens.primary
                        : site.tokens.dark,
                    }}
                  >
                    {line}
                  </span>
                </div>
              ))}
            </h1>
          </div>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="text-base md:text-lg leading-relaxed mb-10 max-w-lg"
            style={{ color: site.tokens.muted }}
          >
            {site.hero.subheadline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap items-center gap-4"
          >
            <CTAButton
              href={site.hero.cta.href}
              variant="primary"
              size="lg"
            >
              {site.hero.cta.label}
            </CTAButton>

            {site.hero.secondaryCta && (
              <a
                href={site.hero.secondaryCta.href}
                className="group inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-200"
                style={{ color: site.tokens.dark }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = site.tokens.primary
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = site.tokens.dark
                }}
              >
                {site.hero.secondaryCta.label}
                <ArrowDownRight
                  size={16}
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                />
              </a>
            )}
          </motion.div>

          {/* Stats strip */}
          {site.stats.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex flex-wrap items-center gap-8 mt-14 pt-10"
              style={{ borderTop: `1px solid ${site.tokens.border}` }}
            >
              {site.stats.slice(0, 3).map((stat, i) => (
                <div key={i} className="flex flex-col gap-1">
                  <span
                    className="text-2xl md:text-3xl font-bold leading-none tabular-nums"
                    style={{ color: site.tokens.dark }}
                  >
                    {stat.value}
                  </span>
                  <span
                    className="text-xs uppercase tracking-wider"
                    style={{ color: site.tokens.muted }}
                  >
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          )}

        </div>

        {/* ── RIGHT — Image ───────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: 40, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.32, 0.72, 0, 1], delay: 0.2 }}
          className="flex-1 flex items-center justify-center lg:justify-end relative"
        >

          {/* Main image container */}
          <div className="relative w-full max-w-[520px] lg:max-w-none">

            {/* Decorative accent blob behind image */}
            <div
              aria-hidden
              className="absolute -inset-6 rounded-3xl opacity-20 blur-2xl"
              style={{ background: `linear-gradient(135deg, ${site.tokens.primary}, ${site.tokens.accent})` }}
            />

            {/* Image card */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5]">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="Team collaboration"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

              {/* Dark overlay gradient at bottom */}
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 50%)',
                }}
              />

              {/* Floating badge — bottom left of image */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.1 }}
                className="absolute bottom-5 left-5 right-5"
              >
                <div
                  className="flex items-center gap-3 px-4 py-3 rounded-xl backdrop-blur-sm"
                  style={{ backgroundColor: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.15)' }}
                >
                  {/* Live indicator */}
                  <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
                    <span
                      className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                      style={{ backgroundColor: site.tokens.accent }}
                    />
                    <span
                      className="relative inline-flex rounded-full h-2.5 w-2.5"
                      style={{ backgroundColor: site.tokens.accent }}
                    />
                  </span>
                  <span className="text-white text-sm font-medium">
                    Available for new projects
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Floating card — top right of image, slightly overlapping */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2, ease: 'backOut' }}
              className="absolute -top-5 -right-5 hidden lg:block"
            >
              <div
                className="px-4 py-3 rounded-xl shadow-xl text-sm font-semibold"
                style={{
                  backgroundColor: site.tokens.accent,
                  color: site.tokens.dark,
                  whiteSpace: 'nowrap',
                }}
              >
                🌍 {site.stats[1]?.value} {site.stats[1]?.label}
              </div>
            </motion.div>

          </div>
        </motion.div>

      </div>

      {/* ── Scroll indicator ────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span
          className="text-xs uppercase tracking-widest"
          style={{ color: site.tokens.muted }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-8"
          style={{ background: `linear-gradient(to bottom, ${site.tokens.primary}, transparent)` }}
        />
      </motion.div>

    </section>
  )
}
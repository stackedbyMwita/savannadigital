'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'
import { cn } from '@/lib/utils'
import { site } from '@/content'
import { staggerContainer, staggerItem } from '@/lib/custom/animations'
import { CTAButton } from '@/components/ui/custom/CTAButton'

// ─────────────────────────────────────────────────────────────
// CONSTANTS
// ─────────────────────────────────────────────────────────────

// Navbar is z-50. Mobile menu is z-[60] so it renders ABOVE the
// navbar — close button is always visible and accessible.
const Z_NAVBAR      = 'z-50'
const Z_MOBILE_MENU = 'z-[60]'

// Navbar height — used in both the nav and the mobile menu top bar
// so they're always in sync
const NAV_HEIGHT_PX = 72

// ─────────────────────────────────────────────────────────────
// MOBILE MENU
// ─────────────────────────────────────────────────────────────

type MobileMenuProps = {
  onClose: () => void
}

function MobileMenu({ onClose }: MobileMenuProps) {
  const pathname = usePathname()

  return (
    <motion.div
      initial={{ clipPath: 'inset(0 0 100% 0)' }}
      animate={{ clipPath: 'inset(0 0 0% 0)'   }}
      exit={{    clipPath: 'inset(0 0 100% 0)'  }}
      transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
      className={cn(
        'fixed inset-0 flex flex-col',
        Z_MOBILE_MENU,
      )}
      style={{ backgroundColor: site.tokens.dark }}
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
    >

      {/* ── Grain texture ─────────────────────────────────── */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
        }}
      />

      {/* ── Top bar — same height as navbar ───────────────── */}
      <div
        className="relative flex items-center justify-between flex-shrink-0 px-6 md:px-10"
        style={{ height: NAV_HEIGHT_PX }}
      >
        {/* Logo */}
        <Link
          href="/"
          onNavigate={onClose}
          className="flex-shrink-0"
          aria-label={`${site.name} — Home`}
        >
          <Image
            src={site.logo.light}
            alt={site.name}
            width={130}
            height={34}
            className="h-8 w-auto"
          />
        </Link>

        {/* Close button — always visible because z-[60] > z-50 */}
        <motion.button
          onClick={onClose}
          aria-label="Close navigation menu"
          className={cn(
            'flex items-center gap-2 px-4 py-2 rounded-full',
            'text-sm font-medium transition-colors duration-200',
            'border border-white/10 hover:border-white/25',
          )}
          style={{ color: 'rgba(255,255,255,0.6)' }}
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0  }}
          transition={{ duration: 0.3, delay: 0.15 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
        >
          <span>Close</span>
          <span className="text-xs opacity-50 font-mono">ESC</span>
        </motion.button>
      </div>

      {/* ── Divider ───────────────────────────────────────── */}
      <div
        aria-hidden
        className="mx-6 md:mx-10 flex-shrink-0"
        style={{ height: '1px', backgroundColor: 'rgba(255,255,255,0.07)' }}
      />

      {/* ── Nav links ─────────────────────────────────────── */}
      <motion.nav
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="flex-1 flex flex-col justify-center px-6 md:px-10 py-10 overflow-y-auto"
      >
        <ul className="space-y-0">
          {site.nav.map((item, index) => {
            const isActive = pathname === item.href
            return (
              <motion.li key={item.href} variants={staggerItem}>
                <Link
                  href={item.href}
                  onNavigate={onClose}
                  className="group flex items-center justify-between py-5 border-b border-white/[0.06]"
                >
                  {/* Left: index + label */}
                  <div className="flex items-baseline gap-4">
                    <span
                      className="text-[11px] font-mono tabular-nums"
                      style={{ color: 'rgba(255,255,255,0.2)' }}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span
                      className={cn(
                        'text-[clamp(2rem,6vw,3.5rem)] font-bold tracking-tight leading-none',
                        'transition-colors duration-200',
                        isActive
                          ? 'text-white'
                          : 'text-white/35 group-hover:text-white',
                      )}
                    >
                      {item.label}
                    </span>
                  </div>

                  {/* Right: arrow */}
                  <span
                    className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    style={{ color: site.tokens.accent }}
                    aria-hidden
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 17L17 7M17 7H7M17 7v10"/>
                    </svg>
                  </span>
                </Link>
              </motion.li>
            )
          })}
        </ul>
      </motion.nav>

      {/* ── Bottom bar ────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0  }}
        transition={{ duration: 0.45, delay: 0.3 }}
        className="flex-shrink-0 px-6 md:px-10 pb-10"
      >
        {/* Divider */}
        <div
          aria-hidden
          className="mb-8"
          style={{ height: '1px', backgroundColor: 'rgba(255,255,255,0.07)' }}
        />

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">

          {/* Tagline + socials */}
          <div className="space-y-4">
            <p
              className="text-sm font-medium italic"
              style={{ color: 'rgba(255,255,255,0.3)' }}
            >
              {site.footer.tagline}
            </p>

            {site.footer.socials.length > 0 && (
              <div className="flex items-center gap-5">
                {site.footer.socials.map((social) => (
                  <a
                    key={social.platform}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] uppercase tracking-widest font-medium transition-colors duration-200"
                    style={{ color: 'rgba(255,255,255,0.25)' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'rgba(255,255,255,0.75)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'rgba(255,255,255,0.25)'
                    }}
                  >
                    {social.platform}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* CTA */}
          <CTAButton
            href="/contact"
            onNavigate={onClose}
            variant="primary"
            size="md"
            radius="full"
            border="rainbow"
            animDuration={5}
          >
            Start a Project
          </CTAButton>

        </div>
      </motion.div>
    </motion.div>
  )
}

// ─────────────────────────────────────────────────────────────
// NAVBAR
// ─────────────────────────────────────────────────────────────

export function Navbar() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)
  const pathname = usePathname()

  // ── Scroll detection ──────────────────────────────────────
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    onScroll() // run once on mount — handles pre-scrolled pages
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // ── Lock body scroll when mobile menu open ────────────────
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  // ── Keyboard: Escape closes menu ─────────────────────────
  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [menuOpen])

  // ── Derived values ────────────────────────────────────────
  const isTransparent = site.layout.navbarStyle === 'transparent'
  // Stop floating once scrolled OR while menu is open
  const isFloating    = isTransparent && !scrolled && !menuOpen
  const logoSrc       = isFloating ? site.logo.light : site.logo.dark

  // ── Dynamic classes ───────────────────────────────────────
  const navClass = cn(
    'fixed top-0 inset-x-0',
    Z_NAVBAR,
    'transition-all duration-500',
    isFloating
      ? 'bg-transparent'
      : 'bg-white/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(0,0,0,0.06)]',
  )

  const linkClass = (href: string) => {
    const isActive = pathname === href
    return cn(
      'relative text-sm font-medium tracking-wide',
      'transition-colors duration-200',
      'after:absolute after:bottom-[-4px] after:left-0',
      'after:h-[1.5px] after:w-0 after:rounded-full after:bg-current',
      'after:transition-[width] after:duration-300 after:ease-out',
      'hover:after:w-full',
      isActive && 'after:w-full',
      isFloating
        ? isActive ? 'text-white'   : 'text-white/70 hover:text-white'
        : isActive ? 'text-primary' : 'text-text/65 hover:text-text',
    )
  }

  return (
    <>
      <motion.nav
        className={navClass}
        style={{ height: NAV_HEIGHT_PX }}
        initial={{ y: -NAV_HEIGHT_PX, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: [0.32, 0.72, 0, 1], delay: 0.05 }}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container h-full flex items-center justify-between">

          {/* ── Logo ─────────────────────────────────────── */}
          <Link
            href="/"
            className="flex-shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
            aria-label={`${site.name} — Home`}
          >
            <Image
              src={logoSrc}
              alt={site.name}
              width={140}
              height={36}
              priority
              className="h-9 w-auto transition-[opacity,filter] duration-300"
            />
          </Link>

          {/* ── Desktop links ────────────────────────────── */}
          <ul className="hidden md:flex items-center gap-8 list-none">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={linkClass(item.href)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* ── Right side: CTA + hamburger ──────────────── */}
          <div className="flex items-center gap-3">

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <CTAButton
                href="/contact"
                variant={isFloating ? 'ghost' : 'primary'}
                size="sm"
                radius="full"
                border={isFloating ? 'solid' : 'rainbow'}
                borderColor={isFloating ? 'rgba(255,255,255,0.35)' : undefined}
                innerBg={isFloating ? 'transparent' : undefined}
                textColor={isFloating ? '#ffffff' : undefined}
                animDuration={5}
              >
                Get In Touch
              </CTAButton>
            </div>

            {/* Mobile hamburger */}
            <motion.button
              className={cn(
                'md:hidden flex items-center justify-center',
                'w-10 h-10 rounded-lg -mr-1',
                'transition-colors duration-200',
                isFloating
                  ? 'text-white hover:bg-white/10'
                  : 'text-text hover:bg-black/5',
              )}
              onClick={() => setMenuOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.92 }}
            >
              <Menu size={22} />
            </motion.button>

          </div>
        </div>
      </motion.nav>

      {/* ── Mobile menu — z-[60] sits above navbar z-50 ────── */}
      <AnimatePresence>
        {menuOpen && (
          <MobileMenu onClose={() => setMenuOpen(false)} />
        )}
      </AnimatePresence>
    </>
  )
}
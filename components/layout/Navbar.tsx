'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import { Menu } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'
import { cn } from '@/lib/utils'
import { site } from '@/content'
import { staggerContainer, staggerItem } from '@/lib/custom/animations'
import { CTAButton } from '@/components/ui/CTAButton'
import { useLenis } from '@/components/providers/LenisProvider'

export const NAV_HEIGHT_PX = 72

// ─────────────────────────────────────────────────────────────
// ANCHOR SCROLL HOOK
// ─────────────────────────────────────────────────────────────

function useAnchorScroll() {
  const pathname = usePathname()
  const router   = useRouter()
  const lenis    = useLenis()

  // After navigating to / with a hash, scroll to the section.
  // Only depends on pathname — not lenis — so re-renders of the
  // Lenis provider don't retrigger this and cause phantom scrolls.
  useEffect(() => {
    const hash = window.location.hash
    if (!hash || !lenis) return
    const timer = setTimeout(() => {
      lenis.scrollTo(hash, { offset: -NAV_HEIGHT_PX, duration: 1.2 })
      // Clear the hash from the URL after scrolling so it doesn't
      // retrigger on subsequent lenis/pathname changes
      window.history.replaceState(null, '', window.location.pathname)
    }, 150)
    return () => clearTimeout(timer)
  }, [pathname]) // eslint-disable-line react-hooks/exhaustive-deps

  function handleAnchorClick(e: React.MouseEvent, item: typeof site.nav[0]) {
    if (item.type !== 'anchor') return
    e.preventDefault()
    const hash = item.href.split('#')[1]
    if (!hash) return
    if (pathname === '/') {
      lenis?.scrollTo(`#${hash}`, { offset: -NAV_HEIGHT_PX, duration: 1.2 })
    } else {
      router.push(item.href)
    }
  }

  return { handleAnchorClick }
}

// ─────────────────────────────────────────────────────────────
// DESKTOP NAV LINK
// ─────────────────────────────────────────────────────────────

function NavLink({
  children,
  useLightNav,
  active,
  onClick,
  href,
  isAnchor,
}: {
  children:    React.ReactNode
  useLightNav: boolean
  active:      boolean
  onClick?:    (e: React.MouseEvent) => void
  href:        string
  isAnchor:    boolean
}) {
  const [hovered, setHovered] = useState(false)

  const color = active
    ? (useLightNav ? 'rgba(255,255,255,1)' : 'var(--color-primary)')
    : hovered
    ? (useLightNav ? 'rgba(255,255,255,1)' : 'rgba(28,28,30,1)')
    : (useLightNav ? 'rgba(255,255,255,0.75)' : 'rgba(28,28,30,0.65)')

  const underlineColor = useLightNav ? 'rgba(255,255,255,0.8)' : 'var(--color-primary)'

  const sharedClass = 'relative text-sm font-medium tracking-wide bg-transparent border-none cursor-pointer p-0'

  const inner = (
    <motion.span
      animate={{ color }}
      transition={{ duration: 0.3 }}
      className="relative inline-block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
      <motion.span
        aria-hidden
        animate={{ width: active || hovered ? '100%' : '0%', backgroundColor: underlineColor }}
        transition={{ duration: 0.25 }}
        style={{ position: 'absolute', bottom: -4, left: 0, height: 1.5, borderRadius: 9999, display: 'block' }}
      />
    </motion.span>
  )

  if (isAnchor) {
    return <button onClick={onClick} className={sharedClass}>{inner}</button>
  }

  return <Link href={href} className={sharedClass}>{inner}</Link>
}

// ─────────────────────────────────────────────────────────────
// MOBILE MENU
// ─────────────────────────────────────────────────────────────

function MobileMenu({ onClose }: { onClose: () => void }) {
  const pathname              = usePathname()
  const { handleAnchorClick } = useAnchorScroll()

  return (
    <div
      className="fixed inset-0 z-[60] flex flex-col"
      style={{ backgroundColor: site.tokens.dark }}
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
    >
      {/* Top bar */}
      <div
        className="flex-shrink-0 flex items-center justify-between px-6 md:px-10"
        style={{ height: NAV_HEIGHT_PX, borderBottom: '1px solid rgba(255,255,255,0.07)' }}
      >
        <Link href="/" onClick={onClose} aria-label={`${site.name} — Home`}>
          <Image src={site.logo.full} alt={site.name} width={130} height={34} className="h-8 w-auto" />
        </Link>

        <button
          onClick={onClose}
          aria-label="Close menu"
          className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200"
          style={{ color: 'rgba(255,255,255,0.6)', border: '1px solid rgba(255,255,255,0.12)' }}
        >
          Close
          <span className="text-xs font-mono" style={{ opacity: 0.4 }}>ESC</span>
        </button>
      </div>

      {/* Nav links */}
      <motion.nav
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="flex-1 flex flex-col justify-center px-6 md:px-10 overflow-y-auto"
      >
        <ul className="list-none m-0 p-0 w-full">
          {site.nav.map((item, index) => {
            const isActive  = item.type !== 'anchor' && pathname === item.href
            const rowClass  = cn(
              'group w-full flex items-center justify-between py-5',
              'transition-colors duration-200',
            )

            const label = (
              <>
                <div className="flex items-baseline gap-4">
                  <span className="text-[11px] font-mono tabular-nums" style={{ color: 'rgba(255,255,255,0.2)' }}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span
                    className="text-4xl md:text-5xl font-bold tracking-tight leading-none transition-colors duration-200 group-hover:text-white"
                    style={{ color: isActive ? 'white' : 'rgba(255,255,255,0.3)' }}
                  >
                    {item.label}
                  </span>
                </div>
                <svg
                  aria-hidden width="20" height="20" viewBox="0 0 24 24"
                  fill="none" stroke="currentColor" strokeWidth="2"
                  strokeLinecap="round" strokeLinejoin="round"
                  className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  style={{ color: site.tokens.accent }}
                >
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </>
            )

            return (
              <motion.li
                key={item.href}
                variants={staggerItem}
                style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
              >
                {item.type === 'anchor' ? (
                  <button
                    className={cn(rowClass, 'text-left w-full')}
                    onClick={(e) => { handleAnchorClick(e, item); onClose() }}
                  >
                    {label}
                  </button>
                ) : (
                  <Link href={item.href} className={rowClass} onClick={onClose}>
                    {label}
                  </Link>
                )}
              </motion.li>
            )
          })}
        </ul>
      </motion.nav>

      {/* Footer strip */}
      <div
        className="flex-shrink-0 px-6 md:px-10 py-8 flex flex-col sm:flex-row sm:items-center justify-between gap-5"
        style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
      >
        <p className="text-sm italic" style={{ color: 'rgba(255,255,255,0.3)' }}>
          {site.footer.tagline}
        </p>
        <CTAButton href="/contact" variant="primary" size="md" onClick={onClose}>
          Start a Project
        </CTAButton>
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────
// NAVBAR
// ─────────────────────────────────────────────────────────────

export function Navbar() {
  const [visible,  setVisible]  = useState(true)
  const [atTop,    setAtTop]    = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)
  const lastScrollY             = useRef(0)
  const pathname                = usePathname()
  const { handleAnchorClick }   = useAnchorScroll()

  useEffect(() => {
    const onScroll = () => {
      const y   = window.scrollY
      const dir = y > lastScrollY.current ? 'down' : 'up'

      setAtTop(y < 10)

      if (y < 10)                     setVisible(true)
      else if (dir === 'down' && y > 80) { setVisible(false); setMenuOpen(false) }
      else if (dir === 'up')          setVisible(true)

      lastScrollY.current = y
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  // Close on ESC
  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setMenuOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [menuOpen])

  const useLightNav = atTop && site.layout.heroIsDark && !menuOpen

  return (
    <>
      {/* ── Nav bar ─────────────────────────────────────────── */}
      <motion.nav
        className="fixed top-0 inset-x-0 z-50"
        style={{
          height:               NAV_HEIGHT_PX,
          backgroundColor:      atTop && !menuOpen ? 'rgba(255,255,255,0)' : 'rgba(255,255,255,0.78)',
          backdropFilter:       atTop && !menuOpen ? 'blur(0px)' : 'blur(20px)',
          WebkitBackdropFilter: atTop && !menuOpen ? 'blur(0px)' : 'blur(20px)',
          boxShadow:            atTop && !menuOpen ? 'none' : '0 1px 0 0 rgba(0,0,0,0.06)',
          transition:           'background-color 0.5s ease, backdrop-filter 0.5s ease, box-shadow 0.4s ease',
        }}
        initial={{ y: -NAV_HEIGHT_PX, opacity: 0 }}
        animate={{ y: visible ? 0 : '-110%', opacity: visible ? 1 : 0 }}
        transition={{
          y:       { duration: 0.5, ease: [0.32, 0.72, 0, 1] },
          opacity: { duration: 0.4 },
        }}
        role="navigation"
        aria-label="Main navigation"
      >
        <motion.div
          className="h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <div className="container h-full flex items-center justify-between">

            {/* Logo */}
            <Link href="/" className="relative flex-shrink-0 h-9 focus-visible:outline-none" style={{ width: 140 }} aria-label={`${site.name} — Home`}>
              <motion.div className="absolute inset-0" animate={{ opacity: useLightNav ? 0 : 1 }} transition={{ duration: 0.5 }}>
                <Image src={site.logo.full} alt={site.name} width={140} height={36} priority className="h-9 w-auto" />
              </motion.div>
              <motion.div className="absolute inset-0" animate={{ opacity: useLightNav ? 1 : 0 }} transition={{ duration: 0.5 }}>
                <Image src={site.logo.light} alt="" aria-hidden width={140} height={36} className="h-9 w-auto" />
              </motion.div>
            </Link>

            {/* Desktop links */}
            <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <NavLink
                    href={item.href}
                    isAnchor={item.type === 'anchor'}
                    useLightNav={useLightNav}
                    active={item.type !== 'anchor' && pathname === item.href}
                    onClick={item.type === 'anchor' ? (e) => handleAnchorClick(e, item) : undefined}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* CTA + Hamburger */}
            <div className="flex items-center gap-3">
              <div className="hidden md:block">
                <CTAButton href="/contact" variant={useLightNav ? 'ghost' : 'primary'} size="sm">
                  Get In Touch
                </CTAButton>
              </div>

              <motion.button
                className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg -mr-1"
                onClick={() => setMenuOpen(true)}
                aria-label="Open navigation menu"
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
                animate={{ color: useLightNav ? 'rgba(255,255,255,1)' : 'rgba(28,28,30,0.8)' }}
                transition={{ duration: 0.5 }}
                whileTap={{ scale: 0.94 }}
              >
                <Menu size={22} />
              </motion.button>
            </div>

          </div>
        </motion.div>
      </motion.nav>

      {/* ── Mobile menu ──────────────────────────────────────── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0   }}
            exit={{    opacity: 0, y: -12 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="md:hidden"
          >
            <MobileMenu onClose={() => setMenuOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
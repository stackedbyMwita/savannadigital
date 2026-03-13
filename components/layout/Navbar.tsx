'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { site } from '@/content'
import { CTAButton } from '@/components/ui/CTAButton'
import { useLenis } from '@/components/providers/LenisProvider'

export const NAV_HEIGHT_PX = 72

// ─────────────────────────────────────────────────────────────
// DESKTOP NAV LINK
// ─────────────────────────────────────────────────────────────

function DesktopNavLink({
  item,
  isActive,
  useLightNav,
  onAnchorClick,
}: {
  item:          typeof site.nav[0]
  isActive:      boolean
  useLightNav:   boolean
  onAnchorClick?: (e: React.MouseEvent) => void
}) {
  const [hovered, setHovered] = useState(false)

  const color = isActive
    ? useLightNav ? '#fff' : 'var(--color-primary)'
    : hovered
    ? useLightNav ? '#fff' : 'rgba(28,28,30,1)'
    : useLightNav ? 'rgba(255,255,255,0.72)' : 'rgba(28,28,30,0.55)'

  const inner = (
    <span
      className="relative inline-block text-sm font-medium tracking-wide cursor-pointer transition-colors duration-200"
      style={{ color }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {item.label}
      {/* Animated underline */}
      <span
        className="absolute left-0 rounded-full block"
        style={{
          bottom:          -3,
          height:          1.5,
          width:           hovered || isActive ? '100%' : '0%',
          backgroundColor: useLightNav ? 'rgba(255,255,255,0.7)' : 'var(--color-primary)',
          transition:      'width 0.22s ease',
        }}
      />
    </span>
  )

  if (item.type === 'anchor') {
    return (
      <button
        onClick={onAnchorClick}
        className="bg-transparent border-none p-0 cursor-pointer"
      >
        {inner}
      </button>
    )
  }

  return <Link href={item.href} className="p-0">{inner}</Link>
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
  const router                  = useRouter()
  const lenis                   = useLenis()

  // Hide/show on scroll
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setAtTop(y < 10)
      if (y < 10)                              setVisible(true)
      else if (y > lastScrollY.current && y > 80) setVisible(false)
      else                                     setVisible(true)
      lastScrollY.current = y
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close on route change
  useEffect(() => { setMenuOpen(false) }, [pathname])

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  // ESC to close
  useEffect(() => {
    if (!menuOpen) return
    const fn = (e: KeyboardEvent) => { if (e.key === 'Escape') setMenuOpen(false) }
    window.addEventListener('keydown', fn)
    return () => window.removeEventListener('keydown', fn)
  }, [menuOpen])

  // Anchor click handler
  function handleNavClick(e: React.MouseEvent, item: typeof site.nav[0]) {
    if (item.type !== 'anchor') return
    e.preventDefault()
    setMenuOpen(false)
    const hash = item.href.split('#')[1]
    if (!hash) return
    if (pathname === '/') {
      lenis?.scrollTo(`#${hash}`, { offset: -NAV_HEIGHT_PX, duration: 1.2 })
    } else {
      router.push(item.href)
      setTimeout(() => {
        lenis?.scrollTo(`#${hash}`, { offset: -NAV_HEIGHT_PX, duration: 1.2 })
      }, 400)
    }
  }

  const useLightNav = atTop && site.layout.heroIsDark && !menuOpen

  return (
    <>
      {/* ── Navbar bar ────────────────────────────────────── */}
      <nav
        className="fixed top-0 inset-x-0 z-50 flex items-center"
        style={{
          height:               NAV_HEIGHT_PX,
          transform:            visible ? 'translateY(0)' : 'translateY(-110%)',
          transition:           'transform 0.4s ease, background-color 0.45s ease, box-shadow 0.4s ease',
          backgroundColor:      atTop && !menuOpen ? 'transparent' : 'rgba(255,255,255,0.88)',
          backdropFilter:       atTop && !menuOpen ? 'none' : 'blur(18px)',
          WebkitBackdropFilter: atTop && !menuOpen ? 'none' : 'blur(18px)',
          boxShadow:            atTop && !menuOpen ? 'none' : '0 1px 0 rgba(0,0,0,0.06)',
        }}
      >
        <div className="container flex items-center justify-between w-full">

          {/* Logo */}
          <Link href="/" aria-label={site.name} className="flex-shrink-0">
            <Image
              src={useLightNav ? site.logo.light : site.logo.full}
              alt={site.name}
              width={140}
              height={36}
              priority
              className="h-8 w-auto transition-opacity duration-300"
            />
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
            {site.nav.map((item) => (
              <li key={item.href}>
                <DesktopNavLink
                  item={item}
                  isActive={item.type !== 'anchor' && pathname === item.href}
                  useLightNav={useLightNav}
                  onAnchorClick={(e) => handleNavClick(e, item)}
                />
              </li>
            ))}
          </ul>

          {/* Right — CTA + hamburger */}
          <div className="flex items-center gap-3">
            <div className="hidden md:block">
              <CTAButton
                href="/contact"
                variant={useLightNav ? 'ghost' : 'primary'}
                size="sm"
              >
                Get In Touch
              </CTAButton>
            </div>

            <button
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl transition-colors duration-200"
              style={{
                color:           useLightNav ? '#fff' : 'rgba(28,28,30,0.8)',
                backgroundColor: 'transparent',
              }}
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={menuOpen}
            >
              <Menu size={22} />
            </button>
          </div>

        </div>
      </nav>

      {/* ── Mobile menu ───────────────────────────────────── */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-[60] flex flex-col md:hidden"
          style={{ backgroundColor: site.tokens.dark }}
        >

          {/* Top bar — mirrors navbar height */}
          <div
            className="flex-shrink-0 flex items-center justify-between px-6"
            style={{
              height:       NAV_HEIGHT_PX,
              borderBottom: '1px solid rgba(255,255,255,0.07)',
            }}
          >
            <Link href="/" onClick={() => setMenuOpen(false)}>
              <Image
                src={site.logo.light ?? site.logo.full}
                alt={site.name}
                width={130}
                height={34}
                className="h-8 w-auto"
              />
            </Link>

            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200"
              style={{
                color:  'rgba(255,255,255,0.55)',
                border: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              Close
              <X size={14} />
            </button>
          </div>

          {/* Nav links */}
          <nav className="flex-1 flex flex-col justify-center px-6 overflow-y-auto">
            <ul className="list-none m-0 p-0 w-full">
              {site.nav.map((item, i) => {
                const isActive  = item.type !== 'anchor' && pathname === item.href

                const rowInner = (
                  <div
                    className="group flex items-center justify-between w-full py-5"
                    style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
                  >
                    <div className="flex items-baseline gap-4">
                      {/* Step counter */}
                      <span
                        className="text-[11px] font-mono tabular-nums"
                        style={{ color: 'rgba(255,255,255,0.18)' }}
                      >
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      {/* Label */}
                      <span
                        className="text-[2.6rem] font-bold tracking-tight leading-none"
                        style={{
                          color: isActive
                            ? 'white'
                            : 'rgba(255,255,255,0.28)',
                          // Active gets primary accent underline
                          textDecoration:      isActive ? 'underline' : 'none',
                          textDecorationColor: 'var(--color-accent)',
                          textUnderlineOffset: 6,
                        }}
                      >
                        {item.label}
                      </span>
                    </div>

                    {/* Arrow — shows on hover via group, always shows if active */}
                    <ArrowUpRight
                      size={20}
                      style={{
                        color:   'var(--color-accent)',
                        opacity: isActive ? 1 : 0,
                        // CSS group-hover won't work in inline styles — use className
                      }}
                      className={isActive ? '' : 'opacity-0 group-hover:opacity-100 transition-opacity duration-200'}
                    />
                  </div>
                )

                return (
                  <li key={item.href}>
                    {item.type === 'anchor' ? (
                      <button
                        className="w-full text-left"
                        onClick={(e) => handleNavClick(e, item)}
                      >
                        {rowInner}
                      </button>
                    ) : (
                      <Link
                        href={item.href}
                        className="block"
                        onClick={() => setMenuOpen(false)}
                      >
                        {rowInner}
                      </Link>
                    )}
                  </li>
                )
              })}
            </ul>
          </nav>

          {/* Bottom strip */}
          <div
            className="flex-shrink-0 px-6 py-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
            style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
          >
            <p
              className="text-sm italic leading-relaxed max-w-xs"
              style={{ color: 'rgba(255,255,255,0.25)' }}
            >
              {site.footer.tagline}
            </p>
            <CTAButton
              href="/contact"
              variant="primary"
              size="md"
              onClick={() => setMenuOpen(false)}
            >
              Start a Project
            </CTAButton>
          </div>

        </div>
      )}
    </>
  )
}
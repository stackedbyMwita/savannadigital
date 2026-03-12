'use client'

import { useEffect, useRef, createContext, useContext } from 'react'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// ─────────────────────────────────────────────────────────────
// LENIS CONTEXT
// Exposed so any component can access the Lenis instance —
// e.g. to programmatically scroll to a section:
//
//   const lenis = useLenis()
//   lenis?.scrollTo('#services', { offset: -72 })
// ─────────────────────────────────────────────────────────────

const LenisContext = createContext<Lenis | null>(null)

export function useLenis() {
  return useContext(LenisContext)
}

// ─────────────────────────────────────────────────────────────

export function LenisProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    const lenis = new Lenis({
      duration:       1.2,
      // Custom easing — feels heavier and more intentional than linear
      easing:         (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel:    true,
      touchMultiplier: 2,
      infinite:       false,
    })

    lenisRef.current = lenis

    // ── Critical: connect Lenis → GSAP ScrollTrigger ──────────
    // Without this, ScrollTrigger calculates scroll position from
    // the native scroll value, not the smooth Lenis position —
    // causing animations to fire at the wrong scroll points.
    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })

    // Prevent GSAP from compensating for dropped frames —
    // Lenis already handles this gracefully
    gsap.ticker.lagSmoothing(0)

    return () => {
      lenis.destroy()
      gsap.ticker.remove((time) => lenis.raf(time * 1000))
    }
  }, [])

  return (
    <LenisContext.Provider value={lenisRef.current}>
      {children}
    </LenisContext.Provider>
  )
}
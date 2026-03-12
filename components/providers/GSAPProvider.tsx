'use client'

import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { TextPlugin }    from 'gsap/TextPlugin'

// ─────────────────────────────────────────────────────────────
// GSAP PROVIDER
// Registers all plugins once at the root so every component
// can import from 'gsap' and use plugins without re-registering.
//
// Plugin registration is idempotent in GSAP — safe to call
// multiple times — but centralising it here keeps things clean.
// ─────────────────────────────────────────────────────────────

export function GSAPProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    gsap.registerPlugin(
      ScrollTrigger,
      ScrollToPlugin,
      TextPlugin,
    )

    // ── Global GSAP defaults ──────────────────────────────────
    // Applied to every tween unless overridden locally
    gsap.defaults({
      ease:     'power2.out',
      duration: 0.6,
    })

    // ── ScrollTrigger config ──────────────────────────────────
    ScrollTrigger.config({
      // Stops ScrollTrigger from interfering with touch events
      // on mobile — Lenis handles touch scrolling
      ignoreMobileResize: true,
    })

    return () => {
      // Kill all active ScrollTriggers on unmount —
      // prevents memory leaks during hot reload in dev
      ScrollTrigger.getAll().forEach((st) => st.kill())
    }
  }, [])

  return <>{children}</>
}
'use client'

import { useEffect } from 'react'
import { site } from '@/content'

// ─────────────────────────────────────────────────────────────
// BRAND PROVIDER
// Runs once on mount and injects the active site's brand tokens
// as CSS custom properties on <html>.
//
// This is what makes bg-primary, text-accent etc. automatically
// resolve to the correct color for whichever site is deployed —
// without touching a single component.
//
// BrandProvider intentionally has no state and no context —
// it doesn't need to. CSS custom properties on :root are
// globally accessible to every component instantly.
// ─────────────────────────────────────────────────────────────

export function BrandProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const root = document.documentElement
    const t    = site.tokens

    root.style.setProperty('--color-primary', t.primary)
    root.style.setProperty('--color-accent',  t.accent)
    root.style.setProperty('--color-dark',    t.dark)
    root.style.setProperty('--color-surface', t.surface)
    root.style.setProperty('--color-text',    t.text)
    root.style.setProperty('--color-muted',   t.muted)
    root.style.setProperty('--color-border',  t.border ?? '#E2E8F0')

    // Font overrides — only set if site declares custom fonts
    // Falls back to --font-outfit (loaded globally in layout.tsx)
    if (t.fontDisplay) root.style.setProperty('--font-display', t.fontDisplay)
    if (t.fontBody)    root.style.setProperty('--font-body',    t.fontBody)
  }, [])

  return <>{children}</>
}
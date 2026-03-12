'use client'

import { motion, AnimatePresence } from 'motion/react'
import { usePathname } from 'next/navigation'

// ─────────────────────────────────────────────────────────────
// PAGE TRANSITION
// Wraps page content with a subtle fade+lift on route change.
// The key={pathname} tells AnimatePresence to treat each route
// as a distinct element — triggering exit + enter animations.
//
// Kept deliberately subtle — the page sections have their own
// scroll-triggered entrance animations. The page transition
// is just a clean handoff between routes, not a statement.
// ─────────────────────────────────────────────────────────────

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 10 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.35,
            ease: 'easeOut',
          },
        }}
        exit={{
          opacity: 0,
          y: -6,
          transition: {
            duration: 0.25,
            ease: 'easeIn',
          },
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
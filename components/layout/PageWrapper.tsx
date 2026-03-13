'use client'

import { motion } from 'motion/react'
import { cn } from '@/lib/utils'

// ─────────────────────────────────────────────────────────────
// PAGE WRAPPER
//
// Used in every standalone page route (/blog, /contact, etc.)
// Home page (/) does NOT use this — its sections are full-width.
//
// Responsibilities:
//   1. Navbar offset  — pushes content below the fixed navbar
//   2. Min height     — prevents short pages from collapsing
//   3. Max width      — max-w-7xl centred, matches navbar/footer
//   4. Entrance       — subtle fade+lift after PageTransition
//
// Usage (basic):
//   export default function ContactPage() {
//     return (
//       <PageWrapper>
//         <ContactHero />
//         <ContactForm />
//       </PageWrapper>
//     )
//   }
//
// Usage (full-bleed hero then contained content):
//   export default function BlogPage() {
//     return (
//       <PageWrapper noPadding noMaxWidth>
//         <BlogHero />                      // full width, manages its own padding
//         <div className="container py-24"> // contained section
//           <BlogGrid />
//         </div>
//       </PageWrapper>
//     )
//   }
// ─────────────────────────────────────────────────────────────

export const NAV_HEIGHT = 72  // Keep in sync with Navbar NAV_HEIGHT_PX

type PageWrapperProps = {
  children:     React.ReactNode
  className?:   string
  // Remove horizontal padding — page manages its own layout
  noPadding?:   boolean
  // Remove max-width — for truly full-bleed pages
  noMaxWidth?:  boolean
  // Skip entrance animation — page has its own hero animation
  noAnimation?: boolean
}

export function PageWrapper({
  children,
  className,
  noPadding   = false,
  noMaxWidth  = false,
  noAnimation = false,
}: PageWrapperProps) {

  const inner = (
    <div
      className={cn(
        'min-h-screen',
        !noMaxWidth && 'w-full max-w-7xl mx-auto',
        !noPadding  && 'px-6 md:px-10 xl:px-12',
        className,
      )}
      style={{ paddingTop: NAV_HEIGHT }}
    >
      {children}
    </div>
  )

  if (noAnimation) return inner

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.45,
          ease: 'easeOut',
          delay: 0.08, // lets PageTransition finish first
        },
      }}
    >
      {inner}
    </motion.div>
  )
}
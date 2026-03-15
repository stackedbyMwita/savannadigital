'use client'

import { motion } from 'motion/react'
import { Mail, Phone } from 'lucide-react'
import { site } from '@/content'
import { CTAButton } from '@/components/ui/CTAButton'

// ─────────────────────────────────────────────────────────────
// CTA
// Dark full-width section with large headline + contact details
// ─────────────────────────────────────────────────────────────

export default function CTA() {
  return (
    <section
      className="py-24 md:py-36 relative overflow-hidden"
      style={{ backgroundColor: site.tokens.primary }}
    >
      {/* Background decoration */}
      <div
        aria-hidden
        className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full opacity-10 pointer-events-none"
        style={{ background: `radial-gradient(circle, white, transparent 70%)` }}
      />
      <div
        aria-hidden
        className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full opacity-10 pointer-events-none"
        style={{ background: `radial-gradient(circle, ${site.tokens.accent}, transparent 70%)` }}
      />

      {/* Grain */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
        }}
      />

      <div className="container relative">
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center gap-8">

          {/* Eyebrow */}
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full"
            style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.8)' }}
          >
            Let's Build Together
          </motion.span>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-4xl md:text-6xl font-bold leading-tight tracking-tight text-white"
          >
            Have a project in mind?{' '}
            <span style={{ color: site.tokens.accent }} className='italic'>Let's talk.</span>
          </motion.h2>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-base md:text-lg leading-relaxed max-w-xl"
            style={{ color: 'rgba(255,255,255,0.7)' }}
          >
            Tell us what you're building. We'll tell you how we'd approach it — no pitch, no pressure.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.22 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <CTAButton
              href="/contact"
              size="lg"
              variant='ghost'
            >
              Start a Project
            </CTAButton>
            <CTAButton
              href={"mailto:iamalexmwita@gmail.com"}
              size="lg"
              variant='primary'
              className='border-2'
              arrow
            >
              Or email us directly
            </CTAButton>
          </motion.div>

          {/* Contact details strip */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.32 }}
            className="flex flex-col sm:flex-row items-center pt-6 border-t w-full justify-center"
            style={{ borderColor: 'rgba(255,255,255,0.15)' }}
          >
            <a
              href={`mailto:${site.contact.email}`}
              className="flex items-center gap-2 text-sm transition-colors duration-200"
              style={{ color: 'rgba(255,255,255,0.6)' }}
              onMouseEnter={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,1)' }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.6)' }}
            >
              <Mail size={15} />
              {site.contact.email}
            </a>
            {site.contact.phone && (
              <>
                <span aria-hidden style={{ color: 'rgba(255,255,255,0.2)' }}>·</span>
                <a
                  href={`tel:${site.contact.phone}`}
                  className="flex items-center gap-2 text-sm transition-colors duration-200"
                  style={{ color: 'rgba(255,255,255,0.6)' }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,1)' }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.6)' }}
                >
                  <Phone size={15} />
                  {site.contact.phone}
                </a>
              </>
            )}
            {site.contact.address && (
              <>
                <span aria-hidden style={{ color: 'rgba(255,255,255,0.2)' }}>·</span>
                <span className="text-sm" style={{ color: 'rgba(255,255,255,0.45)' }}>
                  {site.contact.address}
                </span>
              </>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  )
}

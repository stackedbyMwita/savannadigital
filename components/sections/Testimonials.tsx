'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'motion/react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { site } from '@/content'
import { SectionTitle } from '@/components/ui/SectionTitle'

// ─────────────────────────────────────────────────────────────
// TESTIMONIALS
// Dark background, large quote carousel
// ─────────────────────────────────────────────────────────────
function TestimonialAuthor({ t, site }: { t: any; site: any }) {
  const [imgSrc, setImgSrc] = useState(
    t.avatar || `https://i.pravatar.cc/80?u=${encodeURIComponent(t.author)}`
  )

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
      <div
        className="w-12 h-12 rounded-full overflow-hidden ring-2"
        style={{ boxShadow: `0 0 0 2px ${site.tokens.primary}` }}
      >
        <Image
          src={imgSrc}
          alt={t.author}
          width={48}
          height={48}
          className="object-cover w-full h-full"
          onError={() =>
            setImgSrc(
              `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(t.author)}`
            )
          }
        />
      </div>

      <div className="text-center sm:text-left">
        <p className="font-semibold text-white">{t.author}</p>

        <p
          className="text-sm"
          style={{ color: "rgba(255,255,255,0.45)" }}
        >
          {t.role} · {t.company}
        </p>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const total = site.testimonials.length

  const prev = () => setActive((a) => (a - 1 + total) % total)
  const next = () => setActive((a) => (a + 1) % total)

  const t = site.testimonials[active]

  return (
    <section
      className="py-24 md:py-32 overflow-hidden relative"
      style={{ backgroundColor: site.tokens.dark }}
    >
      {/* Background grain */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
        }}
      />

      {/* Accent circle */}
      <div
        aria-hidden
        className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full pointer-events-none opacity-[0.07]"
        style={{ background: `radial-gradient(circle, ${site.tokens.primary}, transparent 70%)` }}
      />

      <div className="container relative flex flex-col gap-16">

        <SectionTitle
          badge={site.copy.testimonials.badge}
          title={site.copy.testimonials.title}
          variant="centered"
          scheme="dark"
          size="lg"
        />

        <div className="max-w-3xl mx-auto w-full">

          {/* Quote card */}
          <div className="relative min-h-[280px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -24 }}
                transition={{ duration: 0.45, ease: 'easeInOut' }}
                className="flex flex-col gap-8 text-center"
              >
                {/* Large quote mark */}
                <Quote
                  size={40}
                  className="mx-auto opacity-20"
                  style={{ color: site.tokens.accent }}
                  fill="currentColor"
                />

                {/* Quote text */}
                <p
                  className="text-xl md:text-2xl leading-relaxed font-medium"
                  style={{ color: 'rgba(255,255,255,0.88)' }}
                >
                  "{t.quote}"
                </p>

                {/* Author */}
                <TestimonialAuthor t={t} site={site} />

              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-10">

            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200"
              style={{ border: '1px solid rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.5)' }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'; e.currentTarget.style.color = '#fff' }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; e.currentTarget.style.color = 'rgba(255,255,255,0.5)' }}
            >
              <ChevronLeft size={18} />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {site.testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width:           i === active ? 24 : 6,
                    height:          6,
                    backgroundColor: i === active ? site.tokens.accent : 'rgba(255,255,255,0.2)',
                  }}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Next testimonial"
              className="w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200"
              style={{ border: '1px solid rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.5)' }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'; e.currentTarget.style.color = '#fff' }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; e.currentTarget.style.color = 'rgba(255,255,255,0.5)' }}
            >
              <ChevronRight size={18} />
            </button>

          </div>
        </div>
      </div>
    </section>
  )
}

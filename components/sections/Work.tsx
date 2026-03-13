'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import { site } from '@/content'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { CTAButton } from '@/components/ui/CTAButton'

// ─────────────────────────────────────────────────────────────
// WORK CARD
// ─────────────────────────────────────────────────────────────

function WorkCard({ item, index }: { item: typeof site.work[0]; index: number }) {
  const isLarge = index === 0 || index === 3

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, ease: [0.32, 0.72, 0, 1], delay: index * 0.1 }}
      className={isLarge ? 'md:col-span-2' : ''}
    >
      <Link
        href={`/work/${item.slug}`}
        className="group block relative overflow-hidden rounded-2xl"
        style={{ aspectRatio: isLarge ? '16/9' : '4/3' }}
      >
        {/* Cover image */}
        <Image
          src={item.coverImage}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          sizes={isLarge ? '(max-width: 768px) 100vw, 66vw' : '(max-width: 768px) 100vw, 33vw'}
        />

        {/* Gradient overlay */}
        <div
          className="absolute inset-0 transition-opacity duration-300"
          style={{
            background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)',
          }}
        />

        {/* Hover overlay */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ backgroundColor: `${site.tokens.primary}33` }}
        />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-between p-7">

          {/* Top — category + arrow */}
          <div className="flex items-center justify-between">
            <span
              className="text-xs font-medium uppercase tracking-widest px-3 py-1 rounded-full"
              style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.9)' }}
            >
              {item.category}
            </span>
            <motion.span
              className="w-9 h-9 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100"
              style={{ backgroundColor: site.tokens.accent, color: site.tokens.dark }}
              initial={false}
              animate={{}}
              transition={{ duration: 0.2 }}
            >
              <ArrowUpRight size={16} />
            </motion.span>
          </div>

          {/* Bottom — title + tags */}
          <div className="flex flex-col gap-3">
            <h3 className={`font-bold text-white leading-tight ${isLarge ? 'text-2xl md:text-3xl' : 'text-xl'}`}>
              {item.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] px-2.5 py-1 rounded-full"
                  style={{ backgroundColor: 'rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.75)' }}
                >
                  {tag}
                </span>
              ))}
            </div>
            {/* Results strip */}
            <div className="flex gap-5 pt-1 border-t border-white/10 mt-1">
              {item.results.slice(0, isLarge ? 3 : 2).map((r) => (
                <div key={r.label} className="flex flex-col">
                  <span className="text-base font-bold text-white" style={{ color: site.tokens.accent }}>{r.value}</span>
                  <span className="text-[10px] text-white/50 uppercase tracking-wide">{r.label}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </Link>
    </motion.div>
  )
}

// ─────────────────────────────────────────────────────────────
// WORK
// ─────────────────────────────────────────────────────────────

export default function Work() {
  return (
    <section
      id="work"
      className="py-24 md:py-32"
      style={{ backgroundColor: site.tokens.surface }}
    >
      <div className="container flex flex-col gap-14">

        <SectionTitle
          badge="Selected Work"
          title="Products We're Proud Of"
          description="A sample of recent client projects across fintech, retail, and agri."
          variant="centered"
          size="lg"
        />

        {/* Grid — first card spans 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {site.work.slice(0, 4).map((item, i) => (
            <WorkCard key={item.slug} item={item} index={i} />
          ))}
        </div>

        {/* View all */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <CTAButton href="/work" variant="outline" size="md" arrow>
            View All Work
          </CTAButton>
        </motion.div>

      </div>
    </section>
  )
}

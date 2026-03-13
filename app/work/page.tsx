'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import { site } from '@/content'
import { PageWrapper } from '@/components/layout/PageWrapper'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { CTAButton } from '@/components/ui/CTAButton'

// ─────────────────────────────────────────────────────────────
// DATA — extend work items with more detail for the full page
// ─────────────────────────────────────────────────────────────

// Extra work items to fill the page (same shape as site.work)

type WorkItem = (typeof site.work)[number]

const ALL_WORK: WorkItem[] = [...site.work]

const ALL_CATEGORIES = ['All', ...Array.from(new Set(ALL_WORK.map((w) => w.category)))]


// ─────────────────────────────────────────────────────────────
// WORK CARD
// ─────────────────────────────────────────────────────────────

function WorkCard({
  item,
  index,
}: {
  item:  WorkItem
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0  }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.45, ease: 'easeOut', delay: Math.min(index * 0.06, 0.3) }}
    >
      <Link
        href={`/work/${item.slug}`}
        className="group flex flex-col h-full rounded-2xl overflow-hidden border transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
        style={{ borderColor: site.tokens.border, backgroundColor: 'white' }}
      >
        {/* Cover */}
        <div className="relative overflow-hidden" style={{ aspectRatio: '16/10' }}>
          <Image
            src={item.coverImage}
            alt={item.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />

          {/* Gradient */}
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)' }}
          />

          {/* Hover overlay */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ backgroundColor: `${site.tokens.primary}22` }}
          />

          {/* Category badge */}
          <span
            className="absolute top-4 left-4 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full"
            style={{ backgroundColor: site.tokens.primary, color: 'white' }}
          >
            {item.category}
          </span>

          {/* Arrow on hover */}
          <motion.span
            className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            style={{ backgroundColor: site.tokens.accent, color: site.tokens.dark }}
          >
            <ArrowUpRight size={16} />
          </motion.span>

          {/* Client name bottom-left */}
          <span
            className="absolute bottom-4 left-4 text-xs font-medium"
            style={{ color: 'rgba(255,255,255,0.7)' }}
          >
            {item.client}
          </span>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-4 p-6 flex-1">
          <h3
            className="font-bold text-base leading-snug transition-colors duration-200 group-hover:text-primary"
            style={{ color: site.tokens.text }}
          >
            {item.title}
          </h3>

          <p className="text-sm leading-relaxed flex-1" style={{ color: site.tokens.muted }}>
            {item.summary}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5">
            {item.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-[11px] px-2.5 py-1 rounded-full font-medium"
                style={{
                  backgroundColor: `${site.tokens.primary}0f`,
                  color:           site.tokens.primary,
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Results strip */}
          <div
            className="grid grid-cols-3 gap-2 pt-4"
            style={{ borderTop: `1px solid ${site.tokens.border}` }}
          >
            {item.results.map((r) => (
              <div key={r.label} className="flex flex-col gap-0.5">
                <span
                  className="text-base font-bold leading-none"
                  style={{ color: site.tokens.primary }}
                >
                  {r.value}
                </span>
                <span
                  className="text-[10px] uppercase tracking-wide leading-tight"
                  style={{ color: site.tokens.muted }}
                >
                  {r.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

// ─────────────────────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────────────────────

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? ALL_WORK
    : ALL_WORK.filter((w) => w.category === activeCategory)

  return (
    <PageWrapper noPadding noMaxWidth noAnimation>

      {/* ── Hero ──────────────────────────────────────────── */}
      <div
        className="w-full pt-8 pb-16"
        style={{ backgroundColor: site.tokens.surface }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-12">
          <SectionTitle
            badge={site.copy.work.badge}
            title={site.copy.work.title}
            description={site.copy.work.description}
            variant="centered"
            size="lg"
          />
        </div>
      </div>

      {/* ── Filter tabs ───────────────────────────────────── */}
      <div
        className="w-full sticky top-0 z-40 py-4"
        style={{
          backgroundColor: 'rgba(255,255,255,0.9)',
          backdropFilter:  'blur(12px)',
          borderBottom:    `1px solid ${site.tokens.border}`,
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-12">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
            {ALL_CATEGORIES.map((cat) => {
              const active = cat === activeCategory
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className="relative flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 whitespace-nowrap"
                  style={{
                    backgroundColor: active ? site.tokens.primary  : 'transparent',
                    color:           active ? 'white'              : site.tokens.muted,
                    border:          active ? 'none'               : `1px solid ${site.tokens.border}`,
                  }}
                >
                  {cat}
                  {cat !== 'All' && (
                    <span
                      className="ml-1.5 text-[10px]"
                      style={{ opacity: active ? 0.7 : 0.5 }}
                    >
                      {ALL_WORK.filter(w => w.category === cat).length}
                    </span>
                  )}
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* ── Grid ──────────────────────────────────────────── */}
      <div className="w-full py-16" style={{ backgroundColor: 'white' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-12 flex flex-col gap-6">

          {/* Count */}
          <p className="text-sm" style={{ color: site.tokens.muted }}>
            Showing{' '}
            <span className="font-semibold" style={{ color: site.tokens.text }}>
              {filtered.length}
            </span>{' '}
            {filtered.length === 1 ? 'project' : 'projects'}
            {activeCategory !== 'All' && ` in ${activeCategory}`}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item, i) => (
              <WorkCard key={item.slug} item={item} index={i} />
            ))}
          </div>

        </div>
      </div>

      {/* ── CTA strip ─────────────────────────────────────── */}
      <div
        className="w-full py-20"
        style={{ backgroundColor: site.tokens.dark }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col gap-2 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Want to be on this list?
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)' }} className="text-sm">
              Tell us what you're building and we'll tell you how we'd approach it.
            </p>
          </div>
          <CTAButton
            href="/contact"
            variant="primary"
            size="lg"
            arrow
          >
            Start a Project
          </CTAButton>
        </div>
      </div>

    </PageWrapper>
  )
}
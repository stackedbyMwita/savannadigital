'use client'

import { useRef } from 'react'
import { useInView, motion } from 'motion/react'
import { site } from '@/content'

// ─────────────────────────────────────────────────────────────
// STATS
// Full-width dark band, 4 stats with staggered count-up feel
// ─────────────────────────────────────────────────────────────

function StatItem({ value, label, index }: { value: string; label: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.1 }}
      className="flex flex-col items-center text-center gap-2 px-6 py-10 relative"
    >
      {/* Vertical divider — not on last item */}
      {index < site.stats.length - 1 && (
        <span
          aria-hidden
          className="absolute right-0 top-1/2 -translate-y-1/2 hidden md:block"
          style={{ width: 1, height: 48, backgroundColor: 'rgba(255,255,255,0.08)' }}
        />
      )}

      <span
        className="text-4xl md:text-5xl font-bold tabular-nums leading-none tracking-tight"
        style={{ color: site.tokens.accent }}
      >
        {value}
      </span>
      <span
        className="text-xs uppercase tracking-widest font-medium"
        style={{ color: 'rgba(255,255,255,0.45)' }}
      >
        {label}
      </span>
    </motion.div>
  )
}

export default function Stats() {
  return (
    <section style={{ backgroundColor: site.tokens.dark }}>
      <div className="container">
        <div className={`grid grid-cols-2 md:grid-cols-${site.stats.length}`}>
          {site.stats.map((stat, i) => (
            <StatItem key={stat.label} value={stat.value} label={stat.label} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

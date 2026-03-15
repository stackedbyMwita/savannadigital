import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { site } from '@/content'
import { PageWrapper } from '@/components/layout/PageWrapper'
import { CTAButton } from '@/components/ui/CTAButton'
import { Button } from '@/components/ui/button'

// ─────────────────────────────────────────────────────────────
// STATIC PARAMS
// ─────────────────────────────────────────────────────────────

export async function generateStaticParams() {
  return site.work.map((w) => ({ slug: w.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const item = site.work.find((w) => w.slug === slug)
  if (!item) return {}
  return { title: item.title, description: item.summary }
}

// ─────────────────────────────────────────────────────────────
// RESULT STAT
// ─────────────────────────────────────────────────────────────

function ResultStat({ value, label }: { value: string; label: string }) {
  return (
    <div
      className="flex flex-col gap-2 p-6 rounded-2xl"
      style={{ backgroundColor: `${site.tokens.primary}08`, border: `1px solid ${site.tokens.primary}18` }}
    >
      <span className="text-4xl font-bold leading-none tracking-tight" style={{ color: site.tokens.primary }}>
        {value}
      </span>
      <span className="text-sm font-medium" style={{ color: site.tokens.muted }}>
        {label}
      </span>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────────────────────

export default async function WorkSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const item     = site.work.find((w) => w.slug === slug)
  if (!item) notFound()

  const cs          = item.caseStudy
  const teamMembers = cs ? site.team.filter((m) => cs.teamSlugs.includes(m.name)) : []
  const sameCategory  = site.work.filter((w) => w.slug !== slug && w.category === item.category).slice(0, 2)
  const otherCategory = site.work.filter((w) => w.slug !== slug && w.category !== item.category).slice(0, Math.max(0, 2 - sameCategory.length))
  const related       = [...sameCategory, ...otherCategory].slice(0, 2)

  return (
    <PageWrapper noPadding noMaxWidth noAnimation>

      {/* ── Hero (cover image as background) ─────────────── */}
      <div className="relative w-full" style={{ minHeight: '85vh' }}>

        {/* Background image */}
        <Image
          src={item.coverImage}
          alt={item.title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />

        {/* Multi-layer overlay: dark at bottom for legibility, subtle tint overall */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(
              to bottom,
              rgba(0,0,0,0.35) 0%,
              rgba(0,0,0,0.25) 40%,
              rgba(0,0,0,0.72) 75%,
              rgba(0,0,0,0.90) 100%
            )`,
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-between h-full" style={{ minHeight: '85vh' }}>

          {/* Top nav */}
          <div className="max-w-7xl mx-auto w-full px-6 md:px-10 xl:px-12 pt-12">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-sm font-medium transition-all duration-200 hover:gap-3"
              style={{ color: 'rgba(255,255,255,0.55)' }}
            >
              <Button variant="outline">
                <ArrowLeft size={15} />
                All Work
              </Button>
            </Link>
          </div>

          {/* Bottom title block */}
          <div className="max-w-7xl mx-auto w-full px-6 md:px-10 xl:px-12 pb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end">

              {/* Left: tags + title + summary */}
              <div className="flex flex-col gap-5">
                <div className="flex flex-wrap gap-2">
                  <span
                    className="text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full"
                    style={{ backgroundColor: site.tokens.primary, color: 'white' }}
                  >
                    {item.category}
                  </span>
                  <span
                    className="text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full"
                    style={{ backgroundColor: 'rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.7)' }}
                  >
                    {item.client}
                  </span>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight text-white">
                  {item.title}
                </h1>

                <p className="text-base leading-relaxed max-w-lg" style={{ color: 'rgba(255,255,255,0.65)' }}>
                  {item.summary}
                </p>
              </div>

              {/* Right: meta grid */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: 'Client',   value: item.client },
                  { label: 'Category', value: item.category },
                  { label: 'Year',     value: cs?.year     ?? '—' },
                  { label: 'Duration', value: cs?.duration ?? '—' },
                ].map((m) => (
                  <div
                    key={m.label}
                    className="flex flex-col gap-1 p-4 rounded-xl"
                    style={{
                      backgroundColor: 'rgba(255,255,255,0.08)',
                      border: '1px solid rgba(255,255,255,0.12)',
                      backdropFilter: 'blur(12px)',
                    }}
                  >
                    <span className="text-xs uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.4)' }}>
                      {m.label}
                    </span>
                    <span className="text-sm font-semibold text-white">{m.value}</span>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* ── Results bar ───────────────────────────────────── */}
      <div style={{ backgroundColor: site.tokens.primary }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-12">
          <div className="grid divide-x divide-white/10" style={{ gridTemplateColumns: `repeat(${item.results.length}, 1fr)` }}>
            {item.results.map((r) => (
              <div key={r.label} className="flex flex-col items-center text-center py-8 px-4 gap-1">
                <span className="text-3xl md:text-4xl font-bold leading-none" style={{ color: site.tokens.accent }}>
                  {r.value}
                </span>
                <span className="text-xs uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.6)' }}>
                  {r.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Case study body ───────────────────────────────── */}
      <div className="w-full py-20" style={{ backgroundColor: 'white' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

            {/* ── Narrative ─────────────────────────────── */}
            <div className="lg:col-span-2 flex flex-col gap-16">

              {cs ? (
                <>
                  {/* Challenge */}
                  <NarrativeSection number={1} title="The Challenge" color={site.tokens.primary} borderColor={site.tokens.border ?? '#000'}>
                    {cs.challenge}
                  </NarrativeSection>

                  {cs.screenshots[0] && <Screenshot src={cs.screenshots[0]} alt={`${item.title} — 1`} />}

                  {/* Approach */}
                  <NarrativeSection number={2} title="Our Approach" color={site.tokens.primary} borderColor={site.tokens.border ?? '#000'}>
                    {cs.approach}
                  </NarrativeSection>

                  {cs.screenshots[1] && <Screenshot src={cs.screenshots[1]} alt={`${item.title} — 2`} />}

                  {/* Outcome */}
                  <NarrativeSection number={3} title="The Outcome" color={site.tokens.accent} borderColor={`${site.tokens.accent}40`}>
                    {cs.outcome}
                  </NarrativeSection>
                </>
              ) : (
                <p className="text-base leading-relaxed" style={{ color: site.tokens.muted }}>
                  {item.summary}
                </p>
              )}
            </div>

            {/* ── Sidebar ───────────────────────────────── */}
            <aside className="flex flex-col gap-8">

              {/* Results */}
              <div className="flex flex-col gap-4">
                <h3 className="text-xs font-semibold uppercase tracking-widest" style={{ color: site.tokens.muted }}>
                  Results
                </h3>
                <div className="flex flex-col gap-3">
                  {item.results.map((r) => <ResultStat key={r.label} value={r.value} label={r.label} />)}
                </div>
              </div>

              {/* Services */}
              {cs && (
                <div className="flex flex-col gap-4 p-6 rounded-2xl" style={{ backgroundColor: site.tokens.surface }}>
                  <h3 className="text-xs font-semibold uppercase tracking-widest" style={{ color: site.tokens.muted }}>
                    Services Delivered
                  </h3>
                  <div className="flex flex-col gap-2">
                    {cs.services.map((s) => (
                      <div key={s} className="flex items-center gap-2.5 text-sm font-medium py-1" style={{ color: site.tokens.text }}>
                        <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: site.tokens.primary }} />
                        {s}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tech stack */}
              <div className="flex flex-col gap-4 p-6 rounded-2xl" style={{ backgroundColor: site.tokens.surface }}>
                <h3 className="text-xs font-semibold uppercase tracking-widest" style={{ color: site.tokens.muted }}>
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-3 py-1.5 rounded-full"
                      style={{ backgroundColor: `${site.tokens.primary}10`, color: site.tokens.primary }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Team */}
              {teamMembers.length > 0 && (
                <div className="flex flex-col gap-4 p-6 rounded-2xl" style={{ backgroundColor: site.tokens.surface }}>
                  <h3 className="text-xs font-semibold uppercase tracking-widest" style={{ color: site.tokens.muted }}>
                    Project Team
                  </h3>
                  <div className="flex flex-col gap-4">
                    {teamMembers.map((m) => (
                      <Link key={m.name} href={`/team/${m.slug}`} className="flex items-center gap-3 group">
                        <div className="relative w-9 h-9 rounded-full overflow-hidden flex-shrink-0">
                          <Image src={m.avatar} alt={m.name} fill className="object-cover" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold leading-tight group-hover:underline" style={{ color: site.tokens.text }}>{m.name}</p>
                          <p className="text-xs" style={{ color: site.tokens.muted }}>{m.role}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA */}
              <div className="flex flex-col gap-4 p-6 rounded-2xl" style={{ backgroundColor: site.tokens.dark }}>
                <p className="text-sm font-semibold text-white leading-snug">
                  Want results like these for your product?
                </p>
                <CTAButton href="/contact" variant="primary" size="sm" arrow>
                  Start a Project
                </CTAButton>
              </div>

            </aside>
          </div>
        </div>
      </div>

      {/* ── Related work ──────────────────────────────────── */}
      {related.length > 0 && (
        <div className="w-full py-16" style={{ backgroundColor: site.tokens.surface }}>
          <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-12 flex flex-col gap-10">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold" style={{ color: site.tokens.dark }}>More Work</h2>
              <Link
                href="/work"
                className="inline-flex items-center gap-1.5 text-sm font-semibold hover:opacity-70 transition-opacity"
                style={{ color: site.tokens.primary }}
              >
                View All <ArrowUpRight size={14} />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {related.map((w) => (
                <Link
                  key={w.slug}
                  href={`/work/${w.slug}`}
                  className="group flex gap-5 p-5 rounded-2xl transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                  style={{ backgroundColor: 'white', border: `1px solid ${site.tokens.border}` }}
                >
                  <div className="relative w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                    <Image
                      src={w.coverImage}
                      alt={w.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5 min-w-0 justify-center">
                    <span className="text-[11px] font-semibold uppercase tracking-widest" style={{ color: site.tokens.primary }}>
                      {w.category}
                    </span>
                    <h3
                      className="text-sm font-bold leading-snug line-clamp-2 group-hover:text-primary transition-colors duration-200"
                      style={{ color: site.tokens.text }}
                    >
                      {w.title}
                    </h3>
                    <span className="text-xs" style={{ color: site.tokens.muted }}>{w.client}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

    </PageWrapper>
  )
}

// ─────────────────────────────────────────────────────────────
// SHARED SUB-COMPONENTS
// ─────────────────────────────────────────────────────────────

function NarrativeSection({
  number, title, color, borderColor, children,
}: {
  number: number; title: string; color: string; borderColor: string; children: string[]
}) {
  return (
    <section className="flex flex-col gap-6">
      <div className="flex items-center gap-3">
        <span
          className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
          style={{ backgroundColor: color }}
        >
          {number}
        </span>
        <h2 className="text-xl font-bold" style={{ color: site.tokens.dark }}>{title}</h2>
      </div>
      <div className="pl-10 flex flex-col gap-4" style={{ borderLeft: `2px solid ${borderColor}` }}>
        {children.map((para, i) => (
          <p key={i} className="text-base leading-relaxed" style={{ color: site.tokens.muted }}>
            {para}
          </p>
        ))}
      </div>
    </section>
  )
}

function Screenshot({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="rounded-2xl overflow-hidden shadow-lg" style={{ aspectRatio: '16/9' }}>
      <Image src={src} alt={alt} width={900} height={506} className="w-full h-full object-cover" />
    </div>
  )
}
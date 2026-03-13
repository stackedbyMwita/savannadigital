import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowUpRight, Calendar, Tag } from 'lucide-react'
import { site } from '@/content'
import { PageWrapper } from '@/components/layout/PageWrapper'
import { CTAButton } from '@/components/ui/CTAButton'

// ─────────────────────────────────────────────────────────────
// SHARED WORK DATA — mirrors work-page.tsx
// In production move this to lib/work-data.ts and import both
// ─────────────────────────────────────────────────────────────

const WORK_IMAGES: Record<string, string> = {
  'kenyabank-digital':      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&q=85',
  'mbiri-ecommerce':        'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1400&q=85',
  'agrohub-platform':       'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=1400&q=85',
  'equity-mobile':          'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1400&q=85',
  'twiga-dashboard':        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&q=85',
  'mkopa-brand':            'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1400&q=85',
  'kplc-portal':            'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1400&q=85',
  'safaricom-design-system':'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=1400&q=85',
}

const EXTRA_WORK = [
  {
    slug: 'equity-mobile', title: 'Equity Bank Mobile Redesign', client: 'Equity Bank',
    category: 'Mobile App', tags: ['React Native', 'TypeScript', 'Node.js'],
    summary: 'End-to-end redesign of Equity Bank\'s mobile banking app. Reduced drop-off at onboarding by 44%.',
    results: [{ value: '44%', label: 'Drop-off reduction' }, { value: '4.6', label: 'App store rating' }, { value: '2M+', label: 'Active users' }],
  },
  {
    slug: 'twiga-dashboard', title: 'Twiga Foods Ops Dashboard', client: 'Twiga Foods',
    category: 'Web Application', tags: ['Next.js', 'Supabase', 'Mapbox', 'Recharts'],
    summary: 'Real-time operations dashboard for tracking 3,000+ daily deliveries across Nairobi.',
    results: [{ value: '3K+', label: 'Daily deliveries tracked' }, { value: '18%', label: 'Delivery efficiency gain' }, { value: '8wks', label: 'Delivery timeline' }],
  },
  {
    slug: 'mkopa-brand', title: 'M-KOPA Brand Identity', client: 'M-KOPA',
    category: 'Brand Identity', tags: ['Brand Strategy', 'Visual Identity', 'Design System'],
    summary: 'Full brand refresh for M-KOPA\'s expansion into 4 new African markets.',
    results: [{ value: '4', label: 'New markets launched' }, { value: '60%', label: 'Brand recall increase' }, { value: '12wk', label: 'Full rollout' }],
  },
  {
    slug: 'kplc-portal', title: 'KPLC Self-Service Portal', client: 'KPLC',
    category: 'Web Application', tags: ['Next.js', 'PostgreSQL', 'AWS', 'M-PESA API'],
    summary: 'Customer self-service portal for Kenya Power — bill payments, fault reporting, connection requests.',
    results: [{ value: '500K', label: 'Monthly active users' }, { value: '70%', label: 'Call centre reduction' }, { value: '99.9%', label: 'Uptime SLA' }],
  },
  {
    slug: 'safaricom-design-system', title: 'Safaricom Design System', client: 'Safaricom',
    category: 'UI/UX Design', tags: ['Figma', 'React', 'Storybook', 'Design Tokens'],
    summary: 'Enterprise design system used across 12 internal products and 3 customer-facing apps.',
    results: [{ value: '12', label: 'Products using system' }, { value: '65%', label: 'Design velocity increase' }, { value: '200+', label: 'Components built' }],
  },
]

const ALL_WORK = [
  ...site.work.map((w) => ({ ...w, coverImage: undefined })),
  ...EXTRA_WORK,
]

// Per-slug narrative content
const CASE_STUDY_CONTENT: Record<string, {
  year:       string
  duration:   string
  challenge:  string[]
  approach:   string[]
  outcome:    string[]
  services:   string[]
  teamSlugs:  string[]
  screenshots: string[]
}> = {
  'kenyabank-digital': {
    year: '2024', duration: '14 weeks',
    services: ['Web Development', 'UI/UX Design', 'Cloud & DevOps'],
    teamSlugs: ['David Mwangi', 'Fatuma Ali', 'Brian Otieno'],
    challenge: [
      'KenyaBank\'s internet banking portal was built in 2011. By 2024, it was serving 1.2 million customers on infrastructure that was never designed to scale.',
      'Page load times averaged 8 seconds on a good connection. On mobile — the primary device for 74% of their users — it regularly timed out entirely. Customer complaints had doubled year-on-year. The bank\'s digital transaction volume was 60% below industry benchmarks.',
      'They came to us with a mandate: rebuild it completely, improve performance by at least 5x, and do it without disrupting 1.2 million active users mid-migration.',
    ],
    approach: [
      'We started with three weeks of discovery — auditing every API, every user flow, every failure mode in the legacy system. We interviewed 40 customers across Nairobi, Mombasa, and Kisumu to understand how they actually used the portal.',
      'The new architecture was built on Next.js with server-side rendering for the authenticated dashboard, aggressive edge caching via Cloudflare, and a Node.js API layer that replaced 14 years of accumulated PHP endpoints.',
      'We ran the old and new systems in parallel for the last four weeks of development, migrating users in cohorts of 50,000 at a time, with instant rollback capability at every stage.',
    ],
    outcome: [
      'Load time dropped from 8.2 seconds to 1.1 seconds — a 7.4x improvement. Digital transaction volume increased 340% in the first quarter after launch.',
      'The migration was completed without a single hour of unplanned downtime. Zero rollbacks were needed. The portal now handles 3x peak load compared to the legacy system.',
    ],
    screenshots: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=80',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80',
      'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=900&q=80',
    ],
  },
  'mbiri-ecommerce': {
    year: '2024', duration: '10 weeks',
    services: ['Web Development', 'UI/UX Design', 'Brand Identity'],
    teamSlugs: ['Fatuma Ali', 'David Mwangi', 'Wanjiku Ndegwa'],
    challenge: [
      'Mbiri Collections had been selling through Instagram DMs and a basic Shopify template for three years. It worked — until it didn\'t. Manual order management was collapsing under the volume of their growing customer base.',
      'They needed a platform that felt as premium as their product, worked for customers in Kenya, Uganda, and Tanzania, and could handle M-PESA natively alongside card payments.',
    ],
    approach: [
      'We rebuilt the storefront in Next.js with a headless Shopify backend — retaining their existing product catalogue and order history while completely replacing the frontend experience.',
      'The design language was developed in tandem: editorial, warm, and distinctly East African. Every component was tested on 3G connections. We integrated Pesapal for M-PESA and card payments across all three markets.',
    ],
    outcome: [
      'Revenue increased 280% in the first quarter after launch. The app store rating climbed from 3.2 to 4.8. Monthly active users reached 60,000 within 90 days of go-live.',
      'Average order value increased 34% — attributed primarily to the improved product discovery and upsell flows we built into the new checkout experience.',
    ],
    screenshots: [
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=900&q=80',
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=900&q=80',
      'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=900&q=80',
    ],
  },
  'agrohub-platform': {
    year: '2023', duration: '20 weeks',
    services: ['Mobile Apps', 'Web Development', 'Data & Analytics'],
    teamSlugs: ['David Mwangi', 'James Kariuki', 'Fatuma Ali'],
    challenge: [
      'AgroHub\'s mission is to connect smallholder farmers to markets, weather data, and credit — across Kenya, Uganda, and Tanzania. Their existing tools were a patchwork of WhatsApp groups and spreadsheets.',
      'The core challenge was brutal: most of their target users have low-bandwidth connections, entry-level Android phones, and limited digital literacy. Any product that didn\'t work in these conditions was not a product.',
    ],
    approach: [
      'We built mobile-first from day one — React Native on the frontend, Supabase on the backend, Mapbox for the field mapping features. Every screen was designed with a maximum of three taps to any critical action.',
      'We ran weekly field testing sessions in Nakuru and Eldoret, watching farmers use prototypes in real conditions. Eleven of our design decisions were reversed based on field feedback.',
      'Offline-first architecture meant the app worked on intermittent connections. Data synced automatically when connectivity was restored, with conflict resolution built in.',
    ],
    outcome: [
      '40,000 farmers onboarded in the first six months. Average income for active users increased 22% in the first crop cycle after adoption.',
      'The platform launched in Kenya and Uganda simultaneously, with Tanzania following eight weeks later. All three launches came in under budget and on schedule.',
    ],
    screenshots: [
      'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=900&q=80',
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=900&q=80',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=80',
    ],
  },
}

// Fallback content for extra work items
const FALLBACK_CONTENT = (item: typeof ALL_WORK[0]) => ({
  year: '2024', duration: '12 weeks',
  services: item.tags.slice(0, 3),
  teamSlugs: ['Amina Oduya', 'David Mwangi', 'Fatuma Ali'],
  challenge: [
    `${item.client} came to us with a clear problem: their existing digital infrastructure wasn't keeping pace with their growth.`,
    `After an initial discovery sprint, we identified the core bottlenecks and agreed on a scope that would deliver measurable results within a realistic timeline.`,
  ],
  approach: [
    `We started with a deep-dive into ${item.client}'s existing systems, user research, and competitive landscape. The findings shaped every subsequent decision.`,
    `${item.tags.slice(0, 2).join(' and ')} formed the technical backbone — chosen for their performance characteristics and long-term maintainability in the African context.`,
  ],
  outcome: [
    `The results exceeded the targets we set at the start of the engagement. ${item.results[0].value} ${item.results[0].label.toLowerCase()} — achieved within the first quarter after launch.`,
    `${item.client} has since extended the engagement for ongoing development and support.`,
  ],
  screenshots: [
    WORK_IMAGES[item.slug] ?? 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=80',
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80',
  ],
})

// ─────────────────────────────────────────────────────────────
// STATIC PARAMS
// ─────────────────────────────────────────────────────────────

export async function generateStaticParams() {
  return ALL_WORK.map((w) => ({ slug: w.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const item = ALL_WORK.find((w) => w.slug === slug)
  if (!item) return {}
  return {
    title:       item.title,
    description: item.summary,
  }
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
      <span
        className="text-4xl font-bold leading-none tracking-tight"
        style={{ color: site.tokens.primary }}
      >
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
  const item     = ALL_WORK.find((w) => w.slug === slug)
  if (!item) notFound()

  const coverImage = WORK_IMAGES[slug] ?? 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&q=85'
  const content    = CASE_STUDY_CONTENT[slug] ?? FALLBACK_CONTENT(item)
  const teamMembers = site.team.filter((m) => content.teamSlugs.includes(m.name))
  const sameCategory  = ALL_WORK.filter((w) => w.slug !== slug && w.category === item.category).slice(0, 2)
  const otherCategory = ALL_WORK.filter((w) => w.slug !== slug && w.category !== item.category).slice(0, Math.max(0, 2 - sameCategory.length))
  const related       = [...sameCategory, ...otherCategory].slice(0, 2)

  return (
    <PageWrapper noPadding noMaxWidth noAnimation>

      {/* ── Hero ──────────────────────────────────────────── */}
      <div
        className="w-full pt-24 pb-0"
        style={{ backgroundColor: site.tokens.dark }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-12 pt-10 pb-14">

          {/* Back */}
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm font-medium mb-10 transition-all duration-200 hover:gap-3"
            style={{ color: 'rgba(255,255,255,0.4)' }}
          >
            <ArrowLeft size={15} />
            All Work
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">

            {/* Left — title + meta */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-wrap gap-2">
                <span
                  className="text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full"
                  style={{ backgroundColor: site.tokens.primary, color: 'white' }}
                >
                  {item.category}
                </span>
                <span
                  className="text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full"
                  style={{ backgroundColor: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.6)' }}
                >
                  {item.client}
                </span>
              </div>

              <h1 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight text-white">
                {item.title}
              </h1>

              <p className="text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
                {item.summary}
              </p>
            </div>

            {/* Right — project meta */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Client',    value: item.client },
                { label: 'Category',  value: item.category },
                { label: 'Year',      value: content.year },
                { label: 'Duration',  value: content.duration },
              ].map((m) => (
                <div
                  key={m.label}
                  className="flex flex-col gap-1 p-4 rounded-xl"
                  style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
                >
                  <span className="text-xs uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.35)' }}>
                    {m.label}
                  </span>
                  <span className="text-sm font-semibold text-white">{m.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Cover image ───────────────────────────────────── */}
      <div className="w-full relative" style={{ aspectRatio: '21/8', maxHeight: 560 }}>
        <Image
          src={coverImage}
          alt={item.title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.7) 10%, transparent 80%)' }}
          />
      </div>

      {/* ── Results bar ───────────────────────────────────── */}
      <div style={{ backgroundColor: site.tokens.primary }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-12">
          <div className={`grid grid-cols-${item.results.length} divide-x divide-white/10`}>
            {item.results.map((r) => (
              <div key={r.label} className="flex flex-col items-center text-center py-8 px-4 gap-1">
                <span className="text-3xl md:text-4xl font-bold text-white leading-none" style={{ color: site.tokens.accent }}>
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

            {/* ── Main narrative ────────────────────────── */}
            <div className="lg:col-span-2 flex flex-col gap-16">

              {/* Challenge */}
              <section className="flex flex-col gap-6">
                <div className="flex items-center gap-3">
                  <span
                    className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                    style={{ backgroundColor: site.tokens.primary }}
                  >
                    1
                  </span>
                  <h2 className="text-xl font-bold" style={{ color: site.tokens.dark }}>The Challenge</h2>
                </div>
                <div
                  className="pl-10 flex flex-col gap-4"
                  style={{ borderLeft: `2px solid ${site.tokens.border}` }}
                >
                  {content.challenge.map((para, i) => (
                    <p key={i} className="text-base leading-relaxed" style={{ color: site.tokens.muted }}>
                      {para}
                    </p>
                  ))}
                </div>
              </section>

              {/* Screenshot 1 */}
              {content.screenshots[0] && (
                <div className="rounded-2xl overflow-hidden shadow-lg" style={{ aspectRatio: '16/9' }}>
                  <Image
                    src={content.screenshots[0]}
                    alt={`${item.title} — screenshot`}
                    width={900}
                    height={506}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {/* Approach */}
              <section className="flex flex-col gap-6">
                <div className="flex items-center gap-3">
                  <span
                    className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                    style={{ backgroundColor: site.tokens.primary }}
                  >
                    2
                  </span>
                  <h2 className="text-xl font-bold" style={{ color: site.tokens.dark }}>Our Approach</h2>
                </div>
                <div
                  className="pl-10 flex flex-col gap-4"
                  style={{ borderLeft: `2px solid ${site.tokens.border}` }}
                >
                  {content.approach.map((para, i) => (
                    <p key={i} className="text-base leading-relaxed" style={{ color: site.tokens.muted }}>
                      {para}
                    </p>
                  ))}
                </div>
              </section>

              {/* Screenshot 2 */}
              {content.screenshots[1] && (
                <div className="rounded-2xl overflow-hidden shadow-lg" style={{ aspectRatio: '16/9' }}>
                  <Image
                    src={content.screenshots[1]}
                    alt={`${item.title} — screenshot 2`}
                    width={900}
                    height={506}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {/* Outcome */}
              <section className="flex flex-col gap-6">
                <div className="flex items-center gap-3">
                  <span
                    className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                    style={{ backgroundColor: site.tokens.accent }}
                  >
                    3
                  </span>
                  <h2 className="text-xl font-bold" style={{ color: site.tokens.dark }}>The Outcome</h2>
                </div>
                <div
                  className="pl-10 flex flex-col gap-4"
                  style={{ borderLeft: `2px solid ${site.tokens.accent}40` }}
                >
                  {content.outcome.map((para, i) => (
                    <p key={i} className="text-base leading-relaxed" style={{ color: site.tokens.muted }}>
                      {para}
                    </p>
                  ))}
                </div>
              </section>

            </div>

            {/* ── Sidebar ───────────────────────────────── */}
            <aside className="flex flex-col gap-8">

              {/* Results */}
              <div className="flex flex-col gap-4">
                <h3 className="text-xs font-semibold uppercase tracking-widest" style={{ color: site.tokens.muted }}>
                  Results
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  {item.results.map((r) => (
                    <ResultStat key={r.label} value={r.value} label={r.label} />
                  ))}
                </div>
              </div>

              {/* Services */}
              <div
                className="flex flex-col gap-4 p-6 rounded-2xl"
                style={{ backgroundColor: site.tokens.surface }}
              >
                <h3 className="text-xs font-semibold uppercase tracking-widest" style={{ color: site.tokens.muted }}>
                  Services Delivered
                </h3>
                <div className="flex flex-col gap-2">
                  {content.services.map((s) => (
                    <div
                      key={s}
                      className="flex items-center gap-2.5 text-sm font-medium py-1"
                      style={{ color: site.tokens.text }}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ backgroundColor: site.tokens.primary }}
                      />
                      {s}
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech stack */}
              <div
                className="flex flex-col gap-4 p-6 rounded-2xl"
                style={{ backgroundColor: site.tokens.surface }}
              >
                <h3 className="text-xs font-semibold uppercase tracking-widest" style={{ color: site.tokens.muted }}>
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-3 py-1.5 rounded-full"
                      style={{
                        backgroundColor: `${site.tokens.primary}10`,
                        color:           site.tokens.primary,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Team */}
              {teamMembers.length > 0 && (
                <div
                  className="flex flex-col gap-4 p-6 rounded-2xl"
                  style={{ backgroundColor: site.tokens.surface }}
                >
                  <h3 className="text-xs font-semibold uppercase tracking-widest" style={{ color: site.tokens.muted }}>
                    Project Team
                  </h3>
                  <div className="flex flex-col gap-4">
                    {teamMembers.map((member) => (
                      <div key={member.name} className="flex items-center gap-3">
                        <div className="relative w-9 h-9 rounded-full overflow-hidden flex-shrink-0">
                          <Image
                            src={`https://i.pravatar.cc/72?u=${member.name}`}
                            alt={member.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <p className="text-sm font-semibold leading-tight" style={{ color: site.tokens.text }}>{member.name}</p>
                          <p className="text-xs" style={{ color: site.tokens.muted }}>{member.role}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA */}
              <div
                className="flex flex-col gap-4 p-6 rounded-2xl"
                style={{ backgroundColor: site.tokens.dark }}
              >
                <p className="text-sm font-semibold text-white leading-snug">
                  Want results like these for your product?
                </p>
                <CTAButton
                  href="/contact"
                  variant="primary"
                  size="sm"
                  arrow
                >
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
                className="inline-flex items-center gap-1.5 text-sm font-semibold transition-colors duration-200 hover:opacity-70"
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
                      src={WORK_IMAGES[w.slug] ?? 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&q=70'}
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
                      className="text-sm font-bold leading-snug line-clamp-2 transition-colors duration-200 group-hover:text-primary"
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
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowUpRight, Linkedin, Twitter, Mail } from 'lucide-react'
import { site } from '@/content'
import { PageWrapper } from '@/components/layout/PageWrapper'
import { CTAButton } from '@/components/ui/CTAButton'

// ─────────────────────────────────────────────────────────────
// WORK DATA — needed to resolve project slugs to titles
// ─────────────────────────────────────────────────────────────

const EXTRA_WORK_META: Record<string, { title: string; category: string; client: string }> = {
  'equity-mobile':           { title: 'Equity Bank Mobile Redesign', category: 'Mobile App',       client: 'Equity Bank'  },
  'twiga-dashboard':         { title: 'Twiga Foods Ops Dashboard',   category: 'Web Application',  client: 'Twiga Foods'  },
  'mkopa-brand':             { title: 'M-KOPA Brand Identity',       category: 'Brand Identity',   client: 'M-KOPA'       },
  'kplc-portal':             { title: 'KPLC Self-Service Portal',    category: 'Web Application',  client: 'KPLC'         },
  'safaricom-design-system': { title: 'Safaricom Design System',     category: 'UI/UX Design',     client: 'Safaricom'    },
}

const WORK_IMAGES: Record<string, string> = {
  'kenyabank-digital':       'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
  'mbiri-ecommerce':         'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80',
  'agrohub-platform':        'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=600&q=80',
  'equity-mobile':           'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80',
  'twiga-dashboard':         'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
  'mkopa-brand':             'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80',
  'kplc-portal':             'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&q=80',
  'safaricom-design-system': 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&q=80',
}

function getWorkMeta(slug: string) {
  const fromSite = site.work.find((w) => w.slug === slug)
  if (fromSite) return { title: fromSite.title, category: fromSite.category, client: fromSite.client }
  return EXTRA_WORK_META[slug] ?? null
}

// ─────────────────────────────────────────────────────────────
// STATIC PARAMS
// ─────────────────────────────────────────────────────────────

export async function generateStaticParams() {
  return site.team.map((m) => ({ slug: m.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const member   = site.team.find((m) => m.slug === slug)
  if (!member) return {}
  return {
    title:       member.name,
    description: member.bio,
  }
}

// ─────────────────────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────────────────────

export default async function TeamMemberPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug }  = await params
  const member    = site.team.find((m) => m.slug === slug)
  if (!member) notFound()

  const colleagues = site.team.filter((m) => m.slug !== slug && m.department === member.department)
  const projects   = (member.projects ?? []).map((ps) => ({ slug: ps, ...getWorkMeta(ps) })).filter((p) => p.title)

  return (
    <PageWrapper noPadding noMaxWidth noAnimation>

      {/* ── Hero ──────────────────────────────────────────── */}
      <div
        className="w-full pt-24"
        style={{ backgroundColor: site.tokens.dark }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-12 pt-10 pb-0">

          {/* Back */}
          <Link
            href="/team"
            className="inline-flex items-center gap-2 text-sm font-medium mb-10 transition-all duration-200 hover:gap-3"
            style={{ color: 'rgba(255,255,255,0.4)' }}
          >
            <ArrowLeft size={15} />
            The Team
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end pb-0">

            {/* Left — name + role + bio */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-wrap gap-2">
                <span
                  className="text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full"
                  style={{ backgroundColor: `${site.tokens.primary}40`, color: 'rgba(255,255,255,0.8)' }}
                >
                  {member.department}
                </span>
              </div>

              <div className="flex flex-col gap-2">
                <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                  {member.name}
                </h1>
                <p className="text-xl font-medium" style={{ color: site.tokens.accent }}>
                  {member.role}
                </p>
              </div>

              <p className="text-base leading-relaxed max-w-lg" style={{ color: 'rgba(255,255,255,0.55)' }}>
                {member.bio}
              </p>

              {/* Socials */}
              <div className="flex items-center gap-3">
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium px-4 py-2.5 rounded-xl transition-colors duration-200"
                    style={{ backgroundColor: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.7)' }}
                  >
                    <Linkedin size={15} />
                    LinkedIn
                  </a>
                )}
                {member.twitter && (
                  <a
                    href={member.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium px-4 py-2.5 rounded-xl transition-colors duration-200"
                    style={{ backgroundColor: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.7)' }}
                  >
                    <Twitter size={15} />
                    Twitter
                  </a>
                )}
                <a
                  href={`mailto:${site.contact.email}`}
                  className="flex items-center gap-2 text-sm font-medium px-4 py-2.5 rounded-xl transition-colors duration-200"
                  style={{ backgroundColor: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.7)' }}
                >
                  <Mail size={15} />
                  Email
                </a>
              </div>
            </div>

            {/* Right — avatar */}
            <div className="flex justify-center lg:justify-end">
              <div
                className="relative w-72 h-80 rounded-2xl overflow-hidden"
                style={{ border: `3px solid ${site.tokens.primary}` }}
              >
                <Image
                  src={`https://i.pravatar.cc/600?u=${member.name}`}
                  alt={member.name}
                  fill
                  priority
                  className="object-cover object-top"
                  sizes="288px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Body ──────────────────────────────────────────── */}
      <div className="w-full py-20" style={{ backgroundColor: 'white' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

            {/* ── Bio ───────────────────────────────────── */}
            <div className="lg:col-span-2 flex flex-col gap-10">

              {/* Full bio */}
              {member.fullBio && member.fullBio.length > 0 && (
                <section className="flex flex-col gap-5">
                  <h2 className="text-xl font-bold" style={{ color: site.tokens.dark }}>
                    About {member.name.split(' ')[0]}
                  </h2>
                  <div className="flex flex-col gap-4">
                    {member.fullBio.map((para, i) => (
                      <p key={i} className="text-base leading-relaxed" style={{ color: site.tokens.muted }}>
                        {para}
                      </p>
                    ))}
                  </div>
                </section>
              )}

              {/* Projects */}
              {projects.length > 0 && (
                <section className="flex flex-col gap-6">
                  <h2 className="text-xl font-bold" style={{ color: site.tokens.dark }}>
                    Projects
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {projects.map((p) => (
                      <Link
                        key={p.slug}
                        href={`/work/${p.slug}`}
                        className="group flex gap-4 p-4 rounded-xl border transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
                        style={{ borderColor: site.tokens.border }}
                      >
                        <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                          <Image
                            src={WORK_IMAGES[p.slug] ?? 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200&q=70'}
                            alt={p.title ?? ''}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                        <div className="flex flex-col gap-1 justify-center min-w-0">
                          <span
                            className="text-[10px] font-semibold uppercase tracking-widest"
                            style={{ color: site.tokens.primary }}
                          >
                            {p.category}
                          </span>
                          <h3
                            className="text-sm font-bold leading-snug line-clamp-2 transition-colors duration-200 group-hover:text-primary"
                            style={{ color: site.tokens.text }}
                          >
                            {p.title}
                          </h3>
                          <span className="text-xs" style={{ color: site.tokens.muted }}>{p.client}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </section>
              )}

            </div>

            {/* ── Sidebar ───────────────────────────────── */}
            <aside className="flex flex-col gap-8">

              {/* Skills */}
              {member.skills && member.skills.length > 0 && (
                <div
                  className="flex flex-col gap-4 p-6 rounded-2xl"
                  style={{ backgroundColor: site.tokens.surface }}
                >
                  <h3 className="text-xs font-semibold uppercase tracking-widest" style={{ color: site.tokens.muted }}>
                    Skills
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs font-medium px-3 py-1.5 rounded-full"
                        style={{
                          backgroundColor: `${site.tokens.primary}10`,
                          color:           site.tokens.primary,
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Department colleagues */}
              {colleagues.length > 0 && (
                <div
                  className="flex flex-col gap-4 p-6 rounded-2xl"
                  style={{ backgroundColor: site.tokens.surface }}
                >
                  <h3 className="text-xs font-semibold uppercase tracking-widest" style={{ color: site.tokens.muted }}>
                    {member.department} Team
                  </h3>
                  <div className="flex flex-col gap-4">
                    {colleagues.map((c) => (
                      <Link
                        key={c.slug}
                        href={`/team/${c.slug}`}
                        className="flex items-center gap-3 group"
                      >
                        <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                          <Image
                            src={`https://i.pravatar.cc/80?u=${c.name}`}
                            alt={c.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex flex-col gap-0.5 min-w-0">
                          <span
                            className="text-sm font-semibold leading-tight transition-colors duration-200 group-hover:text-primary"
                            style={{ color: site.tokens.text }}
                          >
                            {c.name}
                          </span>
                          <span className="text-xs" style={{ color: site.tokens.muted }}>{c.role}</span>
                        </div>
                        <ArrowUpRight
                          size={14}
                          className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex-shrink-0"
                          style={{ color: site.tokens.primary }}
                        />
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Work together CTA */}
              <div
                className="flex flex-col gap-4 p-6 rounded-2xl"
                style={{ backgroundColor: site.tokens.dark }}
              >
                <p className="text-sm font-semibold text-white leading-snug">
                  Want {member.name.split(' ')[0]} on your project?
                </p>
                <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>
                  Tell us what you're building and we'll put together the right team.
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

    </PageWrapper>
  )
}
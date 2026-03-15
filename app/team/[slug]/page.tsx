import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowUpRight, Linkedin, Twitter, Mail } from 'lucide-react'
import { site } from '@/content'
import { PageWrapper } from '@/components/layout/PageWrapper'
import { Button } from '@/components/ui/button'
import { CTAButton } from '@/components/ui/CTAButton'

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
  return { title: member.name, description: member.bio }
}

// ─────────────────────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────────────────────

export default async function TeamMemberPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug }   = await params
  const member     = site.team.find((m) => m.slug === slug)
  if (!member) notFound()

  const colleagues = site.team.filter((m) => m.slug !== slug && m.department === member.department)

  const projects = (member.projects ?? [])
    .map((ps) => site.work.find((w) => w.slug === ps))
    .filter(Boolean) as typeof site.work

  return (
    <PageWrapper noPadding noMaxWidth noAnimation>

      {/* ── Hero (avatar as background) ───────────────────── */}
      <div className="relative w-full" style={{ minHeight: '85vh' }}>

        {/* Background image */}
        <Image
          src={member.avatar}
          alt={member.name}
          fill
          priority
          className="object-cover object-top"
          sizes="100vw"
        />

        {/* Gradient overlay: light at top, heavy at bottom */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(
              to bottom,
              rgba(0,0,0,0.30) 0%,
              rgba(0,0,0,0.20) 35%,
              rgba(0,0,0,0.72) 70%,
              rgba(0,0,0,0.90) 100%
            )`,
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-between h-full" style={{ minHeight: '85vh' }}>

          {/* Top nav */}
          <div className="max-w-7xl mx-auto w-full px-6 md:px-10 xl:px-12 pt-12">
            <Button variant="ghost" size="sm" asChild className="gap-2 hover:gap-3 transition-all duration-200 text-white/55 hover:text-white hover:bg-white/10">
              <Link href="/team">
                <ArrowLeft size={15} />
                The Team
              </Link>
            </Button>
          </div>

          {/* Bottom title block */}
          <div className="max-w-7xl mx-auto w-full px-6 md:px-10 xl:px-12 pb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">

              {/* Left: text content */}
              <div className="flex flex-col gap-5">

                {/* Department badge */}
                <span
                  className="self-start text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full"
                  style={{ backgroundColor: `${site.tokens.primary}50`, color: 'rgba(255,255,255,0.85)' }}
                >
                  {member.department}
                </span>

                {/* Name + role */}
                <div className="flex flex-col gap-1">
                  <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight tracking-tight">
                    {member.name}
                  </h1>
                  <p className="text-xl font-medium" style={{ color: site.tokens.accent }}>
                    {member.role}
                  </p>
                </div>

                {/* Bio */}
                <p className="text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>
                  {member.bio}
                </p>

                {/* Social buttons */}
                <div className="flex items-center gap-2 flex-wrap pt-1">
                  {member.linkedin && (
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="gap-2 border-white/20 bg-white/10 text-white/70 hover:bg-white/20 hover:text-white hover:border-white/30 backdrop-blur-sm"
                    >
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                        <Linkedin size={14} /> LinkedIn
                      </a>
                    </Button>
                  )}
                  {member.twitter && (
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="gap-2 border-white/20 bg-white/10 text-white/70 hover:bg-white/20 hover:text-white hover:border-white/30 backdrop-blur-sm"
                    >
                      <a href={member.twitter} target="_blank" rel="noopener noreferrer">
                        <Twitter size={14} /> Twitter
                      </a>
                    </Button>
                  )}
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="gap-2 border-white/20 bg-white/10 text-white/70 hover:bg-white/20 hover:text-white hover:border-white/30 backdrop-blur-sm"
                  >
                    <a href={`mailto:${site.contact.email}`}>
                      <Mail size={14} /> Email
                    </a>
                  </Button>
                </div>

              </div>

              {/* Right: portrait card */}
              <div className="flex justify-center lg:justify-end">
                <div
                  className="relative w-72 h-80 rounded-2xl overflow-hidden"
                  style={{ border: `3px solid ${site.tokens.primary}`, boxShadow: '0 24px 60px rgba(0,0,0,0.5)' }}
                >
                  <Image
                    src={member.avatar}
                    alt={member.name}
                    fill
                    className="object-cover object-top"
                    sizes="288px"
                  />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* ── Body ──────────────────────────────────────────── */}
      <div className="w-full py-20" style={{ backgroundColor: 'white' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

            {/* ── Main ──────────────────────────────────── */}
            <div className="lg:col-span-2 flex flex-col gap-12">

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
                    {projects.map((w) => (
                      <Link
                        key={w.slug}
                        href={`/work/${w.slug}`}
                        className="group flex gap-4 p-4 rounded-xl border transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
                        style={{ borderColor: site.tokens.border }}
                      >
                        <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                          <Image
                            src={w.coverImage}
                            alt={w.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                        <div className="flex flex-col gap-1 justify-center min-w-0">
                          <span
                            className="text-[10px] font-semibold uppercase tracking-widest"
                            style={{ color: site.tokens.primary }}
                          >
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
                </section>
              )}

            </div>

            {/* ── Sidebar ───────────────────────────────── */}
            <aside className="flex flex-col gap-8">

              {/* Skills */}
              {member.skills && member.skills.length > 0 && (
                <div className="flex flex-col gap-4 p-6 rounded-2xl" style={{ backgroundColor: site.tokens.surface }}>
                  <h3 className="text-xs font-semibold uppercase tracking-widest" style={{ color: site.tokens.muted }}>
                    Skills
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs font-medium px-3 py-1.5 rounded-full"
                        style={{ backgroundColor: `${site.tokens.primary}10`, color: site.tokens.primary }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Department colleagues */}
              {colleagues.length > 0 && (
                <div className="flex flex-col gap-4 p-6 rounded-2xl" style={{ backgroundColor: site.tokens.surface }}>
                  <h3 className="text-xs font-semibold uppercase tracking-widest" style={{ color: site.tokens.muted }}>
                    {member.department} Team
                  </h3>
                  <div className="flex flex-col gap-4">
                    {colleagues.map((c) => (
                      <Link key={c.slug} href={`/team/${c.slug}`} className="flex items-center gap-3 group">
                        <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                          <Image src={c.avatar} alt={c.name} fill className="object-cover" />
                        </div>
                        <div className="flex flex-col gap-0.5 min-w-0 flex-1">
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
                          className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                          style={{ color: site.tokens.primary }}
                        />
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA */}
              <div className="flex flex-col gap-4 p-6 rounded-2xl" style={{ backgroundColor: site.tokens.dark }}>
                <p className="text-sm font-semibold text-white leading-snug">
                  Want {member.name.split(' ')[0]} on your project?
                </p>
                <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>
                  Tell us what you're building and we'll put together the right team.
                </p>
                <CTAButton href="/contact" variant="primary" size="sm" arrow>
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
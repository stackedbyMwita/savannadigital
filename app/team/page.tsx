import Image from 'next/image'
import Link from 'next/link'
import { Linkedin, Twitter, ArrowUpRight } from 'lucide-react'
import { site } from '@/content'
import { PageWrapper } from '@/components/layout/PageWrapper'
import { CTAButton } from '@/components/ui/CTAButton'

// ─────────────────────────────────────────────────────────────
// METADATA
// ─────────────────────────────────────────────────────────────

export const metadata = {
  title:       'Team',
  description: `Meet the ${site.team.length} people behind ${site.name}. Designers, engineers, and strategists building digital products for Africa.`,
}

// ─────────────────────────────────────────────────────────────
// DEPARTMENT ORDER
// ─────────────────────────────────────────────────────────────

const DEPT_ORDER = ['Leadership', 'Engineering', 'Design', 'Operations']

// ─────────────────────────────────────────────────────────────
// TEAM CARD
// ─────────────────────────────────────────────────────────────

function TeamCard({ member }: { member: typeof site.team[0] }) {
  return (
    // Overlay link pattern — avoids <a> inside <a>
    // The main Link covers the whole card via absolute inset-0
    // Social icons sit above it with relative z-10
    <div
      className="group relative flex flex-col rounded-2xl overflow-hidden border transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
      style={{ borderColor: site.tokens.border, backgroundColor: 'white' }}
    >
      {/* Main card link — covers entire card */}
      <Link
        href={`/team/${member.slug}`}
        className="absolute inset-0 z-0"
        aria-label={`View ${member.name}'s profile`}
      />

      {/* Avatar */}
      <div
        className="relative overflow-hidden"
        style={{ aspectRatio: '4/3' }}
      >
        <Image
          src={member.avatar}
          alt={member.name}
          fill
          className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        {/* Gradient */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 50%)' }}
        />

        {/* Department badge */}
        <span
          className="absolute top-4 left-4 text-[11px] font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full"
          style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: 'white', backdropFilter: 'blur(8px)' }}
        >
          {member.department}
        </span>

        {/* Arrow on hover */}
        <span
          className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          style={{ backgroundColor: site.tokens.accent, color: site.tokens.dark }}
        >
          <ArrowUpRight size={14} />
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3 p-6">
        <div className="flex flex-col gap-0.5">
          <h3
            className="font-bold text-base transition-colors duration-200 group-hover:text-primary"
            style={{ color: site.tokens.text }}
          >
            {member.name}
          </h3>
          <p className="text-sm font-medium" style={{ color: site.tokens.primary }}>
            {member.role}
          </p>
        </div>

        <p className="text-sm leading-relaxed line-clamp-2" style={{ color: site.tokens.muted }}>
          {member.bio}
        </p>

        {/* Skills */}
        {member.skills && (
          <div className="flex flex-wrap gap-1.5 pt-1">
            {member.skills.slice(0, 3).map((skill) => (
              <span
                key={skill}
                className="text-[11px] px-2.5 py-1 rounded-full font-medium"
                style={{
                  backgroundColor: `${site.tokens.primary}0f`,
                  color:           site.tokens.primary,
                }}
              >
                {skill}
              </span>
            ))}
            {(member.skills.length > 3) && (
              <span
                className="text-[11px] px-2.5 py-1 rounded-full font-medium"
                style={{
                  backgroundColor: site.tokens.surface,
                  color:           site.tokens.muted,
                }}
              >
                +{member.skills.length - 3}
              </span>
            )}
          </div>
        )}

        {/* Socials — relative z-10 to sit above the card overlay link */}
        <div className="relative z-10 flex items-center gap-2 pt-1">
          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors duration-200"
              style={{
                backgroundColor: `${site.tokens.primary}10`,
                color:           site.tokens.primary,
              }}
              aria-label={`${member.name} on LinkedIn`}
            >
              <Linkedin size={14} />
            </a>
          )}
          {member.twitter && (
            <a
              href={member.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors duration-200"
              style={{
                backgroundColor: `${site.tokens.primary}10`,
                color:           site.tokens.primary,
              }}
              aria-label={`${member.name} on Twitter`}
            >
              <Twitter size={14} />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────────────────────

export default function TeamPage() {
  // Group by department in defined order
  const grouped = DEPT_ORDER.reduce<Record<string, typeof site.team>>((acc, dept) => {
    const members = site.team.filter((m) => m.department === dept)
    if (members.length > 0) acc[dept] = members
    return acc
  }, {})

  return (
    <PageWrapper noPadding noMaxWidth noAnimation>

      {/* ── Hero ──────────────────────────────────────────── */}
      <div
        className="w-full pt-8 pb-20"
        style={{ backgroundColor: site.tokens.dark }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-12 pt-10">

          {/* Eyebrow */}
          <span
            className="inline-block text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6"
            style={{ backgroundColor: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.6)' }}
          >
            The Team
          </span>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <div className="flex flex-col gap-5">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight text-white">
                The people <br />
                <span style={{ color: site.tokens.accent }}>behind the work.</span>
              </h1>
              <p className="text-base leading-relaxed max-w-lg" style={{ color: 'rgba(255,255,255,0.55)' }}>
                {site.team.length} designers, engineers, and strategists based in Nairobi. Every one of us has lived and worked in the markets we build for.
              </p>
            </div>

            {/* Stacked avatars + count */}
            <div className="flex flex-col items-start lg:items-end gap-4">
              <div className="flex items-center">
                {site.team.map((member, i) => (
                  <div
                    key={member.slug}
                    className="relative w-14 h-14 rounded-full overflow-hidden"
                    style={{
                      marginLeft:  i === 0 ? 0 : -18,
                      zIndex:      site.team.length - i,
                      border:      `3px solid ${site.tokens.dark}`,
                    }}
                  >
                    <Image
                      src={member.avatar}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-1 lg:text-right">
                <span className="text-3xl font-bold text-white">{site.team.length} people</span>
                <span className="text-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>
                  across {[...new Set(site.team.map(m => m.department))].length} departments
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Team grid — grouped by department ─────────────── */}
      <div className="w-full py-20" style={{ backgroundColor: 'white' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-12 flex flex-col gap-16">

          {Object.entries(grouped).map(([dept, members]) => (
            <div key={dept} className="flex flex-col gap-8">

              {/* Department heading */}
              <div className="flex items-center gap-4">
                <h2 className="text-lg font-bold" style={{ color: site.tokens.dark }}>
                  {dept}
                </h2>
                <div className="flex-1 h-px" style={{ backgroundColor: site.tokens.border }} />
                <span className="text-sm" style={{ color: site.tokens.muted }}>
                  {members.length} {members.length === 1 ? 'member' : 'members'}
                </span>
              </div>

              {/* Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {members.map((member) => (
                  <TeamCard key={member.slug} member={member} />
                ))}
              </div>
            </div>
          ))}

        </div>
      </div>

      {/* ── Hiring CTA ────────────────────────────────────── */}
      <div
        className="w-full py-20"
        style={{ backgroundColor: site.tokens.surface }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-12">
          <div
            className="rounded-2xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8"
            style={{ backgroundColor: site.tokens.primary }}
          >
            <div className="flex flex-col gap-2 text-center md:text-left max-w-xl">
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Think you belong here?
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.65)' }} className="text-sm leading-relaxed">
                We're always looking for exceptional designers, engineers, and strategists who care about building things that work in Africa.
              </p>
            </div>
            <CTAButton
              href={`mailto:${site.contact.email}?subject=Joining the team`}
              variant="primary"
              size="lg"
              arrow
            >
              Get in Touch
            </CTAButton>
          </div>
        </div>
      </div>

    </PageWrapper>
  )
}
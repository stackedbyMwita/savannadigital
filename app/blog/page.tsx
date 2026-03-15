import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, Clock, User, Calendar } from 'lucide-react'
import { site } from '@/content'
import { PageWrapper } from '@/components/layout/PageWrapper'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { NewsletterStrip } from '@/components/ui/NewsletterStrip'
import { formatDate } from '@/lib/utils'

// ─────────────────────────────────────────────────────────────
// BLOG PAGE
// Server component — no 'use client' needed
// ─────────────────────────────────────────────────────────────

export const metadata = {
  title:       `Blog`,
  description: `Thinking on technology, design, and building digital products in Africa. From the ${site.name} studio.`,
}

// ─────────────────────────────────────────────────────────────
// FEATURED POST — first blog entry, large hero treatment
// ─────────────────────────────────────────────────────────────

function FeaturedPost() {
  const post = site.blog[0]

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden border transition-shadow duration-300 hover:shadow-2xl"
      style={{ borderColor: site.tokens.border }}
    >
      {/* Image */}
      <div className="relative overflow-hidden" style={{ minHeight: 320 }}>
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          priority
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        {/* Category */}
        <span
          className="absolute top-5 left-5 text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full"
          style={{ backgroundColor: site.tokens.primary, color: 'white' }}
        >
          {post.category}
        </span>
        <span
          className="absolute top-5 right-5 text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full"
          style={{ backgroundColor: site.tokens.accent, color: site.tokens.dark }}
        >
          Featured
        </span>
      </div>

      {/* Content */}
      <div
        className="flex flex-col justify-center gap-6 p-8 md:p-12"
        style={{ backgroundColor: 'white' }}
      >
        <div className="flex flex-wrap items-center gap-4 text-xs" style={{ color: site.tokens.muted }}>
          <span className="flex items-center gap-1.5"><Calendar size={12} />{formatDate(post.date)}</span>
          <span className="flex items-center gap-1.5"><Clock size={12} />{post.readTime}</span>
          <span className="flex items-center gap-1.5"><User size={12} />{post.author.name}</span>
        </div>

        <h2
          className="text-2xl md:text-3xl font-bold leading-snug tracking-tight transition-colors duration-200 group-hover:text-primary"
          style={{ color: site.tokens.text }}
        >
          {post.title}
        </h2>

        <p className="text-base leading-relaxed" style={{ color: site.tokens.muted }}>
          {post.excerpt}
        </p>

        <div
          className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-200 group-hover:gap-3"
          style={{ color: site.tokens.primary }}
        >
          Read Article
          <ArrowUpRight size={16} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </Link>
  )
}

// ─────────────────────────────────────────────────────────────
// POST CARD
// ─────────────────────────────────────────────────────────────

function PostCard({ post, index }: { post: typeof site.blog[0]; index: number }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col rounded-2xl overflow-hidden border transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
      style={{ borderColor: site.tokens.border, backgroundColor: 'white' }}
    >
      {/* Image */}
      <div className="relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <span
          className="absolute top-4 left-4 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full"
          style={{ backgroundColor: site.tokens.primary, color: 'white' }}
        >
          {post.category}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 gap-4 p-6">
        <div className="flex items-center gap-4 text-xs" style={{ color: site.tokens.muted }}>
          <span className="flex items-center gap-1.5"><Clock size={11} />{post.readTime}</span>
          <span className="flex items-center gap-1.5"><User size={11} />{post.author.name}</span>
          <span className="ml-auto">{formatDate(post.date)}</span>
        </div>

        <h3
          className="text-lg font-bold leading-snug transition-colors duration-200 group-hover:text-primary flex-1"
          style={{ color: site.tokens.text }}
        >
          {post.title}
        </h3>

        <p className="text-sm leading-relaxed line-clamp-2" style={{ color: site.tokens.muted }}>
          {post.excerpt}
        </p>

        <div
          className="flex items-center gap-1.5 text-sm font-semibold mt-auto transition-all duration-200 group-hover:gap-2.5 pt-4"
          style={{
            color:     site.tokens.primary,
            borderTop: `1px solid ${site.tokens.border}`,
          }}
        >
          Read More <ArrowUpRight size={14} />
        </div>
      </div>
    </Link>
  )
}



// ─────────────────────────────────────────────────────────────
// CATEGORIES SIDEBAR DATA
// ─────────────────────────────────────────────────────────────

function getCategoryCount() {
  const counts: Record<string, number> = {}
  site.blog.forEach((p) => {
    counts[p.category] = (counts[p.category] ?? 0) + 1
  })
  return Object.entries(counts)
}

// ─────────────────────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────────────────────

export default function BlogPage() {
  const categories = getCategoryCount()

  return (
    <PageWrapper noPadding noMaxWidth noAnimation>

      {/* ── Page Hero ─────────────────────────────────────── */}
      <div
        className="w-full pt-24 pb-16"
        style={{ backgroundColor: site.tokens.surface }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-12">
          <SectionTitle
            badge={site.copy.blog.badge}
            title={site.copy.blog.title}
            description={site.copy.blog.description}
            variant="centered"
            size="lg"
          />
        </div>
      </div>

      {/* ── Main content ──────────────────────────────────── */}
      <div
        className="w-full py-16"
        style={{ backgroundColor: 'white' }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-12 flex flex-col gap-16">

          {/* Featured post */}
          <FeaturedPost />

          {/* Grid + sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Posts grid */}
            <div className="lg:col-span-2 flex flex-col gap-8">
              <h2 className="text-lg font-semibold" style={{ color: site.tokens.text }}>
                All Articles
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {site.blog.map((post, i) => (
                  <PostCard key={post.slug} post={post} index={i} />
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <aside className="flex flex-col gap-8">

              {/* Categories */}
              <div
                className="rounded-2xl p-6 flex flex-col gap-4"
                style={{ backgroundColor: site.tokens.surface }}
              >
                <h3 className="text-sm font-semibold uppercase tracking-widest" style={{ color: site.tokens.muted }}>
                  Categories
                </h3>
                <div className="flex flex-col gap-1">
                  {categories.map(([cat, count]) => (
                    <div
                      key={cat}
                      className="flex items-center justify-between py-2.5 px-3 rounded-lg cursor-pointer transition-colors duration-200 hover:bg-white"
                    >
                      <span className="text-sm font-medium" style={{ color: site.tokens.text }}>{cat}</span>
                      <span
                        className="text-xs font-semibold px-2 py-0.5 rounded-full"
                        style={{ backgroundColor: `${site.tokens.primary}15`, color: site.tokens.primary }}
                      >
                        {count}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* About the team */}
              <div
                className="rounded-2xl p-6 flex flex-col gap-4"
                style={{ backgroundColor: site.tokens.surface }}
              >
                <h3 className="text-sm font-semibold uppercase tracking-widest" style={{ color: site.tokens.muted }}>
                  Written By
                </h3>
                <div className="flex flex-col gap-4">
                  {site.team.slice(0, 3).map((member) => (
                    <div key={member.name} className="flex items-center gap-3">
                      <div className="relative w-9 h-9 rounded-full overflow-hidden flex-shrink-0">
                        <Image
                          src={member.avatar}
                          alt={member.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold" style={{ color: site.tokens.text }}>{member.name}</span>
                        <span className="text-xs" style={{ color: site.tokens.muted }}>{member.role}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div
                className="rounded-2xl p-6 flex flex-col gap-4"
                style={{ backgroundColor: site.tokens.primary }}
              >
                <p className="text-white font-semibold text-base leading-snug">
                  Ready to build your next digital product?
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-3 rounded-xl transition-opacity duration-200 hover:opacity-90 w-max"
                  style={{ backgroundColor: site.tokens.accent, color: site.tokens.dark }}
                >
                  Start a Project <ArrowUpRight size={14} />
                </Link>
              </div>

            </aside>
          </div>

          {/* Newsletter */}
          <NewsletterStrip />

        </div>
      </div>

    </PageWrapper>
  )
}
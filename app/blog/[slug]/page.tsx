import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, Clock, Calendar, ArrowUpRight } from 'lucide-react'
import { site } from '@/content'
import { PageWrapper } from '@/components/layout/PageWrapper'
import { NewsletterStrip } from '@/components/ui/NewsletterStrip'
import { BlogSidebar } from '@/components/ui/BlogSidebar'
import { Button } from '@/components/ui/button'

// ─────────────────────────────────────────────────────────────
// STATIC PARAMS
// ─────────────────────────────────────────────────────────────

export async function generateStaticParams() {
  return site.blog.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = site.blog.find((p) => p.slug === slug)
  if (!post) return {}
  return { title: post.title, description: post.excerpt }
}

// ─────────────────────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────────────────────

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-GB', {
    day: 'numeric', month: 'long', year: 'numeric',
  })
}

// ─────────────────────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────────────────────

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug }     = await params
  const post         = site.blog.find((p) => p.slug === slug)
  if (!post) notFound()

  const author       = site.team.find((m) => m.name === post.author.name)
  const sameCategory = site.blog.filter((p) => p.slug !== post.slug && p.category === post.category)
  const others       = site.blog.filter((p) => p.slug !== post.slug && p.category !== post.category)
  const relatedPosts = [...sameCategory, ...others].slice(0, 2)

  const tags = post.tags ?? [post.category]
  const toc  = post.toc ?? []

  return (
    <PageWrapper noPadding noMaxWidth noAnimation>

      {/* ── Hero (cover image as background) ─────────────── */}
      <div className="relative w-full" style={{ minHeight: '85vh' }}>

        {/* Background image */}
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />

        {/* Multi-layer gradient: subtle top, heavy at bottom */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(
              to bottom,
              rgba(0,0,0,0.30) 0%,
              rgba(0,0,0,0.20) 35%,
              rgba(0,0,0,0.68) 70%,
              rgba(0,0,0,0.88) 100%
            )`,
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-between h-full" style={{ minHeight: '85vh' }}>

          {/* Top nav */}
          <div className="max-w-7xl mx-auto w-full px-6 md:px-10 xl:px-12 pt-12">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-medium transition-all duration-200 hover:gap-3"
              style={{ color: 'rgba(255,255,255,0.55)' }}
            >
              <Button variant="outline">
                <ArrowLeft size={15} />
                Back to Blog
              </Button>
            </Link>
          </div>

          {/* Bottom title block */}
          <div className="max-w-7xl mx-auto w-full px-6 md:px-10 xl:px-12 pb-16">

            {/* Meta row */}
            <div className="flex flex-wrap items-center gap-4 mb-5">
              <span
                className="text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full"
                style={{ backgroundColor: site.tokens.primary, color: 'white' }}
              >
                {post.category}
              </span>
              <span className="flex items-center gap-1.5 text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>
                <Calendar size={13} />{formatDate(post.date)}
              </span>
              <span className="flex items-center gap-1.5 text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>
                <Clock size={13} />{post.readTime}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight max-w-4xl mb-8 text-white">
              {post.title}
            </h1>

            {/* Author row */}
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-white/20">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">{post.author.name}</p>
                <p className="text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>
                  {author?.role ?? 'Writer'} · {site.name}
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── Body + sidebar ────────────────────────────────── */}
      <div className="w-full py-16" style={{ backgroundColor: 'white' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

            {/* ── Article ───────────────────────────────── */}
            <article className="lg:col-span-2">

              {/* Standfirst */}
              <p
                className="text-xl leading-relaxed font-medium mb-10 pb-10"
                style={{ color: site.tokens.text, borderBottom: `2px solid ${site.tokens.primary}` }}
              >
                {post.excerpt}
              </p>

              {/* Body paragraphs — index 2 gets pull-quote treatment */}
              <div className="flex flex-col gap-6">
                {post.body.map((para, i) => (
                  <p key={i} className="text-base md:text-lg leading-relaxed" style={{ color: site.tokens.muted }}>
                    {i === 2 ? (
                      <span
                        className="block pl-5 italic font-medium"
                        style={{ borderLeft: `3px solid ${site.tokens.accent}`, color: site.tokens.text }}
                      >
                        {para}
                      </span>
                    ) : para}
                  </p>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-12 pt-8" style={{ borderTop: `1px solid ${site.tokens.border}` }}>
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium px-3 py-1.5 rounded-full"
                    style={{ backgroundColor: `${site.tokens.primary}10`, color: site.tokens.primary }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Author card */}
              <div className="flex gap-5 p-6 rounded-2xl mt-10" style={{ backgroundColor: site.tokens.surface }}>
                <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={post.author.avatar}
                    alt={post.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="font-semibold" style={{ color: site.tokens.text }}>{post.author.name}</p>
                  <p className="text-sm" style={{ color: site.tokens.muted }}>{author?.role ?? 'Writer'}</p>
                  <p className="text-sm leading-relaxed mt-1" style={{ color: site.tokens.muted }}>
                    {author?.bio ?? `Writer at ${site.name}.`}
                  </p>
                </div>
              </div>

            </article>

            {/* ── Sidebar ───────────────────────────────── */}
            <BlogSidebar
              toc={toc}
              postSlug={post.slug}
              postTitle={post.title}
            />

          </div>
        </div>
      </div>

      {/* ── Related posts ─────────────────────────────────── */}
      {relatedPosts.length > 0 && (
        <div className="w-full py-16" style={{ backgroundColor: site.tokens.surface }}>
          <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-12 flex flex-col gap-10">
            <h2 className="text-2xl font-bold" style={{ color: site.tokens.dark }}>More from the Studio</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedPosts.map((related) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="group flex gap-5 p-5 rounded-2xl transition-all duration-300 hover:shadow-lg"
                  style={{ backgroundColor: 'white', border: `1px solid ${site.tokens.border}` }}
                >
                  <div className="relative w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                    <Image
                      src={related.coverImage}
                      alt={related.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col gap-2 min-w-0 justify-center">
                    <span className="text-[11px] font-semibold uppercase tracking-widest" style={{ color: site.tokens.primary }}>
                      {related.category}
                    </span>
                    <h3
                      className="text-sm font-semibold leading-snug line-clamp-2 transition-colors duration-200 group-hover:text-primary"
                      style={{ color: site.tokens.text }}
                    >
                      {related.title}
                    </h3>
                    <span className="text-xs" style={{ color: site.tokens.muted }}>{related.readTime}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── Newsletter ────────────────────────────────────── */}
      <div className="w-full py-16" style={{ backgroundColor: 'white' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-12">
          <NewsletterStrip />
        </div>
      </div>

    </PageWrapper>
  )
}
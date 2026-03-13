import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, Clock, User, Calendar, ArrowUpRight } from 'lucide-react'
import { site } from '@/content'
import { PageWrapper } from '@/components/layout/PageWrapper'
import { NewsletterStrip } from '@/components/ui/NewsletterStrip'

// ─────────────────────────────────────────────────────────────
// STATIC PARAMS — pre-render all blog slugs at build time
// ─────────────────────────────────────────────────────────────

export async function generateStaticParams() {
  return site.blog.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = site.blog.find((p) => p.slug === slug)
  if (!post) return {}
  return {
    title:       post.title,
    description: post.excerpt,
  }
}

// ─────────────────────────────────────────────────────────────
// PLACEHOLDER BODY CONTENT
// In production this comes from a CMS / MDX file.
// For now we generate realistic placeholder paragraphs.
// ─────────────────────────────────────────────────────────────

const BODY_CONTENT = [
  `When you start building software for African markets, the first thing you realise is that most of the assumptions baked into modern frameworks were made somewhere else. The defaults are wrong. The mental models don't fit. And if you just ship what works in London or San Francisco, you'll ship something that fails in Nairobi.`,

  `We learned this the hard way on our second project — a financial dashboard for a regional bank. We'd built a beautiful React SPA, optimised it carefully, and were proud of the 2.1 second load time we'd achieved on a fibre connection. Then we tested it on a 3G sim card in Westlands. It took 14 seconds. The client's customers in Kisumu and Mombasa were on something slower.`,

  `That moment changed how we build everything. It forced us to think about performance not as a nice-to-have, but as the primary design constraint. A product that doesn't load isn't a product. It's just a liability.`,

  `The practical implications are significant. We stopped defaulting to single-page applications for anything that doesn't need real-time interactivity. We embraced Next.js server components early and aggressively. We started treating JavaScript bundle size like money — every kilobyte has a cost, and someone is paying it.`,

  `But performance is only part of the picture. The deeper challenge is designing for contexts your team may never have lived. Low literacy doesn't mean low intelligence. Shared devices mean you can't assume account persistence. M-PESA isn't just a payment method — it's the payment method, and anything that doesn't integrate with it fluently will be ignored.`,

  `The teams that get this right aren't necessarily smarter. They're just more curious. They test in the field. They watch real users — not focus group users — struggle with their interfaces, and they take it personally. They build for the person who has fifteen minutes of battery left and a shaky signal, not the person sitting at a desk with a charger and a gigabit connection.`,

  `We're still learning. Every project teaches us something we didn't know. But the principle is solid: if it works here, in these conditions, with these constraints — it will work anywhere.`,
]

const POST_IMAGES: Record<string, string> = {
  'building-for-africa':    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1400&q=85',
  'next-js-low-bandwidth':  'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1400&q=85',
  'design-systems-africa':  'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1400&q=85',
}

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
  const { slug } = await params
  const post     = site.blog.find((p) => p.slug === slug)

  if (!post) notFound()

  const author      = site.team.find((m) => m.name === post.author)
  const coverImage  = POST_IMAGES[post.slug] ?? POST_IMAGES['building-for-africa']
  const relatedPosts = site.blog.filter((p) => p.slug !== post.slug).slice(0, 2)

  return (
    <PageWrapper noPadding noMaxWidth noAnimation>

      {/* ── Hero ──────────────────────────────────────────── */}
      <div
        className="w-full pt-24"
        style={{ backgroundColor: site.tokens.surface }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-12 pt-10 pb-0">

          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium mb-8 transition-colors duration-200 hover:gap-3"
            style={{ color: site.tokens.muted }}
          >
            <ArrowLeft size={15} />
            Back to Blog
          </Link>

          {/* Category + meta */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span
              className="text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full"
              style={{ backgroundColor: site.tokens.primary, color: 'white' }}
            >
              {post.category}
            </span>
            <span className="flex items-center gap-1.5 text-sm" style={{ color: site.tokens.muted }}>
              <Calendar size={13} />{formatDate(post.date)}
            </span>
            <span className="flex items-center gap-1.5 text-sm" style={{ color: site.tokens.muted }}>
              <Clock size={13} />{post.readTime}
            </span>
          </div>

          {/* Title */}
          <h1
            className="text-3xl md:text-5xl font-bold leading-tight tracking-tight max-w-4xl mb-8"
            style={{ color: site.tokens.dark }}
          >
            {post.title}
          </h1>

          {/* Author */}
          <div className="flex items-center gap-4 pb-10">
            <div className="relative w-11 h-11 rounded-full overflow-hidden flex-shrink-0">
              <Image
                src={`https://i.pravatar.cc/88?u=${post.author}`}
                alt={post.author}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-sm font-semibold" style={{ color: site.tokens.text }}>{post.author}</p>
              <p className="text-xs" style={{ color: site.tokens.muted }}>
                {author?.role ?? 'Writer'} · {site.name}
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* ── Cover image ───────────────────────────────────── */}
      <div className="w-full relative" style={{ aspectRatio: '21/8', maxHeight: 520 }}>
        <Image
          src={coverImage}
          alt={post.title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>

      {/* ── Body + sidebar ────────────────────────────────── */}
      <div className="w-full py-16" style={{ backgroundColor: 'white' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

            {/* ── Article body ──────────────────────────── */}
            <article className="lg:col-span-2">

              {/* Excerpt / standfirst */}
              <p
                className="text-xl leading-relaxed font-medium mb-10 pb-10"
                style={{
                  color:        site.tokens.text,
                  borderBottom: `2px solid ${site.tokens.primary}`,
                }}
              >
                {post.excerpt}
              </p>

              {/* Body paragraphs */}
              <div className="flex flex-col gap-6">
                {BODY_CONTENT.map((para, i) => (
                  <p
                    key={i}
                    className="text-base md:text-lg leading-relaxed"
                    style={{ color: i === 2 ? site.tokens.text : site.tokens.muted }}
                  >
                    {/* Pull quote treatment for 3rd paragraph */}
                    {i === 2 ? (
                      <span
                        className="block pl-5 italic font-medium"
                        style={{
                          borderLeft: `3px solid ${site.tokens.accent}`,
                          color:      site.tokens.text,
                        }}
                      >
                        {para}
                      </span>
                    ) : para}
                  </p>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-12 pt-8" style={{ borderTop: `1px solid ${site.tokens.border}` }}>
                {['Africa', 'Technology', 'Product', post.category].map((tag) => (
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

              {/* Author card */}
              <div
                className="flex gap-5 p-6 rounded-2xl mt-10"
                style={{ backgroundColor: site.tokens.surface }}
              >
                <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={`https://i.pravatar.cc/128?u=${post.author}`}
                    alt={post.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="font-semibold" style={{ color: site.tokens.text }}>{post.author}</p>
                  <p className="text-sm" style={{ color: site.tokens.muted }}>{author?.role ?? 'Writer'}</p>
                  <p className="text-sm leading-relaxed mt-1" style={{ color: site.tokens.muted }}>
                    {author?.bio ?? `Writer at ${site.name}.`}
                  </p>
                </div>
              </div>

            </article>

            {/* ── Sidebar ───────────────────────────────── */}
            <aside className="flex flex-col gap-8">

              {/* Table of contents */}
              <div
                className="rounded-2xl p-6 flex flex-col gap-4 sticky top-24"
                style={{ backgroundColor: site.tokens.surface }}
              >
                <h3
                  className="text-xs font-semibold uppercase tracking-widest"
                  style={{ color: site.tokens.muted }}
                >
                  In This Article
                </h3>
                <nav className="flex flex-col gap-2">
                  {[
                    'Wrong defaults',
                    'The 14-second lesson',
                    'Performance as constraint',
                    'Bundle size discipline',
                    'Designing for context',
                    'What gets it right',
                  ].map((item, i) => (
                    <a
                      key={item}
                      href={`#section-${i}`}
                      className="flex items-center gap-3 text-sm py-1.5 transition-colors duration-150 group hover:text-primary"
                      style={{ color: site.tokens.muted }}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0 transition-colors duration-150"
                        style={{ backgroundColor: site.tokens.border }}
                      />
                      {item}
                    </a>
                  ))}
                </nav>
                <div
                  className="rounded-2xl p-6 flex flex-col gap-4"
                  style={{ backgroundColor: site.tokens.accent }}
                >
                  <h3
                    className="text-xs font-semibold uppercase tracking-widest"
                    style={{ color: site.tokens.muted }}
                  >
                    Share
                  </h3>
                  <div className="flex flex-col gap-2">
                    {[
                      { label: 'Share on LinkedIn', href: `https://linkedin.com/sharing/share-offsite/?url=${site.url}/blog/${post.slug}` },
                      { label: 'Share on Twitter',  href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${site.url}/blog/${post.slug}` },
                    ].map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between text-sm px-4 py-3 rounded-xl transition-colors duration-200"
                        style={{
                          backgroundColor: 'white',
                          color:           site.tokens.text,
                          border:          `1px solid ${site.tokens.border}`,
                        }}
                      >
                        {s.label}
                        <ArrowUpRight size={14} style={{ color: site.tokens.muted }} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>

      {/* ── Related posts ─────────────────────────────────── */}
      {relatedPosts.length > 0 && (
        <div className="w-full py-16" style={{ backgroundColor: site.tokens.surface }}>
          <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-12 flex flex-col gap-10">

            <h2 className="text-2xl font-bold" style={{ color: site.tokens.dark }}>
              More from the Studio
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedPosts.map((related, i) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="group flex gap-5 p-5 rounded-2xl transition-all duration-300 hover:shadow-lg"
                  style={{
                    backgroundColor: 'white',
                    border:          `1px solid ${site.tokens.border}`,
                  }}
                >
                  <div className="relative w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                    <Image
                      src={Object.values(POST_IMAGES)[i + 1] ?? POST_IMAGES['building-for-africa']}
                      alt={related.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col gap-2 min-w-0">
                    <span
                      className="text-[11px] font-semibold uppercase tracking-widest"
                      style={{ color: site.tokens.primary }}
                    >
                      {related.category}
                    </span>
                    <h3
                      className="text-sm font-semibold leading-snug line-clamp-2 transition-colors duration-200 group-hover:text-primary"
                      style={{ color: site.tokens.text }}
                    >
                      {related.title}
                    </h3>
                    <span className="text-xs" style={{ color: site.tokens.muted }}>
                      {related.readTime}
                    </span>
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
'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'motion/react'
import { ArrowUpRight, Clock, User } from 'lucide-react'
import { site } from '@/content'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { CTAButton } from '@/components/ui/CTAButton'
import { formatDate } from '@/lib/utils'

// ─────────────────────────────────────────────────────────────
// BLOG
// 3-column card grid — first card is featured (larger)
// ─────────────────────────────────────────────────────────────

function BlogCard({ post, index }: { post: typeof site.blog[0]; index: number }) {
  const isFeatured = index === 0

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.1 }}
      className={isFeatured ? 'md:col-span-2' : ''}
    >
      <Link
        href={`/blog/${post.slug}`}
        className="group flex flex-col h-full rounded-2xl overflow-hidden border transition-shadow duration-300 hover:shadow-xl"
        style={{ borderColor: site.tokens.border, backgroundColor: 'white' }}
      >
        {/* Cover image */}
        <div
          className="relative overflow-hidden flex-shrink-0"
          style={{ aspectRatio: isFeatured ? '16/8' : '16/9' }}
        >
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes={isFeatured ? '(max-width: 768px) 100vw, 66vw' : '(max-width: 768px) 100vw, 33vw'}
          />
          {/* Category badge */}
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
            <span className="flex items-center gap-1.5">
              <Clock size={12} />
              {post.readTime}
            </span>
            <span className="flex items-center gap-1.5">
              <User size={12} />
              {post.author.name}
            </span>
            <span className="ml-auto">{formatDate(post.date)}</span>
          </div>

          <h3
            className={`font-bold leading-snug group-hover:text-primary transition-colors duration-200 ${isFeatured ? 'text-xl md:text-2xl' : 'text-lg'}`}
            style={{ color: site.tokens.text }}
          >
            {post.title}
          </h3>

          <p className="text-sm leading-relaxed flex-1" style={{ color: site.tokens.muted }}>
            {post.excerpt}
          </p>

          <div className="flex items-center gap-1.5 text-sm font-semibold mt-auto transition-colors duration-200 group-hover:gap-2.5" style={{ color: site.tokens.primary }}>
            Read Article
            <ArrowUpRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>

        </div>
      </Link>
    </motion.article>
  )
}

// ─────────────────────────────────────────────────────────────

export default function Blog() {
  return (
    <section
      className="py-24 md:py-32"
      style={{ backgroundColor: site.tokens.surface }}
    >
      <div className="container flex flex-col gap-14">

        <SectionTitle
          badge={site.copy.blog.badge}
          title={site.copy.blog.title}
          description={site.copy.blog.description}
          variant="centered"
          size="lg"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {site.blog.map((post, i) => (
            <BlogCard key={post.slug} post={post} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <CTAButton href="/blog" variant="outline" size="md" arrow>
            All Articles
          </CTAButton>
        </motion.div>

      </div>
    </section>
  )
}

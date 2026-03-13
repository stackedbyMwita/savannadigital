'use client'

import { useState, useEffect, useRef } from 'react'
import { Linkedin, Twitter, Check, Share2 } from 'lucide-react'
import { site } from '@/content'

// ─────────────────────────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────────────────────────

interface BlogSidebarProps {
  toc:       string[]
  postSlug:  string
  postTitle: string
}

// ─────────────────────────────────────────────────────────────
// BLOG SIDEBAR
// ─────────────────────────────────────────────────────────────

export function BlogSidebar({ toc, postSlug, postTitle }: BlogSidebarProps) {
  const [activeSection, setActiveSection] = useState(0)
  const [copied, setCopied]               = useState(false)
  const observerRef                       = useRef<IntersectionObserver | null>(null)

  // Track active TOC item via IntersectionObserver
  useEffect(() => {
    if (toc.length === 0) return

    observerRef.current = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const id    = entry.target.id
            const index = parseInt(id.replace('section-', ''), 10)
            if (!isNaN(index)) setActiveSection(index)
          }
        }
      },
      { rootMargin: '-20% 0px -70% 0px', threshold: 0 }
    )

    toc.forEach((_, i) => {
      const el = document.getElementById(`section-${i}`)
      if (el) observerRef.current?.observe(el)
    })

    return () => observerRef.current?.disconnect()
  }, [toc])

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(`${site.url}/blog/${postSlug}`)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // fallback — silently ignore
    }
  }

  const shareUrl   = `${site.url}/blog/${postSlug}`
  const linkedInHref = `https://linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`
  const twitterHref  = `https://twitter.com/intent/tweet?text=${encodeURIComponent(postTitle)}&url=${encodeURIComponent(shareUrl)}`

  return (
    <aside className="flex flex-col gap-4 sticky top-24">

      {/* ── Table of Contents ───────────────────────────── */}
      {toc.length > 0 && (
        <div
          className="rounded-2xl overflow-hidden"
          style={{ border: `1px solid ${site.tokens.border}` }}
        >
          {/* Header */}
          <div
            className="px-5 py-4"
            style={{ backgroundColor: site.tokens.surface, borderBottom: `1px solid ${site.tokens.border}` }}
          >
            <p className="text-[11px] font-bold uppercase tracking-[0.12em]" style={{ color: site.tokens.muted }}>
              In This Article
            </p>
          </div>

          {/* Items */}
          <nav className="flex flex-col" style={{ backgroundColor: 'white' }}>
            {toc.map((item, i) => {
              const isActive = activeSection === i
              return (
                <a
                  key={item}
                  href={`#section-${i}`}
                  className="group relative flex items-center gap-3 px-5 py-3 text-sm transition-all duration-200"
                  style={{
                    color:           isActive ? site.tokens.primary : site.tokens.muted,
                    backgroundColor: isActive ? `${site.tokens.primary}07` : 'transparent',
                    borderBottom:    i < toc.length - 1 ? `1px solid ${site.tokens.border}` : 'none',
                  }}
                >
                  {/* Active indicator bar */}
                  <span
                    className="absolute left-0 top-0 bottom-0 w-[3px] rounded-r-full transition-all duration-300"
                    style={{
                      backgroundColor: site.tokens.primary,
                      opacity:         isActive ? 1 : 0,
                      transform:       isActive ? 'scaleY(1)' : 'scaleY(0)',
                    }}
                  />

                  {/* Step number */}
                  <span
                    className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0 transition-all duration-200"
                    style={{
                      backgroundColor: isActive ? site.tokens.primary              : `${site.tokens.primary}12`,
                      color:           isActive ? 'white'                          : site.tokens.muted,
                    }}
                  >
                    {i + 1}
                  </span>

                  <span
                    className="leading-snug transition-colors duration-200"
                    style={{ fontWeight: isActive ? 600 : 400 }}
                  >
                    {item}
                  </span>
                </a>
              )
            })}
          </nav>
        </div>
      )}

      {/* ── Share ───────────────────────────────────────── */}
      <div
        className="rounded-2xl overflow-hidden"
        style={{ border: `1px solid ${site.tokens.border}` }}
      >
        {/* Header */}
        <div
          className="px-5 py-4 flex items-center gap-2"
          style={{ backgroundColor: site.tokens.surface, borderBottom: `1px solid ${site.tokens.border}` }}
        >
          <Share2 size={12} style={{ color: site.tokens.muted }} />
          <p className="text-[11px] font-bold uppercase tracking-[0.12em]" style={{ color: site.tokens.muted }}>
            Share Article
          </p>
        </div>

        {/* Share buttons */}
        <div className="flex flex-col" style={{ backgroundColor: 'white' }}>

          {/* LinkedIn */}
          <a
            href={linkedInHref}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-5 py-3.5 text-sm font-medium transition-all duration-200"
            style={{
              color:        site.tokens.text,
              borderBottom: `1px solid ${site.tokens.border}`,
            }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = `${site.tokens.primary}07` }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent' }}
          >
            <span
              className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-200"
              style={{ backgroundColor: '#0A66C218', color: '#0A66C2' }}
            >
              <Linkedin size={14} />
            </span>
            <span>LinkedIn</span>
            <span
              className="ml-auto text-[10px] font-semibold uppercase tracking-widest transition-opacity duration-200 opacity-0 group-hover:opacity-100"
              style={{ color: site.tokens.primary }}
            >
              Share →
            </span>
          </a>

          {/* Twitter / X */}
          <a
            href={twitterHref}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-5 py-3.5 text-sm font-medium transition-all duration-200"
            style={{
              color:        site.tokens.text,
              borderBottom: `1px solid ${site.tokens.border}`,
            }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = `${site.tokens.primary}07` }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent' }}
          >
            <span
              className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: '#00000012', color: '#000000' }}
            >
              {/* X (Twitter) icon */}
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.261 5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </span>
            <span>Twitter / X</span>
            <span
              className="ml-auto text-[10px] font-semibold uppercase tracking-widest transition-opacity duration-200 opacity-0 group-hover:opacity-100"
              style={{ color: site.tokens.primary }}
            >
              Share →
            </span>
          </a>

          {/* Copy link */}
          <button
            onClick={handleCopyLink}
            className="group flex items-center gap-3 px-5 py-3.5 text-sm font-medium transition-all duration-200 w-full text-left"
            style={{ color: site.tokens.text }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = `${site.tokens.primary}07` }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent' }}
          >
            <span
              className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-300"
              style={{
                backgroundColor: copied ? `${site.tokens.primary}18` : `${site.tokens.primary}12`,
                color:           copied ? site.tokens.primary         : site.tokens.muted,
              }}
            >
              {copied
                ? <Check size={13} strokeWidth={2.5} />
                : (
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
                  </svg>
                )
              }
            </span>
            <span style={{ color: copied ? site.tokens.primary : site.tokens.text }}>
              {copied ? 'Link copied!' : 'Copy link'}
            </span>
          </button>

        </div>
      </div>

    </aside>
  )
}
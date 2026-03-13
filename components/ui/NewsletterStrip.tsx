'use client'

import { site } from '@/content'

export function NewsletterStrip() {
  return (
    <div
      className="rounded-2xl p-8 md:p-12 flex flex-col md:flex-row md:items-center justify-between gap-8"
      style={{ backgroundColor: site.tokens.dark }}
    >
      <div className="flex flex-col gap-2 max-w-lg">
        <h3 className="text-xl md:text-2xl font-bold text-white">
          Get articles in your inbox
        </h3>
        <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
          New thinking on technology, design, and building products in Africa. No spam, unsubscribe anytime.
        </p>
      </div>
      <div className="flex gap-3 flex-shrink-0 w-full md:w-auto">
        <input
          type="email"
          placeholder="your@email.com"
          className="flex-1 md:w-64 px-4 py-3 rounded-xl text-sm outline-none transition-colors duration-200"
          style={{
            backgroundColor: 'rgba(255,255,255,0.08)',
            border:          '1px solid rgba(255,255,255,0.12)',
            color:           'white',
          }}
          onFocus={(e) => { e.target.style.borderColor = site.tokens.accent }}
          onBlur={(e)  => { e.target.style.borderColor = 'rgba(255,255,255,0.12)' }}
        />
        <button
          className="px-5 py-3 rounded-xl text-sm font-semibold flex-shrink-0 transition-opacity duration-200 hover:opacity-90"
          style={{ backgroundColor: site.tokens.accent, color: site.tokens.dark }}
        >
          Subscribe
        </button>
      </div>
    </div>
  )
}
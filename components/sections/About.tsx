'use client'

import Image from 'next/image'
import { motion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import { site } from '@/content'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { CTAButton } from '@/components/ui/CTAButton'

// ─────────────────────────────────────────────────────────────
// ABOUT
// Split layout — image collage left, text right
// Team member avatars as a stacked preview
// ─────────────────────────────────────────────────────────────

export default function About() {
  return (
    <section
      id="about"
      className="py-24 md:py-32 overflow-hidden"
      style={{ backgroundColor: site.tokens.surface }}
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* ── LEFT — Image collage ─────────────────────── */}
          <div className="relative h-[480px] md:h-[560px] order-2 lg:order-1">

            {/* Main image */}
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
              className="absolute top-0 left-0 w-[75%] h-[80%] rounded-2xl overflow-hidden shadow-xl"
            >
              <Image
                src="/sites/savanna-digital/savanna-ds-team.png"
                alt="Savanna DS team working"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 60vw, 35vw"
              />
            </motion.div>

            {/* Secondary image */}
            <motion.div
              initial={{ opacity: 0, x: 32, y: 32 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1], delay: 0.15 }}
              className="absolute bottom-0 right-0 w-[55%] h-[55%] rounded-2xl overflow-hidden shadow-xl"
              style={{ border: `4px solid ${site.tokens.surface}` }}
            >
              <Image
                src="/sites/savanna-digital/team-collab.png"
                alt="Team collaboration"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 40vw, 25vw"
              />
            </motion.div>

            {/* Floating years badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: 'backOut', delay: 0.35 }}
              className="absolute top-[60%] left-[55%] -translate-x-1/2 -translate-y-1/2 rounded-2xl px-5 py-4 text-center shadow-2xl"
              style={{ backgroundColor: site.tokens.primary }}
            >
              <span className="block text-3xl font-bold text-white leading-none">5+</span>
              <span className="block text-xs text-white/70 mt-1 uppercase tracking-wider">Years</span>
            </motion.div>

          </div>

          {/* ── RIGHT — Text ─────────────────────────────── */}
          <div className="order-1 lg:order-2 flex flex-col gap-8">

            <SectionTitle
              badge={site.copy.about.badge}
              title={site.copy.about.title}
              description={site.copy.about.description}
              variant="centered"
              size="lg"
            />

            {/* Value props */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
              {[
                { heading: 'Africa-first thinking',  body: 'We build for real African infrastructure — low bandwidth, mobile-first, local payment rails.' },
                { heading: 'End-to-end delivery',    body: 'From brand strategy to deployed product. One team, one accountable partner.' },
                { heading: 'World-class quality',    body: 'Our work competes globally. We\'ve won clients from agencies in London, Dubai, and Singapore.' },
                { heading: 'Radical transparency',   body: 'Weekly updates, open project boards, no surprises. You always know where your project stands.' },
              ].map((item, i) => (
                <motion.div
                  key={item.heading}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.08 }}
                  className="p-4 rounded-xl"
                  style={{ backgroundColor: 'rgba(26,107,60,0.06)', border: `1px solid ${site.tokens.primary}20` }}
                >
                  <p className="text-sm font-semibold mb-1" style={{ color: site.tokens.primary }}>{item.heading}</p>
                  <p className="text-sm leading-relaxed" style={{ color: site.tokens.muted }}>{item.body}</p>
                </motion.div>
              ))}
            </div>

            {/* Team avatars + CTA */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex mx-auto items-center gap-5 pt-2"
            >
              {/* Stacked avatars */}
              <div className="flex items-center">
                {site.team.slice(0, 5).map((member, i) => (
                  <div
                    key={member.name}
                    className="relative w-10 h-10 rounded-full overflow-hidden ring-2"
                    style={{
                      marginLeft: i === 0 ? 0 : -10,
                      zIndex:     site.team.length - i,
                      border:     `2px solid ${site.tokens.surface}`,
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
                <span className="ml-3 text-sm font-medium" style={{ color: site.tokens.muted }}>
                  {site.team.length} team members
                </span>
              </div>

              
            </motion.div>
            
            {/* View all */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex justify-center"
            >
              <CTAButton href="/team" variant="outline" size="md" arrow>
                Meet the Team
              </CTAButton>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
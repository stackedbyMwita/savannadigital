'use client'

import { ArrowDownRight, CheckIcon, ChevronRightIcon, VideoIcon } from "lucide-react";
import { motion } from "motion/react";
import ButtonExample from "../layout/ButtonExample";
import TiltedImage from "../layout/TiltImage";
import { NAV_HEIGHT_PX } from "../layout/Navbar";
import { gsap } from 'gsap'
import { site } from "@/content";
import { CTAButton } from '@/components/ui/CTAButton'
import { useEffect, useRef } from "react";

export default function HeroSection() {
    const headlineRef = useRef<HTMLDivElement>(null)
      const lineRefs    = useRef<HTMLSpanElement[]>([])
    
      // ── GSAP headline stagger ────────────────────────────────
      useEffect(() => {
        if (!lineRefs.current.length) return
    
        const ctx = gsap.context(() => {
          gsap.fromTo(
            lineRefs.current,
            {
              yPercent:  110,
              opacity:   0,
            },
            {
              yPercent:  0,
              opacity:   1,
              duration:  0.9,
              ease:      'power3.out',
              stagger:   0.12,
              delay:     0.3,
            },
          )
        }, headlineRef)
    
        return () => ctx.revert()
      }, [])
    
      const addLineRef = (el: HTMLSpanElement | null, i: number) => {
        if (el) lineRefs.current[i] = el
      }

    const specialFeatures = [ "No credit card", "30 days free trial", "Setup in 10 minutes" ];

    return (
        <section 
            className="relative w-full overflow-hidden border flex flex-col items-center justify-center px-4 md:px-16 lg:px-24 xl:px-32"
            style={{
                minHeight: `calc(100vh - 0px)`,
                paddingTop: NAV_HEIGHT_PX,
                backgroundColor: site.tokens.surface,
            }}
        >
            {/* Large decorative circle — top right */}
            <div
                aria-hidden
                className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-[0.3] pointer-events-none"
                style={{
                background: `radial-gradient(circle, ${site.tokens.primary}, transparent 70%)`,
                }}
            />

            {/* Grid pattern overlay */}
            <div
                aria-hidden
                className="absolute inset-0 pointer-events-none opacity-[0.025]"
                style={{
                backgroundImage: `linear-gradient(${site.tokens.primary} 1px, transparent 1px), linear-gradient(90deg, ${site.tokens.primary} 1px, transparent 1px)`,
                backgroundSize: '60px 60px',
                }}
            />
            <div className="absolute top-30 -z-10 left-1/4 size-72 bg-blue-600 blur-[300px]"></div>
            <div className="absolute top-100 -z-10 left-5/7 size-72 bg-purple-600 blur-[300px]"></div>

            <motion.div 
                className="group flex items-center mb-8 gap-2 rounded-full p-1 px-3 mt-20 text-blue-100 border bg-white/45"
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
            >
                <span 
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{  backgroundColor: site.tokens.accent  }}
                />
                <p 
                className="text-sm flex items-center gap-3 font-medium uppercase tracking-widest"
                    style={{ color: site.tokens.primary }}
                >
                    <span>{site.hero.eyebrow}</span>
                    <ChevronRightIcon size={16} className="group-hover:translate-x-0.5 transition duration-300" />
                </p>
            </motion.div>

            
            {/* Headline — GSAP stagger per line */}
          <div ref={headlineRef} className="overflow-hidden text-center text-5xl/17 md:text-6xl/21 max-w-2xl mb-4">
            <h1
              className="font-bold leading-[1.05] tracking-tight"
              style={{
                fontSize:   'clamp(2.8rem, 6.5vw, 5.5rem)',
                color:      site.tokens.dark,
              }}
            >
              {site.hero.headline.map((line, i) => (
                <div key={i} className="overflow-hidden ">
                  <span
                    ref={(el) => addLineRef(el, i)}
                    className="block"
                    style={{
                      // Last line gets accent color
                      color: i === site.hero.headline.length - 1
                        ? site.tokens.primary
                        : site.tokens.dark,
                    }}
                  >
                    {line}
                  </span>
                </div>
              ))}
            </h1>
          </div>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="text-base md:text-lg text-center mb-6 leading-relaxed max-w-lg"
            style={{ color: site.tokens.muted }}
          >
            {site.hero.subheadline}
          </motion.p>

        {/* CTAs */}
        <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap items-center gap-4"
        >
            <CTAButton
            href={site.hero.cta.href}
            variant="primary"
            size="lg"
            >
            {site.hero.cta.label}
            </CTAButton>
            {site.hero.secondaryCta && (
            <CTAButton
                href={site.hero.secondaryCta.href}
                variant="outline"
                size="lg"
                arrow
            >
                {site.hero.secondaryCta.label}
            </CTAButton>
            )}
        </motion.div>

            {/* Stats strip */}
          {site.stats.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex flex-wrap items-center gap-8 mt-8"
            >
              {site.stats.slice(0, 3).map((stat, i) => (
                <div key={i} className="flex flex-col gap-1">
                  <span
                    className="text-2xl md:text-3xl font-bold leading-none text-center tabular-nums"
                    style={{ color: site.tokens.accent }}
                  >
                    {stat.value}
                  </span>
                  <span
                    className="text-xs uppercase tracking-wider"
                    style={{ color: site.tokens.muted }}
                  >
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          )}
            <TiltedImage />
        </section>
    );
}

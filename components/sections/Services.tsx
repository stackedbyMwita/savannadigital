'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'motion/react'
import {
  Code2, Smartphone, Paintbrush, Layers,
  Cloud, BarChart3, ArrowUpRight, LucideIcon,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { site } from '@/content'
import { SectionTitle } from '@/components/ui/SectionTitle'

// ─────────────────────────────────────────────────────────────
// ICON MAP
// ─────────────────────────────────────────────────────────────

const ICON_MAP: Record<string, LucideIcon> = {
  Code2, Smartphone, Paintbrush, Layers, Cloud, BarChart3,
}

// ─────────────────────────────────────────────────────────────
// SERVICE CARD
// ─────────────────────────────────────────────────────────────

function ServiceCard({
  service,
  index,
  isActive,
  onHover,
}: {
  service:  typeof site.services[0]
  index:    number
  isActive: boolean
  onHover:  (i: number | null) => void
}) {
  const Icon = ICON_MAP[service.icon] ?? Code2

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, ease: 'easeOut', delay: index * 0.07 }}
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => onHover(null)}
      className="group relative"
    >
      <div
        
        className={cn(
          'flex flex-col gap-5 p-7 rounded-2xl h-full',
          'border transition-all duration-300',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
        )}
        style={{
          backgroundColor: isActive ? site.tokens.primary         : 'white',
          borderColor:     isActive ? site.tokens.primary         : site.tokens.border,
          boxShadow:       isActive ? '0 20px 60px rgba(26,107,60,0.2)' : '0 1px 3px rgba(0,0,0,0.04)',
          transform:       isActive ? 'translateY(-4px)' : 'translateY(0)',
        }}
      >
        {/* Icon */}
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300"
          style={{
            backgroundColor: isActive ? 'rgba(255,255,255,0.15)' : `${site.tokens.primary}12`,
          }}
        >
          <Icon
            size={22}
            style={{ color: isActive ? '#ffffff' : site.tokens.primary }}
            className="transition-colors duration-300"
          />
        </div>

        {/* Text */}
        <div className="flex flex-col gap-2 flex-1">
          <h3
            className="font-semibold text-base transition-colors duration-300"
            style={{ color: isActive ? '#ffffff' : site.tokens.text }}
          >
            {service.title}
          </h3>
          <p
            className="text-sm leading-relaxed transition-colors duration-300"
            style={{ color: isActive ? 'rgba(255,255,255,0.7)' : site.tokens.muted }}
          >
            {service.description}
          </p>
        </div>

        {/* Arrow */}
        <div className="flex justify-end">
          <span
            className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300"
            style={{
              backgroundColor: isActive ? 'rgba(255,255,255,0.2)' : `${site.tokens.primary}10`,
              color:           isActive ? '#ffffff' : site.tokens.primary,
            }}
          >
            <ArrowUpRight size={14} />
          </span>
        </div>
      </div>
    </motion.div>
  )
}

// ─────────────────────────────────────────────────────────────
// SERVICES
// ─────────────────────────────────────────────────────────────

export default function Services() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <section
      id="services"
      className="py-24 md:py-32"
      style={{ backgroundColor: 'white' }}
    >
      <div className="container flex flex-col gap-14">

        <SectionTitle
          badge={site.copy.services.badge}
          title={site.copy.services.title}
          description={site.copy.services.description}
          variant="centered"
          size="lg"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {site.services.map((service, i) => (
            <ServiceCard
              key={service.title}
              service={service}
              index={i}
              isActive={activeIndex === i}
              onHover={setActiveIndex}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

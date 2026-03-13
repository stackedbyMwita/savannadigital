'use client'

import Image from 'next/image'
import { useState } from 'react'
import { motion } from 'motion/react'
import Marquee from 'react-fast-marquee'
import { site } from '@/content'
import { SectionTitle } from '@/components/ui/SectionTitle'

// ─────────────────────────────────────────────────────────────
// CLIENT LOGO
// Shows the logo image if available, falls back to the name
// if the image fails to load or no path is provided
// ─────────────────────────────────────────────────────────────

function ClientLogo({ name, logo }: { name: string; logo: string }) {
  const [imgFailed, setImgFailed] = useState(false)
  const showImage = !!logo && !imgFailed

  return (
    <div className="flex items-center justify-center mx-10 px-8 py-4 rounded-xl opacity-50 hover:opacity-100 transition-opacity duration-300 cursor-default">
      {showImage ? (
        <Image
          src={logo}
          alt={name}
          width={120}
          height={40}
          className="h-8 w-auto object-contain"
          onError={() => setImgFailed(true)}
        />
      ) : (
        <span
          className="text-sm font-bold uppercase tracking-widest whitespace-nowrap"
          style={{ color: site.tokens.text }}
        >
          {name}
        </span>
      )}
    </div>
  )
}

// ─────────────────────────────────────────────────────────────
// CLIENTS SECTION
// ─────────────────────────────────────────────────────────────

export default function Clients() {
  return (
    <section className="py-20 flex flex-col max-w-6xl mx-auto gap-8" style={{ backgroundColor: 'white' }}>
      <div className="container">
        <SectionTitle
          badge={site.copy.clients.badge}
          title={site.copy.clients.title}
          description={site.copy.clients.description}
          variant="centered"
          size="md"
        />
      </div>

      {/* Row 1 — left to right */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Marquee speed={35} gradient gradientColor="white" gradientWidth={80} pauseOnHover>
          {site.clients.map((c) => (
            <ClientLogo key={c.name} name={c.name} logo={c.logo} />
          ))}
        </Marquee>
      </motion.div>

      {/* Row 2 — right to left */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <Marquee speed={28} direction="right" gradient gradientColor="white" gradientWidth={80} pauseOnHover>
          {[...site.clients].reverse().map((c) => (
            <ClientLogo key={c.name} name={c.name} logo={c.logo} />
          ))}
        </Marquee>
      </motion.div>
    </section>
  )
}
import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'

import { BrandProvider }  from '@/components/providers/BrandProvider'
import { LenisProvider }  from '@/components/providers/LenisProvider'
import { GSAPProvider }   from '@/components/providers/GSAPProvider'
import { PageTransition } from '@/components/layout/PageTransition'
import { Navbar }         from '@/components/layout/Navbar'
import { Footer }         from '@/components/layout/Footer'
import { site }           from '@/content'

// ── Base font — loaded globally, all sites fall back to this ──
const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-outfit',
  display: 'swap',
})

// ── Metadata driven by site content file ─────────────────────
// Swap NEXT_PUBLIC_SITE_ID env var → entire metadata changes
export const metadata: Metadata = {
  title: {
    template: site.seo.titleTemplate,
    default:  site.name,
  },
  description:  site.description,
  keywords:     site.seo.keywords,
  metadataBase: new URL(site.url),
  openGraph: {
    type:        'website',
    siteName:    site.name,
    title:       site.name,
    description: site.description,
    url:         site.url,
    images: [
      {
        url:    site.seo.ogImage,
        width:  1200,
        height: 630,
        alt:    site.name,
      },
    ],
  },
  twitter: {
    card:        'summary_large_image',
    title:       site.name,
    description: site.description,
    images:      [site.seo.ogImage],
    ...(site.seo.twitterHandle && { creator: site.seo.twitterHandle }),
  },
  icons: {
    icon:  site.logo.favicon,
    apple: site.logo.favicon,
  },
  robots: {
    index:  true,
    follow: true,
  },
}

// ─────────────────────────────────────────────────────────────

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={outfit.variable}
      // suppress because BrandProvider sets CSS vars on mount
      // causing a benign mismatch between server and client
      suppressHydrationWarning
    >
      <body className="antialiased overflow-x-hidden">

        {/*
          Provider order matters:
          1. GSAPProvider   — registers plugins first, no DOM needed
          2. LenisProvider  — needs DOM, connects to GSAP ScrollTrigger
          3. BrandProvider  — injects CSS tokens from site content file
          Navbar + Footer outside PageTransition so they don't
          re-animate on every route change
        */}
        <GSAPProvider>
          <LenisProvider>
            <BrandProvider>

              <Navbar />

              <PageTransition>
                <main>
                  {children}
                </main>
              </PageTransition>

              <Footer />

            </BrandProvider>
          </LenisProvider>
        </GSAPProvider>

      </body>
    </html>
  )
}
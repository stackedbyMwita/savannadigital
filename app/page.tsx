import About from '@/components/sections/About';
import Blog from '@/components/sections/Blog';
import Clients from '@/components/sections/Clients';
import CTA from '@/components/sections/CTA';
import { HeroGPT } from '@/components/sections/HeroGPT';
import Services from '@/components/sections/Services';
import Stats from '@/components/sections/Stats';
import Testimonials from '@/components/sections/Testimonials';
import Work from '@/components/sections/Work';

// ── Home page — purely compositional ─────────────────────────
// No logic here. Each section reads from site content directly.
// To reorder sections: move lines. To hide a section: comment out.

export default function HomePage() {
  return (
    <>
      <HeroGPT />
      <Clients />
      <Stats />
      <About />
      <Services />
      <Work />
      <Testimonials />
      <Blog />
      <CTA />
    </>
  )
}
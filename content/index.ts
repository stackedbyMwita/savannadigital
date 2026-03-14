import { SiteConfig } from '@/types/site'
import { savannaDigital } from './savanna-digital'
import { chaiClay } from './chai-clay'

// ─────────────────────────────────────────────────────────────
// CONTENT INDEX
//
// This is the only file that knows which site is active.
// Every component imports `site` from here — never directly
// from a company file.
//
// To deploy a different site:
//   Set NEXT_PUBLIC_SITE_ID=chai-clay in Vercel env vars.
//   No code changes. No redeployment of other sites.
//
// Add new sites:
//   1. Create content/your-site.ts
//   2. Import it here
//   3. Add it to the sites map
// ─────────────────────────────────────────────────────────────

const siteId = process.env.NEXT_PUBLIC_SITE_ID ?? 'savanna-digital'

const sites: Record<string, SiteConfig> = {
  'savanna-digital': savannaDigital,
  'chai-clay':        chaiClay,
  // 'mbegu-agritech':   mbeguAgritech,
  // 'nexaflow-ai':      nexaflowAI,
  // 'verdant-living':   verdantLiving,
  // 'aurum-wealth':     aurumWealth,
  // 'norlight-studios': norlightStudios,
  // 'pulso-health':     pulsoHealth,
}

// Falls back to savanna-digital if SITE_ID is unrecognised
export const site: SiteConfig = sites[siteId] ?? savannaDigital
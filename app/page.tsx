import { DeployButton } from "@/components/deploy-button";
import { EnvVarWarning } from "@/components/env-var-warning";
import { AuthButton } from "@/components/auth-button";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { ConnectSupabaseSteps } from "@/components/tutorial/connect-supabase-steps";
import { SignUpUserSteps } from "@/components/tutorial/sign-up-user-steps";
import { hasEnvVars } from "@/lib/utils";
import Link from "next/link";
import { Suspense } from "react";

import { Hero }         from '@/components/sections/Hero'
import Stats        from '@/components/sections/Stats'
import About        from '@/components/sections/About'
import Services     from '@/components/sections/Services'
import Work         from '@/components/sections/Work'
import Clients      from '@/components/sections/Clients'
import Testimonials from '@/components/sections/Testimonials'
import Blog         from '@/components/sections/Blog'
import CTA          from '@/components/sections/CTA'

// ── Home page — purely compositional ─────────────────────────
// No logic here. Each section reads from site content directly.
// To reorder sections: move lines. To hide a section: comment out.

export default function HomePage() {
  return (
    <>
      <Hero />
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
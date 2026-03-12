import { createClient } from '@supabase/supabase-js'

// ─────────────────────────────────────────────────────────────
// SUPABASE ADMIN CLIENT
// Uses the service role key — bypasses RLS entirely.
// NEVER import this in any client component or expose to browser.
// Only used in:
//   - app/api/contact/route.ts
//   - Any future server actions that need elevated DB access
//
// The with-supabase template provides lib/supabase/server.ts
// for cookie-based auth sessions — use that for auth-related
// server operations. This client is for direct DB writes only.
// ─────────────────────────────────────────────────────────────

export const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
  {
    auth: {
      // No session persistence needed — this is a server-only client
      autoRefreshToken: false,
      persistSession:   false,
    },
  }
)
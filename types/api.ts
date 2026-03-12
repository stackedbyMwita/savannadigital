// ─────────────────────────────────────────────────────────────
// API TYPES
// Shared between the contact form component and the API route
// so request/response shapes are always in sync
// ─────────────────────────────────────────────────────────────

// ── Contact form request body ─────────────────────────────────
export type ContactFormData = {
  name:     string
  email:    string
  phone?:   string
  company?: string
  service:  string
  message:  string
  budget?:  string
  // Honeypot — must be empty or absent
  website?: string
}

// ── Contact form API response ─────────────────────────────────
export type ContactFormResponse = {
  success: boolean
  message: string
  error?:  string
}

// ── Lead status — mirrors the DB check constraint ────────────
export type LeadStatus =
  | 'new'
  | 'read'
  | 'replied'
  | 'archived'
  | 'spam'

// ── Lead priority — mirrors the DB check constraint ──────────
export type LeadPriority =
  | 'low'
  | 'normal'
  | 'high'
  | 'urgent'
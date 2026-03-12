import { z } from 'zod'

// ─────────────────────────────────────────────────────────────
// CONTACT FORM SCHEMA
// Used in two places:
//   1. ContactForm.tsx — client-side validation via react-hook-form
//   2. app/api/contact/route.ts — server-side validation before DB insert
// Same schema both sides = no inconsistency possible
// ─────────────────────────────────────────────────────────────

export const contactSchema = z.object({
  name: z
    .string()
    .min(2,   'Name must be at least 2 characters')
    .max(100, 'Name is too long'),

  email: z
    .string()
    .email('Please enter a valid email address'),

  phone: z
    .string()
    .max(20, 'Phone number is too long')
    .optional(),

  company: z
    .string()
    .max(100, 'Company name is too long')
    .optional(),

  service: z
    .string()
    .min(1, 'Please select a service'),

  message: z
    .string()
    .min(20,   'Message must be at least 20 characters')
    .max(2000, 'Message is too long'),

  budget: z
    .string()
    .optional(),

  // Honeypot — rendered as a hidden field
  // Bots fill it in, humans never see it
  // If this has any value, reject the submission silently
  website: z
    .string()
    .max(0, 'Bot detected')
    .optional(),
})

export type ContactSchema = z.infer<typeof contactSchema>
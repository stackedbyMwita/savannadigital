'use client'

import { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { motion, AnimatePresence } from 'motion/react'
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { site } from '@/content'
import { PageWrapper } from '@/components/layout/PageWrapper'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { contactSchema, type ContactSchema } from '@/lib/validations'

// ─────────────────────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────────────────────

function Field({
  label,
  error,
  required,
  children,
}: {
  label:    string
  error?:   string
  required?: boolean
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium" style={{ color: site.tokens.text }}>
        {label}
        {required && <span className="ml-1" style={{ color: site.tokens.primary }}>*</span>}
      </label>
      {children}
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1,  y: 0  }}
            exit={{    opacity: 0,  y: -4  }}
            transition={{ duration: 0.2 }}
            className="text-xs flex items-center gap-1"
            style={{ color: '#DC2626' }}
          >
            <AlertCircle size={12} />
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  )
}

const inputClass = `
  w-full px-4 py-3 rounded-xl text-sm outline-none
  transition-all duration-200
  border
`

function inputStyle(focused: boolean, error: boolean) {
  return {
    backgroundColor: focused ? 'white' : site.tokens.surface,
    borderColor:     error   ? '#DC2626'
                   : focused ? site.tokens.primary
                   :           site.tokens.border,
    color:           site.tokens.text,
    boxShadow:       focused && !error ? `0 0 0 3px ${site.tokens.primary}18` : 'none',
  }
}

// ─────────────────────────────────────────────────────────────
// CONTACT FORM
// ─────────────────────────────────────────────────────────────

function ContactForm() {
  const [focused,    setFocused]    = useState<string | null>(null)
  const [submitState, setSubmitState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<ContactSchema>({
    resolver: zodResolver(contactSchema),
  })

  async function onSubmit(data: ContactSchema) {
    setSubmitState('loading')
    try {
      const res = await fetch('/api/contact', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(data),
      })
      if (!res.ok) throw new Error()
      setSubmitState('success')
      reset()
    } catch {
      setSubmitState('error')
    }
  }

  const focus   = (name: string) => () => setFocused(name)
  const blur    = ()              => setFocused(null)

  if (submitState === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1     }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="flex flex-col items-center text-center gap-5 py-16 px-8 rounded-2xl"
        style={{ backgroundColor: `${site.tokens.primary}08`, border: `1px solid ${site.tokens.primary}25` }}
      >
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center"
          style={{ backgroundColor: `${site.tokens.primary}15` }}
        >
          <CheckCircle size={32} style={{ color: site.tokens.primary }} />
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-bold" style={{ color: site.tokens.dark }}>Message sent!</h3>
          <p className="text-sm leading-relaxed max-w-sm" style={{ color: site.tokens.muted }}>
            Thanks for reaching out. We'll review your message and get back to you within one business day.
          </p>
        </div>
        <button
          onClick={() => setSubmitState('idle')}
          className="text-sm font-semibold underline underline-offset-4 transition-opacity hover:opacity-70"
          style={{ color: site.tokens.primary }}
        >
          Send another message
        </button>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5" noValidate>

      {/* Honeypot — hidden from humans, bots fill it in */}
      <input type="text" {...register('website')} className="hidden" tabIndex={-1} aria-hidden />

      {/* Row: Name + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Full Name" error={errors.name?.message} required>
          <input
            {...register('name')}
            type="text"
            placeholder="Amina Oduya"
            className={inputClass}
            style={inputStyle(focused === 'name', !!errors.name)}
            onFocus={focus('name')}
            onBlur={blur}
          />
        </Field>

        <Field label="Email Address" error={errors.email?.message} required>
          <input
            {...register('email')}
            type="email"
            placeholder="amina@company.com"
            className={inputClass}
            style={inputStyle(focused === 'email', !!errors.email)}
            onFocus={focus('email')}
            onBlur={blur}
          />
        </Field>
      </div>

      {/* Row: Company + Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Company" error={errors.company?.message}>
          <input
            {...register('company')}
            type="text"
            placeholder="Acme Ltd (optional)"
            className={inputClass}
            style={inputStyle(focused === 'company', !!errors.company)}
            onFocus={focus('company')}
            onBlur={blur}
          />
        </Field>

        <Field label="Phone" error={errors.phone?.message}>
          <input
            {...register('phone')}
            type="tel"
            placeholder="+254 700 000 000 (optional)"
            className={inputClass}
            style={inputStyle(focused === 'phone', !!errors.phone)}
            onFocus={focus('phone')}
            onBlur={blur}
          />
        </Field>
      </div>

      {/* Service */}
      <Field label="Service Needed" error={errors.service?.message} required>
        <Controller
          name="service"
          control={control}
          render={({ field }) => (
            <Select value={field.value ?? ''} onValueChange={field.onChange}>
              <SelectTrigger
                className="w-full px-4 py-3 h-auto rounded-xl text-sm border transition-all duration-200"
                style={{
                  backgroundColor: site.tokens.surface,
                  borderColor:     errors.service ? '#DC2626' : site.tokens.border,
                  color:           field.value ? site.tokens.text : site.tokens.muted,
                }}
              >
                <SelectValue placeholder="Select a service..." />
              </SelectTrigger>
              <SelectContent className="bg-white">
                {site.contact.services.map((s) => (
                  <SelectItem key={s} value={s}>{s}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
      </Field>

      {/* Budget */}
      <Field label="Estimated Budget" error={errors.budget?.message}>
        <Controller
          name="budget"
          control={control}
          render={({ field }) => (
            <Select value={field.value ?? ''} onValueChange={field.onChange}>
              <SelectTrigger
                className="w-full px-4 py-3 h-auto rounded-xl text-sm border transition-all duration-200"
                style={{
                  backgroundColor: site.tokens.surface,
                  borderColor:     errors.budget ? '#DC2626' : site.tokens.border,
                  color:           field.value ? site.tokens.text : site.tokens.muted,
                }}
              >
                <SelectValue placeholder="Select a range... (optional)" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                {site.contact.budgetRanges.map((b) => (
                  <SelectItem key={b} value={b}>{b}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
      </Field>

      {/* Message */}
      <Field label="Tell Us About Your Project" error={errors.message?.message} required>
        <textarea
          {...register('message')}
          rows={5}
          placeholder="Describe what you're building, what stage you're at, and what kind of help you're looking for..."
          className={inputClass}
          style={{
            ...inputStyle(focused === 'message', !!errors.message),
            resize: 'vertical',
          }}
          onFocus={focus('message')}
          onBlur={blur}
        />
      </Field>

      {/* Error state */}
      {submitState === 'error' && (
        <p className="text-sm flex items-center gap-2 p-3 rounded-lg" style={{ backgroundColor: '#FEF2F2', color: '#DC2626' }}>
          <AlertCircle size={15} />
          Something went wrong. Please try again or email us directly.
        </p>
      )}

      {/* Submit */}
      <motion.button
        type="submit"
        disabled={submitState === 'loading'}
        className="flex items-center justify-center gap-2.5 w-full py-4 rounded-xl text-sm font-semibold transition-opacity duration-200 disabled:opacity-60"
        style={{ backgroundColor: site.tokens.primary, color: 'white' }}
        whileHover={{ scale: submitState === 'loading' ? 1 : 1.01 }}
        whileTap={{   scale: submitState === 'loading' ? 1 : 0.98 }}
      >
        {submitState === 'loading' ? (
          <>
            <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send size={15} />
            Send Message
          </>
        )}
      </motion.button>

      <p className="text-xs text-center" style={{ color: site.tokens.muted }}>
        We respond within one business day. No spam, ever.
      </p>

    </form>
  )
}

// ─────────────────────────────────────────────────────────────
// CONTACT DETAIL ITEM
// ─────────────────────────────────────────────────────────────

function ContactDetail({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon:   React.ElementType
  label:  string
  value:  string
  href?:  string
}) {
  const content = (
    <div className="flex items-start gap-4 group">
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors duration-200"
        style={{ backgroundColor: `${site.tokens.primary}12` }}
      >
        <Icon size={18} style={{ color: site.tokens.primary }} />
      </div>
      <div className="flex flex-col gap-0.5">
        <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: site.tokens.muted }}>
          {label}
        </span>
        <span
          className="text-sm font-medium transition-colors duration-200"
          style={{ color: site.tokens.text }}
        >
          {value}
        </span>
      </div>
    </div>
  )

  if (href) {
    return (
      <a href={href} className="block hover:opacity-80 transition-opacity duration-200">
        {content}
      </a>
    )
  }

  return content
}

// ─────────────────────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────────────────────

export default function ContactPage() {
  return (
    <PageWrapper noPadding noMaxWidth>

      {/* ── Page hero ─────────────────────────────────────── */}
      <div
        className="w-full pt-8 pb-16"
        style={{ backgroundColor: site.tokens.surface }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-12">
          <SectionTitle
            badge="Get In Touch"
            title="Let's Build Something Great"
            description="Tell us what you're working on. We'll come back with how we'd approach it — no pitch, no pressure."
            variant="centered"
            size="lg"
          />
        </div>
      </div>

      {/* ── Main grid ─────────────────────────────────────── */}
      <div className="w-full py-16" style={{ backgroundColor: 'white' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">

            {/* ── Form (3/5) ────────────────────────────── */}
            <div className="lg:col-span-3">
              <div
                className="rounded-2xl p-8 md:p-10"
                style={{
                  backgroundColor: 'white',
                  border:          `1px solid ${site.tokens.border}`,
                  boxShadow:       '0 4px 24px rgba(0,0,0,0.05)',
                }}
              >
                <div className="flex flex-col gap-2 mb-8">
                  <h2 className="text-xl font-bold" style={{ color: site.tokens.dark }}>
                    Start a conversation
                  </h2>
                  <p className="text-sm" style={{ color: site.tokens.muted }}>
                    Fill in the form below and we'll get back to you within one business day.
                  </p>
                </div>
                <ContactForm />
              </div>
            </div>

            {/* ── Details (2/5) ─────────────────────────── */}
            <div className="lg:col-span-2 flex flex-col gap-10">

              {/* Contact details */}
              <div className="flex flex-col gap-6">
                <h3 className="text-sm font-semibold uppercase tracking-widest" style={{ color: site.tokens.muted }}>
                  Contact Details
                </h3>

                <div className="flex flex-col gap-5">
                  <ContactDetail
                    icon={Mail}
                    label="Email"
                    value={site.contact.email}
                    href={`mailto:${site.contact.email}`}
                  />
                  {site.contact.phone && (
                    <ContactDetail
                      icon={Phone}
                      label="Phone"
                      value={site.contact.phone}
                      href={`tel:${site.contact.phone}`}
                    />
                  )}
                  {site.contact.address && (
                    <ContactDetail
                      icon={MapPin}
                      label="Office"
                      value={site.contact.address}
                    />
                  )}
                </div>
              </div>

              {/* Divider */}
              <div style={{ height: 1, backgroundColor: site.tokens.border }} />

              {/* Socials */}
              <div className="flex flex-col gap-4">
                <h3 className="text-sm font-semibold uppercase tracking-widest" style={{ color: site.tokens.muted }}>
                  Follow Us
                </h3>
                <div className="flex flex-wrap gap-3">
                  {site.footer.socials.map((s) => (
                    <a
                      key={s.platform}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold uppercase tracking-widest px-4 py-2.5 rounded-xl transition-all duration-200 hover:opacity-80"
                      style={{
                        backgroundColor: `${site.tokens.primary}10`,
                        color:           site.tokens.primary,
                        border:          `1px solid ${site.tokens.primary}20`,
                      }}
                    >
                      {s.platform}
                    </a>
                  ))}
                </div>
              </div>

              {/* Divider */}
              <div style={{ height: 1, backgroundColor: site.tokens.border }} />

              {/* Response time promise */}
              <div
                className="rounded-2xl p-6 flex flex-col gap-3"
                style={{ backgroundColor: site.tokens.surface }}
              >
                <div className="flex items-center gap-2">
                  <span
                    className="w-2 h-2 rounded-full animate-pulse"
                    style={{ backgroundColor: site.tokens.primary }}
                  />
                  <span className="text-sm font-semibold" style={{ color: site.tokens.text }}>
                    Currently available
                  </span>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: site.tokens.muted }}>
                  We typically respond within <strong style={{ color: site.tokens.text }}>4 business hours</strong> for new project enquiries. Urgent? Call us directly.
                </p>
                <div className="flex flex-wrap gap-3 pt-1">
                  {[
                    'Web Development',
                    'Mobile Apps',
                    'Design',
                    'Brand',
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] px-2.5 py-1 rounded-full font-medium"
                      style={{
                        backgroundColor: `${site.tokens.primary}10`,
                        color:           site.tokens.primary,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

    </PageWrapper>
  )
}
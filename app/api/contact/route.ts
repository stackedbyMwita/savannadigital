import { NextRequest, NextResponse } from 'next/server'
import { contactSchema } from '@/lib/validations'
import { supabaseAdmin } from '@/lib/custom/supabase-admin'

export async function POST(req: NextRequest) {

  // 1. Parse body
  let raw: unknown
  try {
    raw = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  // 2. Validate
  const result = contactSchema.safeParse(raw)
  if (!result.success) {
    return NextResponse.json(
      { error: 'Validation failed', issues: result.error.flatten().fieldErrors },
      { status: 422 }
    )
  }

  const data = result.data

  // 3. Honeypot — hidden field. Bots fill it, humans don't.
  //    Return 200 silently so bots think it worked.
  if (data.website) {
    return NextResponse.json({ ok: true })
  }

  // 4. Insert
  const { error } = await supabaseAdmin
    .from('leads')
    .insert({
      site_id: process.env.NEXT_PUBLIC_SITE_ID,
      name:    data.name,
      email:   data.email,
      phone:   data.phone   ?? null,
      company: data.company ?? null,
      service: data.service,
      budget:  data.budget  ?? null,
      message: data.message,
    })

  if (error) {
    console.error('[api/contact] insert failed:', error)
    return NextResponse.json(
      {
        error:  'Could not save your message. Please try again.',
        detail: process.env.NODE_ENV === 'development' ? error : undefined,
      },
      { status: 500 }
    )
  }

  return NextResponse.json({ ok: true })
}
import nodemailer from 'nodemailer'

// In-memory rate limiter: { ip -> [timestamp, ...] }
// Note: resets on cold start; suitable for low-traffic portfolios.
const rateLimitMap = new Map()
const RATE_LIMIT_MAX = 5
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000 // 1 hour

function isRateLimited(ip) {
  const now = Date.now()
  const windowStart = now - RATE_LIMIT_WINDOW_MS
  const timestamps = (rateLimitMap.get(ip) || []).filter((t) => t > windowStart)
  if (timestamps.length >= RATE_LIMIT_MAX) return true
  timestamps.push(now)
  rateLimitMap.set(ip, timestamps)
  return false
}

function validateInput({ name, email, subject, message }) {
  if (!name || typeof name !== 'string' || !name.trim()) return 'Name is required.'
  if (!email || typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    return 'A valid email address is required.'
  if (!subject || typeof subject !== 'string' || !subject.trim()) return 'Subject is required.'
  if (!message || typeof message !== 'string' || !message.trim()) return 'Message is required.'
  return null
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed.' })
  }

  // Determine client IP
  const ip =
    (req.headers['x-forwarded-for'] || '').split(',')[0].trim() ||
    req.socket?.remoteAddress ||
    'unknown'

  if (isRateLimited(ip)) {
    return res.status(429).json({ error: 'Too many requests. Please try again later.' })
  }

  const { name, email, subject, message } = req.body || {}
  const validationError = validateInput({ name, email, subject, message })
  if (validationError) {
    return res.status(400).json({ error: validationError })
  }

  const emailTo = process.env.CONTACT_EMAIL_TO
  const emailFrom = process.env.CONTACT_EMAIL_FROM
  const smtpHost = process.env.SMTP_HOST
  const smtpPort = parseInt(process.env.SMTP_PORT || '587', 10)
  const smtpUser = process.env.SMTP_USER
  const smtpPass = process.env.SMTP_PASS

  if (!emailTo || !emailFrom || !smtpHost || !smtpUser || !smtpPass) {
    console.error('Missing email configuration environment variables.')
    return res.status(500).json({ error: 'Server configuration error. Please try again later.' })
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: { user: smtpUser, pass: smtpPass },
  })

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact" <${emailFrom}>`,
      to: emailTo,
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
<hr />
<p>${message.replace(/\n/g, '<br />')}</p>`,
    })

    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error('Email send error:', err)
    return res.status(500).json({ error: 'Failed to send message. Please try again later.' })
  }
}

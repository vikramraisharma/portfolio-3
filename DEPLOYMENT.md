# Deployment Guide

This document covers deploying the portfolio to Vercel and configuring the contact form email service.

## Prerequisites

- A [Vercel](https://vercel.com) account connected to your GitHub repository
- An SMTP email provider (Gmail with App Password, SendGrid, Mailgun, etc.)
- Node.js 18+ for local development

## Environment Variables

Set these in your Vercel project dashboard under **Settings → Environment Variables**:

| Variable | Required | Description |
|---|---|---|
| `SMTP_HOST` | Yes | SMTP server hostname (e.g. `smtp.gmail.com`) |
| `SMTP_PORT` | Yes | SMTP port (`587` for TLS, `465` for SSL) |
| `SMTP_USER` | Yes | SMTP login username (usually your email address) |
| `SMTP_PASS` | Yes | SMTP password or App Password |
| `CONTACT_TO` | Yes | Email address that receives contact form submissions |
| `CONTACT_FROM` | No | Sender address shown in the From header (defaults to `SMTP_USER`) |

Copy `.env.example` to `.env.local` for local development and fill in the values. **Never commit `.env.local` to version control.**

### Gmail Setup

1. Enable 2-Factor Authentication on your Google account.
2. Go to **Google Account → Security → App Passwords**.
3. Generate an App Password for "Mail / Other device".
4. Use `smtp.gmail.com`, port `587`, your Gmail address as `SMTP_USER`, and the generated App Password as `SMTP_PASS`.

## Build Command

```bash
npm run build
```

Output directory: `dist/`

## Vercel Configuration

The `vercel.json` file in the project root configures:

- **Build command**: `vite build`
- **Output directory**: `dist`
- **SPA rewrites**: All routes (`/.*`) rewrite to `index.html` so React Router handles navigation
- **API routes**: `/api/*` routes are served by serverless functions in the `api/` directory

No additional Vercel configuration is required — import the repository and Vercel will detect the settings automatically.

## Deploy Steps

1. Push your code to GitHub (or GitLab / Bitbucket).
2. In the Vercel dashboard, click **Add New → Project** and import the repository.
3. Vercel auto-detects Vite; confirm the build command (`vite build`) and output directory (`dist`).
4. Add all required environment variables (see table above).
5. Click **Deploy**. Vercel will build and publish the site.

Subsequent pushes to the `main` branch trigger automatic redeployments.

## Running Tests Locally

```bash
npm test
```

Runs the vitest test suite (browser compatibility checks, feature detection).

## Lighthouse Targets

| Category | Target |
|---|---|
| Performance | > 80 |
| Accessibility | > 90 |
| Best Practices | > 90 |

Run `npx lighthouse <your-vercel-url> --view` after deployment to verify scores.

## Troubleshooting

**Contact form returns 500**
Check that all `SMTP_*` environment variables are set in Vercel and that your SMTP provider allows connections from Vercel's IP ranges (most do).

**SVG filter effects missing on some browsers**
The site degrades gracefully: `SVGFilters.jsx` adds a `.no-svg-filters` class to `<body>` when `filter: url()` is not supported, and `global.css` applies CSS-only approximations (box-shadow, text-shadow, mix-blend-mode) as fallbacks.

**React Router shows 404 on direct URL access**
Ensure `vercel.json` contains the SPA rewrite rule (`"source": "/(.*)", "destination": "/index.html"`). This is already present in the committed config.

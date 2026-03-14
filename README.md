# portfolio-3

A comic-style personal portfolio website built with Vite and React, deployed on Vercel.

## Setup

```bash
# Clone the repository
git clone <repo-url>
cd portfolio-3

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

## Environment Variables

Copy `.env.example` to `.env` and fill in the values:

```bash
cp .env.example .env
```

| Variable | Description |
|---|---|
| `CONTACT_EMAIL_TO` | Recipient email address for contact form submissions |
| `CONTACT_EMAIL_FROM` | Sender email address used by the serverless function |
| `SMTP_HOST` | SMTP server hostname |
| `SMTP_PORT` | SMTP server port (default: 587) |
| `SMTP_USER` | SMTP authentication username |
| `SMTP_PASS` | SMTP authentication password |

Set these in Vercel's project settings under **Environment Variables** for production deployments.

## Deployment

The project is configured for Vercel deployment via `vercel.json`. Push to your connected branch and Vercel will build and deploy automatically.

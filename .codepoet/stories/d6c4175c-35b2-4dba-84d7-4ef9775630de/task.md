# Project
A personal portfolio website that showcases a professional's work, skills, and experience to potential employers or clients. It enables developers and designers to present their projects, demonstrate their capabilities, and make a strong first impression in a competitive job market.
Stack: Unknown · Unknown · Unknown · Unknown

# Goal: Comic-Style Portfolio Website
Build a multi-page portfolio website using Vite and React, deployed on Vercel. The site should feature a paper-textured background with black-and-white comic book aesthetic, where blacks are rendered as softer ink tones rather than pure black. Implement four pages (home, about me, experience, contact) with emphasis on layout and visual design over initial content. Apply extremely vivid comic book colors sparingly as accents—primarily through underlined text links and small portions of images. The design should prioritize the paper-and-ink visual metaphor while maintaining a professional portfolio structure.

## Done
- Phase 2: Create global SVG filter definitions and CSS texture system — Created SVGFilters.jsx component with ink/paper/grain SVG filter definitions, colors.css with --ink-black, --paper-white, and accent color CSS variables, and textures.css with CSS-only paper background texture and fallback ink/shadow styles. Imported CSS globally in main.jsx and SVGFilters in App.jsx so all filters and styles are available across every page.
- Phase 1: Set up Vite React project structure and deploy pipeline — Initialized Vite + React project with React Router, four pages (Home, About, Experience, Contact), a Navigation component with underlined links, vercel.json for Vercel deployment with SPA rewrites, .gitignore, .env.example, and updated README with setup instructions. Build verified with npm run build producing optimized dist/.

# Your Task: Contact form submits successfully and sends email via serverless function

## Description
Create the Contact page with a functional form and set up a Vercel serverless function to handle form submissions and email delivery. This phase connects the frontend form to backend processing infrastructure.

## Acceptance Criteria
- Contact form displays all required fields (name, email, subject, message) with proper labels
- Form validates required fields and email format before submission
- Form submission sends data to serverless function without errors
- Serverless function receives form data and sends email to configured recipient
- User receives success message after form submission and error message if submission fails
- Rate limiting prevents more than 5 submissions per IP per hour

## Implementation Notes
- Create ContactForm component with fields: name, email, subject, message using controlled inputs with useState, add form validation (required fields, email format)
- Add loading and success/error state management to ContactForm, display feedback messages to user after submission
- Create formService.js with submitContactForm function that POSTs to /api/contact endpoint with form data
- Build api/contact.js serverless function that receives POST request, validates input, sends email using Nodemailer or similar service, returns success/error response
- Configure environment variables in .env: CONTACT_EMAIL_TO (recipient), CONTACT_EMAIL_FROM (sender), SMTP credentials or email service API key
- Add rate limiting to serverless function (max 5 submissions per IP per hour) to prevent spam
- Implement error handling in ContactForm to display user-friendly messages for network errors or validation failures

## Completion
Verify your changes work — run relevant tests or checks appropriate for this project.

### Project hygiene
You are scaffolding a new project. Before installing any dependencies:
- Create a `.gitignore` appropriate for the stack (node_modules/, __pycache__/, .venv/, dist/, .env, etc.).
- Include a `README.md` with setup instructions (clone → install → run).

Then create `.codepoet/stories/d6c4175c-35b2-4dba-84d7-4ef9775630de/done.json` with this exact structure:
```json
{
  "status": "completed",
  "summary": "<brief summary of what you did>",
  "files_changed": ["list", "of", "files"]
}
```
IMPORTANT: The file MUST be at exactly `.codepoet/stories/d6c4175c-35b2-4dba-84d7-4ef9775630de/done.json`.
Do not create this file until you are fully done.
Do NOT perform any git operations (no git add, commit, or push).
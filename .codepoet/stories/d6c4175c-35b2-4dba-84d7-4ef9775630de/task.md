# Project
This is a personal portfolio and contact application that allows visitors to view a developer's work experience, background information, and project portfolio through a multi-page website. Users can submit contact inquiries through a contact form that sends messages via email to the site owner.
Stack: JavaScript | React | Vite
Patterns:
- Error Handling: The codebase implements standard try/except blocks for error handling, providing basic protection against runtime failures. This approach covers common error scenarios but may benefit from more granular error classification and recovery strategies.
- Testing Patterns: No test files detected — testing infrastructure has not yet been established. Implementing a testing framework would help ensure code reliability and catch regressions as the codebase grows.
- Async Patterns: The codebase makes heavy use of async/await patterns across 3 async functions (handler in api/contact.js, handleSubmit in src/components/ContactForm.jsx, and submitContactForm in src/services/formService.js) to handle asynchronous operations like API calls and form submissions concurrently.
- File Organization: The codebase follows a clear separation of concerns with distinct route/controller layers in the api directory, a service layer for business logic in src/services, and UI components organized in src/components/layout and src/components. This structure supports maintainability and makes it easy to locate related functionality.
- Code Style: The codebase is untyped, meaning it does not use TypeScript or similar type annotation systems. Adding type definitions could improve code clarity, catch potential bugs earlier, and enhance developer experience through better IDE support.

# Goal: Comic-Style Portfolio Website
Build a multi-page portfolio website using Vite and React, deployed on Vercel. The site should feature a paper-textured background with black-and-white comic book aesthetic, where blacks are rendered as softer ink tones rather than pure black. Implement four pages (home, about me, experience, contact) with emphasis on layout and visual design over initial content. Apply extremely vivid comic book colors sparingly as accents—primarily through underlined text links and small portions of images. The design should prioritize the paper-and-ink visual metaphor while maintaining a professional portfolio structure.

## Done
- **Phase 2: Create global SVG filter definitions and CSS texture system** — Global SVG filters and CSS textures are defined and ready. SVGFilters.jsx provides paper-noise, ink-soft, grain, and ink-paper filter definitions using feTurbulence/feGaussianBlur/feDisplacementMap. colors.css defines the ink/paper/accent color palette with CSS custom properties. textures.css creates a CSS-only paper texture background and fallback utility classes (.ink-shadow, .ink-border, .paper-card, .ink-text). SVGFilters is imported and rendered globally in App.jsx; all CSS files are imported in main.jsx. Build passes successfully.
  Files: src/components/SVGFilters.jsx, src/styles/colors.css, src/styles/textures.css, src/App.jsx, src/main.jsx
- **Phase 1: Set up Vite React project structure and deploy pipeline** — Verified project setup: Vite+React builds successfully, vercel.json configures build command and SPA rewrites, React Router handles all four pages (Home, About, Experience, Contact), Navigation component links to each page, .env.example documents required environment variables, and all dependencies are in package.json.
  Files: package.json, vite.config.js, vercel.json, .env.example, src/App.jsx, src/main.jsx, src/components/Navigation.jsx, src/components/Navigation.module.css, src/pages/Home.jsx, src/pages/About.jsx, src/pages/Experience.jsx, src/pages/Contact.jsx
- **Phase 3: Build responsive layout system with flexbox/grid for all pages** — Responsive layout system implemented with PageContainer, Section, and Grid components backed by layout.css. CSS custom properties define spacing (--spacing-xs through --spacing-3xl) and breakpoints (--bp-mobile: 480px, --bp-tablet: 768px, --bp-desktop: 1024px). Grid uses auto-fit/minmax for automatic column adjustment. All four pages (Home, About, Experience, Contact) use the layout components. Horizontal overflow prevented globally. Build passes.
  Files: src/styles/layout.css, src/components/layout/PageContainer.jsx, src/components/layout/Section.jsx, src/components/layout/Grid.jsx, src/pages/Home.jsx, src/pages/About.jsx, src/pages/Experience.jsx, src/pages/Contact.jsx, src/main.jsx

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
# Project
A personal portfolio website that showcases a professional's work, skills, and experience to potential employers or clients. It enables developers and designers to present their projects, demonstrate their capabilities, and make a strong first impression in a competitive job market.
Stack: Unknown · Unknown · Unknown · Unknown

# Goal: Comic-Style Portfolio Website
Build a multi-page portfolio website using Vite and React, deployed on Vercel. The site should feature a paper-textured background with black-and-white comic book aesthetic, where blacks are rendered as softer ink tones rather than pure black. Implement four pages (home, about me, experience, contact) with emphasis on layout and visual design over initial content. Apply extremely vivid comic book colors sparingly as accents—primarily through underlined text links and small portions of images. The design should prioritize the paper-and-ink visual metaphor while maintaining a professional portfolio structure.

# Your Task: Project builds locally, deploys to Vercel, and supports multi-page routing

## Description
Initialize a Vite-based React project with proper folder structure, configure Vercel deployment, and establish the foundation for multi-page routing. This phase ensures the build tooling, deployment pipeline, and basic project layout are ready before adding visual design or page content.

## Acceptance Criteria
- Project builds successfully with 'npm run build' and produces optimized dist/ folder
- Local development server starts with 'npm run dev' and supports hot reloading
- All four pages (Home, About, Experience, Contact) are accessible via React Router navigation
- Navigation component appears on all pages with working links to each page
- Project can be deployed to Vercel and is accessible via public URL

## Implementation Notes
- Initialize Vite project with React template and configure vite.config.js with appropriate build settings for Vercel
- Create vercel.json with build command 'vite build' and output directory 'dist'
- Set up React Router (or similar) in src/App.jsx to handle navigation between Home, About, Experience, and Contact pages
- Create Navigation component with links to all four pages, styled with underlines for links
- Add .env.example documenting required environment variables (VITE_CONTACT_FORM_ENDPOINT for serverless function)
- Configure package.json with scripts: dev, build, preview, and ensure all dependencies (react, react-router-dom, vite) are listed

## Completion
Verify your changes work — run relevant tests or checks appropriate for this project.

### Project hygiene
You are scaffolding a new project. Before installing any dependencies:
- Create a `.gitignore` appropriate for the stack (node_modules/, __pycache__/, .venv/, dist/, .env, etc.).
- Include a `README.md` with setup instructions (clone → install → run).

Then create `.codepoet/stories/4bfc8c48-20e8-4345-92e0-401c29ccf03a/done.json` with this exact structure:
```json
{
  "status": "completed",
  "summary": "<brief summary of what you did>",
  "files_changed": ["list", "of", "files"]
}
```
IMPORTANT: The file MUST be at exactly `.codepoet/stories/4bfc8c48-20e8-4345-92e0-401c29ccf03a/done.json`.
Do not create this file until you are fully done.
Do NOT perform any git operations (no git add, commit, or push).
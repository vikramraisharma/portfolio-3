# Project
A personal portfolio website that showcases a professional's work, skills, and experience to potential employers or clients. It enables developers and designers to present their projects, demonstrate their capabilities, and make a strong first impression in a competitive job market.
Stack: Unknown · Unknown · Unknown · Unknown

# Goal: Comic-Style Portfolio Website
Build a multi-page portfolio website using Vite and React, deployed on Vercel. The site should feature a paper-textured background with black-and-white comic book aesthetic, where blacks are rendered as softer ink tones rather than pure black. Implement four pages (home, about me, experience, contact) with emphasis on layout and visual design over initial content. Apply extremely vivid comic book colors sparingly as accents—primarily through underlined text links and small portions of images. The design should prioritize the paper-and-ink visual metaphor while maintaining a professional portfolio structure.

## Done
- Phase 1: Set up Vite React project structure and deploy pipeline — Initialized Vite + React project with React Router, four pages (Home, About, Experience, Contact), a Navigation component with underlined links, vercel.json for Vercel deployment with SPA rewrites, .gitignore, .env.example, and updated README with setup instructions. Build verified with npm run build producing optimized dist/.

# Your Task: SVG filters and CSS textures defined globally and ready for page application

## Description
Build the core visual infrastructure by creating a global SVG filters file for ink and paper effects, establishing CSS-based texture generation, and setting up fallback styles. This phase creates the reusable visual components that will be applied across all pages.

## Acceptance Criteria
- SVG filters are defined once in a global component and accessible to all pages without errors
- Paper texture is visible as a subtle background pattern across all pages
- Softer black color (#2a2a2a) is used instead of pure black (#000000) throughout the site
- CSS fallback styles (box-shadow, text-shadow) render correctly when SVG filters are disabled
- All color variables (ink-black, paper-white, accent colors) are defined and usable in component styles

## Implementation Notes
- Create SVGFilters.jsx component that renders a single <svg> with <defs> containing all filter definitions (ink blur, paper noise, grain effects) and export as reusable component
- Define SVG filters: feTurbulence for paper noise (baseFrequency 0.02-0.05, octaves 4), feGaussianBlur for ink softness (stdDeviation 1-2), feDisplacementMap for texture variation
- Create textures.css with CSS custom properties for paper background using radial-gradient and repeating patterns, avoiding image files
- Define softer black color palette in colors.css using CSS variables: --ink-black: #2a2a2a, --paper-white: #f5f3f0, --accent-red: #ff1744 (used sparingly)
- Add CSS fallback styles using box-shadow, text-shadow, and opacity to approximate ink/paper effects when SVG filters fail
- Import SVGFilters component in src/App.jsx so filters are available globally on all pages

## Completion
Verify your changes work — run relevant tests or checks appropriate for this project.

### Project hygiene
You are scaffolding a new project. Before installing any dependencies:
- Create a `.gitignore` appropriate for the stack (node_modules/, __pycache__/, .venv/, dist/, .env, etc.).
- Include a `README.md` with setup instructions (clone → install → run).

Then create `.codepoet/stories/17593900-ca93-42af-ae64-7f5ccbd07c94/done.json` with this exact structure:
```json
{
  "status": "completed",
  "summary": "<brief summary of what you did>",
  "files_changed": ["list", "of", "files"]
}
```
IMPORTANT: The file MUST be at exactly `.codepoet/stories/17593900-ca93-42af-ae64-7f5ccbd07c94/done.json`.
Do not create this file until you are fully done.
Do NOT perform any git operations (no git add, commit, or push).
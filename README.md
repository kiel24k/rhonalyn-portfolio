# Rhonalyn Sales — Portfolio

A responsive single-page portfolio built with **React (Vite)**, **Tailwind CSS v4**, and **shadcn-style UI components**. Frontend only — no backend required.

Includes a light/dark mode switch (moon/sun button in the navbar). It follows the visitor's system theme until they pick one, then remembers the choice.

## Getting started

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
```

The deployable static site is generated in `dist/` — you can host it for free on Netlify, Vercel, or GitHub Pages.

## Editing the content

All text content (summary, work experience, skills, awards, references, contact details) lives in one file:

```
src/data/resume.js
```

Edit that file to update the site — no need to touch the components.

To change the profile photo, replace `src/assets/profile.jpg` with a new image (keep the same filename).

## Project structure

```
src/
├── assets/profile.jpg      # profile photo
├── data/resume.js          # all portfolio content
├── components/
│   ├── ui/                 # shadcn-style primitives (button, card, badge, separator)
│   ├── Navbar.jsx          # sticky nav with mobile menu
│   ├── ThemeToggle.jsx     # light/dark mode switch
│   ├── Hero.jsx            # intro + photo
│   ├── About.jsx           # summary + highlights
│   ├── Experience.jsx      # work history timeline
│   ├── Skills.jsx          # skill groups + awards
│   ├── References.jsx      # character references
│   ├── Contact.jsx         # contact cards + email CTA
│   └── Footer.jsx
├── App.jsx                 # page layout
└── index.css               # Tailwind v4 theme (colors, fonts, radius)
```

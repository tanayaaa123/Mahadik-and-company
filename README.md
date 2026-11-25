# Mahadik & Company website

React + Vite + Tailwind CSS + Framer Motion + SVG. Black and white theme. Multi-page via a tiny hash router (src/lib/router.js): #/, #/startup-founder, #/founder-stories, #/founder-stories/001-casaverro, #/blind-spots, #/blind-spots/001-vantara-creamery, #/contact.

## Run it

```bash
npm install
npm run dev        # local preview at http://localhost:5173
npm run build      # production build in /dist
npm run preview    # serve the production build locally
```

Deploy the `dist` folder to any static host (Netlify, Vercel, Cloudflare Pages, S3).

## Where things are

```
src/
  data/content.js        all copy: situations, roadmap questions, nav, contact, stories
  sections/              Hero, Situations, Roadmap, Stories, BlindSpots
  components/            Nav, Footer, Logo, OrbitGraphic (the SVG signature), StageList, ui/*
  hooks/useJourney.js    stage cycling for the orbit
  index.css              colour tokens (black, white, grey themes) and the slow ribbon rotation
public/favicon.svg
```




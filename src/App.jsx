import { useState } from 'react'
import { MotionConfig } from 'framer-motion'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import Situations from './sections/Situations'
import Roadmap from './sections/Roadmap'
import RoadmapPage from './pages/RoadmapPage'
import { StoriesIndex, StoryPage } from './pages/StoriesPages'
import { BlindSpotsIndex, BlindSpotPage } from './pages/BlindSpotPages'
import ContactPage from './pages/ContactPage'
import { QUESTIONS } from './data/content'
import { useRoute } from './lib/router'
import { Wrap } from './pages/kit'

const TITLES = {
  '/': 'Mahadik & Company — Strategy & Management Consulting',
  '/startup-founder': 'The Founder’s Roadmap — Mahadik & Company',
  '/founder-stories': 'Founder Stories — Mahadik & Company',
  '/founder-stories/001-casaverro': 'Founder Story No. 001: CASAVÉRRO — Mahadik & Company',
  '/blind-spots': 'What are you missing? — Mahadik & Company',
  '/blind-spots/001-vantara-creamery': 'Blind Spot No. 001: Vantara Creamery — Mahadik & Company',
  '/contact': 'Contact — Mahadik & Company',
}

export default function App() {
  const route = useRoute()
  const [path, qs] = route.split('?')
  const [done, setDone] = useState(() => Array(QUESTIONS.length).fill(false))
  document.title = TITLES[path] || TITLES['/']
  let page
  switch (path.replace(/\/$/, '') || '/') {
    case '/startup-founder': page = <RoadmapPage />; break
    case '/founder-stories': page = <StoriesIndex />; break
    case '/founder-stories/001-casaverro': page = <StoryPage />; break
    case '/blind-spots': page = <BlindSpotsIndex />; break
    case '/blind-spots/001-vantara-creamery': page = <BlindSpotPage />; break
    case '/contact': page = <ContactPage key={qs} q={new URLSearchParams(qs || '')} />; break
    default: page = (
      <>
        <Hero />
        <Situations />
        <Roadmap done={done} setDone={setDone} />
        <Wrap className="pb-16 text-[15px] text-ink/70">These are eight of 56. <a className="font-semibold text-ink underline underline-offset-4" href="#/startup-founder">See the full roadmap</a></Wrap>
      </>
    )
  }
  return (
    <MotionConfig reducedMotion="user">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:bg-white focus:px-4 focus:py-2 focus:text-black">Skip to content</a>
      <Nav />
      <main id="main" key={path}>{page}</main>
      <Footer />
    </MotionConfig>
  )
}

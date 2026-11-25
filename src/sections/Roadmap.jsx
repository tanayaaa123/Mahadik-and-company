import { motion } from 'framer-motion'
import Eyebrow from '../components/ui/Eyebrow'
import Head from '../components/ui/Head'
import Fade from '../components/ui/Fade'
import Btn from '../components/ui/Btn'
import Ring from '../components/ui/Ring'
import { PROGRESS_MESSAGES, QUESTIONS } from '../data/content'
import { EASE } from '../lib/motion'

export default function Roadmap({ done, setDone }) {
  const n = done.filter(Boolean).length
  const toggle = (i) => setDone(done.map((v, j) => (j === i ? !v : v)))
  const msg = PROGRESS_MESSAGES[n === 0 ? 0 : n < 3 ? 1 : n < 5 ? 2 : n < 8 ? 3 : 4]
  return (
    <section id="roadmap" data-th="dark" className="bg-paper py-20 text-ink md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-6 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-4">
          <Eyebrow>The Founder’s Roadmap</Eyebrow>
          <Head text="Eight questions every founder has to answer." className="font-serif text-[clamp(2.5rem,3.7vw,3.4rem)] leading-[1.02] tracking-[-.015em]" />
          <Fade d={0.15}>
            <p className="mt-5 max-w-sm text-[17px] leading-relaxed text-ink/70">Tick the ones you can answer with confidence today. Be honest, nobody is watching.</p>
            <div className="mt-9 flex items-center gap-6">
              <div className="shrink-0"><Ring n={n} size={132} /></div>
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[.22em] text-mute">Your progress</p>
                <p className="mt-2 max-w-[13rem] text-[14.5px] leading-snug text-ink/70" aria-live="polite">{msg}</p>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
              <Btn href="#/contact">Talk through the rest</Btn>
              <span className="text-sm text-mute">These are eight of 56.</span>
            </div>
          </Fade>
        </div>

        <div className="lg:col-span-8">
          <div className="grid gap-3 sm:grid-cols-2">
            {QUESTIONS.map((q, i) => {
              const on = done[i]
              return (
                <Fade key={q.label} d={(i % 2) * 0.08}>
                  <motion.button
                    type="button" role="checkbox" aria-checked={on} data-on={on ? 'true' : 'false'} onClick={() => toggle(i)} whileTap={{ scale: 0.985 }}
                    className="q flex h-full w-full gap-4 rounded-[3px] border border-line/20 bg-paper p-5 text-left text-ink transition-colors duration-300 hover:border-line/60 md:p-6"
                  >
                    <span className={'mt-0.5 grid size-6 shrink-0 place-items-center rounded-full border transition-colors duration-300 ' + (on ? 'border-ink bg-ink' : 'border-line/50')}>
                      <motion.svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="rgb(var(--paper))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <motion.path d="M2 6.5l2.6 2.5L10 3" initial={false} animate={{ pathLength: on ? 1 : 0, opacity: on ? 1 : 0 }} transition={{ duration: 0.35, ease: EASE }} />
                      </motion.svg>
                    </span>
                    <span>
                      <span className="mb-1.5 block text-[11px] font-medium uppercase tracking-[.18em] text-mute">0{i + 1} · {q.label}</span>
                      <span className="block font-serif text-[1.4rem] leading-snug sm:text-[1.5rem]">{q.text}</span>
                    </span>
                  </motion.button>
                </Fade>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

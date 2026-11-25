import { useState } from 'react'
import { ROAD, NOTE_RM } from '../data/content'
import { Top, Cta, Wrap, Tick } from './kit'

export default function RoadmapPage() {
  const [on, setOn] = useState({})
  const total = ROAD.reduce((a, s) => a + s[3].length, 0)
  const count = (si) => ROAD[si][3].filter((_, qi) => on[si + '-' + qi]).length
  const n = Object.values(on).filter(Boolean).length
  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })

  return (
    <>
      <Top eyebrow="For startup founders" title="The Founder’s Roadmap." lead="Every question a founder should be able to answer, now or eventually. Tick the ones you can answer with confidence today, and see how much is still open.">
        <p className="mt-8 font-serif text-2xl">{ROAD.length} stages <span className="mx-3 text-ink/30">|</span> {total} questions</p>
      </Top>
      <section className="py-14 md:py-20">
        <Wrap className="grid gap-12 lg:grid-cols-12">
          <aside className="lg:col-span-3">
            <div className="lg:sticky lg:top-28">
              <ol className="hidden gap-1 text-[15px] lg:grid">
                {ROAD.map((s, i) => (
                  <li key={s[1]}>
                    <button type="button" onClick={() => go(s[1])} className="flex w-full items-center justify-between gap-3 rounded-[3px] px-3 py-2 text-left transition-colors hover:bg-soft">
                      <span><span className="mr-3 text-mute">{i + 1}</span>{s[0]}</span>
                      <span className="text-xs tabular-nums text-mute">{count(i)}/{s[3].length}</span>
                    </button>
                  </li>
                ))}
              </ol>
              <div className="mt-8 border-t border-line/15 pt-6">
                <div className="h-1 bg-line/15"><div className="h-full bg-ink transition-[width] duration-500" style={{ width: (n / total) * 100 + '%' }} /></div>
                <p className="mt-3 font-serif text-4xl tabular-nums">{Math.round((n / total) * 100)}%</p>
                <p className="text-sm text-mute">{n} of {total} clear</p>
                <a href={'#/contact' + NOTE_RM} className="mt-5 inline-block text-[15px] font-semibold underline underline-offset-[6px]">Talk through the rest</a>
              </div>
            </div>
          </aside>
          <div className="grid gap-16 lg:col-span-9">
            {ROAD.map((s, si) => (
              <section key={s[1]} id={s[1]} className="scroll-mt-28">
                <p className="text-sm text-mute">Stage {si + 1} <span className="mx-1">·</span> {count(si)} of {s[3].length} clear</p>
                <h2 className="mt-2 font-serif text-[clamp(2.2rem,3.6vw,3.2rem)] leading-none">{s[0]}</h2>
                <p className="mt-4 max-w-xl text-[17px] text-ink/70">{s[2]}</p>
                <div className="mt-8 border-b border-line/15">
                  {s[3].map(([q, tags], qi) => {
                    const k = si + '-' + qi
                    return (
                      <Tick key={k} on={on[k]} onChange={() => setOn({ ...on, [k]: !on[k] })}>
                        <span className="block text-[17px] leading-snug">{q}</span>
                        <span className="mt-2 flex flex-wrap gap-2">{tags.split('|').map((t) => <span key={t} className="rounded-full border border-line/20 px-3 py-0.5 text-[12.5px] text-mute">{t}</span>)}</span>
                      </Tick>
                    )
                  })}
                </div>
              </section>
            ))}
          </div>
        </Wrap>
      </section>
      <Cta title="Not sure about some of these? That’s what we’re here for." text="Tick what you can answer with confidence today, and what is left is where we can help." label="Talk through your situation" href={'#/contact' + NOTE_RM} />
    </>
  )
}

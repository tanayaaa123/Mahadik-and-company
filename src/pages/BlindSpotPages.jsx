import { useState } from 'react'
import { BS_CHECK, BS_RUN } from '../data/content'
import { Top, Cta, Trio, Wrap, Tick } from './kit'
import Eyebrow from '../components/ui/Eyebrow'

const FIX = '?situation=other&note=I+think+something+on+your+site+needs+correcting%3A'
const Q1 = 'Who checks that what you say matches what you show?'

export function BlindSpotsIndex() {
  return (
    <>
      <Top eyebrow="Blind spots" title="What are you missing?" lead="Every business has blind spots, including the biggest. We study the visible ones, so you can find yours before your customers do.">
        <p className="mt-6 font-serif text-2xl italic">Find yours before your customers do.</p>
      </Top>
      <section className="py-16 md:py-24">
        <Wrap className="grid gap-10 md:grid-cols-12">
          <a href="#/blind-spots/001-vantara-creamery" className="group md:col-span-7">
            <p className="text-sm text-mute">Latest · Blind Spot No. 001 · Vantara Creamery</p>
            <h2 className="mt-4 font-serif text-[clamp(2.2rem,4vw,3.6rem)] leading-[1.02] underline-offset-8 group-hover:underline">A jamun sorbet, shown with a blackberry.</h2>
            <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-ink/70">At around ₹750 a scoop, customers are paying for care in the details. One small mismatch raises a bigger question: where does a mistake like this get caught?</p>
            <p className="mt-6 font-semibold">Read Blind Spot No. 001</p>
          </a>
          <div data-th="dark" className="bg-paper p-8 text-ink md:col-span-5">
            <p className="text-sm text-mute">The question for your business</p>
            <p className="mt-4 font-serif text-[2rem] leading-tight">{Q1}</p>
          </div>
        </Wrap>
      </section>
      <Trio title="How we choose what to look at" items={[
        ['Public and checkable', 'We use only what anyone can see, with dated evidence. No inside information, no guesses about motives.'],
        ['About systems, not people', 'A miss points to a gap in how a business works. We ask where the gap is, and never who is to blame.'],
        ['Useful to a founder', 'Every piece ends with a question and a short checklist you can run on your own business this week.'],
      ]} />
      <Wrap className="py-10"><p className="max-w-2xl text-[15px] text-ink/70">Got something wrong? Tell us and we’ll correct it and say so. The same goes for our own site: if you find an error here, we want to know. <a className="font-semibold underline" href={'#/contact' + FIX}>Tell us</a></p></Wrap>
      <Cta title="Want us to look at your business before your customers do?" text="Tell us where you are, and we’ll tell you what we’d check first." label="Talk through your situation" href="#/contact" />
    </>
  )
}

const Num = ({ n, h, id }) => <div id={id} className="flex items-baseline gap-4 scroll-mt-28"><span className="font-serif text-3xl text-mute">{n}</span><h2 className="font-serif text-[2.2rem] leading-tight">{h}</h2></div>
const Fill = () => <p className="mt-5 border border-dashed border-line/30 p-5 text-sm text-mute">To fill in</p>
const P = ({ children }) => <p className="mt-5 max-w-2xl font-serif text-[1.3rem] leading-[1.6] text-ink/85">{children}</p>

export function BlindSpotPage() {
  const [on, setOn] = useState({})
  const n = Object.values(on).filter(Boolean).length
  const toc = [['what-we-saw', 'What we saw'], ['why-it-matters', 'Why it matters at this price'], ['where-it-broke', 'Where it may have broken'], ['what-good-looks-like', 'What good looks like'], ['run-this', 'Run this on your own business']]
  return (
    <>
      <section className="pb-12 pt-32 md:pt-44">
        <Wrap>
          <a href="#/blind-spots" className="text-[15px] underline underline-offset-4">What are you missing?</a>
          <Eyebrow className="mt-8 text-mute">Blind Spot No. 001 · Vantara Creamery</Eyebrow>
          <h1 className="max-w-4xl font-serif text-[clamp(2.2rem,5.6vw,4.8rem)] leading-[1]">A jamun sorbet, shown with a blackberry.</h1>
          <p className="mt-6 max-w-2xl font-serif text-[1.5rem] leading-snug text-ink/75">What a small mismatch on a premium brand’s website tells us about where quality is protected, and where it isn’t.</p>
          <p className="mt-6 text-sm text-mute">By Mahadik & Company · Observed on [date] · [Month Year]</p>
        </Wrap>
      </section>
      <Wrap className="grid gap-12 pb-20 lg:grid-cols-12">
        <article className="grid gap-14 lg:col-span-8">
          <section><Num n="1" id="what-we-saw" h="What we saw" /><P>Vantara Creamery’s website lists a jamun sorbet among its flavours. The image beside it shows a blackberry. They are different fruits.</P><P>As of [date], the page was still live in this form.</P><p className="mt-5 text-sm text-mute">Dated screenshot of the flavour section, with the date observed and the page address</p><Fill /></section>
          <section><Num n="2" id="why-it-matters" h="Why it matters at this price" /><P>Vantara Creamery launched in Mumbai in May 2026, with a scoop reported at around ₹750. A price like that is a promise: that someone has cared about every detail on the customer’s behalf.</P><P>Customers rarely check a single flavour page. They sense whether the whole brand feels precise. One mismatch is small, but it is the kind of thing a premium brand cannot afford to leave visible.</P></section>
          <section><Num n="3" id="where-it-broke" h="Where it may have broken" /><P>We can see what was published, not how it was made. So these are the four places where a mistake like this is normally caught, and where one of them may have been missing.</P>
            <ul className="mt-6 border-b border-line/15">{BS_CHECK.map(([l, h, q]) => <li key={l} className="flex gap-5 border-t border-line/15 py-5"><span className="font-serif text-2xl text-mute">{l}</span><div><h3 className="font-serif text-2xl">{h}</h3><p className="mt-1 text-[16px] text-ink/70">{q}</p></div></li>)}</ul></section>
          <section><Num n="4" id="what-good-looks-like" h="What good looks like" /><P>From the case paper: a short example of a brand that keeps its words and images aligned, and the practice behind it.</P><Fill /></section>
          <section><Num n="5" id="run-this" h="Run this on your own business" /><P>Five questions. Answer them for your website, your menu, your packaging, or whatever your customers see first.</P>
            <p className="mt-6 font-serif text-5xl tabular-nums">{n}<span className="text-2xl text-mute">/5</span></p><p className="mb-4 text-sm text-mute">Tick the ones that are already true for you.</p>
            <div className="border-b border-line/15">{BS_RUN.map((q, i) => <Tick key={q} on={on[i]} onChange={() => setOn({ ...on, [i]: !on[i] })}><span className="mr-3 text-mute">0{i + 1}</span>{q}</Tick>)}</div></section>
          <section data-th="dark" className="bg-paper p-8 text-ink"><p className="text-sm text-mute">The question to leave you with</p><p className="mt-3 font-serif text-[2.2rem] leading-tight">If a mismatch this visible can reach the public, what is reaching yours?</p></section>
          <p className="text-sm text-mute">Reported price: Business Today, 20 May 2026. If we have got something wrong, tell us and we will correct it and say so.</p>
        </article>
        <aside className="lg:col-span-4"><nav aria-label="In this piece" className="lg:sticky lg:top-28"><p className="mb-3 text-sm text-mute">In this piece</p><ol className="grid gap-1">{toc.map(([id, h], i) => <li key={id}><button type="button" onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })} className="w-full rounded-[3px] px-3 py-2 text-left text-[15px] hover:bg-soft"><span className="mr-3 text-mute">{i + 1}</span>{h}</button></li>)}</ol>
          <div className="mt-8 border-t border-line/15 pt-6"><p className="text-sm text-mute">The question for your business</p><p className="mt-2 font-serif text-2xl leading-snug">{Q1}</p></div></nav></aside>
      </Wrap>
      <Cta title="Want us to look at your business before your customers do?" text="Tell us where you are, and we’ll tell you what we’d check first." label="Talk through your situation" href="#/contact" />
    </>
  )
}

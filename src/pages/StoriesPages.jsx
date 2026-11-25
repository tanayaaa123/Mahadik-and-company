import { NOTE_STORY } from '../data/content'
import { Top, Cta, Trio, Wrap } from './kit'
import Fade from '../components/ui/Fade'
import Eyebrow from '../components/ui/Eyebrow'

const IMG = 'https://www.mahadikandcompany.com/founder-stories/arnav-pagedar.jpg'
const ALT = 'Arnav Mangesh Pagedar, founder of CASAVÉRRO, in a tailored three-piece suit'
const DISC = 'Disclosure: Mahadik & Company is advising CASAVÉRRO on brand strategy.'

export function StoriesIndex() {
  return (
    <>
      <Top eyebrow="Founder stories" title="The people behind the businesses." lead="Why they started, what they saw, what they decided, and what it cost them. Written by Mahadik & Company, and open to any founder with a story worth telling.">
        <ol className="mt-10 flex flex-wrap gap-x-8 gap-y-2 text-[15px] text-ink/70">
          <li className="w-full text-mute">Every story follows</li>
          {['Why they started', 'What they saw', 'What they decided', 'What it cost them'].map((t, i) => <li key={t}><span className="mr-2 font-serif text-lg text-ink">{i + 1}</span>{t}</li>)}
        </ol>
      </Top>
      <section className="py-16 md:py-24">
        <Wrap>
          <p className="mb-6 text-sm text-mute">Latest</p>
          <a href="#/founder-stories/001-casaverro" className="group grid overflow-hidden border border-line/15 md:grid-cols-2">
            <div className="p-7 md:p-12">
              <p className="text-sm text-mute">Story No. 001 · CASAVÉRRO</p>
              <h2 className="mt-4 font-serif text-[clamp(2rem,3.4vw,3rem)] leading-[1.05] underline-offset-8 group-hover:underline">Building a luxury brand, one decision at a time.</h2>
              <p className="mt-5 text-[17px] leading-relaxed text-ink/70">Arnav Mangesh Pagedar is building a fashion brand of his own. This is the story of why, the decisions behind it, and what comes next.</p>
              <p className="mt-5 text-sm text-mute">{DISC}</p>
              <p className="mt-8 font-semibold">Read Story No. 001</p>
            </div>
            <figure className="relative min-h-[360px] bg-soft">
              <img src={IMG} alt={ALT} className="absolute inset-0 size-full object-cover grayscale transition duration-700 group-hover:grayscale-0" />
              <figcaption className="absolute inset-x-0 bottom-0 bg-black/60 p-4 text-sm text-white">Arnav Mangesh Pagedar · Owner, CASAVÉRRO and LEGACY7.ENT</figcaption>
            </figure>
          </a>
        </Wrap>
      </section>
      <Trio title="How we tell these stories" items={[
        ['A story, not an interview', 'We spend time with the founder, then write it as a narrative: a real moment, a real tension, a real decision.'],
        ['Decisions, not highlights', 'What they chose, what they gave up, and what they would do differently. The parts most profiles leave out.'],
        ['Told with consent', 'Every founder reads and approves their story before it is published, and can ask us to change or remove it.'],
      ]} />
      <Cta title="Building something worth writing about?" text="We feature founders whether or not they work with us. Tell us what you’re building and why." label="Share your story" href={'#/contact' + NOTE_STORY} />
    </>
  )
}

const SECTIONS = [
  ['the-moment', 'The moment', ['The number was ₹1.45 lakh. That was how much Arnav Mangesh Pagedar had lost through LEGACY7.ENT, the event management venture he started in Pune to create memorable experiences and build something of his own.', 'For a business that young, a loss like that is often where the story ends. Arnav chose not to let it define him. He treated it as a lesson, made better decisions, kept working, and within a few months had recovered the entire amount.']],
  ['what-he-is-trying-to-build', 'What he is trying to build', ['Alongside LEGACY7.ENT, Arnav is building CASAVÉRRO, a clothing and fashion brand meant to stand for quality, class, individuality and timeless style.', 'The hard part is the ambition itself. He is not interested in simply starting a business. He wants to build brands with their own identity, ones that can grow beyond boundaries. In fashion, identity cannot be bought; it has to be earned, one detail and one customer at a time.']],
  ['how-he-decides', 'How he decides', ['The first decision was the path itself. Rather than follow an ordinary route, Arnav chose to create his own opportunities and establish his own identity in business.', 'The second came after the loss: to stay in, rather than walk away, and to recover through planning and financial discipline rather than luck.', 'The third is about people. He deliberately surrounds himself with those who have goals, ideas and the willingness to grow, because he believes the company you keep shapes your thinking, your decisions and your ambitions. He enjoys making money, but he weighs relationships just as heavily.'], '“Connections are stronger than money.”'],
  ['what-he-would-do-differently', 'What he would do differently', ['The loss at LEGACY7.ENT left Arnav with four lessons he now builds on: financial responsibility, patience, planning, and never giving up on a goal simply because things do not go as expected.', 'They are the lessons most founders learn the expensive way. He learned them early, and paid for them in full.']],
  ['where-it-stands', 'Where it stands', ['Today Arnav runs LEGACY7.ENT and is building CASAVÉRRO. He is clear that there is still a long way to go, and he does not expect success to happen overnight.', 'His ambition is to build something of his own that people recognise, respect and remember. The question he has not answered yet is the one every brand-builder faces: what will make people remember CASAVÉRRO?']],
]
const jump = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

export function StoryPage() {
  return (
    <>
      <section className="pb-12 pt-32 md:pt-44">
        <Wrap>
          <a href="#/founder-stories" className="text-[15px] underline underline-offset-4">Founder Stories</a>
          <Eyebrow className="mt-8 text-mute">Founder Story No. 001 · CASAVÉRRO</Eyebrow>
          <h1 className="max-w-4xl font-serif text-[clamp(2.2rem,5.6vw,4.8rem)] leading-[1]">Building a luxury brand, one decision at a time.</h1>
          <p className="mt-6 max-w-2xl font-serif text-[1.5rem] leading-snug text-ink/75">A ₹1.45 lakh loss could have ended his first venture. Instead it became the lesson he is now building a brand on.</p>
          <p className="mt-8 text-[15px]"><b className="font-semibold">Arnav Mangesh Pagedar</b> · Owner, CASAVÉRRO and LEGACY7.ENT · Pune, Maharashtra</p>
          <p className="text-sm text-mute">Written by Mahadik & Company · November 2026</p>
          <figure className="mt-10"><img src={IMG} alt={ALT} className="max-h-[640px] w-full object-cover object-top" /><figcaption className="mt-3 text-sm text-mute">Arnav Mangesh Pagedar · CASAVÉRRO</figcaption></figure>
        </Wrap>
      </section>
      <Wrap className="grid gap-12 pb-20 lg:grid-cols-12">
        <article className="lg:col-span-8">
          {SECTIONS.map(([id, h, ps, quote]) => (
            <section key={id} id={id} className="scroll-mt-28 pb-12">
              <h2 className="font-serif text-[2.2rem] leading-tight">{h}</h2>
              {ps.map((p) => <p key={p.slice(0, 20)} className="mt-5 max-w-2xl font-serif text-[1.3rem] leading-[1.6] text-ink/85">{p}</p>)}
              {quote && <blockquote className="my-8 border-l-2 border-ink pl-6 font-serif text-[1.8rem] italic leading-snug">{quote}<footer className="mt-2 text-base not-italic text-mute">— Arnav Mangesh Pagedar</footer></blockquote>}
            </section>
          ))}
          <p className="text-sm text-mute">In his words</p>
          <blockquote className="mt-3 border-l-2 border-ink pl-6 font-serif text-[1.8rem] italic leading-snug">“Money creates comfort, but connections create opportunities, experiences create wisdom, and consistency creates success.”</blockquote>
          <p className="mt-10 text-sm text-mute">{DISC} This story was read and approved by the founder before publication.</p>
        </article>
        <aside className="lg:col-span-4">
          <nav aria-label="In this story" className="lg:sticky lg:top-28">
            <p className="mb-3 text-sm text-mute">In this story</p>
            <ol className="grid gap-1">{SECTIONS.map(([id, h], i) => <li key={id}><button type="button" onClick={() => jump(id)} className="w-full rounded-[3px] px-3 py-2 text-left text-[15px] hover:bg-soft"><span className="mr-3 text-mute">{i + 1}</span>{h}</button></li>)}</ol>
          </nav>
        </aside>
      </Wrap>
      <Cta title="Every business has a story like this. Tell us yours." text="We feature founders whether or not they work with us." label="Share your story" href={'#/contact' + NOTE_STORY} />
    </>
  )
}

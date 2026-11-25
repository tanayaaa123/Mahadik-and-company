import Words from '../components/ui/Words'
import Fade from '../components/ui/Fade'
import Eyebrow from '../components/ui/Eyebrow'
import Btn from '../components/ui/Btn'

export const Wrap = ({ children, className = '' }) => <div className={'mx-auto max-w-6xl px-5 sm:px-6 ' + className}>{children}</div>

export function Top({ eyebrow, title, lead, children }) {
  return (
    <section className="border-b border-line/10 pb-14 pt-32 md:pb-20 md:pt-44">
      <Wrap>
        <Eyebrow className="text-mute">{eyebrow}</Eyebrow>
        <Words as="h1" load text={title} className="max-w-4xl font-serif text-[clamp(2.25rem,6vw,5.2rem)] leading-[1] tracking-[-.02em]" />
        {lead && <Fade d={0.2}><p className="mt-6 max-w-2xl text-[18px] leading-relaxed text-ink/70">{lead}</p></Fade>}
        {children}
      </Wrap>
    </section>
  )
}

export function Cta({ title, text, label, href }) {
  return (
    <section data-th="dark" className="bg-paper py-20 text-ink md:py-28">
      <Wrap className="grid gap-8 md:grid-cols-12 md:items-end">
        <div className="md:col-span-8">
          <Fade><h2 className="font-serif text-[clamp(2rem,3.6vw,3.2rem)] leading-[1.05]">{title}</h2></Fade>
          {text && <p className="mt-4 max-w-xl text-[17px] text-ink/70">{text}</p>}
        </div>
        <div className="md:col-span-4 md:text-right"><Btn href={href}>{label}</Btn></div>
      </Wrap>
    </section>
  )
}

/** Three-up list of principles: heading + sentence. */
export function Trio({ title, items }) {
  return (
    <section data-th="gray" className="bg-paper py-16 text-ink md:py-24">
      <Wrap>
        <h2 className="font-serif text-[clamp(1.8rem,3vw,2.6rem)]">{title}</h2>
        <div className="mt-10 grid gap-px bg-line/15 md:grid-cols-3">
          {items.map(([h, p]) => <div key={h} className="bg-paper p-7"><h3 className="font-serif text-2xl">{h}</h3><p className="mt-3 text-[16px] leading-relaxed text-ink/70">{p}</p></div>)}
        </div>
      </Wrap>
    </section>
  )
}

export const Tick = ({ on, onChange, children, className = '' }) => (
  <label className={'flex cursor-pointer items-start gap-4 border-t border-line/15 py-5 transition-colors hover:bg-soft ' + className}>
    <input type="checkbox" checked={!!on} onChange={onChange} className="mt-1.5 size-5 shrink-0 accent-black" />
    <span className={on ? 'text-ink/55' : ''}>{children}</span>
  </label>
)

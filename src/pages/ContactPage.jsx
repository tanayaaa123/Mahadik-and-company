import { useState } from 'react'
import { MapPin, MessageCircle, Phone } from 'lucide-react'
import { CONTACT, SITUATIONS, SITUATION_IDS } from '../data/content'
import { Top, Wrap } from './kit'

const STEPS = [['We read your message', 'Your situation, in your words.'], ['We reply', 'Within 1–2 working days, to set up a first conversation.'], ['We talk it through', 'You leave knowing what to do first, whether or not we end up working together.']]
const inp = 'mt-2 w-full rounded-[3px] border border-line/25 bg-transparent px-4 py-3 text-[16px] outline-none transition-colors focus:border-ink'

export default function ContactPage({ q }) {
  const [sent, setSent] = useState(false)
  const [f, setF] = useState({ name: '', phone: '', situation: q.get('situation') || '', note: q.get('note') || '' })
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value })
  const label = (id) => (id === 'other' ? 'Something else' : SITUATIONS[SITUATION_IDS.indexOf(id)]?.title || id)
  const submit = (e) => {
    e.preventDefault()
    const text = `Hello, I’m ${f.name}${f.phone ? ' (' + f.phone + ')' : ''}.${f.situation ? ' Situation: ' + label(f.situation) + '.' : ''}\n\n${f.note}`
    window.open('https://wa.me/919890861210?text=' + encodeURIComponent(text), '_blank', 'noopener')
    setSent(true)
  }
  return (
    <>
      <Top eyebrow="Contact" title="Tell us where you are, and we’ll tell you what we’d do next." lead="No preparation needed. Tell us what you’re facing in your own words, and we’ll come back with an honest view of what to do first." />
      <section className="py-16 md:py-24">
        <Wrap className="grid gap-14 lg:grid-cols-12">
          <form onSubmit={submit} className="lg:col-span-7">
            {sent ? <p className="font-serif text-3xl leading-snug">Thank you. We’ve opened WhatsApp with your message. We reply within 1–2 working days.</p> : (
              <div className="grid gap-6">
                <label className="block text-[15px]">Your name<input required className={inp} value={f.name} onChange={set('name')} autoComplete="name" /></label>
                <label className="block text-[15px]">Phone or email<input className={inp} value={f.phone} onChange={set('phone')} /></label>
                <label className="block text-[15px]">Your situation
                  <select className={inp} value={f.situation} onChange={set('situation')}>
                    <option value="">Choose one</option>
                    {SITUATION_IDS.map((id) => <option key={id} value={id}>{label(id)}</option>)}
                    <option value="other">Something else</option>
                  </select></label>
                <label className="block text-[15px]">What are you facing?<textarea required rows={6} className={inp} value={f.note} onChange={set('note')} /></label>
                <button type="submit" className="w-fit rounded-[3px] bg-ink px-8 py-3.5 text-[15px] font-medium text-paper transition-colors hover:bg-mute">Send</button>
              </div>
            )}
          </form>
          <div className="lg:col-span-5">
            <h2 className="font-serif text-3xl">What happens next</h2>
            <ol className="mt-6 grid gap-6">{STEPS.map(([h, p], i) => <li key={h} className="flex gap-5 border-t border-line/15 pt-5"><span className="font-serif text-3xl text-mute">{i + 1}</span><div><h3 className="font-serif text-2xl">{h}</h3><p className="mt-1 text-ink/70">{p}</p></div></li>)}</ol>
            <h2 className="mt-12 font-serif text-3xl">Prefer to write directly?</h2>
            <ul className="mt-5 grid gap-3 text-[16px]">
              <li className="flex items-center gap-3"><Phone className="size-4 text-mute" /><a className="hover:text-mute" href={CONTACT.tel}>{CONTACT.phone}</a></li>
              <li className="flex items-center gap-3"><MessageCircle className="size-4 text-mute" /><a className="hover:text-mute" href="https://wa.me/919890861210" target="_blank" rel="noreferrer">WhatsApp</a></li>
              <li className="flex items-start gap-3"><MapPin className="mt-1 size-4 shrink-0 text-mute" />{CONTACT.location}</li>
            </ul>
          </div>
        </Wrap>
      </section>
    </>
  )
}

import { Instagram, Linkedin, MapPin, Phone } from 'lucide-react'
import Logo from './Logo'
import Head from './ui/Head'
import Fade from './ui/Fade'
import Btn from './ui/Btn'
import { CONTACT, NAV, SOCIAL } from '../data/content'

export default function Footer() {
  const socials = [
    { label: 'LinkedIn', href: SOCIAL.linkedin, Icon: Linkedin },
    { label: 'Instagram', href: SOCIAL.instagram, Icon: Instagram },
  ].filter((s) => s.href)

  return (
    <footer id="contact" data-th="dark" className="border-t border-line/10 bg-paper pb-10 pt-20 text-ink md:pt-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <Logo size="h-10" />
            <p className="mt-5 max-w-xs text-[15px] text-ink/65">Strategy & Management Consulting</p>
            <p className="mt-8 flex items-center gap-3 text-[15px]"><Phone className="size-4 text-mute" /><a href={CONTACT.tel} className="hover:text-mute">{CONTACT.phone}</a></p>
            <p className="mt-3 flex items-start gap-3 text-[15px]"><MapPin className="mt-1 size-4 shrink-0 text-mute" />{CONTACT.location}</p>
          </div>
          <div className="md:col-span-3 md:col-start-6">
            <h5 className="mb-4 text-[11.5px] font-medium uppercase tracking-[.2em] text-mute">Explore</h5>
            <ul className="grid gap-2.5 text-[15px]">
              <li><a className="hover:text-mute" href="#/">Home</a></li>
              {NAV.map((n) => <li key={n.id}><a className="hover:text-mute" href={n.to}>{n.foot || n.label}</a></li>)}
            </ul>
          </div>
          <div className="md:col-span-4">
            <Head text="Transforming businesses. For good." className="font-serif text-[clamp(2rem,3vw,2.8rem)] leading-[1.05]" />
            <Fade d={0.15} className="mt-6"><Btn href="#/contact">Talk to us</Btn></Fade>
          </div>
        </div>
        <div className="mt-16 flex flex-col-reverse justify-between gap-6 border-t border-line/15 pt-6 sm:flex-row sm:items-center">
          <p className="text-sm text-ink/55">© {new Date().getFullYear()} Mahadik Partners Pvt. Ltd., trading as Mahadik & Company. All rights reserved.</p>
          {socials.length > 0 && (
            <div className="flex gap-3">
              {socials.map(({ label, href, Icon }) => (
                <a key={label} href={href} aria-label={label} target="_blank" rel="noreferrer"
                  className="grid size-10 place-items-center rounded-[3px] border border-line/25 text-ink transition-colors hover:bg-ink hover:text-paper"><Icon className="size-4" /></a>
              ))}
            </div>
          )}
        </div>
      </div>
    </footer>
  )
}

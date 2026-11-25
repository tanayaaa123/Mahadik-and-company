import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, ArrowUpRight, MapPin, Phone } from 'lucide-react'
import Logo from './Logo'
import { useRoute } from '../lib/router'
import { CONTACT, NAV } from '../data/content'
import { EASE } from '../lib/motion'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')
  const reduce = useReducedMotion()
  const route = useRoute()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActive(NAV.some((n) => n.id === e.target.id) ? e.target.id : '') }),
      { rootMargin: '-45% 0px -50% 0px' },
    )
    ;[].forEach((id) => {
      const el = document.getElementById(id)
      if (el) io.observe(el)
    })
    return () => { window.removeEventListener('scroll', onScroll); io.disconnect() }
  }, [])

  useEffect(() => { setActive(NAV.find((n) => route.startsWith(n.to.slice(1)))?.id || ''); setOpen(false) }, [route])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false) }
    const mq = window.matchMedia('(min-width:1024px)')
    const onMq = () => { if (mq.matches) setOpen(false) }
    window.addEventListener('keydown', onKey)
    mq.addEventListener('change', onMq)
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', onKey); mq.removeEventListener('change', onMq) }
  }, [open])

  const solid = scrolled || open
  const close = () => setOpen(false)
  const bar = (top) => (
    <motion.span
      className="absolute left-1/2 top-1/2 -ml-[10px] h-px w-5 bg-current"
      initial={false}
      animate={{ y: open ? 0 : top ? -4 : 4, rotate: open ? (top ? 45 : -45) : 0 }}
      transition={{ duration: 0.35, ease: EASE }}
    />
  )

  return (
    <>
      <header
        data-th="dark"
        className={'fixed inset-x-0 top-0 z-50 border-b pt-[env(safe-area-inset-top,0px)] transition-[background-color,border-color] duration-500 ' +
          (solid ? 'border-transparent bg-paper' : 'border-transparent bg-paper')}
      >
        <div className={'mx-auto flex max-w-6xl items-center justify-between px-5 transition-[height] duration-500 sm:px-6 ' + (solid ? 'h-16' : 'h-[72px] lg:h-20')}>
          <Logo size="h-10" />
          <nav className="hidden items-center gap-8 text-[14.5px] lg:flex" aria-label="Primary">
            {NAV.map((n) => (
              <a key={n.id} href={n.to} className={'relative py-2 transition-colors duration-300 hover:text-ink ' + (active === n.id ? 'text-ink' : 'text-ink/70')}>
                {n.label}
                {active === n.id && (
                  <motion.span layoutId="navdot" className="absolute -bottom-0.5 left-1/2 size-1 -translate-x-1/2 rounded-full bg-ink" transition={{ type: 'spring', stiffness: 380, damping: 30 }} />
                )}
              </a>
            ))}
          </nav>
          <a href="#/contact" className="group hidden items-center gap-2 rounded-[3px] border border-line px-5 py-2.5 text-[14.5px] text-ink transition-colors duration-300 hover:bg-ink hover:text-paper lg:inline-flex">
            Talk to us
            <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
          <button
            type="button"
            className="relative size-11 rounded-[3px] border border-line/25 text-ink transition-colors hover:bg-soft lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(!open)}
          >
            {bar(true)}
            {bar(false)}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            key="menu" id="mobile-menu" data-th="dark" role="dialog" aria-modal="true" aria-label="Menu"
            initial={reduce ? { opacity: 0 } : { clipPath: 'inset(0 0 100% 0)' }}
            animate={reduce ? { opacity: 1 } : { clipPath: 'inset(0 0 0% 0)' }}
            exit={reduce ? { opacity: 0 } : { clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.6, ease: EASE }}
            className="fixed inset-0 z-40 flex flex-col overflow-y-auto bg-paper px-6 pb-[calc(env(safe-area-inset-bottom,0px)+24px)] pt-[calc(env(safe-area-inset-top,0px)+84px)] text-ink lg:hidden"
          >
            <nav className="flex flex-1 flex-col justify-center py-6" aria-label="Mobile">
              {NAV.map((n, i) => (
                <motion.a
                  key={n.id} href={n.to} onClick={close}
                  initial={reduce ? false : { opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 + i * 0.07, ease: EASE }}
                  className="flex items-baseline gap-4 border-b border-line/10 py-5"
                >
                  <span className="w-7 text-[12px] font-medium tracking-[.16em] text-mute">0{i + 1}</span>
                  <span className={'font-serif text-[2.2rem] leading-tight sm:text-[2.4rem] ' + (active === n.id ? 'italic text-mute' : 'text-ink')}>{n.label}</span>
                </motion.a>
              ))}
            </nav>
            <motion.div initial={reduce ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.55, ease: EASE }}>
              <p className="flex items-center gap-3 text-[15px]"><Phone className="size-4 text-mute" /><a href={CONTACT.tel}>{CONTACT.phone}</a></p>
              <p className="mt-2 flex items-start gap-3 text-[15px] text-ink/70"><MapPin className="mt-1 size-4 shrink-0 text-mute" />{CONTACT.location}</p>
              <a href="#/contact" onClick={close} className="mt-6 flex w-full items-center justify-center gap-3 rounded-[3px] bg-ink px-7 py-4 text-[16px] font-medium text-paper">
                Talk to us <ArrowRight className="size-4" />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

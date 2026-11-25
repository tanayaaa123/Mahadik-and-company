import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import Head from '../components/ui/Head'
import Fade from '../components/ui/Fade'
import { SITUATIONS } from '../data/content'
import { EASE, IN_VIEW } from '../lib/motion'

export default function Situations() {
  const reduce = useReducedMotion()
  return (
    <section id="situation" data-th="light" className="bg-paper py-20 text-ink md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-6 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-4">
          <Head text="Find your situation." className="font-serif text-[clamp(2.8rem,4.6vw,4.2rem)] leading-[1] tracking-[-.015em]" />
          <Fade d={0.15}>
            <p className="mt-5 max-w-xs text-[17px] leading-relaxed text-ink/70">Tell us where you are, and we’ll take it from there.</p>
            <a href="#/contact" className="group mt-7 inline-flex items-center gap-2 text-[15px] font-semibold underline decoration-ink/30 underline-offset-[6px] transition-colors hover:decoration-ink">
              Talk to us
              <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </Fade>
        </div>

        <div className="lg:col-span-8">
          <div className="grid border-l border-t border-line/15 sm:grid-cols-2">
            {SITUATIONS.map(({ Icon, title, when, help, detail }, i) => (
              <motion.a
                key={title} href="#/contact"
                initial={reduce ? false : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={IN_VIEW}
                transition={{ duration: 0.8, delay: (i % 2) * 0.08, ease: EASE }}
                className="inv group flex min-h-[300px] flex-col border-b border-r border-line/15 bg-paper p-6 text-ink transition-colors duration-500 sm:p-7"
              >
                <Icon className="size-8" strokeWidth={1.2} />
                <h3 className="mt-7 font-serif text-[1.65rem] leading-[1.1]">{title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink/65"><b className="font-semibold text-ink">When you’re </b>{when}</p>
                <div className="mt-auto pt-6">
                  <p className="text-[13px] font-semibold text-mute">We help you</p>
                  <p className="font-serif text-[1.4rem] leading-tight">{help}</p>
                  {/* the detail line opens on hover or focus on large screens, and is always shown on phones */}
                  <span className="grid grid-rows-[1fr] transition-all duration-500 lg:grid-rows-[0fr] lg:group-hover:grid-rows-[1fr] lg:group-focus-visible:grid-rows-[1fr]">
                    <span className="overflow-hidden"><span className="block pt-2 text-[14.5px] leading-snug text-ink/70">{detail}</span></span>
                  </span>
                  <span className="mt-4 inline-flex items-center gap-2 text-[14.5px] font-semibold">
                    Talk this through <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

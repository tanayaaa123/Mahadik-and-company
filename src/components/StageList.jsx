import { motion } from 'framer-motion'
import { STAGES } from '../data/content'
import { EASE } from '../lib/motion'

/** Vertical legend for the orbit. Visible on large screens; phones get stage chips instead. */
export default function StageList({ act, pick, release }) {
  return (
    <div className="relative hidden lg:block" onMouseLeave={release}>
      {STAGES.map((s, i) => {
        const on = i === act
        return (
          <button key={s.name} type="button" onClick={() => pick(i)} onMouseEnter={() => pick(i)} className="relative flex h-14 w-full items-center gap-5 text-left">
            <span className={'font-serif text-[1.6rem] leading-none transition-all duration-500 ' + (on ? 'translate-x-1 italic text-ink' : 'text-ink/45')}>{s.name}</span>
          </button>
        )
      })}
    </div>
  )
}

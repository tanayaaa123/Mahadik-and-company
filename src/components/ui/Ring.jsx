import { AnimatePresence, motion } from 'framer-motion'
import { EASE } from '../../lib/motion'

/** Circular progress indicator: n of total. */
export default function Ring({ n, total = 8, size = 170 }) {
  const r = size / 2 - 12
  const C = 2 * Math.PI * r
  return (
    <div className="relative mx-auto" style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="-rotate-90" aria-hidden="true">
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="rgb(var(--ink))" strokeOpacity=".25" strokeWidth="9" />
        <motion.circle
          cx={size / 2} cy={size / 2} r={r} fill="none" stroke="rgb(var(--ink))" strokeWidth="9" strokeLinecap="round"
          strokeDasharray={C} initial={false} animate={{ strokeDashoffset: C * (1 - n / total) }}
          transition={{ duration: 0.9, ease: EASE }}
        />
      </svg>
      <div className="absolute inset-0 grid place-items-center font-serif text-[3rem]">
        <AnimatePresence mode="wait">
          <motion.span key={n} initial={{ y: 14, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -14, opacity: 0 }} transition={{ duration: 0.25 }}>
            {n}
            <small className="text-xl opacity-50">/{total}</small>
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  )
}

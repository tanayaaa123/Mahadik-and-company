import { motion, useReducedMotion } from 'framer-motion'
import { EASE, IN_VIEW } from '../../lib/motion'

/** Masked word-by-word reveal. Prefix a word with * for italics; use _ for a non-breaking space inside it. */
export default function Words({ text, className = '', d = 0, as = 'h2', load = false }) {
  const reduce = useReducedMotion()
  const Tag = motion[as]
  const words = text.split(' ')
  const mode = load ? { animate: 's' } : { whileInView: 's', viewport: IN_VIEW }
  return (
    <Tag className={className} initial="h" {...mode} transition={{ staggerChildren: reduce ? 0 : 0.07, delayChildren: d }}>
      {words.map((w, i) => {
        const italic = w.startsWith('*')
        const t = italic ? w.slice(1).replace('_', '\u00a0') : w
        return (
          <span key={i} className="inline-block overflow-hidden align-top pb-[.14em] -mb-[.14em]">
            <motion.span
              className={'inline-block ' + (italic ? 'italic' : '')}
              variants={{ h: { y: reduce ? 0 : '112%' }, s: { y: 0 } }}
              transition={{ duration: 0.95, ease: EASE }}
            >
              {t}
              {i < words.length - 1 ? '\u00a0' : ''}
            </motion.span>
          </span>
        )
      })}
    </Tag>
  )
}

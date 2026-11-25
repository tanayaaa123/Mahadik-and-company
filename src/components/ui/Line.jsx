import { motion, useReducedMotion } from 'framer-motion'
import { EASE } from '../../lib/motion'

export default function Line({ className = '' }) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={'h-px origin-left bg-ink/20 ' + className}
      initial={reduce ? false : { scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5, ease: EASE }}
    />
  )
}

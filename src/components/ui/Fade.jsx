import { motion, useReducedMotion } from 'framer-motion'
import { EASE, IN_VIEW } from '../../lib/motion'

export default function Fade({ children, d = 0, y = 24, className = '' }) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={IN_VIEW}
      transition={{ duration: 0.9, delay: d, ease: EASE }}
    >
      {children}
    </motion.div>
  )
}

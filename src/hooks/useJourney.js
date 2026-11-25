import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'
import { STAGES } from '../data/content'

/** Cycles through the six journey stages. Hovering or tapping a stage pauses the cycle. */
export default function useJourney() {
  const reduce = useReducedMotion()
  const [act, setAct] = useState(reduce ? STAGES.length - 1 : 0)
  const hold = useRef(false)

  useEffect(() => {
    if (reduce) { setAct(STAGES.length - 1); return }
    const t = setInterval(() => { if (!hold.current) setAct((a) => (a + 1) % STAGES.length) }, 2600)
    return () => clearInterval(t)
  }, [reduce])

  return {
    act,
    pick: (i) => { hold.current = true; setAct(i) },
    release: () => { hold.current = false },
  }
}

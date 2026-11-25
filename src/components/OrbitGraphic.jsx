import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion'
import { STAGES } from '../data/content'
import { EASE } from '../lib/motion'

/*
  THE SIGNATURE ELEMENT. Three ribbons, three orbit paths and six stage nodes, all separate SVG pieces.
  Each ribbon belongs to two journey stages and lights up with them.
*/
const ellipse = (cx, cy, rx, ry) => `M${cx - rx} ${cy}a${rx} ${ry} 0 1 0 ${2 * rx} 0a${rx} ${ry} 0 1 0 ${-2 * rx} 0z`
const crescent = (r, o) => ellipse(360, 350, r.rx, r.ry) + ellipse(360 + o[0], 350 + o[1], r.rx * r.k, r.ry * r.k)

const RIBBONS = [
  { id: 'gA', rx: 244, ry: 122, k: 0.86, o: [[26, 6], [-16, -8], [26, 6]], rot: -28, cls: 'sp-a', stages: [0, 1], dur: 15 },
  { id: 'gB', rx: 224, ry: 108, k: 0.84, o: [[-22, 10], [16, -6], [-22, 10]], rot: 58, cls: 'sp-b', stages: [2, 3], dur: 18 },
  { id: 'gC', rx: 204, ry: 96, k: 0.8, o: [[14, -14], [-12, 12], [14, -14]], rot: 118, cls: 'sp-c', stages: [4, 5], dur: 21 },
]
const GRADIENTS = [['gA', '#FFFFFF', '#8C8C8C'], ['gB', '#C9C9C9', '#4A4A4A'], ['gC', '#EDEDED', '#6E6E6E']]
const nodeAt = (deg) => { const r = (deg * Math.PI) / 180; return [360 + 250 * Math.cos(r), 350 + 250 * Math.sin(r)] }

export default function OrbitGraphic({ act, pick, release }) {
  const reduce = useReducedMotion()
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 55, damping: 18 })
  const sy = useSpring(my, { stiffness: 55, damping: 18 })
  const px = useTransform(sx, (v) => v * 18)
  const py = useTransform(sy, (v) => v * 18)

  const onMove = (e) => {
    if (reduce) return
    const r = e.currentTarget.getBoundingClientRect()
    mx.set((e.clientX - r.left) / r.width - 0.5)
    my.set((e.clientY - r.top) / r.height - 0.5)
  }
  const onLeave = () => { mx.set(0); my.set(0); release() }

  return (
    <div className="mx-auto w-full max-w-[560px]" onMouseMove={onMove} onMouseLeave={onLeave}>
      <svg viewBox="90 80 540 540" className="h-auto w-full overflow-visible" role="img" aria-label="Your Business Journey: Idea, Start, Build, Grow, Stabilize, Scale">
        <defs>
          {GRADIENTS.map(([id, a, b]) => (
            <linearGradient key={id} id={id} x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor={a} /><stop offset="1" stopColor={b} /></linearGradient>
          ))}
        </defs>
        <g stroke="rgb(var(--ink))" strokeOpacity=".08"><line x1="360" y1="90" x2="360" y2="610" /><line x1="100" y1="350" x2="620" y2="350" /></g>
        <circle cx="360" cy="350" r="196" fill="none" stroke="rgb(var(--ink))" strokeOpacity=".45" strokeWidth=".8" strokeDasharray="2 6" />

        <motion.g style={{ x: px, y: py, mixBlendMode: 'screen' }}>
          {RIBBONS.map((r) => (
            <motion.g key={r.id} animate={{ opacity: r.stages.includes(act) ? 0.8 : 0.2 }} transition={{ duration: 0.9, ease: EASE }}>
              <g transform={`rotate(${r.rot} 360 350)`}>
                <g className={r.cls}>
                  <motion.path
                    d={crescent(r, r.o[0])} fillRule="evenodd" fill={`url(#${r.id})`}
                    animate={reduce ? {} : { d: r.o.map((o) => crescent(r, o)) }}
                    transition={{ duration: r.dur, repeat: Infinity, ease: 'easeInOut' }}
                  />
                  <ellipse cx="360" cy="350" rx={r.rx} ry={r.ry} fill="none" stroke="rgb(var(--ink))" strokeOpacity=".4" strokeWidth=".9" />
                </g>
              </g>
            </motion.g>
          ))}
        </motion.g>

        <motion.circle cx="360" cy="350" r="250" fill="none" stroke="rgb(var(--ink))" strokeOpacity=".3" strokeWidth="1.4"
          initial={reduce ? false : { pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2.4, ease: EASE }} />
        <motion.circle cx="360" cy="350" r="250" fill="none" stroke="rgb(var(--ink))" strokeWidth="3" strokeLinecap="round" transform="rotate(185 360 350)"
          initial={{ pathLength: 0 }} animate={{ pathLength: Math.max(STAGES[act].fr, 0.002) }} transition={{ duration: 1.2, ease: EASE }} />
        <g className="sp-d"><circle cx="610" cy="350" r="11" fill="rgb(var(--ink))" fillOpacity=".25" /><circle cx="610" cy="350" r="4.5" fill="rgb(var(--ink))" /></g>

        <circle cx="360" cy="350" r="104" fill="rgb(var(--paper))" fillOpacity=".96" stroke="rgb(var(--ink))" strokeOpacity=".5" />
        <g textAnchor="middle" className="font-serif" style={{ fill: 'rgb(var(--ink))', fontSize: 35 }}>
          <text x="360" y="328">Your</text><text x="360" y="362">Business</text><text x="360" y="396">Journey</text>
        </g>

        {STAGES.map((s, i) => {
          const [x, y] = nodeAt(s.angle)
          const lit = i === act
          const done = i < act
          return (
            <g
              key={s.name} style={{ cursor: 'pointer' }} role="button" tabIndex={0} aria-label={`Stage ${i + 1}: ${s.name}`}
              onMouseEnter={() => pick(i)} onFocus={() => pick(i)} onClick={() => pick(i)}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') pick(i) }}
            >
              <circle cx={x} cy={y} r="34" fill="transparent" />
              {lit && !reduce && (
                <motion.circle cx={x} cy={y} fill="none" stroke="rgb(var(--ink))" strokeWidth="1.2"
                  initial={{ r: 8, opacity: 0.7 }} animate={{ r: 32, opacity: 0 }} transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }} />
              )}
              <circle cx={x} cy={y} r="15" style={{ fill: lit || done ? 'rgb(var(--ink))' : 'rgb(var(--paper))', stroke: 'rgb(var(--ink))', strokeWidth: 1.5, transition: 'all .6s' }} />
              <text x={x} y={y + 5.5} textAnchor="middle" style={{ fontSize: 16, fontWeight: 600, fill: lit || done ? 'rgb(var(--paper))' : 'rgb(var(--ink))', transition: 'fill .6s' }}>{i + 1}</text>
            </g>
          )
        })}
      </svg>
    </div>
  )
}

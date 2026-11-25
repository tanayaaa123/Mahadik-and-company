import { ArrowDown } from 'lucide-react'
import Eyebrow from '../components/ui/Eyebrow'
import Words from '../components/ui/Words'
import Fade from '../components/ui/Fade'
import Btn from '../components/ui/Btn'
import OrbitGraphic from '../components/OrbitGraphic'
import StageList from '../components/StageList'
import useJourney from '../hooks/useJourney'
import { STAGES } from '../data/content'

export default function Hero() {
  const journey = useJourney()
  const { act, pick } = journey
  return (
    <section id="top" data-th="dark" className="relative overflow-hidden bg-paper pt-28 text-ink sm:pt-32">
      {/* angled panel behind the orbit */}
      <div aria-hidden="true" className="absolute inset-y-0 right-0 hidden w-[64%] lg:block"
        style={{ clipPath: 'polygon(30% 0,100% 0,100% 100%,0 100%)', background: 'linear-gradient(160deg,#222,#0a0a0a 75%)' }} />
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 pb-16 sm:px-6 lg:min-h-[calc(100svh-6rem)] lg:grid-cols-12 lg:gap-4 lg:pb-12">
        <div className="lg:col-span-5">
          <Fade y={10}><Eyebrow>Strategy & Management Consulting</Eyebrow></Fade>
          <Words as="h1" load d={0.15} text="Make the *right_call at every stage of your business."
            className="font-serif text-[clamp(2.9rem,5vw,4.6rem)] font-normal leading-[1] tracking-[-.015em]" />
          <Fade d={0.9}>
            <p className="mt-6 max-w-md text-[17px] leading-relaxed text-ink/70 sm:text-[17.5px]">
              Strategy and operational support for founders and business owners, from first idea to established company. Find your situation below.
            </p>
          </Fade>
          <Fade d={1.05} className="mt-8 flex flex-wrap gap-3">
            <Btn href="#/contact" className="!px-6">Talk through your situation</Btn>
            <a href="#situation" className="group inline-flex items-center gap-2.5 py-2 text-[15px]">
              <span className="grid size-11 place-items-center rounded-full border border-line/40 transition-colors duration-300 group-hover:bg-ink group-hover:text-paper">
                <ArrowDown className="size-4 transition-transform duration-300 group-hover:translate-y-0.5" />
              </span>
              Find your situation
            </a>
          </Fade>
        </div>

        <div className="lg:col-span-5">
          <OrbitGraphic {...journey} />
          <div className="mt-2 flex flex-wrap justify-center gap-2 lg:hidden" role="tablist" aria-label="Journey stages">
            {STAGES.map((s, i) => (
              <button key={s.name} role="tab" aria-selected={i === act} onClick={() => pick(i)}
                className={'rounded-[3px] border px-4 py-2 text-[13.5px] transition-colors duration-300 ' + (i === act ? 'border-ink bg-ink text-paper' : 'border-line/25 text-ink/70')}>
                {i + 1} · {s.name}
              </button>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2"><StageList {...journey} /></div>
      </div>
    </section>
  )
}

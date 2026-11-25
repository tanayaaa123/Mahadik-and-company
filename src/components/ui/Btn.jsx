import { ArrowRight } from 'lucide-react'

export default function Btn({ href, children, variant = 'solid', className = '' }) {
  const look =
    variant === 'solid'
      ? 'bg-ink text-paper hover:bg-mute'
      : 'border border-line/30 text-ink hover:bg-ink hover:text-paper'
  return (
    <a
      href={href}
      className={`group inline-flex items-center gap-3 rounded-[3px] px-7 py-3.5 text-[15px] font-medium tracking-[.01em] transition-colors duration-300 ${look} ${className}`}
    >
      <span>{children}</span>
      <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1.5" aria-hidden="true" />
    </a>
  )
}

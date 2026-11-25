export default function Eyebrow({ children, className = '' }) {
  return <div className={'mb-6 text-[11.5px] font-medium uppercase tracking-[.22em] ' + className}>{children}</div>
}

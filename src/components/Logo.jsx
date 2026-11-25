/**
 * Logo: 120x124 mark with two 45-degree stripes, hairline rule, small-caps wordmark,
 * and a tagline stretched to the exact width of the wordmark (textLength).
 */
export default function Logo({ size = 'h-8 sm:h-10' }) {
  return (
    <a href="#/" className={'inline-flex shrink-0 text-ink ' + size} aria-label="Mahadik & Company, home">
      <svg viewBox="0 0 690 124" className="block h-full w-auto" aria-hidden="true">
        <svg x="0" y="0" width="120" height="124" viewBox="0 0 120 124">
          <rect width="120" height="124" fill="currentColor" />
          <path d="M-6 122L122 -6M40 131L131 40" stroke="rgb(var(--paper))" strokeWidth="12.5" />
        </svg>
        <rect x="155" y="0" width="2" height="124" fill="currentColor" />
        <text x="178" y="65" textLength="509" lengthAdjust="spacing" fill="currentColor"
          style={{ fontFamily: "'Cormorant SC','Cormorant Garamond',Georgia,serif", fontWeight: 600, fontSize: 60 }}>
          Mahadik & Company
        </text>
        <text x="178" y="100" textLength="509" lengthAdjust="spacing" fill="currentColor"
          style={{ fontFamily: "'Figtree',system-ui,sans-serif", fontWeight: 500, fontSize: 12.5 }}>
          STRATEGY & MANAGEMENT CONSULTING
        </text>
      </svg>
    </a>
  )
}

import { useEffect, useState } from 'react'
// Hash routes look like #/contact?x=y. Plain #anchors are left to the browser.
const read = () => (window.location.hash.startsWith('#/') ? window.location.hash.slice(1) : null)
export function useRoute() {
  const [r, setR] = useState(read() || '/')
  useEffect(() => {
    const f = () => { const n = read(); if (n !== null) { setR(n); window.scrollTo(0, 0) } }
    window.addEventListener('hashchange', f)
    return () => window.removeEventListener('hashchange', f)
  }, [])
  return r
}

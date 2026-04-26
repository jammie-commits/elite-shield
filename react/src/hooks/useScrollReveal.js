import { useEffect } from 'react'

/**
 * Attaches an IntersectionObserver to all `.reveal` elements in the current page.
 * Elements slide into view when they enter the viewport.
 * Re-runs whenever the component using this hook mounts (i.e. on every route change).
 */
export default function useScrollReveal() {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.08 }
    )
    reveals.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

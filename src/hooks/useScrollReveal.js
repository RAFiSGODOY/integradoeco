import { useEffect } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { createScrollRevealContext, REVEAL_SELECTOR } from '../utils/scrollReveal'
import gsap from 'gsap'

export function useScrollReveal(ref) {
  useEffect(() => {
    const scope = ref.current
    if (!scope) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }

    const ctx = createScrollRevealContext(scope)

    const refresh = () => {
      ScrollTrigger.refresh()
      scope.querySelectorAll(REVEAL_SELECTOR).forEach((el) => {
        if (!(el instanceof HTMLElement)) return
        const style = window.getComputedStyle(el)
        if (style.display === 'none' || style.visibility === 'hidden') return
        if (parseFloat(style.opacity) < 0.01 && ScrollTrigger.isInViewport(el, 0.15)) {
          gsap.to(el, {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.75,
            ease: 'power3.out',
            overwrite: 'auto',
          })
        }
      })
    }

    const raf = requestAnimationFrame(refresh)
    window.addEventListener('load', refresh, { once: true })

    const images = scope.querySelectorAll('img')
    images.forEach((img) => {
      if (!img.complete) {
        img.addEventListener('load', refresh, { once: true })
      }
    })

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('load', refresh)
      ctx.revert()
    }
  }, [ref])
}

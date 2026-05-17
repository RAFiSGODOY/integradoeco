import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const REVEAL_SELECTOR = '[data-scroll-reveal]'

const PRESETS = {
  text: { y: 32, duration: 0.75 },
  image: { y: 28, scale: 0.97, duration: 0.85 },
  partners: { y: 20, duration: 0.65 },
  label: { y: 24, duration: 0.7 },
  item: { y: 28, duration: 0.7 },
  cta: { y: 20, duration: 0.65 },
}

function isVisible(el) {
  if (!(el instanceof HTMLElement)) return false
  const style = window.getComputedStyle(el)
  return style.display !== 'none' && style.visibility !== 'hidden'
}

export function initScrollReveal(scope, { start = 'top bottom-=8%' } = {}) {
  const elements = gsap.utils.toArray(REVEAL_SELECTOR, scope).filter(isVisible)

  elements.forEach((el) => {
    const type = el.dataset.scrollReveal || 'text'
    const preset = PRESETS[type] ?? PRESETS.text
    const triggerStart = el.dataset.scrollStart || start
    const { y = 32, scale, duration = 0.75 } = preset

    gsap.set(el, {
      autoAlpha: 0,
      y,
      ...(scale != null ? { scale } : {}),
    })

    const playReveal = () => {
      gsap.to(el, {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        duration,
        ease: 'power3.out',
        overwrite: 'auto',
      })
    }

    const st = ScrollTrigger.create({
      trigger: el,
      start: triggerStart,
      once: true,
      invalidateOnRefresh: true,
      onEnter: playReveal,
    })

    if (st.progress > 0) {
      playReveal()
    }
  })

  ScrollTrigger.refresh()
}

export function createScrollRevealContext(scope, options) {
  return gsap.context(() => initScrollReveal(scope, options), scope)
}

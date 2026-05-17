import { useEffect, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import './style.css'

export default function FloatingCta() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const about = document.getElementById('sobre')
    const finalCta = document.getElementById('finalcta')
    if (!about) return

    const update = () => {
      const aboutTop = about.getBoundingClientRect().top
      const reachedAbout = aboutTop < window.innerHeight * 0.82

      let pastFinalCta = false
      if (finalCta) {
        const finalTop = finalCta.getBoundingClientRect().top
        pastFinalCta = finalTop < window.innerHeight * 0.55
      }

      setVisible(reachedAbout && !pastFinalCta)
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update, { passive: true })

    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  return (
    <div
      className={`fixed z-[90] transition-opacity duration-300 ease-out ${
        visible ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
      }`}
      style={{
        right: 'max(1rem, env(safe-area-inset-right, 0px))',
        bottom: 'max(1rem, env(safe-area-inset-bottom, 0px))',
      }}
    >
      <a
        href="#finalcta"
        aria-label="Iniciar avaliação gratuita"
        className="animate-bounce btn-shine flex max-w-[min(calc(100vw-2rem),14rem)] items-center justify-center rounded-tl-full rounded-br-full bg-primary px-4 py-2.5 text-center text-[10px] font-semibold leading-snug text-paper shadow-[0_8px_24px_rgba(0,0,0,0.18)] transition-colors duration-200 hover:bg-primary-hover hover:shadow-[0_10px_28px_rgba(0,0,0,0.22)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 sm:max-w-none sm:px-5 sm:py-3 sm:text-[11px] md:text-xs"
      >
        <span className="btn-shine__content flex items-center justify-center gap-1.5 sm:gap-2">
          <span>Iniciar avaliação gratuita</span>
         </span>
      </a>
    </div>
  )
}

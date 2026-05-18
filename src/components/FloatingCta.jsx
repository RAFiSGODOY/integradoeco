import { useEffect, useState } from 'react'
import { btnFloatingPrimary, btnFloatingPrimaryContent } from '../constants/typography'
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
        className={`animate-bounce motion-reduce:animate-none ${btnFloatingPrimary}`}
      >
        <span className={btnFloatingPrimaryContent}>Iniciar avaliação gratuita</span>
      </a>
    </div>
  )
}

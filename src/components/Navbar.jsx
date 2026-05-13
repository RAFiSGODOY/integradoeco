import { useCallback, useLayoutEffect, useRef, useState } from 'react'
import { X } from 'lucide-react'
/** Logo sobre o hero — ajuste o ficheiro se necessário */
import logoOnHero from '../assets/6.png'
/** Logo com a barra já fora do hero — troque por versão para fundo claro/escuro */
import logoAfterHero from '../assets/4.png'

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Metodologia', href: '#como-funciona' },
  { label: 'Pilares ESG', href: '#pilares' },
  { label: 'Avaliação', href: '#resultado' },
  { label: 'Sobre', href: '#beneficios' },
]

/** `overHero`: sobre o hero escuro. `solid`: após o hero — barra escura. */
function HoverNavLink({ href, label, variant }) {
  const rowClass =
    'flex h-6 shrink-0 items-center whitespace-nowrap leading-none text-[15px] font-medium'

  const idle =
    variant === 'solid' ? 'text-muted' : 'text-paper/85'
  const hoverLine = variant === 'solid' ? 'text-primary' : 'text-paper'

  const ring =
    variant === 'solid'
      ? 'focus-visible:ring-paper/40 focus-visible:ring-offset-foreground'
      : 'focus-visible:ring-paper focus-visible:ring-offset-2'

  return (
    <a
      href={href}
      className={`group relative inline-block h-6 overflow-hidden rounded-sm align-middle text-[15px] font-medium leading-none focus-visible:outline-none focus-visible:ring-2 ${ring}`}
    >
      <span className="flex flex-col transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform group-hover:-translate-y-6 motion-reduce:transition-none motion-reduce:group-hover:translate-y-0">
        <span className={`${rowClass} ${idle}`}>{label}</span>
        <span className={`${rowClass} ${hoverLine}`} aria-hidden="true">
          {label}
        </span>
      </span>
    </a>
  )
}

/** Atualiza se a navbar já “saiu” visualmente da área do hero (scroll). */
function useNavbarPastHero(headerRef) {
  const [isPastHero, setIsPastHero] = useState(false)

  const update = useCallback(() => {
    const hero = document.getElementById('inicio')
    if (!hero) return

    const header = headerRef.current
    const headerH = header?.offsetHeight ?? 80
    const topInset = 20

    const heroBottom = hero.getBoundingClientRect().bottom
    const threshold = topInset + headerH + 4
    setIsPastHero(heroBottom <= threshold)
  }, [headerRef])

  useLayoutEffect(() => {
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update, { passive: true })
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [update])

  return isPastHero
}

export default function Navbar() {
  const headerRef = useRef(null)
  const isPastHero = useNavbarPastHero(headerRef)

  return (
    <header
      ref={headerRef}
      className={` flex h-16 w-full container-main items-center justify-between rounded-3xl border px-6 py-2 transition-[background-color,border-color,box-shadow,color] duration-300 ease-out md:px-8 md:py-4 ${
        isPastHero
          ? 'border-muted/10 bg-paper/10 text-paper backdrop-blur-md'
          : 'border-paper/60 bg-paper/10 text-paper  backdrop-blur-md'
      }`}
    >
      <a href="#inicio" className="flex shrink-0 items-center">
        <img
          key={isPastHero ? 'logo-scrolled' : 'logo-hero'}
          src={isPastHero ? logoAfterHero : logoOnHero}
          alt="Somos Sustentáveis"
          className="h-10 w-auto object-contain object-left transition-opacity duration-300"
        />
      </a>
      <nav
        id="menu"
        className="flex max-h-full w-0 flex-col items-center justify-center overflow-hidden transition-[width] max-md:absolute max-md:left-0 max-md:top-0 max-md:flex max-md:bg-transparent md:w-auto md:flex-row md:gap-8"
      >
        {navLinks.map((link) => (
          <HoverNavLink
            key={link.href}
            href={link.href}
            label={link.label}
            variant={isPastHero ? 'solid' : 'overHero'}
          />
        ))}
        <button type="button" id="closeMenu" className="md:hidden text-paper/80">
          <X className="h-6 w-6" />
        </button>
      </nav>
      <div className="flex items-center space-x-4">
        <a
          href="#resultado"
          className={`hidden min-h-[44px] items-center rounded-2xl px-5 text-sm font-semibold transition-colors duration-200 md:inline-flex ${
            isPastHero
              ? 'bg-primary border border-primary text-paper hover:bg-paper hover:text-primary hover:border-primary'
              : 'bg-paper text-primary hover:bg-primary hover:text-paper'
          }`}
        >
          Iniciar Avaliação
        </a>
      </div>
    </header>
  )
}

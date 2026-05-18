import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react'
import { Menu, X } from 'lucide-react'
import { logoNavHero, logoNavLight } from '../assets/images'
import {
  navCtaDesktop,
  navLinkBase,
  navLinkRow,
  navMobileCta,
  navMobileLink,
} from '../constants/typography'
import OptimizedImage from './OptimizedImage'

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Benefícios', href: '#beneficios' },
  { label: 'Passos', href: '#como-funciona' },
  { label: 'Resultado', href: '#resultado' },
  { label: 'Selos', href: '#metodologia-estruturada' },
  { label: 'Sobre', href: '#sobre' },
]


const glassMobileMenu = {
  mobileDivider: 'border-paper/25',
  mobileRow: 'text-paper/90 hover:bg-white/[0.12]',
  mobileCtaFocus: 'focus-visible:ring-paper/50 focus-visible:ring-offset-0',
}

const navbarThemes = {
  hero: {
    barSurface: 'border-paper/60 bg-paper/10 text-paper backdrop-blur-md',
    navCtaClass:
      'border border-paper/55 bg-white text-primary hover:bg-white/90 hover:border-paper',
    navBtnIconClass:
      'border border-paper/55 bg-white text-primary hover:bg-white/90',
    logoSrc: logoNavHero,
    link: {
      idle: 'text-paper/85',
      hoverLine: 'text-paper',
      ring: 'focus-visible:ring-paper focus-visible:ring-offset-2',
    },
    ...glassMobileMenu,
  },
  pastHero: {
    barSurface: 'border-muted/10 bg-paper/10 text-paper backdrop-blur-md',
    navCtaClass:
      'border border-muted/40 bg-primary text-paper hover:border-primary/45 hover:bg-primary/90',
    navBtnIconClass:
      'border border-muted/40 bg-primary text-paper hover:bg-primary/90',
    logoSrc: logoNavLight,
    link: {
      idle: 'text-muted',
      hoverLine: 'text-primary',
      ring: 'focus-visible:ring-paper/40 focus-visible:ring-offset-foreground',
    },
    mobileDivider: 'border-paper/20',
    mobileRow: 'text-muted hover:bg-primary',
    mobileCtaFocus: 'focus-visible:ring-paper/40 focus-visible:ring-offset-0',
  },
  light: {
    barSurface: 'border-paper/60 bg-paper/10 text-paper backdrop-blur-md',
    navCtaClass:
      'border border-paper/55 bg-white text-primary hover:bg-white/90 hover:border-paper',
    navBtnIconClass:
      'border border-paper/55 bg-white text-primary hover:bg-white/90',
    logoSrc: logoNavHero,
    link: {
      idle: 'text-paper/85',
      hoverLine: 'text-paper',
      ring: 'focus-visible:ring-paper focus-visible:ring-offset-2',
    },
    ...glassMobileMenu,
  },
}

function HoverNavLink({ href, label, link }) {
  return (
    <a
      href={href}
      className={`${navLinkBase} ${link.ring}`}
    >
      <span className="flex flex-col transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform group-hover:-translate-y-5 motion-reduce:transition-none motion-reduce:group-hover:translate-y-0">
        <span className={`${navLinkRow} ${link.idle}`}>{label}</span>
        <span className={`${navLinkRow} ${link.hoverLine}`} aria-hidden="true">
          {label}
        </span>
      </span>
    </a>
  )
}


function useNavbarThemeKey(headerRef) {
  const [themeKey, setThemeKey] = useState('hero')

  const update = useCallback(() => {
    const hero = document.getElementById('inicio')
    const header = headerRef.current
    const headerH = header?.offsetHeight ?? 80
    const topInset = 20
    const threshold = topInset + headerH + 4

    if (hero) {
      const heroBottom = hero.getBoundingClientRect().bottom
      if (heroBottom > threshold) {
        setThemeKey('hero')
        return
      }
    }

    const probeY = threshold
    const lightSections = document.querySelectorAll('[data-navbar-theme="light"]')
    for (const el of lightSections) {
      const r = el.getBoundingClientRect()
      if (r.top <= probeY && r.bottom >= probeY) {
        setThemeKey('light')
        return
      }
    }

    setThemeKey('pastHero')
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

  return themeKey
}

export default function Navbar() {
  const barRef = useRef(null)
  const navbarThemeKey = useNavbarThemeKey(barRef)
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = useCallback(() => setMenuOpen(false), [])

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)')
    const onViewportChange = () => {
      if (mq.matches) closeMenu()
    }
    mq.addEventListener('change', onViewportChange)
    return () => mq.removeEventListener('change', onViewportChange)
  }, [closeMenu])

  useEffect(() => {
    if (!menuOpen) return
    const onKeyDown = (e) => {
      if (e.key === 'Escape') closeMenu()
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [menuOpen, closeMenu])

  const theme =
    navbarThemeKey === 'hero'
      ? navbarThemes.hero
      : navbarThemeKey === 'light'
        ? navbarThemes.light
        : navbarThemes.pastHero
  const {
    barSurface,
    navCtaClass,
    navBtnIconClass,
    logoSrc,
    link,
    mobileDivider,
    mobileRow,
    mobileCtaFocus,
  } = theme

  return (
    <header className="w-full min-w-0 max-w-[100vw]">
      <div className="container-main relative max-w-full">
        <div
          ref={barRef}
          className={`hero-animate-fade hero-delay-0 flex w-full max-w-full flex-col overflow-hidden rounded-xl border transition-[background-color,border-color,box-shadow,color] duration-300 ease-out md:rounded-2xl ${barSurface}`}
        >
          
          <div className="flex h-12 min-h-12 items-center justify-between gap-2 px-3 sm:gap-2.5 sm:px-4 md:h-auto md:min-h-14 md:px-5">
            <a
              href="#inicio"
              className="hero-animate-nav hero-delay-1 flex min-w-0 shrink-0 items-center"
              onClick={closeMenu}
            >
              <OptimizedImage
                src={logoSrc}
                alt="Somos Sustentáveis"
                priority
                className="h-7 w-auto max-w-[120px] object-contain object-left transition-opacity duration-300 sm:h-8 sm:max-w-[140px]"
              />
            </a>

            <nav
              aria-label="Principal"
              className="hero-animate-nav hero-delay-2 hidden min-w-0 flex-1 items-center justify-center gap-3 md:flex md:gap-4 lg:gap-5 xl:gap-6"
            >
              {navLinks.map((item) => (
                <HoverNavLink
                  key={item.href}
                  href={item.href}
                  label={item.label}
                  link={link}
                />
              ))}
            </nav>

            <div className="hero-animate-nav hero-delay-3 flex shrink-0 items-center gap-1.5 sm:gap-2">
              <a
                href="#finalcta"
                className={`${navCtaDesktop} ${navCtaClass}`}
              >
                Iniciar avaliação
              </a>

              <button
                type="button"
                className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-[background-color,border-color,color] duration-200 md:hidden ${navBtnIconClass}`}
                aria-expanded={menuOpen}
                aria-controls="mobile-nav-panel"
                aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
                onClick={() => setMenuOpen((open) => !open)}
              >
                {menuOpen ? (
                  <X className="h-4 w-4" aria-hidden />
                ) : (
                  <Menu className="h-4 w-4" aria-hidden />
                )}
              </button>
            </div>
          </div>

          <div
            id="mobile-nav-panel"
            className={`grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none md:hidden ${
              menuOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
            }`}
          >
            <nav
              className="min-h-0 overflow-hidden"
              aria-label="Navegação mobile"
              aria-hidden={!menuOpen}
            >
              <div
                className={`flex flex-col gap-0.5 border-t px-3 py-2.5 sm:px-4 sm:py-3 ${mobileDivider}`}
              >
                {navLinks.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    tabIndex={menuOpen ? undefined : -1}
                    className={`${navMobileLink} ${mobileRow}`}
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="#finalcta"
                  onClick={closeMenu}
                  tabIndex={menuOpen ? undefined : -1}
                  className={`${navMobileCta} ${mobileCtaFocus} ${navCtaClass}`}
                >
                  Iniciar avaliação
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { logoMain, sealBronze, sealPrata, sealOuro } from '../assets/images'
import OptimizedImage from './OptimizedImage'
import { ROUTES } from '../constants/routes'

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Benefícios', href: '#beneficios' },
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Resultado', href: '#resultado' },
  { label: 'Selos', href: '#metodologia-estruturada' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Avaliação gratuita', href: '#finalcta' },
]

const legalLinks = [
  { label: 'Privacidade', href: ROUTES.privacy },
  { label: 'Termos de Uso', href: ROUTES.terms },
]

const columnTitleClass =
  'mb-3 text-[9px] font-semibold uppercase tracking-[0.12em] text-muted sm:text-[10px]'

const linkClass = 'text-xs text-tertiary transition-colors hover:text-primary sm:text-sm'

export default function Footer() {
  const footerRef = useRef(null)
  useScrollReveal(footerRef)

  return (
    <footer ref={footerRef} className="overflow-hidden bg-paper text-foreground mt-5 sm:mt-0">
      <div className="container-main px-5  py-10 sm:py-12 lg:py-14">
        <div className="mb-8 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:mb-10 lg:grid-cols-4 lg:gap-8">
          <div
            data-scroll-reveal="text"
            className="flex min-w-0 flex-col items-center text-center sm:col-span-2 sm:items-start sm:text-left lg:col-span-2"
          >
            <a href="#inicio" className="mb-3 inline-flex items-center gap-2 sm:mb-3.5">
              <OptimizedImage src={logoMain} alt="Logo Somos Sustentáveis" className="h-10 w-auto sm:h-11 lg:h-12" />
            </a>
            <p className="max-w-sm text-pretty text-xs leading-snug text-tertiary sm:max-w-[320px] sm:text-sm sm:leading-relaxed">
              Plataforma de avaliação e diagnóstico ESG para instituições que buscam desempenho,
              credibilidade e sustentabilidade.
            </p>
            <div className="mt-4 w-full sm:mt-4.5">
              <a
                href="mailto:contato@somossustentaveis.com.br"
                className="inline-block max-w-full break-all text-[10px] text-muted transition-colors hover:text-primary sm:break-normal sm:text-xs"
              >
                contato@somossustentaveis.com.br
              </a>
            </div>
          </div>

         <div
            data-scroll-reveal="item"
            className="min-w-0 flex flex-col items-center text-center sm:items-start sm:text-left"
          >
            <p className={columnTitleClass}>Navegação</p>
            <ul className="space-y-2 sm:space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className={linkClass}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div
            data-scroll-reveal="item"
            className="min-w-0 flex flex-col items-center text-center sm:items-start sm:text-left"
          >
            <p className={columnTitleClass}>Legal</p>
            <ul className="mb-5 space-y-2 sm:mb-6 sm:space-y-2.5">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <p className={`${columnTitleClass} mb-2.5 sm:mb-3`}>Score ESG</p>
            <div className="flex flex-wrap items-center justify-center gap-2 sm:justify-start sm:gap-2.5">
              <a href="#metodologia-estruturada" className="shrink-0">
                <OptimizedImage
                  src={sealBronze}
                  alt="Nível Bronze"
                  className="h-9 w-auto cursor-pointer object-contain transition-transform duration-300 hover:scale-105 sm:h-10 lg:h-11"
                />
              </a>
              <a href="#metodologia-estruturada" className="shrink-0">
                <OptimizedImage
                  src={sealPrata}
                  alt="Nível Prata"
                  className="h-9 w-auto cursor-pointer object-contain transition-transform duration-300 hover:scale-105 sm:h-10 lg:h-11"
                />
              </a>
              <a href="#metodologia-estruturada" className="shrink-0">
                <OptimizedImage
                  src={sealOuro}
                  alt="Nível Ouro"
                  className="h-9 w-auto cursor-pointer object-contain transition-transform duration-300 hover:scale-105 sm:h-10 lg:h-11"
                />
              </a>
            </div>
          </div>
        </div>

        <div
          data-scroll-reveal="text"
          className="flex flex-col items-center justify-center gap-2 border-t border-border pt-5 text-center sm:gap-2.5 sm:pt-6"
        >
          <p className="max-w-full text-pretty px-1 text-[10px] leading-snug text-muted sm:text-xs">
            © {new Date().getFullYear()} Somos Sustentáveis. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

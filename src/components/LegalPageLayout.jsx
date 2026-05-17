import { useEffect } from 'react'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import { logoNavLight } from '../assets/images'
import OptimizedImage from './OptimizedImage'
import { CONTACT_EMAIL } from '../constants/cta'
import { ROUTES } from '../constants/routes'

const bodyClass = 'text-xs leading-relaxed text-muted sm:text-sm sm:leading-relaxed'
const headingClass = 'mt-6 text-sm font-semibold text-[#101828] first:mt-0 sm:mt-7 sm:text-base'
const listClass = 'mt-2 list-disc space-y-1.5 pl-5 text-xs leading-relaxed text-muted sm:text-sm'

export function LegalSection({ title, children }) {
  return (
    <section>
      <h2 className={headingClass}>{title}</h2>
      <div className={`mt-2 ${bodyClass}`}>{children}</div>
    </section>
  )
}

export { bodyClass, listClass }

export default function LegalPageLayout({ title, description, children }) {
  const year = new Date().getFullYear()

  useEffect(() => {
    const previousTitle = document.title
    document.title = `${title} | Somos Sustentáveis`
    return () => {
      document.title = previousTitle
    }
  }, [title])

  return (
    <div className="flex min-h-screen flex-col bg-[#F9FAFB] font-inter text-foreground">
      <header className="border-b border-border bg-white px-5 py-4  top-0 left-0 right-0 z-50">
        <div className="container-main flex items-center justify-between gap-4">
          <Link to={ROUTES.home} className="inline-flex shrink-0 items-center">
            <OptimizedImage
              src={logoNavLight}
              alt="Somos Sustentáveis"
              priority
              className="h-9 w-auto object-contain sm:h-10"
            />
          </Link>
          <Link
            to={ROUTES.home}
            className="inline-flex items-center gap-1.5 text-[10px] font-medium text-secondary transition-colors hover:text-primary sm:text-xs"
          >
            <ArrowLeft className="h-3.5 w-3.5 shrink-0" strokeWidth={2} aria-hidden />
            Voltar ao site
          </Link>
        </div>
      </header>

      <main className="flex-1 px-5 py-8 sm:py-10 md:py-12">
        <article className="container-main mx-auto max-w-3xl">
          <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-secondary sm:text-[10px]">
            Somos Sustentáveis
          </p>
          <h1 className="mt-2 text-pretty text-lg font-semibold tracking-tight text-[#101828] sm:text-xl lg:text-2xl">
            {title}
          </h1>
          {description ? (
            <p className={`mt-3 max-w-2xl ${bodyClass}`}>{description}</p>
          ) : null}
          <p className="mt-2 text-[10px] text-muted sm:text-xs">
            Última atualização: maio de {year}.
          </p>

          <div className="mt-8 space-y-1 sm:mt-10">{children}</div>

          <div className="mt-10 rounded-xl border border-border bg-white p-4 sm:mt-12 sm:p-5">
            <p className={`${bodyClass} font-medium text-[#101828]`}>Dúvidas?</p>
            <p className={`mt-1.5 ${bodyClass}`}>
              Entre em contato pelo e-mail{' '}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="font-semibold text-primary underline-offset-2 hover:underline"
              >
                {CONTACT_EMAIL}
              </a>
              .
            </p>
          </div>
        </article>
      </main>

      <footer className="border-t border-border bg-white px-5 py-5 text-center">
        <p className="text-[10px] text-muted sm:text-xs">
          © {year} Somos Sustentáveis. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  )
}

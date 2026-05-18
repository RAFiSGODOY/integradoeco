import { useRef } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { ClipboardList, Gauge, LayoutGrid, Sparkles, ArrowRight } from 'lucide-react'
import {
  btnPrimaryShine,
  caption,
  cardBody,
  cardTitle,
  ctaBlockTitle,
  linkSecondary,
  sectionEyebrow,
  sectionLead,
  sectionTitle,
} from '../constants/typography'

import { resultExample } from '../assets/images'
import OptimizedImage from './OptimizedImage'

const benefits = [
  {
    title: 'Score geral ESG',
    description: 'Pontuação objetiva do nível atual da instituição.',
    Icon: Gauge,
  },
  {
    title: 'Breakdown por pilar',
    description: 'Desempenho por Ambiental, Social e Governança.',
    Icon: LayoutGrid,
  },
  {
    title: 'Insights acionáveis',
    description: 'Pontos fortes, riscos e oportunidades de melhoria.',
    Icon: Sparkles,
  },
  {
    title: 'Recomendações práticas',
    description: 'Direcionamentos para evoluir a maturidade ESG.',
    Icon: ClipboardList,
  },
]

export default function SampleResult() {
  const sectionRef = useRef(null)
  useScrollReveal(sectionRef)

  return (
    <section
      ref={sectionRef}
      id="resultado"
      className="relative overflow-x-hidden bg-[#F9FAFB] px-5 py-10 font-inter scroll-mt-[calc(env(safe-area-inset-top,0px)+1.25rem+3.5rem+0.75rem)] sm:scroll-mt-[calc(env(safe-area-inset-top,0px)+1.25rem+3.625rem+1rem)] sm:py-14 md:scroll-mt-[calc(env(safe-area-inset-top,0px)+1.25rem+3.625rem+1rem)] md:py-16 lg:scroll-mt-[calc(env(safe-area-inset-top,0px)+1.25rem+4rem+1rem)] lg:py-22 xl:scroll-mt-[calc(env(safe-area-inset-top,0px)+1.25rem+4.25rem+1rem)] xl:py-26"
    >
      <div className="container-main">
        <header className="mb-6 flex flex-col gap-2 sm:mb-8 sm:gap-3 justify-center items-center lg:flex-row lg:items-end lg:justify-between lg:gap-6">
          <div className="min-w-0 text-center lg:max-w-md lg:text-left">
            <div
              data-scroll-reveal="text"
              className="mb-1 inline-flex items-center border-b-2 border-secondary px-1 py-0.5 sm:mb-1.5 sm:px-2 sm:py-0.5 md:mb-2"
            >
              <span className={sectionEyebrow}>Exemplo de relatório</span>
            </div>
            <h2
              data-scroll-reveal="text"
              className={sectionTitle}
            >
              Receba um relatório completo ESG
            </h2>
          </div>

          <p
            data-scroll-reveal="text"
            className={`min-w-0 max-w-md text-center lg:max-w-sm lg:pb-0.5 lg:text-left ${sectionLead}`}
          >
            Score geral, desempenho por pilar e recomendações para evolução.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 md:items-start md:gap-8 lg:gap-10">
          <div data-scroll-reveal="image" className="relative min-w-0">
            <div className="group relative overflow-hidden rounded-xl border border-border bg-surface-muted shadow-card-lg transition-all duration-300 ease-out hover:-translate-y-1 hover:border-primary/20 hover:shadow-card-lg motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:rounded-2xl lg:rounded-3xl">
              <OptimizedImage
                src={resultExample}
                alt="Exemplo ilustrativo de relatório com score e pilares ESG"
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="aspect-[4/3] h-auto w-full max-h-[180px] object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100 sm:max-h-[220px] md:max-h-[260px] lg:max-h-[340px] xl:max-h-[380px]"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 motion-reduce:transition-none"
                aria-hidden
              />
            </div>
            <p className={`mt-2 text-center sm:mt-2.5 md:text-left ${caption}`}>
              Imagem ilustrativa do resultado da avaliação.
            </p>
          </div>

          <div className="flex min-w-0 flex-col justify-center gap-5 sm:gap-6">
            <ul className="flex flex-col gap-2.5 sm:gap-3">
              {benefits.map(({ title, description, Icon }) => (
                <li
                  key={title}
                  className="group relative overflow-hidden rounded-lg border border-transparent bg-[#F9FAFB] transition-all duration-300 ease-out hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                >
                  <div
                    data-scroll-reveal="item"
                    className="relative flex gap-3 p-2.5 sm:gap-3.5 sm:p-3"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border bg-surface-muted/80 transition-colors duration-300 group-hover:border-primary/25 group-hover:bg-primary/[0.06] sm:h-10 sm:w-10">
                      <Icon
                        className="h-3.5 w-3.5 text-secondary transition-colors duration-300 group-hover:text-primary sm:h-4 sm:w-4"
                        strokeWidth={2}
                        aria-hidden
                      />
                    </div>
                    <div className="min-w-0">
                      <p
                        className={`font-semibold text-[#101828] transition-colors duration-300 group-hover:text-primary ${cardTitle}`}
                      >
                        {title}
                      </p>
                      <p className={`mt-0.5 ${cardBody}`}>{description}</p>
                    </div>
                    <div
                      className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full motion-reduce:transition-none"
                      aria-hidden
                    />
                  </div>
                </li>
              ))}
            </ul>



          </div>

        </div>
        <div data-scroll-reveal="cta" className="mt-4 lg:mt-10 border-t border-border/70 pt-4">
          <div className=" flex flex-col items-center justify-center text-center w-full">
            <div>
              <p className={ctaBlockTitle}>
                Receba relatório ESG completo para sua instituição e identifique oportunidades de melhoria.
              </p>
            
            </div>
            <div className="mt-5  flex w-full flex-col items-center justify-center gap-3 sm:mt-4 sm:flex-row sm:gap-6">
            <a href="#finalcta" className={btnPrimaryShine}>
              Iniciar avaliação gratuita
            </a>

              <a href="#faq" className={linkSecondary}>
                Duvidas frequentes
                <ArrowRight className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-all duration-300" strokeWidth={2} aria-hidden />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

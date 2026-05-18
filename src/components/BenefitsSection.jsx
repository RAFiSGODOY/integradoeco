import { useRef } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { ArrowRight } from 'lucide-react'
import {
  btnPrimaryShine,
  cardBody,
  cardLabel,
  cardTitle,
  ctaBlockTitle,
  linkSecondary,
  sectionAsideLabel,
  sectionEyebrow,
  sectionLead,
  sectionTitle,
} from '../constants/typography'
import '../components/style.css'
const benefits = [
  {
    number: '01',
    title: 'Identifique riscos cedo',
    description: 'Antecipe pontos críticos antes de impactar operação e reputação.',
  },
  {
    number: '02',
    title: 'Aumente a credibilidade',
    description: 'Demonstre compromisso com boas práticas para stakeholders.',
  },
  {
    number: '03',
    title: 'Melhore decisões',
    description: 'Use dados claros para priorizar ações com segurança.',
  },
  {
    number: '04',
    title: 'Prepare-se para exigências',
    description: 'Atenda demandas de sustentabilidade e transparência.',
  },

]

function CtaActions({ className }) {
  return (
    <div data-scroll-reveal="cta" className={className}>
      <div className="pt-4 border-t border-border/70 justify-center items-center lg:justify-start lg:items-start">
        <div className=" flex flex-col items-center justify-center text-center lg:text-left lg:items-start lg:justify-start w-full">
          <div>
            <p className={ctaBlockTitle}>
              Faça a avaliação e descubra seu nível ESG agora. Sem burocracia, sem cadastro longo.
            </p>

          </div>
          <div className="mt-4  flex w-full flex-col items-center justify-center gap-3 sm:mt-4 sm:flex-row sm:gap-6 lg:justify-start">
            <a href="#finalcta" className={btnPrimaryShine}>
              Iniciar avaliação gratuita
            </a>

            <a href="#resultado" className={linkSecondary}>
              Ver exemplo de relatório
              <ArrowRight className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-all duration-300" strokeWidth={2} aria-hidden />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

function BenefitItem({ benefit }) {
  return (
    <article
      data-scroll-reveal="item"
      className="group relative border-b border-border/70 py-3 last:border-b-0 sm:py-4"
    >
      <p className={cardLabel}>{benefit.number}</p>
      <h3 className={`mt-1 ${cardTitle}`}>{benefit.title}</h3>
      <p className={`mt-1 sm:mt-1.5 ${cardBody}`}>{benefit.description}</p>
      <div
        className="absolute bottom-0 left-0 h-0.5 w-0 bg-secondary transition-all duration-300 group-hover:w-full motion-reduce:transition-none"
        aria-hidden
      />
    </article>
  )
}

export default function BenefitsSection() {
  const sectionRef = useRef(null)
  const midpoint = Math.ceil(benefits.length / 2)
  const firstColumn = benefits.slice(0, midpoint)
  const secondColumn = benefits.slice(midpoint)

  useScrollReveal(sectionRef)

  return (
    <section
      ref={sectionRef}
      id="beneficios"
      className="relative overflow-x-hidden bg-[#F9FAFB] px-5 py-10 font-inter scroll-mt-[calc(env(safe-area-inset-top,0px)+1.25rem+3.5rem+0.75rem)] sm:scroll-mt-[calc(env(safe-area-inset-top,0px)+1.25rem+3.625rem+1rem)] sm:py-14 md:scroll-mt-[calc(env(safe-area-inset-top,0px)+1.25rem+3.625rem+1rem)] md:py-16 lg:scroll-mt-[calc(env(safe-area-inset-top,0px)+1.25rem+4rem+1rem)] lg:py-22 xl:scroll-mt-[calc(env(safe-area-inset-top,0px)+1.25rem+4.25rem+1rem)] xl:py-26"
    >
      <div className="container-main">
        <div className="grid items-start gap-8 sm:gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12 xl:gap-14">
          <div className="flex min-w-0 flex-col items-center text-center lg:items-start lg:text-left">
            <div
              data-scroll-reveal="text"
              className="mb-1 inline-flex items-center border-b-2 border-secondary px-1 py-0.5 sm:mb-1.5 sm:px-2 sm:py-0.5 md:mb-2"
            >
              <span className={sectionEyebrow}>Benefícios</span>
            </div>

            <h2
              data-scroll-reveal="text"
              className={sectionTitle}
            >
              Por que fazer o diagnóstico ESG
            </h2>

            <p
              data-scroll-reveal="text"
              className={`mt-2 max-w-md md:max-w-lg sm:mt-2.5 ${sectionLead}`}
            >
              Identifique riscos, fortaleça reputação e decida com dados objetivos sem burocracia e sem custo.
            </p>

            <CtaActions className="mt-5 hidden w-full flex-row flex-wrap items-center justify-center gap-3 sm:mt-6 sm:gap-6 lg:flex lg:justify-start" />
          </div>

          <div className="min-w-0">
            <p
              data-scroll-reveal="label"
              className={`mb-3 text-center sm:mb-4 lg:text-left ${sectionAsideLabel}`}
            >
              O que você ganha
            </p>

            <div className="grid gap-x-8 sm:grid-cols-2 sm:gap-x-10 lg:gap-x-12">
              <div>
                {firstColumn.map((benefit) => (
                  <BenefitItem key={benefit.number} benefit={benefit} />
                ))}
              </div>
              <div>
                {secondColumn.map((benefit) => (
                  <BenefitItem key={benefit.number} benefit={benefit} />
                ))}
              </div>
            </div>
          </div>

          <CtaActions className="mt-6 flex w-full flex-col items-center justify-center gap-3 sm:flex-row sm:gap-6 lg:hidden" />
        </div>
      </div>
    </section>
  )
}

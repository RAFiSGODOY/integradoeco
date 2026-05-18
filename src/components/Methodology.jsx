import { useRef } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { ArrowRight } from 'lucide-react'
import {
  btnPrimaryShine,
  cardBody,
  cardTitle,
  ctaBlockTitle,
  linkSecondary,
  sectionAsideLabel,
  sectionEyebrow,
  sectionLead,
  sectionTitle,
} from '../constants/typography'

import { sealBronze, sealPrata, sealOuro } from '../assets/images'
import OptimizedImage from './OptimizedImage'

const levels = [
  {
    id: 'bronze',
    name: 'Bronze',
    range: '0 – 49',
    label: 'Iniciante',
    description:
      'Primeiras práticas ESG com lacunas a evoluir. O selo orienta prioridades.',
    seal: sealBronze,
    sealAlt: 'Selo ESG nível Bronze',
    badgeClass: 'bg-[#B87333]/12 text-[#8B5A2B] border-[#B87333]/25',
  },
  {
    id: 'prata',
    name: 'Prata',
    range: '50 – 74',
    label: 'Intermediário',
    description:
      'Práticas estruturadas em boa parte dos pilares. Maturidade em construção.',
    seal: sealPrata,
    sealAlt: 'Selo ESG nível Prata',
    badgeClass: 'bg-[#8A9BA8]/15 text-[#4A5F6E] border-[#8A9BA8]/30',
  },
  {
    id: 'ouro',
    name: 'Ouro',
    range: '75 – 100',
    label: 'Avançado',
    description:
      'Alto nível de maturidade, com práticas integradas à estratégia institucional.',
    seal: sealOuro,
    sealAlt: 'Selo ESG nível Ouro',
    badgeClass: 'bg-[#C9A227]/15 text-[#7A6520] border-[#C9A227]/30',
  },
]

function CtaActions({ className }) {
  return (
    <div data-scroll-reveal="cta" className={className}>
      <div className="mt-4 border-t border-border/70 pt-4">
          <div className=" flex flex-col items-center justify-center text-center lg:items-start lg:justify-start lg:text-left w-full">
            <div>
              <p className={ctaBlockTitle}>Descubra em qual nível sua instituição se encontra.</p>
            
            </div>
            <div className="mt-4 flex w-full flex-col items-center justify-center gap-3 sm:mt-4 sm:flex-row sm:gap-6">
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

function SealCard({ level }) {
  return (
    <article
      data-scroll-reveal="item"
      role="listitem"
      className="group relative flex min-w-0 flex-col items-center overflow-hidden rounded-xl border border-border bg-white p-3 text-center shadow-card transition-all duration-300 ease-out hover:-translate-y-1 hover:border-primary/20 hover:shadow-card-lg motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:p-4"
    >
      <div className="flex h-14 w-14 shrink-0 items-center justify-center sm:h-16 sm:w-16">
        <OptimizedImage
          src={level.seal}
          alt={level.sealAlt}
          className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        />
      </div>

      <span
        className={`mt-2 inline-flex rounded-md border px-1.5 py-0.5 text-xs font-semibold uppercase tracking-[0.08em] sm:mt-2.5 sm:px-2 ${level.badgeClass}`}
      >
        {level.name}
      </span>

      <h3 className={`mt-1.5 ${cardTitle}`}>{level.label}</h3>

      <p className="mt-0.5 text-xs font-medium uppercase tracking-[0.1em] text-muted sm:text-sm">
        Nota: {level.range}
      </p>

      <p className={`mt-2 ${cardBody}`}>{level.description}</p>

      <div
        className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full motion-reduce:transition-none"
        aria-hidden
      />
    </article>
  )
}

export default function MethodologySection() {
  const sectionRef = useRef(null)
  useScrollReveal(sectionRef)

  return (
    <section
      ref={sectionRef}
      id="metodologia-estruturada"
      className="relative overflow-x-hidden bg-white px-5 py-10 font-inter scroll-mt-[calc(env(safe-area-inset-top,0px)+1.25rem+3.5rem+0.75rem)] sm:scroll-mt-[calc(env(safe-area-inset-top,0px)+1.25rem+3.625rem+1rem)] sm:py-14 md:scroll-mt-[calc(env(safe-area-inset-top,0px)+1.25rem+3.625rem+1rem)] md:py-16 lg:scroll-mt-[calc(env(safe-area-inset-top,0px)+1.25rem+4rem+1rem)] lg:py-22 xl:scroll-mt-[calc(env(safe-area-inset-top,0px)+1.25rem+4.25rem+1rem)] xl:py-26"
    >
      <div className="container-main">
        <div className="grid items-start gap-8 sm:gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12 xl:gap-14">
          <div className="flex min-w-0 flex-col items-center text-center lg:items-start lg:text-left">
            <div
              data-scroll-reveal="text"
              className="mb-1 inline-flex items-center border-b-2 border-secondary px-1 py-0.5 sm:mb-1.5 sm:px-2 sm:py-0.5 md:mb-2"
            >
              <span className={sectionEyebrow}>Selos ESG</span>
            </div>

            <h2
              data-scroll-reveal="text"
              className={sectionTitle}
            >
              Como funcionam os selos ESG
            </h2>

            <p
              data-scroll-reveal="text"
              className={`mt-2 max-w-md md:max-w-lg sm:mt-2.5 ${sectionLead}`}
            >
              Ao final do questionário, sua instituição recebe um score de 0 a 100 e um selo Bronze, Prata ou Ouro
              que resume a maturidade ESG.
            </p>

            <CtaActions className="mt-5 hidden w-full flex-row flex-wrap items-center justify-center gap-3 sm:mt-6 sm:gap-6 lg:flex lg:justify-start" />
          </div>

          <div className="min-w-0 w-full">
            <p
              data-scroll-reveal="label"
              className={`mb-3 text-center sm:mb-4 lg:text-left ${sectionAsideLabel}`}
            >
              Níveis de classificação
            </p>

            <div
              className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-1 lg:gap-3 xl:grid-cols-3 xl:gap-4"
              role="list"
              aria-label="Níveis de selos ESG"
            >
              {levels.map((level) => (
                <SealCard key={level.id} level={level} />
              ))}
            </div>
          </div>
        </div>

        <CtaActions className="mt-6 flex w-full flex-col items-center justify-center gap-3 sm:flex-row sm:gap-6 lg:hidden" />
      </div>
    </section>
  )
}

import { useRef } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { ArrowRight, Award, BarChart3, ClipboardList } from 'lucide-react'

const bodyClass = 'text-xs leading-snug text-muted sm:text-sm sm:leading-relaxed'

const linkClass =
  'font-semibold text-primary underline-offset-2 transition-colors hover:text-primary-hover hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-1 rounded-sm'

const steps = [
  {
    number: '01',
    icon: ClipboardList,
    title: 'Responda o questionário',
    description:
      'Perguntas objetivas sobre práticas ambientais, sociais e de governança, sem jargão.',
    pillarsLink: true,
  },
  {
    number: '02',
    icon: BarChart3,
    title: 'Análise automática',
    description:
      'O sistema consolida as respostas e calcula o score ESG com critérios consistentes.',
  },
  {
    number: '03',
    icon: Award,
    title: 'Receba seu relátorio ESG',
    description: 'Veja score, desempenho por pilar e selo (Bronze, Prata ou Ouro).',
    metodologiaLink: true,
  },
]

function StepDescription({ step }) {
  if (step.pillarsLink) {
    return (
      <p className={bodyClass}>
        Perguntas objetivas sobre{' '}
        <a href="#pilares" className={linkClass}>
          práticas ESG
        </a>
        , sem jargão.
      </p>
    )
  }

  if (step.metodologiaLink) {
    return (
      <p className={bodyClass}>
        {step.description}{' '}
        <a href="#metodologia-estruturada" className={linkClass}>
          Saiba como funcionam os selos
        </a>
        .
      </p>
    )
  }

  return <p className={bodyClass}>{step.description}</p>
}

function TimelineNode({ step }) {
  const Icon = step.icon

  return (
    <span className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-secondary/30 bg-white text-secondary shadow-[0_0_0_4px_#fff] transition-colors duration-300 group-hover:border-secondary group-hover:bg-secondary/5 sm:h-10 sm:w-10">
      <Icon className="h-4 w-4 sm:h-[18px] sm:w-[18px]" strokeWidth={2} aria-hidden />
      <span className="sr-only">Passo {step.number}</span>
    </span>
  )
}

function TimelineStep({ step, isLast }) {
  return (
    <li
      data-scroll-reveal="item"
      className="group relative flex w-full min-w-0 gap-3 sm:gap-4 lg:flex-col lg:items-center lg:gap-3 lg:text-center"
    >
      <div className="relative flex w-9 shrink-0 flex-col items-center sm:w-10 lg:w-full lg:max-w-[11rem]">
        <TimelineNode step={step} />
        {!isLast ? (
          <>
            <span
              className="absolute left-1/2 top-9 h-[calc(100%+1.25rem)] w-px -translate-x-1/2 bg-border sm:top-10 lg:hidden"
              aria-hidden
            />
            <span
              className="pointer-events-none absolute left-1/2 top-[1.125rem] hidden h-px -translate-y-1/2 bg-border sm:top-5 lg:block lg:w-[calc(100%+1.5rem)] xl:w-[calc(100%+2rem)]"
              aria-hidden
            />
          </>
        ) : null}
      </div>

      <article
        className={`min-w-0 flex-1 text-pretty lg:max-w-[16rem] lg:px-1 xl:max-w-xs ${isLast ? 'pb-0' : 'pb-8 sm:pb-10 lg:pb-0'}`}
      >
        <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-secondary sm:text-[10px]">
          Passo {step.number}
        </p>
        <h3 className="mt-1 text-sm font-semibold tracking-tight text-[#101828] sm:text-base">
          {step.title}
        </h3>
        <div className="mt-2 sm:mt-2.5">
          <StepDescription step={step} />
        </div>
      </article>
    </li>
  )
}

export default function HowItWorks() {
  const sectionRef = useRef(null)
  useScrollReveal(sectionRef)

  return (
    <section
      ref={sectionRef}
      id="como-funciona"
      className="relative overflow-x-hidden bg-white px-5 py-10 font-inter scroll-mt-[calc(env(safe-area-inset-top,0px)+1.25rem+3.5rem+0.75rem)] sm:scroll-mt-[calc(env(safe-area-inset-top,0px)+1.25rem+3.625rem+1rem)] sm:py-14 md:scroll-mt-[calc(env(safe-area-inset-top,0px)+1.25rem+3.625rem+1rem)] md:py-16 lg:scroll-mt-[calc(env(safe-area-inset-top,0px)+1.25rem+4rem+1rem)] lg:py-22 xl:scroll-mt-[calc(env(safe-area-inset-top,0px)+1.25rem+4.25rem+1rem)] xl:py-26"
    >
      <div className="container-main">
        <header className="flex flex-col gap-2 sm:gap-3 ">
          <div className="min-w-0 text-center ">
            <div
              data-scroll-reveal="text"
              className="mb-1 inline-flex items-center border-b-2 border-secondary px-1 py-0.5 sm:mb-1.5 sm:px-2 sm:py-0.5 md:mb-2"
            >
              <span className="text-[9px] font-semibold tracking-wide text-secondary sm:text-[10px] md:text-[11px] lg:text-xs">
                Como funciona
              </span>
            </div>
            <h2
              data-scroll-reveal="text"
              className="text-pretty text-lg font-semibold tracking-tight text-[#101828] sm:text-xl lg:text-2xl"
            >
              Seu relatório ESG em 3 passos
            </h2>
          </div>

          <p
            data-scroll-reveal="text"
            className="min-w-0 mx-auto max-w-md text-center text-xs leading-snug text-muted sm:text-sm sm:leading-relaxed lg:max-w-sm lg:pb-0.5"
          >
            Responda, analise automaticamente e veja o nível ESG da sua instituição.
          </p>
        </header>

        <div className="relative mx-auto mt-8 max-w-2xl sm:mt-10 lg:mt-12 lg:max-w-5xl xl:max-w-6xl">
          <div
            className="pointer-events-none absolute left-[16.666%] right-[16.666%] top-5 hidden h-px bg-border lg:block"
            aria-hidden
          />

          <ol className="relative w-full min-w-0 list-none lg:grid lg:grid-cols-3 lg:items-start lg:gap-6 xl:gap-8">
            {steps.map((step, index) => (
              <TimelineStep
                key={step.number}
                step={step}
                isLast={index === steps.length - 1}
              />
            ))}
          </ol>
        </div>

        <div data-scroll-reveal="cta" className="mt-8 border-t border-border/70 pt-4">
          <div className=" flex flex-col items-center justify-center text-center w-full">
            <div>
              <p className="text-pretty text-sm font-semibold tracking-tight text-[#101828] sm:text-base">
                Avalie-se gratuitamente e receba o relatório ESG da sua instituição.
              </p>
            
            </div>
            <div className="mt-4 flex w-full flex-col items-center justify-center gap-3 sm:mt-4 sm:flex-row sm:gap-6">
            <a
              href="#finalcta"
              className=" rounded-tl-full rounded-br-full bg-primary text-paper hover:bg-primary-hover transition-all duration-300 hover:-translate-y-0.5 text-center  px-5 py-1.5 text-xs  md:px-10 md:py-2.5  md:text-xs  lg:px-20 lg:py-2.5  lg:text-base">
              Iniciar avaliação gratuita
            </a>

              <a
                href="#resultado"
                className="group inline-flex items-center gap-1.5 text-[10px] font-medium text-secondary transition-colors hover:text-primary sm:text-[11px] md:text-xs"
              >
                Ver exemplo de relatório
                <ArrowRight className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-all duration-300" strokeWidth={2} aria-hidden />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

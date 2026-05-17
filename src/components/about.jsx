import { useRef } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import aboutImage from '../assets/about-esg.png'
import ecoalternativa from '../assets/ecoalternativa.png'
import integrado from '../assets/integrado.jpg'

function PartnersBlock({ className = '' }) {
  return (
    <div className={className}>
      <p
        data-scroll-reveal="label"
        className="text-center text-[9px] font-semibold uppercase tracking-[0.12em] text-tertiary sm:text-[10px] lg:text-left"
      >
        Instituições parceiras
      </p>

      <div
        data-scroll-reveal="partners"
        className="mt-3 flex flex-wrap items-center justify-center gap-5 sm:mt-4 sm:gap-6 md:gap-8 lg:justify-start"
      >
        <img
          src={ecoalternativa}
          alt="Eco Alternativa"
          className="h-10 w-auto max-w-[min(100%,120px)] object-contain sm:h-11 md:h-12 lg:h-14"
          loading="lazy"
          decoding="async"
        />
        <img
          src={integrado}
          alt="Integrado"
          className="h-10 w-auto max-w-[min(100%,150px)] object-contain sm:h-11 md:h-12 lg:h-14"
          loading="lazy"
          decoding="async"
        />
      </div>
    </div>
  )
}

export default function AboutSection() {
  const sectionRef = useRef(null)
  useScrollReveal(sectionRef)

  return (
    <section
      ref={sectionRef}
      id="sobre"
      className="relative overflow-x-hidden scroll-mt-[calc(env(safe-area-inset-top,0px)+1.25rem+3.5rem+0.75rem)] bg-white px-5 py-10 font-inter sm:scroll-mt-[calc(env(safe-area-inset-top,0px)+1.25rem+3.625rem+1rem)] sm:py-14 md:scroll-mt-[calc(env(safe-area-inset-top,0px)+1.25rem+3.625rem+1rem)] md:py-16 lg:scroll-mt-[calc(env(safe-area-inset-top,0px)+1.25rem+4rem+1rem)] lg:py-22 xl:scroll-mt-[calc(env(safe-area-inset-top,0px)+1.25rem+4.25rem+1rem)] xl:py-36"
    >
      <div className="container-main">
        <div className="grid w-full items-start justify-center gap-8 sm:gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12 xl:gap-14">
          <div className="flex min-w-0 flex-col items-center justify-center text-center lg:items-start lg:justify-start lg:text-left">
            <div
              data-scroll-reveal="text"
              className="mb-1 inline-flex items-center border-b-2 border-secondary px-1 py-0.5 sm:mb-1.5 sm:px-2 sm:py-0.5 md:mb-2"
            >
              <span className="text-[9px] font-semibold tracking-wide text-secondary sm:text-[10px] md:text-[11px] lg:text-xs">
                Sobre nós
              </span>
            </div>

            <h2
              data-scroll-reveal="text"
              className="text-pretty text-lg font-semibold tracking-tight text-[#101828] sm:text-xl lg:text-2xl"
            >
              Diagnóstico ESG para sua instituição
            </h2>

            <p
              data-scroll-reveal="text"
              className="mt-2 max-w-md text-xs leading-snug text-muted sm:mt-2.5 sm:text-sm sm:leading-relaxed md:max-w-lg"
            >
              O Somos Sustentáveis ajuda instituições a entenderem sua maturidade ESG por meio de uma avaliação
              estruturada, baseada nos pilares Ambiental, Social e Governança. A proposta é transformar respostas simples
              em um diagnóstico visual, com score, nível de classificação e recomendações para apoiar decisões
              estratégicas.
            </p>

            <PartnersBlock className="mt-5 hidden w-full sm:mt-6 md:mt-7 lg:block" />
          </div>

          <div
            data-scroll-reveal="image"
            data-scroll-start="top bottom-=12%"
            className="relative w-full max-w-full sm:max-w-full md:max-w-full lg:max-w-[600px] xl:max-w-[660px]"
          >
            <div className="group relative overflow-hidden rounded-xl border border-border bg-surface-muted shadow-card-lg transition-all duration-300 ease-out hover:-translate-y-1 hover:border-primary/20 hover:shadow-card-lg motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:rounded-2xl lg:rounded-3xl">
              <img
                src={aboutImage}
                alt="Exemplo ilustrativo de relatório com score e pilares ESG"
                className="aspect-[4/3] h-auto max-h-[180px] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100 sm:max-h-[300px] md:max-h-[320px] lg:max-h-[260px] lg:min-h-0 xl:max-h-[380px]"
                loading="lazy"
                decoding="async"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 motion-reduce:transition-none"
                aria-hidden
              />
            </div>
          </div>

          <PartnersBlock className="mt-5 w-full sm:mt-6 md:mt-7 lg:hidden" />
        </div>
      </div>
    </section>
  )
}

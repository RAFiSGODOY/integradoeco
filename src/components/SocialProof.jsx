import { useRef } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote:
      'O diagnóstico nos deu clareza sobre onde investir em governança e ambiente. Em poucos minutos tínhamos um material objetivo para apresentar à diretoria.',
    role: 'Gestão institucional',
    org: 'Organização do setor social',
  },
  {
    quote:
      'A avaliação gratuita foi o ponto de partida para estruturar nosso plano ESG. O score por pilar facilitou priorizar ações com a equipe.',
    role: 'Sustentabilidade',
    org: 'Instituição parceira',
  },
]

export default function SocialProof() {
  const sectionRef = useRef(null)
  useScrollReveal(sectionRef)

  return (
    <section
      ref={sectionRef}
      id="prova-social"
      className="relative overflow-x-hidden bg-paper px-5 py-10 font-inter scroll-mt-[calc(env(safe-area-inset-top,0px)+1.25rem+3.5rem+0.75rem)] sm:scroll-mt-[calc(env(safe-area-inset-top,0px)+1.25rem+3.625rem+1rem)] sm:py-14 md:scroll-mt-[calc(env(safe-area-inset-top,0px)+1.25rem+3.625rem+1rem)] md:py-16 lg:scroll-mt-[calc(env(safe-area-inset-top,0px)+1.25rem+4rem+1rem)] lg:py-22 xl:scroll-mt-[calc(env(safe-area-inset-top,0px)+1.25rem+4.25rem+1rem)] xl:py-26"
    >
      <div className="container-main">
        <div className="mx-auto max-w-3xl text-center">
          <div
            data-scroll-reveal="text"
            className="mb-1 inline-flex items-center border-b-2 border-secondary px-1 py-0.5 sm:mb-1.5 sm:px-2 sm:py-0.5 md:mb-2"
          >
            <span className="text-[9px] font-semibold uppercase tracking-wide text-secondary sm:text-[10px] md:text-[11px] lg:text-xs">
              Confiança
            </span>
          </div>
          <h2
            data-scroll-reveal="text"
            className="text-pretty text-lg font-semibold tracking-tight text-[#101828] sm:text-xl lg:text-2xl"
          >
            Instituições que já deram o primeiro passo
          </h2>
          <p
            data-scroll-reveal="text"
            className="mx-auto mt-2 max-w-2xl text-xs leading-snug text-muted sm:mt-2.5 sm:text-sm sm:leading-relaxed lg:max-w-lg"
          >
            Diagnósticos ESG objetivos para apoiar decisões, reputação e evolução contínua sem burocracia.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 md:grid-cols-2 md:gap-6">
          {testimonials.map((item) => (
            <blockquote
              key={item.quote.slice(0, 24)}
              data-scroll-reveal="item"
              className="flex flex-col rounded-xl border border-border bg-paper p-4 shadow-card sm:rounded-2xl sm:p-5"
            >
              <Quote className="h-5 w-5 text-secondary/60 sm:h-6 sm:w-6" aria-hidden />
              <p className="mt-2.5 flex-1 text-xs leading-snug text-[#101828] sm:mt-3 sm:text-sm sm:leading-relaxed">
                &ldquo;{item.quote}&rdquo;
              </p>
              <footer className="mt-3 border-t border-border pt-3 sm:mt-4 sm:pt-4">
                <p className="text-[10px] font-semibold text-primary sm:text-xs">{item.role}</p>
                <p className="mt-0.5 text-[10px] text-muted sm:text-xs">{item.org}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>

  )
}

import { useRef } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { Quote } from 'lucide-react'
import { sectionEyebrow, sectionLead, sectionTitle } from '../constants/typography'
import { sealBronze, sealPrata, sealOuro } from '../assets/images'
import OptimizedImage from './OptimizedImage'

const seals = {
  bronze: {
    src: sealBronze,
    alt: 'Selo ESG nível Bronze',
    label: 'Bronze',
  },
  prata: {
    src: sealPrata,
    alt: 'Selo ESG nível Prata',
    label: 'Prata',
  },
  ouro: {
    src: sealOuro,
    alt: 'Selo ESG nível Ouro',
    label: 'Ouro',
  },
}

const testimonials = [
  {
    id: '1',
    quote:
      'O diagnóstico nos deu clareza sobre onde investir em governança e ambiente. Em poucos minutos tínhamos um material objetivo para apresentar à diretoria.',
    role: 'Gestão institucional',
    org: 'Organização do setor social',
    seal: 'ouro',
    score: 92,
  },
  {
    id: '2',
    quote:
      'A avaliação gratuita foi o ponto de partida para estruturar nosso plano ESG. O score por pilar facilitou priorizar ações com a equipe.',
    role: 'Sustentabilidade',
    org: 'Instituição parceira',
    seal: 'ouro',
    score: 88,
  },
  {
    id: '3',
    quote:
      'Conseguimos mapear lacunas de governança que não apareciam em relatórios internos. O relatório visual ajudou muito na conversa com o conselho.',
    role: 'Conselho administrativo',
    org: 'Associação sem fins lucrativos',
    seal: 'prata',
    score: 68,
  },
  {
    id: '4',
    quote:
      'Processo simples e rápido. Em menos de uma hora tínhamos indicadores claros para começar nossa jornada de sustentabilidade.',
    role: 'Diretoria executiva',
    org: 'Cooperativa de crédito',
    seal: 'ouro',
    score: 86,
  },
  {
    id: '5',
    quote:
      'O breakdown por pilares Ambiental, Social e Governança trouxe uma visão equilibrada. Facilitou alinhar áreas que antes trabalhavam isoladas.',
    role: 'Coordenação ESG',
    org: 'Indústria de manufatura',
    seal: 'prata',
    score: 62,
  },
  {
    id: '6',
    quote:
      'Boa ferramenta para dar o primeiro passo. Alguns critérios poderiam ser mais detalhados para o nosso setor, mas o resultado já orientou prioridades.',
    role: 'Compliance',
    org: 'Empresa de serviços',
    seal: 'bronze',
    score: 38,
  },
  {
    id: '7',
    quote:
      'Usamos o score ESG em nossa apresentação a investidores. A credibilidade do diagnóstico estruturado fez diferença na rodada.',
    role: 'Relações com investidores',
    org: 'Startup de impacto',
    seal: 'ouro',
    score: 94,
  },
  {
    id: '8',
    quote:
      'Diagnóstico objetivo sem burocracia. A equipe conseguiu responder no mesmo dia e tivemos o relatório pronto para revisão interna.',
    role: 'Recursos humanos',
    org: 'Rede de educação',
    seal: 'prata',
    score: 71,
  },
  {
    id: '9',
    quote:
      'Ainda estamos adaptando processos, mas o relatório mostrou onde estamos hoje. Útil como linha de base para metas futuras.',
    role: 'Operações',
    org: 'ONG ambiental',
    seal: 'bronze',
    score: 24,
  },
  {
    id: '10',
    quote:
      'Excelente ponto de partida para instituições que querem evoluir em ESG sem contratar consultoria cara no início.',
    role: 'Planejamento estratégico',
    org: 'Fundação empresarial',
    seal: 'ouro',
    score: 81,
  },
]

function SealBadge({ seal, score }) {
  const sealData = seals[seal]

  return (
    <div
      className="flex shrink-0 items-center gap-1.5"
      aria-label={`Nota ESG ${score} de 100, selo ${sealData.label}`}
    >
      <OptimizedImage
        src={sealData.src}
        alt={sealData.alt}
        className="h-8 w-8 object-contain sm:h-9 sm:w-9"
      />
      <p className="leading-none">
        <span className="text-sm font-bold tabular-nums text-primary sm:text-base">{score}</span>
        <span className="text-xs font-medium text-muted sm:text-sm">/100</span>
      </p>
    </div>
  )
}

function TestimonialCard({ item }) {
  return (
    <blockquote className="flex min-h-[6.75rem] w-[min(92vw,22rem)] shrink-0 flex-col justify-between rounded-lg border border-border bg-paper px-4 py-3 shadow-card sm:min-h-[7rem] sm:w-[28rem] sm:px-5 sm:py-3.5 md:w-[32rem]">
      <div className="flex items-center justify-between gap-3">
        <Quote className="h-4 w-4 shrink-0 text-secondary/60 sm:h-5 sm:w-5" aria-hidden />
        <SealBadge seal={item.seal} score={item.score} />
      </div>
      <p className="mt-2 line-clamp-2 text-sm leading-snug text-[#101828] sm:mt-2.5 sm:text-base sm:leading-relaxed">
        &ldquo;{item.quote}&rdquo;
      </p>
      <footer className="mt-2 flex flex-wrap items-baseline gap-x-2 gap-y-0 border-t border-border pt-2 sm:mt-2.5 sm:pt-2.5">
        <p className="text-xs font-semibold text-primary sm:text-sm">{item.role}</p>
        <span className="text-xs text-border" aria-hidden>
          ·
        </span>
        <p className="text-xs text-muted sm:text-sm">{item.org}</p>
      </footer>
    </blockquote>
  )
}

function MarqueeRow({ items, direction }) {
  const loop = [...items, ...items]
  const trackClass =
    direction === 'right'
      ? 'testimonials-marquee__track testimonials-marquee__track--right'
      : 'testimonials-marquee__track testimonials-marquee__track--left'

  return (
    <div className="testimonials-marquee">
      <div className={trackClass}>
        {loop.map((item, index) => (
          <TestimonialCard key={`${item.id}-${index}`} item={item} />
        ))}
      </div>
    </div>
  )
}

export default function SocialProof() {
  const sectionRef = useRef(null)
  useScrollReveal(sectionRef)

  const rowRight = testimonials.filter((_, i) => i % 2 === 0)
  const rowLeft = testimonials.filter((_, i) => i % 2 === 1)

  return (
    <section
      ref={sectionRef}
      id="prova-social"
      className="relative overflow-x-hidden bg-paper py-10 font-inter scroll-mt-[calc(env(safe-area-inset-top,0px)+1.25rem+3.5rem+0.75rem)] sm:scroll-mt-[calc(env(safe-area-inset-top,0px)+1.25rem+3.625rem+1rem)] sm:py-14 md:scroll-mt-[calc(env(safe-area-inset-top,0px)+1.25rem+3.625rem+1rem)] md:py-16 lg:scroll-mt-[calc(env(safe-area-inset-top,0px)+1.25rem+4rem+1rem)] lg:py-22 xl:scroll-mt-[calc(env(safe-area-inset-top,0px)+1.25rem+4.25rem+1rem)] xl:py-26"
    >
      <div className="container-main px-5">
        <div className="mx-auto max-w-3xl text-center">
          <div
            data-scroll-reveal="text"
            className="mb-1 inline-flex items-center border-b-2 border-secondary px-1 py-0.5 sm:mb-1.5 sm:px-2 sm:py-0.5 md:mb-2"
          >
            <span className={sectionEyebrow}>Confiança</span>
          </div>
          <h2
            data-scroll-reveal="text"
            className={sectionTitle}
          >
            Instituições que já deram o primeiro passo
          </h2>
          <p
            data-scroll-reveal="text"
            className={`mx-auto mt-2 max-w-2xl sm:mt-2.5 lg:max-w-lg ${sectionLead}`}
          >
            Diagnósticos ESG objetivos para apoiar decisões, reputação e evolução contínua sem burocracia.
          </p>
        </div>
      </div>

      <div className="mt-8 space-y-4 sm:mt-10 sm:space-y-5">
        <MarqueeRow items={rowRight} direction="right" />
        <MarqueeRow items={rowLeft} direction="left" />
      </div>
    </section>
  )
}

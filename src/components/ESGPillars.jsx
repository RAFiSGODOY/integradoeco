import { useRef } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { pillarAmbiental, pillarSocial, pillarGovernanca } from '../assets/images'
import OptimizedImage from './OptimizedImage'

const pillars = [
  {
    id: 'environmental',
    number: '01',
    label: 'Ambiental',
    labelEn: 'Environmental',
    imageSrc: pillarAmbiental,
    description:
      'Gestão de recursos naturais, eficiência energética, resíduos e emissões nas operações da instituição.',
    tags: ['Energia', 'Resíduos', 'Emissões', 'Recursos'],
  },
  {
    id: 'social',
    number: '02',
    label: 'Social',
    labelEn: 'Social',
    imageSrc: pillarSocial,
    description:
      'Políticas internas, diversidade, bem-estar e relacionamento com equipes, parceiros e comunidade.',
    tags: ['Diversidade', 'Saúde', 'Comunidade', 'Trabalho'],
  },
  {
    id: 'governance',
    number: '03',
    label: 'Governança',
    labelEn: 'Governance',
    imageSrc: pillarGovernanca,
    description:
      'Transparência, ética, conformidade, gestão de riscos e estrutura de tomada de decisão.',
    tags: ['Ética', 'Compliance', 'Riscos', 'Transparência'],
  },
]

function PillarImage({ pillar }) {
  return (
    <div className="group relative w-full overflow-hidden rounded-xl border border-border bg-surface-muted shadow-card-lg transition-all duration-300 ease-out hover:-translate-y-1 hover:border-primary/20 hover:shadow-card-lg motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:rounded-2xl lg:rounded-3xl">
      <OptimizedImage
        src={pillar.imageSrc}
        alt={`Ilustração do pilar ${pillar.label} (${pillar.labelEn}) na avaliação ESG.`}
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="aspect-[4/3] h-auto max-h-[180px] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100 sm:max-h-[220px] md:max-h-[240px] lg:max-h-[260px] xl:max-h-[380px]"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 motion-reduce:transition-none"
        aria-hidden
      />
    </div>
  )
}

function PillarContent({ pillar }) {
  return (
    <div className="flex min-w-0 flex-col items-center justify-center lg:items-start lg:justify-start text-center lg:text-left">
      <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-secondary sm:text-[10px]">
        Pilar {pillar.number} · {pillar.labelEn}
      </p>
      <h3
        id={`pillar-title-${pillar.id}`}
        className="mt-1 text-pretty text-lg font-semibold tracking-tight text-[#101828] sm:text-xl"
      >
        {pillar.label}
      </h3>
      <p className="mt-2 max-w-lg text-xs leading-snug text-muted sm:mt-2.5 sm:text-sm sm:leading-relaxed">
        {pillar.description}
      </p>
      <ul className="mt-3 flex flex-wrap justify-center gap-1.5 sm:mt-4 sm:gap-2 lg:justify-start">
        {pillar.tags.map((tag) => (
          <li key={tag}>
            <span className="inline-block rounded-md bg-secondary/90 px-2 py-0.5 text-[9px] font-medium text-paper sm:px-2.5 sm:py-1 sm:text-[10px]">
              {tag}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function PillarRow({ pillar, reverse }) {
  return (
    <article
      className="grid items-center gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-10 xl:gap-12"
      aria-labelledby={`pillar-title-${pillar.id}`}
    >
      <div
        data-scroll-reveal="image"
        className={reverse ? 'lg:order-2' : undefined}
      >
        <PillarImage pillar={pillar} />
      </div>
      <div
        data-scroll-reveal="text"
        className={reverse ? 'lg:order-1' : undefined}
      >
        <PillarContent pillar={pillar} />
      </div>
    </article>
  )
}

export default function ESGPillars() {
  const sectionRef = useRef(null)
  useScrollReveal(sectionRef)

  return (
    <section
      ref={sectionRef}
      id="pilares"
      className="relative overflow-x-hidden bg-[#F9FAFB] px-5 py-10 font-inter scroll-mt-[calc(env(safe-area-inset-top,0px)+1.25rem+3.5rem+0.75rem)] sm:scroll-mt-[calc(env(safe-area-inset-top,0px)+1.25rem+3.625rem+1rem)] sm:py-14 md:scroll-mt-[calc(env(safe-area-inset-top,0px)+1.25rem+3.625rem+1rem)] md:py-16 lg:scroll-mt-[calc(env(safe-area-inset-top,0px)+1.25rem+4rem+1rem)] lg:py-22 xl:scroll-mt-[calc(env(safe-area-inset-top,0px)+1.25rem+4.25rem+1rem)] xl:py-26"
    >
      <div className="container-main">
        <header className="flex flex-col gap-2 sm:gap-3 lg:flex-row lg:items-end lg:justify-between lg:gap-6">
          <div className="min-w-0 text-center items-center justify-center lg:items-start lg:justify-start lg:max-w-md lg:text-left">
            <div
              data-scroll-reveal="text"
              className="mb-1 inline-flex items-center border-b-2 border-secondary px-1 py-0.5 sm:mb-1.5 sm:px-2 sm:py-0.5 md:mb-2"
            >
              <span className="text-[9px] font-semibold tracking-wide text-secondary sm:text-[10px] md:text-[11px] lg:text-xs">
                Pilares ESG
              </span>
            </div>
            <h2
              data-scroll-reveal="text"
              className="text-pretty text-lg font-semibold tracking-tight text-[#101828] sm:text-xl lg:text-2xl"
            >
              O que medimos em cada pilar
            </h2>
          </div>

          <p
            data-scroll-reveal="text"
            className="min-w-0 text-center text-xs leading-snug text-muted sm:text-sm sm:leading-relaxed lg:max-w-sm lg:pb-0.5 lg:text-left"
          >
            Critérios objetivos e padronizados para uma avaliação consistente e transparente.
          </p>
        </header>

        <div className="mt-8 flex flex-col gap-10 sm:mt-10 sm:gap-12 lg:mt-12 lg:gap-14 xl:gap-16">
          {pillars.map((pillar, index) => (
            <PillarRow key={pillar.id} pillar={pillar} reverse={index % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  )
}

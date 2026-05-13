import {
  Leaf,
  Users,
  ShieldCheck,
  CheckCircle2,
  BarChart3,
} from 'lucide-react'

import ambiental from '../assets/ambiental.png'
import social from '../assets/social.png'
import governance from '../assets/governanca.png'


const pillars = [
  {
    id: 'environmental',
    label: 'Ambiental',
    labelEn: 'Environmental',
    letter: 'E',
    Icon: Leaf,
    imageSrc: ambiental,
    description:
      'Avalia como a instituição gerencia seus recursos naturais, adota práticas de eficiência energética, controla a geração de resíduos, monitora emissões e reduz impactos ambientais em suas operações. Esse pilar permite identificar oportunidades de melhoria no uso de recursos, na sustentabilidade dos processos e na responsabilidade ambiental da organização.',
    criteria: [
      'Gestão de energia',
      'Controle de emissões',
      'Uso consciente de recursos',
      'Gestão de resíduos',
    ],
    tags: ['Energia', 'Resíduos', 'Emissões', 'Recursos'],
    metric: '4 áreas analisadas',
    metricHint: 'Critérios objetivos',
  },
  {
    id: 'social',
    label: 'Social',
    labelEn: 'Social',
    letter: 'S',
    Icon: Users,
    imageSrc: social,
    description:
      'Analisa as políticas internas da instituição, suas práticas de diversidade e inclusão, o cuidado com o bem-estar dos colaboradores e a qualidade do relacionamento com equipes, parceiros e comunidade. Esse pilar ajuda a compreender o impacto social da organização e identificar oportunidades para fortalecer uma cultura mais justa, segura e responsável.',
    criteria: [
      'Diversidade e inclusão',
      'Saúde e segurança',
      'Relacionamento com a comunidade',
      'Práticas trabalhistas',
    ],
    tags: ['Diversidade', 'Saúde', 'Comunidade', 'Trabalho'],
    metric: '4 dimensões sociais',
    metricHint: 'Indicadores padronizados',
  },
  {
    id: 'governance',
    label: 'Governança',
    labelEn: 'Governance',
    letter: 'G',
    Icon: ShieldCheck,
    imageSrc: governance,
    description:
      'Considera o nível de transparência da instituição, suas práticas éticas, conformidade com normas, estrutura de gestão, processos de tomada de decisão e prestação de contas. Esse pilar ajuda a avaliar a maturidade corporativa da organização e identificar oportunidades para fortalecer a confiança, a responsabilidade e a governança institucional.',
    criteria: [
      'Ética e transparência',
      'Conformidade',
      'Gestão de riscos',
      'Estrutura corporativa',
    ],
    tags: ['Ética', 'Compliance', 'Riscos', 'Transparência'],
    metric: '4 eixos de governança',
    metricHint: 'Maturidade institucional',
  },
]

function PillarImageSlot({ pillar }) {
  const Icon = pillar.Icon

  if (pillar.imageSrc) {
    return (
      <div
        className="relative w-full overflow-hidden rounded-2xl "

      >
        <img src={pillar.imageSrc} alt="" className="aspect-[4/3] h-full w-full object-cover lg:aspect-[5/4]" />
      </div>
    )
  }

  return (
    <div
      className="relative flex aspect-[4/3] w-full flex-col items-center justify-center overflow-hidden rounded-2xl border border-dashed bg-paper lg:aspect-[5/4]"

    >
      <Icon className="mb-2 opacity-[0.15]" size={40} strokeWidth={1.25} aria-hidden />
      <span className="text-[12px] font-medium" >
        Imagem — {pillar.label}
      </span>
    </div>
  )
}

function PillarTextBlock({ pillar }) {
  const Icon = pillar.Icon

  return (
    <div className="relative">
      <span
        className="pointer-events-none absolute -right-2 -top-6 select-none font-bold leading-none sm:-top-8 lg:-right-4"
        style={{
          fontSize: 'clamp(5rem, 14vw, 8rem)',
          color: 'rgba(0, 86, 95, 0.06)',
        }}
        aria-hidden
      >
        {pillar.letter}
      </span>

      <div className="relative z-[1]">
        <div className="mb-4 flex items-center gap-3">

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wider text-secondary" >
              {pillar.labelEn}
            </p>
            <h3 id={`pillar-title-${pillar.id}`} className="text-2xl font-bold tracking-tight sm:text-3xl text-primary" >
              {pillar.label}
            </h3>
          </div>
        </div>

        <p className="mb-6 text-[15px] leading-relaxed text-muted" >
          {pillar.description}
        </p>

        <div className="mb-6">
          <p className="mb-2 text-[12px] font-semibold uppercase tracking-wider" >
            Critérios avaliados
          </p>
          <ul className="space-y-2">
            {pillar.criteria.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <CheckCircle2
                  className="mt-0.5 shrink-0"
                  size={17}
                  strokeWidth={2}
                  color="var(--color-secondary)"
                  aria-hidden
                />
                <span className="text-[14px] font-medium leading-snug text-muted" >
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-6 flex flex-wrap gap-2">
          {pillar.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-lg  px-2.5 py-1 text-[12px] font-medium"
              style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-paper)' }}
            >
              {tag}
            </span>
          ))}
        </div>


      </div>
    </div>
  )
}

export default function ESGPillars() {
  return (
    <section id="pilares" className="font-inter py-24 md:py-28 lg:py-32 bg-white" >
      <div className="container-main mx-auto max-w-[1200px]">
        <header className="mx-auto max-w-3xl text-center md:mb-20">
          <div className="mb-5 inline-flex items-center border-b-2 border-secondary px-2 py-1">
            <span className="text-sm font-semibold tracking-wide text-secondary">
              Metodologia
            </span>
          </div>
          <h2
            className="mb-4 text-3xl font-bold tracking-tight md:text-4xl lg:text-[40px] lg:leading-[1.15]"

          >
            Avaliação baseada nos pilares ESG
          </h2>
          <p className="text-base leading-relaxed md:text-lg text-muted" >
            A metodologia organiza a avaliação em três dimensões essenciais para transformar práticas institucionais em
            indicadores claros, auditáveis e comparáveis.
          </p>
        </header>

        <div className="flex flex-col gap-16 md:gap-20 lg:gap-24 mt-36">
          {pillars.map((pillar, index) => {
            const imageLeft = index % 2 === 0

            return (
              <article
                key={pillar.id}
                className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12"
                aria-labelledby={`pillar-title-${pillar.id}`}
              >
                {imageLeft ? (
                  <>
                    <PillarImageSlot pillar={pillar} />
                    <PillarTextBlock pillar={pillar} />
                  </>
                ) : (
                  <>
                    <PillarTextBlock pillar={pillar} />
                    <PillarImageSlot pillar={pillar} />
                  </>
                )}
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

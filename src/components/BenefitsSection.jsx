import { AlertTriangle, Brain, Star, TrendingUp } from 'lucide-react'

const benefits = [
  {
    icon: AlertTriangle,
    color: '#F04438',
    bg: '#FFF4F3',
    title: 'Identifique riscos cedo',
    description: 'Detecte vulnerabilidades ESG antes que se tornem problemas reputacionais ou regulatórios.',
  },
  {
    icon: Brain,
    color: '#538A95',
    bg: '#EDF4F6',
    title: 'Melhore a tomada de decisão',
    description: 'Dados estruturados para orientar estratégias com foco em sustentabilidade e impacto.',
  },
  {
    icon: Star,
    color: '#FEC84B',
    bg: '#FFFAEB',
    title: 'Aumente sua credibilidade',
    description: 'Um score ESG reconhecido demonstra comprometimento com boas práticas para stakeholders e investidores.',
  },
  {
    icon: TrendingUp,
    color: '#12B76A',
    bg: '#ECFDF3',
    title: 'Prepare-se para o mercado',
    description: 'Antecipe exigências regulatórias e esteja à frente das tendências ESG do setor.',
  },
]

export default function BenefitsSection() {
  return (
    <section id="beneficios" className="bg-surface-muted py-24 lg:py-32">
      <div className="container-main">
        <div className="mx-auto mb-14 max-w-[540px] text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-paper px-4 py-2">
            <span className="text-[13px] font-medium text-muted">Por que avaliar</span>
          </div>
          <h2 className="mb-4 font-bold text-foreground" style={{ fontSize: 'clamp(28px, 3.5vw, 40px)', lineHeight: '1.2' }}>
            Por que avaliar seu nível ESG?
          </h2>
          <p className="text-[17px] text-muted" style={{ lineHeight: '1.6' }}>
            Organizações que medem e monitoram seu desempenho ESG tomam decisões melhores e geram mais valor.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon
            return (
              <div
                key={idx}
                className="flex gap-5 rounded-[20px] border border-border bg-paper p-7 transition-all duration-200 hover:border-border-strong hover:shadow-card-lg"
                style={{ boxShadow: '0 1px 3px rgba(2,2,2,0.05)' }}
              >
                <div
                  className="mt-0.5 flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl"
                  style={{ backgroundColor: benefit.bg }}
                >
                  <Icon size={18} color={benefit.color} strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="mb-1.5 text-[16px] font-semibold text-foreground">{benefit.title}</h3>
                  <p className="text-[14px] text-muted" style={{ lineHeight: '1.6' }}>
                    {benefit.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

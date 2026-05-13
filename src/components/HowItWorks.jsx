import { useState } from 'react'
import { ClipboardList, BarChart3, Award } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: ClipboardList,
    title: 'Responda o questionário',
    description:
      'Preencha uma avaliação estruturada com perguntas objetivas sobre práticas ambientais, sociais e de governança.',
  },
  {
    number: '02',
    icon: BarChart3,
    title: 'Análise automática',
    description:
      'Nosso sistema processa as respostas e calcula o score ESG de forma rápida, transparente e padronizada.',
  },
  {
    number: '03',
    icon: Award,
    title: 'Receba seu nível ESG',
    description:
      'Visualize sua classificação, entenda seu desempenho e identifique oportunidades reais de evolução.',
  },
]

export default function HowItWorks() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section id="metodologia" className="relative bg-white py-28 lg:py-32">
      <div className="container-main">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center border-b-2 border-secondary px-2 py-1">
            <span className="text-sm font-semibold tracking-wide text-secondary">
              Como funciona
            </span>
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-[#101828] md:text-5xl">
            Como funciona nossa avaliação 
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-muted">
            Um processo simples, estruturado e baseado em critérios claros para gerar uma visão objetiva do nível ESG da
            sua instituição.
          </p>
        </div>

        <div className="mt-36 grid gap-6 md:grid-cols-3 lg:gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            const isActive = index === activeIndex

            return (
              <div
                key={step.number}
                role="presentation"
                onMouseEnter={() => setActiveIndex(index)}
                onTouchStart={() => setActiveIndex(index)}
                className={`group relative cursor-default overflow-hidden rounded-2xl border bg-white p-6 transition-all duration-300 md:p-7 ${
                  isActive
                    ? 'border-primary/25  -translate-y-0.5'
                    : 'border-[#EAECF0]  hover:-translate-y-1 hover:border-[#D0D5DD]'
                } ${index === 1 ? 'md:-mt-6' : ''}`}
              >
                <span
                  className={`absolute right-6 top-5 text-6xl font-bold leading-none transition-colors duration-300 ${
                    isActive ? 'text-primary/15' : 'text-[#F2F4F7] group-hover:text-primary/10'
                  }`}
                >
                  {step.number}
                </span>

                <div className="relative z-10">
                  <p
                    className={`mb-3 text-sm font-semibold uppercase tracking-[0.16em] transition-colors duration-300 ${
                      isActive ? 'text-primary' : 'text-secondary'
                    }`}
                  >
                    Passo {step.number}
                  </p>

                  <h3 className="mb-4 text-xl font-bold tracking-tight text-primary">{step.title}</h3>

                  <p className="text-[15px] leading-7 text-muted">{step.description}</p>
                </div>

                {/* Barra inferior: largura total só no card ativo; permanece até outro receber hover */}
                <div
                  className={`absolute bottom-0 left-0 h-1 bg-primary transition-[width] duration-500 ease-out ${
                    isActive ? 'w-full' : 'w-0'
                  }`}
                  aria-hidden="true"
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

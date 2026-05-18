import { useId, useRef, useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { ChevronDown } from 'lucide-react'
import { cardBody, sectionEyebrow, sectionLead, sectionTitle } from '../constants/typography'

const faqItems = [
  {
    question: 'Quanto tempo leva a avaliação?',
    answer:
      'Em média, cerca de 30 minutos. O questionário é objetivo e pode ser respondido em etapas, conforme a disponibilidade da sua equipe.',
  },
  {
    question: 'A avaliação é realmente gratuita?',
    answer:
      'Sim. O diagnóstico com score, nível ESG e visão por pilar é 100% gratuito, sem cadastro longo e com resultado imediato.',
  },
  {
    question: 'Quem pode fazer a avaliação?',
    answer:
      'Qualquer instituição que queira entender sua maturidade ESG — empresas, associações, cooperativas, órgãos e projetos com práticas ambientais, sociais e de governança.',
  },
  {
    question: 'O que acontece com os dados informados?',
    answer:
      'As respostas são usadas apenas para gerar o diagnóstico ESG da sua instituição. Não compartilhamos dados com terceiros sem autorização. Consulte nossa política de privacidade para mais detalhes.',
  },
  {
    question: 'Depois do resultado, existe alguma obrigação de contratação?',
    answer:
      'Não. O diagnóstico gratuito não exige contratação. Se fizer sentido para sua instituição, nossa equipe pode conversar sobre apoio na evolução ESG  por iniciativa sua, sem pressão.',
  },
]

function FaqItem({ item, index, isOpen, onSelect }) {
  const baseId = useId()
  const panelId = `${baseId}-panel`
  const buttonId = `${baseId}-button`

  return (
    <div
      data-scroll-reveal="item"
      className={`border-b border-border transition-colors duration-300 last:border-b-0 ${
        isOpen ? 'bg-[#F9FAFB]/80' : 'bg-transparent'
      }`}
    >
      <h3 className="m-0">
        <button
          id={buttonId}
          type="button"
          onClick={() => onSelect(index)}
          aria-expanded={isOpen}
          aria-controls={panelId}
          className="flex w-full items-center justify-between gap-3 py-3 text-left transition-colors duration-200 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 sm:gap-4 sm:py-3.5"
        >
          <span
            className={`text-sm font-semibold transition-colors duration-200 sm:text-base ${
              isOpen ? 'text-primary' : 'text-[#101828]'
            }`}
          >
            {item.question}
          </span>
          <ChevronDown
            className={`h-4 w-4 shrink-0 text-secondary transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none sm:h-[18px] sm:w-[18px] ${
              isOpen ? 'rotate-180' : 'rotate-0'
            }`}
            aria-hidden
          />
        </button>
      </h3>

      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className={`grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
          isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <p
            className={`pb-3 transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none sm:pb-4 ${cardBody} ${
              isOpen ? 'translate-y-0 opacity-100' : '-translate-y-1 opacity-0'
            }`}
          >
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function FAQ() {
  const sectionRef = useRef(null)
  const [openIndex, setOpenIndex] = useState(0)
  useScrollReveal(sectionRef)

  const handleSelect = (index) => {
    setOpenIndex((current) => (current === index ? -1 : index))
  }

  return (
    <section
      ref={sectionRef}
      id="faq"
      className="relative overflow-x-hidden bg-[#F9FAFB] px-5 py-10 font-inter scroll-mt-[calc(env(safe-area-inset-top,0px)+1.25rem+3.5rem+0.75rem)] sm:scroll-mt-[calc(env(safe-area-inset-top,0px)+1.25rem+3.625rem+1rem)] sm:py-14 md:scroll-mt-[calc(env(safe-area-inset-top,0px)+1.25rem+3.625rem+1rem)] md:py-16 lg:scroll-mt-[calc(env(safe-area-inset-top,0px)+1.25rem+4rem+1rem)] lg:py-22 xl:scroll-mt-[calc(env(safe-area-inset-top,0px)+1.25rem+4.25rem+1rem)] xl:py-26"
    >
      <div className="container-main">
        
        <header className="flex flex-col gap-2 sm:gap-3 lg:flex-row lg:items-end lg:justify-between lg:gap-8 xl:gap-12">
          <div className="min-w-0 lg:max-w-xl">
            <div
              data-scroll-reveal="text"
              className="mb-1 inline-flex items-center border-b-2 border-secondary px-1 py-0.5 sm:mb-1.5 sm:px-2 sm:py-0.5 md:mb-2"
            >
              <span className={sectionEyebrow}>Perguntas frequentes</span>
            </div>
            <h2
              data-scroll-reveal="text"
              className={sectionTitle}
            >
              Tire suas dúvidas antes de começar
            </h2>
          </div>

          <p
            data-scroll-reveal="text"
            className={`min-w-0 max-w-xl text-left lg:max-w-md lg:pb-0.5 xl:max-w-lg ${sectionLead}`}
          >
            Transparência desde o primeiro passo sem surpresas na avaliação gratuita.
          </p>
        </header>

        <div className="mx-auto mt-8 rounded-xl border border-border bg-[#F9FAFB] px-3 shadow-card sm:mt-10 sm:rounded-2xl sm:px-5 md:mt-12 md:px-6">
          {faqItems.map((item, index) => (
            <FaqItem
              key={item.question}
              item={item}
              index={index}
              isOpen={openIndex === index}
              onSelect={handleSelect}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

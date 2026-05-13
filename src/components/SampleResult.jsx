import {
  Gauge,
  LayoutGrid,
  Sparkles,
  ClipboardList,
  ShieldCheck,
} from 'lucide-react'
import resultImage from '../assets/classificacao2.png'

const benefits = [
  {
    title: 'Score geral ESG',
    description: 'Visualize uma pontuação objetiva para entender o nível atual da instituição.',
    Icon: Gauge,
  },
  {
    title: 'Breakdown por pilar',
    description: 'Veja o desempenho separado por Ambiental, Social e Governança.',
    Icon: LayoutGrid,
  },
  {
    title: 'Insights acionáveis',
    description: 'Identifique pontos fortes, riscos e oportunidades de melhoria.',
    Icon: Sparkles,
  },
  {
    title: 'Recomendações práticas',
    description: 'Receba direcionamentos para evoluir sua maturidade ESG.',
    Icon: ClipboardList,
  },
]

export default function SampleResult() {
  return (
    <section id="resultado" className="font-inter bg-paper py-20 md:py-24 lg:py-28">
      <div className="container-main mx-auto max-w-[1200px]">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          {/* Coluna esquerda — valor e conversão */}
          <div className="min-w-0">
          <div className="mb-5 inline-flex items-center border-b-2 border-secondary px-2 py-1">
            <span className="text-sm font-semibold tracking-wide text-secondary">
              Resultado exemplo
            </span>
          </div>

            <h2
              className="mb-4 font-bold tracking-tight text-foreground"
              style={{ fontSize: 'clamp(1.75rem, 2.5vw + 0.5rem, 2.5rem)', lineHeight: '1.2' }}
            >
              Veja um exemplo de resultado ESG
            </h2>

            <p className="mb-10 max-w-xl text-[17px] leading-relaxed text-muted" >
              Após a avaliação, sua instituição recebe um diagnóstico claro com score geral, desempenho por pilar e
              recomendações para evolução.
            </p>

            <ul className="mb-10 flex flex-col gap-8">
              {benefits.map(({ title, description, Icon }) => (
                <li key={title} className="flex gap-4">
                  <div
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] shadow  bg-paper"

                  >
                    <Icon size={20} strokeWidth={1.75}  aria-hidden color="var(--color-secondary)" />
                  </div>
                  <div className="min-w-0 pt-0.5">
                    <p className="mb-1 text-[16px] font-semibold leading-snug text-foreground">{title}</p>
                    <p className="text-[15px] leading-relaxed text-muted" >
                      {description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-3">
              <a
                
                className="inline-flex h-14 w-full items-center justify-center rounded-tl-full rounded-br-full bg-gray-300 px-8 text-[16px] font-semibold leading-tight text-paper shadow-[0_4px_14px_rgba(0,86,95,0.22)] transition-all duration-200 hover:bg-gray-400 hover:shadow-[0_6px_20px_rgba(0,70,77,0.28)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00565F] focus-visible:ring-offset-2 lg:w-auto lg:max-w-[460px]"
              >
                Em breve
              </a>
              <div className="flex items-center gap-2">
                <ShieldCheck size={20} strokeWidth={1.75}  aria-hidden color="var(--color-secondary)" />
                <p className="text-center text-[12px] leading-relaxed text-muted lg:text-left">
                Seus dados estão protegidos e não serão compartilhados com terceiros.
              </p>
              </div>
              
            </div>
          </div>

          {/* Coluna direita — mockup / imagem futura */}
          <div className="min-w-0 lg:justify-self-end lg:pl-2">
            <div
              className="flex min-h-[360px] max-h-[420px] h-[400px] w-full flex-col items-center justify-center  text-center lg:h-[580px] lg:min-h-[520px] lg:max-h-[620px]"
             
            >
              <img src={resultImage} alt="Resultado ESG" className="w-full h-full object-cover" />
             
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

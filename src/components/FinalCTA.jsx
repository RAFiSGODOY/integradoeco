import { ArrowRight } from 'lucide-react'

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-primary py-24 lg:py-32">
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `
            linear-gradient(white 1px, transparent 1px),
            linear-gradient(90deg, white 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />

      <div className="absolute right-[-80px] top-[-80px] h-[320px] w-[320px] rounded-full bg-paper opacity-[0.04]" />
      <div className="absolute bottom-[-60px] left-[-60px] h-[240px] w-[240px] rounded-full bg-paper opacity-[0.04]" />

      <div className="container-main relative text-center">
        <div className="mx-auto max-w-[580px]">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-paper/20 bg-paper/10 px-4 py-2">
            <div className="h-1.5 w-1.5 rounded-full bg-paper" />
            <span className="text-[13px] font-medium text-paper">Avaliação 100% gratuita</span>
          </div>

          <h2 className="mb-5 font-bold text-paper" style={{ fontSize: 'clamp(30px, 4vw, 48px)', lineHeight: '1.15' }}>
            Sua instituição está pronta para evoluir?
          </h2>
          <p className="mb-10 text-paper/70" style={{ fontSize: '18px', lineHeight: '1.65' }}>
            Faça a avaliação e descubra seu nível ESG agora. Sem burocracia, sem cadastro longo.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#"
              className="inline-flex h-14 w-full items-center justify-center gap-2 rounded-2xl bg-paper font-semibold text-primary transition-colors duration-150 hover:bg-surface-muted sm:w-auto"
              style={{
                fontSize: '16px',
                paddingLeft: '28px',
                paddingRight: '28px',
              }}
            >
              Iniciar Avaliação
              <ArrowRight size={18} strokeWidth={2} />
            </a>
            <a
              href="#resultado"
              className="inline-flex h-14 w-full items-center justify-center rounded-2xl border border-paper/30 bg-transparent font-semibold text-paper transition-colors duration-150 hover:bg-paper/10 sm:w-auto"
              style={{
                fontSize: '16px',
                paddingLeft: '24px',
                paddingRight: '24px',
              }}
            >
              Ver exemplo de resultado
            </a>
          </div>

          <p className="mt-6 text-[14px] text-paper/40">Sem cadastro • Resultado instantâneo • Gratuito</p>
        </div>
      </div>
    </section>
  )
}

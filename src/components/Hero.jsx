import background from '../assets/background.png'

export default function Hero() {
  return (
    <section id="inicio" className="relative isolate h-screen overflow-hidden bg-black">
      {/* Background */}
      <img
        src={background}
        alt=""
        decoding="async"
        className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover object-[60%_center] opacity-[0.45]"
      />

      {/* Overlay — abaixo do conteúdo */}
      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(90deg,rgba(0,0,0,0.72)_0%,rgba(0,0,0,0.58)_40%,rgba(0,0,0,0.22)_68%,rgba(0,0,0,0.05)_100%)]"
        aria-hidden="true"
      />

      {/* Transição suave para a próxima seção (branco) — z-[2]: acima do overlay, abaixo do texto */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-[min(2vh,240px)] min-h-[30px] bg-[linear-gradient(to_bottom,transparent_0%,rgba(255,255,255,0.06)_18%,rgba(255,255,255,0.28)_42%,rgba(255,255,255,0.72)_72%,#ffffff_92%,#ffffff_100%)]"
        aria-hidden="true"
      />

      {/* Content — sempre acima do overlay */}
      <div className="relative z-10 container-main pb-16 pt-20 md:pb-20 md:pt-24">
        <div className="flex flex-col items-center gap-12 py-12 lg:flex-row lg:gap-16 lg:py-20">
          {/* Left Content */}
          <div className="flex-1 text-center lg:max-w-[580px] lg:text-left">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center justify-center gap-2  border-b-2 border-paper/65  px-0 py-1 backdrop-blur-sm">
              
              <span className="text-[12px] font-medium tracking-wide text-paper/95">
                Plataforma Inteligente ESG
              </span>
            </div>

            {/* Heading */}
            <h1 className="mb-6 font-bold tracking-tight text-paper">
              <span
                className="block"
                style={{
                  fontSize: 'clamp(42px, 6vw, 72px)',
                  lineHeight: '1.02',
                }}
              >
                Descubra seu
              </span>

              <span
                className="block"
                style={{
                  fontSize: 'clamp(42px, 6vw, 72px)',
                  lineHeight: '1.02',
                }}
              >
                score ESG
              </span>

              <span
                className="block"
                style={{
                  fontSize: 'clamp(42px, 6vw, 72px)',
                  lineHeight: '1.02',
                }}
              >
                em minutos
              </span>
            </h1>

            {/* Description */}
            <p
              className="mx-auto mb-8 max-w-[560px] text-paper/85 lg:mx-0"
              style={{
                fontSize: '18px',
                lineHeight: '1.7',
              }}
            >
              Um diagnóstico ESG rápido e estruturado para instituições que
              buscam desempenho, credibilidade e sustentabilidade.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
              <a
                href="#resultado"
                className="inline-flex h-14 w-full items-center justify-center rounded-tl-full rounded-br-full bg-paper px-7 text-base font-semibold text-primary shadow-[0_4px_20px_rgba(0,0,0,0.25)] transition-all duration-200  hover:translate-y-[-1px] sm:w-auto"
              >
                Iniciar Avaliação Gratuita
              </a>

              <a
                href="#resultado"
                className="inline-flex h-14 w-full items-center justify-center rounded-2xl border border-paper/30 bg-paper/5 px-6 text-base font-semibold text-paper transition-all duration-200 hover:border-paper/55 hover:bg-paper/10 sm:w-auto"
              >
                Ver Resultado Exemplo
              </a>
            </div>

            {/* Trust Text */}
            <p className="mt-4 text-[14px] font-medium tracking-wide text-paper/65">
              Rápido • Gratuito • Resultado imediato
            </p>

            {/* Stats */}
            <div className="mt-10 flex items-center justify-center gap-6 lg:justify-start">
              <div>
                <p className="text-[24px] font-bold tabular-nums text-paper">
                  100+
                </p>
                <p className="text-[13px] font-medium text-paper/75">
                  Questões 
                </p>
              </div>

              <div className="h-10 w-px shrink-0 bg-paper/20" />

              <div>
                <p className="text-[24px] font-bold tabular-nums text-paper">
                  30min
                </p>
                <p className="text-[13px] font-medium text-paper/75">
                  Tempo médio
                </p>
              </div>

              <div className="h-10 w-px shrink-0 bg-paper/20" />

              <div>
                <p className="text-[24px] font-bold tabular-nums text-paper">
                  100%
                </p>
                <p className="text-[13px] font-medium text-paper/75">
                  Gratuito
                </p>
              </div>
            </div>
          </div>

          {/* Right Side Spacer */}
          <div className="hidden flex-1 lg:block" />
        </div>
      </div>
    </section>
  )
}
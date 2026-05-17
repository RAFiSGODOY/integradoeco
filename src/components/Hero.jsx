import background from '../assets/background.png'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex w-full px-5 isolate min-h-screen scroll-mt-[calc(env(safe-area-inset-top,0px)+1.25rem+4rem+0.75rem)] overflow-hidden bg-black sm:min-h-[100vh] sm:scroll-mt-[calc(env(safe-area-inset-top,0px)+1.25rem+4rem+1rem)] md:scroll-mt-[calc(env(safe-area-inset-top,0px)+1.25rem+4.5rem+1rem)] lg:h-[100vh] lg:scroll-mt-[calc(env(safe-area-inset-top,0px)+1.25rem+4.75rem+1rem)]"
    >
      
      <img
        src={background}
        alt=""
        decoding="async"
        className="hero-animate-bg pointer-events-none absolute inset-0 z-0 h-full w-full object-cover object-[60%_center] sm:object-[55%_center] lg:object-[60%_center]"
      />

    
      <div
        className="hero-animate-fade pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(90deg,rgba(0,0,0,0.75)_0%,rgba(0,0,0,0.60)_40%,rgba(0,0,0,0.25)_68%,rgba(0,0,0,0.08)_100%)] sm:bg-[linear-gradient(90deg,rgba(0,0,0,0.72)_0%,rgba(0,0,0,0.58)_40%,rgba(0,0,0,0.22)_68%,rgba(0,0,0,0.05)_100%)]"
        aria-hidden="true"
      />

     
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-[min(3vh,60px)] min-h-[20px] bg-[linear-gradient(to_bottom,transparent_0%,rgba(255,255,255,0.06)_18%,rgba(255,255,255,0.28)_42%,rgba(255,255,255,0.72)_72%,#ffffff_92%,#ffffff_100%)] sm:h-[min(2.5vh,120px)] sm:min-h-[25px] lg:h-[min(2vh,240px)] lg:min-h-[30px]"
        aria-hidden="true"
      />

     <div className="relative z-10 container-main flex min-h-full w-full items-center justify-center pb-6 sm:pb-12 md:pb-16 md:pt-12 lg:pb-20 lg:pt-12">
        <div className="flex w-full flex-col items-center justify-center gap-4 sm:gap-6 md:gap-10 lg:flex-row lg:gap-14 xl:gap-16">
          <div className="w-full  text-center flex flex-col items-center justify-center md:items-start md:justify-start lg:flex-1 lg:text-left">
            <div className="hero-animate-up hero-delay-1 mb-1 inline-flex items-center border-b-2 border-paper/65 px-0 py-0.5 backdrop-blur-sm sm:mb-1.5 md:mb-3">
              <span className="text-[9px] font-medium tracking-wide text-paper/95 sm:text-[10px] md:text-[11px] lg:text-xs">
                Plataforma Inteligente ESG
              </span>
            </div>

            <h1 className="hero-animate-up hero-delay-2 mb-1 max-w-md text-center tracking-tight text-paper sm:mb-1.5 md:mb-2.5 md:text-left lg:mb-4">
              <span className="text-xl leading-[1.1] sm:text-2xl sm:leading-tight md:text-3xl lg:text-4xl">
                Descubra seu <span className="font-bold">score ESG</span> em minutos
              </span>
            </h1>

            <p className="hero-animate-up hero-delay-3 mb-2 max-w-xs text-pretty text-center text-xs leading-snug text-paper/85 sm:mb-3 sm:max-w-md sm:text-sm sm:leading-relaxed md:mb-3.5 md:text-left lg:mx-0">
              Diagnóstico ESG gratuito, rápido e estruturado para instituições que buscam desempenho, credibilidade e
              sustentabilidade.
            </p>

            <div className="hero-animate-up hero-delay-4 mb-2 flex w-fit max-w-full flex-col items-center gap-2 sm:mb-3 sm:max-w-md sm:flex-row sm:items-center sm:justify-center sm:gap-2.5 md:mb-4 md:gap-3 lg:mx-0 lg:w-full lg:max-w-none lg:justify-start">
            <a
              href="#finalcta"
              className=" rounded-tl-full rounded-br-full bg-paper text-primary hover:bg-paper-hover  transition-all duration-300 hover:-translate-y-0.5 text-center  px-5 py-1.5 text-xs  md:px-10 md:py-2.5  md:text-xs  lg:px-20 lg:py-2.5  lg:text-base"
            >
              Iniciar avaliação gratuita
            </a>

              <a
                href="#beneficios"
                className="group inline-flex min-h-9 w-[min(15rem,calc(100vw-2rem))] shrink-0 items-center justify-center gap-1.5 px-2.5 py-1.5 text-center text-[10px] font-semibold leading-snug text-paper transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-paper/50 focus:ring-offset-2 focus:ring-offset-black sm:w-auto sm:max-w-none sm:px-4 sm:text-[11px] md:px-5 md:text-xs"
              >
                Saiba mais
                <ArrowRight
                  className="h-3.5 w-3.5 shrink-0 transition-all duration-300 group-hover:translate-x-1 sm:h-4 sm:w-4"
                  strokeWidth={2}
                  aria-hidden
                />
              </a>
            </div>

          <p className="hero-animate-up hero-delay-5 mb-2.5 text-[10px] font-medium tracking-wide text-paper/65 sm:mb-4 sm:text-xs md:mb-5 lg:mb-6">
              Rápido • Gratuito • Resultado imediato
            </p>

            <div className="hero-animate-up hero-delay-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 sm:gap-x-4 sm:gap-y-2.5 md:gap-x-6 lg:justify-start lg:gap-x-8">
              <div className="text-center lg:text-left">
                <p className="text-sm font-bold tabular-nums text-paper sm:text-base md:text-lg">
                  100+
                </p>
                <p className="text-[10px] font-medium text-paper/75 sm:text-xs">
                  Questões
                </p>
              </div>

              <div className="hidden h-6 w-px shrink-0 bg-paper/20 sm:block sm:h-7 md:h-8" />

              <div className="text-center lg:text-left">
                <p className="text-sm font-bold tabular-nums text-paper sm:text-base md:text-lg">
                  30min
                </p>
                <p className="text-[10px] font-medium text-paper/75 sm:text-xs">
                  Tempo médio
                </p>
              </div>

              <div className="hidden h-6 w-px shrink-0 bg-paper/20 sm:block sm:h-7 md:h-8" />

              <div className="text-center lg:text-left">
                <p className="text-sm font-bold tabular-nums text-paper sm:text-base md:text-lg">
                  100%
                </p>
                <p className="text-[10px] font-medium text-paper/75 sm:text-xs">
                  Gratuito
                </p>
              </div>
            </div>
          </div>

         <div className="hidden lg:block lg:w-20 xl:w-32 2xl:w-40" />
        </div>
      </div>
    </section>
  )
}
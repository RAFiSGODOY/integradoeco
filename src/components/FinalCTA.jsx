import { useRef } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { CONTACT_EMAIL } from '../constants/cta'
import { ctaBackground } from '../assets/images'
import OptimizedImage from './OptimizedImage'

export default function FinalCTA() {
  const sectionRef = useRef(null)
  useScrollReveal(sectionRef)

  return (
    <section
      ref={sectionRef}
      id="finalcta"
      className="relative overflow-hidden bg-primary px-5 py-12 font-inter scroll-mt-[calc(env(safe-area-inset-top,0px)+1.25rem+3.5rem+0.75rem)] sm:scroll-mt-[calc(env(safe-area-inset-top,0px)+1.25rem+3.625rem+1rem)] sm:py-14 md:scroll-mt-[calc(env(safe-area-inset-top,0px)+1.25rem+3.625rem+1rem)] md:py-16 lg:scroll-mt-[calc(env(safe-area-inset-top,0px)+1.25rem+4rem+1rem)] lg:py-32 xl:scroll-mt-[calc(env(safe-area-inset-top,0px)+1.25rem+4.25rem+1rem)] xl:py-26"
    >
      <OptimizedImage
        src={ctaBackground}
        alt=""
        sizes="100vw"
        className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover object-[60%_center] opacity-[0.45] sm:object-[55%_center] lg:object-[60%_center]"
      />

      <div
        className="pointer-events-none absolute inset-0 z-[10] bg-black/65"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[10] h-[min(3vh,60px)] min-h-[20px] bg-[linear-gradient(to_bottom,transparent_0%,rgba(255,255,255,0.06)_18%,rgba(255,255,255,0.28)_42%,rgba(255,255,255,0.72)_72%,#ffffff_92%,#ffffff_100%)] sm:h-[min(2.5vh,120px)] sm:min-h-[25px] lg:h-[min(2vh,240px)] lg:min-h-[30px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-[10] h-[min(3vh,60px)] min-h-[20px] bg-[linear-gradient(to_top,transparent_0%,rgba(255,255,255,0.06)_18%,rgba(255,255,255,0.28)_42%,rgba(255,255,255,0.72)_72%,#ffffff_92%,#ffffff_100%)] sm:h-[min(2.5vh,120px)] sm:min-h-[25px] lg:h-[min(2vh,240px)] lg:min-h-[30px]"
        aria-hidden="true"
      />

      <div className="container-main relative text-center z-[20]">
        <div className="mx-auto max-w-md sm:max-w-lg lg:max-w-xl">
          <div
            data-scroll-reveal="text"
            className="mb-1 inline-flex items-center border-b-2 border-paper px-1 py-0.5 sm:mb-1.5 sm:px-2 sm:py-0.5 md:mb-2"
          >
            <span className="text-[9px] font-semibold uppercase tracking-wide text-paper sm:text-[10px] md:text-[11px] lg:text-xs">
              Avaliação 100% gratuita
            </span>
          </div>

          <h2
            data-scroll-reveal="text"
            className="text-pretty text-lg font-semibold tracking-tight text-paper sm:text-xl lg:text-2xl"
          >
            Sua instituição está pronta para evoluir?
          </h2>
          <p
            data-scroll-reveal="text"
            className="mt-2 text-xs leading-snug text-paper/65 sm:mt-2.5 sm:text-sm sm:leading-relaxed"
          >
          Faça a avaliação e descubra seu nível ESG agora. Após o diagnóstico gratuito, se fizer sentido para sua instituição, nossa equipe pode apoiar planos de
            evolução ESG {' '}
            <a
              href={`mailto:${CONTACT_EMAIL}?subject=Conversa%20sobre%20evolu%C3%A7%C3%A3o%20ESG`}
              className="font-medium text-paper underline-offset-2 hover:underline"
            >
              fale conosco
            </a>{' '}
            quando quiser, sem obrigação.
          </p>

          <div data-scroll-reveal="cta" className="mt-6 flex w-full justify-center sm:mt-8">
          <a
              href="#finalcta"
              className=" rounded-tl-full rounded-br-full bg-gray-300 text-gray-600 text-center font-semibold px-5 py-1.5 text-xs  md:px-10 md:py-2.5  md:text-xs  lg:px-20 lg:py-2.5  lg:text-base"
            >
              Disponível em breve
            </a>
          </div>

          <p data-scroll-reveal="text" className="mt-4 text-[10px] text-paper/50 sm:mt-5 sm:text-xs">
            100 questões • Resultado instantâneo • Gratuito
          </p>
        </div>
      </div>
    </section>
  )
}

import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import HowItWorks from '../components/HowItWorks'
import ESGPillars from '../components/ESGPillars'
import SampleResult from '../components/SampleResult'
import BenefitsSection from '../components/BenefitsSection'
import FinalCTA from '../components/FinalCTA'
import MethodologySection from '../components/Methodology'
import Footer from '../components/Footer'
import AboutSection from '../components/about'
import FAQ from '../components/FAQ'
import SocialProof from '../components/SocialProof'
import FloatingCta from '../components/FloatingCta'

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <header className="pointer-events-none fixed left-0 right-0 top-5 z-[100] flex w-full min-w-0 max-w-full justify-center">
        <div className="pointer-events-auto w-full min-w-0 max-w-full">
          <Navbar />
        </div>
      </header>
      <main>
        <div className="relative z-10">
          <Hero />
        </div>
        <div data-navbar-theme="pastHero" className="relative z-10">
          <AboutSection />
        </div>
        <div data-navbar-theme="pastHero" className="relative z-10">
          <BenefitsSection />
        </div>
        <div data-navbar-theme="pastHero" className="relative z-10">
          <HowItWorks />
        </div>
        <div data-navbar-theme="pastHero" className="relative z-10">
          <ESGPillars />
        </div>
        <div data-navbar-theme="pastHero" className="relative z-10">
          <MethodologySection />
        </div>
        <div data-navbar-theme="pastHero" className="relative z-10">
          <SampleResult />
        </div>
        <div data-navbar-theme="pastHero" className="relative z-10">
          <SocialProof />
        </div>
        <div data-navbar-theme="pastHero" className="relative z-10">
          <FAQ />
        </div>
        <div data-navbar-theme="light" className="relative z-10">
          <FinalCTA />
        </div>
      </main>
      <div className="relative z-10">
        <Footer />
      </div>
      <FloatingCta />
    </div>
  )
}

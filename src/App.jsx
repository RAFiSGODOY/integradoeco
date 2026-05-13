import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import ESGPillars from './components/ESGPillars'
import SampleResult from './components/SampleResult'
import BenefitsSection from './components/BenefitsSection'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className=" flex flex-col ">
      <header className="pointer-events-none fixed left-0 right-0 top-5 z-[100] flex justify-center ">
        <div className="pointer-events-auto w-full ">
          <Navbar />
        </div>
      </header>
      <main>
        <Hero />
        <HowItWorks />
        <ESGPillars />
        <SampleResult />
        <BenefitsSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}

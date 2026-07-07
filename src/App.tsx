import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Marquee } from './components/Marquee'
import { Fleet } from './components/Fleet'
import { Services } from './components/Services'
import { WhyChooseUs } from './components/WhyChooseUs'
import { Process } from './components/Process'
import { Testimonials } from './components/Testimonials'
import { Location } from './components/Location'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-bg text-text">
      <a
        href="#fleet"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-primary focus:text-bg focus:px-4 focus:py-2 focus:rounded-sm focus:font-semibold"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Marquee />
        <Fleet />
        <Services />
        <WhyChooseUs />
        <Process />
        <Testimonials />
        <Location />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App

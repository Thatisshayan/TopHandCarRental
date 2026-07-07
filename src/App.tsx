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
      <Navbar />
      <main>
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

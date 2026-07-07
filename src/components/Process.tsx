import { ScrollReveal } from './ScrollReveal'
import { Phone, Car, MapPinned, PartyPopper } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Phone,
    title: 'Call or Book Online',
    description: 'Tell us what you need, when you need it, and where you want to be picked up. We will find the right vehicle for your trip.',
  },
  {
    number: '02',
    icon: Car,
    title: 'We Pick You Up',
    description: 'We arrive at your location — home, office, airport, anywhere in the GTA — with your rental ready to go. No counters, no lines.',
  },
  {
    number: '03',
    icon: MapPinned,
    title: 'Drive Your Way',
    description: 'Hit the road with full insurance, 24/7 roadside assistance, and a car that performs. Your trip, your terms.',
  },
  {
    number: '04',
    icon: PartyPopper,
    title: 'Drop Off Anywhere',
    description: 'Return the car at your convenience — we will even pick it up from your location. That is the Top Hand difference.',
  },
]

export function Process() {
  return (
    <section id="process" className="py-20 sm:py-28 bg-bg-elevated">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="deal-strip">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">How It Works</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl mb-4">
            Four Steps.{' '}
            <span className="text-primary">Zero Stress.</span>
          </h2>
          <p className="text-text-muted text-lg max-w-xl mb-14">
            We removed every friction point from the rental process. No counters, no shuttles, no surprises.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <ScrollReveal key={step.number} delay={i * 0.12}>
              <div className="relative bg-bg rounded-sm p-6 h-full ace-corner">
                {/* Step Number */}
                <div className="text-primary/20 font-display text-6xl absolute top-4 right-4 select-none">
                  {step.number}
                </div>

                <div className="relative">
                  <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center mb-5">
                    <step.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-display text-xl mb-3">{step.title}</h3>
                  <p className="text-text-muted text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Road line connector on desktop */}
        <ScrollReveal delay={0.5}>
          <div className="road-line mt-12 mx-auto max-w-4xl" />
        </ScrollReveal>
      </div>
    </section>
  )
}

import { ScrollReveal } from './ScrollReveal'
import { Plane, Calendar, Building2, Car, Truck, Clock } from 'lucide-react'

const services = [
  {
    icon: Plane,
    title: 'Airport Pickup & Drop-off',
    description: 'We pick you up at Pearson or Billy Bishop and deliver your rental right to the terminal when you return. Land, call, drive.',
  },
  {
    icon: Calendar,
    title: 'Daily & Weekly Rentals',
    description: 'Need a car for a day, a week, or longer? Flexible terms, no hidden fees, and rates that make sense for your timeline.',
  },
  {
    icon: Building2,
    title: 'Corporate & Long-Term',
    description: 'Monthly and seasonal plans for businesses and extended stays. Dedicated account support and priority fleet access.',
  },
  {
    icon: Car,
    title: 'Luxury & Specialty',
    description: 'Mercedes, BMW, and performance vehicles for special occasions, client impressions, or when you just want to drive something exceptional.',
  },
  {
    icon: Truck,
    title: 'SUV & Minivan',
    description: 'Family trips, group outings, or extra cargo space. Spacious vehicles that handle Ontario roads with ease.',
  },
  {
    icon: Clock,
    title: '24/7 Availability',
    description: 'Early flights, late nights, weekends — we work on your schedule. Call anytime and we will make it happen.',
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 sm:py-28 bg-bg-elevated">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="deal-strip">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">What We Offer</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl mb-4">
            More Than a{' '}
            <span className="text-primary">Car Rental</span>
          </h2>
          <p className="text-text-muted text-lg max-w-xl mb-14">
            Full-service transportation solutions for every need — from airport runs to monthly corporate fleets.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 0.08}>
              <div className="group relative bg-bg p-6 rounded-sm ace-corner card-lift h-full">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg">{service.title}</h3>
                  </div>
                </div>
                <p className="text-text-muted text-sm leading-relaxed">{service.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

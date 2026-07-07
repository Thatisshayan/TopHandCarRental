import { ScrollReveal, Odometer } from './ScrollReveal'
import { Award, Handshake, TrendingUp, MapPin } from 'lucide-react'

const stats = [
  { icon: Award, value: 25, suffix: '+', label: 'Years in Business' },
  { icon: TrendingUp, value: 5000, suffix: '+', label: 'Happy Customers' },
  { icon: Handshake, value: 50, suffix: '+', label: 'Vehicles in Fleet' },
  { icon: MapPin, value: 100, suffix: '%', label: 'GTA Coverage' },
]

const reasons = [
  {
    title: 'We Pick You Up',
    description: 'Free pickup and drop-off anywhere in the Greater Toronto Area. Land at Pearson? We are already on our way. No shuttles, no waiting, no hassle.',
  },
  {
    title: 'No Hidden Fees',
    description: 'The price we quote is the price you pay. No surprise insurance add-ons, no fuel gimmicks, no "processing fees" that appear at checkout.',
  },
  {
    title: 'Premium Maintenance',
    description: 'Every vehicle is serviced on schedule, detailed before each rental, and inspected end-to-end. You get a car that feels new, because it basically is.',
  },
  {
    title: 'Real People, Real Service',
    description: 'When you call, a human answers. No phone trees, no chatbots, no "press 7 for the 14th time." We built this business on relationships, not algorithms.',
  },
]

export function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 sm:py-28 bg-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="deal-strip">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">Why Top Hand</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl mb-4">
            The <span className="text-primary">Winning Hand</span> in Car Rental
          </h2>
          <p className="text-text-muted text-lg max-w-xl mb-14">
            25 years of serving the GTA taught us what matters: your time, your money, and a car that does not make you second-guess the rental.
          </p>
        </ScrollReveal>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.1}>
              <div className="bg-bg-elevated rounded-sm p-6 text-center ace-corner">
                <stat.icon className="h-6 w-6 text-primary mx-auto mb-3" />
                <div className="font-display text-3xl sm:text-4xl text-primary mb-1">
                  <Odometer value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-text-muted text-sm">{stat.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Reasons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reasons.map((reason, i) => (
            <ScrollReveal key={reason.title} delay={i * 0.1}>
              <div className="flex gap-4 bg-bg-elevated rounded-sm p-6 card-lift ace-corner">
                <div className="flex-shrink-0 w-8 h-8 rounded-sm bg-primary/10 flex items-center justify-center text-primary font-bold font-display text-lg">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div>
                  <h3 className="font-display text-xl mb-2">{reason.title}</h3>
                  <p className="text-text-muted text-sm leading-relaxed">{reason.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

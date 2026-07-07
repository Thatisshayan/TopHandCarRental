import { ScrollReveal } from './ScrollReveal'

const services = [
  'Airport Pickup',
  'Daily Rentals',
  'Weekly Rentals',
  'Monthly Plans',
  'Luxury Fleet',
  'SUV & Minivan',
  'Corporate Accounts',
  '24/7 Service',
  'Free Delivery',
  'No Hidden Fees',
]

export function Marquee() {
  return (
    <section className="py-6 bg-primary/5 border-y border-primary/10 overflow-hidden">
      <ScrollReveal>
        <div className="flex gap-8 animate-marquee whitespace-nowrap">
          {[...services, ...services].map((service, i) => (
            <span key={i} className="flex items-center gap-3 text-sm font-medium text-text-muted">
              <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
              {service}
            </span>
          ))}
        </div>
      </ScrollReveal>
    </section>
  )
}

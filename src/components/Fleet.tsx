import { ScrollReveal } from './ScrollReveal'
import { Users, Luggage, Fuel, Star } from 'lucide-react'

const vehicles = [
  {
    name: 'Economy',
    example: 'Toyota Corolla or similar',
    image: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&dpr=1',
    specs: { seats: 5, bags: 2, fuel: 'Efficient' },
    tag: 'Best Value',
  },
  {
    name: 'Sedan',
    example: 'Honda Civic or similar',
    image: 'https://images.pexels.com/photos/1007410/pexels-photo-1007410.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&dpr=1',
    specs: { seats: 5, bags: 3, fuel: 'Efficient' },
    tag: 'Popular',
  },
  {
    name: 'SUV',
    example: 'Toyota RAV4 or similar',
    image: 'https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&dpr=1',
    specs: { seats: 5, bags: 4, fuel: 'Standard' },
    tag: null,
  },
  {
    name: 'Luxury',
    example: 'Mercedes-Benz C-Class or similar',
    image: 'https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&dpr=1',
    specs: { seats: 5, bags: 3, fuel: 'Premium' },
    tag: 'Premium',
  },
  {
    name: 'Minivan',
    example: 'Dodge Grand Caravan or similar',
    image: 'https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&dpr=1',
    specs: { seats: 7, bags: 4, fuel: 'Standard' },
    tag: null,
  },
  {
    name: 'Sports',
    example: 'Ford Mustang or similar',
    image: 'https://images.pexels.com/photos/100615/pexels-photo-100615.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&dpr=1',
    specs: { seats: 4, bags: 2, fuel: 'Premium' },
    tag: 'Exotic',
  },
]

export function Fleet() {
  return (
    <section id="fleet" className="py-20 sm:py-28 bg-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="deal-strip">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">Our Fleet</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl mb-4">
            The Right Ride for{' '}
            <span className="text-primary">Every Road</span>
          </h2>
          <p className="text-text-muted text-lg max-w-xl mb-14">
            From efficient daily drivers to luxury performance — every vehicle is maintained, cleaned, and ready for you.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {vehicles.map((vehicle, i) => (
            <ScrollReveal key={vehicle.name} delay={i * 0.08}>
              <div className="group bg-bg-elevated rounded-sm overflow-hidden ace-corner card-lift">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={vehicle.image}
                    alt={`${vehicle.name} rental — ${vehicle.example}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-elevated via-transparent to-transparent" />
                  {vehicle.tag && (
                    <span className="absolute top-3 right-3 bg-primary text-bg text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-sm">
                      {vehicle.tag}
                    </span>
                  )}
                </div>

                {/* Info */}
                <div className="p-5">
                  <h3 className="font-display text-xl mb-1">{vehicle.name}</h3>
                  <p className="text-text-muted text-sm mb-4">{vehicle.example}</p>

                  <div className="flex items-center gap-4 text-xs text-text-muted mb-4">
                    <div className="flex items-center gap-1.5">
                      <Users className="h-3.5 w-3.5 text-primary" />
                      <span>{vehicle.specs.seats}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Luggage className="h-3.5 w-3.5 text-primary" />
                      <span>{vehicle.specs.bags}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Fuel className="h-3.5 w-3.5 text-primary" />
                      <span>{vehicle.specs.fuel}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <a
                      href="#contact"
                      className="text-sm font-semibold text-primary hover:text-primary-dim transition-colors flex items-center gap-1"
                    >
                      Request Quote
                      <Star className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <p className="text-center text-text-muted text-sm mt-8">
            All vehicles are fully insured, maintained, and detailed before each rental. Call for availability and custom quotes.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}

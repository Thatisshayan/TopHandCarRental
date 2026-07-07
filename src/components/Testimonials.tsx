import { ScrollReveal } from './ScrollReveal'
import { Star, Quote } from 'lucide-react'

const reviews = [
  {
    name: 'Sarah M.',
    text: 'Best car rental experience in Toronto. They picked me up at the airport, the car was spotless, and the rate was exactly what they quoted. No games, no upsells. I have been using them for two years now.',
    rating: 5,
    source: 'Google Review',
  },
  {
    name: 'James K.',
    text: 'Rented an SUV for a family road trip to Niagara. Vehicle was late-model, clean, and drove perfectly. The pickup at my house was seamless. Already booked my next rental.',
    rating: 5,
    source: 'Google Review',
  },
  {
    name: 'Priya D.',
    text: 'I needed a car for a month while mine was in the shop. Their long-term rate was hundreds less than the big chains, and the car was actually nicer. Real people who care about the service.',
    rating: 5,
    source: 'Yelp',
  },
  {
    name: 'Michael T.',
    text: 'Used their airport service three times now. Every single time, the driver was on time, the car was ready, and the whole process took five minutes. This is how car rental should work.',
    rating: 5,
    source: 'Google Review',
  },
]

export function Testimonials() {
  return (
    <section id="reviews" className="py-20 sm:py-28 bg-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="deal-strip">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">What People Say</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl mb-4">
            Trusted by{' '}
            <span className="text-primary">Thousands</span>
          </h2>
          <p className="text-text-muted text-lg max-w-xl mb-14">
            Do not take our word for it. Here is what our customers have to say after 25 years of service.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((review, i) => (
            <ScrollReveal key={review.name} delay={i * 0.1}>
              <div className="bg-bg-elevated rounded-sm p-6 sm:p-8 ace-corner card-lift h-full flex flex-col">
                {/* Quote Icon */}
                <Quote className="h-8 w-8 text-primary/20 mb-4 flex-shrink-0" />

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: review.rating }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-text leading-relaxed mb-6 flex-1 text-sm sm:text-base">
                  "{review.text}"
                </p>

                {/* Attribution */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div>
                    <span className="font-semibold text-sm">{review.name}</span>
                    <span className="text-text-muted text-xs ml-2">via {review.source}</span>
                  </div>
                  <span className="text-xs text-text-muted bg-bg-surface px-2 py-1 rounded-sm">{review.source}</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

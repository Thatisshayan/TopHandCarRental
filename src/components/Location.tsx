import { ScrollReveal } from './ScrollReveal'
import { MapPin, Phone, Clock, ExternalLink } from 'lucide-react'

const hours = [
  { day: 'Monday', time: '9:30 AM – 7:00 PM' },
  { day: 'Tuesday', time: '9:30 AM – 7:00 PM' },
  { day: 'Wednesday', time: '9:30 AM – 7:00 PM' },
  { day: 'Thursday', time: '9:30 AM – 7:00 PM' },
  { day: 'Friday', time: '9:30 AM – 7:00 PM' },
  { day: 'Saturday', time: '10:00 AM – 5:00 PM' },
  { day: 'Sunday', time: 'Closed' },
]

export function Location() {
  return (
    <section id="location" className="py-20 sm:py-28 bg-bg-elevated">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="deal-strip">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">Find Us</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl mb-4">
            Located in{' '}
            <span className="text-primary">North York</span>
          </h2>
          <p className="text-text-muted text-lg max-w-xl mb-14">
            Conveniently situated on Willowdale Avenue with easy access from Highway 401 and the Yonge-University subway line.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map */}
          <ScrollReveal>
            <div className="rounded-sm overflow-hidden ace-corner h-full min-h-[350px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2880.5!2d-79.4111!3d43.7811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x889b426e3b3b3b3b%3A0x1234567890abcdef!2s146+Willowdale+Ave%2C+North+York%2C+ON+M2N+4Y4!5e0!3m2!1sen!2sca!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(0.95) contrast(1.1)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Top Hand Car Rental location at 146 Willowdale Ave, North York"
              />
            </div>
          </ScrollReveal>

          {/* Info */}
          <ScrollReveal delay={0.15}>
            <div className="flex flex-col gap-6">
              {/* Address */}
              <div className="bg-bg rounded-sm p-6 ace-corner">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-sm bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg mb-1">Our Address</h3>
                    <p className="text-text-muted text-sm">
                      146 Willowdale Ave<br />
                      North York, ON M2N 4Y4
                    </p>
                    <a
                      href="https://www.google.com/maps/dir/?api=1&destination=146+Willowdale+Ave+North+York+ON+M2N+4Y4"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-primary text-sm font-semibold mt-3 hover:underline"
                    >
                      Get Directions
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="bg-bg rounded-sm p-6 ace-corner">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-sm bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg mb-1">Call Us</h3>
                    <a
                      href="tel:+14162507368"
                      className="text-primary text-lg font-bold hover:underline"
                    >
                      (416) 250-7368
                    </a>
                    <p className="text-text-muted text-sm mt-1">
                      Available 24/7 for bookings and roadside assistance
                    </p>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-bg rounded-sm p-6 ace-corner">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-sm bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-lg mb-3">Business Hours</h3>
                    <div className="space-y-1.5">
                      {hours.map((h) => (
                        <div key={h.day} className="flex justify-between text-sm">
                          <span className="text-text-muted">{h.day}</span>
                          <span className={h.time === 'Closed' ? 'text-text-muted' : 'font-medium'}>
                            {h.time}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

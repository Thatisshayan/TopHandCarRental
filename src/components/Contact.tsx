import { useState } from 'react'
import { ScrollReveal } from './ScrollReveal'
import { Phone, Mail, Send, CheckCircle } from 'lucide-react'

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-20 sm:py-28 bg-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="deal-strip">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">Get in Touch</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl mb-4">
            Ready to{' '}
            <span className="text-primary">Hit the Road?</span>
          </h2>
          <p className="text-text-muted text-lg max-w-xl mb-14">
            Fill out the form below and we will get back to you within the hour with a custom quote. Or just call — we answer.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Form */}
          <ScrollReveal className="lg:col-span-3">
            {submitted ? (
              <div className="bg-bg-elevated rounded-sm p-8 sm:p-12 text-center ace-corner">
                <CheckCircle className="h-16 w-16 text-primary mx-auto mb-6" />
                <h3 className="font-display text-2xl mb-3">Quote Request Received</h3>
                <p className="text-text-muted mb-6">
                  We will get back to you within the hour with a custom quote. Need it faster? Call us directly.
                </p>
                <a
                  href="tel:+14162507368"
                  className="inline-flex items-center gap-2 bg-primary text-bg px-6 py-3 rounded-sm font-semibold btn-press"
                >
                  <Phone className="h-4 w-4" />
                  (416) 250-7368
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-bg-elevated rounded-sm p-6 sm:p-8 ace-corner">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1.5">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full bg-bg border border-border rounded-sm px-4 py-3 text-text text-sm focus:outline-none focus:border-primary transition-colors"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-1.5">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="w-full bg-bg border border-border rounded-sm px-4 py-3 text-text text-sm focus:outline-none focus:border-primary transition-colors"
                      placeholder="(416) 000-0000"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium mb-1.5">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full bg-bg border border-border rounded-sm px-4 py-3 text-text text-sm focus:outline-none focus:border-primary transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="pickup-date" className="block text-sm font-medium mb-1.5">Pickup Date</label>
                    <input
                      type="date"
                      id="pickup-date"
                      name="pickup-date"
                      required
                      className="w-full bg-bg border border-border rounded-sm px-4 py-3 text-text text-sm focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="return-date" className="block text-sm font-medium mb-1.5">Return Date</label>
                    <input
                      type="date"
                      id="return-date"
                      name="return-date"
                      required
                      className="w-full bg-bg border border-border rounded-sm px-4 py-3 text-text text-sm focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label htmlFor="vehicle" className="block text-sm font-medium mb-1.5">Vehicle Type Needed</label>
                  <select
                    id="vehicle"
                    name="vehicle"
                    className="w-full bg-bg border border-border rounded-sm px-4 py-3 text-text text-sm focus:outline-none focus:border-primary transition-colors"
                  >
                    <option value="">Select a vehicle type</option>
                    <option value="economy">Economy</option>
                    <option value="sedan">Sedan</option>
                    <option value="suv">SUV</option>
                    <option value="minivan">Minivan</option>
                    <option value="luxury">Luxury</option>
                    <option value="sports">Sports</option>
                  </select>
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium mb-1.5">Additional Details</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full bg-bg border border-border rounded-sm px-4 py-3 text-text text-sm focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="Airport pickup? Special requests? Tell us what you need."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary text-bg px-8 py-3.5 rounded-sm font-semibold btn-press hover:bg-primary-dim transition-colors duration-200"
                >
                  <Send className="h-4 w-4" />
                  Get My Free Quote
                </button>
              </form>
            )}
          </ScrollReveal>

          {/* Quick Contact */}
          <ScrollReveal delay={0.15} className="lg:col-span-2">
            <div className="flex flex-col gap-6 h-full">
              <div className="bg-bg-elevated rounded-sm p-6 ace-corner flex-1">
                <h3 className="font-display text-xl mb-4">Quick Contact</h3>
                <p className="text-text-muted text-sm mb-6 leading-relaxed">
                  Prefer to talk directly? Give us a call or send an email. We respond within the hour during business hours.
                </p>
                <div className="flex flex-col gap-3">
                  <a
                    href="tel:+14162507368"
                    className="flex items-center gap-3 bg-bg rounded-sm p-4 card-lift"
                  >
                    <div className="w-10 h-10 rounded-sm bg-primary/10 flex items-center justify-center">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <span className="text-sm font-semibold block">(416) 250-7368</span>
                      <span className="text-xs text-text-muted">Available 24/7</span>
                    </div>
                  </a>
                  <a
                    href="mailto:info@tophandauto.com"
                    className="flex items-center gap-3 bg-bg rounded-sm p-4 card-lift"
                  >
                    <div className="w-10 h-10 rounded-sm bg-primary/10 flex items-center justify-center">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <span className="text-sm font-semibold block">info@tophandauto.com</span>
                      <span className="text-xs text-text-muted">Response within 1 hour</span>
                    </div>
                  </a>
                </div>
              </div>

              {/* Trust note */}
              <div className="bg-primary/5 border border-primary/10 rounded-sm p-6">
                <p className="text-sm text-text-muted leading-relaxed">
                  <span className="text-primary font-semibold">No commitment required.</span> Fill out the form or call for a free, no-obligation quote. We will never share your information or add you to a mailing list without your permission.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

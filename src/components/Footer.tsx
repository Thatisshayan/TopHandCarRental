import { Phone, MapPin, Clock, ChevronUp } from 'lucide-react'

const footerLinks = [
  { label: 'Fleet', href: '#fleet' },
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Location', href: '#location' },
]

export function Footer() {
  return (
    <footer className="bg-bg border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-12 sm:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <svg viewBox="0 0 32 32" className="h-8 w-8" aria-hidden="true">
                <rect width="32" height="32" rx="4" fill="oklch(0.72 0.19 85)" />
                <text x="16" y="22" textAnchor="middle" fill="oklch(0.13 0.02 260)" fontFamily="DM Serif Display, serif" fontSize="18" fontWeight="700">TH</text>
              </svg>
              <div className="flex flex-col leading-none">
                <span className="font-display text-lg text-text">TOP HAND</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-primary font-medium">Car Rental</span>
              </div>
            </div>
            <p className="text-text-muted text-sm leading-relaxed max-w-xs">
              Premium car rental serving the Greater Toronto Area since 2000. We pick you up, so you never have to worry about getting there.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-sm uppercase tracking-wider text-text-muted mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-text-muted hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-sm uppercase tracking-wider text-text-muted mb-4">Contact</h4>
            <div className="space-y-3">
              <a
                href="tel:+14162507368"
                className="flex items-center gap-2 text-sm text-text-muted hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4 text-primary" />
                (416) 250-7368
              </a>
              <div className="flex items-start gap-2 text-sm text-text-muted">
                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span>146 Willowdale Ave<br />North York, ON M2N 4Y4</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-text-muted">
                <Clock className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span>Mon–Fri: 9:30 AM – 7:00 PM<br />Sat: 10:00 AM – 5:00 PM</span>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="font-display text-sm uppercase tracking-wider text-text-muted mb-4">Service Area</h4>
            <p className="text-sm text-text-muted leading-relaxed mb-4">
              Free pickup and drop-off throughout the Greater Toronto Area, including:
            </p>
            <div className="text-sm text-text-muted space-y-1">
              <span>North York • Downtown Toronto</span><br />
              <span>Scarborough • Etobicoke</span><br />
              <span>Mississauga • Markham</span><br />
              <span>Richmond Hill • Vaughan</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-muted">
            &copy; {new Date().getFullYear()} Top Hand Car Rental. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="http://www.facebook.com/pages/Top-Hand-Car-Rental/457570900926790" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-primary transition-colors" aria-label="Follow us on Facebook">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </a>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="w-8 h-8 rounded-sm bg-bg-elevated border border-border flex items-center justify-center text-text-muted hover:text-primary hover:border-primary/30 transition-colors"
              aria-label="Back to top"
            >
              <ChevronUp className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

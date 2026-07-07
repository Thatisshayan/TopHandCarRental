import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, ChevronRight } from 'lucide-react'
import { cn } from '../lib/utils'

const navLinks = [
  { label: 'Fleet', href: '#fleet' },
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Process', href: '#process' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Location', href: '#location' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-bg/90 backdrop-blur-xl border-b border-border'
          : 'bg-transparent'
      )}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 sm:h-20 items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="flex items-center gap-1.5">
              <img src="/TopHandCarRental/logo.png" alt="Top Hand Car Rental" className="h-10 w-auto sm:h-12" />
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-text-muted hover:text-text transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+14162507368"
              className="hidden sm:flex items-center gap-2 bg-primary text-bg px-5 py-2.5 rounded-sm text-sm font-semibold btn-press hover:bg-primary-dim transition-colors duration-200"
            >
              <Phone className="h-4 w-4" />
              (416) 250-7368
            </a>
            <a
              href="#contact"
              className="hidden sm:flex items-center gap-1.5 border border-primary/30 text-primary px-5 py-2.5 rounded-sm text-sm font-semibold btn-press hover:bg-primary/10 transition-colors duration-200"
            >
              Reserve Now
              <ChevronRight className="h-4 w-4" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-text-muted hover:text-text transition-colors"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 z-40 lg:hidden"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 left-0 bottom-0 w-80 max-w-[85vw] bg-bg-elevated z-50 lg:hidden overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <span className="font-display text-xl text-text">TOP HAND</span>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 text-text-muted hover:text-text"
                    aria-label="Close menu"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
                <div className="flex flex-col gap-1">
                  {navLinks.map((link, i) => (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * i }}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-between px-4 py-3 text-text-muted hover:text-text hover:bg-bg-surface rounded-sm transition-colors"
                    >
                      <span className="font-medium">{link.label}</span>
                      <ChevronRight className="h-4 w-4 opacity-40" />
                    </motion.a>
                  ))}
                </div>
                <div className="mt-8 pt-6 border-t border-border flex flex-col gap-3">
                  <a
                    href="tel:+14162507368"
                    className="flex items-center justify-center gap-2 bg-primary text-bg px-5 py-3 rounded-sm font-semibold btn-press"
                  >
                    <Phone className="h-4 w-4" />
                    Call Now — (416) 250-7368
                  </a>
                  <a
                    href="#contact"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center gap-2 border border-primary/30 text-primary px-5 py-3 rounded-sm font-semibold btn-press hover:bg-primary/10 transition-colors"
                  >
                    Reserve Your Ride
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}

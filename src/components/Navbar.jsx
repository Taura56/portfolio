import { useState, useEffect, useRef, useCallback } from 'react'
import { Menu, X, Github, Linkedin, Mail, Phone, ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { navLinks } from '../data/skills'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const menuBtnRef = useRef(null)

  // Scroll spy: highlight the active nav link based on scroll position
  useEffect(() => {
    const observerOptions = { root: null, threshold: 0.25, rootMargin: '-20% 0% -60% 0%' }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.getAttribute('id'))
        }
      })
    }, observerOptions)

    navLinks.forEach((link) => {
      const el = document.querySelector(link.href)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const scrollTo = useCallback(
    (id) => {
      const el = document.getElementById(id)
      if (!el) return
      const headerHeight = 72
      const top = el.offsetTop - headerHeight - 16
      window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' })
      setIsOpen(false)
    },
    [],
  )

  return (
    <nav className="navbar" aria-label="Main navigation">
      <div className="container navbar__inner">
        <a
          href="#home"
          className="navbar__logo"
          onClick={(e) => {
            e.preventDefault()
            scrollTo('home')
          }}
        >
          Taura <span style={{ color: 'var(--color-accent)' }}>Anderson</span>
        </a>

        <div className="navbar__links">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`navbar__link ${
                activeSection === link.href.replace('#', '') ? 'navbar__link--active' : ''
              }`}
              onClick={(e) => {
                e.preventDefault()
                scrollTo(link.href.replace('#', ''))
              }}
            >
              {link.name}
            </a>
          ))}
          <button
            className="navbar__menu-btn"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
            ref={menuBtnRef}
          >
            {isOpen ? <X size={24} strokeWidth={2.5} /> : <Menu size={24} strokeWidth={2.5} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="navbar__mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`navbar__mobile-link ${
                  activeSection === link.href.replace('#', '') ? 'navbar__mobile-link--active' : ''
                }`}
                onClick={() => {
                  setIsOpen(false)
                  scrollTo(link.href.replace('#', ''))
                }}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

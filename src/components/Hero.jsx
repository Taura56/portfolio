import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, Github, Linkedin } from 'lucide-react'
import whatsappImg from '../assets/icons/whatsapp.png'

export default function Hero() {
  const ref = useRef(null)
  const isInView = useInView(ref, { threshold: 0.1, once: true })

  return (
    <section id="home" className="hero" ref={ref}>
      <div className="container">
        <div className="hero__content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <span className="hero__badge">Software Developer</span>
            <h1 className="hero__name">Taura Anderson</h1>
            <h2 className="hero__title">
              Software Developer | Backend &amp; Full-Stack Development
            </h2>
            <p className="hero__intro">
              Building practical software solutions with Node.js, Express, MongoDB, Flutter and
              Python.
            </p>
            <div className="hero__cta">
              <a href="#projects" className="btn btn--primary">
                View Projects <ArrowRight size={18} strokeWidth={2} />
              </a>
              <a href="#contact" className="btn btn--outline">
                Contact Me
              </a>
            </div>
            <div className="hero__social">
              <a
                href="https://github.com/Taura56"
                target="_blank"
                rel="noopener noreferrer"
                className="hero__social-link"
                aria-label="GitHub"
              >
                <Github size={22} />
              </a>
              <a
                href="https://www.linkedin.com/in/taura56/"
                target="_blank"
                rel="noopener noreferrer"
                className="hero__social-link"
                aria-label="LinkedIn"
              >
                <Linkedin size={22} />
              </a>
              <a
                href="https://wa.link/g50mzr"
                target="_blank"
                rel="noopener noreferrer"
                className="hero__social-link"
                aria-label="WhatsApp"
              >
                <img src={whatsappImg} alt="WhatsApp" width="22" height="22" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

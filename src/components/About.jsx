import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import tauraImg from '../assets/images/taura-profile.png'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { threshold: 0.1, once: true })

  return (
    <section id="about" className="about section" ref={ref}>
      <div className="container">
        <div className="about__grid">
          <div className="about__image">
            <img src={tauraImg} alt="Taura Anderson" />
          </div>
          <div className="about__content">
            <motion.h2
              className="section__title"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
            >
              About Me
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              I&apos;m Taura Anderson, a software developer specializing in backend and full-stack
              development. I enjoy building practical solutions to real-world problems and am
              particularly interested in scalable backend systems and modern technologies.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              My toolkit spans Node.js, Express, MongoDB, MySQL, Firebase, Python, Flutter and
              React, which I use to ship reliable, maintainable software.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  )
}

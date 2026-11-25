import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { BookOpen } from 'lucide-react'
import { education } from '../data/skills'

export default function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { threshold: 0.1, once: true })

  return (
    <section id="education" className="education section" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <div className="section__title">
            <BookOpen size={20} strokeWidth={2} />
            Education
          </div>
          <div className="section__subtitle">
            {education.degree} &mdash; {education.institution}
          </div>
          <div className="education__card">
            <div className="education__degree">{education.degree}</div>
            <div className="education__institution">{education.institution}</div>
            <div className="education__honour">
              {education.honour}
            </div>
            <div className="education__divider" aria-hidden="true" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

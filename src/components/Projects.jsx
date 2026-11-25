import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Terminal } from 'lucide-react'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { threshold: 0.1, once: true })

  return (
    <section id="projects" className="projects section" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <div className="section__title">
            <Terminal size={20} strokeWidth={2} />
            Featured Projects
          </div>
          <div className="section__subtitle">
            Real projects with source code. No invented stats or achievements.
          </div>
          <div className="projects__grid">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                className="project__card-wrapper"
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

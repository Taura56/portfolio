import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code, Server, Terminal, Settings } from 'lucide-react'
import { skills } from '../data/skills'

const categoryIcons = {
  Frontend: Code,
  Backend: Server,
  Programming: Terminal,
  Tools: Settings,
}

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { threshold: 0.1, once: true })

  return (
    <section id="skills" className="skills section" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <div className="section__title">
            <Settings size={20} strokeWidth={2} />
            Technical Skills
          </div>

          <div className="skills__grid">
            {skills.map((category) => {
              const Icon = categoryIcons[category.category]
              return (
                <motion.div
                  key={category.category}
                  className="skill__category"
                  whileHover={{ y: -4 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                >
                  <div className="skill__category-header">
                    <Icon size={20} strokeWidth={2} />
                    <h3>{category.category}</h3>
                  </div>
                  <div className="skill__tags">
                    {category.items.map((item) => (
                      <span key={item} className="tag">
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

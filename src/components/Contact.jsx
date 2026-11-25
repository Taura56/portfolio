import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mail, Github, Linkedin } from 'lucide-react'
import { contact } from '../data/skills'
import whatsappImg from '../assets/icons/whatsapp.png'

const items = [
  {
    label: 'Email',
    href: `mailto:${contact.email}`,
    icon: <Mail size={22} strokeWidth={2} />,
    value: contact.email,
  },
  {
    label: 'GitHub',
    href: contact.github,
    icon: <Github size={22} strokeWidth={2} />,
    value: 'github.com/Taura56',
    external: true,
  },
  {
    label: 'LinkedIn',
    href: contact.linkedin,
    icon: <Linkedin size={22} strokeWidth={2} />,
    value: 'linkedin.com/in/taura56/',
    external: true,
  },
  {
    label: 'WhatsApp',
    href: contact.whatsapp,
    icon: <img src={whatsappImg} alt="WhatsApp" width="22" height="22" />,
    value: 'Message on WhatsApp',
    external: true,
  },
]

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { threshold: 0.1, once: true })

  return (
    <section id="contact" className="contact section" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <div className="section__title">
            <Mail size={20} strokeWidth={2} />
            Get In Touch
          </div>
          <div className="section__subtitle">
            Available for freelance, contract and full-time opportunities.
          </div>
          <div className="contact__grid">
            {items.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                className="contact__item"
                aria-label={item.label}
              >
                <div className="contact__icon">{item.icon}</div>
                <h3>{item.label}</h3>
                <p className={item.external ? 'contact__link' : ''}>{item.value}</p>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

import { Github, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="footer" aria-label="Footer">
      <div className="container">
        <p>
          &copy; {new Date().getFullYear()} Taura Anderson. Software Developer | Backend &
          Full-Stack Development.
        </p>
        <div style={{ marginTop: '0.75rem', display: 'flex', gap: '1.5rem', justifyContent: 'center', alignItems: 'center' }}>
          <a
            href="https://github.com/Taura56"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Github size={20} strokeWidth={2} />
          </a>
          <a
            href="https://www.linkedin.com/in/taura56/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} strokeWidth={2} />
          </a>
          <a href="https://wa.link/g50mzr" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--color-accent)', fontWeight: 600 }}>
              WhatsApp
            </span>
          </a>
        </div>
      </div>
    </footer>
  )
}

import { ExternalLink, Monitor, Github as GhIcon } from 'lucide-react'

export default function ProjectCard({ project }) {
  const hasTech = project.tech && project.tech.length > 0
  const hasLive = Boolean(project.live)

  return (
    <article className="project__card">
      <div className="project__content">
        <div className="project__header">
          <h3 className="project__name">{project.name}</h3>
          {hasLive && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="project__live-btn"
              aria-label={`Live demo for ${project.name}`}
            >
              <Monitor size={16} strokeWidth={2} /> Live
            </a>
          )}
        </div>
        <p className="project__desc">{project.description}</p>
        {hasTech && (
          <div className="project__tech">
            {project.tech.map((t) => (
              <span key={t} className="tag">
                {t}
              </span>
            ))}
          </div>
        )}
        <div className="project__footer">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="project__link"
            aria-label={`View ${project.name} on GitHub`}
          >
            <GhIcon size={16} strokeWidth={2} /> GitHub
          </a>
        </div>
      </div>
    </article>
  )
}

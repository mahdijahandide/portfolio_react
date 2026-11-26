import {
  Activity,
  ArrowUpRight,
  Building2,
  ChevronDown,
  LayoutGrid,
  MapPin,
  PanelsTopLeft,
} from 'lucide-react'
import { sections } from '@/app/routes'
import { projects, type Language } from '@/core/config'
import { copy } from '@/core/copy'

function ProjectArtwork({ id }: { id: string }) {
  if (id === 'khedmat')
    return (
      <div className="project-art art-khedmat" aria-hidden="true" dir="ltr">
        <div className="mock phone">
          <div className="mock-notch" />
          <div className="mock-banner">
            <MapPin size={24} />
            <span />
          </div>
          <div className="mock-grid">
            {Array.from({ length: 6 }, (_, index) => (
              <i key={index}>
                <LayoutGrid size={12} />
              </i>
            ))}
          </div>
          <div className="mock-lines">
            <i />
            <i />
            <i />
          </div>
        </div>
        <MapPin className="art-symbol" />
      </div>
    )
  if (id === 'changaal')
    return (
      <div className="project-art art-changaal" aria-hidden="true" dir="ltr">
        <div className="mock fitness">
          <div className="mock-heading">
            <Activity size={19} />
            <i />
          </div>
          <div className="calorie-ring">
            <span>1,840</span>
            <small>kcal</small>
          </div>
          <div className="mock-bars">
            {[30, 55, 43, 77, 63, 90, 71].map((height) => (
              <i key={height} style={{ height: height + '%' }} />
            ))}
          </div>
        </div>
        <Activity className="art-symbol" />
      </div>
    )
  return (
    <div className="project-art art-bigc" aria-hidden="true" dir="ltr">
      <div className="mock dashboard">
        <div className="mock-sidebar">
          <Building2 size={21} />
          <i />
          <i />
          <i />
        </div>
        <div className="mock-dash">
          <div className="mock-heading">
            <PanelsTopLeft size={17} />
            <i />
          </div>
          <div className="dash-tiles">
            <i />
            <i />
            <i />
          </div>
          <div className="mock-bars">
            {[24, 41, 34, 68, 57, 90, 79].map((height) => (
              <i key={height} style={{ height: height + '%' }} />
            ))}
          </div>
        </div>
      </div>
      <Building2 className="art-symbol" />
    </div>
  )
}

export default function Work({ lang }: { lang: Language }) {
  const t = copy[lang]
  return (
    <section className="container section" id={sections.work}>
      <div className="eyebrow">
        <span className="eyebrow-line" />
        {t.portfolio}
      </div>
      <h2>{t.selected}</h2>
      <p className="section-detail">{t.selectedDetail}</p>
      <div className="projects-grid">
        {projects.slice(0, 3).map((project) => (
          <article className="project glass" key={project.id}>
            <ProjectArtwork id={project.id} />
            <div className="project-body">
              <div className="project-heading">
                <div>
                  <p className="category">{project.category[lang]}</p>
                  <h3>{project.title[lang]}</h3>
                </div>
                <a
                  className="icon-button"
                  href={project.url}
                  title={t.visit}
                  aria-label={t.visit + ' — ' + project.title[lang]}
                  target="_blank"
                  rel="noreferrer"
                >
                  <ArrowUpRight size={19} />
                </a>
              </div>
              <p>{project.description[lang]}</p>
              <ul className="tags">
                {project.stack.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
              {project.details && (
                <details>
                  <summary>
                    {t.caseStudy}
                    <ChevronDown size={15} />
                  </summary>
                  <p>{project.details[lang]}</p>
                </details>
              )}
            </div>
          </article>
        ))}
      </div>
      <h3 className="more-title">{t.more}</h3>
      <div className="projects-grid more-projects">
        {projects.slice(3).map((project) => (
          <article className="glass small-project" key={project.id}>
            <div className="project-heading">
              <div>
                <p className="category">{project.category[lang]}</p>
                <h3>{project.title[lang]}</h3>
              </div>
              <a
                className="icon-button"
                href={project.url}
                aria-label={t.visit + ' — ' + project.title[lang]}
                target="_blank"
                rel="noreferrer"
              >
                <ArrowUpRight size={18} />
              </a>
            </div>
            {project.description[lang] && <p>{project.description[lang]}</p>}
            <ul className="tags">
              {project.stack.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
            {project.details && (
              <details>
                <summary>
                  {t.caseStudy}
                  <ChevronDown size={15} />
                </summary>
                <p>{project.details[lang]}</p>
              </details>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}

import { ArrowUpRight, AppWindow, Database, SmartphoneNfc } from 'lucide-react'
import { sections } from '@/app/routes'
import { experience, expertise, identity, type Language } from '@/core/config'
import { copy } from '@/core/copy'
import TechnologyIcon from '../components/TechnologyIcon'

const icons = { mobile: SmartphoneNfc, backend: Database, web: AppWindow }

export default function About({ lang }: { lang: Language }) {
  const t = copy[lang]
  return (
    <section className="section about-section" id={sections.about}>
      <div className="container">
        <div className="eyebrow">
          <span className="eyebrow-line" />
          {t.what}
        </div>
        <h2>{t.expertise}</h2>
        <p className="section-detail">{t.aboutDetail}</p>
        <div className="projects-grid">
          {expertise.map((skill) => {
            const Icon = icons[skill.key]
            return (
              <article className="glass skill" key={skill.key}>
                <span className="skill-icon">
                  <Icon size={23} aria-hidden="true" />
                </span>
                <h3>{skill.title[lang]}</h3>
                <p>{skill.detail[lang]}</p>
                <ul className="tags">
                  {skill.stack.map((tag) => (
                    <li key={tag}>
                      <TechnologyIcon name={tag} size={13} />
                      {tag}
                    </li>
                  ))}
                </ul>
              </article>
            )
          })}
        </div>
        <div className="experience-layout">
          <div>
            <h3>{t.experience}</h3>
            <ul className="timeline">
              {experience.map((job) => (
                <li key={job.company}>
                  <div>
                    <strong>{lang === 'en' ? job.en : job.roleFa}</strong>
                    <span>
                      {lang === 'en' ? job.company : job.fa} · {job.city[lang]}
                    </span>
                  </div>
                  <time>{job.dates[lang]}</time>
                </li>
              ))}
            </ul>
          </div>
          <aside className="glass education">
            <h3>{t.education}</h3>
            <p>{identity.education[lang]}</p>
            <a className="explore" href={identity.certificate} target="_blank" rel="noreferrer">
              {t.certificate}
              <ArrowUpRight size={15} />
            </a>
          </aside>
        </div>
      </div>
    </section>
  )
}

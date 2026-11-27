import { ArrowDown, ArrowUpRight, Braces, MapPin } from 'lucide-react'
import headshot from '@/assets/mahdi.jpg'
import { sections } from '@/app/routes'
import { identity, technologies, type Language } from '@/core/config'
import { copy } from '@/core/copy'
import ResumeDownload from '@/features/resume/components/ResumeDownload'
import TechnologyIcon from '../components/TechnologyIcon'

export default function Hero({ lang }: { lang: Language }) {
  const t = copy[lang]
  return (
    <>
      <section className="container hero" id={sections.home}>
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="eyebrow-line" />
            {t.intro}
          </div>
          <h1>
            {identity.first[lang]}
            <br />
            <span>{identity.last[lang]}</span>
          </h1>
          <p className="role">{identity.role[lang]}</p>
          <p className="hero-summary">{identity.summary[lang]}</p>
          <div className="hero-actions">
            <a className="button primary" href={'#' + sections.contact}>
              {t.hire}
              <ArrowUpRight size={18} />
            </a>
            <ResumeDownload lang={lang} />
          </div>
          <a className="explore" href={'#' + sections.work}>
            <ArrowDown size={15} />
            {t.explore}
          </a>
        </div>
        <div className="hero-art">
          <div className="orbit orbit-outer" aria-hidden="true" />
          <div className="orbit orbit-inner" aria-hidden="true" />
          <div className="orbit orbit-core" aria-hidden="true" />
          <span className="star star-one" aria-hidden="true">
            ✦
          </span>
          <span className="star star-two" aria-hidden="true">
            ✧
          </span>
          <span className="star star-three" aria-hidden="true">
            ✦
          </span>
          <div className="portrait-frame">
            <img
              src={headshot}
              alt={identity.name[lang]}
              width="426"
              height="426"
              fetchPriority="high"
            />
          </div>
          <div className="art-badge available">
            <i />
            {t.available}
          </div>
          <div className="art-badge years">
            <Braces size={21} />
            <div>
              <strong>{identity.years.toLocaleString(lang)}+</strong>
              <small>{t.years}</small>
            </div>
          </div>
          <div className="art-location">
            <MapPin size={14} />
            {identity.location[lang]}
          </div>
        </div>
      </section>
      <section className="container stack-strip" aria-label={t.stack}>
        <span className="eyebrow">{t.stack}</span>
        <div className="stack-items" dir="ltr">
          {technologies.map((tech) => (
            <span key={tech}>
              <TechnologyIcon name={tech} />
              {tech}
            </span>
          ))}
        </div>
      </section>
    </>
  )
}

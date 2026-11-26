import { ArrowUpRight, Languages, Moon, Sun } from 'lucide-react'
import { sections } from '@/app/routes'
import { identity, type Language } from '@/core/config'
import { copy } from '@/core/copy'

export type Preferences = {
  lang: Language
  theme: string
  changeTheme: () => void
  changeLanguage: () => void
}

export default function SiteHeader({ lang, theme, changeTheme, changeLanguage }: Preferences) {
  const t = copy[lang]
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="wordmark" href={'#' + sections.home}>
          <span className="monogram" aria-hidden="true">
            MJ
          </span>
          <span>{identity.name[lang]}</span>
        </a>
        <nav aria-label={t.navigation}>
          <a href={'#' + sections.work}>{t.work}</a>
          <a href={'#' + sections.about}>{t.about}</a>
          <a href={'#' + sections.contact}>{t.contact}</a>
        </nav>
        <div className="header-actions">
          <button className="icon-button language" onClick={changeLanguage}>
            <Languages size={16} />
            {t.language}
          </button>
          <button className="icon-button" aria-label={t.theme} onClick={changeTheme}>
            {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <a className="button outline header-cta" href={'#' + sections.contact}>
            {t.hire}
            <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
    </header>
  )
}

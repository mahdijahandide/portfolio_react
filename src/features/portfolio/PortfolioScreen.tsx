import { ArrowUp, Download } from 'lucide-react'
import SiteHeader, { type Preferences } from '@/components/SiteHeader'
import { sections } from '@/app/routes'
import { identity } from '@/core/config'
import { copy } from '@/core/copy'
import MobileNavigation from './components/MobileNavigation'
import { useInstall } from './hooks/useInstall'
import Hero from './partials/Hero'
import Work from './partials/Work'
import About from './partials/About'
import Contact from './partials/Contact'

export default function PortfolioScreen(preferences: Preferences) {
  const { lang } = preferences
  const t = copy[lang]
  const install = useInstall()
  return (
    <>
      <a className="skip-link" href="#content">
        {t.skip}
      </a>
      <SiteHeader {...preferences} />
      <main id="content">
        <Hero lang={lang} />
        <Work lang={lang} />
        <About lang={lang} />
        <Contact lang={lang} />
      </main>
      <footer className="container footer">
        <a className="wordmark" href={'#' + sections.home}>
          <span className="monogram" aria-hidden="true">
            MJ
          </span>
          {identity.name[lang]}
        </a>
        <div>
          {install && (
            <button className="explore" onClick={install}>
              <Download size={16} />
              {t.install}
            </button>
          )}
          <a className="explore" href={'#' + sections.home}>
            <ArrowUp size={16} />
            {t.top}
          </a>
        </div>
      </footer>
      <MobileNavigation lang={lang} />
    </>
  )
}

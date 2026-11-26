import { useEffect, useState } from 'react'
import { resumePath } from '@/app/routes'
import { identity, type Language } from '@/core/config'
import { readPreference, storageKeys, writePreference } from '@/core/storage'
import PortfolioScreen from '@/features/portfolio/PortfolioScreen'
import ResumeScreen from '@/features/resume/ResumeScreen'

export default function App() {
  const isResume = location.pathname.replace(/\/$/, '') === resumePath
  const [lang, setLang] = useState<Language>(() =>
    isResume || readPreference(storageKeys.language) === 'fa' ? 'fa' : 'en',
  )
  const [theme, setTheme] = useState(() =>
    readPreference(storageKeys.theme) === 'light' ? 'light' : 'dark',
  )

  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr'
    document.documentElement.dataset.theme = theme
    document.title = identity.name[lang] + ' — ' + identity.role[lang]
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', theme === 'light' ? '#f7f6f0' : '#0c0c15')
  }, [lang, theme])

  return isResume ? (
    <ResumeScreen />
  ) : (
    <PortfolioScreen
      lang={lang}
      theme={theme}
      changeLanguage={() => {
        const next = lang === 'en' ? 'fa' : 'en'
        setLang(next)
        writePreference(storageKeys.language, next)
      }}
      changeTheme={() => {
        const next = theme === 'dark' ? 'light' : 'dark'
        setTheme(next)
        writePreference(storageKeys.theme, next)
      }}
    />
  )
}

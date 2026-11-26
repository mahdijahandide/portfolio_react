import { BriefcaseBusiness, House, MessageCircle, UserRound } from 'lucide-react'
import { useEffect, useState } from 'react'
import { sections } from '@/app/routes'
import { type Language } from '@/core/config'
import { copy } from '@/core/copy'

const items = [
  { section: sections.home, icon: House, label: 'home' },
  { section: sections.work, icon: BriefcaseBusiness, label: 'work' },
  { section: sections.about, icon: UserRound, label: 'about' },
  { section: sections.contact, icon: MessageCircle, label: 'contact' },
] as const

export default function MobileNavigation({ lang }: { lang: Language }) {
  const [active, setActive] = useState<(typeof items)[number]['section']>(sections.home)

  useEffect(() => {
    const anchors = items.map(({ section }) => document.getElementById(section))
    let frame = 0

    function sync() {
      frame = 0
      const threshold = Math.min(window.innerHeight * 0.3, 200)
      const index = anchors.findLastIndex(
        (anchor) => anchor && anchor.getBoundingClientRect().top <= threshold,
      )
      setActive(items[Math.max(index, 0)].section)
    }

    function schedule() {
      if (!frame) frame = requestAnimationFrame(sync)
    }

    schedule()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    window.addEventListener('pageshow', schedule)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
      window.removeEventListener('pageshow', schedule)
    }
  }, [lang])

  return (
    <nav className="mobile-navigation" aria-label={copy[lang].navigation}>
      {items.map(({ section, icon: Icon, label }) => (
        <a
          key={section}
          href={'#' + section}
          aria-current={active === section ? 'location' : undefined}
        >
          <Icon size={21} aria-hidden="true" />
          <span>{copy[lang][label]}</span>
        </a>
      ))}
    </nav>
  )
}

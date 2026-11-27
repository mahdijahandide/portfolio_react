import { Download, X } from 'lucide-react'
import { useRef, useState } from 'react'
import { expertise, projects, type Language } from '@/core/config'
import { copy } from '@/core/copy'
import './resume-download.css'

const labels = {
  en: {
    title: 'Customize your résumé',
    hint: 'Choose which areas of expertise and projects to include.',
    language: 'PDF language',
    skills: 'Expertise',
    projects: 'Projects',
    all: 'Select all',
    none: 'Clear all',
    close: 'Close',
    loading: 'Creating PDF…',
    error: 'Could not create the PDF. Please try again.',
  },
  fa: {
    title: 'رزومه را شخصی‌سازی کن',
    hint: 'تخصص‌ها و پروژه‌هایی را که می‌خواهی در رزومه باشند انتخاب کن.',
    language: 'زبان فایل PDF',
    skills: 'تخصص‌ها',
    projects: 'پروژه‌ها',
    all: 'انتخاب همه',
    none: 'لغو همه انتخاب‌ها',
    close: 'بستن',
    loading: 'در حال ساخت PDF…',
    error: 'ساخت فایل PDF موفق نبود. دوباره تلاش کن.',
  },
}

const entries = {
  skills: expertise.map((item) => ({ id: item.key, title: item.title, stack: item.stack })),
  projects,
}

type Group = keyof typeof entries

export default function ResumeDownload({ lang }: { lang: Language }) {
  const dialog = useRef<HTMLDialogElement>(null)
  const [pdfLang, setPdfLang] = useState(lang)
  const [selected, setSelected] = useState<Record<Group, string[]>>(() => ({
    skills: entries.skills.map(({ id }) => id),
    projects: entries.projects.map(({ id }) => id),
  }))
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState(false)
  const t = labels[lang]

  async function download() {
    setBusy(true)
    setError(false)
    try {
      const { buildResume } = await import('../utils/buildResume')
      const bytes = await buildResume(pdfLang, selected.skills, selected.projects)
      const url = URL.createObjectURL(
        new Blob([new Uint8Array(bytes)], { type: 'application/pdf' }),
      )
      const link = document.createElement('a')
      link.href = url
      link.download = 'mehdiJahandideResume_' + pdfLang + '.pdf'
      document.body.append(link)
      link.click()
      link.remove()
      window.setTimeout(() => URL.revokeObjectURL(url), 60000)
      dialog.current?.close()
    } catch {
      setError(true)
    } finally {
      setBusy(false)
    }
  }

  return (
    <>
      <button
        type="button"
        className="button outline"
        aria-haspopup="dialog"
        onClick={() => {
          setPdfLang(lang)
          setError(false)
          dialog.current?.showModal()
        }}
      >
        <Download size={17} aria-hidden="true" />
        {copy[lang].resume}
      </button>
      <dialog
        ref={dialog}
        className="resume-download"
        aria-labelledby="resume-download-title"
        onCancel={(event) => {
          if (busy) event.preventDefault()
        }}
        onClick={(event) => {
          if (!busy && event.target === event.currentTarget) dialog.current?.close()
        }}
      >
        <div className="resume-download-panel">
          <header className="resume-download-header">
            <div>
              <h2 id="resume-download-title">{t.title}</h2>
              <p>{t.hint}</p>
            </div>
            <button
              type="button"
              className="icon-button"
              aria-label={t.close}
              disabled={busy}
              onClick={() => dialog.current?.close()}
            >
              <X size={19} />
            </button>
          </header>
          <div className="resume-download-content">
            <label className="resume-language">
              {t.language}
              <select
                value={pdfLang}
                disabled={busy}
                onChange={(event) => setPdfLang(event.target.value === 'fa' ? 'fa' : 'en')}
              >
                <option value="en">English</option>
                <option value="fa">فارسی</option>
              </select>
            </label>
            {(['skills', 'projects'] as const).map((group: Group) => {
              const all = selected[group].length === entries[group].length
              return (
                <fieldset key={group} disabled={busy}>
                  <legend>{t[group]}</legend>
                  <button
                    className="resume-select-all"
                    type="button"
                    onClick={() =>
                      setSelected((previous) => ({
                        ...previous,
                        [group]: all ? [] : entries[group].map(({ id }) => id),
                      }))
                    }
                  >
                    {all ? t.none : t.all}
                  </button>
                  <div className="resume-options">
                    {entries[group].map(({ id, title, stack }) => (
                      <label key={id}>
                        <input
                          type="checkbox"
                          checked={selected[group].includes(id)}
                          onChange={(event) => {
                            const checked = event.target.checked
                            setSelected((previous) => ({
                              ...previous,
                              [group]: checked
                                ? [...previous[group], id]
                                : previous[group].filter((value) => value !== id),
                            }))
                          }}
                        />
                        <span>
                          {title[lang]}
                          <small dir="ltr">{stack.join(' · ')}</small>
                        </span>
                      </label>
                    ))}
                  </div>
                </fieldset>
              )
            })}
          </div>
          <footer className="resume-download-footer">
            {error && <p role="alert">{t.error}</p>}
            <button
              type="button"
              className="button primary"
              onClick={() => void download()}
              disabled={busy}
            >
              <Download size={17} aria-hidden="true" />
              {busy ? t.loading : copy[lang].resume}
            </button>
          </footer>
        </div>
      </dialog>
    </>
  )
}

import { ArrowUpRight, Mail, Send } from 'lucide-react'
import { useState, type FormEvent } from 'react'
import { sections } from '@/app/routes'
import { identity, type Language } from '@/core/config'
import { copy } from '@/core/copy'

export default function Contact({ lang }: { lang: Language }) {
  const t = copy[lang]
  const [prepared, setPrepared] = useState(false)
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const subject = t.type + ' — ' + data.get('type')
    const body =
      t.name +
      ': ' +
      data.get('name') +
      '\n' +
      t.email +
      ': ' +
      data.get('email') +
      '\n\n' +
      data.get('message')
    window.location.href =
      'mailto:' +
      identity.email +
      '?subject=' +
      encodeURIComponent(subject) +
      '&body=' +
      encodeURIComponent(body)
    setPrepared(true)
  }
  return (
    <section className="container section" id={sections.contact}>
      <div className="glass contact-panel">
        <div>
          <div className="eyebrow">
            <span className="eyebrow-line" />
            {t.collaboration}
          </div>
          <h2>{t.contactTitle}</h2>
          <p className="section-detail">{t.contactDetail}</p>
          <a className="email-link" href={'mailto:' + identity.email} dir="ltr">
            <Mail size={17} />
            {identity.email}
          </a>
          <div className="socials">
            <a href={identity.linkedin} target="_blank" rel="noreferrer">
              LinkedIn <ArrowUpRight size={14} />
            </a>
            <a href={identity.telegram} target="_blank" rel="noreferrer">
              Telegram <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
        <form onSubmit={submit} onChange={() => setPrepared(false)}>
          <div className="form-row">
            <label>
              {t.name}
              <input name="name" autoComplete="name" required maxLength={100} />
            </label>
            <label>
              {t.email}
              <input
                name="email"
                type="email"
                dir="ltr"
                autoComplete="email"
                required
                maxLength={150}
              />
            </label>
          </div>
          <label>
            {t.type}
            <select name="type" defaultValue="" required>
              <option value="" disabled>
                {t.choose}
              </option>
              {(['mobile', 'web', 'backend', 'other'] as const).map((key) => (
                <option key={key} value={t[key]}>
                  {t[key]}
                </option>
              ))}
            </select>
          </label>
          <label>
            {t.message}
            <textarea name="message" dir="auto" required rows={4} maxLength={1500} />
          </label>
          <button className="button primary" type="submit">
            {t.send}
            <Send size={16} />
          </button>
          <p className="form-note" role="status">
            {prepared ? t.thanks : t.draft}
          </p>
        </form>
      </div>
    </section>
  )
}

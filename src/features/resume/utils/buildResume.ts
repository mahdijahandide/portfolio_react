import { PDFDocument, PageSizes } from 'pdf-lib'
import portrait from '@/assets/mahdi.jpg'
import { experience, expertise, identity, projects, type Language } from '@/core/config'

export const resumeLabels = {
  en: {
    summary: 'Profile',
    education: 'Education',
    history: 'Work experience',
    skills: 'Expertise',
    projects: 'Projects',
  },
  fa: {
    summary: 'خلاصه حرفه‌ای',
    education: 'تحصیلات',
    history: 'سوابق کاری',
    skills: 'تخصص‌ها',
    projects: 'پروژه‌ها',
  },
}

export async function buildResume(lang: Language, skills: string[], work: string[]) {
  const t = resumeLabels[lang]
  const rtl = lang === 'fa'
  const font = rtl ? 'Iransans' : 'Arial'
  const [width, height] = PageSizes.A4
  const margin = 42
  const scale = 2
  const pdf = await PDFDocument.create()
  pdf.setTitle(identity.name[lang] + ' — ' + identity.role[lang])
  pdf.setAuthor(identity.name[lang])

  const photo = new Image()
  photo.src = portrait
  await Promise.all([
    photo.decode(),
    document.fonts.load('10pt ' + font),
    document.fonts.load('bold 10pt ' + font),
  ])

  const canvas = document.createElement('canvas')
  canvas.width = Math.ceil(width * scale)
  canvas.height = Math.ceil(height * scale)
  const context = canvas.getContext('2d')
  if (!context) throw new Error('Canvas unavailable')
  const ctx = context
  ctx.scale(scale, scale)

  let y = margin

  function beginPage() {
    ctx.fillStyle = '#ffffff'
    ctx.fillRect(0, 0, canvas.width / scale, canvas.height / scale)
    y = margin
  }

  async function savePage() {
    const blob = await new Promise<Blob>((resolve, reject) => {
      canvas.toBlob(
        (image) => (image ? resolve(image) : reject(new Error('Page capture failed'))),
        'image/jpeg',
        0.94,
      )
    })
    const image = await pdf.embedJpg(await blob.arrayBuffer())
    pdf.addPage(PageSizes.A4).drawImage(image, { x: 0, y: 0, width, height })
  }

  async function reserve(space: number) {
    if (y + space <= height - margin) return
    await savePage()
    beginPage()
  }

  function setFont(size: number, bold = false) {
    ctx.font = (bold ? 'bold ' : '') + size + 'px ' + font
  }

  function lines(text: string, size: number, bold = false) {
    setFont(size, bold)
    const output: string[] = []
    let line = ''
    for (const word of text.split(/\s+/)) {
      const next = line ? line + ' ' + word : word
      if (line && ctx.measureText(next).width > width - margin * 2) {
        output.push(line)
        line = word
      } else {
        line = next
      }
    }
    if (line) output.push(line)
    return output
  }

  function write(
    text: string,
    x: number,
    baseline: number,
    size: number,
    color: string,
    bold = false,
    align?: CanvasTextAlign,
  ) {
    setFont(size, bold)
    ctx.direction = rtl ? 'rtl' : 'ltr'
    ctx.textAlign = align ?? (rtl ? 'right' : 'left')
    ctx.fillStyle = color
    ctx.fillText(text, x, baseline)
  }

  async function heading(text: string) {
    await reserve(82)
    y += 20
    write(text, width / 2, y, 14, '#0064bf', true, 'center')
    y += 8
    ctx.fillStyle = '#0064bf'
    ctx.fillRect(width * 0.27, y, width * 0.46, 1)
    y += 12
  }

  async function entry(title: string, body: string[]) {
    const titleLines = lines(title, 11, true)
    const bodyLines = body.flatMap((line) => lines(line, 10))
    const x = rtl ? width - margin : margin
    await reserve(16 * (titleLines.length + bodyLines.length) + 10)
    for (const line of titleLines) {
      write(line, x, y + 12, 11, '#182235', true)
      y += 16
    }
    for (const line of bodyLines) {
      await reserve(16)
      write(line, x, y + 11, 10, '#344359')
      y += 16
    }
    y += 9
  }

  beginPage()
  ctx.fillStyle = '#f4f7fa'
  ctx.fillRect(margin, y + 37, width - 2 * margin, 135)
  ctx.save()
  ctx.beginPath()
  ctx.arc(width / 2, y + 43, 43, 0, 2 * Math.PI)
  ctx.clip()
  ctx.drawImage(photo, width / 2 - 43, y, 86, 86)
  ctx.restore()
  write(identity.name[lang], width / 2, y + 109, 21, '#0064bf', true, 'center')
  write(identity.role[lang], width / 2, y + 131, 12, '#182235', false, 'center')
  write(
    identity.location[lang] + ' · ' + identity.email,
    width / 2,
    y + 152,
    10,
    '#344359',
    false,
    'center',
  )
  y += 177

  await heading(t.summary)
  await entry('', [identity.summary[lang]])
  await heading(t.education)
  await entry(identity.education[lang], [])
  await heading(t.history)
  for (const job of experience) {
    await entry(lang === 'fa' ? job.roleFa : job.en, [
      lang === 'fa' ? job.fa : job.company,
      job.city[lang] + ' · ' + job.dates[lang],
    ])
  }

  const selectedSkills = expertise.filter((skill) => skills.includes(skill.key))
  if (selectedSkills.length) {
    await heading(t.skills)
    for (const skill of selectedSkills) {
      await entry(skill.title[lang], [skill.detail[lang], skill.stack.join(' · ')])
    }
  }

  const selectedProjects = projects.filter((project) => work.includes(project.id))
  if (selectedProjects.length) {
    await heading(t.projects)
    for (const project of selectedProjects) {
      await entry(project.title[lang], [
        project.description[lang],
        project.details?.[lang] ?? '',
        project.url,
      ])
    }
  }

  await savePage()
  return pdf.save()
}

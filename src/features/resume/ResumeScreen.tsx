import portrait from '@/assets/mahdi.jpg'
import { experience, expertise, identity, projects } from '@/core/config'
import './resume.css'

const jobs = [...experience].reverse()

function JobHistory({ start, end }: { start: number; end: number }) {
  return (
    <div className="resume-jobs">
      {jobs.slice(start, end).map((job) => (
        <div key={job.company}>
          <strong>{job.roleFa}</strong>
          <p>{job.fa}</p>
          <p>{job.city.fa}</p>
          <small>{job.dates.fa}</small>
        </div>
      ))}
    </div>
  )
}

function ResumeProjects({ ids }: { ids: string[] }) {
  return ids.map((id) => {
    const project = projects.find((item) => item.id === id)
    if (!project) return null
    return (
      <article key={id}>
        <strong>{project.title.fa}</strong>
        {project.description.fa && <p>{project.description.fa}</p>}
        {project.details && <p>{project.details.fa}</p>}
        <a href={project.url}>پیوند پروژه</a>
      </article>
    )
  })
}

export default function ResumeScreen() {
  return (
    <main className="resume-sheet" dir="rtl" lang="fa">
      <div className="resume-page">
        <header>
          <img src={portrait} alt={identity.name.fa} />
          <div>
            <h1>{identity.name.fa}</h1>
            <p>{identity.role.fa}</p>
            <p>
              {identity.location.fa} · <a href={'mailto:' + identity.email}>{identity.email}</a>
            </p>
          </div>
        </header>
        <section>
          <h2>خلاصه حرفه‌ای</h2>
          <p>
            توسعه‌دهنده فول‌استک با بیش از {identity.years.toLocaleString('fa')} سال تجربه.{' '}
            {identity.summary.fa}
          </p>
          <ul>
            <li>توسعه اپلیکیشن چندسکویی اندروید و iOS با Flutter و Dart</li>
            <li>توسعه نیتیو اندروید با Kotlin و Java</li>
            <li>توسعه بک‌اند با Laravel و PHP</li>
            <li>توسعه برنامه وب با Flutter Web، WebAssembly و Laravel</li>
          </ul>
          <p>
            در طراحی راهکارهای انتها‌به‌انتها، رابط‌های موبایل و وب فلاتر را با بک‌اند لاراول
            یکپارچه می‌کنم. هدفم ساخت محصولاتی با معماری قابل نگهداری، تجربه کاربری روان و عملکرد
            مناسب است.
          </p>
          <p>
            در کنار طراحی APIهای سریع، امن و مستند با REST و GraphQL، با تیم‌های طراحی، محصول و
            ذی‌نفعان همکاری می‌کنم. بهینه‌سازی کد و عملکرد، رعایت استانداردهای توسعه و حل مسائل
            پیچیده از بخش‌های ثابت کار من هستند.
          </p>
          <p dir="ltr">
            {[...new Set(expertise.flatMap((skill) => skill.stack)), 'Git', 'Agile/Scrum'].join(
              ' · ',
            )}
          </p>
        </section>
        <section>
          <h2>تحصیلات</h2>
          <strong>{identity.education.fa}</strong>
          <p>گرایش فناوری اطلاعات · ایران</p>
          <p>معدل ۱۴</p>
        </section>
        <section>
          <h2>سوابق کاری</h2>
          <JobHistory start={0} end={2} />
        </section>
      </div>
      <div className="resume-page">
        <JobHistory start={2} end={4} />
        <section>
          <h2>مهارت‌ها</h2>
          <p dir="ltr">
            Dart / Flutter · Android / Java &amp; Kotlin · PHP / Laravel · PostgreSQL · React · Vue
          </p>
        </section>
        <section>
          <h2>زبان</h2>
          <p>انگلیسی · سطح متوسط</p>
        </section>
        <section>
          <h2>گواهی‌نامه</h2>
          <p>
            <a href={identity.certificate}>
              دوره تخصصی اندروید و گواهی برنامه‌نویسی اندروید با جاوا
            </a>
          </p>
          <p>مدرسه علوم و فناوری نوین</p>
        </section>
        <section>
          <h2>پروژه‌ها</h2>
          <ResumeProjects ids={['khedmat', 'changaal']} />
        </section>
      </div>
      <div className="resume-page">
        <ResumeProjects ids={['babydo', 'ontime', 'bigc', 'onsho', 'mahoverse']} />
        <section>
          <h2>شبکه‌های اجتماعی</h2>
          <p>
            <a href={identity.linkedin}>LinkedIn</a> · <a href={identity.telegram}>Telegram</a>
          </p>
        </section>
      </div>
    </main>
  )
}

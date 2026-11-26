export type Language = 'en' | 'fa'
export type Localized = Record<Language, string>

export const identity = {
  name: { en: 'Mahdi Jahandide', fa: 'مهدی جهاندیده' },
  first: { en: 'Mahdi', fa: 'مهدی' },
  last: { en: 'Jahandide', fa: 'جهاندیده' },
  role: { en: 'Full-stack Developer', fa: 'توسعه‌دهنده فول‌استک' },
  location: { en: 'Shiraz, Iran', fa: 'شیراز، ایران' },
  summary: {
    en: 'I build mobile apps, web experiences and the backends that power them. From Flutter and native Android to scalable Laravel APIs, I take products from idea to release.',
    fa: 'اپلیکیشن موبایل، تجربه‌های وب و بک‌اند آن‌ها را می‌سازم. از فلاتر و اندروید نیتیو تا APIهای مقیاس‌پذیر لاراول، محصول را از ایده تا انتشار پیش می‌برم.',
  },
  email: 'mhdi.j77@gmail.com',
  linkedin: 'https://www.linkedin.com/in/mahdi-jahandide/',
  telegram: 'https://t.me/Mhdi9877',
  years: 7,
  education: {
    en: 'Associate in Software Engineering · ITMC',
    fa: 'کاردانی مهندسی نرم‌افزار · ITMC',
  },
  certificate: 'https://drive.google.com/file/d/1I6pxCDt8cgoirUpys-XrXTimA6TCtS_1/view',
  resume: { en: 'resume-en.pdf', fa: 'resume-fa.pdf' },
}

export const technologies = [
  'Flutter',
  'Dart',
  'Kotlin',
  'Laravel',
  'PostgreSQL',
  'Firebase',
  'React',
  'Vue',
]

export const expertise = [
  {
    key: 'mobile',
    title: { en: 'Mobile engineering', fa: 'مهندسی موبایل' },
    detail: {
      en: 'Cross-platform Android and iOS apps, native Android modules, and responsive interfaces.',
      fa: 'اپلیکیشن چندسکویی اندروید و iOS، ماژول‌های نیتیو و رابط‌های واکنش‌گرا.',
    },
    stack: ['Flutter', 'Dart', 'Kotlin', 'Java'],
  },
  {
    key: 'backend',
    title: { en: 'Backend & APIs', fa: 'بک‌اند و API' },
    detail: {
      en: 'Scalable Laravel services, documented APIs, and reliable data integration.',
      fa: 'سرویس‌های مقیاس‌پذیر لاراول، API مستند و یکپارچه‌سازی قابل اتکای داده.',
    },
    stack: ['Laravel', 'PHP', 'REST', 'GraphQL', 'MySQL', 'PostgreSQL'],
  },
  {
    key: 'web',
    title: { en: 'Web & PWA', fa: 'وب و PWA' },
    detail: {
      en: 'Installable web experiences with offline support and attention to performance.',
      fa: 'تجربه‌های وب قابل نصب با پشتیبانی آفلاین و تمرکز بر عملکرد.',
    },
    stack: ['React', 'Vue', 'Flutter Web', 'WASM', 'PWA', 'Firebase'],
  },
] as const

export const experience = [
  {
    company: 'Khedmatazma',
    fa: 'خدمت از ما',
    en: 'Senior Flutter Developer',
    roleFa: 'توسعه‌دهنده ارشد فلاتر',
    dates: { en: 'Jul 2023 – Present', fa: 'ژوئیه ۲۰۲۳ تا اکنون' },
    city: { en: 'Shiraz, Iran', fa: 'شیراز، ایران' },
  },
  {
    company: 'Vesta System',
    fa: 'وستا سیستم',
    en: 'Senior Flutter Developer',
    roleFa: 'توسعه‌دهنده ارشد فلاتر',
    dates: { en: 'Jan 2020 – May 2023', fa: 'ژانویه ۲۰۲۰ تا مه ۲۰۲۳' },
    city: { en: 'Shiraz, Iran', fa: 'شیراز، ایران' },
  },
  {
    company: 'GulfClick',
    fa: 'گلف‌کلیک',
    en: 'Senior Android Developer',
    roleFa: 'توسعه‌دهنده ارشد اندروید',
    dates: { en: 'Sep 2018 – Dec 2020', fa: 'سپتامبر ۲۰۱۸ تا دسامبر ۲۰۲۰' },
    city: { en: 'Hawally, Kuwait', fa: 'حولی، کویت' },
  },
  {
    company: 'Datis Pars',
    fa: 'داتیس پارس',
    en: 'Android Developer',
    roleFa: 'توسعه‌دهنده اندروید',
    dates: { en: 'Dec 2017 – May 2019', fa: 'دسامبر ۲۰۱۷ تا مه ۲۰۱۹' },
    city: { en: 'Shiraz, Iran', fa: 'شیراز، ایران' },
  },
]

type Project = {
  id: string
  title: Localized
  category: Localized
  description: Localized
  details?: Localized
  stack: string[]
  url: string
}

export const projects: Project[] = [
  {
    id: 'khedmat',
    title: { en: 'Khedmat Az Ma', fa: 'خدمت از ما' },
    category: { en: 'Service marketplace', fa: 'بازار خدمات' },
    description: {
      en: 'On-demand service booking for customers and a dedicated app for service providers.',
      fa: 'رزرو آنلاین خدمات برای مشتریان و اپلیکیشن اختصاصی متخصصان.',
    },
    details: {
      en: 'Built booking flows, geolocation and real-time messaging for customers, plus a provider dashboard, push notifications and digital wallet. Integrated native modules through Flutter Method Channels and optimized multi-step flows under high traffic.',
      fa: 'فرایند رزرو، مکان‌یابی و پیام‌رسانی لحظه‌ای کاربران و داشبورد، اعلان و کیف پول متخصصان را توسعه دادم. با Method Channel ماژول‌های نیتیو را یکپارچه کردم و جریان چندمرحله‌ای را برای ترافیک بالا بهینه کردم.',
    },
    stack: ['Flutter', 'GIS', 'Real-time'],
    url: 'https://khedmatazma.com',
  },
  {
    id: 'changaal',
    title: { en: 'Changaal', fa: 'چنگال' },
    category: { en: 'Health & fitness', fa: 'سلامت و تناسب اندام' },
    description: {
      en: 'Personalized meal plans, calorie tracking and progress monitoring with offline support.',
      fa: 'برنامه غذایی شخصی، ثبت کالری و پایش پیشرفت با پشتیبانی آفلاین.',
    },
    details: {
      en: 'Developed calorie and macronutrient calculations, adaptive meal plans, progress charts, water and activity logs. Improved local food search and implemented offline and multi-device synchronization.',
      fa: 'محاسبه کالری و درشت‌مغذی‌ها، برنامه غذایی تطبیقی، نمودار پیشرفت و ثبت آب و فعالیت را توسعه دادم. جست‌وجوی محلی غذا و همگام‌سازی آفلاین و چنددستگاهی را پیاده‌سازی کردم.',
    },
    stack: ['Mobile', 'Offline sync'],
    url: 'https://play.google.com/store/apps/details?id=com.changaal.app',
  },
  {
    id: 'bigc',
    title: { en: 'Big.C', fa: 'بیگ‌سی' },
    category: { en: 'Construction technology', fa: 'فناوری ساخت‌وساز' },
    description: {
      en: 'A construction platform for cost estimation, procurement and project management.',
      fa: 'پلتفرم ساخت‌وساز برای برآورد هزینه، تأمین مصالح و مدیریت پروژه.',
    },
    details: {
      en: 'Built the Android app, vendor PWA and Flutter WASM landing page, along with an estimation engine, financial and project tracking, and detailed RTL PDF reports.',
      fa: 'اپ اندروید، پنل فروشندگان در قالب PWA و صفحه معرفی با Flutter WASM را در کنار موتور برآورد، پیگیری مالی و پروژه و گزارش PDF راست‌چین توسعه دادم.',
    },
    stack: ['Flutter WASM', 'PWA', 'PDF'],
    url: 'https://pwa.bigcmarket.com',
  },
  {
    id: 'babydo',
    title: { en: 'BabyDo', fa: 'بیبی‌دو' },
    category: { en: 'Booking & live monitoring', fa: 'رزرو و پایش زنده' },
    description: {
      en: 'Scheduling for mobile educational buses, with live video, GPS tracking and arrival alerts.',
      fa: 'رزرو اتوبوس‌های آموزشی با ویدیوی زنده، مکان‌یابی و اعلان زمان رسیدن.',
    },
    details: {
      en: 'Implemented age- and availability-based scheduling, low-latency video, fleet tracking and live updates across concurrent sessions.',
      fa: 'زمان‌بندی بر اساس رده سنی و ظرفیت، ویدیوی کم‌تأخیر، مکان‌یابی ناوگان و به‌روزرسانی لحظه‌ای نشست‌ها را پیاده‌سازی کردم.',
    },
    stack: ['Mobile', 'GPS', 'Live video'],
    url: 'https://play.google.com/store/apps/details?id=net.gulfclick.babydo',
  },
  {
    id: 'ontime',
    title: { en: 'Ontime', fa: 'آن‌تایم' },
    category: { en: 'Virtual classrooms', fa: 'کلاس و جلسه آنلاین' },
    description: {
      en: 'A live classroom and meeting platform for web, Android, and iOS, with video, chat, and a shared whiteboard.',
      fa: 'پلتفرم برگزاری کلاس و جلسه آنلاین در وب، اندروید و iOS، با تماس تصویری، گفت‌وگو و تخته سفید مشترک.',
    },
    details: {
      en: 'Instructors can share their screen and record sessions. Enrolled learners can revisit recordings, chat, and whiteboard content after class. The web client uses Nuxt, the mobile client uses Flutter, and LiveKit handles real-time media.',
      fa: 'مدرس می‌تواند صفحه‌اش را به اشتراک بگذارد و جلسه را ضبط کند. مهارت‌آموزان ثبت‌نام‌شده پس از کلاس به ضبط جلسه، گفت‌وگو و محتوای تخته سفید دسترسی دارند. نسخه وب با Nuxt و اپ موبایل با Flutter ساخته شده و LiveKit ارتباط صوتی و تصویری را برقرار می‌کند.',
    },
    stack: ['Nuxt', 'NestJS', 'Flutter', 'LiveKit'],
    url: 'https://ontimeroom.ir',
  },
  {
    id: 'onsho',
    title: { en: 'Onsho', fa: 'آن‌شو' },
    category: { en: 'Vocational learning', fa: 'آموزش مهارتی' },
    description: {
      en: 'A skills-learning platform where learners can discover courses, training institutes, and specialist books.',
      fa: 'پلتفرم آموزش مهارتی برای پیدا کردن دوره‌ها، آموزشگاه‌ها و کتاب‌های تخصصی.',
    },
    details: {
      en: 'Learners can enroll in courses, track their schedule, join online classes, and access print and digital learning resources. The Nuxt web app separates the dashboards for learners, instructors, institutes, and organizations into layers, alongside a Flutter mobile app.',
      fa: 'مهارت‌آموزان می‌توانند در دوره‌ها ثبت‌نام کنند، برنامه کلاس‌ها را ببینند، وارد کلاس آنلاین شوند و به منابع آموزشی چاپی و دیجیتال دسترسی داشته باشند. در وب، پنل‌های مهارت‌آموز، مدرس، آموزشگاه و سازمان در لایه‌های جداگانه Nuxt قرار دارند و اپ موبایل با Flutter ساخته شده است.',
    },
    stack: ['Vue', 'Nuxt', 'Flutter'],
    url: 'https://onsho24.ir',
  },
  {
    id: 'mahoverse',
    title: { en: 'Mahoverse', fa: 'ماهورس' },
    category: { en: 'Learning platform', fa: 'پلتفرم یادگیری' },
    description: {
      en: 'A learning platform with a course catalog, video lessons, live classes, and an AI learning assistant.',
      fa: 'پلتفرم یادگیری با امکان جست‌وجو و ثبت‌نام در دوره‌ها، درس‌های ویدیویی، کلاس زنده و دستیار هوشمند.',
    },
    details: {
      en: 'The assistant uses questionnaires to guide learners toward suitable learning paths. Learners can watch course videos, submit assignments, and join scheduled classes. Nuxt Layers organize the role-specific web dashboards, while the Flutter app connects to the Laravel API.',
      fa: 'دستیار هوشمند با پرسش‌نامه به انتخاب مسیر یادگیری کمک می‌کند. مهارت‌آموزان می‌توانند ویدیوهای دوره را ببینند، تمرین بفرستند و در کلاس‌های برنامه‌ریزی‌شده شرکت کنند. پنل‌های وب با Nuxt Layers سازمان‌دهی شده‌اند و اپ فلاتر به API لاراول متصل است.',
    },
    stack: ['Vue', 'Nuxt', 'Flutter', 'Laravel'],
    url: 'https://mahoverse.com',
  },
]

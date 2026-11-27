# Mahdi Jahandide Portfolio

پورتفولیوی استاتیک با React، TypeScript و Vite، با رابط فارسی و انگلیسی و قابلیت نصب PWA.

## اجرا

```sh
npm ci
npm run dev
npm run check
npm run build
npm run preview
```

خروجی انتشار در `dist/` ساخته می‌شود. برای نصب PWA از HTTPS یا localhost استفاده کنید. مسیر `/resume-fa` برای پیش‌نمایش رزومه به fallback فایل `index.html` روی میزبان استاتیک نیاز دارد. دکمه دانلود، فایل PDF شخصی‌سازی‌شده را با زبان و موارد انتخابی کاربر در مرورگر تولید می‌کند. نسخه‌های ثابت از آدرس‌های مستقیم قبلی در دسترس‌اند.

## به‌روزرسانی محتوا

- مشخصات، راه‌های تماس، سوابق، فناوری‌ها و پروژه‌ها در `src/core/config.ts` هستند. متن‌های رابط در `src/core/copy.ts` و توکن‌های تم در `src/index.css` تعریف شده‌اند.
- فایل `public/resume-en.pdf` نسخه انگلیسی مناسب انتشار عمومی است. برای تغییر آن نسخه جدید رزومه را با همین نام جایگزین کنید.
- پیش‌نمایش فارسی در `/resume-fa` داده‌های مشترک را از کانفیگ می‌خواند. پس از تغییر رزومه، از همین مسیر با گزینه Print مرورگر و کاغذ A4 (بدون header و footer مرورگر، همراه با background graphics) خروجی بگیرید و جایگزین `public/resume-fa.pdf` کنید.
- فرم همکاری پیش‌نویس را در برنامه ایمیل باز می‌کند. کاربر ارسال را از برنامه ایمیل انجام می‌دهد.

## ساختار

بر اساس ساختار مستندشده در شاخه `main` پروژه Customer، مسیرها در `src/app`، کانفیگ و زیرساخت مرورگر در `src/core`، اجزای مشترک در `src/components` و صفحه‌ها و بخش‌هایشان در `src/features` قرار دارند.

## انتشار روی GitHub Pages

گردش‌کار `.github/workflows/pages.yml` با هر push روی `main` پورتفولیو را بررسی، می‌سازد و منتشر می‌کند. در تنظیمات Pages مخزن، گزینه Source روی GitHub Actions تنظیم می‌شود. آدرس پروژه [mahdijahandide.github.io/portfolio_react](https://mahdijahandide.github.io/portfolio_react/) است.

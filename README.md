# Ashwini Accident & Neuro Care Center — Website

A complete, production-ready hospital website built with **Next.js 15**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## 🏥 About

Premium healthcare website for **Ashwini Accident & Neuro Care Center, Latur, Maharashtra** — the Marathwada region's premier neurological hospital.

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18.17 or later
- npm 9+ or yarn

### Installation

```bash
# 1. Extract the ZIP and enter the project folder
cd ashwini-neuro-care

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
ashwini-neuro-care/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Home page
│   │   ├── about/page.tsx
│   │   ├── doctors/page.tsx
│   │   ├── services/page.tsx
│   │   ├── facilities/page.tsx
│   │   ├── gallery/page.tsx
│   │   ├── testimonials/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── emergency/page.tsx
│   │   ├── appointment/page.tsx
│   │   ├── sitemap.ts
│   │   ├── robots.ts
│   │   ├── loading.tsx
│   │   ├── error.tsx
│   │   └── not-found.tsx
│   ├── components/
│   │   ├── layout/             # Header, Footer
│   │   ├── ui/                 # Reusable UI components
│   │   └── sections/           # Page sections
│   ├── data/                   # Static data (doctors, services, etc.)
│   ├── lib/                    # Utilities and config
│   ├── types/                  # TypeScript interfaces
│   └── styles/                 # Global CSS
├── public/                     # Static assets
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 📄 Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero, stats, about snippet, services, doctors, testimonials |
| About | `/about` | Hospital story, values, timeline |
| Doctors | `/doctors` | Full doctor profiles |
| Services | `/services` | All 8 medical services |
| Facilities | `/facilities` | Infrastructure details |
| Gallery | `/gallery` | Filterable photo gallery with lightbox |
| Testimonials | `/testimonials` | Patient reviews |
| Contact | `/contact` | Contact form + info |
| Emergency | `/emergency` | 24/7 emergency info |
| Appointment | `/appointment` | Full booking form |

---

## 🎨 Tech Stack

- **Next.js 15** — App Router, Server Components
- **TypeScript** — Full type safety
- **Tailwind CSS** — Utility-first styling
- **Framer Motion** — Animations
- **Lucide React** — Icons
- **React Hook Form + Zod** — Form validation

---

## ⚙️ Customisation

1. **Hospital details** — edit `src/lib/utils.ts` (`SITE_CONFIG`)
2. **Doctors** — edit `src/data/doctors.ts`
3. **Services** — edit `src/data/services.ts`
4. **Colours** — edit `tailwind.config.ts`
5. **SEO** — edit `src/app/layout.tsx` metadata + `src/app/sitemap.ts`

---

## 📞 Contact Integration

Update `.env.local` with real values:

```env
NEXT_PUBLIC_PHONE_PRIMARY=+91-XXXXXXXXXX
NEXT_PUBLIC_PHONE_EMERGENCY=+91-XXXXXXXXXX
NEXT_PUBLIC_WHATSAPP=91XXXXXXXXXX
NEXT_PUBLIC_EMAIL=info@yourhospital.com
```

---

## 📝 License

Built for Ashwini Accident & Neuro Care Center, Latur. All rights reserved.

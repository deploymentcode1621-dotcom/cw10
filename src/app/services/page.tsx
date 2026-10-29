import type { Metadata } from "next";
import type { LucideIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  Activity,
  Ambulance,
  ArrowRight,
  Brain,
  CalendarDays,
  CircleAlert,
  HeartPulse,
  Scan,
  ScanLine,
  Stethoscope,
} from "lucide-react";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Departments & Services",
  description:
    "Information about clinical departments, diagnostic services and consultation arrangements at Ashwini Neuro Care, Latur.",
};

const presentation: Record<
  string,
  {
    icon: LucideIcon;
    background: string;
    foreground: string;
    category: string;
  }
> = {
  neurology: {
    icon: Brain,
    background: "from-teal-50 to-emerald-100",
    foreground: "text-teal-800",
    category: "Clinical Department",
  },
  neurosurgery: {
    icon: Stethoscope,
    background: "from-blue-50 to-sky-100",
    foreground: "text-blue-800",
    category: "Clinical Department",
  },
  "spine-surgery": {
    icon: Activity,
    background: "from-violet-50 to-purple-100",
    foreground: "text-violet-800",
    category: "Clinical Department",
  },
  "trauma-care": {
    icon: Ambulance,
    background: "from-orange-50 to-amber-100",
    foreground: "text-orange-800",
    category: "Injury Care",
  },
  "emergency-care": {
    icon: CircleAlert,
    background: "from-rose-50 to-red-100",
    foreground: "text-rose-800",
    category: "Emergency Service",
  },
  "icu-care": {
    icon: HeartPulse,
    background: "from-cyan-50 to-teal-100",
    foreground: "text-cyan-800",
    category: "Intensive Care",
  },
  "ct-scan": {
    icon: Scan,
    background: "from-indigo-50 to-blue-100",
    foreground: "text-indigo-800",
    category: "Diagnostic Imaging",
  },
  "mri-scan": {
    icon: ScanLine,
    background: "from-fuchsia-50 to-purple-100",
    foreground: "text-fuchsia-800",
    category: "Diagnostic Imaging",
  },
};

const orbitPositions = [
  "left-[12%] top-[8%]",
  "right-[10%] top-[8%]",
  "left-[2%] top-[40%]",
  "right-[1%] top-[40%]",
  "left-[10%] bottom-[12%]",
  "right-[9%] bottom-[12%]",
  "left-[36%] top-0",
  "left-[38%] bottom-0",
];

const focusClass =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-700";

export default function ServicesPage() {
  return (
    <main className="overflow-hidden bg-white">
      {/* Illustrated hero */}
      <section className="relative bg-gradient-to-b from-teal-50/70 via-white to-slate-50 pb-14 pt-12 sm:pt-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal-800">
              Departments &amp; Services
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Clinical Care.
              <span className="block text-teal-800">
                Clear Information.
              </span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-600">
              Browse clinical departments and diagnostic services.
              Read about each service and contact the hospital to
              confirm availability and consultation arrangements.
            </p>
          </div>

          <div className="relative mx-auto mt-10 max-w-4xl">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-[15%] rounded-full bg-teal-200/40 blur-3xl"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-[20%] inset-y-[8%] hidden rounded-full border border-teal-200/70 sm:block"
            />

            <Image
              src="/images/brain.png"
              alt="Illustration of the human brain"
              width={900}
              height={700}
              priority
              sizes="(max-width: 639px) 90vw, 560px"
              className="relative mx-auto h-auto w-[85%] max-w-[560px] object-contain sm:w-[65%]"
            />

            {/* Desktop floating navigation */}
            <div className="hidden sm:block">
              {services.slice(0, 8).map((service, index) => (
                <Link
                  key={service.id}
                  href={`/services/${service.slug}`}
                  className={`absolute z-10 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-800 shadow-sm transition-colors hover:border-teal-300 hover:bg-teal-50 ${orbitPositions[index]} ${focusClass}`}
                >
                  {service.title}
                </Link>
              ))}
            </div>

            <p className="relative mt-4 text-center text-xs text-slate-500">
              Illustrative image, not a diagnostic scan.
            </p>
          </div>

          {/* Mobile service navigation */}
          <nav
            aria-label="Browse services"
            className="mt-6 flex flex-wrap justify-center gap-2 sm:hidden"
          >
            {services.map((service) => (
              <Link
                key={service.id}
                href={`/services/${service.slug}`}
                className={`rounded-full border border-teal-100 bg-white px-3 py-2 text-xs font-medium text-teal-900 ${focusClass}`}
              >
                {service.title}
              </Link>
            ))}
          </nav>
        </div>
      </section>

      {/* Directory */}
      <section
        aria-labelledby="services-heading"
        className="bg-slate-50 py-16 sm:py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-800">
                Service Directory
              </p>

              <h2
                id="services-heading"
                className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
              >
                Departments &amp; Diagnostic Services
              </h2>
            </div>

            <Link
              href="/doctors"
              className={`inline-flex shrink-0 items-center gap-2 rounded-lg text-sm font-semibold text-teal-800 ${focusClass}`}
            >
              Doctor Directory
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => {
              const style =
                presentation[service.slug] ??
                presentation.neurology;
              const Icon = style.icon;

              return (
                <article
                  key={service.id}
                  id={service.slug}
                  className="group flex scroll-mt-28 flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-lg"
                >
                  <div
                    className={`relative flex h-44 items-center justify-center overflow-hidden bg-gradient-to-br ${style.background}`}
                  >
                    <div
                      aria-hidden="true"
                      className="absolute -right-8 -top-8 h-40 w-40 rounded-full border-[20px] border-white/40"
                    />

                    <span
                      aria-hidden="true"
                      className="absolute left-5 top-4 text-xs font-semibold tracking-widest text-slate-600"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="relative rounded-3xl border border-white/80 bg-white/75 p-5 shadow-sm">
                      <Icon
                        aria-hidden="true"
                        strokeWidth={1.5}
                        className={`h-12 w-12 ${style.foreground}`}
                      />
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <p
                      className={`text-[11px] font-semibold uppercase tracking-[0.14em] ${style.foreground}`}
                    >
                      {style.category}
                    </p>

                    <h3 className="mt-3 text-2xl font-bold text-slate-900">
                      {service.title}
                    </h3>

                    <p className="mb-6 mt-4 text-sm leading-7 text-slate-600">
                      {service.shortDescription}
                    </p>

                    <Link
                      href={`/services/${service.slug}`}
                      aria-label={`Read about ${service.title}`}
                      className={`mt-auto flex items-center justify-between gap-3 rounded-lg border-t border-slate-100 pt-5 text-sm font-semibold text-teal-800 ${focusClass}`}
                    >
                      Service Information
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-teal-50 transition-colors group-hover:bg-teal-100">
                        <ArrowRight
                          aria-hidden="true"
                          className="h-4 w-4"
                        />
                      </span>
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact panel */}
      <section className="bg-white px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 rounded-3xl bg-[#073b46] p-8 sm:p-12 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-200">
              Consultation Information
            </p>

            <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
              Planning a Visit?
            </h2>

            <p className="mt-4 leading-7 text-teal-100">
              Contact the hospital about service availability,
              consultation timings, preparation instructions and fees.
            </p>
          </div>

          <Link
            href="/appointment"
            className={`inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-teal-950 hover:bg-teal-50 ${focusClass}`}
          >
            <CalendarDays aria-hidden="true" className="h-4 w-4" />
            Appointment Enquiry
          </Link>
        </div>

        <p className="mx-auto mt-6 max-w-3xl text-center text-xs leading-6 text-slate-600">
          In a medical emergency, seek immediate medical assistance.
          Do not wait for an online enquiry response.
        </p>
      </section>
    </main>
  );
}
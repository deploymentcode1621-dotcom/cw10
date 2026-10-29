import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  ClipboardList,
  Clock,
  MessageSquare,
  Phone,
  TriangleAlert,
} from "lucide-react";

import AppointmentForm from "@/components/ui/AppointmentForm";
import { SITE_CONFIG } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Appointment Enquiry | Ashwini Neuro Care",
  description:
    "Information about consultation enquiries, appointment arrangements and preparing for a visit to Ashwini Neuro Care, Latur.",
};

const steps = [
  {
    number: "01",
    title: "Share Your Preferences",
    description:
      "Provide your contact details, department preference and preferred consultation date.",
  },
  {
    number: "02",
    title: "Confirm Arrangements",
    description:
      "Confirm doctor availability, consultation timings and fees directly with the hospital.",
  },
  {
    number: "03",
    title: "Prepare for Your Visit",
    description:
      "Bring relevant reports and prescriptions, and follow any preparation instructions provided.",
  },
];

const preparationItems = [
  "Previous medical reports, if available",
  "Current and previous prescriptions",
  "A list of current medicines",
  "Questions you want to discuss",
  "Insurance documents, if applicable",
];

const focusClass =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-700";

export default function AppointmentPage() {
  return (
    <main className="overflow-hidden bg-slate-50 text-slate-900">
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-[#073b46]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(45,212,191,0.18),transparent_65%)]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 top-10 h-80 w-80 rounded-full border border-white/10"
        />

        <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-8 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-teal-100 sm:text-sm">
              <li>
                <Link
                  href="/"
                  className="rounded-sm hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  Home
                </Link>
              </li>

              <li aria-hidden="true">
                <ChevronRight className="h-3.5 w-3.5" />
              </li>

              <li aria-current="page" className="text-white">
                Appointment Enquiry
              </li>
            </ol>
          </nav>

          <div className="mt-12 grid items-center gap-10 lg:grid-cols-5 lg:gap-16">
            <div className="lg:col-span-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-medium text-teal-100">
                <CalendarDays
                  aria-hidden="true"
                  className="h-4 w-4"
                />
                Consultation Information
              </span>

              <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                Plan Your
                <span className="mt-2 block text-teal-200">
                  Consultation
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-8 text-teal-100 sm:text-lg">
                Find information about appointment enquiries and
                preparing for your visit. Confirm consultation
                arrangements directly with the hospital.
              </p>

              <Link
                href="/doctors"
                className="mt-7 inline-flex items-center gap-2 rounded-md text-sm font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                View Doctor Directory
                <ArrowRight
                  aria-hidden="true"
                  className="h-4 w-4"
                />
              </Link>
            </div>

            <div className="relative lg:col-span-2">
              <div
                aria-hidden="true"
                className="absolute -inset-3 rounded-[2rem] border border-white/10"
              />

              <div className="relative rounded-3xl border border-white/20 bg-white/10 p-7 backdrop-blur-sm">
                <div className="mb-5 inline-flex rounded-2xl bg-teal-200 p-4 text-teal-950">
                  <MessageSquare
                    aria-hidden="true"
                    className="h-7 w-7"
                  />
                </div>

                <h2 className="text-xl font-bold text-white">
                  An Enquiry Is Not a Confirmed Appointment
                </h2>

                <p className="mt-4 text-sm leading-7 text-teal-100">
                  Your preferred date, time and doctor are subject
                  to availability. Obtain confirmation from the
                  hospital before travelling.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl items-start gap-8 px-4 sm:px-6 lg:grid-cols-3 lg:gap-10 lg:px-8">
          {/* SIDEBAR */}
          <aside className="space-y-6">
            {/* Steps */}
            <section
              aria-labelledby="steps-heading"
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-800">
                Visit Planning
              </p>

              <h2
                id="steps-heading"
                className="mt-3 text-xl font-bold"
              >
                Your Next Steps
              </h2>

              <ol className="mt-6 space-y-6">
                {steps.map((step) => (
                  <li key={step.number} className="flex gap-4">
                    <span
                      aria-hidden="true"
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-xs font-bold text-teal-800"
                    >
                      {step.number}
                    </span>

                    <div>
                      <h3 className="text-sm font-semibold">
                        {step.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {step.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>

            {/* Emergency guidance */}
            <section
              aria-labelledby="emergency-heading"
              className="rounded-3xl border border-rose-200 bg-rose-50 p-6"
            >
              <TriangleAlert
                aria-hidden="true"
                className="mb-4 h-6 w-6 text-rose-800"
              />

              <h2
                id="emergency-heading"
                className="text-lg font-bold text-rose-950"
              >
                Medical Emergency?
              </h2>

              <p className="mt-3 text-sm leading-7 text-rose-900">
                Seek immediate medical assistance. Do not use this
                form or wait for an online response.
              </p>
            </section>

            {/* Consultation hours */}
            <section
              aria-labelledby="hours-heading"
              className="rounded-3xl border border-slate-200 bg-white p-6"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-teal-50 p-2.5">
                  <Clock
                    aria-hidden="true"
                    className="h-5 w-5 text-teal-800"
                  />
                </div>

                <h2
                  id="hours-heading"
                  className="text-lg font-bold"
                >
                  Consultation Timings
                </h2>
              </div>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                Confirm current OPD hours and individual doctor
                availability with the hospital.
              </p>

              {SITE_CONFIG.phone.primary && (
                <a
                  href={`tel:${SITE_CONFIG.phone.primary.replace(
                    /[^\d+]/g,
                    "",
                  )}`}
                  className={`mt-5 inline-flex items-center gap-2 rounded-md text-sm font-semibold text-teal-800 ${focusClass}`}
                >
                  <Phone
                    aria-hidden="true"
                    className="h-4 w-4"
                  />
                  {SITE_CONFIG.phone.primary}
                </a>
              )}
            </section>

            {/* Preparation */}
            <section
              aria-labelledby="preparation-heading"
              className="rounded-3xl border border-slate-200 bg-white p-6"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-blue-50 p-2.5">
                  <ClipboardList
                    aria-hidden="true"
                    className="h-5 w-5 text-blue-800"
                  />
                </div>

                <h2
                  id="preparation-heading"
                  className="text-lg font-bold"
                >
                  What to Bring
                </h2>
              </div>

              <ul className="mt-5 space-y-3">
                {preparationItems.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm leading-6 text-slate-600"
                  >
                    <CheckCircle2
                      aria-hidden="true"
                      className="mt-0.5 h-4 w-4 shrink-0 text-teal-800"
                    />
                    {item}
                  </li>
                ))}
              </ul>

              <p className="mt-5 border-t border-slate-100 pt-4 text-xs leading-6 text-slate-500">
                Ask the hospital whether identification or other
                documents are needed for your visit.
              </p>
            </section>
          </aside>

          {/* FORM */}
          <div className="min-w-0 lg:col-span-2">
            <section
              id="appointment-form"
              aria-labelledby="form-heading"
              className="scroll-mt-28 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_16px_48px_-30px_rgba(15,23,42,0.25)]"
            >
              <div className="border-b border-slate-100 bg-gradient-to-br from-teal-50 to-white p-6 sm:p-8">
                <div className="mb-5 inline-flex rounded-2xl border border-teal-100 bg-white p-3 text-teal-800">
                  <CalendarDays
                    aria-hidden="true"
                    className="h-7 w-7"
                  />
                </div>

                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-800">
                  Consultation Enquiry
                </p>

                <h2
                  id="form-heading"
                  className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl"
                >
                  Your Appointment Preferences
                </h2>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Preferred dates and times are requests, not
                  confirmed appointment slots.
                </p>
              </div>

              <div className="p-6 sm:p-8">
                <AppointmentForm />
              </div>
            </section>

            {/* Additional questions */}
            <div className="mt-6 flex flex-col items-start justify-between gap-4 rounded-2xl border border-teal-100 bg-teal-50 p-6 sm:flex-row sm:items-center">
              <div>
                <h3 className="text-sm font-semibold text-teal-950">
                  Have a General Enquiry?
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Contact the hospital about facilities, fees
                  or visit arrangements.
                </p>
              </div>

              <Link
                href="/contact#enquiry-form"
                className={`inline-flex shrink-0 items-center gap-2 rounded-md text-sm font-semibold text-teal-800 ${focusClass}`}
              >
                Contact Information
                <ArrowRight
                  aria-hidden="true"
                  className="h-4 w-4"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
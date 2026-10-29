import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  ChevronDown,
  ClipboardList,
  GraduationCap,
  MapPin,
  MessageSquare,
  Stethoscope,
  UserRound,
} from "lucide-react";

import { doctors } from "@/data/doctors";

export const metadata: Metadata = {
  title: "Doctor Directory | Ashwini Neuro Care",
  description:
    "Doctor profiles, qualifications, clinical specialties and consultation information at Ashwini Neuro Care, Latur.",
};

type DirectoryDoctor = (typeof doctors)[number] & {
  registrationNumber?: string;
  registrationCouncil?: string;
};

const visitSteps = [
  {
    icon: CalendarDays,
    title: "Confirm Your Visit",
    description:
      "Contact the hospital for doctor availability, consultation timings and current fees.",
    color: "bg-teal-50 text-teal-800",
  },
  {
    icon: ClipboardList,
    title: "Bring Your Records",
    description:
      "Bring relevant reports, prescriptions and a list of current medicines, if available.",
    color: "bg-blue-50 text-blue-800",
  },
  {
    icon: MessageSquare,
    title: "Discuss Your Questions",
    description:
      "Ask about proposed care, alternatives, potential benefits, risks and follow-up.",
    color: "bg-violet-50 text-violet-800",
  },
];

const questions = [
  {
    title: "How can I enquire about an appointment?",
    answer:
      "Use the appointment enquiry page or contact the hospital. Confirm the consultation date and time directly with the hospital. Submitting an enquiry does not confirm an appointment.",
  },
  {
    title: "What should I bring to my consultation?",
    answer:
      "Bring relevant medical reports, previous prescriptions and a list of medicines you currently take. Ask the hospital whether any additional documents are required.",
  },
  {
    title: "Where can I confirm fees and consultation timings?",
    answer:
      "Contact the hospital for the current consultation fee, doctor availability and timings before planning your visit.",
  },
  {
    title: "Should I use an online enquiry in an emergency?",
    answer:
      "Do not wait for an online response in an emergency. Seek immediate medical assistance.",
  },
];

const focusClass =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-700";

export default function DoctorsPage() {
  const directory: DirectoryDoctor[] = [...doctors].sort((a, b) => {
    const firstDoctorId = "dr-sudhir-fattepurkar";

    return (
      Number(b.id === firstDoctorId) -
      Number(a.id === firstDoctorId)
    );
  });

  return (
    <main className="overflow-hidden bg-white text-slate-900">
      {/* ORIGINAL PHOTO HERO */}
      <section className="relative isolate flex min-h-[660px] items-center overflow-hidden bg-slate-950 py-20 md:min-h-[740px]">
        <Image
          src="/images/doctors.jpeg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-black/55"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-[#032d35]/90"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-4 rounded-[2rem] border border-white/15 sm:inset-6"
        />

        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-5 py-2.5 text-xs font-medium text-white backdrop-blur-md sm:text-sm">
            <MapPin
              aria-hidden="true"
              className="h-4 w-4 text-teal-200"
            />
            Doctor Directory · Latur, Maharashtra
          </span>

          <h1 className="mx-auto mt-7 max-w-5xl text-4xl font-bold leading-[1.12] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Meet Our Doctors
            <span className="mt-3 block text-teal-200">
              Ashwini Neuro Care Center
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-slate-100 sm:text-lg">
            Information about our doctors, their qualifications and
            clinical specialties to help you plan your consultation.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
            <a
              href="#doctor-directory"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-teal-200 px-6 py-3.5 text-sm font-semibold text-teal-950 transition-colors hover:bg-teal-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              View Doctor Profiles
              <ArrowRight
                aria-hidden="true"
                className="h-4 w-4"
              />
            </a>

            <Link
              href="/appointment"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/35 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              <CalendarDays
                aria-hidden="true"
                className="h-4 w-4"
              />
              Appointment Enquiry
            </Link>
          </div>

          {/* Informational panels instead of promotional statistics */}
          <div className="mx-auto mt-12 grid max-w-3xl gap-3 sm:grid-cols-3">
            {[
              {
                icon: Stethoscope,
                title: "Doctor Profiles",
                text: "Qualifications & specialties",
              },
              {
                icon: ClipboardList,
                title: "Visit Preparation",
                text: "Reports & consultation information",
              },
              {
                icon: MessageSquare,
                title: "Contact Information",
                text: "Timings & appointment enquiries",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/20 bg-white/10 px-4 py-5 backdrop-blur-md"
              >
                <item.icon
                  aria-hidden="true"
                  className="mx-auto mb-3 h-5 w-5 text-teal-200"
                />

                <p className="text-sm font-semibold text-white">
                  {item.title}
                </p>

                <p className="mt-2 text-xs leading-5 text-slate-200">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOCTOR CARDS — SCREENSHOT STYLE */}
      <section
        id="doctor-directory"
        aria-labelledby="directory-heading"
        className="scroll-mt-28 bg-slate-50 py-16 sm:py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-800">
                Our Doctors
              </p>

              <h2
                id="directory-heading"
                className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl"
              >
                Profiles &amp; Qualifications
              </h2>

              <div
                aria-hidden="true"
                className="mt-5 h-1 w-14 rounded-full bg-teal-600"
              />
            </div>

            <Link
              href="/services"
              className={`inline-flex items-center gap-2 rounded-md text-sm font-semibold text-teal-800 ${focusClass}`}
            >
              Departments &amp; Services
              <ArrowRight
                aria-hidden="true"
                className="h-4 w-4"
              />
            </Link>
          </div>

          <div className="space-y-10 sm:space-y-12">
            {directory.map((doctor, index) => (
              <article
                key={doctor.id}
                id={doctor.id}
                className="scroll-mt-28 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm"
              >
                <div className="grid lg:grid-cols-5">
                  {/* Natural-size photo panel */}
                  <div
                    className={`bg-gradient-to-br from-teal-50 to-slate-100 p-6 sm:p-7 lg:col-span-2 ${
                      index % 2 === 1 ? "lg:order-2" : ""
                    }`}
                  >
                    <div className="overflow-hidden rounded-2xl border border-white/80 bg-white">
                      {doctor.image ? (
                        <Image
                          src={doctor.image}
                          alt={`Portrait of ${doctor.name}`}
                          width={700}
                          height={500}
                          sizes="(max-width: 1023px) 100vw, 40vw"
                          className="h-auto max-h-[460px] w-full object-contain"
                        />
                      ) : (
                        <div className="flex aspect-[3/2] items-center justify-center bg-slate-100">
                          <UserRound
                            aria-hidden="true"
                            className="h-20 w-20 text-slate-400"
                          />
                        </div>
                      )}
                    </div>

                    <p className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-teal-800">
                      {doctor.specialization}
                    </p>

                    <p className="mt-2 text-sm text-slate-600">
                      Ashwini Neuro Care · Latur
                    </p>
                  </div>

                  {/* Profile information */}
                  <div className="flex flex-col p-6 sm:p-8 lg:col-span-3 lg:p-10">
                    <div className="flex items-center gap-3">
                      <span
                        aria-hidden="true"
                        className="h-px w-8 bg-teal-600"
                      />

                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-800">
                        Doctor Profile
                      </p>
                    </div>

                    <h3 className="mt-5 break-words text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl xl:text-4xl">
                      {doctor.name}
                    </h3>

                    {doctor.designation && (
                      <p className="mt-3 text-base font-medium text-teal-800 sm:text-lg">
                        {doctor.designation}
                      </p>
                    )}

                    <dl className="mt-7 grid gap-4 sm:grid-cols-2">
                      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:col-span-2">
                        <dt className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-slate-500">
                          <GraduationCap
                            aria-hidden="true"
                            className="h-4 w-4 text-teal-800"
                          />
                          Qualifications
                        </dt>

                        <dd className="mt-3 font-semibold leading-7 text-slate-800">
                          {doctor.qualification}
                        </dd>
                      </div>

                      {doctor.registrationNumber && (
                        <div className="rounded-2xl border border-slate-200 p-5">
                          <dt className="text-xs font-medium uppercase tracking-wider text-slate-500">
                            Registration Number
                          </dt>

                          <dd className="mt-3 break-words text-sm font-semibold text-slate-800">
                            {doctor.registrationNumber}
                          </dd>
                        </div>
                      )}

                      {doctor.registrationCouncil && (
                        <div className="rounded-2xl border border-slate-200 p-5">
                          <dt className="text-xs font-medium uppercase tracking-wider text-slate-500">
                            Medical Council
                          </dt>

                          <dd className="mt-3 text-sm font-semibold leading-6 text-slate-800">
                            {doctor.registrationCouncil}
                          </dd>
                        </div>
                      )}
                    </dl>

                    {doctor.bio && (
                      <div className="mt-7">
                        <h4 className="text-sm font-semibold text-slate-900">
                          Clinical Profile
                        </h4>

                        <p className="mt-3 text-sm leading-8 text-slate-600 sm:text-base">
                          {doctor.bio}
                        </p>
                      </div>
                    )}

                    <div className="mt-auto pt-8">
                      <div className="mb-6 flex items-start gap-3 border-t border-slate-100 pt-5">
                        <CalendarDays
                          aria-hidden="true"
                          className="mt-1 h-4 w-4 shrink-0 text-teal-800"
                        />

                        <p className="text-sm leading-7 text-slate-600">
                          Contact the hospital to confirm consultation
                          timings and appointment availability.
                        </p>
                      </div>

                      <Link
                        href="/appointment"
                        aria-label={`Appointment enquiry for ${doctor.name}`}
                        className={`inline-flex w-full items-center justify-center gap-2 rounded-xl bg-teal-700 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-teal-800 sm:w-auto ${focusClass}`}
                      >
                        <CalendarDays
                          aria-hidden="true"
                          className="h-4 w-4"
                        />
                        Appointment Enquiry
                        <ArrowRight
                          aria-hidden="true"
                          className="h-4 w-4"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONSULTATION TIMELINE */}
      <section
        aria-labelledby="visit-heading"
        className="bg-white py-16 sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-800">
              Before Your Visit
            </p>

            <h2
              id="visit-heading"
              className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl"
            >
              Preparing for Your Consultation
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Practical information for a planned hospital visit.
            </p>
          </div>

          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute left-[16%] right-[16%] top-9 hidden border-t border-dashed border-teal-200 md:block"
            />

            <ol className="relative grid gap-8 md:grid-cols-3">
              {visitSteps.map((step, index) => (
                <li key={step.title} className="text-center">
                  <div
                    className={`relative mx-auto flex h-[72px] w-[72px] items-center justify-center rounded-2xl ring-8 ring-white ${step.color}`}
                  >
                    <step.icon
                      aria-hidden="true"
                      className="h-7 w-7"
                    />

                    <span
                      aria-hidden="true"
                      className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-[#073b46] text-[10px] font-bold text-white"
                    >
                      {index + 1}
                    </span>
                  </div>

                  <div className="mt-7 rounded-2xl border border-slate-200 p-6">
                    <h3 className="text-lg font-bold">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* QUESTIONS */}
      <section
        aria-labelledby="questions-heading"
        className="border-y border-slate-200 bg-slate-50 py-16 sm:py-20"
      >
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-5 lg:gap-16 lg:px-8">
          <div className="lg:col-span-2">
            <div className="mb-5 inline-flex rounded-2xl bg-teal-100 p-4 text-teal-800">
              <MessageSquare
                aria-hidden="true"
                className="h-7 w-7"
              />
            </div>

            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-800">
              Visit Information
            </p>

            <h2
              id="questions-heading"
              className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl"
            >
              Common Questions
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              For individual consultation arrangements or additional
              information, contact the hospital.
            </p>

            <Link
              href="/contact"
              className={`mt-6 inline-flex items-center gap-2 rounded-md text-sm font-semibold text-teal-800 ${focusClass}`}
            >
              Contact Information
              <ArrowRight
                aria-hidden="true"
                className="h-4 w-4"
              />
            </Link>
          </div>

          <div className="space-y-4 lg:col-span-3">
            {questions.map((question) => (
              <details
                key={question.title}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white open:border-teal-200"
              >
                <summary
                  className={`flex cursor-pointer list-none items-center justify-between gap-5 px-6 py-5 text-sm font-semibold leading-6 [&::-webkit-details-marker]:hidden ${focusClass}`}
                >
                  {question.title}

                  <ChevronDown
                    aria-hidden="true"
                    className="h-5 w-5 shrink-0 text-teal-800 transition-transform group-open:rotate-180 motion-reduce:transition-none"
                  />
                </summary>

                <p className="border-t border-slate-100 px-6 py-5 text-sm leading-7 text-slate-600">
                  {question.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT PANEL */}
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#073b46] p-8 sm:p-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full border-[35px] border-white/5"
          />

          <div className="relative flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-200">
                Consultation Enquiries
              </p>

              <h2 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Plan Your Hospital Visit
              </h2>

              <p className="mt-4 leading-7 text-teal-100">
                Contact the hospital for doctor availability,
                consultation timings, location details and current fees.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-teal-950 transition-colors hover:bg-teal-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Contact the Hospital
              <ArrowRight
                aria-hidden="true"
                className="h-4 w-4"
              />
            </Link>
          </div>
        </div>

        <p className="mx-auto mt-7 max-w-3xl text-center text-xs leading-6 text-slate-600">
          Website information does not replace an individual medical
          consultation. In an emergency, seek immediate medical
          assistance rather than waiting for an online response.
        </p>
      </section>
    </main>
  );
}
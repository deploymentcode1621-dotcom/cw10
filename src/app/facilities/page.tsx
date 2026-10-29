import type { Metadata } from "next";
import type { LucideIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  BedDouble,
  Building2,
  CalendarDays,
  ChevronDown,
  ClipboardList,
  HeartPulse,
  MapPin,
  MessageSquare,
  Scan,
  ScanLine,
  Stethoscope,
} from "lucide-react";

import { facilities } from "@/data/facilities";

export const metadata: Metadata = {
  title: "Facilities | Ashwini Neuro Care",
  description:
    "Hospital facility information and enquiries about availability, preparation requirements and visit arrangements at Ashwini Neuro Care, Latur.",
};

/*
 * Add a facility here only after the hospital approves its details.
 * Use actual hospital photographs, with no identifiable patients.
 *
 * Key: the exact facility.id from data/facilities.ts
 *
 * Example structure:
 * "actual-facility-id": {
 *   image: "/images/facilities/actual-photo.jpg",
 *   imageAlt: "Accurate description of the hospital facility",
 *   description: "Hospital-approved factual description.",
 *   details: ["Verified detail"],
 * }
 */
const verifiedContent: Record<
  string,
  {
    image?: string;
    imageAlt?: string;
    description: string;
    details: string[];
  }
> = {};

const visualStyles = [
  {
    icon: BedDouble,
    background: "from-teal-50 to-emerald-100",
    foreground: "text-teal-800",
  },
  {
    icon: Stethoscope,
    background: "from-blue-50 to-sky-100",
    foreground: "text-blue-800",
  },
  {
    icon: ScanLine,
    background: "from-violet-50 to-purple-100",
    foreground: "text-violet-800",
  },
  {
    icon: Scan,
    background: "from-indigo-50 to-blue-100",
    foreground: "text-indigo-800",
  },
  {
    icon: HeartPulse,
    background: "from-rose-50 to-orange-100",
    foreground: "text-rose-800",
  },
  {
    icon: Activity,
    background: "from-amber-50 to-orange-100",
    foreground: "text-amber-800",
  },
];

function getFacilityIcon(name: string): LucideIcon {
  const value = name.toLowerCase();

  if (value.includes("mri")) return ScanLine;
  if (value.includes("ct")) return Scan;
  if (value.includes("icu")) return BedDouble;
  if (value.includes("theatre") || value.includes("operation")) {
    return Stethoscope;
  }
  if (value.includes("emergency") || value.includes("trauma")) {
    return HeartPulse;
  }
  if (value.includes("rehabilitation")) return Activity;

  return Building2;
}

// Remove unverified scanner specifications from display titles.
function displayName(name: string) {
  if (/\bmri\b/i.test(name)) return "MRI Imaging";
  if (/\bct\b/i.test(name)) return "CT Imaging";

  return name;
}

const visitGuide = [
  {
    icon: CalendarDays,
    title: "Confirm Availability",
    description:
      "Ask whether the facility or investigation you need is available and whether an appointment is required.",
  },
  {
    icon: ClipboardList,
    title: "Check Preparation",
    description:
      "Ask about referral documents, preparation instructions, relevant medical records and applicable charges.",
  },
  {
    icon: MessageSquare,
    title: "Discuss Your Requirements",
    description:
      "Tell the hospital about access or assistance needs when arranging your visit.",
  },
];

const faqs = [
  {
    question: "How can I confirm a facility is available?",
    answer:
      "Contact the hospital before a planned visit. Ask about current availability, operating hours and whether a booking or referral is required.",
  },
  {
    question: "Where can I confirm investigation charges?",
    answer:
      "Ask the hospital for current charges and what they include. Any additional requirements should be discussed before the investigation.",
  },
  {
    question: "Do I need to prepare before an investigation?",
    answer:
      "Preparation depends on the investigation and your clinical circumstances. Obtain instructions from the hospital or treating clinician.",
  },
  {
    question: "Can I wait for an online reply in an emergency?",
    answer:
      "Do not wait for an online response in an emergency. Seek immediate medical assistance.",
  },
];

const focusClass =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-700";

export default function FacilitiesPage() {
  return (
    <main className="overflow-hidden bg-white text-slate-900">
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-[#073b46]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(45,212,191,0.2),transparent_65%)]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-24 bottom-0 h-96 w-96 rounded-full border border-white/10"
        />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pb-24 pt-16 sm:px-6 sm:pt-20 lg:grid-cols-5 lg:gap-16 lg:px-8">
          <div className="lg:col-span-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-medium text-teal-100">
              <MapPin aria-hidden="true" className="h-4 w-4" />
              Ashwini Neuro Care · Latur
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Our Facilities
              <span className="mt-3 block text-teal-200">
                Information for Your Visit
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-teal-100 sm:text-lg">
              Browse facility information and contact the hospital
              about availability, preparation requirements and
              arrangements for your visit.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#facility-directory"
                className="inline-flex items-center gap-2 rounded-xl bg-teal-200 px-6 py-3.5 text-sm font-semibold text-teal-950 hover:bg-teal-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Browse Facilities
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Contact Information
              </Link>
            </div>
          </div>

          {/* Decorative facility illustration */}
          <div
            aria-hidden="true"
            className="relative mx-auto w-full max-w-sm lg:col-span-2"
          >
            <div className="absolute -inset-4 rounded-[2.5rem] border border-white/10" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/20 bg-white/5 p-7 backdrop-blur-sm">
              <div className="flex aspect-square items-center justify-center rounded-3xl bg-gradient-to-br from-teal-50 to-teal-200">
                <div className="flex h-36 w-36 items-center justify-center rounded-[2rem] border border-white bg-white/85 shadow-lg">
                  <Building2
                    strokeWidth={1.2}
                    className="h-24 w-24 text-teal-900"
                  />
                </div>
              </div>

              <div className="mt-5 grid grid-cols-3 gap-3">
                {[Stethoscope, ScanLine, HeartPulse].map((Icon, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-center rounded-xl border border-white/15 bg-white/5 py-4"
                  >
                    <Icon className="h-6 w-6 text-teal-200" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <svg
          aria-hidden="true"
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
          className="absolute bottom-0 h-10 w-full"
        >
          <path
            d="M0 25C280 65 480 0 730 25C990 55 1190 5 1440 25V60H0Z"
            fill="#f8fafc"
          />
        </svg>
      </section>

      {/* FACILITY DIRECTORY */}
      <section
        id="facility-directory"
        aria-labelledby="facilities-heading"
        className="scroll-mt-28 bg-slate-50 py-16 sm:py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-5">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-800">
                Facility Directory
              </p>

              <h2
                id="facilities-heading"
                className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl"
              >
                Hospital Facilities
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                Contact the hospital for current facility details,
                operating hours and access arrangements.
              </p>
            </div>

            <Link
              href="/services"
              className={`inline-flex items-center gap-2 rounded-md text-sm font-semibold text-teal-800 ${focusClass}`}
            >
              Clinical Services
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {facilities.map((facility, index) => {
              const style = visualStyles[index % visualStyles.length];
              const Icon = getFacilityIcon(facility.name);
              const approved = verifiedContent[facility.id];
              const name = displayName(facility.name);

              return (
                <article
                  key={facility.id}
                  className="group flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-lg"
                >
                  {approved?.image && approved.imageAlt ? (
                    <Image
                      src={approved.image}
                      alt={approved.imageAlt}
                      width={700}
                      height={450}
                      sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
                      className="aspect-[16/10] w-full object-cover"
                    />
                  ) : (
                    <div
                      className={`relative flex h-48 items-center justify-center overflow-hidden bg-gradient-to-br ${style.background}`}
                    >
                      <span
                        aria-hidden="true"
                        className="absolute left-5 top-4 text-xs font-semibold tracking-widest text-slate-600"
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <div
                        aria-hidden="true"
                        className="absolute -right-8 -top-8 h-40 w-40 rounded-full border-[20px] border-white/50"
                      />

                      <div className="relative rounded-3xl border border-white bg-white/80 p-5 shadow-sm">
                        <Icon
                          aria-hidden="true"
                          strokeWidth={1.4}
                          className={`h-12 w-12 ${style.foreground}`}
                        />
                      </div>
                    </div>
                  )}

                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-teal-800">
                      Facility Information
                    </p>

                    <h3 className="mt-3 text-xl font-bold text-slate-900">
                      {name}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-slate-600">
                      {approved?.description ??
                        "Contact the hospital for information about this facility, availability and visit requirements."}
                    </p>

                    {approved && approved.details.length > 0 && (
                      <ul className="mt-5 space-y-3">
                        {approved.details.map((detail) => (
                          <li
                            key={detail}
                            className="flex items-start gap-3 text-sm leading-6 text-slate-700"
                          >
                            <span
                              aria-hidden="true"
                              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600"
                            />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    )}

                    <Link
                      href={`/contact?facility=${encodeURIComponent(name)}#enquiry-form`}
                      aria-label={`Enquire about ${name}`}
                      className={`mt-auto flex items-center justify-between gap-3 rounded-md pt-7 text-sm font-semibold text-teal-800 ${focusClass}`}
                    >
                      Enquire About This Facility
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-teal-50 group-hover:bg-teal-100">
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

      {/* VISIT GUIDE */}
      <section
        aria-labelledby="visit-heading"
        className="bg-white py-16 sm:py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-800">
              Planning Your Visit
            </p>

            <h2
              id="visit-heading"
              className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl"
            >
              Information Before You Arrive
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {visitGuide.map((item, index) => (
              <article
                key={item.title}
                className="relative overflow-hidden rounded-3xl border border-slate-200 p-7"
              >
                <span
                  aria-hidden="true"
                  className="absolute right-6 top-5 text-5xl font-bold text-slate-100"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="relative mb-6 inline-flex rounded-2xl bg-teal-50 p-4 text-teal-800">
                  <item.icon
                    aria-hidden="true"
                    className="h-6 w-6"
                  />
                </div>

                <h3 className="relative text-lg font-bold">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section
        aria-labelledby="faq-heading"
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
              Facility Enquiries
            </p>

            <h2
              id="faq-heading"
              className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl"
            >
              Common Questions
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              Confirm individual requirements with the hospital or
              your treating clinician.
            </p>
          </div>

          <div className="space-y-4 lg:col-span-3">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white open:border-teal-200"
              >
                <summary
                  className={`flex cursor-pointer list-none items-center justify-between gap-5 px-6 py-5 text-sm font-semibold leading-6 [&::-webkit-details-marker]:hidden ${focusClass}`}
                >
                  {faq.question}

                  <ChevronDown
                    aria-hidden="true"
                    className="h-5 w-5 shrink-0 text-teal-800 transition-transform group-open:rotate-180 motion-reduce:transition-none"
                  />
                </summary>

                <p className="border-t border-slate-100 px-6 py-5 text-sm leading-7 text-slate-600">
                  {faq.answer}
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
                Contact the Hospital
              </p>

              <h2 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Facility &amp; Visit Enquiries
              </h2>

              <p className="mt-4 leading-7 text-teal-100">
                Ask about facility availability, investigation
                arrangements, preparation instructions and current fees.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-teal-950 hover:bg-teal-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Contact Details
              <ArrowRight
                aria-hidden="true"
                className="h-4 w-4"
              />
            </Link>
          </div>
        </div>

        <p className="mx-auto mt-7 max-w-3xl text-center text-xs leading-6 text-slate-600">
          Website information does not replace individual medical
          advice. In an emergency, seek immediate medical assistance
          rather than waiting for an online response.
        </p>
      </section>
    </main>
  );
}
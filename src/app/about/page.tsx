import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Brain,
  CalendarDays,
  CheckCircle2,
  ClipboardList,
  Eye,
  Heart,
  MapPin,
  MessageSquare,
  ShieldCheck,
  Stethoscope,
  Target,
  Users,
} from "lucide-react";

/*
 * Add hospital-approved historical milestones here.
 * Only add events supported by hospital records.
 *
 * Example structure:
 * { year: "CONFIRMED YEAR", title: "Confirmed event", description: "..." }
 */
const verifiedMilestones: {
  year: string;
  title: string;
  description: string;
}[] = [];

const careSteps = [
  {
    label: "01",
    title: "Consultation",
    description:
      "Discuss symptoms, medical history and questions with the treating doctor.",
    icon: Stethoscope,
  },
  {
    label: "02",
    title: "Clinical Assessment",
    description:
      "The doctor considers examination findings and investigations when clinically indicated.",
    icon: ClipboardList,
  },
  {
    label: "03",
    title: "Discussion & Decisions",
    description:
      "Ask about proposed care, alternatives, potential benefits, risks and applicable charges.",
    icon: MessageSquare,
  },
  {
    label: "04",
    title: "Follow-up & Referral",
    description:
      "Discuss follow-up needs and referral arrangements where further care is required.",
    icon: Users,
  },
];

const values = [
  {
    icon: Heart,
    title: "Respect & Dignity",
    description:
      "An approach that recognises individual needs, preferences and personal circumstances.",
    iconClass: "bg-rose-50 text-rose-700",
    accentClass: "bg-rose-400",
  },
  {
    icon: ShieldCheck,
    title: "Patient Safety",
    description:
      "Attention to clinical assessment, informed consent and review of care practices.",
    iconClass: "bg-teal-50 text-teal-800",
    accentClass: "bg-teal-500",
  },
  {
    icon: MessageSquare,
    title: "Clear Communication",
    description:
      "Understandable information to help patients ask questions and consider care options.",
    iconClass: "bg-blue-50 text-blue-800",
    accentClass: "bg-blue-400",
  },
  {
    icon: Users,
    title: "Patient Participation",
    description:
      "Support for involvement in care decisions, with family participation where authorised.",
    iconClass: "bg-amber-50 text-amber-800",
    accentClass: "bg-amber-400",
  },
];

const informationLinks = [
  {
    icon: Brain,
    title: "Clinical Services",
    text: "Departments and service information",
    href: "/services",
  },
  {
    icon: Stethoscope,
    title: "Our Doctors",
    text: "Qualifications and clinical specialties",
    href: "/doctors",
  },
  {
    icon: CalendarDays,
    title: "Consultation",
    text: "Appointment enquiries and timings",
    href: "/appointment",
  },
  {
    icon: MapPin,
    title: "Find the Hospital",
    text: "Location and contact information",
    href: "/contact",
  },
];

const focusClass =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-600";

export default function AboutPage() {
  const hasHistory = verifiedMilestones.length > 0;

  const timeline = hasHistory
    ? verifiedMilestones.map((milestone) => ({
        label: milestone.year,
        title: milestone.title,
        description: milestone.description,
        icon: CalendarDays,
      }))
    : careSteps;

  return (
    <main className="overflow-hidden bg-white text-slate-900">
      {/* Hero */}
      <section className="relative isolate bg-[#073b46]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(45,212,191,0.18),transparent_60%)]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-24 top-20 h-80 w-80 rounded-full border border-white/10"
        />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pb-24 pt-16 sm:px-6 sm:pt-20 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:pb-32">
          <div>
            <p className="mb-7 inline-flex items-center gap-2 rounded-full border border-teal-200/25 bg-white/5 px-4 py-2 text-sm text-teal-100">
              <MapPin aria-hidden="true" className="h-4 w-4" />
              Latur, Maharashtra
            </p>

            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-teal-200">
              About the Hospital
            </p>

            <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Ashwini
              <span className="mt-1 block text-teal-200">
                Neuro Care
              </span>
            </h1>

            <p className="mt-7 max-w-lg text-base leading-8 text-slate-200 sm:text-lg">
              Information about our doctors, clinical services and
              consultation arrangements for patients and families.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/doctors"
                className={`inline-flex items-center gap-2 rounded-xl bg-teal-200 px-6 py-3.5 text-sm font-semibold text-teal-950 transition-colors hover:bg-teal-100 ${focusClass}`}
              >
                Meet Our Doctors
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Link>

              <Link
                href="/contact"
                className={`inline-flex items-center gap-2 rounded-xl border border-white/30 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10 ${focusClass}`}
              >
                Contact Information
              </Link>
            </div>
          </div>

          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -inset-3 rounded-[2.5rem] border border-teal-100/15 sm:-inset-5"
            />

            <figure className="relative overflow-hidden rounded-[2rem] border border-white/20 bg-white">
              <Image
                src="https://images.unsplash.com/photo-1559757175-5700dde675bc?w=900&h=760&fit=crop"
                alt="An anatomical model of the human brain"
                width={900}
                height={760}
                priority
                sizes="(max-width: 1023px) 100vw, 50vw"
                className="aspect-[5/4] w-full object-cover"
              />

              <figcaption className="flex items-start gap-3 bg-white p-5">
                <div className="rounded-xl bg-teal-50 p-2.5 text-teal-800">
                  <Brain aria-hidden="true" className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Understanding the Nervous System
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-slate-600">
                    Illustrative anatomical model; not hospital
                    equipment or a clinical result.
                  </p>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>

        <svg
          aria-hidden="true"
          viewBox="0 0 1440 70"
          preserveAspectRatio="none"
          className="absolute bottom-0 h-12 w-full sm:h-16"
        >
          <path
            d="M0 35C280 90 480 0 730 30C990 65 1190 5 1440 30V70H0Z"
            fill="#ffffff"
          />
        </svg>
      </section>

      {/* Useful links */}
      <section
        aria-label="Hospital information links"
        className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8"
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {informationLinks.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className={`group flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-colors hover:border-teal-300 hover:bg-teal-50/40 ${focusClass}`}
            >
              <div className="rounded-xl bg-teal-50 p-3 text-teal-800">
                <item.icon aria-hidden="true" className="h-5 w-5" />
              </div>

              <div>
                <h2 className="text-sm font-bold text-slate-900">
                  {item.title}
                </h2>
                <p className="mt-1 text-xs leading-5 text-slate-600">
                  {item.text}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Introduction */}
      <section
        aria-labelledby="introduction-heading"
        className="py-12 sm:py-20"
      >
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-teal-800">
              Patients &amp; Families
            </p>

            <h2
              id="introduction-heading"
              className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl"
            >
              Clear Information.
              <span className="mt-2 block text-teal-800">
                Informed Decisions.
              </span>
            </h2>

            <div className="mt-6 h-1 w-16 rounded-full bg-teal-500" />
          </div>

          <div>
            <p className="leading-8 text-slate-600">
              Ashwini Neuro Care is located in Latur, Maharashtra.
              This website brings together information about the
              hospital&apos;s doctors, listed services, facilities
              and contact details.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              Medical care depends on individual clinical assessment.
              Patients can discuss symptoms, ask questions about
              proposed investigations and treatment, and clarify
              follow-up needs with the treating doctor.
            </p>

            <div className="mt-6 flex items-start gap-3 rounded-2xl border border-teal-100 bg-teal-50 p-5">
              <CheckCircle2
                aria-hidden="true"
                className="mt-1 h-5 w-5 shrink-0 text-teal-800"
              />
              <p className="text-sm leading-7 text-teal-950">
                Please confirm doctor availability, service timings
                and current fees with the hospital before your visit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section
        aria-labelledby="values-heading"
        className="bg-slate-50 py-16 sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-teal-800">
              Our Values
            </p>

            <h2
              id="values-heading"
              className="text-3xl font-bold tracking-tight sm:text-4xl"
            >
              Principles Behind Our Approach
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              The aims that guide our approach to patient care
              and communication.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <article
                key={value.title}
                className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
              >
                <div
                  aria-hidden="true"
                  className={`absolute inset-x-0 top-0 h-1 ${value.accentClass}`}
                />

                <div
                  className={`mb-6 inline-flex rounded-2xl p-3.5 ${value.iconClass}`}
                >
                  <value.icon
                    aria-hidden="true"
                    className="h-6 w-6"
                  />
                </div>

                <h3 className="text-lg font-bold">{value.title}</h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Alternating timeline */}
      <section
        aria-labelledby="timeline-heading"
        className="relative bg-[#073b46] py-16 sm:py-24"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-teal-200">
              {hasHistory ? "Our Journey" : "Understanding Care"}
            </p>

            <h2
              id="timeline-heading"
              className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
            >
              {hasHistory
                ? "Milestones Along the Way"
                : "From Consultation to Follow-up"}
            </h2>

            <p className="mt-4 leading-7 text-teal-100">
              {hasHistory
                ? "Key events in the hospital’s history."
                : "A general guide to discussions during routine care. Individual needs and emergency care may differ."}
            </p>
          </div>

          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute bottom-0 left-5 top-0 w-px bg-teal-200/25 md:left-1/2"
            />

            <ol className="space-y-8 md:space-y-10">
              {timeline.map((item, index) => (
                <li
                  key={`${item.label}-${item.title}`}
                  className="relative pl-14 md:grid md:grid-cols-2 md:gap-16 md:pl-0"
                >
                  <div
                    aria-hidden="true"
                    className="absolute left-5 top-8 z-10 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-[#073b46] bg-teal-200 ring-4 ring-teal-200/15 md:left-1/2"
                  />

                  <article
                    className={`relative overflow-hidden rounded-2xl border border-white/15 bg-white/[0.06] p-6 sm:p-8 ${
                      index % 2 === 1
                        ? "md:col-start-2"
                        : "md:col-start-1"
                    }`}
                  >
                    <div className="mb-5 flex items-center justify-between gap-4">
                      <div className="rounded-xl bg-teal-200/10 p-3 text-teal-200">
                        <item.icon
                          aria-hidden="true"
                          className="h-6 w-6"
                        />
                      </div>

                      <span className="text-3xl font-bold tracking-tight text-teal-200">
                        {item.label}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-200">
                      {item.description}
                    </p>
                  </article>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Mission and vision */}
      <section
        aria-labelledby="purpose-heading"
        className="bg-white py-16 sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-teal-800">
              Our Purpose
            </p>

            <h2
              id="purpose-heading"
              className="text-3xl font-bold tracking-tight sm:text-4xl"
            >
              Vision &amp; Mission
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <article className="relative overflow-hidden rounded-3xl border border-teal-100 bg-gradient-to-br from-teal-50 to-emerald-100/70 p-8 sm:p-10">
              <Target
                aria-hidden="true"
                className="mb-6 h-9 w-9 text-teal-800"
              />

              <h3 className="text-2xl font-bold text-teal-950">
                Our Mission
              </h3>

              <p className="mt-5 leading-8 text-slate-700">
                To support patient care through clinical assessment,
                clear communication and respect for individual needs.
                We aim to explain care options, support informed
                decisions and coordinate follow-up or referral
                when required.
              </p>
            </article>

            <article className="relative overflow-hidden rounded-3xl border border-amber-100 bg-gradient-to-br from-amber-50 to-orange-100/60 p-8 sm:p-10">
              <Eye
                aria-hidden="true"
                className="mb-6 h-9 w-9 text-amber-800"
              />

              <h3 className="text-2xl font-bold text-amber-950">
                Our Vision
              </h3>

              <p className="mt-5 leading-8 text-slate-700">
                To respond to the healthcare needs of the community
                through ethical medical practice, attention to patient
                safety and responsible development of services.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Contact panel */}
      <section className="px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 rounded-3xl bg-[#073b46] p-8 sm:p-12 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-teal-200">
              Plan Your Visit
            </p>

            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Consultation &amp; Contact Details
            </h2>

            <p className="mt-4 leading-7 text-teal-100">
              Contact the hospital for current consultation timings,
              service availability and appointment arrangements.
            </p>
          </div>

          <Link
            href="/contact"
            className={`inline-flex shrink-0 items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-teal-950 transition-colors hover:bg-teal-50 ${focusClass}`}
          >
            Contact the Hospital
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </div>

        <p className="mx-auto mt-6 max-w-3xl text-center text-xs leading-6 text-slate-600">
          Website information does not replace an individual medical
          consultation. In a medical emergency, seek immediate
          assistance rather than waiting for an online response.
        </p>
      </section>
    </main>
  );
}
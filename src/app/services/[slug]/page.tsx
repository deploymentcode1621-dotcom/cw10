import type { Metadata } from "next";
import type { LucideIcon } from "lucide-react";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  Activity,
  Ambulance,
  ArrowLeft,
  ArrowRight,
  Brain,
  CalendarDays,
  ChevronRight,
  CircleAlert,
  ClipboardList,
  HeartPulse,
  MessageSquare,
  Scan,
  ScanLine,
  Stethoscope,
} from "lucide-react";

import { services } from "@/data/services";

type Props = {
  params: Promise<{ slug: string }>;
};

type ServiceVisual = {
  icon: LucideIcon;
  category: string;
  gradient: string;
  iconClass: string;
};

const serviceVisuals: Record<string, ServiceVisual> = {
  neurology: {
    icon: Brain,
    category: "Clinical Department",
    gradient: "from-teal-50 via-white to-emerald-100",
    iconClass: "text-teal-800",
  },
  neurosurgery: {
    icon: Stethoscope,
    category: "Clinical Department",
    gradient: "from-blue-50 via-white to-sky-100",
    iconClass: "text-blue-800",
  },
  "spine-surgery": {
    icon: Activity,
    category: "Clinical Department",
    gradient: "from-violet-50 via-white to-purple-100",
    iconClass: "text-violet-800",
  },
  "trauma-care": {
    icon: Ambulance,
    category: "Injury Care",
    gradient: "from-orange-50 via-white to-amber-100",
    iconClass: "text-orange-800",
  },
  "emergency-care": {
    icon: CircleAlert,
    category: "Emergency Service",
    gradient: "from-rose-50 via-white to-red-100",
    iconClass: "text-rose-800",
  },
  "icu-care": {
    icon: HeartPulse,
    category: "Intensive Care",
    gradient: "from-cyan-50 via-white to-teal-100",
    iconClass: "text-cyan-800",
  },
  "ct-scan": {
    icon: Scan,
    category: "Diagnostic Imaging",
    gradient: "from-indigo-50 via-white to-blue-100",
    iconClass: "text-indigo-800",
  },
  "mri-scan": {
    icon: ScanLine,
    category: "Diagnostic Imaging",
    gradient: "from-fuchsia-50 via-white to-purple-100",
    iconClass: "text-fuchsia-800",
  },
};

const consultationQuestions = [
  "Why is this investigation or treatment being proposed?",
  "What alternatives may be appropriate?",
  "What are the potential benefits and risks?",
  "What preparation and follow-up may be required?",
  "What charges apply to the proposed care?",
];

const visitInformation = [
  {
    icon: CalendarDays,
    title: "Confirm Availability",
    description:
      "Check service availability and consultation timings with the hospital.",
  },
  {
    icon: ClipboardList,
    title: "Bring Relevant Records",
    description:
      "Bring previous reports, prescriptions and a list of current medicines, if available.",
  },
  {
    icon: MessageSquare,
    title: "Discuss Your Questions",
    description:
      "Ask about proposed care, preparation, alternatives and follow-up requirements.",
  },
];

const focusClass =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-700";

const lightFocusClass =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white";

function getVisual(slug: string): ServiceVisual {
  return serviceVisuals[slug] ?? serviceVisuals.neurology;
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  return {
    title: service
      ? `${service.title} | Ashwini Neuro Care`
      : "Service Not Found",
    description: service?.shortDescription,
  };
}

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  const visual = getVisual(service.slug);
  const ServiceIcon = visual.icon;

  const relatedServices = services
    .filter((item) => item.slug !== service.slug)
    .slice(0, 3);

  return (
    <main className="bg-white text-slate-900">
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-[#073b46]">
        {/* Decorative background */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(45,212,191,0.16),transparent_60%)]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-32 bottom-0 h-96 w-96 rounded-full border border-white/10"
        />

        <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-8 sm:px-6 sm:pb-24 lg:px-8">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2 text-xs text-teal-100 sm:text-sm">
              <li>
                <Link
                  href="/"
                  className={`rounded-sm hover:text-white ${lightFocusClass}`}
                >
                  Home
                </Link>
              </li>

              <li aria-hidden="true">
                <ChevronRight className="h-3.5 w-3.5 text-teal-200/70" />
              </li>

              <li>
                <Link
                  href="/services"
                  className={`rounded-sm hover:text-white ${lightFocusClass}`}
                >
                  Services
                </Link>
              </li>

              <li aria-hidden="true">
                <ChevronRight className="h-3.5 w-3.5 text-teal-200/70" />
              </li>

              <li aria-current="page" className="text-white">
                {service.title}
              </li>
            </ol>
          </nav>

          <div className="mt-12 grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Heading */}
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-teal-200/25 bg-white/5 px-4 py-2 text-xs font-semibold tracking-wide text-teal-100">
                <ServiceIcon
                  aria-hidden="true"
                  className="h-4 w-4"
                />
                {visual.category}
              </span>

              <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                {service.title}
              </h1>

              <div
                aria-hidden="true"
                className="mt-6 h-1 w-16 rounded-full bg-teal-300"
              />

              <p className="mt-6 max-w-xl text-base leading-8 text-teal-100 sm:text-lg">
                {service.shortDescription}
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  href="/appointment"
                  className={`inline-flex items-center justify-center gap-2 rounded-xl bg-teal-200 px-5 py-3.5 text-sm font-semibold text-teal-950 transition-colors hover:bg-teal-100 ${lightFocusClass}`}
                >
                  <CalendarDays
                    aria-hidden="true"
                    className="h-4 w-4"
                  />
                  Appointment Enquiry
                </Link>

                <Link
                  href="/doctors"
                  className={`inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10 ${lightFocusClass}`}
                >
                  Doctor Directory
                  <ArrowRight
                    aria-hidden="true"
                    className="h-4 w-4"
                  />
                </Link>
              </div>
            </div>

            {/* Service illustration */}
            <div className="relative mx-auto w-full max-w-lg">
              <div
                aria-hidden="true"
                className="absolute -inset-3 rounded-[2.5rem] border border-white/10 sm:-inset-5"
              />

              <div className="relative overflow-hidden rounded-[2rem] border border-white/30 bg-white shadow-xl">
                <div
                  className={`relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-gradient-to-br ${visual.gradient}`}
                >
                  <div
                    aria-hidden="true"
                    className="absolute h-64 w-64 rounded-full border border-slate-300/40"
                  />

                  <div
                    aria-hidden="true"
                    className="absolute h-80 w-80 rounded-full border border-slate-300/25"
                  />

                  <div
                    aria-hidden="true"
                    className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/70"
                  />

                  <div className="relative flex h-36 w-36 items-center justify-center rounded-[2rem] border border-white bg-white/85 shadow-lg sm:h-44 sm:w-44">
                    <ServiceIcon
                      aria-hidden="true"
                      strokeWidth={1.2}
                      className={`h-20 w-20 sm:h-24 sm:w-24 ${visual.iconClass}`}
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between gap-4 border-t border-slate-100 px-6 py-5">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                      Ashwini Neuro Care
                    </p>
                    <p className="mt-1 text-base font-bold text-slate-900">
                      {service.title}
                    </p>
                  </div>

                  <span className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600">
                    Service Guide
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IN-PAGE NAVIGATION */}
      <nav
        aria-label="On this page"
        className="border-b border-slate-200 bg-white"
      >
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-7 gap-y-3 px-4 py-5 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            On This Page
          </span>

          {[
            { label: "Overview", href: "#overview" },
            ...(service.features.length > 0
              ? [{ label: "Service Information", href: "#service-information" }]
              : []),
            { label: "Your Visit", href: "#your-visit" },
            { label: "Other Services", href: "#other-services" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`rounded-sm text-sm font-medium text-slate-700 transition-colors hover:text-teal-800 ${focusClass}`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-3 lg:gap-12 lg:px-8">
          <div className="min-w-0 lg:col-span-2">
            {/* Overview */}
            <section
              id="overview"
              aria-labelledby="overview-heading"
              className="scroll-mt-32"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-800">
                Understanding the Service
              </p>

              <h2
                id="overview-heading"
                className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
              >
                About {service.title}
              </h2>

              <div className="mt-7 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                <p className="whitespace-pre-line leading-8 text-slate-600">
                  {service.fullDescription}
                </p>
              </div>
            </section>

            {/* Service information */}
            {service.features.length > 0 && (
              <section
                id="service-information"
                aria-labelledby="service-information-heading"
                className="mt-14 scroll-mt-32"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-800">
                  Service Details
                </p>

                <h2
                  id="service-information-heading"
                  className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
                >
                  Areas of Care &amp; Information
                </h2>

                <ul className="mt-7 grid gap-4 sm:grid-cols-2">
                  {service.features.map((feature, index) => (
                    <li
                      key={feature}
                      className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-5 transition-colors hover:border-teal-200"
                    >
                      <span
                        aria-hidden="true"
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-xs font-bold text-teal-800"
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <h3 className="pt-1 text-sm font-semibold leading-6 text-slate-800">
                        {feature}
                      </h3>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Visit guidance */}
            <section
              id="your-visit"
              aria-labelledby="visit-heading"
              className="mt-14 scroll-mt-32"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-800">
                Patient Information
              </p>

              <h2
                id="visit-heading"
                className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
              >
                Preparing for Your Visit
              </h2>

              <div className="mt-7 space-y-4">
                {visitInformation.map((item) => (
                  <article
                    key={item.title}
                    className="flex items-start gap-4 rounded-2xl border border-slate-200 p-5 sm:p-6"
                  >
                    <div className="rounded-xl bg-slate-100 p-3">
                      <item.icon
                        aria-hidden="true"
                        className="h-5 w-5 text-teal-800"
                      />
                    </div>

                    <div>
                      <h3 className="font-semibold text-slate-900">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm leading-7 text-slate-600">
                        {item.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </div>

          {/* SIDEBAR */}
          <aside className="self-start lg:sticky lg:top-28">
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <div className="bg-teal-50 p-6 sm:p-7">
                <div className="mb-4 inline-flex rounded-xl bg-white p-3 text-teal-800">
                  <MessageSquare
                    aria-hidden="true"
                    className="h-6 w-6"
                  />
                </div>

                <h2 className="text-xl font-bold text-teal-950">
                  Questions for Your Doctor
                </h2>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  These questions can help you discuss proposed care
                  during your consultation.
                </p>
              </div>

              <ul className="divide-y divide-slate-100 px-6 sm:px-7">
                {consultationQuestions.map((question, index) => (
                  <li
                    key={question}
                    className="flex items-start gap-3 py-4"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-0.5 text-xs font-bold text-teal-800"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <p className="text-sm leading-6 text-slate-700">
                      {question}
                    </p>
                  </li>
                ))}
              </ul>

              <div className="p-6 pt-3 sm:p-7 sm:pt-3">
                <Link
                  href="/doctors"
                  className={`flex items-center justify-center gap-2 rounded-xl border border-teal-200 bg-teal-50 px-4 py-3 text-sm font-semibold text-teal-900 hover:bg-teal-100 ${focusClass}`}
                >
                  <Stethoscope
                    aria-hidden="true"
                    className="h-4 w-4"
                  />
                  View Doctor Directory
                </Link>
              </div>
            </div>

            <div className="mt-5 rounded-2xl bg-slate-100 p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-700">
                Please Note
              </p>

              <p className="mt-2 text-sm leading-7 text-slate-600">
                Service availability and care arrangements depend on
                clinical needs and the hospital&apos;s available
                resources. Confirm details before a planned visit.
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* RELATED SERVICES */}
      {relatedServices.length > 0 && (
        <section
          id="other-services"
          aria-labelledby="related-heading"
          className="scroll-mt-28 border-y border-slate-200 bg-slate-50 py-14 sm:py-20"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-9 flex flex-wrap items-end justify-between gap-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-800">
                  Service Directory
                </p>

                <h2
                  id="related-heading"
                  className="mt-3 text-3xl font-bold tracking-tight text-slate-900"
                >
                  Other Departments &amp; Services
                </h2>
              </div>

              <Link
                href="/services"
                className={`inline-flex items-center gap-2 rounded-md text-sm font-semibold text-teal-800 ${focusClass}`}
              >
                View All Services
                <ArrowRight
                  aria-hidden="true"
                  className="h-4 w-4"
                />
              </Link>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {relatedServices.map((item) => {
                const relatedVisual = getVisual(item.slug);
                const RelatedIcon = relatedVisual.icon;

                return (
                  <article
                    key={item.id}
                    className="group flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-lg"
                  >
                    <div
                      className={`relative flex h-36 items-center justify-center overflow-hidden bg-gradient-to-br ${relatedVisual.gradient}`}
                    >
                      <div
                        aria-hidden="true"
                        className="absolute -right-5 -top-8 h-32 w-32 rounded-full border-[16px] border-white/60"
                      />

                      <div className="relative rounded-2xl border border-white bg-white/80 p-4 shadow-sm">
                        <RelatedIcon
                          aria-hidden="true"
                          strokeWidth={1.5}
                          className={`h-9 w-9 ${relatedVisual.iconClass}`}
                        />
                      </div>
                    </div>

                    <div className="flex flex-1 flex-col p-6">
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                        {relatedVisual.category}
                      </p>

                      <h3 className="mt-2 text-xl font-bold text-slate-900">
                        {item.title}
                      </h3>

                      <p className="mb-6 mt-3 text-sm leading-7 text-slate-600">
                        {item.shortDescription}
                      </p>

                      <Link
                        href={`/services/${item.slug}`}
                        aria-label={`Read about ${item.title}`}
                        className={`mt-auto flex items-center justify-between gap-3 rounded-md border-t border-slate-100 pt-4 text-sm font-semibold text-teal-800 ${focusClass}`}
                      >
                        Service Information
                        <ArrowRight
                          aria-hidden="true"
                          className="h-4 w-4"
                        />
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* CONTACT PANEL */}
      <section className="px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#073b46] p-7 sm:p-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-20 h-72 w-72 rounded-full border-[35px] border-white/5"
          />

          <div className="relative flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-200">
                Plan Your Visit
              </p>

              <h2 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Enquiries About {service.title}
              </h2>

              <p className="mt-4 leading-7 text-teal-100">
                Contact the hospital for consultation timings,
                service availability, preparation instructions
                and current fees.
              </p>
            </div>

            <div className="flex shrink-0 flex-col gap-3">
              <Link
                href="/appointment"
                className={`inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-teal-950 transition-colors hover:bg-teal-50 ${lightFocusClass}`}
              >
                <CalendarDays
                  aria-hidden="true"
                  className="h-4 w-4"
                />
                Appointment Enquiry
              </Link>

              <Link
                href="/contact"
                className={`inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2 text-sm font-medium text-teal-100 hover:text-white ${lightFocusClass}`}
              >
                Contact Details
                <ArrowRight
                  aria-hidden="true"
                  className="h-4 w-4"
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-7 max-w-4xl">
          <p className="text-center text-xs leading-6 text-slate-600">
            Website information does not replace an individual medical
            consultation, diagnosis or treatment. In an emergency,
            seek immediate medical assistance rather than waiting
            for an online response.
          </p>

          <div className="mt-6 text-center">
            <Link
              href="/services"
              className={`inline-flex items-center gap-2 rounded-md text-sm font-medium text-teal-800 ${focusClass}`}
            >
              <ArrowLeft
                aria-hidden="true"
                className="h-4 w-4"
              />
              Back to All Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
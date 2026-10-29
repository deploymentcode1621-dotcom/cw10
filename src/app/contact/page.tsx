import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, MessageCircle, ArrowRight } from "lucide-react";
import ContactForm from "@/components/ui/ContactForm";
import { SITE_CONFIG } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact Us | Ashwini Neuro Care Center",
  description:
    "Contact Ashwini Neuro Care Center in Latur — phone, email, directions and online enquiry form.",
};

const contactCards = [
  {
    icon: Phone,
    label: "Call Us",
    primary: SITE_CONFIG.phone.primary,
    primaryHref: `tel:${SITE_CONFIG.phone.primary}`,
    primaryLabel: "OPD & Appointments",
    secondary: SITE_CONFIG.phone.emergency,
    secondaryHref: `tel:${SITE_CONFIG.phone.emergency}`,
    secondaryLabel: "Emergency 24 / 7",
    secondaryRed: true,
  },
  {
    icon: Mail,
    label: "Email Us",
    primary: SITE_CONFIG.email.info,
    primaryHref: `mailto:${SITE_CONFIG.email.info}`,
    primaryLabel: "General Enquiries",
    secondary: SITE_CONFIG.email.appointments,
    secondaryHref: `mailto:${SITE_CONFIG.email.appointments}`,
    secondaryLabel: "Appointments",
  },
  {
    icon: MapPin,
    label: "Find Us",
    primary: SITE_CONFIG.address.full,
    primaryHref: SITE_CONFIG.address.mapUrl,
    primaryLabel: "Our Address",
    secondary: "Get directions →",
    secondaryHref: SITE_CONFIG.address.mapUrl,
    secondaryLabel: "",
    secondaryLink: true,
  },
  {
    icon: Clock,
    label: "Hours",
    primary: SITE_CONFIG.hours.opd,
    primaryLabel: "OPD Timings",
    secondary: SITE_CONFIG.hours.emergency,
    secondaryLabel: "Emergency & ICU",
    secondaryGreen: true,
  },
];



export default function ContactPage() {
  return (
    <div className="bg-white">
      {/* ── Hero ─────────────────────────────────────────────────── */}
<section className="relative isolate overflow-hidden bg-[#042f38]">
  <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_15%,rgba(45,212,191,0.18),transparent_55%)]" />
  <div aria-hidden="true" className="pointer-events-none absolute -right-32 top-0 h-[600px] w-[600px] rounded-full border border-teal-100/10" />
  <div aria-hidden="true" className="pointer-events-none absolute -right-12 top-20 h-[440px] w-[440px] rounded-full border border-teal-100/10" />

  <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
    <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
      <div className="lg:col-span-7">
        <span className="inline-flex items-center gap-2 rounded-full border border-teal-100/20 bg-white/5 px-4 py-2 text-xs font-medium text-teal-100">
          <MapPin aria-hidden="true" className="h-3.5 w-3.5" />
          Latur, Maharashtra
        </span>

        <p className="mt-8 text-[11px] font-semibold uppercase tracking-[0.25em] text-teal-200">Contact &amp; Visit Information</p>
        <h1 className="mt-4 text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-7xl">
          Get in Touch.
          <span className="mt-3 block text-teal-200">Plan Your Visit.</span>
        </h1>
        <p className="mt-6 text-lg font-medium text-white">Ashwini Neuro Care</p>
        <p className="mt-4 max-w-lg text-base leading-8 text-slate-200">
          Contact the hospital about consultations, facility availability,
          current fees and arrangements for your visit.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#enquiry-form" className="inline-flex items-center gap-3 rounded-xl bg-teal-200 px-6 py-3.5 text-sm font-semibold text-teal-950 transition-colors hover:bg-teal-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
            Make an Enquiry <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </a>
          <a href={SITE_CONFIG.address.mapUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/25 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
            <MapPin aria-hidden="true" className="h-4 w-4" /> Get Directions
          </a>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/15 pt-6 text-xs text-teal-100">
          <span className="inline-flex items-center gap-2"><Phone aria-hidden="true" className="h-4 w-4" /> Consultation enquiries</span>
          <span className="inline-flex items-center gap-2"><Mail aria-hidden="true" className="h-4 w-4" /> Facility information</span>
          <span className="inline-flex items-center gap-2"><MapPin aria-hidden="true" className="h-4 w-4" /> Visit planning</span>
        </div>
      </div>

      <div className="relative lg:col-span-5">
        <div aria-hidden="true" className="absolute -inset-3 rounded-[2rem] border border-white/15 sm:-inset-4" />
        <div className="relative overflow-hidden rounded-3xl bg-[#f7faf9] shadow-2xl">
          <div className="border-b border-slate-200 p-6 sm:p-8">
            <div className="mb-5 inline-flex rounded-2xl bg-teal-100 p-3.5 text-teal-900"><MessageCircle aria-hidden="true" className="h-7 w-7" /></div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-teal-800">Hospital Contact</p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900">Start with the Information You Need</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">Contact details and enquiry options for patients and families.</p>
          </div>
          <div className="space-y-3 p-5 sm:p-6">
            {SITE_CONFIG.phone.primary && (
              <a href={`tel:${SITE_CONFIG.phone.primary.replace(/[^\d+]/g, "")}`} className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 transition-colors hover:border-teal-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700">
                <span className="rounded-xl bg-teal-50 p-3 text-teal-800"><Phone aria-hidden="true" className="h-5 w-5" /></span>
                <span className="min-w-0 flex-1"><span className="block text-xs text-slate-500">OPD &amp; Consultation</span><span className="mt-1 block break-words text-sm font-semibold text-slate-900">{SITE_CONFIG.phone.primary}</span></span>
                <ArrowRight aria-hidden="true" className="h-4 w-4 shrink-0 text-teal-800" />
              </a>
            )}
            {SITE_CONFIG.email.info && (
              <a href={`mailto:${SITE_CONFIG.email.info}`} className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 transition-colors hover:border-teal-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700">
                <span className="rounded-xl bg-blue-50 p-3 text-blue-800"><Mail aria-hidden="true" className="h-5 w-5" /></span>
                <span className="min-w-0 flex-1"><span className="block text-xs text-slate-500">General Enquiries</span><span className="mt-1 block break-all text-sm font-semibold text-slate-900">{SITE_CONFIG.email.info}</span></span>
                <ArrowRight aria-hidden="true" className="h-4 w-4 shrink-0 text-teal-800" />
              </a>
            )}
            <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-4">
              <span className="rounded-xl bg-amber-50 p-3 text-amber-800"><MapPin aria-hidden="true" className="h-5 w-5" /></span>
              <div><p className="text-xs text-slate-500">Hospital Location</p><p className="mt-1 text-sm leading-6 text-slate-700">{SITE_CONFIG.address.full}</p></div>
            </div>
          </div>
          <p className="border-t border-slate-200 bg-white px-6 py-4 text-xs leading-6 text-slate-600">For medical emergencies, seek immediate assistance. Do not wait for an online response.</p>
        </div>
      </div>
    </div>
  </div>
</section>
      {/* ── Quick-contact strip ───────────────────────────────────── */}
<div className="bg-teal-700 overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-teal-600">

      {contactCards.map((card) => (
        <div
          key={card.label}
          className="flex items-start gap-4 p-6 min-w-0"
        >
          {/* Icon */}
          <div className="shrink-0 w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
            <card.icon className="w-5 h-5 text-amber-300" />
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">

            <p className="text-xs font-semibold tracking-widest uppercase text-teal-300 mb-2">
              {card.label}
            </p>

            {/* Primary */}
            <div className="mb-2 min-w-0">
              <p className="text-teal-200 text-[11px] mb-0.5">
                {card.primaryLabel}
              </p>

              {card.primaryHref ? (
                <a
                  href={card.primaryHref}
                  target={card.primaryHref.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="block text-sm text-white font-medium hover:text-amber-300 transition-colors break-all"
                >
                  {card.primary}
                </a>
              ) : (
                <span className="block text-sm text-white font-medium break-all">
                  {card.primary}
                </span>
              )}
            </div>

            {/* Secondary */}
            {card.secondary && (
              <div className="min-w-0">
                {card.secondaryLabel && (
                  <p className="text-teal-200 text-[11px] mb-0.5">
                    {card.secondaryLabel}
                  </p>
                )}

                {card.secondaryHref ? (
                  <a
                    href={card.secondaryHref}
                    target={card.secondaryHref.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className={`block text-sm font-medium break-all ${
                      card.secondaryRed
                        ? "text-red-300"
                        : card.secondaryGreen
                        ? "text-green-300"
                        : card.secondaryLink
                        ? "text-amber-300"
                        : "text-white"
                    }`}
                  >
                    {card.secondary}
                  </a>
                ) : (
                  <span
                    className={`block text-sm font-medium break-all ${
                      card.secondaryGreen
                        ? "text-green-300"
                        : "text-white"
                    }`}
                  >
                    {card.secondary}
                  </span>
                )}
              </div>
            )}

          </div>
        </div>
      ))}

    </div>
  </div>
</div>
      {/* ── Main content ─────────────────────────────────────────── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10 items-start">

            {/* Left column – sidebar info */}
            <aside className="lg:col-span-2 space-y-6">
              <div>
                <p className="text-xs font-semibold tracking-[0.16em] uppercase text-teal-600 mb-2">
                  Send a Message
                </p>
                <h2 className="text-3xl font-extrabold text-gray-900 leading-snug">
                  How can we help you today?
                </h2>
                <p className="mt-3 text-gray-500 text-sm leading-relaxed">
                  Fill in the form and our patient care team will get back to you within one business
                  hour. For medical emergencies, please call our emergency line directly.
                </p>
              </div>

              {/* WhatsApp CTA */}
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-3 bg-green-500 hover:bg-green-600 text-white px-5 py-4 rounded-2xl font-semibold text-sm transition-colors shadow-lg shadow-green-200"
              >
                <span className="flex items-center gap-3">
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </span>
                <ArrowRight className="w-4 h-4 opacity-70 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Emergency CTA */}
              <a
                href={`tel:${SITE_CONFIG.phone.emergency}`}
                className="group flex items-center justify-between gap-3 bg-red-600 hover:bg-red-700 text-white px-5 py-4 rounded-2xl font-semibold text-sm transition-colors shadow-lg shadow-red-100"
              >
                <span className="flex items-center gap-3">
                  <Phone className="w-5 h-5" />
                  Call Emergency Line
                </span>
                <span className="text-xs font-normal opacity-80">24 / 7</span>
              </a>

              {/* Visiting hours card */}
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-4 h-4 text-teal-600" />
                  <span className="text-sm font-semibold text-gray-800">Visiting Hours</span>
                </div>
                <ul className="space-y-3 text-sm">
                  {[
                    { label: "OPD", value: SITE_CONFIG.hours.opd },
                    { label: "ICU Visiting", value: "4 PM – 5 PM daily" },
                    { label: "Emergency", value: "Always open", green: true },
                  ].map((row) => (
                    <li key={row.label} className="flex justify-between">
                      <span className="text-gray-500">{row.label}</span>
                      <span className={`font-medium ${row.green ? "text-green-600" : "text-gray-800"}`}>
                        {row.value}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Address card */}
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-4 h-4 text-teal-600" />
                  <span className="text-sm font-semibold text-gray-800">Our Location</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">
                  {SITE_CONFIG.address.full}
                </p>
                <a
                  href={SITE_CONFIG.address.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal-600 hover:text-teal-700 transition-colors"
                >
                  Get Directions <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </aside>

            {/* Right column – form */}
            <div className="lg:col-span-3">
              <div id="enquiry-form" className="scroll-mt-28 bg-white rounded-3xl border border-gray-100 shadow-xl shadow-gray-100/60 p-8 md:p-10">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900">Send Us a Message</h3>
                  <p className="text-sm text-gray-500 mt-1">
                    Fields marked <span className="text-red-500">*</span> are required.
                  </p>
                </div>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Google Map ───────────────────────────────────────────── */}
      <section className="pb-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100 h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6666.269469877868!2d76.55225747945624!3d18.384581462273648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcf83c5287bee1d%3A0xeb409138c9f814b9!2sAshwini%20Accident%20%26%20Neuro%20Care%20Center%20-%20Best%20Hospital%20In%20Latur!5e0!3m2!1sen!2sin!4v1781342840326!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ashwini Accident & Neuro Care Center Location"
            />
            {/* Floating location label */}
           <div className="absolute bottom-3 left-3 right-3 sm:right-auto bg-white rounded-2xl px-4 py-3 shadow-lg flex items-center gap-3 max-w-[calc(100%-24px)]">
  <div className="w-9 h-9 rounded-xl bg-teal-50 flex items-center justify-center shrink-0">
    <MapPin className="w-4 h-4 text-teal-600" />
  </div>

  <div className="min-w-0">
    <p className="text-xs text-gray-500 truncate">
      Ashwini Neuro Care Center
    </p>

    <p className="text-sm font-semibold text-gray-900 truncate">
      Latur, Maharashtra
    </p>
  </div>
</div>
          </div>
        </div>
      </section>
    </div>
  );
}
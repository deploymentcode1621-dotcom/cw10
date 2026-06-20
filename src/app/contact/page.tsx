import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, MessageCircle, ArrowRight, ShieldCheck } from "lucide-react";
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

const trustBadges = [
  { icon: ShieldCheck, text: "NABH Accredited" },
  { icon: ShieldCheck, text: "24 / 7 Emergency" },
  { icon: ShieldCheck, text: "Expert Neurology Team" },
];

export default function ContactPage() {
  return (
    <div className="bg-white">
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="relative bg-hero overflow-hidden">
        {/* Subtle diagonal accent */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, transparent, transparent 40px, rgba(255,255,255,.08) 40px, rgba(255,255,255,.08) 41px)",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <span className="inline-block text-xs font-semibold tracking-[0.18em] uppercase text-teal-200 mb-4">
            We&rsquo;re Here for You
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-5">
            Contact&nbsp;
            <span className="text-amber-300">Ashwini Neuro Care</span>
          </h1>
          <p className="text-teal-100 text-lg max-w-xl mx-auto mb-10">
            Reach our team for appointments, second opinions, or emergency support — we respond promptly.
          </p>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-4">
            {trustBadges.map((b) => (
              <div
                key={b.text}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2"
              >
                <b.icon className="w-4 h-4 text-amber-300" />
                <span className="text-sm font-medium text-white">{b.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Quick-contact strip ───────────────────────────────────── */}
      <div className="bg-teal-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-teal-600">
            {contactCards.map((card) => (
              <div key={card.label} className="flex items-start gap-4 p-6">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                  <card.icon className="w-5 h-5 text-amber-300" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-semibold tracking-widest uppercase text-teal-300 mb-1">
                    {card.label}
                  </p>
                  <div className="text-sm text-white font-medium mb-0.5">
                    <p className="text-teal-200 text-[11px]">{card.primaryLabel}</p>
                    {card.primaryHref ? (
                      <a
                        href={card.primaryHref}
                        target={card.primaryHref.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="hover:text-amber-300 transition-colors truncate block"
                      >
                        {card.primary}
                      </a>
                    ) : (
                      <span>{card.primary}</span>
                    )}
                  </div>
                  {card.secondary && (
                    <div className="text-sm">
                      {card.secondaryLabel && (
                        <p className="text-teal-200 text-[11px]">{card.secondaryLabel}</p>
                      )}
                      {card.secondaryHref ? (
                        <a
                          href={card.secondaryHref}
                          target={card.secondaryHref.startsWith("http") ? "_blank" : undefined}
                          rel="noopener noreferrer"
                          className={`font-medium hover:underline transition-colors ${
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
                          className={`font-medium ${
                            card.secondaryGreen ? "text-green-300" : "text-white"
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
              <div className="bg-white rounded-3xl border border-gray-100 shadow-xl shadow-gray-100/60 p-8 md:p-10">
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
            <div className="absolute bottom-5 left-5 bg-white rounded-2xl px-5 py-3 shadow-lg flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-teal-50 flex items-center justify-center">
                <MapPin className="w-4 h-4 text-teal-600" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Ashwini Neuro Care Center</p>
                <p className="text-sm font-semibold text-gray-900">Latur, Maharashtra</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
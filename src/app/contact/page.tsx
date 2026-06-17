import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import ContactForm from "@/components/ui/ContactForm";
import SectionHeader from "@/components/ui/SectionHeader";
import { SITE_CONFIG } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact Ashwini Neuro Care Center in Latur — phone, email, directions and online enquiry form.",
};

const contactInfo = [
  {
    icon: Phone,
    title: "Phone Numbers",
    items: [
      { label: "OPD & Appointments", value: SITE_CONFIG.phone.primary, href: `tel:${SITE_CONFIG.phone.primary}` },
      { label: "Emergency (24/7)", value: SITE_CONFIG.phone.emergency, href: `tel:${SITE_CONFIG.phone.emergency}`, red: true },
    ],
  },
  {
    icon: Mail,
    title: "Email Addresses",
    items: [
      { label: "General Enquiries", value: SITE_CONFIG.email.info, href: `mailto:${SITE_CONFIG.email.info}` },
      { label: "Appointments", value: SITE_CONFIG.email.appointments, href: `mailto:${SITE_CONFIG.email.appointments}` },
    ],
  },
  {
    icon: MapPin,
    title: "Our Location",
    items: [
      { label: "Address", value: SITE_CONFIG.address.full, href: SITE_CONFIG.address.mapUrl },
    ],
  },
  {
    icon: Clock,
    title: "Working Hours",
    items: [
      { label: "OPD", value: SITE_CONFIG.hours.opd },
      { label: "Emergency & ICU", value: SITE_CONFIG.hours.emergency, green: true },
    ],
  },
];

export default function ContactPage() {
  return (
    <div>
      <section className="bg-hero py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-teal-100 text-lg max-w-2xl mx-auto">
            We&apos;re here to help — reach out for appointments, enquiries, or emergencies.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Info */}
            <div className="space-y-5">
              <SectionHeader eyebrow="Get In Touch" title="Contact Information" centered={false} />

              {contactInfo.map((info) => (
                <div key={info.title} className="card p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 bg-teal-50 rounded-lg flex items-center justify-center">
                      <info.icon className="w-5 h-5 text-teal-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900">{info.title}</h3>
                  </div>
                  <div className="space-y-2 pl-12">
                    {info.items.map((item) => (
                      <div key={item.label}>
                        <p className="text-xs text-gray-500">{item.label}</p>
                        {"href" in item && item.href ? (
                          <a
                            href={item.href}
                            target={item.href.startsWith("http") ? "_blank" : undefined}
                            rel="noopener noreferrer"
                            className={`text-sm font-medium hover:underline ${
                              "red" in item && item.red ? "text-red-600" : "green" in item && item.green ? "text-green-600" : "text-teal-600"
                            }`}
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className={`text-sm font-medium ${"green" in item && item.green ? "text-green-600" : "text-gray-800"}`}>
                            {item.value}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              {/* WhatsApp */}
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white p-4 rounded-xl font-semibold transition-colors"
              >
                <MessageCircle className="w-6 h-6" />
                Chat with us on WhatsApp
              </a>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="card p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
                <ContactForm />
              </div>
            </div>
          </div>

        {/* Google Map */}
<div className="mt-12 rounded-[32px] overflow-hidden shadow-2xl border border-gray-100 h-[550px]">
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
</div>
        </div>
      </section>
    </div>
  );
}

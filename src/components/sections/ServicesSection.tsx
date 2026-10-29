"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Brain, Stethoscope, Activity, AlertCircle, Heart, Scan, Zap, ArrowRight } from "lucide-react";

import { services } from "@/data/services";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Brain,
  Stethoscope,
  Activity,
  AlertCircle,
  Heart,
  Scan,
  Zap,
  Ambulance: AlertCircle,
};

// Stock photos of unknown people/labs can mislead visitors into thinking they show this hospital.
// Keep false until you have the hospital's OWN photos of its equipment/departments (no patients).
// Then set true and point each service.image to a real photo.
const USE_PHOTOS = false;

// Soft gradient palette used when USE_PHOTOS is false (cycles through the cards).
const gradients = [
  "from-teal-600 via-teal-500 to-emerald-500",
  "from-cyan-600 via-teal-500 to-teal-400",
  "from-emerald-600 via-teal-600 to-cyan-500",
  "from-teal-700 via-cyan-600 to-sky-500",
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading — descriptive, no superlatives */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-teal-700 font-semibold text-sm uppercase tracking-wider">Departments &amp; Services</span>

          <h2 className="section-title mt-2">Our Clinical Services</h2>

          <p className="section-subtitle mx-auto mt-3">
            Diagnosis and treatment services in neurology, neurosurgery, spine care and trauma care, provided by
            qualified, registered medical practitioners.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] || Brain;
            const showPhoto = USE_PHOTOS && service.image;

            return (
              <Link key={service.id} href={`/services/${service.slug}`} className="block">
                <motion.article
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.4 }}
                  className="group relative overflow-hidden rounded-3xl bg-white border border-gray-100 shadow-md hover:shadow-2xl min-h-[360px] transition-all duration-500"
                >
                  {/* Hover glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-500/0 via-teal-500/5 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-all duration-500" />

                  {/* Top border */}
                  <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-teal-500 to-cyan-500 z-10" />

                  {/* Header: real photo OR gradient with large icon */}
                  <div className="relative h-40 overflow-hidden">
                    {showPhoto ? (
                      <>
                        <img
                          src={service.image}
                          alt={`${service.title} department`}
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                      </>
                    ) : (
                      <div
                        className={`relative h-full w-full bg-gradient-to-br ${gradients[i % gradients.length]} flex items-center justify-center`}
                        aria-hidden="true"
                      >
                        <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10" />
                        <div className="absolute -left-6 -bottom-10 h-28 w-28 rounded-full bg-white/10" />
                        <Icon className="h-16 w-16 text-white/90 transition-transform duration-500 group-hover:scale-110" />
                      </div>
                    )}

                    {service.isEmergency && (
                      <span className="absolute top-3 right-3 rounded-full bg-red-600 px-3 py-1 text-xs font-semibold text-white shadow-lg">
                        24×7
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <div className="relative p-6">
                    <div className="-mt-12 mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-gray-100 bg-white shadow-lg">
                      <Icon className="h-7 w-7 text-teal-600" />
                    </div>

                    <h3 className="mb-3 text-xl font-bold text-gray-900 transition-colors group-hover:text-teal-700">
                      {service.title}
                    </h3>

                    <p className="mb-6 line-clamp-3 text-sm leading-relaxed text-gray-600">{service.shortDescription}</p>

                    <div className="mt-auto flex items-center justify-between">
                      <span className="font-semibold text-teal-700">Learn More</span>

                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-600 text-white transition-all duration-300 group-hover:translate-x-1">
                        <ArrowRight className="h-5 w-5" />
                      </div>
                    </div>
                  </div>
                </motion.article>
              </Link>
            );
          })}
        </div>

        {/* View All Services */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-12 text-center">
          <Link href="/services" className="btn-primary inline-flex items-center gap-2">
            View All Services
            <ArrowRight className="h-4 w-4" />
          </Link>

          <p className="mt-6 text-xs text-gray-500">
            Availability of services and timings as per hospital records. Last updated: October 2026.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
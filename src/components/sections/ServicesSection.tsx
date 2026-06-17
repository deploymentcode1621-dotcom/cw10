"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Brain,
  Stethoscope,
  Activity,
  AlertCircle,
  Heart,
  Scan,
  Zap,
  ArrowRight,
  X,
  CheckCircle2,
  Phone,
  CalendarDays,
} from "lucide-react";
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

export default function ServicesSection() {
 const [selectedService, setSelectedService] = useState<(typeof services)[0] | null>(null);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">
            Our Specialties
          </span>

          <h2 className="section-title mt-2">
            World-Class Medical Services
          </h2>

          <p className="section-subtitle mx-auto mt-3">
            Comprehensive neurological and trauma care backed by
            state-of-the-art technology and expert specialists.
          </p>
        </motion.div>

        {/* Service Cards */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
  {services.map((service, i) => {
    const Icon = iconMap[service.icon] || Brain;

    return (
      <motion.div
        key={service.id}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{
          y: -10,
          scale: 1.02,
        }}
        viewport={{ once: true }}
        transition={{
          delay: i * 0.07,
          duration: 0.4,
        }}
        className="
          group
          relative
          overflow-hidden
          rounded-3xl
          bg-white
          border border-gray-100
          shadow-md
          hover:shadow-2xl
          min-h-[360px]
          transition-all
          duration-500
        "
      >
        {/* Gradient Glow */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-br
            from-teal-500/0
            via-teal-500/5
            to-teal-500/10
            opacity-0
            group-hover:opacity-100
            transition-all
            duration-500
          "
        />

        {/* Top Accent */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500 to-cyan-500" />

        {/* Service Image */}
        <div className="relative h-40 overflow-hidden">
          <img
            src={service.image}
            alt={service.title}
            className="
              w-full
              h-full
              object-cover
              transition-transform
              duration-700
              group-hover:scale-110
            "
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

          {service.isEmergency && (
            <span
              className="
                absolute
                top-3
                right-3
                bg-red-500
                text-white
                text-xs
                font-semibold
                px-3
                py-1
                rounded-full
                shadow-lg
              "
            >
              24/7
            </span>
          )}
        </div>

        <div className="relative p-6">
          {/* Floating Icon */}
          <div
            className="
              -mt-12
              mb-4
              w-14
              h-14
              bg-white
              rounded-2xl
              shadow-lg
              flex
              items-center
              justify-center
              border border-gray-100
            "
          >
            <Icon className="w-7 h-7 text-teal-600" />
          </div>

          <h3 className="font-bold text-xl text-gray-900 mb-3">
            {service.title}
          </h3>

          <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
            {service.shortDescription}
          </p>

          <button
            onClick={() => setSelectedService(service)}
            className="
              inline-flex
              items-center
              gap-2
              text-teal-600
              font-semibold
              text-sm
              group/button
            "
          >
            Learn More

            <ArrowRight
              className="
                w-4
                h-4
                transition-transform
                duration-300
                group-hover/button:translate-x-2
              "
            />
          </button>
        </div>
      </motion.div>
    );
  })}
</div>
        {/* View All Services */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <Link href="/services" className="btn-primary">
            View All Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>

     {/* Popup Modal */}
{/* Popup Modal */}
<AnimatePresence>
  {selectedService && (
    <motion.div
      className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-md flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setSelectedService(null)}
    >
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.96 }}
        transition={{ duration: 0.35 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-[32px] shadow-2xl max-w-5xl w-full relative overflow-hidden"
      >
        {/* Close */}
        <button
          onClick={() => setSelectedService(null)}
          className="absolute top-5 right-5 z-50 bg-white shadow-lg rounded-full p-3 hover:scale-110 transition"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Section */}
        <div className="grid lg:grid-cols-2">
          <div className="relative min-h-[320px] lg:min-h-[520px]">
            <img
              src={selectedService.image}
              alt={selectedService.title}
              className="w-full h-full object-cover lg:rounded-l-[32px]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

            <div className="absolute bottom-6 left-6 w-20 h-20 bg-white rounded-3xl shadow-xl flex items-center justify-center">
              {(() => {
                const Icon = iconMap[selectedService.icon] || Brain;
                return <Icon className="w-10 h-10 text-teal-600" />;
              })()}
            </div>
          </div>

          <div className="p-8 lg:p-10 flex flex-col justify-center">
            {selectedService.isEmergency && (
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-100 text-red-600 font-semibold text-sm mb-5 w-fit">
                🚑 Available 24/7
              </div>
            )}

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5">
              {selectedService.title}
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              {selectedService.fullDescription}
            </p>

            <div className="grid grid-cols-3 gap-4">
              <div className="bg-gray-50 rounded-2xl p-4 text-center">
                <div className="text-2xl font-bold text-teal-600">24/7</div>
                <div className="text-sm text-gray-500">Support</div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-4 text-center">
                <div className="text-2xl font-bold text-teal-600">Expert</div>
                <div className="text-sm text-gray-500">Team</div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-4 text-center">
                <div className="text-2xl font-bold text-teal-600">Modern</div>
                <div className="text-sm text-gray-500">Technology</div>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="px-8 lg:px-10 py-10 border-t border-gray-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Key Services & Features
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {selectedService.features?.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-teal-50 to-white border border-teal-100 rounded-2xl p-5 flex items-start gap-3 hover:shadow-md transition"
              >
                <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="sticky bottom-0 bg-white/95 backdrop-blur-md border-t border-gray-100 p-6 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-2xl font-semibold transition"
          >
            <CalendarDays className="w-5 h-5" />
            Book Appointment
          </Link>

          <Link
            href="tel:+919999999999"
            className="inline-flex items-center justify-center gap-2 border border-gray-300 hover:bg-gray-50 px-8 py-4 rounded-2xl font-semibold transition"
          >
            <Phone className="w-5 h-5" />
            Call Hospital
          </Link>
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
    </section>
  );
}
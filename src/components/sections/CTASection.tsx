"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, Calendar, ShieldCheck, Clock, Activity } from "lucide-react";
import { SITE_CONFIG } from "@/lib/utils";

export default function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-r from-teal-700 via-teal-800 to-cyan-700 overflow-hidden relative">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-20 w-72 h-72 rounded-full bg-white blur-3xl" />
        <div className="absolute bottom-0 right-10 w-96 h-96 rounded-full bg-cyan-300 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium mb-6">
            Trusted Neurology & Neurosurgery Care
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Expert Care When You Need It Most
          </h2>

          <p className="text-xl text-teal-100 max-w-3xl mx-auto leading-relaxed mb-12">
            From emergency neuro trauma and stroke management to advanced
            neurosurgery and neurological consultations, our team is committed
            to providing compassionate and specialized care.
          </p>
        </motion.div>

        {/* Trust Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">

          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/10">
            <ShieldCheck className="w-10 h-10 text-white mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">
              Experienced Specialists
            </h3>
            <p className="text-teal-100">
              Dedicated neurology and neurosurgery experts with years of clinical experience.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/10">
            <Clock className="w-10 h-10 text-white mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">
              24/7 Emergency Care
            </h3>
            <p className="text-teal-100">
              Immediate response for stroke, trauma and critical neurological emergencies.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/10">
            <Activity className="w-10 h-10 text-white mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">
              Advanced Facilities
            </h3>
            <p className="text-teal-100">
              Modern diagnostic and treatment facilities for comprehensive neuro care.
            </p>
          </div>

        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4">

          <Link
            href="/appointment"
            className="inline-flex items-center gap-2 bg-white text-teal-700 font-semibold px-8 py-4 rounded-2xl hover:bg-gray-100 transition-all"
          >
            <Calendar className="w-5 h-5" />
            Book Appointment
          </Link>

          <a
            href={`tel:${SITE_CONFIG.phone.emergency}`}
            className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white font-semibold px-8 py-4 rounded-2xl transition-all"
          >
            <Phone className="w-5 h-5" />
            Emergency Call
          </a>

        </div>
      </div>
    </section>
  );
}
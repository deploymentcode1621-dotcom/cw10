import type { Metadata } from "next";
import Link from "next/link";
import { Phone, AlertTriangle, Clock, MapPin, Ambulance, Heart, Brain, Activity } from "lucide-react";
import { SITE_CONFIG } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Emergency Care",
  description: "24/7 Emergency services at Ashwini Neuro Care Center Latur. Call our emergency line immediately for critical neurological and trauma care.",
};

const emergencyServices = [
  { icon: Brain, title: "Stroke Emergency", desc: "Immediate thrombolysis and stroke intervention — every minute counts in a brain stroke." },
  { icon: Activity, title: "Traumatic Brain Injury", desc: "Rapid CT scan, neurosurgical evaluation and emergency craniotomy if needed." },
  { icon: Heart, title: "Spinal Cord Emergency", desc: "Urgent spine stabilization and decompression surgery to prevent permanent paralysis." },
  { icon: Ambulance, title: "Poly-Trauma", desc: "Full trauma team activation for road accidents and multi-system injuries." },
];

const warningSignsStroke = [
  "Sudden numbness or weakness in face, arm, or leg (especially one side)",
  "Sudden confusion, trouble speaking or understanding speech",
  "Sudden trouble seeing in one or both eyes",
  "Sudden severe headache with no known cause",
  "Sudden dizziness, loss of balance or coordination",
];

const warningSignsSpine = [
  "Sudden inability to move arms or legs after a fall/accident",
  "Severe neck or back pain after trauma",
  "Loss of bladder or bowel control",
  "Numbness or tingling radiating down arms or legs",
];

export default function EmergencyPage() {
  return (
    <div>
      {/* Hero — red theme */}
      <section className="bg-red-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <AlertTriangle className="w-10 h-10 text-yellow-300 animate-pulse" />
            <h1 className="text-4xl md:text-5xl font-bold text-white">Emergency Care</h1>
          </div>
          <p className="text-red-100 text-lg max-w-2xl mx-auto mb-8">
            Available 24 hours a day, 7 days a week, 365 days a year. Do not hesitate — call us immediately.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={`tel:${SITE_CONFIG.phone.emergency}`} className="inline-flex items-center gap-3 bg-white text-red-700 font-bold px-8 py-4 rounded-xl text-xl hover:bg-red-50 transition-colors shadow-lg animate-pulse">
              <Phone className="w-6 h-6" />
              {SITE_CONFIG.phone.emergency}
            </a>
            <a href={`tel:${SITE_CONFIG.phone.primary}`} className="inline-flex items-center gap-3 bg-red-600 border-2 border-red-400 text-white font-bold px-8 py-4 rounded-xl text-xl hover:bg-red-500 transition-colors">
              <Phone className="w-6 h-6" />
              {SITE_CONFIG.phone.primary}
            </a>
          </div>
        </div>
      </section>

      {/* Emergency services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">Emergency Services We Handle</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {emergencyServices.map((service) => (
              <div key={service.title} className="card p-6">
                <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Warning Signs */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">Know the Warning Signs</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
              <h3 className="font-bold text-red-800 text-lg mb-4 flex items-center gap-2">
                <Brain className="w-5 h-5" /> Stroke Warning Signs (FAST)
              </h3>
              <ul className="space-y-3">
                {warningSignsStroke.map((sign) => (
                  <li key={sign} className="flex items-start gap-3">
                    <AlertTriangle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                    <span className="text-red-900 text-sm">{sign}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 bg-red-100 rounded-xl p-4 text-center">
                <p className="font-bold text-red-800">If you notice any of these signs,</p>
                <a href={`tel:${SITE_CONFIG.phone.emergency}`} className="text-red-600 font-bold text-xl hover:underline">
                  Call {SITE_CONFIG.phone.emergency} IMMEDIATELY
                </a>
              </div>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6">
              <h3 className="font-bold text-orange-800 text-lg mb-4 flex items-center gap-2">
                <Activity className="w-5 h-5" /> Spinal Emergency Signs
              </h3>
              <ul className="space-y-3">
                {warningSignsSpine.map((sign) => (
                  <li key={sign} className="flex items-start gap-3">
                    <AlertTriangle className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span className="text-orange-900 text-sm">{sign}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 bg-orange-100 rounded-xl p-4 text-center">
                <p className="font-bold text-orange-800">Do NOT move the patient — call us first</p>
                <a href={`tel:${SITE_CONFIG.phone.emergency}`} className="text-orange-600 font-bold text-xl hover:underline">
                  Call {SITE_CONFIG.phone.emergency}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to reach */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">How to Reach Us</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="card p-5">
              <Phone className="w-8 h-8 text-teal-600 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 mb-1">Call Us</h4>
              <a href={`tel:${SITE_CONFIG.phone.emergency}`} className="text-red-600 font-bold text-sm">{SITE_CONFIG.phone.emergency}</a>
            </div>
            <div className="card p-5">
              <MapPin className="w-8 h-8 text-teal-600 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 mb-1">Our Address</h4>
              <p className="text-gray-500 text-xs">{SITE_CONFIG.address.full}</p>
            </div>
            <div className="card p-5">
              <Clock className="w-8 h-8 text-teal-600 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 mb-1">Always Open</h4>
              <p className="text-green-600 font-semibold text-sm">24 × 7 × 365</p>
            </div>
          </div>
          <div className="mt-8">
            <Link href="/appointment" className="btn-primary">
              Book Non-Emergency Appointment
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

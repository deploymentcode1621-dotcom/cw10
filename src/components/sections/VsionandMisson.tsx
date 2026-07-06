import React from 'react'
import { Eye, Target, CheckCircle2 } from 'lucide-react'

const VisionAndMission = () => {
  return (
    <div>
      {/* ── Vision & Mission ────────────────────────────────────── */}
      <section className="pb-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-[0.16em] uppercase text-teal-600 mb-2">
              Our Purpose
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              Vision &amp; Mission
            </h2>
            <p className="mt-3 text-gray-500 max-w-xl mx-auto">
              Guided by compassion, driven by excellence, committed to every life we touch.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            {/* Vision card */}
            <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200 p-8 flex flex-col gap-4">
              <div className="w-12 h-12 rounded-full bg-teal-50 flex items-center justify-center">
                <Eye className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Our Vision</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                To be the most trusted and preferred healthcare institution, delivering
                exceptional neurological and comprehensive medical care through clinical
                excellence, advanced technology, and compassionate service. At Ashwini
                Neuro Care &amp; Hospital, we aspire to improve lives by providing
                accessible, ethical, and patient-centered healthcare for every individual
                and family.
              </p>
            </div>

            {/* Mission card */}
            <div className="lg:col-span-3 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200 p-8 flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-teal-50 flex items-center justify-center shrink-0">
                  <Target className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Our Mission</h3>
              </div>

              <ul className="grid sm:grid-cols-2 gap-3">
                {[
                  "To provide high-quality, evidence-based medical care with compassion and respect.",
                  "To deliver specialized neurological care using advanced diagnostic and treatment facilities.",
                  "To ensure every patient receives personalized attention and the highest standards of safety.",
                  "To make quality healthcare affordable, accessible, and available to the community.",
                  "To promote preventive healthcare through patient education and early diagnosis.",
                  "To continuously enhance our services through innovation, modern technology, and skilled healthcare professionals.",
                  "To build lasting relationships with patients based on trust, integrity, and excellence in care.",
                ].map((point, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 bg-teal-50/50 rounded-xl p-3"
                  >
                    <CheckCircle2 className="w-4 h-4 text-teal-600 mt-0.5 shrink-0" />
                    <span className="text-gray-600 text-sm leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default VisionAndMission
import type { Metadata } from "next";
import Image from "next/image";
import { Star, Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import SectionHeader from "@/components/ui/SectionHeader";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Patient Testimonials",
  description: "Read real patient stories and reviews from Ashwini Neuro Care Center — hear how we transformed lives.",
};

export default function TestimonialsPage() {
  return (
    <div>
      <section className="bg-hero py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Patient Testimonials</h1>
          <p className="text-teal-100 text-lg max-w-2xl mx-auto">
            Real stories from patients and families whose lives were changed by our care.
          </p>
        </div>
      </section>

      {/* Rating banner */}
      <section className="bg-white py-10 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-10">
            {[
              { value: "4.9/5", label: "Google Rating", count: "2,400+ reviews" },
              { value: "98%", label: "Patient Satisfaction", count: "Based on surveys" },
              { value: "4.8/5", label: "Practo Rating", count: "1,800+ reviews" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-bold text-teal-600">{stat.value}</p>
                <p className="text-gray-800 font-semibold">{stat.label}</p>
                <p className="text-gray-500 text-sm">{stat.count}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Patient Stories" title="What Our Patients Say" subtitle="Every review represents a life touched, a family relieved, and hope restored." />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.id} className="card p-6 relative flex flex-col">
                <Quote className="absolute top-4 right-4 w-8 h-8 text-teal-100" />
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: t.rating }).map((_, s) => (
                    <Star key={s} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <div className="inline-block bg-teal-50 text-teal-700 text-xs font-semibold px-2.5 py-1 rounded-full mb-3 w-fit">
                  {t.treatment}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-5 flex-1">
                  &ldquo;{t.review}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    width={44}
                    height={44}
                    className="w-11 h-11 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                    <p className="text-xs text-gray-500">{t.location} · {t.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}

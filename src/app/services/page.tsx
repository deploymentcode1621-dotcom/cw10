import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, AlertCircle } from "lucide-react";
import { services } from "@/data/services";
import SectionHeader from "@/components/ui/SectionHeader";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Explore all medical services at Ashwini Neuro Care Center — Neurology, Neurosurgery, Spine Surgery, Trauma Care, ICU, CT Scan, MRI and more.",
};

export default function ServicesPage() {
  return (
    <div>
     <section className="relative py-10 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Heading */}
    <div className="text-center mb-4">
      <span className="text-teal-600 font-semibold uppercase tracking-[0.3em] text-sm">
        OUR SPECIALIZED SERVICES
      </span>

      <h1 className="mt-3 text-4xl md:text-5xl font-bold text-slate-900">
        Comprehensive Neuro Care
      </h1>

      <p className="mt-3 text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
        Advanced Neurology, Neurosurgery, Stroke Management, Spine Care,
        Critical Care, and Diagnostic Services delivered by experienced
        specialists using state-of-the-art technology.
      </p>
    </div>

    {/* Brain Image */}
    <div className="flex justify-center -mt-2">
      <Image
        src="/images/brain.png"
        alt="Comprehensive Neuro Care"
        width={700}
        height={450}
        priority
        className="w-full max-w-[450px] lg:max-w-[550px] h-auto object-contain"
      />
    </div>
  </div>
</section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="What We Offer" title="Full-Spectrum Neuro Care" subtitle="From diagnosis to surgery to rehabilitation — we cover every aspect of your neurological health." />

          <div className="space-y-16">
            {services.map((service, i) => (
              <div key={service.id} id={service.slug} className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="relative">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={600}
                      height={400}
                      className="rounded-2xl shadow-lg w-full object-cover h-72"
                    />
                    {service.isEmergency && (
                      <div className="absolute top-4 left-4 badge-emergency">
                        <AlertCircle className="w-3.5 h-3.5" /> 24/7 Emergency
                      </div>
                    )}
                  </div>
                </div>
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">Service</span>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-1 mb-3">{service.title}</h2>
                  <p className="text-gray-600 leading-relaxed mb-5">{service.fullDescription}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                    {service.features.map((f) => (
                      <div key={f} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{f}</span>
                      </div>
                    ))}
                  </div>
                  <Link href="/appointment" className="btn-primary">Book a Consultation</Link>
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

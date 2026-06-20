import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, AlertCircle } from "lucide-react";

import { services } from "@/data/services";
import SectionHeader from "@/components/ui/SectionHeader";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore our specialized departments including Neurology, Neurosurgery, Spine Surgery, ICU, Trauma Care, MRI, CT Scan and more.",
};

export default function ServicesPage() {
  return (
    <div>

      {/* =======================================================
                          HERO SECTION
      ======================================================== */}

      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 pt-12 md:pt-16 pb-10 md:pb-20">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Heading */}

          <div className="text-center max-w-4xl mx-auto mb-8 md:mb-14">

            <span className="text-teal-600 font-semibold uppercase tracking-[0.25em] text-[11px] sm:text-sm">
              OUR SPECIALIZED SERVICES
            </span>

            <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              Comprehensive
              <br className="sm:hidden" />
              {" "}Neuro Care
            </h1>

            <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed px-3">
              Choose a department to explore detailed treatments,
              specialists, advanced technology, and patient-focused care.
            </p>

          </div>

          {/* Brain Image */}

          <div className="relative flex justify-center items-center">

            {/* Glow */}

            <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
              <div className="w-[280px] h-[280px] sm:w-[450px] sm:h-[450px] md:w-[650px] md:h-[650px] rounded-full bg-teal-300/20 blur-[90px]" />
            </div>

            {/* Brain */}

            <Image
              src="/images/brain.png"
              alt="Brain"
              width={900}
              height={700}
              priority
              className="relative z-10 w-[82%] sm:w-[70%] md:w-[60%] lg:w-[50%] h-auto object-contain"
            />
                        {/* ================= LABELS ================= */}

            {/* MRI */}
            <Link
              href="/services/mri-scan"
              className="absolute top-[18%] left-[2%] sm:left-[4%] bg-white px-2 py-1 sm:px-4 sm:py-2 rounded-full border shadow-lg text-[10px] sm:text-sm font-medium whitespace-nowrap hover:scale-105 hover:bg-teal-50 transition-all duration-300"
            >
              MRI
            </Link>

            {/* CT Scan */}
            <Link
              href="/services/ct-scan"
              className="absolute top-[44%] left-0 sm:left-[2%] bg-white px-2 py-1 sm:px-4 sm:py-2 rounded-full border shadow-lg text-[10px] sm:text-sm font-medium whitespace-nowrap hover:scale-105 hover:bg-teal-50 transition-all duration-300"
            >
              CT Scan
            </Link>

            {/* Spine Surgery */}
            <Link
              href="/services/spine-surgery"
              className="absolute bottom-[18%] left-[2%] sm:left-[6%] bg-white px-2 py-1 sm:px-4 sm:py-2 rounded-full border shadow-lg text-[10px] sm:text-sm font-medium whitespace-nowrap hover:scale-105 hover:bg-teal-50 transition-all duration-300"
            >
              Spine Care
            </Link>

            {/* Neurology */}
            <Link
              href="/services/neurology"
              className="absolute top-[6%] left-[14%] sm:left-[18%] bg-white px-2 py-1 sm:px-4 sm:py-2 rounded-full border shadow-lg text-[10px] sm:text-sm font-medium whitespace-nowrap hover:scale-105 hover:bg-teal-50 transition-all duration-300"
            >
              Neurology
            </Link>

            {/* Neurosurgery */}
            <Link
              href="/services/neurosurgery"
              className="absolute top-[6%] right-[14%] sm:right-[18%] bg-white px-2 py-1 sm:px-4 sm:py-2 rounded-full border shadow-lg text-[10px] sm:text-sm font-medium whitespace-nowrap hover:scale-105 hover:bg-teal-50 transition-all duration-300"
            >
              Neurosurgery
            </Link>

            {/* Emergency Care */}
            <Link
              href="/services/emergency-care"
              className="absolute top-[40%] right-0 sm:right-[3%] bg-white px-2 py-1 sm:px-4 sm:py-2 rounded-full border shadow-lg text-[10px] sm:text-sm font-medium whitespace-nowrap hover:scale-105 hover:bg-teal-50 transition-all duration-300"
            >
              Emergency
            </Link>

            {/* ICU */}
            <Link
              href="/services/icu-care"
              className="absolute bottom-[18%] right-[3%] sm:right-[10%] bg-white px-2 py-1 sm:px-4 sm:py-2 rounded-full border shadow-lg text-[10px] sm:text-sm font-medium whitespace-nowrap hover:scale-105 hover:bg-teal-50 transition-all duration-300"
            >
              ICU Care
            </Link>

            {/* Trauma */}
            <Link
              href="/services/trauma-care"
              className="absolute bottom-[4%] left-1/2 -translate-x-1/2 bg-white px-2 py-1 sm:px-4 sm:py-2 rounded-full border shadow-lg text-[10px] sm:text-sm font-medium whitespace-nowrap hover:scale-105 hover:bg-teal-50 transition-all duration-300"
            >
              Trauma Care
            </Link>

          </div>

        </div>

      </section>
            {/* =======================================================
                    DEPARTMENT DIRECTORY
      ======================================================== */}

      <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <SectionHeader
            eyebrow="Choose Your Department"
            title="Explore Our Medical Specialties"
            subtitle="Select a department to learn more about our expert doctors, advanced treatments, and patient-centered care."
          />

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">

            {services.map((service) => (

              <Link
                key={service.id}
                href={`/services/${service.slug}`}
                className="group block"
              >

                <article className="h-full overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

                  {/* Image */}

                  <div className="relative overflow-hidden">

                    <Image
                      src={service.image}
                      alt={service.title}
                      width={600}
                      height={400}
                      className="h-60 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    {service.isEmergency && (
                      <div className="absolute top-4 left-4 flex items-center gap-2 rounded-full bg-red-600 px-3 py-1.5 text-xs font-semibold text-white shadow-lg">
                        <AlertCircle className="h-4 w-4" />
                        24/7 Emergency
                      </div>
                    )}

                  </div>

                  {/* Content */}

                  <div className="p-7 flex flex-col h-[240px]">

                    <span className="inline-flex w-fit rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-teal-700">
                      Medical Department
                    </span>

                    <h3 className="mt-5 text-2xl font-bold text-slate-900 group-hover:text-teal-600 transition-colors">
                      {service.title}
                    </h3>

                    <p className="mt-4 text-gray-600 leading-7 line-clamp-4 flex-grow">
                      {service.shortDescription}
                    </p>

                    <div className="mt-8 flex items-center justify-between">

                      <span className="font-semibold text-teal-600">
                        Explore Service
                      </span>

                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-600 text-white transition-transform duration-300 group-hover:translate-x-1">

                        <ArrowRight className="h-5 w-5" />

                      </div>

                    </div>

                  </div>

                </article>

              </Link>

            ))}

          </div>

        </div>

      </section>
            {/* =======================================================
                          CTA SECTION
      ======================================================== */}

      <CTASection />

    </div>
  );
}
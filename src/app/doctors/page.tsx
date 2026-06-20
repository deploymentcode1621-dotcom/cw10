import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  Clock,
  Award,
  Brain,
} from "lucide-react";

import { doctors } from "@/data/doctors";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Our Doctors",
  description:
    "Meet the expert medical team at Ashwini Neuro Care Center.",
};

const expertise = [
  {
    title: "Stroke Treatment",
    description:
      "Advanced diagnosis, emergency stroke management and rehabilitation.",
  },
  {
    title: "Brain Surgery",
    description:
      "Complex cranial surgeries using modern neurosurgical techniques.",
  },
  {
    title: "Spine Surgery",
    description:
      "Minimally invasive and advanced spinal procedures.",
  },
  {
    title: "Epilepsy Care",
    description:
      "Comprehensive seizure evaluation and treatment.",
  },
  {
    title: "Migraine & Headache",
    description:
      "Personalized treatment for chronic headaches and migraines.",
  },
  {
    title: "Vertigo",
    description:
      "Accurate diagnosis and treatment of dizziness disorders.",
  },
  {
    title: "Neuro Trauma",
    description:
      "Emergency care for brain and spinal injuries.",
  },
  {
    title: "Critical Care",
    description:
      "Specialized neuro-critical care and ICU support.",
  },
];
export default function DoctorsPage() {
  return (
    <div>
     <section className="relative overflow-hidden min-h-[720px] md:h-[95vh] flex items-center">

  {/* Background Image */}
  <Image
    src="/images/doctors.jpeg"
    alt="Ashwini Neuro Care Center Doctors"
    fill
    priority
    className="object-cover object-center scale-105"
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/55" />

  {/* Gradient */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60" />

  {/* Content */}
  <div className="relative z-10 w-full">
    <div className="max-w-6xl mx-auto px-5 md:px-6 text-center">

      {/* Badge */}
      <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 backdrop-blur-xl px-4 py-2 md:px-6 md:py-3 text-xs md:text-sm font-medium text-white mb-6 md:mb-8">
        Trusted Neurology & Neurosurgery Specialists
      </span>

      {/* Heading */}
      <h1
        className="
          mx-auto
          max-w-5xl
          text-4xl
          sm:text-5xl
          md:text-7xl
          font-black
          leading-[1.1]
          tracking-tight
          text-white
          drop-shadow-[0_5px_25px_rgba(0,0,0,0.6)]
        "
      >
        Meet The Experts Behind

        <span className="block mt-2 text-teal-200">
          Ashwini Neuro Care Center
        </span>
      </h1>

      {/* Description */}
      <p
        className="
          mt-6
          md:mt-8
          mx-auto
          max-w-3xl
          text-base
          md:text-xl
          leading-7
          md:leading-9
          text-gray-100
        "
      >
        Serving Latur and surrounding regions with advanced
        neurology, neurosurgery, stroke management,
        trauma care and critical care services.
      </p>

      {/* Stats */}
      <div className="mt-10 md:mt-16 grid grid-cols-2 md:flex md:flex-wrap justify-center gap-4 md:gap-8 max-w-xl mx-auto md:max-w-none">

        <div className="rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl py-5 px-4 md:w-44 shadow-2xl">
          <h3 className="text-3xl md:text-5xl font-bold text-white">
            14+
          </h3>

          <p className="mt-2 text-xs md:text-sm text-gray-200">
            Years Experience
          </p>
        </div>

        <div className="rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl py-5 px-4 md:w-44 shadow-2xl">
          <h3 className="text-3xl md:text-5xl font-bold text-white">
            24/7
          </h3>

          <p className="mt-2 text-xs md:text-sm text-gray-200">
            Emergency Care
          </p>
        </div>

        <div className="col-span-2 md:col-span-1 rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl py-5 px-4 md:w-44 shadow-2xl">
          <h3 className="text-3xl md:text-5xl font-bold text-white">
            5000+
          </h3>

          <p className="mt-2 text-xs md:text-sm text-gray-200">
            Patients Treated
          </p>
        </div>

      </div>

    </div>
  </div>

</section>

      {/* Doctors */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {[doctors[1], doctors[0]].map((doctor, index) => (
            <div
              key={doctor.id}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index !== doctors.length - 1 ? "mb-32" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  width={600}
                  height={700}
                  className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
                />
              </div>

              <div>
                <span className="inline-flex px-4 py-2 rounded-full bg-teal-100 text-teal-700 font-semibold text-sm mb-4">
                  {doctor.specialization}
                </span>

                <h2 className="text-4xl font-bold text-gray-900 mb-2">
                  {doctor.name}
                </h2>

                <p className="text-xl text-teal-600 font-semibold mb-4">
                  {doctor.designation}
                </p>

                <p className="text-gray-500 mb-6">
                  {doctor.qualification}
                </p>

                <p className="text-gray-700 leading-relaxed mb-8">
                  {doctor.bio}
                </p>
                {doctor.name === "Dr. Sudhir Fattepurkar" && (
  <div className="bg-teal-50 border border-teal-100 rounded-3xl p-6 mb-8">
    <h3 className="font-bold text-teal-700 mb-4">
      Key Areas of Expertise
    </h3>

    <div className="grid grid-cols-2 gap-3 text-sm">
      <div>✓ Brain Tumor Surgery</div>
      <div>✓ Spine Surgery</div>
      <div>✓ Neuro Trauma Care</div>
      <div>✓ Stroke Management</div>
      <div>✓ Emergency Neurosurgery</div>
      <div>✓ Critical Neuro Care</div>
    </div>
  </div>
)}

                <div className="grid grid-cols-3 gap-4 mb-8">

  <div className="bg-gray-50 rounded-2xl p-5">
    <h4 className="font-semibold text-sm">
      Experience
    </h4>

    <p className="text-teal-600 font-bold mt-2">
      {doctor.experience}+ Years
    </p>
  </div>

  <div className="bg-gray-50 rounded-2xl p-5">
    <h4 className="font-semibold text-sm">
      Specialty
    </h4>

    <p className="text-teal-600 font-bold mt-2">
      {doctor.specialization}
    </p>
  </div>

  <div className="bg-gray-50 rounded-2xl p-5">
    <h4 className="font-semibold text-sm">
      Availability
    </h4>

    <p className="text-teal-600 font-bold mt-2">
      Mon - Sat
    </p>
  </div>

</div>

                <Link
                  href="/appointment"
                  className="btn-primary"
                >
                  <Calendar className="w-4 h-4" />
                  Book Appointment
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
            {/* Expertise */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Areas of Expertise
            </h2>

            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive neurological and neurosurgical care under one roof.
            </p>
          </div>

         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
  {expertise.map((item) => (
    <div
      key={item.title}
      className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
    >
      <Brain className="w-10 h-10 text-teal-600 mb-5" />

      <h3 className="text-xl font-bold text-gray-900 mb-3">
        {item.title}
      </h3>

      <p className="text-gray-600 leading-relaxed">
        {item.description}
      </p>
    </div>
  ))}
</div>
        </div>
      </section>
      {/* <section className="py-20 bg-white">
  <div className="max-w-6xl mx-auto px-4">

    <div className="text-center mb-14">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">
        Why Patients Trust Us
      </h2>

      <p className="text-gray-600 max-w-2xl mx-auto">
        Combining experience, technology and compassionate care for
        neurological and neurosurgical excellence.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

      <div className="bg-teal-50 rounded-3xl p-8">
        <h3 className="font-bold text-lg mb-2">
          14+ Years Experience
        </h3>
        <p className="text-gray-600">
          Dedicated neurological and neurosurgical care.
        </p>
      </div>

      <div className="bg-teal-50 rounded-3xl p-8">
        <h3 className="font-bold text-lg mb-2">
          5000+ Patients
        </h3>
        <p className="text-gray-600">
          Trusted by patients across the region.
        </p>
      </div>

      <div className="bg-teal-50 rounded-3xl p-8">
        <h3 className="font-bold text-lg mb-2">
          24/7 Emergency
        </h3>
        <p className="text-gray-600">
          Round-the-clock trauma and emergency support.
        </p>
      </div>

      <div className="bg-teal-50 rounded-3xl p-8">
        <h3 className="font-bold text-lg mb-2">
          Modern Facilities
        </h3>
        <p className="text-gray-600">
          MRI, CT Scan, ICU and advanced diagnostics.
        </p>
      </div>

    </div>
  </div>
</section> */}

      {/* Why Choose Ashwini Neuro Care */}
<section className="py-24 bg-slate-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <div className="text-center mb-16">
      <span className="inline-flex items-center px-4 py-2 rounded-full bg-teal-100 text-teal-700 font-medium text-sm mb-4">
        Why Choose Us
      </span>

      <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
        Why Patients Trust Ashwini Neuro Care
      </h2>

      <p className="text-slate-600 text-lg max-w-3xl mx-auto leading-relaxed">
        Combining experienced specialists, modern facilities and
        compassionate care to provide comprehensive neurological
        and neurosurgical treatment under one roof.
      </p>
    </div>

    {/* Stats */}
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-14">

      <div className="bg-white rounded-3xl p-8 text-center shadow-lg border border-slate-100 hover:-translate-y-2 transition-all">
        <h3 className="text-5xl font-bold text-teal-600 mb-3">
          5000+
        </h3>
        <p className="text-slate-600 font-medium">
          Patients Treated
        </p>
      </div>

      <div className="bg-white rounded-3xl p-8 text-center shadow-lg border border-slate-100 hover:-translate-y-2 transition-all">
        <h3 className="text-5xl font-bold text-teal-600 mb-3">
          14+
        </h3>
        <p className="text-slate-600 font-medium">
          Years Experience
        </p>
      </div>

      <div className="bg-white rounded-3xl p-8 text-center shadow-lg border border-slate-100 hover:-translate-y-2 transition-all">
        <h3 className="text-5xl font-bold text-teal-600 mb-3">
          24/7
        </h3>
        <p className="text-slate-600 font-medium">
          Emergency Care
        </p>
      </div>

      <div className="bg-white rounded-3xl p-8 text-center shadow-lg border border-slate-100 hover:-translate-y-2 transition-all">
        <h3 className="text-5xl font-bold text-teal-600 mb-3">
          MRI
        </h3>
        <p className="text-slate-600 font-medium">
          CT & Diagnostics
        </p>
      </div>

    </div>

    {/* Trust Features */}
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

      <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100">
        <h4 className="font-bold text-slate-900 text-lg mb-3">
          Expert Specialists
        </h4>
        <p className="text-slate-600">
          Dedicated neurology and neurosurgery consultants with extensive clinical expertise.
        </p>
      </div>

      <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100">
        <h4 className="font-bold text-slate-900 text-lg mb-3">
          Stroke & Trauma Care
        </h4>
        <p className="text-slate-600">
          Rapid diagnosis and treatment for neurological emergencies and accidents.
        </p>
      </div>

      <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100">
        <h4 className="font-bold text-slate-900 text-lg mb-3">
          Modern Technology
        </h4>
        <p className="text-slate-600">
          Advanced MRI, CT Scan and neuro diagnostic facilities for accurate care.
        </p>
      </div>

      <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100">
        <h4 className="font-bold text-slate-900 text-lg mb-3">
          Patient-Centered Care
        </h4>
        <p className="text-slate-600">
          Compassionate treatment focused on recovery, safety and long-term wellbeing.
        </p>
      </div>

    </div>

  </div>
</section>

      <CTASection />
    </div>
  );
}
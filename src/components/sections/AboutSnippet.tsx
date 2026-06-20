"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";

const highlights = [
  "First dedicated Neuro Care Centre in Latur",
  "3 Tesla MRI & 128-slice CT available 24/7",
  "Level-II Trauma Centre designation",
  "NABH accredited quality standards",
  "20+ years of neurological excellence",
  "Compassionate, patient-centred care",
];

export default function AboutSnippet() {
  return (
  <section className="bg-white py-12 lg:py-20">
     <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-16 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            <Image
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=900&h=700&fit=crop"
              alt="Ashwini Neuro Care Center"
              width={900}
              height={700}
              priority
              className="w-full h-[320px] md:h-[420px] lg:h-[480px] object-cover rounded-3xl shadow-2xl"
            />

            {/* Experience Card */}
           <div className="absolute bottom-4 right-4 hidden lg:block">
  <div className="animate-glow rounded-3xl bg-teal-600 px-8 py-6 text-white shadow-2xl">
    <p className="text-5xl font-bold leading-none">20+</p>
    <p className="mt-2 text-sm uppercase tracking-wide text-teal-100">
      Years of Excellence
    </p>
  </div>
</div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-teal-600">
              About Us
            </span>

           <h2 className="mb-6 text-3xl md:text-4xl xl:text-5xl font-bold leading-tight text-gray-900">
  Marathwada&apos;s Most Trusted Neuro Care Hospital
</h2>

<p className="mb-4 text-base lg:text-lg leading-7 text-gray-600">
  Established in 2005, Ashwini Accident & Neuro Care Center has
  been the cornerstone of neurological healthcare for Latur and
  the entire Marathwada region. Our hospital combines cutting-edge
  technology with compassionate, patient-centred care.
</p>

<p className="mb-6 text-base lg:text-lg leading-7 text-gray-600">
  From managing acute strokes and traumatic brain injuries to
  performing complex neurosurgical procedures, our multidisciplinary
  team of experts is committed to delivering world-class outcomes
  close to home.
</p>

           

            {/* Highlights */}
            <div className="mb-2 grid gap-3 sm:grid-cols-2">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-xl p-2 transition-colors hover:bg-teal-50"
                >
                  <CheckCircle className="mt-0.5 h-6 w-6 flex-shrink-0 text-teal-500" />

                  <span className="leading-relaxed text-gray-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-3 rounded-full bg-teal-600 px-7 py-3.5 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-teal-700 hover:shadow-xl"
            >
              Learn More About Us
              <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
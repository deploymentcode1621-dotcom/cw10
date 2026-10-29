"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";

// ─── VERIFIED FACTS — keep only what the hospital can prove with documents ───
const FACTS = {
  legalName: "Ashwini Accident & Neuro Care Center",
  established: 2005,
  // Show a line only if the document is in hand. Delete the rest.
  highlights: [
    "Established in 2005 in Latur",
    "3 Tesla MRI and 128-slice CT scan facilities", // confirm equipment + availability
    "CT scan available 24×7", // confirm
    // Add these ONLY after you have the documents (never leave placeholders):
    // "NABH accredited · Cert. No. <real number> · valid till <real date>",
    // "Level-II trauma centre designation by <issuing authority>",
    "Registered medical practitioners in every department", // confirm it is true for all departments
  ],
};

export default function AboutSnippet() {
  return (
    <section className="relative bg-gradient-to-b from-white to-teal-50/40 py-14 lg:py-24 overflow-hidden">
      <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-teal-100/50 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-14 lg:gap-20 items-center">
          {/* Image — use a REAL photo of the building / equipment (no patients) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            <Image
              src="/images/hospital-building.jpg"
              alt={`${FACTS.legalName}, Latur — hospital building`}
              width={900}
              height={700}
              priority
              className="w-full h-[320px] md:h-[420px] lg:h-[500px] object-cover rounded-3xl shadow-2xl"
            />

            {/* Factual badge — "Since", not "Excellence" */}
            <div className="absolute -bottom-5 right-4 lg:right-6">
              <div className="rounded-3xl bg-teal-600 px-6 py-4 lg:px-8 lg:py-6 text-white shadow-2xl">
                <p className="text-xs uppercase tracking-widest text-teal-100">Established</p>
                <p className="text-4xl lg:text-5xl font-bold leading-none mt-1">{FACTS.established}</p>
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
            <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
              About Us
            </span>

            <h2 className="mb-6 text-3xl md:text-4xl xl:text-5xl font-bold leading-tight text-gray-900">
              Neurology, Spine &amp; Trauma Care in Latur
            </h2>

            <p className="mb-4 text-base lg:text-lg leading-7 text-gray-600">
              {FACTS.legalName} was established in {FACTS.established} in Latur, Maharashtra. The hospital provides
              diagnosis and treatment services for neurological conditions, spine disorders and accident-related
              injuries.
            </p>

            <p className="mb-7 text-base lg:text-lg leading-7 text-gray-600">
              Services include the evaluation and management of stroke and head injuries, neurosurgical procedures and
              imaging support, delivered by a team of qualified, registered medical practitioners.
            </p>

            <div className="mb-8 grid gap-2 sm:grid-cols-2">
              {FACTS.highlights.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-xl p-2 transition-colors hover:bg-teal-50">
                  <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-teal-600" />
                  <span className="leading-relaxed text-gray-700 text-[15px]">{item}</span>
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
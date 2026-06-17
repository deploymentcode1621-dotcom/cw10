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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <Image
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=700&h=500&fit=crop"
              alt="Ashwini Neuro Care Center"
              width={700}
              height={500}
              className="rounded-2xl shadow-xl w-full object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-teal-600 text-white rounded-2xl p-5 shadow-xl hidden sm:block">
              <p className="text-4xl font-bold">20+</p>
              <p className="text-teal-200 text-sm">Years of Excellence</p>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">About Us</span>
            <h2 className="section-title mt-2 mb-4">
              Marathwada&apos;s Most Trusted Neuro Care Hospital
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Established in 2005, Ashwini Accident & Neuro Care Center has been the cornerstone of neurological healthcare for Latur and the entire Marathwada region. Our hospital combines cutting-edge technology with compassionate, patient-centred care.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              From managing acute strokes and traumatic brain injuries to performing complex neurosurgical procedures, our multidisciplinary team of experts is committed to delivering world-class outcomes close to home.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>

            <Link href="/about" className="btn-primary">
              Learn More About Us <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

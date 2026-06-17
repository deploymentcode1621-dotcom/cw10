"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";
import { doctors } from "@/data/doctors";

export default function DoctorsSection() {
  const featured = [doctors[1], doctors[0]]; // Dr. Sudhir first

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-teal-100 text-teal-700 font-semibold text-sm">
            Our Team
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4">
            Meet Our Expert Doctors
          </h2>

          <p className="max-w-3xl mx-auto text-slate-600 mt-5 text-lg">
            Experienced neurology and neurosurgery specialists committed to
            providing advanced treatment, precision care and compassionate care.
          </p>
        </motion.div>

        {/* Doctors Showcase */}
        <div className="space-y-24">
          {featured.map((doctor, index) => (
            <motion.div
              key={doctor.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className={`grid lg:grid-cols-2 gap-14 items-center ${
                index === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* Doctor Image */}
              <div className="relative">
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  width={700}
                  height={700}
                  className="w-full h-[550px] object-cover rounded-[32px] shadow-2xl"
                />

                <div className="absolute top-6 right-6 bg-white rounded-2xl px-5 py-3 shadow-xl">
                  <p className="text-base font-bold text-teal-700">
                    {doctor.experience}+ Years
                  </p>
                </div>
              </div>

              {/* Doctor Content */}
              <div>
                <span className="inline-flex px-4 py-2 rounded-full bg-teal-100 text-teal-700 font-semibold text-sm mb-4">
                  Expert Specialist
                </span>

                <h3 className="text-4xl font-bold text-slate-900 mb-2">
                  {doctor.name}
                </h3>

                <p className="text-xl text-teal-600 font-semibold mb-2">
                  {doctor.specialization}
                </p>

                <p className="text-slate-500 font-medium mb-4">
                  {doctor.designation}
                </p>

                <p className="text-slate-500 mb-5">
                  {doctor.qualification}
                </p>

                <p className="text-slate-700 leading-relaxed mb-8">
                  {doctor.bio}
                </p>

                {/* Expertise */}
                <div className="flex flex-wrap gap-2 mb-8">
                  <span className="px-3 py-1 bg-teal-50 text-teal-700 rounded-full text-sm">
                    Stroke Care
                  </span>

                  <span className="px-3 py-1 bg-teal-50 text-teal-700 rounded-full text-sm">
                    Neurosurgery
                  </span>

                  <span className="px-3 py-1 bg-teal-50 text-teal-700 rounded-full text-sm">
                    Critical Care
                  </span>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
                    <p className="text-sm text-slate-500">
                      Experience
                    </p>

                    <p className="font-bold text-teal-600 mt-2">
                      {doctor.experience}+ Years
                    </p>
                  </div>

                  <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
                    <p className="text-sm text-slate-500">
                      Patients
                    </p>

                    <p className="font-bold text-teal-600 mt-2">
                      5000+
                    </p>
                  </div>

                  <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
                    <p className="text-sm text-slate-500">
                      Availability
                    </p>

                    <p className="font-bold text-teal-600 mt-2">
                      Mon - Sat
                    </p>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/appointment"
                    className="btn-primary"
                  >
                    <Calendar className="w-4 h-4" />
                    Book Appointment
                  </Link>

                  <Link
                    href="/doctors"
                    className="btn-secondary"
                  >
                    View Profile
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Button */}
        <div className="text-center mt-20">
          <Link
            href="/doctors"
            className="inline-flex items-center gap-2 text-teal-600 font-semibold hover:text-teal-700"
          >
            View All Doctors
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

      </div>
    </section>
  );
}
"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, UserRound } from "lucide-react";
import { doctors } from "@/data/doctors";

type DirectoryDoctor = (typeof doctors)[number] & {
  registrationNumber?: string;
  registrationCouncil?: string;
};

export default function DoctorsSection() {
  const reduceMotion = useReducedMotion();

  // Display Dr. Sudhir first, followed by Dr. Ashwini.
  const featured: DirectoryDoctor[] = [
    doctors[1],
    doctors[0],
  ].filter(
    (doctor): doctor is (typeof doctors)[number] => Boolean(doctor),
  );

  return (
    <section
      aria-labelledby="doctors-heading"
      className="bg-gradient-to-b from-slate-50 via-white to-slate-50 py-16 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full bg-teal-50 px-4 py-2 text-sm font-semibold text-teal-800">
            Doctor Directory
          </span>

          <h2
            id="doctors-heading"
            className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
          >
            Our Doctors
          </h2>

          <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
            Information about the doctors practising at the hospital,
            their qualifications and clinical specialties.
          </p>
        </motion.div>

        {/* Doctor profiles */}
        <div className="space-y-8 sm:space-y-12">
          {featured.map((doctor, index) => (
            <motion.article
              key={doctor.id}
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: reduceMotion ? 0 : 0.4,
              }}
              className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
            >
              <div className="grid lg:grid-cols-5">
                {/* Identification portrait */}
                <div
                  className={`relative bg-slate-100 lg:col-span-2 ${
                    index % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  {doctor.image ? (
                    <Image
                      src={doctor.image}
                      alt={`Portrait of ${doctor.name}`}
                      width={700}
                      height={800}
                      sizes="(max-width: 1023px) 100vw, 40vw"
                      className="h-[360px] w-full object-cover object-top sm:h-[460px] lg:h-full lg:min-h-[520px]"
                    />
                  ) : (
                    <div className="flex min-h-[360px] items-center justify-center lg:h-full">
                      <UserRound
                        aria-hidden="true"
                        className="h-24 w-24 text-slate-400"
                      />
                    </div>
                  )}
                </div>

                {/* Profile information */}
                <div className="flex flex-col p-6 sm:p-8 lg:col-span-3 lg:p-10">
                  <div>
                    <p className="mb-3 text-sm font-semibold text-teal-800">
                      {doctor.specialization}
                    </p>

                    <h3 className="break-words text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                      {doctor.name}
                    </h3>

                    {doctor.designation && (
                      <p className="mt-3 text-base font-medium text-slate-600">
                        {doctor.designation}
                      </p>
                    )}
                  </div>

                  <dl className="mt-6 divide-y divide-slate-100 border-y border-slate-100">
                    <div className="py-4">
                      <dt className="text-sm text-slate-500">
                        Qualifications
                      </dt>

                      <dd className="mt-1 font-medium leading-relaxed text-slate-800">
                        {doctor.qualification}
                      </dd>
                    </div>

                    {doctor.registrationNumber && (
                      <div className="py-4">
                        <dt className="text-sm text-slate-500">
                          Medical registration number
                        </dt>

                        <dd className="mt-1 break-words font-medium text-slate-800">
                          {doctor.registrationNumber}
                        </dd>
                      </div>
                    )}

                    {doctor.registrationCouncil && (
                      <div className="py-4">
                        <dt className="text-sm text-slate-500">
                          Registering medical council
                        </dt>

                        <dd className="mt-1 font-medium text-slate-800">
                          {doctor.registrationCouncil}
                        </dd>
                      </div>
                    )}
                  </dl>

                  {/* Use the revised factual bios in data/doctors.ts */}
                  {doctor.bio && (
                    <p className="mt-6 text-base leading-relaxed text-slate-700">
                      {doctor.bio}
                    </p>
                  )}

                  <div className="mt-auto pt-8">
                    <p className="mb-5 text-sm leading-relaxed text-slate-600">
                      Contact the hospital to confirm consultation
                      timings and appointment availability.
                    </p>

                    <Link
                      href="/appointment"
                      aria-label={`Appointment enquiry for ${doctor.name}`}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-teal-700 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-teal-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-700 sm:w-auto"
                    >
                      <Calendar
                        aria-hidden="true"
                        className="h-4 w-4"
                      />
                      Appointment Enquiry
                    </Link>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Directory link */}
        <div className="mt-12 text-center">
          <Link
            href="/doctors"
            className="inline-flex items-center gap-2 rounded-md font-semibold text-teal-800 transition-colors hover:text-teal-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-700"
          >
            View Doctor Directory
            <ArrowRight aria-hidden="true" className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
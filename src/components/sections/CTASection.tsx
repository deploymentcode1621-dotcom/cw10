"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Calendar,
  Clock,
  ClipboardList,
  Stethoscope,
} from "lucide-react";

const informationCards = [
  {
    icon: Stethoscope,
    title: "Doctor Information",
    description:
      "View doctor profiles, qualifications and clinical specialties.",
    href: "/doctors",
    linkLabel: "Doctor Directory",
  },
  {
    icon: Clock,
    title: "Consultation Arrangements",
    description:
      "Contact the hospital to confirm consultation timings, availability and fees.",
    href: "/contact",
    linkLabel: "Contact Information",
  },
  {
    icon: ClipboardList,
    title: "Departments & Facilities",
    description:
      "Read service information and enquire about facility availability and preparation requirements.",
    href: "/services",
    linkLabel: "View Services",
  },
];

export default function CTASection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="consultation-cta-heading"
      className="relative overflow-hidden bg-gradient-to-r from-teal-800 via-teal-900 to-cyan-800 py-16 sm:py-24"
    >
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute left-0 top-10 h-72 w-72 rounded-full bg-white/5 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-300/10 blur-3xl" />

        <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full border border-white/10" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: reduceMotion ? 0 : 0.4 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="mb-6 inline-flex rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-medium tracking-wide text-teal-100 sm:text-sm">
            Patient &amp; Visitor Information
          </span>

          <h2
            id="consultation-cta-heading"
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl"
          >
            Planning a Hospital Visit?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-teal-100 sm:text-lg">
            Find information about our doctors, listed services and
            consultation arrangements. Contact the hospital to
            confirm details before your visit.
          </p>
        </motion.div>

        {/* Information cards */}
        <div className="mb-10 mt-12 grid gap-5 md:grid-cols-3">
          {informationCards.map((card, index) => (
            <motion.article
              key={card.title}
              initial={
                reduceMotion ? false : { opacity: 0, y: 20 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: reduceMotion ? 0 : 0.35,
                delay: reduceMotion ? 0 : index * 0.08,
              }}
              className="flex flex-col rounded-3xl border border-white/15 bg-white/[0.07] p-6 backdrop-blur-sm sm:p-7"
            >
              <div className="mb-6 inline-flex w-fit rounded-2xl border border-white/15 bg-white/10 p-3.5">
                <card.icon
                  aria-hidden="true"
                  strokeWidth={1.6}
                  className="h-7 w-7 text-teal-100"
                />
              </div>

              <h3 className="text-lg font-semibold text-white">
                {card.title}
              </h3>

              <p className="mb-6 mt-3 text-sm leading-7 text-teal-100">
                {card.description}
              </p>

              <Link
                href={card.href}
                className="mt-auto inline-flex items-center gap-2 rounded-md text-sm font-semibold text-white hover:text-teal-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                {card.linkLabel}
                <ArrowRight
                  aria-hidden="true"
                  className="h-4 w-4"
                />
              </Link>
            </motion.article>
          ))}
        </div>

        {/* Actions */}
        <div className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
          <Link
            href="/appointment"
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-7 py-4 text-sm font-semibold text-teal-900 transition-colors hover:bg-teal-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            <Calendar aria-hidden="true" className="h-5 w-5" />
            Appointment Enquiry
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/30 px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            Contact the Hospital
            <ArrowRight
              aria-hidden="true"
              className="h-4 w-4"
            />
          </Link>
        </div>

        {/* Emergency guidance */}
        <p className="mx-auto mt-8 max-w-2xl text-center text-xs leading-6 text-teal-100">
          In a medical emergency, seek immediate medical assistance.
          Do not wait for an online enquiry response.
        </p>
      </div>
    </section>
  );
}
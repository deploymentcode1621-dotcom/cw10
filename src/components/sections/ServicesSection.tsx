"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  Activity,
  AlertCircle,
  Ambulance,
  ArrowRight,
  Brain,
  Heart,
  Scan,
  Stethoscope,
  Zap,
  type LucideIcon,
} from "lucide-react";

import { services } from "@/data/services";

const iconMap: Record<string, LucideIcon> = {
  Brain,
  Stethoscope,
  Activity,
  AlertCircle,
  Ambulance,
  Heart,
  Scan,
  Zap,
};

const palettes = [
  {
    background: "from-teal-50 to-emerald-100/70",
    icon: "text-teal-800",
    border: "group-hover:border-teal-300",
    accent: "bg-teal-600",
  },
  {
    background: "from-blue-50 to-sky-100/80",
    icon: "text-blue-800",
    border: "group-hover:border-blue-300",
    accent: "bg-blue-600",
  },
  {
    background: "from-violet-50 to-purple-100/70",
    icon: "text-violet-800",
    border: "group-hover:border-violet-300",
    accent: "bg-violet-600",
  },
  {
    background: "from-orange-50 to-amber-100/80",
    icon: "text-orange-800",
    border: "group-hover:border-orange-300",
    accent: "bg-orange-600",
  },
  {
    background: "from-rose-50 to-red-100/70",
    icon: "text-rose-800",
    border: "group-hover:border-rose-300",
    accent: "bg-rose-600",
  },
  {
    background: "from-cyan-50 to-teal-100/80",
    icon: "text-cyan-800",
    border: "group-hover:border-cyan-300",
    accent: "bg-cyan-600",
  },
  {
    background: "from-indigo-50 to-blue-100/70",
    icon: "text-indigo-800",
    border: "group-hover:border-indigo-300",
    accent: "bg-indigo-600",
  },
  {
    background: "from-fuchsia-50 to-purple-100/70",
    icon: "text-fuchsia-800",
    border: "group-hover:border-fuchsia-300",
    accent: "bg-fuchsia-600",
  },
];

const focusClass =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-700";

export default function ServicesSection() {
  const reduceMotion = useReducedMotion();

  if (services.length === 0) return null;

  return (
    <section
      aria-labelledby="clinical-services-heading"
      className="relative overflow-hidden bg-slate-50 py-16 sm:py-20 lg:py-24"
    >
      {/* Subtle background detail */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-0 h-96 w-96 rounded-full bg-teal-100/40 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: reduceMotion ? 0 : 0.4 }}
          className="mb-10 flex flex-col justify-between gap-6 sm:mb-12 lg:flex-row lg:items-end lg:gap-10"
        >
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-teal-800">
              <span
                aria-hidden="true"
                className="h-px w-8 bg-teal-600"
              />
              Departments &amp; Services
            </p>

            <h2
              id="clinical-services-heading"
              className="mt-4 text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
            >
              Our Clinical
              <span className="text-teal-800"> Services</span>
            </h2>

            <p className="mt-5 max-w-xl text-base leading-8 text-slate-600">
              Browse clinical departments and diagnostic services.
              Find information to help you discuss your care
              and plan a hospital visit.
            </p>
          </div>

          <Link
            href="/services"
            className={`group inline-flex w-fit shrink-0 items-center gap-3 rounded-xl border border-slate-200 bg-white px-5 py-3.5 text-sm font-semibold text-teal-800 transition-colors hover:border-teal-300 hover:bg-teal-50 ${focusClass}`}
          >
            View All Services
            <ArrowRight
              aria-hidden="true"
              className="h-4 w-4 transition-transform group-hover:translate-x-1 motion-reduce:transform-none motion-reduce:transition-none"
            />
          </Link>
        </motion.div>

        {/* Service cards */}
        <div className="grid auto-rows-fr grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] ?? Brain;
            const palette = palettes[index % palettes.length];

            return (
              <motion.article
                key={service.id}
                initial={
                  reduceMotion ? false : { opacity: 0, y: 20 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: reduceMotion ? 0 : 0.35,
                  delay: reduceMotion ? 0 : (index % 3) * 0.06,
                }}
                className="h-full"
              >
                <Link
                  href={`/services/${service.slug}`}
                  aria-label={`Read about ${service.title}`}
                  className={`group flex h-full flex-col rounded-[1.75rem] border border-slate-200 bg-white shadow-sm transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_-25px_rgba(15,23,42,0.3)] motion-reduce:transform-none motion-reduce:transition-none ${focusClass}`}
                >
                  {/* Pastel illustration panel */}
                  <div
                    className={`relative m-3 flex h-44 shrink-0 items-center justify-center overflow-hidden rounded-[1.2rem] bg-gradient-to-br sm:h-48 ${palette.background}`}
                  >
                    <span
                      aria-hidden="true"
                      className="absolute left-5 top-4 text-[10px] font-semibold tracking-[0.18em] text-slate-500"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div
                      aria-hidden="true"
                      className="absolute -right-7 -top-9 h-36 w-36 rounded-full border-[18px] border-white/50"
                    />

                    <div
                      aria-hidden="true"
                      className="absolute -bottom-12 -left-8 h-32 w-32 rounded-full border border-white/70"
                    />

                    <div
                      aria-hidden="true"
                      className={`relative flex h-24 w-24 items-center justify-center rounded-[1.75rem] border border-white bg-white/75 shadow-sm transition-transform duration-300 group-hover:scale-105 motion-reduce:transform-none motion-reduce:transition-none ${palette.icon}`}
                    >
                      <Icon
                        strokeWidth={1.35}
                        className="h-12 w-12"
                      />
                    </div>

                    <span
                      aria-hidden="true"
                      className={`absolute bottom-4 right-5 h-1.5 w-8 rounded-full ${palette.accent}`}
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col px-6 pb-6 pt-3 sm:px-7 sm:pb-7">
                    <h3 className="text-xl font-bold tracking-tight text-slate-900 transition-colors group-hover:text-teal-800 sm:text-2xl">
                      {service.title}
                    </h3>

                    <p className="mb-7 mt-3 text-sm leading-7 text-slate-600">
                      {service.shortDescription}
                    </p>

                    <div className="mt-auto flex items-center justify-between gap-4 border-t border-slate-100 pt-5">
                      <span className="text-sm font-semibold text-teal-800">
                        Service Information
                      </span>

                      <span
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition-colors group-hover:bg-slate-50 ${palette.border}`}
                      >
                        <ArrowRight
                          aria-hidden="true"
                          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 motion-reduce:transform-none motion-reduce:transition-none"
                        />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            );
          })}
        </div>

        {/* Information footer */}
        <div className="mt-8 flex flex-col justify-between gap-4 rounded-2xl border border-slate-200 bg-white/80 px-5 py-5 sm:px-6 md:flex-row md:items-center">
          <p className="max-w-2xl text-sm leading-7 text-slate-600">
            Please confirm service availability, consultation timings
            and applicable fees with the hospital before your visit.
          </p>

          <Link
            href="/contact"
            className={`inline-flex w-fit shrink-0 items-center gap-2 rounded-md text-sm font-semibold text-teal-800 ${focusClass}`}
          >
            Contact Information
            <ArrowRight
              aria-hidden="true"
              className="h-4 w-4"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
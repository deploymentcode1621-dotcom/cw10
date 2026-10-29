"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import { CalendarDays, Siren, Building2, UserCheck, ScanLine, ShieldCheck } from "lucide-react";

// ─── Only FACTUAL, verifiable items. Any item with show:false is hidden. ─────
// NMC: no patient counts, surgery counts, satisfaction %, or "excellence/expert" wording.
// Set show:true ONLY after the hospital confirms with documents.
type Stat = {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  show: boolean;
  count?: { end: number; prefix?: string; suffix?: string }; // animated number
  text?: string; // static text instead of a number
};

const statsData: Stat[] = [
  { icon: CalendarDays, text: "Since 2005", label: "Serving Latur", show: true },
  { icon: Siren, text: "24×7", label: "Emergency Services", show: true }, // confirm 24×7 is true
  { icon: Building2, count: { end: 4 }, label: "Clinical Departments", show: true }, // Neuro, Neurosurgery, Spine, Trauma
  { icon: UserCheck, count: { end: 0 }, label: "Registered Doctors", show: false }, // set real number, then show:true
  { icon: ScanLine, text: "3T MRI", label: "& 128-slice CT", show: true }, // confirm equipment
  { icon: ShieldCheck, text: "NABH", label: "Accredited (Cert. No. XXXX)", show: false }, // fill certificate, then show:true
];

export default function StatsSection() {
  const items = statsData.filter((s) => s.show);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-teal-800 via-teal-700 to-emerald-700 py-16">
      <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/5 blur-2xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-cyan-300/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-10 lg:gap-x-16">
          {items.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="text-center w-[44%] sm:w-[30%] lg:w-auto lg:min-w-[150px]"
              >
                <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/15 backdrop-blur-sm">
                  <Icon className="h-6 w-6 text-cyan-200" />
                </div>

                <p className="text-3xl font-bold text-white">
                  {stat.count ? (
                    <CountUp
                      start={0}
                      end={stat.count.end}
                      duration={2.5}
                      prefix={stat.count.prefix}
                      suffix={stat.count.suffix}
                    />
                  ) : (
                    stat.text
                  )}
                </p>

                <p className="mt-1 text-sm text-teal-50/90">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>

        <p className="mt-10 text-center text-xs text-teal-100/70">
          Information as per hospital records. Last updated: October 2026.
        </p>
      </div>
    </section>
  );
}
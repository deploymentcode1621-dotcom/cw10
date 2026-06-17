"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import {
  Users,
  Stethoscope,
  Award,
  Heart,
  Clock,
  UserCheck,
} from "lucide-react";

const icons: Record<string, React.ComponentType<{ className?: string }>> = {
  Users,
  Stethoscope,
  Award,
  Heart,
  Clock,
  UserCheck,
};

const statsData = [
  { value: 15000, suffix: "+", label: "Patients Treated", icon: "Users" },
  { value: 4500, suffix: "+", label: "Surgeries Performed", icon: "Stethoscope" },
  { value: 20, suffix: "+", label: "Years of Excellence", icon: "Award" },
  { value: 98, suffix: "%", label: "Patient Satisfaction", icon: "Heart" },
  { value: 24, suffix: "/7", label: "Emergency Services", icon: "Clock" },
  { value: 50, suffix: "+", label: "Expert Medical Staff", icon: "UserCheck" },
];

export default function StatsSection() {
  return (
    <section className="py-16 bg-teal-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {statsData.map((stat, i) => {
            const Icon = icons[stat.icon];

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="text-center"
              >
                <div className="w-12 h-12 bg-white/15 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Icon className="w-6 h-6 text-cyan-300" />
                </div>

                <p className="text-3xl font-bold text-white">
                  <CountUp
                    start={0}
                    end={stat.value}
                    duration={2.5}
                    suffix={stat.suffix}
                  />
                </p>

                <p className="text-teal-200 text-sm mt-1">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
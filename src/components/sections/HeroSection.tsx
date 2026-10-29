"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Phone, Calendar, Shield, MapPin, Clock, Stethoscope, ArrowRight } from "lucide-react";

// ─── FACTS — fill with VERIFIED details from the hospital (documents in hand) ─
// NMC rule: only factual, verifiable information. Remove any line you can't prove.
const FACTS = {
  legalName: "Ashwini Accident & Neuro Care Center", // use the exact registered name everywhere
  city: "Latur, Maharashtra",
  emergencyPhone: "+91XXXXXXXXXX", // REAL number (currently a placeholder)
  emergency24x7: true, // set true ONLY if the hospital really runs 24x7 emergency
  nabhCertNo: "", // e.g. "H-2024-XXXX"; leave empty to hide the NABH chip
  nabhValidTill: "", // e.g. "Dec 2027"
  departments: ["Neurology", "Neurosurgery", "Spine Care", "Trauma & Accident Care"], // confirm with hospital
  opdTimings: "Mon–Sat, 9:00 AM – 7:00 PM", // confirm
  address: "Full street address, Latur 413512", // confirm
};

// ─── Factual info chip ───────────────────────────────────────────────────────
function InfoChip({ icon: Icon, label, delay }: { icon: React.ElementType; label: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.45, ease: "easeOut" }}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/20 bg-black/30 backdrop-blur-md text-white/90 text-xs font-medium tracking-wide"
    >
      <Icon size={12} className="text-teal-300" />
      {label}
    </motion.div>
  );
}

// ─── Morphing headline — neutral, descriptive (no outcome/superiority claims) ─
const headlines = [
  { accent: "Neurology", rest: "Care." },
  { accent: "Spine", rest: "Care." },
  { accent: "Trauma", rest: "Care." },
];

function MorphingHeadline() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % headlines.length), 2800);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="overflow-hidden h-[1.15em]" aria-live="off">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ y: 44, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -44, opacity: 0 }}
          transition={{ duration: 0.52, ease: [0.22, 1, 0.36, 1] }}
          className="flex gap-3 items-baseline"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-emerald-300">
            {headlines[index].accent}
          </span>
          <span className="text-white">{headlines[index].rest}</span>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

// ─── Main Hero ───────────────────────────────────────────────────────────────
export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);

  return (
    <section ref={containerRef} className="relative min-h-screen w-full overflow-hidden flex items-center bg-[#02080e]">
      {/* Video — oversized upward so parallax never exposes a black band */}
      <motion.div className="absolute inset-x-0 -top-1/4 h-[125%] z-0" style={{ y: videoY }}>
        <video
          src="/images/ashwini_video1.mp4"
          poster="/images/ashwini_video1_poster.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Overlays */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            "linear-gradient(105deg, rgba(2,8,14,0.90) 0%, rgba(2,8,14,0.75) 40%, rgba(2,8,14,0.35) 65%, rgba(2,8,14,0.10) 100%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 z-[2] h-40 pointer-events-none"
        style={{ background: "linear-gradient(to top, rgba(2,8,14,0.90) 0%, transparent 100%)" }}
      />

      {/* Teal accent bar */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ delay: 0.4, duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-0 top-0 bottom-0 w-[3px] z-10 origin-top pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent 0%, #0d9488 30%, #10b981 70%, transparent 100%)" }}
      />

      {/* Content */}
      <motion.div style={{ y: contentY }} className="relative z-10 w-full max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-20 xl:px-28 pt-12 pb-28">
        <div className="max-w-4xl">
          {/* Factual chips only */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }} className="flex flex-wrap gap-2 mb-6">
            {FACTS.nabhCertNo && (
              <InfoChip
                icon={Shield}
                label={`NABH Accredited · Cert. ${FACTS.nabhCertNo}${FACTS.nabhValidTill ? ` · valid till ${FACTS.nabhValidTill}` : ""}`}
                delay={0.3}
              />
            )}
            {FACTS.emergency24x7 && <InfoChip icon={Clock} label="24×7 Emergency Services" delay={0.4} />}
            <InfoChip icon={MapPin} label={FACTS.city} delay={0.5} />
          </motion.div>

          {/* Eyebrow — lighter colour for contrast */}
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.45 }}
            className="text-rose-300 text-[11px] sm:text-xs uppercase tracking-[0.24em] font-semibold mb-5"
          >
            {FACTS.legalName} · {FACTS.city}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="text-[clamp(2.6rem,7vw,5.2rem)] font-extrabold leading-[1.08] tracking-tight"
          >
            <MorphingHeadline />
            <span className="block text-white/90">Services in Latur.</span>
          </motion.h1>

          {/* Factual subtext — no superlatives, no outcome promises */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.92, duration: 0.5 }}
            className="mt-6 text-white/80 text-base sm:text-[17px] leading-relaxed max-w-xl font-light"
          >
            Diagnosis and treatment services in neurology, spine care and trauma care, delivered by qualified, registered
            medical practitioners.
          </motion.p>

          {/* CTAs */}
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.08, duration: 0.5 }} className="flex flex-wrap gap-3 mt-8">
            <motion.a
              href="#appointment"
              whileHover={{ scale: 1.04, boxShadow: "0 0 28px rgba(13,148,136,0.50)" }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-semibold text-sm tracking-wide shadow-lg shadow-teal-900/30"
            >
              <Calendar size={15} />
              Book Appointment
              <ArrowRight size={13} className="opacity-70" />
            </motion.a>

            <motion.a
              href={`tel:${FACTS.emergencyPhone}`}
              whileHover={{ scale: 1.04, boxShadow: "0 0 24px rgba(220,38,38,0.40)" }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full border border-red-400/60 bg-red-600/15 backdrop-blur-sm text-white font-semibold text-sm tracking-wide hover:bg-red-600/25 transition-colors"
            >
              <motion.span animate={{ scale: [1, 1.3, 1], opacity: [1, 0.5, 1] }} transition={{ duration: 1.1, repeat: Infinity }}>
                <Phone size={14} className="text-red-300" />
              </motion.span>
              Emergency Call
            </motion.a>
          </motion.div>
        </div>
      </motion.div>

      {/* Factual info strip — departments, OPD timings, address */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3, duration: 0.6 }}
        className="absolute bottom-0 inset-x-0 z-20 border-t border-white/10 bg-black/45 backdrop-blur-md"
      >
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-20 xl:px-28 py-4 grid gap-3 sm:grid-cols-3 text-white/85 text-xs sm:text-sm">
          <div className="flex items-start gap-2">
            <Stethoscope size={16} className="text-teal-300 mt-0.5 shrink-0" />
            <span>{FACTS.departments.join(" · ")}</span>
          </div>
          <div className="flex items-start gap-2">
            <Clock size={16} className="text-teal-300 mt-0.5 shrink-0" />
            <span>OPD: {FACTS.opdTimings}</span>
          </div>
          <div className="flex items-start gap-2">
            <MapPin size={16} className="text-teal-300 mt-0.5 shrink-0" />
            <span>{FACTS.address}</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
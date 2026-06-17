"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Phone, Calendar, Shield, Award, Star, Activity, Clock, ArrowRight, Zap, ChevronDown } from "lucide-react";

// ─── Animated Heartbeat SVG ──────────────────────────────────────────────────
function HeartbeatLine() {
  return (
    <svg viewBox="0 0 300 60" className="w-full h-full" preserveAspectRatio="none" aria-hidden="true">
      <motion.polyline
        points="0,30 40,30 55,10 65,50 75,20 85,40 95,30 140,30 155,5 165,55 175,15 185,45 195,30 300,30"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 2.2, ease: "easeInOut", repeat: Infinity, repeatDelay: 1.8 }}
      />
    </svg>
  );
}

// ─── Trust Chip ──────────────────────────────────────────────────────────────
function TrustChip({ icon: Icon, label, delay }: { icon: React.ElementType; label: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.45, ease: "easeOut" }}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/15 bg-black/20 backdrop-blur-md text-white/80 text-xs font-medium tracking-wide"
    >
      <Icon size={11} className="text-teal-400" />
      {label}
    </motion.div>
  );
}

// ─── Morphing Headline ───────────────────────────────────────────────────────
const headlines = [
  { accent: "Advanced", rest: "Neurocare." },
  { accent: "Faster", rest: "Recovery." },
  { accent: "Better", rest: "Lives." },
];

function MorphingHeadline() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % headlines.length), 2800);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="overflow-hidden h-[1.15em]">
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
    <section
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden flex items-center bg-black"
    >
      {/* ── Video — full bleed, parallax ── */}
      <motion.div className="absolute inset-0 z-0" style={{ y: videoY }}>
        <video
          src="/images/ashwini_video.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover scale-[1.08]"
        />
      </motion.div>

      {/* ── Overlay system — minimal, surgical ── */}
      {/*  Left-side fade so text is legible without killing the right video */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            "linear-gradient(105deg, rgba(2,8,14,0.88) 0%, rgba(2,8,14,0.72) 38%, rgba(2,8,14,0.30) 62%, rgba(2,8,14,0.08) 100%)",
        }}
      />
      {/* Subtle bottom vignette only */}
      <div
        className="absolute bottom-0 left-0 right-0 z-[2] h-32 pointer-events-none"
        style={{ background: "linear-gradient(to top, rgba(2,8,14,0.80) 0%, transparent 100%)" }}
      />
      {/* Very subtle top */}
      <div
        className="absolute top-0 left-0 right-0 z-[2] h-20 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, rgba(2,8,14,0.55) 0%, transparent 100%)" }}
      />

      {/* ── NO glow blobs — they muddy the video. Clean. ── */}

      {/* ── Thin teal left accent bar ── */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ delay: 0.4, duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-0 top-0 bottom-0 w-[3px] z-10 origin-top pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent 0%, #0d9488 30%, #10b981 70%, transparent 100%)",
        }}
      />

      

      

      {/* ── Scroll indicator ──
      <motion.div
        className="absolute bottom-7 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 text-white/30"
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-[9px] uppercase tracking-[0.2em] font-medium">Scroll</span>
        <ChevronDown size={14} />
      </motion.div> */}

      {/* ── Main content ── */}
      <motion.div
  style={{ y: contentY }}
className="relative z-10 w-full max-w-[1600px] mx-auto px-8 lg:px-20 xl:px-28 pt-12 pb-12"
>
  <div className="max-w-4xl -mt-12 lg:-mt-20">

          {/* Trust chips */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
            className="flex flex-wrap gap-2 mb-6"
          >
            <TrustChip icon={Shield} label="NABH Accredited" delay={0.3} />
            <TrustChip icon={Star} label="4.9 / 5 Rating" delay={0.4} />
            <TrustChip icon={Award} label="Best Neuro Hospital 2024" delay={0.5} />
            <TrustChip icon={Zap} label="Latur's #1 Neuro Centre" delay={0.6} />
          </motion.div>

          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.45 }}
            className="text-teal-400/70 text-[11px] sm:text-xs uppercase tracking-[0.24em] font-semibold mb-5"
          >
            Ashwini Accident &amp; Neuro Care Center · Latur, Maharashtra
          </motion.p>

          {/* Morphing H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="text-[clamp(2.8rem,7vw,5.2rem)] font-extrabold leading-[1.08] tracking-tight"
          >
            <MorphingHeadline />
          </motion.h1>

          {/* Static supporting headline */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.78, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="text-[clamp(2.8rem,7vw,5.2rem)] font-extrabold leading-[1.08] tracking-tight text-white/85 mb-6"
          >
            Every Second Matters.
          </motion.p>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.92, duration: 0.5 }}
            className="text-white/50 text-base sm:text-[17px] leading-relaxed max-w-md font-light"
          >
            Maharashtra's most trusted centre for neurology, spine care, and critical
            trauma — where world-class expertise meets compassionate, round-the-clock care.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.08, duration: 0.5 }}
            className="flex flex-wrap gap-3 mt-8"
          >
            <motion.a
              href="#appointment"
              whileHover={{ scale: 1.04, boxShadow: "0 0 28px rgba(13,148,136,0.50)" }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 320, damping: 22 }}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-semibold text-sm tracking-wide shadow-lg shadow-teal-900/30"
            >
              <Calendar size={15} />
              Book Appointment
              <ArrowRight size={13} className="opacity-70" />
            </motion.a>

            <motion.a
              href="tel:+918888800000"
              whileHover={{ scale: 1.04, boxShadow: "0 0 24px rgba(220,38,38,0.40)" }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 320, damping: 22 }}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full border border-red-500/50 bg-red-600/10 backdrop-blur-sm text-white font-semibold text-sm tracking-wide hover:bg-red-600/20 hover:border-red-400/70 transition-colors"
            >
              <motion.span
                animate={{ scale: [1, 1.3, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 1.1, repeat: Infinity }}
              >
                <Phone size={14} className="text-red-400" />
              </motion.span>
              Emergency Call
            </motion.a>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}
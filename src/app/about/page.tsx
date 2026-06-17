"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { CheckCircle, Award, Users, Heart, Shield, ArrowRight, ChevronRight } from "lucide-react";
import CTASection from "@/components/sections/CTASection";

// ── Animated Counter ──────────────────────────────────────────────────────────
function AnimatedCounter({ target, suffix = "", duration = 2000 }: { target: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const animate = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const ease = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(ease * target));
            if (progress < 1) requestAnimationFrame(animate);
            else setCount(target);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

// ── Fade-in on scroll ─────────────────────────────────────────────────────────
function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

// ── Data ──────────────────────────────────────────────────────────────────────
const values = [
  { icon: Heart, title: "Compassionate Care", desc: "Every patient is treated with empathy, respect, and dignity throughout their healthcare journey.", accent: "#10B981" },
  { icon: Shield, title: "Clinical Excellence", desc: "Our protocols follow national and international guidelines for the safest, most effective treatments.", accent: "#F59E0B" },
  { icon: Users, title: "Patient-Centred", desc: "Every decision is made with the patient's best interest at heart, involving families in the process.", accent: "#3B82F6" },
  { icon: Award, title: "Innovation", desc: "We invest in the latest medical technology and training to deliver cutting-edge neurological care.", accent: "#EC4899" },
];

const milestones = [
  { year: "2005", event: "Founded as Latur's first dedicated Neuro Care Centre", icon: "🏥" },
  { year: "2008", event: "Opened 20-bed Neuro-ICU with advanced monitoring", icon: "🧠" },
  { year: "2012", event: "Installed first 3T MRI in Marathwada region", icon: "🔬" },
  { year: "2015", event: "Received Level-II Trauma Centre designation", icon: "🏆" },
  { year: "2018", event: "Achieved NABH accreditation for quality standards", icon: "✅" },
  { year: "2020", event: "Launched robotic-assisted spine surgery program", icon: "🤖" },
  { year: "2022", event: "Crossed 10,000 successful neurological procedures", icon: "🎯" },
  { year: "2024", event: "Expanded to 150-bed capacity with new OPD block", icon: "🌟" },
];

const stats = [
  { value: 15000, suffix: "+", label: "Patients Treated", sub: "Since 2005" },
  { value: 4500, suffix: "+", label: "Surgeries Performed", sub: "Complex procedures" },
  { value: 20, suffix: "+", label: "Years of Excellence", sub: "Trusted care" },
  { value: 98, suffix: "%", label: "Patient Satisfaction", sub: "Consistently high" },
];

const accreditations = [
  "NABH Accredited Hospital",
  "Level-II Trauma Centre",
  "ISO 9001:2015 Certified",
  "State Medical Excellence Award 2023",
];

// ── Page ──────────────────────────────────────────────────────────────────────
export default function AboutPage() {
  const timelineRef = useRef<HTMLDivElement>(null);

  return (
    <div className="overflow-x-hidden">
      {/* ── HERO ────────────────────────────────────────────────────────────── */}
      <section
        className="relative min-h-[520px] flex items-center justify-center overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0F4C5C 0%, #0d3d4a 40%, #0a2d38 100%)" }}
      >
        {/* Geometric mesh background */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, #10B981 0%, transparent 50%), radial-gradient(circle at 80% 20%, #F59E0B 0%, transparent 40%)`,
        }} />
        {/* Grid lines */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }} />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-6"
            style={{ background: "rgba(16,185,129,0.15)", border: "1px solid rgba(16,185,129,0.4)", color: "#6ee7b7" }}
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Serving Marathwada since 2005
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Two Decades of<br />
            <span style={{ color: "#34d399" }}>Saving Lives</span>
          </h1>
          <p className="text-lg text-teal-200 max-w-2xl mx-auto leading-relaxed">
            From a 20-bed facility to Marathwada's most advanced neurological hospital —
            our journey is measured in lives transformed.
          </p>

          {/* Quick stat pills */}
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            {[["15,000+", "Patients"], ["4,500+", "Surgeries"], ["150", "Beds"], ["24/7", "Emergency"]].map(([val, label]) => (
              <div key={label} className="px-5 py-2.5 rounded-xl text-center"
                style={{ background: "rgba(255,255,255,0.08)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.12)" }}>
                <div className="text-xl font-bold text-white">{val}</div>
                <div className="text-xs text-teal-300">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Wave bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 60L1440 60L1440 20C1200 60 900 0 720 20C540 40 240 0 0 20L0 60Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ── STORY ───────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <FadeIn>
              <div className="inline-block px-3 py-1 text-xs font-semibold tracking-widest uppercase rounded-full mb-4"
                style={{ background: "#ecfdf5", color: "#059669" }}>
                Our Story
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight" style={{ color: "#0F4C5C" }}>
                Born from a Region's<br />Unmet Need
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Ashwini Accident & Neuro Care Center was founded in 2005 by Dr. Rajesh Kulkarni with a singular mission: to bring world-class neurological care to the people of Latur and the broader Marathwada region, eliminating the need for patients to travel to Pune, Mumbai, or Hyderabad for critical brain and spine treatments.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Over the past 20 years, we have grown from a small 20-bed facility into a 150-bed tertiary care hospital with dedicated departments for Neurology, Neurosurgery, Spine Surgery, Trauma Care, and Critical Care — all under one roof.
              </p>

              {/* Accreditation list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {accreditations.map((item) => (
                  <div key={item} className="flex items-center gap-3 p-3 rounded-xl"
                    style={{ background: "#f0fdf4", border: "1px solid #bbf7d0" }}>
                    <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: "#10B981" }} />
                    <span className="text-sm font-medium" style={{ color: "#065f46" }}>{item}</span>
                  </div>
                ))}
              </div>
            </FadeIn>

            {/* Image with floating badges */}
            <FadeIn delay={150} className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1559757175-5700dde675bc?w=700&h=520&fit=crop"
                  alt="Ashwini Neuro Care Center"
                  width={700}
                  height={520}
                  className="w-full object-cover"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0" style={{
                  background: "linear-gradient(to top, rgba(15,76,92,0.6) 0%, transparent 60%)"
                }} />
              </div>

              {/* Floating badge — top left */}
              <div className="absolute -top-5 -left-5 rounded-2xl px-5 py-4 shadow-xl"
                style={{ background: "#0F4C5C", color: "white" }}>
                <div className="text-3xl font-black">20<span style={{ color: "#34d399" }}>+</span></div>
                <div className="text-xs text-teal-200 mt-0.5">Years of Trust</div>
              </div>

              {/* Floating badge — bottom right */}
              <div className="absolute -bottom-5 -right-5 rounded-2xl px-5 py-4 shadow-xl"
                style={{ background: "#F59E0B", color: "white" }}>
                <div className="text-3xl font-black">98<span>%</span></div>
                <div className="text-xs font-medium mt-0.5" style={{ color: "#78350f" }}>Satisfaction Rate</div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── STATS BAND ──────────────────────────────────────────────────────── */}
      <section className="py-20" style={{ background: "linear-gradient(135deg, #0F4C5C 0%, #0d3d4a 100%)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px" style={{ background: "rgba(255,255,255,0.1)" }}>
            {stats.map((s, i) => (
              <FadeIn key={i} delay={i * 100}>
                <div className="flex flex-col items-center justify-center py-12 px-6 text-center"
                  style={{ background: "linear-gradient(135deg, #0F4C5C, #0d3d4a)" }}>
                  <div className="text-5xl md:text-6xl font-black text-white mb-2">
                    <AnimatedCounter target={s.value} suffix={s.suffix} />
                  </div>
                  <div className="text-lg font-semibold" style={{ color: "#34d399" }}>{s.label}</div>
                  <div className="text-sm mt-1" style={{ color: "#5eead4" }}>{s.sub}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALUES ──────────────────────────────────────────────────────────── */}
      <section className="py-24" style={{ background: "#F8FAFC" }}>
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <div className="inline-block px-3 py-1 text-xs font-semibold tracking-widest uppercase rounded-full mb-4"
              style={{ background: "#ecfdf5", color: "#059669" }}>
              Our Values
            </div>
            <h2 className="text-4xl md:text-5xl font-bold" style={{ color: "#0F4C5C" }}>What Drives Us Every Day</h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto">
              Our core values guide every decision, every procedure, and every patient interaction.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <FadeIn key={i} delay={i * 100}>
                <div
                  className="group relative rounded-2xl p-7 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-default"
                  style={{ background: "white", border: "1px solid #e2e8f0" }}
                >
                  {/* Accent bar */}
                  <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl transition-all duration-300"
                    style={{ background: v.accent }} />

                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: `${v.accent}18` }}>
                    <v.icon className="w-7 h-7" style={{ color: v.accent }} />
                  </div>

                  <h3 className="text-lg font-bold mb-2" style={{ color: "#0F4C5C" }}>{v.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIMELINE (ZIG-ZAG ARROW FLOW) ─────────────────────────────────── */}
<section
  className="py-24 overflow-hidden relative"
  style={{ background: "#0F4C5C" }}
>
  <div className="max-w-7xl mx-auto px-6">
    <FadeIn className="text-center mb-20">
      <div
        className="inline-block px-3 py-1 text-xs font-semibold tracking-widest uppercase rounded-full mb-4"
        style={{
          background: "rgba(16,185,129,0.15)",
          border: "1px solid rgba(16,185,129,0.3)",
          color: "#6ee7b7",
        }}
      >
        Our Journey
      </div>

      <h2 className="text-4xl md:text-5xl font-bold text-white">
        Milestones That Define Us
      </h2>

      <p className="mt-4" style={{ color: "#5eead4" }}>
        Key moments in our 20-year journey of excellence.
      </p>
    </FadeIn>

    <div className="max-w-5xl mx-auto">
      {milestones.map((m, i) => (
        <FadeIn key={i} delay={i * 100}>
          <div className="relative mb-14">
            {/* Timeline Card */}
            <div
              className={`relative w-full md:w-[420px] rounded-3xl p-6 transition-all duration-500 hover:-translate-y-2 ${
                i % 2 === 0 ? "mr-auto" : "ml-auto"
              }`}
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
                backdropFilter: "blur(12px)",
              }}
            >
              {/* Background Year */}
              <div
                className="absolute top-3 right-4 text-7xl font-black select-none"
                style={{
                  color: "rgba(255,255,255,0.05)",
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {m.year}
              </div>

              {/* Icon */}
              <div className="text-4xl mb-4 relative z-10">
                {m.icon}
              </div>

              {/* Year */}
              <div
                className="text-xl font-bold mb-3 relative z-10"
                style={{ color: "#34d399" }}
              >
                {m.year}
              </div>

              {/* Event */}
              <p
                className="text-sm leading-relaxed relative z-10"
                style={{ color: "#94a3b8" }}
              >
                {m.event}
              </p>
            </div>

            {/* Curved Arrow Connector */}
            {i < milestones.length - 1 && (
              <div
                className={`absolute hidden lg:block ${
                  i % 2 === 0
                    ? "left-[360px] top-[120px]"
                    : "right-[360px] top-[120px]"
                }`}
              >
                <svg
                  width="180"
                  height="140"
                  viewBox="0 0 180 140"
                  fill="none"
                >
                  <defs>
                    <marker
                      id={`arrow-${i}`}
                      markerWidth="10"
                      markerHeight="10"
                      refX="8"
                      refY="3"
                      orient="auto"
                    >
                      <path
                        d="M0,0 L0,6 L8,3 z"
                        fill="#10B981"
                      />
                    </marker>
                  </defs>

                  {i % 2 === 0 ? (
                    <path
                      d="M10 20 C120 20 60 120 170 120"
                      stroke="#10B981"
                      strokeWidth="2.5"
                      strokeDasharray="8 6"
                      fill="none"
                      markerEnd={`url(#arrow-${i})`}
                    />
                  ) : (
                    <path
                      d="M170 20 C60 20 120 120 10 120"
                      stroke="#10B981"
                      strokeWidth="2.5"
                      strokeDasharray="8 6"
                      fill="none"
                      markerEnd={`url(#arrow-${i})`}
                    />
                  )}
                </svg>
              </div>
            )}
          </div>
        </FadeIn>
      ))}
    </div>
  </div>
</section>

      {/* ── MISSION / VISION SPLIT ──────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <FadeIn>
              <div className="rounded-3xl p-10 h-full flex flex-col justify-between"
                style={{ background: "linear-gradient(135deg, #ecfdf5, #d1fae5)", border: "1px solid #a7f3d0" }}>
                <div>
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6"
                    style={{ background: "#10B981" }}>
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4" style={{ color: "#065f46" }}>Our Mission</h3>
                  <p className="text-gray-600 leading-relaxed">
                    To deliver world-class neurological and trauma care that is accessible to every person in Marathwada — combining clinical excellence with genuine compassion, so no patient has to leave the region for life-saving treatment.
                  </p>
                </div>
                <div className="mt-8 flex items-center gap-2 text-sm font-semibold" style={{ color: "#059669" }}>
                  <span>Accessible. Excellent. Compassionate.</span>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={150}>
              <div className="rounded-3xl p-10 h-full flex flex-col justify-between"
                style={{ background: "linear-gradient(135deg, #fffbeb, #fef3c7)", border: "1px solid #fde68a" }}>
                <div>
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6"
                    style={{ background: "#F59E0B" }}>
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4" style={{ color: "#78350f" }}>Our Vision</h3>
                  <p className="text-gray-600 leading-relaxed">
                    To become the most trusted neurological centre in Central India — a hospital where cutting-edge technology, research, and humanity unite to create outcomes that rival the best institutions in the world.
                  </p>
                </div>
                <div className="mt-8 flex items-center gap-2 text-sm font-semibold" style={{ color: "#d97706" }}>
                  <span>Central India's Premier Neuro Centre</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
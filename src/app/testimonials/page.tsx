import type { Metadata } from "next";
import Image from "next/image";
import { Star, Quote, ThumbsUp, Award, Users } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Patient Testimonials | Ashwini Neuro Care Center",
  description:
    "Read real patient stories and reviews from Ashwini Neuro Care Center — hear how we transformed lives.",
};

const stats = [
  { icon: Star,     value: "4.9 / 5", label: "Google Rating",        sub: "2,400+ reviews" },
  { icon: ThumbsUp, value: "98%",     label: "Patient Satisfaction",  sub: "Based on surveys" },
  { icon: Award,    value: "4.8 / 5", label: "Practo Rating",         sub: "1,800+ reviews" },
  { icon: Users,    value: "15,000+", label: "Lives Touched",         sub: "Since 2008" },
];

export default function TestimonialsPage() {
  // Split testimonials: first one is the hero/featured card, rest go in the grid
  const [featured, ...rest] = testimonials;

  return (
    <div className="bg-white">

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="relative bg-hero overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, transparent, transparent 40px, rgba(255,255,255,.08) 40px, rgba(255,255,255,.08) 41px)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <span className="inline-block text-xs font-semibold tracking-[0.18em] uppercase text-teal-200 mb-4">
            Patient Voices
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-5">
            Stories of{" "}
            <span className="text-amber-300">Recovery & Hope</span>
          </h1>
          <p className="text-teal-100 text-lg max-w-xl mx-auto">
            Behind every review is a family that walked out of our doors with relief, gratitude, and renewed strength.
          </p>
        </div>
      </section>

      {/* ── Stats strip ──────────────────────────────────────────── */}
      <div className="bg-teal-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-teal-600">
            {stats.map((s) => (
              <div key={s.label} className="flex items-start gap-3 p-6 lg:p-8">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                  <s.icon className="w-5 h-5 text-amber-300" />
                </div>
                <div>
                  <p className="text-2xl font-extrabold text-white leading-none">{s.value}</p>
                  <p className="text-teal-200 text-sm font-medium mt-0.5">{s.label}</p>
                  <p className="text-teal-400 text-xs mt-0.5">{s.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Featured testimonial ─────────────────────────────────── */}
      {featured && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative bg-white rounded-3xl border border-gray-100 shadow-xl shadow-gray-100/70 p-10 md:p-14 overflow-hidden">
              {/* Background quote mark */}
              <Quote
                aria-hidden
                className="absolute -top-4 -left-2 w-36 h-36 text-teal-50 rotate-180"
              />

              <div className="relative">
                {/* Stars */}
                <div className="flex items-center gap-1 mb-6">
                  {Array.from({ length: featured.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="ml-2 text-xs font-semibold text-amber-500 uppercase tracking-wide">
                    Featured Story
                  </span>
                </div>

                <p className="text-xl md:text-2xl font-medium text-gray-700 leading-relaxed mb-8 italic">
                  &ldquo;{featured.review}&rdquo;
                </p>

                <div className="flex items-center gap-4">
                 <div className="w-14 h-14 rounded-full bg-teal-100 flex items-center justify-center text-lg font-bold text-teal-700 ring-2 ring-teal-100">
  {featured.name.charAt(0)}
</div>
                  <div>
                    <p className="font-bold text-gray-900">{featured.name}</p>
                    <p className="text-sm text-gray-500">
                      {featured.location} &middot; {featured.date}
                    </p>
                  </div>
                  <span className="ml-auto bg-teal-50 text-teal-700 text-xs font-semibold px-3 py-1.5 rounded-full hidden sm:inline-block">
                    {featured.treatment}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── Testimonials grid ────────────────────────────────────── */}
   

      {/* ── Google CTA strip ─────────────────────────────────────── */}
      <section className="bg-white border-t border-gray-100 py-12">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-gray-500 text-sm mb-4">Had a great experience? Help other patients find us.</p>
          <a
            href="https://g.page/r/YOUR_GOOGLE_REVIEW_LINK"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold text-sm px-6 py-3 rounded-full transition-colors shadow-md shadow-teal-100"
          >
            <Star className="w-4 h-4 fill-amber-300 text-amber-300" />
            Leave a Review on Google
          </a>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
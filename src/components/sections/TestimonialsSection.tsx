"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center rounded-full bg-teal-50 px-4 py-1.5 text-sm font-semibold text-teal-700">
            Patient Stories
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-slate-900">
            What Our Patients Say
          </h2>

          <p className="mt-4 max-w-3xl mx-auto text-lg text-slate-600">
            Real experiences from patients and families who trusted
            Ashwini Accident & Neuro Care Center during critical moments.
          </p>

          <div className="mt-6 flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-5 py-2">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span className="font-semibold text-slate-800">
                Trusted by Hundreds of Patients
              </span>
            </div>
          </div>
        </motion.div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          loop={true}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
          className="pb-14"
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.id}>
              <div className="bg-white h-full rounded-3xl border border-slate-100 p-7 shadow-sm hover:shadow-xl transition-all duration-300 relative">

                <Quote className="absolute top-5 right-5 w-10 h-10 text-teal-100" />

                <div className="flex items-center gap-1 mb-5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                <p className="text-slate-600 leading-relaxed min-h-[180px]">
                  "{t.review}"
                </p>

                <div className="mt-6 pt-5 border-t border-slate-100 flex items-center gap-3">
                  
                  <div className="w-12 h-12 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold text-sm">
                    {t.name
                      .split(" ")
                      .map((word) => word[0])
                      .slice(0, 2)
                      .join("")}
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900">
                      {t.name}
                    </h4>

                    <p className="text-sm text-slate-500">
                      {t.location} • {t.treatment}
                    </p>

                    <p className="text-xs text-slate-400 mt-1">
                      {t.date}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}
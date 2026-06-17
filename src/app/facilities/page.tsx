import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { facilities } from "@/data/facilities";
import SectionHeader from "@/components/ui/SectionHeader";
import CTASection from "@/components/sections/CTASection";
import StatsSection from "@/components/sections/StatsSection";

export const metadata: Metadata = {
  title: "Our Facilities",
  description: "State-of-the-art medical facilities at Ashwini Neuro Care Center — 3T MRI, 128-slice CT, Neuro-ICU, dedicated OTs and more.",
};

export default function FacilitiesPage() {
  return (
    <div>
      <section className="bg-hero py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Facilities</h1>
          <p className="text-teal-100 text-lg max-w-2xl mx-auto">
            State-of-the-art infrastructure designed for the best possible patient outcomes.
          </p>
        </div>
      </section>

      <StatsSection />

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Infrastructure" title="World-Class Medical Facilities" subtitle="Equipped with the latest technology to support the most advanced neurological and trauma care." />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility) => (
              <div key={facility.id} className="card group overflow-hidden">
                <div className="relative overflow-hidden">
                  <Image
                    src={facility.image}
                    alt={facility.name}
                    width={600}
                    height={300}
                    className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{facility.name}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{facility.description}</p>
                  <ul className="space-y-2">
                    {facility.details.map((d) => (
                      <li key={d} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}

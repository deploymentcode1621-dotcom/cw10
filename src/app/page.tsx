import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import StatsSection from "@/components/sections/StatsSection";
import AboutSnippet from "@/components/sections/AboutSnippet";
import StrokeAwarenessSection from "@/components/sections/StrokeAwarenessSection"
import ServicesSection from "@/components/sections/ServicesSection";
import DoctorsSection from "@/components/sections/DoctorsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Ashwini Accident & Neuro Care Center | Best Hospital in Latur",
  description:
    "Ashwini Accident & Neuro Care Center — Latur's premier hospital for Neurology, Neurosurgery, Spine Surgery, Trauma & Emergency Care. 24/7 services with expert doctors.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <AboutSnippet />
      <StrokeAwarenessSection/>
      <ServicesSection />
      <DoctorsSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}

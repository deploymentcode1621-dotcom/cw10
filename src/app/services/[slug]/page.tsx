import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, ArrowLeft, ArrowRight } from "lucide-react";

import { services } from "@/data/services";
import CTASection from "@/components/sections/CTASection";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const service = services.find(
    (item) => item.slug === slug
  );

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.title} | Ashwini Neuro Care Center`,
    description: service.shortDescription,
  };
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;

  const service = services.find(
    (item) => item.slug === slug
  );

  if (!service) {
    notFound();
  }

  return (
    <div>

      {/* ==========================================
                    HERO
      ========================================== */}

      <section className="relative overflow-hidden bg-gradient-to-br from-teal-50 via-white to-slate-100 py-16 md:py-24">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(20,184,166,0.15),transparent_40%)]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-medium mb-10"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Services
          </Link>

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            <div>

              <span className="inline-flex rounded-full bg-teal-100 text-teal-700 px-4 py-2 text-sm font-semibold uppercase tracking-wider">
                Medical Department
              </span>

              <h1 className="mt-6 text-4xl md:text-6xl font-bold text-slate-900 leading-tight">
                {service.title}
              </h1>

              <p className="mt-6 text-lg text-slate-600 leading-8">
                {service.fullDescription}
              </p>

              <div className="mt-10 flex flex-wrap gap-4">

                <Link
                  href="/contact"
                  className="rounded-xl bg-teal-600 px-6 py-4 text-white font-semibold hover:bg-teal-700 transition"
                >
                  Book Appointment
                </Link>

                <Link
                  href="/doctors"
                  className="rounded-xl border border-slate-300 px-6 py-4 font-semibold hover:bg-slate-100 transition"
                >
                  Meet Our Doctors
                </Link>

              </div>

            </div>

            <div>

              <Image
                src={service.image}
                alt={service.title}
                width={700}
                height={500}
                className="rounded-3xl shadow-2xl object-cover w-full h-[420px]"
              />

            </div>

          </div>

        </div>

      </section>
            {/* ==========================================
                TREATMENTS & SERVICES
      ========================================== */}

      <section className="py-16 md:py-24 bg-white">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="max-w-3xl mx-auto text-center">

            <span className="text-teal-600 font-semibold uppercase tracking-[0.25em] text-sm">
              What We Offer
            </span>

            <h2 className="mt-4 text-3xl md:text-5xl font-bold text-slate-900">
              Treatments & Services
            </h2>

            <p className="mt-5 text-lg text-slate-600 leading-8">
              Our experienced specialists provide comprehensive diagnosis,
              treatment, surgery, rehabilitation, and long-term follow-up using
              advanced medical technology and evidence-based care.
            </p>

          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {service.features.map((feature) => (

              <div
                key={feature}
                className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >

                <div className="flex items-start gap-4">

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-100 group-hover:bg-teal-600 transition-colors">

                    <CheckCircle className="h-6 w-6 text-teal-600 group-hover:text-white transition-colors" />

                  </div>

                  <div>

                    <h3 className="text-lg font-semibold text-slate-900">
                      {feature}
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      Personalized treatment delivered by experienced specialists
                      using modern equipment and internationally accepted clinical
                      protocols.
                    </p>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ==========================================
                WHY CHOOSE US
      ========================================== */}

      <section className="bg-slate-50 py-16 md:py-24">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            <div>

              <Image
                src={service.image}
                alt={service.title}
                width={700}
                height={600}
                className="rounded-3xl object-cover w-full h-[500px] shadow-xl"
              />

            </div>

            <div>

              <span className="text-teal-600 font-semibold uppercase tracking-[0.25em] text-sm">
                Why Choose Us
              </span>

              <h2 className="mt-4 text-3xl md:text-5xl font-bold text-slate-900">
                Advanced Care with Compassion
              </h2>

              <p className="mt-6 text-lg text-slate-600 leading-8">
                At Ashwini Neuro Care Center, every patient receives
                individualized care from experienced specialists supported by
                modern diagnostics, advanced surgical technology, and
                multidisciplinary rehabilitation services.
              </p>

              <div className="mt-10 space-y-6">

                {[
                  "Experienced Neurologists & Neurosurgeons",
                  "Modern Diagnostic & Imaging Facilities",
                  "Advanced Surgical Technology",
                  "24×7 Emergency & ICU Support",
                  "Personalized Treatment Plans",
                  "Comprehensive Rehabilitation",
                ].map((item) => (

                  <div
                    key={item}
                    className="flex items-start gap-4"
                  >

                    <CheckCircle className="w-6 h-6 text-teal-600 mt-1 flex-shrink-0" />

                    <span className="text-slate-700 text-lg">
                      {item}
                    </span>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>
            {/* ==========================================
                EXPLORE OTHER SERVICES
      ========================================== */}

      <section className="py-16 bg-white border-t">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex items-center justify-between mb-10">

            <div>
              <h2 className="text-3xl font-bold text-slate-900">
                Explore Other Departments
              </h2>

              <p className="mt-2 text-slate-600">
                Discover our complete range of specialized medical services.
              </p>
            </div>

            <Link
              href="/services"
              className="hidden md:inline-flex items-center gap-2 text-teal-600 font-semibold hover:text-teal-700"
            >
              View All Services
              <ArrowRight className="w-4 h-4" />
            </Link>

          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {services
              .filter((item) => item.slug !== service.slug)
              .slice(0, 3)
              .map((item) => (

                <Link
                  key={item.id}
                  href={`/services/${item.slug}`}
                  className="group"
                >

                  <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm hover:shadow-xl transition-all duration-300">

                    <Image
                      src={item.image}
                      alt={item.title}
                      width={500}
                      height={320}
                      className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    <div className="p-6">

                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-teal-600 transition-colors">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-slate-600 leading-7 line-clamp-3">
                        {item.shortDescription}
                      </p>

                      <div className="mt-6 flex items-center text-teal-600 font-semibold">

                        Learn More

                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />

                      </div>

                    </div>

                  </div>

                </Link>

              ))}

          </div>

        </div>

      </section>

      {/* ==========================================
                  CALL TO ACTION
      ========================================== */}

      <CTASection />

    </div>
  );
}
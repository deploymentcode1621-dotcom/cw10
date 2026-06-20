"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Expand,
} from "lucide-react";

import { galleryImages } from "@/data/gallery";
import SectionHeader from "@/components/ui/SectionHeader";
import type { GalleryImage } from "@/types";

const categories = [
  "all",
  "facility",
  "equipment",
  "team",
  "ward",
] as const;

type Category = typeof categories[number];

const spanClass = {
  normal: "",
  tall: "row-span-2",
  wide: "lg:col-span-2",
  big: "lg:col-span-2 row-span-2",
};

export default function GalleryPage() {
  const [active, setActive] =
    useState<Category>("all");

  const [currentIndex, setCurrentIndex] =
    useState<number | null>(null);

  const filtered =
    active === "all"
      ? galleryImages
      : galleryImages.filter(
          (g) => g.category === active
        );

  const currentImage =
    currentIndex !== null
      ? filtered[currentIndex]
      : null;

  const nextImage = () => {
    if (currentIndex === null) return;

    setCurrentIndex(
      (currentIndex + 1) % filtered.length
    );
  };

  const prevImage = () => {
    if (currentIndex === null) return;

    setCurrentIndex(
      (currentIndex - 1 + filtered.length) %
        filtered.length
    );
  };

  return (
    <div className="bg-white">
      {/* HERO */}

      <section className="relative overflow-hidden py-32">
        <div className="absolute inset-0">
          <Image
  src="https://images.unsplash.com/photo-1516549655169-df83a0774514?w=1600&h=900&fit=crop"
  alt="MRI Scanner"
  fill
  priority
  className="object-cover"
/>

          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <span className="uppercase tracking-[0.3em] text-teal-300 text-sm font-semibold">
            Visual Journey
          </span>

          <h1 className="text-5xl md:text-7xl font-bold text-white mt-6">
            Explore Our
            <span className="block text-teal-400">
              Neurology Centre
            </span>
          </h1>

          <p className="text-gray-200 max-w-2xl mx-auto mt-6 text-lg">
            Discover our advanced facilities,
            expert neurological team and
            patient care environment through
            our visual gallery.
          </p>
        </div>
      </section>

      {/* GALLERY */}

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <SectionHeader
            eyebrow="Visual Tour"
            title="Explore Our Hospital"
            subtitle="Browse through our facilities, equipment, wards and expert team."
          />

          {/* FILTERS */}

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => {
              const count =
                cat === "all"
                  ? galleryImages.length
                  : galleryImages.filter(
                      (g) =>
                        g.category === cat
                    ).length;

              return (
                <button
                  key={cat}
                  onClick={() =>
                    setActive(cat)
                  }
                  className={`px-5 py-2.5 rounded-full text-sm font-medium capitalize transition-all ${
                    active === cat
                      ? "bg-gradient-to-r from-teal-600 to-cyan-500 text-white shadow-lg"
                      : "bg-white border border-gray-200 hover:border-teal-500"
                  }`}
                >
                  {cat}

                  <span className="ml-2 text-xs opacity-80">
                    ({count})
                  </span>
                </button>
              );
            })}
          </div>

          {/* MASONRY GRID */}

          <motion.div
            layout
            className="
              grid
              grid-cols-1
              md:grid-cols-2
              lg:grid-cols-3
              auto-rows-[250px]
              gap-5
            "
          >
            <AnimatePresence>
              {filtered.map((img, index) => (
                <motion.div
                  key={img.id}
                  layout
                  initial={{
                    opacity: 0,
                    scale: 0.95,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.95,
                  }}
                  onClick={() =>
                    setCurrentIndex(index)
                  }
                  className={`
                    relative
                    overflow-hidden
                    rounded-3xl
                    cursor-pointer
                    shadow-lg
                    group
                    ${
                      spanClass[
                        img.span || "normal"
                      ]
                    }
                  `}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-teal-600 text-white text-xs px-3 py-1 rounded-full capitalize">
                      {img.category}
                    </span>
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-white/20 backdrop-blur-md rounded-full p-3">
                      <Expand className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                    <p className="text-white font-semibold text-lg leading-snug">
                      {img.caption}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* LIGHTBOX */}

      <AnimatePresence>
        {currentImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={() =>
              setCurrentIndex(null)
            }
          >
            <button
              onClick={() =>
                setCurrentIndex(null)
              }
              className="absolute top-6 right-6 text-white"
            >
              <X size={32} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-6 text-white"
            >
              <ChevronLeft size={40} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-6 text-white"
            >
              <ChevronRight size={40} />
            </button>

            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="max-w-5xl w-full"
              onClick={(e) =>
                e.stopPropagation()
              }
            >
              <Image
                src={currentImage.src}
                alt={currentImage.alt}
                width={1200}
                height={800}
                className="rounded-3xl w-full object-cover"
              />

              <div className="mt-5 text-center">
                <p className="text-white text-lg">
                  {currentImage.caption}
                </p>

                <p className="text-gray-400 text-sm mt-2">
                  {currentIndex! + 1} /{" "}
                  {filtered.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { galleryImages } from "@/data/gallery";
import SectionHeader from "@/components/ui/SectionHeader";
import type { GalleryImage } from "@/types";

const categories = ["all", "facility", "equipment", "team", "ward"] as const;
type Category = typeof categories[number];

export default function GalleryPage() {
  const [active, setActive] = useState<Category>("all");
  const [lightbox, setLightbox] = useState<GalleryImage | null>(null);

  const filtered = active === "all" ? galleryImages : galleryImages.filter((g) => g.category === active);

  return (
    <div>
      <section className="bg-hero py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Gallery</h1>
          <p className="text-teal-100 text-lg max-w-2xl mx-auto">
            A glimpse into our world-class facilities, expert team, and advanced equipment.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Visual Tour" title="Explore Our Hospital" subtitle="Browse through our state-of-the-art facilities and infrastructure." />

          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 rounded-xl text-sm font-medium capitalize transition-all ${
                  active === cat
                    ? "bg-teal-600 text-white shadow-md"
                    : "bg-white text-gray-600 hover:bg-teal-50 border border-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filtered.map((img) => (
                <motion.div
                  key={img.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="card overflow-hidden cursor-pointer group"
                  onClick={() => setLightbox(img)}
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      width={600}
                      height={400}
                      className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                      <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity font-medium text-sm bg-black/50 px-4 py-2 rounded-lg">
                        View
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="font-medium text-gray-800 text-sm">{img.caption}</p>
                    <span className="text-xs capitalize text-teal-600 bg-teal-50 px-2 py-0.5 rounded mt-1 inline-block">
                      {img.category}
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-4 right-4 text-white bg-white/10 hover:bg-white/20 rounded-full p-2"
              onClick={() => setLightbox(null)}
            >
              <X className="w-6 h-6" />
            </button>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={lightbox.src}
                alt={lightbox.alt}
                width={900}
                height={600}
                className="rounded-xl w-full object-cover"
              />
              <p className="text-white text-center mt-4 text-sm">{lightbox.caption}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

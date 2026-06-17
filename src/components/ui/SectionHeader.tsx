"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeader({ eyebrow, title, subtitle, centered = true, light = false }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn("mb-12", centered && "text-center")}
    >
      {eyebrow && (
        <span className={cn("font-semibold text-sm uppercase tracking-wider", light ? "text-teal-300" : "text-teal-600")}>
          {eyebrow}
        </span>
      )}
      <h2 className={cn("mt-2 text-3xl md:text-4xl font-bold leading-tight", light ? "text-white" : "text-gray-900")}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn("mt-3 text-lg max-w-2xl", centered && "mx-auto", light ? "text-teal-200" : "text-gray-500")}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

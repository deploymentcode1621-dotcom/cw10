"use client";
import { Phone, X } from "lucide-react";
import { useState } from "react";
import { SITE_CONFIG } from "@/lib/utils";

export default function EmergencyBanner() {
  const [open, setOpen] = useState(true);
  if (!open) return null;
  return (
    <div className="bg-red-600 text-white py-2 px-4 relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-4 text-sm font-medium">
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
          24/7 Emergency Available
        </span>
        <span className="hidden sm:inline text-red-200">|</span>
        <a
          href={`tel:${SITE_CONFIG.phone.emergency}`}
          className="flex items-center gap-1.5 font-bold hover:text-red-200 transition-colors"
        >
          <Phone className="w-4 h-4" />
          Emergency: {SITE_CONFIG.phone.emergency}
        </a>
      </div>
      <button
        onClick={() => setOpen(false)}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-red-200 hover:text-white"
        aria-label="Close banner"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}

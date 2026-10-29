"use client";

import { useState } from "react";
import { Phone, TriangleAlert, X } from "lucide-react";
import { SITE_CONFIG } from "@/lib/utils";

// Set to true only after confirming the hospital's emergency number.
const EMERGENCY_NUMBER_VERIFIED = false;

export default function EmergencyBanner() {
  const [open, setOpen] = useState(true);

  const emergencyNumber = SITE_CONFIG.phone.emergency?.trim();

  const showPhone =
    EMERGENCY_NUMBER_VERIFIED && Boolean(emergencyNumber);

  if (!open) return null;

  return (
    <aside
      aria-label="Emergency information"
      className="relative z-50 border-b border-red-800 bg-red-700 text-white"
    >
      <div className="mx-auto flex max-w-7xl items-start gap-3 px-4 py-3 pr-14 sm:items-center sm:justify-center sm:gap-5">
        <TriangleAlert
          aria-hidden="true"
          className="mt-0.5 h-4 w-4 shrink-0 text-red-100 sm:mt-0"
        />

        <div className="flex flex-col gap-2 text-xs leading-6 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-x-5 sm:text-sm">
          <p>
            Medical emergency? Seek immediate assistance.
            Do not wait for an online response.
          </p>

          {showPhone && emergencyNumber && (
            <a
              href={`tel:${emergencyNumber.replace(/[^\d+]/g, "")}`}
              className="inline-flex w-fit items-center gap-2 rounded-sm font-semibold underline decoration-white/40 underline-offset-4 hover:decoration-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              <Phone aria-hidden="true" className="h-4 w-4" />
              Hospital emergency: {emergencyNumber}
            </a>
          )}
        </div>
      </div>

      <button
        type="button"
        onClick={() => setOpen(false)}
        aria-label="Dismiss emergency information"
        className="absolute right-2 top-2 flex h-9 w-9 items-center justify-center rounded-lg text-red-100 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        <X aria-hidden="true" className="h-4 w-4" />
      </button>
    </aside>
  );
}
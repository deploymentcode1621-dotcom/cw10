import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const SITE_CONFIG = {
  name: "Ashwini Accident & Neuro Care Center",
  shortName: "Ashwini Neuro Care",
  tagline: "Advanced Neurological & Trauma Care in Latur",
  phone: {
    primary: "+91-9876543210",
    emergency: "+91-9999999999",
    opd: "+91-9876543211",
  },
  email: {
    info: "info@ashwinicare.com",
    appointments: "appointments@ashwinicare.com",
  },
  address: {
    line1: "Near Bus Stand, Station Road",
    line2: "Latur, Maharashtra 413512",
    full: "Near Bus Stand, Station Road, Latur, Maharashtra 413512",
    mapUrl: "https://maps.google.com/?q=Latur+Maharashtra",
  },
  whatsapp: "919876543210",
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    twitter: "https://twitter.com",
    youtube: "https://youtube.com",
  },
  hours: {
    opd: "Mon–Sat: 9:00 AM – 8:00 PM",
    emergency: "24 × 7 Emergency Services",
    icu: "24 × 7 ICU & Critical Care",
  },
  established: 2005,
  url: "https://ashwinineurocarecenterlatur.com",
} as const;

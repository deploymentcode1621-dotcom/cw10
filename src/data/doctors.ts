import type { Doctor } from "@/types";

export const doctors: Doctor[] = [
  {
    id: "dr-ashwini-fattepurkar",
    name: "Dr. Ashwini Fattepurkar",
    designation: "Consultant Neurologist",
    specialization: "Neurology",
    experience: 14,
    qualification:
      "MBBS, MD, DM (Neurology)",
    image: "/images/ashwini.png",
    bio: "Expert in stroke management, epilepsy, headache disorders, vertigo, paralysis and neurological disorders.",
    available: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    consultationFee: 700,
  },
  {
    id: "dr-sudhir-fattepurkar",
    name: "Dr. Sudhir Fattepurkar",
    designation: "Consultant Neurosurgeon",
    specialization: "Neurosurgery",
    experience: 15,
    qualification:
      "MBBS, MS, MCh (Neurosurgery)",
    image: "/images/sudhir.png",
bio: "Dr. Sudhir Fattepurkar is a Consultant Neurosurgeon with extensive experience in brain surgery, spine surgery, neuro-trauma care and critical neurosurgical procedures. He is recognized for managing complex neurological emergencies, traumatic brain injuries, spinal disorders and advanced neurosurgical interventions. His commitment to patient-focused care has helped establish Ashwini Neuro Care as a trusted neurological center in the region.",
    available: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    consultationFee: 800,
  },
];
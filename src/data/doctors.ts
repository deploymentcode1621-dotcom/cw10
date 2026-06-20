import type { Doctor } from "@/types";

export const doctors: Doctor[] = [
  {
    id: "dr-ashwini-fattepurkar",
    name: "Dr. Ashwini Fattepurkar",
    designation: "Consultant Neurologist",
    specialization: "Neurology",
    experience: 14,
    qualification: "MBBS, MD, DM (Neurology)",
    image: "/images/ashwini-mam.jpeg",
    bio: "Dr. Ashwini Fattepurkar is a Consultant Neurologist with expertise in the diagnosis and treatment of a wide range of neurological disorders. She specializes in stroke management, epilepsy, headaches, vertigo, paralysis, movement disorders, neuropathies and other conditions affecting the brain, spinal cord and nervous system. Known for her compassionate approach and evidence-based care, she is dedicated to providing comprehensive neurological evaluation, accurate diagnosis and personalized treatment plans to improve patients' quality of life.",
    available: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    consultationFee: 700,
  },

  {
    id: "dr-sudhir-fattepurkar",
    name: "Dr. Sudhir Fattepurkar",
    designation: "Consultant Neurosurgeon",
    specialization: "Neurosurgery",
    experience: 28,
    qualification: "MBBS, MS, MCh (Neurosurgery)",
    image: "/images/sudhir.png",
    bio: "Dr. Sudhir Fattepurkar is a senior Consultant Neurosurgeon with nearly three decades of experience in neurosurgery, spine surgery and neuro-trauma care. He has extensive expertise in the management of traumatic brain injuries, spinal disorders, brain hemorrhage, head injuries and other complex neurosurgical conditions. He is recognized for performing advanced neurosurgical procedures, emergency neuro-trauma interventions and critical neurological care. Through his leadership at Ashwini Accident & Neuro Care Center, he has helped establish one of the region's trusted centers for neurological and neurosurgical treatment, providing patient-focused care with a commitment to clinical excellence.",
    available: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    consultationFee: 800,
  },
];
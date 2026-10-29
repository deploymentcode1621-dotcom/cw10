import type { Doctor } from "@/types";

// Hospital verification required before publication:
// - Names, recognised qualifications and clinical roles
// - Experience, consultation days and current fees
// - Medical registration numbers and registering councils
//
// The values below were supplied by the website owner;
// they have not been independently verified.

export const doctors: Doctor[] = [
  {
    id: "dr-ashwini-fattepurkar",
    name: "Dr. Ashwini Fattepurkar",
    designation: "Consultant Neurologist",
    specialization: "Neurology",
    experience: 14,
    qualification: "MBBS, MD, DM (Neurology)",
    image: "/images/ashwini-mam.jpeg",

    bio:
      "Dr. Ashwini Fattepurkar is a Consultant Neurologist. Her clinical practice includes assessment and management of neurological conditions such as stroke, epilepsy, headaches, vertigo, movement disorders and peripheral nerve disorders. Evaluation, investigations, treatment and follow-up are determined according to the patient's clinical condition.",

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

    bio:
      "Dr. Sudhir Fattepurkar is a Consultant Neurosurgeon. His clinical practice includes assessment and management of conditions affecting the brain and spine, including head injuries, traumatic brain injuries, spinal disorders and brain haemorrhage. Decisions about surgical or non-surgical management depend on clinical assessment and investigation findings. Proposed treatment, alternatives, potential benefits and risks are discussed during consultation.",

    available: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    consultationFee: 800,
  },
];
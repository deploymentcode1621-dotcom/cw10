import type { Facility } from "@/types";

/*
 * Draft: hospital verification required before publication.
 *
 * Confirm that every listed facility actually exists.
 * The descriptions explain each facility's purpose;
 * they do not verify the hospital's equipment or staffing.
 *
 * Replace illustrations with actual approved hospital photos.
 * Retain the existing IDs to preserve code references.
 */

const facilityIllustration =
  "data:image/svg+xml," +
  encodeURIComponent(`
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="700"
      height="450"
      viewBox="0 0 700 450"
    >
      <rect width="700" height="450" fill="#edf7f5"/>
      <circle cx="350" cy="195" r="95" fill="#d2eae5"/>
      <path
        d="M330 135h40v40h40v40h-40v40h-40v-40h-40v-40h40z"
        fill="#176c65"
      />
      <text
        x="350"
        y="350"
        text-anchor="middle"
        font-family="sans-serif"
        font-size="20"
        fill="#23534e"
      >Facility information</text>
    </svg>
  `);

export const facilities: Facility[] = [
  {
    id: "neuro-icu",
    name: "Neuro-ICU",
    description:
      "An intensive care setting for patients who require monitoring and treatment for critical neurological illness. Admission depends on clinical assessment and available resources.",
    icon: "Heart",
    image: facilityIllustration,
    details: [
      "Contact the hospital for bed availability",
      "Confirm available monitoring and support facilities",
      "Ask about visiting arrangements and family communication",
    ],
  },
  {
    id: "neurosurgery-ot",
    name: "Neurosurgical Operating Theatre",
    description:
      "An operating theatre used for neurosurgical procedures. The procedure and equipment required depend on the patient's condition and the treating team's assessment.",
    icon: "Stethoscope",
    image: facilityIllustration,
    details: [
      "Confirm the procedures offered at the hospital",
      "Discuss pre-operative assessment and preparation",
      "Ask about post-operative care arrangements",
    ],
  },
  {
    id: "mri-3t",
    name: "MRI Imaging",
    description:
      "Magnetic resonance imaging uses a magnetic field and radio waves to produce images. Examination suitability is assessed through safety screening and review of the clinical request.",
    icon: "Scan",
    image: facilityIllustration,
    details: [
      "Confirm available examinations and timings",
      "Ask about implant and device safety screening",
      "Obtain preparation instructions before the examination",
    ],
  },
  {
    id: "ct-128",
    name: "CT Imaging",
    description:
      "Computed tomography uses X-rays to produce cross-sectional images. The examination protocol and any use of contrast depend on the clinical request and assessment.",
    icon: "Zap",
    image: facilityIllustration,
    details: [
      "Confirm available examinations and timings",
      "Ask whether preparation or contrast assessment is required",
      "Inform the clinical team about possible pregnancy",
    ],
  },
  {
    id: "emergency",
    name: "Emergency & Trauma Care",
    description:
      "Assessment and initial management of urgent illness and injury depend on clinical needs, staffing and available facilities. Referral or transfer may be required.",
    icon: "AlertCircle",
    image: facilityIllustration,
    details: [
      "Confirm emergency service hours with the hospital",
      "Ask about available emergency care facilities",
      "Do not wait for an online response in an emergency",
    ],
  },
  {
    id: "rehabilitation",
    name: "Neurological Rehabilitation",
    description:
      "Rehabilitation considers functional needs associated with neurological illness or injury. The care plan and disciplines involved depend on individual assessment and service availability.",
    icon: "Activity",
    image: facilityIllustration,
    details: [
      "Confirm the rehabilitation services offered",
      "Ask about assessment and appointment arrangements",
      "Discuss follow-up requirements with the treating team",
    ],
  },
];
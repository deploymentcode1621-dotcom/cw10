import type { Service } from "@/types";

/**
 * Editorial draft revised on 2026-10-29; clinical approval is pending.
 * Basis: NMC notice dated 2026-10-06, sections 7.2, 8.1, 8.3 and 9.1.
 * Before publication, confirm EACH listed department and feature with the hospital.
 * Delete services/features that are not actually available; a disclaimer is not verification.
 * No scanner specification, procedure, specialist roster or 24x7 coverage is verified here.
 * isEmergency is false to suppress the existing UI's unverified 24x7 badge;
 * this does NOT mean the service cannot treat emergencies.
 * Restore that badge only after documented confirmation of continuous coverage.
 * Images below are neutral illustrations, not photographs of hospital facilities.
 * AI-assisted draft: retain an appropriate visible source disclosure where required
 * by section 7.2; this code comment alone is not a public disclosure.
 * Keep clinical reviewer, approval date and verification evidence in internal records.
 */

// Self-contained illustration avoids stock photographs and missing image files.
const serviceIllustration =
  "data:image/svg+xml," +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400"><rect width="600" height="400" fill="#e6f4f1"/><circle cx="300" cy="180" r="85" fill="#c4e4df"/><path d="M285 130h30v35h35v30h-35v35h-30v-35h-35v-30h35z" fill="#176c65"/><text x="300" y="315" text-anchor="middle" font-family="sans-serif" font-size="20" fill="#23534e">Service information</text></svg>',
  );

export const services: Service[] = [
  {
    id: "neurology",
    title: "Neurology",
    slug: "neurology",
    shortDescription: "Assessment and management of conditions affecting the brain, spinal cord, nerves and muscles.",
    fullDescription: "Neurology concerns conditions of the nervous system, including headaches, seizures, movement disorders and peripheral nerve disorders. Assessment may include a medical history, neurological examination and investigations when clinically indicated. Treatment and follow-up depend on the diagnosis and individual clinical needs.",
    icon: "Brain",
    image: serviceIllustration,
    features: [
      "Neurological assessment",
      "Headache and migraine assessment",
      "Seizure assessment and follow-up",
      "Movement disorder assessment",
      "Peripheral nerve disorder assessment",
    ],
    isEmergency: false,
  },
  {
    id: "neurosurgery",
    title: "Neurosurgery",
    slug: "neurosurgery",
    shortDescription: "Surgical assessment of conditions affecting the brain, spine and peripheral nerves.",
    fullDescription: "Neurosurgical assessment considers whether a condition affecting the brain, spine or peripheral nerves requires surgical treatment. Investigation findings, non-surgical options, potential benefits, risks and follow-up needs are discussed as part of clinical decision-making. The procedure offered depends on the diagnosis and the hospital’s confirmed facilities and surgical scope.",
    icon: "Stethoscope",
    image: serviceIllustration,
    features: [
      "Brain condition assessment",
      "Spinal condition assessment",
      "Head injury assessment",
      "Review of investigation findings",
      "Discussion of surgical and non-surgical options",
    ],
    isEmergency: false,
  },
  {
    id: "spine-surgery",
    title: "Spine Surgery",
    slug: "spine-surgery",
    shortDescription: "Assessment of spinal conditions and discussion of non-surgical and surgical treatment options.",
    fullDescription: "Spine care concerns conditions affecting the neck and back, including disc disorders, spinal narrowing and spinal injuries. Assessment may include examination and imaging when indicated. Management may involve non-surgical treatment or surgery according to the diagnosis. The treating clinician explains the proposed treatment, alternatives, risks and follow-up requirements.",
    icon: "Activity",
    image: serviceIllustration,
    features: [
      "Neck and back assessment",
      "Disc disorder assessment",
      "Spinal narrowing assessment",
      "Spinal injury assessment",
      "Treatment planning and follow-up",
    ],
    isEmergency: false,
  },
  {
    id: "trauma-care",
    title: "Trauma Care",
    slug: "trauma-care",
    shortDescription: "Assessment and initial management of injuries, including head and spinal injuries.",
    fullDescription: "Trauma care involves assessing injuries and determining the need for stabilisation, investigations, treatment or referral. Care depends on the nature and severity of the injury and the staff and facilities available. Transfer to another centre may be required when the necessary care is outside the hospital’s available scope.",
    icon: "Ambulance",
    image: serviceIllustration,
    features: [
      "Injury assessment",
      "Head injury assessment",
      "Spinal injury assessment",
      "Initial stabilisation",
      "Referral and transfer planning",
    ],
    isEmergency: false,
  },
  {
    id: "emergency-care",
    title: "Emergency Care",
    slug: "emergency-care",
    shortDescription: "Assessment and initial management of urgent illness and injury.",
    fullDescription: "Emergency care involves assessing urgent illness or injury and determining the need for stabilisation, investigations, admission or referral. Treatment depends on clinical urgency and available resources. This page does not confirm round-the-clock staffing or availability of a particular specialist. In an emergency, seek immediate medical assistance; do not wait for a website enquiry response.",
    icon: "AlertCircle",
    image: serviceIllustration,
    features: [
      "Urgency assessment and triage",
      "Initial clinical assessment",
      "Stabilisation when indicated",
      "Admission assessment",
      "Referral and transfer planning",
    ],
    isEmergency: false,
  },
  {
    id: "icu-care",
    title: "ICU Care",
    slug: "icu-care",
    shortDescription: "Monitoring and treatment of patients who require intensive care.",
    fullDescription: "Intensive care involves monitoring and treatment for patients with critical illness or those requiring observation after a procedure. Admission and treatment depend on clinical assessment, bed availability, staffing and available equipment. The treating team discusses the care plan and relevant risks with the patient or an authorised representative as appropriate.",
    icon: "Heart",
    image: serviceIllustration,
    features: [
      "Assessment for intensive care admission",
      "Patient monitoring",
      "Review of treatment needs",
      "Communication about the care plan",
      "Transfer or discharge planning",
    ],
    isEmergency: false,
  },
  {
    id: "ct-scan",
    title: "CT Scan",
    slug: "ct-scan",
    shortDescription: "Computed tomography imaging when requested for clinical assessment.",
    fullDescription: "Computed tomography (CT) uses X-rays to produce cross-sectional images. The area examined and scanning protocol depend on the clinical request. Contrast may be used when indicated after assessment by the clinical team. Patients should inform the team about possible pregnancy, previous contrast reactions and relevant medical conditions. Available examinations and timings must be confirmed with the hospital.",
    icon: "Scan",
    image: serviceIllustration,
    features: [
      "Review of the imaging request",
      "Preparation information",
      "Assessment before contrast, when indicated",
      "CT image acquisition",
      "Radiology report",
    ],
    isEmergency: false,
  },
  {
    id: "mri-scan",
    title: "MRI Scan",
    slug: "mri-scan",
    shortDescription: "Magnetic resonance imaging when requested for clinical assessment.",
    fullDescription: "Magnetic resonance imaging (MRI) uses a magnetic field and radio waves to produce images and does not use ionising radiation. Suitability depends on safety screening, including information about implants, devices and metallic foreign bodies. Contrast may be used when clinically indicated. Patients should inform the team about possible pregnancy, kidney conditions or previous contrast reactions. Available examinations and timings must be confirmed with the hospital.",
    icon: "Zap",
    image: serviceIllustration,
    features: [
      "Review of the imaging request",
      "Implant and device safety screening",
      "Preparation information",
      "MRI image acquisition",
      "Radiology report",
    ],
    isEmergency: false,
  },
];

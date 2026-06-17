import type { Facility } from "@/types";

export const facilities: Facility[] = [
  {
    id: "neuro-icu",
    name: "Neuro-ICU",
    description: "20-bed dedicated neurological intensive care unit with advanced monitoring and ventilation systems.",
    icon: "Heart",
    image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=600&h=400&fit=crop",
    details: ["20 fully equipped ICU beds", "Bedside ICP monitoring", "Continuous EEG monitoring", "Advanced ventilators", "CRRT / hemodialysis", "24/7 intensivist coverage"],
  },
  {
    id: "neurosurgery-ot",
    name: "Neuro Operating Theatre",
    description: "Dedicated neurosurgery OT with intraoperative neurophysiological monitoring and microscopic surgery capability.",
    icon: "Stethoscope",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop",
    details: ["2 dedicated neuro-OTs", "Carl Zeiss surgical microscope", "Intraoperative neurophysiology (IONM)", "Neuronavigation system", "Endoscope tower", "Laminar airflow Class 100"],
  },
  {
    id: "mri-3t",
    name: "3 Tesla MRI Suite",
    description: "High-field MRI for advanced neuroimaging including functional MRI, spectroscopy, and tractography.",
    icon: "Scan",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=600&h=400&fit=crop",
    details: ["Siemens MAGNETOM Vida 3T MRI", "Functional MRI (fMRI)", "MR spectroscopy", "Diffusion tensor imaging (DTI)", "MR angiography", "Perfusion MRI"],
  },
  {
    id: "ct-128",
    name: "128-Slice CT Scanner",
    description: "Ultra-fast 128-slice MDCT for emergency and elective neuroimaging available around the clock.",
    icon: "Zap",
    image: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=600&h=400&fit=crop",
    details: ["Siemens SOMATOM Drive 128-slice CT", "Available 24/7", "Dual-energy CT capability", "Whole-body trauma protocol", "CT perfusion for stroke", "AI-assisted reporting"],
  },
  {
    id: "emergency",
    name: "Emergency & Trauma Centre",
    description: "Level-II trauma centre with dedicated resuscitation bays and trauma OT.",
    icon: "AlertCircle",
    image: "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?w=600&h=400&fit=crop",
    details: ["6 resuscitation bays", "24/7 trauma surgeon on-site", "Dedicated trauma OT", "FAST ultrasound at bedside", "Level-II Trauma Centre designation", "Ambulance bay with 4 vehicles"],
  },
  {
    id: "rehabilitation",
    name: "Neuro Rehabilitation",
    description: "Comprehensive rehabilitation for stroke, spinal injury, and post-surgical neurological recovery.",
    icon: "Activity",
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&h=400&fit=crop",
    details: ["Physiotherapy gym", "Occupational therapy", "Speech & swallowing therapy", "Robotic gait training", "Neuropsychology services", "Home rehabilitation planning"],
  },
];

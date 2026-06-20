import type { Service } from "@/types";

export const services: Service[] = [
  {
    id: "neurology",
    title: "Neurology",
    slug: "neurology",

    shortDescription:
      "Expert diagnosis and treatment for disorders affecting the brain, spinal cord, nerves, and muscles.",

    fullDescription:
      "Our Neurology Department provides comprehensive diagnosis, treatment, and long-term management of neurological disorders affecting patients of all ages. Our experienced neurologists specialize in treating stroke, epilepsy, migraine, Parkinson's disease, dementia, multiple sclerosis, neuropathy, vertigo, headaches, and various movement disorders. We combine advanced diagnostic technologies with evidence-based treatments to ensure accurate diagnosis and the best possible outcomes. Every patient receives an individualized treatment plan designed according to their medical condition, lifestyle, and recovery goals. Our multidisciplinary team works closely with neurosurgeons, physiotherapists, rehabilitation specialists, and critical care experts to provide complete neurological care under one roof. Whether it is emergency stroke management or long-term neurological rehabilitation, we are committed to delivering compassionate, patient-centered care using the latest medical advancements.",

    icon: "Brain",

    image:
      "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&h=400&fit=crop",

    features: [
      "Stroke Diagnosis & Treatment",
      "EEG & Video EEG Monitoring",
      "Electromyography (EMG)",
      "Nerve Conduction Studies (NCS)",
      "Migraine & Headache Clinic",
      "Epilepsy Management",
      "Parkinson's Disease Treatment",
      "Memory & Dementia Clinic",
      "Multiple Sclerosis Care",
      "Peripheral Neuropathy Treatment",
      "Botox Therapy",
      "Long-Term Neurological Rehabilitation"
    ],

    isEmergency: false,
  },

  {
    id: "neurosurgery",
    title: "Neurosurgery",
    slug: "neurosurgery",

    shortDescription:
      "Advanced brain, spine, and nerve surgeries using modern microscopic and minimally invasive techniques.",

    fullDescription:
      "Our Neurosurgery Department offers advanced surgical treatment for diseases and injuries affecting the brain, spine, and nervous system. Supported by modern operating theatres, high-definition surgical microscopes, neuronavigation systems, and intraoperative neuro-monitoring, our team performs highly specialized procedures with precision and safety. We manage brain tumors, traumatic brain injuries, aneurysms, hydrocephalus, epilepsy, spinal tumors, and complex neurological disorders requiring surgery. Our surgeons work closely with neurologists, anesthesiologists, intensivists, and rehabilitation specialists to ensure seamless care before, during, and after surgery. Every patient benefits from personalized surgical planning, advanced imaging, minimally invasive techniques whenever possible, and comprehensive post-operative rehabilitation for faster recovery and improved quality of life.",

    icon: "Stethoscope",

    image:
      "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=600&h=400&fit=crop",

    features: [
      "Brain Tumor Surgery",
      "Microscopic Brain Surgery",
      "Aneurysm Clipping",
      "Hydrocephalus Shunt Surgery",
      "Epilepsy Surgery",
      "Deep Brain Stimulation (DBS)",
      "Pituitary Tumor Surgery",
      "Skull Base Surgery",
      "Spinal Tumor Surgery",
      "Traumatic Brain Injury Surgery",
      "Neuronavigation Technology",
      "Minimally Invasive Neurosurgery"
    ],

    isEmergency: false,
  },

  {
    id: "spine-surgery",
    title: "Spine Surgery",
    slug: "spine-surgery",

    shortDescription:
      "Comprehensive surgical care for spinal disorders using minimally invasive and advanced spinal procedures.",

    fullDescription:
      "Our Spine Surgery Department specializes in diagnosing and treating disorders affecting the cervical, thoracic, and lumbar spine. We provide both conservative and surgical management for slipped discs, spinal stenosis, fractures, scoliosis, spinal infections, tumors, and degenerative spine diseases. Whenever possible, minimally invasive techniques are used to reduce pain, minimize blood loss, shorten hospital stays, and promote faster recovery. Our multidisciplinary spine team includes neurosurgeons, orthopedic spine surgeons, physiotherapists, pain specialists, and rehabilitation experts who work together to restore mobility and improve quality of life. Every patient undergoes comprehensive evaluation, advanced imaging, and personalized treatment planning before surgery to achieve the best long-term outcomes.",

    icon: "Activity",

    image:
      "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=600&h=400&fit=crop",

    features: [
      "Microdiscectomy",
      "Lumbar Fusion Surgery",
      "Cervical Disc Replacement",
      "Spinal Decompression",
      "Spinal Fusion",
      "Scoliosis Correction",
      "Minimally Invasive Spine Surgery",
      "Spinal Trauma Surgery",
      "Spinal Tumor Surgery",
      "Vertebroplasty & Kyphoplasty",
      "Spinal Cord Injury Management",
      "Post-Surgical Rehabilitation"
    ],

    isEmergency: false,
  },
    {
    id: "trauma-care",
    title: "Trauma Care",
    slug: "trauma-care",

    shortDescription:
      "24/7 emergency trauma care for road accidents, head injuries, fractures, spinal injuries, and life-threatening emergencies.",

    fullDescription:
      "Our Trauma Care Department is fully equipped to manage all types of medical and surgical emergencies with speed, precision, and compassion. As one of the leading trauma centers in the region, we provide immediate treatment for road traffic accidents, head injuries, spinal cord injuries, fractures, multiple organ trauma, and other critical emergencies. Our emergency team follows internationally recognized trauma protocols to ensure rapid assessment, stabilization, and life-saving interventions. Advanced imaging, emergency operating theatres, intensive care units, blood bank support, and multidisciplinary specialists are available around the clock. Every trauma patient receives coordinated care from emergency physicians, neurosurgeons, orthopedic surgeons, anesthesiologists, and critical care specialists, ensuring the highest standard of treatment and faster recovery.",

    icon: "Ambulance",

    image:
      "https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=600&h=400&fit=crop",

    features: [
      "24×7 Trauma Center",
      "Advanced Trauma Life Support (ATLS)",
      "Emergency Head Injury Management",
      "Polytrauma Treatment",
      "Road Traffic Accident Care",
      "Emergency Spine Injury Care",
      "Fracture Stabilization",
      "Emergency Trauma Surgery",
      "Critical Care Support",
      "Blood Bank Services",
      "Rapid CT & MRI Access",
      "Dedicated Trauma Team"
    ],

    isEmergency: true,
  },

  {
    id: "emergency-care",
    title: "Emergency Care",
    slug: "emergency-care",

    shortDescription:
      "Round-the-clock emergency medical services with rapid diagnosis, stabilization, and specialist support.",

    fullDescription:
      "Our Emergency Department operates 24 hours a day, seven days a week, delivering immediate medical attention for all emergency conditions. The department is staffed by experienced emergency physicians, nurses, and specialists trained to manage critical illnesses and injuries. Equipped with advanced resuscitation bays, cardiac monitoring systems, ventilators, emergency imaging facilities, and laboratory support, we ensure prompt diagnosis and treatment. From chest pain and stroke to poisoning, trauma, seizures, breathing difficulties, and pediatric emergencies, our team responds quickly to minimize complications and improve patient outcomes. Emergency patients also benefit from immediate access to neurology, neurosurgery, orthopedics, intensive care, radiology, and laboratory services without unnecessary delays.",

    icon: "AlertCircle",

    image:
      "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?w=600&h=400&fit=crop",

    features: [
      "24×7 Emergency Department",
      "Emergency Physician Team",
      "Rapid Patient Triage",
      "Advanced Cardiac Life Support",
      "Stroke Code Activation",
      "Seizure & Neurological Emergencies",
      "Poisoning Management",
      "Pediatric Emergency Care",
      "Emergency Ventilator Support",
      "Critical Care Stabilization",
      "Emergency Imaging Services",
      "Ambulance Coordination"
    ],

    isEmergency: true,
  },

  {
    id: "icu-care",
    title: "ICU Care",
    slug: "icu-care",

    shortDescription:
      "Advanced Neuro ICU and Critical Care Unit with 24/7 intensivists, ventilators, and continuous patient monitoring.",

    fullDescription:
      "Our Intensive Care Unit (ICU) provides comprehensive critical care for patients with life-threatening medical and neurological conditions. The ICU is equipped with modern ventilators, bedside monitoring systems, infusion pumps, continuous EEG monitoring, invasive hemodynamic monitoring, and advanced life-support equipment. Our dedicated intensivists, neurologists, neurosurgeons, nurses, respiratory therapists, and rehabilitation specialists work together around the clock to provide personalized critical care. We manage stroke patients, severe infections, traumatic brain injuries, post-operative neurosurgical cases, respiratory failure, septic shock, and multi-organ dysfunction with evidence-based treatment protocols. Every patient receives continuous monitoring and multidisciplinary care focused on improving survival, reducing complications, and supporting long-term recovery.",

    icon: "Heart",

    image:
      "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=600&h=400&fit=crop",

    features: [
      "24×7 Neuro ICU",
      "Critical Care Specialists",
      "Advanced Mechanical Ventilation",
      "Continuous EEG Monitoring",
      "Invasive Hemodynamic Monitoring",
      "ICP Monitoring",
      "Stroke Intensive Care",
      "Post Neurosurgery ICU",
      "Sepsis Management",
      "Multi-Organ Support",
      "Respiratory Therapy",
      "Family-Centered Critical Care"
    ],

    isEmergency: true,
  },
    {
    id: "ct-scan",
    title: "CT Scan",
    slug: "ct-scan",

    shortDescription:
      "High-speed CT imaging for accurate diagnosis of neurological, orthopedic, and emergency conditions.",

    fullDescription:
      "Our CT Scan Department is equipped with advanced multi-slice CT technology that provides fast, detailed, and highly accurate diagnostic imaging. CT scanning plays a vital role in the rapid diagnosis of stroke, brain hemorrhage, traumatic injuries, fractures, chest diseases, abdominal disorders, and vascular conditions. Our experienced radiologists and technicians ensure every scan is performed with precision while maintaining patient comfort and safety. Emergency patients benefit from immediate imaging and rapid reporting, allowing doctors to make timely treatment decisions. We follow international radiation safety standards while delivering exceptional image quality for accurate diagnosis and treatment planning.",

    icon: "Scan",

    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop",

    features: [
      "128-Slice CT Scanner",
      "Brain CT Scan",
      "Whole Body CT",
      "CT Angiography",
      "Stroke Protocol CT",
      "Spine CT Imaging",
      "Trauma CT Scan",
      "Chest CT",
      "Abdominal CT",
      "Contrast CT Studies",
      "Rapid Emergency Reporting",
      "24×7 Imaging Services"
    ],

    isEmergency: false,
  },

  {
    id: "mri-scan",
    title: "MRI Scan",
    slug: "mri-scan",

    shortDescription:
      "Advanced MRI imaging with high-resolution scans for brain, spine, joints, and internal organs.",

    fullDescription:
      "Our MRI Department offers advanced magnetic resonance imaging for the diagnosis of neurological, musculoskeletal, and internal organ disorders. MRI provides exceptional soft tissue visualization without radiation exposure, making it one of the most effective diagnostic tools available. Our experienced radiologists perform specialized brain MRI, spine MRI, MR angiography, diffusion imaging, and functional MRI studies to detect tumors, stroke, spinal disorders, ligament injuries, infections, and vascular diseases. Every examination is performed using modern imaging protocols to ensure precise diagnosis while maximizing patient comfort. Reports are prepared promptly to support timely treatment planning by our specialists.",

    icon: "Zap",

    image:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",

    features: [
      "3 Tesla MRI",
      "Brain MRI",
      "Spine MRI",
      "Functional MRI (fMRI)",
      "MR Angiography",
      "MR Spectroscopy",
      "Diffusion Tensor Imaging",
      "Joint MRI",
      "Whole Spine MRI",
      "Tumor Imaging",
      "Stroke MRI Protocol",
      "High-Resolution Neuro Imaging"
    ],

    isEmergency: false,
  },
];
export interface Doctor {
  id: string;
  name: string;
  designation: string;
  specialization: string;
  experience: number;
  qualification: string;
  image: string;
  bio: string;
  available: string[];
  consultationFee: number;
}

export interface Service {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  image: string;
  features: string[];
  isEmergency: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  review: string;
  treatment: string;
  date: string;
  avatar: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: "facility" | "equipment" | "team" | "ward";
  caption: string;
  span?: "normal" | "tall" | "wide" | "big";
}

export interface Facility {
  id: string;
  name: string;
  description: string;
  icon: string;
  image: string;
  details: string[];
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface Stat {
  value: string;
  label: string;
  icon: string;
}

export interface AppointmentFormData {
  fullName: string;
  phone: string;
  email: string;
  age: number;
  gender: "male" | "female" | "other";
  department: string;
  doctor: string;
  preferredDate: string;
  preferredTime: string;
  message: string;
  isEmergency: boolean;
}

export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
}

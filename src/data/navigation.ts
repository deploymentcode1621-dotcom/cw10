import type { NavItem } from "@/types";

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
  { label: "Neurology", href: "/services/neurology" },
  { label: "Neurosurgery", href: "/services/neurosurgery" },
  { label: "Spine Surgery", href: "/services/spine-surgery" },
  { label: "Trauma Care", href: "/services/trauma-care" },
  { label: "Emergency Care", href: "/services/emergency-care" },
  { label: "ICU Care", href: "/services/icu-care" },
  { label: "CT Scan", href: "/services/ct-scan" },
  { label: "MRI Scan", href: "/services/mri-scan" },
],
  },
  { label: "Doctors", href: "/doctors" },
  { label: "Facilities", href: "/facilities" },
  { label: "Gallery", href: "/gallery" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact", href: "/contact" },
];

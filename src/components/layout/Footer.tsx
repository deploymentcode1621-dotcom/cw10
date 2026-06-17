import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, Youtube, Heart } from "lucide-react";
import { SITE_CONFIG } from "@/lib/utils";
import { services } from "@/data/services";

export default function Footer() {
  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Our Doctors", href: "/doctors" },
    { label: "Facilities", href: "/facilities" },
    { label: "Gallery", href: "/gallery" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Emergency Care", href: "/emergency" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Top CTA
      <div className="bg-teal-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-white text-2xl font-bold">Need Medical Help?</h3>
              <p className="text-teal-200 mt-1">Our experts are available 24/7 for emergencies and appointments.</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a href={`tel:${SITE_CONFIG.phone.emergency}`} className="btn-emergency">
                <Phone className="w-4 h-4" /> Emergency Now
              </a>
              <Link href="/appointment" className="btn-secondary">
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      </div> */}

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About */}
<div>
  <Link href="/" className="flex items-center gap-3 mb-5">
    <div className="relative w-14 h-14 rounded-2xl overflow-hidden bg-white shadow-md">
     <Image
  src="/images/logo.jpeg"
  alt="Ashwini Neuro Care Logo"
  fill
  sizes="48px"
  className="object-contain p-1"
  priority
/>
    </div>

    <div>
      <h3 className="font-bold text-red-600 text-lg leading-tight">
        Ashwini Neuro Care
      </h3>

      <p className="text-teal-500 text-xs font-medium uppercase tracking-wide">
        Latur, Maharashtra
      </p>
    </div>
  </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-5">
              Premier neurological & trauma care hospital in Latur, serving Marathwada since {SITE_CONFIG.established}. Combining cutting-edge technology with compassionate care.
            </p>
            <div className="flex gap-3">
              {[
                { Icon: Facebook, href: SITE_CONFIG.social.facebook },
                { Icon: Instagram, href: SITE_CONFIG.social.instagram },
                { Icon: Twitter, href: SITE_CONFIG.social.twitter },
                { Icon: Youtube, href: SITE_CONFIG.social.youtube },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-teal-600 flex items-center justify-center transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-base mb-5 pb-2 border-b border-gray-700">
              Our Services
            </h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.id}>
                  <Link
                    href={`/services#${s.slug}`}
                    className="text-sm text-gray-400 hover:text-teal-400 transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-500 flex-shrink-0" />
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-base mb-5 pb-2 border-b border-gray-700">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-teal-400 transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-500 flex-shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-base mb-5 pb-2 border-b border-gray-700">
              Contact Info
            </h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-400">{SITE_CONFIG.address.full}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-gray-400">
                  <a href={`tel:${SITE_CONFIG.phone.primary}`} className="hover:text-teal-400 block">
                    OPD: {SITE_CONFIG.phone.primary}
                  </a>
                  <a href={`tel:${SITE_CONFIG.phone.emergency}`} className="hover:text-red-400 block text-red-400 font-medium">
                    Emergency: {SITE_CONFIG.phone.emergency}
                  </a>
                </div>
              </li>
              <li className="flex gap-3">
                <Mail className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                <a href={`mailto:${SITE_CONFIG.email.info}`} className="text-sm text-gray-400 hover:text-teal-400">
                  {SITE_CONFIG.email.info}
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-gray-400">
                  <p>{SITE_CONFIG.hours.opd}</p>
                  <p className="text-green-400 font-medium">{SITE_CONFIG.hours.emergency}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
<div className="border-t border-gray-800">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-4">

    <p className="text-sm text-gray-500 text-center md:text-left">
      © {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
    </p>

    <div className="flex items-center gap-3 group cursor-pointer">
      
      {/* Logo with Glow */}
      <div className="relative">
        <div className="absolute inset-0 bg-cyan-400/30 blur-xl rounded-full group-hover:bg-purple-500/40 transition-all duration-500" />

        <Image
          src="/images/cwxlogo.png"
          alt="Codewinx IT Solutions"
          width={42}
          height={42}
          className="relative h-10 w-10 object-contain transition-all duration-500 group-hover:scale-110"
        />
      </div>

      {/* Text */}
      <div className="leading-tight">
        <p className="text-xs text-gray-500">
          Designed & Developed by
        </p>

        <p className="font-semibold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
          Codewinx IT Solutions
        </p>
      </div>

    </div>

  </div>
</div>
    </footer>
  );
}

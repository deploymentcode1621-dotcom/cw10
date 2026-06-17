"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Calendar, Phone } from "lucide-react";
import { navItems } from "@/data/navigation";
import { SITE_CONFIG } from "@/lib/utils";
import { cn } from "@/lib/utils";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-all duration-300",
        scrolled
          ? "bg-white shadow-[0_1px_24px_rgba(0,0,0,0.07)]"
          : "bg-white border-b border-gray-100"
      )}
    >
     <div className="w-full px-6 lg:px-12 xl:px-16">
        <div className="flex items-center justify-between h-[76px] lg:h-[88px]">

          {/* ── Logo ── */}
          <Link href="/" className="flex items-center gap-3 shrink-0 ml-10 lg:ml-16">
            <div className="relative w-16 h-16 lg:w-20 lg:h-20">
              <Image
  src="/images/logo.jpeg"
  alt="Ashwini Neuro Care Logo"
  fill
  sizes="48px"
  className="object-contain"
  priority
/>
            </div>
            <div className="flex flex-col leading-none">
             <h1 className="logo-title text-red-600 font-extrabold text-2xl lg:text-3xl">
  Ashwini Neuro Care
</h1>
             <span className="text-teal-600 text-sm font-semibold mt-1 uppercase tracking-wide">
                Latur, Maharashtra
              </span>
            </div>
          </Link>

          {/* ── Desktop Nav ── */}
         <nav className="hidden lg:flex items-center gap-1 ml-8">
            {navItems.map((item) => (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() =>
                  item.children && setActiveDropdown(item.label)
                }
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-1 px-4 py-2.5 rounded-lg text-[13.5px] font-medium transition-all",
                    pathname === item.href
                      ? "text-teal-600 bg-teal-50"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  )}
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown className="w-3.5 h-3.5 opacity-60" />
                  )}
                </Link>

                {/* Dropdown */}
                {item.children && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 w-56 bg-white rounded-xl shadow-lg border border-gray-100 py-2 mt-1.5 z-50">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2.5 text-[13px] text-gray-600 hover:text-teal-600 hover:bg-teal-50"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
         </nav>

{/* Appointment Button */}
<Link
  href="/appointment"
  className="hidden lg:flex items-center gap-2 ml-0 bg-teal-600 hover:bg-teal-700 text-white text-sm font-semibold px-6 py-3 rounded-xl shadow-sm transition-all"
>
  <Calendar className="w-4 h-4" />
  Book Appointment
</Link>

          {/* ── Right Actions (STACKED) ── */}
        <div className="hidden lg:flex items-end gap-3 ml-1">

            <div className="flex flex-col items-end">

              {/* Language Button (TOP) */}
              <button
  className="w-11 h-11 flex items-center justify-center rounded-xl border border-gray-200 bg-white hover:bg-teal-50 hover:border-teal-300 font-bold shadow-sm"
>
  <span className="notranslate text-lg">
    {language === "en" ? "अ" : "A"}
  </span>
</button>

              {/* Appointment Button (BOTTOM)
             <Link
  href="/appointment"
  className="flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white text-sm font-semibold px-6 py-3 rounded-xl shadow-sm transition-all"
>
  <Calendar className="w-4 h-4" />
  Book Appointment
</Link> */}

            </div>
          </div>

          {/* ── Mobile Toggle ── */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100"
          >
            {mobileOpen ? <X /> : <Menu />}
          </button>

        </div>
      </div>

      {/* ── Mobile Menu ── */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-4 space-y-2">

            {navItems.map((item) => (
  <div key={item.href}>
    
    <div className="flex items-center justify-between px-4 py-3 rounded-xl text-[14px] text-gray-700 hover:bg-gray-50">

      {/* Main Link */}
      <Link
        href={item.href}
        onClick={() => setMobileOpen(false)}
        className="flex-1"
      >
        {item.label}
      </Link>

      {/* Dropdown button (only if services has children) */}
      {item.children && (
        <button
          onClick={() =>
            setMobileDropdown(
              mobileDropdown === item.label ? null : item.label
            )
          }
        >
          <ChevronDown
            className={`w-4 h-4 transition-transform ${
              mobileDropdown === item.label ? "rotate-180" : ""
            }`}
          />
        </button>
      )}
    </div>

    {/* Dropdown items */}
    {item.children && mobileDropdown === item.label && (
      <div className="ml-4 border-l pl-3 space-y-1">
        {item.children.map((child) => (
          <Link
            key={child.href}
            href={child.href}
            onClick={() => setMobileOpen(false)}
            className="block px-4 py-2 text-[13px] text-gray-600 hover:text-teal-600 hover:bg-teal-50 rounded-lg"
          >
            {child.label}
          </Link>
        ))}
      </div>
    )}

  </div>
))}

            <div className="pt-3 border-t space-y-2">

              <button
                onClick={() => {
                  const newLang = language === "en" ? "mr" : "en";
                  setLanguage(newLang);

                  const select = document.querySelector(
                    ".goog-te-combo"
                  ) as HTMLSelectElement;

                  if (select) {
                    select.value = newLang;
                    select.dispatchEvent(new Event("change"));
                  }
                }}
                className="w-full py-3 rounded-xl border text-gray-700"
              >
                {language === "en"
                  ? "मराठी मध्ये पहा"
                  : "View in English"}
              </button>

              {/* <a
                href={`tel:${SITE_CONFIG.phone.emergency}`}
                className="block text-center py-3 bg-red-600 text-white rounded-xl"
              >
                Emergency: {SITE_CONFIG.phone.emergency}
              </a> */}

              <Link
                href="/appointment"
                onClick={() => setMobileOpen(false)}
                className="block text-center py-3 bg-teal-600 text-white rounded-xl"
              >
                Book Appointment
              </Link>

            </div>
          </div>
        </div>
      )}
    </header>
  );
}
"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  Calendar,
} from "lucide-react";
import { navItems } from "@/data/navigation";
import { cn } from "@/lib/utils";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

  const pathname = usePathname();

  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

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
      {/* ========================= */}
      {/* Desktop Header */}
      {/* ========================= */}

      <div className="hidden lg:block">
        <div className="w-full px-6 lg:px-12 xl:px-16">
          <div className="flex items-center justify-between h-[88px]">

            {/* Logo */}

            <Link
              href="/"
              className="flex items-center gap-3 shrink-0"
            >
              <div className="relative w-20 h-20">
                <Image
                  src="/images/logo.jpeg"
                  alt="Ashwini Neuro Care Logo"
                  fill
                  priority
                  sizes="80px"
                  className="object-contain"
                />
              </div>

              <div className="flex flex-col leading-none">
                <h1 className="text-red-600 font-extrabold text-3xl">
                  Ashwini Neuro Care
                </h1>

                <span className="text-teal-600 text-sm font-semibold mt-1 uppercase tracking-wide">
                  Latur, Maharashtra
                </span>
              </div>
            </Link>

            {/* Navigation */}

            <nav className="flex items-center gap-1 ml-8">
              {navItems.map((item) => (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() =>
                    item.children &&
                    setActiveDropdown(item.label)
                  }
                  onMouseLeave={() =>
                    setActiveDropdown(null)
                  }
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

                  {item.children &&
                    activeDropdown === item.label && (
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

            {/* Right Side */}

            <div className="flex items-center gap-4">

              <Link
                href="/appointment"
                className="flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white text-sm font-semibold px-6 py-3 rounded-xl shadow-sm transition-all"
              >
                <Calendar className="w-4 h-4" />
                Book Appointment
              </Link>

              <button className="w-11 h-11 flex items-center justify-center rounded-xl border border-gray-200 bg-white hover:bg-teal-50 hover:border-teal-300 font-bold shadow-sm">
                <span className="notranslate text-lg">
                  {language === "en" ? "अ" : "A"}
                </span>
              </button>

            </div>

          </div>
        </div>
      </div>

      {/* ========================= */}
      {/* Mobile Header */}
      {/* ========================= */}

      <div className="lg:hidden">
        <div className="flex items-center justify-between h-16 px-4">

          {/* Logo */}

          <Link
            href="/"
            className="flex items-center gap-2 flex-1 min-w-0"
          >
            <div className="relative w-10 h-10 shrink-0">
              <Image
                src="/images/logo.jpeg"
                alt="Ashwini Neuro Care"
                fill
                priority
                sizes="40px"
                className="object-contain"
              />
            </div>

            <div className="min-w-0 overflow-hidden">

              <h1 className="truncate text-red-600 font-bold text-base">
                Ashwini Neuro Care
              </h1>

              <p className="truncate text-[11px] text-teal-600 font-semibold uppercase">
                Latur, Maharashtra
              </p>

            </div>
          </Link>

          {/* Language */}

          <button
            className="ml-2 mr-2 w-9 h-9 rounded-lg border flex items-center justify-center text-sm font-bold"
            onClick={() => {
              const newLang =
                language === "en" ? "mr" : "en";

              setLanguage(newLang);

              const select = document.querySelector(
                ".goog-te-combo"
              ) as HTMLSelectElement;

              if (select) {
                select.value = newLang;
                select.dispatchEvent(
                  new Event("change")
                );
              }
            }}
          >
            {language === "en" ? "अ" : "A"}
          </button>

          {/* Hamburger */}

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 rounded-lg hover:bg-gray-100 shrink-0"
          >
            {mobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>

        </div>
      </div>
            {/* ========================= */}
      {/* Mobile Menu */}
      {/* ========================= */}

      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg animate-in slide-in-from-top duration-200">
          <div className="px-4 py-4">

            {navItems.map((item) => (
              <div key={item.href} className="mb-2">

                <div className="flex items-center justify-between rounded-xl hover:bg-gray-50">

                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "flex-1 px-4 py-3 text-[15px] font-medium rounded-xl transition-colors",
                      pathname === item.href
                        ? "text-teal-600 bg-teal-50"
                        : "text-gray-700"
                    )}
                  >
                    {item.label}
                  </Link>

                  {item.children && (
                    <button
                      onClick={() =>
                        setMobileDropdown(
                          mobileDropdown === item.label
                            ? null
                            : item.label
                        )
                      }
                      className="p-3"
                    >
                      <ChevronDown
                        className={cn(
                          "w-4 h-4 transition-transform",
                          mobileDropdown === item.label &&
                            "rotate-180"
                        )}
                      />
                    </button>
                  )}
                </div>

                {item.children &&
                  mobileDropdown === item.label && (
                    <div className="ml-4 mt-1 border-l-2 border-teal-100">

                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className={cn(
                            "block px-4 py-2.5 text-sm rounded-lg ml-3 transition-colors",
                            pathname === child.href
                              ? "text-teal-600 bg-teal-50"
                              : "text-gray-600 hover:bg-gray-50 hover:text-teal-600"
                          )}
                        >
                          {child.label}
                        </Link>
                      ))}

                    </div>
                  )}

              </div>
            ))}

            {/* Divider */}

            <div className="border-t my-5" />

            {/* Book Appointment */}

            <Link
              href="/appointment"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-2 w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 rounded-xl transition-colors"
            >
              <Calendar className="w-4 h-4" />
              Book Appointment
            </Link>
                        {/* Language Switch */}

            <button
              onClick={() => {
                const newLang =
                  language === "en" ? "mr" : "en";

                setLanguage(newLang);

                const select = document.querySelector(
                  ".goog-te-combo"
                ) as HTMLSelectElement;

                if (select) {
                  select.value = newLang;
                  select.dispatchEvent(
                    new Event("change")
                  );
                }

                setMobileOpen(false);
              }}
              className="mt-3 w-full rounded-xl border border-gray-200 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
            >
              {language === "en"
                ? "मराठी मध्ये पहा"
                : "View in English"}
            </button>

          </div>
        </div>
      )}

    </header>
  );
}
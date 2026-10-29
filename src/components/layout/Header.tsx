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

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleLanguage = () => {
    const nextLanguage = language === "en" ? "mr" : "en";
    setLanguage(nextLanguage);
    const select = document.querySelector<HTMLSelectElement>(".goog-te-combo");
    if (select) {
      select.value = nextLanguage;
      select.dispatchEvent(new Event("change", { bubbles: true }));
    }
  };

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

      <div className="hidden xl:block">
        <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 xl:px-8 2xl:px-10">
          <div className="grid h-[88px] grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-5 2xl:gap-8">

            {/* Logo */}

            <Link
              href="/"
              className="flex items-center gap-3 shrink-0"
            >
              <div className="relative h-14 w-14 shrink-0 2xl:h-16 2xl:w-16">
                <Image
                  src="/images/logo.jpeg"
                  alt="Ashwini Neuro Care Logo"
                  fill
                  priority
                  sizes="(min-width: 1536px) 64px, 56px"
                  className="object-contain"
                />
              </div>

              <div className="flex flex-col leading-none">
                <p className="whitespace-nowrap text-xl font-bold tracking-tight text-red-600 2xl:text-2xl">
                  Ashwini Neuro Care
                </p>

                <span className="mt-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-teal-800 2xl:text-xs">
                  Latur, Maharashtra
                </span>
              </div>
            </Link>

            {/* Navigation */}

            <nav className="flex min-w-0 items-center justify-center gap-0.5 2xl:gap-1">
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
                      "flex items-center gap-1 whitespace-nowrap rounded-lg px-2 py-2.5 text-[13px] font-medium transition-colors 2xl:px-3 2xl:text-sm",
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
                      <div className="absolute left-0 top-full z-50 w-60 pt-2">
                        <div className="rounded-xl border border-gray-100 bg-white py-2 shadow-lg">
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
                      </div>
                    )}
                </div>
              ))}
            </nav>

            {/* Right Side */}

            <div className="flex shrink-0 items-center gap-2.5">

              <Link
                href="/appointment"
                className="flex h-11 shrink-0 items-center gap-2 whitespace-nowrap rounded-xl bg-teal-700 px-4 text-xs font-semibold text-white shadow-sm transition-colors hover:bg-teal-800 2xl:px-5 2xl:text-sm"
              >
                <Calendar className="w-4 h-4" />
                Appointment Enquiry
              </Link>

              <button type="button" onClick={toggleLanguage} aria-label={language === "en" ? "View in Marathi" : "View in English"} className="w-11 h-11 flex items-center justify-center rounded-xl border border-gray-200 bg-white hover:bg-teal-50 hover:border-teal-300 font-bold shadow-sm">
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

      <div className="xl:hidden">
        <div className="mx-auto flex h-[72px] max-w-[1600px] items-center justify-between gap-3 px-4 sm:h-20 sm:px-6">

          {/* Logo */}

          <Link
            href="/"
            className="flex items-center gap-2 flex-1 min-w-0"
          >
            <div className="relative h-11 w-11 shrink-0 sm:h-14 sm:w-14">
              <Image
                src="/images/logo.jpeg"
                alt="Ashwini Neuro Care"
                fill
                priority
                sizes="(min-width: 640px) 56px, 44px"
                className="object-contain"
              />
            </div>

            <div className="min-w-0 overflow-hidden">

              <p className="truncate text-red-600 font-bold text-base">
                Ashwini Neuro Care
              </p>

              <p className="truncate text-[11px] text-teal-600 font-semibold uppercase">
                Latur, Maharashtra
              </p>

            </div>
          </Link>

          {/* Language */}

          <button
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-200 text-sm font-bold"
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
        <div className="xl:hidden max-h-[calc(100dvh-5rem)] overflow-y-auto border-t border-gray-100 bg-white shadow-lg">
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

            {/* Appointment Enquiry */}

            <Link
              href="/appointment"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-2 w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 rounded-xl transition-colors"
            >
              <Calendar className="w-4 h-4" />
              Appointment Enquiry
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
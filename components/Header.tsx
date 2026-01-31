"use client";

import { useState, useEffect, useRef } from "react";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import LanguageSwitcher from "./LanguageSwitcher";
import { Dictionary } from "@/lib/i18n/types";
import { Locale } from "@/lib/i18n/config";

interface HeaderProps {
  dict: Dictionary;
  locale: Locale;
}

export default function Header({ dict, locale }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { label: dict.nav.about, href: `/${locale}/about` },
    { label: dict.nav.howItWorks, href: `/${locale}/#steps` },
    { label: dict.nav.faq, href: `/${locale}/#faq` },
    { label: dict.nav.contact, href: `/${locale}/contact` },
  ];

  const carTypes = [
    { label: dict.filter.all, type: "all" },
    { label: dict.filter.sedan, type: "Sedan" },
    { label: dict.filter.suv, type: "SUV" },
    { label: dict.filter.hatchback, type: "Hatchback" },
    { label: dict.filter.coupe, type: "Coupe" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 animate-on-load animate-fade-in ${
        mobileOpen ? "bg-[#0C1220]" : isScrolled ? "bg-white shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex gap-12">
            <Link
              href={`/${locale}`}
              className="cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              role="button"
              tabIndex={0}
              onKeyDown={(e) =>
                e.key === "Enter" &&
                window.scrollTo({ top: 0, behavior: "smooth" })
              }
            >
              <Image
                src={isScrolled && !mobileOpen ? "/logo.png" : "/white-logo.png"}
                alt="W.Rent Logo"
                width={110}
                height={40}
                priority
              />
            </Link>

            <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
              {/* Cars Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className={`flex items-center gap-1 transition-colors hover:text-[#E8630A] ${
                    isScrolled ? "text-gray-600" : "text-white/80"
                  }`}
                >
                  {dict.nav.fleet}
                  <ChevronDown size={16} className={`transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
                </button>

                {dropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-xl border border-gray-100 py-2 z-50">
                    {carTypes.map((type) => (
                      <Link
                        key={type.type}
                        href={`/${locale}/fleet?type=${type.type}`}
                        onClick={() => setDropdownOpen(false)}
                        className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-[#E8630A]/8 hover:text-[#E8630A] transition-colors"
                      >
                        {type.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Other Nav Links */}
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`transition-colors hover:text-[#E8630A] ${
                    isScrolled ? "text-gray-600" : "text-white/80"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="hidden lg:flex items-center gap-5">
            <LanguageSwitcher currentLocale={locale} />
            <a href={`tel:${dict.hero.phone}`} className="bg-[#E8630A] text-white flex items-center gap-2 px-8 py-3 text-sm font-semibold hover:bg-[#D4570A] transition-colors">
              <Phone size={15} />
              <span>{dict.hero.phone}</span>
            </a>
          </div>

          <button
            className="lg:hidden transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? (
              <X size={24} className="text-white" />
            ) : (
              <Menu size={24} className={isScrolled ? "text-gray-800" : "text-white"} />
            )}
          </button>
        </div>
      </div>

      {/* Full Screen Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-16 bg-[#0C1220] z-40 flex flex-col">
          <div className="flex-1 overflow-y-auto px-4 py-6">
            <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
              {/* Language Switcher in Mobile */}
              <div className="mb-4 px-3">
                <LanguageSwitcher currentLocale={locale} />
              </div>

              {/* Cars Section */}
              <div className="mb-2">
                <p className="text-white/40 text-xs font-semibold uppercase tracking-wider px-3 py-2">
                  {dict.nav.fleet}
                </p>
                {carTypes.map((type) => (
                  <Link
                    key={type.type}
                    href={`/${locale}/fleet?type=${type.type}`}
                    onClick={() => setMobileOpen(false)}
                    className="text-white/90 hover:text-white py-2 px-3 pl-6 hover:bg-white/5 text-sm font-medium transition-colors block"
                  >
                    {type.label}
                  </Link>
                ))}
              </div>

              {/* Other Nav Links */}
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-white/90 hover:text-white py-2 px-3 hover:bg-white/5 text-sm font-medium transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Bottom Call Button */}
          <div className="p-4 border-t border-white/10">
            <a
              href={`tel:${dict.hero.phone}`}
              className="bg-[#E8630A] text-white flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold hover:bg-[#D4570A] transition-colors w-full"
            >
              <Phone size={18} />
              <span>{dict.hero.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

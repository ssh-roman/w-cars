"use client";

import { useState, useEffect, useRef } from "react";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Cum arată etapele?", href: "/#steps" },
  { label: "Răspunsuri", href: "/#faq" },
  { label: "Parteneri", href: "/#partners" },
  { label: "Contacte", href: "/contact" },
];

const carTypes = [
  { label: "Toate mașinile", type: "all" },
  { label: "Sedan", type: "Sedan" },
  { label: "SUV", type: "SUV" },
  { label: "Hatchback", type: "Hatchback" },
  { label: "Coupe", type: "Coupe" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        mobileOpen ? "bg-[#1B4D3E]" : isScrolled ? "bg-white shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex gap-12">
            <Link
              href="/"
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
              {/* Mașini Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className={`flex items-center gap-1 transition-colors hover:text-[#43cc8e] ${
                    isScrolled ? "text-gray-600" : "text-white/80"
                  }`}
                >
                  Mașini
                  <ChevronDown size={16} className={`transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
                </button>

                {dropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50">
                    {carTypes.map((type) => (
                      <Link
                        key={type.type}
                        href={`/fleet?type=${type.type}`}
                        onClick={() => setDropdownOpen(false)}
                        className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-[#228B5B]/10 hover:text-[#228B5B] transition-colors"
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
                  className={`transition-colors hover:text-[#43cc8e] ${
                    isScrolled ? "text-gray-600" : "text-white/80"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="hidden lg:flex items-center gap-5">
            <a href="tel:+3731234567" className="bg-[#228B5B] text-white flex items-center gap-2 px-8 py-3 text-sm font-semibold hover:bg-[#1B7048] transition-colors">
              <Phone size={15} />
              <span>+373 12 34 567</span>
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
        <div className="lg:hidden fixed inset-0 top-16 bg-[#1B4D3E] z-40 flex flex-col">
          <div className="flex-1 overflow-y-auto px-4 py-6">
            <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
              {/* Mașini Section */}
              <div className="mb-2">
                <p className="text-white/60 text-xs font-semibold uppercase tracking-wider px-3 py-2">
                  Mașini
                </p>
                {carTypes.map((type) => (
                  <Link
                    key={type.type}
                    href={`/fleet?type=${type.type}`}
                    onClick={() => setMobileOpen(false)}
                    className="text-white/90 hover:text-white py-2 px-3 pl-6 hover:bg-white/10 text-sm font-medium transition-colors block"
                  >
                    {type.label}
                  </Link>
                ))}
              </div>

              {/* Other Nav Links */}
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(link.href);
                  }}
                  className="text-white/90 hover:text-white py-2 px-3 hover:bg-white/10 text-sm font-medium transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Bottom Call Button */}
          <div className="p-4 border-t border-white/20">
            <a
              href="tel:+3731234567"
              className="bg-[#228B5B] text-white flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold hover:bg-[#1B7048] transition-colors w-full"
            >
              <Phone size={18} />
              <span>+373 12 34 567</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

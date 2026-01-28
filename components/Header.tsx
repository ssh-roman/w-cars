"use client";

import { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Mașini", href: "#cars" },
  { label: "Cum arată etapele?", href: "#steps" },
  { label: "Răspunsuri", href: "#faq" },
  { label: "Parteneri", href: "#partners" },
  { label: "Contacte", href: "#contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <span
            className={`text-xl lg:text-2xl font-bold tracking-tight cursor-pointer transition-colors ${
              isScrolled ? "text-[#0A1F4D]" : "text-white"
            }`}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            role="button"
            tabIndex={0}
            onKeyDown={(e) =>
              e.key === "Enter" &&
              window.scrollTo({ top: 0, behavior: "smooth" })
            }
          >
            W.Rent
          </span>

          <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(link.href);
                }}
                className={`text-sm font-medium transition-colors hover:text-[#0D28EF] ${
                  isScrolled ? "text-gray-600" : "text-white/80"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-5">
            <a
              href="tel:+37368585404"
              className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                isScrolled ? "text-gray-700" : "text-white"
              }`}
            >
              <Phone size={15} />
              <span>+373 68 585 404</span>
            </a>
            <button className="bg-[#0D28EF] text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#0b20c4] transition-colors">
              Înregistrare
            </button>
          </div>

          <button
            className="lg:hidden transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? (
              <X size={24} className={isScrolled ? "text-gray-800" : "text-white"} />
            ) : (
              <Menu size={24} className={isScrolled ? "text-gray-800" : "text-white"} />
            )}
          </button>
        </div>

        {mobileOpen && (
          <div className="lg:hidden bg-[#0A1F4D] rounded-b-2xl px-4 pb-6 pt-2 shadow-lg">
            <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(link.href);
                  }}
                  className="text-white/90 hover:text-white py-2 px-3 rounded-lg hover:bg-white/10 text-sm font-medium transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="mt-4 pt-4 border-t border-white/20 flex flex-col gap-3">
              <a
                href="tel:+37368585404"
                className="flex items-center gap-2 text-white/80 text-sm"
              >
                <Phone size={15} />
                +373 68 585 404
              </a>
              <button className="bg-[#0D28EF] text-white w-full px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[#0b20c4] transition-colors">
                Înregistrare
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

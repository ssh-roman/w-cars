import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Globe,
} from "lucide-react";

const companyLinks = [
  { label: "Despre noi", href: "/despre-noi" },
  { label: "Mașinile", href: "/fleet" },
  { label: "Contacte", href: "/contact" },
];

const clientLinks = [
  { label: "Cum funcționează", href: "/#steps" },
  { label: "Întrebări", href: "/#faq" },
  { label: "Termeni și Condiții", href: "/termeni" },
  { label: "Confidențialitate", href: "/confidentialitate" },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#0C1220] text-white">
      {/* Main Footer Grid */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">WRent</h3>
            <p className="text-white/40 text-sm leading-relaxed mb-6">
              Serviciul de închiriere auto de top în Moldova. Calitate,
              profesionalism și prețuri avantajoase pentru orice nevoie.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 bg-white/5 hover:bg-[#E8630A]/20 hover:text-[#E8630A] flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-white/5 hover:bg-[#E8630A]/20 hover:text-[#E8630A] flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-white/5 hover:bg-[#E8630A]/20 hover:text-[#E8630A] flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={16} />
              </a>
            </div>
          </div>

          {/* Companie */}
          <div>
            <h4 className="font-semibold text-base mb-4">Companie</h4>
            <ul className="flex flex-col gap-2.5">
              {companyLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-white/40 hover:text-[#E8630A] text-sm transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Clienți */}
          <div>
            <h4 className="font-semibold text-base mb-4">Clienți</h4>
            <ul className="flex flex-col gap-2.5">
              {clientLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-white/40 hover:text-[#E8630A] text-sm transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacte */}
          <div>
            <h4 className="font-semibold text-base mb-4">Contacte</h4>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-2.5">
                <Phone size={15} className="text-[#E8630A]/50 mt-0.5 flex-shrink-0" />
                <a
                  href="tel:+37368585404"
                  className="text-white/40 hover:text-white text-sm transition-colors"
                >
                  +37368585404
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail size={15} className="text-[#E8630A]/50 mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:rentinfo@gmail.com"
                  className="text-white/40 hover:text-white text-sm transition-colors"
                >
                  rentinfo@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={15} className="text-[#E8630A]/50 mt-0.5 flex-shrink-0" />
                <span className="text-white/40 text-sm">
                  Mun. Chișinău, MD-2001
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail size={15} className="text-[#E8630A]/50 mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:Office@auto.md"
                  className="text-white/40 hover:text-white text-sm transition-colors"
                >
                  Office@auto.md
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/25 text-xs">
              © 2025 W.Rent. Toate drepturile rezervate.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="/confidentialitate"
                className="text-white/25 hover:text-white/50 text-xs transition-colors"
              >
                Politica de Cookies
              </Link>
              <span className="text-white/10">|</span>
              <Link
                href="/termeni"
                className="text-white/25 hover:text-white/50 text-xs transition-colors"
              >
                Termeni și Condiții
              </Link>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex gap-2">
                <span className="bg-white/5 text-white/50 text-xs font-bold px-2.5 py-0.5">
                  VISA
                </span>
                <span className="bg-white/5 text-white/50 text-xs font-bold px-2 py-0.5">
                  MC
                </span>
              </div>
              <div className="flex items-center gap-1 text-white/25 text-xs">
                <Globe size={12} />
                Moldova
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

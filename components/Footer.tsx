import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Globe,
} from "lucide-react";

const companyLinks = ["Despre noi", "Serviciile", "Mașinile", "Recenzii", "Contacte"];
const clientLinks = ["Cum funcționează", "Întrebări", "Agenții", "Contacte"];

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#0A1F4D] text-white">
      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">AutoRent</h3>
            <p className="text-white/55 text-sm leading-relaxed mb-6">
              Serviciul de închiriere auto de top în Moldova. Calitate,
              profesionalism și prețuri avantajoase pentru orice nevoie.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
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
                <li key={item}>
                  <a
                    href="#"
                    className="text-white/55 hover:text-white text-sm transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Clienți */}
          <div>
            <h4 className="font-semibold text-base mb-4">Clienți</h4>
            <ul className="flex flex-col gap-2.5">
              {clientLinks.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-white/55 hover:text-white text-sm transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacte */}
          <div>
            <h4 className="font-semibold text-base mb-4">Contacte</h4>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-2.5">
                <Phone size={15} className="text-white/35 mt-0.5 flex-shrink-0" />
                <a
                  href="tel:+37368585404"
                  className="text-white/55 hover:text-white text-sm transition-colors"
                >
                  +37368585404
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail size={15} className="text-white/35 mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:rentinfo@gmail.com"
                  className="text-white/55 hover:text-white text-sm transition-colors"
                >
                  rentinfo@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={15} className="text-white/35 mt-0.5 flex-shrink-0" />
                <span className="text-white/55 text-sm">
                  Mun. Chișinău, MD-2001
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail size={15} className="text-white/35 mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:Office@auto.md"
                  className="text-white/55 hover:text-white text-sm transition-colors"
                >
                  Office@auto.md
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-xs">
              © 2025 AutoRent. Toate drepturile rezervate.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="text-white/40 hover:text-white/70 text-xs transition-colors"
              >
                Politica de Cookies
              </a>
              <span className="text-white/20">|</span>
              <a
                href="#"
                className="text-white/40 hover:text-white/70 text-xs transition-colors"
              >
                Termeni și Condiții
              </a>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex gap-2">
                <span className="bg-white/10 text-white text-xs font-bold px-2.5 py-0.5 rounded">
                  VISA
                </span>
                <span className="bg-white/10 text-white text-xs font-bold px-2 py-0.5 rounded">
                  MC
                </span>
              </div>
              <div className="flex items-center gap-1 text-white/40 text-xs">
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

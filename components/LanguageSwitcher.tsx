"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Globe } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { locales, Locale } from "@/lib/i18n/config";

const languageNames: Record<Locale, string> = {
  ro: "Română",
  en: "English",
  ru: "Русский",
};

const languageFlags: Record<Locale, string> = {
  ro: "🇲🇩",
  en: "🇬🇧",
  ru: "🇷🇺",
};

export default function LanguageSwitcher({ currentLocale }: { currentLocale: Locale }) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Get the path without the locale prefix
  const getPathWithoutLocale = () => {
    const segments = pathname.split("/");
    if (segments[1] && locales.includes(segments[1] as Locale)) {
      return "/" + segments.slice(2).join("/");
    }
    return pathname;
  };

  const pathWithoutLocale = getPathWithoutLocale();

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        aria-label="Change language"
      >
        <Globe size={20} className="text-gray-700 dark:text-gray-300" />
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {languageNames[currentLocale]}
        </span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-900 rounded-md shadow-lg border border-gray-200 dark:border-gray-700 py-1 z-50">
          {locales.map((locale) => (
            <Link
              key={locale}
              href={`/${locale}${pathWithoutLocale}`}
              onClick={() => setIsOpen(false)}
              className={`flex items-center gap-3 px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ${
                locale === currentLocale
                  ? "bg-gray-50 dark:bg-gray-800 font-semibold"
                  : ""
              }`}
            >
              {/* <span className="text-lg">{languageFlags[locale]}</span> */}
              <span className="text-gray-700 dark:text-gray-300">
                {languageNames[locale]}
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

import { locales, Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "../globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params as { locale: Locale };

  const titles: Record<Locale, string> = {
    ro: "W.Rent - Chirie auto Chișinău | Închiriere mașini ieftine",
    en: "W.Rent - Car Rental Chisinau | Cheap Car Hire",
    ru: "W.Rent - Аренда авто Кишинёв | Прокат автомобилей",
  };

  const descriptions: Record<Locale, string> = {
    ro: "Închiriați mașini în Chișinău de la 23 €/zi. Prețuri avantajoase, fără garanție, livrare rapidă. Peste 100 mașini disponibile.",
    en: "Rent cars in Chisinau from €23/day. Great prices, no deposit, fast delivery. Over 100 cars available.",
    ru: "Аренда автомобилей в Кишинёве от 23 €/день. Выгодные цены, без залога, быстрая доставка. Более 100 автомобилей.",
  };

  return {
    title: titles[locale],
    description: descriptions[locale],
    keywords: [
      "chirie auto",
      "închiriere mașini Chișinău",
      "rent a car Moldova",
      "W.Rent",
      "car rental",
      "аренда авто",
    ],
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params as { locale: Locale };

  // Validate locale
  if (!locales.includes(locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={`${outfit.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}

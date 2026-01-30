import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "W.Rent - Chirie auto Chișinău | Închiriere mașini ieftine",
  description:
    "Închiriați mașini în Chișinău de la 23 €/zi. Prețuri avantajoase, fără garanție, livrare rapidă. Peste 100 mașini disponibile.",
  keywords: [
    "chirie auto",
    "închiriere mașini Chișinău",
    "rent a car Moldova",
    "W.Rent",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro">
      <body className={`${outfit.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}

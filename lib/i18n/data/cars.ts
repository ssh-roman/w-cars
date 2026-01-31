import type { Locale } from "../config";

export interface LocalizedCarData {
  transmissions: Record<string, string>;
  fuelTypes: Record<string, string>;
  categories: Record<string, string>;
}

export function getCarsData(locale: Locale): LocalizedCarData {
  const data: Record<Locale, LocalizedCarData> = {
    ro: {
      transmissions: {
        Manual: "Manual",
        Automat: "Automat",
      },
      fuelTypes: {
        Benzină: "Benzină",
        Diesel: "Diesel",
        Electric: "Electric",
        Hibrid: "Hibrid",
      },
      categories: {
        Sedan: "Sedan",
        SUV: "SUV",
        Crossover: "Crossover",
        Hatchback: "Hatchback",
        Coupe: "Coupe",
      },
    },
    en: {
      transmissions: {
        Manual: "Manual",
        Automat: "Automatic",
      },
      fuelTypes: {
        Benzină: "Petrol",
        Diesel: "Diesel",
        Electric: "Electric",
        Hibrid: "Hybrid",
      },
      categories: {
        Sedan: "Sedan",
        SUV: "SUV",
        Crossover: "Crossover",
        Hatchback: "Hatchback",
        Coupe: "Coupe",
      },
    },
    ru: {
      transmissions: {
        Manual: "Механика",
        Automat: "Автомат",
      },
      fuelTypes: {
        Benzină: "Бензин",
        Diesel: "Дизель",
        Electric: "Электро",
        Hibrid: "Гибрид",
      },
      categories: {
        Sedan: "Седан",
        SUV: "Внедорожник",
        Crossover: "Кроссовер",
        Hatchback: "Хэтчбек",
        Coupe: "Купе",
      },
    },
  };

  return data[locale];
}

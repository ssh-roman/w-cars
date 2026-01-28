export interface Car {
  id: string;
  name: string;
  price: number;
  transmission: "Manual" | "Automat";
  seats: number;
  fuel: "Diesel" | "Benzină" | "Electric" | "Hibrid";
  hasNoDeposit?: boolean;
  category: "Sedan" | "SUV" | "Hatchback" | "Coupe";
  gradientFrom: string;
  gradientTo: string;
}

export interface Testimonial {
  id: string;
  title: string;
  description: string;
  author: string;
  iconType: "price" | "star" | "shield" | "clock";
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

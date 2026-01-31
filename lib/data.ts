import type { Car, Testimonial, FAQItem } from "./types";

export const cars: Car[] = [
  {
    id: "1",
    name: "Volkswagen Golf",
    price: 40,
    transmission: "Manual",
    seats: 5,
    fuel: "Benzină",
    hasNoDeposit: true,
    category: "Sedan",
    gradientFrom: "#3b82f6",
    gradientTo: "#4f46e5",
    image: "https://autorent.md/storage/carimage/62/image-1752588079-tlrtztru6i.webp",
    images: [
      "https://autorent.md/storage/carimage/62/image-1752588079-tlrtztru6i.webp",
      "https://autorent.md/storage/carimage/62/image-1752588083-3uaezsdnuv.webp",
      "https://autorent.md/storage/carimage/62/image-1752588079-tlrtztru6i.webp",
    ],
  },
  {
    id: "2",
    name: "BMW 5 Series",
    price: 40,
    transmission: "Automat",
    seats: 5,
    fuel: "Benzină",
    category: "Sedan",
    gradientFrom: "#475569",
    gradientTo: "#1e3a5f",
    image: "https://autorent.md/storage/carimage/116/image-1752584614-h5rpeylekj.webp",
    images: [
      "https://autorent.md/storage/carimage/116/image-1752584614-h5rpeylekj.webp",
      "https://autorent.md/storage/carimage/116/image-1752584614-h5rpeylekj.webp",
      "https://autorent.md/storage/carimage/116/image-1752584614-h5rpeylekj.webp",
    ],
  },
  {
    id: "3",
    name: "Mercedes-Benz E-Class",
    price: 55,
    transmission: "Automat",
    seats: 5,
    fuel: "Diesel",
    category: "Sedan",
    gradientFrom: "#374151",
    gradientTo: "#1f2937",
    image: "https://autorent.md/storage/carimage/67/image-1752589371-3eywoarx5n.webp",
    images: [
      "https://autorent.md/storage/carimage/67/image-1752589371-3eywoarx5n.webp",
      "https://autorent.md/storage/carimage/67/image-1752589371-3eywoarx5n.webp",
      "https://autorent.md/storage/carimage/67/image-1752589371-3eywoarx5n.webp",
    ],
  },
  {
    id: "4",
    name: "Audi Q5",
    price: 31,
    transmission: "Automat",
    seats: 5,
    fuel: "Diesel",
    hasNoDeposit: true,
    category: "SUV",
    gradientFrom: "#10b981",
    gradientTo: "#047857",
    image: "https://autorent.md/storage/carimage/22/image-1752588899-dpeyqgip4r.webp",
    images: [
      "https://autorent.md/storage/carimage/22/image-1752588899-dpeyqgip4r.webp",
      "https://autorent.md/storage/carimage/22/image-1752588899-dpeyqgip4r.webp",
      "https://autorent.md/storage/carimage/22/image-1752588899-dpeyqgip4r.webp",
    ],
  },
  {
    id: "5",
    name: "BMW X5",
    price: 40,
    transmission: "Automat",
    seats: 5,
    fuel: "Diesel",
    category: "SUV",
    gradientFrom: "#14b8a6",
    gradientTo: "#0d9488",
    image: "https://autorent.md/storage/carimage/17/image-1752654641-zvcn335sup.webp",
    images: [
      "https://autorent.md/storage/carimage/17/image-1752654641-zvcn335sup.webp",
      "https://autorent.md/storage/carimage/17/image-1752654641-zvcn335sup.webp",
      "https://autorent.md/storage/carimage/17/image-1752654641-zvcn335sup.webp",
    ],
  },
  {
    id: "6",
    name: "Skoda Kodiaq",
    price: 78,
    transmission: "Automat",
    seats: 7,
    fuel: "Diesel",
    category: "SUV",
    gradientFrom: "#16a34a",
    gradientTo: "#15803d",
    image: "https://autorent.md/storage/carimage/37/image-1752590251-msfkzolamt.webp",
    images: [
      "https://autorent.md/storage/carimage/37/image-1752590251-msfkzolamt.webp",
      "https://autorent.md/storage/carimage/37/image-1752590251-msfkzolamt.webp",
      "https://autorent.md/storage/carimage/37/image-1752590251-msfkzolamt.webp",
    ],
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    title: "Mașini la cele mai bune prețuri",
    description:
      "Prețuri competitive și opțiuni diverse pentru orice buget și nevoie de deplasare.",
    author: "Alexandru M.",
    iconType: "price",
  },
  {
    id: "2",
    title: "Folosit și recomandat",
    description:
      "Serviciu profesional, mașini curate și în stare excelentă. Revenind cu plăcere.",
    author: "Maria T.",
    iconType: "star",
  },
  {
    id: "3",
    title: "Anonimitate garantată",
    description:
      "Procedura de închiriere este rapidă, simplă și asigură confidențialitatea datelor.",
    author: "Victor S.",
    iconType: "shield",
  },
  {
    id: "4",
    title: "Disponibil 24/7",
    description:
      "Suport client non-stop, livrare la adresa dumneavoastră oricând aveți nevoie.",
    author: "Elena R.",
    iconType: "clock",
  },
];

export const faqItems: FAQItem[] = [
  {
    id: "1",
    question:
      "Ce documente sunt necesare pentru a închirie un autoturism?",
    answer:
      "Avete nevoie de un permis de conducere valid (cel puțin 1 an), un act de identitate sau paport și o adresă de contact validă. Documentele vor fi verificate în momentul ridicării vehiculului.",
  },
  {
    id: "2",
    question:
      "Cu cât timp în advance trebuie să cer un autoturism?",
    answer:
      "Recomandam să faceți rezervarea cel puțin cu 24 de ore în avans pentru a asigura disponibilitatea modelului dorit. În perioadele de vârf, este recomandat cel puțin 48-72 de ore.",
  },
  {
    id: "3",
    question: "Ce este inclus în prețul de închiriere?",
    answer:
      "Prețul include asigurarea de răspundere civilă, kilometrii illimiti în Moldova și un nivel plein de combustibil. Asigurarea suplimentară și costurile de combustibil sunt separate.",
  },
  {
    id: "4",
    question: "Pot extinde perioada de închiriere?",
    answer:
      "Da, puteți extinde închirierea contactând echipa noastră cel puțin cu 24 de ore înainte de data planificată de retur, sub rezerva disponibilității vehiculului.",
  },
  {
    id: "5",
    question: "Este disponibil serviciul de livrare la adresă?",
    answer:
      "Da, oferăm serviciu de livrare în interiorul municipiului Chișinău. Pentru zonele situate în afara municipiului, pot aplica taxe suplimentare în funcție de distanță.",
  },
];

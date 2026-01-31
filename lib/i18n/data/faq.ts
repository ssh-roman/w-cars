import type { Locale } from "../config";
import type { FAQItem } from "@/lib/types";

export function getFAQItems(locale: Locale): FAQItem[] {
  const faqData: Record<Locale, FAQItem[]> = {
    ro: [
      {
        id: "1",
        question: "Ce documente sunt necesare pentru a închirieri un autoturism?",
        answer:
          "Aveți nevoie de un permis de conducere valid (cel puțin 1 an), un act de identitate sau pașaport și o adresă de contact validă. Documentele vor fi verificate în momentul ridicării vehiculului.",
      },
      {
        id: "2",
        question: "Cu cât timp în avans trebuie să rezerv un autoturism?",
        answer:
          "Recomandăm să faceți rezervarea cel puțin cu 24 de ore în avans pentru a asigura disponibilitatea modelului dorit. În perioadele de vârf, este recomandat cel puțin 48-72 de ore.",
      },
      {
        id: "3",
        question: "Ce este inclus în prețul de închiriere?",
        answer:
          "Prețul include asigurarea de răspundere civilă, kilometri nelimitați în Moldova și un rezervor plin de combustibil. Asigurarea suplimentară și costurile de combustibil sunt separate.",
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
          "Da, oferim serviciu de livrare în interiorul municipiului Chișinău. Pentru zonele situate în afara municipiului, pot aplica taxe suplimentare în funcție de distanță.",
      },
    ],
    en: [
      {
        id: "1",
        question: "What documents are required to rent a car?",
        answer:
          "You need a valid driver's license (at least 1 year), an ID card or passport, and a valid contact address. Documents will be verified when picking up the vehicle.",
      },
      {
        id: "2",
        question: "How far in advance should I book a car?",
        answer:
          "We recommend making a reservation at least 24 hours in advance to ensure availability of your desired model. During peak periods, 48-72 hours is recommended.",
      },
      {
        id: "3",
        question: "What is included in the rental price?",
        answer:
          "The price includes civil liability insurance, unlimited kilometers in Moldova, and a full tank of fuel. Additional insurance and fuel costs are separate.",
      },
      {
        id: "4",
        question: "Can I extend the rental period?",
        answer:
          "Yes, you can extend the rental by contacting our team at least 24 hours before the planned return date, subject to vehicle availability.",
      },
      {
        id: "5",
        question: "Is home delivery available?",
        answer:
          "Yes, we offer delivery service within Chisinau municipality. For areas outside the municipality, additional fees may apply depending on distance.",
      },
    ],
    ru: [
      {
        id: "1",
        question: "Какие документы нужны для аренды автомобиля?",
        answer:
          "Вам понадобятся действительные водительские права (стаж не менее 1 года), удостоверение личности или паспорт и действительный контактный адрес. Документы будут проверены при получении автомобиля.",
      },
      {
        id: "2",
        question: "За сколько времени нужно бронировать автомобиль?",
        answer:
          "Рекомендуем делать бронирование минимум за 24 часа для гарантии наличия желаемой модели. В пиковые периоды рекомендуется 48-72 часа.",
      },
      {
        id: "3",
        question: "Что включено в стоимость аренды?",
        answer:
          "Цена включает страхование гражданской ответственности, неограниченный пробег по Молдове и полный бак топлива. Дополнительная страховка и расходы на топливо оплачиваются отдельно.",
      },
      {
        id: "4",
        question: "Можно ли продлить срок аренды?",
        answer:
          "Да, вы можете продлить аренду, связавшись с нашей командой не менее чем за 24 часа до запланированной даты возврата, при условии наличия автомобиля.",
      },
      {
        id: "5",
        question: "Доступна ли доставка по адресу?",
        answer:
          "Да, мы предлагаем услугу доставки в пределах муниципия Кишинэу. Для районов за пределами муниципия могут применяться дополнительные сборы в зависимости от расстояния.",
      },
    ],
  };

  return faqData[locale];
}

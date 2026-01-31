import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FilterBar from "@/components/FilterBar";
import CarGrid from "@/components/CarGrid";
import ValueProposition from "@/components/ValueProposition";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import FloatingButton from "@/components/FloatingButton";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { Locale } from "@/lib/i18n/config";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <main className="min-h-screen bg-[#F8F8F6]">
      <Header dict={dict} locale={locale} />
      <Hero dict={dict} locale={locale} />
      <FilterBar dict={dict} locale={locale} />
      <CarGrid dict={dict} locale={locale} />
      <ValueProposition dict={dict} />
      <FAQ dict={dict} locale={locale} />
      <ContactForm dict={dict} />
      <Footer dict={dict} locale={locale} />
      {/* <FloatingButton /> */}
    </main>
  );
}
